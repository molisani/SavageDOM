namespace SavageDOM.Attribute.Renderable {

  export interface Text {
    x: Length;
    y: Length;
    "x:y": Point;
    dx: Length;
    dy: Length;
    "dx:dy": Point;
    "text-anchor"?: "start" | "middle" | "end" | Inherit;
    textLength?: Length;
  }

}

namespace SavageDOM.Elements.Renderable {

  export class Text extends AbstractRenderable<SVGTextElement, Attribute.Textual | Attribute.Renderable.Text> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Textual | Attribute.Renderable.Text>) {
      super(paper, "text", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    text(x: Attribute.Length, y: Attribute.Length): Elements.Renderable.Text;
  }

  Paper.prototype.text = function(this: SavageDOM.Paper, x: Attribute.Length, y: Attribute.Length): Elements.Renderable.Text {
    return new Elements.Renderable.Text(this, { x, y });
  };

}
