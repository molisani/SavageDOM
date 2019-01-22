"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../../element");
const filter_primitive_1 = require("../filter-primitive");
class TransferFunction_Primitive extends element_1.Element {
    constructor(filter, channel, attrs) {
        super(filter.context, `feFunc${channel}`, attrs);
    }
}
exports.TransferFunction_Primitive = TransferFunction_Primitive;
class ComponentTransfer_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feComponentTransfer", attrs);
    }
}
exports.ComponentTransfer_Primitive = ComponentTransfer_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvbmVudC10cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUF3QztBQUV4QywwREFBa0Y7QUE0QmxGLE1BQWEsMEJBQTJCLFNBQVEsaUJBQStEO0lBQzdHLFlBQVksTUFBYyxFQUFFLE9BQThCLEVBQUUsS0FBNEM7UUFDdEcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0Y7QUFKRCxnRUFJQztBQU1ELE1BQWEsMkJBQTRCLFNBQVEsa0NBQTRFO0lBQzNILFlBQVksTUFBYyxFQUFFLEtBQTZDO1FBQ3ZFLEtBQUssQ0FBQyxNQUFNLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBSkQsa0VBSUMifQ==