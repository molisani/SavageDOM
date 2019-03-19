import { FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Tile_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export class Tile_Primitive extends FilterPrimitive<SVGFETileElement, Tile_Attributes> {
}
