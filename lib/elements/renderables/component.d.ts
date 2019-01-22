import { EasingFunction } from "../../animation/easing";
import { Context } from "../../context";
import { Group } from "./group";
export declare class Component extends Group {
    protected easing: EasingFunction;
    static context: Context;
    static subscribeLatestContext(): void;
    private static _CONTEXT_SUBSCRIPTION?;
    private static _CONTEXT?;
    private _hidden;
    constructor(origin?: {
        x: number;
        y: number;
    }, easing?: EasingFunction);
    moveTo(x: number, y: number, duration?: number): void;
    rotate(angle: number, duration?: number): void;
    scale(x: number, y?: number, duration?: number): void;
    show(): void;
    hide(): void;
}
