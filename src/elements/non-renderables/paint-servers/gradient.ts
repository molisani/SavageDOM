import { Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter, CurrentColor, HasClass, HasClass_AttributeGetter, HasClass_AttributeInterpolator, HasClass_AttributeSetter, HasStyle, HasStyle_AttributeGetter, HasStyle_AttributeInterpolator, HasStyle_AttributeSetter, Inherit, numberParser, stringParser } from "../../../attributes/base";
import { Color, colorParser, colorSerializer } from "../../../attributes/color";
import { dimension, Percentage, percentageParser } from "../../../attributes/dimension";
import { asNativeParser, AttributeGetter } from "../../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer, buildStringLiteralUnionParser, buildStringLiteralUnionSerializer } from "../../../attributes/literal";
import { AttributeSetter, defaultSerializer } from "../../../attributes/setter";
import { buildTransformPartialParser, defaultTransformPartialSerializer, matrix, rotate, scale, skewX, skewY, Transform, TransformList, transformListParser, transformListSerializer, transformListTweenBuilder, translate } from "../../../attributes/transform";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { AbstractElement } from "../../../element";
import { NonRenderable_Events } from "../../non-renderable";
import { AbstractPaintServer, PaintServer_AttributeGetter, PaintServer_AttributeInterpolator, PaintServer_Attributes, PaintServer_AttributeSetter } from "../paint-server";

export interface Gradient_Attributes extends PaintServer_Attributes {
  gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
  "gradientTransform.matrix": Transform<"matrix">;
  "gradientTransform.translate": Transform<"translate">;
  "gradientTransform.scale": Transform<"scale">;
  "gradientTransform.rotate": Transform<"rotate">;
  "gradientTransform.skewX": Transform<"skewX">;
  "gradientTransform.skewY": Transform<"skewY">;
  gradientTransform: TransformList;
  spreadMethod: "pad" | "reflect" | "repeat";
  "xlink:href": string;
}

export const Gradient_AttributeGetter: AttributeGetter<Gradient_Attributes> = {
  ...PaintServer_AttributeGetter,
  gradientUnits: buildStringLiteralParser(["userSpaceOnUse", "objectBoundingBox"], "userSpaceOnUse"),
  "gradientTransform.matrix": buildTransformPartialParser("gradientTransform", matrix),
  "gradientTransform.translate": buildTransformPartialParser("gradientTransform", translate),
  "gradientTransform.scale": buildTransformPartialParser("gradientTransform", scale),
  "gradientTransform.rotate": buildTransformPartialParser("gradientTransform", rotate),
  "gradientTransform.skewX": buildTransformPartialParser("gradientTransform", skewX),
  "gradientTransform.skewY": buildTransformPartialParser("gradientTransform", skewY),
  gradientTransform: transformListParser,
  spreadMethod: buildStringLiteralParser(["pad", "reflect", "repeat"], "repeat"),
  "xlink:href": stringParser,
};

export const Gradient_AttributeSetter: AttributeSetter<Gradient_Attributes> = {
  ...PaintServer_AttributeSetter,
  gradientUnits: buildStringLiteralSerializer(["userSpaceOnUse", "objectBoundingBox"], "userSpaceOnUse"),
  "gradientTransform.matrix": defaultTransformPartialSerializer,
  "gradientTransform.translate": defaultTransformPartialSerializer,
  "gradientTransform.scale": defaultTransformPartialSerializer,
  "gradientTransform.rotate": defaultTransformPartialSerializer,
  "gradientTransform.skewX": defaultTransformPartialSerializer,
  "gradientTransform.skewY": defaultTransformPartialSerializer,
  gradientTransform: transformListSerializer,
  spreadMethod: buildStringLiteralSerializer(["pad", "reflect", "repeat"], "repeat"),
  "xlink:href": defaultSerializer,
};

export const Gradient_AttributeInterpolator: AttributeInterpolator<Gradient_Attributes> = {
  ...PaintServer_AttributeInterpolator,
  gradientUnits: unsupportedTweenBuilder,
  "gradientTransform.matrix": unsupportedTweenBuilder,
  "gradientTransform.translate": unsupportedTweenBuilder,
  "gradientTransform.scale": unsupportedTweenBuilder,
  "gradientTransform.rotate": unsupportedTweenBuilder,
  "gradientTransform.skewX": unsupportedTweenBuilder,
  "gradientTransform.skewY": unsupportedTweenBuilder,
  gradientTransform: transformListTweenBuilder,
  spreadMethod: unsupportedTweenBuilder,
  "xlink:href": unsupportedTweenBuilder,
};

export interface Stops {
  [offset: string]: "currentColor" | Color | Inherit;
}

export interface Stop_Attributes extends Core_Attributes, HasClass, HasStyle {
  offset: Percentage;
  "stop-color": CurrentColor | Color | Inherit;
  "stop-opacity": number | Inherit;
}

const Stop_AttributeGetter: AttributeGetter<Stop_Attributes> = {
  ...Core_AttributeGetter,
  ...HasClass_AttributeGetter,
  ...HasStyle_AttributeGetter,
  offset: asNativeParser(percentageParser),
  "stop-color": buildStringLiteralUnionParser<Color, CurrentColor | Inherit>(colorParser, ["currentColor", "inherit"]),
  "stop-opacity": buildStringLiteralUnionParser<number, Inherit>(numberParser, ["inherit"]),
};

const Stop_AttributeSetter: AttributeSetter<Stop_Attributes> = {
  ...Core_AttributeSetter,
  ...HasClass_AttributeSetter,
  ...HasStyle_AttributeSetter,
  offset: defaultSerializer,
  "stop-color": buildStringLiteralUnionSerializer(colorSerializer, ["currentColor", "inherit"]),
  "stop-opacity": buildStringLiteralUnionSerializer(defaultSerializer, ["inherit"]),
};

const Stop_AttributeInterpolator: AttributeInterpolator<Stop_Attributes> = {
  ...Core_AttributeInterpolator,
  ...HasClass_AttributeInterpolator,
  ...HasStyle_AttributeInterpolator,
  offset: unsupportedTweenBuilder,
  "stop-color": unsupportedTweenBuilder,
  "stop-opacity": unsupportedTweenBuilder,
};

export class Stop extends AbstractElement<SVGStopElement, Stop_Attributes, NonRenderable_Events> {
  protected _getter = Stop_AttributeGetter;
  protected _setter = Stop_AttributeSetter;
  protected _interpolator = Stop_AttributeInterpolator;
  constructor(context: Context, public offset: number, color: "currentColor" | Color | Inherit) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "stop"), {
      offset: dimension(offset * 100, "%"),
      "stop-color": color,
    });
  }
}

export abstract class AbstractGradient<ELEMENT extends SVGElement, ATTRIBUTES extends Gradient_Attributes> extends AbstractPaintServer<ELEMENT, ATTRIBUTES> {
  constructor(context: Context, el: ELEMENT, stops: Stops, attrs?: Partial<ATTRIBUTES>) {
    super(context, el, attrs);
    this.context.addDef(this);
    const stopArr: Stop[] = [];
    Object.keys(stops).forEach((offset) => {
      stopArr.push(new Stop(context, Number(offset), stops[offset]));
    });
    stopArr.sort((a, b) => {
      return a.offset - b.offset;
    });
    stopArr.forEach((stop) => this.add(stop));
  }
}
