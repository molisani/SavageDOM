import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { AbstractShape, Shape_Attributes } from "../shape";
export interface Ellipse_Attributes extends Shape_Attributes {
    cx: Length;
    cy: Length;
    "cx:cy": Point;
    rx: Length;
    ry: Length;
    "rx:ry": Point;
}
export declare class Ellipse extends AbstractShape<SVGEllipseElement, Ellipse_Attributes> {
    constructor(context: Context, c: Point, r: Point);
    constructor(context: Context, cx: Length, cy: Length, rx: Length, ry: Length);
    constructor(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length);
}
