import { Transform } from "../transform";
export declare class Translate_Transform extends Transform {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    args(): string;
    parseArgs(css: string | null): Translate_Transform;
}
