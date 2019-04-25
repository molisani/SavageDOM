import { Filter } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_Element } from "../filter-primitive";
import { Blend_Primitive } from "./blend";
import { ColorMatrix_Primitive } from "./color-matrix";
import { ComponentTransfer_Primitive } from "./component-transfer";
import { Composite_Primitive } from "./composite";
import { ConvolveMatrix_Primitive } from "./convolve-matrix";
import { DisplacementMap_Primitive } from "./displacement-map";
import { Flood_Primitive } from "./flood";
import { GaussianBlur_Primitive } from "./gaussian-blur";
import { Image_Primitive } from "./image";
import { DiffuseLighting } from "./lighting/diffuse";
import { SpecularLighting } from "./lighting/specular";
import { MergeNode_Primitive, Merge_Primitive } from "./merge";
import { Morphology_Primitive } from "./morphology";
import { Offset_Primitive } from "./offset";
import { Tile_Primitive } from "./tile";
import { Turbulence_Primitive } from "./turbulence";

type SimpleFilterPrimitiveConstructor<ELEMENT extends FilterPrimitive_Element> = new(filter: Filter, element: ELEMENT) => AbstractFilterPrimitive<ELEMENT, any>;

export interface TagFilterPrimitiveMapping {
  [tagName: string]: AbstractFilterPrimitive<FilterPrimitive_Element, any>;
  feBlend: Blend_Primitive;
  feColorMatrix: ColorMatrix_Primitive;
  feComponentTransfer: ComponentTransfer_Primitive;
  feComposite: Composite_Primitive;
  feConvolveMatrix: ConvolveMatrix_Primitive;
  feDiffuseLighting: DiffuseLighting;
  feDisplacementMap: DisplacementMap_Primitive;
  feFlood: Flood_Primitive;
  feGaussianBlur: GaussianBlur_Primitive;
  feImage: Image_Primitive;
  feMerge: Merge_Primitive;
  feMergeNode: MergeNode_Primitive;
  feMorphology: Morphology_Primitive;
  feOffset: Offset_Primitive;
  feSpecularLighting: SpecularLighting;
  feTile: Tile_Primitive;
  feTurbulence: Turbulence_Primitive;
}

export const FILTER_PRIMITIVE_CTOR_BY_TAG: ReadonlyMap<keyof TagFilterPrimitiveMapping, SimpleFilterPrimitiveConstructor<FilterPrimitive_Element>> = new Map<string, SimpleFilterPrimitiveConstructor<any>>([
  ["feBlend", Blend_Primitive as SimpleFilterPrimitiveConstructor<SVGFEBlendElement>],
  ["feColorMatrix", ColorMatrix_Primitive as SimpleFilterPrimitiveConstructor<SVGFEColorMatrixElement>],
  ["feComponentTransfer", ComponentTransfer_Primitive as SimpleFilterPrimitiveConstructor<SVGFEComponentTransferElement>],
  ["feComposite", Composite_Primitive as SimpleFilterPrimitiveConstructor<SVGFECompositeElement>],
  ["feConvolveMatrix", ConvolveMatrix_Primitive as SimpleFilterPrimitiveConstructor<SVGFEConvolveMatrixElement>],
  ["feDiffuseLighting", DiffuseLighting as SimpleFilterPrimitiveConstructor<SVGFEDiffuseLightingElement>],
  ["feDisplacementMap", DisplacementMap_Primitive as SimpleFilterPrimitiveConstructor<SVGFEDisplacementMapElement>],
  ["feFlood", Flood_Primitive as SimpleFilterPrimitiveConstructor<SVGFEFloodElement>],
  ["feGaussianBlur", GaussianBlur_Primitive as SimpleFilterPrimitiveConstructor<SVGFEGaussianBlurElement>],
  ["feImage", Image_Primitive as SimpleFilterPrimitiveConstructor<SVGFEImageElement>],
  ["feMerge", Merge_Primitive as SimpleFilterPrimitiveConstructor<SVGFEMergeElement>],
  ["feMergeNode", MergeNode_Primitive as SimpleFilterPrimitiveConstructor<SVGFEMergeNodeElement>],
  ["feMorphology", Morphology_Primitive as SimpleFilterPrimitiveConstructor<SVGFEMorphologyElement>],
  ["feOffset", Offset_Primitive as SimpleFilterPrimitiveConstructor<SVGFEOffsetElement>],
  ["feSpecularLighting", SpecularLighting as SimpleFilterPrimitiveConstructor<SVGFESpecularLightingElement>],
  ["feTile", Tile_Primitive as SimpleFilterPrimitiveConstructor<SVGFETileElement>],
  ["feTurbulence", Turbulence_Primitive as SimpleFilterPrimitiveConstructor<SVGFETurbulenceElement>],
]);
