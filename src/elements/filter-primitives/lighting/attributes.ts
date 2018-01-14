import { CurrentColor, HasColor, Inherit } from "../../../attributes/base";
import { Color } from "../../../attributes/color";

export interface Lighting_Attributes extends HasColor {
  "lighting-color": CurrentColor | Color | Inherit;
}
