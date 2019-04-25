import { HasOpacity, HasOpacity_AttributeGetter, HasOpacity_AttributeInterpolator, HasOpacity_AttributeSetter, HasOverflow, HasOverflow_AttributeGetter, HasOverflow_AttributeInterpolator, HasOverflow_AttributeSetter, Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../../attributes/base";
import { Box, boxParser, boxSerializer, boxTweenBuilder, buildBoxCompositeParser, buildBoxCompositeSerializer } from "../../../attributes/box";
import { AttributeGetter, stringParser } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../../attributes/literal";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../../attributes/point";
import { PreserveAspectRatio, preserveAspectRatioParser, preserveAspectRatioSerializer } from "../../../attributes/preserve-aspect-ratio";
import { AttributeSetter, defaultSerializer } from "../../../attributes/setter";
import { buildTransformPartialParser, defaultTransformPartialSerializer, matrix, rotate, scale, skewX, skewY, Transform, TransformList, transformListParser, transformListSerializer, transformListTweenBuilder, translate } from "../../../attributes/transform";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { AbstractPaintServer, PaintServer_AttributeGetter, PaintServer_AttributeInterpolator, PaintServer_Attributes, PaintServer_AttributeSetter } from "../paint-server";

export interface Pattern_Attributes extends PaintServer_Attributes, HasOverflow, HasOpacity {
  patternUnits: "userSpaceOnUse" | "objectBoundingBox";
  patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
  "patternTransform.matrix": Transform<"matrix">;
  "patternTransform.translate": Transform<"translate">;
  "patternTransform.scale": Transform<"scale">;
  "patternTransform.rotate": Transform<"rotate">;
  "patternTransform.skewX": Transform<"skewX">;
  "patternTransform.skewY": Transform<"skewY">;
  patternTransform: TransformList;
  x: Length;
  y: Length;
  p: Point;
  width: Length;
  height: Length;
  "x:y:width:height": Box;
  "xlink:href": string;
  preserveAspectRatio: PreserveAspectRatio;
  viewBox: Box;
}

const unitsLiterals = ["userSpaceOnUse", "objectBoundingBox"] as const;

const Pattern_AttributeGetter: AttributeGetter<Pattern_Attributes> = {
  ...PaintServer_AttributeGetter,
  ...HasOverflow_AttributeGetter,
  ...HasOpacity_AttributeGetter,
  patternUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  patternContentUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  "patternTransform.matrix": buildTransformPartialParser("patternTransform", matrix),
  "patternTransform.translate": buildTransformPartialParser("patternTransform", translate),
  "patternTransform.scale": buildTransformPartialParser("patternTransform", scale),
  "patternTransform.rotate": buildTransformPartialParser("patternTransform", rotate),
  "patternTransform.skewX": buildTransformPartialParser("patternTransform", skewX),
  "patternTransform.skewY": buildTransformPartialParser("patternTransform", skewY),
  patternTransform: transformListParser,
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  p: buildPointCompositeParser("x", "y"),
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
  "x:y:width:height": buildBoxCompositeParser("x", "y", "width", "height"),
  "xlink:href": stringParser,
  preserveAspectRatio: preserveAspectRatioParser,
  viewBox: boxParser,
};

const Pattern_AttributeSetter: AttributeSetter<Pattern_Attributes> = {
  ...PaintServer_AttributeSetter,
  ...HasOverflow_AttributeSetter,
  ...HasOpacity_AttributeSetter,
  patternUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  patternContentUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  "patternTransform.matrix": defaultTransformPartialSerializer,
  "patternTransform.translate": defaultTransformPartialSerializer,
  "patternTransform.scale": defaultTransformPartialSerializer,
  "patternTransform.rotate": defaultTransformPartialSerializer,
  "patternTransform.skewX": defaultTransformPartialSerializer,
  "patternTransform.skewY": defaultTransformPartialSerializer,
  patternTransform: transformListSerializer,
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  p: buildPointCompositeSerializer("x", "y"),
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
  "x:y:width:height": buildBoxCompositeSerializer("x", "y", "width", "height"),
  "xlink:href": defaultSerializer,
  preserveAspectRatio: preserveAspectRatioSerializer,
  viewBox: boxSerializer,
};

const Pattern_AttributeInterpolator: AttributeInterpolator<Pattern_Attributes> = {
  ...PaintServer_AttributeInterpolator,
  ...HasOverflow_AttributeInterpolator,
  ...HasOpacity_AttributeInterpolator,
  patternUnits: unsupportedTweenBuilder,
  patternContentUnits: unsupportedTweenBuilder,
  "patternTransform.matrix": unsupportedTweenBuilder,
  "patternTransform.translate": unsupportedTweenBuilder,
  "patternTransform.scale": unsupportedTweenBuilder,
  "patternTransform.rotate": unsupportedTweenBuilder,
  "patternTransform.skewX": unsupportedTweenBuilder,
  "patternTransform.skewY": unsupportedTweenBuilder,
  patternTransform: transformListTweenBuilder,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  p: pointTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
  "x:y:width:height": unsupportedTweenBuilder,
  "xlink:href": unsupportedTweenBuilder,
  preserveAspectRatio: unsupportedTweenBuilder,
  viewBox: boxTweenBuilder,
};

function _attributeHelper(w: number | SVGPatternElement, h: number, x: number, y: number, view?: Box): Partial<Pattern_Attributes> {
  const attrs: Partial<Pattern_Attributes> = {};
  if (!(w instanceof SVGPatternElement)) {
    attrs.width = w;
    attrs.height = h;
    attrs.x = x;
    attrs.y = y;
    if (view) {
      attrs.viewBox = view;
    } else {
      attrs.patternUnits = "userSpaceOnUse";
    }
  }
  return attrs;
}

export class Pattern extends AbstractPaintServer<SVGPatternElement, Pattern_Attributes> {
  public static create(context: Context, el: SVGPatternElement): Pattern;
  public static create(context: Context, w: number, h: number, x?: number, y?: number, view?: Box): Pattern;
  public static create(context: Context, w: number | SVGPatternElement, h: number = (w instanceof SVGPatternElement) ? 0 : w, x: number = 0, y: number = 0, view?: Box): Pattern {
    const pattern = new Pattern(context, context.window.document.createElementNS(XMLNS.SVG, "pattern"), _attributeHelper(w, h, x, y, view));
    context.addDef(pattern);
    return pattern;
  }
  protected _getter = Pattern_AttributeGetter;
  protected _setter = Pattern_AttributeSetter;
  protected _interpolator = Pattern_AttributeInterpolator;
  public clone(deep: boolean = true): Pattern {
    return new Pattern(this.context, super.cloneNode(deep));
  }
}
