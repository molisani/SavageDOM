import { XMLNS } from "../../constants";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface MergeNode_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export class MergeNode_Primitive extends FilterPrimitive<SVGFEMergeNodeElement, MergeNode_Attributes> {
  constructor(filter: Filter, attrs?: Partial<MergeNode_Attributes>) {
    super(filter, filter.context.window.document.createElementNS(XMLNS.SVG, "feMergeNode"), attrs);
  }
}

export class Merge_Primitive extends FilterPrimitive<SVGFEMergeElement> {
  constructor(filter: Filter) {
    super(filter, filter.context.window.document.createElementNS(XMLNS.SVG, "feMerge"));
  }
  public addInputs(inputs: ReadonlyArray<FilterInput>) {
    for (const input of inputs) {
      this.add(new MergeNode_Primitive(this._filter, { in: input }));
    }
  }
}
