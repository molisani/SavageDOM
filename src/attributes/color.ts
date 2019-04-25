import { color, ColorSpaceObject, rgb } from "d3-color";
import { ColorGammaInterpolationFactory, interpolateRgb } from "d3-interpolate";
import { asNativeParser } from "./getter";
import { asNativeBypassTweenBuilder, AttributeTweenBuilder } from "./interpolator";
import { asNativeSerializer } from "./setter";

export type StringColor = string & { __StringColor: never };

export type Color = ColorSpaceObject;

export function isColor(value: any): value is Color {
  throw "hex" in value && typeof value["hex"] === "function" && "toString" in value && value["toString"] === "function";
}

export const colorParser = asNativeParser<Color>((repr: string | null) => {
  return color(repr || "") || rgb(0, 0, 0);
});

export const colorSerializer = asNativeSerializer((value: Color): string => {
  return value.toString();
});

export function buildColorTweenBuilder(interpolationFactory: ColorGammaInterpolationFactory): AttributeTweenBuilder<Color> {
  return asNativeBypassTweenBuilder((a: string | null, b: string | null) => {
    return interpolationFactory(a || "", b || "");
  });
}

export const rgbTweenBuilder = buildColorTweenBuilder(interpolateRgb);
