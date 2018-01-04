namespace SavageDOM.Elements.Renderables {

  export interface Textual_Attributes extends Attributes.HasFill, Attributes.HasStroke, Attributes.HasVisibility {
    "direction": "ltr" | "rtl" | Attributes.Inherit;
    "dominant-baseline": "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | Attributes.Inherit;
    "font-family": string | Attributes.Inherit;
    "font-size": Attributes.Length | Attributes.Inherit;
    "font-size-adjust": number | Attributes.None | Attributes.Inherit;
    "font-stretch": "normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | Attributes.Inherit;
    "font-style": "normal" | "italic" | "oblique" | Attributes.Inherit;
    "font-variant": "normal" | "small-caps" | Attributes.Inherit;
    "font-weight": "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Attributes.Inherit;
    "kerning": "auto" | Attributes.Length | Attributes.Inherit;
    "letter-spacing": "normal" | Attributes.Length | Attributes.Inherit;
    "text-anchor": "start" | "middle" | "end" | Attributes.Inherit;
    "text-decoration": Attributes.None | "underline" | "overline" | "line-through" | "blink" | Attributes.Inherit;
    "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | Attributes.Inherit;
    "word-spacing": "normal" | Attributes.Length | Attributes.Inherit;
    "writing-mode": "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | Attributes.Inherit;
  }

  export interface TextualChild_Attributes {
    "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Attributes.Inherit;
    "baseline-shift": "auto" | "baseline" | "super" | "sub" | number | Attributes.Inherit;
  }

  export interface TextSpan_Attributes extends Text_Attributes, TextualChild_Attributes {
    textContent: Attributes.TextContent;
  }

  export class TextSpan extends AbstractRenderable<SVGTSpanElement, TextSpan_Attributes, {}> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & TextSpan_Attributes>) {
      super(context, "tspan", attrs);
    }
    public get computedLength(): number {
      return this._node.getComputedTextLength();
    }
  }

  export interface Text_Attributes extends Textual_Attributes, Graphics_Attributes {
    x: Attributes.Length;
    y: Attributes.Length;
    "x:y": Attributes.Point;
    dx: Attributes.Length;
    dy: Attributes.Length;
    "dx:dy": Attributes.Point;
    textLength?: Attributes.Length;
  }

  export class Text extends AbstractRenderable<SVGTextElement, Text_Attributes, {}> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Text_Attributes>) {
      super(context, "text", attrs);
    }
    public addSpan(content: Attributes.TextContent, lineHeight?: number | Attributes.Length, update: boolean = true): TextSpan {
      const span = new TextSpan(this.context);
      span.setAttribute("textContent", content);
      if (lineHeight) {
        span.setAttribute("x", parseFloat(this.getAttribute("x") || "0"));
        if (typeof lineHeight === "number") {
          span.setAttribute("dy", new Attributes.Dimension<"em">(lineHeight, "em"));
        } else {
          span.setAttribute("dy", lineHeight);
        }
      }
      this.add(span);
      return span;
    }
    public get computedLength(): number {
      return this._node.getComputedTextLength();
    }
  }

  export class MultilineText extends Text {
    constructor(context: Context, text: string, width: number, attrs?: Partial<Renderable_Attributes & Textual_Attributes & Text_Attributes>) {
      super(context, attrs);
      const temp = new Text(context);
      temp.setAttribute("opacity", 0);
      const span = new TextSpan(context);
      temp.add(span);
      if (attrs) {
        span.setAttributes(attrs);
      }
      const spaceWidth = temp.computedLength;
      const lines = [""];
      text.split(" ").forEach((word, i) => {
        const line = lines[lines.length - 1];
        const newLine = (line.length === 0) ? word : `${line} ${word}`;
        const lineContent = new Attributes.TextContent(newLine);
        span.setAttribute("textContent", lineContent);
        if (span.computedLength > width && line.length > 0) {
          lines.push(word);
        } else {
          lines[lines.length - 1] = newLine;
        }
      });
      lines.forEach(line => {
        if (line.length > 0) {
          this.addSpan(new Attributes.TextContent(line), 1);
        }
      });
    }
  }

}

namespace SavageDOM {

  export interface Context {
    text(content: Attributes.TextContent[], p: Attributes.Point): Elements.Renderables.Text;
    text(content: Attributes.TextContent[], x: Attributes.Length, y: Attributes.Length): Elements.Renderables.Text;
  }

  Context.prototype.text = function(this: Context, content: Attributes.TextContent[], a1: Attributes.Point | Attributes.Length, a2?: Attributes.Length): Elements.Renderables.Text {
    const attrs = (a1 instanceof Attributes.Point) ? { "x:y": a1 } : { x: a1, y: a2 };
    const t = new Elements.Renderables.Text(this, attrs);
    content.forEach(c => t.addSpan(c));
    this.addChild(t);
    return t;
  };

}
