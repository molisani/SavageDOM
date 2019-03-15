"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = require("./dimension");
exports.LengthParse = (css) => {
    const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
    if (m !== null) {
        return new dimension_1.Dimension(parseFloat(m[1]), m[2]);
    }
    return parseFloat(css);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdHRyaWJ1dGVzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBd0c7QUFjM0YsUUFBQSxXQUFXLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUNqRCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2QsT0FBTyxJQUFJLHFCQUFTLENBQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25EO0lBQ0QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDIn0=