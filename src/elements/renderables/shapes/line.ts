namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Line_Attributes extends Elements.NonRenderables.HasMarker {
    x1: Attributes.Length;
    y1: Attributes.Length;
    "x1:y1": Attributes.Point;
    x2: Attributes.Length;
    y2: Attributes.Length;
    "x2:y2": Attributes.Point;
  }

  export class Line extends AbstractShape<SVGLineElement, Line_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Line_Attributes>) {
      super(context, "line", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Context {
    line(p1: Attributes.Point, p2: Attributes.Point): Elements.Renderables.Shapes.Line;
    line(x1: Attributes.Length, y1: Attributes.Length, x2: Attributes.Length, y2: Attributes.Length): Elements.Renderables.Shapes.Line;
  }

  Context.prototype.line = function(this: Context, a1: Attributes.Length | Attributes.Point, a2: Attributes.Length | Attributes.Point, a3?: Attributes.Length, a4?: Attributes.Length): Elements.Renderables.Shapes.Line {
    let attrs = {};
    const a1IsPoint = a1 instanceof Attributes.Point;
    const a2IsPoint = a2 instanceof Attributes.Point;
    if (a1IsPoint && a2IsPoint) {
      attrs = { "x1:y1": a1, "x2:y2": a2 };
    } else if (!(a1IsPoint || a2IsPoint)) {
      attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
    }
    return new Elements.Renderables.Shapes.Line(this, attrs);
  };

}
