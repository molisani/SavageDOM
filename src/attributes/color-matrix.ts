import { interpolate } from "d3-interpolate";
import { Attribute } from "../attribute";

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
    public toString(): string {
      return this.arr.join(" ");
    }
    public parse(css: string | null): Raw {
      if (css !== null) {
        return new Raw([css.split(" ").map(parseFloat)]);
      } else {
        return new Raw([]);
      }
    }
    public get(element: SVGElement, attr: string): Raw {
      return this.parse(element.getAttribute(attr));
    }
    public set(element: SVGElement, attr: string, override?: Raw): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    public interpolator(from: Raw): (t: number) => Raw {
      const func = interpolate(from.toString(), this.toString());
      return (t: number) => this.parse(func(t));
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
    public get(element: SVGElement, attr: string): Saturate {
      return this.parse(element.getAttribute(attr));
    }
    public set(element: SVGElement, attr: string, override?: Saturate): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    public interpolator(from: Saturate): (t: number) => Saturate {
      const func = interpolate(from.toString(), this.toString());
      return (t: number) => this.parse(func(t));
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
    public get(element: SVGElement, attr: string): HueRotate {
      return this.parse(element.getAttribute(attr));
    }
    public set(element: SVGElement, attr: string, override?: HueRotate): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    public interpolator(from: HueRotate): (t: number) => HueRotate {
      const func = interpolate(from.toString(), this.toString());
      return (t: number) => this.parse(func(t));
    }
  }

  export class LuminanceToAlphaColorMatrix implements ColorMatrix {
    public type: "luminanceToAlpha" = "luminanceToAlpha";
    public toString(): string {
      return "";
    }
  }

}
