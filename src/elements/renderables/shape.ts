namespace SavageDOM.Elements.Renderables {

export interface Shape_Attributes extends Graphics_Attributes, Attributes.HasFill, Attributes.HasStroke {
  "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Attributes.Inherit;
}

export abstract class AbstractShape<E extends SVGElement, A> extends AbstractRenderable<E, Shape_Attributes & A, {}> {}

}
