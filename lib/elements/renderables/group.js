"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = require("../non-renderables/paint-servers/pattern");
const renderable_1 = require("../renderable");
class Group extends renderable_1.AbstractRenderable {
    constructor(context, attrs, els = []) {
        super(context, "g", attrs);
        if (this.constructor.name !== Group.name) {
            this._node.setAttribute("data-class", this.constructor.name);
        }
        els.forEach((child) => this.add(child));
    }
    toPattern(w, h, x, y, view) {
        const pattern = new pattern_1.Pattern(this.context, w, h, x, y, view);
        this.getChildren().forEach(child => pattern.add(child));
        return pattern;
    }
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxzRUFBbUU7QUFDbkUsOENBQWlHO0FBSWpHLE1BQWEsS0FBTSxTQUFRLCtCQUFpRDtJQUMxRSxZQUFZLE9BQWdCLEVBQUUsS0FBc0MsRUFBRSxNQUFzQixFQUFFO1FBQzVGLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5RDtRQUNELEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBSU0sU0FBUyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxJQUFVO1FBQ3ZFLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQWhCRCxzQkFnQkMifQ==