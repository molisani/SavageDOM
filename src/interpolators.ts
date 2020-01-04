import { getAttribute } from "./attributes";
import { HSL, hsl, isColor, isColorString, isRGB, parseColorString, RGB, rgb } from "./colors";
import { composeMatrix, decomposeMatrix, isTransform, Matrix, rotate, Rotate, scale, Scale, skewX, SkewX, skewY, SkewY, Transform, translate, Translate } from "./transforms";
import { assert, isNumber, isTypedArray } from "./ts-util";
import { Angle, isAbsoluteLength, isAngle, isLength, isLengthWithUnit, isPoint, length, Length, point, Point } from "./types";

const lerp = (a: number, b: number, t: number) => {
  return (a * (1 - t)) + (b * t);
};

const interpolateAngle = (a: Angle, b: Angle, t: number): Angle => {
  const aDegrees = a.valueOf();
  const bDegrees = b.valueOf();
  const shortestAngle = ((((bDegrees - aDegrees) % 360) + 540) % 360) - 180;
  return aDegrees + (shortestAngle * t) % 360;
}

const interpolateLength = (a: Length, b: Length, t: number): Length => {
  const aLengthWithUnit = isLengthWithUnit(a) ? a : length(a, "px");
  const bLengthWithUnit = isLengthWithUnit(b) ? b : length(b, "px");
  if (isAbsoluteLength(aLengthWithUnit)) {
    return lerp(aLengthWithUnit.valueOf(), bLengthWithUnit.valueOf(), t);
  } else if (aLengthWithUnit.unit === bLengthWithUnit.unit) {
    return length(lerp(aLengthWithUnit.value, bLengthWithUnit.value, t), aLengthWithUnit.unit);
  }
  throw new Error(`Cannot interpolate between ${aLengthWithUnit.unit} and ${bLengthWithUnit.unit}`);
};

const interpolatePoint = (a: Point, b: Point, t: number) => {
  return point(lerp(a.x, b.x, t), lerp(b.x, b.y, t));
};

const interpolateRGB = (a: RGB, b: RGB, t: number) => {
  return rgb(lerp(a.r, b.r, t), lerp(a.g, b.g, t), lerp(a.b, b.b, t), lerp(a.a || 1, b.a || 1, t));
};

const interpolateHSL = (a: HSL, b: HSL, t: number) => {
  return hsl(interpolateAngle(a.h, b.h, t), lerp(a.s, b.s, t), lerp(a.l, b.l, t), lerp(a.a || 1, b.a || 1, t));
};

function interpolateTranslate(a: Translate, b: Translate, t: number) {
  const tx = lerp(a.tx, b.tx, t);
  const ty = lerp(a.ty, b.ty, t);
  return translate(tx, ty);
}

function interpolateScale(a: Scale, b: Scale, t: number) {
  const sx = lerp(a.sx, b.sx, t);
  const sy = lerp(a.sy, b.sy, t);
  return scale(sx, sy);
}

function interpolateRotate(a: Rotate, b: Rotate, t: number) {
  const angle = lerp(a.angle.valueOf(), b.angle.valueOf(), t);
  const cx = lerp(a.cx, b.cx, t);
  const cy = lerp(a.cy, b.cy, t);
  return rotate(angle, cx, cy);
}

function interpolateSkewX(a: SkewX, b: SkewX, t: number): Transform {
  return skewX(lerp(a.angle.valueOf(), b.angle.valueOf(), t));
}

function interpolateSkewY(a: SkewY, b: SkewY, t: number): Transform {
  return skewY(lerp(a.angle.valueOf(), b.angle.valueOf(), t));
}

function interpolateMatrix(a: Matrix, b: Matrix, t: number) {
  const [aTranslate, aRotate, aScale] = decomposeMatrix(a);
  const [bTranslate, bRotate, bScale] = decomposeMatrix(b);
  const out = composeMatrix([
    interpolateTranslate(aTranslate, bTranslate, t),
    interpolateRotate(aRotate, bRotate, t),
    interpolateScale(aScale, bScale, t),
  ]);
  return out;
}

function interpolateTransform(a: Transform, b: Transform, t: number): Transform {
  switch (a.type) {
    case "matrix": {
      assert(a.type === b.type);
      return interpolateMatrix(a, b, t);
    }
    case "translate": {
      assert(a.type === b.type);
      return interpolateTranslate(a, b, t);
    }
    case "scale": {
      assert(a.type === b.type);
      return interpolateScale(a, b, t);
    }
    case "rotate": {
      assert(a.type === b.type);
      return interpolateRotate(a, b, t);
    }
    case "skewX": {
      assert(a.type === b.type);
      return interpolateSkewX(a, b, t);
    }
    case "skewY": {
      assert(a.type === b.type);
      return interpolateSkewY(a, b, t);
    }
  }
}

function interpolateArray<T>(interpolateItem: (a: T, b: T, t: number) => T, a: readonly T[], b: readonly T[], t: number) {
  const arr: T[] = [];
  for (let i = 0; i < a.length; ++i) {
    arr[i] = interpolateItem(a[i], b[i], t)
  }
  return arr;
}

type Interpolator<T> = (t: number) => T;

export type SVGPropertyInterpolators<PROPS> = {
  [K in keyof PROPS]: Interpolator<PROPS[K]>;
};

export function getInterpolator<ELEMENT extends SVGElement>(element: ELEMENT, key: keyof ELEMENT, target: any): Interpolator<any> {
  const current = getAttribute(element, key);
  switch (current[0]) {
    case "boolean": {
      assert(typeof target === "boolean");
      return (t) => (t < 0.5) ? current[1] : target;
    }
    case "number": {
      assert(typeof target === "number");
      return lerp.bind(void 0, current[1], target);
    }
    case "angle": {
      assert(isAngle(target));
      return interpolateAngle.bind(void 0, current[1], target);
    }
    case "length": {
      assert(isLength(target));
      return interpolateLength.bind(void 0, current[1], target);
    }
    case "color-string": {
      assert(isColor(target));
      const currentColor = parseColorString(current[1]);
      const targetColor = isColorString(target) ? parseColorString(target) : target;
      if (isRGB(targetColor)) {
        return interpolateRGB.bind(void 0, currentColor.asRGB(), targetColor);
      } else {
        return interpolateHSL.bind(void 0, currentColor.asHSL(), targetColor);
      }
    }
    case "length-array": {
      assert(isTypedArray(target, isLength));
      assert(current[1].length === target.length);
      return (t: number) => interpolateArray(interpolateLength, current[1], target, t);
    }
    case "number-array": {
      assert(isTypedArray(target, isNumber));
      assert(current[1].length === target.length);
      return (t: number) => interpolateArray(lerp, current[1], target, t);
    }
    case "point-array": {
      assert(isTypedArray(target, isPoint));
      assert(current[1].length === target.length);
      return (t: number) => interpolateArray(interpolatePoint, current[1], target, t);
    }
    case "transform-array": {
      assert(isTypedArray(target, isTransform));
      assert(current[1].length === target.length);
      return (t: number) => interpolateArray(interpolateTransform, current[1], target, t);
    }
    default: throw new Error(`Interpolation not supported for "${current[0]}"`);
  }
}
