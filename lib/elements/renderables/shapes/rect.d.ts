import { Length } from "../../../attributes/base";
import { Box } from "../../../attributes/box";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { AbstractShape, Shape_Attributes } from "../shape";
export interface Rect_Attributes extends Shape_Attributes {
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    rx: Length;
    ry: Length;
    "rx:ry": Point;
}
export declare class Rect extends AbstractShape<SVGRectElement, Rect_Attributes> {
    constructor(context: Context, box: Box, r?: Point);
    constructor(context: Context, box: Box, rx?: Length, ry?: Length);
    constructor(context: Context, p: Point, width: Length, height: Length, r?: Point);
    constructor(context: Context, p: Point, width: Length, height: Length, rx?: Length, ry?: Length);
    constructor(context: Context, x: Length, y: Length, width: Length, height: Length, r?: Point);
    constructor(context: Context, a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length);
}
