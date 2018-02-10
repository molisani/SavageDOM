import { AttributeUpdate, Renderer } from "./animation/renderer";
import { Attribute, isAttribute } from "./attribute";
import { BaseAttributes } from "./attributes/base";
import { XMLNS } from "./constants";
import { Context } from "./context";
import { BaseEvents } from "./events";

import { Observable, Subject, Subscription } from "rxjs";
import { EasingFunction } from "./animation/easing";
import { Box } from "./attributes/box";
import { NumberWrapper } from "./attributes/wrappers";
import { randomShortStringId } from "./id";

export type BaseElement = Element<SVGElement, BaseAttributes, BaseEvents>;

export class Element<SVG extends SVGElement, ATTRIBUTES extends BaseAttributes, EVENTS extends BaseEvents> {
  protected _node: SVG;
  protected _style: CSSStyleDeclaration;
  private _dynamicSubscriptions = {} as { [ATTR in keyof ATTRIBUTES]: Subscription };
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
    Renderer.getInstance().queueAttributeUpdate<ATTRIBUTES, keyof ATTRIBUTES, Element<any, ATTRIBUTES, any>>(this, name, val);
  }
  public setAttributes(attrs: Partial<ATTRIBUTES>): void {
    for (const attr in attrs) {
      const val = attrs[attr] as ATTRIBUTES[keyof ATTRIBUTES];
      if (val !== undefined && val !== null) {
        this.setAttribute(attr, val);
      }
    }
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
    return Renderer.getInstance().registerAttributeInterpolation<ATTRIBUTES, Attr, Element<SVG, ATTRIBUTES, EVENTS>>(this, name, attr.interpolate.bind(attr, from), duration, easing);
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
  public getAttribute<Attr extends keyof ATTRIBUTES>(name: Attr): string | null {
    const val = this._node.getAttribute(name) || this._style.getPropertyValue(name);
    return (val === "" || val === "none") ? null : val;
  }
  public copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>);
  public copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>, includeExclude: { [A in keyof ATTRIBUTES]: boolean }, defaultInclude: boolean);
  public copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>, includeExclude?: { [A in keyof ATTRIBUTES]: boolean }, defaultInclude: boolean = true): void {
    const style = {} as ATTRIBUTES;
    const attrs = el._node.attributes;
    if (includeExclude) {
      for (let i = 0; i < attrs.length; ++i) {
        const attr = attrs.item(i).name;
        if (includeExclude[attr as keyof ATTRIBUTES] === true || defaultInclude) {
          style[attr] = el._style.getPropertyValue(attr);
        }
      }
    } else {
      for (let i = 0; i < attrs.length; ++i) {
        const attr = attrs.item(i).name;
        style[attr] = el._style.getPropertyValue(attr);
      }
    }
    this.setAttributes(style);
  }

  public getEvent<Event extends keyof EVENTS>(event: Event): Observable<EVENTS[Event]> {
    return Observable.merge(...event.split("|").map((_) => Observable.fromEvent(this._node, _)));
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
