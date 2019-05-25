import { buildLiteralTest } from "../../attributes/literal.spec";
import { AttributeTests } from "../../util/test-env";
import { HasMarker } from "./marker";

export const HasMarker_AttributeTest: AttributeTests<HasMarker> = {
  "marker-start": [buildLiteralTest(["none", "inherit"] as const)],
  "marker-mid": [buildLiteralTest(["none", "inherit"] as const)],
  "marker-end": [buildLiteralTest(["none", "inherit"] as const)],
};
