import { Core_Attributes, Inherit, Length, None } from "../attributes/base";
import { Box } from "../attributes/box";
import { Color } from "../attributes/color";
import { ColorMatrix } from "../attributes/color-matrix";
import { NumberOptionalNumber } from "../attributes/number-optional-number";
import { Point } from "../attributes/point";
import { PreserveAspectRatio } from "../attributes/preserve-aspect-ratio";
import { XMLNS } from "../constants";
import { Context } from "../context";
import { Element } from "../element";
import { SVG_Events } from "../events";
import { FilterPrimitive, FilterPrimitive_Attributes, FilterPrimitive_Elements } from "./filter-primitive";
import { Blend_Primitive } from "./filter-primitives/blend";
import { ColorMatrix_Primitive } from "./filter-primitives/color-matrix";
import { ComponentTransfer_Primitive, TransferFunction_Attributes, TransferFunction_Primitive } from "./filter-primitives/component-transfer";
import { Composite_Primitive } from "./filter-primitives/composite";
import { ConvolveMatrix_Attributes, ConvolveMatrix_Primitive } from "./filter-primitives/convolve-matrix";
import { DisplacementMap_Attributes, DisplacementMap_Primitive } from "./filter-primitives/displacement-map";
import { Flood_Primitive } from "./filter-primitives/flood";
import { GaussianBlur_Primitive } from "./filter-primitives/gaussian-blur";
import { Image_Primitive } from "./filter-primitives/image";
import { DiffuseLighting, DiffuseLighting_Attributes } from "./filter-primitives/lighting/diffuse";
import { DistantLight, LightSource_Attributes, PointLight, SpotLight } from "./filter-primitives/lighting/light-source";
import { SpecularLighting, SpecularLighting_Attributes } from "./filter-primitives/lighting/specular";
import { Merge_Primitive } from "./filter-primitives/merge";
import { Morphology_Primitive } from "./filter-primitives/morphology";
import { Offset_Primitive } from "./filter-primitives/offset";
import { FILTER_PRIMITIVE_CTOR_BY_TAG, TagFilterPrimitiveMapping } from "./filter-primitives/tag-mapping";
import { Tile_Primitive } from "./filter-primitives/tile";
import { Turbulence_Attributes, Turbulence_Primitive } from "./filter-primitives/turbulence";

export interface HasFilter {
  "filter": Filter | string | None | Inherit;
}

export type FilterInput = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | FilterPrimitive<any, any>;

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

export interface Filter_Events extends SVG_Events {}

const merge = <A, B>(a: A, b: B): A & B => {
  const obj = Object.create(null);
  for (const aProp in a) {
    obj[aProp] = a[aProp];
  }
  for (const bProp in b) {
    obj[bProp] = b[bProp];
  }
  return obj;
};

export class Filter extends Element<SVGFilterElement, Filter_Attributes, Filter_Events> {
  private _refCounter: number = 0;
  constructor(public context: Context) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "filter"));
    this.context.addDef(this);
  }
  public getUniquePrimitiveReference(): string {
    return (++this._refCounter).toString();
  }
  public getPrimitivesByClassName(className: string): ReadonlyArray<FilterPrimitive<FilterPrimitive_Elements>> {
    const elements = Array.from(this._node.getElementsByClassName(className)) as FilterPrimitive_Elements[];
    return elements.map((element) => new FilterPrimitive(this, element));
  }
  public getPrimitivesByTagName<TAG extends keyof TagFilterPrimitiveMapping>(tagName: TAG): ReadonlyArray<TagFilterPrimitiveMapping[TAG]>;
  public getPrimitivesByTagName(tagName: string): ReadonlyArray<FilterPrimitive<FilterPrimitive_Elements>> {
    const elements = Array.from(this._node.getElementsByTagName(tagName)) as FilterPrimitive_Elements[];
    const ctor = FILTER_PRIMITIVE_CTOR_BY_TAG.get(tagName) || FilterPrimitive;
    return elements.map((element) => new ctor(this, element));
  }
  public blend(mode: "normal" | "multiply" | "screen" | "darken" | "lighten", input1: FilterInput, input2?: FilterInput): Blend_Primitive {
    return new Blend_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feBlend"), {
      in: input1,
      in2: input2,
      mode,
    });
  }
  public colorMatrix(matrix: ColorMatrix, input?: FilterInput): ColorMatrix_Primitive {
    return new ColorMatrix_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feColorMatrix"), {
      in: input,
      type: matrix.type,
      values: matrix,
    });
  }
  public componentTransfer(r: TransferFunction_Attributes, g: TransferFunction_Attributes, b: TransferFunction_Attributes, a?: TransferFunction_Attributes, input?: FilterInput): ComponentTransfer_Primitive {
    const componentTransfer = new ComponentTransfer_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feComponentTransfer"), {
      in: input,
    });
    componentTransfer.add(new TransferFunction_Primitive(this.context, this.context.window.document.createElementNS(XMLNS.SVG, "feFuncR"), r));
    componentTransfer.add(new TransferFunction_Primitive(this.context, this.context.window.document.createElementNS(XMLNS.SVG, "feFuncG"), g));
    componentTransfer.add(new TransferFunction_Primitive(this.context, this.context.window.document.createElementNS(XMLNS.SVG, "feFuncB"), b));
    if (a !== undefined) {
      componentTransfer.add(new TransferFunction_Primitive(this.context, this.context.window.document.createElementNS(XMLNS.SVG, "feFuncA"), a));
    }
    return componentTransfer;
  }
  public composite(operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic", k1: number, k2: number, k3: number, k4: number, input1?: FilterInput, input2?: FilterInput): Composite_Primitive {
    return new Composite_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feComposite"), {
      in: input1,
      in2: input2,
      operator,
      k1,
      k2,
      k3,
      k4,
    });
  }
  public convolveMatrix(attrs: Partial<ConvolveMatrix_Attributes>, input?: FilterInput): ConvolveMatrix_Primitive {
    return new ConvolveMatrix_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feConvolveMatrix"), merge(attrs, { in: input }));
  }
  public diffuseLighting(attrs: Partial<DiffuseLighting_Attributes>, lights: LightSource_Attributes[] = [], input?: FilterInput): DiffuseLighting {
    const fe = new DiffuseLighting(this, this.context.window.document.createElementNS(XMLNS.SVG, "feDiffuseLighting"), merge(attrs, { in: input }));
    this.addLights(fe, lights);
    return fe;
  }
  public displacementMap(attrs: Partial<DisplacementMap_Attributes>, input1?: FilterInput, input2?: FilterInput): DisplacementMap_Primitive {
    return new DisplacementMap_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feDisplacementMap"), merge(attrs, { in: input1, in2: input2 }));
  }
  public flood(color: Color, area: Box): Flood_Primitive {
    const fe = new Flood_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feFlood"), { "flood-color": color });
    fe.setAttributes({
      x: area.x,
      y: area.y,
      width: area.width,
      height: area.height,
    });
    return fe;
  }
  public gaussianBlur(stdDeviation: number = 0, edgeMode: "duplicate" | "wrap" | None = "duplicate", input?: FilterInput): GaussianBlur_Primitive {
    return new GaussianBlur_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feGaussianBlur"), {
      in: input,
      stdDeviation,
      edgeMode,
    });
  }
  public image(href: string, preserveAspectRatio?: PreserveAspectRatio): Image_Primitive {
    return new Image_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feImage"), {
      "xlink:href": href,
      preserveAspectRatio,
    });
  }
  public merge(inputs: ReadonlyArray<FilterInput>): Merge_Primitive {
    const fe = new Merge_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feMerge"));
    fe.addInputs(inputs);
    return fe;
  }
  public morphology(operator: "erode" | "dilate", radius: NumberOptionalNumber, input?: FilterInput): Morphology_Primitive {
    return new Morphology_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feMorphology"), {
      in: input,
      operator,
      radius,
    });
  }
  public offset(d: Point, input?: FilterInput): Offset_Primitive {
    return new Offset_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feOffset"), {
      in: input,
      dx: d.x,
      dy: d.y,
    });
  }
  public specularLighting(attrs: Partial<SpecularLighting_Attributes>, lights: LightSource_Attributes[] = []): SpecularLighting {
    const fe = new SpecularLighting(this, this.context.window.document.createElementNS(XMLNS.SVG, "feSpecularLighting"), attrs);
    this.addLights(fe, lights);
    return fe;
  }
  public tile(area: Box, input?: FilterInput): Tile_Primitive {
    const fe = new Tile_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feTile"), { in: input });
    fe.setAttributes({
      x: area.x,
      y: area.y,
      width: area.width,
      height: area.height,
    });
    return fe;
  }
  public turbulence(attrs: Partial<Turbulence_Attributes>): Turbulence_Primitive {
    return new Turbulence_Primitive(this, this.context.window.document.createElementNS(XMLNS.SVG, "feTurbulence"), attrs);
  }
  private addLights(lighting: Element<SVGFEDiffuseLightingElement | SVGFESpecularLightingElement, FilterPrimitive_Attributes>, lights: LightSource_Attributes[]): void {
    lights.forEach(light => {
      switch (light.type) {
        case "point":
          lighting.add(new PointLight(this, this.context.window.document.createElementNS(XMLNS.SVG, "fePointLight"), light));
          break;
        case "distant":
          lighting.add(new DistantLight(this, this.context.window.document.createElementNS(XMLNS.SVG, "feDistantLight"), light));
          break;
        case "spot":
          lighting.add(new SpotLight(this, this.context.window.document.createElementNS(XMLNS.SVG, "feSpotLight"), light));
          break;
      }
    });
  }
}
