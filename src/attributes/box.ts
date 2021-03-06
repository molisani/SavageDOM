import { interpolate } from "d3-interpolate";
import { Attribute } from "../attribute";
import { Length } from "./base";

export class Box implements Attribute<Box> {
  constructor(public x: Length, public y: Length, public width: Length, public height: Length) {}
  public toString(): string {
    return `${this.x} ${this.y} ${this.width} ${this.height}`;
  }
  public parse(css: string | null): Box {
    if (css !== null) {
      const toks = css.split(" ");
      return new Box(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]));
    } else {
      return new Box(0, 0, 0, 0);
    }
  }
  public get(element: SVGElement, attr: string): Box {
    const toks = attr.split(":");
    if (toks.length === 4) {
      const cssX = element.getAttribute(toks[0]);
      const cssY = element.getAttribute(toks[1]);
      const cssWidth = element.getAttribute(toks[2]);
      const cssHeight = element.getAttribute(toks[3]);
      if (cssX !== null && cssY !== null && cssWidth !== null && cssHeight !== null) {
        return new Box(parseFloat(cssX), parseFloat(cssY), parseFloat(cssWidth), parseFloat(cssHeight));
      } else {
        return new Box(0, 0, 0, 0);
      }
    } else {
      return this.parse(element.getAttribute(attr));
    }
  }
  public set(element: SVGElement, attr: string, override?: Box): void {
    const toks = attr.split(":");
    if (toks.length === 4) {
      if (override !== undefined) {
        element.setAttribute(toks[0], override.x.toString());
        element.setAttribute(toks[1], override.y.toString());
        element.setAttribute(toks[2], override.width.toString());
        element.setAttribute(toks[3], override.height.toString());
      } else {
        element.setAttribute(toks[0], this.x.toString());
        element.setAttribute(toks[1], this.y.toString());
        element.setAttribute(toks[2], this.width.toString());
        element.setAttribute(toks[3], this.height.toString());
      }
    } else {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
  }
  public interpolator(from: Box): (t: number) => Box {
    const func = interpolate(from.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
}
