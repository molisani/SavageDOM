import { HasFill, HasFill_AttributeGetter, HasFill_AttributeInterpolator, HasFill_AttributeSetter, HasStroke, HasStroke_AttributeGetter, HasStroke_AttributeInterpolator, HasStroke_AttributeSetter, Inherit } from "../../attributes/base";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../../attributes/literal";
import { AttributeSetter } from "../../attributes/setter";
import { AbstractRenderable, Graphics_AttributeGetter, Graphics_AttributeInterpolator, Graphics_Attributes, Graphics_AttributeSetter } from "../renderable";

export interface Shape_Attributes extends Graphics_Attributes, HasFill, HasStroke {
  "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
}

const shapeRenderingLiterals = ["auto", "optimizeSpeed", "crispEdges", "geometricPrecision", "inherit"] as const;

export const Shape_AttributeGetter: AttributeGetter<Shape_Attributes> = {
  ...Graphics_AttributeGetter,
  ...HasFill_AttributeGetter,
  ...HasStroke_AttributeGetter,
  "shape-rendering": buildStringLiteralParser(shapeRenderingLiterals, "inherit"),
};

export const Shape_AttributeSetter: AttributeSetter<Shape_Attributes> = {
  ...Graphics_AttributeSetter,
  ...HasFill_AttributeSetter,
  ...HasStroke_AttributeSetter,
  "shape-rendering": buildStringLiteralSerializer(shapeRenderingLiterals, "inherit"),
};

export const Shape_AttributeInterpolator: AttributeInterpolator<Shape_Attributes> = {
  ...Graphics_AttributeInterpolator,
  ...HasFill_AttributeInterpolator,
  ...HasStroke_AttributeInterpolator,
  "shape-rendering": unsupportedTweenBuilder,
};

export abstract class AbstractShape<ELEMENT extends SVGGraphicsElement, ATTRIBUTES extends Shape_Attributes = Shape_Attributes> extends AbstractRenderable<ELEMENT, ATTRIBUTES> {}
