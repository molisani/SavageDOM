import { _lerp } from "../../interpolation";
import { Transform } from "../transform";

export class Matrix_Transform extends Transform {
  constructor(public a: number = 1, public b: number = 0, public c: number = 0, public d: number = 1, public e: number = 0, public f: number = 0) {
    super("matrix");
  }
  public args(): string {
    return `${this.a} ${this.b} ${this.c} ${this.d} ${this.e} ${this.f}`;
  }
  public parseArgs(css: string | null): Matrix_Transform {
    if (css !== null) {
      const toks = css.split(" ");
      return new Matrix_Transform(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]), parseFloat(toks[4]), parseFloat(toks[5]));
    } else {
      return new Matrix_Transform();
    }
  }
}
