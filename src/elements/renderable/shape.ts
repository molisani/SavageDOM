namespace SavageDOM.Attribute.Renderable {

  export interface Shape extends Graphics, HasFill, HasStroke {
    "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
  }

}

namespace SavageDOM.Elements.Renderable {

  export abstract class AbstractShape<E extends SVGElement, A> extends AbstractRenderable<E, Attribute.Renderable.Shape & A, void> {}

}
