import { asNativeParser } from "./getter";
import { d3BypassTweenBuilder } from "./interpolator";
import { asNativeSerializer } from "./setter";

export interface NumberOptionalNumber {
  n: number;
  o?: number;
}

export const numberOptionalNumberParser = asNativeParser<NumberOptionalNumber>((repr: string | null) => {
  if (repr !== null) {
    const toks = repr.split(/\s?,\s?/);
    if (toks.length === 1) {
      return { n: parseFloat(toks[0]) };
    } else {
      return { n: parseFloat(toks[0]), o: parseFloat(toks[1]) };
    }
  } else {
    return { n: 0 };
  }
});

export const numberOptionalNumberSerializer = asNativeSerializer((value: NumberOptionalNumber) => {
  return (value.o !== undefined) ? `${value.n},${value.o}` : value.n.toString();
});

export const numberOptionalNumberTweenBuilder = d3BypassTweenBuilder;
