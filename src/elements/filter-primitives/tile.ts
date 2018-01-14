import { Filter, FilterInput } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface Tile_Attributes {
  in: FilterInput;
}

export class Tile_Primitive extends FilterPrimitive<SVGFETileElement, Tile_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Tile_Attributes>) {
    super(filter, "feTile", attrs);
  }
}
