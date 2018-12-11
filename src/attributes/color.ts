import { color, ColorSpaceObject, hsl, HSLColor, rgb, RGBColor } from "d3-color";
import { ColorGammaInterpolationFactory, interpolateRgb } from "d3-interpolate";
import { Attribute } from "../attribute";

export class Color implements Attribute<Color> {
  public static DEFAULT_INTERPOLATION: ColorGammaInterpolationFactory = interpolateRgb;
  private _data: ColorSpaceObject;
  constructor(c: string | ColorSpaceObject, public interpolationFactory: ColorGammaInterpolationFactory = Color.DEFAULT_INTERPOLATION) {
    if (typeof c === "string") {
      const data = color(c);
      if (data) {
        this._data = data;
      } else {
        throw new Error(`Unable to parse color from string "${c}"`);
      }
    } else {
      this._data = color(c);
    }
  }
  public asRGB(): RGBColor {
    return rgb(this._data);
  }
  public asHSL(): HSLColor {
    return hsl(this._data);
  }
  public toString(): string {
    return this._data.toString();
  }
  public parse(css: string | null): Color {
    if (css !== null) {
      return new Color(css);
    } else {
      return new Color(`#000`);
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
  public interpolator(from: Color): (t: number) => Color {
    const func = this.interpolationFactory(from.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
}
