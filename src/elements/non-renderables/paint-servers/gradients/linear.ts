namespace SavageDOM.Elements.NonRenderables.PaintServers.Gradients {

  export interface Linear_Attributes extends Gradient_Attributes {
    x1: Attributes.Length;
    y1: Attributes.Length;
    "x1:y1": Attributes.Point;
    x2: Attributes.Length;
    y2: Attributes.Length;
    "x2:y2": Attributes.Point;
  }

  export class Linear extends AbstractGradient<SVGLinearGradientElement, Linear_Attributes> {
    constructor(context: Context, stops: Stops, attrs?: Partial<NonRenderable_Attributes & Linear_Attributes>) {
      super(context, "linearGradient", stops, attrs);
    }
  }

  // export interface Context {
  //   linearGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Linear): Elements.NonRenderable.PaintServer.Gradient.Linear;
  // }

  // Context.prototype.linearGradient = function(this: SavageDOM.Context, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Linear): Elements.NonRenderable.PaintServer.Gradient.Linear {
  //   return new Elements.NonRenderable.PaintServer.Gradient.Linear(this, stops, attrs);
  // };

}
