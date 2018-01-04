namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Ellipse_Attributes {
    cx: Attributes.Length;
    cy: Attributes.Length;
    "cx:cy": Attributes.Point;
    rx: Attributes.Length;
    ry: Attributes.Length;
    "rx:ry": Attributes.Point;
  }

  export class Ellipse extends AbstractShape<SVGEllipseElement, Ellipse_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Ellipse_Attributes>) {
      super(context, "ellipse", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Context {
    ellipse(c: Attributes.Point, r: Attributes.Point): Elements.Renderables.Shapes.Ellipse;
    ellipse(cx: Attributes.Length, cy: Attributes.Length, rx: Attributes.Length, ry: Attributes.Length): Elements.Renderables.Shapes.Ellipse;
  }

  Context.prototype.ellipse = function(this: Context, a1: Attributes.Length | Attributes.Point, a2: Attributes.Length | Attributes.Point, a3?: Attributes.Length, a4?: Attributes.Length): Elements.Renderables.Shapes.Ellipse {
    let attrs = {};
    const a1IsPoint = a1 instanceof Attributes.Point;
    const a2IsPoint = a2 instanceof Attributes.Point;
    if (a1IsPoint && a2IsPoint) {
      attrs = { "cx:cy": a1, "rx:ry": a2 };
    } else if (!(a1IsPoint || a2IsPoint)) {
      attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
    }
    return new Elements.Renderables.Shapes.Ellipse(this, attrs);
  };

}
