"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../element");
class FilterPrimitive extends element_1.Element {
    constructor(filter, name, attrs = {}, _ref = filter.getUniquePrimitiveReference()) {
        super(filter.context, name, attrs, `${filter.id}-${_ref}`);
        this._ref = _ref;
        this.setAttribute("result", _ref);
        filter.add(this);
    }
    toString() {
        return this._ref;
    }
}
exports.FilterPrimitive = FilterPrimitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQXFDO0FBaUJyQyxNQUFhLGVBQXdILFNBQVEsaUJBQW9EO0lBQy9MLFlBQVksTUFBYyxFQUFFLElBQVksRUFBRSxRQUE2QixFQUFFLEVBQVUsT0FBZSxNQUFNLENBQUMsMkJBQTJCLEVBQUU7UUFDcEksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQURzQixTQUFJLEdBQUosSUFBSSxDQUErQztRQUVwSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFXLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQVRELDBDQVNDIn0=