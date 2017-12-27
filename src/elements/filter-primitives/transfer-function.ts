namespace SavageDOM.Elements.FilterPrimitives {

  export interface IdentityFunction_Attributes {
    type: "identity";
  }

  export interface TabularFunction_Attributes {
    type: "table" | "discrete";
    tableValues: number[];
  }

  export interface LinearFunction_Attributes {
    type: "linear";
    slope: number;
    intercept: number;
  }

  export interface GammaFunction_Attributes {
    type: "gamma";
    amplitude: number;
    exponent: number;
    offset: number;
  }

  export type TransferFunction_Attributes = IdentityFunction_Attributes | TabularFunction_Attributes | LinearFunction_Attributes | GammaFunction_Attributes;

  export class TransferFunction extends FilterPrimitive<SVGFEFuncRElement | SVGFEFuncGElement | SVGFEFuncBElement | SVGFEFuncAElement, TransferFunction_Attributes> {
    constructor(filter: Filter, channel: "R" | "G" | "B" | "A", attrs?: Partial<TransferFunction_Attributes>) {
      super(filter, `feFunc${channel}`, attrs);
    }
  }

}
