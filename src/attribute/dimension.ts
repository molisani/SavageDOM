namespace vektor.Attribute {

  export type CSSAbsoluteLengths = "px" | "in" | "cm" | "mm" | "pt" | "pc";
  export type CSSAngleUnits = "deg" | "grad" | "rad" | "turn";

  export class Dimension<Unit extends string> implements Attribute<Dimension<Unit>> {
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
    constructor(public value: number, public unit: Unit) {}
    toString(): string {
      return `${this.value}${this.unit}`;
    }
    parse(css: string | null): Dimension<Unit> {
      if (css !== null) {
        const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
        if (m !== null) {
          const toPx = Dimension.convert[m[2]];
          const fromPx = 1 / Dimension.convert[this.unit as string];
          if (toPx !== undefined && fromPx !== undefined) {
            return new Dimension<Unit>(parseFloat(m[1]) * toPx * fromPx, this.unit);
          } else {
            return new Dimension<any>(parseFloat(m[1]), m[2]);
          }
        } else {
          return new Dimension<Unit>(parseFloat(css), this.unit);
        }
      }
      return new Dimension<Unit>(0, this.unit);
    }
    get(element: Element<SVGElement, any>, attr: string): Dimension<Unit> {
      return this.parse(element.getAttribute(attr));
    }
    set(element: Element<SVGElement, any>, attr: string, override?: Dimension<Unit>): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    interpolate(from: Dimension<Unit>, t: number): Dimension<Unit> {
      if (this.unit !== from.unit) {
        const toPx = Dimension.convert[this.unit as string];
        const fromPx = 1 / Dimension.convert[from.unit as string];
        if (toPx !== undefined && fromPx !== undefined) {
          return new Dimension<Unit>(_lerp(from.value, this.value, t) * toPx * fromPx, this.unit);
        }
      }
      return new Dimension<Unit>(_lerp(from.value, this.value, t), this.unit);
    }
  }

}
