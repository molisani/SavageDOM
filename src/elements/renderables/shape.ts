import { HasFill, HasStroke, Inherit } from "../../attributes/base";
import { AbstractRenderable, Graphics_Attributes } from "../renderable";

export interface Shape_Attributes extends Graphics_Attributes, HasFill, HasStroke {
  "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
}

export abstract class AbstractShape<ELEMENT extends SVGGraphicsElement, ATTRIBUTES extends Shape_Attributes = Shape_Attributes> extends AbstractRenderable<ELEMENT, ATTRIBUTES> {}
