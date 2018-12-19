"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const box_1 = require("../../../attributes/box");
const point_1 = require("../../../attributes/point");
const shape_1 = require("../shape");
function _attributeHelper(a1, a2, a3, a4, a5, a6) {
    const attrs = {};
    if (a1 instanceof box_1.Box) {
        attrs["x:y:width:height"] = a1;
        if (a2 instanceof point_1.Point) {
            attrs["rx:ry"] = a2;
        }
        else {
            if (a2 !== undefined) {
                attrs["rx"] = a2;
            }
            if (a3 !== undefined) {
                attrs["ry"] = a3;
            }
        }
    }
    else if (a1 instanceof point_1.Point) {
        attrs["x:y"] = a1;
        if (a2 !== undefined && !(a2 instanceof point_1.Point)) {
            attrs["width"] = a2;
        }
        if (a3 !== undefined) {
            attrs["height"] = a3;
        }
        if (a4 instanceof point_1.Point) {
            attrs["rx:ry"] = a4;
        }
        else {
            if (a4 !== undefined) {
                attrs["rx"] = a4;
            }
            if (a5 !== undefined && !(a5 instanceof point_1.Point)) {
                attrs["ry"] = a5;
            }
        }
    }
    else {
        attrs["x"] = a1;
        if (a2 !== undefined && !(a2 instanceof point_1.Point)) {
            attrs["y"] = a2;
        }
        if (a3 !== undefined) {
            attrs["width"] = a3;
        }
        if (a4 !== undefined && !(a4 instanceof point_1.Point)) {
            attrs["height"] = a4;
        }
        if (a5 instanceof point_1.Point) {
            attrs["rx:ry"] = a5;
        }
        else {
            if (a5 !== undefined) {
                attrs["rx"] = a5;
            }
            if (a6 !== undefined) {
                attrs["ry"] = a6;
            }
        }
    }
    return attrs;
}
class Rect extends shape_1.AbstractShape {
    constructor(context, a1, a2, a3, a4, a5, a6) {
        super(context, "rect", _attributeHelper(a1, a2, a3, a4, a5, a6));
    }
}
exports.Rect = Rect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlEQUE4QztBQUM5QyxxREFBa0Q7QUFFbEQsb0NBQTJEO0FBZTNELFNBQVMsZ0JBQWdCLENBQUMsRUFBd0IsRUFBRSxFQUFtQixFQUFFLEVBQVcsRUFBRSxFQUFtQixFQUFFLEVBQW1CLEVBQUUsRUFBVztJQUN6SSxNQUFNLEtBQUssR0FBNkIsRUFBRSxDQUFDO0lBQzNDLElBQUksRUFBRSxZQUFZLFNBQUcsRUFBRTtRQUNyQixLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxFQUFFLFlBQVksYUFBSyxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtnQkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNsQjtZQUNELElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtnQkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNsQjtTQUNGO0tBQ0Y7U0FBTSxJQUFJLEVBQUUsWUFBWSxhQUFLLEVBQUU7UUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxhQUFLLENBQUMsRUFBRTtZQUM5QyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLEVBQUUsWUFBWSxhQUFLLEVBQUU7WUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO2dCQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxFQUFFLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksYUFBSyxDQUFDLEVBQUU7Z0JBQzlDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbEI7U0FDRjtLQUNGO1NBQU07UUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksRUFBRSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLGFBQUssQ0FBQyxFQUFFO1lBQzlDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksRUFBRSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLGFBQUssQ0FBQyxFQUFFO1lBQzlDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLEVBQUUsWUFBWSxhQUFLLEVBQUU7WUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO2dCQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO2dCQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQWEsSUFBSyxTQUFRLHFCQUE4QztJQU90RSxZQUFZLE9BQWdCLEVBQUUsRUFBd0IsRUFBRSxFQUFtQixFQUFFLEVBQVcsRUFBRSxFQUFtQixFQUFFLEVBQW1CLEVBQUUsRUFBVztRQUM3SSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNGO0FBVkQsb0JBVUMifQ==