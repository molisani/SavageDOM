import { ColorMatrix } from "../../attributes/color-matrix";
import { XMLNS } from "../../constants";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface ColorMatrix_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  values: ColorMatrix;
  "type:values": ColorMatrix;
}

export class ColorMatrix_Primitive extends FilterPrimitive<SVGFEColorMatrixElement, ColorMatrix_Attributes> {
  constructor(filter: Filter, attrs?: Partial<ColorMatrix_Attributes>) {
    super(filter, filter.context.window.document.createElementNS(XMLNS.SVG, "feColorMatrix"), attrs);
  }
}
