import { Matrix, matrixParser, matrixSerializer } from "../../attributes";
import { Length, None, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { AttributeGetter, booleanParser, numberParser } from "../../attributes/getter";
import { AttributeInterpolator, d3BypassTweenBuilder, numberParsedTweenBuilder, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser } from "../../attributes/literal";
import { NumberOptionalNumber, numberOptionalNumberParser, numberOptionalNumberSerializer, numberOptionalNumberTweenBuilder } from "../../attributes/number-optional-number";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../attributes/point";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface ConvolveMatrix_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
  order: NumberOptionalNumber;
  kernelMatrix: Matrix;
  divisor: number;
  bias: number;
  targetX: Length;
  targetY: Length;
  target: Point;
  edgeMode: "duplicate" | "wrap" | None;
  kernelUnitLength: NumberOptionalNumber;
  preserveAlpha: boolean;
}

const edgeModeLiterals = ["duplicate", "wrap", "none"] as const;

export const ConvolveMatrix_AttributeGetter: AttributeGetter<ConvolveMatrix_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
  order: numberOptionalNumberParser,
  kernelMatrix: matrixParser,
  divisor: numberParser,
  bias: numberParser,
  targetX: numberOrDimensionParser,
  targetY: numberOrDimensionParser,
  target: buildPointCompositeParser("targetX", "targetY"),
  edgeMode: buildStringLiteralParser(edgeModeLiterals, "none"),
  kernelUnitLength: numberOptionalNumberParser,
  preserveAlpha: booleanParser,
};

export const ConvolveMatrix_AttributeSetter: AttributeSetter<ConvolveMatrix_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
  order: numberOptionalNumberSerializer,
  kernelMatrix: matrixSerializer,
  divisor: defaultSerializer,
  bias: defaultSerializer,
  targetX: numberOrDimensionSerializer,
  targetY: numberOrDimensionSerializer,
  target: buildPointCompositeSerializer("targetX", "targetY"),
  edgeMode: defaultSerializer,
  kernelUnitLength: numberOptionalNumberSerializer,
  preserveAlpha: defaultSerializer,
};

export const ConvolveMatrix_AttributeInterpolator: AttributeInterpolator<ConvolveMatrix_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
  order: numberOptionalNumberTweenBuilder,
  kernelMatrix: unsupportedTweenBuilder,
  divisor: numberParsedTweenBuilder,
  bias: numberParsedTweenBuilder,
  targetX: d3BypassTweenBuilder,
  targetY: d3BypassTweenBuilder,
  target: pointTweenBuilder,
  edgeMode: unsupportedTweenBuilder,
  kernelUnitLength: numberOptionalNumberTweenBuilder,
  preserveAlpha: unsupportedTweenBuilder,
};

export class ConvolveMatrix_Primitive extends AbstractFilterPrimitive<SVGFEConvolveMatrixElement, ConvolveMatrix_Attributes> {
  protected _getter = ConvolveMatrix_AttributeGetter;
  protected _setter = ConvolveMatrix_AttributeSetter;
  protected _interpolator = ConvolveMatrix_AttributeInterpolator;
}
