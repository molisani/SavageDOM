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
    "x:y:width:height": Box;
    "xlink:href": string;
    preserveAspectRatio: PreserveAspectRatio;
    viewBox: Box;
  }

}

namespace SavageDOM.Elements.NonRenderable.PaintServer {

  export class Pattern extends AbstractPaintServer<SVGPatternElement, Attribute.NonRenderable.PaintServer.Pattern> {
    constructor(paper: Paper, el: SVGPatternElement);
    constructor(paper: Paper, w: number, h: number, x?: number, y?: number, view?: Attribute.Box);
    constructor(public paper: Paper, w: number | SVGPatternElement, h: number = (w instanceof SVGPatternElement) ? 0 : w, x: number = 0, y: number = 0, view?: Attribute.Box) {
      super(paper, (w instanceof SVGPatternElement) ? w : "pattern");
      this.paper.addDef(this);
      if (!(w instanceof SVGPatternElement)) {
        this.setAttribute("width", w);
        this.setAttribute("height", h);
        this.setAttribute("x", x);
        this.setAttribute("y", y);
        if (view) {
          this.setAttribute("viewBox", view);
        } else {
          this.setAttribute("patternUnits", "userSpaceOnUse");
        }
      }
    }
    public clone(deep: boolean = true): Pattern {
      return new Pattern(this.paper, super.cloneNode(deep));
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    pattern(w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
  }

  Paper.prototype.pattern = function(this: SavageDOM.Paper, w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern {
    return new Elements.NonRenderable.PaintServer.Pattern(this, w, h, x, y, view);
  };

  export namespace Elements {
    export namespace Renderable {
      export interface Group {
        toPattern(w: number, h: number): Elements.NonRenderable.PaintServer.Pattern;
        toPattern(w: number, h: number, x: number, y: number): Elements.NonRenderable.PaintServer.Pattern;
        toPattern(w: number, h: number, x: number, y: number, view: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
        toPattern(w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
      }
    }
  }

  Elements.Renderable.Group.prototype.toPattern = function<SVG extends SVGElement, Attrs>(this: Elements.Renderable.Group, w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern {
    const pattern = new Elements.NonRenderable.PaintServer.Pattern(this.paper, w, h, x, y, view);
    this.getChildren().forEach(child => pattern.add(child));
    return pattern;
  };

}
