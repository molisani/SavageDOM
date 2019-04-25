import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../../attributes";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildPointCompositeParser, buildPointCompositeSerializer, isPoint, Point, pointTweenBuilder } from "../../../attributes/point";
import { AttributeSetter } from "../../../attributes/setter";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { AbstractShape, Shape_AttributeGetter, Shape_AttributeInterpolator, Shape_Attributes, Shape_AttributeSetter } from "../shape";

export interface Circle_Attributes extends Shape_Attributes {
  cx: Length;
  cy: Length;
  c: Point;
  r: Length;
}

const Circle_AttributeGetter: AttributeGetter<Circle_Attributes> = {
  ...Shape_AttributeGetter,
  cx: numberOrDimensionParser,
  cy: numberOrDimensionParser,
  c: buildPointCompositeParser("cx", "cy"),
  r: numberOrDimensionParser,
};

const Circle_AttributeSetter: AttributeSetter<Circle_Attributes> = {
  ...Shape_AttributeSetter,
  cx: numberOrDimensionSerializer,
  cy: numberOrDimensionSerializer,
  c: buildPointCompositeSerializer("cx", "cy"),
  r: numberOrDimensionSerializer,
};

const Circle_AttributeInterpolator: AttributeInterpolator<Circle_Attributes> = {
  ...Shape_AttributeInterpolator,
  cx: unsupportedTweenBuilder,
  cy: unsupportedTweenBuilder,
  c: pointTweenBuilder,
  r: unsupportedTweenBuilder,
};

function _attributeHelper(a1: number | Point, a2: number, a3?: number): Partial<Circle_Attributes> {
  if (isPoint(a1)) {
    return { c: a1, r: a2 };
  }
  return { cx: a1, cy: a2, r: a3 };
}

export class Circle extends AbstractShape<SVGCircleElement, Circle_Attributes> {
  public static create(context: Context, c: Point, r: number): Circle;
  public static create(context: Context, cx: number, cy: number, r: number): Circle;
  public static create(context: Context, a1: number | Point, a2: number, a3?: number): Circle;
  public static create(context: Context, a1: number | Point, a2: number, a3?: number): Circle {
    return new Circle(context, context.window.document.createElementNS(XMLNS.SVG, "circle"), _attributeHelper(a1, a2, a3));
  }
  protected _getter = Circle_AttributeGetter;
  protected _setter = Circle_AttributeSetter;
  protected _interpolator = Circle_AttributeInterpolator;
}
