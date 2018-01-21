import { Element } from "./element";

export interface Setter {
  set(element: SVGElement, attr: string, override?: any): void;
}

export interface Attribute<T> extends Setter {
  toString(override?: T): string;
  parse(css: string | null): T;
  get(element: SVGElement, attr: string): T;
  set(element: SVGElement, attr: string, override?: T): void;
  interpolate(from: T, t: number): T;
}

export function _defaultGet<T>(this: Attribute<T>, element: SVGElement, attr: string): T {
  return this.parse(element.getAttribute(attr));
}

export function _defaultSet<T>(this: T, element: SVGElement, attr: string, override?: T) {
  const value = (typeof override === "undefined") ? this : override;
  element.setAttribute(attr, String(value));
}

export const isAttribute = (obj: any | Attribute<any>): obj is Attribute<any> => {
  return obj && (typeof obj["interpolate"] === "function") && (typeof obj["parse"] === "function");
};
