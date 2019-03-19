
import { fromEvent, Observable, ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";
import { Point } from "./attributes/point";
import { XLINK, XMLNS } from "./constants";
import { makeRequest } from "./document";
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
import { ElementArgumentsType } from "./util";

export class Context {
  public static DEFAULT_WINDOW: Window = window;
  public static get contexts(): Observable<Context> {
    return Context._CONTEXT_SUBJECT.asObservable();
  }
  private static _CONTEXT_SUBJECT = new ReplaySubject<Context>(1);
  private _root: SVGSVGElement;
  private _defs: Element<SVGDefsElement>;
  private _linkedDocs = new WeakSet<Document>();
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
      this._root = this._window.document.createElementNS(XMLNS.SVG, "svg") as SVGSVGElement;
      this._window.document.body.appendChild(this._root);
    }
    this._root.setAttribute("xmlns", XMLNS.SVG);
    this._root.setAttributeNS(XMLNS.SVG, "xlink", XLINK);
    this._root.setAttribute("version", "1.1");
    const defsElements = this._root.getElementsByTagName("defs");
    const defsElement = defsElements.item(0);
    if (defsElement) {
      this._defs = new Element<SVGDefsElement>(this, defsElement);
    } else {
      this._defs = new Element(this, this.window.document.createElementNS(XMLNS.SVG, "defs"));
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
  public injectDocumentDefs(doc: Document) {
    if (!this._linkedDocs.has(doc)) {
      const allDefs = Array.from(doc.getElementsByTagName("defs"));
      for (const defs of allDefs) {
        const childDefs = Array.from(defs.children) as SVGElement[];
        for (const def of childDefs) {
          const importedDef = this.window.document.importNode(def, true);
          this.addDef(importedDef);
        }
      }
      this._linkedDocs.add(doc);
    }
  }
  public async load(url: string): Promise<ExternalSVG> {
    const xmlDocument = await makeRequest("GET", url);
    return new ExternalSVG(this, xmlDocument);
  }
  public addChild(el: SVGElement | Element<SVGElement>) {
    if (el instanceof Element) {
      el.context = this;
      this._root.appendChild(el.node);
    } else {
      this._root.appendChild(el);
    }
  }
  public ensureChild(el: SVGElement) {
    if (!this._root.contains(el)) {
      this._root.appendChild(el);
    }
  }
  public clipPath(...args: ElementArgumentsType<typeof ClipPath.create>): ClipPath {
    return ClipPath.create(this, ...args);
  }
  public marker(...args: ElementArgumentsType<typeof Marker.create>): Marker {
    return Marker.create(this, ...args);
  }
  public mask(...args: ElementArgumentsType<typeof Mask.create>): Mask {
    return Mask.create(this, ...args);
  }
  public linearGradient(...args: ElementArgumentsType<typeof LinearGradient.create>): LinearGradient {
    return LinearGradient.create(this, ...args);
  }
  public radialGradient(...args: ElementArgumentsType<typeof RadialGradient.create>): RadialGradient {
    return RadialGradient.create(this, ...args);
  }
  public pattern(...args: ElementArgumentsType<typeof Pattern.create>): Pattern {
    return Pattern.create(this, ...args);
  }
  public foreignObject(...args: ElementArgumentsType<typeof ForeignObject.create>): ForeignObject {
    return ForeignObject.create(this, ...args);
  }
  public group(...args: ElementArgumentsType<typeof Group.create>): Group {
    return Group.create(this, ...args);
  }
  public async imageAfterLoad(...args: ElementArgumentsType<typeof Image.afterLoad>): Promise<Image> {
    return Image.afterLoad(this, ...args);
  }
  public circle(...args: ElementArgumentsType<typeof Circle.create>): Circle {
    return Circle.create(this, ...args);
  }
  public ellipse(...args: ElementArgumentsType<typeof Ellipse.create>): Ellipse {
    return Ellipse.create(this, ...args);
  }
  public line(...args: ElementArgumentsType<typeof Line.create>): Line {
    return Line.create(this, ...args);
  }
  public path(...args: ElementArgumentsType<typeof Path.create>): Path {
    return Path.create(this, ...args);
  }
  public polygon(...args: ElementArgumentsType<typeof Polygon.create>): Polygon {
    return Polygon.create(this, ...args);
  }
  public polyline(...args: ElementArgumentsType<typeof Polyline.create>): Polyline {
    return Polyline.create(this, ...args);
  }
  public rect(...args: ElementArgumentsType<typeof Rect.create>): Rect {
    return Rect.create(this, ...args);
  }
  public text(...args: ElementArgumentsType<typeof Text.create>): Text {
    return Text.create(this, ...args);
  }
}
