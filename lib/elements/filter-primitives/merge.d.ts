import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";
export interface MergeNode_Attributes extends FilterPrimitive_Attributes {
    in: FilterInput;
}
export declare class MergeNode_Primitive extends FilterPrimitive<SVGFEMergeNodeElement, MergeNode_Attributes> {
    constructor(filter: Filter, attrs?: Partial<MergeNode_Attributes>);
}
export declare class Merge_Primitive extends FilterPrimitive<SVGFEMergeElement> {
    constructor(filter: Filter);
}
