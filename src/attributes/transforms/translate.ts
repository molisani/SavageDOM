import { _lerp } from "../../interpolation";
import { Transform } from "../transform";

export class Translate_Transform extends Transform {
  constructor(public x: number = 0, public y: number = 0) {
    super("translate");
  }
  public args(): string {
    return `${this.x} ${this.y}`;
  }
  public parseArgs(css: string | null): Translate_Transform {
    if (css !== null) {
      const toks = css.split(" ");
      if (toks.length === 1) {
        return new Translate_Transform(parseFloat(toks[0]));
      } else {
        return new Translate_Transform(parseFloat(toks[0]), parseFloat(toks[1]));
      }
    } else {
      return new Translate_Transform();
    }
  }
  public interpolate(from: Translate_Transform, t: number): Translate_Transform {
    return new Translate_Transform(_lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
  }
}
