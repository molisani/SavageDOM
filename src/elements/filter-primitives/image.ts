import { PreserveAspectRatio } from "../../attributes/preserve-aspect-ratio";
import { FilterPrimitive, FilterPrimitive_Attributes } from "../filter-primitive";

export interface Image_Attributes extends FilterPrimitive_Attributes {
  preserveAspectRatio: PreserveAspectRatio;
  "xlink:href": string;
}

export class Image_Primitive extends FilterPrimitive<SVGFEImageElement, Image_Attributes> {
}
