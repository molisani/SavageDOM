import { None } from "../../attributes/base";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface GaussianBlur_Attributes {
  in: FilterInput;
  stdDeviation: number;
  edgeMode: "duplicate" | "wrap" | None;
}

export class GaussianBlur_Primitive extends FilterPrimitive<SVGFEGaussianBlurElement, GaussianBlur_Attributes> {
  constructor(filter: Filter, attrs?: Partial<GaussianBlur_Attributes>) {
    super(filter, "feGaussianBlur", attrs);
  }
}