import { interpolateTransformSvg } from "d3-interpolate";
import { Attribute } from "../attribute";
import { ArrayWrapper } from "./wrappers";

export type TransformType = "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY";

export class Transform<TYPE extends TransformType = any> implements Attribute<Transform> {
  public static fromString(css: string): Transform {
    const pivot = css.indexOf("(");
    const type = css.substring(0, pivot) as TransformType;
    const args = css.substring(pivot + 1, css.length - 1).split(" ").map(parseFloat);
    return new Transform(type, args);
  }
  public static matrix(m: DOMMatrix): Transform<"matrix">;
  public static matrix(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number): Transform<"matrix">;
  public static matrix(a: DOMMatrix | number = 1, b: number = 0, c: number = 0, d: number = 1, e: number = 0, f: number = 0): Transform<"matrix"> {
    if (typeof a === "number") {
      return new Transform("matrix", [a, b, c, d, e, f]);
    } else {
      return new Transform("matrix", [a.a, a.b, a.c, a.d, a.e, a.f]);
    }
  }
  public static translate(x: number = 0, y: number = 0): Transform<"translate"> {
    return new Transform("translate", [x, y]);
  }
  public static rotate(a: number, x: number = 0, y: number = 0): Transform<"rotate"> {
    return new Transform("rotate", [a, x, y]);
  }
  public static scale(x: number = 1, y: number = x): Transform<"scale"> {
    return new Transform("scale", [x, y]);
  }
  public static skewX(a: number = 0): Transform<"skewX"> {
    return new Transform("skewX", [a]);
  }
  public static skewY(a: number = 0): Transform<"skewY"> {
    return new Transform("skewY", [a]);
  }
  constructor(public type: TYPE, public args: number[]) {}
  public toString(): string {
    return `${this.type}(${this.args.join(" ")})`;
  }
  public parse(css: string | null): Transform {
    if (css !== null) {
      return Transform.fromString(css);
    } else {
      return Transform.matrix();
    }
  }
  public get(element: SVGElement, attr: string): Transform {
    const toks = attr.split(".");
    if (toks.length === 2 && toks[1] === this.type) {
      const css = element.getAttribute(toks[0]);
      if (css) {
        const start = css.indexOf(this.type);
        if (start > -1) {
          return this.parse(css.substring(start, css.indexOf(")", start) + 1));
        }
      }
    }
    return this.parse(null);
  }
  public set(element: SVGElement, attr: string, override?: Transform): void {
    const str = String((override === undefined) ? this : override);
    const toks = attr.split(".");
    if (toks.length === 2 && toks[1] === this.type) {
      const css = element.getAttribute(toks[0]);
      if (css) {
        const start = css.indexOf(this.type);
        if (start > -1) {
          const updated = `${css.substr(0, start)}${str}${css.substr(css.indexOf(")", start) + 1)}`;
          element.setAttribute(toks[0], updated);
        } else {
          element.setAttribute(toks[0], str);
        }
      } else {
        element.setAttribute(toks[0], str);
      }
    } else {
      element.setAttribute(attr, str);
    }
  }
  public interpolator(from: Transform): (t: number) => Transform {
    const func = interpolateTransformSvg(from.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
}

const TRANSFORM_LIST_PATTERN = /([a-z]+\(.*?\))/gi;

export class TransformList extends ArrayWrapper<Transform> implements Attribute<TransformList> {
  public parse(css: string | null): TransformList {
    if (css !== null) {
      const transforms = Array.from(css.match(TRANSFORM_LIST_PATTERN) || []);
      return new TransformList(transforms.map(Transform.fromString));
    } else {
      return new TransformList();
    }
  }
  public interpolator(from: TransformList): (t: number) => TransformList {
    const func = interpolateTransformSvg(from.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
}

export interface Transformable {
  "transform.matrix": Transform<"matrix">;
  "transform.translate": Transform<"translate">;
  "transform.scale": Transform<"scale">;
  "transform.rotate": Transform<"rotate">;
  "transform.skewX": Transform<"skewX">;
  "transform.skewY": Transform<"skewY">;
  transform: TransformList;
}
