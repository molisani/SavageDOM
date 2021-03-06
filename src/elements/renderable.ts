
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AnimationTiming } from "../animation/timing";
import { Core_Attributes, HasClass, HasColor, HasColorInterpolation, HasColorRendering, HasCursor, HasOpacity, HasStyle, HasVisibility, Inherit, None } from "../attributes/base";
import { Point } from "../attributes/point";
import { Transform, Transformable, TransformList } from "../attributes/transform";
import { Element } from "../element";
import { Focus_Events, Mouse_Events, OnlyPointEvents, ResolvedPointEvent, SVG_Events } from "../events";
import { HasFilter } from "./filter";
import { HasClipPath } from "./non-renderables/clip-path";
import { HasMask } from "./non-renderables/mask";

export interface Renderable_Attributes extends Core_Attributes, HasStyle, HasClass, HasColor, Transformable {
  "display": "inline" | "block" | "list-item" | "run-in" | "compact" | "marker" | "table" | "inline-table" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-column-group" | "table-column" | "table-cell" | "table-caption" | None | Inherit;
  "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | None | Inherit;
}

export interface Containers_Attributes extends Renderable_Attributes, HasFilter, HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask {}

export interface Graphics_Attributes extends Renderable_Attributes, HasFilter, HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask, HasOpacity, HasVisibility {
  "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | None | Inherit;
}

export interface Renderable_Events extends Mouse_Events, SVG_Events, Focus_Events {}

export abstract class AbstractRenderable<ELEMENT extends SVGGraphicsElement, ATTRIBUTES extends Renderable_Attributes = Renderable_Attributes, EVENTS extends Renderable_Events = Renderable_Events> extends Element<ELEMENT, ATTRIBUTES, EVENTS> {
  public getPointEvents<EVENT extends keyof EVENTS = OnlyPointEvents<EVENTS>>(...events: EVENT[]): Observable<ResolvedPointEvent> {
    return this.getEvents(...events).pipe(map((event: Event) => {
      let action: MouseEvent | Touch;
      if (event instanceof MouseEvent) {
        action = event;
      } else if (event instanceof TouchEvent) {
        action = event.touches[0];
      } else {
        throw new Error(`The event "${event.type}" is not a PointEvent and thus has no corresponding Point`);
      }
      const local = this.context.calculateLocalPoint(this.node, action);
      return {
        ...event,
        local: new Point(local.x, local.y),
        page: new Point(action.pageX, action.pageY),
        screen: new Point(action.screenX, action.screenY),
      };
    }));
  }
  public async reparent(child: AbstractRenderable<SVGGraphicsElement>, timing: AnimationTiming): Promise<any> {
    const tempGroup = this.context.group();
    const screenCTM = this.context.root.getScreenCTM();
    if (screenCTM) {
      const inverseScreenCTM = screenCTM.inverse();
      const childMatrix = child.node.getScreenCTM();
      if (childMatrix) {
        const transform = this.context.root.createSVGTransformFromMatrix(inverseScreenCTM.multiply(childMatrix));
        tempGroup.node.transform.baseVal.initialize(transform);
        tempGroup.add(child);
      }
      const targetMatrix = this.node.getScreenCTM();
      if (targetMatrix) {
        const transformList = new TransformList([
          Transform.matrix(inverseScreenCTM.multiply(targetMatrix)),
        ]);
        await tempGroup.animateAttribute("transform", transformList, timing);
      }
    }
    this.add(child);
    tempGroup.destroy();
  }
}
