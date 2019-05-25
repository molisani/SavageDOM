import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../../../attributes/base";
import { AttributeGetter } from "../../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../../attributes/interpolator";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../../../attributes/point";
import { AttributeSetter } from "../../../../attributes/setter";
import { XMLNS } from "../../../../constants";
import { Context } from "../../../../context";
import { AbstractGradient, Gradient_AttributeGetter, Gradient_AttributeInterpolator, Gradient_Attributes, Gradient_AttributeSetter, Stops } from "../gradient";

export interface LinearGradient_Attributes extends Gradient_Attributes {
  x1: Length;
  y1: Length;
  p1: Point;
  x2: Length;
  y2: Length;
  p2: Point;
}

export const LinearGradient_AttributeGetter: AttributeGetter<LinearGradient_Attributes> = {
  ...Gradient_AttributeGetter,
  x1: numberOrDimensionParser,
  y1: numberOrDimensionParser,
  p1: buildPointCompositeParser("x1", "y1"),
  x2: numberOrDimensionParser,
  y2: numberOrDimensionParser,
  p2: buildPointCompositeParser("x2", "y2"),
};

export const LinearGradient_AttributeSetter: AttributeSetter<LinearGradient_Attributes> = {
  ...Gradient_AttributeSetter,
  x1: numberOrDimensionSerializer,
  y1: numberOrDimensionSerializer,
  p1: buildPointCompositeSerializer("x1", "y1"),
  x2: numberOrDimensionSerializer,
  y2: numberOrDimensionSerializer,
  p2: buildPointCompositeSerializer("x2", "y2"),
};

export const LinearGradient_AttributeInterpolator: AttributeInterpolator<LinearGradient_Attributes> = {
  ...Gradient_AttributeInterpolator,
  x1: unsupportedTweenBuilder,
  y1: unsupportedTweenBuilder,
  p1: pointTweenBuilder,
  x2: unsupportedTweenBuilder,
  y2: unsupportedTweenBuilder,
  p2: pointTweenBuilder,
};

export class LinearGradient extends AbstractGradient<SVGLinearGradientElement, LinearGradient_Attributes> {
  public static create(context: Context, stops: Stops, attrs?: Partial<LinearGradient_Attributes>): LinearGradient {
    return new LinearGradient(context, context.window.document.createElementNS(XMLNS.SVG, "linearGradient"), stops, attrs);
  }
  protected _getter = LinearGradient_AttributeGetter;
  protected _setter = LinearGradient_AttributeSetter;
  protected _interpolator = LinearGradient_AttributeInterpolator;
}
