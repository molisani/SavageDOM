namespace SavageDOM.Elements {

  export interface NonRenderable_Attributes extends Attributes.HasStyle, Attributes.HasClass {}

  export interface NonRenderable_Events extends SVG_Events {}

  export abstract class AbstractNonRenderable<E extends SVGElement, NonRenderableAttributes> extends Element<E, NonRenderable_Attributes & NonRenderableAttributes, NonRenderable_Events> {}

}
