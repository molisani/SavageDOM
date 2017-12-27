namespace SavageDOM.Elements.FilterPrimitives {

  export interface Image_Attributes {
    preserveAspectRatio: Attributes.PreserveAspectRatio;
    "xlink:href": string;
  }

  export class Image extends FilterPrimitive<SVGFEImageElement, Image_Attributes> {
    constructor(filter: Filter, attrs?: Partial<Image_Attributes>) {
      super(filter, "feImage", attrs);
    }
  }

}
