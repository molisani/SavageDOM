namespace SavageDOM.Elements.FilterPrimitives {

  export interface Tile_Attributes {
    in: FilterInput;
  }

  export class Tile extends FilterPrimitive<SVGFETileElement, Tile_Attributes> {
    constructor(filter: Filter, attrs?: Partial<Tile_Attributes>) {
      super(filter, "feTile", attrs);
    }
  }

}
