import { expect } from "chai";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../../tests/common";
import { Point } from "../../../attributes/point";
import { Circle } from "./circle";

describe("circle", () => {

  describe("constructor", () => {

    it("creates a <circle> with [Point, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const c = new Point(1, 2);
      const r = 5;

      const el = new Circle(context, c, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const circles = extractNodes(doc, "circle");

      expect(circles).to.have.length(1);
      expect(circles[0].attrs.cx).to.equal(1);
      expect(circles[0].attrs.cy).to.equal(2);
      expect(circles[0].attrs.r).to.equal(5);

    });

    it("creates a <circle> with [Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const cx = 1;
      const cy = 2;
      const r = 5;

      const el = new Circle(context, cx, cy, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const circles = extractNodes(doc, "circle");

      expect(circles).to.have.length(1);
      expect(circles[0].attrs.cx).to.equal(1);
      expect(circles[0].attrs.cy).to.equal(2);
      expect(circles[0].attrs.r).to.equal(5);

    });

  });

  describe("method in context", () => {

    it("creates a <circle> with [Point, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const c = new Point(1, 2);
      const r = 5;

      const el = context.circle(c, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const circles = extractNodes(doc, "circle");

      expect(circles).to.have.length(1);
      expect(circles[0].attrs.cx).to.equal(1);
      expect(circles[0].attrs.cy).to.equal(2);
      expect(circles[0].attrs.r).to.equal(5);

    });

    it("creates a <circle> with [Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const cx = 1;
      const cy = 2;
      const r = 5;

      const el = context.circle(cx, cy, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const circles = extractNodes(doc, "circle");

      expect(circles).to.have.length(1);
      expect(circles[0].attrs.cx).to.equal(1);
      expect(circles[0].attrs.cy).to.equal(2);
      expect(circles[0].attrs.r).to.equal(5);

    });

  });

});
