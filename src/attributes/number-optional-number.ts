import { Attribute } from "../attribute";
import { Element } from "../element";
import { _lerp } from "../interpolation";

export class NumberOptionalNumber implements Attribute<NumberOptionalNumber> {
  constructor(public n: number, public o?: number) {}
  public toString(): string {
    return (this.o !== undefined) ? `${this.n},${this.o}` : this.n.toString();
  }
  public parse(css: string | null): NumberOptionalNumber {
    if (css !== null) {
      const toks = css.split(",");
      if (toks.length === 1) {
        return new NumberOptionalNumber(parseFloat(toks[0]));
      } else {
        return new NumberOptionalNumber(parseFloat(toks[0]), parseFloat(toks[1]));
      }
    } else {
      return new NumberOptionalNumber(0);
    }
  }
  public get(element: SVGElement, attr: string): NumberOptionalNumber {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: SVGElement, attr: string, override?: NumberOptionalNumber): void {
    if (override !== undefined) {
      element.setAttribute(attr, override.toString());
    } else {
      element.setAttribute(attr, this.toString());
    }
  }
  public interpolate(from: NumberOptionalNumber, t: number): NumberOptionalNumber {
    if (from.o !== undefined && this.o !== undefined) {
      return new NumberOptionalNumber(_lerp(from.n, this.n, t), _lerp(from.o, this.o, t));
    } else if (from.o === undefined && this.o !== undefined) {
      return new NumberOptionalNumber(_lerp(from.n, this.n, t), _lerp(0, this.o, t));
    } else if (from.o !== undefined && this.o === undefined) {
      return new NumberOptionalNumber(_lerp(from.n, this.n, t), _lerp(from.o, 0, t));
    } else {
      return new NumberOptionalNumber(_lerp(from.n, this.n, t));
    }
  }
}
