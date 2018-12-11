import { Core_Attributes, HasClass, HasStyle } from "../attributes";
import { Element } from "../element";
import { SVG_Events } from "../events";

export interface NonRenderable_Attributes extends Core_Attributes, HasStyle, HasClass {}

export interface NonRenderable_Events extends SVG_Events {}

export abstract class AbstractNonRenderable<ELEMENT extends SVGElement, ATTRIBUTES extends NonRenderable_Attributes = NonRenderable_Attributes> extends Element<ELEMENT, ATTRIBUTES, NonRenderable_Events> {}
