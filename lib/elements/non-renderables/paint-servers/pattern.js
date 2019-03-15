"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paint_server_1 = require("../paint-server");
function _attributeHelper(w, h, x, y, view) {
    const attrs = {};
    if (!(w instanceof SVGPatternElement)) {
        attrs.width = w;
        attrs.height = h;
        attrs.x = x;
        attrs.y = y;
        if (view) {
            attrs.viewBox = view;
        }
        else {
            attrs.patternUnits = "userSpaceOnUse";
        }
    }
    return attrs;
}
class Pattern extends paint_server_1.AbstractPaintServer {
    constructor(context, w, h = (w instanceof SVGPatternElement) ? 0 : w, x = 0, y = 0, view) {
        super(context, (w instanceof SVGPatternElement) ? w : "pattern", _attributeHelper(w, h, x, y, view));
        this.context.addDef(this);
    }
    clone(deep = true) {
        return new Pattern(this.context, super.cloneNode(deep));
    }
}
exports.Pattern = Pattern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsa0RBQThFO0FBd0I5RSxTQUFTLGdCQUFnQixDQUFDLENBQTZCLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsSUFBVTtJQUNsRyxNQUFNLEtBQUssR0FBZ0MsRUFBRSxDQUFDO0lBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxFQUFFO1FBQ3JDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxLQUFLLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1NBQ3ZDO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFhLE9BQVEsU0FBUSxrQ0FBMEQ7SUFHckYsWUFBWSxPQUFnQixFQUFFLENBQTZCLEVBQUUsSUFBWSxDQUFDLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFVO1FBQ3pKLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFlBQVksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLEtBQUssQ0FBQyxPQUFnQixJQUFJO1FBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGO0FBVkQsMEJBVUMifQ==