import { expect } from "chai";
import { Point } from "../../../attributes/point";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../test-utils";
import { Ellipse } from "./ellipse";

describe("ellipse", () => {

  describe("constructor", () => {

    it("creates a <ellipse> with [Point, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const c = new Point(1, 2);
      const r = new Point(3, 4);

      const el = new Ellipse(context, c, r);

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

    it("creates a <ellipse> with [Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const cx = 1;
      const cy = 2;
      const rx = 3;
      const ry = 4;

      const el = new Ellipse(context, cx, cy, rx, ry);

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

  describe("method in context", () => {

    it("creates a <ellipse> with [Point, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const c = new Point(1, 2);
      const r = new Point(3, 4);

      const el = context.ellipse(c, r);

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

    it("creates a <ellipse> with [Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const cx = 1;
      const cy = 2;
      const rx = 3;
      const ry = 4;

      const el = context.ellipse(cx, cy, rx, ry);

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

});
