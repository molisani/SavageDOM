namespace SavageDOM.Elements.FilterPrimitives {

  export interface Turbulence_Attributes {
    type: "fractalNoise" | "turbulence";
    baseFrequency: Attributes.NumberOptionalNumber;
    numOctaves: number;
    seed: number;
    stitchTiles: "noStitch" | "stitch";
  }

  export class Turbulence extends FilterPrimitive<SVGFETurbulenceElement, Turbulence_Attributes> {
    constructor(filter: Filter, attrs?: Partial<Turbulence_Attributes>) {
      super(filter, "feTurbulence", attrs);
    }
  }

}
