declare namespace SavageDOM {
    const XMLNS = "http://www.w3.org/2000/svg";
    const XLINK = "http://www.w3.org/1999/xlink";
}
declare namespace SavageDOM {
    interface Setter {
        set<Attrs>(element: Element<SVGElement, Attrs>, attr: keyof Attrs, override?: any): void;
    }
    interface Attribute<T> extends Setter {
        parse(css: string | null): T;
        get<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A): T;
        set<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A, override?: T): void;
        interpolate(from: T, t: number): T;
    }
    function _defaultGet<T>(this: Attribute<T>, element: Element<SVGElement, any>, attr: string): T;
    function _defaultSet<T>(this: T, element: Element<SVGElement, any>, attr: string, override?: T): void;
}
declare namespace SavageDOM.Attribute {
    const isAttribute: (obj: any) => obj is Attribute<any>;
    type Inherit = "inherit";
    interface PaintServer {
    }
    type Paint = "none" | "currentColor" | Color | PaintServer | Inherit;
    type Length = number | Dimension<CSSAbsoluteLength | CSSRelativeLength>;
    const _LengthParse: (css: string) => Length;
    const _LengthInterpolate: (a: Length, b: Length, t: number) => Length;
    type Angle = number | Dimension<CSSAngleUnit>;
    interface Presentation {
        "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Inherit;
        "baseline-shift": "auto" | "baseline" | "super" | "sub" | number | Inherit;
        "color": Color | Inherit;
        "color-interpolation": "auto" | "sRGB" | "linearRGB" | Inherit;
        "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Inherit;
        "color-profile": "auto" | "sRGB" | string | Inherit;
        "color-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
        "dominant-baseline": "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | Inherit;
        "fill": Paint;
        "fill-rule": "nonzero" | "evenodd" | Inherit;
        "filter": string | "none" | Inherit;
        "opacity": number | Inherit;
        "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
        "stroke": Paint;
        "stroke-dasharray": "none" | List<Number> | Inherit;
        "stroke-dashoffset": Percentage | Length | Inherit;
        "stroke-linecap": "butt" | "round" | "square" | Inherit;
        "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
        "stroke-miterlimit": number | Inherit;
        "stroke-width": Length | Percentage | Inherit;
    }
    interface Textual {
        "direction": "ltr" | "rtl" | Inherit;
        "font-family": string | Inherit;
        "font-size": Length | Inherit;
        "font-size-adjust": number | "none" | Inherit;
        "font-stretch": "normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | Inherit;
        "font-style": "normal" | "italic" | "oblique" | Inherit;
        "font-variant": "normal" | "small-caps" | Inherit;
        "font-weight": "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Inherit;
        "kerning": "auto" | Length | Inherit;
        "letter-spacing": "normal" | Length | Inherit;
        "text-anchor": "start" | "middle" | "end" | Inherit;
        "text-decoration": "none" | "underline" | "overline" | "line-through" | "blink" | Inherit;
        "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometericPrecision" | Inherit;
        "word-spacing": "normal" | Length | Inherit;
        "writing-mode": "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | Inherit;
    }
    interface HasStyle {
        style: string;
    }
    interface HasClass {
        class: string;
    }
}
declare namespace SavageDOM.Attribute {
    const _lerp: (a: number, b: number, t: number) => number;
    type InterpolationMode = "rgb" | "hsl-shortest" | "hsl-longest" | "hsl-clockwise" | "hsl-counterclockwise";
    class Color implements Attribute<Color> {
        static DEFAULT_MODE: InterpolationMode;
        mode: InterpolationMode;
        private impl;
        constructor();
        constructor(css: string);
        constructor(format: "rgb", r: number, g: number, b: number, a?: number);
        constructor(format: "hsl", h: number, s: number, l: number, a?: number);
        toString(): string;
        parse(css: string | null): Color;
        get(element: Element<SVGElement, any>, attr: string): Color;
        set(element: Element<SVGElement, any>, attr: string, override?: Color): void;
        interpolate(from: Color, t: number): Color;
    }
}
declare namespace SavageDOM.Attribute {
    interface ColorMatrix {
        type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
        toString(): string;
    }
    namespace ColorMatrix {
        class Raw implements ColorMatrix, Attribute<Raw> {
            type: "matrix";
            arr: number[];
            constructor(values?: number[][]);
            parse(css: string | null): Raw;
            get(element: Element<SVGElement, any>, attr: string): Raw;
            set(element: Element<SVGElement, any>, attr: string, override?: Raw): void;
            interpolate(from: Matrix, t: number): Raw;
        }
        class Saturate implements ColorMatrix, Attribute<Saturate> {
            value: number;
            type: "saturate";
            constructor(value?: number);
            toString(): string;
            parse(css: string | null): Saturate;
            get(element: Element<SVGElement, any>, attr: string): Saturate;
            set(element: Element<SVGElement, any>, attr: string, override?: Saturate): void;
            interpolate(from: Saturate, t: number): Saturate;
        }
        class HueRotate implements ColorMatrix, Attribute<HueRotate> {
            value: number;
            type: "hueRotate";
            constructor(value?: number);
            toString(): string;
            parse(css: string | null): HueRotate;
            get(element: Element<SVGElement, any>, attr: string): HueRotate;
            set(element: Element<SVGElement, any>, attr: string, override?: HueRotate): void;
            interpolate(from: HueRotate, t: number): HueRotate;
        }
        class LuminanceToAlphaColorMatrix implements ColorMatrix {
            type: "luminanceToAlpha";
            toString(): string;
        }
    }
}
declare namespace SavageDOM.Attribute {
    type CSSAbsoluteLength = "px" | "in" | "cm" | "mm" | "pt" | "pc";
    type CSSRelativeLength = "em" | "ex";
    type CSSAngleUnit = "deg" | "grad" | "rad" | "turn";
    class Dimension<Unit extends string> implements Attribute<Dimension<Unit>> {
        value: number;
        unit: Unit;
        private static convert;
        constructor(value: number, unit: Unit);
        toString(): string;
        parse(css: string | null): Dimension<Unit>;
        get(element: Element<SVGElement, any>, attr: string): Dimension<Unit>;
        set(element: Element<SVGElement, any>, attr: string, override?: Dimension<Unit>): void;
        interpolate(from: Dimension<Unit>, t: number): Dimension<Unit>;
    }
    class Percentage extends Dimension<"%"> {
        constructor(value: number);
    }
}
declare namespace SavageDOM.Attribute {
    class List<T extends Attribute<T>> extends Array<T> implements Attribute<List<T>> {
        toString(): string;
        parse(css: string | null): List<T>;
        get(element: Element<SVGElement, any>, attr: string): List<T>;
        set(element: Element<SVGElement, any>, attr: string, override?: List<T>): void;
        interpolate(from: List<T>, t: number): List<T>;
    }
}
declare namespace SavageDOM.Attribute {
    class Matrix implements Attribute<Matrix> {
        arr: number[];
        constructor(values: number[][]);
        toString(): string;
        parse(css: string | null): Matrix;
        get(element: Element<SVGElement, any>, attr: string): Matrix;
        set(element: Element<SVGElement, any>, attr: string, override?: Matrix): void;
        interpolate(from: Matrix, t: number): Matrix;
    }
}
declare namespace SavageDOM.Attribute {
    class Number implements Attribute<Number> {
        n: number;
        constructor(n?: number);
        toString(): string;
        parse(css: string | null): Number;
        get(element: Element<SVGElement, any>, attr: string): Number;
        set(element: Element<SVGElement, any>, attr: string, override?: Number): void;
        interpolate(from: Number, t: number): Number;
    }
}
declare namespace SavageDOM.Attribute {
    class NumberOptionalNumber implements Attribute<NumberOptionalNumber> {
        n: number;
        o: number;
        constructor(n: number, o?: number);
        toString(): string;
        parse(css: string | null): NumberOptionalNumber;
        get(element: Element<SVGElement, any>, attr: string): NumberOptionalNumber;
        set(element: Element<SVGElement, any>, attr: string, override?: NumberOptionalNumber): void;
        interpolate(from: NumberOptionalNumber, t: number): NumberOptionalNumber;
    }
}
declare namespace SavageDOM.Attribute {
    class Point implements Attribute<Point> {
        x: Length;
        y: Length;
        constructor(x: Length, y: Length);
        toString(): string;
        parse(css: string | null): Point;
        get(element: Element<SVGElement, any>, attr: string): Point;
        set(element: Element<SVGElement, any>, attr: string, override?: Point): void;
        interpolate(from: Point, t: number): Point;
    }
}
declare namespace SavageDOM.Attribute {
    class PreserveAspectRatio {
        x: "Min" | "Mid" | "Max";
        y: "Min" | "Mid" | "Max";
        meetOrSlice: "meet" | "slice";
        constructor();
        constructor(x: "Min" | "Mid" | "Max", y: "Min" | "Mid" | "Max");
        constructor(x: "Min" | "Mid" | "Max", y: "Min" | "Mid" | "Max", meetOrSlice: "meet" | "slice");
        toString(): string;
    }
}
declare namespace SavageDOM.Attribute {
    abstract class Transform implements Attribute<Transform> {
        type: "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY";
        constructor(type: "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY");
        abstract args(): string;
        toString(): string;
        abstract parseArgs(args: string | null): Transform;
        parse(css: string | null): Transform;
        get(element: Element<SVGElement, any>, attr: string): Transform;
        set(element: Element<SVGElement, any>, attr: string, override?: Transform): void;
        abstract interpolate<T extends Transform>(from: T, t: number): T;
    }
    namespace Transform {
        class Matrix extends Transform {
            a: number;
            b: number;
            c: number;
            d: number;
            e: number;
            f: number;
            constructor(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number);
            args(): string;
            parseArgs(css: string | null): Matrix;
            interpolate(from: Matrix, t: number): Matrix;
        }
        class Translate extends Transform {
            x: number;
            y: number;
            constructor(x?: number, y?: number);
            args(): string;
            parseArgs(css: string | null): Translate;
            interpolate(from: Translate, t: number): Translate;
        }
        class UniformScale extends Transform {
            s: number;
            constructor(s?: number);
            args(): string;
            parseArgs(css: string | null): UniformScale;
            interpolate(from: UniformScale, t: number): UniformScale;
        }
        class Scale extends Transform {
            x: number;
            y: number;
            constructor(x?: number, y?: number);
            args(): string;
            parseArgs(css: string | null): Scale;
            interpolate(from: Scale, t: number): Scale;
        }
        class Rotate extends Transform {
            a: number;
            x: number;
            y: number;
            constructor(a: number, x?: number, y?: number);
            args(): string;
            parseArgs(css: string | null): Rotate;
            interpolate(from: Rotate, t: number): Rotate;
        }
        class SkewX extends Transform {
            a: number;
            constructor(a?: number);
            args(): string;
            parseArgs(css: string | null): SkewX;
            interpolate(from: SkewX, t: number): SkewX;
        }
        class SkewY extends Transform {
            a: number;
            constructor(a?: number);
            args(): string;
            parseArgs(css: string | null): SkewY;
            interpolate(from: SkewY, t: number): SkewY;
        }
    }
    interface Transformable {
        "transform.matrix": Transform.Matrix;
        "transform.translate": Transform.Translate;
        "transform.uniformScale": Transform.UniformScale;
        "transform.scale": Transform.Scale;
        "transform.rotate": Transform.Rotate;
        "transform.skewX": Transform.SkewX;
        "transform.skewY": Transform.SkewY;
        transform: List<Transform>;
    }
}
declare namespace SavageDOM.Attribute {
    class Box implements Attribute<Box> {
        x: Length;
        y: Length;
        width: Length;
        height: Length;
        constructor(x: Length, y: Length, width: Length, height: Length);
        toString(): string;
        parse(css: string | null): Box;
        get(element: Element<SVGElement, any>, attr: string): Box;
        set(element: Element<SVGElement, any>, attr: string, override?: Box): void;
        interpolate(from: Box, t: number): Box;
    }
}
declare namespace SavageDOM {
    class Paper {
        root: SVGSVGElement;
        defs: Element<SVGDefsElement, any>;
        constructor();
        constructor(id: string);
        constructor(el: SVGSVGElement);
        addDef(def: Element<SVGElement, any>): void;
    }
}
declare namespace SavageDOM {
    class Element<SVG extends SVGElement, Attrs> {
        paper: Paper;
        private _id;
        protected _node: SVG;
        protected _style: CSSStyleDeclaration;
        constructor(paper: Paper, el: SVG, attrs?: Partial<Attrs>);
        constructor(paper: Paper, name: string, attrs?: Partial<Attrs>, id?: string);
        constructor(paper: Paper, el: string | SVG, attrs?: Partial<Attrs>, id?: string);
        readonly id: string;
        toString(): string;
        setAttribute<Attr extends keyof Attrs>(name: Attr, val: Attrs[Attr]): void;
        setAttributes(attrs: Partial<Attrs>): void;
        getAttribute<Attr extends keyof Attrs>(name: Attr): string | null;
        copyStyleFrom(el: Element<SVGElement, Attrs>): any;
        copyStyleFrom(el: Element<SVGElement, Attrs>, includeExclude: {
            [A in keyof Attrs]: boolean;
        }, defaultInclude: boolean): any;
        readonly boundingBox: Attribute.Box;
        add(el: Element<SVGElement, any>): void;
        getChildren(): Element<SVGElement, any>[];
        clone(deep?: boolean): Element<SVG, Attrs>;
        addEventListener(event: "focusin" | "focusout" | "mousedown" | "mouseup" | "mousemove" | "mouseover" | "mouseout", listener: (this: this, event: MouseEvent) => any): void;
        addEventListener(event: "touchstart" | "touchend" | "touchmove" | "touchcancel", listener: (this: this, event: TouchEvent) => any): void;
        protected cloneNode(deep?: boolean): SVG;
    }
}
declare namespace SavageDOM.Attribute {
    interface Renderable extends Presentation, HasStyle, HasClass, Transformable {
    }
}
declare namespace SavageDOM.Elements {
    abstract class AbstractRenderable<E extends SVGElement, A> extends Element<E, Attribute.Renderable & A> {
    }
}
declare namespace SavageDOM.Elements.Renderable {
    abstract class AbstractShape<E extends SVGElement, A> extends AbstractRenderable<E, A> {
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Circle {
        cx: Length;
        cy: Length;
        "cx:cy": Point;
        r: Length;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Circle extends AbstractShape<SVGCircleElement, Attribute.Renderable.Shape.Circle> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Circle>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        circle(cx: Attribute.Length, cy: Attribute.Length, r: Attribute.Length): Elements.Renderable.Shape.Circle;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Ellipse {
        cx: Length;
        cy: Length;
        "cx:cy": Point;
        rx: Length;
        ry: Length;
        "rx:ry": Point;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Ellipse extends AbstractShape<SVGEllipseElement, Attribute.Renderable.Shape.Ellipse> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Ellipse>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        ellipse(cx: number, cy: number, rx: number, ry: number): Elements.Renderable.Shape.Ellipse;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Line {
        x1: Length;
        y1: Length;
        "x1:y1": Point;
        x2: Length;
        y2: Length;
        "x2:y2": Point;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Line extends AbstractShape<SVGLineElement, Attribute.Renderable.Shape.Line> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Line>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        line(x1: Attribute.Length, y1: Attribute.Length, x2: Attribute.Length, y2: Attribute.Length): Elements.Renderable.Shape.Line;
    }
}
declare namespace SavageDOM.Attribute {
    abstract class PathSegment implements Attribute<PathSegment> {
        type: "M" | "m" | "L" | "l" | "Q" | "q" | "T" | "t" | "C" | "c" | "S" | "s" | "A" | "a" | "Z";
        abstract toString(): string;
        parse(css: string | null): PathSegment;
        get(element: Element<SVGElement, any>, attr: string): PathSegment;
        set(element: Element<SVGElement, any>, attr: string, override?: PathSegment): void;
        abstract parseArgs(css: string): PathSegment;
        abstract defaultInstance(): PathSegment;
        abstract interpolate(from: PathSegment, t: number): PathSegment;
    }
    namespace PathSegment {
        abstract class SinglePoint extends PathSegment {
            p: Point;
            abstract type: "M" | "m" | "L" | "l" | "T" | "t";
            constructor(p?: Point);
            toString(): string;
            parseArgs(css: string): SinglePoint;
            interpolate(from: SinglePoint, t: number): SinglePoint;
            abstract buildInstance(p: Point): SinglePoint;
            abstract defaultInstance(): SinglePoint;
        }
        abstract class DoublePoint extends PathSegment {
            p1: Point;
            p2: Point;
            abstract type: "Q" | "q" | "S" | "s";
            constructor(p1?: Point, p2?: Point);
            toString(): string;
            parseArgs(css: string): DoublePoint;
            interpolate(from: DoublePoint, t: number): DoublePoint;
            abstract buildInstance(p1: Point, p2: Point): DoublePoint;
            abstract defaultInstance(): DoublePoint;
        }
        abstract class TriplePoint extends PathSegment {
            p1: Point;
            p2: Point;
            p3: Point;
            abstract type: "C" | "c";
            constructor(p1?: Point, p2?: Point, p3?: Point);
            toString(): string;
            parseArgs(css: string): TriplePoint;
            interpolate(from: TriplePoint, t: number): TriplePoint;
            abstract buildInstance(p1: Point, p2: Point, p3: Point): TriplePoint;
            abstract defaultInstance(): TriplePoint;
        }
        class MoveToAbs extends SinglePoint {
            type: "M";
            buildInstance(p: Point): MoveToAbs;
            defaultInstance(): MoveToAbs;
        }
        class MoveToRel extends SinglePoint {
            type: "m";
            buildInstance(p: Point): MoveToRel;
            defaultInstance(): MoveToRel;
        }
        class LineToAbs extends SinglePoint {
            type: "L";
            buildInstance(p: Point): LineToAbs;
            defaultInstance(): LineToAbs;
        }
        class LineToRel extends SinglePoint {
            type: "l";
            buildInstance(p: Point): LineToRel;
            defaultInstance(): LineToRel;
        }
        class CurveToQuadraticAbs extends DoublePoint {
            type: "Q";
            buildInstance(p1: Point, p2: Point): CurveToQuadraticAbs;
            defaultInstance(): CurveToQuadraticAbs;
        }
        class CurveToQuadraticRel extends DoublePoint {
            type: "q";
            buildInstance(p1: Point, p2: Point): CurveToQuadraticRel;
            defaultInstance(): CurveToQuadraticRel;
        }
        class CurveToQuadraticSmoothAbs extends SinglePoint {
            type: "T";
            buildInstance(p: Point): CurveToQuadraticSmoothAbs;
            defaultInstance(): CurveToQuadraticSmoothAbs;
        }
        class CurveToQuadraticSmoothRel extends SinglePoint {
            type: "t";
            buildInstance(p: Point): CurveToQuadraticSmoothRel;
            defaultInstance(): CurveToQuadraticSmoothRel;
        }
        class CurveToCubicAbs extends TriplePoint {
            type: "C";
            buildInstance(p1: Point, p2: Point, p3: Point): CurveToCubicAbs;
            defaultInstance(): CurveToCubicAbs;
        }
        class CurveToCubicRel extends TriplePoint {
            type: "c";
            buildInstance(p1: Point, p2: Point, p3: Point): CurveToCubicRel;
            defaultInstance(): CurveToCubicRel;
        }
        class CurveToCubicSmoothAbs extends DoublePoint {
            type: "S";
            buildInstance(p1: Point, p2: Point): CurveToCubicSmoothAbs;
            defaultInstance(): CurveToCubicSmoothAbs;
        }
        class CurveToCubicSmoothRel extends DoublePoint {
            type: "s";
            buildInstance(p1: Point, p2: Point): CurveToCubicSmoothRel;
            defaultInstance(): CurveToCubicSmoothRel;
        }
        abstract class ArcTo extends PathSegment {
            r: Point;
            p: Point;
            xAxisRotate: number;
            largeArc: boolean;
            sweepClockwise: boolean;
            abstract type: "A" | "a";
            constructor(r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
            toString(): string;
            parseArgs(css: string): ArcTo;
            interpolate(from: ArcTo, t: number): ArcTo;
            abstract buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: any): ArcTo;
            abstract defaultInstance(): ArcTo;
        }
        class ArcToAbs extends ArcTo {
            type: "A";
            buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: any): ArcToAbs;
            defaultInstance(): ArcToAbs;
        }
        class ArcToRel extends ArcTo {
            type: "a";
            buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: any): ArcToRel;
            defaultInstance(): ArcToRel;
        }
        class ClosePath extends PathSegment {
            type: "Z";
            toString(): string;
            parseArgs(css: string): ClosePath;
            defaultInstance(): ClosePath;
            interpolate(from: ClosePath, t: number): ClosePath;
        }
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Path {
        d: List<PathSegment>;
        pathLength: number;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Path extends AbstractShape<SVGPathElement, Attribute.Renderable.Shape.Path> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Path>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        path(d: Attribute.List<Attribute.PathSegment>, pathLength?: number): Elements.Renderable.Shape.Path;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Polygon {
        points: List<Point>;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Polygon extends AbstractShape<SVGPolygonElement, Attribute.Renderable.Shape.Polygon> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Polygon>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        polygon(points: Attribute.List<Attribute.Point>): Elements.Renderable.Shape.Polygon;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Polyline {
        points: List<Point>;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Polyline extends AbstractShape<SVGPolylineElement, Attribute.Renderable.Shape.Polyline> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Polyline>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        polyline(points: Attribute.List<Attribute.Point>): Elements.Renderable.Shape.Polyline;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Rect {
        x: Length;
        y: Length;
        "x:y": Point;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
        rx: Length;
        ry: Length;
        "rx:ry": Point;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Rect extends AbstractShape<SVGRectElement, Attribute.Renderable.Shape.Rect> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Rect>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        rect(x: Attribute.Length, y: Attribute.Length, width: Attribute.Length, height: Attribute.Length, rx?: Attribute.Length, ry?: Attribute.Length): Elements.Renderable.Shape.Rect;
    }
}
declare namespace SavageDOM.Elements {
    namespace Renderable {
        class Group extends AbstractRenderable<SVGGElement, void> {
            constructor(paper: Paper, attrs?: Partial<Attribute.Renderable>);
        }
    }
}
declare namespace SavageDOM {
    interface Paper {
        group(els: Element<SVGElement, any>[]): Elements.Renderable.Group;
    }
}
declare namespace SavageDOM.Attribute.Renderable {
    interface Image {
        x: Length;
        y: Length;
        "x:y": Point;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
        "xlink:href": string;
        preserveAspectRatio?: PreserveAspectRatio;
        viewBox?: Box;
    }
}
declare namespace SavageDOM.Elements.Renderable {
    class Image extends AbstractRenderable<SVGImageElement, Attribute.Renderable.Image> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Image>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        image(attrs: Attribute.Renderable.Image): Elements.Renderable.Image;
    }
}
declare namespace SavageDOM.Attribute {
    class TextContent implements Attribute<TextContent> {
        private static escapeHtml(html);
        private _str;
        private _cb;
        constructor(str: string);
        constructor(cb: () => string);
        parse(css: string | null): TextContent;
        get<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A): TextContent;
        set<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A, override?: TextContent): void;
        interpolate(from: TextContent, t: number): TextContent;
    }
}
declare namespace SavageDOM.Attribute.Renderable {
    interface Text {
        x: Length;
        y: Length;
        "x:y": Point;
        dx: Length;
        dy: Length;
        "dx:dy": Point;
        "text-anchor"?: "start" | "middle" | "end" | Inherit;
        textLength?: Length;
    }
}
declare namespace SavageDOM.Elements.Renderable {
    class TextSpan extends AbstractRenderable<SVGTSpanElement, Attribute.Textual & Attribute.Renderable.Text & {
        textContent: Attribute.TextContent;
    }> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Textual & Attribute.Renderable.Text & {
            textContent: Attribute.TextContent;
        }>);
        readonly computedLength: number;
    }
    class Text extends AbstractRenderable<SVGTextElement, Attribute.Textual & Attribute.Renderable.Text> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Textual & Attribute.Renderable.Text>);
        addSpan(content: Attribute.TextContent, lineHeight?: number | Attribute.Length, update?: boolean): TextSpan;
        readonly computedLength: number;
    }
    class MultilineText extends Text {
        constructor(paper: Paper, text: string, width: number, attrs?: Partial<Attribute.Renderable & Attribute.Textual & Attribute.Renderable.Text>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        text(content: Attribute.TextContent[], x: Attribute.Length, y: Attribute.Length): Elements.Renderable.Text;
        multilineText(content: Attribute.TextContent): any;
    }
}
declare namespace SavageDOM.Attribute {
    interface NonRenderable extends Presentation, HasStyle, HasClass {
    }
}
declare namespace SavageDOM.Elements {
    abstract class AbstractNonRenderable<E extends SVGElement, NonRenderableAttributes> extends Element<E, Attribute.NonRenderable & NonRenderableAttributes> {
    }
}
declare namespace SavageDOM.Elements.NonRenderable {
    abstract class AbstractPaintServer<E extends SVGElement, PaintServerAttributes> extends AbstractNonRenderable<E, PaintServerAttributes> implements Attribute.PaintServer {
    }
}
declare namespace SavageDOM.Attribute.NonRenderable.PaintServer {
    interface Gradient {
        gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
        "gradientTransform.matrix": Transform.Matrix;
        "gradientTransform.translate": Transform.Translate;
        "gradientTransform.uniformScale": Transform.UniformScale;
        "gradientTransform.scale": Transform.Scale;
        "gradientTransform.rotate": Transform.Rotate;
        "gradientTransform.skewX": Transform.SkewX;
        "gradientTransform.skewY": Transform.SkewY;
        gradientTransform: List<Transform>;
        spreadMethod: "pad" | "reflect" | "repeat";
        "xlink:href": string;
    }
    namespace Gradient {
        interface Linear extends Gradient {
            x1: Length;
            y1: Length;
            "x1:y1": Point;
            x2: Length;
            y2: Length;
            "x2:y2": Point;
        }
        interface Radial extends Gradient {
            cx: Length;
            cy: Length;
            "cx:cy": Point;
            r: Length;
            fx: Length;
            fy: Length;
            "fx:fy": Point;
        }
        interface Stops {
            [offset: number]: "currentColor" | Color | Inherit;
        }
        interface Stop {
            offset: Percentage;
            "stop-color": "currentColor" | Color | Inherit;
        }
    }
}
declare namespace SavageDOM.Elements.NonRenderable.PaintServer {
    abstract class AbstractGradient<E extends SVGElement, GradientAttributes extends Attribute.NonRenderable.PaintServer.Gradient> extends AbstractPaintServer<E, GradientAttributes> {
        constructor(paper: Paper, name: string, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable & GradientAttributes>);
    }
    namespace Gradient {
        class Stop extends Element<SVGStopElement, Attribute.NonRenderable.PaintServer.Gradient.Stop> {
            offset: number;
            constructor(paper: Paper, offset: number, color: "currentColor" | Attribute.Color | Attribute.Inherit);
        }
    }
}
declare namespace SavageDOM.Attribute.NonRenderable.PaintServer.Gradient {
    interface Linear extends Gradient {
        x1: Length;
        y1: Length;
        "x1:y1": Point;
        x2: Length;
        y2: Length;
        "x2:y2": Point;
    }
}
declare namespace SavageDOM.Elements.NonRenderable.PaintServer.Gradient {
    class Linear extends AbstractGradient<SVGLinearGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Linear> {
        constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable & Attribute.NonRenderable.PaintServer.Gradient.Linear>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        linearGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Linear): Elements.NonRenderable.PaintServer.Gradient.Linear;
    }
}
declare namespace SavageDOM.Attribute.NonRenderable.PaintServer.Gradient {
    interface Radial extends Gradient {
        cx: Length;
        cy: Length;
        "cx:cy": Point;
        r: Length;
        fx: Length;
        fy: Length;
        "fx:fy": Point;
    }
}
declare namespace SavageDOM.Elements.NonRenderable.PaintServer.Gradient {
    class Radial extends AbstractGradient<SVGRadialGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Radial> {
        constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable & Attribute.NonRenderable.PaintServer.Gradient.Radial>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        radialGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Radial): Elements.NonRenderable.PaintServer.Gradient.Radial;
    }
}
declare namespace SavageDOM.Attribute.NonRenderable.PaintServer {
    interface Pattern {
        patternUnits: "userSpaceOnUse" | "objectBoundingBox";
        patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
        "patternTransform.matrix": Transform.Matrix;
        "patternTransform.translate": Transform.Translate;
        "patternTransform.uniformScale": Transform.UniformScale;
        "patternTransform.scale": Transform.Scale;
        "patternTransform.rotate": Transform.Rotate;
        "patternTransform.skewX": Transform.SkewX;
        "patternTransform.skewY": Transform.SkewY;
        patternTransform: List<Transform>;
        x: Length;
        y: Length;
        "x:y": Point;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
        "xlink:href": string;
        preserveAspectRatio: PreserveAspectRatio;
        viewBox: Box;
    }
}
declare namespace SavageDOM.Elements.NonRenderable.PaintServer {
    class Pattern extends AbstractPaintServer<SVGPatternElement, Attribute.NonRenderable.PaintServer.Pattern> {
        paper: Paper;
        constructor(paper: Paper, el: SVGPatternElement);
        constructor(paper: Paper, w: number, h: number, x?: number, y?: number, view?: Attribute.Box);
        clone(deep?: boolean): Pattern;
    }
}
declare namespace SavageDOM {
    interface Paper {
        pattern(w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
    }
    namespace Elements {
        namespace Renderable {
            interface Group {
                toPattern(w: number, h: number): Elements.NonRenderable.PaintServer.Pattern;
                toPattern(w: number, h: number, x: number, y: number): Elements.NonRenderable.PaintServer.Pattern;
                toPattern(w: number, h: number, x: number, y: number, view: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
                toPattern(w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
            }
        }
    }
}
declare namespace SavageDOM.Attribute.NonRenderable {
    interface Marker {
        markerUnits: "userSpaceOnUse" | "strokeWidth";
        refX: Length;
        refY: Length;
        "refX:refY": Point;
        markerWidth: Length;
        markerHeight: Length;
        "refX:refY:markerWidth:markerHeight": Box;
        orient: "auto" | "auto-start-reverse" | number | string;
        viewBox: Box;
    }
}
declare namespace SavageDOM.Elements.NonRenderable {
    class Marker extends AbstractNonRenderable<SVGMarkerElement, Attribute.NonRenderable.Marker> {
        constructor(paper: Paper, attrs?: Partial<Attribute.NonRenderable | Attribute.NonRenderable.Marker>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        marker(): Elements.NonRenderable.Marker;
    }
}
declare namespace SavageDOM.Attribute.NonRenderable {
    interface Mask {
        maskUnits: "userSpaceOnUse" | "objectBoundingBox";
        maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
        x: Length;
        y: Length;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
    }
}
declare namespace SavageDOM.Elements.NonRenderable {
    class Mask extends AbstractNonRenderable<SVGMaskElement, Attribute.NonRenderable.Mask> {
        paper: Paper;
        constructor(paper: Paper, w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox");
    }
}
declare namespace SavageDOM {
    interface Paper {
        mask(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.Mask;
    }
}
declare namespace SavageDOM.Attribute {
    interface FilterPrimitive extends Presentation, HasClass, HasStyle {
        x: Length;
        y: Length;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
        result: string;
    }
    namespace FilterPrimitive {
        interface Blend {
            in: FilterInput;
            in2: Elements.FilterPrimitive<any, any>;
            mode: "normal" | "multiply" | "screen" | "darken" | "lighten";
        }
        interface ColorMatrix {
            in: FilterInput;
            type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
            values: Attribute.ColorMatrix;
            "type:values": Attribute.ColorMatrix;
        }
        interface ComponentTransfer {
            in: FilterInput;
        }
        interface Composite {
            in: FilterInput;
            in2: Elements.FilterPrimitive<any, any>;
            operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic";
            k1: number;
            k2: number;
            k3: number;
            k4: number;
        }
        interface ConvolveMatrix {
            in: FilterInput;
            order: NumberOptionalNumber;
            kernelMatrix: Matrix;
            divisor: number;
            bias: number;
            targetX: number;
            targetY: number;
            "targetX:targetY": Point;
            edgeMode: "duplicate" | "wrap" | "none";
            kernelUnitLength: NumberOptionalNumber;
            preserveAlpha: boolean;
        }
        interface DiffuseLighting {
            in: FilterInput;
            surfaceScale: number;
            diffuseConstant: number;
            kernelUnitLength: NumberOptionalNumber;
        }
        interface DisplacementMap {
            in: FilterInput;
            in2: Elements.FilterPrimitive<any, any>;
            scale: number;
            xChannelSelector: "R" | "G" | "B" | "A";
            yChannelSelector: "R" | "G" | "B" | "A";
        }
        interface DropShadow {
            in: FilterInput;
            stdDeviation: number;
            dx: Length;
            dy: Length;
            "dx:dy": Point;
        }
        interface Flood {
            "flood-color": "currentColor" | Color;
        }
        interface GaussianBlur {
            in: FilterInput;
            stdDeviation: number;
            edgeMode: "duplicate" | "wrap" | "none";
        }
        interface Image {
            preserveAspectRatio: PreserveAspectRatio;
            "xlink:href": string;
        }
        interface MergeNode {
            in: FilterInput;
        }
        interface Morphology {
            in: FilterInput;
            operator: "erode" | "dilate";
            radius: NumberOptionalNumber;
        }
        interface Offset {
            in: FilterInput;
            dx: Length;
            dy: Length;
            "dx:dy": Point;
        }
        interface SpecularLighting {
            in: FilterInput;
            surfaceScale: number;
            specularConstant: number;
            specularExponent: number;
            kernelUnitLength: NumberOptionalNumber;
        }
        interface Tile {
            in: FilterInput;
        }
        interface Turbulence {
            type: "fractalNoise" | "turbulence";
            baseFrequency: NumberOptionalNumber;
            numOctaves: number;
            seed: number;
            stitchTiles: "noStitch" | "stitch";
        }
        interface IdentityFunction {
            type: "identity";
        }
        interface TabularFunction {
            type: "table" | "discrete";
            tableValues: List<Number>;
        }
        interface LinearFunction {
            type: "linear";
            slope: number;
            intercept: number;
        }
        interface GammaFunction {
            type: "gamma";
            amplitude: number;
            exponent: number;
            offset: number;
        }
        type TransferFunction = IdentityFunction | TabularFunction | LinearFunction | GammaFunction;
        namespace LightSource {
            interface DistantLight {
                type: "distant";
                azimuth: number;
                elevation: number;
            }
            interface PointLight {
                type: "point";
                x: Length;
                y: Length;
                "x:y": Point;
                z: Length;
            }
            interface SpotLight {
                type: "spot";
                x: Length;
                y: Length;
                "x:y": Point;
                z: Length;
                pointsAtX: Length;
                pointsAtY: Length;
                "pointsAtX:pointsAtY": Point;
                pointsAtZ: Length;
                specularExponent: number;
                limitingConeAngle: number;
            }
        }
        type LightSource = LightSource.DistantLight | LightSource.PointLight | LightSource.SpotLight;
    }
    type FilterInput = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | Elements.FilterPrimitive<any, any>;
    interface Filter {
        x: Length;
        y: Length;
        "x:y": Point;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
        filterUnits: "userSpaceOnUse" | "objectBoundingBox";
        primitiveUnits: "userSpaceOnUse" | "objectBoundingBox";
    }
}
declare namespace SavageDOM.Elements {
    class FilterPrimitive<FE extends SVGElement, A> extends Element<FE, Attribute.FilterPrimitive & A> {
        constructor(filter: Filter, name: string, attrs?: Partial<Attribute.FilterPrimitive & A>);
    }
    namespace FilterPrimitive {
        class Blend extends FilterPrimitive<SVGFEBlendElement, Attribute.FilterPrimitive.Blend> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Blend>);
        }
        class ColorMatrix extends FilterPrimitive<SVGFEColorMatrixElement, Attribute.FilterPrimitive.ColorMatrix> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ColorMatrix>);
        }
        class ComponentTransfer extends FilterPrimitive<SVGFEComponentTransferElement, Attribute.FilterPrimitive.ComponentTransfer> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ComponentTransfer>);
        }
        class Composite extends FilterPrimitive<SVGFECompositeElement, Attribute.FilterPrimitive.Composite> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Composite>);
        }
        class ConvolveMatrix extends FilterPrimitive<SVGFEConvolveMatrixElement, Attribute.FilterPrimitive.ConvolveMatrix> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ConvolveMatrix>);
        }
        class DiffuseLighting extends FilterPrimitive<SVGFEDiffuseLightingElement, Attribute.FilterPrimitive.DiffuseLighting> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.DiffuseLighting>);
        }
        class DisplacementMap extends FilterPrimitive<SVGFEDisplacementMapElement, Attribute.FilterPrimitive.DisplacementMap> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.DisplacementMap>);
        }
        class Flood extends FilterPrimitive<SVGFEFloodElement, Attribute.FilterPrimitive.Flood> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Flood>);
        }
        class GaussianBlur extends FilterPrimitive<SVGFEGaussianBlurElement, Attribute.FilterPrimitive.GaussianBlur> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.GaussianBlur>);
        }
        class Image extends FilterPrimitive<SVGFEImageElement, Attribute.FilterPrimitive.Image> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Image>);
        }
        class Merge extends FilterPrimitive<SVGFEMergeElement, void> {
            constructor(filter: Filter);
        }
        class MergeNode extends FilterPrimitive<SVGFEMergeNodeElement, Attribute.FilterPrimitive.MergeNode> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.MergeNode>);
        }
        class Morphology extends FilterPrimitive<SVGFEMorphologyElement, Attribute.FilterPrimitive.Morphology> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Morphology>);
        }
        class Offset extends FilterPrimitive<SVGFEOffsetElement, Attribute.FilterPrimitive.Offset> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Offset>);
        }
        class SpecularLighting extends FilterPrimitive<SVGFESpecularLightingElement, Attribute.FilterPrimitive.SpecularLighting> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.SpecularLighting>);
        }
        class Tile extends FilterPrimitive<SVGFETileElement, Attribute.FilterPrimitive.Tile> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Tile>);
        }
        class Turbulence extends FilterPrimitive<SVGFETurbulenceElement, Attribute.FilterPrimitive.Turbulence> {
            constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Turbulence>);
        }
        class TransferFunction extends FilterPrimitive<SVGFEFuncRElement | SVGFEFuncGElement | SVGFEFuncBElement | SVGFEFuncAElement, Attribute.FilterPrimitive.TransferFunction> {
            constructor(filter: Filter, channel: "R" | "G" | "B" | "A", attrs?: Partial<Attribute.FilterPrimitive.TransferFunction>);
        }
        namespace LightSource {
            class DistantLight extends FilterPrimitive<SVGFEDistantLightElement, Attribute.FilterPrimitive.LightSource.DistantLight> {
                constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.DistantLight>);
            }
            class PointLight extends FilterPrimitive<SVGFEPointLightElement, Attribute.FilterPrimitive.LightSource.PointLight> {
                constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.PointLight>);
            }
            class SpotLight extends FilterPrimitive<SVGFESpotLightElement, Attribute.FilterPrimitive.LightSource.SpotLight> {
                constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.SpotLight>);
            }
        }
    }
    class Filter extends Element<SVGFilterElement, Attribute.Filter> {
        paper: Paper;
        node: SVGFilterElement;
        constructor(paper: Paper);
        blend(mode: "normal" | "multiply" | "screen" | "darken" | "lighten", input1: Element<SVGElement, Attribute.FilterPrimitive>, input2?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.Blend;
        colorMatrix(matrix: Attribute.ColorMatrix, input?: Attribute.FilterInput): Elements.FilterPrimitive.ColorMatrix;
        componentTransfer(r: Attribute.FilterPrimitive.TransferFunction, g: Attribute.FilterPrimitive.TransferFunction, b: Attribute.FilterPrimitive.TransferFunction, a?: Attribute.FilterPrimitive.TransferFunction, input?: Attribute.FilterInput): Elements.FilterPrimitive.ComponentTransfer;
        composite(operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic", k1: number, k2: number, k3: number, k4: number, input1?: Element<SVGElement, Attribute.FilterPrimitive>, input2?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.Composite;
        convolveMatrix(attrs: Partial<Attribute.FilterPrimitive.ConvolveMatrix>, input?: Attribute.FilterInput): Elements.FilterPrimitive.ConvolveMatrix;
        diffuseLighting(attrs: Partial<Attribute.FilterPrimitive.DiffuseLighting>, lights?: Attribute.FilterPrimitive.LightSource[], input?: Attribute.FilterInput): Elements.FilterPrimitive.DiffuseLighting;
        displacementMap(attrs: Partial<Attribute.FilterPrimitive.DisplacementMap>, input1?: Elements.FilterPrimitive<any, any>, input2?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.DisplacementMap;
        flood(color: Attribute.Color, area: Attribute.Box): Elements.FilterPrimitive.Flood;
        gaussianBlur(stdDeviation?: number, edgeMode?: "duplicate" | "wrap" | "none", input?: Attribute.FilterInput): Elements.FilterPrimitive.GaussianBlur;
        image(href: string, preserveAspectRatio?: Attribute.PreserveAspectRatio): Elements.FilterPrimitive.Image;
        merge(inputs: Elements.FilterPrimitive<any, any>[]): Elements.FilterPrimitive.Merge;
        morphology(operator: "erode" | "dilate", radius: Attribute.NumberOptionalNumber, input?: Attribute.FilterInput): Elements.FilterPrimitive.Morphology;
        offset(d: Attribute.Point, input?: Attribute.FilterInput): Elements.FilterPrimitive.Offset;
        specularLighting(attrs: Partial<Attribute.FilterPrimitive.SpecularLighting>, lights?: Attribute.FilterPrimitive.LightSource[], input?: Attribute.FilterInput): Elements.FilterPrimitive.SpecularLighting;
        tile(area: Attribute.Box, input?: Attribute.FilterInput): Elements.FilterPrimitive.Tile;
        turbulence(attrs: Partial<Attribute.FilterPrimitive.Turbulence>): Elements.FilterPrimitive.Turbulence;
        private addEffect(fe);
        private addLights(lighting, lights);
    }
}
declare namespace SavageDOM {
    interface Paper {
        filter(): Elements.Filter;
    }
}
