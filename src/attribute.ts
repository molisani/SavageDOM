namespace SavageDOM {

  const _lerp = (a: number, b: number, t: number): number => a + ((b - a) * t);

  export interface Setter {
    set<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs, override?: any): void;
  }

  export interface Attribute<T> extends Setter {
    toString(override?: T): string;
    parse(css: string | null): T;
    get<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs): T;
    set<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs, override?: T): void;
    interpolate(from: T, t: number): T;
  }

  export function _defaultGet<T>(this: Attribute<T>, element: Element<SVGElement, any, any>, attr: string): T {
      return this.parse(element.getAttribute(attr));
    }

  export function _defaultSet<T>(this: T, element: Element<SVGElement, any, any>, attr: string, override?: T) {
    element.setAttribute(attr, (override === undefined) ? this : override);
  };

}

namespace SavageDOM.Attribute {

  export const isAttribute = (obj: any | Attribute<any>): obj is Attribute<any> => {
    return typeof obj["interpolate"] === "function" && typeof obj["parse"] === "function";
  };

  export type Inherit = "inherit";

  export type None = "none";

  export namespace NonRenderable {

    export interface PaintServer {}

  }

  export type CurrentColor = "currentColor";

  export type Paint = None | CurrentColor | Color | NonRenderable.PaintServer | Inherit;

  export type Length = number | Dimension<CSSAbsoluteLength | CSSRelativeLength | "%">;

  export type Angle = number | Dimension<CSSAngleUnit>;

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

  export interface HasStyle {
    style: string;
  }

  export interface HasClass {
    class: string;
  }

  export interface HasOverflow {
    overflow: "visible" | "hidden" | "scroll" | "auto" | Inherit;
  }

  export interface HasColor {
    color: Color | Inherit;
  }

  export interface HasColorInterpolation {
    "color-interpolation": "auto" | "sRGB" | "linearRGB" | Inherit;
  }

  export interface HasColorRendering {
    "color-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
  }

  export interface HasCursor {
    cursor: "auto" | "crosshair" | "default" | "pointer" | "move" | "e-resize" | "ne-resize" | "nw-resize" | "n-resize" | "se-resize" | "sw-resize" | "s-resize" | "w-resize" | "text" | "wait" | "help" | Inherit;
  }

  export interface HasFill {
    fill: Paint;
    "fill-opacity": number | Inherit;
    "fill-rule": "nonzero" | "evenodd" | Inherit;
  }

  export interface HasOpacity {
    opacity: number | Inherit;
  }

  export type DashArray = (Length | Percentage)[];

  export interface HasStroke {
    stroke: Paint;
    "stroke-dasharray": None | DashArray | Inherit;
    "stroke-dashoffset": Percentage | Length | Inherit;
    "stroke-linecap": "butt" | "round" | "square" | Inherit;
    "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
    "stroke-miterlimit": number | Inherit;
    "stroke-opacity": number | Inherit;
    "stroke-width": Length | Percentage | Inherit;
  }

  export interface HasVisibility {
    visibility: "visible" | "hidden" | "collapse" | Inherit;
  }

}
