import { None } from "../../attributes/base";
import { XMLNS } from "../../constants";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface GaussianBlur_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  stdDeviation: number;
  edgeMode: "duplicate" | "wrap" | None;
}

export class GaussianBlur_Primitive extends FilterPrimitive<SVGFEGaussianBlurElement, GaussianBlur_Attributes> {
  constructor(filter: Filter, attrs?: Partial<GaussianBlur_Attributes>) {
    super(filter, filter.context.window.document.createElementNS(XMLNS.SVG, "feGaussianBlur"), attrs);
  }
}
