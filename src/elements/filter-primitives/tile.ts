import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { AttributeSetter } from "../../attributes/setter";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface Tile_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export const Tile_AttributeGetter: AttributeGetter<Tile_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
};

export const Tile_AttributeSetter: AttributeSetter<Tile_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
};

export const Tile_AttributeInterpolator: AttributeInterpolator<Tile_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
};

export class Tile_Primitive extends AbstractFilterPrimitive<SVGFETileElement, Tile_Attributes> {
  protected _getter = Tile_AttributeGetter;
  protected _setter = Tile_AttributeSetter;
  protected _interpolator = Tile_AttributeInterpolator;
}
