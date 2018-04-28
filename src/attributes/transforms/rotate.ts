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
}
