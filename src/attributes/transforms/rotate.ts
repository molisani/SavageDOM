namespace SavageDOM.Attributes.Transforms {

  export class Rotate extends Transform {
    constructor(public a: number, public x: number = 0, public y: number = 0) {
      super("rotate");
    }
    public args(): string {
      return `${this.a} ${this.x} ${this.y}`;
    }
    public parseArgs(css: string | null): Rotate {
      if (css !== null) {
        const toks = css.split(" ");
        return new Rotate(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
      } else {
        return new Rotate(0);
      }
    }
    public interpolate(from: Rotate, t: number): Rotate {
      return new Rotate(_lerp(from.a, this.a, t), _lerp(from.x, this.x, t), _lerp(from.y, this.y, t));
    }
  }

}
