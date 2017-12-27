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
