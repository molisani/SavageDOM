import { Attribute } from "../attribute";
import { BaseElement } from "../element";
import { _lerp } from "../interpolation";
import { _LengthInterpolate, _LengthParse, Length } from "./base";
import { Point } from "./point";

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
  public get(element: SVGElement, attr: string): PathSegment {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: SVGElement, attr: string, override?: PathSegment): void {
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
    constructor(command: "H" | "h" | "V" | "v", public l: Length = 0) {
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
    public abstract buildInstance(l: Length): SingleLength;
    public abstract defaultInstance(): SingleLength;
  }
  export abstract class SinglePoint extends PathSegment {
    constructor(command: "M" | "m" | "L" | "l" | "T" | "t", public p: Point = new Point(0, 0)) {
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
    public abstract buildInstance(p: Point): SinglePoint;
    public abstract defaultInstance(): SinglePoint;
  }
  export abstract class DoublePoint extends PathSegment {
    constructor(command: "Q" | "q" | "S" | "s", public p1: Point = new Point(0, 0), public p2: Point = new Point(0, 0)) {
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
    public abstract buildInstance(p1: Point, p2: Point): DoublePoint;
    public abstract defaultInstance(): DoublePoint;
  }
  export abstract class TriplePoint extends PathSegment {
    constructor(command: "C" | "c", public p1: Point = new Point(0, 0), public p2: Point = new Point(0, 0), public p3: Point = new Point(0, 0)) {
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
    public abstract buildInstance(p1: Point, p2: Point, p3: Point): TriplePoint;
    public abstract defaultInstance(): TriplePoint;
  }

  export class MoveToAbs extends SinglePoint {
    constructor(p?: Point)
    constructor(x: Length, y: Length)
    constructor(p: Point | Length = new Point(0, 0), y: Length = 0) {
      super("M", p instanceof Point ? p : new Point(p, y));
    }
    public buildInstance(p: Point): MoveToAbs {
      return new MoveToAbs(p);
    }
    public defaultInstance(): MoveToAbs {
      return new MoveToAbs();
    }
  }
  export class MoveToRel extends SinglePoint {
    constructor(p?: Point)
    constructor(x: Length, y: Length)
    constructor(p: Point | Length = new Point(0, 0), y: Length = 0) {
      super("m", p instanceof Point ? p : new Point(p, y));
    }
    public buildInstance(p: Point): MoveToRel {
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
    constructor(p?: Point)
    constructor(x: Length, y: Length)
    constructor(p: Point | Length = new Point(0, 0), y: Length = 0) {
      super("L", p instanceof Point ? p : new Point(p, y));
    }
    public buildInstance(p: Point): LineToAbs {
      return new LineToAbs(p);
    }
    public defaultInstance(): LineToAbs {
      return new LineToAbs();
    }
  }
  export class LineToRel extends SinglePoint {
    constructor(p?: Point)
    constructor(x: Length, y: Length)
    constructor(p: Point | Length = new Point(0, 0), y: Length = 0) {
      super("l", p instanceof Point ? p : new Point(p, y));
    }
    public buildInstance(p: Point): LineToRel {
      return new LineToRel(p);
    }
    public defaultInstance(): LineToRel {
      return new LineToRel();
    }
  }

  export class LineToHorizontalAbs extends SingleLength {
    constructor(h: Length = 0) {
      super("H", h);
    }
    public buildInstance(h: Length): LineToHorizontalAbs {
      return new LineToHorizontalAbs(h);
    }
    public defaultInstance(): LineToHorizontalAbs {
      return new LineToHorizontalAbs();
    }
  }
  export class LineToHorizontalRel extends SingleLength {
    constructor(h: Length = 0) {
      super("h", h);
    }
    public buildInstance(h: Length): LineToHorizontalRel {
      return new LineToHorizontalRel(h);
    }
    public defaultInstance(): LineToHorizontalRel {
      return new LineToHorizontalRel();
    }
  }

  export class LineToVerticalAbs extends SingleLength {
    constructor(v: Length = 0) {
      super("V", v);
    }
    public buildInstance(v: Length): LineToVerticalAbs {
      return new LineToVerticalAbs(v);
    }
    public defaultInstance(): LineToVerticalAbs {
      return new LineToVerticalAbs();
    }
  }
  export class LineToVerticalRel extends SingleLength {
    constructor(v: Length = 0) {
      super("v", v);
    }
    public buildInstance(v: Length): LineToVerticalAbs {
      return new LineToVerticalAbs(v);
    }
    public defaultInstance(): LineToVerticalAbs {
      return new LineToVerticalAbs();
    }
  }

  export class CurveToCubicAbs extends TriplePoint {
    constructor(c1?: Point, c2?: Point, p?: Point)
    constructor(c1x: Length, c1y: Length, c2x: Length, c2y: Length, px: Length, py: Length)
    constructor(a: Length | Point = new Point(0, 0), b: Length | Point = new Point(0, 0), c: Length | Point = new Point(0, 0), d?: Length, e?: Length, f?: Length) {
      const c1: Point = a instanceof Point ? a : new Point(a, b as Length);
      const c2: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      const p: Point = c instanceof Point ? c : new Point(e as Length, f as Length);
      super("C", c1, c2, p);
    }
    public buildInstance(c1: Point, c2: Point, p: Point): CurveToCubicAbs {
      return new CurveToCubicAbs(c1, c2, p);
    }
    public defaultInstance(): CurveToCubicAbs {
      return new CurveToCubicAbs();
    }
  }
  export class CurveToCubicRel extends TriplePoint {
    constructor(c1?: Point, c2?: Point, p?: Point)
    constructor(c1x: Length, c1y: Length, c2x: Length, c2y: Length, px: Length, py: Length)
    constructor(a: Length | Point = new Point(0, 0), b: Length | Point = new Point(0, 0), c: Length | Point = new Point(0, 0), d?: Length, e?: Length, f?: Length) {
      const c1: Point = a instanceof Point ? a : new Point(a, b as Length);
      const c2: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      const p: Point = c instanceof Point ? c : new Point(e as Length, f as Length);
      super("c", c1, c2, p);
    }
    public buildInstance(c1: Point, c2: Point, p: Point): CurveToCubicRel {
      return new CurveToCubicRel(c1, c2, p);
    }
    public defaultInstance(): CurveToCubicRel {
      return new CurveToCubicRel();
    }
  }

  export class CurveToCubicSmoothAbs extends DoublePoint {
    constructor(c2?: Point, p?: Point)
    constructor(c2x: Length, c2y: Length, px: Length, py: Length)
    constructor(a: Length | Point = new Point(0, 0), b: Length | Point = new Point(0, 0), c?: Length, d?: Length) {
      const c2: Point = a instanceof Point ? a : new Point(a as Length, b as Length);
      const p: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      super("S", c2, p);
    }
    public buildInstance(c2: Point, p: Point): CurveToCubicSmoothAbs {
      return new CurveToCubicSmoothAbs(c2, p);
    }
    public defaultInstance(): CurveToCubicSmoothAbs {
      return new CurveToCubicSmoothAbs();
    }
  }
  export class CurveToCubicSmoothRel extends DoublePoint {
    constructor(c2?: Point, p?: Point)
    constructor(c2x: Length, c2y: Length, px: Length, py: Length)
    constructor(a: Length | Point = new Point(0, 0), b: Length | Point = new Point(0, 0), c?: Length, d?: Length) {
      const c2: Point = a instanceof Point ? a : new Point(a as Length, b as Length);
      const p: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      super("s", c2, p);
    }
    public buildInstance(c2: Point, p: Point): CurveToCubicSmoothRel {
      return new CurveToCubicSmoothRel(c2, p);
    }
    public defaultInstance(): CurveToCubicSmoothRel {
      return new CurveToCubicSmoothRel();
    }
  }

  export class CurveToQuadraticAbs extends DoublePoint {
    constructor(c1?: Point, p?: Point)
    constructor(c1x: Length, c1y: Length, px: Length, py: Length)
    constructor(a: Length | Point = new Point(0, 0), b: Length | Point = new Point(0, 0), c?: Length, d?: Length) {
      const c1: Point = a instanceof Point ? a : new Point(a as Length, b as Length);
      const p: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      super("Q", c1, p);
    }
    public buildInstance(c1: Point, p: Point): CurveToQuadraticAbs {
      return new CurveToQuadraticAbs(c1, p);
    }
    public defaultInstance(): CurveToQuadraticAbs {
      return new CurveToQuadraticAbs();
    }
  }
  export class CurveToQuadraticRel extends DoublePoint {
    constructor(c1?: Point, p?: Point)
    constructor(c1x: Length, c1y: Length, px: Length, py: Length)
    constructor(a: Length | Point = new Point(0, 0), b: Length | Point = new Point(0, 0), c?: Length, d?: Length) {
      const c1: Point = a instanceof Point ? a : new Point(a as Length, b as Length);
      const p: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      super("q", c1, p);
    }
    public buildInstance(c1: Point, p: Point): CurveToQuadraticRel {
      return new CurveToQuadraticRel(c1, p);
    }
    public defaultInstance(): CurveToQuadraticRel {
      return new CurveToQuadraticRel();
    }
  }

  export class CurveToQuadraticSmoothAbs extends SinglePoint {
    constructor(p?: Point)
    constructor(x: Length, y: Length)
    constructor(p: Point | Length = new Point(0, 0), y: Length = 0) {
      super("T", p instanceof Point ? p : new Point(p, y));
    }
    public buildInstance(p: Point): CurveToQuadraticSmoothAbs {
      return new CurveToQuadraticSmoothAbs(p);
    }
    public defaultInstance(): CurveToQuadraticSmoothAbs {
      return new CurveToQuadraticSmoothAbs();
    }
  }
  export class CurveToQuadraticSmoothRel extends SinglePoint {
    constructor(p?: Point)
    constructor(x: Length, y: Length)
    constructor(p: Point | Length = new Point(0, 0), y: Length = 0) {
      super("t", p instanceof Point ? p : new Point(p, y));
    }
    public buildInstance(p: Point): CurveToQuadraticSmoothRel {
      return new CurveToQuadraticSmoothRel(p);
    }
    public defaultInstance(): CurveToQuadraticSmoothRel {
      return new CurveToQuadraticSmoothRel();
    }
  }

  export abstract class ArcTo extends PathSegment {
    constructor(command: "A" | "a", public r: Point = new Point(0, 0), public p: Point = new Point(0, 0), public xAxisRotate: number = 0, public largeArc: boolean = false, public sweepClockwise: boolean = true) {
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
    public abstract buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcTo;
    public abstract defaultInstance(): ArcTo;
  }

  export class ArcToAbs extends ArcTo {
    constructor(r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
    constructor(rx: Length, ry: Length, px: Length, py: Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
    constructor(a: Point | Length = new Point(0, 0), b: Point | Length = new Point(0, 0), c?: number | Length, d?: boolean | Length, e?: boolean | number, f?: boolean, g?: boolean) {
      const r: Point = a instanceof Point ? a : new Point(a, b as Length);
      const p: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      let xAxisRotate: number = 0;
      let largeArc: boolean = false;
      let sweepClockwise: boolean = true;
      if (a instanceof Point && b instanceof Point) {
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
    public buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToAbs {
      return new ArcToAbs(r, p, xAxisRotate, largeArc, sweepClockwise);
    }
    public defaultInstance(): ArcToAbs {
      return new ArcToAbs();
    }
  }
  export class ArcToRel extends ArcTo {
    constructor(r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
    constructor(rx: Length, ry: Length, px: Length, py: Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean)
    constructor(a: Point | Length = new Point(0, 0), b: Point | Length = new Point(0, 0), c?: number | Length, d?: boolean | Length, e?: boolean | number, f?: boolean, g?: boolean) {
      const r: Point = a instanceof Point ? a : new Point(a, b as Length);
      const p: Point = b instanceof Point ? b : new Point(c as Length, d as Length);
      let xAxisRotate: number = 0;
      let largeArc: boolean = false;
      let sweepClockwise: boolean = true;
      if (a instanceof Point && b instanceof Point) {
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
    public buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToRel {
      return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
    }
    public defaultInstance(): ArcToRel {
      return new ArcToRel();
    }
  }
}
