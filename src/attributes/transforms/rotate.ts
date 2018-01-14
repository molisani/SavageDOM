import { _lerp } from "../../interpolation";
import { Transform } from "../transform";

export class Rotate_Transform extends Transform {
  constructor(public a: number, public x: number = 0, public y: number = 0) {
    super("rotate");
  }
  public args(): string {
    return `${this.a} ${this.x} ${this.y}`;
  }
  public parseArgs(css: string | null): Rotate_Transform {
    if (css !== null) {
      const toks = css.split(" ");
      return new Rotate_Transform(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
    } else {
      return new Rotate_Transform(0);
    }
  }
  public interpolate(from: Rotate_Transform, t: number): Rotate_Transform {
    return new Rotate_Transform(_lerp(from.a, this.a, t), _lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
  }
}
