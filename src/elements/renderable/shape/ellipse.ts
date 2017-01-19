namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Ellipse {
    cx: Length;
    cy: Length;
    "cx:cy": Point;
    rx: Length;
    ry: Length;
    "rx:ry": Point;
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Ellipse extends AbstractShape<SVGEllipseElement, Attribute.Renderable.Shape.Ellipse> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Ellipse>) {
      super(paper, "ellipse", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    ellipse(cx: number, cy: number, rx: number, ry: number): Elements.Renderable.Shape.Ellipse;
  }

  Paper.prototype.ellipse = function(this: SavageDOM.Paper, cx: number, cy: number, rx: number, ry: number): Elements.Renderable.Shape.Ellipse {
    return new Elements.Renderable.Shape.Ellipse(this, { cx, cy, rx, ry });
  };

}
