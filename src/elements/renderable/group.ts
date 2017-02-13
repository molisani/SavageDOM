namespace SavageDOM.Elements {

  export namespace Renderable {

    export class Group extends AbstractRenderable<SVGGElement, void, void> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable>) {
        super(paper, "g", attrs);
      }
    }

  }

}

namespace SavageDOM {

  export interface Paper {
    group(els: Element<SVGElement, any, any>[]): Elements.Renderable.Group;
  }

  Paper.prototype.group = function(this: SavageDOM.Paper, els: Element<SVGElement, any, any>[]): Elements.Renderable.Group {
    const el = new Elements.Renderable.Group(this);
    els.forEach(child => el.add(child));
    return el;
  };

}
