
import { fromEvent, merge, Observable } from "rxjs";
import { EasingFunction } from "./animation/easing";
import { Renderer } from "./animation/renderer";
import { Attribute, isAttribute } from "./attribute";
import { Core_Attributes } from "./attributes/base";
import { Box } from "./attributes/box";
import { NumberWrapper } from "./attributes/wrappers";
import { XMLNS } from "./constants";
import { Context } from "./context";
import { BaseEvents } from "./events";
import { randomShortStringId } from "./id";

export class Element<SVG extends SVGElement, ATTRIBUTES extends Core_Attributes = Core_Attributes, EVENTS extends BaseEvents = BaseEvents> {
  protected readonly _node: SVG;
  protected readonly _style: CSSStyleDeclaration;
  private _pendingRenders: Promise<number>[] = [];
  constructor(context: Context, el: SVG, attrs?: Partial<ATTRIBUTES>);
  constructor(context: Context, name: string, attrs?: Partial<ATTRIBUTES>, id?: string);
  constructor(context: Context, el: string | SVG, attrs?: Partial<ATTRIBUTES>, id?: string);
  constructor(public context: Context, el: string | SVG, attrs?: Partial<ATTRIBUTES>, private _id: string = randomShortStringId()) {
    if (typeof el === "string") {
      this._node = this.context.window.document.createElementNS(XMLNS, el) as SVG;
      this.context.addChild(this._node);
      if (attrs !== undefined) {
        this.setAttributes(attrs);
      }
      this._node.setAttribute("id", this._id);
    } else {
      this._node = el;
      const id = this._node.getAttribute("id");
      if (id !== null) {
        this._id = id;
      } else {
        this._node.setAttribute("id", this._id);
      }
    }
    this._style = this.context.window.getComputedStyle(this._node);
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
  public animateAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr], duration: number, easing: EasingFunction): Promise<number> | undefined {
    let attr: Attribute<any>;
    if (typeof val === "number") {
      attr = new NumberWrapper(val);
    } else if (isAttribute(val)) {
      attr = val;
    } else {
      return;
    }
    const from = attr.get(this._node, name);
    return Renderer.getInstance().registerAttributeInterpolation<ATTRIBUTES, Attr, Element<SVG, ATTRIBUTES, EVENTS>>(this, name, attr.interpolator(from), duration, easing);
  }
  // public animateAttributes<Attr extends keyof ATTRIBUTES>(name: Attr, attrs: Partial<ATTRIBUTES>, duration: number, easing: EasingFunction): Promise<number> | undefined {
  //   const
  //   for (const attr in attrs) {
  //     const val = attrs[attr] as ATTRIBUTES[keyof ATTRIBUTES];
  //     if (val !== undefined && val !== null) {
  //       this.animateAttribute(attr, val, duration, easing);
  //     }
  //   }
  // }
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
  public add(el: Element<SVGElement, any, any> | SVGElement) {
    if (el instanceof SVGElement) {
      this._node.appendChild(el);
    } else {
      this._node.appendChild(el._node);
    }
  }
  public getChildren(): Element<SVGElement, any, any>[] {
    const children = this._node.childNodes;
    const elements: Element<SVGElement, any, any>[] = [];
    for (let i = 0; i < children.length; ++i) {
      elements.push(new Element(this.context, children.item(i) as SVGElement));
    }
    return elements;
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
  protected cloneNode(deep: boolean = true): SVG {
    const clone = this._node.cloneNode(deep) as SVG;
    clone.setAttribute("id", randomShortStringId());
    return clone;
  }
}
