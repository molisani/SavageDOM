namespace SavageDOM.Attribute {

  export interface NonRenderable extends HasStyle, HasClass {};

}

namespace SavageDOM.Events {

  export interface NonRenderable extends SVG {}

}

namespace SavageDOM.Elements {

  export abstract class AbstractNonRenderable<E extends SVGElement, NonRenderableAttributes> extends Element<E, Attribute.NonRenderable & NonRenderableAttributes, Events.NonRenderable> {}

}
