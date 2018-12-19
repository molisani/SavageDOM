import { Core_Attributes, Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
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
export declare type LightSource_Attributes = DistantLight_Attributes | PointLight_Attributes | SpotLight_Attributes;
export declare abstract class AbstractLightSource<ELEMENT extends SVGFEDistantLightElement | SVGFEPointLightElement | SVGFESpotLightElement, ATTRIBUTES extends LightSource_Attributes> extends Element<ELEMENT, ATTRIBUTES> {
    constructor(filter: Filter, name: "feDistantLight" | "fePointLight" | "feSpotLight", attrs?: Partial<ATTRIBUTES>);
}
export declare class DistantLight extends AbstractLightSource<SVGFEDistantLightElement, DistantLight_Attributes> {
    constructor(filter: Filter, attrs?: Partial<DistantLight_Attributes>);
}
export declare class PointLight extends AbstractLightSource<SVGFEPointLightElement, PointLight_Attributes> {
    constructor(filter: Filter, attrs?: Partial<PointLight_Attributes>);
}
export declare class SpotLight extends AbstractLightSource<SVGFESpotLightElement, SpotLight_Attributes> {
    constructor(filter: Filter, attrs?: Partial<SpotLight_Attributes>);
}
