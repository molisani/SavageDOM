namespace vektor.Attribute {

  export const _lerp = (a: number, b: number, t: number): number => a + ((b - a) * t);

  export type InterpolationMode = "rgb" | "hsl-shortest" | "hsl-longest" | "hsl-clockwise" | "hsl-counterclockwise";

  abstract class ColorImpl {
    abstract toString(): string;
    abstract interpolate(from: ColorImpl, t: number, mode: InterpolationMode): ColorImpl;
  }

  class RGB extends ColorImpl {
    private r: number = 0;
    private g: number = 0;
    private b: number = 0;
    private a: number = 1;
    constructor(css: string);
    constructor(r: number, g: number, b: number);
    constructor(r: number, g: number, b: number, a: number);
    constructor(x: string | number = 0, y: number = 0, z: number = 0, a: number = 1) {
      super();
      if (typeof x === "string") {
        if (x.startsWith("rgba")) {
          const m = x.match(/^rgba\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
          if (m !== null) {
            this.r = parseInt(m[1], 10);
            this.g = parseInt(m[2], 10);
            this.b = parseInt(m[3], 10);
            this.a = parseFloat(m[4]);
          }
        } else if (x.startsWith("rgb")) {
          const m = x.match(/^rgb\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?\)$/i);
          if (m !== null) {
            this.r = parseInt(m[1], 10);
            this.g = parseInt(m[2], 10);
            this.b = parseInt(m[3], 10);
          }
        }
      } else {
        this.r = x;
        this.g = y;
        this.b = z;
        this.a = a;
      }
    }
    toString(): string {
      return `rgba(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)}, ${this.a})`;
    }
    toHSL(): HSL {
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
        s = (avg > 0.5) ? (d / (2 - d)) : (d / (max + min));
        switch (max) {
          case r:
            h = ((g - b) / d) + ((g < b) ? 6 : 0);
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
      return new HSL(h, s, l);
    }
    interpolate(from: ColorImpl, t: number, mode: InterpolationMode): ColorImpl {
      if (mode.startsWith("rgb")) {
        if (from instanceof HSL) {
          from = from.toRGB();
        }
        if (from instanceof RGB) {
          return new RGB(_lerp(from.r, this.r, t), _lerp(from.g, this.g, t), _lerp(from.b, this.b, t), _lerp(from.a, this.a, t));
        }
      } else if (mode.startsWith("hsl")) {
        if (from instanceof HSL) {
          return from.interpolate(this, 1 - t, mode);
        } else {
          return this.toHSL().interpolate(from, t, mode);
        }
      }
      return this;
    }
  }

  class HSL extends ColorImpl {
    private h: number = 0;
    private s: number = 0;
    private l: number = 0;
    private a: number = 1;
    constructor(css: string);
    constructor(h: number, s: number, l: number);
    constructor(h: number, s: number, l: number, a: number);
    constructor(x: string | number = 0, y: number = 0, z: number = 0, a: number = 1) {
      super();
      if (typeof x === "string") {
        if (x.startsWith("hsla")) {
          const m = x.match(/^hsla\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
          if (m !== null) {
            this.h = parseFloat(m[1]);
            this.s = parseFloat(m[2]) / 100;
            this.l = parseFloat(m[3]) / 100;
            this.a = parseFloat(m[4]);
          }
        } else if (x.startsWith("hsl")) {
          const m = x.match(/^hsl\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?\)$/i);
          if (m !== null) {
            this.h = parseFloat(m[1]);
            this.s = parseFloat(m[2]) / 100;
            this.l = parseFloat(m[3]) / 100;
          }
        }
      } else {
        this.h = x;
        this.s = y;
        this.l = z;
        this.a = a;
      }
    }
    toString(): string {
      return `hsla(${this.h % 360}, ${this.s * 100}%, ${this.l * 100}%, ${this.a})`;
    }
    toRGB(): RGB {
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
      return new RGB(r * 255, g * 255, b * 255);
    }
    interpolate(from: ColorImpl, t: number, mode: InterpolationMode): ColorImpl {
      if (mode.startsWith("hsl")) {
        if (from instanceof RGB) {
          from = from.toHSL();
        }
        if (from instanceof HSL) {
          let h1 = from.h;
          let h2 = this.h;
          if (Math.abs(h1 - h2) > 180) {
            if (mode === "hsl-shortest") {
              if (h1 < h2) {
                h1 += 360;
              } else {
                h2 += 360;
              }
            }
          } else {
            if (mode === "hsl-longest") {
              if (h1 < h2) {
                h1 += 360;
              } else {
                h2 += 360;
              }
            }
          }
          if (mode === "hsl-clockwise") {
            h2 += 360;
          }
          if (mode === "hsl-counterclockwise") {
            h1 += 360;
          }
          return new HSL(_lerp(h1, h2, t) % 360, _lerp(from.s, this.s, t), _lerp(from.l, this.l, t), _lerp(from.a, this.a, t));
        }
      } else if (mode.startsWith("rgb")) {
        if (from instanceof RGB) {
          return from.interpolate(this, 1 - t, mode);
        } else {
          return this.toRGB().interpolate(from, t, mode);
        }
      }
      return this;
    }
  }

  export class Color implements Attribute<Color> {
    static DEFAULT_MODE: InterpolationMode = "rgb";
    public mode: InterpolationMode = Color.DEFAULT_MODE;
    private impl: ColorImpl;
    constructor();
    constructor(css: string);
    constructor(format: "rgb", r: number, g: number, b: number, a?: number);
    constructor(format: "hsl", h: number, s: number, l: number, a?: number);
    constructor(format?: "rgb" | "hsl" | string, x: number = 0, y: number = 0, z: number = 0, a: number = 1) {
      if (format === "rgb") {
        this.impl = new RGB(x, y, z, a);
      } else if (format === "hsl") {
        this.impl = new HSL(x, y, z, a);
      } else if (format !== undefined) {
        if (format.startsWith("rgb")) {
          this.impl = new RGB(format);
        } else if (format.startsWith("hsl")) {
          this.impl = new HSL(format);
        } else if (format.startsWith("#")) {
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
          this.impl = new RGB(r, g, b);
        }
      }
    }
    toString(): string {
      return this.impl.toString();
    }
    parse(css: string | null): Color {
      if (css !== null) {
        return new Color(css);
      } else {
        return new Color();
      }
    }
    get(element: Element<SVGElement, any>, attr: string): Color {
      return this.parse(element.getAttribute(attr));
    }
    set(element: Element<SVGElement, any>, attr: string, override?: Color): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    interpolate(from: Color, t: number): Color {
      const c = new Color();
      c.impl = this.impl.interpolate(from.impl, t, this.mode);
      c.mode = this.mode;
      return c;
    }
  }

}
