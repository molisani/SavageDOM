import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../../attributes/base";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildPointCompositeParser, buildPointCompositeSerializer, isPoint, Point, pointTweenBuilder } from "../../../attributes/point";
import { AttributeSetter } from "../../../attributes/setter";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { AbstractShape, Shape_AttributeGetter, Shape_AttributeInterpolator, Shape_Attributes, Shape_AttributeSetter } from "../shape";

export interface Ellipse_Attributes extends Shape_Attributes {
  cx: Length;
  cy: Length;
  c: Point;
  rx: Length;
  ry: Length;
  r: Point;
}

const Ellipse_AttributeGetter: AttributeGetter<Ellipse_Attributes> = {
  ...Shape_AttributeGetter,
  cx: numberOrDimensionParser,
  cy: numberOrDimensionParser,
  c: buildPointCompositeParser("cx", "cy"),
  rx: numberOrDimensionParser,
  ry: numberOrDimensionParser,
  r: buildPointCompositeParser("rx", "ry"),
};

const Ellipse_AttributeSetter: AttributeSetter<Ellipse_Attributes> = {
  ...Shape_AttributeSetter,
  cx: numberOrDimensionSerializer,
  cy: numberOrDimensionSerializer,
  c: buildPointCompositeSerializer("cx", "cy"),
  rx: numberOrDimensionSerializer,
  ry: numberOrDimensionSerializer,
  r: buildPointCompositeSerializer("rx", "ry"),
};

const Ellipse_AttributeInterpolator: AttributeInterpolator<Ellipse_Attributes> = {
  ...Shape_AttributeInterpolator,
  cx: unsupportedTweenBuilder,
  cy: unsupportedTweenBuilder,
  c: pointTweenBuilder,
  rx: unsupportedTweenBuilder,
  ry: unsupportedTweenBuilder,
  r: pointTweenBuilder,
};

function _attributeHelper(a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Partial<Ellipse_Attributes> {
  let attrs = {};
  const a1IsPoint = isPoint(a1);
  const a2IsPoint = isPoint(a2);
  if (a1IsPoint && a2IsPoint) {
    attrs = { c: a1, r: a2 };
  } else if (!(a1IsPoint || a2IsPoint)) {
    attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
  }
  return attrs;
}

export class Ellipse extends AbstractShape<SVGEllipseElement, Ellipse_Attributes> {
  public static create(context: Context, c: Point, r: Point): Ellipse;
  public static create(context: Context, cx: Length, cy: Length, rx: Length, ry: Length): Ellipse;
  public static create(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Ellipse;
  public static create(context: Context, a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Ellipse {
    return new Ellipse(context, context.window.document.createElementNS(XMLNS.SVG, "ellipse"), _attributeHelper(a1, a2, a3, a4));
  }
  protected _getter = Ellipse_AttributeGetter;
  protected _setter = Ellipse_AttributeSetter;
  protected _interpolator = Ellipse_AttributeInterpolator;
}
