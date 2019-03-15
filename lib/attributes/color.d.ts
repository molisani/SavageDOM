import { ColorSpaceObject, HSLColor, RGBColor } from "d3-color";
import { ColorGammaInterpolationFactory } from "d3-interpolate";
import { Attribute } from "../attribute";
export declare class Color implements Attribute<Color> {
    interpolationFactory: ColorGammaInterpolationFactory;
    static DEFAULT_INTERPOLATION: ColorGammaInterpolationFactory;
    private _data;
    constructor(c: string | ColorSpaceObject, interpolationFactory?: ColorGammaInterpolationFactory);
    asRGB(): RGBColor;
    asHSL(): HSLColor;
    toString(): string;
    parse(css: string | null): Color;
    get(element: SVGElement, attr: string): Color;
    set(element: SVGElement, attr: string, override?: Color): void;
    interpolator(from: Color): (t: number) => Color;
}
