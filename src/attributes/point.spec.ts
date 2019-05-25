import { AttributeTestSuite } from "../util/test-env";
import { dimension } from "./dimension";
import { Point, point } from "./point";

export const pointTest: AttributeTestSuite<Point> = {
  type: "Point",
  values: [
    ["number, number", point(1, 2)],
    ["Dimension<px>, Dimension<px>", point(dimension(1, "px"), dimension(2, "px"))],
    ["Dimension<em>, Dimension<em>", point(dimension(1, "em"), dimension(2, "em"))],
    ["Dimension<%>, Dimension<%>", point(dimension(25, "%"), dimension(50, "%"))],
  ],
};
