import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { AttributeSetter } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { FilterInput, filterInputParser, filterInputSerializer } from "../filter";
import { AbstractFilterPrimitive, FilterPrimitive_AttributeGetter, FilterPrimitive_AttributeInterpolator, FilterPrimitive_Attributes, FilterPrimitive_AttributeSetter } from "../filter-primitive";

export interface MergeNode_Attributes extends FilterPrimitive_Attributes {
  in: FilterInput;
}

export const MergeNode_AttributeGetter: AttributeGetter<MergeNode_Attributes> = {
  ...FilterPrimitive_AttributeGetter,
  in: filterInputParser,
};

export const MergeNode_AttributeSetter: AttributeSetter<MergeNode_Attributes> = {
  ...FilterPrimitive_AttributeSetter,
  in: filterInputSerializer,
};

export const MergeNode_AttributeInterpolator: AttributeInterpolator<MergeNode_Attributes> = {
  ...FilterPrimitive_AttributeInterpolator,
  in: unsupportedTweenBuilder,
};

export class MergeNode_Primitive extends AbstractFilterPrimitive<SVGFEMergeNodeElement, MergeNode_Attributes> {
  protected _getter = MergeNode_AttributeGetter;
  protected _setter = MergeNode_AttributeSetter;
  protected _interpolator = MergeNode_AttributeInterpolator;
}

export class Merge_Primitive extends AbstractFilterPrimitive<SVGFEMergeElement> {
  protected _getter = FilterPrimitive_AttributeGetter;
  protected _setter = FilterPrimitive_AttributeSetter;
  protected _interpolator = FilterPrimitive_AttributeInterpolator;
  public addInputs(inputs: ReadonlyArray<FilterInput>) {
    for (const input of inputs) {
      this.add(new MergeNode_Primitive(this._filter, this.context.window.document.createElementNS(XMLNS.SVG, "feMergeNode"), { in: input }));
    }
  }
}
