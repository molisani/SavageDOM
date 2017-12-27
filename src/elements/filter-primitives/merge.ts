namespace SavageDOM.Elements.FilterPrimitives {

  export interface MergeNode_Attributes {
    in: FilterInput;
  }

  export class MergeNode extends FilterPrimitive<SVGFEMergeNodeElement, MergeNode_Attributes> {
    constructor(filter: Filter, attrs?: Partial<MergeNode_Attributes>) {
      super(filter, "feMergeNode", attrs);
    }
  }

  export class Merge extends FilterPrimitive<SVGFEMergeElement, void> {
    constructor(filter: Filter) {
      super(filter, "feMerge");
    }
  }

}
