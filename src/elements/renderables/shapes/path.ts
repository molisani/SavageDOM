import { PathSegment } from "../../../attributes/path-segment";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Path_Attributes extends Shape_Attributes, HasMarker {
  d: PathSegment[];
  pathLength: number;
}

function _attributeHelper(d: PathSegment[], pathLength?: number): Partial<Path_Attributes> {
  return { d, pathLength };
}

export class Path extends AbstractShape<SVGPathElement, Path_Attributes> {
  constructor(context: Context, d: PathSegment[], pathLength?: number) {
    super(context, "path", _attributeHelper(d, pathLength));
  }
}
