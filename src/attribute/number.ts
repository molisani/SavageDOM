namespace SavageDOM.Attribute {

  export class Number implements Attribute<Number> {
    constructor(public n: number = 0) {}
    toString(): string {
      return this.n.toString();
    }
    parse(css: string | null): Number {
      if (css !== null) {
        return new Attribute.Number(parseFloat(css));
      } else {
        return new Attribute.Number();
      }
    }
    get(element: Element<SVGElement, any>, attr: string): Number {
      return this.parse(element.getAttribute(attr));
    }
    set(element: Element<SVGElement, any>, attr: string, override?: Number): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    interpolate(from: Number, t: number): Number {
      return new Attribute.Number(_lerp(from.n, this.n, t));
    }
  }

}
