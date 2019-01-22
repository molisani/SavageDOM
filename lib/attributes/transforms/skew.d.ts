import { Transform } from "../transform";
export declare class SkewX_Transform extends Transform {
    a: number;
    constructor(a?: number);
    args(): string;
    parseArgs(css: string | null): SkewX_Transform;
}
export declare class SkewY_Transform extends Transform {
    a: number;
    constructor(a?: number);
    args(): string;
    parseArgs(css: string | null): SkewY_Transform;
}
