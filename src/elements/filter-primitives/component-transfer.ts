namespace SavageDOM.Elements.FilterPrimitives {

  export interface ComponentTransfer_Attributes {
    in: FilterInput;
  }

  export class ComponentTransfer extends FilterPrimitive<SVGFEComponentTransferElement, ComponentTransfer_Attributes> {
    constructor(filter: Filter, attrs?: Partial<ComponentTransfer_Attributes>) {
      super(filter, "feComponentTransfer", attrs);
    }
  }

}
