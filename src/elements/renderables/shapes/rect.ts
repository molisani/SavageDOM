import { Length } from "../../../attributes/base";
import { Box } from "../../../attributes/box";
import { Point } from "../../../attributes/point";
import { Context } from "../../../context";
import { ArgumentsType } from "../../../util";
import { AbstractShape, Shape_Attributes } from "../shape";

export interface Rect_Attributes extends Shape_Attributes {
  x: Length;
  y: Length;
  "x:y": Point;
  width: Length;
  height: Length;
  "width:height": Point;
  "x:y:width:height": Box;
  rx: Length;
  ry: Length;
  "rx:ry": Point;
}

function _attributeHelper1(box: Box): Partial<Rect_Attributes> {
  return { "x:y:width:height": box };
}
export type Rect_Args1 = ArgumentsType<typeof _attributeHelper1>;

function _attributeHelper2(box: Box, r: Point): Partial<Rect_Attributes> {
  return { "x:y:width:height": box, "rx:ry": r };
}
export type Rect_Args2 = ArgumentsType<typeof _attributeHelper2>;

function _attributeHelper3(box: Box, rx: Length, ry: Length): Partial<Rect_Attributes> {
  return { "x:y:width:height": box, rx, ry };
}
export type Rect_Args3 = ArgumentsType<typeof _attributeHelper3>;

function _attributeHelper4(p: Point, width: Length, height: Length): Partial<Rect_Attributes> {
  return { "x:y": p, width, height };
}
export type Rect_Args4 = ArgumentsType<typeof _attributeHelper4>;

function _attributeHelper5(p: Point, width: Length, height: Length, r: Point): Partial<Rect_Attributes> {
  return { "x:y": p, width, height, "rx:ry": r };
}
export type Rect_Args5 = ArgumentsType<typeof _attributeHelper5>;

function _attributeHelper6(p: Point, width: Length, height: Length, rx: Length, ry: Length): Partial<Rect_Attributes> {
  return { "x:y": p, width, height, rx, ry };
}
export type Rect_Args6 = ArgumentsType<typeof _attributeHelper6>;

function _attributeHelper7(x: Length, y: Length, width: Length, height: Length): Partial<Rect_Attributes> {
  return { x, y, width, height };
}
export type Rect_Args7 = ArgumentsType<typeof _attributeHelper7>;

function _attributeHelper8(x: Length, y: Length, width: Length, height: Length, r: Point): Partial<Rect_Attributes> {
  return { x, y, width, height, "rx:ry": r };
}
export type Rect_Args8 = ArgumentsType<typeof _attributeHelper8>;

function _attributeHelper9(x: Length, y: Length, width: Length, height: Length, rx: Length, ry: Length): Partial<Rect_Attributes> {
  return { x, y, width, height, rx, ry };
}
export type Rect_Args9 = ArgumentsType<typeof _attributeHelper9>;

export type Rect_Arguments = Rect_Args1 | Rect_Args2 | Rect_Args3 | Rect_Args4 | Rect_Args5 | Rect_Args6 | Rect_Args7 | Rect_Args8 | Rect_Args9;

function disambiguate3Arguments(args: Rect_Args3 | Rect_Args4): args is Rect_Args3 {
  return args[0] instanceof Box;
}

function disambiguate4Arguments(args: Rect_Args5 | Rect_Args7): args is Rect_Args5 {
  return args[0] instanceof Point;
}

function disambiguate5Arguments(args: Rect_Args6 | Rect_Args8): args is Rect_Args6 {
  return args[0] instanceof Point;
}

function _attributeHelper(...args: Rect_Arguments): Partial<Rect_Attributes> {
  switch (args.length) {
    case 1: return _attributeHelper1(...args);
    case 2: return _attributeHelper2(...args);
    case 3: return disambiguate3Arguments(args) ? _attributeHelper3(...args) : _attributeHelper4(...args);
    case 4: return disambiguate4Arguments(args) ? _attributeHelper5(...args) : _attributeHelper7(...args);
    case 5: return disambiguate5Arguments(args) ? _attributeHelper6(...args) : _attributeHelper8(...args);
    case 6: return _attributeHelper9(...args);
  }
}

export class Rect extends AbstractShape<SVGRectElement, Rect_Attributes> {
  constructor(context: Context, ...args: Rect_Args1);
  constructor(context: Context, ...args: Rect_Args2);
  constructor(context: Context, ...args: Rect_Args3);
  constructor(context: Context, ...args: Rect_Args4);
  constructor(context: Context, ...args: Rect_Args5);
  constructor(context: Context, ...args: Rect_Args6);
  constructor(context: Context, ...args: Rect_Args7);
  constructor(context: Context, ...args: Rect_Args8);
  constructor(context: Context, ...args: Rect_Args9);
  constructor(context: Context, ...args: Rect_Arguments);
  constructor(context: Context, ...args: Rect_Arguments) {
    super(context, "rect", _attributeHelper(...args));
  }
}
