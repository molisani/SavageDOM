namespace SavageDOM {

  export interface BaseEvents {
    [event: string]: any;
  }

  export interface Mouse_Events extends BaseEvents {
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

  export interface Touch_Events extends BaseEvents {
    touchstart: TouchEvent;
    touchend: TouchEvent;
    touchmove: TouchEvent;
    touchcancel: TouchEvent;
  }

  export interface Focus_Events extends BaseEvents {
    focusin: FocusEvent;
    focusout: FocusEvent;
  }

}
