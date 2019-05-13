import { CurrentColor, HasColor, HasColor_AttributeGetter, HasColor_AttributeInterpolator, HasColor_AttributeSetter, Inherit, numberParser } from "../../attributes/base";
import { Color, colorParser, colorSerializer } from "../../attributes/color";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralUnionParser, buildStringLiteralUnionSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Flood_Attributes extends FilterPrimitive_Attributes, HasColor {
  "flood-color": CurrentColor | Color | Inherit;
  "flood-opacity": number | Inherit;
}

export const Flood_AttributeGetter: AttributeGetter<Flood_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  ...HasColor_AttributeGetter,
  "flood-color": buildStringLiteralUnionParser<Color, CurrentColor | Inherit>(colorParser, ["currentColor", "inherit"]),
  "flood-opacity": buildStringLiteralUnionParser<number, Inherit>(numberParser, ["inherit"]),
};

export const Flood_AttributeSetter: AttributeSetter<Flood_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  ...HasColor_AttributeSetter,
  "flood-color": buildStringLiteralUnionSerializer(colorSerializer, ["currentColor", "inherit"]),
  "flood-opacity": buildStringLiteralUnionSerializer(defaultSerializer, ["inherit"]),
};

export const Flood_AttributeInterpolator: AttributeInterpolator<Flood_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  ...HasColor_AttributeInterpolator,
  "flood-color": unsupportedTweenBuilder,
  "flood-opacity": unsupportedTweenBuilder,
};

export class Flood_Primitive extends AbstractFilterPrimitive<SVGFEFloodElement, Flood_Attributes> {
  protected _getter = Flood_AttributeGetter;
  protected _setter = Flood_AttributeSetter;
  protected _interpolator = Flood_AttributeInterpolator;
}
