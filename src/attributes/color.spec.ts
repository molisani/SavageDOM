import { hsl, rgb } from "d3-color";
import { AttributeTestSuite } from "../util/test-env";
import { Color } from "./color";

export const colorTest: AttributeTestSuite<Color> = {
  type: "Color",
  values: [
    ["rgb(100, 100, 100)", rgb(100, 100, 100)],
    ["rgb(200, 200, 200, 0.5)", rgb(200, 200, 200, 0.5)],
    ["hsl(0, 0.5, 0.5)", hsl(0, 0.5, 0.5), rgb(191, 64, 64)],
    ["hsl(180, 0.25, 0.75, 0.5)", hsl(180, 0.25, 0.75, 0.5), rgb(175, 207, 207, 0.5)],
  ],
};
