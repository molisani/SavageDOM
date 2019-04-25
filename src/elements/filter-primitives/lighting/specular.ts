import { AttributeGetter, numberParser } from "../../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { NumberOptionalNumber, numberOptionalNumberParser, numberOptionalNumberSerializer, numberOptionalNumberTweenBuilder } from "../../../attributes/number-optional-number";
import { AttributeSetter, defaultSerializer } from "../../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../../filter";
import { AbstractFilterPrimitive } from "../../filter-primitive";
import { Lighting_AttributeGetter, Lighting_AttributeInterpolator, Lighting_Attributes, Lighting_AttributeSetter } from "./attributes";

export interface SpecularLighting_Attributes extends Lighting_Attributes {
  in: FilterInput;
  surfaceScale: number;
  specularConstant: number;
  specularExponent: number;
  kernelUnitLength: NumberOptionalNumber;
}

const SpecularLighting_AttributeGetter: AttributeGetter<SpecularLighting_Attributes> = {
  ...Lighting_AttributeGetter,
  in: filterInputParser,
  surfaceScale: numberParser,
  specularConstant: numberParser,
  specularExponent: numberParser,
  kernelUnitLength: numberOptionalNumberParser,
};

const SpecularLighting_AttributeSetter: AttributeSetter<SpecularLighting_Attributes> = {
  ...Lighting_AttributeSetter,
  in: filterInputSerializer,
  surfaceScale: defaultSerializer,
  specularConstant: defaultSerializer,
  specularExponent: defaultSerializer,
  kernelUnitLength: numberOptionalNumberSerializer,
};

const SpecularLighting_AttributeInterpolator: AttributeInterpolator<SpecularLighting_Attributes> = {
  ...Lighting_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  surfaceScale: numberParsedTweenBuilder,
  specularConstant: numberParsedTweenBuilder,
  specularExponent: numberParsedTweenBuilder,
  kernelUnitLength: numberOptionalNumberTweenBuilder,
};

export class SpecularLighting extends AbstractFilterPrimitive<SVGFESpecularLightingElement, SpecularLighting_Attributes> {
  protected _getter = SpecularLighting_AttributeGetter;
  protected _setter = SpecularLighting_AttributeSetter;
  protected _interpolator = SpecularLighting_AttributeInterpolator;
}
