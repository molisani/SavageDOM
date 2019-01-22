import { Attribute } from "../attribute";
import { ArrayWrapper } from "./wrappers";
export declare type TransformType = "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY";
export declare class Transform<TYPE extends TransformType = any> implements Attribute<Transform> {
    type: TYPE;
    args: number[];
    static fromString(css: string): Transform;
    static matrix(m: DOMMatrix): Transform<"matrix">;
    static matrix(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number): Transform<"matrix">;
    static translate(x?: number, y?: number): Transform<"translate">;
    static rotate(a: number, x?: number, y?: number): Transform<"rotate">;
    static scale(x?: number, y?: number): Transform<"scale">;
    static skewX(a?: number): Transform<"skewX">;
    static skewY(a?: number): Transform<"skewY">;
    constructor(type: TYPE, args: number[]);
    toString(): string;
    parse(css: string | null): Transform;
    get(element: SVGElement, attr: string): Transform;
    set(element: SVGElement, attr: string, override?: Transform): void;
    interpolator(from: Transform): (t: number) => Transform;
}
export declare class TransformList extends ArrayWrapper<Transform> implements Attribute<TransformList> {
    parse(css: string | null): TransformList;
    interpolator(from: TransformList): (t: number) => TransformList;
}
export interface Transformable {
    "transform.matrix": Transform<"matrix">;
    "transform.translate": Transform<"translate">;
    "transform.scale": Transform<"scale">;
    "transform.rotate": Transform<"rotate">;
    "transform.skewX": Transform<"skewX">;
    "transform.skewY": Transform<"skewY">;
    transform: TransformList;
}
