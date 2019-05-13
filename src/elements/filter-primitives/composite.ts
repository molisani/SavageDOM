import { numberParser } from "../../attributes/base";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Composite_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  in2: FilterInput;
  operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic";
  k1: number;
  k2: number;
  k3: number;
  k4: number;
}

const operatorLiterals = ["over", "in", "out", "atop", "xor", "arithmetic"] as const;

export const Composite_AttributeGetter: AttributeGetter<Composite_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  in2: filterInputParser,
  operator: buildStringLiteralParser(operatorLiterals, "over"),
  k1: numberParser,
  k2: numberParser,
  k3: numberParser,
  k4: numberParser,
};

export const Composite_AttributeSetter: AttributeSetter<Composite_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  in2: filterInputSerializer,
  operator: buildStringLiteralSerializer(operatorLiterals, "over"),
  k1: defaultSerializer,
  k2: defaultSerializer,
  k3: defaultSerializer,
  k4: defaultSerializer,
};

export const Composite_AttributeInterpolator: AttributeInterpolator<Composite_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  in2: unsupportedTweenBuilder,
  operator: unsupportedTweenBuilder,
  k1: numberParsedTweenBuilder,
  k2: numberParsedTweenBuilder,
  k3: numberParsedTweenBuilder,
  k4: numberParsedTweenBuilder,
};

export class Composite_Primitive extends AbstractFilterPrimitive<SVGFECompositeElement, Composite_Attributes> {
  protected _getter = Composite_AttributeGetter;
  protected _setter = Composite_AttributeSetter;
  protected _interpolator = Composite_AttributeInterpolator;
}
