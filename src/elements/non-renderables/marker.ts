import { anyParser, BaseAttributes, HasOpacity, HasOpacity_AttributeGetter, HasOpacity_AttributeInterpolator, HasOpacity_AttributeSetter, HasOverflow, HasOverflow_AttributeGetter, HasOverflow_AttributeInterpolator, HasOverflow_AttributeSetter, Inherit, Length, None, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { Box, boxParser, boxSerializer, buildBoxCompositeParser, buildBoxCompositeSerializer } from "../../attributes/box";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../attributes/point";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractNonRenderable, NonRenderable_AttributeGetter, NonRenderable_AttributeInterpolator, NonRenderable_Attributes, NonRenderable_AttributeSetter } from "../non-renderable";

export interface HasMarker extends BaseAttributes {
  "marker-start": None | Marker | Inherit;
  "marker-mid": None | Marker | Inherit;
  "marker-end": None | Marker | Inherit;
}

export const HasMarker_AttributeGetter: AttributeGetter<HasMarker> = {
  "marker-start": anyParser,
  "marker-mid": anyParser,
  "marker-end": anyParser,
};

export const HasMarker_AttributeSetter: AttributeSetter<HasMarker> = {
  "marker-start": defaultSerializer,
  "marker-mid": defaultSerializer,
  "marker-end": defaultSerializer,
};

export const HasMarker_AttributeInterpolator: AttributeInterpolator<HasMarker> = {
  "marker-start": unsupportedTweenBuilder,
  "marker-mid": unsupportedTweenBuilder,
  "marker-end": unsupportedTweenBuilder,
};

export interface Marker_Attributes extends NonRenderable_Attributes, HasOverflow, HasOpacity {
  markerUnits: "userSpaceOnUse" | "strokeWidth";
  refX: Length;
  refY: Length;
  ref: Point;
  markerWidth: Length;
  markerHeight: Length;
  "refX:refY:markerWidth:markerHeight": Box;
  orient: "auto" | "auto-start-reverse" | number | string;
  viewBox: Box;
}

const unitsLiterals = ["userSpaceOnUse", "strokeWidth"] as const;

export const Marker_AttributeGetter: AttributeGetter<Marker_Attributes> = {
  ...NonRenderable_AttributeGetter,
  ...HasOverflow_AttributeGetter,
  ...HasOpacity_AttributeGetter,
  markerUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  refX: numberOrDimensionParser,
  refY: numberOrDimensionParser,
  ref: buildPointCompositeParser("refX", "refY"),
  markerWidth: numberOrDimensionParser,
  markerHeight: numberOrDimensionParser,
  "refX:refY:markerWidth:markerHeight": buildBoxCompositeParser("refX", "refY", "markerWidth", "markerHeight"),
  orient: anyParser,
  viewBox: boxParser,
};

export const Marker_AttributeSetter: AttributeSetter<Marker_Attributes> = {
  ...NonRenderable_AttributeSetter,
  ...HasOverflow_AttributeSetter,
  ...HasOpacity_AttributeSetter,
  markerUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  refX: numberOrDimensionSerializer,
  refY: numberOrDimensionSerializer,
  ref: buildPointCompositeSerializer("refX", "refY"),
  markerWidth: numberOrDimensionSerializer,
  markerHeight: numberOrDimensionSerializer,
  "refX:refY:markerWidth:markerHeight": buildBoxCompositeSerializer("refX", "refY", "markerWidth", "markerHeight"),
  orient: defaultSerializer,
  viewBox: boxSerializer,
};

export const Marker_AttributeInterpolator: AttributeInterpolator<Marker_Attributes> = {
  ...NonRenderable_AttributeInterpolator,
  ...HasOverflow_AttributeInterpolator,
  ...HasOpacity_AttributeInterpolator,
  markerUnits: unsupportedTweenBuilder,
  refX: unsupportedTweenBuilder,
  refY: unsupportedTweenBuilder,
  ref: pointTweenBuilder,
  markerWidth: unsupportedTweenBuilder,
  markerHeight: unsupportedTweenBuilder,
  "refX:refY:markerWidth:markerHeight": unsupportedTweenBuilder,
  orient: unsupportedTweenBuilder,
  viewBox: unsupportedTweenBuilder,
};

export class Marker extends AbstractNonRenderable<SVGMarkerElement, Marker_Attributes> {
  public static create(context: Context, attrs?: Partial<NonRenderable_Attributes | Marker_Attributes>): Marker {
    return new Marker(context, context.window.document.createElementNS(XMLNS.SVG, "marker"), attrs);
  }
  protected _getter = Marker_AttributeGetter;
  protected _setter = Marker_AttributeSetter;
  protected _interpolator = Marker_AttributeInterpolator;
}
