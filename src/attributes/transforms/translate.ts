namespace SavageDOM.Attributes.Transforms {

  export class Translate extends Transform {
    constructor(public x: number = 0, public y: number = 0) {
      super("translate");
    }
    public args(): string {
      return `${this.x} ${this.y}`;
    }
    public parseArgs(css: string | null): Translate {
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
    public interpolate(from: Translate, t: number): Translate {
      return new Translate(_lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
    }
  }

}
