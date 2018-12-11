import { AbstractNonRenderable, NonRenderable_Attributes } from "../non-renderable";

export interface PaintServer_Attributes extends NonRenderable_Attributes {}

export abstract class AbstractPaintServer<ELEMENT extends SVGElement, ATTRIBUTES extends PaintServer_Attributes = PaintServer_Attributes> extends AbstractNonRenderable<ELEMENT, ATTRIBUTES> {}

export type PaintServer = AbstractPaintServer<SVGElement>;
