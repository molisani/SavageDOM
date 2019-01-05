import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { ArgumentsType } from "../../../util";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Polyline_Attributes extends Shape_Attributes, HasMarker {
  points: Point[];
}

function _attributeHelper(points: Point[]): Partial<Polyline_Attributes> {
  return { points };
}

export type Polyline_Arguments = ArgumentsType<typeof _attributeHelper>;

export class Polyline extends AbstractShape<SVGPolylineElement, Polyline_Attributes> {
  constructor(context: Context, ...args: Polyline_Arguments) {
    super(context, "polyline", _attributeHelper(...args));
  }
}
