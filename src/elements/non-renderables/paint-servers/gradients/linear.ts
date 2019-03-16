import { Length } from "../../../../attributes/base";
import { Point } from "../../../../attributes/point";
import { XMLNS } from "../../../../constants";
import { Context } from "../../../../context";
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
  constructor(context: Context, stops: Stops, attrs?: Partial<LinearGradient_Attributes>) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "linearGradient"), stops, attrs);
  }
}
