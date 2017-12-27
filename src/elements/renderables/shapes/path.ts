namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Path_Attributes extends Elements.NonRenderables.HasMarker {
    d: Attributes.PathSegment[];
    pathLength: number;
  }

  export class Path extends AbstractShape<SVGPathElement, Path_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Path_Attributes>) {
      super(context, "path", attrs);
    }
  }

}
