import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
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

export class Ellipse extends AbstractShape<SVGEllipseElement, Ellipse_Attributes> {
  constructor(context: Context, attrs?: Partial<Ellipse_Attributes>) {
    super(context, "ellipse", attrs);
  }
}
