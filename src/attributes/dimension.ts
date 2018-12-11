import { interpolate } from "d3-interpolate";
import { Attribute } from "../attribute";

export type CSSAbsoluteLength = "px" | "in" | "cm" | "mm" | "pt" | "pc";
export type CSSRelativeLength = "em" | "ex";
export type CSSAngleUnit = "deg" | "grad" | "rad" | "turn";

export class Dimension<UNIT extends string> implements Attribute<Dimension<UNIT>> {
  private static convert: { [unit: string]: number } = {
    px: 1,
    in: 96,
    cm: 254 / 96,
    mm: 25.4 / 96,
    pt: 3 / 4,
    pc: 9,
    deg: 1,
    grad: 9 / 10,
    rad: 180 / Math.PI,
    turn: 360,
  };
  constructor(public value: number, public unit: UNIT) {}
  public toString(): string {
    return `${this.value}${this.unit}`;
  }
  public parse(css: string | null): Dimension<UNIT> {
    if (css !== null) {
      const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
      if (m !== null) {
        return this._convert(parseFloat(m[1]), m[2]);
      } else {
        return new Dimension<UNIT>(parseFloat(css), this.unit);
      }
    }
    return new Dimension<UNIT>(0, this.unit);
  }
  public get(element: SVGElement, attr: string): Dimension<UNIT> {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: SVGElement, attr: string, override?: Dimension<UNIT>): void {
    if (override !== undefined) {
      element.setAttribute(attr, override.toString());
    } else {
      element.setAttribute(attr, this.toString());
    }
  }
  public interpolator(from: Dimension<UNIT>): (t: number) => Dimension<UNIT> {
    const a = this._convert(from.value, from.unit);
    const func = interpolate(a.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
  private _convert(value: number, unit: string): Dimension<UNIT> {
    const scale = (Dimension.convert[this.unit] / Dimension.convert[unit]) || 1;
    return new Dimension(value * scale, this.unit);
  }
}

export class Percentage extends Dimension<"%"> {
  constructor(value: number) {
    super(value, "%");
  }
}
