import { anyParser, BaseAttributes, Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter, Inherit, Length, None, numberOrDimensionParser, numberOrDimensionSerializer } from "../attributes/base";
import { Box, buildBoxCompositeParser, buildBoxCompositeSerializer } from "../attributes/box";
import { Color } from "../attributes/color";
import { ColorMatrix } from "../attributes/color-matrix";
import { asManualParser, AttributeGetter } from "../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../attributes/literal";
import { NumberOptionalNumber } from "../attributes/number-optional-number";
import { buildPointCompositeParser, buildPointCompositeSerializer, Point, pointTweenBuilder } from "../attributes/point";
import { PreserveAspectRatio } from "../attributes/preserve-aspect-ratio";
import { asNativeSerializer, AttributeSetter, defaultSerializer } from "../attributes/setter";
import { XMLNS } from "../constants";
import { Context } from "../context";
import { AbstractElement } from "../element";
import { SVG_Events } from "../events";
import { AbstractFilterPrimitive, FilterPrimitive, FilterPrimitive_Attributes, FilterPrimitive_Element } from "./filter-primitive";
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

export interface HasFilter extends BaseAttributes {
  "filter": Filter | string | None | Inherit;
}

export const HasFilter_AttributeGetter: AttributeGetter<HasFilter> = {
  filter: anyParser,
};

export const HasFilter_AttributeSetter: AttributeSetter<HasFilter> = {
  filter: defaultSerializer,
};

export const HasFilter_AttributeInterpolator: AttributeInterpolator<HasFilter> = {
  filter: unsupportedTweenBuilder,
};

type FilterInputLiteral = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint";

export type FilterInput = FilterInputLiteral | AbstractFilterPrimitive<any, any>;

const filterInputLiterals = ["SourceGraphic", "SourceAlpha", "BackgroundImage", "BackgroundAlpha", "FillPaint", "StrokePaint"] as const;

function isFilterInputLiteral(repr: string | null): repr is FilterInputLiteral {
  if (!repr) {
    return false;
  }
  return filterInputLiterals.indexOf(repr as FilterInputLiteral) !== -1;
}

export const filterInputParser = asManualParser<FilterInput>((element, name) => {
  const repr = element.getAttribute(name);
  if (!repr) {
    return "SourceGraphic";
  } else if (isFilterInputLiteral(repr)) {
    return repr;
  }
  if (!(element instanceof AbstractFilterPrimitive)) {
    return "SourceGraphic";
  }
  return element.filter.getPrimitiveById(repr) || "SourceGraphic";
});

export const filterInputSerializer = asNativeSerializer<FilterInput>((value) => {
  if (value instanceof AbstractFilterPrimitive) {
    return value.toString();
  }
  return value;
});

export interface Filter_Attributes extends Core_Attributes {
  x: Length;
  y: Length;
  p: Point;
  width: Length;
  height: Length;
  "x:y:width:height": Box;
  filterUnits: "userSpaceOnUse" | "objectBoundingBox";
  primitiveUnits: "userSpaceOnUse" | "objectBoundingBox";
}

const unitsLiterals = ["userSpaceOnUse", "objectBoundingBox"] as const;

const Filter_AttributeGetter: AttributeGetter<Filter_Attributes> = {
  ...Core_AttributeGetter,
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  p: buildPointCompositeParser("x", "y"),
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
  "x:y:width:height": buildBoxCompositeParser("x", "y", "width", "height"),
  filterUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
  primitiveUnits: buildStringLiteralParser(unitsLiterals, "userSpaceOnUse"),
};

const Filter_AttributeSetter: AttributeSetter<Filter_Attributes> = {
  ...Core_AttributeSetter,
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  p: buildPointCompositeSerializer("x", "y"),
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
  "x:y:width:height": buildBoxCompositeSerializer("x", "y", "width", "height"),
  filterUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
  primitiveUnits: buildStringLiteralSerializer(unitsLiterals, "userSpaceOnUse"),
};

const Filter_AttributeInterpolator: AttributeInterpolator<Filter_Attributes> = {
  ...Core_AttributeInterpolator,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  p: pointTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
  "x:y:width:height": unsupportedTweenBuilder,
  filterUnits: unsupportedTweenBuilder,
  primitiveUnits: unsupportedTweenBuilder,
};

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

export class Filter extends AbstractElement<SVGFilterElement, Filter_Attributes, Filter_Events> {
  private _refCounter: number = 0;
  protected _getter = Filter_AttributeGetter;
  protected _setter = Filter_AttributeSetter;
  protected _interpolator = Filter_AttributeInterpolator;
  constructor(public context: Context) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "filter"));
    this.context.addDef(this);
  }
  public getUniquePrimitiveReference(): string {
    return (++this._refCounter).toString();
  }
  public getPrimitiveById(id: string): AbstractFilterPrimitive<FilterPrimitive_Element> | undefined {
    if (!this._node.ownerDocument) {
      return;
    }
    const primitiveElement = this._node.ownerDocument.getElementById(id) as unknown as FilterPrimitive_Element;
    if (!primitiveElement) {
      return;
    }
    const ctor = FILTER_PRIMITIVE_CTOR_BY_TAG.get(primitiveElement.tagName) || AbstractFilterPrimitive;
    return new ctor(this, primitiveElement);
  }
  public getPrimitivesByClassName(className: string): ReadonlyArray<AbstractFilterPrimitive<FilterPrimitive_Element>> {
    const elements = Array.from(this._node.getElementsByClassName(className)) as FilterPrimitive_Element[];
    return elements.map((element) => new FilterPrimitive(this, element));
  }
  public getPrimitivesByTagName<TAG extends keyof TagFilterPrimitiveMapping>(tagName: TAG): ReadonlyArray<TagFilterPrimitiveMapping[TAG]>;
  public getPrimitivesByTagName(tagName: string): ReadonlyArray<AbstractFilterPrimitive<FilterPrimitive_Element>> {
    const elements = Array.from(this._node.getElementsByTagName(tagName)) as FilterPrimitive_Element[];
    const ctor = FILTER_PRIMITIVE_CTOR_BY_TAG.get(tagName) || AbstractFilterPrimitive;
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
    fe.renderAttributes({
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
    fe.renderAttributes({
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
  private addLights<LIGHT_ATTRIBUTES extends FilterPrimitive_Attributes>(lighting: AbstractElement<SVGFEDiffuseLightingElement | SVGFESpecularLightingElement, LIGHT_ATTRIBUTES>, lights: LightSource_Attributes[]): void {
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
