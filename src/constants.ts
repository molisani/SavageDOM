export const enum XMLNS {
  SVG = "http://www.w3.org/2000/svg",
}

export type SVGElementTagName = keyof SVGElementTagNameMap;

export const SVGElementTagNames = new Set<SVGElementTagName>(["a","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","path","pattern","polygon","polyline","radialGradient","rect","script","stop","style","svg","switch","symbol","text","textPath","title","tspan","use","view"]);
