namespace SavageDOM.Attribute.NonRenderable.PaintServer.Gradient {

  export interface Radial extends Gradient {
    cx: Length;
    cy: Length;
    "cx:cy": Point;
    r: Length;
    fx: Length;
    fy: Length;
    "fx:fy": Point;
  }

}

namespace SavageDOM.Elements.NonRenderable.PaintServer.Gradient {

  export class Radial extends AbstractGradient<SVGRadialGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Radial> {
    constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable & Attribute.NonRenderable.PaintServer.Gradient.Radial>) {
      super(paper, "radialGradient", stops, attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    radialGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Radial): Elements.NonRenderable.PaintServer.Gradient.Radial;
  }

  Paper.prototype.radialGradient = function(this: SavageDOM.Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Radial): Elements.NonRenderable.PaintServer.Gradient.Radial {
    return new Elements.NonRenderable.PaintServer.Gradient.Radial(this, stops, attrs);
  };

}
