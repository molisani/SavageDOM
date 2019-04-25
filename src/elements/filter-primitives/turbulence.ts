import { AttributeGetter, numberParser } from "../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { NumberOptionalNumber, numberOptionalNumberParser, numberOptionalNumberSerializer, numberOptionalNumberTweenBuilder } from "../../attributes/number-optional-number";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Turbulence_Attributes extends FilterPrimitive_Attributes {
  type: "fractalNoise" | "turbulence";
  baseFrequency: NumberOptionalNumber;
  numOctaves: number;
  seed: number;
  stitchTiles: "noStitch" | "stitch";
}

export const Turbulence_AttributeGetter: AttributeGetter<Turbulence_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  type: buildStringLiteralParser(["fractalNoise", "turbulence"], "fractalNoise"),
  baseFrequency: numberOptionalNumberParser,
  numOctaves: numberParser,
  seed: numberParser,
  stitchTiles: buildStringLiteralParser(["noStitch", "stitch"], "stitch"),
};

export const Turbulence_AttributeSetter: AttributeSetter<Turbulence_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  type: buildStringLiteralSerializer(["fractalNoise", "turbulence"], "fractalNoise"),
  baseFrequency: numberOptionalNumberSerializer,
  numOctaves: defaultSerializer,
  seed: defaultSerializer,
  stitchTiles: buildStringLiteralSerializer(["noStitch", "stitch"], "stitch"),
};

export const Turbulence_AttributeInterpolator: AttributeInterpolator<Turbulence_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  type: unsupportedTweenBuilder,
  baseFrequency: numberOptionalNumberTweenBuilder,
  numOctaves: numberParsedTweenBuilder,
  seed: numberParsedTweenBuilder,
  stitchTiles: unsupportedTweenBuilder,
};

export class Turbulence_Primitive extends AbstractFilterPrimitive<SVGFETurbulenceElement, Turbulence_Attributes> {
  protected _getter = Turbulence_AttributeGetter;
  protected _setter = Turbulence_AttributeSetter;
  protected _interpolator = Turbulence_AttributeInterpolator;
}
