import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { ArgumentsType } from "../../../util";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Ellipse_Attributes extends Shape_Attributes {
  cx: Length;
  cy: Length;
  "cx:cy": Point;
  rx: Length;
  ry: Length;
  "rx:ry": Point;
}

function _attributeHelper1(c: Point, r: Point): Partial<Ellipse_Attributes> {
  return { "cx:cy": c, "rx:ry": r };
}
export type Ellipse_Args1 = ArgumentsType<typeof _attributeHelper1>;

function _attributeHelper2(cx: Length, cy: Length, rx: Length, ry: Length): Partial<Ellipse_Attributes> {
  return { cx, cy, rx, ry };
}
export type Ellipse_Args2 = ArgumentsType<typeof _attributeHelper2>;

export type Ellipse_Arguments = Ellipse_Args1 | Ellipse_Args2;

function _attributeHelper(...args: Ellipse_Arguments): Partial<Ellipse_Attributes> {
  switch (args.length) {
    case 2: return _attributeHelper1(...args);
    case 4: return _attributeHelper2(...args);
  }
}

export class Ellipse extends AbstractShape<SVGEllipseElement, Ellipse_Attributes> {
  constructor(context: Context, ...args: Ellipse_Args1);
  constructor(context: Context, ...args: Ellipse_Args2);
  constructor(context: Context, ...args: Ellipse_Arguments);
  constructor(context: Context, ...args: Ellipse_Arguments) {
    super(context, "ellipse", _attributeHelper(...args));
  }
}
