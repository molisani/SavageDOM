"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../element");
const blend_1 = require("./filter-primitives/blend");
const color_matrix_1 = require("./filter-primitives/color-matrix");
const component_transfer_1 = require("./filter-primitives/component-transfer");
const composite_1 = require("./filter-primitives/composite");
const convolve_matrix_1 = require("./filter-primitives/convolve-matrix");
const displacement_map_1 = require("./filter-primitives/displacement-map");
const flood_1 = require("./filter-primitives/flood");
const gaussian_blur_1 = require("./filter-primitives/gaussian-blur");
const image_1 = require("./filter-primitives/image");
const diffuse_1 = require("./filter-primitives/lighting/diffuse");
const light_source_1 = require("./filter-primitives/lighting/light-source");
const specular_1 = require("./filter-primitives/lighting/specular");
const merge_1 = require("./filter-primitives/merge");
const morphology_1 = require("./filter-primitives/morphology");
const offset_1 = require("./filter-primitives/offset");
const tile_1 = require("./filter-primitives/tile");
const turbulence_1 = require("./filter-primitives/turbulence");
const merge = (a, b) => {
    const obj = Object.create(null);
    for (const aProp in a) {
        obj[aProp] = a[aProp];
    }
    for (const bProp in b) {
        obj[bProp] = b[bProp];
    }
    return obj;
};
class Filter extends element_1.Element {
    constructor(context) {
        super(context, "filter");
        this.context = context;
        this._refCounter = 0;
        this.context.addDef(this);
    }
    getUniquePrimitiveReference() {
        return (++this._refCounter).toString();
    }
    blend(mode, input1, input2) {
        return new blend_1.Blend_Primitive(this, {
            in: input1,
            in2: input2,
            mode,
        });
    }
    colorMatrix(matrix, input) {
        return new color_matrix_1.ColorMatrix_Primitive(this, {
            in: input,
            type: matrix.type,
            values: matrix,
        });
    }
    componentTransfer(r, g, b, a, input) {
        const componentTransfer = new component_transfer_1.ComponentTransfer_Primitive(this, {
            in: input,
        });
        componentTransfer.add(new component_transfer_1.TransferFunction_Primitive(this, "R", r));
        componentTransfer.add(new component_transfer_1.TransferFunction_Primitive(this, "G", g));
        componentTransfer.add(new component_transfer_1.TransferFunction_Primitive(this, "B", b));
        if (a !== undefined) {
            componentTransfer.add(new component_transfer_1.TransferFunction_Primitive(this, "A", a));
        }
        return componentTransfer;
    }
    composite(operator, k1, k2, k3, k4, input1, input2) {
        return new composite_1.Composite_Primitive(this, {
            in: input1,
            in2: input2,
            operator,
            k1,
            k2,
            k3,
            k4,
        });
    }
    convolveMatrix(attrs, input) {
        return new convolve_matrix_1.ConvolveMatrix_Primitive(this, merge(attrs, { in: input }));
    }
    diffuseLighting(attrs, lights = [], input) {
        const fe = new diffuse_1.DiffuseLighting(this, merge(attrs, { in: input }));
        this.addLights(fe, lights);
        return fe;
    }
    displacementMap(attrs, input1, input2) {
        return new displacement_map_1.DisplacementMap_Primitive(this, merge(attrs, { in: input1, in2: input2 }));
    }
    flood(color, area) {
        const fe = new flood_1.Flood_Primitive(this, { "flood-color": color });
        fe.setAttributes({
            x: area.x,
            y: area.y,
            width: area.width,
            height: area.height,
        });
        return fe;
    }
    gaussianBlur(stdDeviation = 0, edgeMode = "duplicate", input) {
        return new gaussian_blur_1.GaussianBlur_Primitive(this, {
            in: input,
            stdDeviation,
            edgeMode,
        });
    }
    image(href, preserveAspectRatio) {
        return new image_1.Image_Primitive(this, {
            "xlink:href": href,
            preserveAspectRatio,
        });
    }
    merge(inputs) {
        const fe = new merge_1.Merge_Primitive(this);
        inputs.forEach(input => {
            const mergeNode = new merge_1.MergeNode_Primitive(this, { in: input });
            fe.add(mergeNode);
        });
        return fe;
    }
    morphology(operator, radius, input) {
        return new morphology_1.Morphology_Primitive(this, {
            in: input,
            operator,
            radius,
        });
    }
    offset(d, input) {
        return new offset_1.Offset_Primitive(this, {
            in: input,
            dx: d.x,
            dy: d.y,
        });
    }
    specularLighting(attrs, lights = []) {
        const fe = new specular_1.SpecularLighting(this, attrs);
        this.addLights(fe, lights);
        return fe;
    }
    tile(area, input) {
        const fe = new tile_1.Tile_Primitive(this, { in: input });
        fe.setAttributes({
            x: area.x,
            y: area.y,
            width: area.width,
            height: area.height,
        });
        return fe;
    }
    turbulence(attrs) {
        return new turbulence_1.Turbulence_Primitive(this, attrs);
    }
    addLights(lighting, lights) {
        lights.forEach(light => {
            switch (light.type) {
                case "point":
                    lighting.add(new light_source_1.PointLight(this, light));
                    break;
                case "distant":
                    lighting.add(new light_source_1.DistantLight(this, light));
                    break;
                case "spot":
                    lighting.add(new light_source_1.SpotLight(this, light));
                    break;
            }
        });
    }
}
exports.Filter = Filter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLHdDQUFxQztBQUdyQyxxREFBNEQ7QUFDNUQsbUVBQXlFO0FBQ3pFLCtFQUE4STtBQUM5SSw2REFBb0U7QUFDcEUseUVBQTBHO0FBQzFHLDJFQUE2RztBQUM3RyxxREFBNEQ7QUFDNUQscUVBQTJFO0FBQzNFLHFEQUE0RDtBQUM1RCxrRUFBbUc7QUFDbkcsNEVBQXdIO0FBQ3hILG9FQUFzRztBQUN0RyxxREFBaUY7QUFDakYsK0RBQXNFO0FBQ3RFLHVEQUE4RDtBQUM5RCxtREFBMEQ7QUFDMUQsK0RBQTZGO0FBc0I3RixNQUFNLEtBQUssR0FBRyxDQUFPLENBQUksRUFBRSxDQUFJLEVBQVMsRUFBRTtJQUN4QyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7SUFDRCxLQUFLLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNyQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixNQUFhLE1BQU8sU0FBUSxpQkFBMkQ7SUFFckYsWUFBbUIsT0FBZ0I7UUFDakMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQURSLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFEM0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLDJCQUEyQjtR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