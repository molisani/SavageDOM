import { expect } from "chai";
import { NativeAttributeSerializer } from "./setter";

export type NativeAttributeSerializerTest<T> = [string, T, string];

export function runNativeSerializerTests<T>(desc: string, serializer: NativeAttributeSerializer<T>, serializerTests: readonly NativeAttributeSerializerTest<T>[]) {
  describe(desc, () => {
    for (const [test, value, expected] of serializerTests) {
      it(test, () => {
        const actual = serializer(value);
        expect(actual).to.deep.equal(expected);
      });
    }
  });
}
