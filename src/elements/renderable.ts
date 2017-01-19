namespace SavageDOM.Attribute {

  export interface Renderable extends Presentation, HasStyle, HasClass, Transformable {}

}

namespace SavageDOM.Elements {

  export abstract class AbstractRenderable<E extends SVGElement, A> extends Element<E, Attribute.Renderable & A> {}

}
