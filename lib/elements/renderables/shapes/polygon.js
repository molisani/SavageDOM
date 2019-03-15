"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("../shape");
function _attributeHelper(points) {
    return { points };
}
class Polygon extends shape_1.AbstractShape {
    constructor(context, points) {
        super(context, "polygon", _attributeHelper(points));
    }
}
exports.Polygon = Polygon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLG9DQUEyRDtBQU0zRCxTQUFTLGdCQUFnQixDQUFDLE1BQWU7SUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxNQUFhLE9BQVEsU0FBUSxxQkFBb0Q7SUFDL0UsWUFBWSxPQUFnQixFQUFFLE1BQWU7UUFDM0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUFKRCwwQkFJQyJ9