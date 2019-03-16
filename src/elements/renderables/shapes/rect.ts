import { Length } from "../../../attributes/base";
import { Box } from "../../../attributes/box";
import { Point } from "../../../attributes/point";
import { XMLNS } from "../../../constants";
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

function _attributeHelper(a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length): Partial<Rect_Attributes> {
  const attrs: Partial<Rect_Attributes> = {};
  if (a1 instanceof Box) {
    attrs["x:y:width:height"] = a1;
    if (a2 instanceof Point) {
      attrs["rx:ry"] = a2;
    } else {
      if (a2 !== undefined) {
        attrs["rx"] = a2;
      }
      if (a3 !== undefined) {
        attrs["ry"] = a3;
      }
    }
  } else if (a1 instanceof Point) {
    attrs["x:y"] = a1;
    if (a2 !== undefined && !(a2 instanceof Point)) {
      attrs["width"] = a2;
    }
    if (a3 !== undefined) {
      attrs["height"] = a3;
    }
    if (a4 instanceof Point) {
      attrs["rx:ry"] = a4;
    } else {
      if (a4 !== undefined) {
        attrs["rx"] = a4;
      }
      if (a5 !== undefined && !(a5 instanceof Point)) {
        attrs["ry"] = a5;
      }
    }
  } else {
    attrs["x"] = a1;
    if (a2 !== undefined && !(a2 instanceof Point)) {
      attrs["y"] = a2;
    }
    if (a3 !== undefined) {
      attrs["width"] = a3;
    }
    if (a4 !== undefined && !(a4 instanceof Point)) {
      attrs["height"] = a4;
    }
    if (a5 instanceof Point) {
      attrs["rx:ry"] = a5;
    } else {
      if (a5 !== undefined) {
        attrs["rx"] = a5;
      }
      if (a6 !== undefined) {
        attrs["ry"] = a6;
      }
    }
  }
  return attrs;
}

export class Rect extends AbstractShape<SVGRectElement, Rect_Attributes> {
  constructor(context: Context, box: Box, r?: Point);
  constructor(context: Context, box: Box, rx?: Length, ry?: Length);
  constructor(context: Context, p: Point, width: Length, height: Length, r?: Point);
  constructor(context: Context, p: Point, width: Length, height: Length, rx?: Length, ry?: Length);
  constructor(context: Context, x: Length, y: Length, width: Length, height: Length, r?: Point);
  constructor(context: Context, a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length);
  constructor(context: Context, a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "rect"), _attributeHelper(a1, a2, a3, a4, a5, a6));
  }
}
