namespace vektor {

  const _lerp = (a: number, b: number, t: number): number => a + ((b - a) * t);

  export interface Setter {
    set<Attrs>(element: Element<SVGElement, Attrs>, attr: keyof Attrs, override?: any): void;
  }

  export interface Attribute<T> extends Setter {
    parse(css: string | null): T;
    get<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A): T;
    set<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs>, attr: A, override?: T): void;
    interpolate(from: T, t: number): T;
  }

}

namespace vektor.Attribute {

  export const isAttribute = (obj: any | Attribute<any>): obj is Attribute<any> => {
    return typeof obj["interpolate"] === "function" && typeof obj["parse"] === "function";
  };

  export type Inherit = "inherit";

  export type Paint = "none" | "currentColor" | Color | Elements.NonRenderable.PaintServer.Gradient.Linear | Elements.NonRenderable.PaintServer.Gradient.Radial | Elements.NonRenderable.PaintServer.Pattern | Inherit;

  export type Length = number | Dimension<CSSAbsoluteLengths>;

  export const _LengthParse = (css: string): Length => {
    const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
    if (m !== null) {
      return new Dimension<any>(parseFloat(m[1]), m[2]);
    }
    return parseFloat(css);
  };
  export const _LengthInterpolate = (a: Length, b: Length, t: number): Length => {
    if (typeof a !== "number") {
      if (typeof b !== "number") {
        return b.interpolate(a, t);
      } else {
        return a.interpolate(new Dimension<any>(b, a.unit), 1 - t);
      }
    } else {
      if (typeof b !== "number") {
        return b.interpolate(new Dimension<any>(a, b.unit), t);
      } else {
        return _lerp(a, b, t);
      }
    }
  };

  export type Angle = number | Dimension<CSSAngleUnits>;
  export type Percentage = Dimension<"%">;

  export interface Presentation {
    "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Inherit;
    "baseline-shift": "auto" | "baseline" | "super" | "sub" | number | Inherit;
    "color": Color | Inherit;
    "color-interpolation": "auto" | "sRGB" | "linearRGB" | Inherit;
    "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Inherit;
    "color-profile": "auto" | "sRGB" | string | Inherit;
    "color-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
    "dominant-baseline": "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | Inherit;
    "fill": Paint;
    "fill-rule": "nonzero" | "evenodd" | Inherit;
    "filter": string | "none" | Inherit;
    "opacity": number | Inherit;
    "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
    "stroke": Paint;
    "stroke-dasharray": "none" | List<Number> | Inherit;
    "stroke-dashoffset": Percentage | Length | Inherit;
    "stroke-linecap": "butt" | "round" | "square" | Inherit;
    "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
    "stroke-miterlimit": number | Inherit;
    "stroke-width": Length | Percentage | Inherit;
  };

  export interface Textual {
    "direction": "ltr" | "rtl" | Inherit;
    "font-family": string | Inherit;
    "font-size": Length | Inherit;
    "font-size-adjust": number | "none" | Inherit;
    "font-stretch": "normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | Inherit;
    "font-style": "normal" | "italic" | "oblique" | Inherit;
    "font-variant": "normal" | "small-caps" | Inherit;
    "font-weight": "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Inherit;
    "kerning": "auto" | Length | Inherit;
    "letter-spacing": "normal" | Length | Inherit;
    "text-anchor": "start" | "middle" | "end" | Inherit;
    "text-decoration": "none" | "underline" | "overline" | "line-through" | "blink" | Inherit;
    "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometericPrecision" | Inherit;
    "word-spacing": "normal" | Length | Inherit;
    "writing-mode": "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | Inherit;
  };

  export interface HasStyle {
    style: string;
  };

  export interface HasClass {
    class: string;
  };

  export interface Transformable {
    transform: List<Transform>;
  };

}
