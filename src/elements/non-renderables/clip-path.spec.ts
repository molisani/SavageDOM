import { buildLiteralTest } from "../../attributes/literal.spec";
import { AttributeTests } from "../../util/test-env";
import { clipRuleLiterals, HasClipPath } from "./clip-path";

export const HasClipPath_AttributeTests: AttributeTests<HasClipPath> = {
  "clip-path": [],
  "clip-rule": [buildLiteralTest(clipRuleLiterals, "inherit")],
};
