import { Matrix } from "../../attributes";
import { None } from "../../attributes/base";
import { NumberOptionalNumber } from "../../attributes/number-optional-number";
import { Point } from "../../attributes/point";
import { Filter, FilterInput } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";
export interface ConvolveMatrix_Attributes extends FilterPrimitive_Attributes {
    in: FilterInput;
    order: NumberOptionalNumber;
    kernelMatrix: Matrix;
    divisor: number;
    bias: number;
    targetX: number;
    targetY: number;
    "targetX:targetY": Point;
    edgeMode: "duplicate" | "wrap" | None;
    kernelUnitLength: NumberOptionalNumber;
    preserveAlpha: boolean;
}
export declare class ConvolveMatrix_Primitive extends FilterPrimitive<SVGFEConvolveMatrixElement, ConvolveMatrix_Attributes> {
    constructor(filter: Filter, attrs?: Partial<ConvolveMatrix_Attributes>);
}
