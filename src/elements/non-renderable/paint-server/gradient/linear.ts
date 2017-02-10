namespace SavageDOM.Attribute.NonRenderable.PaintServer.Gradient {

  export interface Linear extends Gradient {
    x1: Length;
    y1: Length;
    "x1:y1": Point;
    x2: Length;
    y2: Length;
    "x2:y2": Point;
  }

}

namespace SavageDOM.Elements.NonRenderable.PaintServer.Gradient {

  export class Linear extends AbstractGradient<SVGLinearGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Linear> {
    constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable & Attribute.NonRenderable.PaintServer.Gradient.Linear>) {
      super(paper, "linearGradient", stops, attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    linearGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Linear): Elements.NonRenderable.PaintServer.Gradient.Linear;
  }

  Paper.prototype.linearGradient = function(this: SavageDOM.Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Attribute.NonRenderable.PaintServer.Gradient.Linear): Elements.NonRenderable.PaintServer.Gradient.Linear {
    return new Elements.NonRenderable.PaintServer.Gradient.Linear(this, stops, attrs);
  };

}
