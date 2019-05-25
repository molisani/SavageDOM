import { interpolate } from "d3-interpolate";
import { BaseAttributes } from "./base";

export type AttributeTween<T> = (t: number) => T;

type _AttributeTweenBuilder<T> = (a: T, b: T) => AttributeTween<T>;

export interface ParsedAttributeTweenBuilder<T> extends _AttributeTweenBuilder<T> {
  bypass: false;
}

export function asParsedTweenBuilder<T>(tweenBuilder: _AttributeTweenBuilder<T>): ParsedAttributeTweenBuilder<T> {
  return Object.assign(tweenBuilder, { bypass: false as const });
}

export interface NativeBypassAttributeTweenBuilder extends _AttributeTweenBuilder<string | null> {
  bypass: true;
  type: "native";
}

export function asNativeBypassTweenBuilder(tweenBuilder: _AttributeTweenBuilder<string | null>): NativeBypassAttributeTweenBuilder {
  return Object.assign(tweenBuilder, { bypass: true as const, type: "native" as const });
}

export interface CSSBypassAttributeTweenBuilder extends _AttributeTweenBuilder<string> {
  bypass: true;
  type: "css";
}

export function asCSSBypassTweenBuilder(tweenBuilder: _AttributeTweenBuilder<string>): CSSBypassAttributeTweenBuilder {
  return Object.assign(tweenBuilder, { bypass: true as const, type: "css" as const });
}

export type AttributeTweenBuilder<T> = NativeBypassAttributeTweenBuilder | CSSBypassAttributeTweenBuilder | ParsedAttributeTweenBuilder<T>;

export type AttributeInterpolator<ATTRIBUTES extends BaseAttributes> = {
  [Attr in keyof ATTRIBUTES]-?: AttributeTweenBuilder<ATTRIBUTES[Attr]>;
};

export const unsupportedTweenBuilder = asParsedTweenBuilder<any>(() => { throw new Error("No tween builder supported for this attribute"); });

export const numberParsedTweenBuilder = asParsedTweenBuilder<number>(interpolate);

type d3InterpolateBaseType = number | string | Date | object;
type d3InterpolateType = d3InterpolateBaseType | d3InterpolateBaseType[];

export const d3ParsedTweenBuilder = asParsedTweenBuilder<d3InterpolateType>(interpolate);

export const d3BypassTweenBuilder = asNativeBypassTweenBuilder(interpolate);
