import { FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Composite_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  in2: FilterInput;
  operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic";
  k1: number;
  k2: number;
  k3: number;
  k4: number;
}

export class Composite_Primitive extends FilterPrimitive<SVGFECompositeElement, Composite_Attributes> {
}
