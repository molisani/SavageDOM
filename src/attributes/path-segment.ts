import { interpolateArray } from "d3-interpolate";
import { arraySerializer } from "./array";
import { asNativeParser, AttributeParser } from "./getter";
import { asParsedTweenBuilder, AttributeTweenBuilder } from "./interpolator";
import { Point } from "./point";
import { asNativeSerializer, AttributeSerializer } from "./setter";

export type PathSegmentCommand = "M" | "m" | "L" | "l" | "H" | "h" | "V" | "v" | "C" | "c" | "S" | "s" | "Q" | "q" | "T" | "t" | "A" | "a" | "Z" | "z";

interface PathSegmentArgLength {
  M: [number, number];
  m: [number, number];
  L: [number, number];
  l: [number, number];
  H: [number];
  h: [number];
  V: [number];
  v: [number];
  C: [number, number, number, number, number, number];
  c: [number, number, number, number, number, number];
  S: [number, number, number, number];
  s: [number, number, number, number];
  Q: [number, number, number, number];
  q: [number, number, number, number];
  T: [number, number];
  t: [number, number];
  A: [number, number, number, number, number, number, number];
  a: [number, number, number, number, number, number, number];
  Z: [];
  z: [];
}

export interface PathSegment<COMMAND extends PathSegmentCommand = PathSegmentCommand> {
  command: COMMAND;
  args: PathSegmentArgLength[COMMAND];
}

export function moveTo(p: Point, rel: boolean = false): PathSegment<"m" | "M"> {
  return { command: (rel) ? "m" : "M", args: [p.x, p.y] };
}

export function isMoveTo(segment: PathSegment): segment is PathSegment<"m" | "M"> {
  return segment.command === "m" || segment.command === "M";
}

export function lineTo(p: Point, rel: boolean = false): PathSegment<"l" | "L"> {
  return { command: (rel) ? "l" : "L", args: [p.x, p.y] };
}

export function isLineTo(segment: PathSegment): segment is PathSegment<"l" | "L"> {
  return segment.command === "l" || segment.command === "L";
}

export function hLineTo(x: number, rel: boolean = false): PathSegment<"h" | "H"> {
  return { command: (rel) ? "h" : "H", args: [x] };
}

export function isHLineTo(segment: PathSegment): segment is PathSegment<"h" | "H"> {
  return segment.command === "h" || segment.command === "H";
}

export function vLineTo(y: number, rel: boolean = false): PathSegment<"v" | "V"> {
  return { command: (rel) ? "v" : "V", args: [y] };
}

export function isVLineTo(segment: PathSegment): segment is PathSegment<"v" | "V"> {
  return segment.command === "v" || segment.command === "V";
}

export function cubicCurveTo(c1: Point, c2: Point, p: Point, rel: boolean = false): PathSegment<"c" | "C"> {
  return { command: (rel) ? "c" : "C", args: [c1.x, c1.y, c2.x, c2.y, p.x, p.y] };
}

export function isCubicCurveTo(segment: PathSegment): segment is PathSegment<"c" | "C"> {
  return segment.command === "c" || segment.command === "C";
}

export function smoothCubicCurveTo(c2: Point, p: Point, rel: boolean = false): PathSegment<"s" | "S"> {
  return { command: (rel) ? "s" : "S", args: [c2.x, c2.y, p.x, p.y] };
}

export function isSmoothCubicCurveTo(segment: PathSegment): segment is PathSegment<"s" | "S"> {
  return segment.command === "s" || segment.command === "S";
}

export function quadCurveTo(c: Point, p: Point, rel: boolean = false): PathSegment<"q" | "Q"> {
  return { command: (rel) ? "q" : "Q", args: [c.x, c.y, p.x, p.y] };
}

export function isQuadCurveTo(segment: PathSegment): segment is PathSegment<"q" | "Q"> {
  return segment.command === "q" || segment.command === "Q";
}

export function smoothQuadCurveTo(p: Point, rel: boolean = false): PathSegment<"t" | "T"> {
  return { command: (rel) ? "t" : "T", args: [p.x, p.y] };
}

export function isSmoothQuadCurveTo(segment: PathSegment): segment is PathSegment<"t" | "T"> {
  return segment.command === "t" || segment.command === "T";
}

export function arcTo(r: Point, angle: number, largeArcFlag: 0 | 1, sweepFlag: 0 | 1, p: Point, rel: boolean = false): PathSegment<"a" | "A"> {
  return { command: (rel) ? "a" : "A", args: [r.x, r.y, angle, largeArcFlag, sweepFlag, p.x, p.y] };
}

export function isArcTo(segment: PathSegment): segment is PathSegment<"a" | "A"> {
  return segment.command === "a" || segment.command === "A";
}

export function closePath(): PathSegment<"Z"> {
  return { command: "Z", args: [] };
}

export function isClosePath(segment: PathSegment): segment is PathSegment<"z" | "Z"> {
  return segment.command === "z" || segment.command === "Z";
}

export const pathSegmentParser: AttributeParser<PathSegment> = asNativeParser((repr: string | null) => {
  if (!repr) {
    return closePath();
  }
  const command = repr.substr(0, 1) as PathSegmentCommand;
  const args = repr.substring(1).split(/\s*,\s*|\s+/i).map(parseFloat) as PathSegment["args"];
  return { command, args };
});

export const pathSegmentSerializer: AttributeSerializer<PathSegment> = asNativeSerializer((value: PathSegment) => {
  return [value.command, ...value.args].join(" ");
});

const PATH_SEGMENT_COMMAND_PATTERN = /^M|m|L|l|H|h|V|v|C|c|S|s|Q|q|T|t|A|a|Z|z/;

function* tokenizePathDef(repr: string): IterableIterator<PathSegmentCommand | number> {
  const tokens = repr.split(/\s*,\s*|\s+/i);
  for (let token of tokens) {
    if (PATH_SEGMENT_COMMAND_PATTERN.test(token)) {
      yield token.substr(0, 1) as PathSegmentCommand;
      token = token.substring(1);
    }
    if (token) {
      yield parseFloat(token);
    }
  }
}

function isCompletePathSegment(segment: PathSegment): boolean {
  switch (segment.command) {
    case "M": return segment.args.length === 2;
    case "m": return segment.args.length === 2;
    case "L": return segment.args.length === 2;
    case "l": return segment.args.length === 2;
    case "H": return segment.args.length === 1;
    case "h": return segment.args.length === 1;
    case "V": return segment.args.length === 1;
    case "v": return segment.args.length === 1;
    case "C": return segment.args.length === 6;
    case "c": return segment.args.length === 6;
    case "S": return segment.args.length === 4;
    case "s": return segment.args.length === 4;
    case "Q": return segment.args.length === 4;
    case "q": return segment.args.length === 4;
    case "T": return segment.args.length === 2;
    case "t": return segment.args.length === 2;
    case "A": return segment.args.length === 6;
    case "a": return segment.args.length === 6;
    case "Z": return segment.args.length === 0;
    case "z": return segment.args.length === 0;
  }
}

export const pathDefParser: AttributeParser<PathSegment[]> = asNativeParser((repr: string | null) => {
  if (!repr) {
    return [];
  }
  const segments: PathSegment[] = [];
  let current!: PathSegment;
  for (const token of tokenizePathDef(repr)) {
    if (typeof token === "string") {
      if (current) {
        segments.push(current);
      }
      current = { command: token, args: [] };
    } else if (isCompletePathSegment(current)) {
      segments.push(current);
      current = { command: current.command, args: [token] };
    } else {
      (current.args as number[]).push(token);
    }
  }
  segments.push(current);
  return segments;
});

export const pathDefSerializer: AttributeSerializer<PathSegment[]> = arraySerializer(pathSegmentSerializer);

export const pathDefTweenBuilder: AttributeTweenBuilder<PathSegment[]> = asParsedTweenBuilder(interpolateArray);
