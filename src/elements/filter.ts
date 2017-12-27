namespace SavageDOM.Elements {

  export interface HasFilter {
    "filter": Filter | string | Attributes.None | Attributes.Inherit;
  }

  export type FilterInput = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | FilterPrimitive<any, any>;

  export interface Filter_Attributes extends Attributes.BaseAttributes {
    x: Attributes.Length;
    y: Attributes.Length;
    "x:y": Attributes.Point;
    width: Attributes.Length;
    height: Attributes.Length;
    "width:height": Attributes.Point;
    "x:y:width:height": Attributes.Box;
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
    public node: SVGFilterElement;
    constructor(public context: Context) {
      super(context, "filter");
      this.context.defs.add(this);
    }
    public blend(mode: "normal" | "multiply" | "screen" | "darken" | "lighten", input1: FilterInput, input2?: FilterInput): FilterPrimitives.Blend {
      return new FilterPrimitives.Blend(this, {
        in: input1,
        in2: input2,
        mode,
      });
    }
    public colorMatrix(matrix: Attributes.ColorMatrix, input?: FilterInput): FilterPrimitives.ColorMatrix {
      return new FilterPrimitives.ColorMatrix(this, {
        in: input,
        type: matrix.type,
        values: matrix,
      });
    }
    public componentTransfer(r: FilterPrimitives.TransferFunction_Attributes, g: FilterPrimitives.TransferFunction_Attributes, b: FilterPrimitives.TransferFunction_Attributes, a?: FilterPrimitives.TransferFunction_Attributes, input?: FilterInput): FilterPrimitives.ComponentTransfer {
      const componentTransfer = new FilterPrimitives.ComponentTransfer(this, {
        in: input,
      });
      componentTransfer.add(new FilterPrimitives.TransferFunction(this, "R", r));
      componentTransfer.add(new FilterPrimitives.TransferFunction(this, "G", g));
      componentTransfer.add(new FilterPrimitives.TransferFunction(this, "B", b));
      if (a !== undefined) {
        componentTransfer.add(new FilterPrimitives.TransferFunction(this, "A", a));
      }
      return componentTransfer;
    }
    public composite(operator: "over" | "in" | "out" | "atop" | "xor" | "arithmetic", k1: number, k2: number, k3: number, k4: number, input1?: FilterInput, input2?: FilterInput): FilterPrimitives.Composite {
      return new FilterPrimitives.Composite(this, {
        in: input1,
        in2: input2,
        operator,
        k1,
        k2,
        k3,
        k4,
      });
    }
    public convolveMatrix(attrs: Partial<FilterPrimitives.ConvolveMatrix_Attributes>, input?: FilterInput): FilterPrimitives.ConvolveMatrix {
      return new FilterPrimitives.ConvolveMatrix(this, merge(attrs, { in: input }));
    }
    public diffuseLighting(attrs: Partial<FilterPrimitives.Lighting.DiffuseLighting_Attributes>, lights: FilterPrimitives.Lighting.LightSource_Attributes[] = [], input?: FilterInput): FilterPrimitives.Lighting.DiffuseLighting {
      const fe = new FilterPrimitives.Lighting.DiffuseLighting(this, merge(attrs, { in: input }));
      this.addLights(fe, lights);
      return fe;
    }
    public displacementMap(attrs: Partial<FilterPrimitives.DisplacementMap_Attributes>, input1?: FilterInput, input2?: FilterInput): FilterPrimitives.DisplacementMap {
      return new FilterPrimitives.DisplacementMap(this, merge(attrs, { in: input1, in2: input2 }));
    }
    public flood(color: Attributes.Color, area: Attributes.Box): FilterPrimitives.Flood {
      const fe = new FilterPrimitives.Flood(this, { "flood-color": color });
      fe.setAttributes({
        x: area.x,
        y: area.y,
        width: area.width,
        height: area.height,
      });
      return fe;
    }
    public gaussianBlur(stdDeviation: number = 0, edgeMode: "duplicate" | "wrap" | Attributes.None = "duplicate", input?: FilterInput): FilterPrimitives.GaussianBlur {
      return new FilterPrimitives.GaussianBlur(this, {
        in: input,
        stdDeviation,
        edgeMode,
      });
    }
    public image(href: string, preserveAspectRatio?: Attributes.PreserveAspectRatio): FilterPrimitives.Image {
      return new FilterPrimitives.Image(this, {
        "xlink:href": href,
        preserveAspectRatio,
      });
    }
    public merge(inputs: FilterInput[]): FilterPrimitives.Merge {
      const fe = new FilterPrimitives.Merge(this);
      inputs.forEach(input => {
        const mergeNode = new Element<SVGFEMergeNodeElement, FilterPrimitive_Attributes & { in: FilterInput }, FilterPrimitive_Events>(this.context, "feMergeNode", { in: input });
        fe.add(mergeNode);
      });
      return fe;
    }
    public morphology(operator: "erode" | "dilate", radius: Attributes.NumberOptionalNumber, input?: FilterInput): FilterPrimitives.Morphology {
      return new FilterPrimitives.Morphology(this, {
        in: input,
        operator,
        radius,
      });
    }
    public offset(d: Attributes.Point, input?: FilterInput): FilterPrimitives.Offset {
      return new FilterPrimitives.Offset(this, {
        in: input,
        dx: d.x,
        dy: d.y,
      });
    }
    public specularLighting(attrs: Partial<FilterPrimitives.Lighting.SpecularLighting_Attributes>, lights: FilterPrimitives.Lighting.LightSource_Attributes[] = [], input?: FilterInput): FilterPrimitives.Lighting.SpecularLighting {
      const fe = new FilterPrimitives.Lighting.SpecularLighting(this, attrs);
      this.addLights(fe, lights);
      return fe;
    }
    public tile(area: Attributes.Box, input?: FilterInput): FilterPrimitives.Tile {
      const fe = new FilterPrimitives.Tile(this, { in: input });
      fe.setAttributes({
        x: area.x,
        y: area.y,
        width: area.width,
        height: area.height,
      });
      return fe;
    }
    public turbulence(attrs: Partial<FilterPrimitives.Turbulence_Attributes>): FilterPrimitives.Turbulence {
      return new FilterPrimitives.Turbulence(this, attrs);
    }
    private addLights(lighting: Element<SVGFEDiffuseLightingElement | SVGFESpecularLightingElement, FilterPrimitive_Attributes, any>, lights: FilterPrimitives.Lighting.LightSource_Attributes[]): void {
      lights.forEach(light => {
        switch (light.type) {
          case "point":
            lighting.add(new FilterPrimitives.Lighting.LightSource.PointLight(this, light));
            break;
          case "distant":
            lighting.add(new FilterPrimitives.Lighting.LightSource.DistantLight(this, light));
            break;
          case "spot":
            lighting.add(new FilterPrimitives.Lighting.LightSource.SpotLight(this, light));
            break;
        }
      });
    }
  }

}
