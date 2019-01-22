import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";
export interface Line_Attributes extends Shape_Attributes, HasMarker {
    x1: Length;
    y1: Length;
    "x1:y1": Point;
    x2: Length;
    y2: Length;
    "x2:y2": Point;
}
export declare class Line extends AbstractShape<SVGLineElement, Line_Attributes> {
    constructor(context: Context, p1: Point, p2: Point);
    constructor(context: Context, x1: Length, y1: Length, x2: Length, y2: Length);
    constructor(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length);
}
