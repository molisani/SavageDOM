namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Circle_Attributes {
    cx: Attributes.Length;
    cy: Attributes.Length;
    "cx:cy": Attributes.Point;
    r: Attributes.Length;
  }

  export class Circle extends AbstractShape<SVGCircleElement, Circle_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Circle_Attributes>) {
      super(context, "circle", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Context {
    circle(c: Attributes.Point, r: Attributes.Length): Elements.Renderables.Shapes.Circle;
    circle(cx: Attributes.Length, cy: Attributes.Length, r: Attributes.Length): Elements.Renderables.Shapes.Circle;
  }

  Context.prototype.circle = function(this: Context, a1: Attributes.Length | Attributes.Point, a2: Attributes.Length, a3?: Attributes.Length): Elements.Renderables.Shapes.Circle {
    const attrs = (a1 instanceof Attributes.Point) ? { "cx:cy": a1, r: a2 } : { cx: a1, cy: a2, r: a3 };
    return new Elements.Renderables.Shapes.Circle(this, attrs);
  };

}
