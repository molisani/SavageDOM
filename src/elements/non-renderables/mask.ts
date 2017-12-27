namespace SavageDOM.Elements.NonRenderables {

  export interface HasMask {
    "mask": Mask | Attributes.None | Attributes.Inherit;
  }

  export interface Mask_Attributes {
    maskUnits: "userSpaceOnUse" | "objectBoundingBox";
    maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
    x: Attributes.Length;
    y: Attributes.Length;
    width: Attributes.Length;
    height: Attributes.Length;
    "width:height": Attributes.Point;
    "x:y:width:height": Attributes.Box;
  }

  export class Mask extends AbstractNonRenderable<SVGMaskElement, Mask_Attributes> {
    constructor(public context: Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox") {
      super(context, "mask");
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

// namespace SavageDOM {

//   export interface Context {
//     mask(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.Mask;
//   }

//   Context.prototype.mask = function(this: SavageDOM.Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Elements.NonRenderable.Mask {
//     return new Elements.NonRenderable.Mask(this, w, h, x, y, units, contentUnits);
//   };

// }

}
