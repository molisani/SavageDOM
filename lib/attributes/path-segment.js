"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = require("d3-interpolate");
const base_1 = require("./base");
const point_1 = require("./point");
class PathSegment {
    constructor(command) {
        this.command = command;
    }
    parse(css) {
        if (css !== null) {
            return this.parseArgs(css.substr(2));
        }
        else {
            return this.defaultInstance();
        }
    }
    get(element, attr) {
        return this.parse(element.getAttribute(attr));
    }
    set(element, attr, override) {
        if (override !== undefined) {
            element.setAttribute(attr, override.toString());
        }
        else {
            element.setAttribute(attr, this.toString());
        }
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.PathSegment = PathSegment;
(function (PathSegment) {
    let Command;
    (function (Command) {
        Command["MoveToAbs"] = "M";
        Command["MoveToRel"] = "m";
        Command["ClosePath"] = "Z";
        Command["LineToAbs"] = "L";
        Command["LineToRel"] = "l";
        Command["LineToHorizontalAbs"] = "H";
        Command["LineToHorizontalRel"] = "h";
        Command["LineToVerticalAbs"] = "V";
        Command["LineToVerticalRel"] = "v";
        Command["CurveToCubicAbs"] = "C";
        Command["CurveToCubicRel"] = "c";
        Command["CurveToCubicSmoothAbs"] = "S";
        Command["CurveToCubicSmoothRel"] = "s";
        Command["CurveToQuadraticAbs"] = "Q";
        Command["CurveToQuadraticRel"] = "q";
        Command["CurveToQuadraticSmoothAbs"] = "T";
        Command["CurveToQuadraticSmoothRel"] = "t";
        Command["ArcToAbs"] = "A";
        Command["ArcToRel"] = "a";
    })(Command = PathSegment.Command || (PathSegment.Command = {}));
    class SingleLength extends PathSegment {
        constructor(command, l = 0) {
            super(command);
            this.l = l;
        }
        toString() {
            return `${this.command} ${this.l.toString()}`;
        }
        parseArgs(css) {
            return this.buildInstance(base_1.LengthParse(css));
        }
    }
    PathSegment.SingleLength = SingleLength;
    class SinglePoint extends PathSegment {
        constructor(command, p = new point_1.Point(0, 0)) {
            super(command);
            this.p = p;
        }
        toString() {
            return `${this.command} ${this.p.toString()}`;
        }
        parseArgs(css) {
            return this.buildInstance(this.p.parse(css));
        }
    }
    PathSegment.SinglePoint = SinglePoint;
    class DoublePoint extends PathSegment {
        constructor(command, p1 = new point_1.Point(0, 0), p2 = new point_1.Point(0, 0)) {
            super(command);
            this.p1 = p1;
            this.p2 = p2;
        }
        toString() {
            return `${this.command} ${this.p1.toString()} ${this.p2.toString()}`;
        }
        parseArgs(css) {
            const toks = css.split(" ");
            return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]));
        }
    }
    PathSegment.DoublePoint = DoublePoint;
    class TriplePoint extends PathSegment {
        constructor(command, p1 = new point_1.Point(0, 0), p2 = new point_1.Point(0, 0), p3 = new point_1.Point(0, 0)) {
            super(command);
            this.p1 = p1;
            this.p2 = p2;
            this.p3 = p3;
        }
        toString() {
            return `${this.command} ${this.p1.toString()} ${this.p2.toString()} ${this.p3.toString()}`;
        }
        parseArgs(css) {
            const toks = css.split(" ");
            return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]), this.p3.parse(toks[2]));
        }
    }
    PathSegment.TriplePoint = TriplePoint;
    class MoveToAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.MoveToAbs, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new MoveToAbs(p);
        }
        defaultInstance() {
            return new MoveToAbs();
        }
    }
    PathSegment.MoveToAbs = MoveToAbs;
    class MoveToRel extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.MoveToRel, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new MoveToRel(p);
        }
        defaultInstance() {
            return new MoveToRel();
        }
    }
    PathSegment.MoveToRel = MoveToRel;
    class ClosePath extends PathSegment {
        constructor() {
            super(Command.ClosePath);
        }
        toString() {
            return Command.ClosePath;
        }
        parseArgs(css) {
            return new ClosePath();
        }
        defaultInstance() {
            return new ClosePath();
        }
    }
    PathSegment.ClosePath = ClosePath;
    class LineToAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.LineToAbs, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new LineToAbs(p);
        }
        defaultInstance() {
            return new LineToAbs();
        }
    }
    PathSegment.LineToAbs = LineToAbs;
    class LineToRel extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.LineToRel, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new LineToRel(p);
        }
        defaultInstance() {
            return new LineToRel();
        }
    }
    PathSegment.LineToRel = LineToRel;
    class LineToHorizontalAbs extends SingleLength {
        constructor(h = 0) {
            super(Command.LineToHorizontalAbs, h);
        }
        buildInstance(h) {
            return new LineToHorizontalAbs(h);
        }
        defaultInstance() {
            return new LineToHorizontalAbs();
        }
    }
    PathSegment.LineToHorizontalAbs = LineToHorizontalAbs;
    class LineToHorizontalRel extends SingleLength {
        constructor(h = 0) {
            super(Command.LineToHorizontalRel, h);
        }
        buildInstance(h) {
            return new LineToHorizontalRel(h);
        }
        defaultInstance() {
            return new LineToHorizontalRel();
        }
    }
    PathSegment.LineToHorizontalRel = LineToHorizontalRel;
    class LineToVerticalAbs extends SingleLength {
        constructor(v = 0) {
            super(Command.LineToVerticalAbs, v);
        }
        buildInstance(v) {
            return new LineToVerticalAbs(v);
        }
        defaultInstance() {
            return new LineToVerticalAbs();
        }
    }
    PathSegment.LineToVerticalAbs = LineToVerticalAbs;
    class LineToVerticalRel extends SingleLength {
        constructor(v = 0) {
            super(Command.LineToVerticalRel, v);
        }
        buildInstance(v) {
            return new LineToVerticalAbs(v);
        }
        defaultInstance() {
            return new LineToVerticalAbs();
        }
    }
    PathSegment.LineToVerticalRel = LineToVerticalRel;
    class CurveToCubicAbs extends TriplePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c = new point_1.Point(0, 0), d, e, f) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const c2 = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            const p = c instanceof point_1.Point ? c : new point_1.Point(e, f);
            super(Command.CurveToCubicAbs, c1, c2, p);
        }
        buildInstance(c1, c2, p) {
            return new CurveToCubicAbs(c1, c2, p);
        }
        defaultInstance() {
            return new CurveToCubicAbs();
        }
    }
    PathSegment.CurveToCubicAbs = CurveToCubicAbs;
    class CurveToCubicRel extends TriplePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c = new point_1.Point(0, 0), d, e, f) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const c2 = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            const p = c instanceof point_1.Point ? c : new point_1.Point(e, f);
            super(Command.CurveToCubicRel, c1, c2, p);
        }
        buildInstance(c1, c2, p) {
            return new CurveToCubicRel(c1, c2, p);
        }
        defaultInstance() {
            return new CurveToCubicRel();
        }
    }
    PathSegment.CurveToCubicRel = CurveToCubicRel;
    class CurveToCubicSmoothAbs extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c2 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToCubicSmoothAbs, c2, p);
        }
        buildInstance(c2, p) {
            return new CurveToCubicSmoothAbs(c2, p);
        }
        defaultInstance() {
            return new CurveToCubicSmoothAbs();
        }
    }
    PathSegment.CurveToCubicSmoothAbs = CurveToCubicSmoothAbs;
    class CurveToCubicSmoothRel extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c2 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToCubicSmoothRel, c2, p);
        }
        buildInstance(c2, p) {
            return new CurveToCubicSmoothRel(c2, p);
        }
        defaultInstance() {
            return new CurveToCubicSmoothRel();
        }
    }
    PathSegment.CurveToCubicSmoothRel = CurveToCubicSmoothRel;
    class CurveToQuadraticAbs extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToQuadraticAbs, c1, p);
        }
        buildInstance(c1, p) {
            return new CurveToQuadraticAbs(c1, p);
        }
        defaultInstance() {
            return new CurveToQuadraticAbs();
        }
    }
    PathSegment.CurveToQuadraticAbs = CurveToQuadraticAbs;
    class CurveToQuadraticRel extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToQuadraticRel, c1, p);
        }
        buildInstance(c1, p) {
            return new CurveToQuadraticRel(c1, p);
        }
        defaultInstance() {
            return new CurveToQuadraticRel();
        }
    }
    PathSegment.CurveToQuadraticRel = CurveToQuadraticRel;
    class CurveToQuadraticSmoothAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.CurveToQuadraticSmoothAbs, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new CurveToQuadraticSmoothAbs(p);
        }
        defaultInstance() {
            return new CurveToQuadraticSmoothAbs();
        }
    }
    PathSegment.CurveToQuadraticSmoothAbs = CurveToQuadraticSmoothAbs;
    class CurveToQuadraticSmoothRel extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.CurveToQuadraticSmoothRel, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new CurveToQuadraticSmoothRel(p);
        }
        defaultInstance() {
            return new CurveToQuadraticSmoothRel();
        }
    }
    PathSegment.CurveToQuadraticSmoothRel = CurveToQuadraticSmoothRel;
    class ArcTo extends PathSegment {
        constructor(command, r = new point_1.Point(0, 0), p = new point_1.Point(0, 0), xAxisRotate = 0, largeArc = false, sweepClockwise = true) {
            super(command);
            this.r = r;
            this.p = p;
            this.xAxisRotate = xAxisRotate;
            this.largeArc = largeArc;
            this.sweepClockwise = sweepClockwise;
        }
        toString() {
            return `${this.r.toString()} ${this.xAxisRotate} ${this.largeArc ? 1 : 0} ${this.sweepClockwise ? 1 : 0} ${this.p.toString()}`;
        }
        parseArgs(css) {
            const toks = css.split(" ");
            return this.buildInstance(this.r.parse(toks[0]), this.p.parse(toks[4]), parseFloat(toks[1]), toks[2] === "1", toks[3] === "1");
        }
    }
    PathSegment.ArcTo = ArcTo;
    class ArcToAbs extends ArcTo {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d, e, f, g) {
            const r = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            let xAxisRotate = 0;
            let largeArc = false;
            let sweepClockwise = true;
            if (a instanceof point_1.Point && b instanceof point_1.Point) {
                if (typeof c !== "undefined") {
                    xAxisRotate = c;
                }
                if (typeof d !== "undefined") {
                    largeArc = d;
                }
                if (typeof e !== "undefined") {
                    sweepClockwise = e;
                }
            }
            else {
                if (typeof e !== "undefined") {
                    xAxisRotate = e;
                }
                if (typeof f !== "undefined") {
                    largeArc = f;
                }
                if (typeof g !== "undefined") {
                    sweepClockwise = g;
                }
            }
            super(Command.ArcToAbs, r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        buildInstance(r, p, xAxisRotate, largeArc, sweepClockwise) {
            return new ArcToAbs(r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        defaultInstance() {
            return new ArcToAbs();
        }
    }
    PathSegment.ArcToAbs = ArcToAbs;
    class ArcToRel extends ArcTo {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d, e, f, g) {
            const r = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            let xAxisRotate = 0;
            let largeArc = false;
            let sweepClockwise = true;
            if (a instanceof point_1.Point && b instanceof point_1.Point) {
                if (typeof c !== "undefined") {
                    xAxisRotate = c;
                }
                if (typeof d !== "undefined") {
                    largeArc = d;
                }
                if (typeof e !== "undefined") {
                    sweepClockwise = e;
                }
            }
            else {
                if (typeof e !== "undefined") {
                    xAxisRotate = e;
                }
                if (typeof f !== "undefined") {
                    largeArc = f;
                }
                if (typeof g !== "undefined") {
                    sweepClockwise = g;
                }
            }
            super(Command.ArcToRel, r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        buildInstance(r, p, xAxisRotate, largeArc, sweepClockwise) {
            return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        defaultInstance() {
            return new ArcToRel();
        }
    }
    PathSegment.ArcToRel = ArcToRel;
})(PathSegment = exports.PathSegment || (exports.PathSegment = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1zZWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBRTdDLGlDQUE2QztBQUM3QyxtQ0FBZ0M7QUFFaEMsTUFBc0IsV0FBVztJQUMvQixZQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLEdBQWtCO1FBQzdCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUFzQjtRQUNsRSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUdNLFlBQVksQ0FBQyxJQUFpQjtRQUNuQyxNQUFNLElBQUksR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsQ0FBUyxF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