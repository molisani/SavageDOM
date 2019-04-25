import { asNativeParser, NativeAttributeParser } from "./getter";
import { asNativeSerializer, NativeAttributeSerializer } from "./setter";

export function buildStringLiteralParser<T extends string>(literalValues: readonly T[]): NativeAttributeParser<T | undefined>;
export function buildStringLiteralParser<T extends string>(literalValues: readonly T[], defaultValue?: T): NativeAttributeParser<T>;
export function buildStringLiteralParser<T extends string>(literalValues: readonly T[], defaultValue?: T): NativeAttributeParser<T | undefined> {
  const values = new Set<T>(literalValues);
  const isLiteral = (repr: string): repr is T => values.has(repr as T);
  return asNativeParser((repr: string | null) => {
    if (repr && isLiteral(repr)) {
      return repr;
    }
    return defaultValue;
  });
}

export function buildLiteralUnionParser<T, L>(valueParser: (repr: string | null) => T, literalParser: (repr: string | null) => L | undefined): NativeAttributeParser<T | L> {
  return asNativeParser((repr: string | null) => {
    const literal = literalParser(repr);
    if (literal !== void 0) {
      return literal;
    }
    return valueParser(repr);
  });
}

export function buildStringLiteralUnionParser<T, L extends string>(valueParser: (repr: string | null) => T, literalValues: readonly L[]): NativeAttributeParser<T | L> {
  const values = new Set<L>(literalValues);
  const isLiteral = (repr: string): repr is L => values.has(repr as L);
  return buildLiteralUnionParser(valueParser, (repr: string | null) => {
    if (repr && isLiteral(repr)) {
      return repr;
    }
  });
}

export function buildStringLiteralSerializer<T extends string>(literalValues: readonly T[], defaultRepr: T): NativeAttributeSerializer<T> {
  const values = new Set<T>(literalValues);
  return asNativeSerializer((value: T) => {
    if (values.has(value)) {
      return value;
    }
    return defaultRepr;
  });
}

export function buildStringLiteralUnionSerializer<T, L extends string>(valueSerializer: (value: T) => string, literalValues: readonly L[]): NativeAttributeSerializer<T | L> {
  const values = new Set<L>(literalValues);
  const isLiteral = (value: T | L): value is L => values.has(value as any);
  return asNativeSerializer((value: T | L) => {
    if (isLiteral(value)) {
      return value;
    }
    return valueSerializer(value);
  });
}
