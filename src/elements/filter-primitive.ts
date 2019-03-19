import { Core_Attributes, HasClass, HasStyle, Inherit, Length } from "../attributes/base";
import { Box } from "../attributes/box";
import { Point } from "../attributes/point";
import { Element } from "../element";
import { SVG_Events } from "../events";
import { Filter } from "./filter";

export type FilterPrimitive_Elements =
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
  "width:height": Point;
  "x:y:width:height": Box;
  result: string;
  "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Inherit;
}

export interface FilterPrimitive_Events extends SVG_Events {}

export class FilterPrimitive<ELEMENT extends FilterPrimitive_Elements, ATTRIBUTES extends FilterPrimitive_Attributes = FilterPrimitive_Attributes> extends Element<ELEMENT, ATTRIBUTES, FilterPrimitive_Events> {
  constructor(protected readonly _filter: Filter, el: ELEMENT, attrs: Partial<ATTRIBUTES> = {}, private _ref: string = _filter.getUniquePrimitiveReference()) {
    super(_filter.context, el, attrs, `${_filter.id}-${_ref}`);
    this.setAttribute("result", _ref as any);
    _filter.add(this);
  }
  public toString(): string {
    return this._ref;
  }
}
