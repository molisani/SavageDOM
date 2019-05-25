import { arrayParser, arraySerializer } from "../../../attributes";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { Point, pointParser, pointSerializer } from "../../../attributes/point";
import { AttributeSetter } from "../../../attributes/setter";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { HasMarker, HasMarker_AttributeGetter, HasMarker_AttributeInterpolator, HasMarker_AttributeSetter } from "../../non-renderables/marker";
import { AbstractShape, Shape_AttributeGetter, Shape_AttributeInterpolator, Shape_Attributes, Shape_AttributeSetter } from "../shape";

export interface Polyline_Attributes extends Shape_Attributes, HasMarker {
  points: Point[];
}

const Polyline_AttributeGetter: AttributeGetter<Polyline_Attributes> = {
  ...Shape_AttributeGetter,
  ...HasMarker_AttributeGetter,
  points: arrayParser(pointParser),
};

const Polyline_AttributeSetter: AttributeSetter<Polyline_Attributes> = {
  ...Shape_AttributeSetter,
  ...HasMarker_AttributeSetter,
  points: arraySerializer(pointSerializer),
};

const Polyline_AttributeInterpolator: AttributeInterpolator<Polyline_Attributes> = {
  ...Shape_AttributeInterpolator,
  ...HasMarker_AttributeInterpolator,
  points: unsupportedTweenBuilder,
};

function _attributeHelper(points: Point[]): Partial<Polyline_Attributes> {
  return { points };
}

export class Polyline extends AbstractShape<SVGPolylineElement, Polyline_Attributes> {
  public static create(context: Context, points: Point[]): Polyline {
    return new Polyline(context, context.window.document.createElementNS(XMLNS.SVG, "polyline"), _attributeHelper(points));
  }
  protected _getter = Polyline_AttributeGetter;
  protected _setter = Polyline_AttributeSetter;
  protected _interpolator = Polyline_AttributeInterpolator;
}
