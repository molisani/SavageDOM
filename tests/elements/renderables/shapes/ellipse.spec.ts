import { expect } from "chai";
import { Point } from "../../../../src/attributes/point";
import { Ellipse } from "../../../../src/elements/renderables/shapes/ellipse";
import { buildContextWithRenderer } from "../../../common";

describe("ellipse", () => {

  it("creates a <ellipse>", async () => {

    const { context, renderer, extract } = buildContextWithRenderer();

    const p = new Point(1, 2);
    const r = new Point(3, 4);

    const ellipse = new Ellipse(context, p, r);

    await ellipse.flush();
    await renderer.stopRendering();

    const test = extract(ellipse);

    expect(test.name).to.equal("ellipse");
    if (test.attributes) {
      expect(test.attributes.cx).to.equal("1");
      expect(test.attributes.cy).to.equal("2");
      expect(test.attributes.rx).to.equal("3");
      expect(test.attributes.ry).to.equal("4");
    } else {
      expect.fail("no attributes");
    }

  });

});
