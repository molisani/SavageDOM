namespace SavageDOM.Elements.FilterPrimitives {

  export interface Flood_Attributes extends Attributes.HasColor {
    "flood-color": Attributes.CurrentColor | Attributes.Color | Attributes.Inherit;
    "flood-opacity": number | Attributes.Inherit;
  }

  export class Flood extends FilterPrimitive<SVGFEFloodElement, Flood_Attributes> {
    constructor(filter: Filter, attrs?: Partial<Flood_Attributes>) {
      super(filter, "feFlood", attrs);
    }
  }

}
