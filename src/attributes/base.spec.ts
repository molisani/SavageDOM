import { AttributeTests, AttributeTestSuite } from "../util/test-env";
import { colorInterpolationLiterals, colorRenderingLiterals, Core_Attributes, cursorLiterals, fillRuleLiterals, HasClass, HasColor, HasColorInterpolation, HasColorRendering, HasCursor, HasFill, HasOpacity, HasOverflow, HasStroke, HasStyle, HasVisibility, Length, overflowLiterals, Paint, paintLiterals, strokeLinecapLiterals, strokeLinejoinLiterals, visibilityLiterals } from "./base";
import { colorTest } from "./color.spec";
import { absoluteDimensionTest, percentageTest, relativeDimensionTest } from "./dimension.spec";
import { buildLiteralTest } from "./literal.spec";

export const stringTest: AttributeTestSuite<string> = {
  type: "string",
  values: [
    ["empty string", ""],
  ],
};

export const numberTest: AttributeTestSuite<number> = {
  type: "number",
  values: [
    ["0", 0],
    ["1.1", 1.1],
    ["-1.2", -1.2],
  ],
};

export const lengthTests: AttributeTestSuite<Length>[] = [
  numberTest,
  absoluteDimensionTest,
  relativeDimensionTest,
  percentageTest,
];

export const paintTests: AttributeTestSuite<Paint>[] = [
  colorTest,
  buildLiteralTest(paintLiterals),
];

export const Core_AttributeTests: AttributeTests<Core_Attributes> = {
  id: [stringTest],
  lang: [stringTest],
  tabindex: [numberTest],
};

export const HasStyle_AttributeTests: AttributeTests<HasStyle> = {
  style: [stringTest],
};

export const HasClass_AttributeTests: AttributeTests<HasClass> = {
  class: [stringTest],
};

export const HasOverflow_AttributeTests: AttributeTests<HasOverflow> = {
  overflow: [buildLiteralTest(overflowLiterals, "inherit")],
};

export const HasColor_AttributeTests: AttributeTests<HasColor> = {
  color: [
    colorTest,
    buildLiteralTest(["inherit"] as const),
  ],
};

export const HasColorInterpolation_AttributeTests: AttributeTests<HasColorInterpolation> = {
  "color-interpolation": [buildLiteralTest(colorInterpolationLiterals, "inherit")],
};

export const HasColorRendering_AttributeTests: AttributeTests<HasColorRendering> = {
  "color-rendering": [buildLiteralTest(colorRenderingLiterals, "inherit")],
};

export const HasCursor_AttributeTests: AttributeTests<HasCursor> = {
  cursor: [buildLiteralTest(cursorLiterals, "inherit")],
};

export const HasFill_AttributeTests: AttributeTests<HasFill> = {
  fill: paintTests,
  "fill-opacity": [
    numberTest,
    buildLiteralTest(["inherit"] as const),
  ],
  "fill-rule": [buildLiteralTest(fillRuleLiterals, "inherit")],
};

export const HasOpacity_AttributeTests: AttributeTests<HasOpacity> = {
  opacity: [numberTest, buildLiteralTest(["inherit"] as const)],
};

export const HasStroke_AttributeTests: AttributeTests<HasStroke> = {
  stroke: paintTests,
  "stroke-dasharray": [buildLiteralTest(["none", "inherit"] as const)],
  "stroke-dashoffset": [...lengthTests, buildLiteralTest(["inherit"] as const)],
  "stroke-linecap": [buildLiteralTest(strokeLinecapLiterals, "inherit")],
  "stroke-linejoin": [buildLiteralTest(strokeLinejoinLiterals, "inherit")],
  "stroke-miterlimit": [numberTest, buildLiteralTest(["inherit"] as const)],
  "stroke-opacity": [numberTest, buildLiteralTest(["inherit"] as const)],
  "stroke-width": [...lengthTests, buildLiteralTest(["inherit"] as const)],
};

export const HasVisibility_AttributeTests: AttributeTests<HasVisibility> = {
  visibility: [buildLiteralTest(visibilityLiterals, "inherit")],
};
