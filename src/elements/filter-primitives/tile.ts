import { XMLNS } from "../../constants";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Tile_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export class Tile_Primitive extends FilterPrimitive<SVGFETileElement, Tile_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Tile_Attributes>) {
    super(filter, filter.context.window.document.createElementNS(XMLNS, "feTile"), attrs);
  }
}
