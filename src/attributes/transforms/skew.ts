namespace SavageDOM.Attributes.Transforms {

  export class SkewX extends Transform {
    constructor(public a: number = 0) {
      super("skewX");
    }
    public args(): string {
      return this.a.toString();
    }
    public parseArgs(css: string | null): SkewX {
      if (css !== null) {
        return new SkewX(parseFloat(css));
      } else {
        return new SkewX();
      }
    }
    public interpolate(from: SkewX, t: number): SkewX {
      return new SkewX(_lerp(from.a, this.a, t));
    }
  }

  export class SkewY extends Transform {
    constructor(public a: number = 0) {
      super("skewY");
    }
    public args(): string {
      return this.a.toString();
    }
    public parseArgs(css: string | null): SkewY {
      if (css !== null) {
        return new SkewY(parseFloat(css));
      } else {
        return new SkewY();
      }
    }
    public interpolate(from: SkewY, t: number): SkewY {
      return new SkewY(_lerp(from.a, this.a, t));
    }
  }

}
