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
            const screenCTM = this.context.root.getScreenCTM();
            if (screenCTM) {
                const inverseScreenCTM = screenCTM.inverse();
                const childMatrix = child.node.getScreenCTM();
                if (childMatrix) {
                    const transform = this.context.root.createSVGTransformFromMatrix(inverseScreenCTM.multiply(childMatrix));
                    tempGroup.node.transform.baseVal.initialize(transform);
                    tempGroup.add(child);
                }
                const targetMatrix = this.node.getScreenCTM();
                if (targetMatrix) {
                    const transformList = new transform_1.TransformList([
                        transform_1.Transform.matrix(inverseScreenCTM.multiply(targetMatrix)),
                    ]);
                    yield tempGroup.animateAttribute("transform", transformList, duration, easing);
                }
            }
            this.add(child);
            tempGroup.destroy();
        });
    }
}
exports.AbstractRenderable = AbstractRenderable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw4Q0FBcUM7QUFDckMsNENBQXNEO0FBRXRELCtDQUE0QztBQUM1Qyx1REFBa0Y7QUFDbEYsd0NBQXFDO0FBbUJyQyxNQUFzQixrQkFBK0ssU0FBUSxpQkFBb0M7SUFDeE8sY0FBYyxDQUF1RCxHQUFHLE1BQWU7UUFDNUYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3pELElBQUksTUFBMEIsQ0FBQztZQUMvQixJQUFJLEtBQUssWUFBWSxVQUFVLEVBQUU7Z0JBQy9CLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDaEI7aUJBQU0sSUFBSSxLQUFLLFlBQVksVUFBVSxFQUFFO2dCQUN0QyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsS0FBSyxDQUFDLElBQUksMkRBQTJELENBQUMsQ0FBQzthQUN0RztZQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNsRSx5QkFDSyxLQUFLLElBQ1IsS0FBSyxFQUFFLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNsQyxJQUFJLEVBQUUsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQzNDLE1BQU0sRUFBRSxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFDakQ7UUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNZLFFBQVEsQ0FBQyxLQUE2QyxFQUFFLFFBQWdCLEVBQUUsU0FBeUIsa0JBQU07O1lBQ3BILE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkQsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsTUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzdDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzlDLElBQUksV0FBVyxFQUFFO29CQUNmLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN6RyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2RCxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUM5QyxJQUFJLFlBQVksRUFBRTtvQkFDaEIsTUFBTSxhQUFhLEdBQUcsSUFBSSx5QkFBYSxDQUFDO3dCQUN0QyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzFELENBQUMsQ0FBQztvQkFDSCxNQUFNLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDaEY7YUFDRjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtDQUNGO0FBMUNELGdEQTBDQyJ9