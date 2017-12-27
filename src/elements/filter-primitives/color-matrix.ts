namespace SavageDOM.Elements.FilterPrimitives {

  export interface ColorMatrix_Attributes {
    in: FilterInput;
    type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
    values: Attributes.ColorMatrix;
    "type:values": Attributes.ColorMatrix;
  }

  export class ColorMatrix extends FilterPrimitive<SVGFEColorMatrixElement, ColorMatrix_Attributes> {
    constructor(filter: Filter, attrs?: Partial<ColorMatrix_Attributes>) {
      super(filter, "feColorMatrix", attrs);
    }
  }

}
