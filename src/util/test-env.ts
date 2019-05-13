import { expect } from "chai";
import { parse } from "fast-xml-parser";
import { JSDOM } from "jsdom";
import { timer } from "rxjs";
import { Renderer } from "../animation";
import { BaseAttributes } from "../attributes";
import { Context } from "../context";
import { AbstractElement } from "../element";

export interface XmlAttributes {
  [attrName: string]: string;
}

export interface XmlNode {
  attrs: XmlAttributes;
}

export type XmlElement = XmlNode & XmlParent;

export interface XmlParent {
  [tagName: string]: XmlElement | XmlElement[] | undefined;
}

export type RenderDocument = (...elements: AbstractElement<any, any>[]) => Promise<XmlElement[]>;

export function buildTestHarness() {
  const jsdom = new JSDOM("<!doctype html><html><body><svg id='root'></svg></body></html>");

  const renderer = new Renderer(timer(0));

  const context = new Context("root", jsdom.window.window, renderer);

  const getDocumentsOf = async (...elements: AbstractElement<any, any>[]) => {
    await Promise.all(elements.map((el) => el.flush()));
    await renderer.stopRendering();
    return elements.map(reparseDOM);
  };

  return {
    context,
    getDocumentsOf,
  };
}

function reparseDOM(el: AbstractElement<any, any>): XmlElement {
  const doc = parse(el.node.outerHTML, {
    attributeNamePrefix: "",
    attrNodeName: "attrs",
    ignoreAttributes: false,
    parseAttributeValue: false,
  });
  return doc;
}

export function extractNodes(el: XmlElement, tag: string): XmlNode[] {
  const lookup = el[tag];
  if (lookup) {
    if (Array.isArray(lookup)) {
      return lookup;
    }
    return [lookup];
  }
  return [];
}

export type ElementCreateFunction = (context: Context, ...args: any[]) => any;

export type ElementCreateArgs<T> = T extends (context: Context, ...args: infer A) => any ? A : [];

export type NamedArgTuple<T extends any[]> = {
  [I in keyof T]: [string, T[I]];
};

export function runCreateTest<T extends ElementCreateFunction>(create: T, tagName: string, namedArgs: NamedArgTuple<ElementCreateArgs<T>>, expected: { [attr: string]: string }) {
  const argList = Array.prototype.map.call(namedArgs, (arg: any[]) => arg[0]) as string[];

  it(`creates a <${tagName}> from [${argList.join(", ")}]`, async () => {

    const { context, getDocumentsOf } = buildTestHarness();

    const args = Array.prototype.map.call(namedArgs, (arg: any[]) => arg[1]) as ElementCreateArgs<T>;

    const element = create(context, ...args);

    const docs = await getDocumentsOf(element);

    const renderedElements = extractNodes(docs[0], tagName);

    expect(renderedElements).to.have.length(1);
    expect(renderedElements[0].attrs).to.deep.include(expected);

  });
}

export interface HasAttribute<A extends string, T> {
  setAttribute(name: A, value: T): void;
  getAttribute(name: A): T;
}

export type StringAttributes = { [attr: string]: string };

export type ElementBuilder<A extends string, T> = (context: Context) => HasAttribute<A, T>;

export interface AttributeTestSuite<T> {
  type: string;
  values: [string, T, T?][];
}

export type AttributeTests<ATTRIBUTES extends BaseAttributes> = {
  [ATTRIBUTE in keyof ATTRIBUTES]: AttributeTestSuite<ATTRIBUTES[ATTRIBUTE]>[];
};

export async function testAttribute<A extends string, T>(builder: ElementBuilder<A, T>, attr: A, writeValue: T, expectedReadValue: T = writeValue) {
  const { context, getDocumentsOf } = buildTestHarness();
  const el = builder(context);
  el.setAttribute(attr, writeValue);
  await getDocumentsOf(el as any);
  const readValue = el.getAttribute(attr);
  if (Array.isArray(expectedReadValue)) {
    expect(readValue).to.have.deep.members(expectedReadValue);
  } else {
    expect(readValue).to.deep.equal(expectedReadValue);
  }
}

export function runAttributeTests<ATTRIBUTES extends BaseAttributes>(builder: ElementBuilder<keyof ATTRIBUTES, ATTRIBUTES[keyof ATTRIBUTES]>, tests: AttributeTests<ATTRIBUTES>) {
  Object.keys(tests).forEach((attr: keyof ATTRIBUTES) => {
    const test = tests[attr];
    if (test) {
      describe(attr, () => {
        test.forEach((suite) => {
          describe(suite.type, () => {
            suite.values.forEach(([desc, writeValue, expectedReadValue]) => {
              it(desc, async () => {
                await testAttribute(builder, attr, writeValue, expectedReadValue);
              });
            });
          });
        });
      });
    }
  });
}
