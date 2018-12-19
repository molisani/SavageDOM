import { Context } from "./context";
export declare class SVGDocument {
    private static PARSER;
    private _document;
    constructor(context: Context, raw: string | Document, mimeType?: SupportedType);
    readonly children: SVGElement[];
}
export declare const makeRequest: (method: string, url: string) => Promise<Document>;
