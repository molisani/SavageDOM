import { Transform } from "../transform";
export declare class Rotate_Transform extends Transform {
    a: number;
    x: number;
    y: number;
    constructor(a: number, x?: number, y?: number);
    args(): string;
    parseArgs(css: string | null): Rotate_Transform;
}
