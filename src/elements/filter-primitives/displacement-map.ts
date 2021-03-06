import { FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface DisplacementMap_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  in2: FilterPrimitive<any, any>;
  scale: number;
  xChannelSelector: "R" | "G" | "B" | "A";
  yChannelSelector: "R" | "G" | "B" | "A";
}

export class DisplacementMap_Primitive extends FilterPrimitive<SVGFEDisplacementMapElement, DisplacementMap_Attributes> {
}
