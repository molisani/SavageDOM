"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = require("d3-interpolate");
var ColorMatrix;
(function (ColorMatrix) {
    class Raw {
        constructor(values = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]]) {
            this.type = "matrix";
            this.arr = [];
            this.arr = this.arr.concat(...values);
        }
        toString() {
            return this.arr.join(" ");
        }
        parse(css) {
            if (css !== null) {
                return new Raw([css.split(" ").map(parseFloat)]);
            }
            else {
                return new Raw([]);
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
            const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
            return (t) => this.parse(func(t));
        }
    }
    ColorMatrix.Raw = Raw;
    class Saturate {
        constructor(value = 1) {
            this.value = value;
            this.type = "saturate";
        }
        toString() {
            return this.value.toString();
        }
        parse(css) {
            if (css !== null) {
                return new Saturate(parseFloat(css));
            }
            else {
                return new Saturate();
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
            const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
            return (t) => this.parse(func(t));
        }
    }
    ColorMatrix.Saturate = Saturate;
    class HueRotate {
        constructor(value = 0) {
            this.value = value;
            this.type = "hueRotate";
        }
        toString() {
            return this.value.toString();
        }
        parse(css) {
            if (css !== null) {
                return new HueRotate(parseFloat(css));
            }
            else {
                return new HueRotate();
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
            const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
            return (t) => this.parse(func(t));
        }
    }
    ColorMatrix.HueRotate = HueRotate;
    class LuminanceToAlphaColorMatrix {
        constructor() {
            this.type = "luminanceToAlpha";
        }
        toString() {
            return "";
        }
    }
    ColorMatrix.LuminanceToAlphaColorMatrix = LuminanceToAlphaColorMatrix;
})(ColorMatrix = exports.ColorMatrix || (exports.ColorMatrix = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F0dHJpYnV0ZXMvY29sb3ItbWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBUTdDLElBQWlCLFdBQVcsQ0FtRzNCO0FBbkdELFdBQWlCLFdBQVc7SUFFMUIsTUFBYSxHQUFHO1FBR2QsWUFBWSxTQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRi9HLFNBQUksR0FBYSxRQUFRLENBQUM7WUFDMUIsUUFBRyxHQUFhLEVBQUUsQ0FBQztZQUV4QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNNLFFBQVE7WUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDTSxLQUFLLENBQUMsR0FBa0I7WUFDN0IsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO2lCQUFN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