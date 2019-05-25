import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Blend_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  in2: FilterInput;
  mode: "normal" | "multiply" | "screen" | "darken" | "lighten";
}

const modeLiterals = ["normal", "multiply", "screen", "darken", "lighten"] as const;

export const Blend_AttributeGetter: AttributeGetter<Blend_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  in2: filterInputParser,
  mode: buildStringLiteralParser(modeLiterals, "normal"),
};

export const Blend_AttributeSetter: AttributeSetter<Blend_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  in2: filterInputSerializer,
  mode: buildStringLiteralSerializer(modeLiterals, "normal"),
};

export const Blend_AttributeInterpolator: AttributeInterpolator<Blend_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  in2: unsupportedTweenBuilder,
  mode: unsupportedTweenBuilder,
};

export class Blend_Primitive extends AbstractFilterPrimitive<SVGFEBlendElement, Blend_Attributes> {
  protected _getter = Blend_AttributeGetter;
  protected _setter = Blend_AttributeSetter;
  protected _interpolator = Blend_AttributeInterpolator;
}
