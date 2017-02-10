namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Line {
    x1: Length;
    y1: Length;
    "x1:y1": Point;
    x2: Length;
    y2: Length;
    "x2:y2": Point;
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Line extends AbstractShape<SVGLineElement, Attribute.Renderable.Shape.Line> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Line>) {
      super(paper, "line", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    line(x1: Attribute.Length, y1: Attribute.Length, x2: Attribute.Length, y2: Attribute.Length): Elements.Renderable.Shape.Line;
  }

  Paper.prototype.line = function(this: SavageDOM.Paper, x1: Attribute.Length, y1: Attribute.Length, x2: Attribute.Length, y2: Attribute.Length): Elements.Renderable.Shape.Line {
    return new Elements.Renderable.Shape.Line(this, { x1, x2, y1, y2 });
  };

}
