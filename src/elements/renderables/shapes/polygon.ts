import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { ArgumentsType } from "../../../util";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Polygon_Attributes extends Shape_Attributes, HasMarker {
  points: Point[];
}

function _attributeHelper(points: Point[]): Partial<Polygon_Attributes> {
  return { points };
}

export type Polygon_Arguments = ArgumentsType<typeof _attributeHelper>;

export class Polygon extends AbstractShape<SVGPolygonElement, Polygon_Attributes> {
  constructor(context: Context, ...args: Polygon_Arguments) {
    super(context, "polygon", _attributeHelper(...args));
  }
}
