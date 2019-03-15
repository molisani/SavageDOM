
import { fromEvent, Observable, ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";
import { Renderer } from "./animation";
import { Point } from "./attributes/point";
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
import { Circle, Circle_Args1, Circle_Args2, Circle_Arguments } from "./elements/renderables/shapes/circle";
import { Ellipse, Ellipse_Args1, Ellipse_Args2, Ellipse_Arguments } from "./elements/renderables/shapes/ellipse";
import { Line, Line_Args1, Line_Args2, Line_Arguments } from "./elements/renderables/shapes/line";
import { Path, Path_Arguments } from "./elements/renderables/shapes/path";
import { Polygon, Polygon_Arguments } from "./elements/renderables/shapes/polygon";
import { Polyline, Polyline_Arguments } from "./elements/renderables/shapes/polyline";
import { Rect, Rect_Args1, Rect_Args2, Rect_Args3, Rect_Args4, Rect_Args5, Rect_Args6, Rect_Args7, Rect_Args8, Rect_Args9, Rect_Arguments } from "./elements/renderables/shapes/rect";
import { Text } from "./elements/renderables/text";
import { ResolvedPointEvent } from "./events";
import { ElementArgumentsType, ElementConstructorArgumentsType } from "./util";

function isSVGSVGElement(el: { tagName: string } | null): el is SVGSVGElement {
  if (el) {
    return el.tagName === "svg";
  }
  return false;
}

export class Context {
  public static get contexts(): Observable<Context> {
    return Context._CONTEXT_SUBJECT.asObservable();
  }
  private static _CONTEXT_SUBJECT = new ReplaySubject<Context>(1);
  private _root: SVGSVGElement;
  private _defs: Element<SVGDefsElement>;
  constructor();
  constructor(id: string, window?: Window, renderer?: Renderer);
  constructor(el: SVGSVGElement, window?: Window, renderer?: Renderer);
  constructor(root?: string | SVGSVGElement, private _window: Window = window, private _renderer: Renderer = Renderer.getInstance()) {
    if (root) {
      if (typeof root === "string") {
        const el = this._window.document.getElementById(root);
        if (isSVGSVGElement(el)) {
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
    const defsElements = this._root.getElementsByTagName("defs");
    const defsElement = defsElements.item(0);
    if (defsElement) {
      this._defs = new Element<SVGDefsElement>(this, defsElement);
    } else {
      this._defs = new Element<SVGDefsElement>(this, "defs");
    }
    Context._CONTEXT_SUBJECT.next(this);
  }
  public get root(): SVGSVGElement {
    return this._root;
  }
  public get window(): Window {
    return this._window;
  }
  public get renderer(): Renderer {
    return this._renderer;
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
  public addDef(def: SVGElement | Element<SVGElement>) {
    this._defs.add(def);
  }
  public addChild(el: SVGElement | Element<SVGElement>) {
    if (el instanceof Element) {
      el.context = this;
      this._root.appendChild(el.node);
    } else {
      this._root.appendChild(el);
    }
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
  public circle(...args: Circle_Args1): Circle;
  public circle(...args: Circle_Args2): Circle;
  public circle(...args: Circle_Arguments): Circle {
    return new Circle(this, ...args);
  }
  public ellipse(...args: Ellipse_Args1): Ellipse;
  public ellipse(...args: Ellipse_Args2): Ellipse;
  public ellipse(...args: Ellipse_Arguments): Ellipse {
    return new Ellipse(this, ...args);
  }
  public line(...args: Line_Args1): Line;
  public line(...args: Line_Args2): Line;
  public line(...args: Line_Arguments): Line {
    return new Line(this, ...args);
  }
  public path(...args: Path_Arguments): Path {
    return new Path(this, ...args);
  }
  public polygon(...args: Polygon_Arguments): Polygon {
    return new Polygon(this, ...args);
  }
  public polyline(...args: Polyline_Arguments): Polyline {
    return new Polyline(this, ...args);
  }
  public rect(...args: Rect_Args1): Rect;
  public rect(...args: Rect_Args2): Rect;
  public rect(...args: Rect_Args3): Rect;
  public rect(...args: Rect_Args4): Rect;
  public rect(...args: Rect_Args5): Rect;
  public rect(...args: Rect_Args6): Rect;
  public rect(...args: Rect_Args7): Rect;
  public rect(...args: Rect_Args8): Rect;
  public rect(...args: Rect_Args9): Rect;
  public rect(...args: Rect_Arguments): Rect {
    return new Rect(this, ...args);
  }
  public text(...args: ElementConstructorArgumentsType<typeof Text>): Text {
    return new Text(this, ...args);
  }
}
