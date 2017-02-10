namespace SavageDOM.Attribute.Renderable.Shape {

  export interface Rect {
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    rx: Length;
    ry: Length;
    "rx:ry": Point;
  }

}

namespace SavageDOM.Elements.Renderable.Shape {

  export class Rect extends AbstractShape<SVGRectElement, Attribute.Renderable.Shape.Rect> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Shape.Rect>) {
      super(paper, "rect", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    rect(x: Attribute.Length, y: Attribute.Length, width: Attribute.Length, height: Attribute.Length, rx?: Attribute.Length, ry?: Attribute.Length): Elements.Renderable.Shape.Rect;
  }

  Paper.prototype.rect = function(this: SavageDOM.Paper, x: Attribute.Length, y: Attribute.Length, width: Attribute.Length, height: Attribute.Length, rx?: Attribute.Length, ry?: Attribute.Length): Elements.Renderable.Shape.Rect {
    return new Elements.Renderable.Shape.Rect(this, { x, y, width, height, rx, ry });
  };

}
