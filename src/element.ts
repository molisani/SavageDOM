
import { fromEvent, merge, Observable, Subscription } from "rxjs";
import { AnimationTiming } from "./animation/timing";
import { Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter } from "./attributes/base";
import { Box } from "./attributes/box";
import { AttributeGetter, AttributeParser } from "./attributes/getter";
import { AttributeInterpolator, AttributeTweenBuilder } from "./attributes/interpolator";
import { AttributeSerializer, AttributeSetter } from "./attributes/setter";
import { Context } from "./context";
import { BaseEvents } from "./events";
import { randomShortStringId } from "./id";
import { TagElementMapping } from "./tag-mapping";

function getAttribute<T>(parser: AttributeParser<T>, element: Element<SVGElement>, name: string): T {
  if (parser.type === "native") {
    const value = element.node.getAttribute(name);
    return parser(value);
  }
  return parser(element, name);
}

function setAttribute<T>(serializer: AttributeSerializer<T>, node: SVGElement, name: string, value: T) {
  if (serializer.type === "manual") {
    serializer(node, name, value);
    return;
  }
  const repr = serializer(value);
  if (serializer.type === "native") {
    node.setAttribute(name, repr);
  } else {
    node.style.setProperty(name, repr);
  }
}

export abstract class AbstractElement<SVG extends SVGElement, ATTRIBUTES extends Core_Attributes = Core_Attributes, EVENTS extends BaseEvents = BaseEvents> {
  protected readonly _style: CSSStyleDeclaration;
  private _pendingRenders: Promise<number>[] = [];
  private _linkedAttributes: { [Attr in keyof ATTRIBUTES]?: Subscription } = {};
  protected abstract _getter: AttributeGetter<ATTRIBUTES>;
  protected abstract _setter: AttributeSetter<ATTRIBUTES>;
  protected abstract _interpolator: AttributeInterpolator<ATTRIBUTES>;
  constructor(public context: Context, protected readonly _node: SVG, attrs?: Partial<ATTRIBUTES>, private _id: string = randomShortStringId()) {
    this.context.ensureChild(this._node);
    const id = this._node.getAttribute("id");
    if (id !== null) {
      this._id = id;
    } else {
      this._node.setAttribute("id", this._id);
    }
    this._style = this.context.window.getComputedStyle(this._node);
    if (attrs) {
      this.renderAttributes(attrs);
    }
  }
  public get id(): string {
    return this._id;
  }
  public get node(): SVG {
    return this._node;
  }
  public toString(): string {
    return `url(#${this._id})`;
  }
  public getAttribute<Attr extends keyof ATTRIBUTES>(name: Attr): ATTRIBUTES[Attr] {
    if (!(name in this._getter)) {
      throw new Error(`No parser found for attribute "${name}"`);
    }
    const parser: AttributeParser<ATTRIBUTES[Attr]> = this._getter[name];
    return getAttribute(parser, this as any, name);
  }
  public setAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr]): void;
  public setAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: string | null, bypass: "native"): void;
  public setAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: string, bypass: "css"): void;
  public setAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr] | string | null, bypass?: "native" | "css"): void {
    if (!(name in this._setter)) {
      throw new Error(`No serializer found for attribute "${name}"`);
    }
    if (bypass) {
      if (bypass === "native") {
        this._node.setAttribute(name, val as string);
      } else {
        this._node.style.setProperty(name, val);
      }
      return;
    }
    const serializer: AttributeSerializer<ATTRIBUTES[Attr]> = this._setter[name];
    setAttribute(serializer, this._node, name, val as ATTRIBUTES[Attr]);
  }
  public renderAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr]): Promise<any> {
    const render = this.context.renderer.queueAttributeUpdate<ATTRIBUTES, keyof ATTRIBUTES, AbstractElement<any, ATTRIBUTES, any>>(this, name, val);
    this._pendingRenders.push(render);
    return render;
  }
  public renderAttributes(attrs: Partial<ATTRIBUTES>): Promise<any> {
    const render = this.context.renderer.queueAttributeUpdate<ATTRIBUTES, AbstractElement<any, ATTRIBUTES, any>>(this, attrs);
    this._pendingRenders.push(render);
    return render;
  }
  public animateAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, to: ATTRIBUTES[Attr], timing: AnimationTiming): Promise<number> | undefined {
    if (!(name in this._interpolator)) {
      throw new Error(`No tween builder found for attribute "${name}"`);
    }
    const tweenBuilder: AttributeTweenBuilder<ATTRIBUTES[Attr]> = this._interpolator[name];
    if (tweenBuilder.bypass) {
      if (!(name in this._setter)) {
        throw new Error();
      }
      const serializer: AttributeSerializer<ATTRIBUTES[Attr]> = this._setter[name];
      if (serializer.type === "manual") {
        throw new Error();
      }
      if (tweenBuilder.type === "native") {
        const from = this._node.getAttribute(name);
        const toRepr = serializer(to);
        const tween = tweenBuilder(from, toRepr);
        return this.context.renderer.registerAttributeInterpolation<ATTRIBUTES, Attr, AbstractElement<SVG, ATTRIBUTES, EVENTS>>(this, name, tween, timing, tweenBuilder.type);
      } else {
        const from = this._node.style.getPropertyValue(name);
        const toRepr = serializer(to);
        const tween = tweenBuilder(from, toRepr);
        return this.context.renderer.registerAttributeInterpolation<ATTRIBUTES, Attr, AbstractElement<SVG, ATTRIBUTES, EVENTS>>(this, name, tween, timing, tweenBuilder.type);
      }
    } else {
      const from = this.getAttribute(name);
      const tween = tweenBuilder(from, to);
      return this.context.renderer.registerAttributeInterpolation<ATTRIBUTES, Attr, AbstractElement<SVG, ATTRIBUTES, EVENTS>>(this, name, tween, timing);
    }
  }
  public linkDynamicAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: Observable<ATTRIBUTES[Attr]>): Subscription {
    const subscription = this.context.renderer.subscribeAttributeObservable(this, name, val);
    const existingSubscription = this._linkedAttributes[name];
    if (existingSubscription && !existingSubscription.closed) {
      existingSubscription.unsubscribe();
    }
    this._linkedAttributes[name] = subscription;
    return subscription;
  }
  public async flush(): Promise<number> {
    if (this._pendingRenders.length === 0) {
      return Date.now();
    }
    const pending = Promise.all(this._pendingRenders);
    this._pendingRenders = [];
    const renders = await pending;
    return Math.max(...renders);
  }
  public copyStyleFrom(el: AbstractElement<SVGElement, ATTRIBUTES, any>): void;
  public copyStyleFrom(el: AbstractElement<SVGElement, ATTRIBUTES, any>, includeExclude: { [A in keyof ATTRIBUTES]: boolean }, defaultInclude: boolean): void;
  public copyStyleFrom(el: AbstractElement<SVGElement, ATTRIBUTES, any>, includeExclude?: { [A in keyof ATTRIBUTES]: boolean }, defaultInclude: boolean = true): void {
    const style = {} as ATTRIBUTES;
    const attrs = el._node.attributes;
    if (includeExclude) {
      for (let i = 0; i < attrs.length; ++i) {
        const attr = attrs.item(i);
        if (attr) {
          const name = attr.name;
          if (includeExclude[name as keyof ATTRIBUTES] === true || defaultInclude) {
            style[name] = el._style.getPropertyValue(name);
          }
        }
      }
    } else {
      for (let i = 0; i < attrs.length; ++i) {
        const attr = attrs.item(i);
        if (attr) {
          const name = attr.name;
          style[name] = el._style.getPropertyValue(name);
        }
      }
    }
    this.renderAttributes(style);
  }

  public getEvent<EVENT extends keyof EVENTS>(event: EVENT): Observable<EVENTS[EVENT]> {
    return fromEvent(this._node, event) as Observable<EVENTS[EVENT]>;
  }

  public getEvents(...events: (keyof EVENTS)[]): Observable<Event> {
    return merge(...(events).map((event) => fromEvent(this._node, event)));
  }

  public get boundingBox(): Box {
    const rect = this._node.getBoundingClientRect();
    return {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }
  public add<CHILD_ATTRIBUTES extends Core_Attributes>(el: AbstractElement<SVGElement, CHILD_ATTRIBUTES> | SVGElement) {
    if (el instanceof SVGElement) {
      this._node.appendChild(el);
    } else {
      el.context = this.context;
      this._node.appendChild(el._node);
    }
  }
  public getChildren(): AbstractElement<SVGElement>[] {
    const children = this._node.childNodes;
    const elements: AbstractElement<SVGElement>[] = [];
    for (let i = 0; i < children.length; ++i) {
      elements.push(new Element(this.context, children.item(i) as SVGElement));
    }
    return elements;
  }
  public getElementsByClassName(className: string): ReadonlyArray<AbstractElement<SVGElement>> {
    const elements = Array.from(this._node.getElementsByClassName(className)) as SVGElement[];
    return elements.map((element) => new Element(this.context, element));
  }
  public getElementsByTagName<TAG extends keyof TagElementMapping>(tagName: TAG): ReadonlyArray<TagElementMapping[TAG]>;
  public getElementsByTagName(tagName: string): ReadonlyArray<AbstractElement<SVGElement>> {
    const elements = Array.from(this._node.getElementsByTagName(tagName)) as SVGElement[];
    return elements.map((element) => new Element(this.context, element));
  }
  public clone(deep: boolean = true, id: string = randomShortStringId()): AbstractElement<SVG, ATTRIBUTES, EVENTS> {
    const copy = new Element<SVG>(this.context, this._node.cloneNode(deep) as SVG);
    copy._id = id;
    copy._node.setAttribute("id", copy._id);
    copy["_getter"] = this._getter;
    return copy as any;
  }
  public destroy() {
    this._node.remove();
  }
  public injectDocument(doc: Document) {
    this.context.injectDocumentDefs(doc);
    if (doc.documentElement) {
      const childElements = Array.from(doc.documentElement.children) as SVGElement[];
      for (const child of childElements) {
        const importedChild = this.context.window.document.importNode(child, true);
        this.add(importedChild);
      }
    }
  }
  protected _setAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr] | string): void {
    this._node.setAttribute(name, String(val));
  }
  protected cloneNode(deep: boolean = true): SVG {
    const clone = this._node.cloneNode(deep) as SVG;
    clone.setAttribute("id", randomShortStringId());
    return clone;
  }
}

export class Element<SVG extends SVGElement> extends AbstractElement<SVG> {
  protected _getter = Core_AttributeGetter;
  protected _setter = Core_AttributeSetter;
  protected _interpolator = Core_AttributeInterpolator;
}
