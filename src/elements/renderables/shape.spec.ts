import { AttributeTests } from "../../util/test-env";
import { Graphics_AttributeTests } from "../renderable.spec";
import { Shape_Attributes } from "./shape";

export const ShapeAttributeTests: AttributeTests<Shape_Attributes> = {
  ...Graphics_AttributeTests,
} as any;
