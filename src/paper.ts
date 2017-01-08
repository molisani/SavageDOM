namespace vektor {

  export class Paper {
    private static runner = new AnimationRunner();
    public root: SVGSVGElement;
    public defs: SVGDefsElement;
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
        this.defs = defsElements.item(0);
      } else {
        this.defs = window.document.createElementNS(XMLNS, "defs") as SVGDefsElement;
        this.root.appendChild(this.defs);
      }
    }
    public addDef(def: Element<SVGElement, any>) {
      this.defs.appendChild(def.node);
    }
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>): (enable: boolean) => void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>, isEnabled: () => boolean): void;
    public registerDynamic<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, defs: Dynamic.Defined<Attrs>, isEnabled?: () => boolean): void | ((enable: boolean) => void) {
      if (isEnabled !== undefined) {
        Paper.runner.add({
          element, defs, progress: (now: number): number | undefined => isEnabled() ? now : undefined,
        });
      } else {
        let enabled = true;
        Paper.runner.add({
          element, defs, progress: (now: number): number | undefined => enabled ? now : undefined,
        });
        return (enable: boolean) => {
          enabled = enable;
        };
      }
    }
    public registerAnimation<SVG extends SVGElement, Attrs>(element: Element<SVG, Attrs>, attrs: Animation.Defined<Attrs>, duration: number, easing: (t: number) => number): Promise<any> {
      return new Promise(resolve => {
        const start = performance.now();
        const end = start + duration;
        const from = {} as Partial<Attrs>;
        for (const prop in attrs) {
          from[prop] = (attrs[prop] as Attribute<any>).get(element, prop);
        }
        const defs = {} as Dynamic.Defined<any>;
        const anim: Animation<Attrs> = {
          element, attrs, resolve, from, defs,
          progress: (now: number): number | undefined => (now > start && now <= end) ? easing((now - start) / duration) : undefined,
        };
        Paper.runner.add(anim);
      });
    }
    public g(els: Element<SVGElement, any>[]): Elements.Renderable.G {
      const el = new Elements.Renderable.G(this);
      els.forEach(child => el.node.appendChild(child.node));
      return el;
    }
    public circle(cx: Attribute.Length, cy: Attribute.Length, r: Attribute.Length): Elements.Renderable.Shape.Circle {
      return new Elements.Renderable.Shape.Circle(this, { cx, cy, r });
    }
    public ellipse(cx: number, cy: number, rx: number, ry: number): Elements.Renderable.Shape.Ellipse {
      return new Elements.Renderable.Shape.Ellipse(this, { cx, cy, rx, ry });
    }
    public filter(): Elements.Filter {
      return new Elements.Filter(this);
    }
    public pattern(w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern {
      return new Elements.NonRenderable.PaintServer.Pattern(this, w, h, x, y, view);
    }
    public linearGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs: Attribute.NonRenderable.PaintServer.Gradient.Linear): Elements.NonRenderable.PaintServer.Gradient.Linear {
      return new Elements.NonRenderable.PaintServer.Gradient.Linear(this, stops, attrs);
    }
    public radialGradient(stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs: Attribute.NonRenderable.PaintServer.Gradient.Radial): Elements.NonRenderable.PaintServer.Gradient.Radial {
      return new Elements.NonRenderable.PaintServer.Gradient.Radial(this, stops, attrs);
    }
    public image(attrs: Attribute.Renderable.Image): Elements.Renderable.Image {
      return new Elements.Renderable.Image(this, attrs);
    }
    public line(x1: Attribute.Length, y1: Attribute.Length, x2: Attribute.Length, y2: Attribute.Length): Elements.Renderable.Shape.Line {
      return new Elements.Renderable.Shape.Line(this, { x1, x2, y1, y2 });
    }
    public mask(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.Mask {
      return new Elements.NonRenderable.Mask(this, w, h, x, y, units, contentUnits);
    }
    public path(d: Attribute.List<Attribute.PathSegment>, pathLength?: number): Elements.Renderable.Shape.Path {
      return new Elements.Renderable.Shape.Path(this, { d, pathLength });
    }
  }

}
