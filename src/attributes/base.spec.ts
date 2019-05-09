import { expect } from "chai";
import { AttributeTestSuite, buildTestHarness } from "../util/test-env";
import { Length } from "./base";
import { dimension } from "./dimension";

export function lengthTest<A extends string>(attr: A): AttributeTestSuite<A, Length> {
  return (builder) => {

    describe(`${attr}: Length`, () => {

      it("number", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = 123;
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

      it("Dimension<px>", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = dimension(10, "px");
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

      it("Dimension<em>", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = dimension(10, "em");
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

      it("Dimension<%>", async () => {
        const { context, getDocumentsOf } = buildTestHarness();
        const writeValue = dimension(50, "%");
        const el = builder(context);
        el.setAttribute(attr, writeValue);
        await getDocumentsOf(el as any);
        const readValue = el.getAttribute(attr);
        expect(readValue).to.deep.equal(writeValue);
      });

    });

  };
}
