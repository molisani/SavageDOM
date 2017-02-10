namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Polygon {
    points: List<Point>;
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Polygon extends AbstractShape<SVGPolygonElement, Attribute.Renderable.Shape.Polygon> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Polygon>) {
      super(paper, "polygon", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    polygon(points: Attribute.List<Attribute.Point>): Elements.Renderable.Shape.Polygon;
  }

  Paper.prototype.polygon = function(this: SavageDOM.Paper, points: Attribute.List<Attribute.Point>): Elements.Renderable.Shape.Polygon {
    return new Elements.Renderable.Shape.Polygon(this, { points });
  };

}
