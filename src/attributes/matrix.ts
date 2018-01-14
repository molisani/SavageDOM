import { Attribute } from "../attribute";
import { Element } from "../element";
import { _lerp } from "../interpolation";

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
  public get(element: Element<SVGElement, any, any>, attr: string): Matrix {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: Element<SVGElement, any, any>, attr: string, override?: Matrix): void {
    if (override !== undefined) {
      element.setAttribute(attr, override.toString());
    } else {
      element.setAttribute(attr, this.toString());
    }
  }
  public interpolate(from: Matrix, t: number): Matrix {
    return new Matrix([this.arr.map((val, i) => _lerp(from[i], val, t))]);
  }
}
