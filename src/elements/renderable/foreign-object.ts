namespace SavageDOM.Attribute.Renderable {

  export interface ForeignObject extends Containers, HasOpacity {
    x: Length;
    y: Length;
    width: Length;
    height: Length;
  }

}

namespace SavageDOM.Elements.Renderable {

  export class ForeignObject extends AbstractRenderable<SVGForeignObjectElement, Attribute.Renderable.ForeignObject, void> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.ForeignObject>) {
      super(paper, "foreignObject", attrs);
    }
    public addHTML(html: HTMLElement): void {
      this._node.appendChild(html);
    }
    public remove(html: HTMLElement): void {
      this._node.removeChild(html);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    foreignObject(html: HTMLElement, x: Attribute.Length, y: Attribute.Length, width: Attribute.Length, height: Attribute.Length): Elements.Renderable.ForeignObject;
  }

  Paper.prototype.foreignObject = function(this: Paper, html: HTMLElement, x: Attribute.Length = 0, y: Attribute.Length, width: Attribute.Length = new Attribute.Percentage(100), height: Attribute.Length = new Attribute.Percentage(100)): Elements.Renderable.ForeignObject {
    const el = new Elements.Renderable.ForeignObject(this, { x, y, width, height });
    el.addHTML(html);
    return el;
  };

}
