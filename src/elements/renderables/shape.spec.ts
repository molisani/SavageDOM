import { HasFill_AttributeTests, HasStroke_AttributeTests } from "../../attributes/base.spec";
import { buildLiteralTest } from "../../attributes/literal.spec";
import { AttributeTests } from "../../util/test-env";
import { Graphics_AttributeTests } from "../renderable.spec";
import { shapeRenderingLiterals, Shape_Attributes } from "./shape";

export const ShapeAttributeTests: AttributeTests<Shape_Attributes> = {
  ...Graphics_AttributeTests,
  ...HasFill_AttributeTests,
  ...HasStroke_AttributeTests,
  "shape-rendering": [buildLiteralTest(shapeRenderingLiterals, "inherit")],
};
