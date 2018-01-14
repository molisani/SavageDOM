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
  private _referenced = false;
  constructor(filter: Filter, name: string, attrs?: Partial<FilterPrimitive_Attributes & A>) {
    super(filter.context, name, attrs);
    filter.add(this);
  }
  public toString(): string {
    if (!this._referenced) {
      this._referenced = true;
      this.setAttribute("result" as any, this.id as any); // hotfix for typedoc using 2.1.6
    }
    return this.id;
  }
}
