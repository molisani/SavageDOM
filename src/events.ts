import { SubType } from "./util";

export interface BaseEvents {
  [event: string]: Event;
}

export type PointEvent = MouseEvent | TouchEvent;

export interface PointEvents extends BaseEvents {
  [event: string]: PointEvent;
}

export type OnlyPointEvents<EVENTS extends BaseEvents> = keyof SubType<EVENTS, PointEvent>;

export interface ResolvedPointEvent extends Event {
  screen: { x: number, y: number };
  page: { x: number, y: number };
  local: { x: number, y: number };
}

export interface Mouse_Events extends PointEvents {
  activate: MouseEvent;
  click: MouseEvent;
  mousedown: MouseEvent;
  mousemove: MouseEvent;
  mouseout: MouseEvent;
  mouseover: MouseEvent;
  mouseup: MouseEvent;
}

export interface SVG_Events extends BaseEvents {
  SVGLoad: Event;
  SVGUnload: Event;
  SVGAbort: Event;
  SVGError: Event;
  SVGResize: Event;
  SVGScroll: Event;
  SVGZoom: SVGZoomEvent;
}

export interface Touch_Events extends PointEvents {
  touchstart: TouchEvent;
  touchend: TouchEvent;
  touchmove: TouchEvent;
  touchcancel: TouchEvent;
}

export interface Focus_Events extends BaseEvents {
  focusin: FocusEvent;
  focusout: FocusEvent;
}
