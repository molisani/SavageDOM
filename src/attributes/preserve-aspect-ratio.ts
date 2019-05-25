import { asNativeParser } from "./getter";
import { asNativeSerializer, NativeAttributeSerializer } from "./setter";

export interface PreserveAspectRatioAlign {
  x: "Min" | "Mid" | "Max";
  y: "Min" | "Mid" | "Max";
}

export interface PreserveAspectRatio {
  align?: PreserveAspectRatioAlign;
  meetOrSlice?: "meet" | "slice";
}

export function preserveAspectRatio(align: PreserveAspectRatioAlign = { x: "Mid", y: "Mid" }, meetOrSlice: "meet" | "slice" = "meet"): PreserveAspectRatio {
  return { align, meetOrSlice };
}

export function isPreserveAspectRatio(value: any): value is PreserveAspectRatio {
  return typeof value === "object";
}

const PRESERVE_ASPECT_RATIO_PATTERN = /x(Min|Mid|Max)Y(Min|Mid|Max)\s?(meet|slice)?/i;

export const preserveAspectRatioParser = asNativeParser<PreserveAspectRatio>((repr: string | null) => {
  if (repr === null) {
    return preserveAspectRatio();
  }
  if (repr === "none") {
    return {};
  }
  const result = PRESERVE_ASPECT_RATIO_PATTERN.exec(repr);
  if (result === null) {
    return preserveAspectRatio();
  }
  const x = result[1] as "Min" | "Mid" | "Max";
  const y = result[2] as "Min" | "Mid" | "Max";
  const meetOrSlice = result[3] as "meet" | "slice" | undefined;
  return preserveAspectRatio({ x, y }, meetOrSlice);
});

export const preserveAspectRatioSerializer: NativeAttributeSerializer<PreserveAspectRatio | undefined> = asNativeSerializer((value?: PreserveAspectRatio) => {
  if (!value) {
    return preserveAspectRatioSerializer(preserveAspectRatio());
  }
  if (!value.align) {
    return "none";
  }
  let str = `x${value.align.x}Y${value.align.y}`;
  if (value.meetOrSlice) {
    str += ` ${value.meetOrSlice}`;
  }
  return str;
});
