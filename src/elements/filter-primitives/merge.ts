import { Filter, FilterInput } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface MergeNode_Attributes {
  in: FilterInput;
}

export class MergeNode_Primitive extends FilterPrimitive<SVGFEMergeNodeElement, MergeNode_Attributes> {
  constructor(filter: Filter, attrs?: Partial<MergeNode_Attributes>) {
    super(filter, "feMergeNode", attrs);
  }
}

export class Merge_Primitive extends FilterPrimitive<SVGFEMergeElement, void> {
  constructor(filter: Filter) {
    super(filter, "feMerge");
  }
}
