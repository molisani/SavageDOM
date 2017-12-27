namespace SavageDOM.Elements.Renderables {

  export interface Group_Attributes extends Containers_Attributes, Attributes.HasOpacity {}

  export class Group extends AbstractRenderable<SVGGElement, Group_Attributes, {}> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes>) {
      super(context, "g", attrs);
    }
  }

}
