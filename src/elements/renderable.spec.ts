import { Core_AttributeTests, HasClass_AttributeTests, HasColorInterpolation_AttributeTests, HasColorRendering_AttributeTests, HasColor_AttributeTests, HasCursor_AttributeTests, HasOpacity_AttributeTests, HasStyle_AttributeTests, HasVisibility_AttributeTests } from "../attributes/base.spec";
import { buildLiteralTest } from "../attributes/literal.spec";
import { Transformable_AttributeTests } from "../attributes/transform.spec";
import { AttributeTests } from "../util/test-env";
import { HasFilter_AttributeTests } from "./filter.spec";
import { HasClipPath_AttributeTests } from "./non-renderables/clip-path.spec";
import { HasMask_AttributeTests } from "./non-renderables/mask.spec";
import { displayLiterals, Graphics_Attributes, pointerEventsLiterals, Renderable_Attributes } from "./renderable";

export const Renderable_AttributeTests: AttributeTests<Renderable_Attributes> = {
  ...Core_AttributeTests,
  ...HasStyle_AttributeTests,
  ...HasClass_AttributeTests,
  ...HasColor_AttributeTests,
  ...Transformable_AttributeTests,
  display: [buildLiteralTest(displayLiterals, "inherit")],
  "pointer-events": [buildLiteralTest(pointerEventsLiterals, "inherit")],
};

export const Graphics_AttributeTests: AttributeTests<Graphics_Attributes> = {
  ...Renderable_AttributeTests,
  ...HasFilter_AttributeTests,
  ...HasColorInterpolation_AttributeTests,
  ...HasColorRendering_AttributeTests,
  ...HasCursor_AttributeTests,
  ...HasClipPath_AttributeTests,
  ...HasMask_AttributeTests,
  ...HasOpacity_AttributeTests,
  ...HasVisibility_AttributeTests,
};
