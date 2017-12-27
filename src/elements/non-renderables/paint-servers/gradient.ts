namespace SavageDOM.Elements.NonRenderables.PaintServers {

  export interface Gradient_Attributes {
    gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
    "gradientTransform.matrix": Attributes.Transforms.Matrix;
    "gradientTransform.translate": Attributes.Transforms.Translate;
    "gradientTransform.uniformScale": Attributes.Transforms.UniformScale;
    "gradientTransform.scale": Attributes.Transforms.Scale;
    "gradientTransform.rotate": Attributes.Transforms.Rotate;
    "gradientTransform.skewX": Attributes.Transforms.SkewX;
    "gradientTransform.skewY": Attributes.Transforms.SkewY;
    gradientTransform: Attributes.Transform[];
    spreadMethod: "pad" | "reflect" | "repeat";
    "xlink:href": string;
  }

  export interface Stops {
    [offset: number]: "currentColor" | Attributes.Color | Attributes.Inherit;
  }

  export interface Stop_Attributes {
    offset: Attributes.Percentage;
    "stop-color": "currentColor" | Attributes.Color | Attributes.Inherit;
    "stop-opacity": number | Attributes.Inherit;
  }

  export class Stop extends Element<SVGStopElement, Stop_Attributes, NonRenderable_Events> {
    constructor(context: Context, public offset: number, color: "currentColor" | Attributes.Color | Attributes.Inherit) {
      super(context, "stop", {
        offset: new Attributes.Dimension<"%">(offset * 100, "%"),
        "stop-color": color,
      });
    }
  }

  export abstract class AbstractGradient<E extends SVGElement, GradientAttributes extends Gradient_Attributes> extends AbstractPaintServer<E, GradientAttributes> {
    constructor(context: Context, name: string, stops: Stops, attrs?: Partial<NonRenderable_Attributes & GradientAttributes>) {
      super(context, name, attrs);
      this.context.addDef(this);
      const stopArr: Stop[] = [];
      Object.keys(stops).forEach(offset => {
        stopArr.push(new Stop(context, Number(offset), stops[offset]));
      });
      stopArr.sort((a, b) => {
        return a.offset - b.offset;
      });
      stopArr.forEach(s => this.add(s));
    }
  }

}
