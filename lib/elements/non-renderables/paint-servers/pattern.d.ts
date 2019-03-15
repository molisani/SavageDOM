import { HasOpacity, HasOverflow, Length } from "../../../attributes/base";
import { Box } from "../../../attributes/box";
import { Point } from "../../../attributes/point";
import { PreserveAspectRatio } from "../../../attributes/preserve-aspect-ratio";
import { Transform, TransformList } from "../../../attributes/transform";
import { Context } from "../../../context";
import { AbstractPaintServer, PaintServer_Attributes } from "../paint-server";
export interface Pattern_Attributes extends PaintServer_Attributes, HasOverflow, HasOpacity {
    patternUnits: "userSpaceOnUse" | "objectBoundingBox";
    patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
    "patternTransform.matrix": Transform<"matrix">;
    "patternTransform.translate": Transform<"translate">;
    "patternTransform.scale": Transform<"scale">;
    "patternTransform.rotate": Transform<"rotate">;
    "patternTransform.skewX": Transform<"skewX">;
    "patternTransform.skewY": Transform<"skewY">;
    patternTransform: TransformList;
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    "xlink:href": string;
    preserveAspectRatio: PreserveAspectRatio;
    viewBox: Box;
}
export declare class Pattern extends AbstractPaintServer<SVGPatternElement, Pattern_Attributes> {
    constructor(context: Context, el: SVGPatternElement);
    constructor(context: Context, w: number, h: number, x?: number, y?: number, view?: Box);
    clone(deep?: boolean): Pattern;
}
