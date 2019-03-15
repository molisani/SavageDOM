import { Attribute } from "../attribute";
export declare class NumberWrapper implements Attribute<NumberWrapper | number> {
    n: number;
    constructor(n?: number);
    toString(): string;
    parse(css: string | null): NumberWrapper;
    get(element: SVGElement, attr: string): NumberWrapper;
    set(element: SVGElement, attr: string, override?: NumberWrapper): void;
    interpolator(from: number | NumberWrapper): (t: number) => number | NumberWrapper;
}
export declare class ArrayWrapper<T extends Attribute<T>> implements Attribute<ArrayWrapper<T>> {
    arr: T[];
    constructor(arr?: T[]);
    toString(): string;
    parse(css: string | null): ArrayWrapper<T>;
    get(element: SVGElement, attr: string): ArrayWrapper<T>;
    set(element: SVGElement, attr: string, override?: ArrayWrapper<T>): void;
    interpolator(from: ArrayWrapper<T>): (t: number) => ArrayWrapper<T>;
}
