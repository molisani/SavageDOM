import { Attribute } from "../attribute";
import { Length } from "./base";
export declare class Box implements Attribute<Box> {
    x: Length;
    y: Length;
    width: Length;
    height: Length;
    constructor(x: Length, y: Length, width: Length, height: Length);
    toString(): string;
    parse(css: string | null): Box;
    get(element: SVGElement, attr: string): Box;
    set(element: SVGElement, attr: string, override?: Box): void;
    interpolator(from: Box): (t: number) => Box;
}
