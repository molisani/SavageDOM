import { Element } from "../element";
import { BaseEvents } from "../events";

import { Observable, Scheduler, Subject } from "rxjs";

export interface TimeResolvable {
  resolve(t: number): void;
}

export interface AttributeUpdate<Attrs, Attr extends keyof Attrs> {
  name: Attr;
  val: Attrs[Attr];
}

export interface ElementUpdateRender<Attrs, E extends Element<SVGElement, Attrs, BaseEvents>> {
  el: E;
  attribute: AttributeUpdate<Attrs, keyof Attrs>;
}

export interface DynamicElementRender<Attrs, E extends Element<SVGElement, Attrs, BaseEvents>> extends TimeResolvable {
  el: E;
  calculate(time: number): AttributeUpdate<Attrs, keyof Attrs>[] | null;
}

export class Renderer {
  public static getInstance(): Renderer {
    return Renderer._instance;
  }
  private static _instance = new Renderer();
  private _animationFrame = Observable.interval(0, Scheduler.animationFrame);
  private _updates = new Subject<ElementUpdateRender<any, Element<any, any, any>>>();
  // private _dynamics = new Subject<DynamicElementRender<any, Element<any, any, any>>>();
  constructor() {
    this._updates.bufferWhen(() => this._animationFrame).subscribe((events) => {
      const now = performance.now();
      events.forEach(({ el, attribute }) => {
        el.renderAttribute(attribute.name, attribute.val);
      });
    });
    // this._dynamics.bufferWhen(() => this._animationFrame).subscribe((dynamics) => {
    //   const now = performance.now();
    //   dynamics.forEach((dynamic) => {
    //     const attributes = dynamic.calculate(now);
    //     if (attributes === null) {
    //       dynamic.resolve(now);
    //     } else {
    //       attributes.forEach(({ name, val }) => {
    //         dynamic.el.renderAttribute(name, val);
    //       });
    //       this._dynamics.next(dynamic);
    //     }
    //   });
    // });
  }
  public queueUpdate<Attrs, E extends Element<any, Attrs, any>>(el: E, attrs: Attrs): void;
  public queueUpdate<Attrs, K extends keyof Attrs, E extends Element<any, Attrs, any>>(el: E, attr: K, val: Attrs[K]): void;
  public queueUpdate<Attrs, K extends keyof Attrs, E extends Element<any, Attrs, any>>(a1: E, a2: K | Attrs, a3?: Attrs[K]): void {
    if (typeof a2 === "string") {
      this._updates.next({ el: a1, attribute: { name: a2, val: a3 } });
    } else {
      Object.keys(a2).forEach((name) => {
        this._updates.next({ el: a1, attribute: { name, val: a2[name] } });
      });
    }
  }
  // public registerCalculated<Attrs, E extends Element<SVGElement, Attrs, BaseEvents>>(el: E, calculate: (time: number) => Partial<Attrs> | null): Promise<number> {
  //   return new Promise((resolve) => {
  //     this._dynamics.next({
  //       resolve, el,
  //       calculate: (t) => {
  //         const attrs = calculate(t);
  //         if (attrs === null) {
  //           return null;
  //         }
  //         return Object.keys(attrs).map((name) => ({ name, val: attrs[name] }));
  //       },
  //     });
  //   });
  // }
}
