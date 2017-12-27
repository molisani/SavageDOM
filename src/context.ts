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
    public root: SVGSVGElement;
    public defs: Element<SVGDefsElement, any, any>;
    private _target: SVGElement;
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
      this._target = this.root;
    }
    public addDef(def: Element<SVGElement, any, any>) {
      this.defs.add(def);
    }
    // Elements
    // public circle(c: Attributes.Point, r: Attributes.Length): Elements.Renderables.Shapes.Circle;
    // public circle(cx: Attributes.Length, cy: Attributes.Length, r: Attributes.Length): Elements.Renderable.Shape.Circle;
    // public circle(a1: Attributes.Length | Attributes.Point, a2: Attributes.Length, a3?: Attributes.Length): Elements.Renderable.Shape.Circle {
    //   const attrs = (a1 instanceof Attributes.Point) ? { "cx:cy": a1, r: a2 } : { cx: a1, cy: a2, r: a3 };
    //   return this._constructAndAppend(Elements.Renderable.Shape.Circle, attrs);
    // }
    // public ellipse(c: Attributes.Point, r: Attributes.Point): Elements.Renderable.Shape.Ellipse;
    // public ellipse(cx: Attributes.Length, cy: Attributes.Length, rx: Attributes.Length, ry: Attributes.Length): Elements.Renderable.Shape.Ellipse;
    // public ellipse(a1: Attributes.Length | Attributes.Point, a2: Attributes.Length | Attributes.Point, a3?: Attributes.Length, a4?: Attributes.Length): Elements.Renderable.Shape.Ellipse {
    //   let attrs = {};
    //   const a1IsPoint = a1 instanceof Attributes.Point;
    //   const a2IsPoint = a2 instanceof Attributes.Point;
    //   if (a1IsPoint && a2IsPoint) {
    //     attrs = { "cx:cy": a1, "rx:ry": a2 };
    //   } else if (!(a1IsPoint || a2IsPoint)) {
    //     attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
    //   }
    //   return this._constructAndAppend(Elements.Renderable.Shape.Ellipse, attrs);
    // }
    // public line(p1: Attributes.Point, p2: Attributes.Point): Elements.Renderable.Shape.Line;
    // public line(x1: Attributes.Length, y1: Attributes.Length, x2: Attributes.Length, y2: Attributes.Length): Elements.Renderable.Shape.Line;
    // public line(a1: Attributes.Length | Attributes.Point, a2: Attributes.Length | Attributes.Point, a3?: Attributes.Length, a4?: Attributes.Length): Elements.Renderable.Shape.Line {
    //   let attrs = {};
    //   const a1IsPoint = a1 instanceof Attributes.Point;
    //   const a2IsPoint = a2 instanceof Attributes.Point;
    //   if (a1IsPoint && a2IsPoint) {
    //     attrs = { "x1:y1": a1, "x2:y2": a2 };
    //   } else if (!(a1IsPoint || a2IsPoint)) {
    //     attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
    //   }
    //   return this._constructAndAppend(Elements.Renderable.Shape.Line, attrs);
    // }
    // public path(d: PathSegment[], pathLength?: number): Elements.Renderable.Shape.Path {
    //   const attrs = { d, pathLength };
    //   return this._constructAndAppend(Elements.Renderable.Shape.Path, attrs);
    // }
    // public polygon(points: Attributes.Point[]): Elements.Renderable.Shape.Polygon {
    //   const attrs = { points };
    //   return this._constructAndAppend(Elements.Renderable.Shape.Polygon, attrs);
    // }
    // public polyline(points: Attributes.Point[]): Elements.Renderable.Shape.Polyline {
    //   const attrs = { points };
    //   return this._constructAndAppend(Elements.Renderable.Shape.Polyline, attrs);
    // }
    // public rect(box: Box, r?: Attributes.Point): Elements.Renderable.Shape.Rect;
    // public rect(box: Box, rx?: Attributes.Length, ry?: Attributes.Length): Elements.Renderable.Shape.Rect;
    // public rect(p: Attributes.Point, width: Attributes.Length, height: Attributes.Length, r?: Attributes.Point): Elements.Renderable.Shape.Rect;
    // public rect(p: Attributes.Point, width: Attributes.Length, height: Attributes.Length, rx?: Attributes.Length, ry?: Attributes.Length): Elements.Renderable.Shape.Rect;
    // public rect(x: Attributes.Length, y: Attributes.Length, width: Attributes.Length, height: Attributes.Length, r?: Attributes.Point): Elements.Renderable.Shape.Rect;
    // public rect(x: Attributes.Length, y: Attributes.Length, width: Attributes.Length, height: Attributes.Length, rx?: Attributes.Length, ry?: Attributes.Length): Elements.Renderable.Shape.Rect;
    // public rect(a1: Box | Attributes.Point | Attributes.Length, a2?: Attributes.Point | Attributes.Length, a3?: Attributes.Length, a4?: Attributes.Length | Attributes.Point, a5?: Attributes.Length | Attributes.Point, a6?: Attributes.Length): Elements.Renderable.Shape.Rect {
    //   const attrs = {};
    //   if (a1 instanceof Box) {
    //     attrs["x:y:width:height"] = a1;
    //     if (a2 instanceof Attributes.Point) {
    //       attrs["rx:ry"] = a2;
    //     } else {
    //       if (a2 !== undefined) {
    //         attrs["rx"] = a2;
    //       }
    //       if (a3 !== undefined) {
    //         attrs["ry"] = a3;
    //       }
    //     }
    //   } else if (a1 instanceof Attributes.Point) {
    //     attrs["x:y"] = a1;
    //     if (a2 !== undefined) {
    //       attrs["width"] = a2;
    //     }
    //     if (a3 !== undefined) {
    //       attrs["height"] = a3;
    //     }
    //     if (a4 instanceof Attributes.Point) {
    //       attrs["rx:ry"] = a4;
    //     } else {
    //       if (a4 !== undefined) {
    //         attrs["rx"] = a4;
    //       }
    //       if (a5 !== undefined) {
    //         attrs["ry"] = a5;
    //       }
    //     }
    //   } else {
    //     attrs["x"] = a1;
    //     if (a2 !== undefined) {
    //       attrs["y"] = a2;
    //     }
    //     if (a3 !== undefined) {
    //       attrs["width"] = a3;
    //     }
    //     if (a4 !== undefined) {
    //       attrs["height"] = a4;
    //     }
    //     if (a5 instanceof Attributes.Point) {
    //       attrs["rx:ry"] = a5;
    //     } else {
    //       if (a5 !== undefined) {
    //         attrs["rx"] = a5;
    //       }
    //       if (a6 !== undefined) {
    //         attrs["ry"] = a6;
    //       }
    //     }
    //   }
    //   return this._constructAndAppend(Elements.Renderable.Shape.Rect, attrs);
    // }
    // public foreignObject(html: HTMLElement, x: Attributes.Length, y: Attributes.Length, width: Attributes.Length, height: Attributes.Length): Elements.Renderable.ForeignObject {
    //   const el = new Elements.Renderable.ForeignObject(this, { x, y, width, height });
    //   el.addHTML(html);
    //   this._target.appendChild(el.node);
    //   return el;
    // }
    // public group(els: Element<SVGElement, any, any>[] = []): Elements.Renderable.Group {
    //   const el = new Elements.Renderable.Group(this);
    //   els.forEach(child => el.add(child));
    //   this._target.appendChild(el.node);
    //   return el;
    // }
    // public image(href: string, onload?: (img: Elements.Renderable.Image) => void): Elements.Renderable.Image {
    //   const img = new Elements.Renderable.Image(this);
    //   if (onload !== undefined) {
    //     img.getEvent("load").subscribe(() => onload(img));
    //   }
    //   img.setAttribute("href", href);
    //   this._target.appendChild(img.node);
    //   return img;
    // }
    // public text(content: TextContent[], p: Attributes.Point): Elements.Renderable.Text;
    // public text(content: TextContent[], x: Attributes.Length, y: Attributes.Length): Elements.Renderable.Text;
    // public text(content: TextContent[], a1: Attributes.Point | Attributes.Length, a2?: Attributes.Length): Elements.Renderable.Text {
    //   const attrs = (a1 instanceof Attributes.Point) ? { "x:y": a1 } : { x: a1, y: a2 };
    //   const t = new Elements.Renderable.Text(this, attrs);
    //   content.forEach(c => t.addSpan(c));
    //   this._target.appendChild(t.node);
    //   return t;
    // }
    private _constructAndAppend<E extends BaseElement, Attrs>(ElementClass: ElementConstructor<E, Attrs>, attrs?: Partial<Attrs>): E {
      const el = new ElementClass(this, attrs);
      this._target.appendChild(el.node);
      return el;
    }
  }

}
