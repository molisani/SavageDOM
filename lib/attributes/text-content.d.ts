import { Attribute } from "../attribute";
export declare class TextContent implements Attribute<TextContent> {
    private static escapeHtml;
    private _cb;
    constructor(str: string);
    constructor(cb: () => string);
    toString(): string;
    parse(css: string | null): TextContent;
    get<Attrs, A extends keyof Attrs>(element: SVGElement, attr: A): TextContent;
    set<Attrs, A extends keyof Attrs>(element: SVGElement, attr: A, override?: TextContent): void;
    interpolator(from: TextContent): (t: number) => TextContent;
}
