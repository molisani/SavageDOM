import { matrix, rotate, scale, skewX, skewY, Transform, translate } from "./transforms";
import { angle, Angle, AngleUnit, isAngleUnit, isLengthUnit, Length, length, LengthUnit, point, Point } from "./types";

const AngleTypeMap: { [lengthType: number]: AngleUnit } = {
  [SVGAngle.SVG_ANGLETYPE_DEG]: "deg",
  [SVGAngle.SVG_ANGLETYPE_RAD]: "rad",
  [SVGAngle.SVG_ANGLETYPE_GRAD]: "grad",
};

function fromSVGAngle(svg: SVGAngle): Angle {
  const value = svg.value;
  const unitType = svg.unitType;
  if (unitType === SVGAngle.SVG_ANGLETYPE_UNKNOWN || unitType === SVGAngle.SVG_ANGLETYPE_UNSPECIFIED) {
    return value;
  }
  return angle(value, AngleTypeMap[svg.unitType]);
}

const LengthTypeMap: { [lengthType: number]: LengthUnit } = {
  [SVGLength.SVG_LENGTHTYPE_PERCENTAGE]: "%",
  [SVGLength.SVG_LENGTHTYPE_EMS]: "em",
  [SVGLength.SVG_LENGTHTYPE_EXS]: "ex",
  [SVGLength.SVG_LENGTHTYPE_PX]: "px",
  [SVGLength.SVG_LENGTHTYPE_CM]: "cm",
  [SVGLength.SVG_LENGTHTYPE_MM]: "mm",
  [SVGLength.SVG_LENGTHTYPE_IN]: "in",
  [SVGLength.SVG_LENGTHTYPE_PT]: "pt",
  [SVGLength.SVG_LENGTHTYPE_PC]: "pc",
};

function fromSVGLength(svg: SVGLength): Length {
  const value = svg.value;
  const unitType = svg.unitType;
  if (unitType === SVGLength.SVG_LENGTHTYPE_UNKNOWN || unitType === SVGLength.SVG_LENGTHTYPE_NUMBER) {
    return value;
  }
  return length(value, LengthTypeMap[svg.unitType]);
}

function fromDOMPoint(dom: DOMPoint): Point {
  return point(dom.x, dom.y);
}

interface SVGListOf<T> {
  readonly numberOfItems: number;
  getItem(index: number): T;
}

function fromSVGTransform(svg: SVGTransform): Transform {
  const { a, b, c, d, e, f } = svg.matrix;
  switch (svg.type) {
    case SVGTransform.SVG_TRANSFORM_MATRIX:
      return matrix([a, b, c, d, e, f]);
    case SVGTransform.SVG_TRANSFORM_TRANSLATE:
      return translate(e, f);
    case SVGTransform.SVG_TRANSFORM_SCALE:
      return scale(a, d);
    case SVGTransform.SVG_TRANSFORM_ROTATE: {
      const radians = (svg.angle / 180) * Math.PI;
      let cx: number;
      let cy: number;
      if (svg.angle % 180 === 0) {
        cx = 0.5 * e;
        cy = 0.5 * f;
      } else {
        const halfCot = 1 / Math.tan(radians / 2);
        cx = 0.5 * (e - f * halfCot);
        cy = 0.5 * (e * halfCot + f);
      }
      return rotate(svg.angle, cx, cy);
    }
    case SVGTransform.SVG_TRANSFORM_SKEWX:
      return skewX(svg.angle);
    case SVGTransform.SVG_TRANSFORM_SKEWY:
      return skewY(svg.angle);
  }
  throw new Error(`Unknown SVGTransform type=${svg.type}`);
}

function* iterateList<T>(svg: SVGListOf<T>): Generator<T> {
  for (let i = 0; i < svg.numberOfItems; ++i) {
    yield svg.getItem(i);
  }
}

function fromSVGTransformList(svg: SVGTransformList): readonly Transform[] {
  return Array.from(iterateList(svg)).map(fromSVGTransform);
}

export function getAttribute<E extends SVGElement>(el: E, key: keyof E): any {
  const current = el[key];
  if (current instanceof SVGAnimatedBoolean || current instanceof SVGAnimatedInteger || current instanceof SVGAnimatedNumber || current instanceof SVGAnimatedString) {
    return current.baseVal;
  }
  if (current instanceof SVGAnimatedAngle) {
    return fromSVGAngle(current.baseVal);
  }
  if (current instanceof SVGAnimatedLength) {
    return fromSVGLength(current.baseVal);
  }
  if (current instanceof SVGAnimatedLengthList) {
    return Array.from(current.baseVal).map(fromSVGLength);
  }
  if (current instanceof SVGAnimatedNumberList) {
    return Array.from(current.baseVal).map((svg) => svg.value);
  }
  if (current instanceof SVGPointList) {
    return Array.from(current).map(fromDOMPoint);
  }
  if (current instanceof SVGAnimatedTransformList) {
    return fromSVGTransformList(current.baseVal);
  }
  if (key in el.style) {
    const styleValue = el.style[key as keyof CSSStyleDeclaration];
    if (key === "stroke-dasharray" && typeof styleValue === "string") {
      return styleValue.split(/\s+,?\s*|,\s*/).map((dash) => {
        const dashValue = parseFloat(dash);
        if (isNaN(dashValue)) {
          return 0;
        }
        const numberAsString = dashValue.toString();
        const suffix = dash.slice(0, numberAsString.length);
        if (isLengthUnit(suffix)) {
          return length(dashValue, suffix);
        }
        return dashValue;
      });
    }
    try {
      if (typeof styleValue === "string") {
        const styleNumberValue = parseFloat(styleValue);
        if (!isNaN(styleNumberValue)) {
          const numberAsString = styleNumberValue.toString();
          const suffix = styleValue.slice(0, numberAsString.length);
          if (isLengthUnit(suffix)) {
            return length(styleNumberValue, suffix);
          }
          if (isAngleUnit(suffix)) {
            return angle(styleNumberValue, suffix);
          }
          return styleNumberValue;
        }
      }
    } catch {
      // no-op
    }
    try {
      if (typeof styleValue === "string" && styleValue.startsWith("url(")) {
        const id = styleValue.slice(5, -1);
        const funciriElement = document.getElementById(id);
        if (funciriElement) {
          return funciriElement;
        }
      }
    } catch {
      // no-op
    }
    return styleValue;
  }
  throw new Error(`Querying attribute "${key}" is not currently supported through this API`);
}

export function setAttribute<E extends SVGElement>(el: E, key: keyof E, value: any): void {
  if (value instanceof SVGElement) {
    value = `url(#${value.id})`;
  }
  if (Array.isArray(value)) {
    el.setAttribute(key, value.map((val: any) => String(val)).join(" "));
  } else {
    el.setAttribute(key, String(value));
  }
}
