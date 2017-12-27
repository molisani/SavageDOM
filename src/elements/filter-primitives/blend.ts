namespace SavageDOM.Elements.FilterPrimitives {

  export interface Blend_Attributes {
    in: FilterInput;
    in2: FilterInput;
    mode: "normal" | "multiply" | "screen" | "darken" | "lighten";
  }

  export class Blend extends FilterPrimitive<SVGFEBlendElement, Blend_Attributes> {
    constructor(filter: Filter, attrs?: Partial<Blend_Attributes>) {
      super(filter, "feBlend", attrs);
    }
  }

}
