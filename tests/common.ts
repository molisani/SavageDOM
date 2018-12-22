import { parse } from "fast-xml-parser";
import { JSDOM } from "jsdom";
import { timer } from "rxjs";
import { Renderer } from "../src/animation";
import { Context } from "../src/context";
import { Element } from "../src/element";

export interface XmlAttributes {
  [attrName: string]: number | string;
}

export interface XmlNode {
  attrs: XmlAttributes;
}

export type XmlElement = XmlNode & XmlParent;

export interface XmlParent {
  [tagName: string]: XmlElement | XmlElement[] | undefined;
}

export function buildContextWithRenderer() {
  const jsdom = new JSDOM("<!doctype html><html><body><svg id='root'></svg></body></html>");

  const renderer = new Renderer(timer(0));

  const context = new Context("root", jsdom.window, renderer);

  return {
    context,
    renderer,
  };
}

export function reparseDOM(el: Element<SVGElement>): XmlElement {
  const doc = parse(`<a a1="1"/><a a2="2"/>${el.node.outerHTML}`, {
    attributeNamePrefix: "",
    attrNodeName: "attrs",
    ignoreAttributes: false,
    parseAttributeValue: true,
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
