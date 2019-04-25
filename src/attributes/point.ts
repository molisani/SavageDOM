import { Length, numberOrDimensionParser, numberOrDimensionSerializer } from "./base";
import { buildParserFromCompositions, buildSerializerFromDecompositions } from "./composite";
import { asNativeParser, ManualAttributeParser } from "./getter";
import { d3BypassTweenBuilder } from "./interpolator";
import { asNativeSerializer, ManualAttributeSerializer } from "./setter";

export interface Point {
  x: Length;
  y: Length;
}

export function point(x: Length = 0, y: Length = 0): Point {
  return { x, y };
}

export function isPoint(value: any): value is Point {
  return typeof value === "object" && "x" in value && "y" in value;
}

export const pointParser = asNativeParser<Point>((repr: string | null) => {
  if (repr === null) {
    return point();
  }
  const toks = repr.split(/\s?,\s?/);
  return point(numberOrDimensionParser(toks[0]), numberOrDimensionParser(toks[1]));
});

export function buildPointCompositeParser(xName: string, yName: string): ManualAttributeParser<Point> {
  return buildParserFromCompositions(point, [
    [xName, (repr: string | null) => numberOrDimensionParser(repr)],
    [yName, (repr: string | null) => numberOrDimensionParser(repr)],
  ]);
}

export const pointSerializer = asNativeSerializer((value: Point) => {
  return `${numberOrDimensionSerializer(value.x)},${numberOrDimensionSerializer(value.y)}`;
});

export function buildPointCompositeSerializer(xName: string, yName: string): ManualAttributeSerializer<Point> {
  return buildSerializerFromDecompositions([
    (value) => [xName, String(value.x)],
    (value) => [yName, String(value.y)],
  ]);
}

export const pointTweenBuilder = d3BypassTweenBuilder;
