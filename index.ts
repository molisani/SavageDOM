
export namespace vektor {

  const XMLNS = 'http://www.w3.org/2000/svg';
  const XLINK = 'http://www.w3.org/1999/xlink';

  export interface AnimationDefinition<A, V> {
    attr: A;
    value: (t: number) => V;
  }

  interface Animation<SVG extends SVGElement, A> {
    element: SVG;
    start: number;
    duration: number;
    easing: (t: number) => number;
    defs: AnimationDefinition<keyof A, A[keyof A]>[];
    resolve: (end: number) => any;
  }

  export namespace Animation {

    export const simpleProperties = (start: { [prop: string]: number }, end: { [prop: string]: number }, easing: (n: number) => number = Easing.linear): AnimationDefinition<any, number>[] => {
      return Object.getOwnPropertyNames(start).filter(attr => start[attr] !== undefined && end[attr] !== undefined).map(attr => ({
        "attr": attr,
        "easing": easing,
        "value": (t: number) => start[attr] + (end[attr] - start[attr]) * t,
      }));
    }

    export namespace Easing {
      const flip = (ease: (t: number) => number) => (t: number) => 1 - ease(1 - t);
      const inout = (easeIn: (t: number) => number, easeOut: (t: number) => number) => {
        return (t: number) => t < 0.5 ? easeIn(t * 2) / 2 : easeOut(2 * t - 1) / 2 + 0.5;
      };

      export const linear = (t: number) => t;
      export const quadIn = (t: number) => t ** 2;
      export const quadOut = flip(quadIn);
      export const quad = inout(quadIn, quadOut);
      export const cubicIn = (t: number) => t ** 3;
      export const cubicOut = flip(cubicIn);
      export const cubic = inout(cubicIn, cubicOut);
      export const quartIn = (t: number) => t ** 4;
      export const quartOut = flip(quartIn);
      export const quart = inout(quartIn, quartOut);
      export const quintIn = (t: number) => t ** 5;
      export const quintOut = flip(quintIn);
      export const quint = inout(quintIn, quintOut);
      export const sineIn = (t: number) => 1 - Math.cos(t * Math.PI / 2);
      export const sineOut = flip(sineIn);
      export const sine = inout(sineIn, sineOut);
      export const expoIn = (t: number) => 2 ** (10 * (t - 1));
      export const expoOut = flip(expoIn);
      export const expo = inout(expoIn, expoOut);
      export const circIn = (t: number) => 1 - Math.sqrt(1 - t ** 2);
      export const circOut = flip(circIn);
      export const circ = inout(circIn, circOut);
    }


    export function Interpolate<T>(start: T, end: T, limit: number = 2): (t: number) => T {
      return (t: number) => {
          return Object.getOwnPropertyNames(start).reduce((mid, prop) => {
            let type = typeof start[prop];
            if (type === 'string' || limit === 0) {
              mid[prop] = start[prop];
            } else if (type === 'number') {
              mid[prop] = start[prop] + t * (end[prop] - start[prop]);
            } else if (type === 'object') {
              mid[prop] = Interpolate(start[prop], end[prop], limit - 1)(t);
            }
            return mid;
          }, {} as T);
      };
    }
  }

  class AnimationRunner {
    private static requestAnimationFrame: (callback: FrameRequestCallback) => number = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window['mozRequestAnimationFrame'] || window['oRequestAnimationFrame'] || window['msRequestAnimationFrame'] || function(this: Window, callback: FrameRequestCallback) { this.setTimeout(callback, 16) }).bind(window);
    private running = false;
    private queue: Animation<SVGElement, any>[] = [];
    private loop() {
      const now = performance.now();
      this.queue.forEach((anim, idx, arr) => {
        if (now > (anim.start + anim.duration)) {
          const t = 1;
          anim.defs.forEach(def => {
            anim.element.setAttribute(def.attr, String(def.value(t)));
          });
          arr.splice(idx, 1);
          anim.resolve(now);
          //anim.resolve.call(undefined, now);
        } else {
          const t = anim.easing((now - anim.start) / anim.duration);
          anim.defs.forEach(def => {
            anim.element.setAttribute(def.attr, String(def.value(t)));
          });
        }
      });
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
    public add(anim: Animation<SVGElement, any>) {
      this.queue.push(anim);
      if (!this.running) {
        this.start();
      }
    }
  }

  export class Element<SVG extends SVGElement, A> {
    public node: SVG;
    private style: CSSStyleDeclaration;
    public id: string = Math.random().toString(36).substring(2);
    constructor(paper: Paper, el: SVG);
    constructor(paper: Paper, name: string, attrs?: Partial<A>);
    constructor(public paper: Paper, el: string | SVG, attrs?: Partial<A>) {
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
    public setAttribute<Attr extends keyof A>(name: Attr, val: A[Attr]): void {
      this.node.setAttribute(name, String(val));
    }
    public setAttributes(attrs: Partial<A>): void {
      for (let name in attrs) {
        let attr = attrs[name];
        if (attr !== undefined && attr !== null) {
          this.setAttribute(name, attr);
        }
      }
    }
    public getAttribute<Attr extends keyof A>(name: Attr): string | null {
      let computed = this.style.getPropertyValue(name);
      if (computed === '') {
        return this.node.getAttribute(name);
      } else {
        return computed;
      }
    }
    public animate<AA extends A>(attrs: Partial<AA>, duration: number, easing: (t: number) => number = Animation.Easing.linear): Promise<number> {
      let defs: AnimationDefinition<keyof A, AA[keyof A]>[] = [];
      Object.getOwnPropertyNames(attrs).forEach((attr: keyof A) => {
        let str = this.getAttribute(attr);
        if (str !== null && str !== "") {
          let end = attrs[attr];
          if (end !== undefined) {
            let value = _getValueFunction(end, str);
            if (value !== undefined) {
              defs.push({ attr, value });
            }
          }
        }
      });
      return this.paper.registerAnimation(this, defs, duration, easing);
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

  const _mix = (a: number, b: number, t: number): number => a + ((b - a) * t);

  const _getValueFunction = <A>(end: A[keyof A], str: string): ((t: number) => A[keyof A]) | undefined => {
    if (Attribute.isAttribute(end)) {
      return end.interpolate.bind(end, end.parse(str));
    } else if (typeof end === 'number') {
      return _mix.bind(undefined, parseFloat(str), end);
    } else if (Array.isArray(end)) {
      let vals: ((t: number) => A[keyof A][keyof A[keyof A]])[] = [];
      let toks = str.split('\t');
      for (let i = 0; i !== toks.length; ++i) {
        let val = _getValueFunction<A[keyof A]>(end[i], toks[i]);
        if (val !== undefined) {
          vals.push(val);
        } else {
          return undefined;
        }
      }
      return (t: number) => vals.map(val => val(t)) as any as A[keyof A];
    }
    return undefined;
  };

  export interface Attribute<T> {
    toString(): string;
    parse(css: string | null): T;
    interpolate(from: T, t: number): T;
  }
  export namespace Attribute {

    export const isAttribute = (obj: any | Attribute<any>): obj is Attribute<any> => {
      let parse_fn = obj['parse'];
      let interpolate_fn = obj['interpolate'];
      return parse_fn !== undefined && typeof parse_fn === 'function' && interpolate_fn !== undefined && typeof interpolate_fn === 'function';
    };

    export type Inherit = 'inherit';

    export class Color implements Attribute<Color> {
      constructor(css: string);
      constructor(format: 'rgb', r: number, g: number, b: number, a?: number);
      constructor(format: 'hsl', h: number, s: number, l: number, a?: number);
      constructor(format: 'rgb' | 'hsl' | string, public h: number = 0, public s: number = 0, public l: number = 0, public a: number = 1) {
        if (format !== 'rgb' && format !== 'hsl') {
          if (format.startsWith('rgba')) {
            let m = format.match(/^rgba\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
            if (m !== null) {
              format = 'rgb';
              this.h = parseInt(m[1]);
              this.s = parseInt(m[2]);
              this.l = parseInt(m[3]);
              this.a = parseFloat(m[4]);
            }
          } else if (format.startsWith('rgb')) {
            let m = format.match(/^rgb\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?\)$/i);
            if (m !== null) {
              format = 'rgb';
              this.h = parseInt(m[1]);
              this.s = parseInt(m[2]);
              this.l = parseInt(m[3]);
            }
          } else if (format.startsWith('hsla')) {
            let m = format.match(/^hsla\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
            if (m !== null) {
              format = 'hsl';
              this.h = parseFloat(m[1]);
              this.s = parseFloat(m[2]) / 100;
              this.l = parseFloat(m[3]) / 100;
              this.a = parseFloat(m[4]);
            }
          } else if (format.startsWith('hsl')) {
            let m = format.match(/^hsl\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?\)$/i);
            if (m !== null) {
              format = 'hsl';
              this.h = parseFloat(m[1]);
              this.s = parseFloat(m[2]) / 100;
              this.l = parseFloat(m[3]) / 100;
            }
          } else if (format.startsWith('#')) {
            let m = format.match(/^#([0-9a-fA-F]{3})$/i);
            if (m !== null) {
              format = 'rgb';
              this.h = parseInt(m[1].charAt(0), 16) * 0x11;
              this.s = parseInt(m[1].charAt(1), 16) * 0x11;
              this.l = parseInt(m[1].charAt(2), 16) * 0x11;
            } else {
              m = format.match(/^#([0-9a-fA-F]{6})$/i);
              if (m !== null) {
                format = 'rgb';
                this.h = parseInt(m[1].substr(0, 2), 16);
                this.s = parseInt(m[1].substr(2, 2), 16);
                this.l = parseInt(m[1].substr(4, 2), 16);
              }
            }
          } 
        }
        if (format === 'rgb') {
          let r = this.h / 255;
          let g = this.s / 255;
          let b = this.l / 255;
          let max = Math.max(r, g, b);
          let min = Math.min(r, g, b);
          let avg = (max + min) / 2;
          this.l = avg;
          let d = max - min;
          if (d === 0) {
            this.h = 0;
            this.s = 0;
          } else {
            this.s = (avg > 0.5) ? (d / (2 - d)) : (d / (max + min));
            switch (max) {
              case r:
                this.h = ((g - b) / d) + ((g < b) ? 6 : 0);
                break;
              case g:
                this.h = ((b - r) / d) + 2;
                break;
              case b:
                this.h = ((r - g) / d) + 4;
                break;
            }
            this.h *= 60;
          }
        }
      }
      toString(): string {
        return `hsla(${this.h}, ${this.s * 100}%, ${this.l * 100}%, ${this.a})`;
      }
      parse(css: string | null): Color {
        if (css !== null) {
          return new Color(css);
        } else {
          return new Color('hsl', 0, 0, 0);
        }
      }
      interpolate(from: Color, t: number): Color {
        return new Color('hsl', _mix(from.h, this.h, t), _mix(from.s, this.s, t), _mix(from.l, this.l, t), _mix(from.a, this.a, t));
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
          return new Number(parseInt(css));
        } else {
          return new Number();
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
            return new NumberOptionalNumber(parseInt(toks[0]));
          } else {
            return new NumberOptionalNumber(parseInt(toks[0]), parseInt(toks[1]));
          }
        } else {
          return new NumberOptionalNumber(0);
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
          return new ViewBox(parseInt(toks[0]), parseInt(toks[1]), parseInt(toks[2]), parseInt(toks[3]));
        } else {
          return new ViewBox(0, 0, 0, 0);
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
          return new Matrix([css.split('\t').map(parseInt)]);
        } else {
          return new Matrix([]);
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
          return new SaturateColorMatrix(parseInt(css));
        } else {
          return new SaturateColorMatrix();
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
          return new HueRotateColorMatrix(parseInt(css));
        } else {
          return new HueRotateColorMatrix();
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
        export type Circle = { cx: Length, cy: Length, r: Length };
        export type Ellipse = { cx: Length, cy: Length, rx: Length, ry: Length };
        export type Line = { x1: Length, x2: Length, y1: Length, y2: Length };
        export type Polygon = { points: List<Point> };
        export type Polyline = { points: List<Point> };
        export type Path = { d: List<PathSegment>, pathLength: number };
        export type Rect = { x: Length, y: Length, width: Length, height: Length, rx: Length, ry: Length };
      }

      export type Image = { x: Length, y: Length, width: Length, height: Length, "xlink:href": string, preserveAspectRatio?: PreserveAspectRatio, viewBox?: ViewBox };
      export type Text = { x: Length, y: Length, dx: Length, dy: Length, textLength?: Length };
      //export type Use = { x: Length, y: Length, width: Length, height: Length, "xlink:href": Element<any, any> };

    }

    export type NonRenderable = Presentation & HasStyle & HasClass;
    export namespace NonRenderable {

      export namespace PaintServer {

        export type Gradient = { gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox', gradientTransform?: List<Transform>, spreadMethod?: 'pad' | 'reflect' | 'repeat', "xlink:href": string };
        export namespace Gradient {
          export type Linear = Gradient & { x1?: Length, y1?: Length, x2?: Length, y2?: Length };
          export type Radial = Gradient & { cx?: Length, cy?: Length, r?: Length, fx?: Length, fy?: Length };
          export type Stops = { [offset: number]: 'currentColor' | Color | Inherit };
        }

        export type Pattern = { patternUnits: 'userSpaceOnUse' | 'objectBoundingBox', patternContentUnits: 'userSpaceOnUse' | 'objectBoundingBox', patternTransform: List<Transform>, x: Length, y: Length, width: Length, height: Length, "xlink:href": string, preserveAspectRatio: PreserveAspectRatio, viewBox: ViewBox };

      }

      export type Marker = { markerUnits: 'userSpaceOnUse' | 'strokeWidth', refX: Length, refY: Length, markerWidth: Length, markerHeight: Length, orient: 'auto' | 'auto-start-reverse' | number | string, viewBox: ViewBox };
      export type Mask = { maskUnits: 'userSpaceOnUse' | 'objectBoundingBox', maskContentUnits: 'userSpaceOnUse' | 'objectBoundingBox', x: Length, y: Length, width: Length, height: Length };

    }

    export type FilterPrimitive = Presentation & HasClass & HasStyle & { x: Length, y: Length, width: Length, height: Length, result: string };
    export namespace FilterPrimitive {

      export type Blend = { in: Element.FilterPrimitive<any, any>, in2: Element.FilterPrimitive<any, any>, mode: 'normal' | 'multiply' | 'screen' | 'darken' | 'lighten' };
      export type ColorMatrix = { in: Element.FilterPrimitive<any, any>, type: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha', values: Attribute.ColorMatrix };
      export type ComponentTransfer = { in: Element.FilterPrimitive<any, any> };
      export type Composite = { in: Element.FilterPrimitive<any, any>, in2: Element.FilterPrimitive<any, any>, operator: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic', k1: number, k2: number, k3: number, k4: number };
      export type ConvolveMatrix = { in: Element.FilterPrimitive<any, any>, order: NumberOptionalNumber, kernelMatrix: Matrix, divisor: number, bias: number, targetX: number, targetY: number, edgeMode: 'duplicate' | 'wrap' | 'none', kernelUnitLength: NumberOptionalNumber, preserveAlpha: boolean };
      export type DiffuseLighting = { in: Element.FilterPrimitive<any, any>, surfaceScale: number, diffuseConstant: number, kernelUnitLength: NumberOptionalNumber };
      export type DisplacementMap = { in: Element.FilterPrimitive<any, any>, in2: Element.FilterPrimitive<any, any>, scale: number, xChannelSelector: 'R' | 'G' | 'B' | 'A', yChannelSelector: 'R' | 'G' | 'B' | 'A' };
      export type DropShadow = { in: Element.FilterPrimitive<any, any>, stdDeviation: number, dx: Length, dy: Length };
      export type Flood = { "flood-color": 'currentColor' | Color };
      export type GaussianBlur = { in: Element.FilterPrimitive<any, any>, stdDeviation: number, edgeMode: 'duplicate' | 'wrap' | 'none' };
      export type Image = { preserveAspectRatio: PreserveAspectRatio, "xlink:href": string };
      export type MergeNode = { in: Element.FilterPrimitive<any, any> };
      export type Morphology = { in: Element.FilterPrimitive<any, any>, operator: 'erode' | 'dilate', radius: NumberOptionalNumber };
      export type Offset = { in: Element.FilterPrimitive<any, any>, dx: Length, dy: Length };
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
        export type PointLight = { type: 'point', x: Length, y: Length, z: Length };
        export type SpotLight = { type: 'spot', x: Length, y: Length, z: Length, pointsAtX: Length, pointsAtY: Length, pointsAtZ: Length, specularExponent: number, limitingConeAngle: number };
      }
      export type LightSource = LightSource.DistantLight | LightSource.PointLight | LightSource.SpotLight;

    }

    export type Filter = { x: Length, y: Length, width: Length, height: Length, filterUnits: 'userSpaceOnUse' | 'objectBoundingBox', primitiveUnits: 'userSpaceOnUse' | 'objectBoundingBox' };

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
    public registerAnimation<A>(el: Element<SVGElement, A>, defs: AnimationDefinition<keyof A, A[keyof A]>[], duration: number, easing: (t: number) => number): Promise<any> {
      return new Promise(resolve => {
        Paper.runner.add({
          "element": el.node,
          "start": performance.now(),
          "duration": duration,
          "easing": easing,
          "defs": defs,
          "resolve": resolve
        });
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
