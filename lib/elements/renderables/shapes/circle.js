"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("../../../attributes/point");
const shape_1 = require("../shape");
function _attributeHelper(a1, a2, a3) {
    return (a1 instanceof point_1.Point) ? { "cx:cy": a1, r: a2 } : { cx: a1, cy: a2, r: a3 };
}
class Circle extends shape_1.AbstractShape {
    constructor(context, a1, a2, a3) {
        super(context, "circle", _attributeHelper(a1, a2, a3));
    }
}
exports.Circle = Circle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9jaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBa0Q7QUFFbEQsb0NBQTJEO0FBUzNELFNBQVMsZ0JBQWdCLENBQUMsRUFBa0IsRUFBRSxFQUFVLEVBQUUsRUFBVztJQUNuRSxPQUFPLENBQUMsRUFBRSxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDcEYsQ0FBQztBQUVELE1BQWEsTUFBTyxTQUFRLHFCQUFrRDtJQUk1RSxZQUFZLE9BQWdCLEVBQUUsRUFBa0IsRUFBRSxFQUFVLEVBQUUsRUFBVztRQUN2RSxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGO0FBUEQsd0JBT0MifQ==