import { ColorMatrix } from "../../attributes/color-matrix";
import { anyParser, AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface ColorMatrix_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  values: ColorMatrix;
  "type:values": ColorMatrix;
}

const typeLiterals = ["matrix", "saturate", "hueRotate", "luminanceToAlpha"] as const;

export const ColorMatrix_AttributeGetter: AttributeGetter<ColorMatrix_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  type: buildStringLiteralParser(typeLiterals, "matrix"),
  values: anyParser,
  "type:values": anyParser,
};

export const ColorMatrix_AttributeSetter: AttributeSetter<ColorMatrix_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  type: buildStringLiteralSerializer(typeLiterals, "matrix"),
  values: defaultSerializer,
  "type:values": defaultSerializer,
};

export const ColorMatrix_AttributeInterpolator: AttributeInterpolator<ColorMatrix_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  type: unsupportedTweenBuilder,
  values: unsupportedTweenBuilder,
  "type:values": unsupportedTweenBuilder,
};

export class ColorMatrix_Primitive extends AbstractFilterPrimitive<SVGFEColorMatrixElement, ColorMatrix_Attributes> {
  protected _getter = ColorMatrix_AttributeGetter;
  protected _setter = ColorMatrix_AttributeSetter;
  protected _interpolator = ColorMatrix_AttributeInterpolator;
}
