
export type LengthUnit = "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%";

export function isLengthUnit(str: string): str is LengthUnit {
  switch (str) {
    case "em":
    case "ex":
    case "px":
    case "in":
    case "cm":
    case "mm":
    case "pt":
    case "pc":
    case "%":
      return true;
  }
  return false;
}

export type Length = number | {
  readonly lengthUnit: LengthUnit;
  valueOf(): number;
  toString(): string;
}

export function length(value: number, lengthUnit: LengthUnit): Length {
  return {
    valueOf: () => value,
    lengthUnit,
    toString: () => `${value}${lengthUnit}`,
  };
}

export type AngleUnit = "deg" | "grad" | "rad";

export function isAngleUnit(str: string): str is AngleUnit {
  switch (str) {
    case "deg":
    case "grad":
    case "rad":
      return true;
  }
  return false;
}

export type Angle = number | {
  readonly angleUnit: AngleUnit;
  valueOf(): number;
  toString(): string;
}

export function angle(value: number, angleUnit: AngleUnit): Angle {
  return {
    angleUnit,
    valueOf: () => value,
    toString: () => `${value}${angleUnit}`,
  };
}

export interface Point {
  readonly x: number;
  readonly y: number;
  toString(): string;
}

export function point(x: number, y: number): Point {
  return {
    x,
    y,
    toString: () => `${x} ${y}`,
  };
}
