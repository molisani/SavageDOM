namespace SavageDOM.Elements.FilterPrimitives.Lighting {

  export interface DiffuseLighting_Attributes extends Lighting_Attributes {
    in: FilterInput;
    surfaceScale: number;
    diffuseConstant: number;
    kernelUnitLength: Attributes.NumberOptionalNumber;
  }

  export class DiffuseLighting extends FilterPrimitive<SVGFEDiffuseLightingElement, DiffuseLighting_Attributes> {
    constructor(filter: Filter, attrs?: Partial<DiffuseLighting_Attributes>) {
      super(filter, "feDiffuseLighting", attrs);
    }
  }

}
