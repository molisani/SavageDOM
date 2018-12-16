import { PathSegment } from "../../../attributes/path-segment";
import { Context } from "../../../context";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Path_Attributes extends Shape_Attributes, HasMarker {
  d: PathSegment[];
  pathLength: number;
}

export class Path extends AbstractShape<SVGPathElement, Path_Attributes> {
  constructor(context: Context, attrs?: Partial<Path_Attributes>) {
    super(context, "path", attrs);
  }
}
