"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("../../animation/easing");
const rotate_1 = require("../../attributes/transforms/rotate");
const scale_1 = require("../../attributes/transforms/scale");
const translate_1 = require("../../attributes/transforms/translate");
const context_1 = require("../../context");
const group_1 = require("./group");
class Component extends group_1.Group {
    constructor(origin, easing = easing_1.linear) {
        super(Component.context);
        this.easing = easing;
        this._hidden = false;
        const transforms = [new translate_1.Translate_Transform(), new rotate_1.Rotate_Transform(0), new scale_1.Scale_Transform()];
        if (origin) {
            transforms.push(new translate_1.Translate_Transform(-origin.x, -origin.y));
        }
        this.setAttribute("transform", transforms);
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
            this.setAttribute("transform.translate", new translate_1.Translate_Transform(x, y));
        }
        else {
            this.animateAttribute("transform.translate", new translate_1.Translate_Transform(x, y), duration, this.easing);
        }
    }
    rotate(angle, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.rotate", new rotate_1.Rotate_Transform(angle));
        }
        else {
            this.animateAttribute("transform.rotate", new rotate_1.Rotate_Transform(angle), duration, this.easing);
        }
    }
    scale(x, y = x, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.scale", new scale_1.Scale_Transform(x, y));
        }
        else {
            this.animateAttribute("transform.scale", new scale_1.Scale_Transform(x, y), duration, this.easing);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFnRTtBQUNoRSwrREFBc0U7QUFDdEUsNkRBQW9FO0FBQ3BFLHFFQUE0RTtBQUM1RSwyQ0FBd0M7QUFDeEMsbUNBQWdDO0FBRWhDLE1BQWEsU0FBVSxTQUFRLGFBQUs7SUF3QmxDLFlBQVksTUFBaUMsRUFBWSxTQUF5QixlQUFNO1FBQ3RGLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEOEIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFEaEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUd0QixNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksK0JBQW1CLEVBQUUsRUFBRSxJQUFJLHlCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksdUJBQWUsRUFBRSxDQUFDLENBQUM7UUFDL0YsSUFBSSxNQUFNLEVBQUU7WUFDVixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBOUJNLE1BQU0sS0FBSyxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxjQUFjLENBQUMsa0dBQWtHLENBQUMsQ0FBQztTQUM5SDtRQUNELE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBQ00sTUFBTSxLQUFLLE9BQU8sQ0FBQyxHQUFZO1FBQ3BDLElBQUksU0FBUyxDQUFDLHFCQUFxQixFQUFFO1lBQ25DLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQztRQUNELFNBQVMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFDTSxNQUFNLENBQUMsc0JBQXNCO1FBQ2xDLElBQUksU0FBUyxDQUFDLHFCQUFxQixFQUFFO1lBQ25DLE9BQU87U0FDUjtRQUNELFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN2RSxTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFZTSxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxXQUFtQixDQUFDO1FBQ3RELElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksK0JBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekU7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLCtCQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BHO0lBQ0gsQ0FBQztJQUNNLE1BQU0sQ0FBQyxLQUFhLEVBQUUsV0FBbUIsQ0FBQztRQUMvQyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHlCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHlCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0Y7SUFDSCxDQUFDO0lBQ00sS0FBSyxDQUFDLENBQVMsRUFBRSxJQUFZLENBQUMsRUFBRSxXQUFtQixDQUFDO1FBQ3pELElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksdUJBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLElBQUksdUJBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1RjtJQUNILENBQUM7SUFDTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ00sSUFBSTtRQUNULElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtJQUNILENBQUM7Q0FDRjtBQWpFRCw4QkFpRUMifQ==