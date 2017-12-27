namespace SavageDOM.Elements.FilterPrimitives {

  export interface Morphology_Attributes {
    in: FilterInput;
    operator: "erode" | "dilate";
    radius: Attributes.NumberOptionalNumber;
  }

  export class Morphology extends FilterPrimitive<SVGFEMorphologyElement, Morphology_Attributes> {
    constructor(filter: Filter, attrs?: Partial<Morphology_Attributes>) {
      super(filter, "feMorphology", attrs);
    }
  }

}
