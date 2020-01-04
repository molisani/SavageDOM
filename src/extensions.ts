import { computeActualEffectTiming, SVGAnimation, SVGEffectTiming, SVGRenderer } from "./animations";
import { getAttribute, SavageDOMAttributes, setAttribute } from "./attributes";
import { SVGElementTagName, XMLNS } from "./constants";
import { element, SavageDOMElement, wrap } from "./element";
import { getInterpolator, SVGPropertyInterpolators } from "./interpolators";
import { matrix } from "./transforms";

export function add(element: SavageDOMElement, child: SVGElement, prefix: boolean = false) {
  (prefix) ? element.prepend(child) : element.append(child);
}

function _assignProperties<ELEMENT extends SVGElement>(element: SavageDOMElement<ELEMENT>, props: Partial<SavageDOMAttributes<ELEMENT>>) {
  for (const [key, value] of Object.entries(props)) {
    element.set(key as any, value as any);
  }
}

export function createChild(parent: SVGElement, tagName: SVGElementTagName, props?: SavageDOMAttributes): SavageDOMElement {
  if (!parent.ownerDocument) {
    throw new Error("Parent element has no owner document");
  }
  const child = parent.ownerDocument.createElementNS(XMLNS.SVG, tagName);
  parent.append(child);
  const wrapped = wrap(child);
  if (props) {
    _assignProperties(wrapped, props);
  }
  return wrapped;
}

interface SVGDocument extends Document {
  children: HTMLCollection & [SVGSVGElement];
}

function _isSVGDocument(doc: Document): doc is SVGDocument {
  return doc.children.length === 1 && doc.children[0] instanceof SVGSVGElement;
}

function _importDocument(svg: SVGElement, foreignDocument: Document): SVGGElement {
  const localRoot = svg.ownerSVGElement;
  const localDocument = svg.ownerDocument;
  if (!localRoot || !localDocument) {
    throw new Error("Target element must live inside a <svg>");
  }
  if (!_isSVGDocument(foreignDocument)) {
    throw new Error("Can only inject SVG documents (with <svg> as root node)");
  }
  const foreignRoot = foreignDocument.children[0];
  for (const foreignDefs of Array.from(foreignRoot.getElementsByTagNameNS(XMLNS.SVG, "defs"))) {
    foreignRoot.removeChild(foreignDefs);
    localRoot.append(foreignDefs);
  }
  const g = localDocument.createElementNS(XMLNS.SVG, "g");
  for (const child of Array.from(foreignRoot.children)) {
    const importedChild = localDocument.importNode(child as SVGElement, true);
    g.append(importedChild);
  }
  return g;
}

function _mapCollection(collection: HTMLCollection, map: (element: SVGElement) => SavageDOMElement): ArrayLike<SavageDOMElement> {
  return new Proxy(collection, {
    get: (_obj: any, key: keyof HTMLCollection) => {
      if (key === "length") {
        return collection.length;
      }
      if (key in collection) {
        return map(collection[key] as any);
      }
    },
  });
}

export const SavageDOMElementPrototype = {
  get: function(this: SavageDOMElement, key: string): any {
    return getAttribute(this, key as any)[1];
  },
  set: function(this: SavageDOMElement, ...args: [string, any] | [object]) {
    (args.length === 1) ? setAttribute(this, args[0]) : setAttribute(this, args[0], args[1]);
  },
  animateTo: function(this: SavageDOMElement, timing: SVGEffectTiming, keyOrProps: any, value?: any) {
    const computedTiming = computeActualEffectTiming(timing);
    const interpolators: SVGPropertyInterpolators<any> = {};
    if (typeof keyOrProps === "string") {
      interpolators[keyOrProps] = getInterpolator(this, keyOrProps as any, value);
    } else {
      for (const [key, val] of Object.entries(keyOrProps)) {
        interpolators[key] = getInterpolator(this, key as any, val);
      }
    }
    const renderer = SVGRenderer.getFromWindow(window);
    return renderer.enqueue(computedTiming, this as any, interpolators);
  },
  once: function(this: SavageDOMElement, type: string) {
    return new Promise((res) => this.addEventListener(type, res, { once: true }));
  },
  rm: function(this: SavageDOMElement, child: SVGElement) {
    this.removeChild(child)
  },
  inject: function(this: SavageDOMElement, doc: Document): any {
    const imported = _importDocument(this, doc);
    add(this, imported);
    return wrap(imported);
  },
  sub: function(this: SavageDOMElement): any {
    return _mapCollection(this.children, wrap);
  },
  subByTag: function(this: SavageDOMElement, tagName: SVGElementTagName): any {
    const collection = this.getElementsByTagNameNS(XMLNS.SVG, tagName);
    return _mapCollection(collection, wrap);
  },
} as const;

export function transplant(group: SVGGElement, target: SVGGraphicsElement, timing: SVGEffectTiming): SVGAnimation {
  const temp = element.g();
  let finished = Promise.resolve();
  if (target.ownerSVGElement) {
    target.ownerSVGElement.appendChild(temp);
    const screenCTM = target.ownerSVGElement.getScreenCTM();
    if (screenCTM) {
      const inverseScreenCTM = screenCTM.inverse();
      const childMatrix = target.getScreenCTM();
      if (childMatrix) {
        const transform = target.ownerSVGElement?.createSVGTransformFromMatrix(inverseScreenCTM.multiply(childMatrix));
        temp.transform.baseVal.initialize(transform);
        temp.appendChild(target);
      }
      const groupMatrix = group.getScreenCTM();
      if (groupMatrix) {
        const transformList = [matrix(inverseScreenCTM.multiply(groupMatrix))];
        finished = temp.animateTo(timing, "transform", transformList).finished;
      }
    }
  }
  finished = finished.then(() => {
    group.appendChild(target);
    temp.remove();
  });
  return { finished };
}
