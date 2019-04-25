import { HasOpacity, HasOpacity_AttributeGetter, HasOpacity_AttributeInterpolator, HasOpacity_AttributeSetter, Length, numberOrDimensionParser, numberOrDimensionSerializer } from "../../attributes/base";
import { AttributeGetter } from "../../attributes/getter";
import { AttributeInterpolator, unsupportedTweenBuilder } from "../../attributes/interpolator";
import { AttributeSetter } from "../../attributes/setter";
import { XMLNS } from "../../constants";
import { Context } from "../../context";
import { AbstractRenderable, Containers_AttributeGetter, Containers_AttributeInterpolator, Containers_Attributes, Containers_AttributeSetter } from "../renderable";

export interface ForeignObject_Attributes extends Containers_Attributes, HasOpacity {
  x: Length;
  y: Length;
  width: Length;
  height: Length;
}

const ForeignObject_AttributeGetter: AttributeGetter<ForeignObject_Attributes> = {
  ...Containers_AttributeGetter,
  ...HasOpacity_AttributeGetter,
  x: numberOrDimensionParser,
  y: numberOrDimensionParser,
  width: numberOrDimensionParser,
  height: numberOrDimensionParser,
};

const ForeignObject_AttributeSetter: AttributeSetter<ForeignObject_Attributes> = {
  ...Containers_AttributeSetter,
  ...HasOpacity_AttributeSetter,
  x: numberOrDimensionSerializer,
  y: numberOrDimensionSerializer,
  width: numberOrDimensionSerializer,
  height: numberOrDimensionSerializer,
};

const ForeignObject_AttributeInterpolator: AttributeInterpolator<ForeignObject_Attributes> = {
  ...Containers_AttributeInterpolator,
  ...HasOpacity_AttributeInterpolator,
  x: unsupportedTweenBuilder,
  y: unsupportedTweenBuilder,
  width: unsupportedTweenBuilder,
  height: unsupportedTweenBuilder,
};

export class ForeignObject extends AbstractRenderable<SVGForeignObjectElement, ForeignObject_Attributes> {
  public static create(context: Context, attrs?: Partial<ForeignObject_Attributes>, html?: HTMLElement): ForeignObject {
    const foreignObject = new ForeignObject(context, context.window.document.createElementNS(XMLNS.SVG, "foreignObject"), attrs);
    if (html) {
      foreignObject.addHTML(html);
    }
    return foreignObject;
  }
  protected _getter = ForeignObject_AttributeGetter;
  protected _setter = ForeignObject_AttributeSetter;
  protected _interpolator = ForeignObject_AttributeInterpolator;
  public addHTML(html: HTMLElement): void {
    this._node.appendChild(html);
  }
  public remove(html: HTMLElement): void {
    this._node.removeChild(html);
  }
}
