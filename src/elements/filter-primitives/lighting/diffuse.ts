import { NumberOptionalNumber } from "../../../attributes/number-optional-number";
import { FilterInput } from "../../filter";
import { FilterPrimitive } from "../../filter-primitive";
import { Lighting_Attributes } from "./attributes";

export interface DiffuseLighting_Attributes extends Lighting_Attributes {
  in: FilterInput;
  surfaceScale: number;
  diffuseConstant: number;
  kernelUnitLength: NumberOptionalNumber;
}

export class DiffuseLighting extends FilterPrimitive<SVGFEDiffuseLightingElement, DiffuseLighting_Attributes> {
}
