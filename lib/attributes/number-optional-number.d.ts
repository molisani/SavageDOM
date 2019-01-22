import { Attribute } from "../attribute";
export declare class NumberOptionalNumber implements Attribute<NumberOptionalNumber> {
    n: number;
    o?: number | undefined;
    constructor(n: number, o?: number | undefined);
    toString(): string;
    parse(css: string | null): NumberOptionalNumber;
    get(element: SVGElement, attr: string): NumberOptionalNumber;
    set(element: SVGElement, attr: string, override?: NumberOptionalNumber): void;
    interpolator(from: NumberOptionalNumber): (t: number) => NumberOptionalNumber;
}
