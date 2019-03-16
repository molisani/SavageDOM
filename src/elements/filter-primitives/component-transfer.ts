import { Core_Attributes } from "../../attributes/base";
import { XMLNS } from "../../constants";
import { Element } from "../../element";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface IdentityFunction_Attributes extends Core_Attributes {
  type: "identity";
}

export interface TabularFunction_Attributes extends Core_Attributes {
  type: "table" | "discrete";
  tableValues: number[];
}

export interface LinearFunction_Attributes extends Core_Attributes {
  type: "linear";
  slope: number;
  intercept: number;
}

export interface GammaFunction_Attributes extends Core_Attributes {
  type: "gamma";
  amplitude: number;
  exponent: number;
  offset: number;
}

type TransferFunction_Elements = SVGFEFuncRElement | SVGFEFuncGElement | SVGFEFuncBElement | SVGFEFuncAElement;

export type TransferFunction_Attributes = IdentityFunction_Attributes | TabularFunction_Attributes | LinearFunction_Attributes | GammaFunction_Attributes;

export class TransferFunction_Primitive extends Element<TransferFunction_Elements, TransferFunction_Attributes> {
  constructor(filter: Filter, el: TransferFunction_Elements, attrs?: Partial<TransferFunction_Attributes>) {
    super(filter.context, el, attrs);
  }
}

export interface ComponentTransfer_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export class ComponentTransfer_Primitive extends FilterPrimitive<SVGFEComponentTransferElement, ComponentTransfer_Attributes> {
  constructor(filter: Filter, attrs?: Partial<ComponentTransfer_Attributes>) {
    super(filter, filter.context.window.document.createElementNS(XMLNS, "feComponentTransfer"), attrs);
  }
}
