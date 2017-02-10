namespace SavageDOM.Attribute.NonRenderable {

  export interface Marker {
    markerUnits: "userSpaceOnUse" | "strokeWidth";
    refX: Length;
    refY: Length;
    "refX:refY": Point;
    markerWidth: Length;
    markerHeight: Length;
    "refX:refY:markerWidth:markerHeight": Box;
    orient: "auto" | "auto-start-reverse" | number | string;
    viewBox: Box;
  }

}

namespace SavageDOM.Elements.NonRenderable {

  export class Marker extends AbstractNonRenderable<SVGMarkerElement, Attribute.NonRenderable.Marker> {
    constructor(paper: Paper, attrs?: Partial<Attribute.NonRenderable | Attribute.NonRenderable.Marker>) {
      super(paper, "marker", attrs);
    }
  }

}

namespace SavageDOM {

  export interface Paper {
    marker(): Elements.NonRenderable.Marker;
  }

  Paper.prototype.marker = function(this: SavageDOM.Paper): Elements.NonRenderable.Marker {
    return new Elements.NonRenderable.Marker(this, {});
  };

}
