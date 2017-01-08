namespace vektor.Attribute {

  export class Point implements Attribute<Point> {
    constructor(public x: Length, public y: Length) {}
    toString(): string {
      return `${this.x},${this.y}`;
    }
    parse(css: string | null): Point {
      if (css !== null) {
        const toks = css.split(",");
        return new Point(_LengthParse(toks[0]), _LengthParse(toks[1]));
      } else {
        return new Point(0, 0);
      }
    }
    get(element: Element<SVGElement, any>, attr: string): Point {
      const toks = attr.split(":");
      if (toks.length === 2) {
        const cssX = element.getAttribute(toks[0]);
        const cssY = element.getAttribute(toks[1]);
        if (cssX !== null && cssY !== null) {
          return new Point(_LengthParse(cssX), _LengthParse(cssY));
        } else {
          return new Point(0, 0);
        }
      } else {
        return this.parse(element.getAttribute(attr));
      }
    }
    set(element: Element<SVGElement, any>, attr: string, override?: Point): void {
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
    interpolate(from: Point, t: number): Point {
      return new Point(_LengthInterpolate(from.x, this.x, t), _LengthInterpolate(from.y, this.y, t));
    }
  }

}
