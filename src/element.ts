namespace SavageDOM {

  const randomId = () => Math.random().toString(36).substring(2);

  export class Element<SVG extends SVGElement, Attrs, Events> {
    protected _node: SVG;
    protected _style: CSSStyleDeclaration;
    constructor(paper: Paper, el: SVG, attrs?: Partial<Attrs>);
    constructor(paper: Paper, name: string, attrs?: Partial<Attrs>, id?: string);
    constructor(paper: Paper, el: string | SVG, attrs?: Partial<Attrs>, id?: string);
    constructor(public paper: Paper, el: string | SVG, attrs?: Partial<Attrs>, private _id: string = randomId()) {
      if (typeof el === "string") {
        this._node = window.document.createElementNS(XMLNS, el) as SVG;
        if (attrs !== undefined) {
          this.setAttributes(attrs);
        }
        this.paper.root.appendChild(this._node);
        this._node.setAttribute("id", this._id);
      } else {
        this._node = el;
        const id = this._node.getAttribute("id");
        if (id !== null) {
          this._id = id;
        } else {
          this._node.setAttribute("id", this._id);
        }
      }
      this._style = window.getComputedStyle(this._node);
    }
    public get id(): string {
      return this._id;
    }
    public toString(): string {
      return `url(#${this._id})`;
    }
    public setAttribute<Attr extends keyof Attrs>(name: Attr, val: Attrs[Attr]): void {
      if (Attribute.isAttribute(val)) {
        val.set(this, name);
      } else if (Array.isArray(val)) {
        this._node.setAttribute(name, val.join("\t"));
      } else {
        this._node.setAttribute(name, String(val));
      }
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
      const val = this._node.getAttribute(name) || this._style.getPropertyValue(name);
      return (val === "" || val === "none") ? null : val;
    }
    public copyStyleFrom(el: Element<SVGElement, Attrs, any>);
    public copyStyleFrom(el: Element<SVGElement, Attrs, any>, includeExclude: { [A in keyof Attrs]: boolean }, defaultInclude: boolean);
    public copyStyleFrom(el: Element<SVGElement, Attrs, any>, includeExclude?: { [A in keyof Attrs]: boolean }, defaultInclude: boolean = true): void {
      const style = {} as Attrs;
      const attrs = el._node.attributes;
      if (includeExclude) {
        for (let i = 0; i < attrs.length; ++i) {
          const attr = attrs.item(i).name;
          if (includeExclude[attr as keyof Attrs] === true || defaultInclude) {
            style[attr] = el._style.getPropertyValue(attr);
          }
        }
      } else {
        for (let i = 0; i < attrs.length; ++i) {
          const attr = attrs.item(i).name;
          style[attr] = el._style.getPropertyValue(attr);
        }
      }
      this.setAttributes(style);
    }

    public addEventListener<Event extends keyof Events>(event: Event, listener: (this: this, event: Events[Event]) => any): void {
      this._node.addEventListener(event, listener.bind(this));
    }

    public get boundingBox(): Attribute.Box {
      const rect = this._node.getBoundingClientRect();
      return new Attribute.Box(rect.left, rect.top, rect.width, rect.height);
    }
    public add(el: Element<SVGElement, any, any>) {
      this._node.appendChild(el._node);
    }
    public getChildren(): Element<SVGElement, any, any>[] {
      const children = this._node.childNodes;
      const elements: Element<SVGElement, any, any>[] = [];
      for (let i = 0; i < children.length; ++i) {
        elements.push(new Element(this.paper, children.item(i) as SVGElement));
      }
      return elements;
    }
    public clone(deep: boolean = true, id: string = randomId()): Element<SVG, Attrs, Events> {
      const copy = new Element<SVG, Attrs, Events>(this.paper, this._node.cloneNode(deep) as SVG);
      copy._id = id;
      copy._node.setAttribute("id", copy._id);
      return copy;
    }

    protected cloneNode(deep: boolean = true): SVG {
      const clone = this._node.cloneNode(deep) as SVG;
      clone.setAttribute("id", randomId());
      return clone;
    }
  }

}
