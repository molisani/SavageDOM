"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = require("../non-renderable");
function _attributeHelper(width, height, x, y, maskUnits, maskContentUnits) {
    return { width, height, x, y, maskUnits, maskContentUnits };
}
class ClipPath extends non_renderable_1.AbstractNonRenderable {
    constructor(context, w, h, x, y, units, contentUnits) {
        super(context, "clipPath", _attributeHelper(w, h, x, y, units, contentUnits));
        this.context = context;
        this.context.addDef(this);
    }
}
exports.ClipPath = ClipPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcC1wYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxzREFBb0Y7QUFrQnBGLFNBQVMsZ0JBQWdCLENBQUMsS0FBYyxFQUFFLE1BQWUsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLFNBQWtELEVBQUUsZ0JBQXlEO0lBQzlMLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUM7QUFDOUQsQ0FBQztBQUVELE1BQWEsUUFBUyxTQUFRLHNDQUEwRDtJQUN0RixZQUFtQixPQUFnQixFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxLQUE4QyxFQUFFLFlBQXFEO1FBQ3hMLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUQ3RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQUxELDRCQUtDIn0=