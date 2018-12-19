import { Inherit, Length, None } from "../../attributes/base";
import { Box } from "../../attributes/box";
import { Point } from "../../attributes/point";
import { Context } from "../../context";
import { AbstractNonRenderable, NonRenderable_Attributes } from "../non-renderable";
export interface HasMask {
    "mask": Mask | None | Inherit;
}
export interface Mask_Attributes extends NonRenderable_Attributes {
    maskUnits: "userSpaceOnUse" | "objectBoundingBox";
    maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
    x: Length;
    y: Length;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
}
export declare class Mask extends AbstractNonRenderable<SVGMaskElement, Mask_Attributes> {
    context: Context;
    constructor(context: Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox");
}
