import { Core_Attributes, Length, Point } from "../../../attributes";
import { Element } from "../../../element";
import { Filter } from "../../filter";

export interface DistantLight_Attributes extends Core_Attributes {
  type: "distant";
  azimuth: number;
  elevation: number;
}

export interface PointLight_Attributes extends Core_Attributes {
  type: "point";
  x: Length;
  y: Length;
  "x:y": Point;
  z: Length;
}

export interface SpotLight_Attributes extends Core_Attributes {
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

export type LightSource_Attributes = DistantLight_Attributes | PointLight_Attributes | SpotLight_Attributes;

export abstract class AbstractLightSource_Primitive<ELEMENT extends SVGFEDistantLightElement | SVGFEPointLightElement | SVGFESpotLightElement, ATTRIBUTES extends LightSource_Attributes> extends Element<ELEMENT, ATTRIBUTES> {
  constructor(filter: Filter, name: "feDistantLight" | "fePointLight" | "feSpotLight", attrs?: Partial<ATTRIBUTES>) {
    super(filter.context, name, attrs);
  }
}

export class DistantLight_Primitive extends AbstractLightSource_Primitive<SVGFEDistantLightElement, DistantLight_Attributes> {
  constructor(filter: Filter, attrs?: Partial<DistantLight_Attributes>) {
    super(filter, "feDistantLight", attrs);
  }
}

export class PointLight_Primitive extends AbstractLightSource_Primitive<SVGFEPointLightElement, PointLight_Attributes> {
  constructor(filter: Filter, attrs?: Partial<PointLight_Attributes>) {
    super(filter, "fePointLight", attrs);
  }
}

export class SpotLight_Primitive extends AbstractLightSource_Primitive<SVGFESpotLightElement, SpotLight_Attributes> {
  constructor(filter: Filter, attrs?: Partial<SpotLight_Attributes>) {
    super(filter, "feSpotLight", attrs);
  }
}
