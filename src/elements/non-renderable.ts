namespace SavageDOM.Attribute {

  export interface NonRenderable extends Presentation, HasStyle, HasClass {};

}

namespace SavageDOM.Elements {

  export abstract class AbstractNonRenderable<E extends SVGElement, NonRenderableAttributes> extends Element<E, Attribute.NonRenderable & NonRenderableAttributes> {}

}
