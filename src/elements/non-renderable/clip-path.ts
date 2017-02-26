namespace SavageDOM.Attribute {

  export interface Clippable {
    clip: "auto" | SavageDOM.Elements.Renderable.AbstractShape<any, any> | Inherit;
    "clip-path": Elements.NonRenderable.ClipPath | None | Inherit;
    "clip-rule": "nonzero" | "evenodd" | Inherit;
  }

}

namespace SavageDOM.Attribute.NonRenderable {

  export interface ClipPath {
    maskUnits: "userSpaceOnUse" | "objectBoundingBox";
    maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
    x: Length;
    y: Length;
    width: Length;
    height: Length;
    "width:height": Point;
    "x:y:width:height": Box;
  }

}

namespace SavageDOM.Elements.NonRenderable {

  export class ClipPath extends AbstractNonRenderable<SVGMaskElement, Attribute.NonRenderable.Mask> {
    constructor(public paper: Paper, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox") {
      super(paper, "clipPath");
      this.paper.addDef(this);
      if (w !== undefined) {
        this.setAttribute("width", w);
      }
      if (h !== undefined) {
        this.setAttribute("height", h);
      }
      if (x !== undefined) {
        this.setAttribute("x", x);
      }
      if (y !== undefined) {
        this.setAttribute("y", y);
      }
      if (units !== undefined) {
        this.setAttribute("maskUnits", units);
      }
      if (contentUnits !== undefined) {
        this.setAttribute("maskContentUnits", contentUnits);
      }
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    clipPath(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.ClipPath;
  }

  Paper.prototype.clipPath = function(this: SavageDOM.Paper, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.ClipPath {
    return new Elements.NonRenderable.ClipPath(this, w, h, x, y, units, contentUnits);
  };

}
