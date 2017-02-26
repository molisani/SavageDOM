namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Polygon extends HasMarker {
    points: Point[];
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Polygon extends AbstractShape<SVGPolygonElement, Attribute.Renderable.Shape.Polygon> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape & Attribute.Renderable.Shape.Polygon>) {
      super(paper, "polygon", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    polygon(points: Attribute.Point[]): Elements.Renderable.Shape.Polygon;
  }

  Paper.prototype.polygon = function(this: SavageDOM.Paper, points: Attribute.Point[]): Elements.Renderable.Shape.Polygon {
    return new Elements.Renderable.Shape.Polygon(this, { points });
  };

}
