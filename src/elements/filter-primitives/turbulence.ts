import { NumberOptionalNumber } from "../../attributes/number-optional-number";
import { Filter } from "../filter";
import { FilterPrimitive } from "../filter-primitive";

export interface Turbulence_Attributes {
  type: "fractalNoise" | "turbulence";
  baseFrequency: NumberOptionalNumber;
  numOctaves: number;
  seed: number;
  stitchTiles: "noStitch" | "stitch";
}

export class Turbulence_Primitive extends FilterPrimitive<SVGFETurbulenceElement, Turbulence_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Turbulence_Attributes>) {
    super(filter, "feTurbulence", attrs);
  }
}
