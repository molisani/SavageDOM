import { HasFill, HasStroke, HasVisibility, Inherit, Length, None } from "../../attributes/base";
import { Dimension } from "../../attributes/dimension";
import { Point } from "../../attributes/point";
import { TextContent } from "../../attributes/text-content";
import { Context } from "../../context";
import { AbstractRenderable, Graphics_Attributes, Renderable_Attributes } from "../renderable";

export interface Textual_Attributes extends HasFill, HasStroke, HasVisibility {
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

export interface TextSpan_Attributes extends Text_Attributes, TextualChild_Attributes {
  textContent: TextContent;
}

export class TextSpan extends AbstractRenderable<SVGTSpanElement, TextSpan_Attributes, {}> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & TextSpan_Attributes>) {
    super(context, "tspan", attrs);
  }
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

export class Text extends AbstractRenderable<SVGTextElement, Text_Attributes, {}> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Text_Attributes>) {
    super(context, "text", attrs);
  }
  public addSpan(content: TextContent, lineHeight?: number | Length, update: boolean = true): TextSpan {
    const span = new TextSpan(this.context);
    span.setAttribute("textContent", content);
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

export class MultilineText extends Text {
  constructor(context: Context, text: string, width: number, attrs?: Partial<Renderable_Attributes & Textual_Attributes & Text_Attributes>) {
    super(context, attrs);
    const temp = new Text(context);
    temp.setAttribute("opacity", 0);
    const span = new TextSpan(context);
    temp.add(span);
    if (attrs) {
      span.setAttributes(attrs);
    }
    const spaceWidth = temp.computedLength;
    const lines = [""];
    text.split(" ").forEach((word, i) => {
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
        this.addSpan(new TextContent(line), 1);
      }
    });
  }
}
