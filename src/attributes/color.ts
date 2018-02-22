import { Attribute } from "../attribute";
import { Element } from "../element";
import { _lerp } from "../interpolation";

export type InterpolationMode = "rgb" | "hsl-shortest" | "hsl-longest" | "hsl-clockwise" | "hsl-counterclockwise";

interface ColorImpl {
  toString(): string;
  interpolate(from: ColorImpl, t: number, mode: InterpolationMode): ColorImpl;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
  a: number;
}

class RGBImpl implements RGB, ColorImpl {
  public r: number = 0;
  public g: number = 0;
  public b: number = 0;
  public a: number = 1;
  constructor(css: string);
  constructor(r: number, g: number, b: number);
  constructor(r: number, g: number, b: number, a: number);
  constructor(x: string | number = 0, y: number = 0, z: number = 0, a: number = 1) {
    if (typeof x === "string") {
      const rgbaMatch = x.match(/^rgba\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
      if (rgbaMatch !== null) {
        this.r = parseInt(rgbaMatch[1], 10);
        this.g = parseInt(rgbaMatch[2], 10);
        this.b = parseInt(rgbaMatch[3], 10);
        this.a = parseFloat(rgbaMatch[4]);
      }
      const rgbMatch = x.match(/^rgb\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?\)$/i);
      if (rgbMatch !== null) {
        this.r = parseInt(rgbMatch[1], 10);
        this.g = parseInt(rgbMatch[2], 10);
        this.b = parseInt(rgbMatch[3], 10);
      }
    } else {
      this.r = x;
      this.g = y;
      this.b = z;
      this.a = a;
    }
  }
  public toString(): string {
    return `rgba(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)}, ${this.a})`;
  }
  public toHSL(): HSLImpl {
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const avg = (max + min) / 2;
    const d = max - min;
    let h: number;
    let s: number;
    const l = avg;
    if (d === 0) {
      h = 0;
      s = 0;
    } else {
      s = d / (1 - Math.abs(2 * avg - 1));
      switch (max) {
        case r:
          h = ((g - b) / d) % 6;
          break;
        case g:
          h = ((b - r) / d) + 2;
          break;
        case b:
          h = ((r - g) / d) + 4;
          break;
        default:
          h = 0;
          break;
      }
      h *= 60;
    }
    return new HSLImpl(h, s, l);
  }
  public interpolate(from: ColorImpl, t: number, mode: InterpolationMode): ColorImpl {
    const modePrefix = mode.substr(0, 3);
    if (modePrefix === "rgb") {
      if (from instanceof HSLImpl) {
        from = from.toRGB();
      }
      if (from instanceof RGBImpl) {
        return new RGBImpl(_lerp(from.r, this.r, t), _lerp(from.g, this.g, t), _lerp(from.b, this.b, t), _lerp(from.a, this.a, t));
      }
    } else if (modePrefix === "hsl") {
      return this.toHSL().interpolate(from, t, mode);
    }
    return this;
  }
}

export interface HSL {
  h: number;
  s: number;
  l: number;
  a: number;
}

class HSLImpl implements HSL, ColorImpl {
  public h: number = 0;
  public s: number = 0;
  public l: number = 0;
  public a: number = 1;
  constructor(css: string);
  constructor(h: number, s: number, l: number);
  constructor(h: number, s: number, l: number, a: number);
  constructor(x: string | number = 0, y: number = 0, z: number = 0, a: number = 1) {
    if (typeof x === "string") {
      const hslaMatch = x.match(/^hsla\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
      if (hslaMatch !== null) {
        this.h = parseFloat(hslaMatch[1]);
        this.s = parseFloat(hslaMatch[2]) / 100;
        this.l = parseFloat(hslaMatch[3]) / 100;
        this.a = parseFloat(hslaMatch[4]);
      }
      const hslMatch = x.match(/^hsl\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?\)$/i);
      if (hslMatch !== null) {
        this.h = parseFloat(hslMatch[1]);
        this.s = parseFloat(hslMatch[2]) / 100;
        this.l = parseFloat(hslMatch[3]) / 100;
      }
    } else {
      this.h = x;
      this.s = y;
      this.l = z;
      this.a = a;
    }
  }
  public toString(): string {
    return `hsla(${this.h % 360}, ${this.s * 100}%, ${this.l * 100}%, ${this.a})`;
  }
  public toRGB(): RGBImpl {
    let r = 0;
    let g = 0;
    let b = 0;
    if (this.s !== 0) {
      const c = (1 - Math.abs(2 * this.l - 1)) * this.s;
      const x = c * (1 - Math.abs((this.h / 60) % 2 - 1));
      if (this.h < 60) {
        r = c;
        g = x;
      } else if (this.h < 120) {
        r = x;
        g = c;
      } else if (this.h < 180) {
        g = c;
        b = x;
      } else if (this.h < 240) {
        g = x;
        b = c;
      } else if (this.h < 180) {
        b = c;
        r = x;
      } else if (this.h < 240) {
        b = x;
        r = c;
      }
      const m = this.l - 0.5 * c;
      r += m;
      g += m;
      b += m;
    }
    return new RGBImpl(r * 255, g * 255, b * 255);
  }
  public interpolate(from: ColorImpl, t: number, mode: InterpolationMode): ColorImpl {
    const modePrefix = mode.substr(0, 3);
    if (modePrefix === "hsl") {
      if (from instanceof RGBImpl) {
        from = from.toHSL();
      }
      if (from instanceof HSLImpl) {
        let h1 = from.h;
        let h2 = this.h;
        const diff = h1 - h2;
        if (Math.abs(diff) > 180) {
          if (mode === "hsl-shortest") {
            if (diff < 0) {
              h1 += 360;
            } else if (diff > 0) {
              h2 += 360;
            }
          }
        } else {
          if (mode === "hsl-longest") {
            if (diff < 0) {
              h1 += 360;
            } else if (diff > 0) {
              h2 += 360;
            }
          }
        }
        if (diff > 0 && mode === "hsl-clockwise") {
          h2 += 360;
        }
        if (diff < 0 && mode === "hsl-counterclockwise") {
          h1 += 360;
        }
        return new HSLImpl(_lerp(h1, h2, t) % 360, _lerp(from.s, this.s, t), _lerp(from.l, this.l, t), _lerp(from.a, this.a, t));
      }
    } else if (modePrefix === "rgb") {
      return this.toRGB().interpolate(from, t, mode);
    }
    return this;
  }
}

export class Color implements Attribute<Color> {
  public static DEFAULT_MODE: InterpolationMode = "rgb";
  public mode: InterpolationMode = Color.DEFAULT_MODE;
  private impl: ColorImpl;
  constructor();
  constructor(css: string);
  constructor(format: "rgb", r: number, g: number, b: number, a?: number);
  constructor(format: "hsl", h: number, s: number, l: number, a?: number);
  constructor(format?: "rgb" | "hsl" | string, a1: number = 0, a2: number = 0, a3: number = 0, a4: number = 1) {
    if (format === "rgb") {
      this.impl = new RGBImpl(a1, a2, a3, a4);
    } else if (format === "hsl") {
      this.impl = new HSLImpl(a1, a2, a3, a4);
    } else if (format !== undefined) {
      if (format.indexOf("rgb") === 0) {
        this.impl = new RGBImpl(format);
      } else if (format.indexOf("hsl") === 0) {
        this.impl = new HSLImpl(format);
      } else if (format.indexOf("#") === 0) {
        let r = 0;
        let g = 0;
        let b = 0;
        let m = format.match(/^#([0-9a-fA-F]{3})$/i);
        if (m !== null) {
          r = parseInt(m[1].charAt(0), 16) * 0x11;
          g = parseInt(m[1].charAt(1), 16) * 0x11;
          b = parseInt(m[1].charAt(2), 16) * 0x11;
        } else {
          m = format.match(/^#([0-9a-fA-F]{6})$/i);
          if (m !== null) {
            r = parseInt(m[1].substr(0, 2), 16);
            g = parseInt(m[1].substr(2, 2), 16);
            b = parseInt(m[1].substr(4, 2), 16);
          }
        }
        this.impl = new RGBImpl(r, g, b);
      }
    }
  }
  public asRGB(): RGB {
    if (this.impl instanceof RGBImpl) {
      return this.impl;
    }
    if (this.impl instanceof HSLImpl) {
      return this.impl.toRGB();
    }
    throw new Error("Current color implementation does not support conversion to RGB");
  }
  public asHSL(): HSL {
    if (this.impl instanceof HSLImpl) {
      return this.impl;
    }
    if (this.impl instanceof RGBImpl) {
      return this.impl.toHSL();
    }
    throw new Error("Current color implementation does not support conversion to HSL");
  }
  public toString(): string {
    return this.impl.toString();
  }
  public parse(css: string | null): Color {
    if (css !== null) {
      return new Color(css);
    } else {
      return new Color();
    }
  }
  public get(element: SVGElement, attr: string): Color {
    return this.parse(element.getAttribute(attr));
  }
  public set(element: SVGElement, attr: string, override?: Color): void {
    if (override !== undefined) {
      element.setAttribute(attr, override.toString());
    } else {
      element.setAttribute(attr, this.toString());
    }
  }
  public interpolate(from: Color, t: number): Color {
    const c = new Color();
    c.impl = this.impl.interpolate(from.impl, t, this.mode);
    c.mode = this.mode;
    return c;
  }
}
