namespace SavageDOM {

  export interface Setter {
    set<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs, override?: any): void;
  }

  export interface Attribute<T> extends Setter {
    toString(override?: T): string;
    parse(css: string | null): T;
    get<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs): T;
    set<Attrs>(element: Element<SVGElement, Attrs, any>, attr: keyof Attrs, override?: T): void;
    interpolate(from: T, t: number): T;
  }

  export function _defaultGet<T>(this: Attribute<T>, element: Element<SVGElement, any, any>, attr: string): T {
    return this.parse(element.getAttribute(attr));
  }

  export function _defaultSet<T>(this: T, element: Element<SVGElement, any, any>, attr: string, override?: T) {
    element.setAttribute(attr, (override === undefined) ? this : override);
  }

  export const isAttribute = (obj: any | Attribute<any>): obj is Attribute<any> => {
    return typeof obj["interpolate"] === "function" && typeof obj["parse"] === "function";
  };

}
