import { CurrentColor, HasColor, HasColor_AttributeGetter, HasColor_AttributeInterpolator, HasColor_AttributeSetter, Inherit } from "../../../attributes/base";
import { Color, colorParser, colorSerializer } from "../../../attributes/color";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildStringLiteralUnionParser, buildStringLiteralUnionSerializer } from "../../../attributes/literal";
import { AttributeSetter } from "../../../attributes/setter";
import { FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../../filter-primitive";

export interface Lighting_Attributes extends FilterPrimitive_Attributes, HasColor {
  "lighting-color": CurrentColor | Color | Inherit;
}

export const Lighting_AttributeGetter: AttributeGetter<Lighting_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  ...HasColor_AttributeGetter,
  "lighting-color": buildStringLiteralUnionParser<Color, CurrentColor | Inherit>(colorParser, ["currentColor", "inherit"]),
};

export const Lighting_AttributeSetter: AttributeSetter<Lighting_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  ...HasColor_AttributeSetter,
  "lighting-color": buildStringLiteralUnionSerializer(colorSerializer, ["currentColor", "inherit"]),
};

export const Lighting_AttributeInterpolator: AttributeInterpolator<Lighting_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  ...HasColor_AttributeInterpolator,
  "lighting-color": unsupportedTweenBuilder,
};
