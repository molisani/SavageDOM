export declare class PreserveAspectRatio {
    x?: "Min" | "Mid" | "Max" | undefined;
    y?: "Min" | "Mid" | "Max" | undefined;
    meetOrSlice?: "slice" | "meet" | undefined;
    constructor();
    constructor(x: "Min" | "Mid" | "Max", y: "Min" | "Mid" | "Max");
    constructor(x: "Min" | "Mid" | "Max", y: "Min" | "Mid" | "Max", meetOrSlice: "meet" | "slice");
    toString(): string;
}
