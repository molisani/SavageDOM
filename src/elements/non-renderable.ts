import { BaseAttributes, HasClass, HasStyle } from "../attributes";
import { Element } from "../element";
import { SVG_Events } from "../events";

export interface NonRenderable_Attributes extends HasStyle, HasClass {}

export interface NonRenderable_Events extends SVG_Events {}

export abstract class AbstractNonRenderable<E extends SVGElement, NonRenderableAttributes extends BaseAttributes, _ATTRIBUTES extends BaseAttributes = NonRenderable_Attributes & NonRenderableAttributes> extends Element<E, _ATTRIBUTES, NonRenderable_Events> {}
