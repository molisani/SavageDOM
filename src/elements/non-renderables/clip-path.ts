import { BaseAttributes, Inherit, Length, None, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { Box, buildBoxCompositeParser, buildBoxCompositeSerializer } from "../../attributes/box";
import { anyParser, AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractNonRenderable, NonRenderable_AttributeGetter, NonRenderable_AttributeInterpolator, NonRenderable_Attributes, NonRenderable_AttributeSetter } from "../non-renderable";

export interface HasClipPath extends BaseAttributes {
  "clip-path": ClipPath | None | Inherit;
  "clip-rule": "nonzero" | "evenodd" | Inherit;
}

export const HasClipPath_AttributeGetter: AttributeGetter<HasClipPath> = {
  "clip-path": anyParser,
  "clip-rule": buildStringLiteralParser(["nonzero", "evenodd", "inherit"], "inherit"),
};

export const HasClipPath_AttributeSetter: AttributeSetter<HasClipPath> = {
  "clip-path": defaultSerializer,
  "clip-rule": buildStringLiteralSerializer(["nonzero", "evenodd", "inherit"], "inherit"),
};

export const HasClipPath_AttributeInterpolator: AttributeInterpolator<HasClipPath> = {
  "clip-path": unsupportedTweenBuilder,
  "clip-rule": unsupportedTweenBuilder,
};

export interface ClipPath_Attributes extends NonRenderable_Attributes {
  maskUnits: "userSpaceOnUse" | "objectBoundingBox";
  maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
  x: Length;
  y: Length;
  width: Length;
  height: Length;
  "x:y:width:height": Box;
}

const unitsLiterals = ["userSpaceOnUse", "objectBoundingBox"] as const;

export const ClipPath_AttributeGetter: AttributeGetter<ClipPath_Attributes> = {
  ...NonRenderable_AttributeGetter,
  maskUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  maskContentUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
  "x:y:width:height": buildBoxCompositeParser("x", "y", "width", "height"),
};

export const ClipPath_AttributeSetter: AttributeSetter<ClipPath_Attributes> = {
  ...NonRenderable_AttributeSetter,
  maskUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  maskContentUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
  "x:y:width:height": buildBoxCompositeSerializer("x", "y", "width", "height"),
};

export const ClipPath_AttributeInterpolator: AttributeInterpolator<ClipPath_Attributes> = {
  ...NonRenderable_AttributeInterpolator,
  maskUnits: unsupportedTweenBuilder,
  maskContentUnits: unsupportedTweenBuilder,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
  "x:y:width:height": unsupportedTweenBuilder,
};

function _attributeHelper(width?: number, height?: number, x?: number, y?: number, maskUnits?: "userSpaceOnUse" | "objectBoundingBox", maskContentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Partial<ClipPath_Attributes> {
  return { width, height, x, y, maskUnits, maskContentUnits };
}

export class ClipPath extends AbstractNonRenderable<SVGClipPathElement, ClipPath_Attributes> {
  public static create(context: Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): ClipPath {
    const clipPath = new ClipPath(context, context.window.document.createElementNS(XMLNS.SVG, "clipPath"), _attributeHelper(w, h, x, y, units, contentUnits));
    context.addDef(clipPath);
    return clipPath;
  }
  protected _getter = ClipPath_AttributeGetter;
  protected _setter = ClipPath_AttributeSetter;
  protected _interpolator = ClipPath_AttributeInterpolator;
}
