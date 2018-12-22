import { expect } from "chai";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../../tests/common";
import { Point } from "../../../attributes/point";
import { Circle } from "./circle";

describe("circle", () => {

  it("creates a <circle>", async () => {

    const { context, renderer } = buildContextWithRenderer();

    const p = new Point(1, 2);
    const r = 10;

    const el = new Circle(context, p, r);

    await el.flush();
    await renderer.stopRendering();

    const doc = reparseDOM(el);
    const circles = extractNodes(doc, "circle");

    expect(circles).to.have.length(1);
    expect(circles[0].attrs.cx).to.equal(1);
    expect(circles[0].attrs.cy).to.equal(2);
    expect(circles[0].attrs.r).to.equal(10);

  });

});
