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

interface LengthWithUnit {
  readonly value: number;
  readonly unit: LengthUnit;
  valueOf(): number;
  toString(): string;
}

const LengthWithUnitPrototype = {
  valueOf(this: LengthWithUnit) {
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
