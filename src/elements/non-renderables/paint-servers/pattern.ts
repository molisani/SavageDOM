import { HasOpacity, HasOverflow, Length } from "../../../attributes/base";
import { Box } from "../../../attributes/box";
import { Point } from "../../../attributes/point";
import { PreserveAspectRatio } from "../../../attributes/preserve-aspect-ratio";
import { Transform, TransformList } from "../../../attributes/transform";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { AbstractPaintServer, PaintServer_Attributes } from "../paint-server";

export interface Pattern_Attributes extends PaintServer_Attributes, HasOverflow, HasOpacity {
  patternUnits: "userSpaceOnUse" | "objectBoundingBox";
  patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
  "patternTransform.matrix": Transform<"matrix">;
  "patternTransform.translate": Transform<"translate">;
  "patternTransform.scale": Transform<"scale">;
  "patternTransform.rotate": Transform<"rotate">;
  "patternTransform.skewX": Transform<"skewX">;
  "patternTransform.skewY": Transform<"skewY">;
  patternTransform: TransformList;
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
    super(context, context.window.document.createElementNS(XMLNS, "pattern"), _attributeHelper(w, h, x, y, view));
    this.context.addDef(this);
  }
  public clone(deep: boolean = true): Pattern {
    return new Pattern(this.context, super.cloneNode(deep));
  }
}
