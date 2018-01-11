namespace SavageDOM {

  interface ElementConstructor<E, Attrs> {
    new(context: Context, attrs?: Partial<Attrs>): E;
  }

  export class Context {
    public static DEFAULT_WINDOW: Window = window;
    private _root: SVGSVGElement;
    private _defs: Element<SVGDefsElement, any, any>;
    private _target: SVGElement;
    constructor();
    constructor(id: string, window?: Window);
    constructor(el: SVGSVGElement, window?: Window);
    constructor(root?: string | SVGSVGElement, private _window: Window = Context.DEFAULT_WINDOW) {
      if (root) {
        if (typeof root === "string") {
          const el = this._window.document.getElementById(root);
          if (el instanceof SVGSVGElement) {
            this._root = el;
          } else {
            throw new Error("Element with specified ID is not valid");
          }
        } else {
          this._root = root;
        }
      } else {
        this._root = this._window.document.createElementNS(XMLNS, "svg") as SVGSVGElement;
        this._window.document.body.appendChild(this._root);
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
    public get window(): Window {
      return this._window;
    }
    public addDef(def: SVGElement | Element<SVGElement, any, any>) {
      this._defs.add(def);
    }
    public addChild(el: SVGElement | Element<SVGElement, any, any>) {
      this._target.appendChild((el instanceof Element) ? el.node : el);
    }
  }

}
