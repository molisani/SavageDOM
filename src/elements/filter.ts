namespace SavageDOM.Attribute {

  export interface Presentation {
    "filter": Elements.Filter | string | None | Inherit;
  }

  export interface FilterPrimitive extends Presentation, HasClass, HasStyle {
    x: Length;
    y: Length;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    result: string;
    "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Inherit;
  }

  export namespace FilterPrimitive {

    export interface Lighting extends HasColor {
      "lighting-color": CurrentColor | Color | Inherit;
    }

    export interface Blend {
      in: FilterInput;
      in2: FilterInput;
      mode: "normal" | "multiply" | "screen" | "darken" | "lighten";
    };

    export interface ColorMatrix {
      in: FilterInput;
      type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
      values: Attribute.ColorMatrix;
      "type:values": Attribute.ColorMatrix;
    };

    export interface ComponentTransfer {
      in: FilterInput;
    };

    export interface Composite {
      in: FilterInput;
      in2: FilterInput;
      operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic";
      k1: number;
      k2: number;
      k3: number;
      k4: number;
    };

    export interface ConvolveMatrix {
      in: FilterInput;
      order: NumberOptionalNumber;
      kernelMatrix: Matrix;
      divisor: number;
      bias: number;
      targetX: number;
      targetY: number;
      "targetX:targetY": Point;
      edgeMode: "duplicate" | "wrap" | None;
      kernelUnitLength: NumberOptionalNumber;
      preserveAlpha: boolean;
    };

    export interface DiffuseLighting extends Lighting {
      in: FilterInput;
      surfaceScale: number;
      diffuseConstant: number;
      kernelUnitLength: NumberOptionalNumber;
    };

    export interface DisplacementMap {
      in: FilterInput;
      in2: Elements.FilterPrimitive<any, any>;
      scale: number;
      xChannelSelector: "R" | "G" | "B" | "A";
      yChannelSelector: "R" | "G" | "B" | "A";
    };

    export interface DropShadow {
      in: FilterInput;
      stdDeviation: number;
      dx: Length;
      dy: Length;
      "dx:dy": Point;
    };

    export interface Flood extends HasColor {
      "flood-color": CurrentColor | Color | Inherit;
      "flood-opacity": number | Inherit;
    };

    export interface GaussianBlur {
      in: FilterInput;
      stdDeviation: number;
      edgeMode: "duplicate" | "wrap" | None;
    };

    export interface Image {
      preserveAspectRatio: PreserveAspectRatio;
      "xlink:href": string;
    };

    export interface MergeNode {
      in: FilterInput;
    };

    export interface Morphology {
      in: FilterInput;
      operator: "erode" | "dilate";
      radius: NumberOptionalNumber;
    };

    export interface Offset {
      in: FilterInput;
      dx: Length;
      dy: Length;
      "dx:dy": Point;
    };

    export interface SpecularLighting extends Lighting {
      in: FilterInput;
      surfaceScale: number;
      specularConstant: number;
      specularExponent: number;
      kernelUnitLength: NumberOptionalNumber;
    };

    export interface Tile {
      in: FilterInput;
    };

    export interface Turbulence {
      type: "fractalNoise" | "turbulence";
      baseFrequency: NumberOptionalNumber;
      numOctaves: number;
      seed: number;
      stitchTiles: "noStitch" | "stitch";
    };

    export interface IdentityFunction {
      type: "identity";
    };

    export interface TabularFunction {
      type: "table" | "discrete";
      tableValues: number[];
    };

    export interface LinearFunction {
      type: "linear";
      slope: number;
      intercept: number;
    };

    export interface GammaFunction {
      type: "gamma";
      amplitude: number;
      exponent: number;
      offset: number;
    };

    export type TransferFunction = IdentityFunction | TabularFunction | LinearFunction | GammaFunction;

    export namespace LightSource {

      export interface DistantLight {
        type: "distant";
        azimuth: number;
        elevation: number;
      };

      export interface PointLight {
        type: "point";
        x: Length;
        y: Length;
        "x:y": Point;
        z: Length;
      };

      export interface SpotLight {
        type: "spot";
        x: Length;
        y: Length;
        "x:y": Point;
        z: Length;
        pointsAtX: Length;
        pointsAtY: Length;
        "pointsAtX:pointsAtY": Point;
        pointsAtZ: Length;
        specularExponent: number;
        limitingConeAngle: number;
      };

    }

    export type LightSource = LightSource.DistantLight | LightSource.PointLight | LightSource.SpotLight;

  }

  export type FilterInput = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | Elements.FilterPrimitive<any, any>;

  export interface Filter {
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    filterUnits: "userSpaceOnUse" | "objectBoundingBox";
    primitiveUnits: "userSpaceOnUse" | "objectBoundingBox";
  };

  export interface HasFilter {
    filter: Events.Filter | None | Inherit;
  }

}

namespace SavageDOM.Events {

  export interface FilterPrimitive extends SVG {}

  export interface Filter extends SVG {}

}

namespace SavageDOM.Elements {

  export class FilterPrimitive<FE extends SVGElement, A> extends Element<FE, Attribute.FilterPrimitive & A, Events.FilterPrimitive> {
    private _referenced = false;
    constructor(filter: Filter, name: string, attrs?: Partial<Attribute.FilterPrimitive & A>) {
      super(filter.paper, name, attrs);
      filter.add(this);
    }
    toString(): string {
      if (!this._referenced) {
        this._referenced = true;
        this.setAttribute("result" as any, this.id as any); // hotfix for typedoc using 2.1.6
      }
      return this.id;
    }
  }
  export namespace FilterPrimitive {
    export class Blend extends FilterPrimitive<SVGFEBlendElement, Attribute.FilterPrimitive.Blend> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Blend>) {
        super(filter, "feBlend", attrs);
      }
    };
    export class ColorMatrix extends FilterPrimitive<SVGFEColorMatrixElement, Attribute.FilterPrimitive.ColorMatrix> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ColorMatrix>) {
        super(filter, "feColorMatrix", attrs);
      }
    };
    export class ComponentTransfer extends FilterPrimitive<SVGFEComponentTransferElement, Attribute.FilterPrimitive.ComponentTransfer> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ComponentTransfer>) {
        super(filter, "feComponentTransfer", attrs);
      }
    };
    export class Composite extends FilterPrimitive<SVGFECompositeElement, Attribute.FilterPrimitive.Composite> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Composite>) {
        super(filter, "feComposite", attrs);
      }
    };
    export class ConvolveMatrix extends FilterPrimitive<SVGFEConvolveMatrixElement, Attribute.FilterPrimitive.ConvolveMatrix> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.ConvolveMatrix>) {
        super(filter, "feConvolveMatrix", attrs);
      }
    };
    export class DiffuseLighting extends FilterPrimitive<SVGFEDiffuseLightingElement, Attribute.FilterPrimitive.DiffuseLighting> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.DiffuseLighting>) {
        super(filter, "feDiffuseLighting", attrs);
      }
    };
    export class DisplacementMap extends FilterPrimitive<SVGFEDisplacementMapElement, Attribute.FilterPrimitive.DisplacementMap> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.DisplacementMap>) {
        super(filter, "feDisplacementMap", attrs);
      }
    };
    export class Flood extends FilterPrimitive<SVGFEFloodElement, Attribute.FilterPrimitive.Flood> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Flood>) {
        super(filter, "feFlood", attrs);
      }
    };
    export class GaussianBlur extends FilterPrimitive<SVGFEGaussianBlurElement, Attribute.FilterPrimitive.GaussianBlur> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.GaussianBlur>) {
        super(filter, "feGaussianBlur", attrs);
      }
    };
    export class Image extends FilterPrimitive<SVGFEImageElement, Attribute.FilterPrimitive.Image> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Image>) {
        super(filter, "feImage", attrs);
      }
    };
    export class Merge extends FilterPrimitive<SVGFEMergeElement, void> {
      constructor(filter: Filter) {
        super(filter, "feMerge");
      }
    };
    export class MergeNode extends FilterPrimitive<SVGFEMergeNodeElement, Attribute.FilterPrimitive.MergeNode> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.MergeNode>) {
        super(filter, "feMergeNode", attrs);
      }
    };
    export class Morphology extends FilterPrimitive<SVGFEMorphologyElement, Attribute.FilterPrimitive.Morphology> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Morphology>) {
        super(filter, "feMorphology", attrs);
      }
    };
    export class Offset extends FilterPrimitive<SVGFEOffsetElement, Attribute.FilterPrimitive.Offset> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Offset>) {
        super(filter, "feOffset", attrs);
      }
    };
    export class SpecularLighting extends FilterPrimitive<SVGFESpecularLightingElement, Attribute.FilterPrimitive.SpecularLighting> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.SpecularLighting>) {
        super(filter, "feSpecularLighting", attrs);
      }
    };
    export class Tile extends FilterPrimitive<SVGFETileElement, Attribute.FilterPrimitive.Tile> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Tile>) {
        super(filter, "feTile", attrs);
      }
    };
    export class Turbulence extends FilterPrimitive<SVGFETurbulenceElement, Attribute.FilterPrimitive.Turbulence> {
      constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.Turbulence>) {
        super(filter, "feTurbulence", attrs);
      }
    };
    export class TransferFunction extends FilterPrimitive<SVGFEFuncRElement | SVGFEFuncGElement | SVGFEFuncBElement | SVGFEFuncAElement, Attribute.FilterPrimitive.TransferFunction> {
      constructor(filter: Filter, channel: "R" | "G" | "B" | "A", attrs?: Partial<Attribute.FilterPrimitive.TransferFunction>) {
        super(filter, `feFunc${channel}`, attrs);
      }
    };
    export namespace LightSource {
      export class DistantLight extends FilterPrimitive<SVGFEDistantLightElement, Attribute.FilterPrimitive.LightSource.DistantLight> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.DistantLight>) {
          super(filter, "feDistantLight", attrs);
        }
      };
      export class PointLight extends FilterPrimitive<SVGFEPointLightElement, Attribute.FilterPrimitive.LightSource.PointLight> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.PointLight>) {
          super(filter, "fePointLight", attrs);
        }
      };
      export class SpotLight extends FilterPrimitive<SVGFESpotLightElement, Attribute.FilterPrimitive.LightSource.SpotLight> {
        constructor(filter: Filter, attrs?: Partial<Attribute.FilterPrimitive.LightSource.SpotLight>) {
          super(filter, "feSpotLight", attrs);
        }
      };
    }
  }

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

  export class Filter extends Element<SVGFilterElement, Attribute.Filter, Events.Filter> {
    public node: SVGFilterElement;
    constructor(public paper: Paper) {
      super(paper, "filter");
      this.paper.defs.add(this);
    }
    public blend(mode: "normal" | "multiply" | "screen" | "darken" | "lighten", input1: Attribute.FilterInput, input2?: Attribute.FilterInput): Elements.FilterPrimitive.Blend {
      return new Elements.FilterPrimitive.Blend(this, {
        in: input1,
        in2: input2,
        mode,
      });
    }
    public colorMatrix(matrix: Attribute.ColorMatrix, input?: Attribute.FilterInput): Elements.FilterPrimitive.ColorMatrix {
      return new Elements.FilterPrimitive.ColorMatrix(this, {
        in: input,
        type: matrix.type,
        values: matrix,
      });
    }
    public componentTransfer(r: Attribute.FilterPrimitive.TransferFunction, g: Attribute.FilterPrimitive.TransferFunction, b: Attribute.FilterPrimitive.TransferFunction, a?: Attribute.FilterPrimitive.TransferFunction, input?: Attribute.FilterInput): Elements.FilterPrimitive.ComponentTransfer {
      const componentTransfer = new Elements.FilterPrimitive.ComponentTransfer(this, {
        in: input,
      });
      componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "R", r));
      componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "G", g));
      componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "B", b));
      if (a !== undefined) {
        componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "A", a));
      }
      return componentTransfer;
    }
    public composite(operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic", k1: number, k2: number, k3: number, k4: number, input1?: Attribute.FilterInput, input2?: Attribute.FilterInput): Elements.FilterPrimitive.Composite {
      return new Elements.FilterPrimitive.Composite(this, {
        in: input1,
        in2: input2,
        operator,
        k1,
        k2,
        k3,
        k4,
      });
    }
    public convolveMatrix(attrs: Partial<Attribute.FilterPrimitive.ConvolveMatrix>, input?: Attribute.FilterInput): Elements.FilterPrimitive.ConvolveMatrix {
      return new Elements.FilterPrimitive.ConvolveMatrix(this, merge(attrs, { in: input }));
    }
    public diffuseLighting(attrs: Partial<Attribute.FilterPrimitive.DiffuseLighting>, lights: Attribute.FilterPrimitive.LightSource[] = [], input?: Attribute.FilterInput): Elements.FilterPrimitive.DiffuseLighting {
      const fe = new Elements.FilterPrimitive.DiffuseLighting(this, merge(attrs, { in: input }));
      this.addLights(fe, lights);
      return fe;
    }
    public displacementMap(attrs: Partial<Attribute.FilterPrimitive.DisplacementMap>, input1?: Attribute.FilterInput, input2?: Attribute.FilterInput): Elements.FilterPrimitive.DisplacementMap {
      return new Elements.FilterPrimitive.DisplacementMap(this, merge(attrs, { in: input1, in2: input2 }));
    }
    public flood(color: Attribute.Color, area: Attribute.Box): Elements.FilterPrimitive.Flood {
      const fe = new Elements.FilterPrimitive.Flood(this, { "flood-color": color });
      fe.setAttributes({
        x: area.x,
        y: area.y,
        width: area.width,
        height: area.height,
      });
      return fe;
    }
    public gaussianBlur(stdDeviation: number = 0, edgeMode: "duplicate" | "wrap" | Attribute.None = "duplicate", input?: Attribute.FilterInput): Elements.FilterPrimitive.GaussianBlur {
      return new Elements.FilterPrimitive.GaussianBlur(this, {
        in: input,
        stdDeviation,
        edgeMode,
      });
    }
    public image(href: string, preserveAspectRatio?: Attribute.PreserveAspectRatio): Elements.FilterPrimitive.Image {
      return new Elements.FilterPrimitive.Image(this, {
        "xlink:href": href,
        preserveAspectRatio,
      });
    }
    public merge(inputs: Attribute.FilterInput[]): Elements.FilterPrimitive.Merge {
      const fe = new Elements.FilterPrimitive.Merge(this);
      inputs.forEach(input => {
        const mergeNode = new SavageDOM.Element<SVGFEMergeNodeElement, Attribute.FilterPrimitive & { in: Attribute.FilterInput }, Events.FilterPrimitive>(this.paper, "feMergeNode", { in: input });
        fe.add(mergeNode);
      });
      return fe;
    }
    public morphology(operator: "erode" | "dilate", radius: Attribute.NumberOptionalNumber, input?: Attribute.FilterInput): Elements.FilterPrimitive.Morphology {
      return new Elements.FilterPrimitive.Morphology(this, {
        in: input,
        operator,
        radius,
      });
    }
    public offset(d: Attribute.Point, input?: Attribute.FilterInput): Elements.FilterPrimitive.Offset {
      return new Elements.FilterPrimitive.Offset(this, {
        in: input,
        dx: d.x,
        dy: d.y,
      });
    }
    public specularLighting(attrs: Partial<Attribute.FilterPrimitive.SpecularLighting>, lights: Attribute.FilterPrimitive.LightSource[] = [], input?: Attribute.FilterInput): Elements.FilterPrimitive.SpecularLighting {
      const fe = new Elements.FilterPrimitive.SpecularLighting(this, attrs);
      this.addLights(fe, lights);
      return fe;
    }
    public tile(area: Attribute.Box, input?: Attribute.FilterInput): Elements.FilterPrimitive.Tile {
      const fe = new Elements.FilterPrimitive.Tile(this, { in: input });
      fe.setAttributes({
        x: area.x,
        y: area.y,
        width: area.width,
        height: area.height,
      });
      return fe;
    }
    public turbulence(attrs: Partial<Attribute.FilterPrimitive.Turbulence>): Elements.FilterPrimitive.Turbulence {
      return new Elements.FilterPrimitive.Turbulence(this, attrs);
    }
    private addLights(lighting: Element<SVGFEDiffuseLightingElement | SVGFESpecularLightingElement, Attribute.FilterPrimitive, any>, lights: Attribute.FilterPrimitive.LightSource[]): void {
      lights.forEach(light => {
        switch (light.type) {
          case "point":
            lighting.add(new Elements.FilterPrimitive.LightSource.PointLight(this, light));
            break;
          case "distant":
            lighting.add(new Elements.FilterPrimitive.LightSource.DistantLight(this, light));
            break;
          case "spot":
            lighting.add(new Elements.FilterPrimitive.LightSource.SpotLight(this, light));
            break;
        }
      });
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    filter(): Elements.Filter;
  }

  Paper.prototype.filter = function(this: SavageDOM.Paper): Elements.Filter {
    return new Elements.Filter(this);
  };

}
