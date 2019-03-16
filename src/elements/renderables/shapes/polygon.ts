import { Point } from "../../../attributes/point";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Polygon_Attributes extends Shape_Attributes, HasMarker {
  points: Point[];
}

function _attributeHelper(points: Point[]): Partial<Polygon_Attributes> {
  return { points };
}

export class Polygon extends AbstractShape<SVGPolygonElement, Polygon_Attributes> {
  constructor(context: Context, points: Point[]) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "polygon"), _attributeHelper(points));
  }
}
