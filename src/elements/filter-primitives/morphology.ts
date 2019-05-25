import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { NumberOptionalNumber, numberOptionalNumberParser, numberOptionalNumberSerializer, numberOptionalNumberTweenBuilder } from "../../attributes/number-optional-number";
import { AttributeSetter } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Morphology_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  operator: "erode" | "dilate";
  radius: NumberOptionalNumber;
}

export const Morphology_AttributeGetter: AttributeGetter<Morphology_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  operator: buildStringLiteralParser(["erode", "dilate"], "erode"),
  radius: numberOptionalNumberParser,
};

export const Morphology_AttributeSetter: AttributeSetter<Morphology_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  operator: buildStringLiteralSerializer(["erode", "dilate"], "erode"),
  radius: numberOptionalNumberSerializer,
};

export const Morphology_AttributeInterpolator: AttributeInterpolator<Morphology_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  operator: unsupportedTweenBuilder,
  radius: numberOptionalNumberTweenBuilder,
};

export class Morphology_Primitive extends AbstractFilterPrimitive<SVGFEMorphologyElement, Morphology_Attributes> {
  protected _getter = Morphology_AttributeGetter;
  protected _setter = Morphology_AttributeSetter;
  protected _interpolator = Morphology_AttributeInterpolator;
}
