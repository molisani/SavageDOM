import { Length } from "../../../../attributes/base";
import { Point } from "../../../../attributes/point";
import { Context } from "../../../../context";
import { NonRenderable_Attributes } from "../../../non-renderable";
import { AbstractGradient, Gradient_Attributes, Stops } from "../gradient";

export interface LinearGradient_Attributes extends Gradient_Attributes {
  x1: Length;
  y1: Length;
  "x1:y1": Point;
  x2: Length;
  y2: Length;
  "x2:y2": Point;
}

export class LinearGradient extends AbstractGradient<SVGLinearGradientElement, LinearGradient_Attributes> {
  constructor(context: Context, stops: Stops, attrs?: Partial<NonRenderable_Attributes & LinearGradient_Attributes>) {
    super(context, "linearGradient", stops, attrs);
  }
}
