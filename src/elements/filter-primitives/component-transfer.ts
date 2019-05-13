import { arrayParser, arraySerializer } from "../../attributes/array";
import { Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter, numberParser } from "../../attributes/base";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { AbstractElement } from "../../element";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface IdentityFunction_Attributes extends Core_Attributes {
  type: "identity";
}

const IdentityFunction_AttributeGetter: AttributeGetter<IdentityFunction_Attributes> = {
  ...Core_AttributeGetter,
  type: buildStringLiteralParser(["identity"], "identity"),
};

const IdentityFunction_AttributeSetter: AttributeSetter<IdentityFunction_Attributes> = {
  ...Core_AttributeSetter,
  type: buildStringLiteralSerializer(["identity"], "identity"),
};

const IdentityFunction_AttributeInterpolator: AttributeInterpolator<IdentityFunction_Attributes> = {
  ...Core_AttributeInterpolator,
  type: unsupportedTweenBuilder,
};

export interface TabularFunction_Attributes extends Core_Attributes {
  type: "table" | "discrete";
  tableValues: number[];
}

const TabularFunction_AttributeGetter: AttributeGetter<TabularFunction_Attributes> = {
  ...Core_AttributeGetter,
  type: buildStringLiteralParser(["table", "discrete"], "table"),
  tableValues: arrayParser(numberParser),
};

const TabularFunction_AttributeSetter: AttributeSetter<TabularFunction_Attributes> = {
  ...Core_AttributeSetter,
  type: buildStringLiteralSerializer(["table", "discrete"], "table"),
  tableValues: arraySerializer(defaultSerializer),
};

const TabularFunction_AttributeInterpolator: AttributeInterpolator<TabularFunction_Attributes> = {
  ...Core_AttributeInterpolator,
  type: unsupportedTweenBuilder,
  tableValues: unsupportedTweenBuilder,
};

export interface LinearFunction_Attributes extends Core_Attributes {
  type: "linear";
  slope: number;
  intercept: number;
}

const LinearFunction_AttributeGetter: AttributeGetter<LinearFunction_Attributes> = {
  ...Core_AttributeGetter,
  type: buildStringLiteralParser(["linear"], "linear"),
  slope: numberParser,
  intercept: numberParser,
};

const LinearFunction_AttributeSetter: AttributeSetter<LinearFunction_Attributes> = {
  ...Core_AttributeSetter,
  type: buildStringLiteralSerializer(["linear"], "linear"),
  slope: defaultSerializer,
  intercept: defaultSerializer,
};

const LinearFunction_AttributeInterpolator: AttributeInterpolator<LinearFunction_Attributes> = {
  ...Core_AttributeInterpolator,
  type: unsupportedTweenBuilder,
  slope: numberParsedTweenBuilder,
  intercept: numberParsedTweenBuilder,
};

export interface GammaFunction_Attributes extends Core_Attributes {
  type: "gamma";
  amplitude: number;
  exponent: number;
  offset: number;
}

const GammaFunction_AttributeGetter: AttributeGetter<GammaFunction_Attributes> = {
  ...Core_AttributeGetter,
  type: buildStringLiteralParser(["gamma"], "gamma"),
  amplitude: numberParser,
  exponent: numberParser,
  offset: numberParser,
};

const GammaFunction_AttributeSetter: AttributeSetter<GammaFunction_Attributes> = {
  ...Core_AttributeSetter,
  type: buildStringLiteralSerializer(["gamma"], "gamma"),
  amplitude: defaultSerializer,
  exponent: defaultSerializer,
  offset: defaultSerializer,
};

const GammaFunction_AttributeInterpolator: AttributeInterpolator<GammaFunction_Attributes> = {
  ...Core_AttributeInterpolator,
  type: unsupportedTweenBuilder,
  amplitude: numberParsedTweenBuilder,
  exponent: numberParsedTweenBuilder,
  offset: numberParsedTweenBuilder,
};

type TransferFunction_Elements = SVGFEFuncRElement | SVGFEFuncGElement | SVGFEFuncBElement | SVGFEFuncAElement;

export type TransferFunction_Attributes = IdentityFunction_Attributes | TabularFunction_Attributes | LinearFunction_Attributes | GammaFunction_Attributes;

const TransferFunction_AttributeGetter: AttributeGetter<TransferFunction_Attributes> = {
  ...IdentityFunction_AttributeGetter,
  ...TabularFunction_AttributeGetter,
  ...LinearFunction_AttributeGetter,
  ...GammaFunction_AttributeGetter,
};

const TransferFunction_AttributeSetter: AttributeSetter<TransferFunction_Attributes> = {
  ...IdentityFunction_AttributeSetter,
  ...TabularFunction_AttributeSetter,
  ...LinearFunction_AttributeSetter,
  ...GammaFunction_AttributeSetter,
};

const TransferFunction_AttributeInterpolator: AttributeInterpolator<TransferFunction_Attributes> = {
  ...IdentityFunction_AttributeInterpolator,
  ...TabularFunction_AttributeInterpolator,
  ...LinearFunction_AttributeInterpolator,
  ...GammaFunction_AttributeInterpolator,
};

export class TransferFunction_Primitive extends AbstractElement<TransferFunction_Elements, TransferFunction_Attributes> {
  protected _getter = TransferFunction_AttributeGetter;
  protected _setter = TransferFunction_AttributeSetter;
  protected _interpolator = TransferFunction_AttributeInterpolator;
}

export interface ComponentTransfer_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export const ComponentTransfer_AttributeGetter: AttributeGetter<ComponentTransfer_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
};

export const ComponentTransfer_AttributeSetter: AttributeSetter<ComponentTransfer_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
};

export const ComponentTransfer_AttributeInterpolator: AttributeInterpolator<ComponentTransfer_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
};

export class ComponentTransfer_Primitive extends AbstractFilterPrimitive<SVGFEComponentTransferElement, ComponentTransfer_Attributes> {
  protected _getter = ComponentTransfer_AttributeGetter;
  protected _setter = ComponentTransfer_AttributeSetter;
  protected _interpolator = ComponentTransfer_AttributeInterpolator;
}
