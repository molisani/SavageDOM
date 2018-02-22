import { Observable, ReplaySubject } from "rxjs";
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
import { Stops } from "./elements/non-renderables/paint-servers/gradient";
import { LinearGradient, LinearGradient_Attributes } from "./elements/non-renderables/paint-servers/gradients/linear";
import { RadialGradient, RadialGradient_Attributes } from "./elements/non-renderables/paint-servers/gradients/radial";
import { Pattern } from "./elements/non-renderables/paint-servers/pattern";
import { Component } from "./elements/renderables/component";
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

interface ElementConstructor<E, Attrs> {
  new(context: Context, attrs?: Partial<Attrs>): E;
}

export class Context {
  public static DEFAULT_WINDOW: Window = window;
  public static get contexts(): Observable<Context> {
    return Context._CONTEXT_SUBJECT.asObservable();
  }
  private static _CONTEXT_SUBJECT = new ReplaySubject<Context>(1);
  private _root: SVGSVGElement;
  private _defs: Element<SVGDefsElement, any, any>;
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
    if (defsElements.length > 0) {
      this._defs = new Element<SVGDefsElement, any, any>(this, defsElements.item(0));
    } else {
      this._defs = new Element<SVGDefsElement, any, any>(this, "defs");
    }
    Context._CONTEXT_SUBJECT.next(this);
  }
  public get window(): Window {
    return this._window;
  }
  public get refPoint(): SVGPoint {
    return this._root.createSVGPoint();
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
  public clipPath(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): ClipPath {
    return new ClipPath(this, w, h, x, y, units, contentUnits);
  }
  public marker(): Marker {
    return new Marker(this, {});
  }
  public mask(w: number, h: number, x?: number, y?: number, units?: "userSpaceOnUse" | "objectBoundingBox", contentUnits?: "userSpaceOnUse" | "objectBoundingBox"): Mask {
    return new Mask(this, w, h, x, y, units, contentUnits);
  }
  public linearGradient(stops: Stops, attrs?: LinearGradient_Attributes): LinearGradient {
    return new LinearGradient(this, stops, attrs);
  }
  public radialGradient(stops: Stops, attrs?: RadialGradient_Attributes): RadialGradient {
    return new RadialGradient(this, stops, attrs);
  }
  public pattern(w: number, h: number, x?: number, y?: number, view?: Box): Pattern {
    return new Pattern(this, w, h, x, y, view);
  }
  public foreignObject(html: HTMLElement, x: Length, y: Length, width: Length, height: Length): ForeignObject {
    const el = new ForeignObject(this, { x, y, width, height });
    el.addHTML(html);
    this.addChild(el);
    return el;
  }
  public group(els: Element<SVGElement, any, any>[]): Group {
    const el = new Group(this);
    els.forEach(child => el.add(child));
    this.addChild(el);
    return el;
  }
  public async image(href: string): Promise<Image> {
    const img = new Image(this);
    const promise = img.getEvent("load").take(1).toPromise();
    img.setAttribute("href", href);
    this.addChild(img);
    const event = await promise;
    return img;
  }
  public circle(c: Point, r: Length): Circle;
  public circle(cx: Length, cy: Length, r: Length): Circle;
  public circle(a1: Length | Point, a2: Length, a3?: Length): Circle {
    const attrs = (a1 instanceof Point) ? { "cx:cy": a1, r: a2 } : { cx: a1, cy: a2, r: a3 };
    return new Circle(this, attrs);
  }
  public ellipse(c: Point, r: Point): Ellipse;
  public ellipse(cx: Length, cy: Length, rx: Length, ry: Length): Ellipse;
  public ellipse(a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Ellipse {
    let attrs = {};
    const a1IsPoint = a1 instanceof Point;
    const a2IsPoint = a2 instanceof Point;
    if (a1IsPoint && a2IsPoint) {
      attrs = { "cx:cy": a1, "rx:ry": a2 };
    } else if (!(a1IsPoint || a2IsPoint)) {
      attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
    }
    return new Ellipse(this, attrs);
  }
  public line(p1: Point, p2: Point): Line;
  public line(x1: Length, y1: Length, x2: Length, y2: Length): Line;
  public line(a1: Length | Point, a2: Length | Point, a3?: Length, a4?: Length): Line {
    let attrs = {};
    const a1IsPoint = a1 instanceof Point;
    const a2IsPoint = a2 instanceof Point;
    if (a1IsPoint && a2IsPoint) {
      attrs = { "x1:y1": a1, "x2:y2": a2 };
    } else if (!(a1IsPoint || a2IsPoint)) {
      attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
    }
    return new Line(this, attrs);
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
    const attrs = {};
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
      if (a2 !== undefined) {
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
