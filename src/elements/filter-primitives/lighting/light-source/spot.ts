import { Length } from "../../../../attributes/base";
import { Point } from "../../../../attributes/point";
import { Filter } from "../../../filter";
import { FilterPrimitive } from "../../../filter-primitive";

export interface SpotLight_Attributes {
  type: "spot";
  x: Length;
  y: Length;
  "x:y": Point;
  z: Length;
  pointsAtX: Length;
  pointsAtY: Length;
  "pointsAtX:pointsAtY": Point;
  pointsAtZ: Length;
  specularExponent: number;
  limitingConeAngle: number;
}

export class SpotLight extends FilterPrimitive<SVGFESpotLightElement, SpotLight_Attributes> {
  constructor(filter: Filter, attrs?: Partial<SpotLight_Attributes>) {
    super(filter, "feSpotLight", attrs);
  }
}
