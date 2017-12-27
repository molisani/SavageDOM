namespace SavageDOM.Elements {

export interface FilterPrimitive_Attributes extends Attributes.HasClass, Attributes.HasStyle {
  x: Attributes.Length;
  y: Attributes.Length;
  width: Attributes.Length;
  height: Attributes.Length;
  "width:height": Attributes.Point;
  "x:y:width:height": Attributes.Box;
  result: string;
  "color-interpolation-filters": "auto" | "sRGB" | "linearRGB" | Attributes.Inherit;
}

export interface FilterPrimitive_Events extends SVG_Events {}

export class FilterPrimitive<FE extends SVGElement, A> extends Element<FE, FilterPrimitive_Attributes & A, FilterPrimitive_Events> {
  private _referenced = false;
  constructor(filter: Filter, name: string, attrs?: Partial<FilterPrimitive_Attributes & A>) {
    super(filter.context, name, attrs);
    filter.add(this);
  }
  public toString(): string {
    if (!this._referenced) {
      this._referenced = true;
      this.setAttribute("result" as any, this.id as any); // hotfix for typedoc using 2.1.6
    }
    return this.id;
  }
}

}
