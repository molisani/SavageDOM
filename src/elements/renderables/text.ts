import { dimension } from "../../attributes";
import { BaseAttributes, HasFill, HasFill_AttributeGetter, HasFill_AttributeInterpolator, HasFill_AttributeSetter, HasStroke, HasStroke_AttributeGetter, HasStroke_AttributeInterpolator, HasStroke_AttributeSetter, HasVisibility, HasVisibility_AttributeGetter, HasVisibility_AttributeInterpolator, HasVisibility_AttributeSetter, Inherit, Length, None, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { anyParser, asManualParser, AttributeGetter, numberParser, stringParser, withDefault } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer, buildStringLiteralUnionParser, buildStringLiteralUnionSerializer } from "../../attributes/literal";
import { buildPointCompositeParser, buildPointCompositeSerializer, isPoint, Point, pointTweenBuilder } from "../../attributes/point";
import { asManualSerializer, AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractRenderable, Graphics_AttributeGetter, Graphics_AttributeInterpolator, Graphics_Attributes, Graphics_AttributeSetter, Renderable_AttributeGetter, Renderable_AttributeInterpolator, Renderable_Attributes, Renderable_AttributeSetter } from "../renderable";

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

const directionLiterals = ["ltr", "rtl", "inherit"] as const;

const dominantBaselineLiterals = ["auto", "use-script", "no-change", "reset-size", "ideographic", "alphabetic", "hanging", "mathematical", "central", "middle", "text-after-edge", "text-before-edge", "inherit"] as const;

const fontStretchLiterals = ["normal", "wider", "narrower", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", "inherit"] as const;

const fontStyleLiterals = ["normal", "italic", "oblique", "inherit"] as const;

const fontVariantLiterals = ["normal", "small-caps", "inherit"] as const;

const textAnchorLiterals = ["start", "middle", "end", "inherit"] as const;

const textDecorationLiterals = ["underline", "overline", "line-through", "blink", "none", "inherit"] as const;

const textRenderingLiterals = ["auto", "optimizeSpeed", "optimizeLegibility", "geometricPrecision", "inherit"] as const;

const writingModeLiterals = ["lr-tb", "rl-tb", "tb-rl", "lr", "rl", "tb", "inherit"] as const;

const Textual_AttributeGetter: AttributeGetter<Textual_Attributes> = {
  ...Renderable_AttributeGetter,
  ...HasFill_AttributeGetter,
  ...HasStroke_AttributeGetter,
  ...HasVisibility_AttributeGetter,
  direction: buildStringLiteralParser(directionLiterals, "inherit"),
  "dominant-baseline": buildStringLiteralParser(dominantBaselineLiterals, "inherit"),
  "font-family": buildStringLiteralUnionParser(withDefault(stringParser, ""), ["inherit"]),
  "font-size": buildStringLiteralUnionParser<Length, Inherit>(numberOrDimensionParser, ["inherit"]),
  "font-size-adjust": buildStringLiteralUnionParser<number, None | Inherit>(numberParser, ["inherit", "none"]),
  "font-stretch": buildStringLiteralParser(fontStretchLiterals, "inherit"),
  "font-style": buildStringLiteralParser(fontStyleLiterals, "inherit"),
  "font-variant": buildStringLiteralParser(fontVariantLiterals, "inherit"),
  "font-weight": anyParser,
  kerning: buildStringLiteralUnionParser<Length, "auto" | Inherit>(numberOrDimensionParser, ["auto", "inherit"]),
  "letter-spacing": buildStringLiteralUnionParser<Length, "normal" | Inherit>(numberOrDimensionParser, ["normal", "inherit"]),
  "text-anchor": buildStringLiteralParser(textAnchorLiterals, "inherit"),
  "text-decoration": buildStringLiteralParser(textDecorationLiterals, "inherit"),
  "text-rendering": buildStringLiteralParser(textRenderingLiterals, "inherit"),
  "word-spacing": buildStringLiteralUnionParser<Length, "normal" | Inherit>(numberOrDimensionParser, ["normal", "inherit"]),
  "writing-mode": buildStringLiteralParser(writingModeLiterals, "inherit"),
};

const Textual_AttributeSetter: AttributeSetter<Textual_Attributes> = {
  ...Renderable_AttributeSetter,
  ...HasFill_AttributeSetter,
  ...HasStroke_AttributeSetter,
  ...HasVisibility_AttributeSetter,
  direction: buildStringLiteralSerializer(directionLiterals, "inherit"),
  "dominant-baseline": buildStringLiteralSerializer(dominantBaselineLiterals, "inherit"),
  "font-family": buildStringLiteralUnionSerializer(withDefault(defaultSerializer, ""), ["inherit"]),
  "font-size": buildStringLiteralUnionSerializer<Length, Inherit>(numberOrDimensionSerializer, ["inherit"]),
  "font-size-adjust": buildStringLiteralUnionSerializer<number, None | Inherit>(defaultSerializer, ["inherit", "none"]),
  "font-stretch": buildStringLiteralSerializer(fontStretchLiterals, "inherit"),
  "font-style": buildStringLiteralSerializer(fontStyleLiterals, "inherit"),
  "font-variant": buildStringLiteralSerializer(fontVariantLiterals, "inherit"),
  "font-weight": defaultSerializer,
  kerning: buildStringLiteralUnionSerializer<Length, "auto" | Inherit>(numberOrDimensionSerializer, ["auto", "inherit"]),
  "letter-spacing": buildStringLiteralUnionSerializer<Length, "normal" | Inherit>(numberOrDimensionSerializer, ["normal", "inherit"]),
  "text-anchor": buildStringLiteralSerializer(textAnchorLiterals, "inherit"),
  "text-decoration": buildStringLiteralSerializer(textDecorationLiterals, "inherit"),
  "text-rendering": buildStringLiteralSerializer(textRenderingLiterals, "inherit"),
  "word-spacing": buildStringLiteralUnionSerializer<Length, "normal" | Inherit>(numberOrDimensionSerializer, ["normal", "inherit"]),
  "writing-mode": buildStringLiteralSerializer(writingModeLiterals, "inherit"),
};

const Textual_AttributeInterpolator: AttributeInterpolator<Textual_Attributes> = {
  ...Renderable_AttributeInterpolator,
  ...HasFill_AttributeInterpolator,
  ...HasStroke_AttributeInterpolator,
  ...HasVisibility_AttributeInterpolator,
  direction: unsupportedTweenBuilder,
  "dominant-baseline": unsupportedTweenBuilder,
  "font-family": unsupportedTweenBuilder,
  "font-size": unsupportedTweenBuilder,
  "font-size-adjust": unsupportedTweenBuilder,
  "font-stretch": unsupportedTweenBuilder,
  "font-style": unsupportedTweenBuilder,
  "font-variant": unsupportedTweenBuilder,
  "font-weight": unsupportedTweenBuilder,
  kerning: unsupportedTweenBuilder,
  "letter-spacing": unsupportedTweenBuilder,
  "text-anchor": unsupportedTweenBuilder,
  "text-decoration": unsupportedTweenBuilder,
  "text-rendering": unsupportedTweenBuilder,
  "word-spacing": unsupportedTweenBuilder,
  "writing-mode": unsupportedTweenBuilder,
};

export interface Text_Attributes extends Textual_Attributes, Graphics_Attributes {
  x: Length;
  y: Length;
  p: Point;
  dx: Length;
  dy: Length;
  d: Point;
  textLength?: Length;
}

const Text_AttributeGetter: AttributeGetter<Text_Attributes> = {
  ...Textual_AttributeGetter,
  ...Graphics_AttributeGetter,
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  p: buildPointCompositeParser("x", "y"),
  dx: numberOrDimensionParser,
  dy: numberOrDimensionParser,
  d: buildPointCompositeParser("dx", "dy"),
  textLength: numberOrDimensionParser,
};

const Text_AttributeSetter: AttributeSetter<Text_Attributes> = {
  ...Textual_AttributeSetter,
  ...Graphics_AttributeSetter,
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  p: buildPointCompositeSerializer("x", "y"),
  dx: numberOrDimensionSerializer,
  dy: numberOrDimensionSerializer,
  d: buildPointCompositeSerializer("dx", "dy"),
  textLength: defaultSerializer,
};

const Text_AttributeInterpolator: AttributeInterpolator<Text_Attributes> = {
  ...Textual_AttributeInterpolator,
  ...Graphics_AttributeInterpolator,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  p: pointTweenBuilder,
  dx: unsupportedTweenBuilder,
  dy: unsupportedTweenBuilder,
  d: pointTweenBuilder,
  textLength: unsupportedTweenBuilder,
};

export interface TextualChild_Attributes extends BaseAttributes {
  "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Inherit;
  "baseline-shift": "auto" | "baseline" | "super" | "sub" | number | Inherit;
}

const alignmentBaselineLiterals = ["auto", "baseline", "before-edge", "text-before-edge", "middle", "central", "after-edge", "text-after-edge", "ideographic", "alphabetic", "hanging", "mathematical", "inherit"] as const;
const baselineShiftLiterals = ["auto", "baseline", "super", "sub", "inherit"] as const;

const TextualChild_AttributeGetter: AttributeGetter<TextualChild_Attributes> = {
  "alignment-baseline": buildStringLiteralParser(alignmentBaselineLiterals, "inherit"),
  "baseline-shift": buildStringLiteralUnionParser(numberParser, baselineShiftLiterals),
};

const TextualChild_AttributeSetter: AttributeSetter<TextualChild_Attributes> = {
  "alignment-baseline": buildStringLiteralSerializer(alignmentBaselineLiterals, "inherit"),
  "baseline-shift": buildStringLiteralUnionSerializer(defaultSerializer, baselineShiftLiterals),
};

const TextualChild_AttributeInterpolator: AttributeInterpolator<TextualChild_Attributes> = {
  "alignment-baseline": unsupportedTweenBuilder,
  "baseline-shift": unsupportedTweenBuilder,
};

export interface TextSpan_Attributes extends Renderable_Attributes, Text_Attributes, TextualChild_Attributes {
  textContent: string;
}

const TextSpan_AttributeGetter: AttributeGetter<TextSpan_Attributes> = {
  ...Renderable_AttributeGetter,
  ...Text_AttributeGetter,
  ...TextualChild_AttributeGetter,
  textContent: asManualParser((element, _name) => element.node.textContent || ""),
};

const TextSpan_AttributeSetter: AttributeSetter<TextSpan_Attributes> = {
  ...Renderable_AttributeSetter,
  ...Text_AttributeSetter,
  ...TextualChild_AttributeSetter,
  textContent: asManualSerializer((element, _name, value) => element.textContent = value),
};

const TextSpan_AttributeInterpolator: AttributeInterpolator<TextSpan_Attributes> = {
  ...Renderable_AttributeInterpolator,
  ...Text_AttributeInterpolator,
  ...TextualChild_AttributeInterpolator,
  textContent: unsupportedTweenBuilder,
};

export class TextSpan extends AbstractRenderable<SVGTSpanElement, TextSpan_Attributes> {
  protected _getter = TextSpan_AttributeGetter;
  protected _setter = TextSpan_AttributeSetter;
  protected _interpolator = TextSpan_AttributeInterpolator;
  public get computedLength(): number {
    return this._node.getComputedTextLength();
  }
}

function _attributeHelper(a1: Point | Length, a2?: Length): Partial<Text_Attributes> {
  return (isPoint(a1)) ? { p: a1 } : { x: a1, y: a2 };
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
      span.setAttribute("textContent", newLine);
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
  protected _getter = Text_AttributeGetter;
  protected _setter = Text_AttributeSetter;
  protected _interpolator = Text_AttributeInterpolator;
  public addSpan(content: string, lineHeight?: Length): TextSpan {
    const span = new TextSpan(this.context, this.context.window.document.createElementNS(XMLNS.SVG, "tspan"));
    span.setAttribute("textContent", content);
    if (lineHeight) {
      span.setAttribute("x", this.getAttribute("x"));
      if (typeof lineHeight === "number") {
        span.setAttribute("dy", dimension(lineHeight, "em"));
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
