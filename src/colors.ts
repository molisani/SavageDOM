import { Angle } from "./types";

export interface RGB {
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

export function isRGB(value: unknown): value is RGB {
  return typeof value === "object" && value !== null && RGBPrototype.isPrototypeOf(value);
}

export interface HSL {
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

export function isHSL(value: unknown): value is HSL {
  return typeof value === "object" && value !== null && HSLPrototype.isPrototypeOf(value);
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

export type ColorLiteral = string & { readonly __Color: unique symbol };

export function isColorLiteral(str: unknown): str is ColorLiteral {
  return typeof str === "string" && COLOR_REGEX_LIST.some((regex) => regex.test(str));
}

const COLOR_KEYWORDS = {
  black: "#000000" as ColorLiteral,
  silver: "#c0c0c0" as ColorLiteral,
  gray: "#808080" as ColorLiteral,
  white: "#ffffff" as ColorLiteral,
  maroon: "#800000" as ColorLiteral,
  red: "#ff0000" as ColorLiteral,
  purple: "#800080" as ColorLiteral,
  fuchsia: "#ff00ff" as ColorLiteral,
  green: "#008000" as ColorLiteral,
  lime: "#00ff00" as ColorLiteral,
  olive: "#808000" as ColorLiteral,
  yellow: "#ffff00" as ColorLiteral,
  navy: "#000080" as ColorLiteral,
  blue: "#0000ff" as ColorLiteral,
  teal: "#008080" as ColorLiteral,
  aqua: "#00ffff" as ColorLiteral,
  orange: "#ffa500" as ColorLiteral,
  aliceblue: "#f0f8ff" as ColorLiteral,
  antiquewhite: "#faebd7" as ColorLiteral,
  aquamarine: "#7fffd4" as ColorLiteral,
  azure: "#f0ffff" as ColorLiteral,
  beige: "#f5f5dc" as ColorLiteral,
  bisque: "#ffe4c4" as ColorLiteral,
  blanchedalmond: "#ffebcd" as ColorLiteral,
  blueviolet: "#8a2be2" as ColorLiteral,
  brown: "#a52a2a" as ColorLiteral,
  burlywood: "#deb887" as ColorLiteral,
  cadetblue: "#5f9ea0" as ColorLiteral,
  chartreuse: "#7fff00" as ColorLiteral,
  chocolate: "#d2691e" as ColorLiteral,
  coral: "#ff7f50" as ColorLiteral,
  cornflowerblue: "#6495ed" as ColorLiteral,
  cornsilk: "#fff8dc" as ColorLiteral,
  crimson: "#dc143c" as ColorLiteral,
  cyan: "#00ffff" as ColorLiteral,
  darkblue: "#00008b" as ColorLiteral,
  darkcyan: "#008b8b" as ColorLiteral,
  darkgoldenrod: "#b8860b" as ColorLiteral,
  darkgray: "#a9a9a9" as ColorLiteral,
  darkgreen: "#006400" as ColorLiteral,
  darkgrey: "#a9a9a9" as ColorLiteral,
  darkkhaki: "#bdb76b" as ColorLiteral,
  darkmagenta: "#8b008b" as ColorLiteral,
  darkolivegreen: "#556b2f" as ColorLiteral,
  darkorange: "#ff8c00" as ColorLiteral,
  darkorchid: "#9932cc" as ColorLiteral,
  darkred: "#8b0000" as ColorLiteral,
  darksalmon: "#e9967a" as ColorLiteral,
  darkseagreen: "#8fbc8f" as ColorLiteral,
  darkslateblue: "#483d8b" as ColorLiteral,
  darkslategray: "#2f4f4f" as ColorLiteral,
  darkslategrey: "#2f4f4f" as ColorLiteral,
  darkturquoise: "#00ced1" as ColorLiteral,
  darkviolet: "#9400d3" as ColorLiteral,
  deeppink: "#ff1493" as ColorLiteral,
  deepskyblue: "#00bfff" as ColorLiteral,
  dimgray: "#696969" as ColorLiteral,
  dimgrey: "#696969" as ColorLiteral,
  dodgerblue: "#1e90ff" as ColorLiteral,
  firebrick: "#b22222" as ColorLiteral,
  floralwhite: "#fffaf0" as ColorLiteral,
  forestgreen: "#228b22" as ColorLiteral,
  gainsboro: "#dcdcdc" as ColorLiteral,
  ghostwhite: "#f8f8ff" as ColorLiteral,
  gold: "#ffd700" as ColorLiteral,
  goldenrod: "#daa520" as ColorLiteral,
  greenyellow: "#adff2f" as ColorLiteral,
  grey: "#808080" as ColorLiteral,
  honeydew: "#f0fff0" as ColorLiteral,
  hotpink: "#ff69b4" as ColorLiteral,
  indianred: "#cd5c5c" as ColorLiteral,
  indigo: "#4b0082" as ColorLiteral,
  ivory: "#fffff0" as ColorLiteral,
  khaki: "#f0e68c" as ColorLiteral,
  lavender: "#e6e6fa" as ColorLiteral,
  lavenderblush: "#fff0f5" as ColorLiteral,
  lawngreen: "#7cfc00" as ColorLiteral,
  lemonchiffon: "#fffacd" as ColorLiteral,
  lightblue: "#add8e6" as ColorLiteral,
  lightcoral: "#f08080" as ColorLiteral,
  lightcyan: "#e0ffff" as ColorLiteral,
  lightgoldenrodyellow: "#fafad2" as ColorLiteral,
  lightgray: "#d3d3d3" as ColorLiteral,
  lightgreen: "#90ee90" as ColorLiteral,
  lightgrey: "#d3d3d3" as ColorLiteral,
  lightpink: "#ffb6c1" as ColorLiteral,
  lightsalmon: "#ffa07a" as ColorLiteral,
  lightseagreen: "#20b2aa" as ColorLiteral,
  lightskyblue: "#87cefa" as ColorLiteral,
  lightslategray: "#778899" as ColorLiteral,
  lightslategrey: "#778899" as ColorLiteral,
  lightsteelblue: "#b0c4de" as ColorLiteral,
  lightyellow: "#ffffe0" as ColorLiteral,
  limegreen: "#32cd32" as ColorLiteral,
  linen: "#faf0e6" as ColorLiteral,
  magenta: "#ff00ff" as ColorLiteral,
  mediumaquamarine: "#66cdaa" as ColorLiteral,
  mediumblue: "#0000cd" as ColorLiteral,
  mediumorchid: "#ba55d3" as ColorLiteral,
  mediumpurple: "#9370db" as ColorLiteral,
  mediumseagreen: "#3cb371" as ColorLiteral,
  mediumslateblue: "#7b68ee" as ColorLiteral,
  mediumspringgreen: "#00fa9a" as ColorLiteral,
  mediumturquoise: "#48d1cc" as ColorLiteral,
  mediumvioletred: "#c71585" as ColorLiteral,
  midnightblue: "#191970" as ColorLiteral,
  mintcream: "#f5fffa" as ColorLiteral,
  mistyrose: "#ffe4e1" as ColorLiteral,
  moccasin: "#ffe4b5" as ColorLiteral,
  navajowhite: "#ffdead" as ColorLiteral,
  oldlace: "#fdf5e6" as ColorLiteral,
  olivedrab: "#6b8e23" as ColorLiteral,
  orangered: "#ff4500" as ColorLiteral,
  orchid: "#da70d6" as ColorLiteral,
  palegoldenrod: "#eee8aa" as ColorLiteral,
  palegreen: "#98fb98" as ColorLiteral,
  paleturquoise: "#afeeee" as ColorLiteral,
  palevioletred: "#db7093" as ColorLiteral,
  papayawhip: "#ffefd5" as ColorLiteral,
  peachpuff: "#ffdab9" as ColorLiteral,
  peru: "#cd853f" as ColorLiteral,
  pink: "#ffc0cb" as ColorLiteral,
  plum: "#dda0dd" as ColorLiteral,
  powderblue: "#b0e0e6" as ColorLiteral,
  rosybrown: "#bc8f8f" as ColorLiteral,
  royalblue: "#4169e1" as ColorLiteral,
  saddlebrown: "#8b4513" as ColorLiteral,
  salmon: "#fa8072" as ColorLiteral,
  sandybrown: "#f4a460" as ColorLiteral,
  seagreen: "#2e8b57" as ColorLiteral,
  seashell: "#fff5ee" as ColorLiteral,
  sienna: "#a0522d" as ColorLiteral,
  skyblue: "#87ceeb" as ColorLiteral,
  slateblue: "#6a5acd" as ColorLiteral,
  slategray: "#708090" as ColorLiteral,
  slategrey: "#708090" as ColorLiteral,
  snow: "#fffafa" as ColorLiteral,
  springgreen: "#00ff7f" as ColorLiteral,
  steelblue: "#4682b4" as ColorLiteral,
  tan: "#d2b48c" as ColorLiteral,
  thistle: "#d8bfd8" as ColorLiteral,
  tomato: "#ff6347" as ColorLiteral,
  turquoise: "#40e0d0" as ColorLiteral,
  violet: "#ee82ee" as ColorLiteral,
  wheat: "#f5deb3" as ColorLiteral,
  whitesmoke: "#f5f5f5" as ColorLiteral,
  yellowgreen: "#9acd32" as ColorLiteral,
};

type ColorKeyword = keyof typeof COLOR_KEYWORDS;

export function isColorKeyword(str: unknown): str is ColorKeyword {
  return typeof str === "string" && str in COLOR_KEYWORDS;
}

export type ColorString = ColorLiteral | ColorKeyword;

export function isColorString(str: unknown): str is ColorString {
  return isColorLiteral(str) || isColorKeyword(str);
}

export function parseColorString(str: ColorString): RGB | HSL {
  let m: RegExpExecArray | null = null;
  if (isColorKeyword(str)) {
    str = COLOR_KEYWORDS[str];
  }
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
  return rgb(0, 0, 0);
  // throw new Error(`Was unable to parse "${str}" as Color`);
}

export type Color = ColorString | RGB | HSL;

export function isColor(value: unknown): value is Color {
  return (typeof value === "string" && isColorString(value)) || isRGB(value) || isHSL(value);
}
