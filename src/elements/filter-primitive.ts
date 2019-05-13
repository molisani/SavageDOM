import { Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter, HasClass, HasClass_AttributeGetter, HasClass_AttributeInterpolator, HasClass_AttributeSetter, HasStyle, HasStyle_AttributeGetter, HasStyle_AttributeInterpolator, HasStyle_AttributeSetter, Inherit, Length, numberOrDimensionParser, numberOrDimensionSerializer, stringParser } from "../attributes/base";
import { Box, buildBoxCompositeParser, buildBoxCompositeSerializer } from "../attributes/box";
import { AttributeGetter, withDefault } from "../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../attributes/setter";
import { AbstractElement } from "../element";
import { SVG_Events } from "../events";
import { Filter } from "./filter";

export type FilterPrimitive_Element =
  | SVGFEBlendElement
  | SVGFEColorMatrixElement
  | SVGFEComponentTransferElement
  | SVGFECompositeElement
  | SVGFEConvolveMatrixElement
  | SVGFEDiffuseLightingElement
  | SVGFEDisplacementMapElement
  | SVGFEFloodElement
  | SVGFEGaussianBlurElement
  | SVGFEImageElement
  | SVGFEMergeElement
  | SVGFEMergeNodeElement
  | SVGFEMorphologyElement
  | SVGFEOffsetElement
  | SVGFESpecularLightingElement
  | SVGFETileElement
  | SVGFETurbulenceElement;

export interface FilterPrimitive_Attributes extends Core_Attributes, HasClass, HasStyle {
  x: Length;
  y: Length;
  width: Length;
  height: Length;
  "x:y:width:height": Box;
  result: string;
  "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Inherit;
}

const colorInterpolationFiltersLiterals = ["auto", "sRGB", "linearRGB", "inherit"] as const;

export const FilterPrimitive_AttributeGetter: AttributeGetter<FilterPrimitive_Attributes> = {
  ...Core_AttributeGetter,
  ...HasClass_AttributeGetter,
  ...HasStyle_AttributeGetter,
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
  "x:y:width:height": buildBoxCompositeParser("x", "y", "width", "height"),
  result: withDefault(stringParser, ""),
  "color-interpolation-filters": buildStringLiteralParser(colorInterpolationFiltersLiterals, "inherit"),
};

export const FilterPrimitive_AttributeSetter: AttributeSetter<FilterPrimitive_Attributes> = {
  ...Core_AttributeSetter,
  ...HasClass_AttributeSetter,
  ...HasStyle_AttributeSetter,
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
  "x:y:width:height": buildBoxCompositeSerializer("x", "y", "width", "height"),
  result: defaultSerializer,
  "color-interpolation-filters": buildStringLiteralSerializer(colorInterpolationFiltersLiterals, "inherit"),
};

export const FilterPrimitive_AttributeInterpolator: AttributeInterpolator<FilterPrimitive_Attributes> = {
  ...Core_AttributeInterpolator,
  ...HasClass_AttributeInterpolator,
  ...HasStyle_AttributeInterpolator,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
  "x:y:width:height": unsupportedTweenBuilder,
  result: unsupportedTweenBuilder,
  "color-interpolation-filters": unsupportedTweenBuilder,
};

export interface FilterPrimitive_Events extends SVG_Events {}

export abstract class AbstractFilterPrimitive<ELEMENT extends FilterPrimitive_Element, ATTRIBUTES extends FilterPrimitive_Attributes = FilterPrimitive_Attributes> extends AbstractElement<ELEMENT, ATTRIBUTES, FilterPrimitive_Events> {
  constructor(protected readonly _filter: Filter, el: ELEMENT, attrs: Partial<ATTRIBUTES> = {}, ref: string = _filter.getUniquePrimitiveReference()) {
    super(_filter.context, el, attrs, `${_filter.id}-${ref}`);
    this.setAttribute("result", this.id);
    _filter.add(this);
  }
  public get filter(): Filter {
    return this._filter;
  }
}

export class FilterPrimitive<ELEMENT extends FilterPrimitive_Element> extends AbstractFilterPrimitive<ELEMENT> {
  protected _getter = FilterPrimitive_AttributeGetter;
  protected _setter = FilterPrimitive_AttributeSetter;
  protected _interpolator = FilterPrimitive_AttributeInterpolator;
}
