namespace SavageDOM {

  export interface Dynamic<Attrs> {
    element: Element<SVGElement, Attrs, any>;
    defs: Dynamic.Defined<Attrs>;
    progress: (now: number) => number | undefined;
  }
  export namespace Dynamic {

    export interface Definition<A extends string> extends Setter {
      set(element: Element<SVGElement, any, any>, attr: A): void;
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
      const INITIAL_NUM_SAMPLES = 17;
      const NEWTON_ITERATIONS = 5;

      interface Constants {
        a: number;
        b: number;
        c: number;
      }

      const _calcConstants = (p1: number, p2: number): Constants => {
        return {
          a: 1 - 3 * p2 + 3 * p1,
          b: 3 * p2 - 6 * p1,
          c: 3 * p1,
        };
      };

      const _evaluateBezier = (t: number, c: Constants) => ((c.a * t + c.b) * t + c.c) * t;
      const _evaluateBezierDerivative = (t: number, c: Constants) => (3 * c.a * t + 2 * c.b) * t + c.c;

      const _calcTFromX = (samples: Float32Array, x: number, c: Constants): number => {
        const idx = Math.min(Math.max(samples.findIndex(sample => sample > x) - 1, 1), samples.length - 1);
        const d = (x - samples[idx]) / (samples[idx + 1] - samples[idx]);
        let estimate = (d + idx - 1) / (INITIAL_NUM_SAMPLES - 1);
        for (let iter = 0; iter < NEWTON_ITERATIONS; ++iter) {
          const slope = _evaluateBezierDerivative(estimate, c);
          if (slope === 0) {
            break;
          }
          estimate -= (_evaluateBezier(estimate, c) - x) / slope;
        }
        return estimate;
      };

      export const cubicBezier = (p1x: number, p1y: number, p2x: number, p2y: number): (x: number) => number => {
        if (p1x === p1y && p2x === p2y) {
          return (x: number) => x;
        }
        const xConstants = _calcConstants(p1x, p2x);
        const yConstants = _calcConstants(p1y, p2y);
        const samples = new Float32Array(INITIAL_NUM_SAMPLES);
        for (let s = 0; s < INITIAL_NUM_SAMPLES; ++s) {
          samples[s] = _evaluateBezier(s / (INITIAL_NUM_SAMPLES - 1), xConstants);
        }
        return (x: number) => _evaluateBezier(_calcTFromX(samples, x, xConstants), yConstants);
      };

      const flip = (ease: (t: number) => number) => (t: number) => 1 - ease(1 - t);
      const inout = (easeIn: (t: number) => number, easeOut: (t: number) => number) => {
        return (t: number) => t < 0.5 ? easeIn(t * 2) / 2 : easeOut(2 * t - 1) / 2 + 0.5;
      };

      const s = 1.70158;
      const p = 0.075;

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
      export const backIn = (t: number) => t ** 2 * ((s + 1) * t - s);
      export const backOut = flip(backIn);
      export const back = inout(backIn, backOut);
      export const elasticIn = (t: number) => 2 ** (-10 * t) * Math.sin((t - p) * (2 * Math.PI) / 0.3) + 1;
      export const elasticOut = flip(elasticIn);
      export const elastic = inout(elasticIn, elasticOut);
    }

  }

  function isAnimation<SVG extends SVGElement, Attrs>(dynamic: Dynamic<Attrs>): dynamic is Animation<Attrs> {
    return dynamic["from"] !== undefined && typeof dynamic["resolve"] === "function";

  }

  export class AnimationRunner {
    private static requestAnimationFrame: (callback: FrameRequestCallback) => number = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window["mozRequestAnimationFrame"] || window["oRequestAnimationFrame"] || window["msRequestAnimationFrame"] || function(this: Window, callback: FrameRequestCallback) { this.setTimeout(callback, 16); }).bind(window);
    private running = false;
    private queue: Dynamic<any>[] = [];
        public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs, any>, defs: Dynamic.Defined<Attrs>): (enable: boolean) => void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs, any>, defs: Dynamic.Defined<Attrs>, isEnabled: () => boolean): void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs, any>, defs: Dynamic.Defined<Attrs>, isEnabled?: () => boolean): void | ((enable: boolean) => void) {
      if (isEnabled !== undefined) {
        // tslint:disable-next-line:no-use-before-declare
        Animation.Runner.add({
          element, defs, progress: (now: number): number | undefined => isEnabled() ? now : undefined,
        });
      } else {
        let enabled = true;
        // tslint:disable-next-line:no-use-before-declare
        Animation.Runner.add({
          element, defs, progress: (now: number): number | undefined => enabled ? now : undefined,
        });
        return (enable: boolean) => {
          enabled = enable;
        };
      }
    }
    public registerAnimation<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs, any>, attrs: Animation.Defined<Attrs>, duration: number, easing: (t: number) => number): Promise<number> {
      return new Promise(resolve => this.registerAnimationWithCallback(element, attrs, duration, easing, resolve));
    }
    public add(anim: Dynamic<any>) {
      this.queue.push(anim);
      if (!this.running) {
        this.start();
      }
    }
    private registerAnimationWithCallback<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs, any>, attrs: Animation.Defined<Attrs>, duration: number, easing: (t: number) => number, resolve: (t: number) => void): void {
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
      // tslint:disable-next-line:no-use-before-declare
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

  export namespace Animation {

    export const Runner: AnimationRunner = new AnimationRunner();

  }

  export interface Element<SVG extends SVGElement, Attrs, Events> {
    dynamic(defs: Dynamic.Defined<Attrs>): void;
    animate(attrs: Partial<Attrs>, duration: number, easing?: (t: number) => number): Promise<number>;
  }

  Element.prototype.dynamic = function<SVG extends SVGElement, Attrs>(this: Element<SVG, Attrs, any>, defs: Dynamic.Defined<Attrs>) {
    Animation.Runner.registerDynamic(this, defs);
  };

  Element.prototype.animate = function<SVG extends SVGElement, Attrs>(this: Element<SVG, Attrs, any>, attrs: Partial<Attrs>, duration: number, easing: (t: number) => number = Animation.Easing.linear): Promise<number> {
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
