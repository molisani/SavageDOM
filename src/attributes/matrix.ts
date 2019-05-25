import { asNativeParser } from "./getter";
import { d3BypassTweenBuilder } from "./interpolator";
import { asNativeSerializer } from "./setter";

export interface Matrix<X = number[], Y = X[]> {
  values: Y;
}

export const matrixParser = asNativeParser<Matrix>((repr: string | null) => {
  if (repr !== null) {
    return { values: repr.split("\t").map((y) => y.split(/\s/).map(parseFloat)) };
  } else {
    return { values: [] };
  }
});

export const matrixSerializer = asNativeSerializer((value: Matrix) => {
  return value.values.map((y) => y.join(" ")).join("\t");
});

export const matrixTweenBuilder = d3BypassTweenBuilder;
