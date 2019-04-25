import { HasOverflow, HasOverflow_AttributeGetter, HasOverflow_AttributeInterpolator, HasOverflow_AttributeSetter, Inherit, Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { Box, boxParser, buildBoxCompositeParser, buildBoxCompositeSerializer } from "../../attributes/box";
import { AttributeGetter, stringParser } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer, buildStringLiteralUnionParser, buildStringLiteralUnionSerializer } from "../../attributes/literal";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../../attributes/point";
import { PreserveAspectRatio, preserveAspectRatioParser, preserveAspectRatioSerializer } from "../../attributes/preserve-aspect-ratio";
import { AttributeSetter, defaultSerializer } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractRenderable, Graphics_AttributeGetter, Graphics_AttributeInterpolator, Graphics_Attributes, Graphics_AttributeSetter, Renderable_Events } from "../renderable";

export interface Image_Attributes extends Graphics_Attributes, HasOverflow {
  x: Length;
  y: Length;
  p: Point;
  width: Length;
  height: Length;
  "x:y:width:height": Box;
  href: string;
  preserveAspectRatio?: PreserveAspectRatio;
  viewBox?: Box;
  "color-profile": "auto" | "sRGB" | string | Inherit;
  "image-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
}

const imageRenderingLiterals = ["auto", "optimizeSpeed", "optimizeQuality", "inherit"] as const;

const Image_AttributeGetter: AttributeGetter<Image_Attributes> = {
  ...Graphics_AttributeGetter,
  ...HasOverflow_AttributeGetter,
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  p: buildPointCompositeParser("x", "y"),
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
  "x:y:width:height": buildBoxCompositeParser("x", "y", "width", "height"),
  href: stringParser,
  preserveAspectRatio: preserveAspectRatioParser,
  viewBox: boxParser,
  "color-profile": buildStringLiteralUnionParser(stringParser, ["auto", "sRGB"]),
  "image-rendering": buildStringLiteralParser(imageRenderingLiterals, "inherit"),
};

const Image_AttributeSetter: AttributeSetter<Image_Attributes> = {
  ...Graphics_AttributeSetter,
  ...HasOverflow_AttributeSetter,
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  p: buildPointCompositeSerializer("x", "y"),
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
  "x:y:width:height": buildBoxCompositeSerializer("x", "y", "width", "height"),
  href: defaultSerializer,
  preserveAspectRatio: preserveAspectRatioSerializer,
  viewBox: defaultSerializer,
  "color-profile": buildStringLiteralUnionSerializer(stringParser, ["auto", "sRGB"]),
  "image-rendering": buildStringLiteralSerializer(imageRenderingLiterals, "inherit"),
};

const Image_AttributeInterpolator: AttributeInterpolator<Image_Attributes> = {
  ...Graphics_AttributeInterpolator,
  ...HasOverflow_AttributeInterpolator,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  p: pointTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
  "x:y:width:height": unsupportedTweenBuilder,
  href: unsupportedTweenBuilder,
  preserveAspectRatio: unsupportedTweenBuilder,
  viewBox: unsupportedTweenBuilder,
  "color-profile": unsupportedTweenBuilder,
  "image-rendering": unsupportedTweenBuilder,
};

export interface Image_Events extends Renderable_Events {
  load: ProgressEvent;
}

export class Image extends AbstractRenderable<SVGImageElement, Image_Attributes, Image_Events> {
  public static async afterLoad(context: Context, href: string, attrs: Partial<Image_Attributes> = {}): Promise<Image> {
    const image = new Image(context, context.window.document.createElementNS(XMLNS.SVG, "image"), attrs);
    const onLoad = image.getEvent("load").toPromise();
    image.setAttribute("href", href);
    await onLoad;
    return image;
  }
  protected _getter = Image_AttributeGetter;
  protected _setter = Image_AttributeSetter;
  protected _interpolator = Image_AttributeInterpolator;
}
