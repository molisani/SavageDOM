import { lengthTests } from "../../../attributes/base.spec";
import { box } from "../../../attributes/box";
import { boxTest } from "../../../attributes/box.spec";
import { point } from "../../../attributes/point";
import { pointTest } from "../../../attributes/point.spec";
import { runAttributeTests, runCreateTest } from "../../../util/test-env";
import { ShapeAttributeTests as Shape_AttributeTests } from "../shape.spec";
import { Rect, Rect_Attributes } from "./rect";

describe("Rect", () => {

  describe(".create()", () => {

    runCreateTest(Rect.create, "rect", [
      ["Box", box(1, 2, 3, 4)],
    ], {
      x: "1",
      y: "2",
      width: "3",
      height: "4",
    });

    runCreateTest(Rect.create, "rect", [
      ["Box", box(1, 2, 3, 4)],
      ["Point", point(5, 6)],
    ], {
      x: "1",
      y: "2",
      width: "3",
      height: "4",
      rx: "5",
      ry: "6",
    });

    runCreateTest(Rect.create, "rect", [
      ["Box", box(1, 2, 3, 4)],
      ["Length", 5],
      ["Length", 6],
    ], {
      x: "1",
      y: "2",
      width: "3",
      height: "4",
      rx: "5",
      ry: "6",
    });

  });

  describe("attributes", () => {

    runAttributeTests<Rect_Attributes>(Rect.new, {
      ...Shape_AttributeTests,
      x: lengthTests,
      y: lengthTests,
      p: [pointTest],
      width: lengthTests,
      height: lengthTests,
      "x:y:width:height": [boxTest],
      rx: lengthTests,
      ry: lengthTests,
      r: [pointTest],
    });

  });

});
