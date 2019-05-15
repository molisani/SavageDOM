import { AttributeTestSuite } from "../util/test-env";
import { Box, box } from "./box";

export const boxTest: AttributeTestSuite<Box> = {
  type: "Box",
  values: [
    ["0, 1, 1.1, -1.2", box(0, 1, 1.1, -1.2)],
  ],
};
