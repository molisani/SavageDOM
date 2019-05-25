import { asManualParser, AttributeNullableStringParser, ManualAttributeParser } from "./getter";
import { asManualSerializer, ManualAttributeSerializer } from "./setter";

export type AttributeComposition<T> = [string, AttributeNullableStringParser<T>];

type MappedCompositions<ARR extends any[]> = {
  [I in keyof ARR]: AttributeComposition<ARR[I]>;
};

export function buildParserFromCompositions<T, ARGS extends any[]>(func: (...args: ARGS) => T, compositions: MappedCompositions<ARGS>): ManualAttributeParser<T> {
  return asManualParser((element, _name) => {
    const args = compositions.map(([compKey, compParser]) => {
      const repr = element.node.getAttribute(compKey);
      return compParser(repr);
    }) as ARGS;
    return func(...args);
  });
}

export type AttributeDecomposition<T> = (value: T) => [string, string];

export function buildSerializerFromDecompositions<T>(decompositions: AttributeDecomposition<T>[]): ManualAttributeSerializer<T> {
  return asManualSerializer((element, _name, value) => {
    for (const decomposition of decompositions) {
      const [decompKey, decompRepr] = decomposition(value);
      element.setAttribute(decompKey, decompRepr);
    }
  });
}
