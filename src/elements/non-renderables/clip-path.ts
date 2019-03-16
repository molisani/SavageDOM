import { Inherit, Length, None } from "../../attributes/base";
import { Box } from "../../attributes/box";
import { Point } from "../../attributes/point";
import { Context } from "../../context";
import { AbstractNonRenderable, NonRenderable_Attributes } from "../non-renderable";

export interface HasClipPath {
  "clip-path": ClipPath | None | Inherit;
  "clip-rule": "nonzero" | "evenodd" | Inherit;
}

export interface ClipPath_Attributes extends NonRenderable_Attributes {
  maskUnits: "userSpaceOnUse" | "objectBoundingBox";
  maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
  x: Length;
  y: Length;
  width: Length;
  height: Length;
  "width:height": Point;
  "x:y:width:height": Box;
}

function _attributeHelper(width?: number, height?: number, x?: number, y?: number, maskUnits?: "userSpaceOnUse" | "objectBoundingBox", maskContentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Partial<ClipPath_Attributes> {
  return { width, height, x, y, maskUnits, maskContentUnits };
}

export class ClipPath extends AbstractNonRenderable<SVGClipPathElement, ClipPath_Attributes> {
  constructor(public context: Context, w?: number, h?: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox") {
    super(context, "clipPath", _attributeHelper(w, h, x, y, units, contentUnits));
    this.context.addDef(this);
  }
}
