import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { XMLNS } from "../../../constants";
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

function _attributeHelper(a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Partial<Ellipse_Attributes> {
  let attrs = {};
  const a1IsPoint = a1 instanceof Point;
  const a2IsPoint = a2 instanceof Point;
  if (a1IsPoint && a2IsPoint) {
    attrs = { "cx:cy": a1, "rx:ry": a2 };
  } else if (!(a1IsPoint || a2IsPoint)) {
    attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
  }
  return attrs;
}

export class Ellipse extends AbstractShape<SVGEllipseElement, Ellipse_Attributes> {
  public static create(context: Context, c: Point, r: Point): Ellipse;
  public static create(context: Context, cx: Length, cy: Length, rx: Length, ry: Length): Ellipse;
  public static create(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Ellipse;
  public static create(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Ellipse {
    return new Ellipse(context, context.window.document.createElementNS(XMLNS.SVG, "ellipse"), _attributeHelper(a1, a2, a3, a4));
  }
}
