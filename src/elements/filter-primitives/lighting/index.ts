// module re-exporting, for library use only

export * from "./attributes";
export * from "./diffuse";
export * from "./specular";

import * as LightSource from "./light-source";

export {
  LightSource,
};
