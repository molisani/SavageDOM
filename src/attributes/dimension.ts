import { interpolate } from "d3-interpolate";
import { AttributeTween } from "./interpolator";

export type CSSAbsoluteUnit = "px" | "in" | "cm" | "mm" | "pt" | "pc";

export function isCSSAbosoluteLegnth(unit: DimensionUnit): unit is CSSAbsoluteUnit {
  switch (unit) {
    case "px":
    case "in":
    case "cm":
    case "mm":
    case "pt":
    case "pc":
      return true;
    default:
      return false;
  }
}

const ABSOLUTE_RATES: ReadonlyMap<CSSAbsoluteUnit, number> = new Map<CSSAbsoluteUnit, number>([
  ["px", 1],
  ["in", 96],
  ["cm", 254 / 96],
  ["mm", 25.4 / 96],
  ["pt", 3 / 4],
  ["pc", 9],
]);

export type CSSRelativeUnit = "em" | "ex";

export function isCSSRelativeLength(unit: DimensionUnit): unit is CSSRelativeUnit {
  switch (unit) {
    case "em":
    case "ex":
      return true;
    default:
      return false;
  }
}

export type CSSAngleUnit = "deg" | "grad" | "rad" | "turn";

export function isCSSAngleUnit(unit: DimensionUnit): unit is CSSAngleUnit {
  switch (unit) {
    case "deg":
    case "grad":
    case "rad":
    case "turn":
      return true;
    default:
      return false;
  }
}

const ANGLE_RATES: ReadonlyMap<CSSAngleUnit, number> = new Map<CSSAngleUnit, number>([
  ["deg", 1],
  ["grad", 9 / 10],
  ["rad", 100 / Math.PI],
  ["turn", 360],
]);

export type DimensionUnit = CSSAbsoluteUnit | CSSRelativeUnit | CSSAngleUnit | "%";

export type Dimension<UNIT extends DimensionUnit> = number & { unit: UNIT };

export type Percentage = Dimension<"%">;

export function dimension<UNIT extends DimensionUnit>(value: number, unit: UNIT): Dimension<UNIT> {
  return Object.assign(value, { unit });
}

export function isDimension(value: number | Dimension<DimensionUnit>): value is Dimension<DimensionUnit> {
  return typeof value === "object" && "unit" in value;
}

const DIMENSION_PATTERN = /(-?\d+|\d+\.\d+)(px|in|cm|mm|pt|pc|em|ex|deg|grad|rad|turn)/i;

export function extractDimension(repr: string): Dimension<DimensionUnit> | null {
  const result = DIMENSION_PATTERN.exec(repr || "");
  if (!result) {
    return null;
  }
  const value = Number(result[1]);
  const unit = result[2] as DimensionUnit;
  return dimension(value, unit);
}

export function dimensionParser(repr: string | null): Dimension<DimensionUnit> {
  return extractDimension(repr || "") || dimension(0, "px");
}

export function dimensionSerializer(value: Dimension<DimensionUnit>): string {
  return `${value}${value.unit}`;
}

export function percentageParser(repr: string | null): Percentage {
  return extractDimension(repr || "") as Percentage || dimension(0, "%");
}

export function convert<FROM extends DimensionUnit, TO extends DimensionUnit>(dim: Dimension<FROM>, unit: TO): Dimension<TO> {
  if (isCSSAbosoluteLegnth(dim.unit) && isCSSAbosoluteLegnth(unit)) {
    const fromRate = ABSOLUTE_RATES.get(dim.unit) || 1;
    const toRate = ABSOLUTE_RATES.get(unit) || 1;
    const scale = fromRate / toRate;
    return Object.assign(dim * scale, { unit });
  }
  if (isCSSAngleUnit(dim.unit) && isCSSAngleUnit(unit)) {
    const fromRate = ANGLE_RATES.get(dim.unit) || 1;
    const toRate = ANGLE_RATES.get(unit) || 1;
    const scale = fromRate / toRate;
    return Object.assign(dim * scale, { unit });
  }
  throw new Error(`Unsupported conversion from "${dim.unit}" to "${unit}"`);
}

export function dimensionTweenBuilder<UNIT extends DimensionUnit>(a: Dimension<UNIT>, b: Dimension<UNIT>): AttributeTween<Dimension<UNIT>> {
  const aConverted = convert(a, b.unit);
  const tween = interpolate(aConverted, b);
  return (t: number) => dimension(tween(t), b.unit);
}
