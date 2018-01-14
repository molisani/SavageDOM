import { ColorMatrix } from "../../attributes/color-matrix";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface ColorMatrix_Attributes {
  in: FilterInput;
  type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  values: ColorMatrix;
  "type:values": ColorMatrix;
}

export class ColorMatrix_Primitive extends FilterPrimitive<SVGFEColorMatrixElement, ColorMatrix_Attributes> {
  constructor(filter: Filter, attrs?: Partial<ColorMatrix_Attributes>) {
    super(filter, "feColorMatrix", attrs);
  }
}
