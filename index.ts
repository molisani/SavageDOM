
export namespace vektor {

  const XMLNS = 'http://www.w3.org/2000/svg';
  const XLINK = 'http://www.w3.org/1999/xlink';

  const _mix = (a: number, b: number, t: number): number => a + ((b - a) * t);

  // const _getValueFunction = <A>(end: A[keyof A], str: string): ((t: number) => A[keyof A]) | undefined => {
  //   if (Attribute.isAttribute(end)) {
  //     return end.interpolate.bind(end, end.parse(str));
  //   } else if (typeof end === 'number') {
  //     return _mix.bind(undefined, parseFloat(str), end);
  //   } else if (Array.isArray(end)) {
  //     let vals: ((t: number) => A[keyof A][keyof A[keyof A]])[] = [];
  //     let toks = str.split('\t');
  //     for (let i = 0; i !== toks.length; ++i) {
  //       let val = _getValueFunction<A[keyof A]>(end[i], toks[i]);
  //       if (val !== undefined) {
  //         vals.push(val);
  //       } else {
  //         return undefined;
  //       }
  //     }
  //     return (t: number) => vals.map(val => val(t)) as any as A[keyof A];
  //   }
  //   return undefined;
  // };

  export interface Setter {
    set<Attrs>(element: Element<SVGElement, Attrs>, attr: keyof Attrs, override?: any): void;
  }

  export interface Attribute<T> extends Setter {
    parse(css: string | null): T;
    get<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A): T;
    set<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A, override?: T): void;
    interpolate(from: T, t: number): T;
  }
  export namespace Attribute {

    export const isAttribute = (obj: any | Attribute<any>): obj is Attribute<any> => {
      return typeof obj['interpolate'] === 'function' && typeof obj['parse'] === 'function';
    };

    export type Inherit = 'inherit';

    export type InterpolationMode = 'rgb' | 'hsl-shortest' | 'hsl-longest' | 'hsl-clockwise' | 'hsl-counterclockwise';

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
        if (typeof x === 'string') {
          if (x.startsWith("rgba")) {
            let m = x.match(/^rgba\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
            if (m !== null) {
              this.r = parseInt(m[1]);
              this.g = parseInt(m[2]);
              this.b = parseInt(m[3]);
              this.a = parseFloat(m[4]);
            }
          } else if (x.startsWith("rgb")) {
            let m = x.match(/^rgb\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?\)$/i);
            if (m !== null) {
              this.r = parseInt(m[1]);
              this.g = parseInt(m[2]);
              this.b = parseInt(m[3]);
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
        let r = this.r / 255;
        let g = this.g / 255;
        let b = this.b / 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let avg = (max + min) / 2;
        let d = max - min;
        let h: number;
        let s: number;
        let l = avg;
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
        if (mode.startsWith('rgb')) {
          if (from instanceof HSL) {
            from = from.toRGB();
          }
          if (from instanceof RGB) {
            return new RGB(_mix(from.r, this.r, t), _mix(from.g, this.g, t), _mix(from.b, this.b, t), _mix(from.a, this.a, t));
          }
        } else if (mode.startsWith('hsl')) {
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
        if (typeof x === 'string') {
          if (x.startsWith("hsla")) {
            let m = x.match(/^hsla\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
            if (m !== null) {
              this.h = parseFloat(m[1]);
              this.s = parseFloat(m[2]) / 100;
              this.l = parseFloat(m[3]) / 100;
              this.a = parseFloat(m[4]);
            }
          } else if (x.startsWith("hsl")) {
            let m = x.match(/^hsl\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?\)$/i);
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
          let m = this.l - 0.5 * c;
          r += m;
          g += m;
          b += m;
        }
        console.log(this.h, this.s, this.l);
        console.log(r * 255, g * 255, b * 255);
        return new RGB(r * 255, g * 255, b * 255);
      }
      interpolate(from: ColorImpl, t: number, mode: InterpolationMode): ColorImpl {
        if (mode.startsWith('hsl')) {
          if (from instanceof RGB) {
            from = from.toHSL();
          }
          if (from instanceof HSL) {
            let h1 = from.h;
            let h2 = this.h;
            if (Math.abs(h1 - h2) > 180) {
              if (mode === 'hsl-shortest') {
                if (h1 < h2) {
                  h1 += 360;
                } else {
                  h2 += 360;
                }
              }
            } else {
              if (mode === 'hsl-longest') {
                if (h1 < h2) {
                  h1 += 360;
                } else {
                  h2 += 360;
                }
              }
            }
            if (mode === 'hsl-clockwise') {
              h2 += 360;
            }
            if (mode === 'hsl-counterclockwise') {
              h1 += 360;
            }
            return new HSL(_mix(h1, h2, t) % 360, _mix(from.s, this.s, t), _mix(from.l, this.l, t),_mix(from.a, this.a, t));
          }
        } else if (mode.startsWith('rgb')) {
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
      static DEFAULT_MODE: InterpolationMode = 'rgb';
      private impl: ColorImpl;
      public mode: InterpolationMode = Color.DEFAULT_MODE;
      constructor();
      constructor(css: string);
      constructor(format: 'rgb', r: number, g: number, b: number, a?: number);
      constructor(format: 'hsl', h: number, s: number, l: number, a?: number);
      constructor(format?: 'rgb' | 'hsl' | string, x: number = 0, y: number = 0, z: number = 0, a: number = 1) {
        if (format === 'rgb') {
          this.impl = new RGB(x, y, z, a);
        } else if (format === 'hsl') {
          this.impl = new HSL(x, y, z, a)
        } else if (format !== undefined) {
          if (format.startsWith('rgb')) {
            this.impl = new RGB(format);
          } else if (format.startsWith('hsl')) {
            this.impl = new HSL(format);
          } else if (format.startsWith('#')) {
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

        if (format === 'rgb') {
          
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
        let c = new Color();
        c.impl = this.impl.interpolate(from.impl, t, this.mode);
        c.mode = this.mode;
        return c;
      }
    }

    export type Paint = 'none' | 'currentColor' | Color | Element.NonRenderable.PaintServer.Gradient.Linear | Element.NonRenderable.PaintServer.Gradient.Radial | Element.NonRenderable.PaintServer.Pattern | Inherit;

    export class Dimension<Unit extends string> implements Attribute<Dimension<Unit>> {
      private static convert: { [unit: string]: number } = {
        px: 1,
        in: 96,
        cm: 254 / 96,
        mm: 25.4 / 96,
        pt: 3 / 4,
        pc: 9,
        deg: 1,
        grad: 9 / 10,
        rad: 180 / Math.PI,
        turn: 360
      };
      constructor(public value: number, public unit: Unit) {}
      toString(): string {
        return `${this.value}${this.unit}`;
      }
      parse(css: string | null): Dimension<Unit> {
        if (css !== null) {
          let m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
          if (m !== null) {
            let to_px = Dimension.convert[m[2]];
            let from_px = 1 / Dimension.convert[this.unit as string];
            if (to_px !== undefined && from_px !== undefined) {
              return new Dimension<Unit>(parseFloat(m[1]) * to_px * from_px, this.unit);
            } else {
              return new Dimension<any>(parseFloat(m[1]), m[2]);
            }
          } else {
            return new Dimension<Unit>(parseFloat(css), this.unit);
          }
        }
        return new Dimension<Unit>(0, this.unit);
      }
      get(element: Element<SVGElement, any>, attr: string): Dimension<Unit> {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: Dimension<Unit>): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      interpolate(from: Dimension<Unit>, t: number): Dimension<Unit> {
        if (this.unit !== from.unit) {
          let to_px = Dimension.convert[this.unit as string];
          let from_px = 1 / Dimension.convert[from.unit as string];
          if (to_px !== undefined && from_px !== undefined) {
            return new Dimension<Unit>(_mix(from.value, this.value, t) * to_px * from_px, this.unit);
          }
        }
        return new Dimension<Unit>(_mix(from.value, this.value, t), this.unit);
      }
    }

    export type CSSAbsoluteLengths = 'px' | 'in' | 'cm' | 'mm' | 'pt' | 'pc';
    export type CSSAngleUnits = 'deg' | 'grad' | 'rad' | 'turn';

    export type Length = number | Dimension<CSSAbsoluteLengths>;
    const _LengthParse = (css: string): Length => {
      let m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
      if (m !== null) {
        return new Dimension<any>(parseFloat(m[1]), m[2]);
      }
      return parseFloat(css);
    };
    const _LengthInterpolate = (a: Length, b: Length, t: number): Length => {
      if (typeof a !== 'number') {
        if (typeof b !== 'number') {
          return b.interpolate(a, t);
        } else {
          return a.interpolate(new Dimension<any>(b, a.unit), 1 - t);
        }
      } else {
        if (typeof b !== 'number') {
          return b.interpolate(new Dimension<any>(a, b.unit), t);
        } else {
          return _mix(a, b, t);
        }
      }
    };
    export type Angle = number | Dimension<CSSAngleUnits>;
    export type Percentage = Dimension<'%'>;

    export class Point implements Attribute<Point> {
      constructor(public x: Length, public y: Length) {}
      toString(): string {
        return `${this.x},${this.y}`;
      }
      parse(css: string | null): Point {
        if (css !== null) {
          let toks = css.split(',');
          return new Point(_LengthParse(toks[0]), _LengthParse(toks[1]));
        } else {
          return new Point(0, 0);
        }
      }
      get(element: Element<SVGElement, any>, attr: string): Point {
        let toks = attr.split(":");
        if (toks.length === 2) {
          let cssX = element.getAttribute(toks[0]);
          let cssY = element.getAttribute(toks[1]);
          if (cssX !== null && cssY !== null) {
            return new Point(_LengthParse(cssX), _LengthParse(cssY));
          } else {
            return new Point(0, 0);
          }
        } else {
          return this.parse(element.getAttribute(attr));
        }
      }
      set(element: Element<SVGElement, any>, attr: string, override?: Point): void {
        let toks = attr.split(":");
        if (toks.length === 2) {
          if (override !== undefined) {
            element.setAttribute(toks[0], override.x.toString());
            element.setAttribute(toks[1], override.y.toString());
          } else {
            element.setAttribute(toks[0], this.x.toString());
            element.setAttribute(toks[1], this.y.toString());
          }
        } else {
          if (override !== undefined) {
            element.setAttribute(attr, override.toString());
          } else {
            element.setAttribute(attr, this.toString());
          }
        }
      }
      interpolate(from: Point, t: number): Point {
        return new Point(_LengthInterpolate(from.x, this.x, t), _LengthInterpolate(from.y, this.y, t));
      }
    }

    export class Number implements Attribute<Number> {
      constructor(public n: number = 0) {}
      toString(): string {
        return this.n.toString();
      }
      parse(css: string | null): Number {
        if (css !== null) {
          return new Number(parseFloat(css));
        } else {
          return new Number();
        }
      }
      get(element: Element<SVGElement, any>, attr: string): Number {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: Number): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      interpolate(from: Number, t: number): Number {
        return new Number(_mix(from.n, this.n, t));
      }
    }

    export class NumberOptionalNumber implements Attribute<NumberOptionalNumber> {
      constructor(public n: number, public o?: number) {}
      toString(): string {
        return (this.o !== undefined) ? `${this.n},${this.o}` : this.n.toString();
      }
      parse(css: string | null): NumberOptionalNumber {
        if (css !== null) {
          let toks = css.split(',');
          if (toks.length === 1) {
            return new NumberOptionalNumber(parseFloat(toks[0]));
          } else {
            return new NumberOptionalNumber(parseFloat(toks[0]), parseFloat(toks[1]));
          }
        } else {
          return new NumberOptionalNumber(0);
        }
      }
      get(element: Element<SVGElement, any>, attr: string): NumberOptionalNumber {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: NumberOptionalNumber): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      interpolate(from: NumberOptionalNumber, t: number): NumberOptionalNumber {
        if (from.o !== undefined && this.o !== undefined) {
          return new NumberOptionalNumber(_mix(from.n, this.n, t), _mix(from.o, this.o, t));
        } else if (from.o === undefined && this.o !== undefined) {
          return new NumberOptionalNumber(_mix(from.n, this.n, t), _mix(0, this.o, t));
        } else if (from.o !== undefined && this.o === undefined) {
          return new NumberOptionalNumber(_mix(from.n, this.n, t), _mix(from.o, 0, t));
        } else {
          return new NumberOptionalNumber(_mix(from.n, this.n, t));
        }
      }
    }

    export class ViewBox implements Attribute<ViewBox> {
      constructor(public x: Length, public y: Length, public width: Length, public height: Length) {}
      toString(): string {
        return `${this.x} ${this.y} ${this.width} ${this.height}`;
      }
      parse(css: string | null): ViewBox {
        if (css !== null) {
          let toks = css.split(' ');
          return new ViewBox(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]));
        } else {
          return new ViewBox(0, 0, 0, 0);
        }
      }
      get(element: Element<SVGElement, any>, attr: string): ViewBox {
        let toks = attr.split(":");
        if (toks.length === 4) {
          let cssX = element.getAttribute(toks[0]);
          let cssY = element.getAttribute(toks[1]);
          let cssWidth = element.getAttribute(toks[2]);
          let cssHeight = element.getAttribute(toks[3]);
          if (cssX !== null && cssY !== null && cssWidth !== null && cssHeight !== null) {
            return new ViewBox(parseFloat(cssX), parseFloat(cssY), parseFloat(cssWidth), parseFloat(cssHeight));
          } else {
            return new ViewBox(0, 0, 0, 0);
          }
        } else {
          return this.parse(element.getAttribute(attr));
        }
      }
      set(element: Element<SVGElement, any>, attr: string, override?: ViewBox): void {
        let toks = attr.split(":");
        if (toks.length === 4) {
          if (override !== undefined) {
            element.setAttribute(toks[0], override.x.toString());
            element.setAttribute(toks[1], override.y.toString());
            element.setAttribute(toks[2], override.width.toString());
            element.setAttribute(toks[3], override.height.toString());
          } else {
            element.setAttribute(toks[0], this.x.toString());
            element.setAttribute(toks[1], this.y.toString());
            element.setAttribute(toks[2], this.width.toString());
            element.setAttribute(toks[3], this.height.toString());
          }
        } else {
          if (override !== undefined) {
            element.setAttribute(attr, override.toString());
          } else {
            element.setAttribute(attr, this.toString());
          }
        }
      }
      interpolate(from: ViewBox, t: number): ViewBox {
        return new ViewBox(_LengthInterpolate(from.x, this.x, t), _LengthInterpolate(from.y, this.y, t), _LengthInterpolate(from.width, this.width, t), _LengthInterpolate(from.height, this.height, t));
      }
    }

    export class List<T extends Attribute<T>> extends Array<T> implements Attribute<List<T>> {
      toString(): string {
        return this.join('\t');
      }
      parse(css: string | null): List<T> {
        if (css !== null) {
          let list = new List<T>();
          css.split('\t').forEach((s, i) => {
            list.push(this[i].parse(s));
          });
          return list;
        } else {
          return new List<T>();
        }
      }
      get(element: Element<SVGElement, any>, attr: string): List<T> {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: List<T>): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      interpolate(from: List<T>, t: number): List<T> {
        let list = new List<T>();
        for (let i = 0; i != this.length; ++i) {
          list.push(this[i].interpolate(from[i], t));
        }
        return list;
      }
    }

    export abstract class Transform implements Attribute<Transform> {
      constructor(public type: 'matrix' | 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY') {}
      abstract args(): string;
      toString(): string {
        return `${this.type}(${this.args()})`
      }
      abstract parseArgs(args: string | null): Transform;
      parse(css: string | null): Transform {
        if (css !== null) {
          return this.parseArgs(css.substring(css.indexOf('(') + 1, css.length - 1));
        } else {
          return this.parseArgs(css);
        }
      }
      get(element: Element<SVGElement, any>, attr: string): Transform {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: Transform): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      abstract interpolate(from: Transform, t: number): Transform;
    }
    export namespace Transform {
      export class Matrix extends Transform {
        constructor(public a: number = 1, public b: number = 0, public c: number = 0, public d: number = 1, public e: number = 0, public f: number = 0) {
          super('matrix');
        }
        args(): string {
          return `${this.a} ${this.b} ${this.c} ${this.d} ${this.e} ${this.f}`;
        }
        parseArgs(css: string | null): Matrix {
          if (css !== null) {
            let toks = css.split(' ');
            return new Matrix(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]), parseFloat(toks[4]), parseFloat(toks[5]));
          } else {
            return new Matrix();
          }
        }
        interpolate(from: Matrix, t: number): Matrix {
          return new Matrix(_mix(from.a, this.a, t), _mix(from.b, this.b, t), _mix(from.c, this.c, t), _mix(from.d, this.d, t), _mix(from.e, this.e, t), _mix(from.f, this.f, t));
        }
      }
      export class Translate extends Transform {
        constructor(public x: number = 0, public y: number = 0) {
          super('translate');
        }
        args(): string {
          return `${this.x} ${this.y}`;
        }
        parseArgs(css: string | null): Translate {
          if (css !== null) {
            let toks = css.split(' ');
            if (toks.length === 1) {
              return new Translate(parseFloat(toks[0]));
            } else {
              return new Translate(parseFloat(toks[0]), parseFloat(toks[1]));
            }
          } else {
            return new Translate();
          }
        }
        interpolate(from: Translate, t: number): Translate {
          return new Translate(_mix(from.x, this.x, t), _mix(from.y, this.y, t));
        }
      }
      export class UniformScale extends Transform {
        constructor(public s: number = 1) {
          super('scale');
        }
        args(): string {
          return this.s.toString();
        }
        parseArgs(css: string | null): UniformScale {
          if (css !== null) {
            return new UniformScale(parseFloat(css));
          } else {
            return new UniformScale();
          }
        }
        interpolate(from: UniformScale, t: number): UniformScale {
          return new UniformScale(_mix(from.s, this.s, t));
        }
      }
      export class Scale extends Transform {
        constructor(public x: number = 1, public y: number = x) {
          super('scale');
        }
        args(): string {
          return `${this.x} ${this.y}`;
        }
        parseArgs(css: string | null): Scale {
          if (css !== null) {
            let toks = css.split(' ');
            if (toks.length === 1) {
              return new Scale(parseFloat(toks[0]));
            } else {
              return new Scale(parseFloat(toks[0]), parseFloat(toks[1]));
            }
          } else {
            return new Scale();
          }
        }
        interpolate(from: Scale, t: number): Scale {
          return new Scale(_mix(from.x, this.x, t), _mix(from.y, this.y, t));
        }
      }
      export class Rotate extends Transform {
        constructor(public a: number, public x: number = 0, public y: number = 0) {
          super('rotate');
        }
        args(): string {
          return `${this.a} ${this.x} ${this.y}`;
        }
        parseArgs(css: string | null): Rotate {
          if (css !== null) {
            let toks = css.split(' ');
            return new Rotate(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
          } else {
            return new Rotate(0);
          }
        }
        interpolate(from: Rotate, t: number): Rotate {
          return new Rotate(_mix(from.a, this.a, t), _mix(from.x, this.x, t), _mix(from.y, this.y, t));
        }
      }
      export class SkewX extends Transform {
        constructor(public a: number = 0) {
          super('skewX');
        }
        args(): string {
          return this.a.toString();
        }
        parseArgs(css: string | null): SkewX {
          if (css !== null) {
            return new SkewX(parseFloat(css));
          } else {
            return new SkewX();
          }
        }
        interpolate(from: SkewX, t: number): SkewX {
          return new SkewX(_mix(from.a, this.a, t));
        }
      }
      export class SkewY extends Transform {
        constructor(public a: number = 0) {
          super('skewY');
        }
        args(): string {
          return this.a.toString();
        }
        parseArgs(css: string | null): SkewY {
          if (css !== null) {
            return new SkewY(parseFloat(css));
          } else {
            return new SkewY();
          }
        }
        interpolate(from: SkewY, t: number): SkewY {
          return new SkewY(_mix(from.a, this.a, t));
        }
      }
    }

    export abstract class PathSegment implements Attribute<PathSegment> {
      type: 'M' | 'm' | 'L' | 'l' | 'Q' | 'q' | 'T' | 't' | 'C' | 'c' | 'S' | 's' | 'A' | 'a' | 'Z';
      abstract toString(): string;
      parse(css: string | null): PathSegment {
        if (css !== null) {
          return this.parseArgs(css.substr(2));
        } else {
          return this.defaultInstance();
        }
      }
      get(element: Element<SVGElement, any>, attr: string): PathSegment {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: PathSegment): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      abstract parseArgs(css: string): PathSegment;
      abstract defaultInstance(): PathSegment;
      abstract interpolate(from: PathSegment, t: number): PathSegment;
    }
    export namespace PathSegment {
      export abstract class SinglePoint extends PathSegment {
        abstract type: 'M' | 'm' | 'L' | 'l' | 'T' | 't';
        constructor(public p: Point = new Point(0, 0)) {
          super();
        }
        toString(): string {
          return `${this.type} ${this.p.toString()}`;
        }
        parseArgs(css: string): SinglePoint { 
          return this.buildInstance(this.p.parse(css));
        }
        interpolate(from: SinglePoint, t: number): SinglePoint {
          return this.buildInstance(this.p.interpolate(from.p, t));
        }
        abstract buildInstance(p: Point): SinglePoint;
        abstract defaultInstance(): SinglePoint;
      }
      export abstract class DoublePoint extends PathSegment {
        abstract type: 'Q' | 'q' | 'S' | 's';
        constructor(public p1: Point = new Point(0, 0), public p2: Point = new Point(0, 0)) {
          super();
        }
        toString(): string {
          return `${this.type} ${this.p1.toString()} ${this.p2.toString()}`;
        }
        parseArgs(css: string): DoublePoint {
          let toks = css.split(' ');
          return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]));
        }
        interpolate(from: DoublePoint, t: number): DoublePoint {
          return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t));
        }
        abstract buildInstance(p1: Point, p2: Point): DoublePoint;
        abstract defaultInstance(): DoublePoint;
      }
      export abstract class TriplePoint extends PathSegment {
        abstract type: 'C' | 'c';
        constructor(public p1: Point = new Point(0, 0), public p2: Point = new Point(0, 0), public p3: Point = new Point(0, 0)) {
          super();
        }
        toString(): string {
          return `${this.type} ${this.p1.toString()} ${this.p2.toString()} ${this.p3.toString()}`;
        }
        parseArgs(css: string): TriplePoint {
          let toks = css.split(' ');
          return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]), this.p3.parse(toks[2]));
        }
        interpolate(from: TriplePoint, t: number): TriplePoint {
          return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t), this.p3.interpolate(from.p3, t));
        }
        abstract buildInstance(p1: Point, p2: Point, p3: Point): TriplePoint;
        abstract defaultInstance(): TriplePoint;
      }
      export class MoveToAbs extends SinglePoint {
        type: 'M' = 'M';
        buildInstance(p: Point): MoveToAbs {
          return new MoveToAbs(p);
        }
        defaultInstance(): MoveToAbs {
          return new MoveToAbs();
        }
      }
      export class MoveToRel extends SinglePoint {
        type: 'm' = 'm';
        buildInstance(p: Point): MoveToRel {
          return new MoveToRel(p);
        }
        defaultInstance(): MoveToRel {
          return new MoveToRel();
        }
      }
      export class LineToAbs extends SinglePoint {
        type: 'L' = 'L';
        buildInstance(p: Point): LineToAbs {
          return new LineToAbs(p);
        }
        defaultInstance(): LineToAbs {
          return new LineToAbs();
        }
      }
      export class LineToRel extends SinglePoint {
        type: 'l' = 'l';
        buildInstance(p: Point): LineToRel {
          return new LineToRel(p);
        }
        defaultInstance(): LineToRel {
          return new LineToRel();
        }
      }
      export class CurveToQuadraticAbs extends DoublePoint {
        type: 'Q' = 'Q';
        buildInstance(p1: Point, p2: Point): CurveToQuadraticAbs {
          return new CurveToQuadraticAbs(p1, p2);
        }
        defaultInstance(): CurveToQuadraticAbs {
          return new CurveToQuadraticAbs();
        }
      }
      export class CurveToQuadraticRel extends DoublePoint {
        type: 'q' = 'q';
        buildInstance(p1: Point, p2: Point): CurveToQuadraticRel {
          return new CurveToQuadraticRel(p1, p2);
        }
        defaultInstance(): CurveToQuadraticRel {
          return new CurveToQuadraticRel();
        }
      }
      export class CurveToQuadraticSmoothAbs extends SinglePoint {
        type: 'T' = 'T';
        buildInstance(p: Point): CurveToQuadraticSmoothAbs {
          return new CurveToQuadraticSmoothAbs(p);
        }
        defaultInstance(): CurveToQuadraticSmoothAbs {
          return new CurveToQuadraticSmoothAbs();
        }
      }
      export class CurveToQuadraticSmoothRel extends SinglePoint {
        type: 't' = 't';
        buildInstance(p: Point): CurveToQuadraticSmoothRel {
          return new CurveToQuadraticSmoothRel(p);
        }
        defaultInstance(): CurveToQuadraticSmoothRel {
          return new CurveToQuadraticSmoothRel();
        }
      }
      export class CurveToCubicAbs extends TriplePoint {
        type: 'C' = 'C';
        buildInstance(p1: Point, p2: Point, p3: Point): CurveToCubicAbs {
          return new CurveToCubicAbs(p1, p2, p3);
        }
        defaultInstance(): CurveToCubicAbs {
          return new CurveToCubicAbs();
        }
      }
      export class CurveToCubicRel extends TriplePoint {
        type: 'c' = 'c';
        buildInstance(p1: Point, p2: Point, p3: Point): CurveToCubicRel {
          return new CurveToCubicRel(p1, p2, p3);
        }
        defaultInstance(): CurveToCubicRel {
          return new CurveToCubicRel();
        }
      }
      export class CurveToCubicSmoothAbs extends DoublePoint {
        type: 'S' = 'S';
        buildInstance(p1: Point, p2: Point): CurveToCubicSmoothAbs {
          return new CurveToCubicSmoothAbs(p1, p2);
        }
        defaultInstance(): CurveToCubicSmoothAbs {
          return new CurveToCubicSmoothAbs();
        }
      }
      export class CurveToCubicSmoothRel extends DoublePoint {
        type: 's' = 's';
        buildInstance(p1: Point, p2: Point): CurveToCubicSmoothRel {
          return new CurveToCubicSmoothRel(p1, p2);
        }
        defaultInstance(): CurveToCubicSmoothRel {
          return new CurveToCubicSmoothRel();
        }
      }
      export abstract class ArcTo extends PathSegment {
        abstract type: 'A' | 'a';
        constructor(public r: Point = new Point(0, 0), public p: Point = new Point(0, 0), public xAxisRotate: number = 0, public largeArc: boolean = false, public sweepClockwise: boolean = true) {
          super();
        }
        toString(): string {
          return `${this.r.toString()} ${this.xAxisRotate} ${this.largeArc ? 1 : 0} ${this.sweepClockwise ? 1 : 0} ${this.p.toString()}`;
        }
        parseArgs(css: string): ArcTo {
          let toks = css.split(' ');
          return this.buildInstance(this.r.parse(toks[0]), this.p.parse(toks[4]), parseFloat(toks[1]), toks[2] === '1', toks[3] === '1');
        }
        interpolate(from: ArcTo, t: number): ArcTo {
          return this.buildInstance(this.r.interpolate(from.r, t), this.p.interpolate(from.p, t), _mix(from.xAxisRotate, this.xAxisRotate, t), (t < 0.5) ? from.largeArc : this.largeArc, (t < 0.5) ? from.sweepClockwise : this.sweepClockwise);
        }
        abstract buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcTo;
        abstract defaultInstance(): ArcTo;
      }
      export class ArcToAbs extends ArcTo {
        type: 'A' = 'A';
        buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToAbs {
          return new ArcToAbs(r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        defaultInstance(): ArcToAbs {
          return new ArcToAbs();
        }
      }
      export class ArcToRel extends ArcTo {
        type: 'a' = 'a';
        buildInstance(r: Point, p: Point, xAxisRotate: number, largeArc: boolean, sweepClockwise): ArcToRel {
          return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        defaultInstance(): ArcToRel {
          return new ArcToRel();
        }
      }
      export class ClosePath extends PathSegment {
        type: 'Z' = 'Z';
        toString(): string {
          return 'Z';
        }
        parseArgs(css: string): ClosePath {
          return new ClosePath();
        }
        defaultInstance(): ClosePath {
          return new ClosePath();
        }
        interpolate(from: ClosePath, t: number): ClosePath {
          return new ClosePath();
        }
      }
    }

    export class PreserveAspectRatio {
      constructor();
      constructor(x: 'Min' | 'Mid' | 'Max', y: 'Min' | 'Mid' | 'Max');
      constructor(x: 'Min' | 'Mid' | 'Max', y: 'Min' | 'Mid' | 'Max', meetOrSlice: 'meet' | 'slice');
      constructor(public x?: 'Min' | 'Mid' | 'Max', public y?: 'Min' | 'Mid' | 'Max', public meetOrSlice?: 'meet' | 'slice') {}
      toString(): string {
        if (this.x !== undefined && this.y !== undefined) {
          let str = `x${this.x}Y${this.y}`;
          if (this.meetOrSlice !== undefined) {
            str += ' ' + this.meetOrSlice;
          }
          return str;
        } else {
          return 'none';
        }
      }
    }

    export class Matrix implements Attribute<Matrix> {
      arr: number[] = [];
      constructor(values: number[][]) {
        this.arr = this.arr.concat(...values);
      }
      toString(): string {
        return this.arr.join('\t');
      }
      parse(css: string | null): Matrix {
        if (css !== null) {
          return new Matrix([css.split('\t').map(parseFloat)]);
        } else {
          return new Matrix([]);
        }
      }
      get(element: Element<SVGElement, any>, attr: string): Matrix {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: Matrix): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      interpolate(from: Matrix, t: number): Matrix {
        return new Matrix([this.arr.map((val, i) => _mix(from[i], val, t))]);
      }
    }

    export interface ColorMatrix {
      type: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha';
      toString(): string;
    }

    export class RawColorMatrix extends Matrix implements ColorMatrix {
      type: 'matrix' = 'matrix';
      constructor(values: number[][] = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]]) {
        super(values);
      }
    }

    export class SaturateColorMatrix implements ColorMatrix, Attribute<SaturateColorMatrix> {
      type: 'saturate' = 'saturate';
      constructor(public value: number = 1) {}
      toString(): string {
        return this.value.toString();
      }
      parse(css: string | null): SaturateColorMatrix {
        if (css !== null) {
          return new SaturateColorMatrix(parseFloat(css));
        } else {
          return new SaturateColorMatrix();
        }
      }
      get(element: Element<SVGElement, any>, attr: string): SaturateColorMatrix {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: SaturateColorMatrix): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      interpolate(from: SaturateColorMatrix, t: number): SaturateColorMatrix {
        return new SaturateColorMatrix(_mix(from.value, this.value, t));
      }
    }

    export class HueRotateColorMatrix implements ColorMatrix, Attribute<HueRotateColorMatrix> {
      type: 'hueRotate' = 'hueRotate';
      constructor(public value: number = 0) {}
      toString(): string {
        return this.value.toString();
      }
      parse(css: string | null): HueRotateColorMatrix {
        if (css !== null) {
          return new HueRotateColorMatrix(parseFloat(css));
        } else {
          return new HueRotateColorMatrix();
        }
      }
      get(element: Element<SVGElement, any>, attr: string): HueRotateColorMatrix {
        return this.parse(element.getAttribute(attr));
      }
      set(element: Element<SVGElement, any>, attr: string, override?: HueRotateColorMatrix): void {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
      interpolate(from: HueRotateColorMatrix, t: number): HueRotateColorMatrix {
        return new HueRotateColorMatrix(_mix(from.value, this.value, t));
      }
    }

    export class LuminanceToAlphaColorMatrix implements ColorMatrix {
      type: 'luminanceToAlpha' = 'luminanceToAlpha';
      toString(): string {
        return "";
      }
    }

    export interface Presentation {
      "alignment-baseline": 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | Inherit;
      "baseline-shift": 'auto' | 'baseline' | 'super' | 'sub' | number | Inherit;
      "color": Color | Inherit;
      "color-interpolation": 'auto' | 'sRGB' | 'linearRGB' | Inherit;
      "color-interpolation-filters": 'auto' | 'sRGB' | 'linearRGB' | Inherit;
      "color-profile": 'auto' | 'sRGB' | string | Inherit;
      "color-rendering": 'auto' | 'optimizeSpeed' | 'optimizeQuality' | Inherit;
      
      "dominant-baseline": 'auto' | 'use-script' | 'no-change' | 'reset-size' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'central' | 'middle' | 'text-after-edge' | 'text-before-edge' | Inherit;
      "fill": Paint;
      "fill-rule": 'nonzero' | 'evenodd' | Inherit;
      "filter": string | 'none' | Inherit;
      "opacity": number | Inherit;
      "shape-rendering": 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | Inherit;
      "stroke": Paint;
      "stroke-dasharray": 'none' | List<Number> | Inherit;
      "stroke-dashoffset": Percentage | Length | Inherit;
      "stroke-linecap": 'butt' | 'round' | 'square' | Inherit;
      "stroke-linejoin": 'miter' | 'round' | 'bevel' | Inherit;
      "stroke-miterlimit": number | Inherit;
      "stroke-width": Length | Percentage | Inherit;
    };

    export interface Textual {
      "direction": 'ltr' | 'rtl' | Inherit;
      "font-family": string | Inherit;
      "font-size": Length | Inherit;
      "font-size-adjust": number | 'none' | Inherit;
      "font-stretch": 'normal' | 'wider' | 'narrower' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded' | Inherit;
      "font-style": 'normal' | 'italic' | 'oblique' | Inherit;
      "font-variant": 'normal' | 'small-caps' | Inherit;
      "font-weight": 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Inherit;
      "kerning": 'auto' | Length | Inherit;
      "letter-spacing": 'normal' | Length | Inherit;
      "text-anchor": 'start' | 'middle' | 'end' | Inherit;
      "text-decoration": 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | Inherit;
      "text-rendering": 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometericPrecision' | Inherit;
      "word-spacing": 'normal' | Length | Inherit;
      "writing-mode": 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | Inherit;
    };

    export interface HasStyle { style: string };
    export interface HasClass { class: string };
    export interface Transformable { transform: List<Transform> };

    export type Renderable = Presentation & HasStyle & HasClass & Transformable;
    export namespace Renderable {

      export namespace Shape {
        export type Circle = { cx: Length, cy: Length, "cx:cy": Point, r: Length };
        export type Ellipse = { cx: Length, cy: Length, "cx:cy": Point, rx: Length, ry: Length, "rx:ry": Point };
        export type Line = { x1: Length, y1: Length, "x1:y1": Point, x2: Length, y2: Length, "x2:y2": Point };
        export type Polygon = { points: List<Point> };
        export type Polyline = { points: List<Point> };
        export type Path = { d: List<PathSegment>, pathLength: number };
        export type Rect = { x: Length, y: Length, "x:y": Point, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox, rx: Length, ry: Length, "rx:ry": Point };
      }

      export type Image = { x: Length, y: Length, "x:y": Point, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox, "xlink:href": string, preserveAspectRatio?: PreserveAspectRatio, viewBox?: ViewBox };
      export type Text = { x: Length, y: Length, "x:y": Point, dx: Length, dy: Length, "dx:dy": Point, textLength?: Length };
      //export type Use = { x: Length, y: Length, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox, "xlink:href": Element<any, any> };

    }

    export type NonRenderable = Presentation & HasStyle & HasClass;
    export namespace NonRenderable {

      export namespace PaintServer {

        export type Gradient = { gradientUnits: 'userSpaceOnUse' | 'objectBoundingBox', gradientTransform: List<Transform>, spreadMethod: 'pad' | 'reflect' | 'repeat', "xlink:href": string };
        export namespace Gradient {
          export type Linear = Gradient & { x1: Length, y1: Length, "x1:y1": Point, x2: Length, y2: Length, "x2:y2": Point };
          export type Radial = Gradient & { cx: Length, cy: Length, "cx:cy": Point, r: Length, fx: Length, fy: Length, "fx:fy": Point };
          export type Stops = { [offset: number]: 'currentColor' | Color | Inherit };
        }

        export type Pattern = { patternUnits: 'userSpaceOnUse' | 'objectBoundingBox', patternContentUnits: 'userSpaceOnUse' | 'objectBoundingBox', patternTransform: List<Transform>, x: Length, y: Length, "x:y": Point, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox, "xlink:href": string, preserveAspectRatio: PreserveAspectRatio, viewBox: ViewBox };

      }

      export type Marker = { markerUnits: 'userSpaceOnUse' | 'strokeWidth', refX: Length, refY: Length, "refX:refY": Point, markerWidth: Length, markerHeight: Length, orient: 'auto' | 'auto-start-reverse' | number | string, viewBox: ViewBox };
      export type Mask = { maskUnits: 'userSpaceOnUse' | 'objectBoundingBox', maskContentUnits: 'userSpaceOnUse' | 'objectBoundingBox', x: Length, y: Length, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox };

    }

    export type FilterPrimitive = Presentation & HasClass & HasStyle & { x: Length, y: Length, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox, result: string };
    export namespace FilterPrimitive {

      export type Blend = { in: Element.FilterPrimitive<any, any>, in2: Element.FilterPrimitive<any, any>, mode: 'normal' | 'multiply' | 'screen' | 'darken' | 'lighten' };
      export type ColorMatrix = { in: Element.FilterPrimitive<any, any>, type: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha', values: Attribute.ColorMatrix };
      export type ComponentTransfer = { in: Element.FilterPrimitive<any, any> };
      export type Composite = { in: Element.FilterPrimitive<any, any>, in2: Element.FilterPrimitive<any, any>, operator: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic', k1: number, k2: number, k3: number, k4: number };
      export type ConvolveMatrix = { in: Element.FilterPrimitive<any, any>, order: NumberOptionalNumber, kernelMatrix: Matrix, divisor: number, bias: number, targetX: number, targetY: number, edgeMode: 'duplicate' | 'wrap' | 'none', kernelUnitLength: NumberOptionalNumber, preserveAlpha: boolean };
      export type DiffuseLighting = { in: Element.FilterPrimitive<any, any>, surfaceScale: number, diffuseConstant: number, kernelUnitLength: NumberOptionalNumber };
      export type DisplacementMap = { in: Element.FilterPrimitive<any, any>, in2: Element.FilterPrimitive<any, any>, scale: number, xChannelSelector: 'R' | 'G' | 'B' | 'A', yChannelSelector: 'R' | 'G' | 'B' | 'A' };
      export type DropShadow = { in: Element.FilterPrimitive<any, any>, stdDeviation: number, dx: Length, dy: Length, "dx:dy": Point };
      export type Flood = { "flood-color": 'currentColor' | Color };
      export type GaussianBlur = { in: Element.FilterPrimitive<any, any>, stdDeviation: number, edgeMode: 'duplicate' | 'wrap' | 'none' };
      export type Image = { preserveAspectRatio: PreserveAspectRatio, "xlink:href": string };
      export type MergeNode = { in: Element.FilterPrimitive<any, any> };
      export type Morphology = { in: Element.FilterPrimitive<any, any>, operator: 'erode' | 'dilate', radius: NumberOptionalNumber };
      export type Offset = { in: Element.FilterPrimitive<any, any>, dx: Length, dy: Length, "dx:dy": Point };
      export type SpecularLighting = { in: Element.FilterPrimitive<any, any>, surfaceScale: number, specularConstant: number, specularExponent: number, kernelUnitLength: NumberOptionalNumber };
      export type Tile = { in: Element.FilterPrimitive<any, any> };
      export type Turbulence = { type: 'fractalNoise' | 'turbulence', baseFrequency: NumberOptionalNumber, numOctaves: number, seed: number, stitchTiles: 'noStitch' | 'stitch' };

      export type IdentityFunction = {
        type: 'identity';
      };

      export interface TabularFunction {
        type: 'table' | 'discrete';
        tableValues: List<Number>;
      };

      export interface LinearFunction {
        type: 'linear';
        slope: number;
        intercept: number;
      };

      export interface GammaFunction {
        type: 'gamma';
        amplitude: number;
        exponent: number;
        offset: number;
      };

      export type TransferFunction = IdentityFunction | TabularFunction | LinearFunction | GammaFunction;

      export namespace LightSource {
        export type DistantLight = { type: 'distant', azimuth: number, elevation: number };
        export type PointLight = { type: 'point', x: Length, y: Length, "x:y": Point, z: Length };
        export type SpotLight = { type: 'spot', x: Length, y: Length, "x:y": Point, z: Length, pointsAtX: Length, pointsAtY: Length, "pointsAtX:pointsAtY": Point, pointsAtZ: Length, specularExponent: number, limitingConeAngle: number };
      }
      export type LightSource = LightSource.DistantLight | LightSource.PointLight | LightSource.SpotLight;

    }

    export type Filter = { x: Length, y: Length, "x:y": Point, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox, filterUnits: 'userSpaceOnUse' | 'objectBoundingBox', primitiveUnits: 'userSpaceOnUse' | 'objectBoundingBox' };

  }

  interface Dynamic<Attrs> {
    element: Element<SVGElement, Attrs>;
    defs: Dynamic.Defined<Attrs>;
    progress: (now: number) => number | undefined;
  }
  export namespace Dynamic {
    
    export interface Definition<A extends string> extends Setter {
      set(element: Element<SVGElement, any>, attr: A): void;
    }

    export type Defined<Attrs> = {
      [A in keyof Attrs]?: Dynamic.Definition<A>;
    };

    export class MousePosition<A extends string> extends Attribute.Point implements Definition<A> {
      private xAttr: string;
      private yAttr: string;
      constructor(target: Document | HTMLElement | SVGElement | Paper = document) {
        super(0, 0);
        if (target instanceof Paper) {
          target = target.root;
        }
        target.addEventListener('mousemove', (e: MouseEvent) => {
          this.x = e.offsetX;
          this.y = e.offsetY;
        });
      }
    }
  }

  interface Animation<Attrs> extends Dynamic<Attrs> {
    from: Partial<Attrs>;
    attrs: Animation.Defined<Attrs>;
    resolve: (end: number) => any;
  }
  export namespace Animation {

    export type Defined<Attrs> = {
      [A in keyof Attrs]?: Attribute<Attrs[A]>;
    };

    export namespace Easing {
      const flip = (ease: (t: number) => number) => (t: number) => 1 - ease(1 - t);
      const inout = (easeIn: (t: number) => number, easeOut: (t: number) => number) => {
        return (t: number) => t < 0.5 ? easeIn(t * 2) / 2 : easeOut(2 * t - 1) / 2 + 0.5;
      };

      export const linear = (t: number) => t;
      export const quadraticIn = (t: number) => t ** 2;
      export const quadraticOut = flip(quadraticIn);
      export const quadratic = inout(quadraticIn, quadraticOut);
      export const cubicIn = (t: number) => t ** 3;
      export const cubicOut = flip(cubicIn);
      export const cubic = inout(cubicIn, cubicOut);
      export const quarticIn = (t: number) => t ** 4;
      export const quarticOut = flip(quarticIn);
      export const quartic = inout(quarticIn, quarticOut);
      export const quinticIn = (t: number) => t ** 5;
      export const quinticOut = flip(quinticIn);
      export const quintic = inout(quinticIn, quinticOut);
      export const sineIn = (t: number) => 1 - Math.cos(t * Math.PI / 2);
      export const sineOut = flip(sineIn);
      export const sine = inout(sineIn, sineOut);
      export const exponentialIn = (t: number) => 2 ** (10 * (t - 1));
      export const exponentialOut = flip(exponentialIn);
      export const exponential = inout(exponentialIn, exponentialOut);
      export const circularIn = (t: number) => 1 - Math.sqrt(1 - t ** 2);
      export const circularOut = flip(circularIn);
      export const circular = inout(circularIn, circularOut);
    }

  }

  function isAnimation<SVG extends SVGElement, Attrs>(dynamic: Dynamic<Attrs>): dynamic is Animation<Attrs> {
    return dynamic["from"] !== undefined && typeof dynamic["resolve"] === 'function';
  }

  class AnimationRunner {
    private static requestAnimationFrame: (callback: FrameRequestCallback) => number = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window['mozRequestAnimationFrame'] || window['oRequestAnimationFrame'] || window['msRequestAnimationFrame'] || function(this: Window, callback: FrameRequestCallback) { this.setTimeout(callback, 16) }).bind(window);
    private running = false;
    private queue: Dynamic<any>[] = [];
    private loop() {
      const now = performance.now();
      for (let i = this.queue.length - 1; i >= 0; --i) {
        const dyn = this.queue[i];
        const t = dyn.progress(now);
        if (isAnimation(dyn)) {
          if (t !== undefined) {
            for (let prop in dyn.attrs) {
              let attr = dyn.attrs[prop] as Attribute<any>;
              let mid = attr.interpolate(dyn.from[prop], t);
              if (mid instanceof Attribute.Color) {
                console.log(dyn.from[prop].toString(), mid.toString(), attr.toString());
              }
              attr.set(dyn.element, prop, mid);
            }
          } else {
            this.queue.splice(i, 1);
            for (let prop in dyn.attrs) {
              (dyn.attrs[prop] as Attribute<any>).set(dyn.element, prop);
            }
            dyn.resolve(now);
          }
        } else {
          if (t !== undefined) {
            for (let prop in dyn.defs) {
              (dyn.defs[prop] as Dynamic.Definition<any>).set(dyn.element, prop);
            }
          } else {
            this.queue.splice(i, 1);
            for (let prop in dyn.defs) {
              (dyn.defs[prop] as Dynamic.Definition<any>).set(dyn.element, prop);
            }
          }
        }
      }
      if (this.queue.length === 0) {
        this.stop();
      } else if (this.running) {
        AnimationRunner.requestAnimationFrame(() => {
          this.loop();
        });
      }
    }
    private stop() {
      this.running = false;
    }
    private start() {
      this.running = true;
      AnimationRunner.requestAnimationFrame(() => {
        this.loop();
      });
    }
    public add(anim: Dynamic<any>) {
      this.queue.push(anim);
      if (!this.running) {
        this.start();
      }
    }
  }

  export class Element<SVG extends SVGElement, Attrs> {
    public node: SVG;
    private style: CSSStyleDeclaration;
    public id: string = Math.random().toString(36).substring(2);
    constructor(paper: Paper, el: SVG);
    constructor(paper: Paper, name: string, attrs?: Partial<Attrs>);
    constructor(public paper: Paper, el: string | SVG, attrs?: Partial<Attrs>) {
      if (typeof el === 'string') {
        this.node = window.document.createElementNS(XMLNS, el) as SVG;
        if (attrs !== undefined) {
          this.setAttributes(attrs);
        }
        this.paper.root.appendChild(this.node);
        this.node.setAttribute('id', this.id);
      } else {
        this.node = el;
        let id = this.node.getAttribute('id');
        if (id !== null) {
          this.id = id;
        } else {
          this.node.setAttribute('id', this.id);
        }
      }
      this.style = window.getComputedStyle(this.node);
    }
    public toString(): string {
      return `url(#${this.id})`;
    }
    public setAttribute<Attr extends keyof Attrs>(name: Attr, val: Attrs[Attr]): void {
      this.node.setAttribute(name, String(val));
    }
    public setAttributes(attrs: Partial<Attrs>): void {
      for (let name in attrs) {
        let attr = attrs[name];
        if (attr !== undefined && attr !== null) {
          this.setAttribute(name, attr);
        }
      }
    }
    public getAttribute<Attr extends keyof Attrs>(name: Attr): string | null {
      let computed = this.style.getPropertyValue(name);
      if (computed === '') {
        return this.node.getAttribute(name);
      } else {
        return computed;
      }
    }
    public add(el: Element<SVGElement, any>) {
      this.node.appendChild(el.node);
    }
    public getChildren(): Element<SVGElement, any>[] {
      let children = this.node.children;
      let elements: Element<SVGElement, any>[] = [];
      for (let i = 0; i < children.length; ++i) {
        elements.push(new Element(this.paper, <SVGElement>children.item(i)));
      }
      return elements;
    }
    public dynamic(defs: Dynamic.Defined<Attrs>) {
      this.paper.registerDynamic(this, defs);
    }
    public animate(attrs: Partial<Attrs>, duration: number, easing: (t: number) => number = Animation.Easing.linear): Promise<number> {
      let defs = {} as Animation.Defined<Attrs>;
      for (let prop in attrs) {
        let a = attrs[prop];
        if (a !== undefined) {
          if (Attribute.isAttribute(a)) {
            defs[prop] = a;
          } else if (typeof a === 'number') {
            defs[prop] = new Attribute.Number(a as any as number) as Attribute<any>;
          }
        }
      }
      return this.paper.registerAnimation(this, defs, duration, easing);
    }
    public addEventListener(event: 'focusin' | 'focusout' | 'mousedown' | 'mouseup' | 'mousemove' | 'mouseover' | 'mouseout', listener: (this: this, event: MouseEvent) => any): void;
    public addEventListener(event: 'touchstart' | 'touchend' | 'touchmove' | 'touchcancel', listener: (this: this, event: TouchEvent) => any): void;
    public addEventListener(event: string, listener: (this: this, event: Event) => any): void {
      this.node.addEventListener(event, listener.bind(this));
    }
    public toPattern(w: number, h: number): Element.NonRenderable.PaintServer.Pattern;
    public toPattern(w: number, h: number, x: number, y: number): Element.NonRenderable.PaintServer.Pattern;
    public toPattern(w: number, h: number, x: number, y: number, view: Attribute.ViewBox): Element.NonRenderable.PaintServer.Pattern;
    public toPattern(w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Element.NonRenderable.PaintServer.Pattern {
      let pattern = new Element.NonRenderable.PaintServer.Pattern(this.paper, w, h, x, y, view);
      let children = this.node.children;
      for (let i = 0; i < children.length; ++i) {
        pattern.node.appendChild(children.item(i));
      }
      return pattern;
    }
  }

  export namespace Element {
    export abstract class Renderable<E extends SVGElement, RenderableAttributes> extends Element<E, Attribute.Renderable & RenderableAttributes> {}
    export namespace Renderable {
      export abstract class Shape<E extends SVGElement, ShapeAttributes> extends Renderable<E, ShapeAttributes> {}
      export namespace Shape {
        export class Circle extends Shape<SVGCircleElement, Attribute.Renderable.Shape.Circle> {
          constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Circle>) {
            super(paper, 'circle', attrs);
          }
        };
        export class Ellipse extends Shape<SVGEllipseElement, Attribute.Renderable.Shape.Ellipse> {
          constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Ellipse>) {
            super(paper, 'ellipse', attrs);
          }
        };
        export class Line extends Shape<SVGLineElement, Attribute.Renderable.Shape.Line> {
          constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Line>) {
            super(paper, 'line', attrs);
          }
        };
        export class Polygon extends Shape<SVGPolygonElement, Attribute.Renderable.Shape.Polygon> {
          constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Polygon>) {
            super(paper, 'polygon', attrs);
          }
        };
        export class Polyline extends Shape<SVGPolylineElement, Attribute.Renderable.Shape.Polyline> {
          constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Polyline>) {
            super(paper, 'polyline', attrs);
          }
        };
        export class Path extends Shape<SVGPathElement, Attribute.Renderable.Shape.Path> {
          constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Path>) {
            super(paper, 'path', attrs);
          }
        };
        export class Rect extends Shape<SVGRectElement, Attribute.Renderable.Shape.Rect> {
          constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Rect>) {
            super(paper, 'rect', attrs);
          }
        };
      }
      export class Image extends Renderable<SVGImageElement, Attribute.Renderable.Image> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Image>) {
          super(paper, 'image', attrs);
        }
      };
      export class Text extends Renderable<SVGTextElement, Attribute.Textual | Attribute.Renderable.Text> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Textual | Attribute.Renderable.Text>) {
          super(paper, 'text', attrs);
        }
      };
      // export class Use extends Element<SVGUseElement, Attributes.Graphic & Attributes.Graphic.Use> {
      //   constructor(paper: Paper, attrs?: Partial<Attributes.Graphic & Attributes.Graphic.Use>) {
      //       super(paper, 'use', attrs);
      //     }
      // };
      export class G extends Renderable<SVGGElement, void> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable>) {
          super(paper, 'g', attrs);
        }
      }
    }

    export abstract class NonRenderable<E extends SVGElement, NonRenderableAttributes> extends Element<E, Attribute.NonRenderable & NonRenderableAttributes> {}
    export namespace NonRenderable {
      export abstract class PaintServer<E extends SVGElement, PaintServerAttributes> extends NonRenderable<E, PaintServerAttributes> {}
      export namespace PaintServer {
        export abstract class Gradient<E extends SVGElement, GradientAttributes extends Attribute.NonRenderable.PaintServer.Gradient> extends PaintServer<E, GradientAttributes> {}
        export namespace Gradient {
          export class Linear extends Gradient<SVGLinearGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Linear> {
            constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable | Attribute.NonRenderable.PaintServer.Gradient.Linear>) {
              super(paper, 'linearGradient', attrs);
              Object.keys(stops).forEach(offset => {
                let stop = window.document.createElementNS(XMLNS, 'stop');
                stop.setAttribute('offset', offset);
                stop.setAttribute('stop-color', stops[offset]);
                this.node.appendChild(stop);
              });
            }
          };
          export class Radial extends Gradient<SVGRadialGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Radial> {
            constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable | Attribute.NonRenderable.PaintServer.Gradient.Radial>) {
              super(paper, 'radialGradient', attrs);
              Object.keys(stops).forEach(offset => {
                let stop = window.document.createElementNS(XMLNS, 'stop');
                stop.setAttribute('offset', offset);
                stop.setAttribute('stop-color', stops[offset]);
                this.node.appendChild(stop);
              });
            }
          };
        }
        export class Pattern extends PaintServer<SVGPatternElement, Attribute.NonRenderable.PaintServer.Pattern> {
          constructor(public paper: Paper, w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox) {
            super(paper, 'pattern');
            this.paper.addDef(this);
            this.setAttribute('width', w);
            this.setAttribute('height', h);
            if (x !== undefined || y !== undefined || view) {
              this.setAttribute('patternUnits', 'userSpaceOnUse');
              if (x !== undefined) {
                this.setAttribute('x', x);
              }
              if (y !== undefined) {
                this.setAttribute('y', y);
              }
              if (view) {
                this.setAttribute('viewBox', view);
              } else {
                this.setAttribute('viewBox', new Attribute.ViewBox(0, 0, w, h));
              }
            }
          }
        };
      }
      export class Marker extends Element<SVGMarkerElement, Attribute.NonRenderable & Attribute.NonRenderable.Marker> {
        constructor(paper: Paper, attrs?: Partial<Attribute.NonRenderable & Attribute.NonRenderable.Marker>) {
          super(paper, 'marker', attrs);
        }
      };
      export class Mask extends Element<SVGMaskElement, Attribute.NonRenderable & Attribute.NonRenderable.Mask> {
        constructor(public paper: Paper, w: number, h: number, x?: number, y?: number, units?: 'userSpaceOnUse' | 'objectBoundingBox', contentUnits?: 'userSpaceOnUse' | 'objectBoundingBox') {
          super(paper, 'mask');
          this.paper.addDef(this);
          this.setAttribute('width', w);
          this.setAttribute('height', h);
          if (x !== undefined) {
            this.setAttribute('x', x);
          }
          if (y !== undefined) {
            this.setAttribute('y', y);
          }
          if (units !== undefined) {
            this.setAttribute('maskUnits', units);
          }
          if (contentUnits !== undefined) {
            this.setAttribute('maskContentUnits', contentUnits);
          }
        }
      };
    }

    export class FilterPrimitive<FE extends SVGElement, A> extends Element<FE, Attribute.FilterPrimitive & A> {
      constructor(filter: Filter, name: string, attrs?: Partial<Attribute.FilterPrimitive & A>) {
        super(filter.paper, name, attrs);
        //filter.node.appendChild(this.node);
        //this.setAttribute("result", this.id);
      }
    }
    export namespace FilterPrimitive {
      export class Blend extends FilterPrimitive<SVGFEBlendElement, Attribute.FilterPrimitive.Blend> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Blend>) {
          super(filter, 'feBlend', attrs);
        }
      };
      export class ColorMatrix extends FilterPrimitive<SVGFEColorMatrixElement, Attribute.FilterPrimitive.ColorMatrix> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ColorMatrix>) {
          super(filter, 'feColorMatrix', attrs);
        }
      };
      export class ComponentTransfer extends FilterPrimitive<SVGFEComponentTransferElement, Attribute.FilterPrimitive.ComponentTransfer> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ComponentTransfer>) {
          super(filter, 'feComponentTransfer', attrs);
        }
      };
      export class Composite extends FilterPrimitive<SVGFECompositeElement, Attribute.FilterPrimitive.Composite> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Composite>) {
          super(filter, 'feComposite', attrs);
        }
      };
      export class ConvolveMatrix extends FilterPrimitive<SVGFEConvolveMatrixElement, Attribute.FilterPrimitive.ConvolveMatrix> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ConvolveMatrix>) {
          super(filter, 'feConvolveMatrix', attrs);
        }
      };
      export class DiffuseLighting extends FilterPrimitive<SVGFEDiffuseLightingElement, Attribute.FilterPrimitive.DiffuseLighting> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.DiffuseLighting>) {
          super(filter, 'feDiffuseLighting', attrs);
        }
      };
      export class DisplacementMap extends FilterPrimitive<SVGFEDisplacementMapElement, Attribute.FilterPrimitive.DisplacementMap> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.DisplacementMap>) {
          super(filter, 'feDisplacementMap', attrs);
        }
      };
      export class Flood extends FilterPrimitive<SVGFEFloodElement, Attribute.FilterPrimitive.Flood> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Flood>) {
          super(filter, 'feFlood', attrs);
        }
      };
      export class GaussianBlur extends FilterPrimitive<SVGFEGaussianBlurElement, Attribute.FilterPrimitive.GaussianBlur> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.GaussianBlur>) {
          super(filter, 'feGaussianBlur', attrs);
        }
      };
      export class Image extends FilterPrimitive<SVGFEImageElement, Attribute.FilterPrimitive.Image> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Image>) {
          super(filter, 'feImage', attrs);
        }
      };
      export class Merge extends FilterPrimitive<SVGFEMergeElement, void> {
        constructor(filter: Filter) {
          super(filter, 'feMerge');
        }
      };
      export class MergeNode extends FilterPrimitive<SVGFEMergeNodeElement, Attribute.FilterPrimitive.MergeNode> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.MergeNode>) {
          super(filter, 'feMergeNode', attrs);
        }
      };
      export class Morphology extends FilterPrimitive<SVGFEMorphologyElement, Attribute.FilterPrimitive.Morphology> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Morphology>) {
          super(filter, 'feMorphology', attrs);
        }
      };
      export class Offset extends FilterPrimitive<SVGFEOffsetElement, Attribute.FilterPrimitive.Offset> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Offset>) {
          super(filter, 'feOffset', attrs);
        }
      };
      export class SpecularLighting extends FilterPrimitive<SVGFESpecularLightingElement, Attribute.FilterPrimitive.SpecularLighting> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.SpecularLighting>) {
          super(filter, 'feSpecularLighting', attrs);
        }
      };
      export class Tile extends FilterPrimitive<SVGFETileElement, Attribute.FilterPrimitive.Tile> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Tile>) {
          super(filter, 'feTile', attrs);
        }
      };
      export class Turbulence extends FilterPrimitive<SVGFETurbulenceElement, Attribute.FilterPrimitive.Turbulence> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Turbulence>) {
          super(filter, 'feTurbulence', attrs);
        }
      };
      export class TransferFunction extends FilterPrimitive<SVGFEFuncRElement | SVGFEFuncGElement | SVGFEFuncBElement | SVGFEFuncAElement, Attribute.FilterPrimitive.TransferFunction> {
        constructor(filter: Filter, channel: 'R' | 'G' | 'B' | 'A', attrs?: Partial<Attribute.FilterPrimitive.TransferFunction>) {
          super(filter, `feFunc${channel}`, attrs);
        }
      };
      export namespace LightSource {
        export class DistantLight extends FilterPrimitive<SVGFEDistantLightElement, Attribute.FilterPrimitive.LightSource.DistantLight> {
          constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.DistantLight>) {
            super(filter, 'feDistantLight', attrs);
          }
        };
        export class PointLight extends FilterPrimitive<SVGFEPointLightElement, Attribute.FilterPrimitive.LightSource.PointLight> {
          constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.PointLight>) {
            super(filter, 'fePointLight', attrs);
          }
        };
        export class SpotLight extends FilterPrimitive<SVGFESpotLightElement, Attribute.FilterPrimitive.LightSource.SpotLight> {
          constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.SpotLight>) {
            super(filter, 'feSpotLight', attrs);
          }
        };
      }
    }

    export class Filter {
      public node: SVGFilterElement;
      constructor(public paper: Paper) {
        this.node = window.document.createElementNS(XMLNS, 'filter') as SVGFilterElement;
        this.paper.defs.appendChild(this.node);
      }
      private addEffect(fe: Element.FilterPrimitive<SVGElement, any>) {
        fe.setAttribute('result', fe.id);
        this.node.appendChild(fe.node);
      }
      public blend(mode: 'normal' | 'multiply' | 'screen' | 'darken' | 'lighten', input1: Element<SVGElement, Attribute.FilterPrimitive>, input2?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.Blend {
        let fe = new Element.FilterPrimitive.Blend(this, {
          in: input1,
          in2: input2,
          mode: mode,
        });
        this.addEffect(fe);
        return fe;
      }
      public colorMatrix(matrix: Attribute.ColorMatrix, input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.ColorMatrix {
        let fe = new Element.FilterPrimitive.ColorMatrix(this, {
          in: input,
          type: matrix.type,
          values: matrix,
        });
        this.addEffect(fe);
        return fe;
      }
      public componentTransfer(r: Attribute.FilterPrimitive.TransferFunction, g: Attribute.FilterPrimitive.TransferFunction, b: Attribute.FilterPrimitive.TransferFunction, a?: Attribute.FilterPrimitive.TransferFunction, input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.ComponentTransfer {
        let componentTransfer = new Element.FilterPrimitive.ComponentTransfer(this, {
          in: input
        });
        componentTransfer.node.appendChild(new Element.FilterPrimitive.TransferFunction(this, 'R', r).node);
        componentTransfer.node.appendChild(new Element.FilterPrimitive.TransferFunction(this, 'G', g).node);
        componentTransfer.node.appendChild(new Element.FilterPrimitive.TransferFunction(this, 'B', b).node);
        if (a !== undefined) {
          componentTransfer.node.appendChild(new Element.FilterPrimitive.TransferFunction(this, 'A', a).node);
        }
        this.addEffect(componentTransfer);
        return componentTransfer;
      }
      public composite(operator: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic', k1: number, k2: number, k3: number, k4: number, input1?: Element<SVGElement, Attribute.FilterPrimitive>, input2?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.Composite {
        let fe = new Element.FilterPrimitive.Composite(this, {
          in: input1,
          in2: input2,
          operator: operator,
          k1: k1,
          k2: k2,
          k3: k3,
          k4: k4
        });
        this.addEffect(fe);
        return fe;
      }
      public convolveMatrix(attrs: Partial<Attribute.FilterPrimitive.ConvolveMatrix>, input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.ConvolveMatrix {
        let fe = new Element.FilterPrimitive.ConvolveMatrix(this, Object.assign(attrs, { in: input }));
        this.addEffect(fe);
        return fe;
      }
      private addLights(lighting: Element<SVGFEDiffuseLightingElement | SVGFESpecularLightingElement, Attribute.FilterPrimitive>, lights: Attribute.FilterPrimitive.LightSource[]): void {
        lights.forEach(light => {
          switch (light.type) {
            case 'point':
              lighting.add(new Element.FilterPrimitive.LightSource.PointLight(this, light));
              break;
            case 'distant':
              lighting.add(new Element.FilterPrimitive.LightSource.DistantLight(this, light));
              break;
            case 'spot':
              lighting.add(new Element.FilterPrimitive.LightSource.SpotLight(this, light));
              break;
          }
        });
      }
      public diffuseLighting(attrs: Partial<Attribute.FilterPrimitive.DiffuseLighting>, lights: Attribute.FilterPrimitive.LightSource[] = [], input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.DiffuseLighting {
        let fe = new Element.FilterPrimitive.DiffuseLighting(this, Object.assign(attrs, { in: input }));
        this.addLights(fe, lights);
        this.addEffect(fe);
        return fe;
      }
      public displacementMap(attrs: Partial<Attribute.FilterPrimitive.DisplacementMap>, input1?: Element.FilterPrimitive<any, any>, input2?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.DisplacementMap {
        let fe = new Element.FilterPrimitive.DisplacementMap(this, Object.assign(attrs, { in: input1, in2: input2 }));
        this.addEffect(fe);
        return fe;
      }
      public flood(color: Attribute.Color, area: Attribute.ViewBox): Element.FilterPrimitive.Flood {
        let fe = new Element.FilterPrimitive.Flood(this, { "flood-color": color });
        fe.setAttributes({
          x: area.x,
          y: area.y,
          width: area.width,
          height: area.height
        });
        this.addEffect(fe);
        return fe;
      }
      public gaussianBlur(stdDeviation: number = 0, edgeMode: 'duplicate' | 'wrap' | 'none' = 'duplicate', input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.GaussianBlur {
        let fe = new Element.FilterPrimitive.GaussianBlur(this, {
          in: input,
          stdDeviation: stdDeviation,
          edgeMode: edgeMode
        });
        this.addEffect(fe);
        return fe;
      }
      public image(href: string, preserveAspectRatio?: Attribute.PreserveAspectRatio): Element.FilterPrimitive.Image {
        let fe = new Element.FilterPrimitive.Image(this, {
          "xlink:href": href,
          "preserveAspectRatio": preserveAspectRatio
        });
        this.addEffect(fe);
        return fe;
      }
      public merge(inputs: Element.FilterPrimitive<any, any>[]): Element.FilterPrimitive.Merge {
        let fe = new Element.FilterPrimitive.Merge(this);
        inputs.forEach(input => {
          let node = window.document.createElementNS(XMLNS, 'feMergeNode');
          node.setAttribute('in', input.toString());
          fe.node.appendChild(node);
        });
        this.addEffect(fe);
        return fe;
      }
      public morphology(operator: 'erode' | 'dilate', radius: Attribute.NumberOptionalNumber, input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.Morphology {
        let fe = new Element.FilterPrimitive.Morphology(this, {
          in: input,
          operator: operator,
          radius: radius
        });
        this.addEffect(fe);
        return fe;
      }
      public offset(d: Attribute.Point, input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.Offset {
        let fe = new Element.FilterPrimitive.Offset(this, {
          in: input,
          dx: d.x,
          dy: d.y
        });
        this.addEffect(fe);
        return fe;
      }
      public specularLighting(attrs: Partial<Attribute.FilterPrimitive.SpecularLighting>, lights: Attribute.FilterPrimitive.LightSource[] = [], input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.SpecularLighting {
        let fe = new Element.FilterPrimitive.SpecularLighting(this, attrs);
        this.addLights(fe, lights);
        this.addEffect(fe);
        return fe;
      }
      public tile(area: Attribute.ViewBox, input?: Element.FilterPrimitive<any, any>): Element.FilterPrimitive.Tile {
        let fe = new Element.FilterPrimitive.Tile(this, { in: input });
        fe.setAttributes({
          x: area.x,
          y: area.y,
          width: area.width,
          height: area.height
        });
        this.addEffect(fe);
        return fe;
      }
      public turbulence(attrs: Partial<Attribute.FilterPrimitive.Turbulence>): Element.FilterPrimitive.Turbulence {
        let fe = new Element.FilterPrimitive.Turbulence(this, attrs);
        this.addEffect(fe);
        return fe;
      }
    }
  }

  export class Paper {
    private static runner = new AnimationRunner();
    public root: SVGSVGElement
    public defs: SVGDefsElement;
    constructor();
    constructor(id: string);
    constructor(el: SVGSVGElement);
    constructor(root?: string | SVGSVGElement) {
      if (root) {
        if (typeof root === 'string') {
          let el = window.document.getElementById(root);
          if (el instanceof SVGSVGElement) {
            this.root = el;
          } else {
            throw new Error('Element with specified ID is not valid');
          }
        } else {
          this.root = root;
        }
      } else {
        this.root = window.document.createElementNS(XMLNS, 'svg') as SVGSVGElement;
        window.document.body.appendChild(this.root);
      }
      this.root.setAttribute('xmlns', XMLNS);
      this.root.setAttributeNS(XMLNS, 'xlink', XLINK);
      this.root.setAttribute('version', '1.1');
      let defs_els = this.root.getElementsByTagName('defs');
      if (defs_els.length > 0) {
        this.defs = defs_els.item(0);
      } else {
        this.defs = window.document.createElementNS(XMLNS, 'defs') as SVGDefsElement;
        this.root.appendChild(this.defs);
      }
    }
    public addDef(def: Element<SVGElement, any>) {
      this.defs.appendChild(def.node);
    }
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>): (enable: boolean) => void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>, isEnabled: () => boolean): void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>, isEnabled?: () => boolean): void | ((enable: boolean) => void) {
      if (isEnabled !== undefined) {
        Paper.runner.add({
          element, defs, "progress": (now: number): number | undefined => isEnabled() ? now : undefined     
        });
      } else {
        let enabled = true;
        Paper.runner.add({
          element, defs, "progress": (now: number): number | undefined => enabled ? now : undefined      
        });
        return (enable: boolean) => {
          enabled = enable;
        };
      }
    }
    public registerAnimation<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, attrs: Animation.Defined<Attrs>, duration: number, easing: (t: number) => number): Promise<any> {
      return new Promise(resolve => {
        const start = performance.now();
        const end = start + duration;
        const from = {} as Partial<Attrs>;
        for (let prop in attrs) {
          from[prop] = (attrs[prop] as Attribute<any>).get(element, prop);
        }
        const defs = {} as Dynamic.Defined<any>;
        const anim: Animation<Attrs> = {
          element, attrs, resolve, from, defs,
          "progress": (now: number): number | undefined => (now > start && now <= end) ? easing((now - start) / duration) : undefined
        };
        Paper.runner.add(anim);
      })
    }
    public g(els: Element<SVGElement, any>[]): Element.Renderable.G {
      let el = new Element.Renderable.G(this);
      els.forEach(child => el.node.appendChild(child.node));
      return el;
    }
    public circle(cx: Attribute.Length, cy: Attribute.Length, r: Attribute.Length): Element.Renderable.Shape.Circle {
      return new Element.Renderable.Shape.Circle(this, { cx, cy, r });
    }
    public ellipse(cx: number, cy: number, rx: number, ry: number): Element.Renderable.Shape.Ellipse {
      return new Element.Renderable.Shape.Ellipse(this, { cx, cy, rx, ry });
    }
    public filter(): Element.Filter {
      return new Element.Filter(this);
    }
    public pattern(w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Element.NonRenderable.PaintServer.Pattern {
      return new Element.NonRenderable.PaintServer.Pattern(this, w, h, x, y, view);
    }
    public linearGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs: Attribute.NonRenderable.PaintServer.Gradient.Linear): Element.NonRenderable.PaintServer.Gradient.Linear {
      return new Element.NonRenderable.PaintServer.Gradient.Linear(this, stops, attrs);
    }
    public radialGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs: Attribute.NonRenderable.PaintServer.Gradient.Radial): Element.NonRenderable.PaintServer.Gradient.Radial {
      return new Element.NonRenderable.PaintServer.Gradient.Radial(this, stops, attrs);
    }
    public image(attrs: Attribute.Renderable.Image): Element.Renderable.Image {
      return new Element.Renderable.Image(this, attrs);
    }
    public line(x1: Attribute.Length, y1: Attribute.Length, x2: Attribute.Length, y2: Attribute.Length): Element.Renderable.Shape.Line {
      return new Element.Renderable.Shape.Line(this, { x1, x2, y1, y2 });
    }
    public mask(w: number, h: number, x?: number, y?: number, units?: 'userSpaceOnUse' | 'objectBoundingBox', contentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'): Element.NonRenderable.Mask {
      return new Element.NonRenderable.Mask(this, w, h, x, y, units, contentUnits);
    }
    public path(d: Attribute.List<Attribute.PathSegment>, pathLength?: number): Element.Renderable.Shape.Path {
      return new Element.Renderable.Shape.Path(this, { d, pathLength });
    }
  }

}
