
import { Observable, operators, Scheduler, Subject } from "rxjs";
import { Element } from "../element";
import { randomShortStringId } from "../id";
import { EasingFunction } from "./easing";

export interface TimeResolvable {
  resolve(t: number): void;
}

export interface AttributeUpdate<Attrs, Attr extends keyof Attrs> {
  name: Attr;
  val: Attrs[Attr];
}

export interface ElementUpdateRender<Attrs, E extends Element<any, Attrs, any>> extends TimeResolvable {
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
    this._attributeUpdates.pipe(operators.bufferWhen(() => this._animationFrame)).subscribe((updates) => this._render(updates));
  }
  public queueAttributeUpdate<Attrs, E extends Element<any, Attrs, any>>(el: E, attrs: Partial<Attrs>): Promise<number>;
  public queueAttributeUpdate<Attrs, K extends keyof Attrs, E extends Element<any, Attrs, any>>(el: E, attr: K, val: Attrs[K]): Promise<number>;
  public queueAttributeUpdate<Attrs, K extends keyof Attrs, E extends Element<any, Attrs, any>>(a1: E, a2: K | Partial<Attrs>, a3?: Attrs[K]): Promise<number> {
    if (typeof a2 === "string") {
      return new Promise((resolve) => {
        this._attributeUpdates.next({ el: a1, attribute: { name: a2, val: a3 }, resolve });
      });
    } else {
      return Promise.all(Object.keys(a2).map((name) => {
        return new Promise<number>((resolve) => {
          this._attributeUpdates.next({ el: a1, attribute: { name, val: a2[name] }, resolve });
        });
      })).then((renders) => renders[renders.length - 1]);
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
  private _render(updates: ElementUpdateRender<any, Element<any, any, any>>[]) {
    const now = performance.now();
    const pendingResolutions: ((t: number) => void)[] = [];
    updates.forEach(({ el, attribute, resolve }) => {
      el.renderAttribute(attribute.name, attribute.val);
      pendingResolutions.push(resolve);
    });
    Object.keys(this._attributeInterpolations).forEach((key) => {
      const interpolation = this._attributeInterpolations[key];
      const finalRender = now >= (interpolation.start + interpolation.duration);
      const t = (finalRender) ? 1 : interpolation.easing((now - interpolation.start) / interpolation.duration);
      interpolation.attributes.forEach((attribute) => {
        const val = attribute.val(t);
        interpolation.el.renderAttribute(attribute.name, val);
      });
      if (finalRender) {
        delete this._attributeInterpolations[key];
        pendingResolutions.push(interpolation.resolve);
      }
    });
    if (pendingResolutions.length > 0) {
      setImmediate(() => {
        pendingResolutions.forEach((resolve) => resolve(now));
      });
    }
  }
}
