namespace SavageDOM {

  export interface Dynamic<Attrs> {
    element: Element<SVGElement, Attrs>;
    defs: Dynamic.Defined<Attrs>;
    progress: (now: number) => number | undefined;
  }
  export namespace Dynamic {

    export interface Definition<A extends string> extends Setter {
      set(element: Element<SVGElement, any>, attr: A): void;
    }

    export type Defined<Attrs> = {
      [A in keyof Attrs]?: Dynamic.Definition<A>;
    };

    export class MousePosition<A extends string> extends Attribute.Point implements Definition<A> {
      private xAttr: string;
      private yAttr: string;
      constructor(target: Document | HTMLElement | SVGElement | Paper = document) {
        super(0, 0);
        if (target instanceof Paper) {
          target = target.root;
        }
        target.addEventListener("mousemove", (e: MouseEvent) => {
          this.x = e.offsetX;
          this.y = e.offsetY;
        });
      }
    }
  }

  export interface Animation<Attrs> extends Dynamic<Attrs> {
    from: Partial<Attrs>;
    attrs: Animation.Defined<Attrs>;
    resolve: (end: number) => any;
  }
  export namespace Animation {

    export type Defined<Attrs> = {
      [A in keyof Attrs]?: Attribute<Attrs[A]>;
    };

    export namespace Easing {
      const flip = (ease: (t: number) => number) => (t: number) => 1 - ease(1 - t);
      const inout = (easeIn: (t: number) => number, easeOut: (t: number) => number) => {
        return (t: number) => t < 0.5 ? easeIn(t * 2) / 2 : easeOut(2 * t - 1) / 2 + 0.5;
      };

      export const linear = (t: number) => t;
      export const quadraticIn = (t: number) => t ** 2;
      export const quadraticOut = flip(quadraticIn);
      export const quadratic = inout(quadraticIn, quadraticOut);
      export const cubicIn = (t: number) => t ** 3;
      export const cubicOut = flip(cubicIn);
      export const cubic = inout(cubicIn, cubicOut);
      export const quarticIn = (t: number) => t ** 4;
      export const quarticOut = flip(quarticIn);
      export const quartic = inout(quarticIn, quarticOut);
      export const quinticIn = (t: number) => t ** 5;
      export const quinticOut = flip(quinticIn);
      export const quintic = inout(quinticIn, quinticOut);
      export const sineIn = (t: number) => 1 - Math.cos(t * Math.PI / 2);
      export const sineOut = flip(sineIn);
      export const sine = inout(sineIn, sineOut);
      export const exponentialIn = (t: number) => 2 ** (10 * (t - 1));
      export const exponentialOut = flip(exponentialIn);
      export const exponential = inout(exponentialIn, exponentialOut);
      export const circularIn = (t: number) => 1 - Math.sqrt(1 - t ** 2);
      export const circularOut = flip(circularIn);
      export const circular = inout(circularIn, circularOut);
    }

    export const Runner: AnimationRunner = new AnimationRunner();

  }

  function isAnimation<SVG extends SVGElement, Attrs>(dynamic: Dynamic<Attrs>): dynamic is Animation<Attrs> {
    return dynamic["from"] !== undefined && typeof dynamic["resolve"] === "function";

  }

  export class AnimationRunner {
    private static requestAnimationFrame: (callback: FrameRequestCallback) => number = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window["mozRequestAnimationFrame"] || window["oRequestAnimationFrame"] || window["msRequestAnimationFrame"] || function(this: Window, callback: FrameRequestCallback) { this.setTimeout(callback, 16); }).bind(window);
    private running = false;
    private queue: Dynamic<any>[] = [];
        public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>): (enable: boolean) => void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>, isEnabled: () => boolean): void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>, isEnabled?: () => boolean): void | ((enable: boolean) => void) {
      if (isEnabled !== undefined) {
        Animation.Runner.add({
          element, defs, progress: (now: number): number | undefined => isEnabled() ? now : undefined,
        });
      } else {
        let enabled = true;
        Animation.Runner.add({
          element, defs, progress: (now: number): number | undefined => enabled ? now : undefined,
        });
        return (enable: boolean) => {
          enabled = enable;
        };
      }
    }
    public registerAnimation<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, attrs: Animation.Defined<Attrs>, duration: number, easing: (t: number) => number): Promise<number> {
      return new Promise(resolve => this.registerAnimationWithCallback(element, attrs, duration, easing, resolve));
    }
    public add(anim: Dynamic<any>) {
      this.queue.push(anim);
      if (!this.running) {
        this.start();
      }
    }
    private registerAnimationWithCallback<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, attrs: Animation.Defined<Attrs>, duration: number, easing: (t: number) => number, resolve: (t: number) => void): void {
      const start = performance.now();
      const end = start + duration;
      const from = {} as Partial<Attrs>;
      for (const prop in attrs) {
        from[prop] = (attrs[prop] as Attribute<any>).get(element, prop);
      }
      const defs = {} as Dynamic.Defined<any>;
      const anim: Animation<Attrs> = {
        element, attrs, resolve, from, defs,
        progress: (now: number): number | undefined => (now > start && now <= end) ? easing((now - start) / duration) : undefined,
      };
      Animation.Runner.add(anim);
    }
    private loop() {
      const now = performance.now();
      for (let i = this.queue.length - 1; i >= 0; --i) {
        const dyn = this.queue[i];
        const t = dyn.progress(now);
        if (isAnimation(dyn)) {
          if (t !== undefined) {
            for (const prop in dyn.attrs) {
              const attr = dyn.attrs[prop] as Attribute<any>;
              const mid = attr.interpolate(dyn.from[prop], t);
              attr.set(dyn.element, prop, mid);
            }
          } else {
            this.queue.splice(i, 1);
            for (const prop in dyn.attrs) {
              (dyn.attrs[prop] as Attribute<any>).set(dyn.element, prop);
            }
            dyn.resolve(now);
          }
        } else {
          if (t !== undefined) {
            for (const prop in dyn.defs) {
              (dyn.defs[prop] as Dynamic.Definition<any>).set(dyn.element, prop);
            }
          } else {
            this.queue.splice(i, 1);
            for (const prop in dyn.defs) {
              (dyn.defs[prop] as Dynamic.Definition<any>).set(dyn.element, prop);
            }
          }
        }
      }
      if (this.queue.length === 0) {
        this.stop();
      } else if (this.running) {
        AnimationRunner.requestAnimationFrame(() => {
          this.loop();
        });
      }
    }
    private stop() {
      this.running = false;
    }
    private start() {
      this.running = true;
      AnimationRunner.requestAnimationFrame(() => {
        this.loop();
      });
    }
  }

  export interface Element<SVG extends SVGElement, Attrs> {
    dynamic(defs: Dynamic.Defined<Attrs>): void;
    animate(attrs: Partial<Attrs>, duration: number, easing?: (t: number) => number): Promise<number>;
  }

  Element.prototype.dynamic = function<SVG extends SVGElement, Attrs>(this: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>) {
    Animation.Runner.registerDynamic(this, defs);
  };

  Element.prototype.animate = function<SVG extends SVGElement, Attrs>(this: Element<SVG, Attrs>, attrs: Partial<Attrs>, duration: number, easing: (t: number) => number = Animation.Easing.linear): Promise<number> {
    const defs = {} as Animation.Defined<Attrs>;
    for (const prop in attrs) {
      const a = attrs[prop];
      if (a !== undefined) {
        if (Attribute.isAttribute(a)) {
          defs[prop] = a;
        } else if (typeof a === "number") {
          defs[prop] = new Attribute.Number(a as any as number) as Attribute<any>;
        }
      }
    }
    return Animation.Runner.registerAnimation(this, defs, duration, easing);
  };

}
