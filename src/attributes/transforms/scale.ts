import { _lerp } from "../../interpolation";
import { Transform } from "../transform";

export class UniformScale_Transform extends Transform {
  constructor(public s: number = 1) {
    super("scale");
  }
  public args(): string {
    return this.s.toString();
  }
  public parseArgs(css: string | null): UniformScale_Transform {
    if (css !== null) {
      return new UniformScale_Transform(parseFloat(css));
    } else {
      return new UniformScale_Transform();
    }
  }
  public interpolate(from: UniformScale_Transform, t: number): UniformScale_Transform {
    return new UniformScale_Transform(_lerp(from.s, this.s, t));
  }
}

export class Scale_Transform extends Transform {
  constructor(public x: number = 1, public y: number = x) {
    super("scale");
  }
  public args(): string {
    return `${this.x} ${this.y}`;
  }
  public parseArgs(css: string | null): Scale_Transform {
    if (css !== null) {
      const toks = css.split(" ");
      if (toks.length === 1) {
        return new Scale_Transform(parseFloat(toks[0]));
      } else {
        return new Scale_Transform(parseFloat(toks[0]), parseFloat(toks[1]));
      }
    } else {
      return new Scale_Transform();
    }
  }
  public interpolate(from: Scale_Transform, t: number): Scale_Transform {
    return new Scale_Transform(_lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
  }
}
