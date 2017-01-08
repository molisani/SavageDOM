namespace vektor.Attribute {

  export class Matrix implements Attribute<Matrix> {
    arr: number[] = [];
    constructor(values: number[][]) {
      this.arr = this.arr.concat(...values);
    }
    toString(): string {
      return this.arr.join(" ");
    }
    parse(css: string | null): Matrix {
      if (css !== null) {
        return new Matrix([css.split(" ").map(parseFloat)]);
      } else {
        return new Matrix([]);
      }
    }
    get(element: Element<SVGElement, any>, attr: string): Matrix {
      return this.parse(element.getAttribute(attr));
    }
    set(element: Element<SVGElement, any>, attr: string, override?: Matrix): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    interpolate(from: Matrix, t: number): Matrix {
      return new Matrix([this.arr.map((val, i) => _lerp(from[i], val, t))]);
    }
  }

}
