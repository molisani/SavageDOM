import { _lerp } from "../../interpolation";
import { Transform } from "../transform";

export class SkewX_Transform extends Transform {
  constructor(public a: number = 0) {
    super("skewX");
  }
  public args(): string {
    return this.a.toString();
  }
  public parseArgs(css: string | null): SkewX_Transform {
    if (css !== null) {
      return new SkewX_Transform(parseFloat(css));
    } else {
      return new SkewX_Transform();
    }
  }
}

export class SkewY_Transform extends Transform {
  constructor(public a: number = 0) {
    super("skewY");
  }
  public args(): string {
    return this.a.toString();
  }
  public parseArgs(css: string | null): SkewY_Transform {
    if (css !== null) {
      return new SkewY_Transform(parseFloat(css));
    } else {
      return new SkewY_Transform();
    }
  }
}
