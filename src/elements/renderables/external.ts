import { Context } from "../../context";
import { SVGDocument } from "../../document";
import { Renderable_Attributes } from "../renderable";
import { Group } from "./group";

export class ExternalSVG extends Group {
  constructor(context: Context, doc: SVGDocument, attrs?: Partial<Renderable_Attributes>) {
    super(context, attrs);
    doc.children.forEach((child) => {
      const importedNode = context.window.document.importNode(child, true);
      context.addChild(importedNode);
    });
  }
}
