namespace SavageDOM.Elements.Renderables {

  export interface ForeignObject_Attributes extends Containers_Attributes, Attributes.HasOpacity {
    x: Attributes.Length;
    y: Attributes.Length;
    width: Attributes.Length;
    height: Attributes.Length;
  }

  export class ForeignObject extends AbstractRenderable<SVGForeignObjectElement, ForeignObject_Attributes, {}> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & ForeignObject_Attributes>) {
      super(context, "foreignObject", attrs);
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

  export interface Context {
    foreignObject(html: HTMLElement, x: Attributes.Length, y: Attributes.Length, width: Attributes.Length, height: Attributes.Length): Elements.Renderables.ForeignObject;
  }

  Context.prototype.foreignObject = function(this: Context, html: HTMLElement, x: Attributes.Length, y: Attributes.Length, width: Attributes.Length, height: Attributes.Length): Elements.Renderables.ForeignObject {
    const el = new Elements.Renderables.ForeignObject(this, { x, y, width, height });
    el.addHTML(html);
    this.addChild(el);
    return el;
  };

}
