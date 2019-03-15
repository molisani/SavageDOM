"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = require("../transform");
class SkewX_Transform extends transform_1.Transform {
    constructor(a = 0) {
        super("skewX");
        this.a = a;
    }
    args() {
        return this.a.toString();
    }
    parseArgs(css) {
        if (css !== null) {
            return new SkewX_Transform(parseFloat(css));
        }
        else {
            return new SkewX_Transform();
        }
    }
}
exports.SkewX_Transform = SkewX_Transform;
class SkewY_Transform extends transform_1.Transform {
    constructor(a = 0) {
        super("skewY");
        this.a = a;
    }
    args() {
        return this.a.toString();
    }
    parseArgs(css) {
        if (css !== null) {
            return new SkewY_Transform(parseFloat(css));
        }
        else {
            return new SkewY_Transform();
        }
    }
}
exports.SkewY_Transform = SkewY_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUF5QztBQUV6QyxNQUFhLGVBQWdCLFNBQVEscUJBQVM7SUFDNUMsWUFBbUIsSUFBWSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURFLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFFaEMsQ0FBQztJQUNNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFrQjtRQUNqQyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztDQUNGO0FBZEQsMENBY0M7QUFFRCxNQUFhLGVBQWdCLFNBQVEscUJBQVM7SUFDNUMsWUFBbUIsSUFBWSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURFLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFFaEMsQ0FBQztJQUNNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFrQjtRQUNqQyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztDQUNGO0FBZEQsMENBY0MifQ==