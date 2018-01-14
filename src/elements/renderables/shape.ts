import { HasFill, HasStroke, Inherit } from "../../attributes/base";
import { AbstractRenderable, Graphics_Attributes } from "../renderable";

export interface Shape_Attributes extends Graphics_Attributes, HasFill, HasStroke {
  "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
}

export abstract class AbstractShape<E extends SVGElement, A> extends AbstractRenderable<E, Shape_Attributes & A, {}> {}
