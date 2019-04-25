import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, d3BypassTweenBuilder, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../attributes/point";
import { AttributeSetter } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Offset_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  dx: Length;
  dy: Length;
  d: Point;
}

export const Offset_AttributeGetter: AttributeGetter<Offset_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  dx: numberOrDimensionParser,
  dy: numberOrDimensionParser,
  d: buildPointCompositeParser("dx", "dy"),
};

export const Offset_AttributeSetter: AttributeSetter<Offset_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  dx: numberOrDimensionSerializer,
  dy: numberOrDimensionSerializer,
  d: buildPointCompositeSerializer("dx", "dy"),
};

export const Offset_AttributeInterpolator: AttributeInterpolator<Offset_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  dx: d3BypassTweenBuilder,
  dy: d3BypassTweenBuilder,
  d: pointTweenBuilder,
};

export class Offset_Primitive extends AbstractFilterPrimitive<SVGFEOffsetElement, Offset_Attributes> {
  protected _getter = Offset_AttributeGetter;
  protected _setter = Offset_AttributeSetter;
  protected _interpolator = Offset_AttributeInterpolator;
}
