import { Angle, Length } from "./types";

type None = "none";
type Inherit = "inherit";
type CurrentColor = "currentColor";
type PaintLiteral = None | CurrentColor | Inherit;
export type Color = string & { readonly __Color: unique symbol };
type Paint = Color | PaintLiteral;
type DashArray = readonly Length[];
type ShapeElement = SVGCircleElement | SVGEllipseElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement;
type Funciri = SVGElement;
export type FontFamily = string & { readonly __FontFamily: unique symbol };

interface HasClip {
  clip: ShapeElement | "auto" | Inherit;
}

interface HasClipPath {
  "clip-path": Funciri | None | Inherit;
}

interface HasColor {
  color: Color | Inherit;
}

interface HasColorInterpolation {
  "color-interpolation": "auto" | "sRGB" | "linearRGB" | Inherit;
}

interface HasColorRendering {
  "color-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
}

interface HasCursor {
  cursor: Funciri | "auto" | "crosshair" | "default" | "pointer" | "move" | "e-resize" | "ne-resize" | "nw-resize" | "n-resize" | "se-resize" | "sw-resize" | "s-resize" | "w-resize" | "text" | "wait" | "help" | Inherit;
}

interface HasDisplay {
  display: "inline" | "block" | "list-item" |
  "run-in" | "compact" | "marker" |
  "table" | "inline-table" | "table-row-group" | "table-header-group" |
  "table-footer-group" | "table-row" | "table-column-group" | "table-column" |
  "table-cell" | "table-caption" | None | Inherit;
}

interface HasFill extends HasColor {
  fill: Paint;
  "fill-opacity": number | Inherit;
  "fill-rule": "nonzero" | "evenodd" | Inherit;
}

interface HasFilter {
  filter: Funciri | None | Inherit;
}

interface HasMarker {
  "marker-start": None | Funciri | Inherit;
  "marker-mid": None | Funciri | Inherit;
  "marker-end": None | Funciri | Inherit;
}

interface HasMask {
  mask: Funciri | None | Inherit;
}

interface HasOpacity {
  opacity: number | Inherit;
}

interface HasOverflow {
  overflow: "visible" | "hidden" | "scroll" | "auto" | Inherit;
}

interface HasStroke extends HasColor {
  stroke: Paint;
  "stroke-dasharray": None | DashArray | Inherit;
  "stroke-dashoffset": Length | Inherit;
  "stroke-linecap": "butt" | "round" | "square" | Inherit;
  "stroke-linejoin": "miter" | "round" | "bevel" | Inherit;
  "stroke-miterlimit": number | Inherit;
  "stroke-opacity": number | Inherit;
  "stroke-width": Length | Inherit;
}

interface HasVisibility {
  visibility: "visible" | "hidden" | "collapse" | Inherit;
}

interface NewViewport extends HasClip, HasOverflow {}

interface Container extends HasClipPath, HasColorInterpolation, HasColorRendering, HasCursor, HasFilter, HasMask, HasOpacity {
  "enable-background": /* new <x> <y> <width> <height> */ "accumulate" | Inherit;
}

interface Graphic extends HasClipPath, HasColorInterpolation, HasColorRendering, HasCursor, HasDisplay, HasFilter, HasMask, HasOpacity, HasVisibility {
  "clip-rule": "nonzero" | "evenodd" | Inherit;
  "pointer-events": "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" |
  "painted" | "fill" | "stroke" | "all" | None | Inherit;
}

interface Shape extends Graphic, HasFill, HasStroke {
  "shape-rendering": "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | Inherit;
}

interface FilterPrimitive {
  "color-interpolation-filters": never;
}

interface Lighting extends FilterPrimitive, HasColor {
  "lighting-color": Paint;
}

interface Flood extends FilterPrimitive, HasColor {
  "flood-color": Paint;
  "flood-opacity": number | Inherit;
}

interface Image extends Graphic, NewViewport {
  "color-profile": "auto" | "sRGB" | string | Inherit;
  "image-rendering": "auto" | "optimizeSpeed" | "optimizeQuality" | Inherit;
}

interface Stop extends HasColor {
  "stop-color": Paint;
  "stop-opacity": number | Inherit;
}

interface TextContent extends HasFill, HasStroke {
  direction: "ltr" | "rtl" | Inherit;
  "dominant-baselint": "auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "central" | "middle" | "text-after-edge" | "text-before-edge" | Inherit;
  "font-family": FontFamily | Inherit;
  "font-size": Length | Inherit;
  "font-size-adjust": number | None | Inherit;
  "font-stretch": "normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | Inherit;
  "font-style": "normal" | "italic" | "oblique" | Inherit;
  "font-variant": "normal" | "small-caps" | Inherit;
  "font-weight": "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Inherit;
  "glyph-orientation-horizontal": Angle | Inherit;
  "glyph-orientation-vertical": "auto" | Angle | Inherit;
  kerning: "auto" | Length | Inherit;
  "letter-spacing": "normal" | Length | Inherit;
  "text-anchor": "start" | "middle" | "end" | Inherit;
  "text-decoration": None | "underline" | "overline" | "line-through" | "blink" | Inherit;
  "text-rendering": "auto" | "optimizeSpeed" | "optimizeLegibility" |
  "geometricPrecision" | Inherit;
  "unicode-bidi": "normal" | "embed" | "bidi-override" | Inherit;
  "word-spacing": "normal" | Length | Inherit;
  "writing-mode": "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | Inherit;
}

interface TextSubElement extends HasDisplay, HasVisibility {
  "alignment-baseline": "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | Inherit;
  "baseline-shift": "baseline" | "sub" | "super" | Length | Inherit;
}

export interface SVGElementStyleTagNameMap {
  a: Container & HasDisplay;
  circle: Shape;
  clipPath: HasClipPath;
  defs: Container;
  desc: {};
  ellipse: Shape;
  feBlend: FilterPrimitive;
  feColorMatrix: FilterPrimitive;
  feComponentTransfer: FilterPrimitive;
  feComposite: FilterPrimitive;
  feConvolveMatrix: FilterPrimitive;
  feDiffuseLighting: Lighting;
  feDisplacementMap: FilterPrimitive;
  feDistantLight: FilterPrimitive;
  feFlood: Flood;
  feFuncA: FilterPrimitive;
  feFuncB: FilterPrimitive;
  feFuncG: FilterPrimitive;
  feFuncR: FilterPrimitive;
  feGaussianBlur: FilterPrimitive;
  feImage: FilterPrimitive;
  feMerge: FilterPrimitive;
  feMergeNode: FilterPrimitive;
  feMorphology: FilterPrimitive;
  feOffset: FilterPrimitive;
  fePointLight: FilterPrimitive;
  feSpecularLighting: Lighting;
  feSpotLight: FilterPrimitive;
  feTile: FilterPrimitive;
  feTurbulence: FilterPrimitive;
  filter: {};
  foreignObject: NewViewport & HasDisplay;
  g: Container & HasDisplay;
  image: Image;
  line: Shape & HasMarker;
  linearGradient: {};
  marker: Container & HasClip & HasOverflow;
  mask: Omit<Container, "filter" | "opacity">;
  metadata: {};
  path: Shape & HasMarker;
  pattern: Container & HasClip & HasOverflow;
  polygon: Shape & HasMarker;
  polyline: Shape & HasMarker;
  radialGradient: {};
  rect: Shape;
  script: {};
  stop: Stop;
  style: {};
  svg: Container & NewViewport & HasDisplay;
  switch: Container & HasDisplay;
  symbol: Container & NewViewport;
  text: TextContent;
  textPath: TextContent & TextSubElement;
  title: {};
  tspan: TextContent & TextSubElement;
  use: Graphic;
  view: {};
}

declare global {
  interface SVGElement {
    readonly __SavageDOMStyleProperties?: {};
  }
  interface SVGAElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["a"];
  }
  interface SVGCircleElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["circle"];
  }
  interface SVGClipPathElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["clipPath"];
  }
  interface SVGDefsElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["defs"];
  }
  interface SVGDescElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["desc"];
  }
  interface SVGEllipseElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["ellipse"];
  }
  interface SVGFEBlendElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feBlend"];
  }
  interface SVGFEColorMatrixElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feColorMatrix"];
  }
  interface SVGFEComponentTransferElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feComponentTransfer"];
  }
  interface SVGFECompositeElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feComposite"];
  }
  interface SVGFEConvolveMatrixElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feConvolveMatrix"];
  }
  interface SVGFEDiffuseLightingElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feDiffuseLighting"];
  }
  interface SVGFEDisplacementMapElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feDisplacementMap"];
  }
  interface SVGFEDistantLightElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feDistantLight"];
  }
  interface SVGFEFloodElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feFlood"];
  }
  interface SVGFEFuncAElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feFuncA"];
  }
  interface SVGFEFuncBElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feFuncB"];
  }
  interface SVGFEFuncGElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feFuncG"];
  }
  interface SVGFEFuncRElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feFuncR"];
  }
  interface SVGFEGaussianBlurElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feGaussianBlur"];
  }
  interface SVGFEImageElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feImage"];
  }
  interface SVGFEMergeElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feMerge"];
  }
  interface SVGFEMergeNodeElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feMergeNode"];
  }
  interface SVGFEMorphologyElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feMorphology"];
  }
  interface SVGFEOffsetElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feOffset"];
  }
  interface SVGFEPointLightElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["fePointLight"];
  }
  interface SVGFESpecularLightingElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feSpecularLighting"];
  }
  interface SVGFESpotLightElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feSpotLight"];
  }
  interface SVGFETileElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feTile"];
  }
  interface SVGFETurbulenceElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["feTurbulence"];
  }
  interface SVGFilterElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["filter"];
  }
  interface SVGForeignObjectElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["foreignObject"];
  }
  interface SVGGElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["g"];
  }
  interface SVGImageElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["image"];
  }
  interface SVGLineElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["line"];
  }
  interface SVGLinearGradientElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["linearGradient"];
  }
  interface SVGMarkerElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["marker"];
  }
  interface SVGMaskElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["mask"];
  }
  interface SVGMetadataElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["metadata"];
  }
  interface SVGPathElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["path"];
  }
  interface SVGPatternElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["pattern"];
  }
  interface SVGPolygonElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["polygon"];
  }
  interface SVGPolylineElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["polyline"];
  }
  interface SVGRadialGradientElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["radialGradient"];
  }
  interface SVGRectElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["rect"];
  }
  interface SVGScriptElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["script"];
  }
  interface SVGStopElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["stop"];
  }
  interface SVGStyleElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["style"];
  }
  interface SVGSVGElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["svg"];
  }
  interface SVGSwitchElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["switch"];
  }
  interface SVGSymbolElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["symbol"];
  }
  interface SVGTextElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["text"];
  }
  interface SVGTextPathElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["textPath"];
  }
  interface SVGTitleElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["title"];
  }
  interface SVGTSpanElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["tspan"];
  }
  interface SVGUseElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["use"];
  }
  interface SVGViewElement {
    readonly __SavageDOMStyleProperties?: SVGElementStyleTagNameMap["view"];
  }
}

export type SVGStyleType<E extends SVGElement> = NonNullable<E["__SavageDOMStyleProperties"]>;
