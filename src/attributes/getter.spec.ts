import { expect } from "chai";
import { NativeAttributeParser } from "./getter";

export type NativeAttributeParserTest<T> = [string | null, T];

export function runNativeParserTests<T>(desc: string, parser: NativeAttributeParser<T>, parserTests: readonly NativeAttributeParserTest<T>[]) {
  describe(`${desc} parser`, () => {
    for (const [repr, expected] of parserTests) {
      it(repr || "null", () => {
        const actual = parser(repr);
        expect(actual).to.deep.equal(expected);
      });
    }
  });
}
