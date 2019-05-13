import { numberParser } from "../../attributes/base";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface DisplacementMap_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  in2: FilterInput;
  scale: number;
  xChannelSelector: "R" | "G" | "B" | "A";
  yChannelSelector: "R" | "G" | "B" | "A";
}

const channelSelectorLiterals = ["R", "G", "B", "A"] as const;

export const DisplacementMap_AttributeGetter: AttributeGetter<DisplacementMap_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  in2: filterInputParser,
  scale: numberParser,
  xChannelSelector: buildStringLiteralParser(channelSelectorLiterals, "A"),
  yChannelSelector: buildStringLiteralParser(channelSelectorLiterals, "A"),
};

export const DisplacementMap_AttributeSetter: AttributeSetter<DisplacementMap_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  in2: filterInputSerializer,
  scale: defaultSerializer,
  xChannelSelector: buildStringLiteralSerializer(channelSelectorLiterals, "A"),
  yChannelSelector: buildStringLiteralSerializer(channelSelectorLiterals, "A"),
};

export const DisplacementMap_AttributeInterpolator: AttributeInterpolator<DisplacementMap_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  in2: unsupportedTweenBuilder,
  scale: numberParsedTweenBuilder,
  xChannelSelector: unsupportedTweenBuilder,
  yChannelSelector: unsupportedTweenBuilder,
};

export class DisplacementMap_Primitive extends AbstractFilterPrimitive<SVGFEDisplacementMapElement, DisplacementMap_Attributes> {
  protected _getter = DisplacementMap_AttributeGetter;
  protected _setter = DisplacementMap_AttributeSetter;
  protected _interpolator = DisplacementMap_AttributeInterpolator;
}
