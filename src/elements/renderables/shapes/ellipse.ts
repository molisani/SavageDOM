import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { ElementConstructorArgumentsType } from "../../../util";
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
  constructor(context: Context, c: Point, r: Point);
  constructor(context: Context, cx: Length, cy: Length, rx: Length, ry: Length);
  constructor(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length);
  constructor(context: Context, ...args: ElementConstructorArgumentsType<typeof Ellipse>) {
    super(context, "ellipse", _attributeHelper(...args));
  }
}
