import { HasClass, HasStyle, Inherit, Length } from "../attributes/base";
import { Box } from "../attributes/box";
import { Point } from "../attributes/point";
import { Element } from "../element";
import { SVG_Events } from "../events";
import { Filter } from "./filter";

export interface FilterPrimitive_Attributes extends HasClass, HasStyle {
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

export class FilterPrimitive<FE extends SVGElement, A> extends Element<FE, FilterPrimitive_Attributes & A, FilterPrimitive_Events> {
  constructor(filter: Filter, name: string, attrs: Partial<FilterPrimitive_Attributes & A> = {}, private _ref: string = filter.getUniquePrimitiveReference()) {
    super(filter.context, name, attrs, `${filter.id}-${_ref}`);
    this.setAttribute("result", _ref as any);
    filter.add(this);
  }
  public toString(): string {
    return this._ref;
  }
}
