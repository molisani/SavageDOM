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
