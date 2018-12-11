// module re-exporting, for library use only

export * from "./attribute";
export * from "./constants";
export * from "./context";
export * from "./document";
export * from "./element";
export * from "./events";
export * from "./interpolation";

import * as Animation from "./animation";
import * as Attributes from "./attributes";
import * as Elements from "./elements";

export {
  Animation,
  Attributes,
  Elements,
};
