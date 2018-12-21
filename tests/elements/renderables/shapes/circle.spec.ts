import { expect } from "chai";
import { Point } from "../../../../src/attributes/point";
import { Circle } from "../../../../src/elements/renderables/shapes/circle";
import { buildContextWithRenderer } from "../../../common";

describe("circle", () => {

  it("creates a <circle>", async () => {

    const { context, renderer, extract } = buildContextWithRenderer();

    const p = new Point(1, 2);
    const r = 10;

    const circle = new Circle(context, p, r);

    await circle.flush();
    await renderer.stopRendering();

    const test = extract(circle);

    expect(test.name).to.equal("circle");
    if (test.attributes) {
      expect(test.attributes.cx).to.equal("1");
      expect(test.attributes.cy).to.equal("2");
      expect(test.attributes.r).to.equal("10");
    } else {
      expect.fail("no attributes");
    }

  });

});
