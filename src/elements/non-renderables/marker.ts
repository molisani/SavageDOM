namespace SavageDOM.Elements.NonRenderables {

  export interface HasMarker {
    "marker-start": Attributes.None | Marker | Attributes.Inherit;
    "marker-mid": Attributes.None | Marker | Attributes.Inherit;
    "marker-end": Attributes.None | Marker | Attributes.Inherit;
  }

  export interface Marker_Attributes extends Attributes.HasOverflow, Attributes.HasOpacity {
    markerUnits: "userSpaceOnUse" | "strokeWidth";
    refX: Attributes.Length;
    refY: Attributes.Length;
    "refX:refY": Attributes.Point;
    markerWidth: Attributes.Length;
    markerHeight: Attributes.Length;
    "refX:refY:markerWidth:markerHeight": Attributes.Box;
    orient: "auto" | "auto-start-reverse" | number | string;
    viewBox: Attributes.Box;
  }

  export class Marker extends AbstractNonRenderable<SVGMarkerElement, Marker_Attributes> {
    constructor(context: Context, attrs?: Partial<NonRenderable_Attributes | Marker_Attributes>) {
      super(context, "marker", attrs);
    }
  }

// export interface Context {
//   marker(): Elements.NonRenderable.Marker;
// }

// Context.prototype.marker = function(this: SavageDOM.Context): Elements.NonRenderable.Marker {
//   return new Elements.NonRenderable.Marker(this, {});
// };

}
