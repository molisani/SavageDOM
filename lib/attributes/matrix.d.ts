import { Attribute } from "../attribute";
export declare class Matrix implements Attribute<Matrix> {
    arr: number[];
    constructor(values: number[][]);
    toString(): string;
    parse(css: string | null): Matrix;
    get(element: SVGElement, attr: string): Matrix;
    set(element: SVGElement, attr: string, override?: Matrix): void;
    interpolator(from: Matrix): (t: number) => Matrix;
}
