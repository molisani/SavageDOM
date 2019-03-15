"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const renderer_1 = require("./animation/renderer");
const attribute_1 = require("./attribute");
const box_1 = require("./attributes/box");
const wrappers_1 = require("./attributes/wrappers");
const constants_1 = require("./constants");
const id_1 = require("./id");
class Element {
    constructor(context, el, attrs, _id = id_1.randomShortStringId()) {
        this.context = context;
        this._id = _id;
        this._pendingRenders = [];
        this._linkedAttributes = {};
        if (typeof el === "string") {
            this._node = this.context.window.document.createElementNS(constants_1.XMLNS, el);
            this.context.addChild(this._node);
            if (attrs !== undefined) {
                this.setAttributes(attrs);
            }
            this._node.setAttribute("id", this._id);
        }
        else {
            this._node = el;
            const id = this._node.getAttribute("id");
            if (id !== null) {
                this._id = id;
            }
            else {
                this._node.setAttribute("id", this._id);
            }
        }
        this._style = this.context.window.getComputedStyle(this._node);
    }
    get id() {
        return this._id;
    }
    get node() {
        return this._node;
    }
    toString() {
        return `url(#${this._id})`;
    }
    renderAttribute(name, val) {
        if (attribute_1.isAttribute(val)) {
            val.set(this._node, name);
        }
        else if (Array.isArray(val)) {
            this._node.setAttribute(name, val.join("\t"));
        }
        else {
            this._node.setAttribute(name, String(val));
        }
    }
    setAttribute(name, val) {
        const render = renderer_1.Renderer.getInstance().queueAttributeUpdate(this, name, val);
        this._pendingRenders.push(render);
    }
    setAttributes(attrs) {
        const render = renderer_1.Renderer.getInstance().queueAttributeUpdate(this, attrs);
        this._pendingRenders.push(render);
    }
    animateAttribute(name, val, duration, easing) {
        let attr;
        if (typeof val === "number") {
            attr = new wrappers_1.NumberWrapper(val);
        }
        else if (attribute_1.isAttribute(val)) {
            attr = val;
        }
        else {
            return;
        }
        const from = attr.get(this._node, name);
        return renderer_1.Renderer.getInstance().registerAttributeInterpolation(this, name, attr.interpolator(from), duration, easing);
    }
    linkDynamicAttribute(name, val) {
        const subscription = renderer_1.Renderer.getInstance().subscribeAttributeObservable(this, name, val);
        const existingSubscription = this._linkedAttributes[name];
        if (existingSubscription && !existingSubscription.closed) {
            existingSubscription.unsubscribe();
        }
        this._linkedAttributes[name] = subscription;
        return subscription;
    }
    flush() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._pendingRenders.length === 0) {
                return performance.now();
            }
            const pending = Promise.all(this._pendingRenders);
            this._pendingRenders = [];
            const renders = yield pending;
            return Math.max(...renders);
        });
    }
    getAttribute(name) {
        const val = this._node.getAttribute(name) || this._style.getPropertyValue(name);
        return (val === "" || val === "none") ? null : val;
    }
    copyStyleFrom(el, includeExclude, defaultInclude = true) {
        const style = {};
        const attrs = el._node.attributes;
        if (includeExclude) {
            for (let i = 0; i < attrs.length; ++i) {
                const attr = attrs.item(i);
                if (attr) {
                    const name = attr.name;
                    if (includeExclude[name] === true || defaultInclude) {
                        style[name] = el._style.getPropertyValue(name);
                    }
                }
            }
        }
        else {
            for (let i = 0; i < attrs.length; ++i) {
                const attr = attrs.item(i);
                if (attr) {
                    const name = attr.name;
                    style[name] = el._style.getPropertyValue(name);
                }
            }
        }
        this.setAttributes(style);
    }
    getEvent(event) {
        return rxjs_1.fromEvent(this._node, event);
    }
    getEvents(...events) {
        return rxjs_1.merge(...(events).map((event) => rxjs_1.fromEvent(this._node, event)));
    }
    get boundingBox() {
        const rect = this._node.getBoundingClientRect();
        return new box_1.Box(rect.left, rect.top, rect.width, rect.height);
    }
    add(el) {
        if (el instanceof SVGElement) {
            this._node.appendChild(el);
        }
        else {
            el.context = this.context;
            this._node.appendChild(el._node);
        }
    }
    getChildren() {
        const children = this._node.childNodes;
        const elements = [];
        for (let i = 0; i < children.length; ++i) {
            elements.push(new Element(this.context, children.item(i)));
        }
        return elements;
    }
    clone(deep = true, id = id_1.randomShortStringId()) {
        const copy = new Element(this.context, this._node.cloneNode(deep));
        copy._id = id;
        copy._node.setAttribute("id", copy._id);
        return copy;
    }
    destroy() {
        this._node.remove();
    }
    cloneNode(deep = true) {
        const clone = this._node.cloneNode(deep);
        clone.setAttribute("id", id_1.randomShortStringId());
        return clone;
    }
}
exports.Element = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwrQkFBa0U7QUFFbEUsbURBQWdEO0FBQ2hELDJDQUFxRDtBQUVyRCwwQ0FBdUM7QUFDdkMsb0RBQXNEO0FBQ3RELDJDQUFvQztBQUdwQyw2QkFBMkM7QUFFM0MsTUFBYSxPQUFPO0lBUWxCLFlBQW1CLE9BQWdCLEVBQUUsRUFBZ0IsRUFBRSxLQUEyQixFQUFVLE1BQWMsd0JBQW1CLEVBQUU7UUFBNUcsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUF5RCxRQUFHLEdBQUgsR0FBRyxDQUFnQztRQUx2SCxvQkFBZSxHQUFzQixFQUFFLENBQUM7UUFDeEMsc0JBQWlCLEdBQWtELEVBQUUsQ0FBQztRQUs1RSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsaUJBQUssRUFBRSxFQUFFLENBQVEsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxH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