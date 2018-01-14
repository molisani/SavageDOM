import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { Renderable_Attributes } from "../../renderable";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Circle_Attributes {
  cx: Length;
  cy: Length;
  "cx:cy": Point;
  r: Length;
}

export class Circle extends AbstractShape<SVGCircleElement, Circle_Attributes> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Circle_Attributes>) {
    super(context, "circle", attrs);
  }
}
