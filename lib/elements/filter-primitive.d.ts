import { Core_Attributes, HasClass, HasStyle, Inherit, Length } from "../attributes/base";
import { Box } from "../attributes/box";
import { Point } from "../attributes/point";
import { Element } from "../element";
import { SVG_Events } from "../events";
import { Filter } from "./filter";
export interface FilterPrimitive_Attributes extends Core_Attributes, HasClass, HasStyle {
    x: Length;
    y: Length;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    result: string;
    "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Inherit;
}
export interface FilterPrimitive_Events extends SVG_Events {
}
export declare class FilterPrimitive<ELEMENT extends SVGElement, ATTRIBUTES extends FilterPrimitive_Attributes = FilterPrimitive_Attributes> extends Element<ELEMENT, ATTRIBUTES, FilterPrimitive_Events> {
    private _ref;
    constructor(filter: Filter, name: string, attrs?: Partial<ATTRIBUTES>, _ref?: string);
    toString(): string;
}
