import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../../attributes/base";
import { Box, buildBoxCompositeParser, buildBoxCompositeSerializer, isBox } from "../../../attributes/box";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildPointCompositeParser, buildPointCompositeSerializer, isPoint, Point, pointTweenBuilder } from "../../../attributes/point";
import { AttributeSetter } from "../../../attributes/setter";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { AbstractShape, Shape_AttributeGetter, Shape_AttributeInterpolator, Shape_Attributes, Shape_AttributeSetter } from "../shape";

export interface Rect_Attributes extends Shape_Attributes {
  x: Length;
  y: Length;
  p: Point;
  width: Length;
  height: Length;
  "x:y:width:height": Box;
  rx: Length;
  ry: Length;
  r: Point;
}

const Rect_AttributeGetter: AttributeGetter<Rect_Attributes> = {
  ...Shape_AttributeGetter,
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  p: buildPointCompositeParser("x", "y"),
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
  "x:y:width:height": buildBoxCompositeParser("x", "y", "width", "height"),
  rx: numberOrDimensionParser,
  ry: numberOrDimensionParser,
  r: buildPointCompositeParser("rx", "ry"),
};

const Rect_AttributeSetter: AttributeSetter<Rect_Attributes> = {
  ...Shape_AttributeSetter,
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  p: buildPointCompositeSerializer("x", "y"),
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
  "x:y:width:height": buildBoxCompositeSerializer("x", "y", "width", "height"),
  rx: numberOrDimensionSerializer,
  ry: numberOrDimensionSerializer,
  r: buildPointCompositeSerializer("rx", "ry"),
};

const Rect_AttributeInterpolator: AttributeInterpolator<Rect_Attributes> = {
  ...Shape_AttributeInterpolator,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  p: pointTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
  "x:y:width:height": unsupportedTweenBuilder,
  rx: unsupportedTweenBuilder,
  ry: unsupportedTweenBuilder,
  r: pointTweenBuilder,
};

function _attributeHelper(a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length): Partial<Rect_Attributes> {
  const attrs: Partial<Rect_Attributes> = {};
  if (isBox(a1)) {
    attrs["x:y:width:height"] = a1;
    if (isPoint(a2)) {
      attrs["r"] = a2;
    } else {
      if (a2 !== undefined) {
        attrs["rx"] = a2;
      }
      if (a3 !== undefined) {
        attrs["ry"] = a3;
      }
    }
  } else if (isPoint(a1)) {
    attrs["p"] = a1;
    if (a2 !== undefined && !(isPoint(a2))) {
      attrs["width"] = a2;
    }
    if (a3 !== undefined) {
      attrs["height"] = a3;
    }
    if (isPoint(a4)) {
      attrs["r"] = a4;
    } else {
      if (a4 !== undefined) {
        attrs["rx"] = a4;
      }
      if (a5 !== undefined && !(isPoint(a5))) {
        attrs["ry"] = a5;
      }
    }
  } else {
    attrs["x"] = a1;
    if (a2 !== undefined && !(isPoint(a2))) {
      attrs["y"] = a2;
    }
    if (a3 !== undefined) {
      attrs["width"] = a3;
    }
    if (a4 !== undefined && !(isPoint(a4))) {
      attrs["height"] = a4;
    }
    if (isPoint(a5)) {
      attrs["r"] = a5;
    } else {
      if (a5 !== undefined) {
        attrs["rx"] = a5;
      }
      if (a6 !== undefined) {
        attrs["ry"] = a6;
      }
    }
  }
  return attrs;
}

export class Rect extends AbstractShape<SVGRectElement, Rect_Attributes> {
  public static new(context: Context, attrs: Partial<Rect_Attributes> = {}) {
    return new Rect(context, context.window.document.createElementNS(XMLNS.SVG, "rect"), attrs);
  }
  public static create(context: Context, box: Box, r?: Point): Rect;
  public static create(context: Context, box: Box, rx?: Length, ry?: Length): Rect;
  public static create(context: Context, p: Point, width: Length, height: Length, r?: Point): Rect;
  public static create(context: Context, p: Point, width: Length, height: Length, rx?: Length, ry?: Length): Rect;
  public static create(context: Context, x: Length, y: Length, width: Length, height: Length, r?: Point): Rect;
  public static create(context: Context, a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length): Rect;
  public static create(context: Context, a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length): Rect {
    return Rect.new(context, _attributeHelper(a1, a2, a3, a4, a5, a6));
  }
  protected _getter = Rect_AttributeGetter;
  protected _setter = Rect_AttributeSetter;
  protected _interpolator = Rect_AttributeInterpolator;
}
