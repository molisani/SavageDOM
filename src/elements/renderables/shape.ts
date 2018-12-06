import { BaseAttributes, HasFill, HasStroke, Inherit } from "../../attributes/base";
import { AbstractRenderable, Graphics_Attributes } from "../renderable";

export interface Shape_Attributes extends Graphics_Attributes, HasFill, HasStroke {
  "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
}

export abstract class AbstractShape<E extends SVGGraphicsElement, A extends BaseAttributes, _ATTRIBUTES extends BaseAttributes = Shape_Attributes & A> extends AbstractRenderable<E, _ATTRIBUTES, {}> {}
