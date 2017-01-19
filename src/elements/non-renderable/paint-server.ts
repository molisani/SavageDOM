namespace SavageDOM.Elements.NonRenderable {

    export abstract class AbstractPaintServer<E extends SVGElement, PaintServerAttributes> extends AbstractNonRenderable<E, PaintServerAttributes> implements Attribute.PaintServer {}

}
