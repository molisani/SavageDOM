import { Length } from "../../../../attributes/base";
import { Point } from "../../../../attributes/point";
import { Filter } from "../../../filter";
import { FilterPrimitive } from "../../../filter-primitive";

export interface PointLight_Attributes {
  type: "point";
  x: Length;
  y: Length;
  "x:y": Point;
  z: Length;
}

export class PointLight extends FilterPrimitive<SVGFEPointLightElement, PointLight_Attributes> {
  constructor(filter: Filter, attrs?: Partial<PointLight_Attributes>) {
    super(filter, "fePointLight", attrs);
  }
}
