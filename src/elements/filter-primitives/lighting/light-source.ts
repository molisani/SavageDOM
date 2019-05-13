import { Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter, Length, numberOrDimensionParser, numberOrDimensionSerializer, numberParser } from "../../../attributes/base";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, d3BypassTweenBuilder, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../../attributes/literal";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../../attributes/point";
import { AttributeSetter, defaultSerializer } from "../../../attributes/setter";
import { AbstractElement } from "../../../element";
import { Filter } from "../../filter";

export interface DistantLight_Attributes extends Core_Attributes {
  type: "distant";
  azimuth: number;
  elevation: number;
}

const DistantLight_AttributeGetter: AttributeGetter<DistantLight_Attributes> = {
  ...Core_AttributeGetter,
  type: buildStringLiteralParser(["distant"], "distant"),
  azimuth: numberParser,
  elevation: numberParser,
};

const DistantLight_AttributeSetter: AttributeSetter<DistantLight_Attributes> = {
  ...Core_AttributeSetter,
  type: buildStringLiteralSerializer(["distant"], "distant"),
  azimuth: defaultSerializer,
  elevation: defaultSerializer,
};

const DistantLight_AttributeInterpolator: AttributeInterpolator<DistantLight_Attributes> = {
  ...Core_AttributeInterpolator,
  type: unsupportedTweenBuilder,
  azimuth: numberParsedTweenBuilder,
  elevation: numberParsedTweenBuilder,
};

export interface PointLight_Attributes extends Core_Attributes {
  type: "point";
  x: Length;
  y: Length;
  p: Point;
  z: Length;
}

const PointLight_AttributeGetter: AttributeGetter<PointLight_Attributes> = {
  ...Core_AttributeGetter,
  type: buildStringLiteralParser(["point"], "point"),
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  p: buildPointCompositeParser("x", "y"),
  z: numberOrDimensionParser,
};

const PointLight_AttributeSetter: AttributeSetter<PointLight_Attributes> = {
  ...Core_AttributeSetter,
  type: buildStringLiteralSerializer(["point"], "point"),
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  p: buildPointCompositeSerializer("x", "y"),
  z: numberOrDimensionSerializer,
};

const PointLight_AttributeInterpolator: AttributeInterpolator<PointLight_Attributes> = {
  ...Core_AttributeInterpolator,
  type: unsupportedTweenBuilder,
  x: d3BypassTweenBuilder,
  y: d3BypassTweenBuilder,
  p: pointTweenBuilder,
  z: d3BypassTweenBuilder,
};

export interface SpotLight_Attributes extends Core_Attributes {
  type: "spot";
  x: Length;
  y: Length;
  p: Point;
  z: Length;
  pointsAtX: Length;
  pointsAtY: Length;
  pointsAt: Point;
  pointsAtZ: Length;
  specularExponent: number;
  limitingConeAngle: number;
}

const SpotLight_AttributeGetter: AttributeGetter<SpotLight_Attributes> = {
  ...Core_AttributeGetter,
  type: buildStringLiteralParser(["spot"], "spot"),
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  p: buildPointCompositeParser("x", "y"),
  z: numberOrDimensionParser,
  pointsAtX: numberOrDimensionParser,
  pointsAtY: numberOrDimensionParser,
  pointsAt: buildPointCompositeParser("pointsAtX", "pointsAtY"),
  pointsAtZ: numberOrDimensionParser,
  specularExponent: numberParser,
  limitingConeAngle: numberParser,
};

const SpotLight_AttributeSetter: AttributeSetter<SpotLight_Attributes> = {
  ...Core_AttributeSetter,
  type: buildStringLiteralSerializer(["spot"], "spot"),
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  p: buildPointCompositeSerializer("x", "y"),
  z: numberOrDimensionSerializer,
  pointsAtX: numberOrDimensionSerializer,
  pointsAtY: numberOrDimensionSerializer,
  pointsAt: buildPointCompositeSerializer("pointsAtX", "pointsAtY"),
  pointsAtZ: numberOrDimensionSerializer,
  specularExponent: defaultSerializer,
  limitingConeAngle: defaultSerializer,
};

const SpotLight_AttributeInterpolator: AttributeInterpolator<SpotLight_Attributes> = {
  ...Core_AttributeInterpolator,
  type: unsupportedTweenBuilder,
  x: d3BypassTweenBuilder,
  y: d3BypassTweenBuilder,
  p: pointTweenBuilder,
  z: d3BypassTweenBuilder,
  pointsAtX: d3BypassTweenBuilder,
  pointsAtY: d3BypassTweenBuilder,
  pointsAt: pointTweenBuilder,
  pointsAtZ: d3BypassTweenBuilder,
  specularExponent: numberParsedTweenBuilder,
  limitingConeAngle: numberParsedTweenBuilder,
};

export type LightSource_Attributes = DistantLight_Attributes | PointLight_Attributes | SpotLight_Attributes;

export abstract class AbstractLightSource<ELEMENT extends SVGFEDistantLightElement | SVGFEPointLightElement | SVGFESpotLightElement, ATTRIBUTES extends LightSource_Attributes> extends AbstractElement<ELEMENT, ATTRIBUTES> {
  constructor(filter: Filter, el: ELEMENT, attrs?: Partial<ATTRIBUTES>) {
    super(filter.context, el, attrs);
  }
}

export class DistantLight extends AbstractLightSource<SVGFEDistantLightElement, DistantLight_Attributes> {
  protected _getter = DistantLight_AttributeGetter;
  protected _setter = DistantLight_AttributeSetter;
  protected _interpolator = DistantLight_AttributeInterpolator;
}

export class PointLight extends AbstractLightSource<SVGFEPointLightElement, PointLight_Attributes> {
  protected _getter = PointLight_AttributeGetter;
  protected _setter = PointLight_AttributeSetter;
  protected _interpolator = PointLight_AttributeInterpolator;
}

export class SpotLight extends AbstractLightSource<SVGFESpotLightElement, SpotLight_Attributes> {
  protected _getter = SpotLight_AttributeGetter;
  protected _setter = SpotLight_AttributeSetter;
  protected _interpolator = SpotLight_AttributeInterpolator;
}
