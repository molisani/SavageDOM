import { Element } from "./element";

export interface Setter {
  set(element: SVGElement, attr: string, override?: any): void;
}

export interface Attribute<T> extends Setter {
  toString(override?: T): string;
  parse(css: string | null): T;
  get(element: SVGElement, attr: string): T;
  set(element: SVGElement, attr: string, override?: T): void;
  interpolator(from: T): (t: number) => T;
}

export const isAttribute = (obj: any | Attribute<any>): obj is Attribute<any> => {
  return obj && (typeof obj["interpolator"] === "function") && (typeof obj["parse"] === "function");
};
