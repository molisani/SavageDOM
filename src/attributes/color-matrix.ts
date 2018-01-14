import { Attribute } from "../attribute";
import { Element } from "../element";
import { _lerp } from "../interpolation";
import { Matrix } from "./matrix";

export interface ColorMatrix {
  type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  toString(): string;
}

export namespace ColorMatrix {

  export class Raw implements ColorMatrix, Attribute<Raw> {
    public type: "matrix" = "matrix";
    public arr: number[] = [];
    constructor(values: number[][] = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]]) {
      this.arr = this.arr.concat(...values);
    }
    public parse(css: string | null): Raw {
      if (css !== null) {
        return new Raw([css.split(" ").map(parseFloat)]);
      } else {
        return new Raw([]);
      }
    }
    public get(element: Element<SVGElement, any, any>, attr: string): Raw {
      return this.parse(element.getAttribute(attr));
    }
    public set(element: Element<SVGElement, any, any>, attr: string, override?: Raw): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    public interpolate(from: Matrix, t: number): Raw {
      return new Raw([this.arr.map((val, i) => _lerp(from[i], val, t))]);
    }
  }

  export class Saturate implements ColorMatrix, Attribute<Saturate> {
    public type: "saturate" = "saturate";
    constructor(public value: number = 1) {}
    public toString(): string {
      return this.value.toString();
    }
    public parse(css: string | null): Saturate {
      if (css !== null) {
        return new Saturate(parseFloat(css));
      } else {
        return new Saturate();
      }
    }
    public get(element: Element<SVGElement, any, any>, attr: string): Saturate {
      return this.parse(element.getAttribute(attr));
    }
    public set(element: Element<SVGElement, any, any>, attr: string, override?: Saturate): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    public interpolate(from: Saturate, t: number): Saturate {
      return new Saturate(_lerp(from.value, this.value, t));
    }
  }

  export class HueRotate implements ColorMatrix, Attribute<HueRotate> {
    public type: "hueRotate" = "hueRotate";
    constructor(public value: number = 0) {}
    public toString(): string {
      return this.value.toString();
    }
    public parse(css: string | null): HueRotate {
      if (css !== null) {
        return new HueRotate(parseFloat(css));
      } else {
        return new HueRotate();
      }
    }
    public get(element: Element<SVGElement, any, any>, attr: string): HueRotate {
      return this.parse(element.getAttribute(attr));
    }
    public set(element: Element<SVGElement, any, any>, attr: string, override?: HueRotate): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    public interpolate(from: HueRotate, t: number): HueRotate {
      return new HueRotate(_lerp(from.value, this.value, t));
    }
  }

  export class LuminanceToAlphaColorMatrix implements ColorMatrix {
    public type: "luminanceToAlpha" = "luminanceToAlpha";
    public toString(): string {
      return "";
    }
  }

}
