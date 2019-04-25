
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AnimationTiming } from "../animation/timing";
import { Core_AttributeGetter, Core_AttributeInterpolator, Core_Attributes, Core_AttributeSetter, HasClass, HasClass_AttributeGetter, HasClass_AttributeInterpolator, HasClass_AttributeSetter, HasColor, HasColorInterpolation, HasColorInterpolation_AttributeGetter, HasColorInterpolation_AttributeInterpolator, HasColorInterpolation_AttributeSetter, HasColorRendering, HasColorRendering_AttributeGetter, HasColorRendering_AttributeInterpolator, HasColorRendering_AttributeSetter, HasColor_AttributeGetter, HasColor_AttributeInterpolator, HasColor_AttributeSetter, HasCursor, HasCursor_AttributeGetter, HasCursor_AttributeInterpolator, HasCursor_AttributeSetter, HasOpacity, HasOpacity_AttributeGetter, HasOpacity_AttributeInterpolator, HasOpacity_AttributeSetter, HasStyle, HasStyle_AttributeGetter, HasStyle_AttributeInterpolator, HasStyle_AttributeSetter, HasVisibility, HasVisibility_AttributeGetter, HasVisibility_AttributeInterpolator, HasVisibility_AttributeSetter, Inherit, None } from "../attributes/base";
import { AttributeGetter } from "../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../attributes/interpolator";
import { buildStringLiteralParser, buildStringLiteralSerializer } from "../attributes/literal";
import { AttributeSetter } from "../attributes/setter";
import { matrixFromDOM, Transformable, Transformable_AttributeGetter, Transformable_AttributeInterpolator, Transformable_AttributeSetter } from "../attributes/transform";
import { AbstractElement } from "../element";
import { Focus_Events, Mouse_Events, OnlyPointEvents, ResolvedPointEvent, SVG_Events } from "../events";
import { HasFilter, HasFilter_AttributeGetter, HasFilter_AttributeInterpolator, HasFilter_AttributeSetter } from "./filter";
import { HasClipPath, HasClipPath_AttributeGetter, HasClipPath_AttributeInterpolator, HasClipPath_AttributeSetter } from "./non-renderables/clip-path";
import { HasMask, HasMask_AttributeGetter, HasMask_AttributeInterpolator, HasMask_AttributeSetter } from "./non-renderables/mask";

export interface Renderable_Attributes extends Core_Attributes, HasStyle, HasClass, HasColor, Transformable {
  "display": "inline" | "block" | "list-item" | "run-in" | "compact" | "marker" | "table" | "inline-table" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-column-group" | "table-column" | "table-cell" | "table-caption" | None | Inherit;
  "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | None | Inherit;
}

const displayLiterals = ["inline", "block", "list-item", "run-in", "compact", "marker", "table", "inline-table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption", "none", "inherit"] as const;

const pointerEventsLiterals = ["visiblePainted", "visibleFill", "visibleStroke", "visible", "painted", "fill", "stroke", "all", "none", "inherit"] as const;

export const Renderable_AttributeGetter: AttributeGetter<Renderable_Attributes> = {
  ...Core_AttributeGetter,
  ...HasStyle_AttributeGetter,
  ...HasClass_AttributeGetter,
  ...HasColor_AttributeGetter,
  ...Transformable_AttributeGetter,
  display: buildStringLiteralParser(displayLiterals, "inherit"),
  "pointer-events": buildStringLiteralParser(pointerEventsLiterals, "inherit"),
};

export const Renderable_AttributeSetter: AttributeSetter<Renderable_Attributes> = {
  ...Core_AttributeSetter,
  ...HasStyle_AttributeSetter,
  ...HasClass_AttributeSetter,
  ...HasColor_AttributeSetter,
  ...Transformable_AttributeSetter,
  display: buildStringLiteralSerializer(displayLiterals, "inherit"),
  "pointer-events": buildStringLiteralSerializer(pointerEventsLiterals, "inherit"),
};

export const Renderable_AttributeInterpolator: AttributeInterpolator<Renderable_Attributes> = {
  ...Core_AttributeInterpolator,
  ...HasStyle_AttributeInterpolator,
  ...HasClass_AttributeInterpolator,
  ...HasColor_AttributeInterpolator,
  ...Transformable_AttributeInterpolator,
  display: unsupportedTweenBuilder,
  "pointer-events": unsupportedTweenBuilder,
};

export interface Containers_Attributes extends Renderable_Attributes, HasFilter, HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask {}

export const Containers_AttributeGetter: AttributeGetter<Containers_Attributes> = {
  ...Renderable_AttributeGetter,
  ...HasFilter_AttributeGetter,
  ...HasColorInterpolation_AttributeGetter,
  ...HasColorRendering_AttributeGetter,
  ...HasCursor_AttributeGetter,
  ...HasClipPath_AttributeGetter,
  ...HasMask_AttributeGetter,
};

export const Containers_AttributeSetter: AttributeSetter<Containers_Attributes> = {
  ...Renderable_AttributeSetter,
  ...HasFilter_AttributeSetter,
  ...HasColorInterpolation_AttributeSetter,
  ...HasColorRendering_AttributeSetter,
  ...HasCursor_AttributeSetter,
  ...HasClipPath_AttributeSetter,
  ...HasMask_AttributeSetter,
};

export const Containers_AttributeInterpolator: AttributeInterpolator<Containers_Attributes> = {
  ...Renderable_AttributeInterpolator,
  ...HasFilter_AttributeInterpolator,
  ...HasColorInterpolation_AttributeInterpolator,
  ...HasColorRendering_AttributeInterpolator,
  ...HasCursor_AttributeInterpolator,
  ...HasClipPath_AttributeInterpolator,
  ...HasMask_AttributeInterpolator,
};

export interface Graphics_Attributes extends Renderable_Attributes, HasFilter, HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask, HasOpacity, HasVisibility {
}

export const Graphics_AttributeGetter: AttributeGetter<Graphics_Attributes> = {
  ...Renderable_AttributeGetter,
  ...HasFilter_AttributeGetter,
  ...HasColorInterpolation_AttributeGetter,
  ...HasColorRendering_AttributeGetter,
  ...HasCursor_AttributeGetter,
  ...HasClipPath_AttributeGetter,
  ...HasMask_AttributeGetter,
  ...HasOpacity_AttributeGetter,
  ...HasVisibility_AttributeGetter,
};

export const Graphics_AttributeSetter: AttributeSetter<Graphics_Attributes> = {
  ...Renderable_AttributeSetter,
  ...HasFilter_AttributeSetter,
  ...HasColorInterpolation_AttributeSetter,
  ...HasColorRendering_AttributeSetter,
  ...HasCursor_AttributeSetter,
  ...HasClipPath_AttributeSetter,
  ...HasMask_AttributeSetter,
  ...HasOpacity_AttributeSetter,
  ...HasVisibility_AttributeSetter,
};

export const Graphics_AttributeInterpolator: AttributeInterpolator<Graphics_Attributes> = {
  ...Renderable_AttributeInterpolator,
  ...HasFilter_AttributeInterpolator,
  ...HasColorInterpolation_AttributeInterpolator,
  ...HasColorRendering_AttributeInterpolator,
  ...HasCursor_AttributeInterpolator,
  ...HasClipPath_AttributeInterpolator,
  ...HasMask_AttributeInterpolator,
  ...HasOpacity_AttributeInterpolator,
  ...HasVisibility_AttributeInterpolator,
};

export interface Renderable_Events extends Mouse_Events, SVG_Events, Focus_Events {}

export abstract class AbstractRenderable<ELEMENT extends SVGGraphicsElement, ATTRIBUTES extends Renderable_Attributes = Renderable_Attributes, EVENTS extends Renderable_Events = Renderable_Events> extends AbstractElement<ELEMENT, ATTRIBUTES, EVENTS> {
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
        local: { x: local.x, y: local.y },
        page: { x: action.pageX, y: action.pageY },
        screen: { x: action.screenX, y: action.screenY },
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
        const transformList = [
          matrixFromDOM(inverseScreenCTM.multiply(targetMatrix)),
        ];
        await tempGroup.animateAttribute("transform", transformList, timing);
      }
    }
    this.add(child);
    tempGroup.destroy();
  }
}
