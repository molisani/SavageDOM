import { Core_Attributes, Inherit, Length, None } from "../attributes/base";
import { Box } from "../attributes/box";
import { Color } from "../attributes/color";
import { ColorMatrix } from "../attributes/color-matrix";
import { NumberOptionalNumber } from "../attributes/number-optional-number";
import { Point } from "../attributes/point";
import { PreserveAspectRatio } from "../attributes/preserve-aspect-ratio";
import { Context } from "../context";
import { Element } from "../element";
import { SVG_Events } from "../events";
import { FilterPrimitive } from "./filter-primitive";
import { Blend_Primitive } from "./filter-primitives/blend";
import { ColorMatrix_Primitive } from "./filter-primitives/color-matrix";
import { ComponentTransfer_Primitive, TransferFunction_Attributes } from "./filter-primitives/component-transfer";
import { Composite_Primitive } from "./filter-primitives/composite";
import { ConvolveMatrix_Attributes, ConvolveMatrix_Primitive } from "./filter-primitives/convolve-matrix";
import { DisplacementMap_Attributes, DisplacementMap_Primitive } from "./filter-primitives/displacement-map";
import { Flood_Primitive } from "./filter-primitives/flood";
import { GaussianBlur_Primitive } from "./filter-primitives/gaussian-blur";
import { Image_Primitive } from "./filter-primitives/image";
import { DiffuseLighting, DiffuseLighting_Attributes } from "./filter-primitives/lighting/diffuse";
import { LightSource_Attributes } from "./filter-primitives/lighting/light-source";
import { SpecularLighting, SpecularLighting_Attributes } from "./filter-primitives/lighting/specular";
import { Merge_Primitive } from "./filter-primitives/merge";
import { Morphology_Primitive } from "./filter-primitives/morphology";
import { Offset_Primitive } from "./filter-primitives/offset";
import { Tile_Primitive } from "./filter-primitives/tile";
import { Turbulence_Attributes, Turbulence_Primitive } from "./filter-primitives/turbulence";
export interface HasFilter {
    "filter": Filter | string | None | Inherit;
}
export declare type FilterInput = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | FilterPrimitive<any, any>;
export interface Filter_Attributes extends Core_Attributes {
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    filterUnits: "userSpaceOnUse" | "objectBoundingBox";
    primitiveUnits: "userSpaceOnUse" | "objectBoundingBox";
}
export interface Filter_Events extends SVG_Events {
}
export declare class Filter extends Element<SVGFilterElement, Filter_Attributes, Filter_Events> {
    context: Context;
    private _refCounter;
    constructor(context: Context);
    getUniquePrimitiveReference(): string;
    blend(mode: "normal" | "multiply" | "screen" | "darken" | "lighten", input1: FilterInput, input2?: FilterInput): Blend_Primitive;
    colorMatrix(matrix: ColorMatrix, input?: FilterInput): ColorMatrix_Primitive;
    componentTransfer(r: TransferFunction_Attributes, g: TransferFunction_Attributes, b: TransferFunction_Attributes, a?: TransferFunction_Attributes, input?: FilterInput): ComponentTransfer_Primitive;
    composite(operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic", k1: number, k2: number, k3: number, k4: number, input1?: FilterInput, input2?: FilterInput): Composite_Primitive;
    convolveMatrix(attrs: Partial<ConvolveMatrix_Attributes>, input?: FilterInput): ConvolveMatrix_Primitive;
    diffuseLighting(attrs: Partial<DiffuseLighting_Attributes>, lights?: LightSource_Attributes[], input?: FilterInput): DiffuseLighting;
    displacementMap(attrs: Partial<DisplacementMap_Attributes>, input1?: FilterInput, input2?: FilterInput): DisplacementMap_Primitive;
    flood(color: Color, area: Box): Flood_Primitive;
    gaussianBlur(stdDeviation?: number, edgeMode?: "duplicate" | "wrap" | None, input?: FilterInput): GaussianBlur_Primitive;
    image(href: string, preserveAspectRatio?: PreserveAspectRatio): Image_Primitive;
    merge(inputs: FilterInput[]): Merge_Primitive;
    morphology(operator: "erode" | "dilate", radius: NumberOptionalNumber, input?: FilterInput): Morphology_Primitive;
    offset(d: Point, input?: FilterInput): Offset_Primitive;
    specularLighting(attrs: Partial<SpecularLighting_Attributes>, lights?: LightSource_Attributes[]): SpecularLighting;
    tile(area: Box, input?: FilterInput): Tile_Primitive;
    turbulence(attrs: Partial<Turbulence_Attributes>): Turbulence_Primitive;
    private addLights;
}
