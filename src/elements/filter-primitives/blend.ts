import { Filter, FilterInput } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface Blend_Attributes {
  in: FilterInput;
  in2: FilterInput;
  mode: "normal" | "multiply" | "screen" | "darken" | "lighten";
}

export class Blend_Primitive extends FilterPrimitive<SVGFEBlendElement, Blend_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Blend_Attributes>) {
    super(filter, "feBlend", attrs);
  }
}
