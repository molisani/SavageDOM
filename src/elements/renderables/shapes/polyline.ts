namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Polyline_Attributes extends Elements.NonRenderables.HasMarker {
    points: Attributes.Point[];
  }

  export class Polyline extends AbstractShape<SVGPolylineElement, Polyline_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Polyline_Attributes>) {
      super(context, "polyline", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Context {
    polyline(points: Attributes.Point[]): Elements.Renderables.Shapes.Polyline;
  }

  Context.prototype.polyline = function(this: Context, points: Attributes.Point[]): Elements.Renderables.Shapes.Polyline {
    const attrs = { points };
    return new Elements.Renderables.Shapes.Polyline(this, attrs);
  };

}
