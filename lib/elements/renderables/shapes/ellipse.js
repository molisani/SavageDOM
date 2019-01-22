"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("../../../attributes/point");
const shape_1 = require("../shape");
function _attributeHelper(a1, a2, a3, a4) {
    let attrs = {};
    const a1IsPoint = a1 instanceof point_1.Point;
    const a2IsPoint = a2 instanceof point_1.Point;
    if (a1IsPoint && a2IsPoint) {
        attrs = { "cx:cy": a1, "rx:ry": a2 };
    }
    else if (!(a1IsPoint || a2IsPoint)) {
        attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
    }
    return attrs;
}
class Ellipse extends shape_1.AbstractShape {
    constructor(context, a1, a2, a3, a4) {
        super(context, "ellipse", _attributeHelper(a1, a2, a3, a4));
    }
}
exports.Ellipse = Ellipse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvZWxsaXBzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFrRDtBQUVsRCxvQ0FBMkQ7QUFXM0QsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFrQixFQUFFLEVBQWtCLEVBQUUsRUFBVyxFQUFFLEVBQVc7SUFDeEYsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2YsTUFBTSxTQUFTLEdBQUcsRUFBRSxZQUFZLGFBQUssQ0FBQztJQUN0QyxNQUFNLFNBQVMsR0FBRyxFQUFFLFlBQVksYUFBSyxDQUFDO0lBQ3RDLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtRQUMxQixLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUN0QztTQUFNLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtRQUNwQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDNUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFhLE9BQVEsU0FBUSxxQkFBb0Q7SUFJL0UsWUFBWSxPQUFnQixFQUFFLEVBQWtCLEVBQUUsRUFBa0IsRUFBRSxFQUFXLEVBQUUsRUFBVztRQUM1RixLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQVBELDBCQU9DIn0=