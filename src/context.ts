
import { fromEvent, Observable, ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";
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
import { Circle } from "./elements/renderables/shapes/circle";
import { Ellipse } from "./elements/renderables/shapes/ellipse";
import { Line } from "./elements/renderables/shapes/line";
import { Path } from "./elements/renderables/shapes/path";
import { Polygon } from "./elements/renderables/shapes/polygon";
import { Polyline } from "./elements/renderables/shapes/polyline";
import { Rect } from "./elements/renderables/shapes/rect";
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
    const defsElements = this._root.getElementsByTagName("defs");
    const defsElement = defsElements.item(0);
    if (defsElement) {
      this._defs = new Element<SVGDefsElement>(this, defsElement);
    } else {
      this._defs = new Element(this, this.window.document.createElementNS(XMLNS, "defs"));
    }
    Context._CONTEXT_SUBJECT.next(this);
  }
  public get root(): SVGSVGElement {
    return this._root;
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
  public circle(...args: ElementConstructorArgumentsType<typeof Circle>): Circle {
    return new Circle(this, ...args);
  }
  public ellipse(...args: ElementConstructorArgumentsType<typeof Ellipse>): Ellipse {
    return new Ellipse(this, ...args);
  }
  public line(...args: ElementConstructorArgumentsType<typeof Line>): Line {
    return new Line(this, ...args);
  }
  public path(...args: ElementConstructorArgumentsType<typeof Path>): Path {
    return new Path(this, ...args);
  }
  public polygon(...args: ElementConstructorArgumentsType<typeof Polygon>): Polygon {
    return new Polygon(this, ...args);
  }
  public polyline(...args: ElementConstructorArgumentsType<typeof Polyline>): Polyline {
    return new Polyline(this, ...args);
  }
  public rect(...args: ElementConstructorArgumentsType<typeof Rect>): Rect {
    return new Rect(this, ...args);
  }
  public text(...args: ElementConstructorArgumentsType<typeof Text>): Text {
    return new Text(this, ...args);
  }
  public wrapExisting(node: SVGCircleElement): Circle;
  public wrapExisting<SVG extends SVGElement>(node: SVG): Element<SVG>;
  public wrapExisting<SVG extends SVGElement>(node: SVG): Element<SVG> {
    return new Element(this, node);
  }
}
