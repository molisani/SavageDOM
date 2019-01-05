import { expect } from "chai";
import { Box, Point } from "../../../attributes";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../test-utils";
import { Rect } from "./rect";

describe("rect", () => {

  describe("constructor", () => {

    it("creates a <rect> with [Box]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const box = new Box(1, 2, 3, 4);

      const el = new Rect(context, box);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);

    });

    it("creates a <rect> with [Box, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const box = new Box(1, 2, 3, 4);
      const r = new Point(5, 6);

      const el = new Rect(context, box, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Box, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const box = new Box(1, 2, 3, 4);
      const rx = 5;
      const ry = 6;

      const el = new Rect(context, box, rx, ry);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Point, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const p = new Point(1, 2);
      const width = 3;
      const height = 4;

      const el = new Rect(context, p, width, height);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);

    });

    it("creates a <rect> with [Point, Length, Length, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const p = new Point(1, 2);
      const width = 3;
      const height = 4;
      const r = new Point(5, 6);

      const el = new Rect(context, p, width, height, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Point, Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const p = new Point(1, 2);
      const width = 3;
      const height = 4;
      const rx = 5;
      const ry = 6;

      const el = new Rect(context, p, width, height, rx, ry);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const x = 1;
      const y = 2;
      const width = 3;
      const height = 4;

      const el = new Rect(context, x, y, width, height);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);

    });

    it("creates a <rect> with [Length, Length, Length, Length, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const x = 1;
      const y = 2;
      const width = 3;
      const height = 4;
      const r = new Point(5, 6);

      const el = new Rect(context, x, y, width, height, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Length, Length, Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const x = 1;
      const y = 2;
      const width = 3;
      const height = 4;
      const rx = 5;
      const ry = 6;

      const el = new Rect(context, x, y, width, height, rx, ry);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

  });

  describe("method in context", () => {

    it("creates a <rect> with [Box]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const box = new Box(1, 2, 3, 4);

      const el = context.rect(box);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);

    });

    it("creates a <rect> with [Box, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const box = new Box(1, 2, 3, 4);
      const r = new Point(5, 6);

      const el = context.rect(box, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Box, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const box = new Box(1, 2, 3, 4);
      const rx = 5;
      const ry = 6;

      const el = context.rect(box, rx, ry);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Point, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const p = new Point(1, 2);
      const width = 3;
      const height = 4;

      const el = context.rect(p, width, height);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);

    });

    it("creates a <rect> with [Point, Length, Length, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const p = new Point(1, 2);
      const width = 3;
      const height = 4;
      const r = new Point(5, 6);

      const el = context.rect(p, width, height, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Point, Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const p = new Point(1, 2);
      const width = 3;
      const height = 4;
      const rx = 5;
      const ry = 6;

      const el = context.rect(p, width, height, rx, ry);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const x = 1;
      const y = 2;
      const width = 3;
      const height = 4;

      const el = context.rect(x, y, width, height);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);

    });

    it("creates a <rect> with [Length, Length, Length, Length, Point]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const x = 1;
      const y = 2;
      const width = 3;
      const height = 4;
      const r = new Point(5, 6);

      const el = context.rect(x, y, width, height, r);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

    it("creates a <rect> with [Length, Length, Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const x = 1;
      const y = 2;
      const width = 3;
      const height = 4;
      const rx = 5;
      const ry = 6;

      const el = context.rect(x, y, width, height, rx, ry);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const rects = extractNodes(doc, "rect");

      expect(rects).to.have.length(1);
      expect(rects[0].attrs.x).to.equal(1);
      expect(rects[0].attrs.y).to.equal(2);
      expect(rects[0].attrs.width).to.equal(3);
      expect(rects[0].attrs.height).to.equal(4);
      expect(rects[0].attrs.rx).to.equal(5);
      expect(rects[0].attrs.ry).to.equal(6);

    });

  });

});
