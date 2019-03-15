import { Observable, Subscription } from "rxjs";
import { Core_Attributes } from "../attributes/base";
import { Element } from "../element";
import { EasingFunction } from "./easing";
export interface TimeResolvable {
    resolve?: (t: number) => void;
}
export interface AttributeUpdate<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES> {
    name: ATTRIBUTE;
    val: ATTRIBUTES[ATTRIBUTE];
}
declare type AttributeOnlyElement<ATTRIBUTES extends Core_Attributes> = Element<SVGElement, ATTRIBUTES>;
export interface ElementUpdateRender<ATTRIBUTES extends Core_Attributes, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>> extends TimeResolvable {
    el: ELEMENT;
    attribute: AttributeUpdate<ATTRIBUTES, keyof ATTRIBUTES>;
}
export interface AttributeInterpolation<ATTRIBUTES, ATTRIBUTE extends keyof ATTRIBUTES> {
    name: ATTRIBUTE;
    val(t: number): ATTRIBUTES[ATTRIBUTE];
}
export interface ElementInterpolateRender<ATTRIBUTES extends Core_Attributes, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>> extends TimeResolvable {
    el: ELEMENT;
    attributes: AttributeInterpolation<ATTRIBUTES, keyof ATTRIBUTES>[];
    start: number;
    duration: number;
    easing: EasingFunction;
}
export declare class Renderer {
    static getInstance(): Renderer;
    private static _instance;
    private _animationFrame;
    private _attributeUpdates;
    private _attributeInterpolations;
    constructor();
    queueAttributeUpdate<ATTRIBUTES extends Core_Attributes, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attrs: Partial<ATTRIBUTES>): Promise<number>;
    queueAttributeUpdate<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attr: ATTRIBUTE, val: ATTRIBUTES[ATTRIBUTE]): Promise<number>;
    registerAttributeInterpolation<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attr: ATTRIBUTE, val: (t: number) => ATTRIBUTES[ATTRIBUTE], duration: number, easing: EasingFunction): Promise<number>;
    subscribeAttributeObservable<ATTRIBUTES extends Core_Attributes, ATTRIBUTE extends keyof ATTRIBUTES, ELEMENT extends AttributeOnlyElement<ATTRIBUTES>>(el: ELEMENT, attr: ATTRIBUTE, val: Observable<ATTRIBUTES[ATTRIBUTE]>): Subscription;
    private _render;
}
export {};
