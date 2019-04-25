import { Element } from "../element";
import { BaseAttributes } from "./base";

export type AttributeNullableStringParser<T> = (repr: string | null) => T;

export interface NativeAttributeParser<T> extends AttributeNullableStringParser<T> {
  type: "native";
}

export function asNativeParser<T>(parser: AttributeNullableStringParser<T>): NativeAttributeParser<T> {
  return Object.assign(parser, { type: "native" as const });
}

type _AttributeManualParser<T> = (element: Element<SVGElement>, name: string) => T;

export interface ManualAttributeParser<T> extends _AttributeManualParser<T> {
  type: "manual";
}

export function asManualParser<T>(parser: _AttributeManualParser<T>): ManualAttributeParser<T> {
  return Object.assign(parser, { type: "manual" as const });
}

export type AttributeParser<T> = NativeAttributeParser<T> | ManualAttributeParser<T>;

export type AttributeGetter<ATTRIBUTES extends BaseAttributes> = {
  [Attr in keyof ATTRIBUTES]-?: AttributeParser<ATTRIBUTES[Attr]>;
};

export const stringParser = asNativeParser((repr: string | null) => repr || "");

export const numberParser = asNativeParser((repr: string | null): number => Number(repr));

export const booleanParser = asNativeParser((repr: string | null) => Boolean(repr));

export const anyParser = asNativeParser((repr: string | null): any => repr);

export function withDefault<T>(parser: AttributeNullableStringParser<T | undefined | null>, defaultValue: T): NativeAttributeParser<T> {
  return asNativeParser((repr: string | null) => {
    const parsed = parser(repr);
    if (parsed === null || parsed === void 0) {
      return defaultValue;
    }
    return parsed;
  });
}
