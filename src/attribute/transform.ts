namespace SavageDOM.Attribute {

  export abstract class Transform implements Attribute<Transform> {
    constructor(public type: "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY") {}
    abstract args(): string;
    toString(): string {
      return `${this.type}(${this.args()})`;
    }
    abstract parseArgs(args: string | null): Transform;
    parse(css: string | null): Transform {
      if (css !== null) {
        return this.parseArgs(css.substring(css.indexOf("(") + 1, css.length - 1));
      } else {
        return this.parseArgs(css);
      }
    }
    get(element: Element<SVGElement, any>, attr: string): Transform {
      const toks = attr.split(".");
      if (toks.length === 2 && toks[1] === this.type) {
        const css = element.getAttribute(toks[0]);
        if (css) {
          const idx = css.indexOf(this.type);
          if (idx > -1) {
            return this.parse(css.substring(idx, css.indexOf(")") + 1));
          }
        }
      }
      return this.parse(null);
    }
    set(element: Element<SVGElement, any>, attr: string, override?: Transform): void {
      const str = String((override === undefined) ? this : override);
      const toks = attr.split(".");
      if (toks.length === 2 && toks[1] === this.type) {
        const css = element.getAttribute(toks[0]);
        if (css) {
          const start = css.indexOf(this.type);
          const empty = (css === "none") || (css.length === 0);
          if (start > -1 && !empty) {
            element.setAttribute(toks[0], `${css.substr(0, start)}${str}${css.substr(css.indexOf(")") + 2)}`);
          } else {
            element.setAttribute(toks[0], empty ? str : `${css}\t${str}`);
          }
        } else {
          element.setAttribute(toks[0], str);
        }
      } else {
        element.setAttribute(attr, str);
      }
    }
    abstract interpolate<T extends Transform>(from: T, t: number): T;
  }

  export namespace Transform {
    export class Matrix extends Transform {
      constructor(public a: number = 1, public b: number = 0, public c: number = 0, public d: number = 1, public e: number = 0, public f: number = 0) {
        super("matrix");
      }
      args(): string {
        return `${this.a} ${this.b} ${this.c} ${this.d} ${this.e} ${this.f}`;
      }
      parseArgs(css: string | null): Matrix {
        if (css !== null) {
          const toks = css.split(" ");
          return new Matrix(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]), parseFloat(toks[4]), parseFloat(toks[5]));
        } else {
          return new Matrix();
        }
      }
      interpolate(from: Matrix, t: number): Matrix {
        return new Matrix(_lerp(from.a, this.a, t), _lerp(from.b, this.b, t), _lerp(from.c, this.c, t), _lerp(from.d, this.d, t), _lerp(from.e, this.e, t), _lerp(from.f, this.f, t));
      }
    }
    export class Translate extends Transform {
      constructor(public x: number = 0, public y: number = 0) {
        super("translate");
      }
      args(): string {
        return `${this.x} ${this.y}`;
      }
      parseArgs(css: string | null): Translate {
        if (css !== null) {
          const toks = css.split(" ");
          if (toks.length === 1) {
            return new Translate(parseFloat(toks[0]));
          } else {
            return new Translate(parseFloat(toks[0]), parseFloat(toks[1]));
          }
        } else {
          return new Translate();
        }
      }
      interpolate(from: Translate, t: number): Translate {
        return new Translate(_lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
      }
    }
    export class UniformScale extends Transform {
      constructor(public s: number = 1) {
        super("scale");
      }
      args(): string {
        return this.s.toString();
      }
      parseArgs(css: string | null): UniformScale {
        if (css !== null) {
          return new UniformScale(parseFloat(css));
        } else {
          return new UniformScale();
        }
      }
      interpolate(from: UniformScale, t: number): UniformScale {
        return new UniformScale(_lerp(from.s, this.s, t));
      }
    }
    export class Scale extends Transform {
      constructor(public x: number = 1, public y: number = x) {
        super("scale");
      }
      args(): string {
        return `${this.x} ${this.y}`;
      }
      parseArgs(css: string | null): Scale {
        if (css !== null) {
          const toks = css.split(" ");
          if (toks.length === 1) {
            return new Scale(parseFloat(toks[0]));
          } else {
            return new Scale(parseFloat(toks[0]), parseFloat(toks[1]));
          }
        } else {
          return new Scale();
        }
      }
      interpolate(from: Scale, t: number): Scale {
        return new Scale(_lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
      }
    }
    export class Rotate extends Transform {
      constructor(public a: number, public x: number = 0, public y: number = 0) {
        super("rotate");
      }
      args(): string {
        return `${this.a} ${this.x} ${this.y}`;
      }
      parseArgs(css: string | null): Rotate {
        if (css !== null) {
          const toks = css.split(" ");
          return new Rotate(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
        } else {
          return new Rotate(0);
        }
      }
      interpolate(from: Rotate, t: number): Rotate {
        return new Rotate(_lerp(from.a, this.a, t), _lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
      }
    }
    export class SkewX extends Transform {
      constructor(public a: number = 0) {
        super("skewX");
      }
      args(): string {
        return this.a.toString();
      }
      parseArgs(css: string | null): SkewX {
        if (css !== null) {
          return new SkewX(parseFloat(css));
        } else {
          return new SkewX();
        }
      }
      interpolate(from: SkewX, t: number): SkewX {
        return new SkewX(_lerp(from.a, this.a, t));
      }
    }
    export class SkewY extends Transform {
      constructor(public a: number = 0) {
        super("skewY");
      }
      args(): string {
        return this.a.toString();
      }
      parseArgs(css: string | null): SkewY {
        if (css !== null) {
          return new SkewY(parseFloat(css));
        } else {
          return new SkewY();
        }
      }
      interpolate(from: SkewY, t: number): SkewY {
        return new SkewY(_lerp(from.a, this.a, t));
      }
    }
  }

  export interface Transformable {
    "transform.matrix": Transform.Matrix;
    "transform.translate": Transform.Translate;
    "transform.uniformScale": Transform.UniformScale;
    "transform.scale": Transform.Scale;
    "transform.rotate": Transform.Rotate;
    "transform.skewX": Transform.SkewX;
    "transform.skewY": Transform.SkewY;
    transform: List<Transform>;
  };

}
