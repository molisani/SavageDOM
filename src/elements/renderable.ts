namespace SavageDOM.Attribute {

  export interface Renderable extends Presentation, HasStyle, HasClass, Transformable {}

  export namespace Renderable {

    export namespace Shape {

      export interface Circle {
        cx: Length;
        cy: Length;
        "cx:cy": Point;
        r: Length;
      }

      export interface Ellipse {
        cx: Length;
        cy: Length;
        "cx:cy": Point;
        rx: Length;
        ry: Length;
        "rx:ry": Point;
      }

      export interface Line {
        x1: Length;
        y1: Length;
        "x1:y1": Point;
        x2: Length;
        y2: Length;
        "x2:y2": Point;
      }

      export interface Polygon {
        points: List<Point>;
      }

      export interface Polyline {
        points: List<Point>;
      }

      export interface Path {
        d: List<PathSegment>;
        pathLength: number;
      }

      export interface Rect {
        x: Length;
        y: Length;
        "x:y": Point;
        width: Length;
        height: Length;
        "width:height": Point;
        "x:y:width:height": ViewBox;
        rx: Length;
        ry: Length;
        "rx:ry": Point;
      }

    }

    export interface Image {
      x: Length;
      y: Length;
      "x:y": Point;
      width: Length;
      height: Length;
      "width:height": Point;
      "x:y:width:height": ViewBox;
      "xlink:href": string;
      preserveAspectRatio?: PreserveAspectRatio;
      viewBox?: ViewBox;
    }

    export interface Text {
      x: Length;
      y: Length;
      "x:y": Point;
      dx: Length;
      dy: Length;
      "dx:dy": Point;
      textLength?: Length;
    }

    // export type Use = { x: Length, y: Length, width: Length, height: Length, "width:height": Point, "x:y:width:height": ViewBox, "xlink:href": Element<any, any> };

  }

}

namespace SavageDOM.Elements {

  export abstract class Renderable<E extends SVGElement, RenderableAttributes> extends Element<E, Attribute.Renderable & RenderableAttributes> {}

  export namespace Renderable {

    export abstract class Shape<E extends SVGElement, ShapeAttributes> extends Renderable<E, ShapeAttributes> {}

    export namespace Shape {

      export class Circle extends Shape<SVGCircleElement, Attribute.Renderable.Shape.Circle> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Circle>) {
          super(paper, "circle", attrs);
        }
      }

      export class Ellipse extends Shape<SVGEllipseElement, Attribute.Renderable.Shape.Ellipse> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Ellipse>) {
          super(paper, "ellipse", attrs);
        }
      }

      export class Line extends Shape<SVGLineElement, Attribute.Renderable.Shape.Line> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Line>) {
          super(paper, "line", attrs);
        }
      }

      export class Polygon extends Shape<SVGPolygonElement, Attribute.Renderable.Shape.Polygon> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Polygon>) {
          super(paper, "polygon", attrs);
        }
      }

      export class Polyline extends Shape<SVGPolylineElement, Attribute.Renderable.Shape.Polyline> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Polyline>) {
          super(paper, "polyline", attrs);
        }
      }

      export class Path extends Shape<SVGPathElement, Attribute.Renderable.Shape.Path> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Path>) {
          super(paper, "path", attrs);
        }
      }

      export class Rect extends Shape<SVGRectElement, Attribute.Renderable.Shape.Rect> {
        constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Shape.Rect>) {
          super(paper, "rect", attrs);
        }
      }

    }

    export class Image extends Renderable<SVGImageElement, Attribute.Renderable.Image> {
      constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Renderable.Image>) {
        super(paper, "image", attrs);
      }
    }

    export class Text extends Renderable<SVGTextElement, Attribute.Textual | Attribute.Renderable.Text> {
      constructor(paper: Paper, attrs?: Partial<Attribute.Renderable | Attribute.Textual | Attribute.Renderable.Text>) {
        super(paper, "text", attrs);
      }
    }

    // export class Use extends Element<SVGUseElement, Attributes.Graphic & Attributes.Graphic.Use> {
    //   constructor(paper: Paper, attrs?: Partial<Attributes.Graphic & Attributes.Graphic.Use>) {
    //       super(paper, 'use', attrs);
    //     }
    // };
    export class G extends Renderable<SVGGElement, void> {
      constructor(paper: Paper, attrs?: Partial<Attribute.Renderable>) {
        super(paper, "g", attrs);
      }
    }

  }

}
