import { Length } from "../../attributes/base";
import { Point } from "../../attributes/point";
import { XMLNS } from "../../constants";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Offset_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  dx: Length;
  dy: Length;
  "dx:dy": Point;
}

export class Offset_Primitive extends FilterPrimitive<SVGFEOffsetElement, Offset_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Offset_Attributes>) {
    super(filter, filter.context.window.document.createElementNS(XMLNS, "feOffset"), attrs);
  }
}
