namespace SavageDOM.Elements.FilterPrimitives {

  export interface Offset_Attributes {
    in: FilterInput;
    dx: Attributes.Length;
    dy: Attributes.Length;
    "dx:dy": Attributes.Point;
  }

  export class Offset extends FilterPrimitive<SVGFEOffsetElement, Offset_Attributes> {
    constructor(filter: Filter, attrs?: Partial<Offset_Attributes>) {
      super(filter, "feOffset", attrs);
    }
  }

}
