namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Circle {
    cx: Length;
    cy: Length;
    "cx:cy": Point;
    r: Length;
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Circle extends AbstractShape<SVGCircleElement, Attribute.Renderable.Shape.Circle> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Circle>) {
      super(paper, "circle", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    circle(cx: Attribute.Length, cy: Attribute.Length, r: Attribute.Length): Elements.Renderable.Shape.Circle;
  }

  Paper.prototype.circle = function(this: SavageDOM.Paper, cx: Attribute.Length, cy: Attribute.Length, r: Attribute.Length): Elements.Renderable.Shape.Circle {
    return new Elements.Renderable.Shape.Circle(this, { cx, cy, r });
  };

}
