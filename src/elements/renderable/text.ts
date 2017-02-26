namespace SavageDOM.Attribute {

  export interface Textual extends HasFill, HasStroke, HasVisibility {
    "direction": "ltr" | "rtl" | Inherit;
    "dominant-baseline": "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | Inherit;
    "font-family": string | Inherit;
    "font-size": Length | Inherit;
    "font-size-adjust": number | None | Inherit;
    "font-stretch": "normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | Inherit;
    "font-style": "normal" | "italic" | "oblique" | Inherit;
    "font-variant": "normal" | "small-caps" | Inherit;
    "font-weight": "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Inherit;
    "kerning": "auto" | Length | Inherit;
    "letter-spacing": "normal" | Length | Inherit;
    "text-anchor": "start" | "middle" | "end" | Inherit;
    "text-decoration": None | "underline" | "overline" | "line-through" | "blink" | Inherit;
    "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | Inherit;
    "word-spacing": "normal" | Length | Inherit;
    "writing-mode": "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | Inherit;
  }

  export interface TextualChild {
    "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Inherit;
    "baseline-shift": "auto" | "baseline" | "super" | "sub" | number | Inherit;
  }

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
    parse(css: string | null): TextContent {
      return new TextContent(css || "");
    }
    get<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs, any>, attr: A): TextContent {
      return this.parse(((element as any)._node as SVGTextElement).textContent);
    }
    set<Attrs, A extends keyof Attrs>(element: Element<SVGElement, Attrs, any>, attr: A, override?: TextContent): void {
      ((element as any)._node as SVGTextElement).textContent = TextContent.escapeHtml(this._str || this._cb());
    }
    interpolate(from: TextContent, t: number): TextContent {
      return t < 0.5 ? from : this;
    }
  }

}

namespace SavageDOM.Attribute.Renderable {

  export interface Text extends Textual, Graphics {
    x: Length;
    y: Length;
    "x:y": Point;
    dx: Length;
    dy: Length;
    "dx:dy": Point;
    textLength?: Length;
  }

  export interface TextSpan extends Text, TextualChild {
    textContent: Attribute.TextContent;
  }

}

namespace SavageDOM.Elements.Renderable {

  export class TextSpan extends AbstractRenderable<SVGTSpanElement, Attribute.Renderable.TextSpan, void> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.TextSpan>) {
      super(paper, "tspan", attrs);
    }
    public get computedLength(): number {
      return this._node.getComputedTextLength();
    }
  }

  export class Text extends AbstractRenderable<SVGTextElement, Attribute.Renderable.Text, void> {
    constructor(paper: Paper, attrs?: Partial<Attribute.Renderable & Attribute.Renderable.Text>) {
      super(paper, "text", attrs);
    }
    addSpan(content: Attribute.TextContent, lineHeight?: number | Attribute.Length, update: boolean = true): TextSpan {
      const span = new TextSpan(this.paper);
      span.setAttribute("textContent", content);
      if (lineHeight) {
        span.setAttribute("x", parseFloat(this.getAttribute("x") || "0"));
        if (typeof lineHeight === "number") {
          span.setAttribute("dy", new Attribute.Dimension<"em">(lineHeight, "em"));
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
    constructor(paper: Paper, text: string, width: number, attrs?: Partial<Attribute.Renderable & Attribute.Textual & Attribute.Renderable.Text>) {
      super(paper, attrs);
      const temp = new SavageDOM.Elements.Renderable.Text(paper);
      temp.setAttribute("opacity", 0);
      const span = new SavageDOM.Elements.Renderable.TextSpan(paper);
      temp.add(span);
      if (attrs) {
        span.setAttributes(attrs);
      }
      const spaceWidth = temp.computedLength;
      const lines = [""];
      text.split(" ").forEach((word, i) => {
        const line = lines[lines.length - 1];
        const newLine = (line.length === 0) ? word : `${line} ${word}`;
        const lineContent = new SavageDOM.Attribute.TextContent(newLine);
        span.setAttribute("textContent", lineContent);
        if (span.computedLength > width && line.length > 0) {
          lines.push(word);
        } else {
          lines[lines.length - 1] = newLine;
        }
      });
      lines.forEach(line => {
        if (line.length > 0) {
          this.addSpan(new SavageDOM.Attribute.TextContent(line), 1);
        }
      });
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    text(content: Attribute.TextContent[], x: Attribute.Length, y: Attribute.Length): Elements.Renderable.Text;
    multilineText(content: Attribute.TextContent)
  }

  Paper.prototype.text = function(this: SavageDOM.Paper, content: Attribute.TextContent[], x: Attribute.Length = 0, y: Attribute.Length = 0): Elements.Renderable.Text {
    const t = new Elements.Renderable.Text(this, { x, y });
    content.forEach(c => t.addSpan(c));
    return t;
  };

}
