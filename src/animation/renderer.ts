import { Element } from "../element";
import { BaseEvents } from "../events";

import { Observable, Scheduler, Subject } from "rxjs";
import { Attribute } from "../attribute";
import { randomShortStringId } from "../id";
import { EasingFunction } from "./easing";

export interface TimeResolvable {
  resolve(t: number): void;
}

export interface AttributeUpdate<Attrs, Attr extends keyof Attrs> {
  name: Attr;
  val: Attrs[Attr];
}

export interface ElementUpdateRender<Attrs, E extends Element<any, Attrs, any>> {
  el: E;
  attribute: AttributeUpdate<Attrs, keyof Attrs>;
}

export interface AttributeInterpolation<Attrs, Attr extends keyof Attrs> {
  name: Attr;
  val(t: number): Attrs[Attr];
}

export interface ElementInterpolateRender<Attrs, E extends Element<any, Attrs, any>> extends TimeResolvable {
  el: E;
  attributes: AttributeInterpolation<Attrs, keyof Attrs>[];
  start: number;
  duration: number;
  easing: EasingFunction;
}

export class Renderer {
  public static getInstance(): Renderer {
    return Renderer._instance;
  }
  private static _instance = new Renderer();
  private _animationFrame = Observable.interval(0, Scheduler.animationFrame);
  private _attributeUpdates = new Subject<ElementUpdateRender<any, Element<any, any, any>>>();
  private _attributeInterpolations: { [key: string]: ElementInterpolateRender<any, Element<any, any, any>> } = {};
  constructor() {
    this._attributeUpdates.bufferWhen(() => this._animationFrame).subscribe((updates) => {
      const now = performance.now();
      updates.forEach(({ el, attribute }) => {
        el.renderAttribute(attribute.name, attribute.val);
      });
      Object.keys(this._attributeInterpolations).forEach((key) => {
        const interpolation = this._attributeInterpolations[key];
        const finalRender = now > (interpolation.start + interpolation.duration);
        const t = (finalRender) ? 1 : interpolation.easing((now - interpolation.start) / interpolation.duration);
        interpolation.attributes.forEach((attribute) => {
          const val = attribute.val(t);
          interpolation.el.renderAttribute(attribute.name, val);
        });
        if (finalRender) {
          delete this._attributeInterpolations[key];
          interpolation.resolve(now);
        }
      });
    });
  }
  public queueAttributeUpdate<Attrs, E extends Element<any, Attrs, any>>(el: E, attrs: Attrs): void;
  public queueAttributeUpdate<Attrs, K extends keyof Attrs, E extends Element<any, Attrs, any>>(el: E, attr: K, val: Attrs[K]): void;
  public queueAttributeUpdate<Attrs, K extends keyof Attrs, E extends Element<any, Attrs, any>>(a1: E, a2: K | Attrs, a3?: Attrs[K]): void {
    if (typeof a2 === "string") {
      this._attributeUpdates.next({ el: a1, attribute: { name: a2, val: a3 } });
    } else {
      Object.keys(a2).forEach((name) => {
        this._attributeUpdates.next({ el: a1, attribute: { name, val: a2[name] } });
      });
    }
  }
  public registerAttributeInterpolation<Attrs, K extends keyof Attrs, E extends Element<any, Attrs, any>>(el: E, attr: K, val: (t: number) => Attrs[K], duration: number, easing: EasingFunction): Promise<number> {
    return new Promise((resolve) => {
      const key = randomShortStringId();
      const start = performance.now();
      const attributes = [{ name: attr, val }];
      this._attributeInterpolations[key] = { el, attributes, start, duration, easing, resolve };
    });
  }
}
