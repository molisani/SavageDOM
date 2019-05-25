import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../../attributes/base";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildPointCompositeParser, buildPointCompositeSerializer, isPoint, Point, pointTweenBuilder } from "../../../attributes/point";
import { AttributeSetter } from "../../../attributes/setter";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { HasMarker, HasMarker_AttributeGetter, HasMarker_AttributeInterpolator, HasMarker_AttributeSetter } from "../../non-renderables/marker";
import { AbstractShape, Shape_AttributeGetter, Shape_AttributeInterpolator, Shape_Attributes, Shape_AttributeSetter } from "../shape";

export interface Line_Attributes extends Shape_Attributes, HasMarker {
  x1: Length;
  y1: Length;
  p1: Point;
  x2: Length;
  y2: Length;
  p2: Point;
}

const Line_AttributeGetter: AttributeGetter<Line_Attributes> = {
  ...Shape_AttributeGetter,
  ...HasMarker_AttributeGetter,
  x1: numberOrDimensionParser,
  y1: numberOrDimensionParser,
  p1: buildPointCompositeParser("x1", "y1"),
  x2: numberOrDimensionParser,
  y2: numberOrDimensionParser,
  p2: buildPointCompositeParser("x2", "y2"),
};

const Line_AttributeSetter: AttributeSetter<Line_Attributes> = {
  ...Shape_AttributeSetter,
  ...HasMarker_AttributeSetter,
  x1: numberOrDimensionSerializer,
  y1: numberOrDimensionSerializer,
  p1: buildPointCompositeSerializer("x1", "y1"),
  x2: numberOrDimensionSerializer,
  y2: numberOrDimensionSerializer,
  p2: buildPointCompositeSerializer("x2", "y2"),
};

const Line_AttributeInterpolator: AttributeInterpolator<Line_Attributes> = {
  ...Shape_AttributeInterpolator,
  ...HasMarker_AttributeInterpolator,
  x1: unsupportedTweenBuilder,
  y1: unsupportedTweenBuilder,
  p1: pointTweenBuilder,
  x2: unsupportedTweenBuilder,
  y2: unsupportedTweenBuilder,
  p2: pointTweenBuilder,
};

function _attributeHelper(a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Partial<Line_Attributes> {
  let attrs = {};
  const a1IsPoint = isPoint(a1);
  const a2IsPoint = isPoint(a2);
  if (a1IsPoint && a2IsPoint) {
    attrs = { p1: a1, p2: a2 };
  } else if (!(a1IsPoint || a2IsPoint)) {
    attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
  }
  return attrs;
}

export class Line extends AbstractShape<SVGLineElement, Line_Attributes> {
  public static new(context: Context, attrs: Partial<Line_Attributes> = {}) {
    return new Line(context, context.window.document.createElementNS(XMLNS.SVG, "line"), attrs);
  }
  public static create(context: Context, p1: Point, p2: Point): Line;
  public static create(context: Context, x1: Length, y1: Length, x2: Length, y2: Length): Line;
  public static create(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Line;
  public static create(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Line {
    return Line.new(context, _attributeHelper(a1, a2, a3, a4));
  }
  protected _getter = Line_AttributeGetter;
  protected _setter = Line_AttributeSetter;
  protected _interpolator = Line_AttributeInterpolator;
}
