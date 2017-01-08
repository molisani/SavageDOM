namespace vektor.Attribute {

  export interface FilterPrimitive extends Presentation, HasClass, HasStyle {
    x: Length;
    y: Length;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": ViewBox;
    result: string;
  }

  export namespace FilterPrimitive {

    export interface Blend {
      in: Elements.FilterPrimitive<any, any>;
      in2: Elements.FilterPrimitive<any, any>;
      mode: "normal" | "multiply" | "screen" | "darken" | "lighten";
    };

    export interface ColorMatrix {
      in: Elements.FilterPrimitive<any, any>;
      type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
      values: Attribute.ColorMatrix;
      "type:values": Attribute.ColorMatrix;
    };

    export interface ComponentTransfer {
      in: Elements.FilterPrimitive<any, any>;
    };

    export interface Composite {
      in: Elements.FilterPrimitive<any, any>;
      in2: Elements.FilterPrimitive<any, any>;
      operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic";
      k1: number;
      k2: number;
      k3: number;
      k4: number;
    };

    export interface ConvolveMatrix {
      in: Elements.FilterPrimitive<any, any>;
      order: NumberOptionalNumber;
      kernelMatrix: Matrix;
      divisor: number;
      bias: number;
      targetX: number;
      targetY: number;
      "targetX:targetY": Point;
      edgeMode: "duplicate" | "wrap" | "none";
      kernelUnitLength: NumberOptionalNumber;
      preserveAlpha: boolean;
    };

    export interface DiffuseLighting {
      in: Elements.FilterPrimitive<any, any>;
      surfaceScale: number;
      diffuseConstant: number;
      kernelUnitLength: NumberOptionalNumber;
    };

    export interface DisplacementMap {
      in: Elements.FilterPrimitive<any, any>;
      in2: Elements.FilterPrimitive<any, any>;
      scale: number;
      xChannelSelector: "R" | "G" | "B" | "A";
      yChannelSelector: "R" | "G" | "B" | "A";
    };

    export interface DropShadow {
      in: Elements.FilterPrimitive<any, any>;
      stdDeviation: number;
      dx: Length;
      dy: Length;
      "dx:dy": Point;
    };

    export interface Flood {
      "flood-color": "currentColor" | Color;
    };

    export interface GaussianBlur {
      in: Elements.FilterPrimitive<any, any>;
      stdDeviation: number;
      edgeMode: "duplicate" | "wrap" | "none";
    };

    export interface Image {
      preserveAspectRatio: PreserveAspectRatio;
      "xlink:href": string;
    };

    export interface MergeNode {
      in: Elements.FilterPrimitive<any, any>;
    };

    export interface Morphology {
      in: Elements.FilterPrimitive<any, any>;
      operator: "erode" | "dilate";
      radius: NumberOptionalNumber;
    };

    export interface Offset {
      in: Elements.FilterPrimitive<any, any>;
      dx: Length;
      dy: Length;
      "dx:dy": Point;
    };

    export interface SpecularLighting {
      in: Elements.FilterPrimitive<any, any>;
      surfaceScale: number;
      specularConstant: number;
      specularExponent: number;
      kernelUnitLength: NumberOptionalNumber;
    };

    export interface Tile {
      in: Elements.FilterPrimitive<any, any>;
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
      tableValues: List<Number>;
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

  export interface Filter {
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": ViewBox;
    filterUnits: "userSpaceOnUse" | "objectBoundingBox";
    primitiveUnits: "userSpaceOnUse" | "objectBoundingBox";
  };

}

namespace vektor.Elements {

  export class FilterPrimitive<FE extends SVGElement, A> extends Element<FE, Attribute.FilterPrimitive & A> {
    constructor(filter: Filter, name: string, attrs?: Partial<Attribute.FilterPrimitive & A>) {
      super(filter.paper, name, attrs);
      // filter.node.appendChild(this.node);
      // this.setAttribute("result", this.id);
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

  export class Filter {
    public node: SVGFilterElement;
    constructor(public paper: Paper) {
      this.node = window.document.createElementNS(XMLNS, "filter") as SVGFilterElement;
      this.paper.defs.appendChild(this.node);
    }
    public blend(mode: "normal" | "multiply" | "screen" | "darken" | "lighten", input1: Element<SVGElement, Attribute.FilterPrimitive>, input2?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.Blend {
      const fe = new Elements.FilterPrimitive.Blend(this, {
        in: input1,
        in2: input2,
        mode,
      });
      this.addEffect(fe);
      return fe;
    }
    public colorMatrix(matrix: Attribute.ColorMatrix, input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.ColorMatrix {
      const fe = new Elements.FilterPrimitive.ColorMatrix(this, {
        in: input,
        type: matrix.type,
        values: matrix,
      });
      this.addEffect(fe);
      return fe;
    }
    public componentTransfer(r: Attribute.FilterPrimitive.TransferFunction, g: Attribute.FilterPrimitive.TransferFunction, b: Attribute.FilterPrimitive.TransferFunction, a?: Attribute.FilterPrimitive.TransferFunction, input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.ComponentTransfer {
      const componentTransfer = new Elements.FilterPrimitive.ComponentTransfer(this, {
        in: input,
      });
      componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "R", r).node);
      componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "G", g).node);
      componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "B", b).node);
      if (a !== undefined) {
        componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "A", a).node);
      }
      this.addEffect(componentTransfer);
      return componentTransfer;
    }
    public composite(operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic", k1: number, k2: number, k3: number, k4: number, input1?: Element<SVGElement, Attribute.FilterPrimitive>, input2?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.Composite {
      const fe = new Elements.FilterPrimitive.Composite(this, {
        in: input1,
        in2: input2,
        operator,
        k1,
        k2,
        k3,
        k4,
      });
      this.addEffect(fe);
      return fe;
    }
    public convolveMatrix(attrs: Partial<Attribute.FilterPrimitive.ConvolveMatrix>, input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.ConvolveMatrix {
      const fe = new Elements.FilterPrimitive.ConvolveMatrix(this, Object.assign(attrs, { in: input }));
      this.addEffect(fe);
      return fe;
    }
    public diffuseLighting(attrs: Partial<Attribute.FilterPrimitive.DiffuseLighting>, lights: Attribute.FilterPrimitive.LightSource[] = [], input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.DiffuseLighting {
      const fe = new Elements.FilterPrimitive.DiffuseLighting(this, Object.assign(attrs, { in: input }));
      this.addLights(fe, lights);
      this.addEffect(fe);
      return fe;
    }
    public displacementMap(attrs: Partial<Attribute.FilterPrimitive.DisplacementMap>, input1?: Elements.FilterPrimitive<any, any>, input2?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.DisplacementMap {
      const fe = new Elements.FilterPrimitive.DisplacementMap(this, Object.assign(attrs, { in: input1, in2: input2 }));
      this.addEffect(fe);
      return fe;
    }
    public flood(color: Attribute.Color, area: Attribute.ViewBox): Elements.FilterPrimitive.Flood {
      const fe = new Elements.FilterPrimitive.Flood(this, { "flood-color": color });
      fe.setAttributes({
        x: area.x,
        y: area.y,
        width: area.width,
        height: area.height,
      });
      this.addEffect(fe);
      return fe;
    }
    public gaussianBlur(stdDeviation: number = 0, edgeMode: "duplicate" | "wrap" | "none" = "duplicate", input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.GaussianBlur {
      const fe = new Elements.FilterPrimitive.GaussianBlur(this, {
        in: input,
        stdDeviation,
        edgeMode,
      });
      this.addEffect(fe);
      return fe;
    }
    public image(href: string, preserveAspectRatio?: Attribute.PreserveAspectRatio): Elements.FilterPrimitive.Image {
      const fe = new Elements.FilterPrimitive.Image(this, {
        "xlink:href": href,
        preserveAspectRatio,
      });
      this.addEffect(fe);
      return fe;
    }
    public merge(inputs: Elements.FilterPrimitive<any, any>[]): Elements.FilterPrimitive.Merge {
      const fe = new Elements.FilterPrimitive.Merge(this);
      inputs.forEach(input => {
        const node = window.document.createElementNS(XMLNS, "feMergeNode");
        node.setAttribute("in", input.toString());
        fe.node.appendChild(node);
      });
      this.addEffect(fe);
      return fe;
    }
    public morphology(operator: "erode" | "dilate", radius: Attribute.NumberOptionalNumber, input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.Morphology {
      const fe = new Elements.FilterPrimitive.Morphology(this, {
        in: input,
        operator,
        radius,
      });
      this.addEffect(fe);
      return fe;
    }
    public offset(d: Attribute.Point, input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.Offset {
      const fe = new Elements.FilterPrimitive.Offset(this, {
        in: input,
        dx: d.x,
        dy: d.y,
      });
      this.addEffect(fe);
      return fe;
    }
    public specularLighting(attrs: Partial<Attribute.FilterPrimitive.SpecularLighting>, lights: Attribute.FilterPrimitive.LightSource[] = [], input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.SpecularLighting {
      const fe = new Elements.FilterPrimitive.SpecularLighting(this, attrs);
      this.addLights(fe, lights);
      this.addEffect(fe);
      return fe;
    }
    public tile(area: Attribute.ViewBox, input?: Elements.FilterPrimitive<any, any>): Elements.FilterPrimitive.Tile {
      const fe = new Elements.FilterPrimitive.Tile(this, { in: input });
      fe.setAttributes({
        x: area.x,
        y: area.y,
        width: area.width,
        height: area.height,
      });
      this.addEffect(fe);
      return fe;
    }
    public turbulence(attrs: Partial<Attribute.FilterPrimitive.Turbulence>): Elements.FilterPrimitive.Turbulence {
      const fe = new Elements.FilterPrimitive.Turbulence(this, attrs);
      this.addEffect(fe);
      return fe;
    }
    private addEffect(fe: Elements.FilterPrimitive<SVGElement, any>) {
      fe.setAttribute("result", fe.id);
      this.node.appendChild(fe.node);
    }
    private addLights(lighting: Element<SVGFEDiffuseLightingElement | SVGFESpecularLightingElement, Attribute.FilterPrimitive>, lights: Attribute.FilterPrimitive.LightSource[]): void {
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
