namespace SavageDOM.Elements {

  export interface Renderable_Attributes extends Attributes.HasStyle, Attributes.HasClass, Attributes.HasColor, Attributes.Transformable {
    "display": "inline" | "block" | "list-item" | "run-in" | "compact" | "marker" | "table" | "inline-table" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-column-group" | "table-column" | "table-cell" | "table-caption" | Attributes.None | Attributes.Inherit;
    "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | Attributes.None | Attributes.Inherit;
  }

  export interface Containers_Attributes extends HasFilter, Attributes.HasColorInterpolation, Attributes.HasColorRendering, Attributes.HasCursor, Elements.NonRenderables.HasClipPath, Elements.NonRenderables.HasMask {}

  export interface Graphics_Attributes extends HasFilter, Attributes.HasColorInterpolation, Attributes.HasColorRendering, Attributes.HasCursor, Elements.NonRenderables.HasClipPath, Elements.NonRenderables.HasMask, Attributes.HasOpacity, Attributes.HasVisibility {
    "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | Attributes.None | Attributes.Inherit;
  }

  export interface Renderable_Events extends Mouse_Events, SVG_Events, Focus_Events {}

  export abstract class AbstractRenderable<E extends SVGElement, A extends Attributes.BaseAttributes, V extends BaseEvents> extends Element<E, Renderable_Attributes & A, Renderable_Events & V> {}

}
