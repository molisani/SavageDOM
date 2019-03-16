import { Point } from "../../../attributes/point";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Polyline_Attributes extends Shape_Attributes, HasMarker {
  points: Point[];
}

function _attributeHelper(points: Point[]): Partial<Polyline_Attributes> {
  return { points };
}

export class Polyline extends AbstractShape<SVGPolylineElement, Polyline_Attributes> {
  public static create(context: Context, points: Point[]): Polyline {
    return new Polyline(context, context.window.document.createElementNS(XMLNS.SVG, "polyline"), _attributeHelper(points));
  }
}
