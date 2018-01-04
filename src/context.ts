namespace SavageDOM {

  function initializeRoot(root: SVGSVGElement): SVGDefsElement {
    root.setAttribute("xmlns", XMLNS);
    root.setAttributeNS(XMLNS, "xlink", XLINK);
    root.setAttribute("version", "1.1");
    const defs = root.querySelector("defs");
    if (defs !== null) {
      return defs;
    }
    return root.appendChild(window.document.createElementNS(XMLNS, "defs"));
  }

  interface ElementConstructor<E, Attrs> {
    new(context: Context, attrs?: Partial<Attrs>): E;
  }

  export class Context {
    private _root: SVGSVGElement;
    private _defs: Element<SVGDefsElement, any, any>;
    private _target: SVGElement;
    constructor();
    constructor(id: string);
    constructor(el: SVGSVGElement);
    constructor(root?: string | SVGSVGElement) {
      if (root) {
        if (typeof root === "string") {
          const el = window.document.getElementById(root);
          if (el instanceof SVGSVGElement) {
            this._root = el;
          } else {
            throw new Error("Element with specified ID is not valid");
          }
        } else {
          this._root = root;
        }
      } else {
        this._root = window.document.createElementNS(XMLNS, "svg") as SVGSVGElement;
        window.document.body.appendChild(this._root);
      }
      this._root.setAttribute("xmlns", XMLNS);
      this._root.setAttributeNS(XMLNS, "xlink", XLINK);
      this._root.setAttribute("version", "1.1");
      const defsElements = this._root.getElementsByTagName("defs");
      if (defsElements.length > 0) {
        this._defs = new Element<SVGDefsElement, any, any>(this, defsElements.item(0));
      } else {
        this._defs = new Element<SVGDefsElement, any, any>(this, "defs");
      }
      this._target = this._root;
    }
    public addDef(def: Element<SVGElement, any, any>) {
      this._defs.add(def);
    }
    public addChild(el: SVGElement | Element<SVGElement, any, any>) {
      this._target.appendChild((el instanceof Element) ? el.node : el);
    }
  }

}
