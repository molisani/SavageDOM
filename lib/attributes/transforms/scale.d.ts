import { Transform } from "../transform";
export declare class UniformScale_Transform extends Transform {
    s: number;
    constructor(s?: number);
    args(): string;
    parseArgs(css: string | null): UniformScale_Transform;
}
export declare class Scale_Transform extends Transform {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    args(): string;
    parseArgs(css: string | null): Scale_Transform;
}
