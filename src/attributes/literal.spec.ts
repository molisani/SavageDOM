import { AttributeTestSuite } from "../util/test-env";

export function buildLiteralTest<T extends string>(literalValues: readonly T[], defaultValue?: T): AttributeTestSuite<T> {
  const values: [string, T, T?][] = literalValues.map((value): [string, T] => [`"${value}"`, value]);
  if (defaultValue !== undefined) {
    values.push(["default", "" as T, defaultValue]);
  }
  return { type: "string (literal)", values };
}
