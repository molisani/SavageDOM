"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const point_1 = require("./attributes/point");
const constants_1 = require("./constants");
const document_1 = require("./document");
const element_1 = require("./element");
const clip_path_1 = require("./elements/non-renderables/clip-path");
const marker_1 = require("./elements/non-renderables/marker");
const mask_1 = require("./elements/non-renderables/mask");
const linear_1 = require("./elements/non-renderables/paint-servers/gradients/linear");
const radial_1 = require("./elements/non-renderables/paint-servers/gradients/radial");
const pattern_1 = require("./elements/non-renderables/paint-servers/pattern");
const external_1 = require("./elements/renderables/external");
const foreign_object_1 = require("./elements/renderables/foreign-object");
const group_1 = require("./elements/renderables/group");
const image_1 = require("./elements/renderables/image");
const circle_1 = require("./elements/renderables/shapes/circle");
const ellipse_1 = require("./elements/renderables/shapes/ellipse");
const line_1 = require("./elements/renderables/shapes/line");
const path_1 = require("./elements/renderables/shapes/path");
const polygon_1 = require("./elements/renderables/shapes/polygon");
const polyline_1 = require("./elements/renderables/shapes/polyline");
const rect_1 = require("./elements/renderables/shapes/rect");
const text_1 = require("./elements/renderables/text");
class Context {
    constructor(root, _window = Context.DEFAULT_WINDOW) {
        this._window = _window;
        if (root) {
            if (typeof root === "string") {
                const el = this._window.document.getElementById(root);
                if (el instanceof SVGSVGElement) {
                    this._root = el;
                }
                else {
                    throw new Error("Element with specified ID is not valid");
                }
            }
            else {
                this._root = root;
            }
        }
        else {
            this._root = this._window.document.createElementNS(constants_1.XMLNS, "svg");
            this._window.document.body.appendChild(this._root);
        }
        this._root.setAttribute("xmlns", constants_1.XMLNS);
        this._root.setAttributeNS(constants_1.XMLNS, "xlink", constants_1.XLINK);
        this._root.setAttribute("version", "1.1");
        const defsElements = this._root.getElementsByTagName("defs");
        const defsElement = defsElements.item(0);
        if (defsElement) {
            this._defs = new element_1.Element(this, defsElement);
        }
        else {
            this._defs = new element_1.Element(this, "defs");
        }
        Context._CONTEXT_SUBJECT.next(this);
    }
    static get contexts() {
        return Context._CONTEXT_SUBJECT.asObservable();
    }
    get root() {
        return this._root;
    }
    get window() {
        return this._window;
    }
    calculateLocalPoint(elementNode, action) {
        const ref = this._root.createSVGPoint();
        ref.x = action.clientX;
        ref.y = action.clientY;
        const matrix = elementNode.getScreenCTM();
        if (!matrix) {
            throw new Error(`No Screen Coordinate Transform Matrix found for node "${elementNode.id}"`);
        }
        return ref.matrixTransform(matrix.inverse());
    }
    get mousePosition() {
        return rxjs_1.fromEvent(this._root, "mousemove").pipe(operators_1.map((event) => {
            const local = this.calculateLocalPoint(this._root, event);
            return Object.assign({}, event, { local: new point_1.Point(local.x, local.y), page: new point_1.Point(event.pageX, event.pageY), screen: new point_1.Point(event.screenX, event.screenY) });
        }));
    }
    addDef(def) {
        this._defs.add(def);
    }
    addChild(el) {
        if (el instanceof element_1.Element) {
            el.context = this;
            this._root.appendChild(el.node);
        }
        else {
            this._root.appendChild(el);
        }
    }
    load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const xmlDocument = yield document_1.makeRequest("GET", url);
            const externalDocument = new document_1.SVGDocument(this, xmlDocument);
            return new external_1.ExternalSVG(this, externalDocument);
        });
    }
    clipPath(...args) {
        return new clip_path_1.ClipPath(this, ...args);
    }
    marker(...args) {
        return new marker_1.Marker(this, ...args);
    }
    mask(...args) {
        return new mask_1.Mask(this, ...args);
    }
    linearGradient(...args) {
        return new linear_1.LinearGradient(this, ...args);
    }
    radialGradient(...args) {
        return new radial_1.RadialGradient(this, ...args);
    }
    pattern(...args) {
        return new pattern_1.Pattern(this, ...args);
    }
    foreignObject(...args) {
        return new foreign_object_1.ForeignObject(this, ...args);
    }
    group(...args) {
        return new group_1.Group(this, ...args);
    }
    imageAfterLoad(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return image_1.Image.afterLoad(this, ...args);
        });
    }
    circle(...args) {
        return new circle_1.Circle(this, ...args);
    }
    ellipse(...args) {
        return new ellipse_1.Ellipse(this, ...args);
    }
    line(...args) {
        return new line_1.Line(this, ...args);
    }
    path(...args) {
        return new path_1.Path(this, ...args);
    }
    polygon(...args) {
        return new polygon_1.Polygon(this, ...args);
    }
    polyline(...args) {
        return new polyline_1.Polyline(this, ...args);
    }
    rect(...args) {
        return new rect_1.Rect(this, ...args);
    }
    text(...args) {
        return new text_1.Text(this, ...args);
    }
}
Context.DEFAULT_WINDOW = window;
Context._CONTEXT_SUBJECT = new rxjs_1.ReplaySubject(1);
exports.Context = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwrQkFBNEQ7QUFDNUQsOENBQXFDO0FBQ3JDLDhDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MseUNBQXNEO0FBQ3RELHVDQUFvQztBQUNwQyxvRUFBZ0U7QUFDaEUsOERBQTJEO0FBQzNELDBEQUF1RDtBQUN2RCxzRkFBMkY7QUFDM0Ysc0ZBQTJGO0FBQzNGLDhFQUEyRTtBQUMzRSw4REFBOEQ7QUFDOUQsMEVBQXNFO0FBQ3RFLHdEQUFxRDtBQUNyRCx3REFBcUQ7QUFDckQsaUVBQThEO0FBQzlELG1FQUFnRTtBQUNoRSw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELG1FQUFnRTtBQUNoRSxxRUFBa0U7QUFDbEUsNkRBQTBEO0FBQzFELHNEQUFtRDtBQUluRCxNQUFhLE9BQU87SUFXbEIsWUFBWSxJQUE2QixFQUFVLFVBQWtCLE9BQU8sQ0FBQyxjQUFjO1FBQXhDLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBQ3pGLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxFQUFFLFlBQVksYUFBYSxFQUFFO29CQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2lCQUMzRDthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxD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