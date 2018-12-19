import { Attribute } from "../attribute";
import { Length } from "./base";
export declare class Point implements Attribute<Point> {
    x: Length;
    y: Length;
    constructor(x: Length, y: Length);
    toString(): string;
    parse(css: string | null): Point;
    get(element: SVGElement, attr: string): Point;
    set(element: SVGElement, attr: string, override?: Point): void;
    interpolator(from: Point): (t: number) => Point;
}
