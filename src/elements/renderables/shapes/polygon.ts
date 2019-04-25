import { arrayParser, arraySerializer } from "../../../attributes";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { Point, pointParser, pointSerializer } from "../../../attributes/point";
import { AttributeSetter } from "../../../attributes/setter";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { HasMarker, HasMarker_AttributeGetter, HasMarker_AttributeInterpolator, HasMarker_AttributeSetter } from "../../non-renderables/marker";
import { AbstractShape, Shape_AttributeGetter, Shape_AttributeInterpolator, Shape_Attributes, Shape_AttributeSetter } from "../shape";

export interface Polygon_Attributes extends Shape_Attributes, HasMarker {
  points: Point[];
}

const Polygon_AttributeGetter: AttributeGetter<Polygon_Attributes> = {
  ...Shape_AttributeGetter,
  ...HasMarker_AttributeGetter,
  points: arrayParser(pointParser),
};

const Polygon_AttributeSetter: AttributeSetter<Polygon_Attributes> = {
  ...Shape_AttributeSetter,
  ...HasMarker_AttributeSetter,
  points: arraySerializer(pointSerializer),
};

const Polygon_AttributeInterpolator: AttributeInterpolator<Polygon_Attributes> = {
  ...Shape_AttributeInterpolator,
  ...HasMarker_AttributeInterpolator,
  points: unsupportedTweenBuilder,
};

function _attributeHelper(points: Point[]): Partial<Polygon_Attributes> {
  return { points };
}

export class Polygon extends AbstractShape<SVGPolygonElement, Polygon_Attributes> {
  public static create(context: Context, points: Point[]): Polygon {
    return new Polygon(context, context.window.document.createElementNS(XMLNS.SVG, "polygon"), _attributeHelper(points));
  }
  protected _getter = Polygon_AttributeGetter;
  protected _setter = Polygon_AttributeSetter;
  protected _interpolator = Polygon_AttributeInterpolator;
}
