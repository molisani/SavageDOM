import { HasOpacity, HasOpacity_AttributeGetter, HasOpacity_AttributeInterpolator, HasOpacity_AttributeSetter } from "../../attributes/base";
import { Box } from "../../attributes/box";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator } from "../../attributes/interpolator";
import { AttributeSetter } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractElement } from "../../element";
import { Pattern } from "../non-renderables/paint-servers/pattern";
import { AbstractRenderable, Containers_AttributeGetter, Containers_AttributeInterpolator, Containers_Attributes, Containers_AttributeSetter, Renderable_Attributes } from "../renderable";

export interface Group_Attributes extends Containers_Attributes, HasOpacity {}

const Group_AttributeGetter: AttributeGetter<Group_Attributes> = {
  ...Containers_AttributeGetter,
  ...HasOpacity_AttributeGetter,
};

const Group_AttributeSetter: AttributeSetter<Group_Attributes> = {
  ...Containers_AttributeSetter,
  ...HasOpacity_AttributeSetter,
};

const Group_AttributeInterpolator: AttributeInterpolator<Group_Attributes> = {
  ...Containers_AttributeInterpolator,
  ...HasOpacity_AttributeInterpolator,
};

export class Group extends AbstractRenderable<SVGGElement, Group_Attributes> {
  public static create(context: Context, attrs?: Partial<Renderable_Attributes>, els: AbstractElement<any>[] = []): Group {
    const group = new Group(context, context.window.document.createElementNS(XMLNS.SVG, "g"), attrs);
    if (this.constructor.name !== Group.name) {
      group._node.setAttribute("data-class", this.constructor.name);
    }
    els.forEach((child) => group.add(child));
    return group;
  }
  protected _getter = Group_AttributeGetter;
  protected _setter = Group_AttributeSetter;
  protected _interpolator = Group_AttributeInterpolator;
  public toPattern(w: number, h: number): Pattern;
  public toPattern(w: number, h: number, x: number, y: number): Pattern;
  public toPattern(w: number, h: number, x: number, y: number, view: Box): Pattern;
  public toPattern(w: number, h: number, x?: number, y?: number, view?: Box): Pattern {
    const pattern = Pattern.create(this.context, w, h, x, y, view);
    this.getChildren().forEach(child => pattern.add(child));
    return pattern;
  }
}
