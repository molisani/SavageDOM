namespace SavageDOM.Attribute {

  export abstract class PathSegment implements Attribute<PathSegment> {
    type: "M" | "m" | "L" | "l" | "Q" | "q" | "T" | "t" | "C" | "c" | "S" | "s" | "A" | "a" | "Z";
    abstract toString(): string;
    parse(css: string | null): PathSegment {
      if (css !== null) {
        return this.parseArgs(css.substr(2));
      } else {
        return this.defaultInstance();
      }
    }
    get(element: Element<SVGElement, any>, attr: string): PathSegment {
      return this.parse(element.getAttribute(attr));
    }
    set(element: Element<SVGElement, any>, attr: string, override?: PathSegment): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    abstract parseArgs(css: string): PathSegment;
    abstract defaultInstance(): PathSegment;
    abstract interpolate(from: PathSegment, t: number): PathSegment;
  }
  export namespace PathSegment {
    export abstract class SinglePoint extends PathSegment {
      abstract type: "M" | "m" | "L" | "l" | "T" | "t";
      constructor(public p: Point = new Point(0, 0)) {
        super();
      }
      toString(): string {
        return `${this.type} ${this.p.toString()}`;
      }
      parseArgs(css: string): SinglePoint { 
        return this.buildInstance(this.p.parse(css));
      }
      interpolate(from: SinglePoint, t: number): SinglePoint {
        return this.buildInstance(this.p.interpolate(from.p, t));
      }
      abstract buildInstance(p: Point): SinglePoint;
      abstract defaultInstance(): SinglePoint;
    }
    export abstract class DoublePoint extends PathSegment {
      abstract type: "Q" | "q" | "S" | "s";
      constructor(public p1: Point = new Point(0, 0), public p2: Point = new Point(0, 0)) {
        super();
      }
      toString(): string {
        return `${this.type} ${this.p1.toString()} ${this.p2.toString()}`;
      }
      parseArgs(css: string): DoublePoint {
        const toks = css.split(" ");
        return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]));
      }
      interpolate(from: DoublePoint, t: number): DoublePoint {
        return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t));
      }
      abstract buildInstance(p1: Point, p2: Point): DoublePoint;
      abstract defaultInstance(): DoublePoint;
    }
    export abstract class TriplePoint extends PathSegment {
      abstract type: "C" | "c";
      constructor(public p1: Point = new Point(0, 0), public p2: Point = new Point(0, 0), public p3: Point = new Point(0, 0)) {
        super();
      }
      toString(): string {
        return `${this.type} ${this.p1.toString()} ${this.p2.toString()} ${this.p3.toString()}`;
      }
      parseArgs(css: string): TriplePoint {
        const toks = css.split(" ");
        return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]), this.p3.parse(toks[2]));
      }
      interpolate(from: TriplePoint, t: number): TriplePoint {
        return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t), this.p3.interpolate(from.p3, t));
      }
      abstract buildInstance(p1: Point, p2: Point, p3: Point): TriplePoint;
      abstract defaultInstance(): TriplePoint;
    }
    export class MoveToAbs extends SinglePoint {
      type: "M" = "M";
      buildInstance(p: Point): MoveToAbs {
        return new MoveToAbs(p);
      }
      defaultInstance(): MoveToAbs {
        return new MoveToAbs();
      }
    }
    export class MoveToRel extends SinglePoint {
      type: "m" = "m";
      buildInstance(p: Point): MoveToRel {
        return new MoveToRel(p);
      }
      defaultInstance(): MoveToRel {
        return new MoveToRel();
      }
    }
    export class LineToAbs extends SinglePoint {
      type: "L" = "L";
      buildInstance(p: Point): LineToAbs {
        return new LineToAbs(p);
      }
      defaultInstance(): LineToAbs {
        return new LineToAbs();
      }
    }
    export class LineToRel extends SinglePoint {
      type: "l" = "l";
      buildInstance(p: Point): LineToRel {
        return new LineToRel(p);
      }
      defaultInstance(): LineToRel {
        return new LineToRel();
      }
    }
    export class CurveToQuadraticAbs extends DoublePoint {
      type: "Q" = "Q";
      buildInstance(p1: Point, p2: Point): CurveToQuadraticAbs {
        return new CurveToQuadraticAbs(p1, p2);
      }
      defaultInstance(): CurveToQuadraticAbs {
        return new CurveToQuadraticAbs();
      }
    }
    export class CurveToQuadraticRel extends DoublePoint {
      type: "q" = "q";
      buildInstance(p1: Point, p2: Point): CurveToQuadraticRel {
        return new CurveToQuadraticRel(p1, p2);
      }
      defaultInstance(): CurveToQuadraticRel {
        return new CurveToQuadraticRel();
      }
    }
    export class CurveToQuadraticSmoothAbs extends SinglePoint {
      type: "T" = "T";
      buildInstance(p: Point): CurveToQuadraticSmoothAbs {
        return new CurveToQuadraticSmoothAbs(p);
      }
      defaultInstance(): CurveToQuadraticSmoothAbs {
        return new CurveToQuadraticSmoothAbs();
      }
    }
    export class CurveToQuadraticSmoothRel extends SinglePoint {
      type: "t" = "t";
      buildInstance(p: Point): CurveToQuadraticSmoothRel {
        return new CurveToQuadraticSmoothRel(p);
      }
      defaultInstance(): CurveToQuadraticSmoothRel {
        return new CurveToQuadraticSmoothRel();
      }
    }
    export class CurveToCubicAbs extends TriplePoint {
      type: "C" = "C";
      buildInstance(p1: Point, p2: Point, p3: Point): CurveToCubicAbs {
        return new CurveToCubicAbs(p1, p2, p3);
      }
      defaultInstance(): CurveToCubicAbs {
        return new CurveToCubicAbs();
      }
    }
    export class CurveToCubicRel extends TriplePoint {
      type: "c" = "c";
      buildInstance(p1: Point, p2: Point, p3: Point): CurveToCubicRel {
        return new CurveToCubicRel(p1, p2, p3);
      }
      defaultInstance(): CurveToCubicRel {
        return new CurveToCubicRel();
      }
    }
    export class CurveToCubicSmoothAbs extends DoublePoint {
      type: "S" = "S";
      buildInstance(p1: Point, p2: Point): CurveToCubicSmoothAbs {
        return new CurveToCubicSmoothAbs(p1, p2);
      }
      defaultInstance(): CurveToCubicSmoothAbs {
        return new CurveToCubicSmoothAbs();
      }
    }
    export class CurveToCubicSmoothRel extends DoublePoint {
      type: "s" = "s";
      buildInstance(p1: Point, p2: Point): CurveToCubicSmoothRel {
        return new CurveToCubicSmoothRel(p1, p2);
      }
      defaultInstance(): CurveToCubicSmoothRel {
        return new CurveToCubicSmoothRel();
      }
    }
    export abstract class ArcTo extends PathSegment {
      abstract type: "A" | "a";
      constructor(public r: Point = new Point(0, 0), public p: Point = new Point(0, 0), public xAxisRotate: number = 0, public largeArc: boolean = false, public sweepClockwise: boolean = true) {
        super();
      }
      toString(): string {
        return `${this.r.toString()} ${this.xAxisRotate} ${this.largeArc ? 1 : 0} ${this.sweepClockwise ? 1 : 0} ${this.p.toString()}`;
      }
      parseArgs(css: string): ArcTo {
        const toks = css.split(" ");
        return this.buildInstance(this.r.parse(toks[0]), this.p.parse(toks[4]), parseFloat(toks[1]), toks[2] === "1", toks[3] === "1");
      }
      interpolate(from: ArcTo, t: number): ArcTo {
        return this.buildInstance(this.r.interpolate(from.r, t), this.p.interpolate(from.p, t), _lerp(from.xAxisRotate, this.xAxisRotate, t), (t < 0.5) ? from.largeArc : this.largeArc, (t < 0.5) ? from.sweepClockwise : this.sweepClockwise);
      }
      abstract buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcTo;
      abstract defaultInstance(): ArcTo;
    }
    export class ArcToAbs extends ArcTo {
      type: "A" = "A";
      buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToAbs {
        return new ArcToAbs(r, p, xAxisRotate, largeArc, sweepClockwise);
      }
      defaultInstance(): ArcToAbs {
        return new ArcToAbs();
      }
    }
    export class ArcToRel extends ArcTo {
      type: "a" = "a";
      buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToRel {
        return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
      }
      defaultInstance(): ArcToRel {
        return new ArcToRel();
      }
    }
    export class ClosePath extends PathSegment {
      type: "Z" = "Z";
      toString(): string {
        return "Z";
      }
      parseArgs(css: string): ClosePath {
        return new ClosePath();
      }
      defaultInstance(): ClosePath {
        return new ClosePath();
      }
      interpolate(from: ClosePath, t: number): ClosePath {
        return new ClosePath();
      }
    }
  }

}

namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Path {
    d: List<PathSegment>;
    pathLength: number;
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Path extends AbstractShape<SVGPathElement, Attribute.Renderable.Shape.Path> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Path>) {
      super(paper, "path", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    path(d: Attribute.List<Attribute.PathSegment>, pathLength?: number): Elements.Renderable.Shape.Path;
  }

  Paper.prototype.path = function(this: SavageDOM.Paper, d: Attribute.List<Attribute.PathSegment>, pathLength?: number): Elements.Renderable.Shape.Path {
    return new Elements.Renderable.Shape.Path(this, { d, pathLength });
  };

}
