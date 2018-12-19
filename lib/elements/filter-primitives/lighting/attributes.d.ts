import { CurrentColor, HasColor, Inherit } from "../../../attributes/base";
import { Color } from "../../../attributes/color";
import { FilterPrimitive_Attributes } from "../../filter-primitive";
export interface Lighting_Attributes extends FilterPrimitive_Attributes, HasColor {
    "lighting-color": CurrentColor | Color | Inherit;
}
