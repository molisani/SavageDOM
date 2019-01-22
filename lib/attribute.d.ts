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
export declare const isAttribute: (obj: any) => obj is Attribute<any>;
