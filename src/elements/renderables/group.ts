namespace SavageDOM.Elements.Renderables {

  export interface Group_Attributes extends Containers_Attributes, Attributes.HasOpacity {}

  export class Group extends AbstractRenderable<SVGGElement, Group_Attributes, {}> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes>) {
      super(context, "g", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Context {
    group(els: Element<SVGElement, any, any>[]): Elements.Renderables.Group;
  }

  Context.prototype.group = function(this: Context, els: Element<SVGElement, any, any>[] = []): Elements.Renderables.Group {
    const el = new Elements.Renderables.Group(this);
    els.forEach(child => el.add(child));
    this.addChild(el);
    return el;
  };

}
