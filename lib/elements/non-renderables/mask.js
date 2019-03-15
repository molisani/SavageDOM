"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = require("../non-renderable");
function _attributeHelper(width, height, x, y, maskUnits, maskContentUnits) {
    return { width, height, x, y, maskUnits, maskContentUnits };
}
class Mask extends non_renderable_1.AbstractNonRenderable {
    constructor(context, w, h, x, y, units, contentUnits) {
        super(context, "mask", _attributeHelper(w, h, x, y, units, contentUnits));
        this.context = context;
        this.context.addDef(this);
    }
}
exports.Mask = Mask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvbWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHNEQUFvRjtBQWlCcEYsU0FBUyxnQkFBZ0IsQ0FBQyxLQUFjLEVBQUUsTUFBZSxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsU0FBa0QsRUFBRSxnQkFBeUQ7SUFDOUwsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztBQUM5RCxDQUFDO0FBRUQsTUFBYSxJQUFLLFNBQVEsc0NBQXNEO0lBQzlFLFlBQW1CLE9BQWdCLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLEtBQThDLEVBQUUsWUFBcUQ7UUFDeEwsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRHpELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBTEQsb0JBS0MifQ==