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

namespace SavageDOM {

  export interface Context {
    path(d: Attributes.PathSegment[], pathLength?: number): Elements.Renderables.Shapes.Path;
  }

  Context.prototype.path = function(d: Attributes.PathSegment[], pathLength?: number): Elements.Renderables.Shapes.Path {
    const attrs = { d, pathLength };
    return new Elements.Renderables.Shapes.Path(this, attrs);
  };

}
