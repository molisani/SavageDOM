namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Polygon_Attributes extends Elements.NonRenderables.HasMarker {
    points: Attributes.Point[];
  }

  export class Polygon extends AbstractShape<SVGPolygonElement, Polygon_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Polygon_Attributes>) {
      super(context, "polygon", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Context {
    polygon(points: Attributes.Point[]): Elements.Renderables.Shapes.Polygon;
  }

  Context.prototype.polygon = function(points: Attributes.Point[]): Elements.Renderables.Shapes.Polygon {
    const attrs = { points };
    return new Elements.Renderables.Shapes.Polygon(this, attrs);
  };

}
