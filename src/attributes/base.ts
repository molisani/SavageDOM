import { Attribute } from "../attribute";
import { PaintServer } from "../elements/non-renderables/paint-server";
import { Color } from "./color";
import { CSSAbsoluteLength, CSSAngleUnit, CSSRelativeLength, Dimension, Percentage } from "./dimension";

export type Inherit = "inherit";

export type None = "none";

export type CurrentColor = "currentColor";

export type Paint = None | CurrentColor | Color | PaintServer | Inherit;

export type Length = number | Dimension<CSSAbsoluteLength | CSSRelativeLength | "%">;

export type Angle = number | Dimension<CSSAngleUnit>;

export const LengthParse = (css: string): Length => {
  const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
  if (m !== null) {
    return new Dimension<any>(parseFloat(m[1]), m[2]);
  }
  return parseFloat(css);
};

export type AttributeValue = object | number | string | boolean | undefined;

export interface BaseAttributes {
  [name: string]: Attribute<AttributeValue> | Attribute<AttributeValue>[] | AttributeValue;
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
  "stroke-dashoffset": Percentage | Length | Inherit;
  "stroke-linecap": "butt" | "round" | "square" | Inherit;
  "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
  "stroke-miterlimit": number | Inherit;
  "stroke-opacity": number | Inherit;
  "stroke-width": Length | Percentage | Inherit;
}

export interface HasVisibility extends BaseAttributes {
  visibility: "visible" | "hidden" | "collapse" | Inherit;
}
