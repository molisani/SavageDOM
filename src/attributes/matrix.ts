import { interpolate } from "d3-interpolate";
import { Attribute } from "../attribute";

export class Matrix implements Attribute<Matrix> {
  public arr: number[] = [];
  constructor(values: number[][]) {
    this.arr = this.arr.concat(...values);
  }
  public toString(): string {
    return this.arr.join(" ");
  }
  public parse(css: string | null): Matrix {
    if (css !== null) {
      return new Matrix([css.split(" ").map(parseFloat)]);
    } else {
      return new Matrix([]);
    }
  }
  public get(element: SVGElement, attr: string): Matrix {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: SVGElement, attr: string, override?: Matrix): void {
    if (override !== undefined) {
      element.setAttribute(attr, override.toString());
    } else {
      element.setAttribute(attr, this.toString());
    }
  }
  public interpolator(from: Matrix): (t: number) => Matrix {
    const func = interpolate(from.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
}
