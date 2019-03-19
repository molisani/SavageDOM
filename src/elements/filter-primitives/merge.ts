import { XMLNS } from "../../constants";
import { FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface MergeNode_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export class MergeNode_Primitive extends FilterPrimitive<SVGFEMergeNodeElement, MergeNode_Attributes> {
}

export class Merge_Primitive extends FilterPrimitive<SVGFEMergeElement> {
  public addInputs(inputs: ReadonlyArray<FilterInput>) {
    for (const input of inputs) {
      this.add(new MergeNode_Primitive(this._filter, this.context.window.document.createElementNS(XMLNS.SVG, "feMergeNode"), { in: input }));
    }
  }
}
