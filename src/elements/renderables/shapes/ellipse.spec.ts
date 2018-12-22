import { expect } from "chai";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../../tests/common";
import { Point } from "../../../attributes/point";
import { Ellipse } from "./ellipse";

describe("ellipse", () => {

  it("creates a <ellipse>", async () => {

    const { context, renderer } = buildContextWithRenderer();

    const p = new Point(1, 2);
    const r = new Point(3, 4);

    const el = new Ellipse(context, p, r);

    await el.flush();
    await renderer.stopRendering();

    const doc = reparseDOM(el);
    const ellipses = extractNodes(doc, "ellipse");

    expect(ellipses).to.have.length(1);
    expect(ellipses[0].attrs.cx).to.equal(1);
    expect(ellipses[0].attrs.cy).to.equal(2);
    expect(ellipses[0].attrs.rx).to.equal(3);
    expect(ellipses[0].attrs.ry).to.equal(4);

  });

});
