import { expect } from "chai";
import { Point } from "../../../attributes";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../test-utils";
import { Polygon } from "./polygon";

describe("polygon", () => {

  describe("constructor", () => {

    it("creates a <polygon> with [Point[]]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const points = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6),
      ];

      const el = new Polygon(context, points);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const polygons = extractNodes(doc, "polygon");

      expect(polygons).to.have.length(1);
      expect(polygons[0].attrs.points).to.equal("1,2\t3,4\t5,6");

    });

  });

  describe("method in context", () => {

    it("creates a <polygon> with [Point[]]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const points = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6),
      ];

      const el = context.polygon(points);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const polygons = extractNodes(doc, "polygon");

      expect(polygons).to.have.length(1);
      expect(polygons[0].attrs.points).to.equal("1,2\t3,4\t5,6");

    });

  });

});
