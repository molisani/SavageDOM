import { HasOpacity } from "../../attributes/base";
import { Box } from "../../attributes/box";
import { Context } from "../../context";
import { Pattern } from "../non-renderables/paint-servers/pattern";
import { AbstractRenderable, Containers_Attributes, Renderable_Attributes } from "../renderable";

export interface Group_Attributes extends Containers_Attributes, HasOpacity {}

export class Group extends AbstractRenderable<SVGGElement, Group_Attributes> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes>) {
    super(context, "g", attrs);
    if (this.constructor.name !== Group.name) {
      this._node.setAttribute("data-class", this.constructor.name);
    }
  }
  public toPattern(w: number, h: number): Pattern;
  public toPattern(w: number, h: number, x: number, y: number): Pattern;
  public toPattern(w: number, h: number, x: number, y: number, view: Box): Pattern;
  public toPattern(w: number, h: number, x?: number, y?: number, view?: Box): Pattern {
    const pattern = new Pattern(this.context, w, h, x, y, view);
    this.getChildren().forEach(child => pattern.add(child));
    return pattern;
  }
}
