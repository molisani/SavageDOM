namespace SavageDOM.Elements.FilterPrimitives.Lighting {

  export interface SpecularLighting_Attributes extends Lighting_Attributes {
    in: FilterInput;
    surfaceScale: number;
    specularConstant: number;
    specularExponent: number;
    kernelUnitLength: Attributes.NumberOptionalNumber;
  }

  export class SpecularLighting extends FilterPrimitive<SVGFESpecularLightingElement, SpecularLighting_Attributes> {
    constructor(filter: Filter, attrs?: Partial<SpecularLighting_Attributes>) {
      super(filter, "feSpecularLighting", attrs);
    }
  }

}
