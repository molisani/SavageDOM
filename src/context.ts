
import { fromEvent, Observable, ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";
import { Length } from "./attributes/base";
import { Box } from "./attributes/box";
import { PathSegment } from "./attributes/path-segment";
import { Point } from "./attributes/point";
import { TextContent } from "./attributes/text-content";
import { XLINK, XMLNS } from "./constants";
import { makeRequest, SVGDocument } from "./document";
import { Element } from "./element";
import { ClipPath } from "./elements/non-renderables/clip-path";
import { Marker } from "./elements/non-renderables/marker";
import { Mask } from "./elements/non-renderables/mask";
import { LinearGradient } from "./elements/non-renderables/paint-servers/gradients/linear";
import { RadialGradient } from "./elements/non-renderables/paint-servers/gradients/radial";
import { Pattern } from "./elements/non-renderables/paint-servers/pattern";
import { ExternalSVG } from "./elements/renderables/external";
import { ForeignObject } from "./elements/renderables/foreign-object";
import { Group } from "./elements/renderables/group";
import { Image } from "./elements/renderables/image";
import { Circle } from "./elements/renderables/shapes/circle";
import { Ellipse } from "./elements/renderables/shapes/ellipse";
import { Line } from "./elements/renderables/shapes/line";
import { Path } from "./elements/renderables/shapes/path";
import { Polygon } from "./elements/renderables/shapes/polygon";
import { Polyline } from "./elements/renderables/shapes/polyline";
import { Rect, Rect_Attributes } from "./elements/renderables/shapes/rect";
import { Text } from "./elements/renderables/text";
import { ResolvedPointEvent } from "./events";
import { ElementArgumentsType, ElementConstructorArgumentsType } from "./util";

export class Context {
  public static DEFAULT_WINDOW: Window = window;
  public static get contexts(): Observable<Context> {
    return Context._CONTEXT_SUBJECT.asObservable();
  }
  private static _CONTEXT_SUBJECT = new ReplaySubject<Context>(1);
  private _root: SVGSVGElement;
  private _defs: Element<SVGDefsElement>;
  private _target: SVGElement;
  constructor();
  constructor(id: string, window?: Window);
  constructor(el: SVGSVGElement, window?: Window);
  constructor(root?: string | SVGSVGElement, private _window: Window = Context.DEFAULT_WINDOW) {
    if (root) {
      if (typeof root === "string") {
        const el = this._window.document.getElementById(root);
        if (el instanceof SVGSVGElement) {
          this._root = el;
        } else {
          throw new Error("Element with specified ID is not valid");
        }
      } else {
        this._root = root;
      }
    } else {
      this._root = this._window.document.createElementNS(XMLNS, "svg") as SVGSVGElement;
      this._window.document.body.appendChild(this._root);
    }
    this._root.setAttribute("xmlns", XMLNS);
    this._root.setAttributeNS(XMLNS, "xlink", XLINK);
    this._root.setAttribute("version", "1.1");
    this._target = this._root;
    const defsElements = this._root.getElementsByTagName("defs");
    const defsElement = defsElements.item(0);
    if (defsElement) {
      this._defs = new Element<SVGDefsElement>(this, defsElement);
    } else {
      this._defs = new Element<SVGDefsElement>(this, "defs");
    }
    Context._CONTEXT_SUBJECT.next(this);
  }
  public get window(): Window {
    return this._window;
  }
  public calculateLocalPoint<ELEMENT extends SVGGraphicsElement>(elementNode: ELEMENT, action: MouseEvent | Touch): DOMPoint {
    const ref = this._root.createSVGPoint();
    ref.x = action.clientX;
    ref.y = action.clientY;
    const matrix = elementNode.getScreenCTM();
    if (!matrix) {
      throw new Error(`No Screen Coordinate Transform Matrix found for node "${elementNode.id}"`);
    }
    return ref.matrixTransform(matrix.inverse());
  }
  public get mousePosition(): Observable<ResolvedPointEvent> {
    return fromEvent<MouseEvent>(this._root, "mousemove").pipe(map((event: MouseEvent) => {
      const local = this.calculateLocalPoint(this._root, event);
      return {
        ...event,
        local: new Point(local.x, local.y),
        page: new Point(event.pageX, event.pageY),
        screen: new Point(event.screenX, event.screenY),
      };
    }));
  }
  public addDef(def: SVGElement | Element<SVGElement, any, any>) {
    this._defs.add(def);
  }
  public addChild(el: SVGElement | Element<SVGElement, any, any>) {
    this._target.appendChild((el instanceof Element) ? el.node : el);
  }
  public async load(url: string): Promise<ExternalSVG> {
    const xmlDocument = await makeRequest("GET", url);
    const externalDocument = new SVGDocument(this, xmlDocument);
    return new ExternalSVG(this, externalDocument);
  }
  public clipPath(...args: ElementConstructorArgumentsType<typeof ClipPath>): ClipPath {
    return new ClipPath(this, ...args);
  }
  public marker(...args: ElementConstructorArgumentsType<typeof Marker>): Marker {
    return new Marker(this, ...args);
  }
  public mask(...args: ElementConstructorArgumentsType<typeof Mask>): Mask {
    return new Mask(this, ...args);
  }
  public linearGradient(...args: ElementConstructorArgumentsType<typeof LinearGradient>): LinearGradient {
    return new LinearGradient(this, ...args);
  }
  public radialGradient(...args: ElementConstructorArgumentsType<typeof RadialGradient>): RadialGradient {
    return new RadialGradient(this, ...args);
  }
  public pattern(...args: ElementConstructorArgumentsType<typeof Pattern>): Pattern {
    return new Pattern(this, ...args);
  }
  public foreignObject(...args: ElementConstructorArgumentsType<typeof ForeignObject>): ForeignObject {
    return new ForeignObject(this, ...args);
  }
  public group(...args: ElementConstructorArgumentsType<typeof Group>): Group {
    return new Group(this, ...args);
  }
  public async imageAfterLoad(...args: ElementArgumentsType<typeof Image.afterLoad>): Promise<Image> {
    return Image.afterLoad(this, ...args);
  }
  public circle(...args: ElementConstructorArgumentsType<typeof Circle>): Circle {
    return new Circle(this, ...args);
  }
  public ellipse(...args: ElementConstructorArgumentsType<typeof Ellipse>): Ellipse {
    return new Ellipse(this, ...args);
  }
  public line(...args: ElementConstructorArgumentsType<typeof Line>): Line {
    return new Line(this, ...args);
  }
  public path(d: PathSegment[], pathLength?: number): Path {
    const attrs = { d, pathLength };
    return new Path(this, attrs);
  }
  public polygon(points: Point[]): Polygon {
    const attrs = { points };
    return new Polygon(this, attrs);
  }
  public polyline(points: Point[]): Polyline {
    const attrs = { points };
    return new Polyline(this, attrs);
  }
  public rect(box: Box, r?: Point): Rect;
  public rect(box: Box, rx?: Length, ry?: Length): Rect;
  public rect(p: Point, width: Length, height: Length, r?: Point): Rect;
  public rect(p: Point, width: Length, height: Length, rx?: Length, ry?: Length): Rect;
  public rect(x: Length, y: Length, width: Length, height: Length, r?: Point): Rect;
  public rect(a1: Box | Point | Length, a2?: Point | Length, a3?: Length, a4?: Length | Point, a5?: Length | Point, a6?: Length): Rect {
    const attrs: Partial<Rect_Attributes> = {};
    if (a1 instanceof Box) {
      attrs["x:y:width:height"] = a1;
      if (a2 instanceof Point) {
        attrs["rx:ry"] = a2;
      } else {
        if (a2 !== undefined) {
          attrs["rx"] = a2;
        }
        if (a3 !== undefined) {
          attrs["ry"] = a3;
        }
      }
    } else if (a1 instanceof Point) {
      attrs["x:y"] = a1;
      if (a2 !== undefined && !(a2 instanceof Point)) {
        attrs["width"] = a2;
      }
      if (a3 !== undefined) {
        attrs["height"] = a3;
      }
      if (a4 instanceof Point) {
        attrs["rx:ry"] = a4;
      } else {
        if (a4 !== undefined) {
          attrs["rx"] = a4;
        }
        if (a5 !== undefined && !(a5 instanceof Point)) {
          attrs["ry"] = a5;
        }
      }
    } else {
      attrs["x"] = a1;
      if (a2 !== undefined && !(a2 instanceof Point)) {
        attrs["y"] = a2;
      }
      if (a3 !== undefined) {
        attrs["width"] = a3;
      }
      if (a4 !== undefined && !(a4 instanceof Point)) {
        attrs["height"] = a4;
      }
      if (a5 instanceof Point) {
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
    return new Rect(this, attrs);
  }
  public text(content: TextContent[], p: Point): Text;
  public text(content: TextContent[], x: Length, y: Length): Text;
  public text(content: TextContent[], a1: Point | Length, a2?: Length): Text {
    const attrs = (a1 instanceof Point) ? { "x:y": a1 } : { x: a1, y: a2 };
    const t = new Text(this, attrs);
    content.forEach(c => t.addSpan(c));
    this.addChild(t);
    return t;
  }
}
