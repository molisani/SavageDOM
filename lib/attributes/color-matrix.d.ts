import { Attribute } from "../attribute";
export interface ColorMatrix {
    type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
    toString(): string;
}
export declare namespace ColorMatrix {
    class Raw implements ColorMatrix, Attribute<Raw> {
        type: "matrix";
        arr: number[];
        constructor(values?: number[][]);
        toString(): string;
        parse(css: string | null): Raw;
        get(element: SVGElement, attr: string): Raw;
        set(element: SVGElement, attr: string, override?: Raw): void;
        interpolator(from: Raw): (t: number) => Raw;
    }
    class Saturate implements ColorMatrix, Attribute<Saturate> {
        value: number;
        type: "saturate";
        constructor(value?: number);
        toString(): string;
        parse(css: string | null): Saturate;
        get(element: SVGElement, attr: string): Saturate;
        set(element: SVGElement, attr: string, override?: Saturate): void;
        interpolator(from: Saturate): (t: number) => Saturate;
    }
    class HueRotate implements ColorMatrix, Attribute<HueRotate> {
        value: number;
        type: "hueRotate";
        constructor(value?: number);
        toString(): string;
        parse(css: string | null): HueRotate;
        get(element: SVGElement, attr: string): HueRotate;
        set(element: SVGElement, attr: string, override?: HueRotate): void;
        interpolator(from: HueRotate): (t: number) => HueRotate;
    }
    class LuminanceToAlphaColorMatrix implements ColorMatrix {
        type: "luminanceToAlpha";
        toString(): string;
    }
}
