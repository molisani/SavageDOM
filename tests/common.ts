import { JSDOM } from "jsdom";
import { timer } from "rxjs";
import { Element as XMLJSElement, xml2js } from "xml-js";
import { Renderer } from "../src/animation";
import { Context } from "../src/context";
import { Element } from "../src/element";

export function buildContextWithRenderer() {
  const jsdom = new JSDOM("<!doctype html><html><body><svg id='root'></svg></body></html>");

  const renderer = new Renderer(timer(0));

  const context = new Context("root", jsdom.window, renderer);

  const extract = (el: Element<SVGElement>) => {
    const doc = xml2js(el.node.outerHTML) as XMLJSElement;
    if (doc.elements) {
      return doc.elements[0];
    }
    throw new Error();
  };

  return {
    context,
    renderer,
    extract,
  };
}
