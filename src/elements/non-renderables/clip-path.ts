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
