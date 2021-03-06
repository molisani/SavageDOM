import { HasFill, HasStroke, HasVisibility, Inherit, Length, None } from "../../attributes/base";
import { Dimension } from "../../attributes/dimension";
import { Point } from "../../attributes/point";
import { TextContent } from "../../attributes/text-content";
import { XMLNS } from "../../constants";
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

export class TextSpan extends AbstractRenderable<SVGTSpanElement, TextSpan_Attributes> {
  public get computedLength(): number {
    return this._node.getComputedTextLength();
  }
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

function _attributeHelper(a1: Point | Length, a2?: Length): Partial<Text_Attributes> {
  return (a1 instanceof Point) ? { "x:y": a1 } : { x: a1, y: a2 };
}

export class Text extends AbstractRenderable<SVGTextElement, Text_Attributes> {
  public static create(context: Context, text: string, p: Point): Text;
  public static create(context: Context, content: string, x: Length, y: Length): Text;
  public static create(context: Context, content: string, a1: Point | Length, a2?: Length): Text;
  public static create(context: Context, content: string, a1: Point | Length, a2?: Length): Text {
    const element = context.window.document.createElementNS(XMLNS.SVG, "text");
    const attrs = _attributeHelper(a1, a2);
    const text = new Text(context, element, attrs);
    if (content) {
      text.addSpan(content);
    }
    return text;
  }
  public static createMultiline(context: Context, content: string, width: number, attrs: Partial<Text_Attributes>, p: Point): Text;
  public static createMultiline(context: Context, content: string, width: number, attrs: Partial<Text_Attributes>, x: Length, y: Length): Text;
  public static createMultiline(context: Context, content: string, width: number, attrs: Partial<Text_Attributes>, a1: Point | Length, a2?: Length): Text {
    const multilineText = Text.create(context, "", a1, a2);
    const temp = Text.create(context, "", a1, a2);
    temp.setAttribute("opacity", 0);
    const span = new TextSpan(context, context.window.document.createElementNS(XMLNS.SVG, "tspan"), attrs);
    temp.add(span);
    const lines = [""];
    content.split(" ").forEach((word) => {
      const line = lines[lines.length - 1];
      const newLine = (line.length === 0) ? word : `${line} ${word}`;
      const lineContent = new TextContent(newLine);
      span.setAttribute("textContent", lineContent);
      if (span.computedLength > width && line.length > 0) {
        lines.push(word);
      } else {
        lines[lines.length - 1] = newLine;
      }
    });
    lines.forEach(line => {
      if (line.length > 0) {
        multilineText.addSpan(line, 1);
      }
    });
    return multilineText;
  }
  public addSpan(content: string, lineHeight?: number | Length): TextSpan {
    const span = new TextSpan(this.context, this.context.window.document.createElementNS(XMLNS.SVG, "tspan"));
    span.setAttribute("textContent", new TextContent(content));
    if (lineHeight) {
      span.setAttribute("x", parseFloat(this.getAttribute("x") || "0"));
      if (typeof lineHeight === "number") {
        span.setAttribute("dy", new Dimension<"em">(lineHeight, "em"));
      } else {
        span.setAttribute("dy", lineHeight);
      }
    }
    this.add(span);
    return span;
  }
  public get computedLength(): number {
    return this._node.getComputedTextLength();
  }
}
