namespace SavageDOM.Attribute.Renderable {

  export interface Image {
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": ViewBox;
    "xlink:href": string;
    preserveAspectRatio?: PreserveAspectRatio;
    viewBox?: ViewBox;
  }

}

namespace SavageDOM.Elements.Renderable {

  export class Image extends AbstractRenderable<SVGImageElement, Attribute.Renderable.Image> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Image>) {
      super(paper, "image", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    image(attrs: Attribute.Renderable.Image): Elements.Renderable.Image;
  }

  Paper.prototype.image = function(this: SavageDOM.Paper, attrs: Attribute.Renderable.Image): Elements.Renderable.Image {
    return new Elements.Renderable.Image(this, attrs);
  };

}
