"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const id_1 = require("../id");
class Renderer {
    constructor() {
        this._animationFrame = rxjs_1.interval(0, rxjs_1.animationFrameScheduler);
        this._attributeUpdates = new rxjs_1.Subject();
        this._attributeInterpolations = {};
        this._attributeUpdates.pipe(operators_1.bufferWhen(() => this._animationFrame)).subscribe((updates) => this._render(updates));
    }
    static getInstance() {
        return Renderer._instance;
    }
    queueAttributeUpdate(a1, a2, a3) {
        if (typeof a2 === "string") {
            return new Promise((resolve) => {
                this._attributeUpdates.next({ el: a1, attribute: { name: a2, val: a3 }, resolve });
            });
        }
        else if (typeof a2 === "object") {
            return Promise.all(Object.keys(a2).map((name) => {
                return new Promise((resolve) => {
                    this._attributeUpdates.next({ el: a1, attribute: { name, val: a2[name] }, resolve });
                });
            })).then((renders) => Math.max(...renders));
        }
        throw new Error("No attributes specified for attribute update");
    }
    registerAttributeInterpolation(el, attr, val, duration, easing) {
        return new Promise((resolve) => {
            const key = id_1.randomShortStringId();
            const start = performance.now();
            const attributes = [{ name: attr, val }];
            this._attributeInterpolations[key] = { el, attributes, start, duration, easing, resolve };
        });
    }
    subscribeAttributeObservable(el, attr, val) {
        return val.pipe(operators_1.bufferWhen(() => this._animationFrame), operators_1.filter((updates) => updates.length > 0), operators_1.map((updates) => ({ el, attribute: { name: attr, val: updates[updates.length - 1] } }))).subscribe(this._attributeUpdates);
    }
    _render(updates) {
        const now = performance.now();
        const pendingResolutions = [];
        updates.forEach(({ el, attribute, resolve }) => {
            el.renderAttribute(attribute.name, attribute.val);
            if (resolve) {
                pendingResolutions.push(resolve);
            }
        });
        Object.keys(this._attributeInterpolations).forEach((key) => {
            const interpolation = this._attributeInterpolations[key];
            const finalRender = now >= (interpolation.start + interpolation.duration);
            const t = (finalRender) ? 1 : interpolation.easing((now - interpolation.start) / interpolation.duration);
            interpolation.attributes.forEach((attribute) => {
                const val = attribute.val(t);
                interpolation.el.renderAttribute(attribute.name, val);
            });
            if (finalRender) {
                delete this._attributeInterpolations[key];
                if (interpolation.resolve) {
                    pendingResolutions.push(interpolation.resolve);
                }
            }
        });
        if (pendingResolutions.length > 0) {
            setImmediate(() => {
                pendingResolutions.forEach((resolve) => resolve(now));
            });
        }
    }
}
Renderer._instance = new Renderer();
exports.Renderer = Renderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYW5pbWF0aW9uL3JlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQTRGO0FBQzVGLDhDQUF5RDtBQUd6RCw4QkFBNEM7QUFnQzVDLE1BQWEsUUFBUTtJQVFuQjtRQUhRLG9CQUFlLEdBQUcsZUFBUSxDQUFDLENBQUMsRUFBRSw4QkFBdUIsQ0FBQyxDQUFDO1FBQ3ZELHNCQUFpQixHQUFHLElBQUksY0FBTyxFQUEwQyxDQUFDO1FBQzFFLDZCQUF3QixHQUFtRSxFQUFFLENBQUM7UUFFcEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFUTSxNQUFNLENBQUMsV0FBVztRQUN2QixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQVVNLG9CQUFvQixDQUEySCxFQUFXLEVBQUUsRUFBbUMsRUFBRSxFQUEwQjtRQUNoTyxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUMxQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDckYsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ2pDLE9BQU8sT0FBTyxDQUFDLEdB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