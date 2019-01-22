import { HasOpacity, Length } from "../../attributes/base";
import { Context } from "../../context";
import { AbstractRenderable, Containers_Attributes } from "../renderable";
export interface ForeignObject_Attributes extends Containers_Attributes, HasOpacity {
    x: Length;
    y: Length;
    width: Length;
    height: Length;
}
export declare class ForeignObject extends AbstractRenderable<SVGForeignObjectElement, ForeignObject_Attributes> {
    constructor(context: Context, attrs?: Partial<ForeignObject_Attributes>, html?: HTMLElement);
    addHTML(html: HTMLElement): void;
    remove(html: HTMLElement): void;
}
