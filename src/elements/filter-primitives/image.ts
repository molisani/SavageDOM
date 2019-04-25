import { AttributeGetter, stringParser } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { PreserveAspectRatio, preserveAspectRatioParser, preserveAspectRatioSerializer } from "../../attributes/preserve-aspect-ratio";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Image_Attributes extends FilterPrimitive_Attributes {
  preserveAspectRatio: PreserveAspectRatio;
  "xlink:href": string;
}

export const Image_AttributeGetter: AttributeGetter<Image_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  preserveAspectRatio: preserveAspectRatioParser,
  "xlink:href": stringParser,
};

export const Image_AttributeSetter: AttributeSetter<Image_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  preserveAspectRatio: preserveAspectRatioSerializer,
  "xlink:href": defaultSerializer,
};

export const Image_AttributeInterpolator: AttributeInterpolator<Image_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  preserveAspectRatio: unsupportedTweenBuilder,
  "xlink:href": unsupportedTweenBuilder,
};

export class Image_Primitive extends AbstractFilterPrimitive<SVGFEImageElement, Image_Attributes> {
  protected _getter = Image_AttributeGetter;
  protected _setter = Image_AttributeSetter;
  protected _interpolator = Image_AttributeInterpolator;
}
