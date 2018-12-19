import { Transform } from "../transform";
export declare class Matrix_Transform extends Transform {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    constructor(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number);
    args(): string;
    parseArgs(css: string | null): Matrix_Transform;
}
