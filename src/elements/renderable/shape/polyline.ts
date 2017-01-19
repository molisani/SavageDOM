namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Polyline {
    points: List<Point>;
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Polyline extends AbstractShape<SVGPolylineElement, Attribute.Renderable.Shape.Polyline> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Polyline>) {
      super(paper, "polyline", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    polyline(points: Attribute.List<Attribute.Point>): Elements.Renderable.Shape.Polyline;
  }

  Paper.prototype.polyline = function(this: SavageDOM.Paper, points: Attribute.List<Attribute.Point>): Elements.Renderable.Shape.Polyline {
    return new Elements.Renderable.Shape.Polyline(this, { points });
  };

}
