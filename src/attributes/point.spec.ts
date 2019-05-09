import { expect } from "chai";
import { AttributeTestSuite, buildTestHarness } from "../util/test-env";
import { dimension } from "./dimension";
import { Point, point } from "./point";

export function pointTest<A extends string>(attr: A): AttributeTestSuite<A, Point> {
  return (builder) => {

    describe(`${attr}: Point`, () => {

      it("number, number", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = point(1, 2);
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

      it("Dimension<px>, Dimension<px>", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = point(dimension(1, "px"), dimension(2, "px"));
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

      it("Dimension<em>, Dimension<em>", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = point(dimension(1, "em"), dimension(2, "em"));
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

      it("Dimension<%>, Dimension<%>", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = point(dimension(25, "%"), dimension(50, "%"));
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

    });

  };
}
