import { Attribute } from "../attribute";
export declare type CSSAbsoluteLength = "px" | "in" | "cm" | "mm" | "pt" | "pc";
export declare type CSSRelativeLength = "em" | "ex";
export declare type CSSAngleUnit = "deg" | "grad" | "rad" | "turn";
export declare class Dimension<UNIT extends string> implements Attribute<Dimension<UNIT>> {
    value: number;
    unit: UNIT;
    private static convert;
    constructor(value: number, unit: UNIT);
    toString(): string;
    parse(css: string | null): Dimension<UNIT>;
    get(element: SVGElement, attr: string): Dimension<UNIT>;
    set(element: SVGElement, attr: string, override?: Dimension<UNIT>): void;
    interpolator(from: Dimension<UNIT>): (t: number) => Dimension<UNIT>;
    private _convert;
}
export declare class Percentage extends Dimension<"%"> {
    constructor(value: number);
}
