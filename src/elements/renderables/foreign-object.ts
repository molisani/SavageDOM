import { HasOpacity, Length } from "../../attributes/base";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractRenderable, Containers_Attributes } from "../renderable";

export interface ForeignObject_Attributes extends Containers_Attributes, HasOpacity {
  x: Length;
  y: Length;
  width: Length;
  height: Length;
}

export class ForeignObject extends AbstractRenderable<SVGForeignObjectElement, ForeignObject_Attributes> {
  constructor(context: Context, attrs?: Partial<ForeignObject_Attributes>, html?: HTMLElement) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "foreignObject"), attrs);
    if (html) {
      this.addHTML(html);
    }
  }
  public addHTML(html: HTMLElement): void {
    this._node.appendChild(html);
  }
  public remove(html: HTMLElement): void {
    this._node.removeChild(html);
  }
}
