namespace SavageDOM.Attribute.NonRenderable.PaintServer {

  export interface Gradient {
    gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
    "gradientTransform.matrix": Transform.Matrix;
    "gradientTransform.translate": Transform.Translate;
    "gradientTransform.uniformScale": Transform.UniformScale;
    "gradientTransform.scale": Transform.Scale;
    "gradientTransform.rotate": Transform.Rotate;
    "gradientTransform.skewX": Transform.SkewX;
    "gradientTransform.skewY": Transform.SkewY;
    gradientTransform: List<Transform>;
    spreadMethod: "pad" | "reflect" | "repeat";
    "xlink:href": string;
  }

  export namespace Gradient {

    export interface Linear extends Gradient {
      x1: Length;
      y1: Length;
      "x1:y1": Point;
      x2: Length;
      y2: Length;
      "x2:y2": Point;
    }

    export interface Radial extends Gradient {
      cx: Length;
      cy: Length;
      "cx:cy": Point;
      r: Length;
      fx: Length;
      fy: Length;
      "fx:fy": Point;
    }

    export interface Stops {
      [offset: number]: "currentColor" | Color | Inherit;
    }

    export interface Stop {
      offset: Percentage;
      "stop-color": "currentColor" | Color | Inherit;
    }

  }

}

namespace SavageDOM.Elements.NonRenderable.PaintServer {

  export abstract class AbstractGradient<E extends SVGElement, GradientAttributes extends Attribute.NonRenderable.PaintServer.Gradient> extends AbstractPaintServer<E, GradientAttributes> {
    constructor(paper: Paper, name: string, stops: Attribute.NonRenderable.PaintServer.Gradient.Stops, attrs?: Partial<Attribute.NonRenderable & GradientAttributes>) {
      super(paper, name, attrs);
      this.paper.addDef(this);
      const stopArr: Elements.NonRenderable.PaintServer.Gradient.Stop[] = [];
      Object.keys(stops).forEach(offset => {
        stopArr.push(new SavageDOM.Elements.NonRenderable.PaintServer.Gradient.Stop(paper, Number(offset), stops[offset]));
      });
      stopArr.sort((a, b) => {
        return a.offset - b.offset;
      });
      stopArr.forEach(s => this.add(s));
    }
  }

  export namespace Gradient {
    export class Stop extends Element<SVGStopElement, Attribute.NonRenderable.PaintServer.Gradient.Stop, Events.NonRenderable> {
      constructor(paper: Paper, public offset: number, color: "currentColor" | Attribute.Color | Attribute.Inherit) {
        super(paper, "stop", { offset: new SavageDOM.Attribute.Dimension<"%">(offset * 100, "%"), "stop-color": color });
      }
    }
  }

}
