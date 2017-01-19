namespace SavageDOM.Attribute.NonRenderable.PaintServer {

  export interface Gradient {
    gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
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

  }

}

namespace SavageDOM.Elements.NonRenderable.PaintServer {

  export abstract class AbstractGradient<E extends SVGElement, GradientAttributes extends Attribute.NonRenderable.PaintServer.Gradient> extends AbstractPaintServer<E, GradientAttributes> {}

}
