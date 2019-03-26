
import { animationFrameScheduler, interval, Observable, Subject, Subscription } from "rxjs";
import { bufferWhen, filter, map } from "rxjs/operators";
import { Core_Attributes } from "../attributes/base";
import { Element } from "../element";
import { clamp } from "../util";
import { AnimationTiming } from "./timing";

export interface TimeResolvable {
  resolve?: (t: number) => void;
}

export interface AttributeUpdate<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES> {
  name: ATTRIBUTE;
  val: ATTRIBUTES[ATTRIBUTE];
}

type AttributeOnlyElement<ATTRIBUTES extends Core_Attributes> = Element<SVGElement, ATTRIBUTES>;

export interface ElementUpdateRender<ATTRIBUTES extends Core_Attributes, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>> extends TimeResolvable {
  el: ELEMENT;
  attribute: AttributeUpdate<ATTRIBUTES, keyof ATTRIBUTES>;
}

export interface AttributeInterpolation<ATTRIBUTES, ATTRIBUTE extends keyof ATTRIBUTES> {
  name: ATTRIBUTE;
  val(t: number): ATTRIBUTES[ATTRIBUTE];
}

export interface ElementInterpolateRender<ATTRIBUTES extends Core_Attributes, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>> extends TimeResolvable, AnimationTiming {
  el: ELEMENT;
  attribute: AttributeInterpolation<ATTRIBUTES, keyof ATTRIBUTES>;
  start: number;
}

type ElementAttributeKey = string & { __ElementAttributeKey: never };

function asKey<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attr: ATTRIBUTE): ElementAttributeKey {
  return `${el.id}#${attr}` as ElementAttributeKey;
}

export class Renderer {
  public static getInstance(): Renderer {
    return Renderer._instance;
  }
  private static _instance = new Renderer();
  private _animationFrame = interval(0, animationFrameScheduler);
  private _attributeUpdates = new Subject<ElementUpdateRender<any, Element<any>>>();
  private _attributeInterpolations = new Map<ElementAttributeKey, ElementInterpolateRender<any, Element<any>>>();
  constructor() {
    this._attributeUpdates.pipe(bufferWhen(() => this._animationFrame)).subscribe((updates) => this._render(updates));
  }
  public queueAttributeUpdate<ATTRIBUTES extends Core_Attributes, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attrs: Partial<ATTRIBUTES>): Promise<number>;
  public queueAttributeUpdate<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attr: ATTRIBUTE, val: ATTRIBUTES[ATTRIBUTE]): Promise<number>;
  public queueAttributeUpdate<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(a1: ELEMENT, a2: ATTRIBUTE | Partial<ATTRIBUTES>, a3?: ATTRIBUTES[ATTRIBUTE]): Promise<number> {
    if (typeof a2 === "string") {
      return new Promise((resolve) => {
        this._attributeUpdates.next({ el: a1, attribute: { name: a2, val: a3 }, resolve });
      });
    } else if (typeof a2 === "object") {
      return Promise.all(Object.keys(a2).map((name) => {
        return new Promise<number>((resolve) => {
          this._attributeUpdates.next({ el: a1, attribute: { name, val: a2[name] }, resolve });
        });
      })).then((renders) => Math.max(...renders));
    }
    throw new Error("No attributes specified for attribute update");
  }
  public registerAttributeInterpolation<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attr: ATTRIBUTE, val: (t: number) => ATTRIBUTES[ATTRIBUTE], timing: AnimationTiming): Promise<number> {
    return new Promise((resolve) => {
      const key = asKey(el, attr);
      const start = performance.now();
      this._attributeInterpolations.set(key, {
        el,
        attribute: { name: attr, val },
        start,
        duration: timing.duration,
        easing: timing.easing,
        resolve,
      });
    });
  }
  public subscribeAttributeObservable<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attr: ATTRIBUTE, val: Observable<ATTRIBUTES[ATTRIBUTE]>): Subscription {
    return val.pipe(
      bufferWhen(() => this._animationFrame),
      filter((updates) => updates.length > 0),
      map((updates) => ({ el, attribute: { name: attr, val: updates[updates.length - 1] } })),
    ).subscribe(this._attributeUpdates);
  }
  private _render<ATTRIBUTES extends Core_Attributes>(updates: ElementUpdateRender<ATTRIBUTES, AttributeOnlyElement<ATTRIBUTES>>[]) {
    const now = performance.now();
    const pendingResolutions: ((t: number) => void)[] = [];
    updates.forEach(({ el, attribute, resolve }) => {
      el.renderAttribute(attribute.name, attribute.val);
      if (resolve) {
        pendingResolutions.push(resolve);
      }
    });
    for (const [key, interpolation] of this._attributeInterpolations) {
      const finalRender = now >= (interpolation.start + interpolation.duration);
      const t = clamp(interpolation.easing((now - interpolation.start) / interpolation.duration), 0, 1);
      const val = interpolation.attribute.val(t);
      interpolation.el.renderAttribute(interpolation.attribute.name, val);
      if (finalRender) {
        this._attributeInterpolations.delete(key);
        if (interpolation.resolve) {
          pendingResolutions.push(interpolation.resolve);
        }
      }
    }
    if (pendingResolutions.length > 0) {
      setImmediate(() => {
        pendingResolutions.forEach((resolve) => resolve(now));
      });
    }
  }
}
