import { Core_Attributes, HasClass, HasStyle, Inherit } from "../../../attributes/base";
import { Color } from "../../../attributes/color";
import { Dimension, Percentage } from "../../../attributes/dimension";
import { Transform, TransformList } from "../../../attributes/transform";
import { XMLNS } from "../../../constants";
import { Context } from "../../../context";
import { Element } from "../../../element";
import { NonRenderable_Events } from "../../non-renderable";
import { AbstractPaintServer, PaintServer_Attributes } from "../paint-server";

export interface Gradient_Attributes extends PaintServer_Attributes {
  gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
  "gradientTransform.matrix": Transform<"matrix">;
  "gradientTransform.translate": Transform<"translate">;
  "gradientTransform.scale": Transform<"scale">;
  "gradientTransform.rotate": Transform<"rotate">;
  "gradientTransform.skewX": Transform<"skewX">;
  "gradientTransform.skewY": Transform<"skewY">;
  gradientTransform: TransformList;
  spreadMethod: "pad" | "reflect" | "repeat";
  "xlink:href": string;
}

export interface Stops {
  [offset: string]: "currentColor" | Color | Inherit;
}

export interface Stop_Attributes extends Core_Attributes, HasClass, HasStyle {
  offset: Percentage;
  "stop-color": "currentColor" | Color | Inherit;
  "stop-opacity": number | Inherit;
}

export class Stop extends Element<SVGStopElement, Stop_Attributes, NonRenderable_Events> {
  constructor(context: Context, public offset: number, color: "currentColor" | Color | Inherit) {
    super(context, context.window.document.createElementNS(XMLNS.SVG, "stop"), {
      offset: new Dimension<"%">(offset * 100, "%"),
      "stop-color": color,
    });
  }
}

export abstract class AbstractGradient<ELEMENT extends SVGElement, ATTRIBUTES extends Gradient_Attributes> extends AbstractPaintServer<ELEMENT, ATTRIBUTES> {
  constructor(context: Context, el: ELEMENT, stops: Stops, attrs?: Partial<ATTRIBUTES>) {
    super(context, el, attrs);
    this.context.addDef(this);
    const stopArr: Stop[] = [];
    Object.keys(stops).forEach((offset) => {
      stopArr.push(new Stop(context, Number(offset), stops[offset]));
    });
    stopArr.sort((a, b) => {
      return a.offset - b.offset;
    });
    stopArr.forEach(s => this.add(s));
  }
}
