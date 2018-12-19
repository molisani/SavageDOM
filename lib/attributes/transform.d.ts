import { Attribute } from "../attribute";
import { Matrix_Transform } from "./transforms/matrix";
import { Rotate_Transform } from "./transforms/rotate";
import { Scale_Transform, UniformScale_Transform } from "./transforms/scale";
import { SkewX_Transform, SkewY_Transform } from "./transforms/skew";
import { Translate_Transform } from "./transforms/translate";
export declare abstract class Transform implements Attribute<Transform> {
    type: "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY";
    constructor(type: "matrix" | "translate" | "scale" | "rotate" | "skewX" | "skewY");
    abstract args(): string;
    toString(): string;
    abstract parseArgs(args: string | null): Transform;
    parse(css: string | null): Transform;
    get(element: SVGElement, attr: string): Transform;
    set(element: SVGElement, attr: string, override?: Transform): void;
    interpolator(from: Transform): (t: number) => Transform;
}
export interface Transformable {
    "transform.matrix": Matrix_Transform;
    "transform.translate": Translate_Transform;
    "transform.uniformScale": UniformScale_Transform;
    "transform.scale": Scale_Transform;
    "transform.rotate": Rotate_Transform;
    "transform.skewX": SkewX_Transform;
    "transform.skewY": SkewY_Transform;
    transform: Transform[];
}
