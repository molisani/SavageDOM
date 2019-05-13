import { numberParser } from "../../../attributes/base";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder } from "../../../attributes/interpolator";
import { pathDefParser, pathDefSerializer, pathDefTweenBuilder, PathSegment } from "../../../attributes/path-segment";
import { AttributeSetter, defaultSerializer } from "../../../attributes/setter";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { HasMarker, HasMarker_AttributeGetter, HasMarker_AttributeInterpolator, HasMarker_AttributeSetter } from "../../non-renderables/marker";
import { AbstractShape, Shape_AttributeGetter, Shape_AttributeInterpolator, Shape_Attributes, Shape_AttributeSetter } from "../shape";

export interface Path_Attributes extends Shape_Attributes, HasMarker {
  d: PathSegment[];
  pathLength: number;
}

const Path_AttributeGetter: AttributeGetter<Path_Attributes> = {
  ...Shape_AttributeGetter,
  ...HasMarker_AttributeGetter,
  d: pathDefParser,
  pathLength: numberParser,
};

const Path_AttributeSetter: AttributeSetter<Path_Attributes> = {
  ...Shape_AttributeSetter,
  ...HasMarker_AttributeSetter,
  d: pathDefSerializer,
  pathLength: defaultSerializer,
};

const Path_AttributeInterpolator: AttributeInterpolator<Path_Attributes> = {
  ...Shape_AttributeInterpolator,
  ...HasMarker_AttributeInterpolator,
  d: pathDefTweenBuilder,
  pathLength: numberParsedTweenBuilder,
};

function _attributeHelper(d: PathSegment[], pathLength?: number): Partial<Path_Attributes> {
  return { d, pathLength };
}

export class Path extends AbstractShape<SVGPathElement, Path_Attributes> {
  public static create(context: Context, d: PathSegment[], pathLength?: number): Path {
    return new Path(context, context.window.document.createElementNS(XMLNS.SVG, "path"), _attributeHelper(d, pathLength));
  }
  protected _getter = Path_AttributeGetter;
  protected _setter = Path_AttributeSetter;
  protected _interpolator = Path_AttributeInterpolator;
}
