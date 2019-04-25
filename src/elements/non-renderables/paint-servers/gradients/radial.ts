import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../../../attributes/base";
import { AttributeGetter } from "../../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../../attributes/interpolator";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../../../attributes/point";
import { AttributeSetter } from "../../../../attributes/setter";
import { XMLNS } from "../../../../constants";
import { Context } from "../../../../context";
import { AbstractGradient, Gradient_AttributeGetter, Gradient_AttributeInterpolator, Gradient_Attributes, Gradient_AttributeSetter, Stops } from "../gradient";

export interface RadialGradient_Attributes extends Gradient_Attributes {
  cx: Length;
  cy: Length;
  c: Point;
  r: Length;
  fx: Length;
  fy: Length;
  f: Point;
}

export const RadialGradient_AttributeGetter: AttributeGetter<RadialGradient_Attributes> = {
  ...Gradient_AttributeGetter,
  cx: numberOrDimensionParser,
  cy: numberOrDimensionParser,
  c: buildPointCompositeParser("cx", "cy"),
  r: numberOrDimensionParser,
  fx: numberOrDimensionParser,
  fy: numberOrDimensionParser,
  f: buildPointCompositeParser("fx", "fy"),
};

export const RadialGradient_AttributeSetter: AttributeSetter<RadialGradient_Attributes> = {
  ...Gradient_AttributeSetter,
  cx: numberOrDimensionSerializer,
  cy: numberOrDimensionSerializer,
  c: buildPointCompositeSerializer("cx", "cy"),
  r: numberOrDimensionSerializer,
  fx: numberOrDimensionSerializer,
  fy: numberOrDimensionSerializer,
  f: buildPointCompositeSerializer("fx", "fy"),
};

export const RadialGradient_AttributeInterpolator: AttributeInterpolator<RadialGradient_Attributes> = {
  ...Gradient_AttributeInterpolator,
  cx: unsupportedTweenBuilder,
  cy: unsupportedTweenBuilder,
  c: pointTweenBuilder,
  r: unsupportedTweenBuilder,
  fx: unsupportedTweenBuilder,
  fy: unsupportedTweenBuilder,
  f: pointTweenBuilder,
};

export class RadialGradient extends AbstractGradient<SVGRadialGradientElement, RadialGradient_Attributes> {
  public static create(context: Context, stops: Stops, attrs?: Partial<RadialGradient_Attributes>): RadialGradient {
    return new RadialGradient(context, context.window.document.createElementNS(XMLNS.SVG, "radialGradient"), stops, attrs);
  }
  protected _getter = RadialGradient_AttributeGetter;
  protected _setter = RadialGradient_AttributeSetter;
  protected _interpolator = RadialGradient_AttributeInterpolator;
}
