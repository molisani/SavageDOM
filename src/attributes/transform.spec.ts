import { AttributeTests, AttributeTestSuite } from "../util/test-env";
import { matrix, rotate, scale, skewX, skewY, Transform, Transformable, TransformList, translate } from "./transform";

export const matrixTransformTest: AttributeTestSuite<Transform<"matrix">> = {
  type: "Transform<matrix>",
  values: [
    ["identity", matrix()],
    ["collapse", matrix(0, 0, 1, 0, 0, 1)],
    ["decimal", matrix(1.1, 1.2, 1.3, 1.4, 1.5, 1.6)],
  ],
};

export const translateTransformTest: AttributeTestSuite<Transform<"translate">> = {
  type: "Transform<translate>",
  values: [
    ["(0, 0)", translate()],
    ["(1.1, 1.2)", translate(1.1, 1.2)],
    ["(-1.3, -1.4)", translate(-1.3, -1.4)],
  ],
};

export const rotateTransformTest: AttributeTestSuite<Transform<"rotate">> = {
  type: "Transform<rotate>",
  values: [
    ["0deg (0, 0)", rotate()],
    ["45deg (1.1, 1.2)", rotate(45, 1.1, 1.2)],
    ["-90deg (-1.1, -1.2)", rotate(-90, -1.1, -1.2)],
  ],
};

export const scaleTransformTest: AttributeTestSuite<Transform<"scale">> = {
  type: "Transform<scale>",
  values: [
    ["1", scale()],
    ["2.5", scale(2.5)],
    ["-3.4 5.6", scale(-3.4, 5.6)],
  ],
};

export const skewXTransformTest: AttributeTestSuite<Transform<"skewX">> = {
  type: "Transform<skewX>",
  values: [
    ["0deg", skewX()],
    ["12.3deg", skewX(12.3)],
    ["-12.3deg", skewX(-12.3)],
  ],
};

export const skewYTransformTest: AttributeTestSuite<Transform<"skewY">> = {
  type: "Transform<skewY>",
  values: [
    ["0deg", skewY()],
    ["12.3deg", skewY(12.3)],
    ["-12.3deg", skewY(-12.3)],
  ],
};

export const transformListTest: AttributeTestSuite<TransformList> = {
  type: "TransformList",
  values: [
    ["empty", []],
    ["defaults", [matrix(), translate(), rotate(), scale(), skewX(), skewY()]],
    ["duplicates", [matrix(), translate(), rotate(), scale(), skewX(), skewY(), matrix(), translate(), rotate(), scale(), skewX(), skewY()]],
  ],
};

export const Transformable_AttributeTests: AttributeTests<Transformable> = {
  "transform.matrix": [matrixTransformTest],
  "transform.translate": [translateTransformTest],
  "transform.scale": [scaleTransformTest],
  "transform.rotate": [rotateTransformTest],
  "transform.skewX": [skewXTransformTest],
  "transform.skewY": [skewYTransformTest],
  transform: [transformListTest],
};
