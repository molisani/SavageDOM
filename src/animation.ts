namespace SavageDOM {

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

  }

    function isAnimation<SVG extends SVGElement, Attrs>(dynamic: Dynamic<Attrs>): dynamic is Animation<Attrs> {
    return dynamic["from"] !== undefined && typeof dynamic["resolve"] === "function";
  }

  export class AnimationRunner {
    private static requestAnimationFrame: (callback: FrameRequestCallback) => number = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window["mozRequestAnimationFrame"] || window["oRequestAnimationFrame"] || window["msRequestAnimationFrame"] || function(this: Window, callback: FrameRequestCallback) { this.setTimeout(callback, 16); }).bind(window);
    private running = false;
    private queue: Dynamic<any>[] = [];
    public add(anim: Dynamic<any>) {
      this.queue.push(anim);
      if (!this.running) {
        this.start();
      }
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

}
