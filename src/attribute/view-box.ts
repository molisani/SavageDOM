namespace vektor.Attribute {

  export class ViewBox implements Attribute<ViewBox> {
    constructor(public x: Length, public y: Length, public width: Length, public height: Length) {}
    toString(): string {
      return `${this.x} ${this.y} ${this.width} ${this.height}`;
    }
    parse(css: string | null): ViewBox {
      if (css !== null) {
        const toks = css.split(" ");
        return new ViewBox(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]));
      } else {
        return new ViewBox(0, 0, 0, 0);
      }
    }
    get(element: Element<SVGElement, any>, attr: string): ViewBox {
      const toks = attr.split(":");
      if (toks.length === 4) {
        const cssX = element.getAttribute(toks[0]);
        const cssY = element.getAttribute(toks[1]);
        const cssWidth = element.getAttribute(toks[2]);
        const cssHeight = element.getAttribute(toks[3]);
        if (cssX !== null && cssY !== null && cssWidth !== null && cssHeight !== null) {
          return new ViewBox(parseFloat(cssX), parseFloat(cssY), parseFloat(cssWidth), parseFloat(cssHeight));
        } else {
          return new ViewBox(0, 0, 0, 0);
        }
      } else {
        return this.parse(element.getAttribute(attr));
      }
    }
    set(element: Element<SVGElement, any>, attr: string, override?: ViewBox): void {
      const toks = attr.split(":");
      if (toks.length === 4) {
        if (override !== undefined) {
          element.setAttribute(toks[0], override.x.toString());
          element.setAttribute(toks[1], override.y.toString());
          element.setAttribute(toks[2], override.width.toString());
          element.setAttribute(toks[3], override.height.toString());
        } else {
          element.setAttribute(toks[0], this.x.toString());
          element.setAttribute(toks[1], this.y.toString());
          element.setAttribute(toks[2], this.width.toString());
          element.setAttribute(toks[3], this.height.toString());
        }
      } else {
        if (override !== undefined) {
          element.setAttribute(attr, override.toString());
        } else {
          element.setAttribute(attr, this.toString());
        }
      }
    }
    interpolate(from: ViewBox, t: number): ViewBox {
      return new ViewBox(_LengthInterpolate(from.x, this.x, t), _LengthInterpolate(from.y, this.y, t), _LengthInterpolate(from.width, this.width, t), _LengthInterpolate(from.height, this.height, t));
    }
  }

}
