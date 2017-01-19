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
}
declare namespace SavageDOM.Attribute {
    const isAttribute: (obj: any) => obj is Attribute<any>;
    type Inherit = "inherit";
    interface PaintServer {
    }
    type Paint = "none" | "currentColor" | Color | PaintServer | Inherit;
    type Length = number | Dimension<CSSAbsoluteLengths>;
    const _LengthParse: (css: string) => Length;
    const _LengthInterpolate: (a: Length, b: Length, t: number) => Length;
    type Angle = number | Dimension<CSSAngleUnits>;
    type Percentage = Dimension<"%">;
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
    interface Transformable {
        transform: List<Transform>;
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
    type CSSAbsoluteLengths = "px" | "in" | "cm" | "mm" | "pt" | "pc";
    type CSSAngleUnits = "deg" | "grad" | "rad" | "turn";
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
        abstract interpolate(from: Transform, t: number): Transform;
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
}
declare namespace SavageDOM.Attribute {
    class ViewBox implements Attribute<ViewBox> {
        x: Length;
        y: Length;
        width: Length;
        height: Length;
        constructor(x: Length, y: Length, width: Length, height: Length);
        toString(): string;
        parse(css: string | null): ViewBox;
        get(element: Element<SVGElement, any>, attr: string): ViewBox;
        set(element: Element<SVGElement, any>, attr: string, override?: ViewBox): void;
        interpolate(from: ViewBox, t: number): ViewBox;
    }
}
declare namespace SavageDOM {
    class Paper {
        root: SVGSVGElement;
        defs: SVGDefsElement;
        constructor();
        constructor(id: string);
        constructor(el: SVGSVGElement);
        addDef(def: Element<SVGElement, any>): void;
    }
}
declare namespace SavageDOM {
    class Element<SVG extends SVGElement, Attrs> {
        paper: Paper;
        node: SVG;
        id: string;
        private style;
        constructor(paper: Paper, el: SVG);
        constructor(paper: Paper, name: string, attrs?: Partial<Attrs>);
        toString(): string;
        setAttribute<Attr extends keyof Attrs>(name: Attr, val: Attrs[Attr]): void;
        setAttributes(attrs: Partial<Attrs>): void;
        getAttribute<Attr extends keyof Attrs>(name: Attr): string | null;
        add(el: Element<SVGElement, any>): void;
        getChildren(): Element<SVGElement, any>[];
        addEventListener(event: "focusin" | "focusout" | "mousedown" | "mouseup" | "mousemove" | "mouseover" | "mouseout", listener: (this: this, event: MouseEvent) => any): void;
        addEventListener(event: "touchstart" | "touchend" | "touchmove" | "touchcancel", listener: (this: this, event: TouchEvent) => any): void;
    }
}
