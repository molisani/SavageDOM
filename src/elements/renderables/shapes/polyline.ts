namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Polyline_Attributes extends Elements.NonRenderables.HasMarker {
    points: Attributes.Point[];
  }

  export class Polyline extends AbstractShape<SVGPolylineElement, Polyline_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Polyline_Attributes>) {
      super(context, "polyline", attrs);
    }
  }

}
