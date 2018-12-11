import { NumberOptionalNumber } from "../../attributes/number-optional-number";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Morphology_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  operator: "erode" | "dilate";
  radius: NumberOptionalNumber;
}

export class Morphology_Primitive extends FilterPrimitive<SVGFEMorphologyElement, Morphology_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Morphology_Attributes>) {
    super(filter, "feMorphology", attrs);
  }
}
