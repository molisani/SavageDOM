namespace SavageDOM.Elements.FilterPrimitives.Lighting.LightSource {

  export interface SpotLight_Attributes {
    type: "spot";
    x: Attributes.Length;
    y: Attributes.Length;
    "x:y": Attributes.Point;
    z: Attributes.Length;
    pointsAtX: Attributes.Length;
    pointsAtY: Attributes.Length;
    "pointsAtX:pointsAtY": Attributes.Point;
    pointsAtZ: Attributes.Length;
    specularExponent: number;
    limitingConeAngle: number;
  }

  export class SpotLight extends FilterPrimitive<SVGFESpotLightElement, SpotLight_Attributes> {
    constructor(filter: Filter, attrs?: Partial<SpotLight_Attributes>) {
      super(filter, "feSpotLight", attrs);
    }
  }

}
