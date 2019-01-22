import { Attribute } from "../attribute";
import { Length } from "./base";
import { Point } from "./point";
export declare abstract class PathSegment implements Attribute<PathSegment> {
    command: PathSegment.Command;
    constructor(command: PathSegment.Command);
    abstract toString(): string;
    parse(css: string | null): PathSegment;
    get(element: SVGElement, attr: string): PathSegment;
    set(element: SVGElement, attr: string, override?: PathSegment): void;
    abstract parseArgs(css: string): PathSegment;
    abstract defaultInstance(): PathSegment;
    interpolator(from: PathSegment): (t: number) => PathSegment;
}
export declare namespace PathSegment {
    enum Command {
        MoveToAbs = "M",
        MoveToRel = "m",
        ClosePath = "Z",
        LineToAbs = "L",
        LineToRel = "l",
        LineToHorizontalAbs = "H",
        LineToHorizontalRel = "h",
        LineToVerticalAbs = "V",
        LineToVerticalRel = "v",
        CurveToCubicAbs = "C",
        CurveToCubicRel = "c",
        CurveToCubicSmoothAbs = "S",
        CurveToCubicSmoothRel = "s",
        CurveToQuadraticAbs = "Q",
        CurveToQuadraticRel = "q",
        CurveToQuadraticSmoothAbs = "T",
        CurveToQuadraticSmoothRel = "t",
        ArcToAbs = "A",
        ArcToRel = "a"
    }
    abstract class SingleLength extends PathSegment {
        l: Length;
        constructor(command: Command.LineToHorizontalAbs | Command.LineToHorizontalRel | Command.LineToVerticalAbs | Command.LineToVerticalRel, l?: Length);
        toString(): string;
        parseArgs(css: string): SingleLength;
        abstract buildInstance(l: Length): SingleLength;
        abstract defaultInstance(): SingleLength;
    }
    abstract class SinglePoint extends PathSegment {
        p: Point;
        constructor(command: Command.MoveToAbs | Command.MoveToRel | Command.LineToAbs | Command.LineToRel | Command.CurveToQuadraticSmoothAbs | Command.CurveToQuadraticSmoothRel, p?: Point);
        toString(): string;
        parseArgs(css: string): SinglePoint;
        abstract buildInstance(p: Point): SinglePoint;
        abstract defaultInstance(): SinglePoint;
    }
    abstract class DoublePoint extends PathSegment {
        p1: Point;
        p2: Point;
        constructor(command: Command.CurveToQuadraticAbs | Command.CurveToQuadraticRel | Command.CurveToCubicSmoothAbs | Command.CurveToCubicSmoothRel, p1?: Point, p2?: Point);
        toString(): string;
        parseArgs(css: string): DoublePoint;
        abstract buildInstance(p1: Point, p2: Point): DoublePoint;
        abstract defaultInstance(): DoublePoint;
    }
    abstract class TriplePoint extends PathSegment {
        p1: Point;
        p2: Point;
        p3: Point;
        constructor(command: Command.CurveToCubicAbs | Command.CurveToCubicRel, p1?: Point, p2?: Point, p3?: Point);
        toString(): string;
        parseArgs(css: string): TriplePoint;
        abstract buildInstance(p1: Point, p2: Point, p3: Point): TriplePoint;
        abstract defaultInstance(): TriplePoint;
    }
    class MoveToAbs extends SinglePoint {
        constructor(p?: Point);
        constructor(x: Length, y: Length);
        buildInstance(p: Point): MoveToAbs;
        defaultInstance(): MoveToAbs;
    }
    class MoveToRel extends SinglePoint {
        constructor(p?: Point);
        constructor(x: Length, y: Length);
        buildInstance(p: Point): MoveToRel;
        defaultInstance(): MoveToRel;
    }
    class ClosePath extends PathSegment {
        constructor();
        toString(): string;
        parseArgs(css: string): ClosePath;
        defaultInstance(): ClosePath;
    }
    class LineToAbs extends SinglePoint {
        constructor(p?: Point);
        constructor(x: Length, y: Length);
        buildInstance(p: Point): LineToAbs;
        defaultInstance(): LineToAbs;
    }
    class LineToRel extends SinglePoint {
        constructor(p?: Point);
        constructor(x: Length, y: Length);
        buildInstance(p: Point): LineToRel;
        defaultInstance(): LineToRel;
    }
    class LineToHorizontalAbs extends SingleLength {
        constructor(h?: Length);
        buildInstance(h: Length): LineToHorizontalAbs;
        defaultInstance(): LineToHorizontalAbs;
    }
    class LineToHorizontalRel extends SingleLength {
        constructor(h?: Length);
        buildInstance(h: Length): LineToHorizontalRel;
        defaultInstance(): LineToHorizontalRel;
    }
    class LineToVerticalAbs extends SingleLength {
        constructor(v?: Length);
        buildInstance(v: Length): LineToVerticalAbs;
        defaultInstance(): LineToVerticalAbs;
    }
    class LineToVerticalRel extends SingleLength {
        constructor(v?: Length);
        buildInstance(v: Length): LineToVerticalAbs;
        defaultInstance(): LineToVerticalAbs;
    }
    class CurveToCubicAbs extends TriplePoint {
        constructor(c1?: Point, c2?: Point, p?: Point);
        constructor(c1x: Length, c1y: Length, c2x: Length, c2y: Length, px: Length, py: Length);
        buildInstance(c1: Point, c2: Point, p: Point): CurveToCubicAbs;
        defaultInstance(): CurveToCubicAbs;
    }
    class CurveToCubicRel extends TriplePoint {
        constructor(c1?: Point, c2?: Point, p?: Point);
        constructor(c1x: Length, c1y: Length, c2x: Length, c2y: Length, px: Length, py: Length);
        buildInstance(c1: Point, c2: Point, p: Point): CurveToCubicRel;
        defaultInstance(): CurveToCubicRel;
    }
    class CurveToCubicSmoothAbs extends DoublePoint {
        constructor(c2?: Point, p?: Point);
        constructor(c2x: Length, c2y: Length, px: Length, py: Length);
        buildInstance(c2: Point, p: Point): CurveToCubicSmoothAbs;
        defaultInstance(): CurveToCubicSmoothAbs;
    }
    class CurveToCubicSmoothRel extends DoublePoint {
        constructor(c2?: Point, p?: Point);
        constructor(c2x: Length, c2y: Length, px: Length, py: Length);
        buildInstance(c2: Point, p: Point): CurveToCubicSmoothRel;
        defaultInstance(): CurveToCubicSmoothRel;
    }
    class CurveToQuadraticAbs extends DoublePoint {
        constructor(c1?: Point, p?: Point);
        constructor(c1x: Length, c1y: Length, px: Length, py: Length);
        buildInstance(c1: Point, p: Point): CurveToQuadraticAbs;
        defaultInstance(): CurveToQuadraticAbs;
    }
    class CurveToQuadraticRel extends DoublePoint {
        constructor(c1?: Point, p?: Point);
        constructor(c1x: Length, c1y: Length, px: Length, py: Length);
        buildInstance(c1: Point, p: Point): CurveToQuadraticRel;
        defaultInstance(): CurveToQuadraticRel;
    }
    class CurveToQuadraticSmoothAbs extends SinglePoint {
        constructor(p?: Point);
        constructor(x: Length, y: Length);
        buildInstance(p: Point): CurveToQuadraticSmoothAbs;
        defaultInstance(): CurveToQuadraticSmoothAbs;
    }
    class CurveToQuadraticSmoothRel extends SinglePoint {
        constructor(p?: Point);
        constructor(x: Length, y: Length);
        buildInstance(p: Point): CurveToQuadraticSmoothRel;
        defaultInstance(): CurveToQuadraticSmoothRel;
    }
    abstract class ArcTo extends PathSegment {
        r: Point;
        p: Point;
        xAxisRotate: number;
        largeArc: boolean;
        sweepClockwise: boolean;
        constructor(command: Command.ArcToAbs | Command.ArcToRel, r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
        toString(): string;
        parseArgs(css: string): ArcTo;
        abstract buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: boolean): ArcTo;
        abstract defaultInstance(): ArcTo;
    }
    class ArcToAbs extends ArcTo {
        constructor(r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
        constructor(rx: Length, ry: Length, px: Length, py: Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
        buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: boolean): ArcToAbs;
        defaultInstance(): ArcToAbs;
    }
    class ArcToRel extends ArcTo {
        constructor(r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
        constructor(rx: Length, ry: Length, px: Length, py: Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
        buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: boolean): ArcToRel;
        defaultInstance(): ArcToRel;
    }
}
