import { color } from "d3-color";
import { PaintServer } from "../elements/non-renderables/paint-server";
import { arrayParser, arraySerializer } from "./array";
import { Color, colorParser, colorSerializer } from "./color";
import { CSSAbsoluteUnit, CSSAngleUnit, CSSRelativeUnit, Dimension, dimensionSerializer, extractDimension, isDimension, Percentage } from "./dimension";
import { asNativeParser, AttributeGetter } from "./getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "./interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer, buildStringLiteralUnionParser, buildStringLiteralUnionSerializer } from "./literal";
import { asNativeSerializer, AttributeSetter, defaultSerializer } from "./setter";

export const stringParser = asNativeParser((repr: string | null) => repr || "");

export const numberParser = asNativeParser((repr: string | null): number => Number(repr));

export const booleanParser = asNativeParser((repr: string | null) => Boolean(repr));

export const anyParser = asNativeParser((repr: string | null): any => repr);

export type Inherit = "inherit";

export type None = "none";

export type CurrentColor = "currentColor";

type PaintLiteral = None | CurrentColor | Inherit;

export const paintLiterals: readonly PaintLiteral[] = ["none", "currentColor", "inherit"];

export type Paint = Color | PaintServer | PaintLiteral;

export const paintParser = buildStringLiteralUnionParser((repr: string | null): Color | PaintServer => {
  const colorValue = color(repr || "");
  if (colorValue !== null) {
    return colorValue;
  }
  throw new Error();
}, paintLiterals);

export type Length = number | Dimension<CSSAbsoluteUnit | CSSRelativeUnit | "%">;

export type Angle = number | Dimension<CSSAngleUnit>;

export const numberOrDimensionParser = asNativeParser<number | Dimension<any>>((repr: string | null) => {
  return extractDimension(repr || "") || Number(repr);
});

export const numberOrDimensionSerializer = asNativeSerializer((value: number | Dimension<any>) => {
  return isDimension(value) ? dimensionSerializer(value) : value.toString();
});

export type AttributeValue = object | number | string | boolean | undefined;

export interface BaseAttributes {
  // [name: string]: Attribute<AttributeValue> | Attribute<AttributeValue>[] | AttributeValue;
  [name: string]: any;
}

export interface Core_Attributes extends BaseAttributes {
  id: string;
  lang: string;
  tabindex: number;
}

export const Core_AttributeGetter: AttributeGetter<Core_Attributes> = {
  id: stringParser,
  lang: stringParser,
  tabindex: numberParser,
};

export const Core_AttributeSetter: AttributeSetter<Core_Attributes> = {
  id: defaultSerializer,
  lang: defaultSerializer,
  tabindex: defaultSerializer,
};

export const Core_AttributeInterpolator: AttributeInterpolator<Core_Attributes> = {
  id: unsupportedTweenBuilder,
  lang: unsupportedTweenBuilder,
  tabindex: unsupportedTweenBuilder,
};

export interface HasStyle extends BaseAttributes {
  style: string;
}

export const HasStyle_AttributeGetter: AttributeGetter<HasStyle> = {
  style: stringParser,
};

export const HasStyle_AttributeSetter: AttributeSetter<HasStyle> = {
  style: defaultSerializer,
};

export const HasStyle_AttributeInterpolator: AttributeInterpolator<HasStyle> = {
  style: unsupportedTweenBuilder,
};

export interface HasClass extends BaseAttributes {
  class: string;
}

export const HasClass_AttributeGetter: AttributeGetter<HasClass> = {
  class: stringParser,
};

export const HasClass_AttributeSetter: AttributeSetter<HasClass> = {
  class: defaultSerializer,
};

export const HasClass_AttributeInterpolator: AttributeInterpolator<HasClass> = {
  class: unsupportedTweenBuilder,
};

export interface HasOverflow extends BaseAttributes {
  overflow: "visible" | "hidden" | "scroll" | "auto" | Inherit;
}

export const overflowLiterals = ["visible", "hidden", "scroll", "auto", "inherit"] as const;

export const HasOverflow_AttributeGetter: AttributeGetter<HasOverflow> = {
  overflow: buildStringLiteralParser(overflowLiterals, "inherit"),
};

export const HasOverflow_AttributeSetter: AttributeSetter<HasOverflow> = {
  overflow: buildStringLiteralSerializer(overflowLiterals, "inherit"),
};

export const HasOverflow_AttributeInterpolator: AttributeInterpolator<HasOverflow> = {
  overflow: unsupportedTweenBuilder,
};

export interface HasColor extends BaseAttributes {
  color: Color | Inherit;
}

export const colorAttributeParser = buildStringLiteralUnionParser(colorParser, ["inherit"]);

export const colorAttributeSerializer = buildStringLiteralUnionSerializer(colorSerializer, ["inherit"]);

export const HasColor_AttributeGetter: AttributeGetter<HasColor> = {
  color: colorAttributeParser,
};

export const HasColor_AttributeSetter: AttributeSetter<HasColor> = {
  color: colorAttributeSerializer,
};

export const HasColor_AttributeInterpolator: AttributeInterpolator<HasColor> = {
  color: unsupportedTweenBuilder,
};

export interface HasColorInterpolation extends BaseAttributes {
  "color-interpolation": "auto" | "sRGB" | "linearRGB" | Inherit;
}

export const colorInterpolationLiterals = ["auto", "sRGB", "linearRGB", "inherit"] as const;

export const HasColorInterpolation_AttributeGetter: AttributeGetter<HasColorInterpolation> = {
  "color-interpolation": buildStringLiteralParser(colorInterpolationLiterals, "inherit"),
};

export const HasColorInterpolation_AttributeSetter: AttributeSetter<HasColorInterpolation> = {
  "color-interpolation": buildStringLiteralSerializer(colorInterpolationLiterals, "inherit"),
};

export const HasColorInterpolation_AttributeInterpolator: AttributeInterpolator<HasColorInterpolation> = {
  "color-interpolation": unsupportedTweenBuilder,
};

export interface HasColorRendering extends BaseAttributes {
  "color-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
}

export const colorRenderingLiterals = ["auto", "optimizeSpeed", "optimizeQuality", "inherit"] as const;

export const HasColorRendering_AttributeGetter: AttributeGetter<HasColorRendering> = {
  "color-rendering": buildStringLiteralParser(colorRenderingLiterals, "inherit"),
};

export const HasColorRendering_AttributeSetter: AttributeSetter<HasColorRendering> = {
  "color-rendering": buildStringLiteralSerializer(colorRenderingLiterals, "inherit"),
};

export const HasColorRendering_AttributeInterpolator: AttributeInterpolator<HasColorRendering> = {
  "color-rendering": unsupportedTweenBuilder,
};

export interface HasCursor extends BaseAttributes {
  cursor: "auto" | "crosshair" | "default" | "pointer" | "move" | "e-resize" | "ne-resize" | "nw-resize" | "n-resize" | "se-resize" | "sw-resize" | "s-resize" | "w-resize" | "text" | "wait" | "help" | Inherit;
}

export const cursorLiterals = ["auto", "crosshair", "default", "pointer", "move", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "text", "wait", "help", "inherit"] as const;

export const HasCursor_AttributeGetter: AttributeGetter<HasCursor> = {
  cursor: buildStringLiteralParser(cursorLiterals, "inherit"),
};

export const HasCursor_AttributeSetter: AttributeSetter<HasCursor> = {
  cursor: buildStringLiteralSerializer(cursorLiterals, "inherit"),
};

export const HasCursor_AttributeInterpolator: AttributeInterpolator<HasCursor> = {
  cursor: unsupportedTweenBuilder,
};

export interface HasFill extends BaseAttributes {
  fill: Paint;
  "fill-opacity": number | Inherit;
  "fill-rule": "nonzero" | "evenodd" | Inherit;
}

const numberOrInheritParser = buildStringLiteralUnionParser(numberParser, ["inherit"]);

export const fillRuleLiterals = ["nonzero", "evenodd", "inherit"] as const;

export const HasFill_AttributeGetter: AttributeGetter<HasFill> = {
  fill: paintParser,
  "fill-opacity": numberOrInheritParser,
  "fill-rule": buildStringLiteralParser(fillRuleLiterals, "inherit"),
};

export const HasFill_AttributeSetter: AttributeSetter<HasFill> = {
  fill: defaultSerializer,
  "fill-opacity": defaultSerializer,
  "fill-rule": buildStringLiteralSerializer(fillRuleLiterals, "inherit"),
};

export const HasFill_AttributeInterpolator: AttributeInterpolator<HasFill> = {
  fill: unsupportedTweenBuilder,
  "fill-opacity": unsupportedTweenBuilder,
  "fill-rule": unsupportedTweenBuilder,
};

export interface HasOpacity extends BaseAttributes {
  opacity: number | Inherit;
}

export const HasOpacity_AttributeGetter: AttributeGetter<HasOpacity> = {
  opacity: numberOrInheritParser,
};

export const HasOpacity_AttributeSetter: AttributeSetter<HasOpacity> = {
  opacity: defaultSerializer,
};

export const HasOpacity_AttributeInterpolator: AttributeInterpolator<HasOpacity> = {
  opacity: unsupportedTweenBuilder,
};

export type DashArray = (Length | Percentage)[];

export interface HasStroke extends BaseAttributes {
  stroke: Paint;
  "stroke-dasharray": None | DashArray | Inherit;
  "stroke-dashoffset": Percentage | Length | Inherit;
  "stroke-linecap": "butt" | "round" | "square" | Inherit;
  "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
  "stroke-miterlimit": number | Inherit;
  "stroke-opacity": number | Inherit;
  "stroke-width": Length | Percentage | Inherit;
}

export const strokeLinecapLiterals = ["butt", "round", "square", "inherit"] as const;
export const strokeLinejoinLiterals = ["miter", "round", "bevel", "inherit"] as const;

export const HasStroke_AttributeGetter: AttributeGetter<HasStroke> = {
  stroke: paintParser,
  "stroke-dasharray": buildStringLiteralUnionParser<DashArray, None | Inherit>(arrayParser(numberOrDimensionParser), ["none", "inherit"]),
  "stroke-dashoffset": buildStringLiteralUnionParser<Percentage | Length, Inherit>(numberOrDimensionParser, ["inherit"]),
  "stroke-linecap": buildStringLiteralParser(strokeLinecapLiterals, "inherit"),
  "stroke-linejoin": buildStringLiteralParser(strokeLinejoinLiterals, "inherit"),
  "stroke-miterlimit": numberOrInheritParser,
  "stroke-opacity": numberOrInheritParser,
  "stroke-width": buildStringLiteralUnionParser(numberOrDimensionParser, ["inherit"] as const),
};

export const HasStroke_AttributeSetter: AttributeSetter<HasStroke> = {
  stroke: defaultSerializer,
  "stroke-dasharray": buildStringLiteralUnionSerializer(arraySerializer(numberOrDimensionSerializer), ["none", "inherit"]),
  "stroke-dashoffset": buildStringLiteralUnionSerializer(numberOrDimensionSerializer, ["inherit"]),
  "stroke-linecap": buildStringLiteralSerializer(strokeLinecapLiterals, "inherit"),
  "stroke-linejoin": buildStringLiteralSerializer(strokeLinejoinLiterals, "inherit"),
  "stroke-miterlimit": defaultSerializer,
  "stroke-opacity": defaultSerializer,
  "stroke-width": buildStringLiteralUnionSerializer(numberOrDimensionSerializer, ["inherit"]),
};

export const HasStroke_AttributeInterpolator: AttributeInterpolator<HasStroke> = {
  stroke: unsupportedTweenBuilder,
  "stroke-dasharray": unsupportedTweenBuilder,
  "stroke-dashoffset": unsupportedTweenBuilder,
  "stroke-linecap": unsupportedTweenBuilder,
  "stroke-linejoin": unsupportedTweenBuilder,
  "stroke-miterlimit": unsupportedTweenBuilder,
  "stroke-opacity": unsupportedTweenBuilder,
  "stroke-width": unsupportedTweenBuilder,
};

export interface HasVisibility extends BaseAttributes {
  visibility: "visible" | "hidden" | "collapse" | Inherit;
}

export const visibilityLiterals = ["visible", "hidden", "collapse", "inherit"] as const;

export const HasVisibility_AttributeGetter: AttributeGetter<HasVisibility> = {
  visibility: buildStringLiteralParser(visibilityLiterals, "inherit"),
};

export const HasVisibility_AttributeSetter: AttributeSetter<HasVisibility> = {
  visibility: buildStringLiteralSerializer(visibilityLiterals, "inherit"),
};

export const HasVisibility_AttributeInterpolator: AttributeInterpolator<HasVisibility> = {
  visibility: unsupportedTweenBuilder,
};
