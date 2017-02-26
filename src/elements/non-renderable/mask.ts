namespace SavageDOM.Attribute {

  export interface HasMask {
    "mask": Elements.NonRenderable.Mask | None | Inherit;
  }

}

namespace SavageDOM.Attribute.NonRenderable {

  export interface Mask {
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

  export class Mask extends AbstractNonRenderable<SVGMaskElement, Attribute.NonRenderable.Mask> {
    constructor(public paper: Paper, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox") {
      super(paper, "mask");
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
    mask(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.Mask;
  }

  Paper.prototype.mask = function(this: SavageDOM.Paper, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.Mask {
    return new Elements.NonRenderable.Mask(this, w, h, x, y, units, contentUnits);
  };

}
