import { Length } from "../../attributes/base";
import { Point } from "../../attributes/point";
import { FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Offset_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  dx: Length;
  dy: Length;
  "dx:dy": Point;
}

export class Offset_Primitive extends FilterPrimitive<SVGFEOffsetElement, Offset_Attributes> {
}
