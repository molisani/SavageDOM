namespace SavageDOM.Attribute.NonRenderable.PaintServer {

  export interface Pattern {
    patternUnits: "userSpaceOnUse" | "objectBoundingBox";
    patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
    patternTransform: List<Transform>;
    x: Length;
    y: Length;
    "x:y": Point;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": ViewBox;
    "xlink:href": string;
    preserveAspectRatio: PreserveAspectRatio;
    viewBox: ViewBox;
  }

}

namespace SavageDOM.Elements.NonRenderable.PaintServer {

  export class Pattern extends AbstractPaintServer<SVGPatternElement, Attribute.NonRenderable.PaintServer.Pattern> {
    constructor(public paper: Paper, w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox) {
      super(paper, "pattern");
      this.paper.addDef(this);
      this.setAttribute("width", w);
      this.setAttribute("height", h);
      if (x !== undefined || y !== undefined || view) {
        this.setAttribute("patternUnits", "userSpaceOnUse");
        if (x !== undefined) {
          this.setAttribute("x", x);
        }
        if (y !== undefined) {
          this.setAttribute("y", y);
        }
        if (view) {
          this.setAttribute("viewBox", view);
        } else {
          this.setAttribute("viewBox", new Attribute.ViewBox(0, 0, w, h));
        }
      }
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    pattern(w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern;
  }

  Paper.prototype.pattern = function(this: SavageDOM.Paper, w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern {
    return new Elements.NonRenderable.PaintServer.Pattern(this, w, h, x, y, view);
  };

  export interface Element<SVG extends SVGElement, Attrs> {
    toPattern(w: number, h: number): Elements.NonRenderable.PaintServer.Pattern;
    toPattern(w: number, h: number, x: number, y: number): Elements.NonRenderable.PaintServer.Pattern;
    toPattern(w: number, h: number, x: number, y: number, view: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern;
    toPattern(w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern;
  }

  Element.prototype.toPattern = function<SVG extends SVGElement, Attrs>(this: Element<SVG, Attrs>, w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox): Elements.NonRenderable.PaintServer.Pattern {
    const pattern = new Elements.NonRenderable.PaintServer.Pattern(this.paper, w, h, x, y, view);
    const children = this.node.children;
    for (let i = 0; i < children.length; ++i) {
      pattern.node.appendChild(children.item(i));
    }
    return pattern;
  };

}
