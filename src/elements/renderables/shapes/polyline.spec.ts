import { expect } from "chai";
import { Point } from "../../../attributes";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../test-utils";
import { Polyline } from "./polyline";

describe("polyline", () => {

  describe("constructor", () => {

    it("creates a <polyline> with [Point[]]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const points = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6),
      ];

      const el = new Polyline(context, points);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const polylines = extractNodes(doc, "polyline");

      expect(polylines).to.have.length(1);
      expect(polylines[0].attrs.points).to.equal("1,2\t3,4\t5,6");

    });

  });

  describe("method in context", () => {

    it("creates a <polyline> with [Point[]]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const points = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6),
      ];

      const el = context.polyline(points);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const polylines = extractNodes(doc, "polyline");

      expect(polylines).to.have.length(1);
      expect(polylines[0].attrs.points).to.equal("1,2\t3,4\t5,6");

    });

  });

});
