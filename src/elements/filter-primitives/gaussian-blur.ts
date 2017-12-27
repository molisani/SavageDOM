namespace SavageDOM.Elements.FilterPrimitives {

  export interface GaussianBlur_Attributes {
    in: FilterInput;
    stdDeviation: number;
    edgeMode: "duplicate" | "wrap" | Attributes.None;
  }

  export class GaussianBlur extends FilterPrimitive<SVGFEGaussianBlurElement, GaussianBlur_Attributes> {
    constructor(filter: Filter, attrs?: Partial<GaussianBlur_Attributes>) {
      super(filter, "feGaussianBlur", attrs);
    }
  }

}
