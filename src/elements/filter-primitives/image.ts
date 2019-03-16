import { PreserveAspectRatio } from "../../attributes/preserve-aspect-ratio";
import { XMLNS } from "../../constants";
import { Filter } from "../filter";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Image_Attributes extends FilterPrimitive_Attributes {
  preserveAspectRatio: PreserveAspectRatio;
  "xlink:href": string;
}

export class Image_Primitive extends FilterPrimitive<SVGFEImageElement, Image_Attributes> {
  constructor(filter: Filter, attrs?: Partial<Image_Attributes>) {
    super(filter, filter.context.window.document.createElementNS(XMLNS.SVG, "feImage"), attrs);
  }
}
