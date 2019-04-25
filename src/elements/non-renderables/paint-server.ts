import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator } from "../../attributes/interpolator";
import { AttributeSetter } from "../../attributes/setter";
import { AbstractNonRenderable, NonRenderable_AttributeGetter, NonRenderable_AttributeInterpolator, NonRenderable_Attributes, NonRenderable_AttributeSetter } from "../non-renderable";

export interface PaintServer_Attributes extends NonRenderable_Attributes {}

export const PaintServer_AttributeGetter: AttributeGetter<PaintServer_Attributes> = {
  ...NonRenderable_AttributeGetter,
};

export const PaintServer_AttributeSetter: AttributeSetter<PaintServer_Attributes> = {
  ...NonRenderable_AttributeSetter,
};

export const PaintServer_AttributeInterpolator: AttributeInterpolator<PaintServer_Attributes> = {
  ...NonRenderable_AttributeInterpolator,
};

export abstract class AbstractPaintServer<ELEMENT extends SVGElement, ATTRIBUTES extends PaintServer_Attributes = PaintServer_Attributes> extends AbstractNonRenderable<ELEMENT, ATTRIBUTES> {}

export type PaintServer = AbstractPaintServer<SVGElement>;
