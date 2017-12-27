namespace SavageDOM.Attributes.Transforms {

export class UniformScale extends Transform {
  constructor(public s: number = 1) {
    super("scale");
  }
  public args(): string {
    return this.s.toString();
  }
  public parseArgs(css: string | null): UniformScale {
    if (css !== null) {
      return new UniformScale(parseFloat(css));
    } else {
      return new UniformScale();
    }
  }
  public interpolate(from: UniformScale, t: number): UniformScale {
    return new UniformScale(_lerp(from.s, this.s, t));
  }
}

export class Scale extends Transform {
  constructor(public x: number = 1, public y: number = x) {
    super("scale");
  }
  public args(): string {
    return `${this.x} ${this.y}`;
  }
  public parseArgs(css: string | null): Scale {
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
  public interpolate(from: Scale, t: number): Scale {
    return new Scale(_lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
  }
}

}
