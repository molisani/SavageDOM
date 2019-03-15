import { HasOpacity, HasOverflow, Inherit, Length, None } from "../../attributes/base";
import { Box } from "../../attributes/box";
import { Point } from "../../attributes/point";
import { Context } from "../../context";
import { AbstractNonRenderable, NonRenderable_Attributes } from "../non-renderable";
export interface HasMarker {
    "marker-start": None | Marker | Inherit;
    "marker-mid": None | Marker | Inherit;
    "marker-end": None | Marker | Inherit;
}
export interface Marker_Attributes extends NonRenderable_Attributes, HasOverflow, HasOpacity {
    markerUnits: "userSpaceOnUse" | "strokeWidth";
    refX: Length;
    refY: Length;
    "refX:refY": Point;
    markerWidth: Length;
    markerHeight: Length;
    "refX:refY:markerWidth:markerHeight": Box;
    orient: "auto" | "auto-start-reverse" | number | string;
    viewBox: Box;
}
export declare class Marker extends AbstractNonRenderable<SVGMarkerElement, Marker_Attributes> {
    constructor(context: Context, attrs?: Partial<NonRenderable_Attributes | Marker_Attributes>);
}
