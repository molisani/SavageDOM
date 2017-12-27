namespace SavageDOM.Elements.NonRenderables {

  export abstract class AbstractPaintServer<E extends SVGElement, PaintServerAttributes> extends AbstractNonRenderable<E, PaintServerAttributes> {}

  export type PaintServer = AbstractPaintServer<any, any>;

}
