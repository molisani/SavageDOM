namespace SavageDOM.Elements.NonRenderables {

export interface HasClipPath {
  "clip-path": ClipPath | Attributes.None | Attributes.Inherit;
  "clip-rule": "nonzero" | "evenodd" | Attributes.Inherit;
}

export interface ClipPath_Attributes {
  maskUnits: "userSpaceOnUse" | "objectBoundingBox";
  maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
  x: Attributes.Length;
  y: Attributes.Length;
  width: Attributes.Length;
  height: Attributes.Length;
  "width:height": Attributes.Point;
  "x:y:width:height": Attributes.Box;
}

export class ClipPath extends AbstractNonRenderable<SVGMaskElement, ClipPath_Attributes> {
  constructor(public context: Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox") {
    super(context, "clipPath");
    this.context.addDef(this);
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

  // export interface Context {
  //   clipPath(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.ClipPath;
  // }

  // Context.prototype.clipPath = function(this: SavageDOM.Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.ClipPath {
  //   return new Elements.NonRenderable.ClipPath(this, w, h, x, y, units, contentUnits);
  // };

}
