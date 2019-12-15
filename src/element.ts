import { SVGAnimation, SVGEffectTiming } from "./animations";
import { SavageDOMAttributes } from "./attributes";
import { SVGElementTagName, SVGElementTagNames, XMLNS } from "./constants";
import { add, createChild, SavageDOMElementPrototype } from "./extensions";
import { SVGElementStyleTagNameMap, SVGStyleType } from "./style";

interface AttributeAccessor<PROPS> {
  get<KEY extends keyof PROPS>(key: NonNullable<KEY>): PROPS[KEY];
  set(props: Partial<PROPS>): void;
  set<KEY extends keyof PROPS>(key: NonNullable<KEY>, value: PROPS[KEY]): void;
  animateTo(timing: SVGEffectTiming, props: Partial<PROPS>): SVGAnimation;
  animateTo<KEY extends keyof PROPS>(timing: SVGEffectTiming, key: NonNullable<KEY>, value: PROPS[KEY]): SVGAnimation;
}

interface SVGEventEmitter {
  once<EVENT extends keyof SVGElementEventMap>(type: EVENT): Promise<SVGElementEventMap[EVENT]>;
}

type ElementCollectionsByTagName = {
  [TAG in SVGElementTagName]: ArrayLike<SavageDOMElement<SVGElementTagNameMap[TAG], SVGElementStyleTagNameMap[TAG]>>;
};

type SavageDOMElementConstructor<ELEMENT extends SVGElement = SVGElement> = (props?: Partial<SavageDOMAttributes<ELEMENT> & SVGStyleType<ELEMENT>>) => SavageDOMElement<ELEMENT>;

type ElementWrapper = <ELEMENT extends SVGElement = SVGElement>(element: ELEMENT) => SavageDOMElement<ELEMENT>;

type ElementCreator = {
  [TAG in SVGElementTagName]: SavageDOMElementConstructor<SVGElementTagNameMap[TAG]>;
};

interface SVGParent {
  add: ElementCreator & ((element: SVGElement, prefix?: boolean) => void);
  rm(element: SVGElement): void;
  inject(doc: Document): SavageDOMElement<SVGGElement>;
  sub(): ArrayLike<SavageDOMElement>;
  subByTag<TAG extends SVGElementTagName>(tagName: TAG): ArrayLike<SavageDOMElement<SVGElementTagNameMap[TAG], SVGElementStyleTagNameMap[TAG]>>;
}

export type SavageDOMElement<ELEMENT extends SVGElement = SVGElement, STYLE = SVGStyleType<ELEMENT>> = Omit<ELEMENT, "__SavageDOMStyleProperties"> & AttributeAccessor<SavageDOMAttributes<ELEMENT> & STYLE> & SVGEventEmitter & SVGParent;

const __symbol = Symbol("SavageDOMElement");

export function isSavageDOMElement<ELEMENT extends SVGElement>(element: ELEMENT): element is ELEMENT & SavageDOMElement<ELEMENT>;
export function isSavageDOMElement(element: unknown): element is SavageDOMElement;
export function isSavageDOMElement(element: any): element is SavageDOMElement {
  return Object.prototype.hasOwnProperty.call(element, __symbol);
}

function _wrap<ELEMENT extends SVGElement>(element: ELEMENT): SavageDOMElement<ELEMENT> {
  if (isSavageDOMElement(element)) {
    return element;
  }
  Object.defineProperty(element, __symbol, { value: null });
  Object.assign(element, SavageDOMElementPrototype);
  Object.defineProperty(element, "add", {
    value: new Proxy(add, {
      get: (_obj, tagName: SVGElementTagName) => {
        return createChild.bind(void 0, element, tagName);
      }
    }),
  });
  return element as any as SavageDOMElement<ELEMENT>;
}

export function wrap<ELEMENT extends SVGElement>(element: ELEMENT, props?: Partial<SavageDOMAttributes<ELEMENT> & SVGStyleType<ELEMENT>>): SavageDOMElement<ELEMENT> {
  const wrappedElement = _wrap(element);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      wrappedElement.set(key as any, value as any);
    }
  }
  return wrappedElement;
}

const _creator = (() => {
  const creator = Object.create(null);
  for (const tagName of SVGElementTagNames) {
    creator[tagName] = (properties: any) => wrap(document.createElementNS(XMLNS.SVG, tagName), properties);
  }
  return creator as ElementCreator;
})();

export const element = Object.assign(wrap, _creator);
