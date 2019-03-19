import { FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Blend_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  in2: FilterInput;
  mode: "normal" | "multiply" | "screen" | "darken" | "lighten";
}

export class Blend_Primitive extends FilterPrimitive<SVGFEBlendElement, Blend_Attributes> {
}
