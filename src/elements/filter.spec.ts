import { stringTest } from "../attributes/base.spec";
import { buildLiteralTest } from "../attributes/literal.spec";
import { AttributeTests } from "../util/test-env";
import { HasFilter } from "./filter";

export const HasFilter_AttributeTests: AttributeTests<HasFilter> = {
  filter: [
    // TODO - test for filter references
    stringTest,
    buildLiteralTest(["none", "inherit"]),
  ],
};
