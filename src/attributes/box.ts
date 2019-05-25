import { Length } from ".";
import { buildParserFromCompositions, buildSerializerFromDecompositions } from "./composite";
import { asNativeParser, ManualAttributeParser } from "./getter";
import { d3BypassTweenBuilder } from "./interpolator";
import { asNativeSerializer, ManualAttributeSerializer } from "./setter";

export interface Box {
  x: Length;
  y: Length;
  width: Length;
  height: Length;
}

export function box(x: Length = 0, y: Length = 0, width: Length = 0, height: Length = 0): Box {
  return { x, y, width, height };
}

export function isBox(value: any): value is Box {
  return typeof value === "object" && "x" in value && "y" in value && "width" in value && "height" in value;
}

export const boxParser = asNativeParser<Box>((repr: string | null) => {
  if (repr !== null) {
    const toks = repr.split(/\s/);
    return {
      x: parseFloat(toks[0]),
      y: parseFloat(toks[1]),
      width: parseFloat(toks[2]),
      height: parseFloat(toks[3]),
    };
  } else {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
});

export function buildBoxCompositeParser(xName: string, yName: string, widthName: string, heightName: string): ManualAttributeParser<Box> {
  return buildParserFromCompositions(box, [
    [xName, (repr: string | null) => parseFloat(repr || "")],
    [yName, (repr: string | null) => parseFloat(repr || "")],
    [widthName, (repr: string | null) => parseFloat(repr || "")],
    [heightName, (repr: string | null) => parseFloat(repr || "")],
  ]);
}

export const boxSerializer = asNativeSerializer((value: Box) => {
  return [value.x, value.y, value.width, value.height].join(" ");
});

export function buildBoxCompositeSerializer(xName: string, yName: string, widthName: string, heightName: string): ManualAttributeSerializer<Box> {
  return buildSerializerFromDecompositions([
    (value) => [xName, String(value.x)],
    (value) => [yName, String(value.y)],
    (value) => [widthName, String(value.width)],
    (value) => [heightName, String(value.height)],
  ]);
}

export const boxTweenBuilder = d3BypassTweenBuilder;
