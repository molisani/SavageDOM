import { NumberOptionalNumber } from "../../../attributes/number-optional-number";
import { FilterInput } from "../../filter";
import { FilterPrimitive } from "../../filter-primitive";
import { Lighting_Attributes } from "./attributes";

export interface SpecularLighting_Attributes extends Lighting_Attributes {
  in: FilterInput;
  surfaceScale: number;
  specularConstant: number;
  specularExponent: number;
  kernelUnitLength: NumberOptionalNumber;
}

export class SpecularLighting extends FilterPrimitive<SVGFESpecularLightingElement, SpecularLighting_Attributes> {
}
