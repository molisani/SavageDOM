import { Core_Attributes } from "../../attributes/base";
import { Element } from "../../element";
import { FilterInput } from "../filter";
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
}

export interface ComponentTransfer_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export class ComponentTransfer_Primitive extends FilterPrimitive<SVGFEComponentTransferElement, ComponentTransfer_Attributes> {
}
