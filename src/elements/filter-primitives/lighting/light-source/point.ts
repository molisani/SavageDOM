namespace SavageDOM.Elements.FilterPrimitives.Lighting.LightSource {

  export interface PointLight_Attributes {
    type: "point";
    x: Attributes.Length;
    y: Attributes.Length;
    "x:y": Attributes.Point;
    z: Attributes.Length;
  }

  export class PointLight extends FilterPrimitive<SVGFEPointLightElement, PointLight_Attributes> {
    constructor(filter: Filter, attrs?: Partial<PointLight_Attributes>) {
      super(filter, "fePointLight", attrs);
    }
  }

}
