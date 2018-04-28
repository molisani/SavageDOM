import { HasOpacity, Length } from "../../attributes/base";
import { Context } from "../../context";
import { AbstractRenderable, Containers_Attributes, Renderable_Attributes } from "../renderable";

export interface ForeignObject_Attributes extends Containers_Attributes, HasOpacity {
  x: Length;
  y: Length;
  width: Length;
  height: Length;
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
