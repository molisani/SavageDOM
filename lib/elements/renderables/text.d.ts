import { HasFill, HasStroke, HasVisibility, Inherit, Length, None } from "../../attributes/base";
import { Point } from "../../attributes/point";
import { TextContent } from "../../attributes/text-content";
import { Context } from "../../context";
import { AbstractRenderable, Graphics_Attributes, Renderable_Attributes } from "../renderable";
export interface Textual_Attributes extends Renderable_Attributes, HasFill, HasStroke, HasVisibility {
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
export interface TextualChild_Attributes {
    "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Inherit;
    "baseline-shift": "auto" | "baseline" | "super" | "sub" | number | Inherit;
}
export interface TextSpan_Attributes extends Renderable_Attributes, Text_Attributes, TextualChild_Attributes {
    textContent: TextContent;
}
export declare class TextSpan extends AbstractRenderable<SVGTSpanElement, TextSpan_Attributes> {
    constructor(context: Context, attrs?: Partial<TextSpan_Attributes>);
    readonly computedLength: number;
}
export interface Text_Attributes extends Textual_Attributes, Graphics_Attributes {
    x: Length;
    y: Length;
    "x:y": Point;
    dx: Length;
    dy: Length;
    "dx:dy": Point;
    textLength?: Length;
}
export declare class Text extends AbstractRenderable<SVGTextElement, Text_Attributes> {
    constructor(context: Context, content: string, p: Point);
    constructor(context: Context, content: string, x: Length, y: Length);
    constructor(context: Context, content: string, a1: Point | Length, a2?: Length);
    addSpan(content: string, lineHeight?: number | Length, update?: boolean): TextSpan;
    readonly computedLength: number;
}
export declare class MultilineText extends Text {
    constructor(context: Context, text: string, width: number, attrs: Partial<Text_Attributes> & {
        "x:y": Point;
    });
    constructor(context: Context, text: string, width: number, attrs: Partial<Text_Attributes> & {
        x: Length;
        y: Length;
    });
}
