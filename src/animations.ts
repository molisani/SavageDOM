import bezier from "bezier-easing";
import { SavageDOMElement } from "./element";
import { SVGPropertyInterpolators } from "./interpolators";
import { deferred } from "./promises";

interface EasingFunction {
  readonly name?: string;
  (t: number): number;
}

function cubicBezier(a: number, b: number, c: number, d: number, name?: string): EasingFunction {
  return Object.defineProperty(bezier(a, b, c, d), "name", { value: name ?? `cubic-bezier(${a}, ${b}, ${c}, ${d})` });
}

export const easing = {
  linear: cubicBezier(0, 0, 1, 1, "linear"),
  sineIn: cubicBezier(0.47, 0, 0.745, 0.715, "sineIn"),
  sineOut: cubicBezier(0.39, 0.575, 0.565, 1, "sineOut"),
  sine: cubicBezier(0.445, 0.05, 0.55, 0.95, "sine"),
  quadIn: cubicBezier(0.55, 0.085, 0.68, 0.53, "quadIn"),
  quadOut: cubicBezier(0.25, 0.46, 0.45, 0.94, "quadOut"),
  quad: cubicBezier(0.455, 0.03, 0.515, 0.955, "quad"),
  cubicIn: cubicBezier(0.55, 0.055, 0.675, 0.19, "cubicIn"),
  cubicOut: cubicBezier(0.215, 0.61, 0.355, 1, "cubicOut"),
  cubic: cubicBezier(0.645, 0.045, 0.355, 1, "cubic"),
  quartIn: cubicBezier(0.895, 0.03, 0.685, 0.22, "quartIn"),
  quartOut: cubicBezier(0.165, 0.84, 0.44, 1, "quartOut"),
  quart: cubicBezier(0.77, 0, 0.175, 1, "quart"),
  quintIn: cubicBezier(0.755, 0.05, 0.855, 0.06, "quintIn"),
  quintOut: cubicBezier(0.23, 1, 0.32, 1, "quintOut"),
  quint: cubicBezier(0.86, 0, 0.07, 1, "quint"),
  expoIn: cubicBezier(0.95, 0.05, 0.795, 0.035, "expoIn"),
  expoOut: cubicBezier(0.19, 1, 0.22, 1, "expoOut"),
  expo: cubicBezier(1, 0, 0, 1, "expo"),
  circIn: cubicBezier(0.6, 0.04, 0.98, 0.335, "circIn"),
  circOut: cubicBezier(0.075, 0.82, 0.165, 1, "circOut"),
  circ: cubicBezier(0.785, 0.135, 0.15, 0.86, "circ"),
  backIn: cubicBezier(0.6, -0.28, 0.735, 0.045, "backIn"),
  backOut: cubicBezier(0.175, 0.885, 0.32, 1.275, "backOut"),
  back: cubicBezier(0.68, -0.55, 0.265, 1.55, "back"),
} as const;

export interface SVGEffectTiming {
  readonly duration: number;
  readonly easing?: EasingFunction;
}

export type SVGComputedEffectTiming = Required<SVGEffectTiming>;

export function computeActualEffectTiming(timing: SVGEffectTiming): SVGComputedEffectTiming {
  return {
    duration: timing.duration ?? 1000,
    easing: timing.easing ?? ((t) => t),
  };
}

export interface SVGAnimation {
  readonly finished: Promise<any>;
}

type RequestAnimationFrame = Window["requestAnimationFrame"];

const __SVGRenderer = Symbol("SVGRenderer");

type WindowWithSVGRenderer = Window & { [__SVGRenderer]?: SVGRenderer };

class SavageDOMAnimation implements SVGAnimation {
  private _start: DOMHighResTimeStamp = performance.now();
  private _finish = deferred();
  private _finished: boolean = false;
  constructor(private _timing: SVGComputedEffectTiming, private _update: (t: number) => void) {
  }
  get finished(): Promise<any> {
    return this._finish;
  }
  isFinished(): boolean {
    return this._finished;
  }
  render(now: number): void {
    const elapsed = now - this._start;
    const t1 = (elapsed >= this._timing.duration) ? 1 : (elapsed / this._timing.duration);
    const t2 = this._timing.easing(t1);
    this._update(t2);
    if (t1 >= 1) {
      this._finish.resolve(void 0);
      this._finished = true;
    }
  }
}

export class SVGRenderer {
  static getFromWindow(w: WindowWithSVGRenderer): SVGRenderer {
    const renderer = w[__SVGRenderer] || new SVGRenderer(w.requestAnimationFrame.bind(w));
    w[__SVGRenderer] = renderer;
    return renderer;
  }
  private _active: boolean = false;
  private _animations: SavageDOMAnimation[] = [];
  constructor(private _requestFrame: RequestAnimationFrame) {}
  private _start() {
    if (this._active) {
      return;
    }
    const callback = (now: DOMHighResTimeStamp) => {
      this._render(now);
      if (!this._active) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      this._requestFrame(callback);
    };
    this._active = true;
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this._requestFrame(callback);
  }
  private _render(now: DOMHighResTimeStamp): void {
    this._animations = this._animations.filter((anim) => {
      anim.render(now);
      return !anim.isFinished();
    });
    this._active = (this._animations.length > 0);
  }
  enqueue(timing: SVGComputedEffectTiming, element: SavageDOMElement, interpolators: SVGPropertyInterpolators<any>): SVGAnimation {
    const animation = new SavageDOMAnimation(timing, (t) => {
      for (const attr of Object.keys(interpolators)) {
        const value = interpolators[attr](t);
        element.set(attr as any, value);
      }
    });
    this._animations.push(animation);
    this._start();
    return animation;
  }
}
