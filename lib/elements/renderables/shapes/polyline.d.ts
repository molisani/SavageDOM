import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";
export interface Polyline_Attributes extends Shape_Attributes, HasMarker {
    points: Point[];
}
export declare class Polyline extends AbstractShape<SVGPolylineElement, Polyline_Attributes> {
    constructor(context: Context, points: Point[]);
}
