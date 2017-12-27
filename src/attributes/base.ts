namespace SavageDOM.Attributes {

  export type Inherit = "inherit";

  export type None = "none";

  export type CurrentColor = "currentColor";

  export type Paint = None | CurrentColor | Color | Elements.NonRenderables.PaintServer | Inherit;

  export type Length = number | Dimension<CSSAbsoluteLength | CSSRelativeLength | "%">;

  export type Angle = number | Dimension<CSSAngleUnit>;

  export const _LengthParse = (css: string): Attributes.Length => {
    const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
    if (m !== null) {
      return new Dimension<any>(parseFloat(m[1]), m[2]);
    }
    return parseFloat(css);
  };
  export const _LengthInterpolate = (a: Attributes.Length, b: Attributes.Length, t: number): Attributes.Length => {
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

  export interface BaseAttributes {
    [name: string]: Attribute<any> | number | string | boolean | any;
  }

  export interface HasStyle extends BaseAttributes {
    style: string;
  }

  export interface HasClass extends BaseAttributes {
    class: string;
  }

  export interface HasOverflow extends BaseAttributes {
    overflow: "visible" | "hidden" | "scroll" | "auto" | Inherit;
  }

  export interface HasColor extends BaseAttributes {
    color: Color | Inherit;
  }

  export interface HasColorInterpolation extends BaseAttributes {
    "color-interpolation": "auto" | "sRGB" | "linearRGB" | Inherit;
  }

  export interface HasColorRendering extends BaseAttributes {
    "color-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
  }

  export interface HasCursor extends BaseAttributes {
    cursor: "auto" | "crosshair" | "default" | "pointer" | "move" | "e-resize" | "ne-resize" | "nw-resize" | "n-resize" | "se-resize" | "sw-resize" | "s-resize" | "w-resize" | "text" | "wait" | "help" | Inherit;
  }

  export interface HasFill extends BaseAttributes {
    fill: Paint;
    "fill-opacity": number | Inherit;
    "fill-rule": "nonzero" | "evenodd" | Inherit;
  }

  export interface HasOpacity extends BaseAttributes {
    opacity: number | Inherit;
  }

  export type DashArray = (Length | Percentage)[];

  export interface HasStroke extends BaseAttributes {
    stroke: Paint;
    "stroke-dasharray": None | DashArray | Inherit;
    "stroke-dashoffset": Percentage | Attributes.Length | Inherit;
    "stroke-linecap": "butt" | "round" | "square" | Inherit;
    "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
    "stroke-miterlimit": number | Inherit;
    "stroke-opacity": number | Inherit;
    "stroke-width": Attributes.Length | Percentage | Inherit;
  }

  export interface HasVisibility extends BaseAttributes {
    visibility: "visible" | "hidden" | "collapse" | Inherit;
  }

}
