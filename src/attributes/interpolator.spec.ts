import { expect } from "chai";
import { ParsedAttributeTweenBuilder } from "./interpolator";

export type AttributeTweenTest<T> = [number, T];

export type ParsedAttributeTweenBuilderTest<T> = [string, [T, T], readonly AttributeTweenTest<T>[]];

export function runNativeTweenBuilderTests<T>(desc: string, tweenBuilder: ParsedAttributeTweenBuilder<T>, serializerTests: readonly ParsedAttributeTweenBuilderTest<T>[]) {
  describe(desc, () => {
    for (const [testDesc, values, tests] of serializerTests) {
      describe(testDesc, () => {
        const tween = tweenBuilder(...values);
        for (const [t, expected] of tests) {
          it(`${(t * 100).toFixed(0)}%`, () => {
            const actual = tween(t);
            expect(actual).to.deep.equal(expected);
          });
        }
      });
    }
  });
}
