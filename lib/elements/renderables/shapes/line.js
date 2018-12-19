"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("../../../attributes/point");
const shape_1 = require("../shape");
function _attributeHelper(a1, a2, a3, a4) {
    let attrs = {};
    const a1IsPoint = a1 instanceof point_1.Point;
    const a2IsPoint = a2 instanceof point_1.Point;
    if (a1IsPoint && a2IsPoint) {
        attrs = { "x1:y1": a1, "x2:y2": a2 };
    }
    else if (!(a1IsPoint || a2IsPoint)) {
        attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
    }
    return attrs;
}
class Line extends shape_1.AbstractShape {
    constructor(context, a1, a2, a3, a4) {
        super(context, "line", _attributeHelper(a1, a2, a3, a4));
    }
}
exports.Line = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvbGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFrRDtBQUdsRCxvQ0FBMkQ7QUFXM0QsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFrQixFQUFFLEVBQWtCLEVBQUUsRUFBVyxFQUFFLEVBQVc7SUFDeEYsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2YsTUFBTSxTQUFTLEdBQUcsRUFBRSxZQUFZLGFBQUssQ0FBQztJQUN0QyxNQUFNLFNBQVMsR0FBRyxFQUFFLFlBQVksYUFBSyxDQUFDO0lBQ3RDLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtRQUMxQixLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUN0QztTQUFNLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtRQUNwQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDNUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFhLElBQUssU0FBUSxxQkFBOEM7SUFJdEUsWUFBWSxPQUFnQixFQUFFLEVBQWtCLEVBQUUsRUFBa0IsRUFBRSxFQUFXLEVBQUUsRUFBVztRQUM1RixLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRjtBQVBELG9CQU9DIn0=