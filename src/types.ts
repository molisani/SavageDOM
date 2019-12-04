
export type AbsoluteLengthUnit = "px" | "in" | "cm" | "mm" | "pt" | "pc";

export type RelativeLengthUnit = "ch" | "em" | "ex" | "rem";

export type ViewportLengthUnit = "vw" | "vh" | "vmin" | "vmax";

export type LengthUnit = AbsoluteLengthUnit | RelativeLengthUnit | ViewportLengthUnit | "%";

export function isAbsoluteLengthUnit(str: string): str is AbsoluteLengthUnit {
  switch (str) {
    case "px":
    case "in":
    case "cm":
    case "mm":
    case "pt":
    case "pc":
      return true;
  }
  return false;
}

export function isRelativeLengthUnit(str: string): str is RelativeLengthUnit {
  switch (str) {
    case "ch":
    case "em":
    case "ex":
    case "rem":
      return true;
  }
  return false;
}

export function isViewportLengthUnit(str: string): str is ViewportLengthUnit {
  switch (str) {
    case "vw":
    case "vh":
    case "vmin":
    case "vmax":
      return true;
  }
  return false;
}

export function isLengthUnit(str: string): str is LengthUnit {
  return isAbsoluteLengthUnit(str) || isRelativeLengthUnit(str) || isViewportLengthUnit(str) || str === "%";
}

interface LengthWithUnit<UNIT extends LengthUnit = LengthUnit> {
  readonly value: number;
  readonly unit: UNIT;
  valueOf(): number;
  toString(): string;
}

export function isAbsoluteLength(value: LengthWithUnit): value is LengthWithUnit<AbsoluteLengthUnit> {
  return isAbsoluteLengthUnit(value.unit);
}

export function isRelativeLength(value: LengthWithUnit): value is LengthWithUnit<RelativeLengthUnit> {
  return isRelativeLengthUnit(value.unit);
}

export function isViewportLength(value: LengthWithUnit): value is LengthWithUnit<ViewportLengthUnit> {
  return isViewportLengthUnit(value.unit);
}

const LengthWithUnitPrototype = {
  valueOf(this: LengthWithUnit) {
    if (isAbsoluteLength(this)) {
      switch (this.unit) {
        case "in": return this.value * 96;
        case "cm": return this.value * 37.795;
        case "mm": return this.value * 3.7795;
        case "pt": return this.value * 4 / 3;
        case "pc": return this.value * 16;
      }
    }
    return this.value;
  },
  toString(this: LengthWithUnit) {
    return `${this.value}${this.unit}`;
  },
};

export function length(value: number, unit: LengthUnit): LengthWithUnit {
  return Object.create(LengthWithUnitPrototype, {
    value: { value },
    unit: { value: unit },
  });
}

export type Length = number | LengthWithUnit;

export function isLengthWithUnit(value: unknown): value is LengthWithUnit {
  return typeof value === "object" && value !== null && LengthWithUnitPrototype.isPrototypeOf(value);
}

export function isPercentage(value: LengthWithUnit): value is LengthWithUnit<"%"> {
  return value.unit === "%";
}

export function isLength(value: unknown): value is Length {
  return (typeof value === "number") || isLengthWithUnit(value);
}

export type AngleUnit = "deg" | "grad" | "rad" | "turn";

export function isAngleUnit(str: string): str is AngleUnit {
  switch (str) {
    case "deg":
    case "grad":
    case "rad":
    case "turn":
      return true;
  }
  return false;
}

interface AngleWithUnit {
  readonly value: number;
  readonly unit: AngleUnit;
  valueOf(): number;
  toString(): string;
}

const AngleWithUnitPrototype = {
  valueOf(this: AngleWithUnit) {
    switch (this.unit) {
      case "deg": return this.value;
      case "grad": return this.value * 360 / 400;
      case "rad": return this.value * 180 / Math.PI;
      case "turn": return this.value * 360;
    }
  },
  toString(this: AngleWithUnit) {
    return `${this.value}${this.unit}`;
  },
};

export function angle(value: number, unit: AngleUnit): AngleWithUnit {
  return Object.create(AngleWithUnitPrototype, {
    value: { value },
    unit: { value: unit },
  });
}

export type Angle = number | AngleWithUnit;

export function isAngleWithUnit(value: unknown): value is AngleWithUnit {
  return typeof value === "object" && value !== null && AngleWithUnitPrototype.isPrototypeOf(value);
}

export function isAngle(value: unknown): value is Angle {
  return (typeof value === "number") || isAngleWithUnit(value);
}

export interface Point {
  readonly x: number;
  readonly y: number;
  toString(): string;
}

const PointPrototype = {
  toString(this: Point) {
    return `${this.x} ${this.y}`;
  }
};

export function point(x: number, y: number): Point {
  return Object.create(PointPrototype, {
    x: { value: x },
    y: { value: y },
  });
}

export function isPoint(value: unknown): value is Point {
  return typeof value === "object" && value !== null && PointPrototype.isPrototypeOf(value);
}
