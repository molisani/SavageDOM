import { CurrentColor, HasColor, Inherit } from "../../attributes/base";
import { Color } from "../../attributes/color";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface Flood_Attributes extends HasColor {
  "flood-color": CurrentColor | Color | Inherit;
  "flood-opacity": number | Inherit;
}

export class Flood_Primitive extends FilterPrimitive<SVGFEFloodElement, Flood_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Flood_Attributes>) {
    super(filter, "feFlood", attrs);
  }
}
