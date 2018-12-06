import { BaseAttributes } from "../../../attributes";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { Renderable_Attributes } from "../../renderable";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Polygon_Attributes extends BaseAttributes, HasMarker {
  points: Point[];
}

export class Polygon extends AbstractShape<SVGPolygonElement, Polygon_Attributes> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Polygon_Attributes>) {
    super(context, "polygon", attrs);
  }
}
