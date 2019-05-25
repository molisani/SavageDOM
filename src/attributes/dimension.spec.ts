import { AttributeTestSuite } from "../util/test-env";
import { CSSAbsoluteUnit, CSSAngleUnit, CSSRelativeUnit, Dimension, dimension, Percentage } from "./dimension";

export const absoluteDimensionTest: AttributeTestSuite<Dimension<CSSAbsoluteUnit>> = {
  type: "Dimension (absolute)",
  values: [
    ["0px", dimension(0, "px")],
    ["1.1px", dimension(1.1, "px")],
    ["-1.2px", dimension(-1.2, "px")],
    ["0in", dimension(0, "in")],
    ["1.1in", dimension(1.1, "in")],
    ["-1.2in", dimension(-1.2, "in")],
    ["0cm", dimension(0, "cm")],
    ["1.1cm", dimension(1.1, "cm")],
    ["-1.2cm", dimension(-1.2, "cm")],
    ["0mm", dimension(0, "mm")],
    ["1.1mm", dimension(1.1, "mm")],
    ["-1.2mm", dimension(-1.2, "mm")],
    ["0pt", dimension(0, "pt")],
    ["1.1pt", dimension(1.1, "pt")],
    ["-1.2pt", dimension(-1.2, "pt")],
    ["0pc", dimension(0, "pc")],
    ["1.1pc", dimension(1.1, "pc")],
    ["-1.2pc", dimension(-1.2, "pc")],
  ],
};

export const relativeDimensionTest: AttributeTestSuite<Dimension<CSSRelativeUnit>> = {
  type: "Dimension (relative)",
  values: [
    ["0em", dimension(0, "em")],
    ["1.1em", dimension(1.1, "em")],
    ["-1.2em", dimension(-1.2, "em")],
    ["0ex", dimension(0, "ex")],
    ["1.1ex", dimension(1.1, "ex")],
    ["-1.2ex", dimension(1.2, "ex")],
  ],
};

export const angleDimensionTest: AttributeTestSuite<Dimension<CSSAngleUnit>> = {
  type: "Dimension (angle)",
  values: [
    ["0deg", dimension(0, "deg")],
    ["1.1deg", dimension(1.1, "deg")],
    ["-1.2deg", dimension(-1.2, "deg")],
    ["0grad", dimension(0, "grad")],
    ["1.1grad", dimension(1.1, "grad")],
    ["-1.2grad", dimension(-1.2, "grad")],
    ["0rad", dimension(0, "rad")],
    ["1.1rad", dimension(1.1, "rad")],
    ["-1.2rad", dimension(-1.2, "rad")],
    ["0turn", dimension(0, "turn")],
    ["1.1turn", dimension(1.1, "turn")],
    ["-1.2turn", dimension(-1.2, "turn")],
  ],
};

export const percentageTest: AttributeTestSuite<Percentage> = {
  type: "Percentage",
  values: [
    ["0%", dimension(0, "%")],
    ["1.1%", dimension(1.1, "%")],
    ["-1.2%", dimension(-1.2, "%")],
  ],
};
