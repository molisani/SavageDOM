namespace SavageDOM.Attribute {

  export interface Renderable extends Presentation, HasStyle, HasClass, Transformable {}

}

namespace SavageDOM.Events {

  export interface Renderable extends Mouse, SVG, Focus {}

}

namespace SavageDOM.Elements {

  export abstract class AbstractRenderable<E extends SVGElement, A, V> extends Element<E, Attribute.Renderable & A, Events.Renderable & V> {}

}
