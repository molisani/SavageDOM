import { Angle } from "./types";

interface RGB {
  readonly type: "rgb";
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a?: number;
  toString(): string;
  asRGB(): RGB;
  asHSL(): HSL;
}

const RGBPrototype = {
  type: "rgb",
  toString(this: RGB) {
    if (typeof this.a === "number") {
      return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  },
  asRGB(this: RGB): RGB {
    return this;
  },
} as RGB;

export function rgb(r: number, g: number, b: number, a?: number): RGB {
  return Object.create(RGBPrototype, {
    r: { value: r },
    g: { value: g },
    b: { value: b },
    a: { value: a },
  });
}

interface HSL {
  readonly type: "hsl";
  readonly h: Angle;
  readonly s: number;
  readonly l: number;
  readonly a?: number;
  toString(): string;
  asRGB(): RGB;
  asHSL(): HSL;
}

const HSLPrototype = {
  type: "hsl",
  toString(this: HSL) {
    const saturation = this.s * 100;
    const lightness = this.l * 100;
    if (typeof this.a === "number") {
      return `hsla(${this.h.toString()}, ${saturation}%, ${lightness}%, ${this.a})`;
    }
    return `hsl(${this.h.toString()}, ${saturation}%, ${lightness}%)`;
  },
  asHSL(this: HSL): HSL {
    return this;
  },
} as HSL;

export function hsl(h: Angle, s: number, l: number, a?: number): HSL {
  return Object.create(HSLPrototype, {
    h: { value: h },
    s: { value: s },
    l: { value: l },
    a: { value: a },
  });
}

RGBPrototype.asHSL = function(this: RGB): HSL {
  const r = this.r / 255;
  const g = this.g / 255;
  const b = this.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number;
  let s: number;
  const range = max - min;
  const l = (max + min) / 2;
  if (range) {
    switch (max) {
      case r:
        h = (g - b) / range + ((g < b) ? 6 : 0);
        break;
      case g:
        h = (b - r) / range + 2;
        break;
      case b:
        h = (r - g) / range + 4;
        break;
      default:
        h = 0;
    }
    s = range / ((l < 0.5) ? (max + min) : (2 - max - min));
    h *= 60;
  } else {
    s = 0;
    h = 0;
  }
  return hsl(h, s, l, this.a);
};

function _hue2rgb(h: number, m1: number, m2: number): number {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

HSLPrototype.asRGB = function(this: HSL): RGB {
  const hue = this.h.valueOf();
  const h = hue % 360 + ((hue < 0) ? 360 : 0);
  const m2 = this.l + (this.l < 0.5 ? this.l : 1 - this.l) * this.s;
  const m1 = 2 * this.l - m2;
  const r = _hue2rgb((h >= 240) ? h - 240 : h + 120, m1, m2);
  const g = _hue2rgb(h, m1, m2);
  const b = _hue2rgb((h < 120) ? h + 240 : h - 120, m1, m2);
  return rgb(r, g, b, this.a);
};

export type ColorString = string & { readonly __Color: unique symbol };

const INTEGER_PATTERN = "\\s*([+-]?\\d+)\\s*";
const NUMBER_PATTERN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
const PERCENTAGE_PATTERN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
const RGB_HEX_REGEX = /^#([0-9a-f]{3,8})$/;
const RGB_INTEGER_REGEX = new RegExp("^rgb\\(" + [INTEGER_PATTERN, INTEGER_PATTERN, INTEGER_PATTERN] + "\\)$");
const RGB_PERCENTAGE_REGEX = new RegExp("^rgb\\(" + [PERCENTAGE_PATTERN, PERCENTAGE_PATTERN, PERCENTAGE_PATTERN] + "\\)$");
const RGBA_INTEGER_REGEX = new RegExp("^rgba\\(" + [INTEGER_PATTERN, INTEGER_PATTERN, INTEGER_PATTERN, NUMBER_PATTERN] + "\\)$");
const RGBA_PERCENTAGE_REGEX = new RegExp("^rgba\\(" + [PERCENTAGE_PATTERN, PERCENTAGE_PATTERN, PERCENTAGE_PATTERN, NUMBER_PATTERN] + "\\)$");
const HSL_REGEX = new RegExp("^hsl\\(" + [NUMBER_PATTERN, PERCENTAGE_PATTERN, PERCENTAGE_PATTERN] + "\\)$");
const HSLA_REGEX = new RegExp("^hsla\\(" + [NUMBER_PATTERN, PERCENTAGE_PATTERN, PERCENTAGE_PATTERN, NUMBER_PATTERN] + "\\)$");

const COLOR_REGEX_LIST = [
  RGB_HEX_REGEX,
  RGB_INTEGER_REGEX,
  RGB_PERCENTAGE_REGEX,
  RGBA_INTEGER_REGEX,
  RGBA_PERCENTAGE_REGEX,
  HSL_REGEX,
  HSLA_REGEX,
];

export function parseColorString(str: ColorString): RGB | HSL {
  let m: RegExpExecArray | null = null;
  m = RGB_HEX_REGEX.exec(str);
  if (m) {
    const length = m[1].length;
    const v = parseInt(m[1], 16);
    switch (length) {
      case 3: return rgb((v >> 8 & 0xf) | (v >> 4 & 0xf0), (v >> 4 & 0xf) | (v & 0xf0), ((v & 0xf) << 4) | (v & 0xf));
      case 4: return rgb((v >> 12 & 0xf) | (v >> 8 & 0xf0), (v >> 8 & 0xf) | (v >> 4 & 0xf0), (v >> 4 & 0xf) | (v & 0xf0), (((v & 0xf) << 4) | (v & 0xf)) / 0xff);
      case 6: return rgb((v >> 16 & 0xff), (v >> 8 & 0xff), (v & 0xff));
      case 8: return rgb((v >> 24 & 0xff), (v >> 16 & 0xff), (v >> 8 & 0xff), ((v & 0xff) / 0xff));
    }
    throw new Error(`Hex representation "${m[1]}" is invalid`);
  }
  m = RGB_INTEGER_REGEX.exec(str);
  if (m) {
    return rgb(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]));
  }
  m = RGBA_INTEGER_REGEX.exec(str);
  if (m) {
    return rgb(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]), parseFloat(m[4]));
  }
  m = RGB_PERCENTAGE_REGEX.exec(str);
  if (m) {
    return rgb(parseFloat(m[1]) * 255 / 100, parseFloat(m[2]) * 255 / 100, parseFloat(m[3]) * 255 / 100);
  }
  m = RGBA_PERCENTAGE_REGEX.exec(str);
  if (m) {
    return rgb(parseFloat(m[1]) * 255 / 100, parseFloat(m[2]) * 255 / 100, parseFloat(m[3]) * 255 / 100, parseFloat(m[4]));
  }
  m = HSL_REGEX.exec(str);
  if (m) {
    return hsl(parseFloat(m[1]), parseFloat(m[2]) / 100, parseFloat(m[3]) / 100);
  }
  m = HSLA_REGEX.exec(str);
  if (m) {
    return hsl(parseFloat(m[1]), parseFloat(m[2]) / 100, parseFloat(m[3]) / 100, parseFloat(m[4]));
  }
  throw new Error(`Was unable to parse "${str}" as Color`);
}

export function isColorString(str: unknown): str is ColorString {
  return (typeof str === "string") && COLOR_REGEX_LIST.some((regex) => regex.test(str));
}

export type Color = ColorString | RGB | HSL;
