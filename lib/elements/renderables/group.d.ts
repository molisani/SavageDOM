import { HasOpacity } from "../../attributes/base";
import { Box } from "../../attributes/box";
import { Context } from "../../context";
import { Element } from "../../element";
import { Pattern } from "../non-renderables/paint-servers/pattern";
import { AbstractRenderable, Containers_Attributes, Renderable_Attributes } from "../renderable";
export interface Group_Attributes extends Containers_Attributes, HasOpacity {
}
export declare class Group extends AbstractRenderable<SVGGElement, Group_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes>, els?: Element<any>[]);
    toPattern(w: number, h: number): Pattern;
    toPattern(w: number, h: number, x: number, y: number): Pattern;
    toPattern(w: number, h: number, x: number, y: number, view: Box): Pattern;
}
