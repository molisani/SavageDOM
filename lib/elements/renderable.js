"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("rxjs/operators");
const animation_1 = require("../animation");
const point_1 = require("../attributes/point");
const transform_1 = require("../attributes/transform");
const element_1 = require("../element");
class AbstractRenderable extends element_1.Element {
    getPointEvents(...events) {
        return this.getEvents(...events).pipe(operators_1.map((event) => {
            let action;
            if (event instanceof MouseEvent) {
                action = event;
            }
            else if (event instanceof TouchEvent) {
                action = event.touches[0];
            }
            else {
                throw new Error(`The event "${event.type}" is not a PointEvent and thus has no corresponding Point`);
            }
            const local = this.context.calculateLocalPoint(this.node, action);
            return Object.assign({}, event, { local: new point_1.Point(local.x, local.y), page: new point_1.Point(action.pageX, action.pageY), screen: new point_1.Point(action.screenX, action.screenY) });
        }));
    }
    reparent(child, duration, easing = animation_1.linear) {
        return __awaiter(this, void 0, void 0, function* () {
            const tempGroup = this.context.group();
            const childMatrix = child.node.getCTM();
            if (childMatrix) {
                tempGroup.add(child);
                const transform = this.context.root.createSVGTransformFromMatrix(childMatrix);
                tempGroup.node.transform.baseVal.initialize(transform);
            }
            const targetMatrix = this.node.getCTM();
            if (targetMatrix) {
                const transformList = new transform_1.TransformList([transform_1.Transform.matrix(targetMatrix)]);
                yield tempGroup.animateAttribute("transform", transformList, duration, easing);
            }
            this.add(child);
            tempGroup.destroy();
        });
    }
}
exports.AbstractRenderable = AbstractRenderable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw4Q0FBcUM7QUFDckMsNENBQXNEO0FBRXRELCtDQUE0QztBQUM1Qyx1REFBa0Y7QUFDbEYsd0NBQXFDO0FBbUJyQyxNQUFzQixrQkFBK0ssU0FBUSxpQkFBb0M7SUFDeE8sY0FBYyxDQUF1RCxHQUFHLE1BQWU7UUFDNUYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3pELElBQUksTUFBMEIsQ0FBQztZQUMvQixJQUFJLEtBQUssWUFBWSxVQUFVLEVBQUU7Z0JBQy9CLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDaEI7aUJBQU0sSUFBSSxLQUFLLFlBQVksVUFBVSxFQUFFO2dCQUN0QyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsS0FBSyxDQUFDLElBQUksMkRBQTJELENBQUMsQ0FBQzthQUN0RztZQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNsRSx5QkFDSyxLQUFLLElBQ1IsS0FBSyxFQUFFLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNsQyxJQUFJLEVBQUUsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQzNDLE1BQU0sRUFBRSxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFDakQ7UUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNZLFFBQVEsQ0FBQyxLQUE2QyxFQUFFLFFBQWdCLEVBQUUsU0FBeUIsa0JBQU07O1lBQ3BILE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QyxJQUFJLFdBQVcsRUFBRTtnQkFDZixTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDOUUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN4RDtZQUNELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEMsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLE1BQU0sYUFBYSxHQUFHLElBQUkseUJBQWEsQ0FBQyxDQUFDLHFCQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEY7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixDQUFDO0tBQUE7Q0FDRjtBQXBDRCxnREFvQ0MifQ==