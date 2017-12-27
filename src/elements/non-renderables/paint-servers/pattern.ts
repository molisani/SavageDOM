namespace SavageDOM.Elements.NonRenderables.PaintServers {

  export interface Pattern_Attributes extends Attributes.HasOverflow, Attributes.HasOpacity {
    patternUnits: "userSpaceOnUse" | "objectBoundingBox";
    patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
    "patternTransform.matrix": Attributes.Transforms.Matrix;
    "patternTransform.translate": Attributes.Transforms.Translate;
    "patternTransform.uniformScale": Attributes.Transforms.UniformScale;
    "patternTransform.scale": Attributes.Transforms.Scale;
    "patternTransform.rotate": Attributes.Transforms.Rotate;
    "patternTransform.skewX": Attributes.Transforms.SkewX;
    "patternTransform.skewY": Attributes.Transforms.SkewY;
    patternTransform: Attributes.Transform[];
    x: Attributes.Length;
    y: Attributes.Length;
    "x:y": Attributes.Point;
    width: Attributes.Length;
    height: Attributes.Length;
    "width:height": Attributes.Point;
    "x:y:width:height": Attributes.Box;
    "xlink:href": string;
    preserveAspectRatio: Attributes.PreserveAspectRatio;
    viewBox: Attributes.Box;
  }

  export class Pattern extends AbstractPaintServer<SVGPatternElement, Pattern_Attributes> {
    constructor(context: Context, el: SVGPatternElement);
    constructor(context: Context, w: number, h: number, x?: number, y?: number, view?: Attributes.Box);
    constructor(public context: Context, w: number | SVGPatternElement, h: number = (w instanceof SVGPatternElement) ? 0 : w, x: number = 0, y: number = 0, view?: Attributes.Box) {
      super(context, (w instanceof SVGPatternElement) ? w : "pattern");
      this.context.addDef(this);
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
      return new Pattern(this.context, super.cloneNode(deep));
    }
  }

// namespace SavageDOM {

//   export interface Context {
//     pattern(w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
//   }

//   Context.prototype.pattern = function(this: SavageDOM.Context, w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern {
//     return new Elements.NonRenderable.PaintServer.Pattern(this, w, h, x, y, view);
//   };

//   export namespace Elements {
//     export namespace Renderable {
//       export interface Group {
//         toPattern(w: number, h: number): Elements.NonRenderable.PaintServer.Pattern;
//         toPattern(w: number, h: number, x: number, y: number): Elements.NonRenderable.PaintServer.Pattern;
//         toPattern(w: number, h: number, x: number, y: number, view: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
//         toPattern(w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern;
//       }
//     }
//   }

//   Elements.Renderable.Group.prototype.toPattern = function<SVG extends SVGElement, Attrs, Events>(this: Elements.Renderable.Group, w: number, h: number, x?: number, y?: number, view?: Attribute.Box): Elements.NonRenderable.PaintServer.Pattern {
//     const pattern = new Elements.NonRenderable.PaintServer.Pattern(this.context, w, h, x, y, view);
//     this.getChildren().forEach(child => pattern.add(child));
//     return pattern;
//   };

// }

}
