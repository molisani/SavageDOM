namespace SavageDOM {

  export class Element<SVG extends SVGElement, Attrs> {
    public node: SVG;
    public id: string = Math.random().toString(36).substring(2);
    private style: CSSStyleDeclaration;
    constructor(paper: Paper, el: SVG);
    constructor(paper: Paper, name: string, attrs?: Partial<Attrs>);
    constructor(public paper: Paper, el: string | SVG, attrs?: Partial<Attrs>) {
      if (typeof el === "string") {
        this.node = window.document.createElementNS(XMLNS, el) as SVG;
        if (attrs !== undefined) {
          this.setAttributes(attrs);
        }
        this.paper.root.appendChild(this.node);
        this.node.setAttribute("id", this.id);
      } else {
        this.node = el;
        const id = this.node.getAttribute("id");
        if (id !== null) {
          this.id = id;
        } else {
          this.node.setAttribute("id", this.id);
        }
      }
      this.style = window.getComputedStyle(this.node);
    }
    public toString(): string {
      return `url(#${this.id})`;
    }
    public setAttribute<Attr extends keyof Attrs>(name: Attr, val: Attrs[Attr]): void {
      this.node.setAttribute(name, String(val));
    }
    public setAttributes(attrs: Partial<Attrs>): void {
      for (const name in attrs) {
        const attr = attrs[name];
        if (attr !== undefined && attr !== null) {
          this.setAttribute(name, attr);
        }
      }
    }
    public getAttribute<Attr extends keyof Attrs>(name: Attr): string | null {
      const computed = this.style.getPropertyValue(name);
      if (computed === "") {
        return this.node.getAttribute(name);
      } else {
        return computed;
      }
    }
    public add(el: Element<SVGElement, any>) {
      this.node.appendChild(el.node);
    }
    public getChildren(): Element<SVGElement, any>[] {
      const children = this.node.children;
      const elements: Element<SVGElement, any>[] = [];
      for (let i = 0; i < children.length; ++i) {
        elements.push(new Element(this.paper, children.item(i) as SVGElement));
      }
      return elements;
    }
    public dynamic(defs: Dynamic.Defined<Attrs>) {
      this.paper.registerDynamic(this, defs);
    }
    public animate(attrs: Partial<Attrs>, duration: number, easing: (t: number) => number = Animation.Easing.linear): Promise<number> {
      const defs = {} as Animation.Defined<Attrs>;
      for (const prop in attrs) {
        const a = attrs[prop];
        if (a !== undefined) {
          if (Attribute.isAttribute(a)) {
            defs[prop] = a;
          } else if (typeof a === "number") {
            defs[prop] = new Attribute.Number(a as any as number) as Attribute<any>;
          }
        }
      }
      return this.paper.registerAnimation(this, defs, duration, easing);
    }
    public addEventListener(event: "focusin" | "focusout" | "mousedown" | "mouseup" | "mousemove" | "mouseover" | "mouseout", listener: (this: this, event: MouseEvent) => any): void;
    public addEventListener(event: "touchstart" | "touchend" | "touchmove" | "touchcancel", listener: (this: this, event: TouchEvent) => any): void;
    public addEventListener(event: string, listener: (this: this, event: Event) => any): void {
      this.node.addEventListener(event, listener.bind(this));
    }
    public toPattern(w: number, h: number): Elements.NonRenderable.PaintServer.Pattern;
    public toPattern(w: number, h: number, x: number, y: number): Elements.NonRenderable.PaintServer.Pattern;
    public toPattern(w: number, h: number, x: number, y: number, view: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern;
    public toPattern(w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern {
      const pattern = new Elements.NonRenderable.PaintServer.Pattern(this.paper, w, h, x, y, view);
      const children = this.node.children;
      for (let i = 0; i < children.length; ++i) {
        pattern.node.appendChild(children.item(i));
      }
      return pattern;
    }
  }

  export namespace Elements {}

}
