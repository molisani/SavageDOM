import { point } from "../../../attributes";
import { lengthTests } from "../../../attributes/base.spec";
import { pointTest } from "../../../attributes/point.spec";
import { runAttributeTests, runCreateTest } from "../../../util/test-env";
import { ShapeAttributeTests as Shape_AttributeTests } from "../shape.spec";
import { Ellipse, Ellipse_Attributes } from "./ellipse";

describe("Ellipse", () => {

  describe(".create()", () => {

    runCreateTest(Ellipse.create, "ellipse", [
      ["Point", point(1, 2)],
      ["Point", point(3, 4)],
    ], {
      cx: "1",
      cy: "2",
      rx: "3",
      ry: "4",
    });

    runCreateTest(Ellipse.create, "ellipse", [
      ["Length", 1],
      ["Length", 2],
      ["Length", 3],
      ["Length", 4],
    ], {
      cx: "1",
      cy: "2",
      rx: "3",
      ry: "4",
    });

  });

  describe("attributes", () => {

    runAttributeTests<Ellipse_Attributes>(Ellipse.new, {
      ...Shape_AttributeTests,
      cx: lengthTests,
      cy: lengthTests,
      c: [pointTest],
      rx: lengthTests,
      ry: lengthTests,
      r: [pointTest],
    });

  });

});
