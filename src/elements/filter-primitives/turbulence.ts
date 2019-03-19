import { NumberOptionalNumber } from "../../attributes/number-optional-number";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Turbulence_Attributes extends FilterPrimitive_Attributes {
  type: "fractalNoise" | "turbulence";
  baseFrequency: NumberOptionalNumber;
  numOctaves: number;
  seed: number;
  stitchTiles: "noStitch" | "stitch";
}

export class Turbulence_Primitive extends FilterPrimitive<SVGFETurbulenceElement, Turbulence_Attributes> {
}
