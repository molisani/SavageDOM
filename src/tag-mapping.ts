import { Context } from "./context";
import { AbstractElement } from "./element";
import { Filter } from "./elements/filter";
import { ClipPath } from "./elements/non-renderables/clip-path";
import { Marker } from "./elements/non-renderables/marker";
import { Mask } from "./elements/non-renderables/mask";
import { Pattern } from "./elements/non-renderables/paint-servers/pattern";
import { ForeignObject } from "./elements/renderables/foreign-object";
import { Group } from "./elements/renderables/group";
import { Image } from "./elements/renderables/image";
import { Circle } from "./elements/renderables/shapes/circle";
import { Ellipse } from "./elements/renderables/shapes/ellipse";
import { Line } from "./elements/renderables/shapes/line";
import { Path } from "./elements/renderables/shapes/path";
import { Polygon } from "./elements/renderables/shapes/polygon";
import { Polyline } from "./elements/renderables/shapes/polyline";
import { Rect } from "./elements/renderables/shapes/rect";
import { Text, TextSpan } from "./elements/renderables/text";

export type SimpleElementConstructor = new(context: Context, element: SVGElement) => AbstractElement<SVGElement, any>;

export interface TagElementMapping {
  [tagName: string]: AbstractElement<SVGElement, any>;
  circle: Circle;
  clipPath: ClipPath;
  ellipse: Ellipse;
  filter: Filter;
  foreignObject: ForeignObject;
  g: Group;
  image: Image;
  line: Line;
  marker: Marker;
  mask: Mask;
  path: Path;
  pattern: Pattern;
  polygon: Polygon;
  polyline: Polyline;
  rect: Rect;
  tspan: TextSpan;
  text: Text;
}
