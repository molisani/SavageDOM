import { anyParser, BaseAttributes, Inherit, Length, None, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { Box, buildBoxCompositeParser, buildBoxCompositeSerializer } from "../../attributes/box";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractNonRenderable, NonRenderable_AttributeGetter, NonRenderable_AttributeInterpolator, NonRenderable_Attributes, NonRenderable_AttributeSetter } from "../non-renderable";

export interface HasMask extends BaseAttributes {
  mask: Mask | None | Inherit;
}

export const HasMask_AttributeGetter: AttributeGetter<HasMask> = {
  mask: anyParser,
};

export const HasMask_AttributeSetter: AttributeSetter<HasMask> = {
  mask: defaultSerializer,
};

export const HasMask_AttributeInterpolator: AttributeInterpolator<HasMask> = {
  mask: unsupportedTweenBuilder,
};

export interface Mask_Attributes extends NonRenderable_Attributes {
  maskUnits: "userSpaceOnUse" | "objectBoundingBox";
  maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
  x: Length;
  y: Length;
  width: Length;
  height: Length;
  "x:y:width:height": Box;
}

const unitsLiterals = ["userSpaceOnUse", "objectBoundingBox"] as const;

export const Mask_AttributeGetter: AttributeGetter<Mask_Attributes> = {
  ...NonRenderable_AttributeGetter,
  maskUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  maskContentUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
  "x:y:width:height": buildBoxCompositeParser("x", "y", "width", "height"),
};

export const Mask_AttributeSetter: AttributeSetter<Mask_Attributes> = {
  ...NonRenderable_AttributeSetter,
  maskUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  maskContentUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
  "x:y:width:height": buildBoxCompositeSerializer("x", "y", "width", "height"),
};

export const Mask_AttributeInterpolator: AttributeInterpolator<Mask_Attributes> = {
  ...NonRenderable_AttributeInterpolator,
  maskUnits: unsupportedTweenBuilder,
  maskContentUnits: unsupportedTweenBuilder,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
  "x:y:width:height": unsupportedTweenBuilder,
};

function _attributeHelper(width?: number, height?: number, x?: number, y?: number, maskUnits?: "userSpaceOnUse" | "objectBoundingBox", maskContentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Partial<Mask_Attributes> {
  return { width, height, x, y, maskUnits, maskContentUnits };
}

export class Mask extends AbstractNonRenderable<SVGMaskElement, Mask_Attributes> {
  public static create(context: Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox") {
    const mask = new Mask(context, context.window.document.createElementNS(XMLNS.SVG, "mask"), _attributeHelper(w, h, x, y, units, contentUnits));
    context.addDef(mask);
    return mask;
  }
  protected _getter = Mask_AttributeGetter;
  protected _setter = Mask_AttributeSetter;
  protected _interpolator = Mask_AttributeInterpolator;
}
