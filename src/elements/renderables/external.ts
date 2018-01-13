namespace SavageDOM.Elements.Renderables {

  // export class ExternalSVG extends Group {
  //   constructor(context: Context, doc: ExternalDocument, attrs?: Partial<Renderable_Attributes>) {
  //     super(context, attrs);
  //     doc.children.forEach((child) => {
  //       const importedNode = context.window.document.importNode(child, true);
  //       context.addChild(importedNode);
  //     });
  //   }
  // }

}

namespace SavageDOM {

  export class ExternalDocument {
    private static PARSER = new DOMParser();
    private _document: Document;
    constructor(context: Context, raw: string | Document, mimeType: string = "application/xml") {
      this._document = (raw instanceof Document) ? raw : ExternalDocument.PARSER.parseFromString(raw, mimeType);
      const allDefs = Array.from(this._document.getElementsByTagName("defs"));
      allDefs.forEach((defs) => {
        const rmDefs = this._document.removeChild(defs);
        while (rmDefs.children.length > 0) {
          context.addDef(rmDefs.children[0] as SVGElement);
        }
      });
    }
    public get children(): SVGElement[] {
      return Array.of<SVGElement>(this._document.documentElement.children as any);
    }
  }

  const makeRequest = (method, url): Promise<Document> => {
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

  // export interface Context {
  //   load(url: string): Promise<Elements.Renderables.ExternalSVG>;
  // }

  // Context.prototype.load = async function(this: Context, url: string): Promise<Elements.Renderables.ExternalSVG> {
  //   const xmlDocument = await makeRequest("GET", url);
  //   const externalDocument = new ExternalDocument(this, xmlDocument);
  //   return new Elements.Renderables.ExternalSVG(this, externalDocument);
  // };

}
