"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_color_1 = require("d3-color");
const d3_interpolate_1 = require("d3-interpolate");
class Color {
    constructor(c, interpolationFactory = Color.DEFAULT_INTERPOLATION) {
        this.interpolationFactory = interpolationFactory;
        if (typeof c === "string") {
            const data = d3_color_1.color(c);
            if (data) {
                this._data = data;
            }
            else {
                throw new Error(`Unable to parse color from string "${c}"`);
            }
        }
        else {
            this._data = d3_color_1.color(c);
        }
    }
    asRGB() {
        return d3_color_1.rgb(this._data);
    }
    asHSL() {
        return d3_color_1.hsl(this._data);
    }
    toString() {
        return this._data.toString();
    }
    parse(css) {
        if (css !== null) {
            return new Color(css);
        }
        else {
            return new Color(`#000`);
        }
    }
    get(element, attr) {
        return this.parse(element.getAttribute(attr));
    }
    set(element, attr, override) {
        if (override !== undefined) {
            element.setAttribute(attr, override.toString());
        }
        else {
            element.setAttribute(attr, this.toString());
        }
    }
    interpolator(from) {
        const func = this.interpolationFactory(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
Color.DEFAULT_INTERPOLATION = d3_interpolate_1.interpolateRgb;
exports.Color = Color;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXR0cmlidXRlcy9jb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFpRjtBQUNqRixtREFBZ0Y7QUFHaEYsTUFBYSxLQUFLO0lBR2hCLFlBQVksQ0FBNEIsRUFBUyx1QkFBdUQsS0FBSyxDQUFDLHFCQUFxQjtRQUFsRix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQThEO1FBQ2pJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxHQUFHLGdCQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3RDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBQ00sS0FBSztRQUNWLE9BQU8sY0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sS0FBSztRQUNWLE9BQU8sY0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQzVELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBQ00sWUFBWSxDQUFDLElBQVc7UUFDN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O0FBM0NhLDJCQUFxQixHQUFtQywrQkFBYyxDQUFDO0FBRHZGLHNCQTZDQyJ9