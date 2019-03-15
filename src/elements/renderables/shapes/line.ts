import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { ArgumentsType } from "../../../util";
import { HasMarker } from "../../non-renderables/marker";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Line_Attributes extends Shape_Attributes, HasMarker {
  x1: Length;
  y1: Length;
  "x1:y1": Point;
  x2: Length;
  y2: Length;
  "x2:y2": Point;
}

function _attributeHelper1(p1: Point, p2: Point): Partial<Line_Attributes> {
  return { "x1:y1": p1, "x2:y2": p2 };
}
export type Line_Args1 = ArgumentsType<typeof _attributeHelper1>;

function _attributeHelper2(x1: Length, y1: Length, x2: Length, y2: Length): Partial<Line_Attributes> {
  return { x1, y1, x2, y2 };
}
export type Line_Args2 = ArgumentsType<typeof _attributeHelper2>;

export type Line_Arguments = Line_Args1 | Line_Args2;

function _attributeHelper(...args: Line_Arguments): Partial<Line_Attributes> {
  switch (args.length) {
    case 2: return _attributeHelper1(...args);
    case 4: return _attributeHelper2(...args);
  }
}

export class Line extends AbstractShape<SVGLineElement, Line_Attributes> {
  constructor(context: Context, ...args: Line_Args1);
  constructor(context: Context, ...args: Line_Args2);
  constructor(context: Context, ...args: Line_Arguments);
  constructor(context: Context, ...args: Line_Arguments) {
    super(context, "line", _attributeHelper(...args));
  }
}
