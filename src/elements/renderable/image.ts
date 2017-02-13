namespace SavageDOM.Attribute.Renderable {

  export interface Image {
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
    href: string;
    preserveAspectRatio?: PreserveAspectRatio;
    viewBox?: Box;
  }

}

namespace SavageDOM.Events {

  export interface Image {
    load: ProgressEvent;
  }

}

namespace SavageDOM.Elements.Renderable {

  export class Image extends AbstractRenderable<SVGImageElement, Attribute.Renderable.Image, Events.Image> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Image>) {
      super(paper, "image", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    image(href: string, onload?: (img: Elements.Renderable.Image) => void, attrs?: Partial<Attribute.Renderable.Image>): Elements.Renderable.Image;
  }

  Paper.prototype.image = function(this: SavageDOM.Paper, href: string, onload?: (img: Elements.Renderable.Image) => void, attrs?: Partial<Attribute.Renderable.Image>): Elements.Renderable.Image {
    const img = new Elements.Renderable.Image(this, attrs);
    if (onload !== undefined) {
      img.addEventListener("load", () => {
        onload(img);
      });
    }
    img.setAttribute("href", href);
    return img;
  };

}
