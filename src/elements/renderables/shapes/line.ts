import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { Renderable_Attributes } from "../../renderable";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Line_Attributes extends HasMarker {
  x1: Length;
  y1: Length;
  "x1:y1": Point;
  x2: Length;
  y2: Length;
  "x2:y2": Point;
}

export class Line extends AbstractShape<SVGLineElement, Line_Attributes> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Line_Attributes>) {
    super(context, "line", attrs);
  }
}
