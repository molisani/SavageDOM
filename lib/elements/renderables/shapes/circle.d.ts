import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { AbstractShape, Shape_Attributes } from "../shape";
export interface Circle_Attributes extends Shape_Attributes {
    cx: Length;
    cy: Length;
    "cx:cy": Point;
    r: Length;
}
export declare class Circle extends AbstractShape<SVGCircleElement, Circle_Attributes> {
    constructor(context: Context, c: Point, r: Length);
    constructor(context: Context, cx: Length, cy: Length, r: Length);
    constructor(context: Context, a1: Length | Point, a2: Length, a3?: Length);
}
