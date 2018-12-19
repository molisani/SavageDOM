"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = require("../../../attributes/dimension");
const element_1 = require("../../../element");
const paint_server_1 = require("../paint-server");
class Stop extends element_1.Element {
    constructor(context, offset, color) {
        super(context, "stop", {
            offset: new dimension_1.Dimension(offset * 100, "%"),
            "stop-color": color,
        });
        this.offset = offset;
    }
}
exports.Stop = Stop;
class AbstractGradient extends paint_server_1.AbstractPaintServer {
    constructor(context, name, stops, attrs) {
        super(context, name, attrs);
        this.context.addDef(this);
        const stopArr = [];
        Object.keys(stops).forEach((offset) => {
            stopArr.push(new Stop(context, Number(offset), stops[offset]));
        });
        stopArr.sort((a, b) => {
            return a.offset - b.offset;
        });
        stopArr.forEach(s => this.add(s));
    }
}
exports.AbstractGradient = AbstractGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBc0U7QUFRdEUsOENBQTJDO0FBRTNDLGtEQUE4RTtBQTBCOUUsTUFBYSxJQUFLLFNBQVEsaUJBQThEO0lBQ3RGLFlBQVksT0FBZ0IsRUFBUyxNQUFjLEVBQUUsS0FBdUM7UUFDMUYsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7WUFDckIsTUFBTSxFQUFFLElBQUkscUJBQVMsQ0FBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM3QyxZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUM7UUFKZ0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUtuRCxDQUFDO0NBQ0Y7QUFQRCxvQkFPQztBQUVELE1BQXNCLGdCQUFxRixTQUFRLGtDQUF3QztJQUN6SixZQUFZLE9BQWdCLEVBQUUsSUFBWSxFQUFFLEtBQVksRUFBRSxLQUEyQjtRQUNuRixLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLE9BQU8sR0FBVyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQWJELDRDQWFDIn0=