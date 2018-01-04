namespace SavageDOM.Elements.Renderables.Shapes {

  export interface Rect_Attributes {
    x: Attributes.Length;
    y: Attributes.Length;
    "x:y": Attributes.Point;
    width: Attributes.Length;
    height: Attributes.Length;
    "width:height": Attributes.Point;
    "x:y:width:height": Attributes.Box;
    rx: Attributes.Length;
    ry: Attributes.Length;
    "rx:ry": Attributes.Point;
  }

  export class Rect extends AbstractShape<SVGRectElement, Rect_Attributes> {
    constructor(context: Context, attrs?: Partial<Renderable_Attributes & Shape_Attributes & Rect_Attributes>) {
      super(context, "rect", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Context {
    rect(box: Attributes.Box, r?: Attributes.Point): Elements.Renderables.Shapes.Rect;
    rect(box: Attributes.Box, rx?: Attributes.Length, ry?: Attributes.Length): Elements.Renderables.Shapes.Rect;
    rect(p: Attributes.Point, width: Attributes.Length, height: Attributes.Length, r?: Attributes.Point): Elements.Renderables.Shapes.Rect;
    rect(p: Attributes.Point, width: Attributes.Length, height: Attributes.Length, rx?: Attributes.Length, ry?: Attributes.Length): Elements.Renderables.Shapes.Rect;
    rect(x: Attributes.Length, y: Attributes.Length, width: Attributes.Length, height: Attributes.Length, r?: Attributes.Point): Elements.Renderables.Shapes.Rect;
  }

  Context.prototype.rect = function(this: Context, a1: Attributes.Box | Attributes.Point | Attributes.Length, a2?: Attributes.Point | Attributes.Length, a3?: Attributes.Length, a4?: Attributes.Length | Attributes.Point, a5?: Attributes.Length | Attributes.Point, a6?: Attributes.Length): Elements.Renderables.Shapes.Rect {
    const attrs = {};
    if (a1 instanceof Attributes.Box) {
      attrs["x:y:width:height"] = a1;
      if (a2 instanceof Attributes.Point) {
        attrs["rx:ry"] = a2;
      } else {
        if (a2 !== undefined) {
          attrs["rx"] = a2;
        }
        if (a3 !== undefined) {
          attrs["ry"] = a3;
        }
      }
    } else if (a1 instanceof Attributes.Point) {
      attrs["x:y"] = a1;
      if (a2 !== undefined) {
        attrs["width"] = a2;
      }
      if (a3 !== undefined) {
        attrs["height"] = a3;
      }
      if (a4 instanceof Attributes.Point) {
        attrs["rx:ry"] = a4;
      } else {
        if (a4 !== undefined) {
          attrs["rx"] = a4;
        }
        if (a5 !== undefined) {
          attrs["ry"] = a5;
        }
      }
    } else {
      attrs["x"] = a1;
      if (a2 !== undefined) {
        attrs["y"] = a2;
      }
      if (a3 !== undefined) {
        attrs["width"] = a3;
      }
      if (a4 !== undefined) {
        attrs["height"] = a4;
      }
      if (a5 instanceof Attributes.Point) {
        attrs["rx:ry"] = a5;
      } else {
        if (a5 !== undefined) {
          attrs["rx"] = a5;
        }
        if (a6 !== undefined) {
          attrs["ry"] = a6;
        }
      }
    }
    return new Elements.Renderables.Shapes.Rect(this, attrs);
  };

}
