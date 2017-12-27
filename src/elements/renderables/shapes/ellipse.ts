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
