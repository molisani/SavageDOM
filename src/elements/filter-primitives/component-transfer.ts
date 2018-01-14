import { Filter, FilterInput } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface ComponentTransfer_Attributes {
  in: FilterInput;
}

export class ComponentTransfer_Primitive extends FilterPrimitive<SVGFEComponentTransferElement, ComponentTransfer_Attributes> {
  constructor(filter: Filter, attrs?: Partial<ComponentTransfer_Attributes>) {
    super(filter, "feComponentTransfer", attrs);
  }
}
