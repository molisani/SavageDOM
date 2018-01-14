import { Attribute } from "../attribute";
import { Element } from "../element";
import { _lerp } from "../interpolation";

export class NumberWrapper implements Attribute<NumberWrapper | number> {
  constructor(public n: number = 0) {}
  public toString(): string {
    return this.n.toString();
  }
  public parse(css: string | null): NumberWrapper {
    if (css !== null) {
      return new NumberWrapper(parseFloat(css));
    } else {
      return new NumberWrapper();
    }
  }
  public get(element: Element<SVGElement, any, any>, attr: string): NumberWrapper {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: Element<SVGElement, any, any>, attr: string, override?: NumberWrapper): void {
    element.setAttribute(attr, (override !== undefined ? override : this).toString());
  }
  public interpolate(from: NumberWrapper, t: number): NumberWrapper {
    return new NumberWrapper(_lerp(from.n, this.n, t));
  }
}

export class ArrayWrapper<T extends Attribute<T>> implements Attribute<ArrayWrapper<T>> {
  constructor(public arr: T[] = []) {

  }
  public toString(): string {
    return this.arr.join("\t");
  }
  public parse(css: string | null): ArrayWrapper<T> {
    if (css !== null) {
      const toks = css.split("\t");
      return new ArrayWrapper<T>(this.arr.map((a, i) => a.parse((i >= toks.length) ? null : toks[i])));
    } else {
      return new ArrayWrapper<T>(this.arr.map(a => a.parse(null)));
    }
  }
  public get(element: Element<SVGElement, any, any>, attr: string): ArrayWrapper<T> {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: Element<SVGElement, any, any>, attr: string, override?: ArrayWrapper<T>): void {
    element.setAttribute(attr, (override !== undefined ? override : this).toString());
  }
  public interpolate(from: ArrayWrapper<T>, t: number): ArrayWrapper<T> {
    return new ArrayWrapper<T>(this.arr.map((s, i) => s.interpolate(from.arr[i], t)));
  }
}
