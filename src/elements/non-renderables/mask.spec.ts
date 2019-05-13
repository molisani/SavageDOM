import { buildLiteralTest } from "../../attributes/literal.spec";
import { AttributeTests } from "../../util/test-env";
import { HasMask } from "./mask";

export const HasMask_AttributeTests: AttributeTests<HasMask> = {
  mask: [buildLiteralTest(["none", "inherit"] as const)],
};
