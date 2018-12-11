import { interpolateTransformSvg } from "d3-interpolate";
import { Attribute } from "../attribute";
import { Matrix_Transform } from "./transforms/matrix";
import { Rotate_Transform } from "./transforms/rotate";
import { Scale_Transform, UniformScale_Transform } from "./transforms/scale";
import { SkewX_Transform, SkewY_Transform } from "./transforms/skew";
import { Translate_Transform } from "./transforms/translate";

export abstract class Transform implements Attribute<Transform> {
  constructor(public type: "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY") {}
  public abstract args(): string;
  public toString(): string {
    return `${this.type}(${this.args()})`;
  }
  public abstract parseArgs(args: string | null): Transform;
  public parse(css: string | null): Transform {
    if (css !== null) {
      return this.parseArgs(css.substring(css.indexOf("(") + 1, css.length - 1));
    } else {
      return this.parseArgs(css);
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

export interface Transformable {
  "transform.matrix": Matrix_Transform;
  "transform.translate": Translate_Transform;
  "transform.uniformScale": UniformScale_Transform;
  "transform.scale": Scale_Transform;
  "transform.rotate": Rotate_Transform;
  "transform.skewX": SkewX_Transform;
  "transform.skewY": SkewY_Transform;
  transform: Transform[];
}
