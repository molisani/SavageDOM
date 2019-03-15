import { expect } from "chai";
import { PathSegment } from "../../../attributes";
import { buildContextWithRenderer, extractNodes, reparseDOM } from "../../../test-utils";
import { Path } from "./path";

describe("path", () => {

  describe("constructor", () => {

    it("creates a <path> with [PathSegment[], number]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const d: PathSegment[] = [];
      const pathLength = 10;

      const el = new Path(context, d, pathLength);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const paths = extractNodes(doc, "path");

      expect(paths).to.have.length(1);
      expect(paths[0].attrs.pathLength).to.equal(10);

    });

  });

  describe("method in context", () => {

    it("creates a <path> with [PathSegment[], number]", async () => {

      const { context, renderer } = buildContextWithRenderer();

      const d: PathSegment[] = [];
      const pathLength = 10;

      const el = context.path(d, pathLength);

      await el.flush();
      await renderer.stopRendering();

      const doc = reparseDOM(el);
      const paths = extractNodes(doc, "path");

      expect(paths).to.have.length(1);
      expect(paths[0].attrs.pathLength).to.equal(10);

    });

  });

});
