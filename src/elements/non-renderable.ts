namespace vektor.Attribute {

  export interface NonRenderable extends Presentation, HasStyle, HasClass {};

  export namespace NonRenderable {

    export namespace PaintServer {

      export interface Gradient {
        gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
        gradientTransform: List<Transform>;
        spreadMethod: "pad" | "reflect" | "repeat";
        "xlink:href": string;
      };

      export namespace Gradient {

        export interface Linear extends Gradient {
          x1: Length;
          y1: Length;
          "x1:y1": Point;
          x2: Length;
          y2: Length;
          "x2:y2": Point;
        };

        export interface Radial extends Gradient {
          cx: Length;
          cy: Length;
          "cx:cy": Point;
          r: Length;
          fx: Length;
          fy: Length;
          "fx:fy": Point;
        };

        export interface Stops {
          [offset: number]: "currentColor" | Color | Inherit;
        };

      }

      export interface Pattern {
        patternUnits: "userSpaceOnUse" | "objectBoundingBox";
        patternContentUnits: "userSpaceOnUse" | "objectBoundingBox";
        patternTransform: List<Transform>;
        x: Length;
        y: Length;
        "x:y": Point;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": ViewBox;
        "xlink:href": string;
        preserveAspectRatio: PreserveAspectRatio;
        viewBox: ViewBox;
      };

    }

    export interface Marker {
      markerUnits: "userSpaceOnUse" | "strokeWidth";
      refX: Length;
      refY: Length;
      "refX:refY": Point;
      markerWidth: Length;
      markerHeight: Length;
      "refX:refY:markerWidth:markerHeight": ViewBox;
      orient: "auto" | "auto-start-reverse" | number | string;
      viewBox: ViewBox;
    };

    export interface Mask {
      maskUnits: "userSpaceOnUse" | "objectBoundingBox";
      maskContentUnits: "userSpaceOnUse" | "objectBoundingBox";
      x: Length;
      y: Length;
      width: Length;
      height: Length;
      "width:height": Point;
      "x:y:width:height": ViewBox;
    };

  }

}

namespace vektor.Elements {

  export abstract class NonRenderable<E extends SVGElement, NonRenderableAttributes> extends Element<E, Attribute.NonRenderable & NonRenderableAttributes> {}

  export namespace NonRenderable {

    export abstract class PaintServer<E extends SVGElement, PaintServerAttributes> extends NonRenderable<E, PaintServerAttributes> {}

    export namespace PaintServer {

      export abstract class Gradient<E extends SVGElement, GradientAttributes extends Attribute.NonRenderable.PaintServer.Gradient> extends PaintServer<E, GradientAttributes> {}

      export namespace Gradient {

        export class Linear extends Gradient<SVGLinearGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Linear> {
          constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable | Attribute.NonRenderable.PaintServer.Gradient.Linear>) {
            super(paper, "linearGradient", attrs);
            Object.keys(stops).forEach(offset => {
              const stop = window.document.createElementNS(XMLNS, "stop");
              stop.setAttribute("offset", offset);
              stop.setAttribute("stop-color", stops[offset]);
              this.node.appendChild(stop);
            });
          }
        }

        export class Radial extends Gradient<SVGRadialGradientElement, Attribute.NonRenderable.PaintServer.Gradient.Radial> {
          constructor(paper: Paper, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable | Attribute.NonRenderable.PaintServer.Gradient.Radial>) {
            super(paper, "radialGradient", attrs);
            Object.keys(stops).forEach(offset => {
              const stop = window.document.createElementNS(XMLNS, "stop");
              stop.setAttribute("offset", offset);
              stop.setAttribute("stop-color", stops[offset]);
              this.node.appendChild(stop);
            });
          }
        }

      }

      export class Pattern extends PaintServer<SVGPatternElement, Attribute.NonRenderable.PaintServer.Pattern> {
        constructor(public paper: Paper, w: number, h: number, x?: number, y?: number, view?: Attribute.ViewBox) {
          super(paper, "pattern");
          this.paper.addDef(this);
          this.setAttribute("width", w);
          this.setAttribute("height", h);
          if (x !== undefined || y !== undefined || view) {
            this.setAttribute("patternUnits", "userSpaceOnUse");
            if (x !== undefined) {
              this.setAttribute("x", x);
            }
            if (y !== undefined) {
              this.setAttribute("y", y);
            }
            if (view) {
              this.setAttribute("viewBox", view);
            } else {
              this.setAttribute("viewBox", new Attribute.ViewBox(0, 0, w, h));
            }
          }
        }
      }

    }

    export class Marker extends Element<SVGMarkerElement, Attribute.NonRenderable & Attribute.NonRenderable.Marker> {
      constructor(paper: Paper, attrs?: Partial<Attribute.NonRenderable & Attribute.NonRenderable.Marker>) {
        super(paper, "marker", attrs);
      }
    }

    export class Mask extends Element<SVGMaskElement, Attribute.NonRenderable & Attribute.NonRenderable.Mask> {
      constructor(public paper: Paper, w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox") {
        super(paper, "mask");
        this.paper.addDef(this);
        this.setAttribute("width", w);
        this.setAttribute("height", h);
        if (x !== undefined) {
          this.setAttribute("x", x);
        }
        if (y !== undefined) {
          this.setAttribute("y", y);
        }
        if (units !== undefined) {
          this.setAttribute("maskUnits", units);
        }
        if (contentUnits !== undefined) {
          this.setAttribute("maskContentUnits", contentUnits);
        }
      }
    }

  }

}
