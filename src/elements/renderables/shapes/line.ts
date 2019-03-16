import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { XMLNS } from "../../../constants";
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

function _attributeHelper(a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Partial<Line_Attributes> {
  let attrs = {};
  const a1IsPoint = a1 instanceof Point;
  const a2IsPoint = a2 instanceof Point;
  if (a1IsPoint && a2IsPoint) {
    attrs = { "x1:y1": a1, "x2:y2": a2 };
  } else if (!(a1IsPoint || a2IsPoint)) {
    attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
  }
  return attrs;
}

export class Line extends AbstractShape<SVGLineElement, Line_Attributes> {
  constructor(context: Context, p1: Point, p2: Point);
  constructor(context: Context, x1: Length, y1: Length, x2: Length, y2: Length);
  constructor(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length);
  constructor(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "line"), _attributeHelper(a1, a2, a3, a4));
  }
}
