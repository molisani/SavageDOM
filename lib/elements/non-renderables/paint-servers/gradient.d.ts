import { Core_Attributes, HasClass, HasStyle, Inherit } from "../../../attributes/base";
import { Color } from "../../../attributes/color";
import { Percentage } from "../../../attributes/dimension";
import { Transform } from "../../../attributes/transform";
import { Matrix_Transform } from "../../../attributes/transforms/matrix";
import { Rotate_Transform } from "../../../attributes/transforms/rotate";
import { Scale_Transform, UniformScale_Transform } from "../../../attributes/transforms/scale";
import { SkewX_Transform, SkewY_Transform } from "../../../attributes/transforms/skew";
import { Translate_Transform } from "../../../attributes/transforms/translate";
import { Context } from "../../../context";
import { Element } from "../../../element";
import { NonRenderable_Events } from "../../non-renderable";
import { AbstractPaintServer, PaintServer_Attributes } from "../paint-server";
export interface Gradient_Attributes extends PaintServer_Attributes {
    gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
    "gradientTransform.matrix": Matrix_Transform;
    "gradientTransform.translate": Translate_Transform;
    "gradientTransform.uniformScale": UniformScale_Transform;
    "gradientTransform.scale": Scale_Transform;
    "gradientTransform.rotate": Rotate_Transform;
    "gradientTransform.skewX": SkewX_Transform;
    "gradientTransform.skewY": SkewY_Transform;
    gradientTransform: Transform[];
    spreadMethod: "pad" | "reflect" | "repeat";
    "xlink:href": string;
}
export interface Stops {
    [offset: string]: "currentColor" | Color | Inherit;
}
export interface Stop_Attributes extends Core_Attributes, HasClass, HasStyle {
    offset: Percentage;
    "stop-color": "currentColor" | Color | Inherit;
    "stop-opacity": number | Inherit;
}
export declare class Stop extends Element<SVGStopElement, Stop_Attributes, NonRenderable_Events> {
    offset: number;
    constructor(context: Context, offset: number, color: "currentColor" | Color | Inherit);
}
export declare abstract class AbstractGradient<ELEMENT extends SVGElement, ATTRIBUTES extends Gradient_Attributes> extends AbstractPaintServer<ELEMENT, ATTRIBUTES> {
    constructor(context: Context, name: string, stops: Stops, attrs?: Partial<ATTRIBUTES>);
}
