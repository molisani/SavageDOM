import { expect } from "chai";
import { point } from "../../../attributes";
import { buildTestHarness, extractNodes } from "../../../util/test-env";
import { Circle } from "./circle";

describe("Circle", () => {

  describe(".create()", () => {

    it("creates a <circle> with [Point, Length]", async () => {

      const { context, getDocumentsOf } = buildTestHarness();

      const el = Circle.create(context, { x: 1, y: 2 }, 5);

      const doc = (await getDocumentsOf(el))[0];
      const circles = extractNodes(doc, "circle");

      expect(circles).to.have.length(1);
      expect(circles[0].attrs.cx).to.equal("1");
      expect(circles[0].attrs.cy).to.equal("2");
      expect(circles[0].attrs.r).to.equal("5");

    });

  });

  describe("attributes", () => {

    describe("cx: Length", () => {

      it("number", async () => {

        const { context, getDocumentsOf } = buildTestHarness();

        const el = Circle.new(context);

        el.setAttribute("cx", 12);

        const doc = (await getDocumentsOf(el))[0];
        const circles = extractNodes(doc, "circle");

        expect(circles).to.have.length(1);
        expect(circles[0].attrs.cx).to.equal("12");

        const value = el.getAttribute("cx");
        expect(value).to.deep.equal(12);

      });

    });

    describe("cy: Length", () => {

      it("number", async () => {

        const { context, getDocumentsOf } = buildTestHarness();

        const el = Circle.new(context);

        el.setAttribute("cy", 12);

        const doc = (await getDocumentsOf(el))[0];
        const circles = extractNodes(doc, "circle");

        expect(circles).to.have.length(1);
        expect(circles[0].attrs.cy).to.equal("12");

        const value = el.getAttribute("cy");
        expect(value).to.deep.equal(12);

      });

    });

    describe("c: Point", () => {

      it("Point<number, number>", async () => {

        const { context, getDocumentsOf } = buildTestHarness();

        const el = Circle.new(context);

        el.setAttribute("c", point(1, 2));

        const doc = (await getDocumentsOf(el))[0];
        const circles = extractNodes(doc, "circle");

        expect(circles).to.have.length(1);
        expect(circles[0].attrs.cx).to.equal("1");
        expect(circles[0].attrs.cy).to.equal("2");

        const value = el.getAttribute("c");
        expect(value).to.deep.equal(point(1, 2));

      });

    });

    describe("r: Length", () => {

      it("number", async () => {

        const { context, getDocumentsOf } = buildTestHarness();

        const el = Circle.new(context);

        el.setAttribute("r", 8);

        const doc = (await getDocumentsOf(el))[0];
        const circles = extractNodes(doc, "circle");

        expect(circles).to.have.length(1);
        expect(circles[0].attrs.r).to.equal("8");

        const value = el.getAttribute("r");
        expect(value).to.deep.equal(8);

      });

    });

  });

});
