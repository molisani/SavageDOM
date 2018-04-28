import { Length } from "../../../../attributes/base";
import { Point } from "../../../../attributes/point";
import { Context } from "../../../../context";
import { NonRenderable_Attributes } from "../../../non-renderable";
import { AbstractGradient, Gradient_Attributes, Stops } from "../gradient";

export interface RadialGradient_Attributes extends Gradient_Attributes {
  cx: Length;
  cy: Length;
  "cx:cy": Point;
  r: Length;
  fx: Length;
  fy: Length;
  "fx:fy": Point;
}

export class RadialGradient extends AbstractGradient<SVGRadialGradientElement, RadialGradient_Attributes> {
  constructor(context: Context, stops: Stops, attrs?: Partial<NonRenderable_Attributes & RadialGradient_Attributes>) {
    super(context, "radialGradient", stops, attrs);
  }
}
