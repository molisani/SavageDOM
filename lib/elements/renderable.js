"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("rxjs/operators");
const point_1 = require("../attributes/point");
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
}
exports.AbstractRenderable = AbstractRenderable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsOENBQXFDO0FBRXJDLCtDQUE0QztBQUU1Qyx3Q0FBcUM7QUFtQnJDLE1BQXNCLGtCQUErSyxTQUFRLGlCQUFvQztJQUN4TyxjQUFjLENBQXVELEdBQUcsTUFBZTtRQUM1RixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDekQsSUFBSSxNQUEwQixDQUFDO1lBQy9CLElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtnQkFDL0IsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNoQjtpQkFBTSxJQUFJLEtBQUssWUFBWSxVQUFVLEVBQUU7Z0JBQ3RDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLENBQUMsSUFBSSwyREFBMkQsQ0FBQyxDQUFDO2FBQ3RHO1lBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLHlCQUNLLEtBQUssSUFDUixLQUFLLEVBQUUsSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLElBQUksRUFBRSxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDM0MsTUFBTSxFQUFFLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUNqRDtRQUNKLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0Y7QUFwQkQsZ0RBb0JDIn0=