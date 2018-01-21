import { Context } from "./context";

export class SVGDocument {
  private static PARSER = new DOMParser();
  private _document: Document;
  constructor(context: Context, raw: string | Document, mimeType: string = "application/xml") {
    this._document = (raw instanceof Document) ? raw : SVGDocument.PARSER.parseFromString(raw, mimeType);
    const allDefs = Array.from(this._document.getElementsByTagName("defs"));
    allDefs.forEach((defs) => {
      if (defs.parentNode) {
        const rmDefs = defs.parentNode.removeChild(defs);
        while (rmDefs.children.length > 0) {
          context.addDef(rmDefs.children[0] as SVGElement);
        }
      }
    });
  }
  public get children(): SVGElement[] {
    return Array.prototype.slice.call(this._document.documentElement.children);
  }
}

export const makeRequest = (method, url): Promise<Document> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const xml = xhr.responseXML;
        if (xml !== null) {
          resolve(xml);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      }
    };
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
};
