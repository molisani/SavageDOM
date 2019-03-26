
import { fromEvent, merge, Observable, Subscription } from "rxjs";
import { Renderer } from "./animation/renderer";
import { AnimationTiming } from "./animation/timing";
import { Attribute, isAttribute } from "./attribute";
import { Core_Attributes } from "./attributes/base";
import { Box } from "./attributes/box";
import { NumberWrapper } from "./attributes/wrappers";
import { Context } from "./context";
import { BaseEvents } from "./events";
import { randomShortStringId } from "./id";
import { TagElementMapping } from "./tag-mapping";

export class Element<SVG extends SVGElement, ATTRIBUTES extends Core_Attributes = Core_Attributes, EVENTS extends BaseEvents = BaseEvents> {
  protected readonly _style: CSSStyleDeclaration;
  private _pendingRenders: Promise<number>[] = [];
  private _linkedAttributes: { [Attr in keyof ATTRIBUTES]?: Subscription } = {};
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
      this.setAttributes(attrs);
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
  public renderAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr]): void {
    if (isAttribute(val)) {
      val.set(this._node, name);
    } else if (Array.isArray(val)) {
      this._node.setAttribute(name, val.join("\t"));
    } else {
      this._node.setAttribute(name, String(val));
    }
  }
  public setAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr]): void {
    const render = Renderer.getInstance().queueAttributeUpdate<ATTRIBUTES, keyof ATTRIBUTES, Element<any, ATTRIBUTES, any>>(this, name, val);
    this._pendingRenders.push(render);
  }
  public setAttributes(attrs: Partial<ATTRIBUTES>): void {
    const render = Renderer.getInstance().queueAttributeUpdate<ATTRIBUTES, Element<any, ATTRIBUTES, any>>(this, attrs);
    this._pendingRenders.push(render);
  }
  public animateAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr], timing: AnimationTiming): Promise<number> | undefined {
    let attr: Attribute<any>;
    if (typeof val === "number") {
      attr = new NumberWrapper(val);
    } else if (isAttribute(val)) {
      attr = val;
    } else {
      return;
    }
    const from = attr.get(this._node, name);
    return Renderer.getInstance().registerAttributeInterpolation<ATTRIBUTES, Attr, Element<SVG, ATTRIBUTES, EVENTS>>(this, name, attr.interpolator(from), timing);
  }
  public linkDynamicAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: Observable<ATTRIBUTES[Attr]>): Subscription {
    const subscription = Renderer.getInstance().subscribeAttributeObservable(this, name, val);
    const existingSubscription = this._linkedAttributes[name];
    if (existingSubscription && !existingSubscription.closed) {
      existingSubscription.unsubscribe();
    }
    this._linkedAttributes[name] = subscription;
    return subscription;
  }
  public async flush(): Promise<number> {
    if (this._pendingRenders.length === 0) {
      return performance.now();
    }
    const pending = Promise.all(this._pendingRenders);
    this._pendingRenders = [];
    const renders = await pending;
    return Math.max(...renders);
  }
  public getAttribute<Attr extends keyof ATTRIBUTES>(name: Attr): string | null {
    const val = this._node.getAttribute(name) || this._style.getPropertyValue(name);
    return (val === "" || val === "none") ? null : val;
  }
  public copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>): void;
  public copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>, includeExclude: { [A in keyof ATTRIBUTES]: boolean }, defaultInclude: boolean): void;
  public copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>, includeExclude?: { [A in keyof ATTRIBUTES]: boolean }, defaultInclude: boolean = true): void {
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
    this.setAttributes(style);
  }

  public getEvent<EVENT extends keyof EVENTS>(event: EVENT): Observable<EVENTS[EVENT]> {
    return fromEvent(this._node, event) as Observable<EVENTS[EVENT]>;
  }

  public getEvents(...events: (keyof EVENTS)[]): Observable<Event> {
    return merge(...(events).map((event) => fromEvent(this._node, event)));
  }

  public get boundingBox(): Box {
    const rect = this._node.getBoundingClientRect();
    return new Box(rect.left, rect.top, rect.width, rect.height);
  }
  public add(el: Element<SVGElement> | SVGElement) {
    if (el instanceof SVGElement) {
      this._node.appendChild(el);
    } else {
      el.context = this.context;
      this._node.appendChild(el._node);
    }
  }
  public getChildren(): Element<SVGElement>[] {
    const children = this._node.childNodes;
    const elements: Element<SVGElement>[] = [];
    for (let i = 0; i < children.length; ++i) {
      elements.push(new Element(this.context, children.item(i) as SVGElement));
    }
    return elements;
  }
  public getElementsByClassName(className: string): ReadonlyArray<Element<SVGElement>> {
    const elements = Array.from(this._node.getElementsByClassName(className)) as SVGElement[];
    return elements.map((element) => new Element(this.context, element));
  }
  public getElementsByTagName<TAG extends keyof TagElementMapping>(tagName: TAG): ReadonlyArray<TagElementMapping[TAG]>;
  public getElementsByTagName(tagName: string): ReadonlyArray<Element<SVGElement>> {
    const elements = Array.from(this._node.getElementsByTagName(tagName)) as SVGElement[];
    return elements.map((element) => new Element(this.context, element));
  }
  public clone(deep: boolean = true, id: string = randomShortStringId()): Element<SVG, ATTRIBUTES, EVENTS> {
    const copy = new Element<SVG, ATTRIBUTES, EVENTS>(this.context, this._node.cloneNode(deep) as SVG);
    copy._id = id;
    copy._node.setAttribute("id", copy._id);
    return copy;
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
  protected cloneNode(deep: boolean = true): SVG {
    const clone = this._node.cloneNode(deep) as SVG;
    clone.setAttribute("id", randomShortStringId());
    return clone;
  }
}
