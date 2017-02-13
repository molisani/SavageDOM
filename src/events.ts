namespace SavageDOM.Events {

  export interface Mouse {
    activate: MouseEvent;
    click: MouseEvent;
    mousedown: MouseEvent;
    mousemove: MouseEvent;
    mouseout: MouseEvent;
    mouseover: MouseEvent;
    mouseup: MouseEvent;
  }

  export interface SVG {
    SVGLoad: Event;
    SVGUnload: Event;
    SVGAbort: Event;
    SVGError: Event;
    SVGResize: Event;
    SVGScroll: Event;
    SVGZoom: SVGZoomEvent;
  }

  export interface Touch {
    touchstart: TouchEvent;
    touchend: TouchEvent;
    touchmove: TouchEvent;
    touchcancel: TouchEvent;
  }

  export interface Focus {
    focusin: FocusEvent;
    focusout: FocusEvent;
  }

}
