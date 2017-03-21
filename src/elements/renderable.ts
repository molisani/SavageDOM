namespace SavageDOM.Attribute {

  export interface Renderable extends Presentation, HasStyle, HasClass, HasColor, Transformable {
    "display": "inline" | "block" | "list-item" | "run-in" | "compact" | "marker" | "table" | "inline-table" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-column-group" | "table-column" | "table-cell" | "table-caption" | None | Inherit;
    "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | None | Inherit;
    "stroke": Paint;
    "stroke-dasharray": None | number[] | Inherit;
    "stroke-dashoffset": Percentage | Length | Inherit;
    "stroke-linecap": "butt" | "round" | "square" | Inherit;
    "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
    "stroke-miterlimit": number | Inherit;
    "stroke-width": Length | Percentage | Inherit;
  }

}

namespace SavageDOM.Attribute.Renderable {

  export interface Containers extends HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask {

  }

  export interface Graphics extends HasColorInterpolation, HasColorRendering, HasCursor, HasClipPath, HasMask, HasOpacity, HasVisibility {
    "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | None | Inherit;
  }

}

namespace SavageDOM.Events {

  export interface Renderable extends Mouse, SVG, Focus {}

}

namespace SavageDOM.Elements {

  export abstract class AbstractRenderable<E extends SVGElement, A, V> extends Element<E, Attribute.Renderable & A, Events.Renderable & V> {}

}
