import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { Renderable_Attributes } from "../../renderable";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Polyline_Attributes extends HasMarker {
  points: Point[];
}

export class Polyline extends AbstractShape<SVGPolylineElement, Polyline_Attributes> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Polyline_Attributes>) {
    super(context, "polyline", attrs);
  }
}
