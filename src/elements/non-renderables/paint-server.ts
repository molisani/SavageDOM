import { BaseAttributes } from "../../attributes";
import { AbstractNonRenderable } from "../non-renderable";

export abstract class AbstractPaintServer<E extends SVGElement, PaintServerAttributes extends BaseAttributes> extends AbstractNonRenderable<E, PaintServerAttributes> {}

export type PaintServer = AbstractPaintServer<any, any>;
