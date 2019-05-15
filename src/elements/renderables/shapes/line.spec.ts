import { point } from "../../../attributes";
import { lengthTests } from "../../../attributes/base.spec";
import { pointTest } from "../../../attributes/point.spec";
import { runAttributeTests, runCreateTest } from "../../../util/test-env";
import { HasMarker_AttributeTest as HasMarker_AttributeTests } from "../../non-renderables/marker.spec";
import { ShapeAttributeTests as Shape_AttributeTests } from "../shape.spec";
import { Line, Line_Attributes } from "./line";

describe("Line", () => {

  describe(".create()", () => {

    runCreateTest(Line.create, "line", [
      ["Point", point(1, 2)],
      ["Point", point(3, 4)],
    ], {
      x1: "1",
      y1: "2",
      x2: "3",
      y2: "4",
    });

    runCreateTest(Line.create, "line", [
      ["Length", 1],
      ["Length", 2],
      ["Length", 3],
      ["Length", 4],
    ], {
      x1: "1",
      y1: "2",
      x2: "3",
      y2: "4",
    });

  });

  describe("attributes", () => {

    runAttributeTests<Line_Attributes>(Line.new, {
      ...Shape_AttributeTests,
      ...HasMarker_AttributeTests,
      x1: lengthTests,
      y1: lengthTests,
      p1: [pointTest],
      x2: lengthTests,
      y2: lengthTests,
      p2: [pointTest],
    });

  });

});
