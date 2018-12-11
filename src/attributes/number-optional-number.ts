import { interpolate } from "d3-interpolate";
import { Attribute } from "../attribute";

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
  public interpolator(from: NumberOptionalNumber): (t: number) => NumberOptionalNumber {
    const func = interpolate(from.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
}
