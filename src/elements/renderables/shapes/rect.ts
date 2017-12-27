namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Rect_Attributes {
    x: Attributes.Length;
    y: Attributes.Length;
    "x:y": Attributes.Point;
    width: Attributes.Length;
    height: Attributes.Length;
    "width:height": Attributes.Point;
    "x:y:width:height": Attributes.Box;
    rx: Attributes.Length;
    ry: Attributes.Length;
    "rx:ry": Attributes.Point;
  }

  export class Rect extends AbstractShape<SVGRectElement, Rect_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Rect_Attributes>) {
      super(context, "rect", attrs);
    }
  }

}
