import { Context } from "../../context";
import { SVGDocument } from "../../document";
import { Renderable_Attributes } from "../renderable";
import { Component } from "./component";
import { Group } from "./group";
export declare class ExternalSVG extends Group {
    constructor(context: Context, doc: SVGDocument, attrs?: Partial<Renderable_Attributes>);
}
export declare class ExternalComponent extends Component {
    loaded: Promise<any>;
    constructor();
}
export declare function buildExternalComponentClass(url: string, origin?: {
    x: number;
    y: number;
}): typeof ExternalComponent;
