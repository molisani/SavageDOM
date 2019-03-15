import { expect } from "chai";
import { Point } from "../../../attributes/point";
import { buildContextWithRenderer as buildTestContextWithRenderer, extractNodes, reparseDOM } from "../../../test-utils";
import { Line } from "./line";

describe("line", () => {

  describe("constructor", () => {

    it("creates a <line> with [Point, Point]", async () => {

      const { context, renderer } = buildTestContextWithRenderer();

      const p1 = new Point(1, 2);
      const p2 = new Point(3, 4);

      const el = new Line(context, p1, p2);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const lines = extractNodes(doc, "line");

      expect(lines).to.have.length(1);
      expect(lines[0].attrs.x1).to.equal(1);
      expect(lines[0].attrs.y1).to.equal(2);
      expect(lines[0].attrs.x2).to.equal(3);
      expect(lines[0].attrs.y2).to.equal(4);

    });

    it("creates a <line> with [Length, Length, Length, Length]", async () => {

      const { context, renderer } = buildTestContextWithRenderer();

      const x1 = 1;
      const y1 = 2;
      const x2 = 3;
      const y2 = 4;

      const el = new Line(context, x1, y1, x2, y2);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const lines = extractNodes(doc, "line");

      expect(lines).to.have.length(1);
      expect(lines[0].attrs.x1).to.equal(1);
      expect(lines[0].attrs.y1).to.equal(2);
      expect(lines[0].attrs.x2).to.equal(3);
      expect(lines[0].attrs.y2).to.equal(4);

    });

  });

  describe("method in context", () => {

    it("creates a <line> with [Point, Length]", async () => {

      const { context, renderer } = buildTestContextWithRenderer();

      const p1 = new Point(1, 2);
      const p2 = new Point(3, 4);

      const el = context.line(p1, p2);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const lines = extractNodes(doc, "line");

      expect(lines).to.have.length(1);
      expect(lines[0].attrs.x1).to.equal(1);
      expect(lines[0].attrs.y1).to.equal(2);
      expect(lines[0].attrs.x2).to.equal(3);
      expect(lines[0].attrs.y2).to.equal(4);

    });

    it("creates a <line> with [Length, Length, Length]", async () => {

      const { context, renderer } = buildTestContextWithRenderer();

      const x1 = 1;
      const y1 = 2;
      const x2 = 3;
      const y2 = 4;

      const el = context.line(x1, y1, x2, y2);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const lines = extractNodes(doc, "line");

      expect(lines).to.have.length(1);
      expect(lines[0].attrs.x1).to.equal(1);
      expect(lines[0].attrs.y1).to.equal(2);
      expect(lines[0].attrs.x2).to.equal(3);
      expect(lines[0].attrs.y2).to.equal(4);

    });

  });

});
