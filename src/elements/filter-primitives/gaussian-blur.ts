import { None, numberParser } from "../../attributes/base";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface GaussianBlur_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  stdDeviation: number;
  edgeMode: "duplicate" | "wrap" | None;
}

export const GaussianBlur_AttributeGetter: AttributeGetter<GaussianBlur_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  stdDeviation: numberParser,
  edgeMode: buildStringLiteralParser(["duplicate", "wrap", "none"], "none"),
};

export const GaussianBlur_AttributeSetter: AttributeSetter<GaussianBlur_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  stdDeviation: defaultSerializer,
  edgeMode: buildStringLiteralSerializer(["duplicate", "wrap", "none"], "none"),
};

export const GaussianBlur_AttributeInterpolator: AttributeInterpolator<GaussianBlur_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  stdDeviation: numberParsedTweenBuilder,
  edgeMode: unsupportedTweenBuilder,
};

export class GaussianBlur_Primitive extends AbstractFilterPrimitive<SVGFEGaussianBlurElement, GaussianBlur_Attributes> {
  protected _getter = GaussianBlur_AttributeGetter;
  protected _setter = GaussianBlur_AttributeSetter;
  protected _interpolator = GaussianBlur_AttributeInterpolator;
}
