namespace SavageDOM.Attributes {

  export abstract class PathSegment implements Attribute<PathSegment> {
    constructor(public command: PathSegment.Command) {}
    public abstract toString(): string;
    public parse(css: string | null): PathSegment {
      if (css !== null) {
        return this.parseArgs(css.substr(2));
      } else {
        return this.defaultInstance();
      }
    }
    public get(element: BaseElement, attr: string): PathSegment {
      return this.parse(element.getAttribute(attr));
    }
    public set(element: BaseElement, attr: string, override?: PathSegment): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    public abstract parseArgs(css: string): PathSegment;
    public abstract defaultInstance(): PathSegment;
    public abstract interpolate(from: PathSegment, t: number): PathSegment;
  }

  export namespace PathSegment {

    export type Command = "M" | "m" | "Z" | "z" | "L" | "l" | "H" | "h" | "V" | "v" | "C" | "c" | "S" | "s" | "Q" | "q" | "T" | "t" | "A" | "a";

    export abstract class SingleLength extends PathSegment {
      constructor(command: "H" | "h" | "V" | "v", public l: Attributes.Length = 0) {
        super(command);
      }
      public toString(): string {
        return `${this.command} ${this.l.toString()}`;
      }
      public parseArgs(css: string): SingleLength {
        return this.buildInstance(_LengthParse(css));
      }
      public interpolate(from: SingleLength, t: number): SingleLength {
        return this.buildInstance(_LengthInterpolate(from.l, this.l, t));
      }
      public abstract buildInstance(l: Attributes.Length): SingleLength;
      public abstract defaultInstance(): SingleLength;
    }
    export abstract class SinglePoint extends PathSegment {
      constructor(command: "M" | "m" | "L" | "l" | "T" | "t", public p: Attributes.Point = new Attributes.Point(0, 0)) {
        super(command);
      }
      public toString(): string {
        return `${this.command} ${this.p.toString()}`;
      }
      public parseArgs(css: string): SinglePoint {
        return this.buildInstance(this.p.parse(css));
      }
      public interpolate(from: SinglePoint, t: number): SinglePoint {
        return this.buildInstance(this.p.interpolate(from.p, t));
      }
      public abstract buildInstance(p: Attributes.Point): SinglePoint;
      public abstract defaultInstance(): SinglePoint;
    }
    export abstract class DoublePoint extends PathSegment {
      constructor(command: "Q" | "q" | "S" | "s", public p1: Attributes.Point = new Attributes.Point(0, 0), public p2: Attributes.Point = new Attributes.Point(0, 0)) {
        super(command);
      }
      public toString(): string {
        return `${this.command} ${this.p1.toString()} ${this.p2.toString()}`;
      }
      public parseArgs(css: string): DoublePoint {
        const toks = css.split(" ");
        return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]));
      }
      public interpolate(from: DoublePoint, t: number): DoublePoint {
        return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t));
      }
      public abstract buildInstance(p1: Attributes.Point, p2: Attributes.Point): DoublePoint;
      public abstract defaultInstance(): DoublePoint;
    }
    export abstract class TriplePoint extends PathSegment {
      constructor(command: "C" | "c", public p1: Attributes.Point = new Attributes.Point(0, 0), public p2: Attributes.Point = new Attributes.Point(0, 0), public p3: Attributes.Point = new Attributes.Point(0, 0)) {
        super(command);
      }
      public toString(): string {
        return `${this.command} ${this.p1.toString()} ${this.p2.toString()} ${this.p3.toString()}`;
      }
      public parseArgs(css: string): TriplePoint {
        const toks = css.split(" ");
        return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]), this.p3.parse(toks[2]));
      }
      public interpolate(from: TriplePoint, t: number): TriplePoint {
        return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t), this.p3.interpolate(from.p3, t));
      }
      public abstract buildInstance(p1: Attributes.Point, p2: Attributes.Point, p3: Attributes.Point): TriplePoint;
      public abstract defaultInstance(): TriplePoint;
    }

    export class MoveToAbs extends SinglePoint {
      constructor(p?: Attributes.Point)
      constructor(x: Attributes.Length, y: Attributes.Length)
      constructor(p: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), y: Attributes.Length = 0) {
        super("M", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
      }
      public buildInstance(p: Attributes.Point): MoveToAbs {
        return new MoveToAbs(p);
      }
      public defaultInstance(): MoveToAbs {
        return new MoveToAbs();
      }
    }
    export class MoveToRel extends SinglePoint {
      constructor(p?: Attributes.Point)
      constructor(x: Attributes.Length, y: Attributes.Length)
      constructor(p: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), y: Attributes.Length = 0) {
        super("m", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
      }
      public buildInstance(p: Attributes.Point): MoveToRel {
        return new MoveToRel(p);
      }
      public defaultInstance(): MoveToRel {
        return new MoveToRel();
      }
    }

    export class ClosePath extends PathSegment {
      constructor() {
        super("Z");
      }
      public toString(): string {
        return "Z";
      }
      public parseArgs(css: string): ClosePath {
        return new ClosePath();
      }
      public defaultInstance(): ClosePath {
        return new ClosePath();
      }
      public interpolate(from: ClosePath, t: number): ClosePath {
        return new ClosePath();
      }
    }

    export class LineToAbs extends SinglePoint {
      constructor(p?: Attributes.Point)
      constructor(x: Attributes.Length, y: Attributes.Length)
      constructor(p: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), y: Attributes.Length = 0) {
        super("L", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
      }
      public buildInstance(p: Attributes.Point): LineToAbs {
        return new LineToAbs(p);
      }
      public defaultInstance(): LineToAbs {
        return new LineToAbs();
      }
    }
    export class LineToRel extends SinglePoint {
      constructor(p?: Attributes.Point)
      constructor(x: Attributes.Length, y: Attributes.Length)
      constructor(p: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), y: Attributes.Length = 0) {
        super("l", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
      }
      public buildInstance(p: Attributes.Point): LineToRel {
        return new LineToRel(p);
      }
      public defaultInstance(): LineToRel {
        return new LineToRel();
      }
    }

    export class LineToHorizontalAbs extends SingleLength {
      constructor(h: Attributes.Length = 0) {
        super("H", h);
      }
      public buildInstance(h: Attributes.Length): LineToHorizontalAbs {
        return new LineToHorizontalAbs(h);
      }
      public defaultInstance(): LineToHorizontalAbs {
        return new LineToHorizontalAbs();
      }
    }
    export class LineToHorizontalRel extends SingleLength {
      constructor(h: Attributes.Length = 0) {
        super("h", h);
      }
      public buildInstance(h: Attributes.Length): LineToHorizontalRel {
        return new LineToHorizontalRel(h);
      }
      public defaultInstance(): LineToHorizontalRel {
        return new LineToHorizontalRel();
      }
    }

    export class LineToVerticalAbs extends SingleLength {
      constructor(v: Attributes.Length = 0) {
        super("V", v);
      }
      public buildInstance(v: Attributes.Length): LineToVerticalAbs {
        return new LineToVerticalAbs(v);
      }
      public defaultInstance(): LineToVerticalAbs {
        return new LineToVerticalAbs();
      }
    }
    export class LineToVerticalRel extends SingleLength {
      constructor(v: Attributes.Length = 0) {
        super("v", v);
      }
      public buildInstance(v: Attributes.Length): LineToVerticalAbs {
        return new LineToVerticalAbs(v);
      }
      public defaultInstance(): LineToVerticalAbs {
        return new LineToVerticalAbs();
      }
    }

    export class CurveToCubicAbs extends TriplePoint {
      constructor(c1?: Attributes.Point, c2?: Attributes.Point, p?: Attributes.Point)
      constructor(c1x: Attributes.Length, c1y: Attributes.Length, c2x: Attributes.Length, c2y: Attributes.Length, px: Attributes.Length, py: Attributes.Length)
      constructor(a: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), b: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), c: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), d?: Attributes.Length, e?: Attributes.Length, f?: Attributes.Length) {
        const c1: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a, b as Attributes.Length);
        const c2: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        const p: Attributes.Point = c instanceof Attributes.Point ? c : new Attributes.Point(e as Attributes.Length, f as Attributes.Length);
        super("C", c1, c2, p);
      }
      public buildInstance(c1: Attributes.Point, c2: Attributes.Point, p: Attributes.Point): CurveToCubicAbs {
        return new CurveToCubicAbs(c1, c2, p);
      }
      public defaultInstance(): CurveToCubicAbs {
        return new CurveToCubicAbs();
      }
    }
    export class CurveToCubicRel extends TriplePoint {
      constructor(c1?: Attributes.Point, c2?: Attributes.Point, p?: Attributes.Point)
      constructor(c1x: Attributes.Length, c1y: Attributes.Length, c2x: Attributes.Length, c2y: Attributes.Length, px: Attributes.Length, py: Attributes.Length)
      constructor(a: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), b: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), c: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), d?: Attributes.Length, e?: Attributes.Length, f?: Attributes.Length) {
        const c1: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a, b as Attributes.Length);
        const c2: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        const p: Attributes.Point = c instanceof Attributes.Point ? c : new Attributes.Point(e as Attributes.Length, f as Attributes.Length);
        super("c", c1, c2, p);
      }
      public buildInstance(c1: Attributes.Point, c2: Attributes.Point, p: Attributes.Point): CurveToCubicRel {
        return new CurveToCubicRel(c1, c2, p);
      }
      public defaultInstance(): CurveToCubicRel {
        return new CurveToCubicRel();
      }
    }

    export class CurveToCubicSmoothAbs extends DoublePoint {
      constructor(c2?: Attributes.Point, p?: Attributes.Point)
      constructor(c2x: Attributes.Length, c2y: Attributes.Length, px: Attributes.Length, py: Attributes.Length)
      constructor(a: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), b: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), c?: Attributes.Length, d?: Attributes.Length) {
        const c2: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a as Attributes.Length, b as Attributes.Length);
        const p: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        super("S", c2, p);
      }
      public buildInstance(c2: Attributes.Point, p: Attributes.Point): CurveToCubicSmoothAbs {
        return new CurveToCubicSmoothAbs(c2, p);
      }
      public defaultInstance(): CurveToCubicSmoothAbs {
        return new CurveToCubicSmoothAbs();
      }
    }
    export class CurveToCubicSmoothRel extends DoublePoint {
      constructor(c2?: Attributes.Point, p?: Attributes.Point)
      constructor(c2x: Attributes.Length, c2y: Attributes.Length, px: Attributes.Length, py: Attributes.Length)
      constructor(a: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), b: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), c?: Attributes.Length, d?: Attributes.Length) {
        const c2: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a as Attributes.Length, b as Attributes.Length);
        const p: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        super("s", c2, p);
      }
      public buildInstance(c2: Attributes.Point, p: Attributes.Point): CurveToCubicSmoothRel {
        return new CurveToCubicSmoothRel(c2, p);
      }
      public defaultInstance(): CurveToCubicSmoothRel {
        return new CurveToCubicSmoothRel();
      }
    }

    export class CurveToQuadraticAbs extends DoublePoint {
      constructor(c1?: Attributes.Point, p?: Attributes.Point)
      constructor(c1x: Attributes.Length, c1y: Attributes.Length, px: Attributes.Length, py: Attributes.Length)
      constructor(a: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), b: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), c?: Attributes.Length, d?: Attributes.Length) {
        const c1: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a as Attributes.Length, b as Attributes.Length);
        const p: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        super("Q", c1, p);
      }
      public buildInstance(c1: Attributes.Point, p: Attributes.Point): CurveToQuadraticAbs {
        return new CurveToQuadraticAbs(c1, p);
      }
      public defaultInstance(): CurveToQuadraticAbs {
        return new CurveToQuadraticAbs();
      }
    }
    export class CurveToQuadraticRel extends DoublePoint {
      constructor(c1?: Attributes.Point, p?: Attributes.Point)
      constructor(c1x: Attributes.Length, c1y: Attributes.Length, px: Attributes.Length, py: Attributes.Length)
      constructor(a: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), b: Attributes.Length | Attributes.Point = new Attributes.Point(0, 0), c?: Attributes.Length, d?: Attributes.Length) {
        const c1: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a as Attributes.Length, b as Attributes.Length);
        const p: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        super("q", c1, p);
      }
      public buildInstance(c1: Attributes.Point, p: Attributes.Point): CurveToQuadraticRel {
        return new CurveToQuadraticRel(c1, p);
      }
      public defaultInstance(): CurveToQuadraticRel {
        return new CurveToQuadraticRel();
      }
    }

    export class CurveToQuadraticSmoothAbs extends SinglePoint {
      constructor(p?: Attributes.Point)
      constructor(x: Attributes.Length, y: Attributes.Length)
      constructor(p: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), y: Attributes.Length = 0) {
        super("T", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
      }
      public buildInstance(p: Attributes.Point): CurveToQuadraticSmoothAbs {
        return new CurveToQuadraticSmoothAbs(p);
      }
      public defaultInstance(): CurveToQuadraticSmoothAbs {
        return new CurveToQuadraticSmoothAbs();
      }
    }
    export class CurveToQuadraticSmoothRel extends SinglePoint {
      constructor(p?: Attributes.Point)
      constructor(x: Attributes.Length, y: Attributes.Length)
      constructor(p: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), y: Attributes.Length = 0) {
        super("t", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
      }
      public buildInstance(p: Attributes.Point): CurveToQuadraticSmoothRel {
        return new CurveToQuadraticSmoothRel(p);
      }
      public defaultInstance(): CurveToQuadraticSmoothRel {
        return new CurveToQuadraticSmoothRel();
      }
    }

    export abstract class ArcTo extends PathSegment {
      constructor(command: "A" | "a", public r: Attributes.Point = new Attributes.Point(0, 0), public p: Attributes.Point = new Attributes.Point(0, 0), public xAxisRotate: number = 0, public largeArc: boolean = false, public sweepClockwise: boolean = true) {
        super(command);
      }
      public toString(): string {
        return `${this.r.toString()} ${this.xAxisRotate} ${this.largeArc ? 1 : 0} ${this.sweepClockwise ? 1 : 0} ${this.p.toString()}`;
      }
      public parseArgs(css: string): ArcTo {
        const toks = css.split(" ");
        return this.buildInstance(this.r.parse(toks[0]), this.p.parse(toks[4]), parseFloat(toks[1]), toks[2] === "1", toks[3] === "1");
      }
      public interpolate(from: ArcTo, t: number): ArcTo {
        return this.buildInstance(this.r.interpolate(from.r, t), this.p.interpolate(from.p, t), _lerp(from.xAxisRotate, this.xAxisRotate, t), (t < 0.5) ? from.largeArc : this.largeArc, (t < 0.5) ? from.sweepClockwise : this.sweepClockwise);
      }
      public abstract buildInstance(r: Attributes.Point, p: Attributes.Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcTo;
      public abstract defaultInstance(): ArcTo;
    }

    export class ArcToAbs extends ArcTo {
      constructor(r?: Attributes.Point, p?: Attributes.Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
      constructor(rx: Attributes.Length, ry: Attributes.Length, px: Attributes.Length, py: Attributes.Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
      constructor(a: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), b: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), c?: number | Attributes.Length, d?: boolean | Attributes.Length, e?: boolean | number, f?: boolean, g?: boolean) {
        const r: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a, b as Attributes.Length);
        const p: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        let xAxisRotate: number = 0;
        let largeArc: boolean = false;
        let sweepClockwise: boolean = true;
        if (a instanceof Attributes.Point && b instanceof Attributes.Point) {
          if (typeof c !== "undefined") {
            xAxisRotate = c as number;
          }
          if (typeof d !== "undefined") {
            largeArc = d as boolean;
          }
          if (typeof e !== "undefined") {
            sweepClockwise = e as boolean;
          }
        } else {
          if (typeof e !== "undefined") {
            xAxisRotate = e as number;
          }
          if (typeof f !== "undefined") {
            largeArc = f as boolean;
          }
          if (typeof g !== "undefined") {
            sweepClockwise = g as boolean;
          }
        }
        super("A", r, p, xAxisRotate, largeArc, sweepClockwise);
      }
      public buildInstance(r: Attributes.Point, p: Attributes.Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToAbs {
        return new ArcToAbs(r, p, xAxisRotate, largeArc, sweepClockwise);
      }
      public defaultInstance(): ArcToAbs {
        return new ArcToAbs();
      }
    }
    export class ArcToRel extends ArcTo {
      constructor(r?: Attributes.Point, p?: Attributes.Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
      constructor(rx: Attributes.Length, ry: Attributes.Length, px: Attributes.Length, py: Attributes.Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
      constructor(a: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), b: Attributes.Point | Attributes.Length = new Attributes.Point(0, 0), c?: number | Attributes.Length, d?: boolean | Attributes.Length, e?: boolean | number, f?: boolean, g?: boolean) {
        const r: Attributes.Point = a instanceof Attributes.Point ? a : new Attributes.Point(a, b as Attributes.Length);
        const p: Attributes.Point = b instanceof Attributes.Point ? b : new Attributes.Point(c as Attributes.Length, d as Attributes.Length);
        let xAxisRotate: number = 0;
        let largeArc: boolean = false;
        let sweepClockwise: boolean = true;
        if (a instanceof Attributes.Point && b instanceof Attributes.Point) {
          if (typeof c !== "undefined") {
            xAxisRotate = c as number;
          }
          if (typeof d !== "undefined") {
            largeArc = d as boolean;
          }
          if (typeof e !== "undefined") {
            sweepClockwise = e as boolean;
          }
        } else {
          if (typeof e !== "undefined") {
            xAxisRotate = e as number;
          }
          if (typeof f !== "undefined") {
            largeArc = f as boolean;
          }
          if (typeof g !== "undefined") {
            sweepClockwise = g as boolean;
          }
        }
        super("a", r, p, xAxisRotate, largeArc, sweepClockwise);
      }
      public buildInstance(r: Attributes.Point, p: Attributes.Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToRel {
        return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
      }
      public defaultInstance(): ArcToRel {
        return new ArcToRel();
      }
    }
  }

}
