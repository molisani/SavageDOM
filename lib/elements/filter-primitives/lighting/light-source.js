"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../../../element");
class AbstractLightSource extends element_1.Element {
    constructor(filter, name, attrs) {
        super(filter.context, name, attrs);
    }
}
exports.AbstractLightSource = AbstractLightSource;
class DistantLight extends AbstractLightSource {
    constructor(filter, attrs) {
        super(filter, "feDistantLight", attrs);
    }
}
exports.DistantLight = DistantLight;
class PointLight extends AbstractLightSource {
    constructor(filter, attrs) {
        super(filter, "fePointLight", attrs);
    }
}
exports.PointLight = PointLight;
class SpotLight extends AbstractLightSource {
    constructor(filter, attrs) {
        super(filter, "feSpotLight", attrs);
    }
}
exports.SpotLight = SpotLight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQtc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDhDQUEyQztBQWlDM0MsTUFBc0IsbUJBQTBKLFNBQVEsaUJBQTRCO0lBQ2xOLFlBQVksTUFBYyxFQUFFLElBQXVELEVBQUUsS0FBMkI7UUFDOUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQUpELGtEQUlDO0FBRUQsTUFBYSxZQUFhLFNBQVEsbUJBQXNFO0lBQ3RHLFlBQVksTUFBYyxFQUFFLEtBQXdDO1FBQ2xFLEtBQUssQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBSkQsb0NBSUM7QUFFRCxNQUFhLFVBQVcsU0FBUSxtQkFBa0U7SUFDaEcsWUFBWSxNQUFjLEVBQUUsS0FBc0M7UUFDaEUsS0FBSyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBSkQsZ0NBSUM7QUFFRCxNQUFhLFNBQVUsU0FBUSxtQkFBZ0U7SUFDN0YsWUFBWSxNQUFjLEVBQUUsS0FBcUM7UUFDL0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBSkQsOEJBSUMifQ==