import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Circle_Attributes extends Shape_Attributes {
  cx: Length;
  cy: Length;
  "cx:cy": Point;
  r: Length;
}

function _attributeHelper(a1: Length | Point, a2: Length, a3?: Length): Partial<Circle_Attributes> {
  return (a1 instanceof Point) ? { "cx:cy": a1, r: a2 } : { cx: a1, cy: a2, r: a3 };
}

export class Circle extends AbstractShape<SVGCircleElement, Circle_Attributes> {
  public static create(context: Context, c: Point, r: Length): Circle;
  public static create(context: Context, cx: Length, cy: Length, r: Length): Circle;
  public static create(context: Context, a1: Length | Point, a2: Length, a3?: Length): Circle;
  public static create(context: Context, a1: Length | Point, a2: Length, a3?: Length): Circle {
    return new Circle(context, context.window.document.createElementNS(XMLNS.SVG, "circle"), _attributeHelper(a1, a2, a3));
  }
}
