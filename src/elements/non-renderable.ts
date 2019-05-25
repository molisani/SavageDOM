import { Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter, HasClass, HasClass_AttributeGetter, HasClass_AttributeInterpolator, HasClass_AttributeSetter, HasStyle, HasStyle_AttributeGetter, HasStyle_AttributeInterpolator, HasStyle_AttributeSetter } from "../attributes/base";
import { AttributeGetter } from "../attributes/getter";
import { AttributeInterpolator } from "../attributes/interpolator";
import { AttributeSetter } from "../attributes/setter";
import { AbstractElement } from "../element";
import { SVG_Events } from "../events";

export interface NonRenderable_Attributes extends Core_Attributes, HasStyle, HasClass {}

export const NonRenderable_AttributeGetter: AttributeGetter<NonRenderable_Attributes> = {
  ...Core_AttributeGetter,
  ...HasStyle_AttributeGetter,
  ...HasClass_AttributeGetter,
};

export const NonRenderable_AttributeSetter: AttributeSetter<NonRenderable_Attributes> = {
  ...Core_AttributeSetter,
  ...HasStyle_AttributeSetter,
  ...HasClass_AttributeSetter,
};

export const NonRenderable_AttributeInterpolator: AttributeInterpolator<NonRenderable_Attributes> = {
  ...Core_AttributeInterpolator,
  ...HasStyle_AttributeInterpolator,
  ...HasClass_AttributeInterpolator,
};

export interface NonRenderable_Events extends SVG_Events {}

export abstract class AbstractNonRenderable<ELEMENT extends SVGElement, ATTRIBUTES extends NonRenderable_Attributes = NonRenderable_Attributes> extends AbstractElement<ELEMENT, ATTRIBUTES, NonRenderable_Events> {}
