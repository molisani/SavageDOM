import { Context } from "../../context";
import { makeRequest, SVGDocument } from "../../document";
import { Renderable_Attributes } from "../renderable";
import { Component } from "./component";
import { Group } from "./group";

export class ExternalSVG extends Group {
  constructor(context: Context, doc: SVGDocument, attrs?: Partial<Renderable_Attributes>) {
    super(context, attrs);
    doc.children.forEach((child) => {
      const importedNode = context.window.document.importNode(child, true);
      this.add(importedNode);
    });
  }
}

export function ExternalComponent(url: string, origin: { x: number, y: number }): typeof Component {
  const xmlDocument_p = makeRequest("GET", url);
  const doc_p = xmlDocument_p.then((xml) => new SVGDocument(Component.getContext(), xml));
  return class extends Component {
    constructor() {
      super(origin);
      doc_p.then((doc) => {
        doc.children.forEach((child) => {
          const importedNode = Component.getContext().window.document.importNode(child, true);
          this.add(importedNode);
        });
      });
      this._node.setAttribute("data-source-url", url);
    }
  };
}
