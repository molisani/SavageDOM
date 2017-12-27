namespace SavageDOM.Animation.Renderer {

  export interface TimeResolvable {
    resolve(t: number): void;
  }

  export interface AttributeUpdate<Attrs, Attr extends keyof Attrs> {
    name: Attr;
    val: Attrs[Attr];
  }

  export interface ElementUpdateRender<Attrs, E extends Element<SVGElement, Attrs, BaseEvents>> extends TimeResolvable {
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
    private _animationFrame = Rx.Observable.interval(0, Rx.Scheduler.animationFrame);
    private _updates = new Rx.Subject<ElementUpdateRender<any, Element<any, any, any>>>();
    private _dynamics = new Rx.Subject<DynamicElementRender<any, Element<any, any, any>>>();
    constructor() {
      this._updates.bufferWhen(() => this._animationFrame).subscribe((events) => {
        const now = performance.now();
        events.forEach(({ resolve, el, attribute }) => {
          el.renderAttribute(attribute.name, attribute.val);
          resolve(now);
        });
      });
      this._dynamics.bufferWhen(() => this._animationFrame).subscribe((dynamics) => {
        const now = performance.now();
        dynamics.forEach((dynamic) => {
          const attributes = dynamic.calculate(now);
          if (attributes === null) {
            dynamic.resolve(now);
          } else {
            attributes.forEach(({ name, val }) => {
              dynamic.el.renderAttribute(name, val);
            });
            this._dynamics.next(dynamic);
          }
        });
      });
    }
    // public subscribeUpdate
    public queueUpdate<Attrs, E extends Element<SVGElement, Attrs, BaseEvents>>(el: E, attrs: Partial<Attrs>): Promise<number>;
    public queueUpdate<Attrs, K extends keyof Attrs, E extends Element<SVGElement, Attrs, BaseEvents>>(el: E, attr: K, val: Attrs[K]): Promise<number>;
    public queueUpdate<Attrs, K extends keyof Attrs, E extends Element<SVGElement, Attrs, BaseEvents>>(el: E, a: Partial<Attrs> | K, val?: Attrs[K]): Promise<number> {
      return new Promise((resolve) => {
        const attributes: AttributeUpdate<Attrs, any>[] = [];
        // this._updates.next({ resolve, el, attributes });
      });
    }
    public registerCalculated<Attrs, E extends Element<SVGElement, Attrs, BaseEvents>>(el: E, calculate: (time: number) => Partial<Attrs> | null): Promise<number> {
      return new Promise((resolve) => {
        this._dynamics.next({
          resolve, el,
          calculate: (t) => {
            const attrs = calculate(t);
            if (attrs === null) {
              return null;
            }
            return Object.keys(attrs).map((name) => ({ name, val: attrs[name] }));
          },
        });
      });
    }
  }

}
