import { numberParser } from "../../../attributes/base";
import { AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { NumberOptionalNumber, numberOptionalNumberParser, numberOptionalNumberSerializer, numberOptionalNumberTweenBuilder } from "../../../attributes/number-optional-number";
import { AttributeSetter, defaultSerializer } from "../../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../../filter";
import { AbstractFilterPrimitive } from "../../filter-primitive";
import { Lighting_AttributeGetter, Lighting_AttributeInterpolator, Lighting_Attributes, Lighting_AttributeSetter } from "./attributes";

export interface DiffuseLighting_Attributes extends Lighting_Attributes {
  in: FilterInput;
  surfaceScale: number;
  diffuseConstant: number;
  kernelUnitLength: NumberOptionalNumber;
}

const DiffuseLighting_AttributeGetter: AttributeGetter<DiffuseLighting_Attributes> = {
  ...Lighting_AttributeGetter,
  in: filterInputParser,
  surfaceScale: numberParser,
  diffuseConstant: numberParser,
  kernelUnitLength: numberOptionalNumberParser,
};

const DiffuseLighting_AttributeSetter: AttributeSetter<DiffuseLighting_Attributes> = {
  ...Lighting_AttributeSetter,
  in: filterInputSerializer,
  surfaceScale: defaultSerializer,
  diffuseConstant: defaultSerializer,
  kernelUnitLength: numberOptionalNumberSerializer,
};

const DiffuseLighting_AttributeInterpolator: AttributeInterpolator<DiffuseLighting_Attributes> = {
  ...Lighting_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  surfaceScale: numberParsedTweenBuilder,
  diffuseConstant: numberParsedTweenBuilder,
  kernelUnitLength: numberOptionalNumberTweenBuilder,
};

export class DiffuseLighting extends AbstractFilterPrimitive<SVGFEDiffuseLightingElement, DiffuseLighting_Attributes> {
  protected _getter = DiffuseLighting_AttributeGetter;
  protected _setter = DiffuseLighting_AttributeSetter;
  protected _interpolator = DiffuseLighting_AttributeInterpolator;
}
