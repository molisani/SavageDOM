import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { Renderable_Attributes } from "../../renderable";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Ellipse_Attributes {
  cx: Length;
  cy: Length;
  "cx:cy": Point;
  rx: Length;
  ry: Length;
  "rx:ry": Point;
}

export class Ellipse extends AbstractShape<SVGEllipseElement, Ellipse_Attributes> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Ellipse_Attributes>) {
    super(context, "ellipse", attrs);
  }
}
