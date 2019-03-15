import { Length } from "../../../attributes/base";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { ArgumentsType } from "../../../util";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Circle_Attributes extends Shape_Attributes {
  cx: Length;
  cy: Length;
  "cx:cy": Point;
  r: Length;
}

function _attributeHelper1(c: Point, r: Length): Partial<Circle_Attributes> {
  return { "cx:cy": c, r };
}
export type Circle_Args1 = ArgumentsType<typeof _attributeHelper1>;

function _attributeHelper2(cx: Length, cy: Length, r: Length): Partial<Circle_Attributes> {
  return { cx, cy, r };
}
export type Circle_Args2 = ArgumentsType<typeof _attributeHelper2>;

export type Circle_Arguments = Circle_Args1 | Circle_Args2;

function _attributeHelper(...args: Circle_Arguments): Partial<Circle_Attributes> {
  switch (args.length) {
    case 2: return _attributeHelper1(...args);
    case 3: return _attributeHelper2(...args);
  }
}

export class Circle extends AbstractShape<SVGCircleElement, Circle_Attributes> {
  constructor(context: Context, ...args: Circle_Args1);
  constructor(context: Context, ...args: Circle_Args2);
  constructor(context: Context, ...args: Circle_Arguments);
  constructor(context: Context, ...args: Circle_Arguments) {
    super(context, "circle", _attributeHelper(...args));
  }
}
