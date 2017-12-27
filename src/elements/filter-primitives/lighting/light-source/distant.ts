namespace SavageDOM.Elements.FilterPrimitives.Lighting.LightSource {

  export interface DistantLight_Attributes {
    type: "distant";
    azimuth: number;
    elevation: number;
  }

  export class DistantLight extends FilterPrimitive<SVGFEDistantLightElement, DistantLight_Attributes> {
    constructor(filter: Filter, attrs?: Partial<DistantLight_Attributes>) {
      super(filter, "feDistantLight", attrs);
    }
  }

}
