import { interpolateTransformSvg } from "d3-interpolate";
import { arrayParser, arraySerializer } from "./array";
import { BaseAttributes } from "./base";
import { asNativeParser, AttributeGetter, ManualAttributeParser, NativeAttributeParser } from "./getter";
import { asNativeBypassTweenBuilder, AttributeInterpolator, AttributeTweenBuilder, unsupportedTweenBuilder } from "./interpolator";
import { buildPartialParser, buildPartialSerializer } from "./partial";
import { asNativeSerializer, AttributeSetter, ManualAttributeSerializer, NativeAttributeSerializer } from "./setter";

export type TransformFunction = "matrix" | "translate" | "rotate" | "scale" | "skewX" | "skewY";

interface TransformFunctionArgLength {
  matrix: [number, number, number, number, number, number];
  translate: [number, number?];
  rotate: [number, number?, number?];
  scale: [number, number?];
  skewX: [number];
  skewY: [number];
}

export interface Transform<FUNC extends TransformFunction = TransformFunction> {
  func: FUNC;
  args: TransformFunctionArgLength[FUNC];
}

export function matrix(a: number = 1, b: number = 0, c: number = 0, d: number = 0, e: number = 1, f: number = 0): Transform<"matrix"> {
  return { func: "matrix", args: [a, b, c, d, e, f] };
}

export function matrixFromDOM(mat: DOMMatrix): Transform<"matrix"> {
  return { func: "matrix", args: [mat.a, mat.b, mat.c, mat.d, mat.e, mat.f] };
}

export function isMatrix(tf: Transform): tf is Transform<"matrix"> {
  return tf.func === "matrix" && tf.args.length === 6;
}

export function translate(x: number = 0, y: number = 0): Transform<"translate"> {
  return { func: "translate", args: [x, y] };
}

export function isTranslate(tf: Transform): tf is Transform<"translate"> {
  return tf.func === "translate" && (tf.args.length === 1 || tf.args.length === 2);
}

export function rotate(a: number = 0, x: number = 0, y: number = 0): Transform<"rotate"> {
  return { func: "rotate", args: [a, x, y] };
}

export function isRotate(tf: Transform): tf is Transform<"rotate"> {
  return tf.func === "rotate" && (tf.args.length === 1 || tf.args.length === 2 || tf.args.length === 3);
}

export function scale(x: number = 1, y: number = x): Transform<"scale"> {
  return { func: "scale", args: [x, y] };
}

export function isScale(tf: Transform): tf is Transform<"scale"> {
  return tf.func === "scale" && (tf.args.length === 1 || tf.args.length === 2);
}

export function skewX(a: number = 0): Transform<"skewX"> {
  return { func: "skewX", args: [a] };
}

export function isSkewX(tf: Transform): tf is Transform<"skewX"> {
  return tf.func === "skewX" && tf.args.length === 1;
}

export function skewY(a: number = 0): Transform<"skewY"> {
  return { func: "skewY", args: [a] };
}

export function isSkewY(tf: Transform): tf is Transform<"skewY"> {
  return tf.func === "skewY" && tf.args.length === 1;
}

export function isTransform(value: any): value is Transform {
  return "func" in value && typeof value.func === "string" && "args" in value && Array.isArray(value.args);
}

export const transformParser = asNativeParser<Transform>((repr: string | null): Transform => {
  if (repr === null) {
    return matrix();
  }
  const pivot = repr.indexOf("(");
  const func = repr.substring(0, pivot) as TransformFunction;
  const args = repr.substring(pivot + 1, repr.length - 1).split(/\s*,\s*|\s+/i).map(parseFloat) as Transform["args"];
  return { func, args };
});

export function buildTransformPartialParser<FUNC extends TransformFunction>(root: string, defaultValue: () => Transform<FUNC>): ManualAttributeParser<Transform<FUNC>> {
  return buildPartialParser(root, (name: string, repr: string | null) => {
    if (!repr) {
      return defaultValue();
    }
    const func = name.substring(root.length + 1) as FUNC;
    const idx = repr.indexOf(func);
    if (idx < 0) {
      return defaultValue();
    }
    const startArgIdx = idx + func.length + 1;
    const endArgIdx = repr.indexOf(")", startArgIdx);
    const args = repr.substring(startArgIdx, endArgIdx).split(/\s*,\s*|\s+/i).map(parseFloat) as Transform["args"];
    return { func, args };
  });
}

export const transformSerializer = asNativeSerializer((value: Transform) => `${value.func}(${value.args.join(" ")})`);

export function buildTransformPartialSerializer(root: string): ManualAttributeSerializer<Transform> {
  return buildPartialSerializer(root, (name: string, oldRepr: string | null, value: Transform) => {
    const newSubRepr = transformSerializer(value);
    if (!oldRepr) {
      return newSubRepr;
    }
    const func = name.substring(root.length + 1) as TransformFunction;
    const idx = oldRepr.indexOf(func);
    if (idx < 0) {
      return `${oldRepr} ${newSubRepr}`;
    }
    const preOldRepr = oldRepr.substring(0, idx);
    const endIdx = oldRepr.indexOf(")", idx);
    const postOldRepr = oldRepr.substring(endIdx + 1);
    return `${preOldRepr} ${newSubRepr} ${postOldRepr}`;
  });
}

export const defaultTransformPartialSerializer = buildTransformPartialSerializer("transform");

export const transformTweenBuilder: AttributeTweenBuilder<Transform> = asNativeBypassTweenBuilder((a, b) => interpolateTransformSvg(a || "", b || ""));

export type TransformList = Transform[];

export const transformListParser: NativeAttributeParser<TransformList> = arrayParser(transformParser);

export const transformListSerializer: NativeAttributeSerializer<TransformList> = arraySerializer(transformSerializer);

export const transformListTweenBuilder: AttributeTweenBuilder<TransformList> = asNativeBypassTweenBuilder((a, b) => interpolateTransformSvg(a || "", b || ""));

export interface Transformable extends BaseAttributes {
  "transform.matrix": Transform<"matrix">;
  "transform.translate": Transform<"translate">;
  "transform.scale": Transform<"scale">;
  "transform.rotate": Transform<"rotate">;
  "transform.skewX": Transform<"skewX">;
  "transform.skewY": Transform<"skewY">;
  transform: TransformList;
}

export const Transformable_AttributeGetter: AttributeGetter<Transformable> = {
  "transform.matrix": buildTransformPartialParser("transform", matrix),
  "transform.translate": buildTransformPartialParser("transform", translate),
  "transform.scale": buildTransformPartialParser("transform", scale),
  "transform.rotate": buildTransformPartialParser("transform", rotate),
  "transform.skewX": buildTransformPartialParser("transform", skewX),
  "transform.skewY": buildTransformPartialParser("transform", skewY),
  transform: transformListParser,
};

export const Transformable_AttributeSetter: AttributeSetter<Transformable> = {
  "transform.matrix": defaultTransformPartialSerializer,
  "transform.translate": defaultTransformPartialSerializer,
  "transform.scale": defaultTransformPartialSerializer,
  "transform.rotate": defaultTransformPartialSerializer,
  "transform.skewX": defaultTransformPartialSerializer,
  "transform.skewY": defaultTransformPartialSerializer,
  transform: transformListSerializer,
};

export const Transformable_AttributeInterpolator: AttributeInterpolator<Transformable> = {
  "transform.matrix": unsupportedTweenBuilder,
  "transform.translate": unsupportedTweenBuilder,
  "transform.scale": unsupportedTweenBuilder,
  "transform.rotate": unsupportedTweenBuilder,
  "transform.skewX": unsupportedTweenBuilder,
  "transform.skewY": unsupportedTweenBuilder,
  transform: transformListTweenBuilder,
};
