import { HasOverflow, Inherit, Length } from "../../attributes/base";
import { Box } from "../../attributes/box";
import { Point } from "../../attributes/point";
import { PreserveAspectRatio } from "../../attributes/preserve-aspect-ratio";
import { Context } from "../../context";
import { BaseEvents } from "../../events";
import { AbstractRenderable, Graphics_Attributes, Renderable_Attributes } from "../renderable";

export interface Image_Attributes extends Graphics_Attributes, HasOverflow {
  x: Length;
  y: Length;
  "x:y": Point;
  width: Length;
  height: Length;
  "width:height": Point;
  "x:y:width:height": Box;
  href: string;
  preserveAspectRatio?: PreserveAspectRatio;
  viewBox?: Box;
  "color-profile": "auto" | "sRGB" | string | Inherit;
  "image-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
}

export interface Image_Events extends BaseEvents {
  load: ProgressEvent;
}

export class Image extends AbstractRenderable<SVGImageElement, Image_Attributes, Image_Events> {
  constructor(context: Context, attrs?: Partial<Renderable_Attributes & Image_Attributes>) {
    super(context, "image", attrs);
  }
}
