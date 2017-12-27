namespace SavageDOM.Attributes {

  export class Point implements Attribute<Point> {
    constructor(public x: Attributes.Length, public y: Attributes.Length) {}
    public toString(): string {
      return `${this.x},${this.y}`;
    }
    public parse(css: string | null): Attributes.Point {
      if (css !== null) {
        const toks = css.split(",");
        return new Attributes.Point(_LengthParse(toks[0]), _LengthParse(toks[1]));
      } else {
        return new Attributes.Point(0, 0);
      }
    }
    public get(element: Element<SVGElement, any, any>, attr: string): Attributes.Point {
      const toks = attr.split(":");
      if (toks.length === 2) {
        const cssX = element.getAttribute(toks[0]);
        const cssY = element.getAttribute(toks[1]);
        if (cssX !== null && cssY !== null) {
          return new Attributes.Point(_LengthParse(cssX), _LengthParse(cssY));
        } else {
          return new Attributes.Point(0, 0);
        }
      } else {
        return this.parse(element.getAttribute(attr));
      }
    }
    public set(element: Element<SVGElement, any, any>, attr: string, override?: Attributes.Point): void {
      const toks = attr.split(":");
      if (toks.length === 2) {
        if (override !== undefined) {
          element.setAttribute(toks[0], override.x.toString());
          element.setAttribute(toks[1], override.y.toString());
        } else {
          element.setAttribute(toks[0], this.x.toString());
          element.setAttribute(toks[1], this.y.toString());
        }
      } else {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
    }
    public interpolate(from: Attributes.Point, t: number): Attributes.Point {
      return new Attributes.Point(_LengthInterpolate(from.x, this.x, t), _LengthInterpolate(from.y, this.y, t));
    }
  }

}
