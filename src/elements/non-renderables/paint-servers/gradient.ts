import { BaseAttributes, Inherit } from "../../../attributes/base";
import { Color } from "../../../attributes/color";
import { Dimension, Percentage } from "../../../attributes/dimension";
import { Transform } from "../../../attributes/transform";
import { Matrix_Transform } from "../../../attributes/transforms/matrix";
import { Rotate_Transform } from "../../../attributes/transforms/rotate";
import { Scale_Transform, UniformScale_Transform } from "../../../attributes/transforms/scale";
import { SkewX_Transform, SkewY_Transform } from "../../../attributes/transforms/skew";
import { Translate_Transform } from "../../../attributes/transforms/translate";
import { Context } from "../../../context";
import { Element } from "../../../element";
import { NonRenderable_Attributes, NonRenderable_Events } from "../../non-renderable";
import { AbstractPaintServer } from "../paint-server";

export interface Gradient_Attributes extends BaseAttributes {
  gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
  "gradientTransform.matrix": Matrix_Transform;
  "gradientTransform.translate": Translate_Transform;
  "gradientTransform.uniformScale": UniformScale_Transform;
  "gradientTransform.scale": Scale_Transform;
  "gradientTransform.rotate": Rotate_Transform;
  "gradientTransform.skewX": SkewX_Transform;
  "gradientTransform.skewY": SkewY_Transform;
  gradientTransform: Transform[];
  spreadMethod: "pad" | "reflect" | "repeat";
  "xlink:href": string;
}

export interface Stops {
  [offset: string]: "currentColor" | Color | Inherit;
}

export interface Stop_Attributes extends BaseAttributes {
  offset: Percentage;
  "stop-color": "currentColor" | Color | Inherit;
  "stop-opacity": number | Inherit;
}

export class Stop extends Element<SVGStopElement, Stop_Attributes, NonRenderable_Events> {
  constructor(context: Context, public offset: number, color: "currentColor" | Color | Inherit) {
    super(context, "stop", {
      offset: new Dimension<"%">(offset * 100, "%"),
      "stop-color": color,
    });
  }
}

export abstract class AbstractGradient<E extends SVGElement, GradientAttributes extends Gradient_Attributes> extends AbstractPaintServer<E, GradientAttributes> {
  constructor(context: Context, name: string, stops: Stops, attrs?: Partial<NonRenderable_Attributes & GradientAttributes>) {
    super(context, name, attrs);
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
