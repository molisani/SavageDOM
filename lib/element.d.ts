import { Observable, Subscription } from "rxjs";
import { EasingFunction } from "./animation/easing";
import { Core_Attributes } from "./attributes/base";
import { Box } from "./attributes/box";
import { Context } from "./context";
import { BaseEvents } from "./events";
export declare class Element<SVG extends SVGElement, ATTRIBUTES extends Core_Attributes = Core_Attributes, EVENTS extends BaseEvents = BaseEvents> {
    context: Context;
    private _id;
    protected readonly _node: SVG;
    protected readonly _style: CSSStyleDeclaration;
    private _pendingRenders;
    private _linkedAttributes;
    constructor(context: Context, el: SVG, attrs?: Partial<ATTRIBUTES>);
    constructor(context: Context, name: string, attrs?: Partial<ATTRIBUTES>, id?: string);
    constructor(context: Context, el: string | SVG, attrs?: Partial<ATTRIBUTES>, id?: string);
    readonly id: string;
    readonly node: SVG;
    toString(): string;
    renderAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr]): void;
    setAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr]): void;
    setAttributes(attrs: Partial<ATTRIBUTES>): void;
    animateAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: ATTRIBUTES[Attr], duration: number, easing: EasingFunction): Promise<number> | undefined;
    linkDynamicAttribute<Attr extends keyof ATTRIBUTES>(name: Attr, val: Observable<ATTRIBUTES[Attr]>): Subscription;
    flush(): Promise<number>;
    getAttribute<Attr extends keyof ATTRIBUTES>(name: Attr): string | null;
    copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>): void;
    copyStyleFrom(el: Element<SVGElement, ATTRIBUTES, any>, includeExclude: {
        [A in keyof ATTRIBUTES]: boolean;
    }, defaultInclude: boolean): void;
    getEvent<EVENT extends keyof EVENTS>(event: EVENT): Observable<EVENTS[EVENT]>;
    getEvents(...events: (keyof EVENTS)[]): Observable<Event>;
    readonly boundingBox: Box;
    add(el: Element<SVGElement> | SVGElement): void;
    getChildren(): Element<SVGElement>[];
    clone(deep?: boolean, id?: string): Element<SVG, ATTRIBUTES, EVENTS>;
    destroy(): void;
    protected cloneNode(deep?: boolean): SVG;
}
