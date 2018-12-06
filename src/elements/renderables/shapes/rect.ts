import { BaseAttributes, Length } from "../../../attributes/base";
import { Box } from "../../../attributes/box";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { Renderable_Attributes } from "../../renderable";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Rect_Attributes extends BaseAttributes {
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

export class Rect extends AbstractShape<SVGRectElement, Rect_Attributes> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Rect_Attributes>) {
    super(context, "rect", attrs);
  }
}
