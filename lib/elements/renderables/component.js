"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("../../animation/easing");
const transform_1 = require("../../attributes/transform");
const context_1 = require("../../context");
const group_1 = require("./group");
class Component extends group_1.Group {
    constructor(origin, easing = easing_1.linear) {
        super(Component.context);
        this.easing = easing;
        this._hidden = false;
        const transforms = [transform_1.Transform.translate(), transform_1.Transform.rotate(0), transform_1.Transform.scale()];
        if (origin) {
            transforms.push(transform_1.Transform.translate(-origin.x, -origin.y));
        }
        this.setAttribute("transform", new transform_1.TransformList(transforms));
    }
    static get context() {
        if (!Component._CONTEXT) {
            throw new ReferenceError("No static Component context found. Set one manually, or subscribe to the latest created context.");
        }
        return Component._CONTEXT;
    }
    static set context(ctx) {
        if (Component._CONTEXT_SUBSCRIPTION) {
            Component._CONTEXT_SUBSCRIPTION.unsubscribe();
        }
        Component._CONTEXT = ctx;
    }
    static subscribeLatestContext() {
        if (Component._CONTEXT_SUBSCRIPTION) {
            return;
        }
        Component._CONTEXT_SUBSCRIPTION = context_1.Context.contexts.subscribe((context) => {
            Component._CONTEXT = context;
        });
    }
    moveTo(x, y, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.translate", transform_1.Transform.translate(x, y));
        }
        else {
            this.animateAttribute("transform.translate", transform_1.Transform.translate(x, y), duration, this.easing);
        }
    }
    rotate(angle, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.rotate", transform_1.Transform.rotate(angle));
        }
        else {
            this.animateAttribute("transform.rotate", transform_1.Transform.rotate(angle), duration, this.easing);
        }
    }
    scale(x, y = x, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.scale", transform_1.Transform.scale(x, y));
        }
        else {
            this.animateAttribute("transform.scale", transform_1.Transform.scale(x, y), duration, this.easing);
        }
    }
    show() {
        if (!this._hidden) {
            this.setAttribute("opacity", 1);
            this._hidden = false;
        }
    }
    hide() {
        if (this._hidden) {
            this.setAttribute("opacity", 0);
            this._hidden = true;
        }
    }
}
exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFnRTtBQUNoRSwwREFBc0U7QUFDdEUsMkNBQXdDO0FBQ3hDLG1DQUFnQztBQUVoQyxNQUFhLFNBQVUsU0FBUSxhQUFLO0lBd0JsQyxZQUFZLE1BQWlDLEVBQVksU0FBeUIsZUFBTTtRQUN0RixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRDhCLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBRGhGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHdEIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLHFCQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRixJQUFJLE1BQU0sRUFBRTtZQUNWLFVBQVUsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLHlCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBOUJNLE1BQU0sS0FBSyxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxjQUFjLENBQUMsa0dBQWtHLENBQUMsQ0FBQztTQUM5SDtRQUNELE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBQ00sTUFBTSxLQUFLLE9BQU8sQ0FBQyxHQUFZO1FBQ3BDLElBQUksU0FBUyxDQUFDLHFCQUFxQixFQUFFO1lBQ25DLFNBQVMsQ0FB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