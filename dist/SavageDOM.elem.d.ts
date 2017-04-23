declare namespace SavageDOM {
    const XMLNS = "http://www.w3.org/2000/svg";
    const XLINK = "http://www.w3.org/1999/xlink";
}
declare namespace SavageDOM {
    interface Setter {
        set<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs, override?: any): void;
    }
    interface Attribute<T> extends Setter {
        toString(override?: T): string;
        parse(css: string | null): T;
        get<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs): T;
        set<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs, override?: T): void;
        interpolate(from: T, t: number): T;
    }
    function _defaultGet<T>(this: Attribute<T>, element: Element<SVGElement, any, any>, attr: string): T;
    function _defaultSet<T>(this: T, element: Element<SVGElement, any, any>, attr: string, override?: T): void;
}
declare namespace SavageDOM.Attribute {
    const isAttribute: (obj: any) => obj is Attribute<any>;
    type Inherit = "inherit";
    type None = "none";
    namespace NonRenderable {
        interface PaintServer {
        }
    }
    type CurrentColor = "currentColor";
    type Paint = None | CurrentColor | Color | NonRenderable.PaintServer | Inherit;
    type Length = number | Dimension<CSSAbsoluteLength | CSSRelativeLength | "%">;
    type Angle = number | Dimension<CSSAngleUnit>;
    const _LengthParse: (css: string) => Length;
    const _LengthInterpolate: (a: Length, b: Length, t: number) => Length;
    interface HasStyle {
        style: string;
    }
    interface HasClass {
        class: string;
    }
    interface HasOverflow {
        overflow: "visible" | "hidden" | "scroll" | "auto" | Inherit;
    }
    interface HasColor {
        color: Color | Inherit;
    }
    interface HasColorInterpolation {
        "color-interpolation": "auto" | "sRGB" | "linearRGB" | Inherit;
    }
    interface HasColorRendering {
        "color-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
    }
    interface HasCursor {
        cursor: "auto" | "crosshair" | "default" | "pointer" | "move" | "e-resize" | "ne-resize" | "nw-resize" | "n-resize" | "se-resize" | "sw-resize" | "s-resize" | "w-resize" | "text" | "wait" | "help" | Inherit;
    }
    interface HasFill {
        fill: Paint;
        "fill-opacity": number | Inherit;
        "fill-rule": "nonzero" | "evenodd" | Inherit;
    }
    interface HasOpacity {
        opacity: number | Inherit;
    }
    type DashArray = (Length | Percentage)[];
    interface HasStroke {
        stroke: Paint;
        "stroke-dasharray": None | DashArray | Inherit;
        "stroke-dashoffset": Percentage | Length | Inherit;
        "stroke-linecap": "butt" | "round" | "square" | Inherit;
        "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
        "stroke-miterlimit": number | Inherit;
        "stroke-opacity": number | Inherit;
        "stroke-width": Length | Percentage | Inherit;
    }
    interface HasVisibility {
        visibility: "visible" | "hidden" | "collapse" | Inherit;
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
        get(element: Element<SVGElement, any, any>, attr: string): Box;
        set(element: Element<SVGElement, any, any>, attr: string, override?: Box): void;
        interpolate(from: Box, t: number): Box;
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
        get(element: Element<SVGElement, any, any>, attr: string): Color;
        set(element: Element<SVGElement, any, any>, attr: string, override?: Color): void;
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
            get(element: Element<SVGElement, any, any>, attr: string): Raw;
            set(element: Element<SVGElement, any, any>, attr: string, override?: Raw): void;
            interpolate(from: Matrix, t: number): Raw;
        }
        class Saturate implements ColorMatrix, Attribute<Saturate> {
            value: number;
            type: "saturate";
            constructor(value?: number);
            toString(): string;
            parse(css: string | null): Saturate;
            get(element: Element<SVGElement, any, any>, attr: string): Saturate;
            set(element: Element<SVGElement, any, any>, attr: string, override?: Saturate): void;
            interpolate(from: Saturate, t: number): Saturate;
        }
        class HueRotate implements ColorMatrix, Attribute<HueRotate> {
            value: number;
            type: "hueRotate";
            constructor(value?: number);
            toString(): string;
            parse(css: string | null): HueRotate;
            get(element: Element<SVGElement, any, any>, attr: string): HueRotate;
            set(element: Element<SVGElement, any, any>, attr: string, override?: HueRotate): void;
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
        get(element: Element<SVGElement, any, any>, attr: string): Dimension<Unit>;
        set(element: Element<SVGElement, any, any>, attr: string, override?: Dimension<Unit>): void;
        interpolate(from: Dimension<Unit>, t: number): Dimension<Unit>;
    }
    class Percentage extends Dimension<"%"> {
        constructor(value: number);
    }
}
declare namespace SavageDOM.Attribute {
    class Matrix implements Attribute<Matrix> {
        arr: number[];
        constructor(values: number[][]);
        toString(): string;
        parse(css: string | null): Matrix;
        get(element: Element<SVGElement, any, any>, attr: string): Matrix;
        set(element: Element<SVGElement, any, any>, attr: string, override?: Matrix): void;
        interpolate(from: Matrix, t: number): Matrix;
    }
}
declare namespace SavageDOM.Attribute {
    class NumberOptionalNumber implements Attribute<NumberOptionalNumber> {
        n: number;
        o: number;
        constructor(n: number, o?: number);
        toString(): string;
        parse(css: string | null): NumberOptionalNumber;
        get(element: Element<SVGElement, any, any>, attr: string): NumberOptionalNumber;
        set(element: Element<SVGElement, any, any>, attr: string, override?: NumberOptionalNumber): void;
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
        get(element: Element<SVGElement, any, any>, attr: string): Point;
        set(element: Element<SVGElement, any, any>, attr: string, override?: Point): void;
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
        get(element: Element<SVGElement, any, any>, attr: string): Transform;
        set(element: Element<SVGElement, any, any>, attr: string, override?: Transform): void;
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
        transform: Transform[];
    }
}
declare namespace SavageDOM.Attribute {
    class NumberWrapper implements Attribute<NumberWrapper | number> {
        n: number;
        constructor(n?: number);
        toString(): string;
        parse(css: string | null): NumberWrapper;
        get(element: Element<SVGElement, any, any>, attr: string): NumberWrapper;
        set(element: Element<SVGElement, any, any>, attr: string, override?: NumberWrapper): void;
        interpolate(from: NumberWrapper, t: number): NumberWrapper;
    }
    class ArrayWrapper<T extends Attribute<T>> implements Attribute<ArrayWrapper<T>> {
        arr: T[];
        constructor(arr?: T[]);
        toString(): string;
        parse(css: string | null): ArrayWrapper<T>;
        get(element: Element<SVGElement, any, any>, attr: string): ArrayWrapper<T>;
        set(element: Element<SVGElement, any, any>, attr: string, override?: ArrayWrapper<T>): void;
        interpolate(from: ArrayWrapper<T>, t: number): ArrayWrapper<T>;
    }
}
declare namespace SavageDOM.Events {
    interface Mouse {
        activate: MouseEvent;
        click: MouseEvent;
        mousedown: MouseEvent;
        mousemove: MouseEvent;
        mouseout: MouseEvent;
        mouseover: MouseEvent;
        mouseup: MouseEvent;
    }
    interface SVG {
        SVGLoad: Event;
        SVGUnload: Event;
        SVGAbort: Event;
        SVGError: Event;
        SVGResize: Event;
        SVGScroll: Event;
        SVGZoom: SVGZoomEvent;
    }
    interface Touch {
        touchstart: TouchEvent;
        touchend: TouchEvent;
        touchmove: TouchEvent;
        touchcancel: TouchEvent;
    }
    interface Focus {
        focusin: FocusEvent;
        focusout: FocusEvent;
    }
}
declare namespace SavageDOM {
    class Paper {
        root: SVGSVGElement;
        defs: Element<SVGDefsElement, any, any>;
        constructor();
        constructor(id: string);
        constructor(el: SVGSVGElement);
        addDef(def: Element<SVGElement, any, any>): void;
    }
}
declare namespace SavageDOM {
    class Element<SVG extends SVGElement, Attrs, Events> {
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
        copyStyleFrom(el: Element<SVGElement, Attrs, any>): any;
        copyStyleFrom(el: Element<SVGElement, Attrs, any>, includeExclude: {
            [A in keyof Attrs]: boolean;
        }, defaultInclude: boolean): any;
        addEventListener<Event extends keyof Events>(event: Event, listener: (this: this, event: Events[Event]) => any): void;
        readonly boundingBox: Attribute.Box;
        add(el: Element<SVGElement, any, any> | SVGElement): void;
        getChildren(): Element<SVGElement, any, any>[];
        clone(deep?: boolean, id?: string): Element<SVG, Attrs, Events>;
        protected cloneNode(deep?: boolean): SVG;
    }
}
declare namespace SavageDOM.Attribute {
    interface Renderable extends HasStyle, HasClass, HasColor, Transformable {
        "display": "inline" | "block" | "list-item" | "run-in" | "compact" | "marker" | "table" | "inline-table" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-column-group" | "table-column" | "table-cell" | "table-caption" | None | Inherit;
        "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | None | Inherit;
    }
}
declare namespace SavageDOM.Attribute.Renderable {
    interface Containers extends HasFilter, HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask {
    }
    interface Graphics extends HasFilter, HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask, HasOpacity, HasVisibility {
        "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | None | Inherit;
    }
}
declare namespace SavageDOM.Events {
    interface Renderable extends Mouse, SVG, Focus {
    }
}
declare namespace SavageDOM.Elements {
    abstract class AbstractRenderable<E extends SVGElement, A, V> extends Element<E, Attribute.Renderable & A, Events.Renderable & V> {
    }
}
declare namespace SavageDOM.Attribute.Renderable {
    interface Shape extends Graphics, HasFill, HasStroke {
        "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
    }
}
declare namespace SavageDOM.Elements.Renderable {
    abstract class AbstractShape<E extends SVGElement, A> extends AbstractRenderable<E, Attribute.Renderable.Shape & A, void> {
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
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Circle>);
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
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Ellipse>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        ellipse(cx: number, cy: number, rx: number, ry: number): Elements.Renderable.Shape.Ellipse;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Line extends HasMarker {
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
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Line>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        line(x1: Attribute.Length, y1: Attribute.Length, x2: Attribute.Length, y2: Attribute.Length): Elements.Renderable.Shape.Line;
    }
}
declare namespace SavageDOM.Attribute {
    abstract class PathSegment implements Attribute<PathSegment> {
        command: PathSegment.Command;
        constructor(command: PathSegment.Command);
        abstract toString(): string;
        parse(css: string | null): PathSegment;
        get(element: Element<SVGElement, any, any>, attr: string): PathSegment;
        set(element: Element<SVGElement, any, any>, attr: string, override?: PathSegment): void;
        abstract parseArgs(css: string): PathSegment;
        abstract defaultInstance(): PathSegment;
        abstract interpolate(from: PathSegment, t: number): PathSegment;
    }
    namespace PathSegment {
        type Command = "M" | "m" | "Z" | "z" | "L" | "l" | "H" | "h" | "V" | "v" | "C" | "c" | "S" | "s" | "Q" | "q" | "T" | "t" | "A" | "a";
        abstract class SingleLength extends PathSegment {
            l: Length;
            constructor(command: "H" | "h" | "V" | "v", l?: Length);
            toString(): string;
            parseArgs(css: string): SingleLength;
            interpolate(from: SingleLength, t: number): SingleLength;
            abstract buildInstance(l: Length): SingleLength;
            abstract defaultInstance(): SingleLength;
        }
        abstract class SinglePoint extends PathSegment {
            p: Point;
            constructor(command: "M" | "m" | "L" | "l" | "T" | "t", p?: Point);
            toString(): string;
            parseArgs(css: string): SinglePoint;
            interpolate(from: SinglePoint, t: number): SinglePoint;
            abstract buildInstance(p: Point): SinglePoint;
            abstract defaultInstance(): SinglePoint;
        }
        abstract class DoublePoint extends PathSegment {
            p1: Point;
            p2: Point;
            constructor(command: "Q" | "q" | "S" | "s", p1?: Point, p2?: Point);
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
            constructor(command: "C" | "c", p1?: Point, p2?: Point, p3?: Point);
            toString(): string;
            parseArgs(css: string): TriplePoint;
            interpolate(from: TriplePoint, t: number): TriplePoint;
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
            interpolate(from: ClosePath, t: number): ClosePath;
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
            constructor(command: "A" | "a", r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
            toString(): string;
            parseArgs(css: string): ArcTo;
            interpolate(from: ArcTo, t: number): ArcTo;
            abstract buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: any): ArcTo;
            abstract defaultInstance(): ArcTo;
        }
        class ArcToAbs extends ArcTo {
            constructor(r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
            constructor(rx: Length, ry: Length, px: Length, py: Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
            buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: any): ArcToAbs;
            defaultInstance(): ArcToAbs;
        }
        class ArcToRel extends ArcTo {
            constructor(r?: Point, p?: Point, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
            constructor(rx: Length, ry: Length, px: Length, py: Length, xAxisRotate?: number, largeArc?: boolean, sweepClockwise?: boolean);
            buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise: any): ArcToRel;
            defaultInstance(): ArcToRel;
        }
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Path extends HasMarker {
        d: PathSegment[];
        pathLength: number;
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Path extends AbstractShape<SVGPathElement, Attribute.Renderable.Shape.Path> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Path>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        path(d: Attribute.PathSegment[], pathLength?: number): Elements.Renderable.Shape.Path;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Polygon extends HasMarker {
        points: Point[];
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Polygon extends AbstractShape<SVGPolygonElement, Attribute.Renderable.Shape.Polygon> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Polygon>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        polygon(points: Attribute.Point[]): Elements.Renderable.Shape.Polygon;
    }
}
declare namespace SavageDOM.Attribute.Renderable.Shape {
    interface Polyline extends HasMarker {
        points: Point[];
    }
}
declare namespace SavageDOM.Elements.Renderable.Shape {
    class Polyline extends AbstractShape<SVGPolylineElement, Attribute.Renderable.Shape.Polyline> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Polyline>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        polyline(points: Attribute.Point[]): Elements.Renderable.Shape.Polyline;
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
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Rect>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        rect(x: Attribute.Length, y: Attribute.Length, width: Attribute.Length, height: Attribute.Length, rx?: Attribute.Length, ry?: Attribute.Length): Elements.Renderable.Shape.Rect;
    }
}
declare namespace SavageDOM.Attribute.Renderable {
    interface Group extends Containers, HasOpacity {
    }
}
declare namespace SavageDOM.Elements {
    namespace Renderable {
        class Group extends AbstractRenderable<SVGGElement, Attribute.Renderable.Group, void> {
            constructor(paper: Paper, attrs?: Partial<Attribute.Renderable>);
        }
    }
}
declare namespace SavageDOM {
    interface Paper {
        group(els: Element<SVGElement, any, any>[]): Elements.Renderable.Group;
    }
}
declare namespace SavageDOM.Attribute.Renderable {
    interface Image extends Graphics, HasOverflow {
        x: Length;
        y: Length;
        "x:y": Point;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
        href: string;
        preserveAspectRatio?: PreserveAspectRatio;
        viewBox?: Box;
        "color-profile": "auto" | "sRGB" | string | Inherit;
        "image-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
    }
}
declare namespace SavageDOM.Events {
    interface Image {
        load: ProgressEvent;
    }
}
declare namespace SavageDOM.Elements.Renderable {
    class Image extends AbstractRenderable<SVGImageElement, Attribute.Renderable.Image, Events.Image> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Image>);
    }
}
declare namespace SavageDOM {
    interface Paper {
        image(href: string, onload?: (img: Elements.Renderable.Image) => void, attrs?: Partial<Attribute.Renderable.Image>): Elements.Renderable.Image;
    }
}
declare namespace SavageDOM.Attribute {
    interface Textual extends HasFill, HasStroke, HasVisibility {
        "direction": "ltr" | "rtl" | Inherit;
        "dominant-baseline": "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | Inherit;
        "font-family": string | Inherit;
        "font-size": Length | Inherit;
        "font-size-adjust": number | None | Inherit;
        "font-stretch": "normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | Inherit;
        "font-style": "normal" | "italic" | "oblique" | Inherit;
        "font-variant": "normal" | "small-caps" | Inherit;
        "font-weight": "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Inherit;
        "kerning": "auto" | Length | Inherit;
        "letter-spacing": "normal" | Length | Inherit;
        "text-anchor": "start" | "middle" | "end" | Inherit;
        "text-decoration": None | "underline" | "overline" | "line-through" | "blink" | Inherit;
        "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | Inherit;
        "word-spacing": "normal" | Length | Inherit;
        "writing-mode": "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | Inherit;
    }
    interface TextualChild {
        "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Inherit;
        "baseline-shift": "auto" | "baseline" | "super" | "sub" | number | Inherit;
    }
    class TextContent implements Attribute<TextContent> {
        private static escapeHtml(html);
        private _str;
        private _cb;
        constructor(str: string);
        constructor(cb: () => string);
        parse(css: string | null): TextContent;
        get<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs, any>, attr: A): TextContent;
        set<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs, any>, attr: A, override?: TextContent): void;
        interpolate(from: TextContent, t: number): TextContent;
    }
}
declare namespace SavageDOM.Attribute.Renderable {
    interface Text extends Textual, Graphics {
        x: Length;
        y: Length;
        "x:y": Point;
        dx: Length;
        dy: Length;
        "dx:dy": Point;
        textLength?: Length;
    }
    interface TextSpan extends Text, TextualChild {
        textContent: Attribute.TextContent;
    }
}
declare namespace SavageDOM.Elements.Renderable {
    class TextSpan extends AbstractRenderable<SVGTSpanElement, Attribute.Renderable.TextSpan, void> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.TextSpan>);
        readonly computedLength: number;
    }
    class Text extends AbstractRenderable<SVGTextElement, Attribute.Renderable.Text, void> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Text>);
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
declare namespace SavageDOM.Attribute.Renderable {
    interface ForeignObject extends Containers, HasOpacity {
        x: Length;
        y: Length;
        width: Length;
        height: Length;
    }
}
declare namespace SavageDOM.Elements.Renderable {
    class ForeignObject extends AbstractRenderable<SVGForeignObjectElement, Attribute.Renderable.ForeignObject, void> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.ForeignObject>);
        addHTML(html: HTMLElement): void;
        remove(html: HTMLElement): void;
    }
}
declare namespace SavageDOM {
    interface Paper {
        foreignObject(html: HTMLElement, x: Attribute.Length, y: Attribute.Length, width: Attribute.Length, height: Attribute.Length): Elements.Renderable.ForeignObject;
    }
}
declare namespace SavageDOM.Attribute {
    interface NonRenderable extends HasStyle, HasClass {
    }
}
declare namespace SavageDOM.Events {
    interface NonRenderable extends SVG {
    }
}
declare namespace SavageDOM.Elements {
    abstract class AbstractNonRenderable<E extends SVGElement, NonRenderableAttributes> extends Element<E, Attribute.NonRenderable & NonRenderableAttributes, Events.NonRenderable> {
    }
}
declare namespace SavageDOM.Attribute {
    interface HasClipPath {
        "clip-path": Elements.NonRenderable.ClipPath | None | Inherit;
        "clip-rule": "nonzero" | "evenodd" | Inherit;
    }
}
declare namespace SavageDOM.Attribute.NonRenderable {
    interface ClipPath {
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
    class ClipPath extends AbstractNonRenderable<SVGMaskElement, Attribute.NonRenderable.ClipPath> {
        paper: Paper;
        constructor(paper: Paper, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox");
    }
}
declare namespace SavageDOM {
    interface Paper {
        clipPath(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.ClipPath;
    }
}
declare namespace SavageDOM.Elements.NonRenderable {
    abstract class AbstractPaintServer<E extends SVGElement, PaintServerAttributes> extends AbstractNonRenderable<E, PaintServerAttributes> implements Attribute.NonRenderable.PaintServer {
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
        gradientTransform: Transform[];
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
            "stop-opacity": number | Inherit;
        }
    }
}
declare namespace SavageDOM.Elements.NonRenderable.PaintServer {
    abstract class AbstractGradient<E extends SVGElement, GradientAttributes extends Attribute.NonRenderable.PaintServer.Gradient> extends AbstractPaintServer<E, GradientAttributes> {
        constructor(paper: Paper, name: string, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable & GradientAttributes>);
    }
    namespace Gradient {
        class Stop extends Element<SVGStopElement, Attribute.NonRenderable.PaintServer.Gradient.Stop, Events.NonRenderable> {
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
    interface Pattern extends HasOverflow, HasOpacity {
        patternUnits: "userSpaceOnUse" | "objectBoundingBox";
        patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
        "patternTransform.matrix": Transform.Matrix;
        "patternTransform.translate": Transform.Translate;
        "patternTransform.uniformScale": Transform.UniformScale;
        "patternTransform.scale": Transform.Scale;
        "patternTransform.rotate": Transform.Rotate;
        "patternTransform.skewX": Transform.SkewX;
        "patternTransform.skewY": Transform.SkewY;
        patternTransform: Transform[];
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
declare namespace SavageDOM.Attribute.Renderable {
    interface HasMarker {
        "marker-start": None | Elements.NonRenderable.Marker | Inherit;
        "marker-mid": None | Elements.NonRenderable.Marker | Inherit;
        "marker-end": None | Elements.NonRenderable.Marker | Inherit;
    }
}
declare namespace SavageDOM.Attribute.NonRenderable {
    interface Marker extends HasOverflow, HasOpacity {
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
declare namespace SavageDOM.Attribute {
    interface HasMask {
        "mask": Elements.NonRenderable.Mask | None | Inherit;
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
        constructor(paper: Paper, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox");
    }
}
declare namespace SavageDOM {
    interface Paper {
        mask(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.Mask;
    }
}
declare namespace SavageDOM.Attribute {
    interface HasFilter {
        "filter": Elements.Filter | string | None | Inherit;
    }
    interface FilterPrimitive extends HasClass, HasStyle {
        x: Length;
        y: Length;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": Box;
        result: string;
        "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Inherit;
    }
    namespace FilterPrimitive {
        interface Lighting extends HasColor {
            "lighting-color": CurrentColor | Color | Inherit;
        }
        interface Blend {
            in: FilterInput;
            in2: FilterInput;
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
            in2: FilterInput;
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
            edgeMode: "duplicate" | "wrap" | None;
            kernelUnitLength: NumberOptionalNumber;
            preserveAlpha: boolean;
        }
        interface DiffuseLighting extends Lighting {
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
        interface Flood extends HasColor {
            "flood-color": CurrentColor | Color | Inherit;
            "flood-opacity": number | Inherit;
        }
        interface GaussianBlur {
            in: FilterInput;
            stdDeviation: number;
            edgeMode: "duplicate" | "wrap" | None;
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
        interface SpecularLighting extends Lighting {
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
            tableValues: number[];
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
declare namespace SavageDOM.Events {
    interface FilterPrimitive extends SVG {
    }
    interface Filter extends SVG {
    }
}
declare namespace SavageDOM.Elements {
    class FilterPrimitive<FE extends SVGElement, A> extends Element<FE, Attribute.FilterPrimitive & A, Events.FilterPrimitive> {
        private _referenced;
        constructor(filter: Filter, name: string, attrs?: Partial<Attribute.FilterPrimitive & A>);
        toString(): string;
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
    class Filter extends Element<SVGFilterElement, Attribute.Filter, Events.Filter> {
        paper: Paper;
        node: SVGFilterElement;
        constructor(paper: Paper);
        blend(mode: "normal" | "multiply" | "screen" | "darken" | "lighten", input1: Attribute.FilterInput, input2?: Attribute.FilterInput): Elements.FilterPrimitive.Blend;
        colorMatrix(matrix: Attribute.ColorMatrix, input?: Attribute.FilterInput): Elements.FilterPrimitive.ColorMatrix;
        componentTransfer(r: Attribute.FilterPrimitive.TransferFunction, g: Attribute.FilterPrimitive.TransferFunction, b: Attribute.FilterPrimitive.TransferFunction, a?: Attribute.FilterPrimitive.TransferFunction, input?: Attribute.FilterInput): Elements.FilterPrimitive.ComponentTransfer;
        composite(operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic", k1: number, k2: number, k3: number, k4: number, input1?: Attribute.FilterInput, input2?: Attribute.FilterInput): Elements.FilterPrimitive.Composite;
        convolveMatrix(attrs: Partial<Attribute.FilterPrimitive.ConvolveMatrix>, input?: Attribute.FilterInput): Elements.FilterPrimitive.ConvolveMatrix;
        diffuseLighting(attrs: Partial<Attribute.FilterPrimitive.DiffuseLighting>, lights?: Attribute.FilterPrimitive.LightSource[], input?: Attribute.FilterInput): Elements.FilterPrimitive.DiffuseLighting;
        displacementMap(attrs: Partial<Attribute.FilterPrimitive.DisplacementMap>, input1?: Attribute.FilterInput, input2?: Attribute.FilterInput): Elements.FilterPrimitive.DisplacementMap;
        flood(color: Attribute.Color, area: Attribute.Box): Elements.FilterPrimitive.Flood;
        gaussianBlur(stdDeviation?: number, edgeMode?: "duplicate" | "wrap" | Attribute.None, input?: Attribute.FilterInput): Elements.FilterPrimitive.GaussianBlur;
        image(href: string, preserveAspectRatio?: Attribute.PreserveAspectRatio): Elements.FilterPrimitive.Image;
        merge(inputs: Attribute.FilterInput[]): Elements.FilterPrimitive.Merge;
        morphology(operator: "erode" | "dilate", radius: Attribute.NumberOptionalNumber, input?: Attribute.FilterInput): Elements.FilterPrimitive.Morphology;
        offset(d: Attribute.Point, input?: Attribute.FilterInput): Elements.FilterPrimitive.Offset;
        specularLighting(attrs: Partial<Attribute.FilterPrimitive.SpecularLighting>, lights?: Attribute.FilterPrimitive.LightSource[], input?: Attribute.FilterInput): Elements.FilterPrimitive.SpecularLighting;
        tile(area: Attribute.Box, input?: Attribute.FilterInput): Elements.FilterPrimitive.Tile;
        turbulence(attrs: Partial<Attribute.FilterPrimitive.Turbulence>): Elements.FilterPrimitive.Turbulence;
        private addLights(lighting, lights);
    }
}
declare namespace SavageDOM {
    interface Paper {
        filter(): Elements.Filter;
    }
}
