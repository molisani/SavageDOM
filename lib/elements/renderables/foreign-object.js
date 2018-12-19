"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderable_1 = require("../renderable");
class ForeignObject extends renderable_1.AbstractRenderable {
    constructor(context, attrs, html) {
        super(context, "foreignObject", attrs);
        if (html) {
            this.addHTML(html);
        }
    }
    addHTML(html) {
        this._node.appendChild(html);
    }
    remove(html) {
        this._node.removeChild(html);
    }
}
exports.ForeignObject = ForeignObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZWlnbi1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZm9yZWlnbi1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw4Q0FBMEU7QUFTMUUsTUFBYSxhQUFjLFNBQVEsK0JBQXFFO0lBQ3RHLFlBQVksT0FBZ0IsRUFBRSxLQUF5QyxFQUFFLElBQWtCO1FBQ3pGLEtBQUssQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFDTSxPQUFPLENBQUMsSUFBaUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNNLE1BQU0sQ0FBQyxJQUFpQjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFiRCxzQ0FhQyJ9