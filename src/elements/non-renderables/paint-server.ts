import { AbstractNonRenderable } from "../non-renderable";

export abstract class AbstractPaintServer<E extends SVGElement, PaintServerAttributes> extends AbstractNonRenderable<E, PaintServerAttributes> {}

export type PaintServer = AbstractPaintServer<any, any>;
