
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Core_Attributes, HasClass, HasColor, HasColorInterpolation, HasColorRendering, HasCursor, HasOpacity, HasStyle, HasVisibility, Inherit, None } from "../attributes/base";
import { Transformable } from "../attributes/transform";
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
      const ref = this.context.refPoint;
      ref.x = action.clientX;
      ref.y = action.clientY;
      const matrix = this.node.getScreenCTM();
      if (!matrix) {
        throw new Error(`No Screen Coordinate Transform Matrix found for node "${this.node.id}"`);
      }
      const local = ref.matrixTransform(matrix.inverse());
      return {
        ...event,
        local: {
          x: local.x,
          y: local.y,
        },
        page: {
          x: action.pageX,
          y: action.pageY,
        },
        screen: {
          x: action.screenX,
          y: action.screenY,
        },
      };
    }));
  }
}
