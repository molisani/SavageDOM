import { ColorMatrix } from "../../attributes/color-matrix";
import { FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface ColorMatrix_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  values: ColorMatrix;
  "type:values": ColorMatrix;
}

export class ColorMatrix_Primitive extends FilterPrimitive<SVGFEColorMatrixElement, ColorMatrix_Attributes> {
}
