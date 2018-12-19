import { HasOpacity, HasOverflow, Length } from "../../../attributes/base";
import { Box } from "../../../attributes/box";
import { Point } from "../../../attributes/point";
import { PreserveAspectRatio } from "../../../attributes/preserve-aspect-ratio";
import { Transform } from "../../../attributes/transform";
import { Matrix_Transform } from "../../../attributes/transforms/matrix";
import { Rotate_Transform } from "../../../attributes/transforms/rotate";
import { Scale_Transform, UniformScale_Transform } from "../../../attributes/transforms/scale";
import { SkewX_Transform, SkewY_Transform } from "../../../attributes/transforms/skew";
import { Translate_Transform } from "../../../attributes/transforms/translate";
import { Context } from "../../../context";
import { AbstractPaintServer, PaintServer_Attributes } from "../paint-server";

export interface Pattern_Attributes extends PaintServer_Attributes, HasOverflow, HasOpacity {
  patternUnits: "userSpaceOnUse" | "objectBoundingBox";
  patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
  "patternTransform.matrix": Matrix_Transform;
  "patternTransform.translate": Translate_Transform;
  "patternTransform.uniformScale": UniformScale_Transform;
  "patternTransform.scale": Scale_Transform;
  "patternTransform.rotate": Rotate_Transform;
  "patternTransform.skewX": SkewX_Transform;
  "patternTransform.skewY": SkewY_Transform;
  patternTransform: Transform[];
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

function _attributeHelper(w: number | SVGPatternElement, h: number, x: number, y: number, view?: Box): Partial<Pattern_Attributes> {
  const attrs: Partial<Pattern_Attributes> = {};
  if (!(w instanceof SVGPatternElement)) {
    attrs.width = w;
    attrs.height = h;
    attrs.x = x;
    attrs.y = y;
    if (view) {
      attrs.viewBox = view;
    } else {
      attrs.patternUnits = "userSpaceOnUse";
    }
  }
  return attrs;
}

export class Pattern extends AbstractPaintServer<SVGPatternElement, Pattern_Attributes> {
  constructor(context: Context, el: SVGPatternElement);
  constructor(context: Context, w: number, h: number, x?: number, y?: number, view?: Box);
  constructor(context: Context, w: number | SVGPatternElement, h: number = (w instanceof SVGPatternElement) ? 0 : w, x: number = 0, y: number = 0, view?: Box) {
    super(context, (w instanceof SVGPatternElement) ? w : "pattern", _attributeHelper(w, h, x, y, view));
    this.context.addDef(this);
  }
  public clone(deep: boolean = true): Pattern {
    return new Pattern(this.context, super.cloneNode(deep));
  }
}
