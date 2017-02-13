namespace SavageDOM {

  export class Paper {
    public root: SVGSVGElement;
    public defs: Element<SVGDefsElement, any, any>;
    constructor();
    constructor(id: string);
    constructor(el: SVGSVGElement);
    constructor(root?: string | SVGSVGElement) {
      if (root) {
        if (typeof root === "string") {
          const el = window.document.getElementById(root);
          if (el instanceof SVGSVGElement) {
            this.root = el;
          } else {
            throw new Error("Element with specified ID is not valid");
          }
        } else {
          this.root = root;
        }
      } else {
        this.root = window.document.createElementNS(XMLNS, "svg") as SVGSVGElement;
        window.document.body.appendChild(this.root);
      }
      this.root.setAttribute("xmlns", XMLNS);
      this.root.setAttributeNS(XMLNS, "xlink", XLINK);
      this.root.setAttribute("version", "1.1");
      const defsElements = this.root.getElementsByTagName("defs");
      if (defsElements.length > 0) {
        this.defs = new Element<SVGDefsElement, any, any>(this, defsElements.item(0));
      } else {
        this.defs = new Element<SVGDefsElement, any, any>(this, "defs");
      }
    }
    public addDef(def: Element<SVGElement, any, any>) {
      this.defs.add(def);
    }

  }

}