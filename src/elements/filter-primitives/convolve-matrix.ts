namespace SavageDOM.Elements.FilterPrimitives {

  export interface ConvolveMatrix_Attributes {
    in: FilterInput;
    order: Attributes.NumberOptionalNumber;
    kernelMatrix: Attributes.Transforms.Matrix;
    divisor: number;
    bias: number;
    targetX: number;
    targetY: number;
    "targetX:targetY": Attributes.Point;
    edgeMode: "duplicate" | "wrap" | Attributes.None;
    kernelUnitLength: Attributes.NumberOptionalNumber;
    preserveAlpha: boolean;
  }

  export class ConvolveMatrix extends FilterPrimitive<SVGFEConvolveMatrixElement, ConvolveMatrix_Attributes> {
    constructor(filter: Filter, attrs?: Partial<ConvolveMatrix_Attributes>) {
      super(filter, "feConvolveMatrix", attrs);
    }
  }

}
