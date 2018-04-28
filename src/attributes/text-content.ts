import { interpolate } from "d3-interpolate";
import { Attribute } from "../attribute";
import { Element } from "../element";

export class TextContent implements Attribute<TextContent> {
  private static escapeHtml(html: string): string {
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  private _str: string;
  private _cb: () => string;
  constructor(str: string);
  constructor(cb: () => string);
  constructor(str: string | (() => string)) {
    if (typeof str === "string") {
      this._str = str;
    } else {
      this._cb = str;
    }
  }
  public toString(): string {
    return this._str || this._cb();
  }
  public parse(css: string | null): TextContent {
    return new TextContent(css || "");
  }
  public get<Attrs, A extends keyof Attrs>(element: SVGElement, attr: A): TextContent {
    return this.parse(element.textContent);
  }
  public set<Attrs, A extends keyof Attrs>(element: SVGElement, attr: A, override?: TextContent): void {
    element.textContent = TextContent.escapeHtml(this._str || this._cb());
  }
  public interpolator(from: TextContent): (t: number) => TextContent {
    const func = interpolate(from.toString(), this.toString());
    return (t: number) => this.parse(func(t));
  }
}
