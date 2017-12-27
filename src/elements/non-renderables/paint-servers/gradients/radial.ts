namespace SavageDOM.Elements.NonRenderables.PaintServers.Gradients {

  export interface Radial_Attributes extends Gradient_Attributes {
    cx: Attributes.Length;
    cy: Attributes.Length;
    "cx:cy": Attributes.Point;
    r: Attributes.Length;
    fx: Attributes.Length;
    fy: Attributes.Length;
    "fx:fy": Attributes.Point;
  }

  export class Radial extends AbstractGradient<SVGRadialGradientElement, Radial_Attributes> {
    constructor(context: Context, stops: Stops, attrs?: Partial<NonRenderable_Attributes & Radial_Attributes>) {
      super(context, "radialGradient", stops, attrs);
    }
  }

  // export interface Context {
  //   radialGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Radial): Elements.NonRenderable.PaintServer.Gradient.Radial;
  // }

  // Context.prototype.radialGradient = function(this: SavageDOM.Context, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Radial): Elements.NonRenderable.PaintServer.Gradient.Radial {
  //   return new Elements.NonRenderable.PaintServer.Gradient.Radial(this, stops, attrs);
  // };

}
