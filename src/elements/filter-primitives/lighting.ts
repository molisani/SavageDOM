namespace SavageDOM.Elements.FilterPrimitives {

  export interface Lighting_Attributes extends Attributes.HasColor {
    "lighting-color": Attributes.CurrentColor | Attributes.Color | Attributes.Inherit;
  }

}
