import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Circle_Attributes extends Shape_Attributes {
  cx: Length;
  cy: Length;
  "cx:cy": Point;
  r: Length;
}

export class Circle extends AbstractShape<SVGCircleElement, Circle_Attributes> {
  constructor(context: Context, attrs?: Partial<Circle_Attributes>) {
    super(context, "circle", attrs);
  }
}
