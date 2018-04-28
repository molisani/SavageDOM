import { DistantLight_Attributes } from "./distant";
import { PointLight_Attributes } from "./point";
import { SpotLight_Attributes } from "./spot";

export type LightSource_Attributes = DistantLight_Attributes | PointLight_Attributes | SpotLight_Attributes;
