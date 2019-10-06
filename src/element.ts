import { getAttribute, setAttribute } from "./attributes";
import { SVGElementStyleTagNameMap, SVGStyleType } from "./style";
import { Transform } from "./transforms";
import { Mutable, Replace, Select } from "./ts-util";
import { Angle, Length, Point } from "./types";

type SVGElementTagName = keyof SVGElementTagNameMap;

const SVGElementTagNames = new Set<SVGElementTagName>(["a","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","path","pattern","polygon","polyline","radialGradient","rect","script","stop","style","svg","switch","symbol","text","textPath","title","tspan","use","view"]);

type ReplaceAttributes<ELEMENT extends SVGElement, T, R> = Mutable<Replace<Omit<Select<ELEMENT, T>, "className" | "animatedPoints">, R>>;

type SavageDOMAttributes<ELEMENT extends SVGElement = SVGElement> =
  & ReplaceAttributes<ELEMENT, SVGAnimatedAngle, Angle>
  & ReplaceAttributes<ELEMENT, SVGAnimatedBoolean, boolean>
  & ReplaceAttributes<ELEMENT, SVGAnimatedInteger, number>
  & ReplaceAttributes<ELEMENT, SVGAnimatedLength, Length>
  & ReplaceAttributes<ELEMENT, SVGAnimatedLengthList, readonly Length[]>
  & ReplaceAttributes<ELEMENT, SVGAnimatedNumber, number>
  & ReplaceAttributes<ELEMENT, SVGAnimatedNumberList, readonly number[]>
  & ReplaceAttributes<ELEMENT, SVGPointList, readonly Point[]>
  & ReplaceAttributes<ELEMENT, SVGAnimatedString, string>
  & ReplaceAttributes<ELEMENT, SVGAnimatedTransformList, readonly Transform[]>;

interface AttributeAccessor<PROPS> {
  get<KEY extends keyof PROPS>(key: NonNullable<KEY>): PROPS[KEY];
  set<KEY extends keyof PROPS>(key: NonNullable<KEY>, value: PROPS[KEY]): void;
}

interface SVGEventEmitter {
  once<EVENT extends keyof SVGElementEventMap>(type: EVENT): Promise<SVGElementEventMap[EVENT]>;
}

type ElementCollectionsByTagName = {
  [TAG in SVGElementTagName]: ArrayLike<SavageDOMElement<SVGElementTagNameMap[TAG], SVGElementStyleTagNameMap[TAG]>>;
};

type SavageDOMElementConstructor<ELEMENT extends SVGElement = SVGElement> = (props?: Partial<SavageDOMAttributes<ELEMENT>>) => SavageDOMElement<ELEMENT>;

type ElementWrapper = <ELEMENT extends SVGElement = SVGElement>(element: ELEMENT) => SavageDOMElement<ELEMENT>;

type ElementSearchConstructor = new(wrapFn: ElementWrapper, parent: SVGElement) => ElementCollectionsByTagName;

type ElementCreator = {
  [TAG in SVGElementTagName]: SavageDOMElementConstructor<SVGElementTagNameMap[TAG]>;
};

interface SVGParent {
  add: ElementCreator & ((element: SVGElement, prefix?: boolean) => void);
  remove(element: SVGElement): void;
  inject(doc: Document): SavageDOMElement<SVGGElement>;
  readonly sub: ArrayLike<SavageDOMElement>;
  readonly subByTag: ElementCollectionsByTagName;
}

export type SavageDOMElement<ELEMENT extends SVGElement = SVGElement, STYLE = SVGStyleType<ELEMENT>> = Omit<ELEMENT, "__SavageDOMStyleProperties"> & AttributeAccessor<SavageDOMAttributes<ELEMENT> & STYLE> & SVGEventEmitter & SVGParent;


function _assignProperties<ELEMENT extends SVGElement>(element: SavageDOMElement<ELEMENT>, props: Partial<SavageDOMAttributes<ELEMENT>>) {
  for (const [key, value] of Object.entries(props)) {
    element.set(key as any, value as any);
  }
}

function _createChild(wrapFn: ElementWrapper, parent: SVGElement, tagName: SVGElementTagName, props?: SavageDOMAttributes): SavageDOMElement {
  const child = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  parent.append(child);
  const wrapped = wrapFn(child);
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
  for (const foreignDefs of Array.from(foreignRoot.getElementsByTagNameNS("http://www.w3.org/2000/svg", "defs"))) {
    foreignRoot.removeChild(foreignDefs);
    localRoot.append(foreignDefs);
  }
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
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

const _ElementSearch = (() => {
  class ElementSearch {
    constructor(public wrapFn: ElementWrapper, public parent: SVGElement) {}
  }
  for (const tagName of SVGElementTagNames) {
    Object.defineProperty(ElementSearch.prototype, tagName, {
      get: function(this: ElementSearch) {
        const collection = this.parent.getElementsByTagNameNS("http://www.w3.org/2000/svg", tagName);
        return _mapCollection(collection, this.wrapFn);
      },
    });
  }
  return ElementSearch as any as ElementSearchConstructor;
})();

function _wrap<ELEMENT extends SVGElement>(element: ELEMENT): SavageDOMElement<ELEMENT> {
  function _add(child: SVGElement, prefix: boolean = false) {
    (prefix) ? element.prepend(child) : element.append(child);
  }
  Object.assign(element, {
    get: getAttribute.bind(void 0, element),
    set: setAttribute.bind(void 0, element),
    once: (type: string) => new Promise((res) => element.addEventListener(type, res, { once: true })),
    add: new Proxy(_add, {
      get: (_obj, tagName: SVGElementTagName) => {
        return _createChild.bind(void 0, _wrap, element, tagName);
      },
    }),
    remove: (child: SVGElement) => element.removeChild(child),
    inject: (doc: Document) => {
      const imported = _importDocument(element, doc);
      _add(imported);
      return _wrap(imported);
    },
  });
  const sub = _mapCollection(element.children, _wrap);
  Object.defineProperty(element, "sub", { get: () => sub });
  const subByTag = new _ElementSearch(_wrap, element);
  Object.defineProperty(element, "subByTag", { get: () => subByTag });
  return element as any as SavageDOMElement<ELEMENT>;
}

function wrap<ELEMENT extends SVGElement>(element: ELEMENT, props?: Partial<SavageDOMAttributes<ELEMENT>>): SavageDOMElement<ELEMENT> {
  const wrappedElement = _wrap(element);
  if (props) {
    _assignProperties(wrappedElement, props);
  }
  return wrappedElement;
}

const _creator = (() => {
  const creator = Object.create(null);
  for (const tagName of SVGElementTagNames) {
    creator[tagName] = (properties: any) => wrap(document.createElementNS("http://www.w3.org/2000/svg", tagName), properties);
  }
  return creator as ElementCreator;
})();

function _addElementCreator<T>(target: T): T & ElementCreator {
  return Object.assign(target, _creator);
}

export const element = _addElementCreator(wrap);
