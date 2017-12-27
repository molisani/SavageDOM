namespace SavageDOM.Attributes {

  export abstract class Transform implements Attribute<Transform> {
    constructor(public type: "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY") {}
    public abstract args(): string;
    public toString(): string {
      return `${this.type}(${this.args()})`;
    }
    public abstract parseArgs(args: string | null): Transform;
    public parse(css: string | null): Transform {
      if (css !== null) {
        return this.parseArgs(css.substring(css.indexOf("(") + 1, css.length - 1));
      } else {
        return this.parseArgs(css);
      }
    }
    public get(element: Element<SVGElement, any, any>, attr: string): Transform {
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
    public set(element: Element<SVGElement, any, any>, attr: string, override?: Transform): void {
      const str = String((override === undefined) ? this : override);
      const toks = attr.split(".");
      if (toks.length === 2 && toks[1] === this.type) {
        const css = element.getAttribute(toks[0]);
        if (css) {
          const start = css.indexOf(this.type);
          if (start > -1) {
            element.setAttribute(toks[0], `${css.substr(0, start)}${str}${css.substr(css.indexOf(")") + 1)}`);
          } else {
            element.setAttribute(toks[0], str);
          }
        } else {
          element.setAttribute(toks[0], str);
        }
      } else {
        element.setAttribute(attr, str);
      }
    }
    public abstract interpolate(from: Transform, t: number): Transform;
  }

  export interface Transformable {
    "transform.matrix": Transforms.Matrix;
    "transform.translate": Transforms.Translate;
    "transform.uniformScale": Transforms.UniformScale;
    "transform.scale": Transforms.Scale;
    "transform.rotate": Transforms.Rotate;
    "transform.skewX": Transforms.SkewX;
    "transform.skewY": Transforms.SkewY;
    transform: Transform[];
  }

}
