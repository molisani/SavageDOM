import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { makeRequest } from "../../document";
import { Renderable_Attributes } from "../renderable";
import { Component } from "./component";
import { Group } from "./group";

export class ExternalSVG extends Group {
  constructor(context: Context, doc: Document, attrs?: Partial<Renderable_Attributes>) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "g"), attrs);
    this.injectDocument(doc);
  }
}

export declare class ExternalComponent extends Component {
  public loaded: Promise<any>;
  constructor();
}

export function buildExternalComponentClass(url: string, origin: { x: number, y: number } = { x: 0, y: 0 }): typeof ExternalComponent {
  const doc_p = makeRequest("GET", url);
  return class extends Component {
    public loaded: Promise<any>;
    constructor() {
      super(origin);
      this.loaded = doc_p.then((doc) => this.injectDocument(doc));
      this._node.setAttribute("data-source-url", url);
    }
  };
}
