/*
 * SavageDOM 1.0.0-beta.0 (https://github.com/molisani/SavageDOM) 
 * Copyright 2018 Michael Molisani
 * Licensed under LGPL-3.0 (https://github.com/molisani/SavageDOM/blob/master/LICENSE)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("Rx"));
	else if(typeof define === 'function' && define.amd)
		define("SavageDOM", ["d3", "Rx"], factory);
	else if(typeof exports === 'object')
		exports["SavageDOM"] = factory(require("d3"), require("Rx"));
	else
		root["SavageDOM"] = factory(root["d3"], root["Rx"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbHRlci1wcmltaXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx3Q0FBcUM7QUFpQnJDLHFCQUF1RCxTQUFRLGlCQUFtRTtJQUNoSSxZQUFZLE1BQWMsRUFBRSxJQUFZLEVBQUUsUUFBaUQsRUFBRSxFQUFVLE9BQWUsTUFBTSxDQUFDLDJCQUEyQixFQUFFO1FBQ3hKLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFEMEMsU0FBSSxHQUFKLElBQUksQ0FBK0M7UUFFeEosSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ00sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFURCwwQ0FTQyJ9

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const renderable_1 = __webpack_require__(5);
class AbstractShape extends renderable_1.AbstractRenderable {
}
exports.AbstractShape = AbstractShape;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhDQUF3RTtBQU14RSxtQkFBcUUsU0FBUSwrQkFBK0M7Q0FBRztBQUEvSCxzQ0FBK0gifQ==

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = __webpack_require__(20);
const attribute_1 = __webpack_require__(19);
const constants_1 = __webpack_require__(9);
const rxjs_1 = __webpack_require__(11);
const box_1 = __webpack_require__(12);
const wrappers_1 = __webpack_require__(22);
const id_1 = __webpack_require__(21);
class Element {
    constructor(context, el, attrs, _id = id_1.randomShortStringId()) {
        this.context = context;
        this._id = _id;
        this._dynamicSubscriptions = {};
        if (typeof el === "string") {
            this._node = this.context.window.document.createElementNS(constants_1.XMLNS, el);
            this.context.addChild(this._node);
            if (attrs !== undefined) {
                this.setAttributes(attrs);
            }
            this._node.setAttribute("id", this._id);
        }
        else {
            this._node = el;
            const id = this._node.getAttribute("id");
            if (id !== null) {
                this._id = id;
            }
            else {
                this._node.setAttribute("id", this._id);
            }
        }
        this._style = this.context.window.getComputedStyle(this._node);
    }
    get id() {
        return this._id;
    }
    get node() {
        return this._node;
    }
    toString() {
        return `url(#${this._id})`;
    }
    renderAttribute(name, val) {
        if (attribute_1.isAttribute(val)) {
            val.set(this._node, name);
        }
        else if (Array.isArray(val)) {
            this._node.setAttribute(name, val.join("\t"));
        }
        else {
            this._node.setAttribute(name, String(val));
        }
    }
    setAttribute(name, val) {
        renderer_1.Renderer.getInstance().queueAttributeUpdate(this, name, val);
    }
    setAttributes(attrs) {
        renderer_1.Renderer.getInstance().queueAttributeUpdate(this, attrs);
    }
    animateAttribute(name, val, duration, easing) {
        let attr;
        if (typeof val === "number") {
            attr = new wrappers_1.NumberWrapper(val);
        }
        else if (attribute_1.isAttribute(val)) {
            attr = val;
        }
        else {
            return;
        }
        const from = attr.get(this._node, name);
        return renderer_1.Renderer.getInstance().registerAttributeInterpolation(this, name, attr.interpolator(from), duration, easing);
    }
    getAttribute(name) {
        const val = this._node.getAttribute(name) || this._style.getPropertyValue(name);
        return (val === "" || val === "none") ? null : val;
    }
    copyStyleFrom(el, includeExclude, defaultInclude = true) {
        const style = {};
        const attrs = el._node.attributes;
        if (includeExclude) {
            for (let i = 0; i < attrs.length; ++i) {
                const attr = attrs.item(i);
                if (attr) {
                    const name = attr.name;
                    if (includeExclude[name] === true || defaultInclude) {
                        style[name] = el._style.getPropertyValue(name);
                    }
                }
            }
        }
        else {
            for (let i = 0; i < attrs.length; ++i) {
                const attr = attrs.item(i);
                if (attr) {
                    const name = attr.name;
                    style[name] = el._style.getPropertyValue(name);
                }
            }
        }
        this.setAttributes(style);
    }
    getEvent(event) {
        return rxjs_1.Observable.merge(...event.split("|").map((_) => rxjs_1.Observable.fromEvent(this._node, _)));
    }
    get boundingBox() {
        const rect = this._node.getBoundingClientRect();
        return new box_1.Box(rect.left, rect.top, rect.width, rect.height);
    }
    add(el) {
        if (el instanceof SVGElement) {
            this._node.appendChild(el);
        }
        else {
            this._node.appendChild(el._node);
        }
    }
    getChildren() {
        const children = this._node.childNodes;
        const elements = [];
        for (let i = 0; i < children.length; ++i) {
            elements.push(new Element(this.context, children.item(i)));
        }
        return elements;
    }
    clone(deep = true, id = id_1.randomShortStringId()) {
        const copy = new Element(this.context, this._node.cloneNode(deep));
        copy._id = id;
        copy._node.setAttribute("id", copy._id);
        return copy;
    }
    destroy() {
        this._node.remove();
    }
    cloneNode(deep = true) {
        const clone = this._node.cloneNode(deep);
        clone.setAttribute("id", id_1.randomShortStringId());
        return clone;
    }
}
exports.Element = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBaUU7QUFDakUsMkNBQXFEO0FBRXJELDJDQUFvQztBQUlwQywrQkFBeUQ7QUFFekQsMENBQXVDO0FBQ3ZDLG9EQUFzRDtBQUN0RCw2QkFBMkM7QUFJM0M7SUFPRSxZQUFtQixPQUFnQixFQUFFLEVBQWdCLEVBQUUsS0FBMkIsRUFBVSxNQUFjLHdCQUFtQixFQUFFO1FBQTVHLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBeUQsUUFBRyxHQUFILEdBQUcsQ0FBZ0M7UUFKdkgsMEJBQXFCLEdBQUcsRUFBa0QsQ0FBQztRQUtqRixJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsaUJBQUssRUFBRSxFQUFFLENBQVEsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FB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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
class Transform {
    constructor(type) {
        this.type = type;
    }
    toString() {
        return `${this.type}(${this.args()})`;
    }
    parse(css) {
        if (css !== null) {
            return this.parseArgs(css.substring(css.indexOf("(") + 1, css.length - 1));
        }
        else {
            return this.parseArgs(css);
        }
    }
    get(element, attr) {
        const toks = attr.split(".");
        if (toks.length === 2 && toks[1] === this.type) {
            const css = element.getAttribute(toks[0]);
            if (css) {
                const start = css.indexOf(this.type);
                if (start > -1) {
                    return this.parse(css.substring(start, css.indexOf(")", start) + 1));
                }
            }
        }
        return this.parse(null);
    }
    set(element, attr, override) {
        const str = String((override === undefined) ? this : override);
        const toks = attr.split(".");
        if (toks.length === 2 && toks[1] === this.type) {
            const css = element.getAttribute(toks[0]);
            if (css) {
                const start = css.indexOf(this.type);
                if (start > -1) {
                    const updated = `${css.substr(0, start)}${str}${css.substr(css.indexOf(")", start) + 1)}`;
                    element.setAttribute(toks[0], updated);
                }
                else {
                    element.setAttribute(toks[0], str);
                }
            }
            else {
                element.setAttribute(toks[0], str);
            }
        }
        else {
            element.setAttribute(attr, str);
        }
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolateTransformSvg(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.Transform = Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlEO0FBU3pEO0lBQ0UsWUFBbUIsSUFBcUU7UUFBckUsU0FBSSxHQUFKLElBQUksQ0FBaUU7SUFBRyxDQUFDO0lBRXJGLFFBQVE7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUN4QyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUM5QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksR0FBRyxFQUFFO2dCQUNQLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEU7YUFDRjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZLEVBQUUsUUFBb0I7UUFDaEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUM5QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksR0FBRyxFQUFFO2dCQUNQLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDZCxNQUFNLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzFGLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN4QztxQkFBTTtvQkFDTCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDcEM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNwQztTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFDTSxZQUFZLENBQUMsSUFBZTtRQUNqQyxNQUFNLElBQUksR0FBRyx3Q0FBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkUsT0FBTyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFuREQsOEJBbURDIn0=

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
class AbstractRenderable extends element_1.Element {
    getPointEvent(events) {
        return this.getEvent(events).map((event) => {
            const action = (event instanceof MouseEvent) ? event : event.touches[0];
            const ref = this.context.refPoint;
            ref.x = action.clientX;
            ref.y = action.clientY;
            const matrix = this.node.getScreenCTM();
            if (!matrix) {
                throw new Error(`No Screen Coordinate Transform Matrix found for node "${this.node.id}"`);
            }
            const local = ref.matrixTransform(matrix.inverse());
            return {
                local: {
                    x: local.x,
                    y: local.y,
                },
                page: {
                    x: action.pageX,
                    y: action.pageY,
                },
                screen: {
                    x: action.screenX,
                    y: action.screenY,
                },
            };
        });
    }
}
exports.AbstractRenderable = AbstractRenderable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbmRlcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSx3Q0FBcUM7QUFtQnJDLHdCQUF1SCxTQUFRLGlCQUE0RDtJQUNsTCxhQUFhLENBQUMsTUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO1lBQ2xFLE1BQU0sTUFBTSxHQUF1QixDQUFDLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN2QixHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMzRjtZQUNELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDcEQsT0FBTztnQkFDTCxLQUFLLEVBQUU7b0JBQ0wsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNWLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDWDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLO29CQUNmLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSztpQkFDaEI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTztvQkFDakIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2lCQUNsQjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTVCRCxnREE0QkMifQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
class AbstractNonRenderable extends element_1.Element {
}
exports.AbstractNonRenderable = AbstractNonRenderable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uLXJlbmRlcmFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub24tcmVuZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdDQUFxQztBQU9yQywyQkFBMkYsU0FBUSxpQkFBb0Y7Q0FBRztBQUExTCxzREFBMEwifQ==

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
class Dimension {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }
    toString() {
        return `${this.value}${this.unit}`;
    }
    parse(css) {
        if (css !== null) {
            const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
            if (m !== null) {
                return this._convert(parseFloat(m[1]), m[2]);
            }
            else {
                return new Dimension(parseFloat(css), this.unit);
            }
        }
        return new Dimension(0, this.unit);
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
        const a = this._convert(from.value, from.unit);
        const func = d3_interpolate_1.interpolate(a.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
    _convert(value, unit) {
        const scale = (Dimension.convert[this.unit] / Dimension.convert[unit]) || 1;
        return new Dimension(value * scale, this.unit);
    }
}
Dimension.convert = {
    px: 1,
    in: 96,
    cm: 254 / 96,
    mm: 25.4 / 96,
    pt: 3 / 4,
    pc: 9,
    deg: 1,
    grad: 9 / 10,
    rad: 180 / Math.PI,
    turn: 360,
};
exports.Dimension = Dimension;
class Percentage extends Dimension {
    constructor(value) {
        super(value, "%");
    }
}
exports.Percentage = Percentage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGltZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBUzdDO0lBYUUsWUFBbUIsS0FBYSxFQUFTLElBQVU7UUFBaEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBQ2hELFFBQVE7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxTQUFTLENBQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4RDtTQUNGO1FBQ0QsT0FBTyxJQUFJLFNBQVMsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUEwQjtRQUN0RSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUNNLFlBQVksQ0FBQyxJQUFxQjtRQUN2QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLE1BQU0sSUFBSSxHQUFHLDRCQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNPLFFBQVEsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUMxQyxNQUFNLEtBQUssR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDOztBQTdDYyxpQkFBTyxHQUErQjtJQUNuRCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFO0lBQ1osRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFO0lBQ2IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1QsRUFBRSxFQUFFLENBQUM7SUFDTCxHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUNaLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUU7SUFDbEIsSUFBSSxFQUFFLEdBQUc7Q0FDVixDQUFDO0FBWkosOEJBK0NDO0FBRUQsZ0JBQXdCLFNBQVEsU0FBYztJQUM1QyxZQUFZLEtBQWE7UUFDdkIsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0Y7QUFKRCxnQ0FJQyJ9

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = __webpack_require__(18);
const renderable_1 = __webpack_require__(5);
class Group extends renderable_1.AbstractRenderable {
    constructor(context, attrs) {
        super(context, "g", attrs);
    }
    toPattern(w, h, x, y, view) {
        const pattern = new pattern_1.Pattern(this.context, w, h, x, y, view);
        this.getChildren().forEach(child => pattern.add(child));
        return pattern;
    }
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHNFQUFtRTtBQUNuRSw4Q0FBaUc7QUFJakcsV0FBbUIsU0FBUSwrQkFBcUQ7SUFDOUUsWUFBWSxPQUFnQixFQUFFLEtBQXNDO1FBQ2xFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFJTSxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLElBQVU7UUFDdkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBWkQsc0JBWUMifQ==

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLNS = "http://www.w3.org/2000/svg";
exports.XLINK = "http://www.w3.org/1999/xlink";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxLQUFLLEdBQUcsNEJBQTRCLENBQUM7QUFDckMsUUFBQSxLQUFLLEdBQUcsOEJBQThCLENBQUMifQ==

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
const rxjs_1 = __webpack_require__(11);
const box_1 = __webpack_require__(12);
const point_1 = __webpack_require__(13);
const constants_1 = __webpack_require__(9);
const document_1 = __webpack_require__(15);
const element_1 = __webpack_require__(3);
const clip_path_1 = __webpack_require__(23);
const marker_1 = __webpack_require__(24);
const mask_1 = __webpack_require__(25);
const linear_1 = __webpack_require__(26);
const radial_1 = __webpack_require__(27);
const pattern_1 = __webpack_require__(18);
const external_1 = __webpack_require__(28);
const foreign_object_1 = __webpack_require__(34);
const group_1 = __webpack_require__(8);
const image_1 = __webpack_require__(35);
const circle_1 = __webpack_require__(36);
const ellipse_1 = __webpack_require__(37);
const line_1 = __webpack_require__(38);
const path_1 = __webpack_require__(39);
const polygon_1 = __webpack_require__(40);
const polyline_1 = __webpack_require__(41);
const rect_1 = __webpack_require__(42);
const text_1 = __webpack_require__(43);
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
        this._target = this._root;
        const defsElements = this._root.getElementsByTagName("defs");
        if (defsElements.length > 0) {
            this._defs = new element_1.Element(this, defsElements.item(0));
        }
        else {
            this._defs = new element_1.Element(this, "defs");
        }
        Context._CONTEXT_SUBJECT.next(this);
    }
    static get contexts() {
        return Context._CONTEXT_SUBJECT.asObservable();
    }
    get window() {
        return this._window;
    }
    get refPoint() {
        return this._root.createSVGPoint();
    }
    addDef(def) {
        this._defs.add(def);
    }
    addChild(el) {
        this._target.appendChild((el instanceof element_1.Element) ? el.node : el);
    }
    load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const xmlDocument = yield document_1.makeRequest("GET", url);
            const externalDocument = new document_1.SVGDocument(this, xmlDocument);
            return new external_1.ExternalSVG(this, externalDocument);
        });
    }
    clipPath(w, h, x, y, units, contentUnits) {
        return new clip_path_1.ClipPath(this, w, h, x, y, units, contentUnits);
    }
    marker() {
        return new marker_1.Marker(this, {});
    }
    mask(w, h, x, y, units, contentUnits) {
        return new mask_1.Mask(this, w, h, x, y, units, contentUnits);
    }
    linearGradient(stops, attrs) {
        return new linear_1.LinearGradient(this, stops, attrs);
    }
    radialGradient(stops, attrs) {
        return new radial_1.RadialGradient(this, stops, attrs);
    }
    pattern(w, h, x, y, view) {
        return new pattern_1.Pattern(this, w, h, x, y, view);
    }
    foreignObject(html, x, y, width, height) {
        const el = new foreign_object_1.ForeignObject(this, { x, y, width, height });
        el.addHTML(html);
        this.addChild(el);
        return el;
    }
    group(els) {
        const el = new group_1.Group(this);
        els.forEach(child => el.add(child));
        this.addChild(el);
        return el;
    }
    image(href) {
        return __awaiter(this, void 0, void 0, function* () {
            const img = new image_1.Image(this);
            const promise = img.getEvent("load").take(1).toPromise();
            img.setAttribute("href", href);
            this.addChild(img);
            const event = yield promise;
            return img;
        });
    }
    circle(a1, a2, a3) {
        const attrs = (a1 instanceof point_1.Point) ? { "cx:cy": a1, r: a2 } : { cx: a1, cy: a2, r: a3 };
        return new circle_1.Circle(this, attrs);
    }
    ellipse(a1, a2, a3, a4) {
        let attrs = {};
        const a1IsPoint = a1 instanceof point_1.Point;
        const a2IsPoint = a2 instanceof point_1.Point;
        if (a1IsPoint && a2IsPoint) {
            attrs = { "cx:cy": a1, "rx:ry": a2 };
        }
        else if (!(a1IsPoint || a2IsPoint)) {
            attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
        }
        return new ellipse_1.Ellipse(this, attrs);
    }
    line(a1, a2, a3, a4) {
        let attrs = {};
        const a1IsPoint = a1 instanceof point_1.Point;
        const a2IsPoint = a2 instanceof point_1.Point;
        if (a1IsPoint && a2IsPoint) {
            attrs = { "x1:y1": a1, "x2:y2": a2 };
        }
        else if (!(a1IsPoint || a2IsPoint)) {
            attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
        }
        return new line_1.Line(this, attrs);
    }
    path(d, pathLength) {
        const attrs = { d, pathLength };
        return new path_1.Path(this, attrs);
    }
    polygon(points) {
        const attrs = { points };
        return new polygon_1.Polygon(this, attrs);
    }
    polyline(points) {
        const attrs = { points };
        return new polyline_1.Polyline(this, attrs);
    }
    rect(a1, a2, a3, a4, a5, a6) {
        const attrs = {};
        if (a1 instanceof box_1.Box) {
            attrs["x:y:width:height"] = a1;
            if (a2 instanceof point_1.Point) {
                attrs["rx:ry"] = a2;
            }
            else {
                if (a2 !== undefined) {
                    attrs["rx"] = a2;
                }
                if (a3 !== undefined) {
                    attrs["ry"] = a3;
                }
            }
        }
        else if (a1 instanceof point_1.Point) {
            attrs["x:y"] = a1;
            if (a2 !== undefined) {
                attrs["width"] = a2;
            }
            if (a3 !== undefined) {
                attrs["height"] = a3;
            }
            if (a4 instanceof point_1.Point) {
                attrs["rx:ry"] = a4;
            }
            else {
                if (a4 !== undefined) {
                    attrs["rx"] = a4;
                }
                if (a5 !== undefined) {
                    attrs["ry"] = a5;
                }
            }
        }
        else {
            attrs["x"] = a1;
            if (a2 !== undefined) {
                attrs["y"] = a2;
            }
            if (a3 !== undefined) {
                attrs["width"] = a3;
            }
            if (a4 !== undefined) {
                attrs["height"] = a4;
            }
            if (a5 instanceof point_1.Point) {
                attrs["rx:ry"] = a5;
            }
            else {
                if (a5 !== undefined) {
                    attrs["rx"] = a5;
                }
                if (a6 !== undefined) {
                    attrs["ry"] = a6;
                }
            }
        }
        return new rect_1.Rect(this, attrs);
    }
    text(content, a1, a2) {
        const attrs = (a1 instanceof point_1.Point) ? { "x:y": a1 } : { x: a1, y: a2 };
        const t = new text_1.Text(this, attrs);
        content.forEach(c => t.addSpan(c));
        this.addChild(t);
        return t;
    }
}
Context.DEFAULT_WINDOW = window;
Context._CONTEXT_SUBJECT = new rxjs_1.ReplaySubject(1);
exports.Context = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUFpRDtBQUVqRCwwQ0FBdUM7QUFFdkMsOENBQTJDO0FBRTNDLDJDQUEyQztBQUMzQyx5Q0FBc0Q7QUFDdEQsdUNBQW9DO0FBQ3BDLG9FQUFnRTtBQUNoRSw4REFBMkQ7QUFDM0QsMERBQXVEO0FBRXZELHNGQUFzSDtBQUN0SCxzRkFBc0g7QUFDdEgsOEVBQTJFO0FBRTNFLDhEQUE4RDtBQUM5RCwwRUFBc0U7QUFDdEUsd0RBQXFEO0FBQ3JELHdEQUFxRDtBQUNyRCxpRUFBOEQ7QUFDOUQsbUVBQWdFO0FBQ2hFLDZEQUEwRDtBQUMxRCw2REFBMEQ7QUFDMUQsbUVBQWdFO0FBQ2hFLHFFQUFrRTtBQUNsRSw2REFBMEQ7QUFDMUQsc0RBQW1EO0FBTW5EO0lBWUUsWUFBWSxJQUE2QixFQUFVLFVBQWtCLE9BQU8sQ0FBQyxjQUFjO1FBQXhDLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBQ3pGLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxFQUFFLFlBQVksYUFBYSxFQUFFO29CQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2lCQUMzRDthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGlCQUFLLEVBQUUsS0FB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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
class Box {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    toString() {
        return `${this.x} ${this.y} ${this.width} ${this.height}`;
    }
    parse(css) {
        if (css !== null) {
            const toks = css.split(" ");
            return new Box(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]));
        }
        else {
            return new Box(0, 0, 0, 0);
        }
    }
    get(element, attr) {
        const toks = attr.split(":");
        if (toks.length === 4) {
            const cssX = element.getAttribute(toks[0]);
            const cssY = element.getAttribute(toks[1]);
            const cssWidth = element.getAttribute(toks[2]);
            const cssHeight = element.getAttribute(toks[3]);
            if (cssX !== null && cssY !== null && cssWidth !== null && cssHeight !== null) {
                return new Box(parseFloat(cssX), parseFloat(cssY), parseFloat(cssWidth), parseFloat(cssHeight));
            }
            else {
                return new Box(0, 0, 0, 0);
            }
        }
        else {
            return this.parse(element.getAttribute(attr));
        }
    }
    set(element, attr, override) {
        const toks = attr.split(":");
        if (toks.length === 4) {
            if (override !== undefined) {
                element.setAttribute(toks[0], override.x.toString());
                element.setAttribute(toks[1], override.y.toString());
                element.setAttribute(toks[2], override.width.toString());
                element.setAttribute(toks[3], override.height.toString());
            }
            else {
                element.setAttribute(toks[0], this.x.toString());
                element.setAttribute(toks[1], this.y.toString());
                element.setAttribute(toks[2], this.width.toString());
                element.setAttribute(toks[3], this.height.toString());
            }
        }
        else {
            if (override !== undefined) {
                element.setAttribute(attr, override.toString());
            }
            else {
                element.setAttribute(attr, this.toString());
            }
        }
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.Box = Box;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBSzdDO0lBQ0UsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxLQUFhLEVBQVMsTUFBYztRQUF4RSxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUN4RixRQUFRO1FBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEc7YUFBTTtZQUNMLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWTtRQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FB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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
const base_1 = __webpack_require__(14);
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `${this.x},${this.y}`;
    }
    parse(css) {
        if (css !== null) {
            const toks = css.split(",");
            return new Point(base_1._LengthParse(toks[0]), base_1._LengthParse(toks[1]));
        }
        else {
            return new Point(0, 0);
        }
    }
    get(element, attr) {
        const toks = attr.split(":");
        if (toks.length === 2) {
            const cssX = element.getAttribute(toks[0]);
            const cssY = element.getAttribute(toks[1]);
            if (cssX !== null && cssY !== null) {
                return new Point(base_1._LengthParse(cssX), base_1._LengthParse(cssY));
            }
            else {
                return new Point(0, 0);
            }
        }
        else {
            return this.parse(element.getAttribute(attr));
        }
    }
    set(element, attr, override) {
        const toks = attr.split(":");
        if (toks.length === 2) {
            if (override !== undefined) {
                element.setAttribute(toks[0], override.x.toString());
                element.setAttribute(toks[1], override.y.toString());
            }
            else {
                element.setAttribute(toks[0], this.x.toString());
                element.setAttribute(toks[1], this.y.toString());
            }
        }
        else {
            if (override !== undefined) {
                element.setAttribute(attr, override.toString());
            }
            else {
                element.setAttribute(attr, this.toString());
            }
        }
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.Point = Point;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE2QztBQUc3QyxpQ0FBOEM7QUFFOUM7SUFDRSxZQUFtQixDQUFTLEVBQVMsQ0FBUztRQUEzQixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFHLENBQUM7SUFDM0MsUUFBUTtRQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxLQUFLLENBQUMsbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxtQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7UUFDMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDbEMsT0FBTyxJQUFJLEtBQUssQ0FBQyxtQkFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMxRDtpQkFBTTtnQkFDTCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtTQUNGO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUFnQjtRQUM1RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUMxQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNsRDtTQUNGO2FBQU07WUFDTCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7SUFDSCxDQUFDO0lBQ00sWUFBWSxDQUFDLElBQVc7UUFDN0IsTUFBTSxJQUFJLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFqREQsc0JBaURDIn0=

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(7);
exports._LengthParse = (css) => {
    const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
    if (m !== null) {
        return new dimension_1.Dimension(parseFloat(m[1]), m[2]);
    }
    return parseFloat(css);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwyQ0FBd0c7QUFjM0YsUUFBQSxZQUFZLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUNsRCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2QsT0FBTyxJQUFJLHFCQUFTLENBQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25EO0lBQ0QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDIn0=

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SVGDocument {
    constructor(context, raw, mimeType = "application/xml") {
        this._document = (raw instanceof Document) ? raw : SVGDocument.PARSER.parseFromString(raw, mimeType);
        const allDefs = Array.from(this._document.getElementsByTagName("defs"));
        allDefs.forEach((defs) => {
            if (defs.parentNode) {
                const rmDefs = defs.parentNode.removeChild(defs);
                while (rmDefs.children.length > 0) {
                    context.addDef(rmDefs.children[0]);
                }
            }
        });
    }
    get children() {
        return Array.prototype.slice.call(this._document.documentElement.children);
    }
}
SVGDocument.PARSER = new DOMParser();
exports.SVGDocument = SVGDocument;
exports.makeRequest = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const xml = xhr.responseXML;
                if (xml !== null) {
                    resolve(xml);
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText,
                    });
                }
            }
        };
        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText,
            });
        };
        xhr.send();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2N1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBR0UsWUFBWSxPQUFnQixFQUFFLEdBQXNCLEVBQUUsV0FBbUIsaUJBQWlCO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFlBQVksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JHLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBZSxDQUFDLENBQUM7aUJBQ2xEO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7QUFoQmMsa0JBQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBRDFDLGtDQWtCQztBQUVZLFFBQUEsV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBcUIsRUFBRTtJQUM1RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLE1BQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ3pDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNkO3FCQUFNO29CQUNMLE1BQU0sQ0FBQzt3QkFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07d0JBQ2xCLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtxQkFDM0IsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNqQixNQUFNLENBQUM7Z0JBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2dCQUNsQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7YUFDM0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(7);
const element_1 = __webpack_require__(3);
const paint_server_1 = __webpack_require__(17);
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
        Object.keys(stops).forEach(offset => {
            stopArr.push(new Stop(context, Number(offset), stops[offset]));
        });
        stopArr.sort((a, b) => {
            return a.offset - b.offset;
        });
        stopArr.forEach(s => this.add(s));
    }
}
exports.AbstractGradient = AbstractGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZEQUFzRTtBQVF0RSw4Q0FBMkM7QUFFM0Msa0RBQXNEO0FBMEJ0RCxVQUFrQixTQUFRLGlCQUE4RDtJQUN0RixZQUFZLE9BQWdCLEVBQVMsTUFBYyxFQUFFLEtBQXVDO1FBQzFGLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLHFCQUFTLENBQU0sTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDN0MsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBSmdDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFLbkQsQ0FBQztDQUNGO0FBUEQsb0JBT0M7QUFFRCxzQkFBNkcsU0FBUSxrQ0FBMEM7SUFDN0osWUFBWSxPQUFnQixFQUFFLElBQVksRUFBRSxLQUFZLEVBQUUsS0FBOEQ7UUFDdEgsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBYkQsNENBYUMifQ==

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = __webpack_require__(6);
class AbstractPaintServer extends non_renderable_1.AbstractNonRenderable {
}
exports.AbstractPaintServer = AbstractPaintServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpbnQtc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFpbnQtc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQTBEO0FBRTFELHlCQUF1RixTQUFRLHNDQUErQztDQUFHO0FBQWpKLGtEQUFpSiJ9

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const paint_server_1 = __webpack_require__(17);
class Pattern extends paint_server_1.AbstractPaintServer {
    constructor(context, w, h = (w instanceof SVGPatternElement) ? 0 : w, x = 0, y = 0, view) {
        super(context, (w instanceof SVGPatternElement) ? w : "pattern");
        this.context = context;
        this.context.addDef(this);
        if (!(w instanceof SVGPatternElement)) {
            this.setAttribute("width", w);
            this.setAttribute("height", h);
            this.setAttribute("x", x);
            this.setAttribute("y", y);
            if (view) {
                this.setAttribute("viewBox", view);
            }
            else {
                this.setAttribute("patternUnits", "userSpaceOnUse");
            }
        }
    }
    clone(deep = true) {
        return new Pattern(this.context, super.cloneNode(deep));
    }
}
exports.Pattern = Pattern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdHRlcm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFXQSxrREFBc0Q7QUF5QnRELGFBQXFCLFNBQVEsa0NBQTBEO0lBR3JGLFlBQW1CLE9BQWdCLEVBQUUsQ0FBNkIsRUFBRSxJQUFZLENBQUMsQ0FBQyxZQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQyxFQUFFLElBQVU7UUFDaEssS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRGhELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGlCQUFpQixDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUNyRDtTQUNGO0lBQ0gsQ0FBQztJQUNNLEtBQUssQ0FBQyxPQUFnQixJQUFJO1FBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGO0FBckJELDBCQXFCQyJ9

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isAttribute = (obj) => {
    return obj && (typeof obj["interpolator"] === "function") && (typeof obj["parse"] === "function");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY2EsUUFBQSxXQUFXLEdBQUcsQ0FBQyxHQUF5QixFQUF5QixFQUFFO0lBQzlFLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQztBQUNwRyxDQUFDLENBQUMifQ==

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(11);
const id_1 = __webpack_require__(21);
class Renderer {
    constructor() {
        this._animationFrame = rxjs_1.Observable.interval(0, rxjs_1.Scheduler.animationFrame);
        this._attributeUpdates = new rxjs_1.Subject();
        this._attributeInterpolations = {};
        this._attributeUpdates.bufferWhen(() => this._animationFrame).subscribe((updates) => {
            const now = performance.now();
            updates.forEach(({ el, attribute }) => {
                el.renderAttribute(attribute.name, attribute.val);
            });
            Object.keys(this._attributeInterpolations).forEach((key) => {
                const interpolation = this._attributeInterpolations[key];
                const finalRender = now > (interpolation.start + interpolation.duration);
                const t = (finalRender) ? 1 : interpolation.easing((now - interpolation.start) / interpolation.duration);
                interpolation.attributes.forEach((attribute) => {
                    const val = attribute.val(t);
                    interpolation.el.renderAttribute(attribute.name, val);
                });
                if (finalRender) {
                    delete this._attributeInterpolations[key];
                    interpolation.resolve(now);
                }
            });
        });
    }
    static getInstance() {
        return Renderer._instance;
    }
    queueAttributeUpdate(a1, a2, a3) {
        if (typeof a2 === "string") {
            this._attributeUpdates.next({ el: a1, attribute: { name: a2, val: a3 } });
        }
        else {
            Object.keys(a2).forEach((name) => {
                this._attributeUpdates.next({ el: a1, attribute: { name, val: a2[name] } });
            });
        }
    }
    registerAttributeInterpolation(el, attr, val, duration, easing) {
        return new Promise((resolve) => {
            const key = id_1.randomShortStringId();
            const start = performance.now();
            const attributes = [{ name: attr, val }];
            this._attributeInterpolations[key] = { el, attributes, start, duration, easing, resolve };
        });
    }
}
Renderer._instance = new Renderer();
exports.Renderer = Renderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtCQUFzRDtBQUV0RCw4QkFBNEM7QUE4QjVDO0lBUUU7UUFIUSxvQkFBZSxHQUFHLGlCQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxnQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLHNCQUFpQixHQUFHLElBQUksY0FBTyxFQUFvRCxDQUFDO1FBQ3BGLDZCQUF3QixHQUE2RSxFQUFFLENBQUM7UUFFOUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEYsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO2dCQUNwQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDekQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pHLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQzdDLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksV0FBVyxFQUFFO29CQUNmLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0JNLE1BQU0sQ0FBQyxXQUFXO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBNEJNLG9CQUFvQixDQUFtRSxFQUFLLEVBQUUsRUFBc0IsRUFBRSxFQUFhO1FBQ3hJLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDTSw4QkFBOEIsQ0FBbUUsRUFBSyxFQUFFLElBQU8sRUFBRSxHQUE0QixFQUFFLFFBQWdCLEVBQUUsTUFBc0I7UUFDNUwsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLE1BQU0sR0FBRyxHQUFHLHdCQUFtQixFQUFFLENBQUM7WUFDbEMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sVUFBVSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM1RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBM0NjLGtCQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUo1Qyw0QkFnREMifQ==

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.randomShortStringId = () => Math.random().toString(36).substring(2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNhLFFBQUEsbUJBQW1CLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
class NumberWrapper {
    constructor(n = 0) {
        this.n = n;
    }
    toString() {
        return this.n.toString();
    }
    parse(css) {
        if (css !== null) {
            return new NumberWrapper(parseFloat(css));
        }
        else {
            return new NumberWrapper();
        }
    }
    get(element, attr) {
        return this.parse(element.getAttribute(attr));
    }
    set(element, attr, override) {
        element.setAttribute(attr, (override !== undefined ? override : this).toString());
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.NumberWrapper = NumberWrapper;
class ArrayWrapper {
    constructor(arr = []) {
        this.arr = arr;
    }
    toString() {
        return this.arr.join("\t");
    }
    parse(css) {
        if (css !== null) {
            const toks = css.split("\t");
            return new ArrayWrapper(this.arr.map((a, i) => a.parse((i >= toks.length) ? null : toks[i])));
        }
        else {
            return new ArrayWrapper(this.arr.map(a => a.parse(null)));
        }
    }
    get(element, attr) {
        return this.parse(element.getAttribute(attr));
    }
    set(element, attr, override) {
        element.setAttribute(attr, (override !== undefined ? override : this).toString());
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.ArrayWrapper = ArrayWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3cmFwcGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE2QztBQUs3QztJQUNFLFlBQW1CLElBQVksQ0FBQztRQUFiLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFBRyxDQUFDO0lBQzdCLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWSxFQUFFLFFBQXdCO1FBQ3BFLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDTSxZQUFZLENBQUMsSUFBNEI7UUFDOUMsTUFBTSxJQUFJLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUF0QkQsc0NBc0JDO0FBRUQ7SUFDRSxZQUFtQixNQUFXLEVBQUU7UUFBYixRQUFHLEdBQUgsR0FBRyxDQUFVO0lBQUcsQ0FBQztJQUM3QixRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLE9BQU8sSUFBSSxZQUFZLENBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEc7YUFBTTtZQUNMLE9BQU8sSUFBSSxZQUFZLENBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUEwQjtRQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBQ00sWUFBWSxDQUFDLElBQXFCO1FBQ3ZDLE1BQU0sSUFBSSxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBdkJELG9DQXVCQyJ9

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = __webpack_require__(6);
class ClipPath extends non_renderable_1.AbstractNonRenderable {
    constructor(context, w, h, x, y, units, contentUnits) {
        super(context, "clipPath");
        this.context = context;
        this.context.addDef(this);
        if (w !== undefined) {
            this.setAttribute("width", w);
        }
        if (h !== undefined) {
            this.setAttribute("height", h);
        }
        if (x !== undefined) {
            this.setAttribute("x", x);
        }
        if (y !== undefined) {
            this.setAttribute("y", y);
        }
        if (units !== undefined) {
            this.setAttribute("maskUnits", units);
        }
        if (contentUnits !== undefined) {
            this.setAttribute("maskContentUnits", contentUnits);
        }
    }
}
exports.ClipPath = ClipPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcC1wYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpcC1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsc0RBQTBEO0FBa0IxRCxjQUFzQixTQUFRLHNDQUEwRDtJQUN0RixZQUFtQixPQUFnQixFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxLQUE4QyxFQUFFLFlBQXFEO1FBQ3hMLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFEVixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztDQUNGO0FBdkJELDRCQXVCQyJ9

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = __webpack_require__(6);
class Marker extends non_renderable_1.AbstractNonRenderable {
    constructor(context, attrs) {
        super(context, "marker", attrs);
    }
}
exports.Marker = Marker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsc0RBQW9GO0FBb0JwRixZQUFvQixTQUFRLHNDQUEwRDtJQUNwRixZQUFZLE9BQWdCLEVBQUUsS0FBNkQ7UUFDekYsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBSkQsd0JBSUMifQ==

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = __webpack_require__(6);
class Mask extends non_renderable_1.AbstractNonRenderable {
    constructor(context, w, h, x, y, units, contentUnits) {
        super(context, "mask");
        this.context = context;
        this.context.addDef(this);
        if (w !== undefined) {
            this.setAttribute("width", w);
        }
        if (h !== undefined) {
            this.setAttribute("height", h);
        }
        if (x !== undefined) {
            this.setAttribute("x", x);
        }
        if (y !== undefined) {
            this.setAttribute("y", y);
        }
        if (units !== undefined) {
            this.setAttribute("maskUnits", units);
        }
        if (contentUnits !== undefined) {
            this.setAttribute("maskContentUnits", contentUnits);
        }
    }
}
exports.Mask = Mask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxzREFBMEQ7QUFpQjFELFVBQWtCLFNBQVEsc0NBQXNEO0lBQzlFLFlBQW1CLE9BQWdCLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLEtBQThDLEVBQUUsWUFBcUQ7UUFDeEwsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUROLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDO0NBQ0Y7QUF2QkQsb0JBdUJDIn0=

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gradient_1 = __webpack_require__(16);
class LinearGradient extends gradient_1.AbstractGradient {
    constructor(context, stops, attrs) {
        super(context, "linearGradient", stops, attrs);
    }
}
exports.LinearGradient = LinearGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGluZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQTJFO0FBVzNFLG9CQUE0QixTQUFRLDJCQUFxRTtJQUN2RyxZQUFZLE9BQWdCLEVBQUUsS0FBWSxFQUFFLEtBQXFFO1FBQy9HLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gradient_1 = __webpack_require__(16);
class RadialGradient extends gradient_1.AbstractGradient {
    constructor(context, stops, attrs) {
        super(context, "radialGradient", stops, attrs);
    }
}
exports.RadialGradient = RadialGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQTJFO0FBWTNFLG9CQUE0QixTQUFRLDJCQUFxRTtJQUN2RyxZQUFZLE9BQWdCLEVBQUUsS0FBWSxFQUFFLEtBQXFFO1FBQy9HLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = __webpack_require__(10);
const document_1 = __webpack_require__(15);
const component_1 = __webpack_require__(29);
const group_1 = __webpack_require__(8);
class ExternalSVG extends group_1.Group {
    constructor(context, doc, attrs) {
        super(context, attrs);
        doc.children.forEach((child) => {
            const importedNode = context.window.document.importNode(child, true);
            this.add(importedNode);
        });
    }
}
exports.ExternalSVG = ExternalSVG;
function buildExternalComponentClass(url, origin = { x: 0, y: 0 }) {
    const xmlDocument_p = document_1.makeRequest("GET", url);
    const context_p = context_1.Context.contexts.take(1).toPromise();
    const doc_p = Promise.all([context_p, xmlDocument_p]).then(([context, xml]) => {
        return new document_1.SVGDocument(context, xml);
    });
    return class extends component_1.Component {
        constructor() {
            super(origin);
            this.loaded = doc_p.then((doc) => {
                doc.children.forEach((child) => {
                    const importedNode = this.context.window.document.importNode(child, true);
                    this.add(importedNode);
                });
            });
            this._node.setAttribute("data-source-url", url);
        }
    };
}
exports.buildExternalComponentClass = buildExternalComponentClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleHRlcm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUN4Qyw2Q0FBMEQ7QUFFMUQsMkNBQXdDO0FBQ3hDLG1DQUFnQztBQUVoQyxpQkFBeUIsU0FBUSxhQUFLO0lBQ3BDLFlBQVksT0FBZ0IsRUFBRSxHQUFnQixFQUFFLEtBQXNDO1FBQ3BGLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFSRCxrQ0FRQztBQU9ELHFDQUE0QyxHQUFXLEVBQUUsU0FBbUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDeEcsTUFBTSxhQUFhLEdBQUcsc0JBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUMsTUFBTSxTQUFTLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzVFLE9BQU8sSUFBSSxzQkFBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sS0FBTSxTQUFRLHFCQUFTO1FBRTVCO1lBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQzdCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBbkJELGtFQW1CQyJ9

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = __webpack_require__(30);
const rotate_1 = __webpack_require__(31);
const scale_1 = __webpack_require__(32);
const translate_1 = __webpack_require__(33);
const context_1 = __webpack_require__(10);
const group_1 = __webpack_require__(8);
class Component extends group_1.Group {
    constructor(origin, easing = easing_1.linear) {
        super(Component.context);
        this.easing = easing;
        this._hidden = false;
        const transforms = [new translate_1.Translate_Transform(), new rotate_1.Rotate_Transform(0), new scale_1.Scale_Transform()];
        if (origin) {
            transforms.push(new translate_1.Translate_Transform(-origin.x, -origin.y));
        }
        this.setAttribute("transform", transforms);
    }
    static get context() {
        if (!Component._CONTEXT) {
            throw new ReferenceError("No static Component context found. Set one manually, or subscribe to the latest created context.");
        }
        return Component._CONTEXT;
    }
    static set context(ctx) {
        if (Component._CONTEXT_SUBSCRIPTION) {
            Component._CONTEXT_SUBSCRIPTION.unsubscribe();
        }
        Component._CONTEXT = ctx;
    }
    static subscribeLatestContext() {
        if (Component._CONTEXT_SUBSCRIPTION) {
            return;
        }
        Component._CONTEXT_SUBSCRIPTION = context_1.Context.contexts.subscribe((context) => {
            Component._CONTEXT = context;
        });
    }
    moveTo(x, y, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.translate", new translate_1.Translate_Transform(x, y));
        }
        else {
            this.animateAttribute("transform.translate", new translate_1.Translate_Transform(x, y), duration, this.easing);
        }
    }
    rotate(angle, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.rotate", new rotate_1.Rotate_Transform(angle));
        }
        else {
            this.animateAttribute("transform.rotate", new rotate_1.Rotate_Transform(angle), duration, this.easing);
        }
    }
    scale(x, y = x, duration = 0) {
        if (duration === 0) {
            this.setAttribute("transform.scale", new scale_1.Scale_Transform(x, y));
        }
        else {
            this.animateAttribute("transform.scale", new scale_1.Scale_Transform(x, y), duration, this.easing);
        }
    }
    show() {
        if (!this._hidden) {
            this.setAttribute("opacity", 1);
            this._hidden = false;
        }
    }
    hide() {
        if (this._hidden) {
            this.setAttribute("opacity", 0);
            this._hidden = true;
        }
    }
}
exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQWdFO0FBRWhFLCtEQUFzRTtBQUN0RSw2REFBb0U7QUFDcEUscUVBQTRFO0FBQzVFLDJDQUF3QztBQUN4QyxtQ0FBZ0M7QUFFaEMsZUFBdUIsU0FBUSxhQUFLO0lBd0JsQyxZQUFZLE1BQWlDLEVBQVksU0FBeUIsZUFBTTtRQUN0RixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRDhCLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBRGhGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHdEIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLCtCQUFtQixFQUFFLEVBQUUsSUFBSSx5QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLHVCQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLElBQUksTUFBTSxFQUFFO1lBQ1YsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQTlCTSxNQUFNLEtBQUssT0FBTztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN2QixNQUFNLElBQUksY0FBYyxDQUFDLGtHQUFrRyxDQUFDLENBQUM7U0FDOUg7UUFDRCxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUNNLE1BQU0sS0FBSyxPQUFPLENBQUMsR0FBWTtRQUNwQyxJQUFJLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRTtZQUNuQyxTQUFTLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0M7UUFDRCxTQUFTLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBQ00sTUFBTSxDQUFDLHNCQUFzQjtRQUNsQyxJQUFJLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRTtZQUNuQyxPQUFPO1NBQ1I7UUFDRCxTQUFTLENBQUMscUJBQXFCLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDdkUsU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBWU0sTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsV0FBbUIsQ0FBQztRQUN0RCxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLCtCQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsSUFBSSwrQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRztJQUNILENBQUM7SUFDTSxNQUFNLENBQUMsS0FBYSxFQUFFLFdBQW1CLENBQUM7UUFDL0MsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsSUFBSSx5QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSx5QkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQUNNLEtBQUssQ0FBQyxDQUFTLEVBQUUsSUFBWSxDQUFDLEVBQUUsV0FBbUIsQ0FBQztRQUN6RCxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLHVCQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLHVCQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUY7SUFDSCxDQUFDO0lBQ00sSUFBSTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUNNLElBQUk7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDO0NBQ0Y7QUFqRUQsOEJBaUVDIn0=

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const INITIAL_NUM_SAMPLES = 17;
const NEWTON_ITERATIONS = 5;
const _calcConstants = (p1, p2) => {
    return {
        a: 1 - 3 * p2 + 3 * p1,
        b: 3 * p2 - 6 * p1,
        c: 3 * p1,
    };
};
const _evaluateBezier = (t, c) => ((c.a * t + c.b) * t + c.c) * t;
const _evaluateBezierDerivative = (t, c) => (3 * c.a * t + 2 * c.b) * t + c.c;
const _calcTFromX = (samples, x, c) => {
    const idx = Math.min(Math.max(samples.findIndex(sample => sample > x) - 1, 1), samples.length - 1);
    const d = (x - samples[idx]) / (samples[idx + 1] - samples[idx]);
    let estimate = (d + idx - 1) / (INITIAL_NUM_SAMPLES - 1);
    for (let iter = 0; iter < NEWTON_ITERATIONS; ++iter) {
        const slope = _evaluateBezierDerivative(estimate, c);
        if (slope === 0) {
            break;
        }
        estimate -= (_evaluateBezier(estimate, c) - x) / slope;
    }
    return estimate;
};
exports.cubicBezier = (p1x, p1y, p2x, p2y) => {
    if (p1x === p1y && p2x === p2y) {
        return (x) => x;
    }
    const xConstants = _calcConstants(p1x, p2x);
    const yConstants = _calcConstants(p1y, p2y);
    const samples = new Float32Array(INITIAL_NUM_SAMPLES);
    for (let sample = 0; sample < INITIAL_NUM_SAMPLES; ++sample) {
        samples[sample] = _evaluateBezier(sample / (INITIAL_NUM_SAMPLES - 1), xConstants);
    }
    return (x) => _evaluateBezier(_calcTFromX(samples, x, xConstants), yConstants);
};
const flip = (ease) => (t) => 1 - ease(1 - t);
const inout = (easeIn, easeOut) => {
    return (t) => t < 0.5 ? easeIn(t * 2) / 2 : easeOut(2 * t - 1) / 2 + 0.5;
};
const s = 1.70158;
const p = 0.075;
exports.linear = (t) => t;
exports.step = Math.round;
exports.quadraticIn = (t) => Math.pow(t, 2);
exports.quadraticOut = flip(exports.quadraticIn);
exports.quadratic = inout(exports.quadraticIn, exports.quadraticOut);
exports.cubicIn = (t) => Math.pow(t, 3);
exports.cubicOut = flip(exports.cubicIn);
exports.cubic = inout(exports.cubicIn, exports.cubicOut);
exports.quarticIn = (t) => Math.pow(t, 4);
exports.quarticOut = flip(exports.quarticIn);
exports.quartic = inout(exports.quarticIn, exports.quarticOut);
exports.quinticIn = (t) => Math.pow(t, 5);
exports.quinticOut = flip(exports.quinticIn);
exports.quintic = inout(exports.quinticIn, exports.quinticOut);
exports.sineIn = (t) => 1 - Math.cos(t * Math.PI / 2);
exports.sineOut = flip(exports.sineIn);
exports.sine = inout(exports.sineIn, exports.sineOut);
exports.exponentialIn = (t) => Math.pow(2, (10 * (t - 1)));
exports.exponentialOut = flip(exports.exponentialIn);
exports.exponential = inout(exports.exponentialIn, exports.exponentialOut);
exports.circularIn = (t) => 1 - Math.sqrt(1 - Math.pow(t, 2));
exports.circularOut = flip(exports.circularIn);
exports.circular = inout(exports.circularIn, exports.circularOut);
exports.backIn = (t) => Math.pow(t, 2) * ((s + 1) * t - s);
exports.backOut = flip(exports.backIn);
exports.back = inout(exports.backIn, exports.backOut);
exports.elasticIn = (t) => Math.pow(2, (-10 * t)) * Math.sin((t - p) * (2 * Math.PI) / 0.3) + 1;
exports.elasticOut = flip(exports.elasticIn);
exports.elastic = inout(exports.elasticIn, exports.elasticOut);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWFzaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFRNUIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFhLEVBQUU7SUFDM0QsT0FBTztRQUNMLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRTtRQUN0QixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRTtRQUNsQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7S0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JGLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWpHLE1BQU0sV0FBVyxHQUFHLENBQUMsT0FBcUIsRUFBRSxDQUFTLEVBQUUsQ0FBWSxFQUFVLEVBQUU7SUFDN0UsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRTtRQUNuRCxNQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsTUFBTTtTQUNQO1FBQ0QsUUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDeEQ7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBeUIsRUFBRTtJQUN2RyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRTtRQUM5QixPQUFPLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekI7SUFDRCxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUU7UUFDM0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNuRjtJQUNELE9BQU8sQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN6RixDQUFDLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3RSxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQTZCLEVBQUUsT0FBOEIsRUFBRSxFQUFFO0lBQzlFLE9BQU8sQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ25GLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNsQixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7QUFJSCxRQUFBLE1BQU0sR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTFCLFFBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFFbEIsUUFBQSxXQUFXLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLFNBQUEsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDO0FBQ3BDLFFBQUEsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBVyxDQUFDLENBQUM7QUFDakMsUUFBQSxTQUFTLEdBQUcsS0FBSyxDQUFDLG1CQUFXLEVBQUUsb0JBQVksQ0FBQyxDQUFDO0FBRTdDLFFBQUEsT0FBTyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQztBQUNoQyxRQUFBLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBTyxDQUFDLENBQUM7QUFDekIsUUFBQSxLQUFLLEdBQUcsS0FBSyxDQUFDLGVBQU8sRUFBRSxnQkFBUSxDQUFDLENBQUM7QUFFakMsUUFBQSxTQUFTLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLFNBQUEsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDO0FBQ2xDLFFBQUEsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBUyxDQUFDLENBQUM7QUFDN0IsUUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFDLGlCQUFTLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBRXZDLFFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQztBQUNsQyxRQUFBLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQVMsQ0FBQyxDQUFDO0FBQzdCLFFBQUEsT0FBTyxHQUFHLEtBQUssQ0FBQyxpQkFBUyxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUV2QyxRQUFBLE1BQU0sR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEQsUUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQU0sQ0FBQyxDQUFDO0FBQ3ZCLFFBQUEsSUFBSSxHQUFHLEtBQUssQ0FBQyxjQUFNLEVBQUUsZUFBTyxDQUFDLENBQUM7QUFFOUIsUUFBQSxhQUFhLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLFNBQUEsQ0FBQyxFQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztBQUNuRCxRQUFBLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQWEsQ0FBQyxDQUFDO0FBQ3JDLFFBQUEsV0FBVyxHQUFHLEtBQUssQ0FBQyxxQkFBYSxFQUFFLHNCQUFjLENBQUMsQ0FBQztBQUVuRCxRQUFBLFVBQVUsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQUEsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDdEQsUUFBQSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFVLENBQUMsQ0FBQztBQUMvQixRQUFBLFFBQVEsR0FBRyxLQUFLLENBQUMsa0JBQVUsRUFBRSxtQkFBVyxDQUFDLENBQUM7QUFFMUMsUUFBQSxNQUFNLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLFNBQUEsQ0FBQyxFQUFJLENBQUMsQ0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFFBQUEsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFNLENBQUMsQ0FBQztBQUN2QixRQUFBLElBQUksR0FBRyxLQUFLLENBQUMsY0FBTSxFQUFFLGVBQU8sQ0FBQyxDQUFDO0FBRTlCLFFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hGLFFBQUEsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBUyxDQUFDLENBQUM7QUFDN0IsUUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFDLGlCQUFTLEVBQUUsa0JBQVUsQ0FBQyxDQUFDIn0=

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = __webpack_require__(4);
class Rotate_Transform extends transform_1.Transform {
    constructor(a, x = 0, y = 0) {
        super("rotate");
        this.a = a;
        this.x = x;
        this.y = y;
    }
    args() {
        return `${this.a} ${this.x} ${this.y}`;
    }
    parseArgs(css) {
        if (css !== null) {
            const toks = css.split(" ");
            return new Rotate_Transform(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
        }
        else {
            return new Rotate_Transform(0);
        }
    }
}
exports.Rotate_Transform = Rotate_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm90YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQXlDO0FBRXpDLHNCQUE4QixTQUFRLHFCQUFTO0lBQzdDLFlBQW1CLENBQVMsRUFBUyxJQUFZLENBQUMsRUFBUyxJQUFZLENBQUM7UUFDdEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBREMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVk7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFZO0lBRXhFLENBQUM7SUFDTSxJQUFJO1FBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFrQjtRQUNqQyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RjthQUFNO1lBQ0wsT0FBTyxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGO0FBZkQsNENBZUMifQ==

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = __webpack_require__(4);
class UniformScale_Transform extends transform_1.Transform {
    constructor(s = 1) {
        super("scale");
        this.s = s;
    }
    args() {
        return this.s.toString();
    }
    parseArgs(css) {
        if (css !== null) {
            return new UniformScale_Transform(parseFloat(css));
        }
        else {
            return new UniformScale_Transform();
        }
    }
}
exports.UniformScale_Transform = UniformScale_Transform;
class Scale_Transform extends transform_1.Transform {
    constructor(x = 1, y = x) {
        super("scale");
        this.x = x;
        this.y = y;
    }
    args() {
        return `${this.x} ${this.y}`;
    }
    parseArgs(css) {
        if (css !== null) {
            const toks = css.split(" ");
            if (toks.length === 1) {
                return new Scale_Transform(parseFloat(toks[0]));
            }
            else {
                return new Scale_Transform(parseFloat(toks[0]), parseFloat(toks[1]));
            }
        }
        else {
            return new Scale_Transform();
        }
    }
}
exports.Scale_Transform = Scale_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUF5QztBQUV6Qyw0QkFBb0MsU0FBUSxxQkFBUztJQUNuRCxZQUFtQixJQUFZLENBQUM7UUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsTUFBQyxHQUFELENBQUMsQ0FBWTtJQUVoQyxDQUFDO0lBQ00sSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00sU0FBUyxDQUFDLEdBQWtCO1FBQ2pDLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixPQUFPLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztDQUNGO0FBZEQsd0RBY0M7QUFFRCxxQkFBNkIsU0FBUSxxQkFBUztJQUM1QyxZQUFtQixJQUFZLENBQUMsRUFBUyxJQUFZLENBQUM7UUFDcEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFFdEQsQ0FBQztJQUNNLElBQUk7UUFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFrQjtRQUNqQyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixPQUFPLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7Q0FDRjtBQW5CRCwwQ0FtQkMifQ==

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = __webpack_require__(4);
class Translate_Transform extends transform_1.Transform {
    constructor(x = 0, y = 0) {
        super("translate");
        this.x = x;
        this.y = y;
    }
    args() {
        return `${this.x} ${this.y}`;
    }
    parseArgs(css) {
        if (css !== null) {
            const toks = css.split(" ");
            if (toks.length === 1) {
                return new Translate_Transform(parseFloat(toks[0]));
            }
            else {
                return new Translate_Transform(parseFloat(toks[0]), parseFloat(toks[1]));
            }
        }
        else {
            return new Translate_Transform();
        }
    }
}
exports.Translate_Transform = Translate_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQXlDO0FBRXpDLHlCQUFpQyxTQUFRLHFCQUFTO0lBQ2hELFlBQW1CLElBQVksQ0FBQyxFQUFTLElBQVksQ0FBQztRQUNwRCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFERixNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBWTtJQUV0RCxDQUFDO0lBQ00sSUFBSTtRQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ00sU0FBUyxDQUFDLEdBQWtCO1FBQ2pDLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxPQUFPLElBQUksbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFFO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztDQUNGO0FBbkJELGtEQW1CQyJ9

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const renderable_1 = __webpack_require__(5);
class ForeignObject extends renderable_1.AbstractRenderable {
    constructor(context, attrs) {
        super(context, "foreignObject", attrs);
    }
    addHTML(html) {
        this._node.appendChild(html);
    }
    remove(html) {
        this._node.removeChild(html);
    }
}
exports.ForeignObject = ForeignObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZWlnbi1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JlaWduLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDhDQUFpRztBQVNqRyxtQkFBMkIsU0FBUSwrQkFBeUU7SUFDMUcsWUFBWSxPQUFnQixFQUFFLEtBQWlFO1FBQzdGLEtBQUssQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSxPQUFPLENBQUMsSUFBaUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNNLE1BQU0sQ0FBQyxJQUFpQjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFWRCxzQ0FVQyJ9

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const renderable_1 = __webpack_require__(5);
class Image extends renderable_1.AbstractRenderable {
    constructor(context, attrs) {
        super(context, "image", attrs);
    }
}
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLDhDQUErRjtBQXFCL0YsV0FBbUIsU0FBUSwrQkFBbUU7SUFDNUYsWUFBWSxPQUFnQixFQUFFLEtBQXlEO1FBQ3JGLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQUpELHNCQUlDIn0=

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __webpack_require__(2);
class Circle extends shape_1.AbstractShape {
    constructor(context, attrs) {
        super(context, "circle", attrs);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsb0NBQTJEO0FBUzNELFlBQW9CLFNBQVEscUJBQWtEO0lBQzVFLFlBQVksT0FBZ0IsRUFBRSxLQUE2RTtRQUN6RyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFKRCx3QkFJQyJ9

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __webpack_require__(2);
class Ellipse extends shape_1.AbstractShape {
    constructor(context, attrs) {
        super(context, "ellipse", attrs);
    }
}
exports.Ellipse = Ellipse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsbGlwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxvQ0FBMkQ7QUFXM0QsYUFBcUIsU0FBUSxxQkFBb0Q7SUFDL0UsWUFBWSxPQUFnQixFQUFFLEtBQThFO1FBQzFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDRjtBQUpELDBCQUlDIn0=

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __webpack_require__(2);
class Line extends shape_1.AbstractShape {
    constructor(context, attrs) {
        super(context, "line", attrs);
    }
}
exports.Line = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxvQ0FBMkQ7QUFXM0QsVUFBa0IsU0FBUSxxQkFBOEM7SUFDdEUsWUFBWSxPQUFnQixFQUFFLEtBQTJFO1FBQ3ZHLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQUpELG9CQUlDIn0=

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __webpack_require__(2);
class Path extends shape_1.AbstractShape {
    constructor(context, attrs) {
        super(context, "path", attrs);
    }
}
exports.Path = Path;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxvQ0FBMkQ7QUFPM0QsVUFBa0IsU0FBUSxxQkFBOEM7SUFDdEUsWUFBWSxPQUFnQixFQUFFLEtBQTJFO1FBQ3ZHLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQUpELG9CQUlDIn0=

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __webpack_require__(2);
class Polygon extends shape_1.AbstractShape {
    constructor(context, attrs) {
        super(context, "polygon", attrs);
    }
}
exports.Polygon = Polygon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvbHlnb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxvQ0FBMkQ7QUFNM0QsYUFBcUIsU0FBUSxxQkFBb0Q7SUFDL0UsWUFBWSxPQUFnQixFQUFFLEtBQThFO1FBQzFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDRjtBQUpELDBCQUlDIn0=

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __webpack_require__(2);
class Polyline extends shape_1.AbstractShape {
    constructor(context, attrs) {
        super(context, "polyline", attrs);
    }
}
exports.Polyline = Polyline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2x5bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLG9DQUEyRDtBQU0zRCxjQUFzQixTQUFRLHFCQUFzRDtJQUNsRixZQUFZLE9BQWdCLEVBQUUsS0FBK0U7UUFDM0csS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBSkQsNEJBSUMifQ==

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __webpack_require__(2);
class Rect extends shape_1.AbstractShape {
    constructor(context, attrs) {
        super(context, "rect", attrs);
    }
}
exports.Rect = Rect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxvQ0FBMkQ7QUFlM0QsVUFBa0IsU0FBUSxxQkFBOEM7SUFDdEUsWUFBWSxPQUFnQixFQUFFLEtBQTJFO1FBQ3ZHLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQUpELG9CQUlDIn0=

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(7);
const text_content_1 = __webpack_require__(44);
const renderable_1 = __webpack_require__(5);
class TextSpan extends renderable_1.AbstractRenderable {
    constructor(context, attrs) {
        super(context, "tspan", attrs);
    }
    get computedLength() {
        return this._node.getComputedTextLength();
    }
}
exports.TextSpan = TextSpan;
class Text extends renderable_1.AbstractRenderable {
    constructor(context, attrs) {
        super(context, "text", attrs);
    }
    addSpan(content, lineHeight, update = true) {
        const span = new TextSpan(this.context);
        span.setAttribute("textContent", content);
        if (lineHeight) {
            span.setAttribute("x", parseFloat(this.getAttribute("x") || "0"));
            if (typeof lineHeight === "number") {
                span.setAttribute("dy", new dimension_1.Dimension(lineHeight, "em"));
            }
            else {
                span.setAttribute("dy", lineHeight);
            }
        }
        this.add(span);
        return span;
    }
    get computedLength() {
        return this._node.getComputedTextLength();
    }
}
exports.Text = Text;
class MultilineText extends Text {
    constructor(context, text, width, attrs) {
        super(context, attrs);
        const temp = new Text(context);
        temp.setAttribute("opacity", 0);
        const span = new TextSpan(context);
        temp.add(span);
        if (attrs) {
            span.setAttributes(attrs);
        }
        const spaceWidth = temp.computedLength;
        const lines = [""];
        text.split(" ").forEach((word, i) => {
            const line = lines[lines.length - 1];
            const newLine = (line.length === 0) ? word : `${line} ${word}`;
            const lineContent = new text_content_1.TextContent(newLine);
            span.setAttribute("textContent", lineContent);
            if (span.computedLength > width && line.length > 0) {
                lines.push(word);
            }
            else {
                lines[lines.length - 1] = newLine;
            }
        });
        lines.forEach(line => {
            if (line.length > 0) {
                this.addSpan(new text_content_1.TextContent(line), 1);
            }
        });
    }
}
exports.MultilineText = MultilineText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwREFBdUQ7QUFFdkQsZ0VBQTREO0FBRTVELDhDQUErRjtBQThCL0YsY0FBc0IsU0FBUSwrQkFBNEQ7SUFDeEYsWUFBWSxPQUFnQixFQUFFLEtBQTREO1FBQ3hGLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBUEQsNEJBT0M7QUFZRCxVQUFrQixTQUFRLCtCQUF1RDtJQUMvRSxZQUFZLE9BQWdCLEVBQUUsS0FBd0Q7UUFDcEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNNLE9BQU8sQ0FBQyxPQUFvQixFQUFFLFVBQTRCLEVBQUUsU0FBa0IsSUFBSTtRQUN2RixNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLHFCQUFTLENBQU8sVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDaEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBckJELG9CQXFCQztBQUVELG1CQUEyQixTQUFRLElBQUk7SUFDckMsWUFBWSxPQUFnQixFQUFFLElBQVksRUFBRSxLQUFhLEVBQUUsS0FBNkU7UUFDdEksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN2QyxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMvRCxNQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDbkM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTdCRCxzQ0E2QkMifQ==

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
class TextContent {
    static escapeHtml(html) {
        return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    constructor(str) {
        if (typeof str === "string") {
            this._str = str;
        }
        else {
            this._cb = str;
        }
    }
    toString() {
        return this._str || this._cb();
    }
    parse(css) {
        return new TextContent(css || "");
    }
    get(element, attr) {
        return this.parse(element.textContent);
    }
    set(element, attr, override) {
        element.textContent = TextContent.escapeHtml(this._str || this._cb());
    }
    interpolator(from) {
        const func = d3_interpolate_1.interpolate(from.toString(), this.toString());
        return (t) => this.parse(func(t));
    }
}
exports.TextContent = TextContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV4dC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBSTdDO0lBQ1UsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFLRCxZQUFZLEdBQTRCO1FBQ3RDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLE9BQU8sSUFBSSxXQUFXLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxHQUFHLENBQStCLE9BQW1CLEVBQUUsSUFBTztRQUNuRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSxHQUFHLENBQStCLE9BQW1CLEVBQUUsSUFBTyxFQUFFLFFBQXNCO1FBQzNGLE9BQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDTSxZQUFZLENBQUMsSUFBaUI7UUFDbkMsTUFBTSxJQUFJLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUEvQkQsa0NBK0JDIn0=

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Blend_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feBlend", attrs);
    }
}
exports.Blend_Primitive = Blend_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxlbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJibGVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBEQUFzRDtBQVF0RCxxQkFBNkIsU0FBUSxrQ0FBb0Q7SUFDdkYsWUFBWSxNQUFjLEVBQUUsS0FBaUM7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBSkQsMENBSUMifQ==

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class ColorMatrix_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feColorMatrix", attrs);
    }
}
exports.ColorMatrix_Primitive = ColorMatrix_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sb3ItbWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMERBQXNEO0FBU3RELDJCQUFtQyxTQUFRLGtDQUFnRTtJQUN6RyxZQUFZLE1BQWMsRUFBRSxLQUF1QztRQUNqRSxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFKRCxzREFJQyJ9

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class ComponentTransfer_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feComponentTransfer", attrs);
    }
}
exports.ComponentTransfer_Primitive = ComponentTransfer_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LXRyYW5zZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMERBQXNEO0FBTXRELGlDQUF5QyxTQUFRLGtDQUE0RTtJQUMzSCxZQUFZLE1BQWMsRUFBRSxLQUE2QztRQUN2RSxLQUFLLENBQUMsTUFBTSxFQUFFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQUpELGtFQUlDIn0=

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Composite_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feComposite", attrs);
    }
}
exports.Composite_Primitive = Composite_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9zaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMERBQXNEO0FBWXRELHlCQUFpQyxTQUFRLGtDQUE0RDtJQUNuRyxZQUFZLE1BQWMsRUFBRSxLQUFxQztRQUMvRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFKRCxrREFJQyJ9

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class ConvolveMatrix_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feConvolveMatrix", attrs);
    }
}
exports.ConvolveMatrix_Primitive = ConvolveMatrix_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udm9sdmUtbWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udm9sdmUtbWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsMERBQXNEO0FBZ0J0RCw4QkFBc0MsU0FBUSxrQ0FBc0U7SUFDbEgsWUFBWSxNQUFjLEVBQUUsS0FBMEM7UUFDcEUsS0FBSyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFKRCw0REFJQyJ9

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class DisplacementMap_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feDisplacementMap", attrs);
    }
}
exports.DisplacementMap_Primitive = DisplacementMap_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxhY2VtZW50LW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3BsYWNlbWVudC1tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwREFBc0Q7QUFVdEQsK0JBQXVDLFNBQVEsa0NBQXdFO0lBQ3JILFlBQVksTUFBYyxFQUFFLEtBQTJDO1FBQ3JFLEtBQUssQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBSkQsOERBSUMifQ==

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Flood_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feFlood", attrs);
    }
}
exports.Flood_Primitive = Flood_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG9vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDBEQUFzRDtBQU90RCxxQkFBNkIsU0FBUSxrQ0FBb0Q7SUFDdkYsWUFBWSxNQUFjLEVBQUUsS0FBaUM7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBSkQsMENBSUMifQ==

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class GaussianBlur_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feGaussianBlur", attrs);
    }
}
exports.GaussianBlur_Primitive = GaussianBlur_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1c3NpYW4tYmx1ci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhdXNzaWFuLWJsdXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwwREFBc0Q7QUFRdEQsNEJBQW9DLFNBQVEsa0NBQWtFO0lBQzVHLFlBQVksTUFBYyxFQUFFLEtBQXdDO1FBQ2xFLEtBQUssQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBSkQsd0RBSUMifQ==

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Image_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feImage", attrs);
    }
}
exports.Image_Primitive = Image_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDBEQUFzRDtBQU90RCxxQkFBNkIsU0FBUSxrQ0FBb0Q7SUFDdkYsWUFBWSxNQUFjLEVBQUUsS0FBaUM7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBSkQsMENBSUMifQ==

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class DiffuseLighting extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feDiffuseLighting", attrs);
    }
}
exports.DiffuseLighting = DiffuseLighting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZnVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZ1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBeUQ7QUFVekQscUJBQTZCLFNBQVEsa0NBQXdFO0lBQzNHLFlBQVksTUFBYyxFQUFFLEtBQTJDO1FBQ3JFLEtBQUssQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBSkQsMENBSUMifQ==

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class DistantLight extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feDistantLight", attrs);
    }
}
exports.DistantLight = DistantLight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnRUFBNEQ7QUFRNUQsa0JBQTBCLFNBQVEsa0NBQWtFO0lBQ2xHLFlBQVksTUFBYyxFQUFFLEtBQXdDO1FBQ2xFLEtBQUssQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBSkQsb0NBSUMifQ==

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class PointLight extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "fePointLight", attrs);
    }
}
exports.PointLight = PointLight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGdFQUE0RDtBQVU1RCxnQkFBd0IsU0FBUSxrQ0FBOEQ7SUFDNUYsWUFBWSxNQUFjLEVBQUUsS0FBc0M7UUFDaEUsS0FBSyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBSkQsZ0NBSUMifQ==

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class SpotLight extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feSpotLight", attrs);
    }
}
exports.SpotLight = SpotLight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxnRUFBNEQ7QUFnQjVELGVBQXVCLFNBQVEsa0NBQTREO0lBQ3pGLFlBQVksTUFBYyxFQUFFLEtBQXFDO1FBQy9ELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjtBQUpELDhCQUlDIn0=

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class SpecularLighting extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feSpecularLighting", attrs);
    }
}
exports.SpecularLighting = SpecularLighting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY3VsYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVjdWxhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZEQUF5RDtBQVd6RCxzQkFBOEIsU0FBUSxrQ0FBMEU7SUFDOUcsWUFBWSxNQUFjLEVBQUUsS0FBNEM7UUFDdEUsS0FBSyxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFKRCw0Q0FJQyJ9

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class MergeNode_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feMergeNode", attrs);
    }
}
exports.MergeNode_Primitive = MergeNode_Primitive;
class Merge_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter) {
        super(filter, "feMerge");
    }
}
exports.Merge_Primitive = Merge_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBEQUFzRDtBQU10RCx5QkFBaUMsU0FBUSxrQ0FBNEQ7SUFDbkcsWUFBWSxNQUFjLEVBQUUsS0FBcUM7UUFDL0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBSkQsa0RBSUM7QUFFRCxxQkFBNkIsU0FBUSxrQ0FBd0M7SUFDM0UsWUFBWSxNQUFjO1FBQ3hCLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBSkQsMENBSUMifQ==

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Morphology_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feMorphology", attrs);
    }
}
exports.Morphology_Primitive = Morphology_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ycGhvbG9neS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vcnBob2xvZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwwREFBc0Q7QUFRdEQsMEJBQWtDLFNBQVEsa0NBQThEO0lBQ3RHLFlBQVksTUFBYyxFQUFFLEtBQXNDO1FBQ2hFLEtBQUssQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQUpELG9EQUlDIn0=

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Offset_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feOffset", attrs);
    }
}
exports.Offset_Primitive = Offset_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Zmc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2Zmc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsMERBQXNEO0FBU3RELHNCQUE4QixTQUFRLGtDQUFzRDtJQUMxRixZQUFZLE1BQWMsRUFBRSxLQUFrQztRQUM1RCxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFKRCw0Q0FJQyJ9

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Tile_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feTile", attrs);
    }
}
exports.Tile_Primitive = Tile_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwREFBc0Q7QUFNdEQsb0JBQTRCLFNBQVEsa0NBQWtEO0lBQ3BGLFlBQVksTUFBYyxFQUFFLEtBQWdDO1FBQzFELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class TransferFunction_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, channel, attrs) {
        super(filter, `feFunc${channel}`, attrs);
    }
}
exports.TransferFunction_Primitive = TransferFunction_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFuc2Zlci1mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBEQUFzRDtBQTBCdEQsZ0NBQXdDLFNBQVEsa0NBQTJIO0lBQ3pLLFlBQVksTUFBYyxFQUFFLE9BQThCLEVBQUUsS0FBNEM7UUFDdEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQUpELGdFQUlDIn0=

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filter_primitive_1 = __webpack_require__(0);
class Turbulence_Primitive extends filter_primitive_1.FilterPrimitive {
    constructor(filter, attrs) {
        super(filter, "feTurbulence", attrs);
    }
}
exports.Turbulence_Primitive = Turbulence_Primitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVyYnVsZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR1cmJ1bGVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwwREFBc0Q7QUFVdEQsMEJBQWtDLFNBQVEsa0NBQThEO0lBQ3RHLFlBQVksTUFBYyxFQUFFLEtBQXNDO1FBQ2hFLEtBQUssQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQUpELG9EQUlDIn0=

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(19));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(15));
__export(__webpack_require__(3));
__export(__webpack_require__(66));
__export(__webpack_require__(67));
const Animation = __webpack_require__(68);
exports.Animation = Animation;
const Attributes = __webpack_require__(69);
exports.Attributes = Attributes;
const Elements = __webpack_require__(79);
exports.Elements = Elements;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1QixpQ0FBNEI7QUFDNUIsK0JBQTBCO0FBQzFCLGdDQUEyQjtBQUMzQiwrQkFBMEI7QUFDMUIsOEJBQXlCO0FBQ3pCLHFDQUFnQztBQUVoQyx5Q0FBeUM7QUFLdkMsOEJBQVM7QUFKWCwyQ0FBMkM7QUFLekMsZ0NBQVU7QUFKWix1Q0FBdUM7QUFLckMsNEJBQVEifQ==

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._lerp = (a, b, t) => a + ((b - a) * t);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJwb2xhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVycG9sYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLEtBQUssR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyJ9

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(30));
__export(__webpack_require__(20));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6QixnQ0FBMkIifQ==

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));
__export(__webpack_require__(12));
__export(__webpack_require__(70));
__export(__webpack_require__(71));
__export(__webpack_require__(7));
__export(__webpack_require__(72));
__export(__webpack_require__(73));
__export(__webpack_require__(74));
__export(__webpack_require__(13));
__export(__webpack_require__(75));
__export(__webpack_require__(44));
__export(__webpack_require__(4));
__export(__webpack_require__(22));
const Transforms = __webpack_require__(76);
exports.Transforms = Transforms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUF1QjtBQUN2QiwyQkFBc0I7QUFDdEIsb0NBQStCO0FBQy9CLDZCQUF3QjtBQUN4QixpQ0FBNEI7QUFDNUIsOEJBQXlCO0FBQ3pCLDhDQUF5QztBQUN6QyxvQ0FBK0I7QUFDL0IsNkJBQXdCO0FBQ3hCLDZDQUF3QztBQUN4QyxvQ0FBK0I7QUFDL0IsaUNBQTRCO0FBQzVCLGdDQUEyQjtBQUUzQiwyQ0FBMkM7QUFDbEMsZ0NBQVUifQ==

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sb3ItbWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBVzdDLElBQWlCLFdBQVcsQ0FtRzNCO0FBbkdELFdBQWlCLFdBQVc7SUFFMUI7UUFHRSxZQUFZLFNBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFGL0csU0FBSSxHQUFhLFFBQVEsQ0FBQztZQUMxQixRQUFHLEdBQWEsRUFBRSxDQUFDO1lBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ00sUUFBUTtZQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNNLEtBQUssQ0FBQyxHQUFrQjtZQUM3QixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLEdBQUcsQ0FBQyxFQUFF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

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_color_1 = __webpack_require__(1);
const d3_interpolate_1 = __webpack_require__(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFpRjtBQUNqRixtREFBZ0Y7QUFLaEY7SUFHRSxZQUFZLENBQTRCLEVBQVMsdUJBQXVELEtBQUssQ0FBQyxxQkFBcUI7UUFBbEYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4RDtRQUNqSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUN6QixNQUFNLElBQUksR0FBRyxnQkFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0Q7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUNNLEtBQUs7UUFDVixPQUFPLGNBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNNLEtBQUs7UUFDVixPQUFPLGNBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNNLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUFnQjtRQUM1RCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUNNLFlBQVksQ0FBQyxJQUFXO1FBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOztBQTNDYSwyQkFBcUIsR0FBbUMsK0JBQWMsQ0FBQztBQUR2RixzQkE2Q0MifQ==

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
class Matrix {
    constructor(values) {
        this.arr = [];
        this.arr = this.arr.concat(...values);
    }
    toString() {
        return this.arr.join(" ");
    }
    parse(css) {
        if (css !== null) {
            return new Matrix([css.split(" ").map(parseFloat)]);
        }
        else {
            return new Matrix([]);
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
exports.Matrix = Matrix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBSzdDO0lBRUUsWUFBWSxNQUFrQjtRQUR2QixRQUFHLEdBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ00sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUFpQjtRQUM3RCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUNNLFlBQVksQ0FBQyxJQUFZO1FBQzlCLE1BQU0sSUFBSSxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBN0JELHdCQTZCQyJ9

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
class NumberOptionalNumber {
    constructor(n, o) {
        this.n = n;
        this.o = o;
    }
    toString() {
        return (this.o !== undefined) ? `${this.n},${this.o}` : this.n.toString();
    }
    parse(css) {
        if (css !== null) {
            const toks = css.split(",");
            if (toks.length === 1) {
                return new NumberOptionalNumber(parseFloat(toks[0]));
            }
            else {
                return new NumberOptionalNumber(parseFloat(toks[0]), parseFloat(toks[1]));
            }
        }
        else {
            return new NumberOptionalNumber(0);
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
exports.NumberOptionalNumber = NumberOptionalNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW9wdGlvbmFsLW51bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm51bWJlci1vcHRpb25hbC1udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBNkM7QUFLN0M7SUFDRSxZQUFtQixDQUFTLEVBQVMsQ0FBVTtRQUE1QixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUztJQUFHLENBQUM7SUFDNUMsUUFBUTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVFLENBQUM7SUFDTSxLQUFLLENBQUMsR0FBa0I7UUFDN0IsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsT0FBTyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0U7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWSxFQUFFLFFBQStCO1FBQzNFLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBQ00sWUFBWSxDQUFDLElBQTBCO1FBQzVDLE1BQU0sSUFBSSxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBL0JELG9EQStCQyJ9

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3_interpolate_1 = __webpack_require__(1);
const base_1 = __webpack_require__(14);
const point_1 = __webpack_require__(13);
class PathSegment {
    constructor(command) {
        this.command = command;
    }
    parse(css) {
        if (css !== null) {
            return this.parseArgs(css.substr(2));
        }
        else {
            return this.defaultInstance();
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
exports.PathSegment = PathSegment;
(function (PathSegment) {
    let Command;
    (function (Command) {
        Command["MoveToAbs"] = "M";
        Command["MoveToRel"] = "m";
        Command["ClosePath"] = "Z";
        Command["LineToAbs"] = "L";
        Command["LineToRel"] = "l";
        Command["LineToHorizontalAbs"] = "H";
        Command["LineToHorizontalRel"] = "h";
        Command["LineToVerticalAbs"] = "V";
        Command["LineToVerticalRel"] = "v";
        Command["CurveToCubicAbs"] = "C";
        Command["CurveToCubicRel"] = "c";
        Command["CurveToCubicSmoothAbs"] = "S";
        Command["CurveToCubicSmoothRel"] = "s";
        Command["CurveToQuadraticAbs"] = "Q";
        Command["CurveToQuadraticRel"] = "q";
        Command["CurveToQuadraticSmoothAbs"] = "T";
        Command["CurveToQuadraticSmoothRel"] = "t";
        Command["ArcToAbs"] = "A";
        Command["ArcToRel"] = "a";
    })(Command = PathSegment.Command || (PathSegment.Command = {}));
    class SingleLength extends PathSegment {
        constructor(command, l = 0) {
            super(command);
            this.l = l;
        }
        toString() {
            return `${this.command} ${this.l.toString()}`;
        }
        parseArgs(css) {
            return this.buildInstance(base_1._LengthParse(css));
        }
    }
    PathSegment.SingleLength = SingleLength;
    class SinglePoint extends PathSegment {
        constructor(command, p = new point_1.Point(0, 0)) {
            super(command);
            this.p = p;
        }
        toString() {
            return `${this.command} ${this.p.toString()}`;
        }
        parseArgs(css) {
            return this.buildInstance(this.p.parse(css));
        }
    }
    PathSegment.SinglePoint = SinglePoint;
    class DoublePoint extends PathSegment {
        constructor(command, p1 = new point_1.Point(0, 0), p2 = new point_1.Point(0, 0)) {
            super(command);
            this.p1 = p1;
            this.p2 = p2;
        }
        toString() {
            return `${this.command} ${this.p1.toString()} ${this.p2.toString()}`;
        }
        parseArgs(css) {
            const toks = css.split(" ");
            return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]));
        }
    }
    PathSegment.DoublePoint = DoublePoint;
    class TriplePoint extends PathSegment {
        constructor(command, p1 = new point_1.Point(0, 0), p2 = new point_1.Point(0, 0), p3 = new point_1.Point(0, 0)) {
            super(command);
            this.p1 = p1;
            this.p2 = p2;
            this.p3 = p3;
        }
        toString() {
            return `${this.command} ${this.p1.toString()} ${this.p2.toString()} ${this.p3.toString()}`;
        }
        parseArgs(css) {
            const toks = css.split(" ");
            return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]), this.p3.parse(toks[2]));
        }
    }
    PathSegment.TriplePoint = TriplePoint;
    class MoveToAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.MoveToAbs, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new MoveToAbs(p);
        }
        defaultInstance() {
            return new MoveToAbs();
        }
    }
    PathSegment.MoveToAbs = MoveToAbs;
    class MoveToRel extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.MoveToRel, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new MoveToRel(p);
        }
        defaultInstance() {
            return new MoveToRel();
        }
    }
    PathSegment.MoveToRel = MoveToRel;
    class ClosePath extends PathSegment {
        constructor() {
            super(Command.ClosePath);
        }
        toString() {
            return Command.ClosePath;
        }
        parseArgs(css) {
            return new ClosePath();
        }
        defaultInstance() {
            return new ClosePath();
        }
    }
    PathSegment.ClosePath = ClosePath;
    class LineToAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.LineToAbs, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new LineToAbs(p);
        }
        defaultInstance() {
            return new LineToAbs();
        }
    }
    PathSegment.LineToAbs = LineToAbs;
    class LineToRel extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.LineToRel, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new LineToRel(p);
        }
        defaultInstance() {
            return new LineToRel();
        }
    }
    PathSegment.LineToRel = LineToRel;
    class LineToHorizontalAbs extends SingleLength {
        constructor(h = 0) {
            super(Command.LineToHorizontalAbs, h);
        }
        buildInstance(h) {
            return new LineToHorizontalAbs(h);
        }
        defaultInstance() {
            return new LineToHorizontalAbs();
        }
    }
    PathSegment.LineToHorizontalAbs = LineToHorizontalAbs;
    class LineToHorizontalRel extends SingleLength {
        constructor(h = 0) {
            super(Command.LineToHorizontalRel, h);
        }
        buildInstance(h) {
            return new LineToHorizontalRel(h);
        }
        defaultInstance() {
            return new LineToHorizontalRel();
        }
    }
    PathSegment.LineToHorizontalRel = LineToHorizontalRel;
    class LineToVerticalAbs extends SingleLength {
        constructor(v = 0) {
            super(Command.LineToVerticalAbs, v);
        }
        buildInstance(v) {
            return new LineToVerticalAbs(v);
        }
        defaultInstance() {
            return new LineToVerticalAbs();
        }
    }
    PathSegment.LineToVerticalAbs = LineToVerticalAbs;
    class LineToVerticalRel extends SingleLength {
        constructor(v = 0) {
            super(Command.LineToVerticalRel, v);
        }
        buildInstance(v) {
            return new LineToVerticalAbs(v);
        }
        defaultInstance() {
            return new LineToVerticalAbs();
        }
    }
    PathSegment.LineToVerticalRel = LineToVerticalRel;
    class CurveToCubicAbs extends TriplePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c = new point_1.Point(0, 0), d, e, f) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const c2 = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            const p = c instanceof point_1.Point ? c : new point_1.Point(e, f);
            super(Command.CurveToCubicAbs, c1, c2, p);
        }
        buildInstance(c1, c2, p) {
            return new CurveToCubicAbs(c1, c2, p);
        }
        defaultInstance() {
            return new CurveToCubicAbs();
        }
    }
    PathSegment.CurveToCubicAbs = CurveToCubicAbs;
    class CurveToCubicRel extends TriplePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c = new point_1.Point(0, 0), d, e, f) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const c2 = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            const p = c instanceof point_1.Point ? c : new point_1.Point(e, f);
            super(Command.CurveToCubicRel, c1, c2, p);
        }
        buildInstance(c1, c2, p) {
            return new CurveToCubicRel(c1, c2, p);
        }
        defaultInstance() {
            return new CurveToCubicRel();
        }
    }
    PathSegment.CurveToCubicRel = CurveToCubicRel;
    class CurveToCubicSmoothAbs extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c2 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToCubicSmoothAbs, c2, p);
        }
        buildInstance(c2, p) {
            return new CurveToCubicSmoothAbs(c2, p);
        }
        defaultInstance() {
            return new CurveToCubicSmoothAbs();
        }
    }
    PathSegment.CurveToCubicSmoothAbs = CurveToCubicSmoothAbs;
    class CurveToCubicSmoothRel extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c2 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToCubicSmoothRel, c2, p);
        }
        buildInstance(c2, p) {
            return new CurveToCubicSmoothRel(c2, p);
        }
        defaultInstance() {
            return new CurveToCubicSmoothRel();
        }
    }
    PathSegment.CurveToCubicSmoothRel = CurveToCubicSmoothRel;
    class CurveToQuadraticAbs extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToQuadraticAbs, c1, p);
        }
        buildInstance(c1, p) {
            return new CurveToQuadraticAbs(c1, p);
        }
        defaultInstance() {
            return new CurveToQuadraticAbs();
        }
    }
    PathSegment.CurveToQuadraticAbs = CurveToQuadraticAbs;
    class CurveToQuadraticRel extends DoublePoint {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d) {
            const c1 = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            super(Command.CurveToQuadraticRel, c1, p);
        }
        buildInstance(c1, p) {
            return new CurveToQuadraticRel(c1, p);
        }
        defaultInstance() {
            return new CurveToQuadraticRel();
        }
    }
    PathSegment.CurveToQuadraticRel = CurveToQuadraticRel;
    class CurveToQuadraticSmoothAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.CurveToQuadraticSmoothAbs, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new CurveToQuadraticSmoothAbs(p);
        }
        defaultInstance() {
            return new CurveToQuadraticSmoothAbs();
        }
    }
    PathSegment.CurveToQuadraticSmoothAbs = CurveToQuadraticSmoothAbs;
    class CurveToQuadraticSmoothRel extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super(Command.CurveToQuadraticSmoothRel, p instanceof point_1.Point ? p : new point_1.Point(p, y));
        }
        buildInstance(p) {
            return new CurveToQuadraticSmoothRel(p);
        }
        defaultInstance() {
            return new CurveToQuadraticSmoothRel();
        }
    }
    PathSegment.CurveToQuadraticSmoothRel = CurveToQuadraticSmoothRel;
    class ArcTo extends PathSegment {
        constructor(command, r = new point_1.Point(0, 0), p = new point_1.Point(0, 0), xAxisRotate = 0, largeArc = false, sweepClockwise = true) {
            super(command);
            this.r = r;
            this.p = p;
            this.xAxisRotate = xAxisRotate;
            this.largeArc = largeArc;
            this.sweepClockwise = sweepClockwise;
        }
        toString() {
            return `${this.r.toString()} ${this.xAxisRotate} ${this.largeArc ? 1 : 0} ${this.sweepClockwise ? 1 : 0} ${this.p.toString()}`;
        }
        parseArgs(css) {
            const toks = css.split(" ");
            return this.buildInstance(this.r.parse(toks[0]), this.p.parse(toks[4]), parseFloat(toks[1]), toks[2] === "1", toks[3] === "1");
        }
    }
    PathSegment.ArcTo = ArcTo;
    class ArcToAbs extends ArcTo {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d, e, f, g) {
            const r = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            let xAxisRotate = 0;
            let largeArc = false;
            let sweepClockwise = true;
            if (a instanceof point_1.Point && b instanceof point_1.Point) {
                if (typeof c !== "undefined") {
                    xAxisRotate = c;
                }
                if (typeof d !== "undefined") {
                    largeArc = d;
                }
                if (typeof e !== "undefined") {
                    sweepClockwise = e;
                }
            }
            else {
                if (typeof e !== "undefined") {
                    xAxisRotate = e;
                }
                if (typeof f !== "undefined") {
                    largeArc = f;
                }
                if (typeof g !== "undefined") {
                    sweepClockwise = g;
                }
            }
            super(Command.ArcToAbs, r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        buildInstance(r, p, xAxisRotate, largeArc, sweepClockwise) {
            return new ArcToAbs(r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        defaultInstance() {
            return new ArcToAbs();
        }
    }
    PathSegment.ArcToAbs = ArcToAbs;
    class ArcToRel extends ArcTo {
        constructor(a = new point_1.Point(0, 0), b = new point_1.Point(0, 0), c, d, e, f, g) {
            const r = a instanceof point_1.Point ? a : new point_1.Point(a, b);
            const p = b instanceof point_1.Point ? b : new point_1.Point(c, d);
            let xAxisRotate = 0;
            let largeArc = false;
            let sweepClockwise = true;
            if (a instanceof point_1.Point && b instanceof point_1.Point) {
                if (typeof c !== "undefined") {
                    xAxisRotate = c;
                }
                if (typeof d !== "undefined") {
                    largeArc = d;
                }
                if (typeof e !== "undefined") {
                    sweepClockwise = e;
                }
            }
            else {
                if (typeof e !== "undefined") {
                    xAxisRotate = e;
                }
                if (typeof f !== "undefined") {
                    largeArc = f;
                }
                if (typeof g !== "undefined") {
                    sweepClockwise = g;
                }
            }
            super(Command.ArcToRel, r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        buildInstance(r, p, xAxisRotate, largeArc, sweepClockwise) {
            return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
        }
        defaultInstance() {
            return new ArcToRel();
        }
    }
    PathSegment.ArcToRel = ArcToRel;
})(PathSegment = exports.PathSegment || (exports.PathSegment = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1zZWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aC1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTZDO0FBSTdDLGlDQUE4QztBQUM5QyxtQ0FBZ0M7QUFFaEM7SUFDRSxZQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLEdBQWtCO1FBQzdCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUFzQjtRQUNsRSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUdNLFlBQVksQ0FBQyxJQUFpQjtRQUNuQyxNQUFNLElBQUksR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFD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

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PreserveAspectRatio {
    constructor(x, y, meetOrSlice) {
        this.x = x;
        this.y = y;
        this.meetOrSlice = meetOrSlice;
    }
    toString() {
        if (this.x !== undefined && this.y !== undefined) {
            let str = `x${this.x}Y${this.y}`;
            if (this.meetOrSlice !== undefined) {
                str += " " + this.meetOrSlice;
            }
            return str;
        }
        else {
            return "none";
        }
    }
}
exports.PreserveAspectRatio = PreserveAspectRatio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VydmUtYXNwZWN0LXJhdGlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJlc2VydmUtYXNwZWN0LXJhdGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFJRSxZQUFtQixDQUF5QixFQUFTLENBQXlCLEVBQVMsV0FBOEI7UUFBbEcsTUFBQyxHQUFELENBQUMsQ0FBd0I7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUF3QjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUFHLENBQUM7SUFDbEgsUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDaEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO2dCQUNsQyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDL0I7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGO0FBaEJELGtEQWdCQyJ9

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(77));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(78));
__export(__webpack_require__(33));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6Qiw4QkFBeUI7QUFDekIsNkJBQXdCO0FBQ3hCLDRCQUF1QjtBQUN2QixpQ0FBNEIifQ==

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = __webpack_require__(4);
class Matrix_Transform extends transform_1.Transform {
    constructor(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        super("matrix");
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
    }
    args() {
        return `${this.a} ${this.b} ${this.c} ${this.d} ${this.e} ${this.f}`;
    }
    parseArgs(css) {
        if (css !== null) {
            const toks = css.split(" ");
            return new Matrix_Transform(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]), parseFloat(toks[4]), parseFloat(toks[5]));
        }
        else {
            return new Matrix_Transform();
        }
    }
}
exports.Matrix_Transform = Matrix_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQXlDO0FBRXpDLHNCQUE4QixTQUFRLHFCQUFTO0lBQzdDLFlBQW1CLElBQVksQ0FBQyxFQUFTLElBQVksQ0FBQyxFQUFTLElBQVksQ0FBQyxFQUFTLElBQVksQ0FBQyxFQUFTLElBQVksQ0FBQyxFQUFTLElBQVksQ0FBQztRQUM1SSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEQyxNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVk7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFFOUksQ0FBQztJQUNNLElBQUk7UUFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDO0lBQ00sU0FBUyxDQUFDLEdBQWtCO1FBQ2pDLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNKO2FBQU07WUFDTCxPQUFPLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRjtBQWZELDRDQWVDIn0=

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = __webpack_require__(4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNrZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0Q0FBeUM7QUFFekMscUJBQTZCLFNBQVEscUJBQVM7SUFDNUMsWUFBbUIsSUFBWSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURFLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFFaEMsQ0FBQztJQUNNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFrQjtRQUNqQyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztDQUNGO0FBZEQsMENBY0M7QUFFRCxxQkFBNkIsU0FBUSxxQkFBUztJQUM1QyxZQUFtQixJQUFZLENBQUM7UUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsTUFBQyxHQUFELENBQUMsQ0FBWTtJQUVoQyxDQUFDO0lBQ00sSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00sU0FBUyxDQUFDLEdBQWtCO1FBQ2pDLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQixPQUFPLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxPQUFPLElBQUksZUFBZSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0NBQ0Y7QUFkRCwwQ0FjQyJ9

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(80));
__export(__webpack_require__(6));
__export(__webpack_require__(5));
const FilterPrimitives = __webpack_require__(81);
exports.FilterPrimitives = FilterPrimitives;
const NonRenderables = __webpack_require__(86);
exports.NonRenderables = NonRenderables;
const Renderables = __webpack_require__(89);
exports.Renderables = Renderables;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUFtQztBQUNuQyw4QkFBeUI7QUFDekIsc0NBQWlDO0FBQ2pDLGtDQUE2QjtBQUU3Qix3REFBd0Q7QUFLdEQsNENBQWdCO0FBSmxCLG9EQUFvRDtBQUtsRCx3Q0FBYztBQUpoQiw2Q0FBNkM7QUFLM0Msa0NBQVcifQ==

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
const blend_1 = __webpack_require__(45);
const color_matrix_1 = __webpack_require__(46);
const component_transfer_1 = __webpack_require__(47);
const composite_1 = __webpack_require__(48);
const convolve_matrix_1 = __webpack_require__(49);
const displacement_map_1 = __webpack_require__(50);
const flood_1 = __webpack_require__(51);
const gaussian_blur_1 = __webpack_require__(52);
const image_1 = __webpack_require__(53);
const diffuse_1 = __webpack_require__(54);
const distant_1 = __webpack_require__(55);
const point_1 = __webpack_require__(56);
const spot_1 = __webpack_require__(57);
const specular_1 = __webpack_require__(58);
const merge_1 = __webpack_require__(59);
const morphology_1 = __webpack_require__(60);
const offset_1 = __webpack_require__(61);
const tile_1 = __webpack_require__(62);
const transfer_function_1 = __webpack_require__(63);
const turbulence_1 = __webpack_require__(64);
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
        componentTransfer.add(new transfer_function_1.TransferFunction_Primitive(this, "R", r));
        componentTransfer.add(new transfer_function_1.TransferFunction_Primitive(this, "G", g));
        componentTransfer.add(new transfer_function_1.TransferFunction_Primitive(this, "B", b));
        if (a !== undefined) {
            componentTransfer.add(new transfer_function_1.TransferFunction_Primitive(this, "A", a));
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
            const mergeNode = new element_1.Element(this.context, "feMergeNode", { in: input });
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
    specularLighting(attrs, lights = [], input) {
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
                    lighting.add(new point_1.PointLight(this, light));
                    break;
                case "distant":
                    lighting.add(new distant_1.DistantLight(this, light));
                    break;
                case "spot":
                    lighting.add(new spot_1.SpotLight(this, light));
                    break;
            }
        });
    }
}
exports.Filter = Filter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsd0NBQXFDO0FBR3JDLHFEQUE0RDtBQUM1RCxtRUFBeUU7QUFDekUsK0VBQXFGO0FBQ3JGLDZEQUFvRTtBQUNwRSx5RUFBMEc7QUFDMUcsMkVBQTZHO0FBQzdHLHFEQUE0RDtBQUM1RCxxRUFBMkU7QUFDM0UscURBQTREO0FBQzVELGtFQUFtRztBQUVuRywrRUFBaUY7QUFDakYsMkVBQTZFO0FBQzdFLHlFQUEyRTtBQUMzRSxvRUFBc0c7QUFDdEcscURBQTREO0FBQzVELCtEQUFzRTtBQUN0RSx1REFBOEQ7QUFDOUQsbURBQTBEO0FBQzFELDZFQUFnSDtBQUNoSCwrREFBNkY7QUFzQjdGLE1BQU0sS0FBSyxHQUFHLENBQU8sQ0FBSSxFQUFFLENBQUksRUFBUyxFQUFFO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QjtJQUNELEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLFlBQW9CLFNBQVEsaUJBQTJEO0lBR3JGLFlBQW1CLE9BQWdCO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRDNCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENB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

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(45));
__export(__webpack_require__(46));
__export(__webpack_require__(47));
__export(__webpack_require__(48));
__export(__webpack_require__(49));
__export(__webpack_require__(50));
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(53));
__export(__webpack_require__(59));
__export(__webpack_require__(60));
__export(__webpack_require__(61));
__export(__webpack_require__(62));
__export(__webpack_require__(63));
__export(__webpack_require__(64));
const Lighting = __webpack_require__(82);
exports.Lighting = Lighting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZCQUF3QjtBQUN4QixvQ0FBK0I7QUFDL0IsMENBQXFDO0FBQ3JDLGlDQUE0QjtBQUM1Qix1Q0FBa0M7QUFDbEMsd0NBQW1DO0FBQ25DLDZCQUF3QjtBQUN4QixxQ0FBZ0M7QUFDaEMsNkJBQXdCO0FBQ3hCLDZCQUF3QjtBQUN4QixrQ0FBNkI7QUFDN0IsOEJBQXlCO0FBQ3pCLDRCQUF1QjtBQUN2Qix5Q0FBb0M7QUFDcEMsa0NBQTZCO0FBRTdCLHVDQUF1QztBQUdyQyw0QkFBUSJ9

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(83));
__export(__webpack_require__(54));
__export(__webpack_require__(58));
const LightSource = __webpack_require__(84);
exports.LightSource = LightSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE2QjtBQUM3QiwrQkFBMEI7QUFDMUIsZ0NBQTJCO0FBRTNCLDhDQUE4QztBQUc1QyxrQ0FBVyJ9

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(85));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
__export(__webpack_require__(57));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE2QjtBQUM3QiwrQkFBMEI7QUFDMUIsNkJBQXdCO0FBQ3hCLDRCQUF1QiJ9

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(23));
__export(__webpack_require__(24));
__export(__webpack_require__(25));
__export(__webpack_require__(17));
const PaintServers = __webpack_require__(87);
exports.PaintServers = PaintServers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1Qiw4QkFBeUI7QUFDekIsNEJBQXVCO0FBQ3ZCLG9DQUErQjtBQUUvQixnREFBZ0Q7QUFHOUMsb0NBQVkifQ==

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(16));
__export(__webpack_require__(18));
const Gradients = __webpack_require__(88);
exports.Gradients = Gradients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdDQUEyQjtBQUMzQiwrQkFBMEI7QUFFMUIseUNBQXlDO0FBR3ZDLDhCQUFTIn0=

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(26));
__export(__webpack_require__(27));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6Qiw4QkFBeUIifQ==

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(29));
__export(__webpack_require__(28));
__export(__webpack_require__(34));
__export(__webpack_require__(8));
__export(__webpack_require__(35));
__export(__webpack_require__(2));
__export(__webpack_require__(43));
const Shapes = __webpack_require__(90);
exports.Shapes = Shapes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1QixnQ0FBMkI7QUFDM0Isc0NBQWlDO0FBQ2pDLDZCQUF3QjtBQUN4Qiw2QkFBd0I7QUFDeEIsNkJBQXdCO0FBQ3hCLDRCQUF1QjtBQUV2QixtQ0FBbUM7QUFHakMsd0JBQU0ifQ==

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(36));
__export(__webpack_require__(37));
__export(__webpack_require__(38));
__export(__webpack_require__(39));
__export(__webpack_require__(40));
__export(__webpack_require__(41));
__export(__webpack_require__(42));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6QiwrQkFBMEI7QUFDMUIsNEJBQXVCO0FBQ3ZCLDRCQUF1QjtBQUN2QiwrQkFBMEI7QUFDMUIsZ0NBQTJCO0FBQzNCLDRCQUF1QiJ9

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZTZiZjBmMTYyNmNiNGIxNjVkOCIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkM1wiIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2RpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSeFwiIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9kb2N1bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL3BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL3JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy93cmFwcGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL2NsaXAtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9saW5lYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9yYWRpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2V4dGVybmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9lYXNpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9yb3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9zY2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3RyYW5zbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZm9yZWlnbi1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ltYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvY2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvZWxsaXBzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWdvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlsaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvdGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90ZXh0LWNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2JsZW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb2xvci1tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvbmVudC10cmFuc2Zlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29tcG9zaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb252b2x2ZS1tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2Rpc3BsYWNlbWVudC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2Zsb29kLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9nYXVzc2lhbi1ibHVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9pbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvZGlmZnVzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2Rpc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3Nwb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL3NwZWN1bGFyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9tZXJnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbW9ycGhvbG9neS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvb2Zmc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy90aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy90cmFuc2Zlci1mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHVyYnVsZW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJwb2xhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2NvbG9yLW1hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9jb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9wYXRoLXNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvcHJlc2VydmUtYXNwZWN0LXJhdGlvLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9za2V3LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2F0dHJpYnV0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2F0dHJpYnV0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsOENBQThDLFVBQVUsR0FBRyxLQUFLO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHNCQUFzQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUIsSUFBSTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFlBQVksSUFBSTtBQUN2RTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPLEdBQUcsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDIrQzs7Ozs7OztBQzlDM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sR0FBRyxPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdWhDOzs7Ozs7O0FDNUIzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJqQjs7Ozs7OztBQ2YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELEtBQUssR0FBRyxLQUFLO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJpRzs7Ozs7OztBQ3RFM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0JBQXNCLHNCQUFzQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbTZDOzs7Ozs7O0FDakMzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVY7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyVzs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVc7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Vzs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1Y7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1ZDs7Ozs7OztBQ2YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1WOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtWTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1WOzs7Ozs7O0FDVDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVc7Ozs7Ozs7QUNsQjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsMkNBQTJDLDJJOzs7Ozs7O0FDRjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNIM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkNBQTJDLCtLOzs7Ozs7O0FDUDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtZOzs7Ozs7O0FDcEIzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnRUFBZ0U7QUFDakUsMkNBQTJDLDJpSjs7Ozs7OztBQ25IM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyNUQ7Ozs7Ozs7QUN2RDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMjhDOzs7Ozs7O0FDcEMzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU8sR0FBRyxPQUFPO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbTFEOzs7Ozs7O0FDMUMzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNERBQTREO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhLEdBQUcsa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhLEdBQUcsa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUI7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LGNBQWM7QUFDNUQsMkNBQTJDLG1KOzs7Ozs7O0FDRjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK007Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQ0FBMkMsbUo7Ozs7Ozs7QUNGM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVA7Ozs7Ozs7QUNYM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrTTs7Ozs7OztBQ1QzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSwyQ0FBMkMsK0s7Ozs7Ozs7QUNQM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVM7Ozs7Ozs7QUNkM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtUSIsImZpbGUiOiJkaXN0L3NhdmFnZWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwiUnhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTYXZhZ2VET01cIiwgW1wiZDNcIiwgXCJSeFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTYXZhZ2VET01cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcIlJ4XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTYXZhZ2VET01cIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSwgcm9vdFtcIlJ4XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZTZiZjBmMTYyNmNiNGIxNjVkOCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpO1xyXG5jbGFzcyBGaWx0ZXJQcmltaXRpdmUgZXh0ZW5kcyBlbGVtZW50XzEuRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIG5hbWUsIGF0dHJzID0ge30sIF9yZWYgPSBmaWx0ZXIuZ2V0VW5pcXVlUHJpbWl0aXZlUmVmZXJlbmNlKCkpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIuY29udGV4dCwgbmFtZSwgYXR0cnMsIGAke2ZpbHRlci5pZH0tJHtfcmVmfWApO1xyXG4gICAgICAgIHRoaXMuX3JlZiA9IF9yZWY7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJyZXN1bHRcIiwgX3JlZik7XHJcbiAgICAgICAgZmlsdGVyLmFkZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWY7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GaWx0ZXJQcmltaXRpdmUgPSBGaWx0ZXJQcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHNkR1Z5TFhCeWFXMXBkR2wyWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVpwYkhSbGNpMXdjbWx0YVhScGRtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSFFTeDNRMEZCY1VNN1FVRnBRbkpETEhGQ1FVRjFSQ3hUUVVGUkxHbENRVUZ0UlR0SlFVTm9TU3haUVVGWkxFMUJRV01zUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCYVVRc1JVRkJSU3hGUVVGVkxFOUJRV1VzVFVGQlRTeERRVUZETERKQ1FVRXlRaXhGUVVGRk8xRkJRM2hLTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1JVRkJSU3hKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZFTUVNc1UwRkJTU3hIUVVGS0xFbEJRVWtzUTBGQkswTTdVVUZGZUVvc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRiRU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlEwMHNVVUZCVVR0UlFVTmlMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU51UWl4RFFVRkRPME5CUTBZN1FVRlVSQ3d3UTBGVFF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkM1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBBYnN0cmFjdFNoYXBlIGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdFNoYXBlID0gQWJzdHJhY3RTaGFwZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJoaGNHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKemFHRndaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMRGhEUVVGM1JUdEJRVTE0UlN4dFFrRkJjVVVzVTBGQlVTd3JRa0ZCSzBNN1EwRkJSenRCUVVFdlNDeHpRMEZCSzBnaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uL3JlbmRlcmVyXCIpO1xyXG5jb25zdCBhdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZVwiKTtcclxuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XHJcbmNvbnN0IHJ4anNfMSA9IHJlcXVpcmUoXCJyeGpzXCIpO1xyXG5jb25zdCBib3hfMSA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZXMvYm94XCIpO1xyXG5jb25zdCB3cmFwcGVyc18xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy93cmFwcGVyc1wiKTtcclxuY29uc3QgaWRfMSA9IHJlcXVpcmUoXCIuL2lkXCIpO1xyXG5jbGFzcyBFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGVsLCBhdHRycywgX2lkID0gaWRfMS5yYW5kb21TaG9ydFN0cmluZ0lkKCkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuX2lkID0gX2lkO1xyXG4gICAgICAgIHRoaXMuX2R5bmFtaWNTdWJzY3JpcHRpb25zID0ge307XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlID0gdGhpcy5jb250ZXh0LndpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoY29uc3RhbnRzXzEuWE1MTlMsIGVsKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFkZENoaWxkKHRoaXMuX25vZGUpO1xyXG4gICAgICAgICAgICBpZiAoYXR0cnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGF0dHJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUgPSBlbDtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLl9ub2RlLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgICAgICBpZiAoaWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdHlsZSA9IHRoaXMuY29udGV4dC53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9ub2RlKTtcclxuICAgIH1cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgbm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgdXJsKCMke3RoaXMuX2lkfSlgO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXR0cmlidXRlKG5hbWUsIHZhbCkge1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVfMS5pc0F0dHJpYnV0ZSh2YWwpKSB7XHJcbiAgICAgICAgICAgIHZhbC5zZXQodGhpcy5fbm9kZSwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWwuam9pbihcIlxcdFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBTdHJpbmcodmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbCkge1xyXG4gICAgICAgIHJlbmRlcmVyXzEuUmVuZGVyZXIuZ2V0SW5zdGFuY2UoKS5xdWV1ZUF0dHJpYnV0ZVVwZGF0ZSh0aGlzLCBuYW1lLCB2YWwpO1xyXG4gICAgfVxyXG4gICAgc2V0QXR0cmlidXRlcyhhdHRycykge1xyXG4gICAgICAgIHJlbmRlcmVyXzEuUmVuZGVyZXIuZ2V0SW5zdGFuY2UoKS5xdWV1ZUF0dHJpYnV0ZVVwZGF0ZSh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlQXR0cmlidXRlKG5hbWUsIHZhbCwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgICAgIGxldCBhdHRyO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSBuZXcgd3JhcHBlcnNfMS5OdW1iZXJXcmFwcGVyKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGF0dHJpYnV0ZV8xLmlzQXR0cmlidXRlKHZhbCkpIHtcclxuICAgICAgICAgICAgYXR0ciA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IGF0dHIuZ2V0KHRoaXMuX25vZGUsIG5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJlcl8xLlJlbmRlcmVyLmdldEluc3RhbmNlKCkucmVnaXN0ZXJBdHRyaWJ1dGVJbnRlcnBvbGF0aW9uKHRoaXMsIG5hbWUsIGF0dHIuaW50ZXJwb2xhdG9yKGZyb20pLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICAgIH1cclxuICAgIGdldEF0dHJpYnV0ZShuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy5fbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSkgfHwgdGhpcy5fc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcclxuICAgICAgICByZXR1cm4gKHZhbCA9PT0gXCJcIiB8fCB2YWwgPT09IFwibm9uZVwiKSA/IG51bGwgOiB2YWw7XHJcbiAgICB9XHJcbiAgICBjb3B5U3R5bGVGcm9tKGVsLCBpbmNsdWRlRXhjbHVkZSwgZGVmYXVsdEluY2x1ZGUgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7fTtcclxuICAgICAgICBjb25zdCBhdHRycyA9IGVsLl9ub2RlLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgaWYgKGluY2x1ZGVFeGNsdWRlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRycy5pdGVtKGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYXR0ci5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRXhjbHVkZVtuYW1lXSA9PT0gdHJ1ZSB8fCBkZWZhdWx0SW5jbHVkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVtuYW1lXSA9IGVsLl9zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSBlbC5fc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZXMoc3R5bGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0RXZlbnQoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gcnhqc18xLk9ic2VydmFibGUubWVyZ2UoLi4uZXZlbnQuc3BsaXQoXCJ8XCIpLm1hcCgoXykgPT4gcnhqc18xLk9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuX25vZGUsIF8pKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgYm91bmRpbmdCb3goKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX25vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBib3hfMS5Cb3gocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgYWRkKGVsKSB7XHJcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuYXBwZW5kQ2hpbGQoZWwuX25vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldENoaWxkcmVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fbm9kZS5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKG5ldyBFbGVtZW50KHRoaXMuY29udGV4dCwgY2hpbGRyZW4uaXRlbShpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICB9XHJcbiAgICBjbG9uZShkZWVwID0gdHJ1ZSwgaWQgPSBpZF8xLnJhbmRvbVNob3J0U3RyaW5nSWQoKSkge1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgRWxlbWVudCh0aGlzLmNvbnRleHQsIHRoaXMuX25vZGUuY2xvbmVOb2RlKGRlZXApKTtcclxuICAgICAgICBjb3B5Ll9pZCA9IGlkO1xyXG4gICAgICAgIGNvcHkuX25vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgY29weS5faWQpO1xyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9ub2RlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgY2xvbmVOb2RlKGRlZXAgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0aGlzLl9ub2RlLmNsb25lTm9kZShkZWVwKTtcclxuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZF8xLnJhbmRvbVNob3J0U3RyaW5nSWQoKSk7XHJcbiAgICAgICAgcmV0dXJuIGNsb25lO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXeGxiV1Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVZzWlcxbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHRSRUZCYVVVN1FVRkRha1VzTWtOQlFYRkVPMEZCUlhKRUxESkRRVUZ2UXp0QlFVbHdReXdyUWtGQmVVUTdRVUZGZWtRc01FTkJRWFZETzBGQlEzWkRMRzlFUVVGelJEdEJRVU4wUkN3MlFrRkJNa003UVVGSk0wTTdTVUZQUlN4WlFVRnRRaXhQUVVGblFpeEZRVUZGTEVWQlFXZENMRVZCUVVVc1MwRkJNa0lzUlVGQlZTeE5RVUZqTEhkQ1FVRnRRaXhGUVVGRk8xRkJRVFZITEZsQlFVOHNSMEZCVUN4UFFVRlBMRU5CUVZNN1VVRkJlVVFzVVVGQlJ5eEhRVUZJTEVkQlFVY3NRMEZCWjBNN1VVRktka2dzTUVKQlFYRkNMRWRCUVVjc1JVRkJhMFFzUTBGQlF6dFJRVXRxUml4SlFVRkpMRTlCUVU4c1JVRkJSU3hMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zYVVKQlFVc3NSVUZCUlN4RlFVRkZMRU5CUVZFc1EwRkJRenRaUVVNMVJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEYkVNc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTjJRaXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUXpOQ08xbEJRMFFzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTjZRenRoUVVGTk8xbEJRMHdzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRhRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZWtNc1NVRkJTU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVTm1MRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzJGQlEyWTdhVUpCUVUwN1owSkJRMHdzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTjZRenRUUVVOR08xRkJRMFFzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYWtVc1EwRkJRenRKUVVORUxFbEJRVmNzUlVGQlJUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlEwUXNTVUZCVnl4SlFVRkpPMUZCUTJJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkRUU3hSUVVGUk8xRkJRMklzVDBGQlR5eFJRVUZSTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlEwMHNaVUZCWlN4RFFVRm5ReXhKUVVGVkxFVkJRVVVzUjBGQmNVSTdVVUZEY2tZc1NVRkJTU3gxUWtGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNCQ0xFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU16UWp0aFFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXk5RE8yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkROVU03U1VGRFNDeERRVUZETzBsQlEwMHNXVUZCV1N4RFFVRm5ReXhKUVVGVkxFVkJRVVVzUjBGQmNVSTdVVUZEYkVZc2JVSkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4dlFrRkJiMElzUTBGQk9FUXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xU0N4RFFVRkRPMGxCUTAwc1lVRkJZU3hEUVVGRExFdEJRVEJDTzFGQlF6ZERMRzFDUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVFJETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMFJ5eERRVUZETzBsQlEwMHNaMEpCUVdkQ0xFTkJRV2RETEVsQlFWVXNSVUZCUlN4SFFVRnhRaXhGUVVGRkxGRkJRV2RDTEVWQlFVVXNUVUZCYzBJN1VVRkRhRWtzU1VGQlNTeEpRVUZ2UWl4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpOQ0xFbEJRVWtzUjBGQlJ5eEpRVUZKTEhkQ1FVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGREwwSTdZVUZCVFN4SlFVRkpMSFZDUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETTBJc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF6dFRRVU5hTzJGQlFVMDdXVUZEVEN4UFFVRlBPMU5CUTFJN1VVRkRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZUVNc1QwRkJUeXh0UWtGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRGhDUVVFNFFpeERRVUZ4UkN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6RkxMRU5CUVVNN1NVRlZUU3haUVVGWkxFTkJRV2RETEVsQlFWVTdVVUZETTBRc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTm9SaXhQUVVGUExFTkJRVU1zUjBGQlJ5eExRVUZMTEVWQlFVVXNTVUZCU1N4SFFVRkhMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJRM0pFTEVOQlFVTTdTVUZIVFN4aFFVRmhMRU5CUVVNc1JVRkJkME1zUlVGQlJTeGpRVUZ4UkN4RlFVRkZMR2xDUVVFd1FpeEpRVUZKTzFGQlEyeEtMRTFCUVUwc1MwRkJTeXhIUVVGSExFVkJRV2RDTEVOQlFVTTdVVUZETDBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeGpRVUZqTEVWQlFVVTdXVUZEYkVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVTdaMEpCUTNKRExFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRWxCUVVrc1NVRkJTU3hGUVVGRk8yOUNRVU5TTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03YjBKQlEzWkNMRWxCUVVrc1kwRkJZeXhEUVVGRExFbEJRWGRDTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1kwRkJZeXhGUVVGRk8zZENRVU4yUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0eFFrRkRhRVE3YVVKQlEwWTdZVUZEUmp0VFFVTkdPMkZCUVUwN1dVRkRUQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0blFrRkRja01zVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETTBJc1NVRkJTU3hKUVVGSkxFVkJRVVU3YjBKQlExSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dHZRa0ZEZGtJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRMmhFTzJGQlEwWTdVMEZEUmp0UlFVTkVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWTkxGRkJRVkVzUTBGQk5rSXNTMEZCV1R0UlFVTjBSQ3hQUVVGUExHbENRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEdsQ1FVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJReTlHTEVOQlFVTTdTVUZGUkN4SlFVRlhMRmRCUVZjN1VVRkRjRUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4RFFVRkRPMUZCUTJoRUxFOUJRVThzU1VGQlNTeFRRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF5OUVMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zUlVGQk9FTTdVVUZEZGtRc1NVRkJTU3hGUVVGRkxGbEJRVmtzVlVGQlZTeEZRVUZGTzFsQlF6VkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpWQ08yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYkVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ6dFJRVU5vUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTjJReXhOUVVGTkxGRkJRVkVzUjBGQmIwTXNSVUZCUlN4RFFVRkRPMUZCUTNKRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZPMWxCUTNoRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU14UlR0UlFVTkVMRTlCUVU4c1VVRkJVU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1QwRkJaMElzU1VGQlNTeEZRVUZGTEV0QlFXRXNkMEpCUVcxQ0xFVkJRVVU3VVVGRGJrVXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVEJDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRlJMRU5CUVVNc1EwRkJRenRSUVVOdVJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZUVNc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVOVExGTkJRVk1zUTBGQlF5eFBRVUZuUWl4SlFVRkpPMUZCUTNSRExFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlVTeERRVUZETzFGQlEyaEVMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEhkQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5vUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRKUVVObUxFTkJRVU03UTBGRFJqdEJRVE5KUkN3d1FrRXlTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZDNfaW50ZXJwb2xhdGVfMSA9IHJlcXVpcmUoXCJkMy1pbnRlcnBvbGF0ZVwiKTtcclxuY2xhc3MgVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudHlwZX0oJHt0aGlzLmFyZ3MoKX0pYDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBcmdzKGNzcy5zdWJzdHJpbmcoY3NzLmluZGV4T2YoXCIoXCIpICsgMSwgY3NzLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJncyhjc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMiAmJiB0b2tzWzFdID09PSB0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1swXSk7XHJcbiAgICAgICAgICAgIGlmIChjc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY3NzLmluZGV4T2YodGhpcy50eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoY3NzLnN1YnN0cmluZyhzdGFydCwgY3NzLmluZGV4T2YoXCIpXCIsIHN0YXJ0KSArIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShudWxsKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IFN0cmluZygob3ZlcnJpZGUgPT09IHVuZGVmaW5lZCkgPyB0aGlzIDogb3ZlcnJpZGUpO1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIgJiYgdG9rc1sxXSA9PT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGNzcy5pbmRleE9mKHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBgJHtjc3Muc3Vic3RyKDAsIHN0YXJ0KX0ke3N0cn0ke2Nzcy5zdWJzdHIoY3NzLmluZGV4T2YoXCIpXCIsIHN0YXJ0KSArIDEpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgdXBkYXRlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCBzdHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgc3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgc3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0b3IoZnJvbSkge1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBkM19pbnRlcnBvbGF0ZV8xLmludGVycG9sYXRlVHJhbnNmb3JtU3ZnKGZyb20udG9TdHJpbmcoKSwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gKHQpID0+IHRoaXMucGFyc2UoZnVuYyh0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2Zvcm0gPSBUcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5tYjNKdExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpZEhKaGJuTm1iM0p0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzYlVSQlFYbEVPMEZCVTNwRU8wbEJRMFVzV1VGQmJVSXNTVUZCY1VVN1VVRkJja1VzVTBGQlNTeEhRVUZLTEVsQlFVa3NRMEZCYVVVN1NVRkJSeXhEUVVGRE8wbEJSWEpHTEZGQlFWRTdVVUZEWWl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlJVMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE5VVTdZVUZCVFR0WlFVTk1MRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTTFRanRKUVVOSUxFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWk8xRkJRekZETEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETjBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTTVReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkRMRWxCUVVrc1IwRkJSeXhGUVVGRk8yZENRVU5RTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOeVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRFpDeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRGRFVTdZVUZEUmp0VFFVTkdPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmIwSTdVVUZEYUVVc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJReTlFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETjBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTTVReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkRMRWxCUVVrc1IwRkJSeXhGUVVGRk8yZENRVU5RTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOeVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRFpDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN2IwSkJRekZHTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVONFF6dHhRa0ZCVFR0dlFrRkRUQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZEY0VNN1lVRkRSanRwUWtGQlRUdG5Ra0ZEVEN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOd1F6dFRRVU5HTzJGQlFVMDdXVUZEVEN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFRTeFpRVUZaTEVOQlFVTXNTVUZCWlR0UlFVTnFReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eDNRMEZCZFVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRrVXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU0xUXl4RFFVRkRPME5CUTBZN1FVRnVSRVFzT0VKQmJVUkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm0udHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEFic3RyYWN0UmVuZGVyYWJsZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGdldFBvaW50RXZlbnQoZXZlbnRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnQoZXZlbnRzKS5tYXAoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpID8gZXZlbnQgOiBldmVudC50b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLmNvbnRleHQucmVmUG9pbnQ7XHJcbiAgICAgICAgICAgIHJlZi54ID0gYWN0aW9uLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHJlZi55ID0gYWN0aW9uLmNsaWVudFk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMubm9kZS5nZXRTY3JlZW5DVE0oKTtcclxuICAgICAgICAgICAgaWYgKCFtYXRyaXgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gU2NyZWVuIENvb3JkaW5hdGUgVHJhbnNmb3JtIE1hdHJpeCBmb3VuZCBmb3Igbm9kZSBcIiR7dGhpcy5ub2RlLmlkfVwiYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbG9jYWwgPSByZWYubWF0cml4VHJhbnNmb3JtKG1hdHJpeC5pbnZlcnNlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBsb2NhbC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGxvY2FsLnksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGFjdGlvbi5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBhY3Rpb24ucGFnZVksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogYWN0aW9uLnNjcmVlblgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogYWN0aW9uLnNjcmVlblksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RSZW5kZXJhYmxlID0gQWJzdHJhY3RSZW5kZXJhYmxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZ1WkdWeVlXSnNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluSmxibVJsY21GaWJHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSlFTeDNRMEZCY1VNN1FVRnRRbkpETEhkQ1FVRjFTQ3hUUVVGUkxHbENRVUUwUkR0SlFVTnNUQ3hoUVVGaExFTkJRVU1zVFVGQll6dFJRVU5xUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJPRUlzUlVGQlJTeEZRVUZGTzFsQlEyeEZMRTFCUVUwc1RVRkJUU3hIUVVGMVFpeERRVUZETEV0QlFVc3NXVUZCV1N4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkdMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUTJ4RExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJRenRaUVVOMlFpeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU03V1VGRGRrSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0WlFVTjRReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTllMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zZVVSQlFYbEVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTXpSanRaUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VRc1QwRkJUenRuUWtGRFRDeExRVUZMTEVWQlFVVTdiMEpCUTB3c1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzI5Q1FVTldMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dHBRa0ZEV0R0blFrRkRSQ3hKUVVGSkxFVkJRVVU3YjBKQlEwb3NRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhMUVVGTE8yOUNRVU5tTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1MwRkJTenRwUWtGRGFFSTdaMEpCUTBRc1RVRkJUU3hGUVVGRk8yOUNRVU5PTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1QwRkJUenR2UWtGRGFrSXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhQUVVGUE8ybENRVU5zUWp0aFFVTkdMRU5CUVVNN1VVRkRTaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdRMEZEUmp0QlFUVkNSQ3huUkVFMFFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcclxuY2xhc3MgQWJzdHJhY3ROb25SZW5kZXJhYmxlIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3ROb25SZW5kZXJhYmxlID0gQWJzdHJhY3ROb25SZW5kZXJhYmxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libTl1TFhKbGJtUmxjbUZpYkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp1YjI0dGNtVnVaR1Z5WVdKc1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxIZERRVUZ4UXp0QlFVOXlReXd5UWtGQk1rWXNVMEZCVVN4cFFrRkJiMFk3UTBGQlJ6dEJRVUV4VEN4elJFRkJNRXdpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGQzX2ludGVycG9sYXRlXzEgPSByZXF1aXJlKFwiZDMtaW50ZXJwb2xhdGVcIik7XHJcbmNsYXNzIERpbWVuc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgdW5pdCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVuaXQgPSB1bml0O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudmFsdWV9JHt0aGlzLnVuaXR9YDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGNzcy5tYXRjaCgvKFxcZCt8XFxkK1xcLlxcZCspKFxcdyt8JSkvaSk7XHJcbiAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udmVydChwYXJzZUZsb2F0KG1bMV0pLCBtWzJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKHBhcnNlRmxvYXQoY3NzKSwgdGhpcy51bml0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbigwLCB0aGlzLnVuaXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdG9yKGZyb20pIHtcclxuICAgICAgICBjb25zdCBhID0gdGhpcy5fY29udmVydChmcm9tLnZhbHVlLCBmcm9tLnVuaXQpO1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBkM19pbnRlcnBvbGF0ZV8xLmludGVycG9sYXRlKGEudG9TdHJpbmcoKSwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gKHQpID0+IHRoaXMucGFyc2UoZnVuYyh0KSk7XHJcbiAgICB9XHJcbiAgICBfY29udmVydCh2YWx1ZSwgdW5pdCkge1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gKERpbWVuc2lvbi5jb252ZXJ0W3RoaXMudW5pdF0gLyBEaW1lbnNpb24uY29udmVydFt1bml0XSkgfHwgMTtcclxuICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbih2YWx1ZSAqIHNjYWxlLCB0aGlzLnVuaXQpO1xyXG4gICAgfVxyXG59XHJcbkRpbWVuc2lvbi5jb252ZXJ0ID0ge1xyXG4gICAgcHg6IDEsXHJcbiAgICBpbjogOTYsXHJcbiAgICBjbTogMjU0IC8gOTYsXHJcbiAgICBtbTogMjUuNCAvIDk2LFxyXG4gICAgcHQ6IDMgLyA0LFxyXG4gICAgcGM6IDksXHJcbiAgICBkZWc6IDEsXHJcbiAgICBncmFkOiA5IC8gMTAsXHJcbiAgICByYWQ6IDE4MCAvIE1hdGguUEksXHJcbiAgICB0dXJuOiAzNjAsXHJcbn07XHJcbmV4cG9ydHMuRGltZW5zaW9uID0gRGltZW5zaW9uO1xyXG5jbGFzcyBQZXJjZW50YWdlIGV4dGVuZHMgRGltZW5zaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIFwiJVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBlcmNlbnRhZ2UgPSBQZXJjZW50YWdlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x0Wlc1emFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpHbHRaVzV6YVc5dUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2JVUkJRVFpETzBGQlV6ZERPMGxCWVVVc1dVRkJiVUlzUzBGQllTeEZRVUZUTEVsQlFWVTdVVUZCYUVNc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQlVUdFJRVUZUTEZOQlFVa3NSMEZCU2l4SlFVRkpMRU5CUVUwN1NVRkJSeXhEUVVGRE8wbEJRMmhFTEZGQlFWRTdVVUZEWWl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4SFFVRnJRanRSUVVNM1FpeEpRVUZKTEVkQlFVY3NTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkRhRUlzVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlR0blFrRkRaQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRemxETzJsQ1FVRk5PMmRDUVVOTUxFOUJRVThzU1VGQlNTeFRRVUZUTEVOQlFVOHNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTjRSRHRUUVVOR08xRkJRMFFzVDBGQlR5eEpRVUZKTEZOQlFWTXNRMEZCVHl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hSUVVFd1FqdFJRVU4wUlN4SlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE1VSXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha1E3WVVGQlRUdFpRVU5NTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZsQlFWa3NRMEZCUXl4SlFVRnhRanRSUVVOMlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJReTlETEUxQlFVMHNTVUZCU1N4SFFVRkhMRFJDUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzaEVMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVVOUExGRkJRVkVzUTBGQlF5eExRVUZoTEVWQlFVVXNTVUZCV1R0UlFVTXhReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETlVVc1QwRkJUeXhKUVVGSkxGTkJRVk1zUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUkN4RFFVRkRPenRCUVRkRFl5eHBRa0ZCVHl4SFFVRXJRanRKUVVOdVJDeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTk1MRVZCUVVVc1JVRkJSU3hGUVVGRk8wbEJRMDRzUlVGQlJTeEZRVUZGTEVkQlFVY3NSMEZCUnl4RlFVRkZPMGxCUTFvc1JVRkJSU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEZRVUZGTzBsQlEySXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJRMVFzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEVEN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOT0xFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlR0SlFVTmFMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVTdTVUZEYkVJc1NVRkJTU3hGUVVGRkxFZEJRVWM3UTBGRFZpeERRVUZETzBGQldrb3NPRUpCSzBORE8wRkJSVVFzWjBKQlFYZENMRk5CUVZFc1UwRkJZenRKUVVNMVF5eFpRVUZaTEV0QlFXRTdVVUZEZGtJc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTndRaXhEUVVGRE8wTkJRMFk3UVVGS1JDeG5RMEZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvZGltZW5zaW9uLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuXCIpO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgR3JvdXAgZXh0ZW5kcyByZW5kZXJhYmxlXzEuQWJzdHJhY3RSZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJnXCIsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHRvUGF0dGVybih3LCBoLCB4LCB5LCB2aWV3KSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBwYXR0ZXJuXzEuUGF0dGVybih0aGlzLmNvbnRleHQsIHcsIGgsIHgsIHksIHZpZXcpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHBhdHRlcm4uYWRkKGNoaWxkKSk7XHJcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Hcm91cCA9IEdyb3VwO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laM0p2ZFhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpuY205MWNDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQkxITkZRVUZ0UlR0QlFVTnVSU3c0UTBGQmFVYzdRVUZKYWtjc1YwRkJiVUlzVTBGQlVTd3JRa0ZCY1VRN1NVRkRPVVVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVhORE8xRkJRMnhGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRkpUU3hUUVVGVExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFbEJRVlU3VVVGRGRrVXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hwUWtGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVRc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGFrSXNRMEZCUXp0RFFVTkdPMEZCV2tRc2MwSkJXVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuWE1MTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbmV4cG9ydHMuWExJTksgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWMzUmhiblJ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl1YzNSaGJuUnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFXRXNVVUZCUVN4TFFVRkxMRWRCUVVjc05FSkJRVFJDTEVOQlFVTTdRVUZEY2tNc1VVRkJRU3hMUVVGTExFZEJRVWNzT0VKQlFUaENMRU5CUVVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25zdGFudHMudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbmNvbnN0IGJveF8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy9ib3hcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzL3BvaW50XCIpO1xyXG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcclxuY29uc3QgZG9jdW1lbnRfMSA9IHJlcXVpcmUoXCIuL2RvY3VtZW50XCIpO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50XCIpO1xyXG5jb25zdCBjbGlwX3BhdGhfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGhcIik7XHJcbmNvbnN0IG1hcmtlcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlclwiKTtcclxuY29uc3QgbWFza18xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2tcIik7XHJcbmNvbnN0IGxpbmVhcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2xpbmVhclwiKTtcclxuY29uc3QgcmFkaWFsXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsXCIpO1xyXG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuXCIpO1xyXG5jb25zdCBleHRlcm5hbF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvZXh0ZXJuYWxcIik7XHJcbmNvbnN0IGZvcmVpZ25fb2JqZWN0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9mb3JlaWduLW9iamVjdFwiKTtcclxuY29uc3QgZ3JvdXBfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwXCIpO1xyXG5jb25zdCBpbWFnZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2VcIik7XHJcbmNvbnN0IGNpcmNsZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZVwiKTtcclxuY29uc3QgZWxsaXBzZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2VcIik7XHJcbmNvbnN0IGxpbmVfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lXCIpO1xyXG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aFwiKTtcclxuY29uc3QgcG9seWdvbl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlnb25cIik7XHJcbmNvbnN0IHBvbHlsaW5lXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWxpbmVcIik7XHJcbmNvbnN0IHJlY3RfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9yZWN0XCIpO1xyXG5jb25zdCB0ZXh0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0XCIpO1xyXG5jbGFzcyBDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIF93aW5kb3cgPSBDb250ZXh0LkRFRkFVTFRfV0lORE9XKSB7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gX3dpbmRvdztcclxuICAgICAgICBpZiAocm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgSUQgaXMgbm90IHZhbGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGNvbnN0YW50c18xLlhNTE5TLCBcInN2Z1wiKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fcm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgY29uc3RhbnRzXzEuWE1MTlMpO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlTlMoY29uc3RhbnRzXzEuWE1MTlMsIFwieGxpbmtcIiwgY29uc3RhbnRzXzEuWExJTkspO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcclxuICAgICAgICB0aGlzLl90YXJnZXQgPSB0aGlzLl9yb290O1xyXG4gICAgICAgIGNvbnN0IGRlZnNFbGVtZW50cyA9IHRoaXMuX3Jvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZWZzXCIpO1xyXG4gICAgICAgIGlmIChkZWZzRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZzID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMsIGRlZnNFbGVtZW50cy5pdGVtKDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlZnMgPSBuZXcgZWxlbWVudF8xLkVsZW1lbnQodGhpcywgXCJkZWZzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb250ZXh0Ll9DT05URVhUX1NVQkpFQ1QubmV4dCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgY29udGV4dHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbnRleHQuX0NPTlRFWFRfU1VCSkVDVC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuICAgIGdldCB3aW5kb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvdztcclxuICAgIH1cclxuICAgIGdldCByZWZQb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdC5jcmVhdGVTVkdQb2ludCgpO1xyXG4gICAgfVxyXG4gICAgYWRkRGVmKGRlZikge1xyXG4gICAgICAgIHRoaXMuX2RlZnMuYWRkKGRlZik7XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChlbCkge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldC5hcHBlbmRDaGlsZCgoZWwgaW5zdGFuY2VvZiBlbGVtZW50XzEuRWxlbWVudCkgPyBlbC5ub2RlIDogZWwpO1xyXG4gICAgfVxyXG4gICAgbG9hZCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB4bWxEb2N1bWVudCA9IHlpZWxkIGRvY3VtZW50XzEubWFrZVJlcXVlc3QoXCJHRVRcIiwgdXJsKTtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxEb2N1bWVudCA9IG5ldyBkb2N1bWVudF8xLlNWR0RvY3VtZW50KHRoaXMsIHhtbERvY3VtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBleHRlcm5hbF8xLkV4dGVybmFsU1ZHKHRoaXMsIGV4dGVybmFsRG9jdW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2xpcFBhdGgodywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgY2xpcF9wYXRoXzEuQ2xpcFBhdGgodGhpcywgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cyk7XHJcbiAgICB9XHJcbiAgICBtYXJrZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXJrZXJfMS5NYXJrZXIodGhpcywge30pO1xyXG4gICAgfVxyXG4gICAgbWFzayh3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXNrXzEuTWFzayh0aGlzLCB3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKTtcclxuICAgIH1cclxuICAgIGxpbmVhckdyYWRpZW50KHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgbGluZWFyXzEuTGluZWFyR3JhZGllbnQodGhpcywgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHJhZGlhbEdyYWRpZW50KHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgcmFkaWFsXzEuUmFkaWFsR3JhZGllbnQodGhpcywgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBhdHRlcm4odywgaCwgeCwgeSwgdmlldykge1xyXG4gICAgICAgIHJldHVybiBuZXcgcGF0dGVybl8xLlBhdHRlcm4odGhpcywgdywgaCwgeCwgeSwgdmlldyk7XHJcbiAgICB9XHJcbiAgICBmb3JlaWduT2JqZWN0KGh0bWwsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IG5ldyBmb3JlaWduX29iamVjdF8xLkZvcmVpZ25PYmplY3QodGhpcywgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0pO1xyXG4gICAgICAgIGVsLmFkZEhUTUwoaHRtbCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChlbCk7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG4gICAgZ3JvdXAoZWxzKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBuZXcgZ3JvdXBfMS5Hcm91cCh0aGlzKTtcclxuICAgICAgICBlbHMuZm9yRWFjaChjaGlsZCA9PiBlbC5hZGQoY2hpbGQpKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGVsKTtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICBpbWFnZShocmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IGltYWdlXzEuSW1hZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBpbWcuZ2V0RXZlbnQoXCJsb2FkXCIpLnRha2UoMSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0geWllbGQgcHJvbWlzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGltZztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNpcmNsZShhMSwgYTIsIGEzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSAoYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSA/IHsgXCJjeDpjeVwiOiBhMSwgcjogYTIgfSA6IHsgY3g6IGExLCBjeTogYTIsIHI6IGEzIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjaXJjbGVfMS5DaXJjbGUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgZWxsaXBzZShhMSwgYTIsIGEzLCBhNCkge1xyXG4gICAgICAgIGxldCBhdHRycyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGExSXNQb2ludCA9IGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludDtcclxuICAgICAgICBjb25zdCBhMklzUG9pbnQgPSBhMiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgaWYgKGExSXNQb2ludCAmJiBhMklzUG9pbnQpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IFwiY3g6Y3lcIjogYTEsIFwicng6cnlcIjogYTIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIShhMUlzUG9pbnQgfHwgYTJJc1BvaW50KSkge1xyXG4gICAgICAgICAgICBhdHRycyA9IHsgY3g6IGExLCBjeTogYTIsIHJ4OiBhMywgcnk6IGE0IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgZWxsaXBzZV8xLkVsbGlwc2UodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgbGluZShhMSwgYTIsIGEzLCBhNCkge1xyXG4gICAgICAgIGxldCBhdHRycyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGExSXNQb2ludCA9IGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludDtcclxuICAgICAgICBjb25zdCBhMklzUG9pbnQgPSBhMiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgaWYgKGExSXNQb2ludCAmJiBhMklzUG9pbnQpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IFwieDE6eTFcIjogYTEsIFwieDI6eTJcIjogYTIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIShhMUlzUG9pbnQgfHwgYTJJc1BvaW50KSkge1xyXG4gICAgICAgICAgICBhdHRycyA9IHsgeDE6IGExLCB5MTogYTIsIHgyOiBhMywgeTI6IGE0IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgbGluZV8xLkxpbmUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcGF0aChkLCBwYXRoTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7IGQsIHBhdGhMZW5ndGggfTtcclxuICAgICAgICByZXR1cm4gbmV3IHBhdGhfMS5QYXRoKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBvbHlnb24ocG9pbnRzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7IHBvaW50cyB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgcG9seWdvbl8xLlBvbHlnb24odGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcG9seWxpbmUocG9pbnRzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7IHBvaW50cyB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgcG9seWxpbmVfMS5Qb2x5bGluZSh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICByZWN0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IHt9O1xyXG4gICAgICAgIGlmIChhMSBpbnN0YW5jZW9mIGJveF8xLkJveCkge1xyXG4gICAgICAgICAgICBhdHRyc1tcIng6eTp3aWR0aDpoZWlnaHRcIl0gPSBhMTtcclxuICAgICAgICAgICAgaWYgKGEyIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJyeDpyeVwiXSA9IGEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ4XCJdID0gYTI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYTMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnlcIl0gPSBhMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgYXR0cnNbXCJ4OnlcIl0gPSBhMTtcclxuICAgICAgICAgICAgaWYgKGEyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wid2lkdGhcIl0gPSBhMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJoZWlnaHRcIl0gPSBhMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTQgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcInJ4OnJ5XCJdID0gYTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYTQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnhcIl0gPSBhNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhNSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeVwiXSA9IGE1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhdHRyc1tcInhcIl0gPSBhMTtcclxuICAgICAgICAgICAgaWYgKGEyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wieVwiXSA9IGEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhMyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcIndpZHRoXCJdID0gYTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGE0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wiaGVpZ2h0XCJdID0gYTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGE1IGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJyeDpyeVwiXSA9IGE1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGE1ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ4XCJdID0gYTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYTYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnlcIl0gPSBhNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IHJlY3RfMS5SZWN0KHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHRleHQoY29udGVudCwgYTEsIGEyKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSAoYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSA/IHsgXCJ4OnlcIjogYTEgfSA6IHsgeDogYTEsIHk6IGEyIH07XHJcbiAgICAgICAgY29uc3QgdCA9IG5ldyB0ZXh0XzEuVGV4dCh0aGlzLCBhdHRycyk7XHJcbiAgICAgICAgY29udGVudC5mb3JFYWNoKGMgPT4gdC5hZGRTcGFuKGMpKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG59XHJcbkNvbnRleHQuREVGQVVMVF9XSU5ET1cgPSB3aW5kb3c7XHJcbkNvbnRleHQuX0NPTlRFWFRfU1VCSkVDVCA9IG5ldyByeGpzXzEuUmVwbGF5U3ViamVjdCgxKTtcclxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWRHVjRkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltTnZiblJsZUhRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEJRVUZCTEN0Q1FVRnBSRHRCUVVWcVJDd3dRMEZCZFVNN1FVRkZka01zT0VOQlFUSkRPMEZCUlRORExESkRRVUV5UXp0QlFVTXpReXg1UTBGQmMwUTdRVUZEZEVRc2RVTkJRVzlETzBGQlEzQkRMRzlGUVVGblJUdEJRVU5vUlN3NFJFRkJNa1E3UVVGRE0wUXNNRVJCUVhWRU8wRkJSWFpFTEhOR1FVRnpTRHRCUVVOMFNDeHpSa0ZCYzBnN1FVRkRkRWdzT0VWQlFUSkZPMEZCUlRORkxEaEVRVUU0UkR0QlFVTTVSQ3d3UlVGQmMwVTdRVUZEZEVVc2QwUkJRWEZFTzBGQlEzSkVMSGRFUVVGeFJEdEJRVU55UkN4cFJVRkJPRVE3UVVGRE9VUXNiVVZCUVdkRk8wRkJRMmhGTERaRVFVRXdSRHRCUVVNeFJDdzJSRUZCTUVRN1FVRkRNVVFzYlVWQlFXZEZPMEZCUTJoRkxIRkZRVUZyUlR0QlFVTnNSU3cyUkVGQk1FUTdRVUZETVVRc2MwUkJRVzFFTzBGQlRXNUVPMGxCV1VVc1dVRkJXU3hKUVVFMlFpeEZRVUZWTEZWQlFXdENMRTlCUVU4c1EwRkJReXhqUVVGak8xRkJRWGhETEZsQlFVOHNSMEZCVUN4UFFVRlBMRU5CUVdsRE8xRkJRM3BHTEVsQlFVa3NTVUZCU1N4RlFVRkZPMWxCUTFJc1NVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVWQlFVVTdaMEpCUXpWQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRkRVFzU1VGQlNTeEZRVUZGTEZsQlFWa3NZVUZCWVN4RlFVRkZPMjlDUVVNdlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRwUWtGRGFrSTdjVUpCUVUwN2IwSkJRMHdzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4M1EwRkJkME1zUTBGQlF5eERRVUZETzJsQ1FVTXpSRHRoUVVOR08ybENRVUZOTzJkQ1FVTk1MRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzJGQlEyNUNPMU5CUTBZN1lVRkJUVHRaUVVOTUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEdsQ1FVRkxMRVZCUVVVc1MwRkJTeXhEUVVGclFpeERRVUZETzFsQlEyeEdMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEzQkVPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZMR2xDUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eHBRa0ZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hwUWtGQlN5eERRVUZETEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRekZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU14UWl4TlFVRk5MRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6ZEVMRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETTBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEdsQ1FVRlBMRU5CUVRKQ0xFbEJRVWtzUlVGQlJTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGFFWTdZVUZCVFR0WlFVTk1MRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RFFVRXlRaXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEYkVVN1VVRkRSQ3hQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRnlRMDBzVFVGQlRTeExRVUZMTEZGQlFWRTdVVUZEZUVJc1QwRkJUeXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFXOURSQ3hKUVVGWExFMUJRVTA3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVU5FTEVsQlFWY3NVVUZCVVR0UlFVTnFRaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVU5OTEUxQlFVMHNRMEZCUXl4SFFVRXJRenRSUVVNelJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUTAwc1VVRkJVU3hEUVVGRExFVkJRVGhETzFGQlF6VkVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSVUZCUlN4WlFVRlpMR2xDUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYmtVc1EwRkJRenRKUVVOWkxFbEJRVWtzUTBGQlF5eEhRVUZYT3p0WlFVTXpRaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEhOQ1FVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEyeEVMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4elFrRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hQUVVGUExFbEJRVWtzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hEUVVGRE8wdEJRVUU3U1VGRFRTeFJRVUZSTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZTeEZRVUZGTEV0QlFUaERMRVZCUVVVc1dVRkJjVVE3VVVGRGFrc3NUMEZCVHl4SlFVRkpMRzlDUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkROMFFzUTBGQlF6dEpRVU5OTEUxQlFVMDdVVUZEV0N4UFFVRlBMRWxCUVVrc1pVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJRMDBzU1VGQlNTeERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeExRVUU0UXl4RlFVRkZMRmxCUVhGRU8xRkJRemRLTEU5QlFVOHNTVUZCU1N4WFFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdTVUZEZWtRc1EwRkJRenRKUVVOTkxHTkJRV01zUTBGQlF5eExRVUZaTEVWQlFVVXNTMEZCYVVNN1VVRkRia1VzVDBGQlR5eEpRVUZKTEhWQ1FVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzWTBGQll5eERRVUZETEV0QlFWa3NSVUZCUlN4TFFVRnBRenRSUVVOdVJTeFBRVUZQTEVsQlFVa3NkVUpCUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGRFRTeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZTeEZRVUZGTEVsQlFWVTdVVUZEY2tVc1QwRkJUeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBsQlEwMHNZVUZCWVN4RFFVRkRMRWxCUVdsQ0xFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4TFFVRmhMRVZCUVVVc1RVRkJZenRSUVVONlJpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRGhDUVVGaExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRiRUlzVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRVzlETzFGQlF5OURMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzWVVGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOc1FpeFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkRXU3hMUVVGTExFTkJRVU1zU1VGQldUczdXVUZETjBJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeGhRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkROVUlzVFVGQlRTeFBRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRGVrUXNSMEZCUnl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnVRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEU5QlFVOHNRMEZCUXp0WlFVTTFRaXhQUVVGUExFZEJRVWNzUTBGQlF6dFJRVU5pTEVOQlFVTTdTMEZCUVR0SlFVZE5MRTFCUVUwc1EwRkJReXhGUVVGclFpeEZRVUZGTEVWQlFWVXNSVUZCUlN4RlFVRlhPMUZCUTNaRUxFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlN4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGVrWXNUMEZCVHl4SlFVRkpMR1ZCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVVkTkxFOUJRVThzUTBGQlF5eEZRVUZyUWl4RlFVRkZMRVZCUVd0Q0xFVkJRVVVzUlVGQlZ5eEZRVUZGTEVWQlFWYzdVVUZETjBVc1NVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyWXNUVUZCVFN4VFFVRlRMRWRCUVVjc1JVRkJSU3haUVVGWkxHRkJRVXNzUTBGQlF6dFJRVU4wUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhGUVVGRkxGbEJRVmtzWVVGQlN5eERRVUZETzFGQlEzUkRMRWxCUVVrc1UwRkJVeXhKUVVGSkxGTkJRVk1zUlVGQlJUdFpRVU14UWl4TFFVRkxMRWRCUVVjc1JVRkJSU3hQUVVGUExFVkJRVVVzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRUUVVOMFF6dGhRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRk5CUVZNc1NVRkJTU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU53UXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1UwRkROVU03VVVGRFJDeFBRVUZQTEVsQlFVa3NhVUpCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVVkTkxFbEJRVWtzUTBGQlF5eEZRVUZyUWl4RlFVRkZMRVZCUVd0Q0xFVkJRVVVzUlVGQlZ5eEZRVUZGTEVWQlFWYzdVVUZETVVVc1NVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyWXNUVUZCVFN4VFFVRlRMRWRCUVVjc1JVRkJSU3haUVVGWkxHRkJRVXNzUTBGQlF6dFJRVU4wUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhGUVVGRkxGbEJRVmtzWVVGQlN5eERRVUZETzFGQlEzUkRMRWxCUVVrc1UwRkJVeXhKUVVGSkxGTkJRVk1zUlVGQlJUdFpRVU14UWl4TFFVRkxMRWRCUVVjc1JVRkJSU3hQUVVGUExFVkJRVVVzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRUUVVOMFF6dGhRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRk5CUVZNc1NVRkJTU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU53UXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1UwRkROVU03VVVGRFJDeFBRVUZQTEVsQlFVa3NWMEZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUTAwc1NVRkJTU3hEUVVGRExFTkJRV2RDTEVWQlFVVXNWVUZCYlVJN1VVRkRMME1zVFVGQlRTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU03VVVGRGFFTXNUMEZCVHl4SlFVRkpMRmRCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVOTkxFOUJRVThzUTBGQlF5eE5RVUZsTzFGQlF6VkNMRTFCUVUwc1MwRkJTeXhIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEZWtJc1QwRkJUeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnhETEVOQlFVTTdTVUZEVFN4UlFVRlJMRU5CUVVNc1RVRkJaVHRSUVVNM1FpeE5RVUZOTEV0QlFVc3NSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNTVUZCU1N4dFFrRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJUVTBzU1VGQlNTeERRVUZETEVWQlFYZENMRVZCUVVVc1JVRkJiVUlzUlVGQlJTeEZRVUZYTEVWQlFVVXNSVUZCYlVJc1JVRkJSU3hGUVVGdFFpeEZRVUZGTEVWQlFWYzdVVUZETTBnc1RVRkJUU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEycENMRWxCUVVrc1JVRkJSU3haUVVGWkxGTkJRVWNzUlVGQlJUdFpRVU55UWl4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRMMElzU1VGQlNTeEZRVUZGTEZsQlFWa3NZVUZCU3l4RlFVRkZPMmRDUVVOMlFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yRkJRM0pDTzJsQ1FVRk5PMmRDUVVOTUxFbEJRVWtzUlVGQlJTeExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkRjRUlzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRwUWtGRGJFSTdaMEpCUTBRc1NVRkJTU3hGUVVGRkxFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTndRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmxDUVVOc1FqdGhRVU5HTzFOQlEwWTdZVUZCVFN4SlFVRkpMRVZCUVVVc1dVRkJXU3hoUVVGTExFVkJRVVU3V1VGRE9VSXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU5zUWl4SlFVRkpMRVZCUVVVc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlEzQkNMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdZVUZEY2tJN1dVRkRSQ3hKUVVGSkxFVkJRVVVzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUTNCQ0xFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1lVRkRkRUk3V1VGRFJDeEpRVUZKTEVWQlFVVXNXVUZCV1N4aFFVRkxMRVZCUVVVN1owSkJRM1pDTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WVVGRGNrSTdhVUpCUVUwN1owSkJRMHdzU1VGQlNTeEZRVUZGTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVOd1FpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8ybENRVU5zUWp0blFrRkRSQ3hKUVVGSkxFVkJRVVVzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUTNCQ0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN2FVSkJRMnhDTzJGQlEwWTdVMEZEUmp0aFFVRk5PMWxCUTB3c1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTm9RaXhKUVVGSkxFVkJRVVVzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUTNCQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1lVRkRha0k3V1VGRFJDeEpRVUZKTEVWQlFVVXNTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRM0JDTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WVVGRGNrSTdXVUZEUkN4SlFVRkpMRVZCUVVVc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlEzQkNMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdZVUZEZEVJN1dVRkRSQ3hKUVVGSkxFVkJRVVVzV1VGQldTeGhRVUZMTEVWQlFVVTdaMEpCUTNaQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1lVRkRja0k3YVVKQlFVMDdaMEpCUTB3c1NVRkJTU3hGUVVGRkxFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTndRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmxDUVVOc1FqdG5Ra0ZEUkN4SlFVRkpMRVZCUVVVc1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlEzQkNMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdhVUpCUTJ4Q08yRkJRMFk3VTBGRFJqdFJRVU5FTEU5QlFVOHNTVUZCU1N4WFFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OUNMRU5CUVVNN1NVRkhUU3hKUVVGSkxFTkJRVU1zVDBGQmMwSXNSVUZCUlN4RlFVRnJRaXhGUVVGRkxFVkJRVmM3VVVGRGFrVXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUTNaRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NWMEZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNURMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRFdDeERRVUZET3p0QlFTOU5ZU3h6UWtGQll5eEhRVUZYTEUxQlFVMHNRMEZCUXp0QlFVa3ZRaXgzUWtGQlowSXNSMEZCUnl4SlFVRkpMRzlDUVVGaExFTkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZNYkVVc01FSkJhVTVESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRleHQudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUnhcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZDNfaW50ZXJwb2xhdGVfMSA9IHJlcXVpcmUoXCJkMy1pbnRlcnBvbGF0ZVwiKTtcclxuY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9ICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3gocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgcGFyc2VGbG9hdCh0b2tzWzJdKSwgcGFyc2VGbG9hdCh0b2tzWzNdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzWCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NZID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1dpZHRoID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1syXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0hlaWdodCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbM10pO1xyXG4gICAgICAgICAgICBpZiAoY3NzWCAhPT0gbnVsbCAmJiBjc3NZICE9PSBudWxsICYmIGNzc1dpZHRoICE9PSBudWxsICYmIGNzc0hlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3gocGFyc2VGbG9hdChjc3NYKSwgcGFyc2VGbG9hdChjc3NZKSwgcGFyc2VGbG9hdChjc3NXaWR0aCksIHBhcnNlRmxvYXQoY3NzSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJveCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIG92ZXJyaWRlLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCBvdmVycmlkZS55LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1syXSwgb3ZlcnJpZGUud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzNdLCBvdmVycmlkZS5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCB0aGlzLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCB0aGlzLnkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzJdLCB0aGlzLndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1szXSwgdGhpcy5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0b3IoZnJvbSkge1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBkM19pbnRlcnBvbGF0ZV8xLmludGVycG9sYXRlKGZyb20udG9TdHJpbmcoKSwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gKHQpID0+IHRoaXMucGFyc2UoZnVuYyh0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Cb3ggPSBCb3g7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltOTRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVltOTRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNiVVJCUVRaRE8wRkJTemRETzBsQlEwVXNXVUZCYlVJc1EwRkJVeXhGUVVGVExFTkJRVk1zUlVGQlV5eExRVUZoTEVWQlFWTXNUVUZCWXp0UlFVRjRSU3hOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZSTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJVVHRSUVVGVExGVkJRVXNzUjBGQlRDeExRVUZMTEVOQlFWRTdVVUZCVXl4WFFVRk5MRWRCUVU0c1RVRkJUU3hEUVVGUk8wbEJRVWNzUTBGQlF6dEpRVU40Uml4UlFVRlJPMUZCUTJJc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRKUVVNMVJDeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOb1FpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRTlCUVU4c1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRjRWM3WVVGQlRUdFpRVU5NTEU5QlFVOHNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkROVUk3U1VGRFNDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVcxQ0xFVkJRVVVzU1VGQldUdFJRVU14UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRja0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1JDeEpRVUZKTEVsQlFVa3NTMEZCU3l4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzU1VGQlNTeFJRVUZSTEV0QlFVc3NTVUZCU1N4SlFVRkpMRk5CUVZNc1MwRkJTeXhKUVVGSkxFVkJRVVU3WjBKQlF6ZEZMRTlCUVU4c1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYWtjN2FVSkJRVTA3WjBKQlEwd3NUMEZCVHl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNMVFqdFRRVU5HTzJGQlFVMDdXVUZEVEN4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJReTlETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRmpPMUZCUXpGRUxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE4wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU55UWl4SlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6RkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRja1FzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU55UkN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTNwRUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVNelJEdHBRa0ZCVFR0blFrRkRUQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMnBFTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtRc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOeVJDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGRrUTdVMEZEUmp0aFFVRk5PMWxCUTB3c1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTXhRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU5xUkR0cFFrRkJUVHRuUWtGRFRDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTTNRenRUUVVOR08wbEJRMGdzUTBGQlF6dEpRVU5OTEZsQlFWa3NRMEZCUXl4SlFVRlRPMUZCUXpOQ0xFMUJRVTBzU1VGQlNTeEhRVUZITERSQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRek5FTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCZGtSRUxHdENRWFZFUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvYm94LnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkM19pbnRlcnBvbGF0ZV8xID0gcmVxdWlyZShcImQzLWludGVycG9sYXRlXCIpO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0sJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoYmFzZV8xLl9MZW5ndGhQYXJzZSh0b2tzWzBdKSwgYmFzZV8xLl9MZW5ndGhQYXJzZSh0b2tzWzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NYID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1swXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1kgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzFdKTtcclxuICAgICAgICAgICAgaWYgKGNzc1ggIT09IG51bGwgJiYgY3NzWSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludChiYXNlXzEuX0xlbmd0aFBhcnNlKGNzc1gpLCBiYXNlXzEuX0xlbmd0aFBhcnNlKGNzc1kpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCBvdmVycmlkZS54LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1sxXSwgb3ZlcnJpZGUueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHRoaXMueC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMV0sIHRoaXMueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRvcihmcm9tKSB7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGQzX2ludGVycG9sYXRlXzEuaW50ZXJwb2xhdGUoZnJvbS50b1N0cmluZygpLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiAodCkgPT4gdGhpcy5wYXJzZShmdW5jKHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvaW50ID0gUG9pbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiMmx1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEcxRVFVRTJRenRCUVVjM1F5eHBRMEZCT0VNN1FVRkZPVU03U1VGRFJTeFpRVUZ0UWl4RFFVRlRMRVZCUVZNc1EwRkJVenRSUVVFelFpeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlJPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQlVUdEpRVUZITEVOQlFVTTdTVUZETTBNc1VVRkJVVHRSUVVOaUxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzUlVGQlJUdFpRVU5vUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNiVUpCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4dFFrRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3WVVGQlRUdFpRVU5NTEU5QlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzaENPMGxCUTBnc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrN1VVRkRNVU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzSkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelF5eEpRVUZKTEVsQlFVa3NTMEZCU3l4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzUlVGQlJUdG5Ra0ZEYkVNc1QwRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eHRRa0ZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxHMUNRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNeFJEdHBRa0ZCVFR0blFrRkRUQ3hQUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVONFFqdFRRVU5HTzJGQlFVMDdXVUZEVEN4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJReTlETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRm5RanRSUVVNMVJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6ZENMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY2tJc1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTXhRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRM0pFTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU4wUkR0cFFrRkJUVHRuUWtGRFRDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEycEVMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnNSRHRUUVVOR08yRkJRVTA3V1VGRFRDeEpRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRekZDTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJwRU8ybENRVUZOTzJkQ1FVTk1MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRemRETzFOQlEwWTdTVUZEU0N4RFFVRkRPMGxCUTAwc1dVRkJXU3hEUVVGRExFbEJRVmM3VVVGRE4wSXNUVUZCVFN4SlFVRkpMRWRCUVVjc05FSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTFReXhEUVVGRE8wTkJRMFk3UVVGcVJFUXNjMEpCYVVSREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3BvaW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkaW1lbnNpb25fMSA9IHJlcXVpcmUoXCIuL2RpbWVuc2lvblwiKTtcclxuZXhwb3J0cy5fTGVuZ3RoUGFyc2UgPSAoY3NzKSA9PiB7XHJcbiAgICBjb25zdCBtID0gY3NzLm1hdGNoKC8oXFxkK3xcXGQrXFwuXFxkKykoXFx3K3wlKS9pKTtcclxuICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24ocGFyc2VGbG9hdChtWzFdKSwgbVsyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChjc3MpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbUZ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbUpoYzJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN3eVEwRkJkMGM3UVVGak0wWXNVVUZCUVN4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGWExFVkJRVlVzUlVGQlJUdEpRVU5zUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFTkJRVU03U1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8xRkJRMlFzVDBGQlR5eEpRVUZKTEhGQ1FVRlRMRU5CUVUwc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEyNUVPMGxCUTBRc1QwRkJUeXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZWtJc1EwRkJReXhEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2Jhc2UudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFNWR0RvY3VtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHJhdywgbWltZVR5cGUgPSBcImFwcGxpY2F0aW9uL3htbFwiKSB7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSAocmF3IGluc3RhbmNlb2YgRG9jdW1lbnQpID8gcmF3IDogU1ZHRG9jdW1lbnQuUEFSU0VSLnBhcnNlRnJvbVN0cmluZyhyYXcsIG1pbWVUeXBlKTtcclxuICAgICAgICBjb25zdCBhbGxEZWZzID0gQXJyYXkuZnJvbSh0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRlZnNcIikpO1xyXG4gICAgICAgIGFsbERlZnMuZm9yRWFjaCgoZGVmcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGVmcy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybURlZnMgPSBkZWZzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVmcyk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocm1EZWZzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmFkZERlZihybURlZnMuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICB9XHJcbn1cclxuU1ZHRG9jdW1lbnQuUEFSU0VSID0gbmV3IERPTVBhcnNlcigpO1xyXG5leHBvcnRzLlNWR0RvY3VtZW50ID0gU1ZHRG9jdW1lbnQ7XHJcbmV4cG9ydHMubWFrZVJlcXVlc3QgPSAobWV0aG9kLCB1cmwpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XHJcbiAgICAgICAgICAgICAgICBpZiAoeG1sICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4bWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHOWpkVzFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUprYjJOMWJXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJPMGxCUjBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEVkQlFYTkNMRVZCUVVVc1YwRkJiVUlzYVVKQlFXbENPMUZCUTNoR0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NRMEZCUXl4SFFVRkhMRmxCUVZrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRaUVVOMlFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVN1owSkJRMjVDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOcVJDeFBRVUZQTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZEYWtNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJaU3hEUVVGRExFTkJRVU03YVVKQlEyeEVPMkZCUTBZN1VVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZEUkN4SlFVRlhMRkZCUVZFN1VVRkRha0lzVDBGQlR5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRE4wVXNRMEZCUXpzN1FVRm9RbU1zYTBKQlFVMHNSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRE8wRkJSREZETEd0RFFXdENRenRCUVVWWkxGRkJRVUVzVjBGQlZ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJjVUlzUlVGQlJUdEpRVU0xUkN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMUZCUTNKRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkRha01zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkNMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEyaENMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFVkJRVVU3WjBKQlEzcERMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTTdaMEpCUXpWQ0xFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NSVUZCUlR0dlFrRkRhRUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOa08zRkNRVUZOTzI5Q1FVTk1MRTFCUVUwc1EwRkJRenQzUWtGRFRDeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTFCUVUwN2QwSkJRMnhDTEZWQlFWVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1ZVRkJWVHR4UWtGRE0wSXNRMEZCUXl4RFFVRkRPMmxDUVVOS08yRkJRMFk3VVVGRFNDeERRVUZETEVOQlFVTTdVVUZEUml4SFFVRkhMRU5CUVVNc1QwRkJUeXhIUVVGSExFZEJRVWNzUlVGQlJUdFpRVU5xUWl4TlFVRk5MRU5CUVVNN1owSkJRMHdzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4TlFVRk5PMmRDUVVOc1FpeFZRVUZWTEVWQlFVVXNSMEZCUnl4RFFVRkRMRlZCUVZVN1lVRkRNMElzUTBGQlF5eERRVUZETzFGQlEwd3NRMEZCUXl4RFFVRkRPMUZCUTBZc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEySXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRUQ3hEUVVGRExFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RvY3VtZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkaW1lbnNpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9hdHRyaWJ1dGVzL2RpbWVuc2lvblwiKTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2VsZW1lbnRcIik7XHJcbmNvbnN0IHBhaW50X3NlcnZlcl8xID0gcmVxdWlyZShcIi4uL3BhaW50LXNlcnZlclwiKTtcclxuY2xhc3MgU3RvcCBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIG9mZnNldCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInN0b3BcIiwge1xyXG4gICAgICAgICAgICBvZmZzZXQ6IG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24ob2Zmc2V0ICogMTAwLCBcIiVcIiksXHJcbiAgICAgICAgICAgIFwic3RvcC1jb2xvclwiOiBjb2xvcixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0b3AgPSBTdG9wO1xyXG5jbGFzcyBBYnN0cmFjdEdyYWRpZW50IGV4dGVuZHMgcGFpbnRfc2VydmVyXzEuQWJzdHJhY3RQYWludFNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBuYW1lLCBzdG9wcywgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBuYW1lLCBhdHRycyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZERlZih0aGlzKTtcclxuICAgICAgICBjb25zdCBzdG9wQXJyID0gW107XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcHMpLmZvckVhY2gob2Zmc2V0ID0+IHtcclxuICAgICAgICAgICAgc3RvcEFyci5wdXNoKG5ldyBTdG9wKGNvbnRleHQsIE51bWJlcihvZmZzZXQpLCBzdG9wc1tvZmZzZXRdKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcEFyci5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9mZnNldCAtIGIub2Zmc2V0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3BBcnIuZm9yRWFjaChzID0+IHRoaXMuYWRkKHMpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFic3RyYWN0R3JhZGllbnQgPSBBYnN0cmFjdEdyYWRpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laM0poWkdsbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKbmNtRmthV1Z1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERaRVFVRnpSVHRCUVZGMFJTdzRRMEZCTWtNN1FVRkZNME1zYTBSQlFYTkVPMEZCTUVKMFJDeFZRVUZyUWl4VFFVRlJMR2xDUVVFNFJEdEpRVU4wUml4WlFVRlpMRTlCUVdkQ0xFVkJRVk1zVFVGQll5eEZRVUZGTEV0QlFYVkRPMUZCUXpGR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZPMWxCUTNKQ0xFMUJRVTBzUlVGQlJTeEpRVUZKTEhGQ1FVRlRMRU5CUVUwc1RVRkJUU3hIUVVGSExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdXVUZETjBNc1dVRkJXU3hGUVVGRkxFdEJRVXM3VTBGRGNFSXNRMEZCUXl4RFFVRkRPMUZCU21kRExGZEJRVTBzUjBGQlRpeE5RVUZOTEVOQlFWRTdTVUZMYmtRc1EwRkJRenREUVVOR08wRkJVRVFzYjBKQlQwTTdRVUZGUkN4elFrRkJOa2NzVTBGQlVTeHJRMEZCTUVNN1NVRkROMG9zV1VGQldTeFBRVUZuUWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hMUVVGWkxFVkJRVVVzUzBGQk9FUTdVVUZEZEVnc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE1VSXNUVUZCVFN4UFFVRlBMRWRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRek5DTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTJ4RExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycEZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UWl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXp0RFFVTkdPMEZCWWtRc05FTkJZVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBBYnN0cmFjdFBhaW50U2VydmVyIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RQYWludFNlcnZlciA9IEFic3RyYWN0UGFpbnRTZXJ2ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRnBiblF0YzJWeWRtVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNHRnBiblF0YzJWeWRtVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjMFJCUVRCRU8wRkJSVEZFTEhsQ1FVRjFSaXhUUVVGUkxITkRRVUVyUXp0RFFVRkhPMEZCUVdwS0xHdEVRVUZwU2lKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhaW50X3NlcnZlcl8xID0gcmVxdWlyZShcIi4uL3BhaW50LXNlcnZlclwiKTtcclxuY2xhc3MgUGF0dGVybiBleHRlbmRzIHBhaW50X3NlcnZlcl8xLkFic3RyYWN0UGFpbnRTZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCA9ICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gMCA6IHcsIHggPSAwLCB5ID0gMCwgdmlldykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gdyA6IFwicGF0dGVyblwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKCEodyBpbnN0YW5jZW9mIFNWR1BhdHRlcm5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInBhdHRlcm5Vbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvbmUoZGVlcCA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhdHRlcm4odGhpcy5jb250ZXh0LCBzdXBlci5jbG9uZU5vZGUoZGVlcCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0dGVybiA9IFBhdHRlcm47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBkR1Z5Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkJoZEhSbGNtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGWFFTeHJSRUZCYzBRN1FVRjVRblJFTEdGQlFYRkNMRk5CUVZFc2EwTkJRVEJFTzBsQlIzSkdMRmxCUVcxQ0xFOUJRV2RDTEVWQlFVVXNRMEZCTmtJc1JVRkJSU3hKUVVGWkxFTkJRVU1zUTBGQlF5eFpRVUZaTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZVN1VVRkRhRXNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUkdoRUxGbEJRVThzUjBGQlVDeFBRVUZQTEVOQlFWTTdVVUZGYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMR2xDUVVGcFFpeERRVUZETEVWQlFVVTdXVUZEY2tNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRPVUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVUlzU1VGQlNTeEpRVUZKTEVWQlFVVTdaMEpCUTFJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRjRU03YVVKQlFVMDdaMEpCUTB3c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dGhRVU55UkR0VFFVTkdPMGxCUTBnc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eFBRVUZuUWl4SlFVRkpPMUZCUXk5Q0xFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dERRVU5HTzBGQmNrSkVMREJDUVhGQ1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuLnRzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmlzQXR0cmlidXRlID0gKG9iaikgPT4ge1xyXG4gICAgcmV0dXJuIG9iaiAmJiAodHlwZW9mIG9ialtcImludGVycG9sYXRvclwiXSA9PT0gXCJmdW5jdGlvblwiKSAmJiAodHlwZW9mIG9ialtcInBhcnNlXCJdID09PSBcImZ1bmN0aW9uXCIpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVlYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCWTJFc1VVRkJRU3hYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUY1UWl4RlFVRjVRaXhGUVVGRk8wbEJRemxGTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenRCUVVOd1J5eERRVUZETEVOQlFVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcclxuY29uc3QgaWRfMSA9IHJlcXVpcmUoXCIuLi9pZFwiKTtcclxuY2xhc3MgUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWUgPSByeGpzXzEuT2JzZXJ2YWJsZS5pbnRlcnZhbCgwLCByeGpzXzEuU2NoZWR1bGVyLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzID0gbmV3IHJ4anNfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlSW50ZXJwb2xhdGlvbnMgPSB7fTtcclxuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzLmJ1ZmZlcldoZW4oKCkgPT4gdGhpcy5fYW5pbWF0aW9uRnJhbWUpLnN1YnNjcmliZSgodXBkYXRlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgdXBkYXRlcy5mb3JFYWNoKCh7IGVsLCBhdHRyaWJ1dGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwucmVuZGVyQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRpb24gPSB0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmluYWxSZW5kZXIgPSBub3cgPiAoaW50ZXJwb2xhdGlvbi5zdGFydCArIGludGVycG9sYXRpb24uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IChmaW5hbFJlbmRlcikgPyAxIDogaW50ZXJwb2xhdGlvbi5lYXNpbmcoKG5vdyAtIGludGVycG9sYXRpb24uc3RhcnQpIC8gaW50ZXJwb2xhdGlvbi5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gYXR0cmlidXRlLnZhbCh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uLmVsLnJlbmRlckF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgdmFsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsUmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5yZXNvbHZlKG5vdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBSZW5kZXJlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBxdWV1ZUF0dHJpYnV0ZVVwZGF0ZShhMSwgYTIsIGEzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhMiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzLm5leHQoeyBlbDogYTEsIGF0dHJpYnV0ZTogeyBuYW1lOiBhMiwgdmFsOiBhMyB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYTIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZVVwZGF0ZXMubmV4dCh7IGVsOiBhMSwgYXR0cmlidXRlOiB7IG5hbWUsIHZhbDogYTJbbmFtZV0gfSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJBdHRyaWJ1dGVJbnRlcnBvbGF0aW9uKGVsLCBhdHRyLCB2YWwsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gaWRfMS5yYW5kb21TaG9ydFN0cmluZ0lkKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbeyBuYW1lOiBhdHRyLCB2YWwgfV07XHJcbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zW2tleV0gPSB7IGVsLCBhdHRyaWJ1dGVzLCBzdGFydCwgZHVyYXRpb24sIGVhc2luZywgcmVzb2x2ZSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblJlbmRlcmVyLl9pbnN0YW5jZSA9IG5ldyBSZW5kZXJlcigpO1xyXG5leHBvcnRzLlJlbmRlcmVyID0gUmVuZGVyZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVnVaR1Z5WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp5Wlc1a1pYSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVZEJMQ3RDUVVGelJEdEJRVVYwUkN3NFFrRkJORU03UVVFNFFqVkRPMGxCVVVVN1VVRklVU3h2UWtGQlpTeEhRVUZITEdsQ1FVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeG5Ra0ZCVXl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8xRkJRMjVGTEhOQ1FVRnBRaXhIUVVGSExFbEJRVWtzWTBGQlR5eEZRVUZ2UkN4RFFVRkRPMUZCUTNCR0xEWkNRVUYzUWl4SFFVRTJSU3hGUVVGRkxFTkJRVU03VVVGRk9VY3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRGJFWXNUVUZCVFN4SFFVRkhMRWRCUVVjc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlF6bENMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1JVRkJSU3hGUVVGRk8yZENRVU53UXl4RlFVRkZMRU5CUVVNc1pVRkJaU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0JFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRGVrUXNUVUZCVFN4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU42UkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4SFFVRkhMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtVc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEzcEhMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVN2IwSkJRemRETEUxQlFVMHNSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpkQ0xHRkJRV0VzUTBGQlF5eEZRVUZGTEVOQlFVTXNaVUZCWlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNoRUxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTklMRWxCUVVrc1YwRkJWeXhGUVVGRk8yOUNRVU5tTEU5QlFVOHNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVNeFF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU0xUWp0WlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCTTBKTkxFMUJRVTBzUTBGQlF5eFhRVUZYTzFGQlEzWkNMRTlCUVU4c1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCTkVKTkxHOUNRVUZ2UWl4RFFVRnRSU3hGUVVGTExFVkJRVVVzUlVGQmMwSXNSVUZCUlN4RlFVRmhPMUZCUTNoSkxFbEJRVWtzVDBGQlR5eEZRVUZGTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU16UlR0aFFVRk5PMWxCUTB3c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJUdG5Ra0ZETDBJc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNVMEZCVXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE9VVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRTanRKUVVOSUxFTkJRVU03U1VGRFRTdzRRa0ZCT0VJc1EwRkJiVVVzUlVGQlN5eEZRVUZGTEVsQlFVOHNSVUZCUlN4SFFVRTBRaXhGUVVGRkxGRkJRV2RDTEVWQlFVVXNUVUZCYzBJN1VVRkROVXdzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRk8xbEJRemRDTEUxQlFVMHNSMEZCUnl4SFFVRkhMSGRDUVVGdFFpeEZRVUZGTEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJoRExFMUJRVTBzVlVGQlZTeEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZWtNc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTTFSaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdPMEZCTTBOakxHdENRVUZUTEVkQlFVY3NTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenRCUVVvMVF5dzBRa0ZuUkVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vcmVuZGVyZXIudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmFuZG9tU2hvcnRTdHJpbmdJZCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwWkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5oTEZGQlFVRXNiVUpCUVcxQ0xFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lkLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkM19pbnRlcnBvbGF0ZV8xID0gcmVxdWlyZShcImQzLWludGVycG9sYXRlXCIpO1xyXG5jbGFzcyBOdW1iZXJXcmFwcGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG4gPSAwKSB7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJXcmFwcGVyKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlcldyYXBwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGUgOiB0aGlzKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRvcihmcm9tKSB7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGQzX2ludGVycG9sYXRlXzEuaW50ZXJwb2xhdGUoZnJvbS50b1N0cmluZygpLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiAodCkgPT4gdGhpcy5wYXJzZShmdW5jKHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlcldyYXBwZXIgPSBOdW1iZXJXcmFwcGVyO1xyXG5jbGFzcyBBcnJheVdyYXBwZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXJyID0gW10pIHtcclxuICAgICAgICB0aGlzLmFyciA9IGFycjtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyci5qb2luKFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiXFx0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5V3JhcHBlcih0aGlzLmFyci5tYXAoKGEsIGkpID0+IGEucGFyc2UoKGkgPj0gdG9rcy5sZW5ndGgpID8gbnVsbCA6IHRva3NbaV0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5V3JhcHBlcih0aGlzLmFyci5tYXAoYSA9PiBhLnBhcnNlKG51bGwpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCA/IG92ZXJyaWRlIDogdGhpcykudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0b3IoZnJvbSkge1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBkM19pbnRlcnBvbGF0ZV8xLmludGVycG9sYXRlKGZyb20udG9TdHJpbmcoKSwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gKHQpID0+IHRoaXMucGFyc2UoZnVuYyh0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheVdyYXBwZXIgPSBBcnJheVdyYXBwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWQzSmhjSEJsY25NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUozY21Gd2NHVnljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRzFFUVVFMlF6dEJRVXMzUXp0SlFVTkZMRmxCUVcxQ0xFbEJRVmtzUTBGQlF6dFJRVUZpTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1NVRkJSeXhEUVVGRE8wbEJRemRDTEZGQlFWRTdVVUZEWWl4UFFVRlBMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0UlFVTTNRaXhKUVVGSkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZEYUVJc1QwRkJUeXhKUVVGSkxHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNelF6dGhRVUZOTzFsQlEwd3NUMEZCVHl4SlFVRkpMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xTkJRelZDTzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdVVUZETVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVhkQ08xRkJRM0JGTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM0JHTEVOQlFVTTdTVUZEVFN4WlFVRlpMRU5CUVVNc1NVRkJORUk3VVVGRE9VTXNUVUZCVFN4SlFVRkpMRWRCUVVjc05FSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTFReXhEUVVGRE8wTkJRMFk3UVVGMFFrUXNjME5CYzBKRE8wRkJSVVE3U1VGRFJTeFpRVUZ0UWl4TlFVRlhMRVZCUVVVN1VVRkJZaXhSUVVGSExFZEJRVWdzUjBGQlJ5eERRVUZWTzBsQlFVY3NRMEZCUXp0SlFVTTNRaXhSUVVGUk8xRkJRMklzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzUlVGQlJUdFpRVU5vUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkQ0xFOUJRVThzU1VGQlNTeFpRVUZaTEVOQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRiRWM3WVVGQlRUdFpRVU5NTEU5QlFVOHNTVUZCU1N4WlFVRlpMRU5CUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNNVJEdEpRVU5JTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFGQlF6RkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRXdRanRSUVVOMFJTeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOd1JpeERRVUZETzBsQlEwMHNXVUZCV1N4RFFVRkRMRWxCUVhGQ08xRkJRM1pETEUxQlFVMHNTVUZCU1N4SFFVRkhMRFJDUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6TkVMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJka0pFTEc5RFFYVkNReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy93cmFwcGVycy50c1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgQ2xpcFBhdGggZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJjbGlwUGF0aFwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnRVbml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza0NvbnRlbnRVbml0c1wiLCBjb250ZW50VW5pdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNsaXBQYXRoID0gQ2xpcFBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyeHBjQzF3WVhSb0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTJ4cGNDMXdZWFJvTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYzBSQlFUQkVPMEZCYTBJeFJDeGpRVUZ6UWl4VFFVRlJMSE5EUVVFd1JEdEpRVU4wUml4WlFVRnRRaXhQUVVGblFpeEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeExRVUU0UXl4RlFVRkZMRmxCUVhGRU8xRkJRM2hNTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRVZpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRlRPMUZCUldwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOdVFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU12UWp0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU51UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTm9RenRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTnVRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNelFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOdVFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU16UWp0UlFVTkVMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU4yUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGZEJRVmNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTjJRenRSUVVORUxFbEJRVWtzV1VGQldTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTTVRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzFOQlEzSkVPMGxCUTBnc1EwRkJRenREUVVOR08wRkJka0pFTERSQ1FYVkNReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL2NsaXAtcGF0aC50c1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgTWFya2VyIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcIm1hcmtlclwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYXJrZXIgPSBNYXJrZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnlhMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liV0Z5YTJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc2MwUkJRVzlHTzBGQmIwSndSaXhaUVVGdlFpeFRRVUZSTEhORFFVRXdSRHRKUVVOd1JpeFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJOa1E3VVVGRGVrWXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenREUVVOR08wRkJTa1FzZDBKQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlci50c1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgTWFzayBleHRlbmRzIG5vbl9yZW5kZXJhYmxlXzEuQWJzdHJhY3ROb25SZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcIm1hc2tcIik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkRGVmKHRoaXMpO1xyXG4gICAgICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5pdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm1hc2tVbml0c1wiLCB1bml0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50VW5pdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm1hc2tDb250ZW50VW5pdHNcIiwgY29udGVudFVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYXNrID0gTWFzaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGemF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW0xaGMyc3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSlFTeHpSRUZCTUVRN1FVRnBRakZFTEZWQlFXdENMRk5CUVZFc2MwTkJRWE5FTzBsQlF6bEZMRmxCUVcxQ0xFOUJRV2RDTEVWQlFVVXNRMEZCVlN4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZTeEZRVUZGTEV0QlFUaERMRVZCUVVVc1dVRkJjVVE3VVVGRGVFd3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVJPTEZsQlFVOHNSMEZCVUN4UFFVRlBMRU5CUVZNN1VVRkZha01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRMjVDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF5OUNPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlEyNUNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJoRE8xRkJRMFFzU1VGQlNTeERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUTI1Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5DTzFGQlEwUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRMjVDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkNPMUZCUTBRc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlEzWkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTNaRE8xRkJRMFFzU1VGQlNTeFpRVUZaTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdVMEZEY2tRN1NVRkRTQ3hEUVVGRE8wTkJRMFk3UVVGMlFrUXNiMEpCZFVKREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvbWFzay50c1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZ3JhZGllbnRfMSA9IHJlcXVpcmUoXCIuLi9ncmFkaWVudFwiKTtcclxuY2xhc3MgTGluZWFyR3JhZGllbnQgZXh0ZW5kcyBncmFkaWVudF8xLkFic3RyYWN0R3JhZGllbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgc3RvcHMsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJsaW5lYXJHcmFkaWVudFwiLCBzdG9wcywgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTGluZWFyR3JhZGllbnQgPSBMaW5lYXJHcmFkaWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkdsdVpXRnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJHbHVaV0Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzTUVOQlFUSkZPMEZCVnpORkxHOUNRVUUwUWl4VFFVRlJMREpDUVVGeFJUdEpRVU4yUnl4WlFVRlpMRTlCUVdkQ0xFVkJRVVVzUzBGQldTeEZRVUZGTEV0QlFYRkZPMUZCUXk5SExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03UTBGRFJqdEJRVXBFTEhkRFFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2xpbmVhci50c1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZ3JhZGllbnRfMSA9IHJlcXVpcmUoXCIuLi9ncmFkaWVudFwiKTtcclxuY2xhc3MgUmFkaWFsR3JhZGllbnQgZXh0ZW5kcyBncmFkaWVudF8xLkFic3RyYWN0R3JhZGllbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgc3RvcHMsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJyYWRpYWxHcmFkaWVudFwiLCBzdG9wcywgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUmFkaWFsR3JhZGllbnQgPSBSYWRpYWxHcmFkaWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21Ga2FXRnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNtRmthV0ZzTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzTUVOQlFUSkZPMEZCV1RORkxHOUNRVUUwUWl4VFFVRlJMREpDUVVGeFJUdEpRVU4yUnl4WlFVRlpMRTlCUVdkQ0xFVkJRVVVzUzBGQldTeEZRVUZGTEV0QlFYRkZPMUZCUXk5SExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03UTBGRFJqdEJRVXBFTEhkRFFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL3JhZGlhbC50c1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29udGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRleHRcIik7XHJcbmNvbnN0IGRvY3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZG9jdW1lbnRcIik7XHJcbmNvbnN0IGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50XCIpO1xyXG5jb25zdCBncm91cF8xID0gcmVxdWlyZShcIi4vZ3JvdXBcIik7XHJcbmNsYXNzIEV4dGVybmFsU1ZHIGV4dGVuZHMgZ3JvdXBfMS5Hcm91cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkb2MsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgYXR0cnMpO1xyXG4gICAgICAgIGRvYy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSBjb250ZXh0LndpbmRvdy5kb2N1bWVudC5pbXBvcnROb2RlKGNoaWxkLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQoaW1wb3J0ZWROb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkV4dGVybmFsU1ZHID0gRXh0ZXJuYWxTVkc7XHJcbmZ1bmN0aW9uIGJ1aWxkRXh0ZXJuYWxDb21wb25lbnRDbGFzcyh1cmwsIG9yaWdpbiA9IHsgeDogMCwgeTogMCB9KSB7XHJcbiAgICBjb25zdCB4bWxEb2N1bWVudF9wID0gZG9jdW1lbnRfMS5tYWtlUmVxdWVzdChcIkdFVFwiLCB1cmwpO1xyXG4gICAgY29uc3QgY29udGV4dF9wID0gY29udGV4dF8xLkNvbnRleHQuY29udGV4dHMudGFrZSgxKS50b1Byb21pc2UoKTtcclxuICAgIGNvbnN0IGRvY19wID0gUHJvbWlzZS5hbGwoW2NvbnRleHRfcCwgeG1sRG9jdW1lbnRfcF0pLnRoZW4oKFtjb250ZXh0LCB4bWxdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBkb2N1bWVudF8xLlNWR0RvY3VtZW50KGNvbnRleHQsIHhtbCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbXBvbmVudF8xLkNvbXBvbmVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9yaWdpbik7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gZG9jX3AudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2MuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSB0aGlzLmNvbnRleHQud2luZG93LmRvY3VtZW50LmltcG9ydE5vZGUoY2hpbGQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGltcG9ydGVkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zb3VyY2UtdXJsXCIsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmJ1aWxkRXh0ZXJuYWxDb21wb25lbnRDbGFzcyA9IGJ1aWxkRXh0ZXJuYWxDb21wb25lbnRDbGFzcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhoMFpYSnVZV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmxlSFJsY201aGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxESkRRVUYzUXp0QlFVTjRReXcyUTBGQk1FUTdRVUZGTVVRc01rTkJRWGRETzBGQlEzaERMRzFEUVVGblF6dEJRVVZvUXl4cFFrRkJlVUlzVTBGQlVTeGhRVUZMTzBsQlEzQkRMRmxCUVZrc1QwRkJaMElzUlVGQlJTeEhRVUZuUWl4RlFVRkZMRXRCUVhORE8xRkJRM0JHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGRFSXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlR0WlFVTTNRaXhOUVVGTkxGbEJRVmtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNKRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1VVRkRla0lzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRPME5CUTBZN1FVRlNSQ3hyUTBGUlF6dEJRVTlFTEhGRFFVRTBReXhIUVVGWExFVkJRVVVzVTBGQmJVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVTdTVUZEZUVjc1RVRkJUU3hoUVVGaExFZEJRVWNzYzBKQlFWY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE9VTXNUVUZCVFN4VFFVRlRMRWRCUVVjc2FVSkJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBsQlEzWkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlF6VkZMRTlCUVU4c1NVRkJTU3h6UWtGQlZ5eERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTklMRTlCUVU4c1MwRkJUU3hUUVVGUkxIRkNRVUZUTzFGQlJUVkNPMWxCUTBVc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVN1owSkJReTlDTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVTdiMEpCUXpkQ0xFMUJRVTBzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU14UlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTjZRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYkVRc1EwRkJRenRMUVVOR0xFTkJRVU03UVVGRFNpeERRVUZETzBGQmJrSkVMR3RGUVcxQ1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9leHRlcm5hbC50c1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWFzaW5nXzEgPSByZXF1aXJlKFwiLi4vLi4vYW5pbWF0aW9uL2Vhc2luZ1wiKTtcclxuY29uc3Qgcm90YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXR0cmlidXRlcy90cmFuc2Zvcm1zL3JvdGF0ZVwiKTtcclxuY29uc3Qgc2NhbGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2NhbGVcIik7XHJcbmNvbnN0IHRyYW5zbGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGVcIik7XHJcbmNvbnN0IGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0XCIpO1xyXG5jb25zdCBncm91cF8xID0gcmVxdWlyZShcIi4vZ3JvdXBcIik7XHJcbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIGdyb3VwXzEuR3JvdXAge1xyXG4gICAgY29uc3RydWN0b3Iob3JpZ2luLCBlYXNpbmcgPSBlYXNpbmdfMS5saW5lYXIpIHtcclxuICAgICAgICBzdXBlcihDb21wb25lbnQuY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5lYXNpbmcgPSBlYXNpbmc7XHJcbiAgICAgICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtcyA9IFtuZXcgdHJhbnNsYXRlXzEuVHJhbnNsYXRlX1RyYW5zZm9ybSgpLCBuZXcgcm90YXRlXzEuUm90YXRlX1RyYW5zZm9ybSgwKSwgbmV3IHNjYWxlXzEuU2NhbGVfVHJhbnNmb3JtKCldO1xyXG4gICAgICAgIGlmIChvcmlnaW4pIHtcclxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5wdXNoKG5ldyB0cmFuc2xhdGVfMS5UcmFuc2xhdGVfVHJhbnNmb3JtKC1vcmlnaW4ueCwgLW9yaWdpbi55KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybXMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBjb250ZXh0KCkge1xyXG4gICAgICAgIGlmICghQ29tcG9uZW50Ll9DT05URVhUKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIk5vIHN0YXRpYyBDb21wb25lbnQgY29udGV4dCBmb3VuZC4gU2V0IG9uZSBtYW51YWxseSwgb3Igc3Vic2NyaWJlIHRvIHRoZSBsYXRlc3QgY3JlYXRlZCBjb250ZXh0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5fQ09OVEVYVDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXQgY29udGV4dChjdHgpIHtcclxuICAgICAgICBpZiAoQ29tcG9uZW50Ll9DT05URVhUX1NVQlNDUklQVElPTikge1xyXG4gICAgICAgICAgICBDb21wb25lbnQuX0NPTlRFWFRfU1VCU0NSSVBUSU9OLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbXBvbmVudC5fQ09OVEVYVCA9IGN0eDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzdWJzY3JpYmVMYXRlc3RDb250ZXh0KCkge1xyXG4gICAgICAgIGlmIChDb21wb25lbnQuX0NPTlRFWFRfU1VCU0NSSVBUSU9OKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29tcG9uZW50Ll9DT05URVhUX1NVQlNDUklQVElPTiA9IGNvbnRleHRfMS5Db250ZXh0LmNvbnRleHRzLnN1YnNjcmliZSgoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICBDb21wb25lbnQuX0NPTlRFWFQgPSBjb250ZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbW92ZVRvKHgsIHksIGR1cmF0aW9uID0gMCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybS50cmFuc2xhdGVcIiwgbmV3IHRyYW5zbGF0ZV8xLlRyYW5zbGF0ZV9UcmFuc2Zvcm0oeCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlQXR0cmlidXRlKFwidHJhbnNmb3JtLnRyYW5zbGF0ZVwiLCBuZXcgdHJhbnNsYXRlXzEuVHJhbnNsYXRlX1RyYW5zZm9ybSh4LCB5KSwgZHVyYXRpb24sIHRoaXMuZWFzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByb3RhdGUoYW5nbGUsIGR1cmF0aW9uID0gMCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybS5yb3RhdGVcIiwgbmV3IHJvdGF0ZV8xLlJvdGF0ZV9UcmFuc2Zvcm0oYW5nbGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUF0dHJpYnV0ZShcInRyYW5zZm9ybS5yb3RhdGVcIiwgbmV3IHJvdGF0ZV8xLlJvdGF0ZV9UcmFuc2Zvcm0oYW5nbGUpLCBkdXJhdGlvbiwgdGhpcy5lYXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNjYWxlKHgsIHkgPSB4LCBkdXJhdGlvbiA9IDApIHtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm0uc2NhbGVcIiwgbmV3IHNjYWxlXzEuU2NhbGVfVHJhbnNmb3JtKHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUF0dHJpYnV0ZShcInRyYW5zZm9ybS5zY2FsZVwiLCBuZXcgc2NhbGVfMS5TY2FsZV9UcmFuc2Zvcm0oeCwgeSksIGR1cmF0aW9uLCB0aGlzLmVhc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2hpZGRlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hpZGRlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc2JVUkJRV2RGTzBGQlJXaEZMQ3RFUVVGelJUdEJRVU4wUlN3MlJFRkJiMFU3UVVGRGNFVXNjVVZCUVRSRk8wRkJRelZGTERKRFFVRjNRenRCUVVONFF5eHRRMEZCWjBNN1FVRkZhRU1zWlVGQmRVSXNVMEZCVVN4aFFVRkxPMGxCZDBKc1F5eFpRVUZaTEUxQlFXbERMRVZCUVZrc1UwRkJlVUlzWlVGQlRUdFJRVU4wUml4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlJEaENMRmRCUVUwc1IwRkJUaXhOUVVGTkxFTkJRWGxDTzFGQlJHaEdMRmxCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03VVVGSGRFSXNUVUZCVFN4VlFVRlZMRWRCUVVjc1EwRkJReXhKUVVGSkxDdENRVUZ0UWl4RlFVRkZMRVZCUVVVc1NVRkJTU3g1UWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxIVkNRVUZsTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXk5R0xFbEJRVWtzVFVGQlRTeEZRVUZGTzFsQlExWXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxDdENRVUZ0UWl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMmhGTzFGQlEwUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhYUVVGWExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTVUZETjBNc1EwRkJRenRKUVRsQ1RTeE5RVUZOTEV0QlFVc3NUMEZCVHp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTjJRaXhOUVVGTkxFbEJRVWtzWTBGQll5eERRVUZETEd0SFFVRnJSeXhEUVVGRExFTkJRVU03VTBGRE9VZzdVVUZEUkN4UFFVRlBMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFVTk5MRTFCUVUwc1MwRkJTeXhQUVVGUExFTkJRVU1zUjBGQldUdFJRVU53UXl4SlFVRkpMRk5CUVZNc1EwRkJReXh4UWtGQmNVSXNSVUZCUlR0WlFVTnVReXhUUVVGVExFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VTBGREwwTTdVVUZEUkN4VFFVRlRMRU5CUVVNc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF6dEpRVU16UWl4RFFVRkRPMGxCUTAwc1RVRkJUU3hEUVVGRExITkNRVUZ6UWp0UlFVTnNReXhKUVVGSkxGTkJRVk1zUTBGQlF5eHhRa0ZCY1VJc1JVRkJSVHRaUVVOdVF5eFBRVUZQTzFOQlExSTdVVUZEUkN4VFFVRlRMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NhVUpCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRka1VzVTBGQlV5eERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRMMElzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCV1Uwc1RVRkJUU3hEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNWMEZCYlVJc1EwRkJRenRSUVVOMFJDeEpRVUZKTEZGQlFWRXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRiRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeEpRVUZKTEN0Q1FVRnRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNwRk8yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1NVRkJTU3dyUWtGQmJVSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRUUVVOd1J6dEpRVU5JTEVOQlFVTTdTVUZEVFN4TlFVRk5MRU5CUVVNc1MwRkJZU3hGUVVGRkxGZEJRVzFDTEVOQlFVTTdVVUZETDBNc1NVRkJTU3hSUVVGUkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEyeENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1NVRkJTU3g1UWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JGTzJGQlFVMDdXVUZEVEN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzU1VGQlNTeDVRa0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJReTlHTzBsQlEwZ3NRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhEUVVGVExFVkJRVVVzU1VGQldTeERRVUZETEVWQlFVVXNWMEZCYlVJc1EwRkJRenRSUVVONlJDeEpRVUZKTEZGQlFWRXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRiRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTEhWQ1FVRmxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEYWtVN1lVRkJUVHRaUVVOTUxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpMSFZDUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZETlVZN1NVRkRTQ3hEUVVGRE8wbEJRMDBzU1VGQlNUdFJRVU5VTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMnBDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaERMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzFOQlEzUkNPMGxCUTBnc1EwRkJRenRKUVVOTkxFbEJRVWs3VVVGRFZDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRhRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03VTBGRGNrSTdTVUZEU0N4RFFVRkRPME5CUTBZN1FVRnFSVVFzT0VKQmFVVkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBJTklUSUFMX05VTV9TQU1QTEVTID0gMTc7XHJcbmNvbnN0IE5FV1RPTl9JVEVSQVRJT05TID0gNTtcclxuY29uc3QgX2NhbGNDb25zdGFudHMgPSAocDEsIHAyKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGE6IDEgLSAzICogcDIgKyAzICogcDEsXHJcbiAgICAgICAgYjogMyAqIHAyIC0gNiAqIHAxLFxyXG4gICAgICAgIGM6IDMgKiBwMSxcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IF9ldmFsdWF0ZUJlemllciA9ICh0LCBjKSA9PiAoKGMuYSAqIHQgKyBjLmIpICogdCArIGMuYykgKiB0O1xyXG5jb25zdCBfZXZhbHVhdGVCZXppZXJEZXJpdmF0aXZlID0gKHQsIGMpID0+ICgzICogYy5hICogdCArIDIgKiBjLmIpICogdCArIGMuYztcclxuY29uc3QgX2NhbGNURnJvbVggPSAoc2FtcGxlcywgeCwgYykgPT4ge1xyXG4gICAgY29uc3QgaWR4ID0gTWF0aC5taW4oTWF0aC5tYXgoc2FtcGxlcy5maW5kSW5kZXgoc2FtcGxlID0+IHNhbXBsZSA+IHgpIC0gMSwgMSksIHNhbXBsZXMubGVuZ3RoIC0gMSk7XHJcbiAgICBjb25zdCBkID0gKHggLSBzYW1wbGVzW2lkeF0pIC8gKHNhbXBsZXNbaWR4ICsgMV0gLSBzYW1wbGVzW2lkeF0pO1xyXG4gICAgbGV0IGVzdGltYXRlID0gKGQgKyBpZHggLSAxKSAvIChJTklUSUFMX05VTV9TQU1QTEVTIC0gMSk7XHJcbiAgICBmb3IgKGxldCBpdGVyID0gMDsgaXRlciA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2l0ZXIpIHtcclxuICAgICAgICBjb25zdCBzbG9wZSA9IF9ldmFsdWF0ZUJlemllckRlcml2YXRpdmUoZXN0aW1hdGUsIGMpO1xyXG4gICAgICAgIGlmIChzbG9wZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZXN0aW1hdGUgLT0gKF9ldmFsdWF0ZUJlemllcihlc3RpbWF0ZSwgYykgLSB4KSAvIHNsb3BlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVzdGltYXRlO1xyXG59O1xyXG5leHBvcnRzLmN1YmljQmV6aWVyID0gKHAxeCwgcDF5LCBwMngsIHAyeSkgPT4ge1xyXG4gICAgaWYgKHAxeCA9PT0gcDF5ICYmIHAyeCA9PT0gcDJ5KSB7XHJcbiAgICAgICAgcmV0dXJuICh4KSA9PiB4O1xyXG4gICAgfVxyXG4gICAgY29uc3QgeENvbnN0YW50cyA9IF9jYWxjQ29uc3RhbnRzKHAxeCwgcDJ4KTtcclxuICAgIGNvbnN0IHlDb25zdGFudHMgPSBfY2FsY0NvbnN0YW50cyhwMXksIHAyeSk7XHJcbiAgICBjb25zdCBzYW1wbGVzID0gbmV3IEZsb2F0MzJBcnJheShJTklUSUFMX05VTV9TQU1QTEVTKTtcclxuICAgIGZvciAobGV0IHNhbXBsZSA9IDA7IHNhbXBsZSA8IElOSVRJQUxfTlVNX1NBTVBMRVM7ICsrc2FtcGxlKSB7XHJcbiAgICAgICAgc2FtcGxlc1tzYW1wbGVdID0gX2V2YWx1YXRlQmV6aWVyKHNhbXBsZSAvIChJTklUSUFMX05VTV9TQU1QTEVTIC0gMSksIHhDb25zdGFudHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh4KSA9PiBfZXZhbHVhdGVCZXppZXIoX2NhbGNURnJvbVgoc2FtcGxlcywgeCwgeENvbnN0YW50cyksIHlDb25zdGFudHMpO1xyXG59O1xyXG5jb25zdCBmbGlwID0gKGVhc2UpID0+ICh0KSA9PiAxIC0gZWFzZSgxIC0gdCk7XHJcbmNvbnN0IGlub3V0ID0gKGVhc2VJbiwgZWFzZU91dCkgPT4ge1xyXG4gICAgcmV0dXJuICh0KSA9PiB0IDwgMC41ID8gZWFzZUluKHQgKiAyKSAvIDIgOiBlYXNlT3V0KDIgKiB0IC0gMSkgLyAyICsgMC41O1xyXG59O1xyXG5jb25zdCBzID0gMS43MDE1ODtcclxuY29uc3QgcCA9IDAuMDc1O1xyXG5leHBvcnRzLmxpbmVhciA9ICh0KSA9PiB0O1xyXG5leHBvcnRzLnN0ZXAgPSBNYXRoLnJvdW5kO1xyXG5leHBvcnRzLnF1YWRyYXRpY0luID0gKHQpID0+IE1hdGgucG93KHQsIDIpO1xyXG5leHBvcnRzLnF1YWRyYXRpY091dCA9IGZsaXAoZXhwb3J0cy5xdWFkcmF0aWNJbik7XHJcbmV4cG9ydHMucXVhZHJhdGljID0gaW5vdXQoZXhwb3J0cy5xdWFkcmF0aWNJbiwgZXhwb3J0cy5xdWFkcmF0aWNPdXQpO1xyXG5leHBvcnRzLmN1YmljSW4gPSAodCkgPT4gTWF0aC5wb3codCwgMyk7XHJcbmV4cG9ydHMuY3ViaWNPdXQgPSBmbGlwKGV4cG9ydHMuY3ViaWNJbik7XHJcbmV4cG9ydHMuY3ViaWMgPSBpbm91dChleHBvcnRzLmN1YmljSW4sIGV4cG9ydHMuY3ViaWNPdXQpO1xyXG5leHBvcnRzLnF1YXJ0aWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCA0KTtcclxuZXhwb3J0cy5xdWFydGljT3V0ID0gZmxpcChleHBvcnRzLnF1YXJ0aWNJbik7XHJcbmV4cG9ydHMucXVhcnRpYyA9IGlub3V0KGV4cG9ydHMucXVhcnRpY0luLCBleHBvcnRzLnF1YXJ0aWNPdXQpO1xyXG5leHBvcnRzLnF1aW50aWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCA1KTtcclxuZXhwb3J0cy5xdWludGljT3V0ID0gZmxpcChleHBvcnRzLnF1aW50aWNJbik7XHJcbmV4cG9ydHMucXVpbnRpYyA9IGlub3V0KGV4cG9ydHMucXVpbnRpY0luLCBleHBvcnRzLnF1aW50aWNPdXQpO1xyXG5leHBvcnRzLnNpbmVJbiA9ICh0KSA9PiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTtcclxuZXhwb3J0cy5zaW5lT3V0ID0gZmxpcChleHBvcnRzLnNpbmVJbik7XHJcbmV4cG9ydHMuc2luZSA9IGlub3V0KGV4cG9ydHMuc2luZUluLCBleHBvcnRzLnNpbmVPdXQpO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsSW4gPSAodCkgPT4gTWF0aC5wb3coMiwgKDEwICogKHQgLSAxKSkpO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsT3V0ID0gZmxpcChleHBvcnRzLmV4cG9uZW50aWFsSW4pO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsID0gaW5vdXQoZXhwb3J0cy5leHBvbmVudGlhbEluLCBleHBvcnRzLmV4cG9uZW50aWFsT3V0KTtcclxuZXhwb3J0cy5jaXJjdWxhckluID0gKHQpID0+IDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHQsIDIpKTtcclxuZXhwb3J0cy5jaXJjdWxhck91dCA9IGZsaXAoZXhwb3J0cy5jaXJjdWxhckluKTtcclxuZXhwb3J0cy5jaXJjdWxhciA9IGlub3V0KGV4cG9ydHMuY2lyY3VsYXJJbiwgZXhwb3J0cy5jaXJjdWxhck91dCk7XHJcbmV4cG9ydHMuYmFja0luID0gKHQpID0+IE1hdGgucG93KHQsIDIpICogKChzICsgMSkgKiB0IC0gcyk7XHJcbmV4cG9ydHMuYmFja091dCA9IGZsaXAoZXhwb3J0cy5iYWNrSW4pO1xyXG5leHBvcnRzLmJhY2sgPSBpbm91dChleHBvcnRzLmJhY2tJbiwgZXhwb3J0cy5iYWNrT3V0KTtcclxuZXhwb3J0cy5lbGFzdGljSW4gPSAodCkgPT4gTWF0aC5wb3coMiwgKC0xMCAqIHQpKSAqIE1hdGguc2luKCh0IC0gcCkgKiAoMiAqIE1hdGguUEkpIC8gMC4zKSArIDE7XHJcbmV4cG9ydHMuZWxhc3RpY091dCA9IGZsaXAoZXhwb3J0cy5lbGFzdGljSW4pO1xyXG5leHBvcnRzLmVsYXN0aWMgPSBpbm91dChleHBvcnRzLmVsYXN0aWNJbiwgZXhwb3J0cy5lbGFzdGljT3V0KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpXRnphVzVuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzVFVGQlRTeHRRa0ZCYlVJc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGREwwSXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZSTlVJc1RVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZWTEVWQlFVVXNSVUZCVlN4RlFVRmhMRVZCUVVVN1NVRkRNMFFzVDBGQlR6dFJRVU5NTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlR0UlFVTjBRaXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRSUVVOc1FpeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVN1MwRkRWaXhEUVVGRE8wRkJRMG9zUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4bFFVRmxMRWRCUVVjc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM0pHTEUxQlFVMHNlVUpCUVhsQ0xFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJXcEhMRTFCUVUwc1YwRkJWeXhIUVVGSExFTkJRVU1zVDBGQmNVSXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJXU3hGUVVGVkxFVkJRVVU3U1VGRE4wVXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYmtjc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwRkxFbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEcxQ1FVRnRRaXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcEVMRXRCUVVzc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSMEZCUnl4cFFrRkJhVUlzUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlR0UlFVTnVSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY2tRc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEyWXNUVUZCVFR0VFFVTlFPMUZCUTBRc1VVRkJVU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEZUVRN1NVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dEJRVU5zUWl4RFFVRkRMRU5CUVVNN1FVRkZWeXhSUVVGQkxGZEJRVmNzUjBGQlJ5eERRVUZETEVkQlFWY3NSVUZCUlN4SFFVRlhMRVZCUVVVc1IwRkJWeXhGUVVGRkxFZEJRVmNzUlVGQmVVSXNSVUZCUlR0SlFVTjJSeXhKUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSVHRSUVVNNVFpeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGVrSTdTVUZEUkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhqUVVGakxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpWRExFMUJRVTBzVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE5VTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3haUVVGWkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRKUVVOMFJDeExRVUZMTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hOUVVGTkxFZEJRVWNzYlVKQlFXMUNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVU3VVVGRE0wUXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRMUVVOdVJqdEpRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0QlFVTjZSaXhEUVVGRExFTkJRVU03UVVGRlJpeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVRKQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNM1JTeE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTFCUVRaQ0xFVkJRVVVzVDBGQk9FSXNSVUZCUlN4RlFVRkZPMGxCUXpsRkxFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wRkJRMjVHTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVU5zUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGSlNDeFJRVUZCTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJURkNMRkZCUVVFc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdRVUZGYkVJc1VVRkJRU3hYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlFTeERRVUZETzBGQlEzQkRMRkZCUVVFc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eHRRa0ZCVnl4RFFVRkRMRU5CUVVNN1FVRkRha01zVVVGQlFTeFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRMRzFDUVVGWExFVkJRVVVzYjBKQlFWa3NRMEZCUXl4RFFVRkRPMEZCUlRkRExGRkJRVUVzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhUUVVGQkxFTkJRVU1zUlVGQlNTeERRVUZETEVOQlFVRXNRMEZCUXp0QlFVTm9ReXhSUVVGQkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCVHl4RFFVRkRMRU5CUVVNN1FVRkRla0lzVVVGQlFTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMR1ZCUVU4c1JVRkJSU3huUWtGQlVTeERRVUZETEVOQlFVTTdRVUZGYWtNc1VVRkJRU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlFTeERRVUZETzBGQlEyeERMRkZCUVVFc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eHBRa0ZCVXl4RFFVRkRMRU5CUVVNN1FVRkROMElzVVVGQlFTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMR2xDUVVGVExFVkJRVVVzYTBKQlFWVXNRMEZCUXl4RFFVRkRPMEZCUlhaRExGRkJRVUVzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhUUVVGQkxFTkJRVU1zUlVGQlNTeERRVUZETEVOQlFVRXNRMEZCUXp0QlFVTnNReXhSUVVGQkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhVUpCUVZNc1EwRkJReXhEUVVGRE8wRkJRemRDTEZGQlFVRXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhwUWtGQlV5eEZRVUZGTEd0Q1FVRlZMRU5CUVVNc1EwRkJRenRCUVVWMlF5eFJRVUZCTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRkRVFzVVVGQlFTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVUwc1EwRkJReXhEUVVGRE8wRkJRM1pDTEZGQlFVRXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhqUVVGTkxFVkJRVVVzWlVGQlR5eERRVUZETEVOQlFVTTdRVUZGT1VJc1VVRkJRU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF6dEJRVU51UkN4UlFVRkJMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4RFFVRkRPMEZCUTNKRExGRkJRVUVzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4eFFrRkJZU3hGUVVGRkxITkNRVUZqTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGQkxGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTTdRVUZEZEVRc1VVRkJRU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEd0Q1FVRlZMRU5CUVVNc1EwRkJRenRCUVVNdlFpeFJRVUZCTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc2EwSkJRVlVzUlVGQlJTeHRRa0ZCVnl4RFFVRkRMRU5CUVVNN1FVRkZNVU1zVVVGQlFTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExGTkJRVUVzUTBGQlF5eEZRVUZKTEVOQlFVTXNRMEZCUVN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMjVFTEZGQlFVRXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU4yUWl4UlFVRkJMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zWTBGQlRTeEZRVUZGTEdWQlFVOHNRMEZCUXl4RFFVRkRPMEZCUlRsQ0xGRkJRVUVzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhUUVVGQkxFTkJRVU1zUlVGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNoR0xGRkJRVUVzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4cFFrRkJVeXhEUVVGRExFTkJRVU03UVVGRE4wSXNVVUZCUVN4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExHbENRVUZUTEVWQlFVVXNhMEpCUVZVc1EwRkJReXhEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFJvdGF0ZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSwgeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmF9ICR7dGhpcy54fSAke3RoaXMueX1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pLCBwYXJzZUZsb2F0KHRva3NbMl0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybSgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Sb3RhdGVfVHJhbnNmb3JtID0gUm90YXRlX1RyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY205MFlYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNtOTBZWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzTkVOQlFYbERPMEZCUlhwRExITkNRVUU0UWl4VFFVRlJMSEZDUVVGVE8wbEJRemRETEZsQlFXMUNMRU5CUVZNc1JVRkJVeXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTTdVVUZEZEVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlJFTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJVVHRSUVVGVExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8wbEJSWGhGTEVOQlFVTTdTVUZEVFN4SlFVRkpPMUZCUTFRc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEZWtNc1EwRkJRenRKUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZyUWp0UlFVTnFReXhKUVVGSkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZEYUVJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNMVFpeFBRVUZQTEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNMVJqdGhRVUZOTzFsQlEwd3NUMEZCVHl4SlFVRkpMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJoRE8wbEJRMGdzUTBGQlF6dERRVU5HTzBGQlprUXNORU5CWlVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvcm90YXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IocyA9IDEpIHtcclxuICAgICAgICBzdXBlcihcInNjYWxlXCIpO1xyXG4gICAgICAgIHRoaXMucyA9IHM7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnMudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5pZm9ybVNjYWxlX1RyYW5zZm9ybShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVW5pZm9ybVNjYWxlX1RyYW5zZm9ybSA9IFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm07XHJcbmNsYXNzIFNjYWxlX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMSwgeSA9IHgpIHtcclxuICAgICAgICBzdXBlcihcInNjYWxlXCIpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY2FsZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2NhbGVfVHJhbnNmb3JtID0gU2NhbGVfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMk5oYkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp6WTJGc1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxEUkRRVUY1UXp0QlFVVjZReXcwUWtGQmIwTXNVMEZCVVN4eFFrRkJVenRKUVVOdVJDeFpRVUZ0UWl4SlFVRlpMRU5CUVVNN1VVRkRPVUlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUkVVc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdEpRVVZvUXl4RFFVRkRPMGxCUTAwc1NVRkJTVHRSUVVOVUxFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNelFpeERRVUZETzBsQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVd0Q08xRkJRMnBETEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEVsQlFVa3NjMEpCUVhOQ0xFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRjRVE3WVVGQlRUdFpRVU5NTEU5QlFVOHNTVUZCU1N4elFrRkJjMElzUlVGQlJTeERRVUZETzFOQlEzSkRPMGxCUTBnc1EwRkJRenREUVVOR08wRkJaRVFzZDBSQlkwTTdRVUZGUkN4eFFrRkJOa0lzVTBGQlVTeHhRa0ZCVXp0SlFVTTFReXhaUVVGdFFpeEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNN1VVRkRjRVFzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUkVVc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdFJRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1NVRkZkRVFzUTBGQlF6dEpRVU5OTEVsQlFVazdVVUZEVkN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRnJRanRSUVVOcVF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkRhRUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU0xUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTnlRaXhQUVVGUExFbEJRVWtzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEVPMmxDUVVGTk8yZENRVU5NTEU5QlFVOHNTVUZCU1N4bFFVRmxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNSRk8xTkJRMFk3WVVGQlRUdFpRVU5NTEU5QlFVOHNTVUZCU1N4bFFVRmxMRVZCUVVVc1EwRkJRenRUUVVNNVFqdEpRVU5JTEVOQlFVTTdRMEZEUmp0QlFXNUNSQ3d3UTBGdFFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3NjYWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFRyYW5zbGF0ZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0cmFuc2xhdGVcIik7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy54fSAke3RoaXMueX1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2xhdGVfVHJhbnNmb3JtID0gVHJhbnNsYXRlX1RyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTnNZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkSEpoYm5Oc1lYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNORU5CUVhsRE8wRkJSWHBETEhsQ1FVRnBReXhUUVVGUkxIRkNRVUZUTzBsQlEyaEVMRmxCUVcxQ0xFbEJRVmtzUTBGQlF5eEZRVUZUTEVsQlFWa3NRMEZCUXp0UlFVTndSQ3hMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZFUml4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0SlFVVjBSQ3hEUVVGRE8wbEJRMDBzU1VGQlNUdFJRVU5VTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wbEJRMDBzVTBGQlV5eERRVUZETEVkQlFXdENPMUZCUTJwRExFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTm9RaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEzSkNMRTlCUVU4c1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnlSRHRwUWtGQlRUdG5Ra0ZEVEN4UFFVRlBMRWxCUVVrc2JVSkJRVzFDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6RkZPMU5CUTBZN1lVRkJUVHRaUVVOTUxFOUJRVThzU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xTkJRMnhETzBsQlEwZ3NRMEZCUXp0RFFVTkdPMEZCYmtKRUxHdEVRVzFDUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGUudHNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBGb3JlaWduT2JqZWN0IGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZm9yZWlnbk9iamVjdFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBhZGRIVE1MKGh0bWwpIHtcclxuICAgICAgICB0aGlzLl9ub2RlLmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKGh0bWwpIHtcclxuICAgICAgICB0aGlzLl9ub2RlLnJlbW92ZUNoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRm9yZWlnbk9iamVjdCA9IEZvcmVpZ25PYmplY3Q7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptOXlaV2xuYmkxdlltcGxZM1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sm1iM0psYVdkdUxXOWlhbVZqZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERoRFFVRnBSenRCUVZOcVJ5eHRRa0ZCTWtJc1UwRkJVU3dyUWtGQmVVVTdTVUZETVVjc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFXbEZPMUZCUXpkR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCWlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZEVFN4UFFVRlBMRU5CUVVNc1NVRkJhVUk3VVVGRE9VSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVOTkxFMUJRVTBzUTBGQlF5eEpRVUZwUWp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNdlFpeERRVUZETzBOQlEwWTdRVUZXUkN4elEwRlZReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZm9yZWlnbi1vYmplY3QudHNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBJbWFnZSBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImltYWdlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkltYWdlID0gSW1hZ2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXMWhaMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBiV0ZuWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVTFCTERoRFFVRXJSanRCUVhGQ0wwWXNWMEZCYlVJc1UwRkJVU3dyUWtGQmJVVTdTVUZETlVZc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFYbEVPMUZCUTNKR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBETEVOQlFVTTdRMEZEUmp0QlFVcEVMSE5DUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbWFnZS50c1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJjaXJjbGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ2lyY2xlID0gQ2lyY2xlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmx5WTJ4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTJseVkyeGxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlNVRXNiME5CUVRKRU8wRkJVek5FTEZsQlFXOUNMRk5CUVZFc2NVSkJRV3RFTzBsQlF6VkZMRmxCUVZrc1QwRkJaMElzUlVGQlJTeExRVUUyUlR0UlFVTjZSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1F5eERRVUZETzBOQlEwWTdRVUZLUkN4M1FrRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZS50c1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgRWxsaXBzZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZWxsaXBzZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5FbGxpcHNlID0gRWxsaXBzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWld4c2FYQnpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltVnNiR2x3YzJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGWE0wUXNZVUZCY1VJc1UwRkJVU3h4UWtGQmIwUTdTVUZETDBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUaEZPMUZCUXpGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdRMEZEUmp0QlFVcEVMREJDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvZWxsaXBzZS50c1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgTGluZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibGluZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5MaW5lID0gTGluZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkdsdVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW14cGJtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGTFFTeHZRMEZCTWtRN1FVRlhNMFFzVlVGQmEwSXNVMEZCVVN4eFFrRkJPRU03U1VGRGRFVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVEpGTzFGQlEzWkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5Q1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2xpbmUudHNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIFBhdGggZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInBhdGhcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0aCA9IFBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBhQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluQmhkR2d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkpRU3h2UTBGQk1rUTdRVUZQTTBRc1ZVRkJhMElzVTBGQlVTeHhRa0ZCT0VNN1NVRkRkRVVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRKRk8xRkJRM1pITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaERMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUNRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wYXRoLnRzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBQb2x5Z29uIGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJwb2x5Z29uXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvbHlnb24gPSBQb2x5Z29uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlzZVdkdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5CdmJIbG5iMjR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkpRU3h2UTBGQk1rUTdRVUZOTTBRc1lVRkJjVUlzVTBGQlVTeHhRa0ZCYjBRN1NVRkRMMFVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRoRk8xRkJRekZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1EwRkRSanRCUVVwRUxEQkNRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5Z29uLnRzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBQb2x5bGluZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicG9seWxpbmVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9seWxpbmUgPSBQb2x5bGluZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5c2VXeHBibVV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiMng1YkdsdVpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVsQkxHOURRVUV5UkR0QlFVMHpSQ3hqUVVGelFpeFRRVUZSTEhGQ1FVRnpSRHRKUVVOc1JpeFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJLMFU3VVVGRE0wY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEY0VNc1EwRkJRenREUVVOR08wRkJTa1FzTkVKQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlsaW5lLnRzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBSZWN0IGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJyZWN0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJlY3QgPSBSZWN0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZqZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkpsWTNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZMUVN4dlEwRkJNa1E3UVVGbE0wUXNWVUZCYTBJc1UwRkJVU3h4UWtGQk9FTTdTVUZEZEVVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUSkZPMUZCUTNaSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdRMEZEUmp0QlFVcEVMRzlDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcmVjdC50c1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZGltZW5zaW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vYXR0cmlidXRlcy9kaW1lbnNpb25cIik7XHJcbmNvbnN0IHRleHRfY29udGVudF8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvdGV4dC1jb250ZW50XCIpO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgVGV4dFNwYW4gZXh0ZW5kcyByZW5kZXJhYmxlXzEuQWJzdHJhY3RSZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJ0c3BhblwiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBnZXQgY29tcHV0ZWRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGUuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UZXh0U3BhbiA9IFRleHRTcGFuO1xyXG5jbGFzcyBUZXh0IGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwidGV4dFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBhZGRTcGFuKGNvbnRlbnQsIGxpbmVIZWlnaHQsIHVwZGF0ZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gbmV3IFRleHRTcGFuKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ0ZXh0Q29udGVudFwiLCBjb250ZW50KTtcclxuICAgICAgICBpZiAobGluZUhlaWdodCkge1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInhcIiwgcGFyc2VGbG9hdCh0aGlzLmdldEF0dHJpYnV0ZShcInhcIikgfHwgXCIwXCIpKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaW5lSGVpZ2h0ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImR5XCIsIG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24obGluZUhlaWdodCwgXCJlbVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImR5XCIsIGxpbmVIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkKHNwYW4pO1xyXG4gICAgICAgIHJldHVybiBzcGFuO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbXB1dGVkTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dCA9IFRleHQ7XHJcbmNsYXNzIE11bHRpbGluZVRleHQgZXh0ZW5kcyBUZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRleHQsIHdpZHRoLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGF0dHJzKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gbmV3IFRleHQoY29udGV4dCk7XHJcbiAgICAgICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIDApO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBuZXcgVGV4dFNwYW4oY29udGV4dCk7XHJcbiAgICAgICAgdGVtcC5hZGQoc3Bhbik7XHJcbiAgICAgICAgaWYgKGF0dHJzKSB7XHJcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlcyhhdHRycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwYWNlV2lkdGggPSB0ZW1wLmNvbXB1dGVkTGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW1wiXCJdO1xyXG4gICAgICAgIHRleHQuc3BsaXQoXCIgXCIpLmZvckVhY2goKHdvcmQsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMaW5lID0gKGxpbmUubGVuZ3RoID09PSAwKSA/IHdvcmQgOiBgJHtsaW5lfSAke3dvcmR9YDtcclxuICAgICAgICAgICAgY29uc3QgbGluZUNvbnRlbnQgPSBuZXcgdGV4dF9jb250ZW50XzEuVGV4dENvbnRlbnQobmV3TGluZSk7XHJcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGV4dENvbnRlbnRcIiwgbGluZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICBpZiAoc3Bhbi5jb21wdXRlZExlbmd0aCA+IHdpZHRoICYmIGxpbmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh3b3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdID0gbmV3TGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3BhbihuZXcgdGV4dF9jb250ZW50XzEuVGV4dENvbnRlbnQobGluZSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NdWx0aWxpbmVUZXh0ID0gTXVsdGlsaW5lVGV4dDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5SbGVIUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTd3dSRUZCZFVRN1FVRkZka1FzWjBWQlFUUkVPMEZCUlRWRUxEaERRVUVyUmp0QlFUaENMMFlzWTBGQmMwSXNVMEZCVVN3clFrRkJORVE3U1VGRGVFWXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVFJFTzFGQlEzaEdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRFJDeEpRVUZYTEdOQlFXTTdVVUZEZGtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCVUVRc05FSkJUME03UVVGWlJDeFZRVUZyUWl4VFFVRlJMQ3RDUVVGMVJEdEpRVU12UlN4WlFVRlpMRTlCUVdkQ0xFVkJRVVVzUzBGQmQwUTdVVUZEY0VZc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVU5OTEU5QlFVOHNRMEZCUXl4UFFVRnZRaXhGUVVGRkxGVkJRVFJDTEVWQlFVVXNVMEZCYTBJc1NVRkJTVHRSUVVOMlJpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eGhRVUZoTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRNVU1zU1VGQlNTeFZRVUZWTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RkxFbEJRVWtzVDBGQlR5eFZRVUZWTEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVOc1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxIRkNRVUZUTEVOQlFVOHNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFFVTdhVUpCUVUwN1owSkJRMHdzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03WVVGRGNrTTdVMEZEUmp0UlFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRFJDeEpRVUZYTEdOQlFXTTdVVUZEZGtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCY2tKRUxHOUNRWEZDUXp0QlFVVkVMRzFDUVVFeVFpeFRRVUZSTEVsQlFVazdTVUZEY2tNc1dVRkJXU3hQUVVGblFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4TFFVRmhMRVZCUVVVc1MwRkJOa1U3VVVGRGRFa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU4wUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU51UXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEyWXNTVUZCU1N4TFFVRkxMRVZCUVVVN1dVRkRWQ3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUXpOQ08xRkJRMFFzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRSUVVOMlF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFMUJRVTBzVDBGQlR5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVTXZSQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTERCQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRE4wTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZET1VNc1NVRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEYkVRc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTnNRanRwUWtGQlRUdG5Ra0ZEVEN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1lVRkRia003VVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYmtJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRia0lzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMREJDUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRlRU03VVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1EwRkRSanRCUVRkQ1JDeHpRMEUyUWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0LnRzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkM19pbnRlcnBvbGF0ZV8xID0gcmVxdWlyZShcImQzLWludGVycG9sYXRlXCIpO1xyXG5jbGFzcyBUZXh0Q29udGVudCB7XHJcbiAgICBzdGF0aWMgZXNjYXBlSHRtbChodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RyID0gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2IgPSBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ciB8fCB0aGlzLl9jYigpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGVudChjc3MgfHwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFRleHRDb250ZW50LmVzY2FwZUh0bWwodGhpcy5fc3RyIHx8IHRoaXMuX2NiKCkpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdG9yKGZyb20pIHtcclxuICAgICAgICBjb25zdCBmdW5jID0gZDNfaW50ZXJwb2xhdGVfMS5pbnRlcnBvbGF0ZShmcm9tLnRvU3RyaW5nKCksIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuICh0KSA9PiB0aGlzLnBhcnNlKGZ1bmModCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dENvbnRlbnQgPSBUZXh0Q29udGVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRDMWpiMjUwWlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpZEdWNGRDMWpiMjUwWlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2JVUkJRVFpETzBGQlNUZERPMGxCUTFVc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZaTzFGQlEzQkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEycEdMRU5CUVVNN1NVRkxSQ3haUVVGWkxFZEJRVFJDTzFGQlEzUkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzFOQlEycENPMkZCUVUwN1dVRkRUQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXp0VFFVTm9RanRKUVVOSUxFTkJRVU03U1VGRFRTeFJRVUZSTzFGQlEySXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFOUJRVThzU1VGQlNTeFhRVUZYTEVOQlFVTXNSMEZCUnl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM0JETEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVN0Q0xFOUJRVzFDTEVWQlFVVXNTVUZCVHp0UlFVTnVSU3hQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVN0Q0xFOUJRVzFDTEVWQlFVVXNTVUZCVHl4RlFVRkZMRkZCUVhOQ08xRkJRek5HTEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzaEZMRU5CUVVNN1NVRkRUU3haUVVGWkxFTkJRVU1zU1VGQmFVSTdVVUZEYmtNc1RVRkJUU3hKUVVGSkxFZEJRVWNzTkVKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVDBGQlR5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNMVF5eERRVUZETzBOQlEwWTdRVUV2UWtRc2EwTkJLMEpESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdGV4dC1jb250ZW50LnRzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgQmxlbmRfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlQmxlbmRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQmxlbmRfUHJpbWl0aXZlID0gQmxlbmRfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbXhsYm1RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUppYkdWdVpDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxEQkVRVUZ6UkR0QlFWRjBSQ3h4UWtGQk5rSXNVMEZCVVN4clEwRkJiMFE3U1VGRGRrWXNXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJhVU03VVVGRE0wUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvYmxlbmQudHNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBDb2xvck1hdHJpeF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVDb2xvck1hdHJpeFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db2xvck1hdHJpeF9QcmltaXRpdmUgPSBDb2xvck1hdHJpeF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXNiM0l0YldGMGNtbDRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXNiM0l0YldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNNRVJCUVhORU8wRkJVM1JFTERKQ1FVRnRReXhUUVVGUkxHdERRVUZuUlR0SlFVTjZSeXhaUVVGWkxFMUJRV01zUlVGQlJTeExRVUYxUXp0UlFVTnFSU3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEdWQlFXVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVONFF5eERRVUZETzBOQlEwWTdRVUZLUkN4elJFRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29sb3ItbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgQ29tcG9uZW50VHJhbnNmZXJfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlQ29tcG9uZW50VHJhbnNmZXJcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcG9uZW50VHJhbnNmZXJfUHJpbWl0aXZlID0gQ29tcG9uZW50VHJhbnNmZXJfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMWFJ5WVc1elptVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExYUnlZVzV6Wm1WeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc01FUkJRWE5FTzBGQlRYUkVMR2xEUVVGNVF5eFRRVUZSTEd0RFFVRTBSVHRKUVVNelNDeFpRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRTJRenRSUVVOMlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMSEZDUVVGeFFpeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpsRExFTkJRVU03UTBGRFJqdEJRVXBFTEd0RlFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29tcG9uZW50LXRyYW5zZmVyLnRzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgQ29tcG9zaXRlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUNvbXBvc2l0ZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db21wb3NpdGVfUHJpbWl0aXZlID0gQ29tcG9zaXRlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXphWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl0Y0c5emFYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNNRVJCUVhORU8wRkJXWFJFTEhsQ1FVRnBReXhUUVVGUkxHdERRVUUwUkR0SlFVTnVSeXhaUVVGWkxFMUJRV01zUlVGQlJTeExRVUZ4UXp0UlFVTXZSQ3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEdGQlFXRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMFF5eERRVUZETzBOQlEwWTdRVUZLUkN4clJFRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29tcG9zaXRlLnRzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgQ29udm9sdmVNYXRyaXhfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlQ29udm9sdmVNYXRyaXhcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29udm9sdmVNYXRyaXhfUHJpbWl0aXZlID0gQ29udm9sdmVNYXRyaXhfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1ZG05c2RtVXRiV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dWRtOXNkbVV0YldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlMwRXNNRVJCUVhORU8wRkJaMEowUkN3NFFrRkJjME1zVTBGQlVTeHJRMEZCYzBVN1NVRkRiRWdzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCTUVNN1VVRkRjRVVzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4clFrRkJhMElzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wTkJRMFk3UVVGS1JDdzBSRUZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbnZvbHZlLW1hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIERpc3BsYWNlbWVudE1hcF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGlzcGxhY2VtZW50TWFwX1ByaW1pdGl2ZSA9IERpc3BsYWNlbWVudE1hcF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHbHpjR3hoWTJWdFpXNTBMVzFoY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVJwYzNCc1lXTmxiV1Z1ZEMxdFlYQXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTd3dSRUZCYzBRN1FVRlZkRVFzSzBKQlFYVkRMRk5CUVZFc2EwTkJRWGRGTzBsQlEzSklMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRVEpETzFGQlEzSkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCU2tRc09FUkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2Rpc3BsYWNlbWVudC1tYXAudHNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBGbG9vZF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVGbG9vZFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GbG9vZF9QcmltaXRpdmUgPSBGbG9vZF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpteHZiMlF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sm1iRzl2WkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVWRCTERCRVFVRnpSRHRCUVU5MFJDeHhRa0ZCTmtJc1UwRkJVU3hyUTBGQmIwUTdTVUZEZGtZc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmFVTTdVVUZETTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9mbG9vZC50c1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIEdhdXNzaWFuQmx1cl9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuR2F1c3NpYW5CbHVyX1ByaW1pdGl2ZSA9IEdhdXNzaWFuQmx1cl9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyRjFjM05wWVc0dFlteDFjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltZGhkWE56YVdGdUxXSnNkWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3d3UkVGQmMwUTdRVUZSZEVRc05FSkJRVzlETEZOQlFWRXNhME5CUVd0Rk8wbEJRelZITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhkRE8xRkJRMnhGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRla01zUTBGQlF6dERRVU5HTzBGQlNrUXNkMFJCU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9nYXVzc2lhbi1ibHVyLnRzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgSW1hZ2VfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlSW1hZ2VcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSW1hZ2VfUHJpbWl0aXZlID0gSW1hZ2VfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzFoWjJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYldGblpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEQkVRVUZ6UkR0QlFVOTBSQ3h4UWtGQk5rSXNVMEZCVVN4clEwRkJiMFE3U1VGRGRrWXNXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJhVU03VVVGRE0wUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW1hZ2UudHNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBEaWZmdXNlTGlnaHRpbmcgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGlmZnVzZUxpZ2h0aW5nID0gRGlmZnVzZUxpZ2h0aW5nO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2xtWm5WelpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1ScFptWjFjMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3cyUkVGQmVVUTdRVUZWZWtRc2NVSkJRVFpDTEZOQlFWRXNhME5CUVhkRk8wbEJRek5ITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVRKRE8xRkJRM0pGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9kaWZmdXNlLnRzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgRGlzdGFudExpZ2h0IGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlRGlzdGFudExpZ2h0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRpc3RhbnRMaWdodCA9IERpc3RhbnRMaWdodDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsemRHRnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltUnBjM1JoYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZEUVN4blJVRkJORVE3UVVGUk5VUXNhMEpCUVRCQ0xGTkJRVkVzYTBOQlFXdEZPMGxCUTJ4SExGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFYZERPMUZCUTJ4RkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZWtNc1EwRkJRenREUVVOR08wRkJTa1FzYjBOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2Rpc3RhbnQudHNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBQb2ludExpZ2h0IGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlUG9pbnRMaWdodFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2ludExpZ2h0ID0gUG9pbnRMaWdodDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5cGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2IybHVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVZEJMR2RGUVVFMFJEdEJRVlUxUkN4blFrRkJkMElzVTBGQlVTeHJRMEZCT0VRN1NVRkROVVlzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCYzBNN1VVRkRhRVVzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4alFVRmpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0RFFVTkdPMEZCU2tRc1owTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9wb2ludC50c1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFNwb3RMaWdodCBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVNwb3RMaWdodFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcG90TGlnaHQgPSBTcG90TGlnaHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzQnZkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluTndiM1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkhRU3huUlVGQk5FUTdRVUZuUWpWRUxHVkJRWFZDTEZOQlFWRXNhME5CUVRSRU8wbEJRM3BHTEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhGRE8xRkJReTlFTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1lVRkJZU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1EwRkRSanRCUVVwRUxEaENRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90LnRzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgU3BlY3VsYXJMaWdodGluZyBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3BlY3VsYXJMaWdodGluZyA9IFNwZWN1bGFyTGlnaHRpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzQmxZM1ZzWVhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp6Y0dWamRXeGhjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRFpFUVVGNVJEdEJRVmQ2UkN4elFrRkJPRUlzVTBGQlVTeHJRMEZCTUVVN1NVRkRPVWNzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCTkVNN1VVRkRkRVVzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4dlFrRkJiMElzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNReXhEUVVGRE8wTkJRMFk3UVVGS1JDdzBRMEZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL3NwZWN1bGFyLnRzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgTWVyZ2VOb2RlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZU1lcmdlTm9kZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NZXJnZU5vZGVfUHJpbWl0aXZlID0gTWVyZ2VOb2RlX1ByaW1pdGl2ZTtcclxuY2xhc3MgTWVyZ2VfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVNZXJnZVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1lcmdlX1ByaW1pdGl2ZSA9IE1lcmdlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldWeVoyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKdFpYSm5aUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMREJFUVVGelJEdEJRVTEwUkN4NVFrRkJhVU1zVTBGQlVTeHJRMEZCTkVRN1NVRkRia2NzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCY1VNN1VVRkRMMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4aFFVRmhMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc2EwUkJTVU03UVVGRlJDeHhRa0ZCTmtJc1UwRkJVU3hyUTBGQmQwTTdTVUZETTBVc1dVRkJXU3hOUVVGak8xRkJRM2hDTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRE0wSXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21lcmdlLnRzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgTW9ycGhvbG9neV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVNb3JwaG9sb2d5XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1vcnBob2xvZ3lfUHJpbWl0aXZlID0gTW9ycGhvbG9neV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXOXljR2h2Ykc5bmVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW0xdmNuQm9iMnh2WjNrdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN3d1JFRkJjMFE3UVVGUmRFUXNNRUpCUVd0RExGTkJRVkVzYTBOQlFUaEVPMGxCUTNSSExGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFYTkRPMUZCUTJoRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNZMEZCWXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdRMEZEUmp0QlFVcEVMRzlFUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9tb3JwaG9sb2d5LnRzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgT2Zmc2V0X1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZU9mZnNldFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PZmZzZXRfUHJpbWl0aXZlID0gT2Zmc2V0X1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJabWMyVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWIyWm1jMlYwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSMEVzTUVSQlFYTkVPMEZCVTNSRUxITkNRVUU0UWl4VFFVRlJMR3REUVVGelJEdEpRVU14Uml4WlFVRlpMRTFCUVdNc1JVRkJSU3hMUVVGclF6dFJRVU0xUkN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wTkJRMFk3UVVGS1JDdzBRMEZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL29mZnNldC50c1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFRpbGVfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlVGlsZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UaWxlX1ByaW1pdGl2ZSA9IFRpbGVfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR2xzWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblJwYkdVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZEUVN3d1JFRkJjMFE3UVVGTmRFUXNiMEpCUVRSQ0xGTkJRVkVzYTBOQlFXdEVPMGxCUTNCR0xGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFXZERPMUZCUXpGRUxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBETEVOQlFVTTdRMEZEUmp0QlFVcEVMSGREUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy90aWxlLnRzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgY2hhbm5lbCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIGBmZUZ1bmMke2NoYW5uZWx9YCwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUgPSBUcmFuc2ZlckZ1bmN0aW9uX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTm1aWEl0Wm5WdVkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SjBjbUZ1YzJabGNpMW1kVzVqZEdsdmJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxEQkVRVUZ6UkR0QlFUQkNkRVFzWjBOQlFYZERMRk5CUVZFc2EwTkJRVEpJTzBsQlEzcExMRmxCUVZrc1RVRkJZeXhGUVVGRkxFOUJRVGhDTEVWQlFVVXNTMEZCTkVNN1VVRkRkRWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRTlCUVU4c1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1EwRkRSanRCUVVwRUxHZEZRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3RyYW5zZmVyLWZ1bmN0aW9uLnRzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgVHVyYnVsZW5jZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVUdXJidWxlbmNlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlR1cmJ1bGVuY2VfUHJpbWl0aXZlID0gVHVyYnVsZW5jZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRIVnlZblZzWlc1alpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5SMWNtSjFiR1Z1WTJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN3d1JFRkJjMFE3UVVGVmRFUXNNRUpCUVd0RExGTkJRVkVzYTBOQlFUaEVPMGxCUTNSSExGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFYTkRPMUZCUTJoRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNZMEZCWXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdRMEZEUmp0QlFVcEVMRzlFUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy90dXJidWxlbmNlLnRzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXR0cmlidXRlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29uc3RhbnRzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RvY3VtZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZWxlbWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2V2ZW50c1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ludGVycG9sYXRpb25cIikpO1xyXG5jb25zdCBBbmltYXRpb24gPSByZXF1aXJlKFwiLi9hbmltYXRpb25cIik7XHJcbmV4cG9ydHMuQW5pbWF0aW9uID0gQW5pbWF0aW9uO1xyXG5jb25zdCBBdHRyaWJ1dGVzID0gcmVxdWlyZShcIi4vYXR0cmlidXRlc1wiKTtcclxuZXhwb3J0cy5BdHRyaWJ1dGVzID0gQXR0cmlidXRlcztcclxuY29uc3QgRWxlbWVudHMgPSByZXF1aXJlKFwiLi9lbGVtZW50c1wiKTtcclxuZXhwb3J0cy5FbGVtZW50cyA9IEVsZW1lbnRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR2xEUVVFMFFqdEJRVU0xUWl4cFEwRkJORUk3UVVGRE5VSXNLMEpCUVRCQ08wRkJRekZDTEdkRFFVRXlRanRCUVVNelFpd3JRa0ZCTUVJN1FVRkRNVUlzT0VKQlFYbENPMEZCUTNwQ0xIRkRRVUZuUXp0QlFVVm9ReXg1UTBGQmVVTTdRVUZMZGtNc09FSkJRVk03UVVGS1dDd3lRMEZCTWtNN1FVRkxla01zWjBOQlFWVTdRVUZLV2l4MVEwRkJkVU03UVVGTGNrTXNORUpCUVZFaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhabGJuUnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpYWmxiblJ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ldmVudHMudHNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuX2xlcnAgPSAoYSwgYiwgdCkgPT4gYSArICgoYiAtIGEpICogdCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNTBaWEp3YjJ4aGRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltbHVkR1Z5Y0c5c1lYUnBiMjR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJZU3hSUVVGQkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ludGVycG9sYXRpb24udHNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lYXNpbmdcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJlclwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEaENRVUY1UWp0QlFVTjZRaXhuUTBGQk1rSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYW5pbWF0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYmFzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2JveFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbG9yLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGltZW5zaW9uXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbnVtYmVyLW9wdGlvbmFsLW51bWJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhdGgtc2VnbWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvaW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcHJlc2VydmUtYXNwZWN0LXJhdGlvXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdGV4dC1jb250ZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdHJhbnNmb3JtXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vd3JhcHBlcnNcIikpO1xyXG5jb25zdCBUcmFuc2Zvcm1zID0gcmVxdWlyZShcIi4vdHJhbnNmb3Jtc1wiKTtcclxuZXhwb3J0cy5UcmFuc2Zvcm1zID0gVHJhbnNmb3JtcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERSQ1FVRjFRanRCUVVOMlFpd3lRa0ZCYzBJN1FVRkRkRUlzYjBOQlFTdENPMEZCUXk5Q0xEWkNRVUYzUWp0QlFVTjRRaXhwUTBGQk5FSTdRVUZETlVJc09FSkJRWGxDTzBGQlEzcENMRGhEUVVGNVF6dEJRVU42UXl4dlEwRkJLMEk3UVVGREwwSXNOa0pCUVhkQ08wRkJRM2hDTERaRFFVRjNRenRCUVVONFF5eHZRMEZCSzBJN1FVRkRMMElzYVVOQlFUUkNPMEZCUXpWQ0xHZERRVUV5UWp0QlFVVXpRaXd5UTBGQk1rTTdRVUZEYkVNc1owTkJRVlVpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGQzX2ludGVycG9sYXRlXzEgPSByZXF1aXJlKFwiZDMtaW50ZXJwb2xhdGVcIik7XHJcbnZhciBDb2xvck1hdHJpeDtcclxuKGZ1bmN0aW9uIChDb2xvck1hdHJpeCkge1xyXG4gICAgY2xhc3MgUmF3IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZXMgPSBbWzEsIDAsIDAsIDAsIDBdLCBbMCwgMSwgMCwgMCwgMF0sIFswLCAwLCAxLCAwLCAwXSwgWzAsIDAsIDAsIDEsIDBdLCBbMCwgMCwgMCwgMCwgMF1dKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwibWF0cml4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYXJyID0gdGhpcy5hcnIuY29uY2F0KC4uLnZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcnIuam9pbihcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJhdyhbY3NzLnNwbGl0KFwiIFwiKS5tYXAocGFyc2VGbG9hdCldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmF3KFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRvcihmcm9tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBkM19pbnRlcnBvbGF0ZV8xLmludGVycG9sYXRlKGZyb20udG9TdHJpbmcoKSwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgcmV0dXJuICh0KSA9PiB0aGlzLnBhcnNlKGZ1bmModCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4LlJhdyA9IFJhdztcclxuICAgIGNsYXNzIFNhdHVyYXRlIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcInNhdHVyYXRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTYXR1cmF0ZShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTYXR1cmF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdG9yKGZyb20pIHtcclxuICAgICAgICAgICAgY29uc3QgZnVuYyA9IGQzX2ludGVycG9sYXRlXzEuaW50ZXJwb2xhdGUoZnJvbS50b1N0cmluZygpLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHQpID0+IHRoaXMucGFyc2UoZnVuYyh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29sb3JNYXRyaXguU2F0dXJhdGUgPSBTYXR1cmF0ZTtcclxuICAgIGNsYXNzIEh1ZVJvdGF0ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodmFsdWUgPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJodWVSb3RhdGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEh1ZVJvdGF0ZShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIdWVSb3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRvcihmcm9tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBkM19pbnRlcnBvbGF0ZV8xLmludGVycG9sYXRlKGZyb20udG9TdHJpbmcoKSwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgcmV0dXJuICh0KSA9PiB0aGlzLnBhcnNlKGZ1bmModCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4Lkh1ZVJvdGF0ZSA9IEh1ZVJvdGF0ZTtcclxuICAgIGNsYXNzIEx1bWluYW5jZVRvQWxwaGFDb2xvck1hdHJpeCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwibHVtaW5hbmNlVG9BbHBoYVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29sb3JNYXRyaXguTHVtaW5hbmNlVG9BbHBoYUNvbG9yTWF0cml4ID0gTHVtaW5hbmNlVG9BbHBoYUNvbG9yTWF0cml4O1xyXG59KShDb2xvck1hdHJpeCA9IGV4cG9ydHMuQ29sb3JNYXRyaXggfHwgKGV4cG9ydHMuQ29sb3JNYXRyaXggPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdGJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjlzYjNJdGJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzYlVSQlFUWkRPMEZCVnpkRExFbEJRV2xDTEZkQlFWY3NRMEZ0UnpOQ08wRkJia2RFTEZkQlFXbENMRmRCUVZjN1NVRkZNVUk3VVVGSFJTeFpRVUZaTEZOQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZHTDBjc1UwRkJTU3hIUVVGaExGRkJRVkVzUTBGQlF6dFpRVU14UWl4UlFVRkhMRWRCUVdFc1JVRkJSU3hEUVVGRE8xbEJSWGhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVONFF5eERRVUZETzFGQlEwMHNVVUZCVVR0WlFVTmlMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUTBGQlF6dFJRVU5OTEV0QlFVc3NRMEZCUXl4SFFVRnJRanRaUVVNM1FpeEpRVUZKTEVkQlFVY3NTMEZCU3l4SlFVRkpMRVZCUVVVN1owSkJRMmhDTEU5QlFVOHNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYkVRN2FVSkJRVTA3WjBKQlEwd3NUMEZCVHl4SlFVRkpMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU53UWp0UlFVTklMRU5CUVVNN1VVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMWxCUXpGRExFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVRc1EwRkJRenRSUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hSUVVGak8xbEJRekZFTEVsQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGRE1VSXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRha1E3YVVKQlFVMDdaMEpCUTB3c1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRE4wTTdVVUZEU0N4RFFVRkRPMUZCUTAwc1dVRkJXU3hEUVVGRExFbEJRVk03V1VGRE0wSXNUVUZCVFN4SlFVRkpMRWRCUVVjc05FSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETTBRc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFReXhEUVVGRE8wdEJRMFk3U1VFNVFsa3NaVUZCUnl4TlFUaENaaXhEUVVGQk8wbEJSVVE3VVVGRlJTeFpRVUZ0UWl4UlFVRm5RaXhEUVVGRE8xbEJRV3BDTEZWQlFVc3NSMEZCVEN4TFFVRkxMRU5CUVZrN1dVRkVOMElzVTBGQlNTeEhRVUZsTEZWQlFWVXNRMEZCUXp0UlFVTkZMRU5CUVVNN1VVRkRha01zVVVGQlVUdFpRVU5pTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU12UWl4RFFVRkRPMUZCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFsQlF6ZENMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzUlVGQlJUdG5Ra0ZEYUVJc1QwRkJUeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOMFF6dHBRa0ZCVFR0blFrRkRUQ3hQUVVGUExFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdZVUZEZGtJN1VVRkRTQ3hEUVVGRE8xRkJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXVHRaUVVNeFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFTkJRVU03VVVGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmJVSTdXVUZETDBRc1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTXhRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU5xUkR0cFFrRkJUVHRuUWtGRFRDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTTNRenRSUVVOSUxFTkJRVU03VVVGRFRTeFpRVUZaTEVOQlFVTXNTVUZCWXp0WlFVTm9ReXhOUVVGTkxFbEJRVWtzUjBGQlJ5dzBRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNelJDeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZETEVOQlFVTTdTMEZEUmp0SlFUTkNXU3h2UWtGQlVTeFhRVEpDY0VJc1EwRkJRVHRKUVVWRU8xRkJSVVVzV1VGQmJVSXNVVUZCWjBJc1EwRkJRenRaUVVGcVFpeFZRVUZMTEVkQlFVd3NTMEZCU3l4RFFVRlpPMWxCUkRkQ0xGTkJRVWtzUjBGQlowSXNWMEZCVnl4RFFVRkRPMUZCUTBFc1EwRkJRenRSUVVOcVF5eFJRVUZSTzFsQlEySXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF5OUNMRU5CUVVNN1VVRkRUU3hMUVVGTExFTkJRVU1zUjBGQmEwSTdXVUZETjBJc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVTm9RaXhQUVVGUExFbEJRVWtzVTBGQlV5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM1pETzJsQ1FVRk5PMmRDUVVOTUxFOUJRVThzU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0aFFVTjRRanRSUVVOSUxFTkJRVU03VVVGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWk8xbEJRekZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRVFzUTBGQlF6dFJRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVmtzUlVGQlJTeFJRVUZ2UWp0WlFVTm9SU3hKUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUXpGQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEycEVPMmxDUVVGTk8yZENRVU5NTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUXpkRE8xRkJRMGdzUTBGQlF6dFJRVU5OTEZsQlFWa3NRMEZCUXl4SlFVRmxPMWxCUTJwRExFMUJRVTBzU1VGQlNTeEhRVUZITERSQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRek5FTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VTXNRMEZCUXp0TFFVTkdPMGxCTTBKWkxIRkNRVUZUTEZsQk1rSnlRaXhEUVVGQk8wbEJSVVE3VVVGQlFUdFpRVU5UTEZOQlFVa3NSMEZCZFVJc2EwSkJRV3RDTEVOQlFVTTdVVUZKZGtRc1EwRkJRenRSUVVoUkxGRkJRVkU3V1VGRFlpeFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTmFMRU5CUVVNN1MwRkRSanRKUVV4WkxIVkRRVUV5UWl3NFFrRkxka01zUTBGQlFUdEJRVVZJTEVOQlFVTXNSVUZ1UjJkQ0xGZEJRVmNzUjBGQldDeHRRa0ZCVnl4TFFVRllMRzFDUVVGWExGRkJiVWN6UWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvY29sb3ItbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkM19jb2xvcl8xID0gcmVxdWlyZShcImQzLWNvbG9yXCIpO1xyXG5jb25zdCBkM19pbnRlcnBvbGF0ZV8xID0gcmVxdWlyZShcImQzLWludGVycG9sYXRlXCIpO1xyXG5jbGFzcyBDb2xvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjLCBpbnRlcnBvbGF0aW9uRmFjdG9yeSA9IENvbG9yLkRFRkFVTFRfSU5URVJQT0xBVElPTikge1xyXG4gICAgICAgIHRoaXMuaW50ZXJwb2xhdGlvbkZhY3RvcnkgPSBpbnRlcnBvbGF0aW9uRmFjdG9yeTtcclxuICAgICAgICBpZiAodHlwZW9mIGMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGQzX2NvbG9yXzEuY29sb3IoYyk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJHtjfVwiYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBkM19jb2xvcl8xLmNvbG9yKGMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzUkdCKCkge1xyXG4gICAgICAgIHJldHVybiBkM19jb2xvcl8xLnJnYih0aGlzLl9kYXRhKTtcclxuICAgIH1cclxuICAgIGFzSFNMKCkge1xyXG4gICAgICAgIHJldHVybiBkM19jb2xvcl8xLmhzbCh0aGlzLl9kYXRhKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoY3NzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoYCMwMDBgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0b3IoZnJvbSkge1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmludGVycG9sYXRpb25GYWN0b3J5KGZyb20udG9TdHJpbmcoKSwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gKHQpID0+IHRoaXMucGFyc2UoZnVuYyh0KSk7XHJcbiAgICB9XHJcbn1cclxuQ29sb3IuREVGQVVMVF9JTlRFUlBPTEFUSU9OID0gZDNfaW50ZXJwb2xhdGVfMS5pbnRlcnBvbGF0ZVJnYjtcclxuZXhwb3J0cy5Db2xvciA9IENvbG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjJ4dmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIVkRRVUZwUmp0QlFVTnFSaXh0UkVGQlowWTdRVUZMYUVZN1NVRkhSU3haUVVGWkxFTkJRVFJDTEVWQlFWTXNkVUpCUVhWRUxFdEJRVXNzUTBGQlF5eHhRa0ZCY1VJN1VVRkJiRVlzZVVKQlFXOUNMRWRCUVhCQ0xHOUNRVUZ2UWl4RFFVRTRSRHRSUVVOcVNTeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVONlFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4blFrRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkNMRWxCUVVrc1NVRkJTU3hGUVVGRk8yZENRVU5TTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRMjVDTzJsQ1FVRk5PMmRDUVVOTUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjME5CUVhORExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZETjBRN1UwRkRSanRoUVVGTk8xbEJRMHdzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4blFrRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzWkNPMGxCUTBnc1EwRkJRenRKUVVOTkxFdEJRVXM3VVVGRFZpeFBRVUZQTEdOQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhQUVVGUExHTkJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVU5OTEZGQlFWRTdVVUZEWWl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0UlFVTTNRaXhKUVVGSkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZEYUVJc1QwRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTjJRanRoUVVGTk8xbEJRMHdzVDBGQlR5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRUUVVNeFFqdEpRVU5JTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFGQlF6RkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRm5RanRSUVVNMVJDeEpRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRNVUlzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYWtRN1lVRkJUVHRaUVVOTUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6ZERPMGxCUTBnc1EwRkJRenRKUVVOTkxGbEJRVmtzUTBGQlF5eEpRVUZYTzFGQlF6ZENMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVrVXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU0xUXl4RFFVRkRPenRCUVRORFlTd3lRa0ZCY1VJc1IwRkJiVU1zSzBKQlFXTXNRMEZCUXp0QlFVUjJSaXh6UWtFMlEwTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9jb2xvci50c1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZDNfaW50ZXJwb2xhdGVfMSA9IHJlcXVpcmUoXCJkMy1pbnRlcnBvbGF0ZVwiKTtcclxuY2xhc3MgTWF0cml4IHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlcykge1xyXG4gICAgICAgIHRoaXMuYXJyID0gW107XHJcbiAgICAgICAgdGhpcy5hcnIgPSB0aGlzLmFyci5jb25jYXQoLi4udmFsdWVzKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyci5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW2Nzcy5zcGxpdChcIiBcIikubWFwKHBhcnNlRmxvYXQpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdG9yKGZyb20pIHtcclxuICAgICAgICBjb25zdCBmdW5jID0gZDNfaW50ZXJwb2xhdGVfMS5pbnRlcnBvbGF0ZShmcm9tLnRvU3RyaW5nKCksIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuICh0KSA9PiB0aGlzLnBhcnNlKGZ1bmModCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWF0cml4ID0gTWF0cml4O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNiVVJCUVRaRE8wRkJTemRETzBsQlJVVXNXVUZCV1N4TlFVRnJRanRSUVVSMlFpeFJRVUZITEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUlhoQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wbEJRMDBzVVVGQlVUdFJRVU5pTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0UlFVTTNRaXhKUVVGSkxFZEJRVWNzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZEYUVJc1QwRkJUeXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOeVJEdGhRVUZOTzFsQlEwd3NUMEZCVHl4SlFVRkpMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU4yUWp0SlFVTklMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hSUVVGcFFqdFJRVU0zUkN4SlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE1VSXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha1E3WVVGQlRUdFpRVU5NTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZsQlFWa3NRMEZCUXl4SlFVRlpPMUZCUXpsQ0xFMUJRVTBzU1VGQlNTeEhRVUZITERSQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRek5FTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCTjBKRUxIZENRVFpDUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkM19pbnRlcnBvbGF0ZV8xID0gcmVxdWlyZShcImQzLWludGVycG9sYXRlXCIpO1xyXG5jbGFzcyBOdW1iZXJPcHRpb25hbE51bWJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuLCBvKSB7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgICAgICB0aGlzLm8gPSBvO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm8gIT09IHVuZGVmaW5lZCkgPyBgJHt0aGlzLm59LCR7dGhpcy5vfWAgOiB0aGlzLm4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihwYXJzZUZsb2F0KHRva3NbMF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdG9yKGZyb20pIHtcclxuICAgICAgICBjb25zdCBmdW5jID0gZDNfaW50ZXJwb2xhdGVfMS5pbnRlcnBvbGF0ZShmcm9tLnRvU3RyaW5nKCksIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuICh0KSA9PiB0aGlzLnBhcnNlKGZ1bmModCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVyT3B0aW9uYWxOdW1iZXIgPSBOdW1iZXJPcHRpb25hbE51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlMVzl3ZEdsdmJtRnNMVzUxYldKbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW01MWJXSmxjaTF2Y0hScGIyNWhiQzF1ZFcxaVpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHRSRUZCTmtNN1FVRkxOME03U1VGRFJTeFpRVUZ0UWl4RFFVRlRMRVZCUVZNc1EwRkJWVHRSUVVFMVFpeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlJPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQlV6dEpRVUZITEVOQlFVTTdTVUZETlVNc1VVRkJVVHRSUVVOaUxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF6VkZMRU5CUVVNN1NVRkRUU3hMUVVGTExFTkJRVU1zUjBGQmEwSTdVVUZETjBJc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeEZRVUZGTzFsQlEyaENMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRGNrSXNUMEZCVHl4SlFVRkpMRzlDUVVGdlFpeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzUkVPMmxDUVVGTk8yZENRVU5NTEU5QlFVOHNTVUZCU1N4dlFrRkJiMElzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE0wVTdVMEZEUmp0aFFVRk5PMWxCUTB3c1QwRkJUeXhKUVVGSkxHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdVVUZETVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVN0Q08xRkJRek5GTEVsQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVNeFFpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnFSRHRoUVVGTk8xbEJRMHdzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZETjBNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzV1VGQldTeERRVUZETEVsQlFUQkNPMUZCUXpWRExFMUJRVTBzU1VGQlNTeEhRVUZITERSQ1FVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRek5FTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCTDBKRUxHOUVRU3RDUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50c1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZDNfaW50ZXJwb2xhdGVfMSA9IHJlcXVpcmUoXCJkMy1pbnRlcnBvbGF0ZVwiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY29uc3QgcG9pbnRfMSA9IHJlcXVpcmUoXCIuL3BvaW50XCIpO1xyXG5jbGFzcyBQYXRoU2VnbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kKSB7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBcmdzKGNzcy5zdWJzdHIoMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEluc3RhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdG9yKGZyb20pIHtcclxuICAgICAgICBjb25zdCBmdW5jID0gZDNfaW50ZXJwb2xhdGVfMS5pbnRlcnBvbGF0ZShmcm9tLnRvU3RyaW5nKCksIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuICh0KSA9PiB0aGlzLnBhcnNlKGZ1bmModCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0aFNlZ21lbnQgPSBQYXRoU2VnbWVudDtcclxuKGZ1bmN0aW9uIChQYXRoU2VnbWVudCkge1xyXG4gICAgbGV0IENvbW1hbmQ7XHJcbiAgICAoZnVuY3Rpb24gKENvbW1hbmQpIHtcclxuICAgICAgICBDb21tYW5kW1wiTW92ZVRvQWJzXCJdID0gXCJNXCI7XHJcbiAgICAgICAgQ29tbWFuZFtcIk1vdmVUb1JlbFwiXSA9IFwibVwiO1xyXG4gICAgICAgIENvbW1hbmRbXCJDbG9zZVBhdGhcIl0gPSBcIlpcIjtcclxuICAgICAgICBDb21tYW5kW1wiTGluZVRvQWJzXCJdID0gXCJMXCI7XHJcbiAgICAgICAgQ29tbWFuZFtcIkxpbmVUb1JlbFwiXSA9IFwibFwiO1xyXG4gICAgICAgIENvbW1hbmRbXCJMaW5lVG9Ib3Jpem9udGFsQWJzXCJdID0gXCJIXCI7XHJcbiAgICAgICAgQ29tbWFuZFtcIkxpbmVUb0hvcml6b250YWxSZWxcIl0gPSBcImhcIjtcclxuICAgICAgICBDb21tYW5kW1wiTGluZVRvVmVydGljYWxBYnNcIl0gPSBcIlZcIjtcclxuICAgICAgICBDb21tYW5kW1wiTGluZVRvVmVydGljYWxSZWxcIl0gPSBcInZcIjtcclxuICAgICAgICBDb21tYW5kW1wiQ3VydmVUb0N1YmljQWJzXCJdID0gXCJDXCI7XHJcbiAgICAgICAgQ29tbWFuZFtcIkN1cnZlVG9DdWJpY1JlbFwiXSA9IFwiY1wiO1xyXG4gICAgICAgIENvbW1hbmRbXCJDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnNcIl0gPSBcIlNcIjtcclxuICAgICAgICBDb21tYW5kW1wiQ3VydmVUb0N1YmljU21vb3RoUmVsXCJdID0gXCJzXCI7XHJcbiAgICAgICAgQ29tbWFuZFtcIkN1cnZlVG9RdWFkcmF0aWNBYnNcIl0gPSBcIlFcIjtcclxuICAgICAgICBDb21tYW5kW1wiQ3VydmVUb1F1YWRyYXRpY1JlbFwiXSA9IFwicVwiO1xyXG4gICAgICAgIENvbW1hbmRbXCJDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzXCJdID0gXCJUXCI7XHJcbiAgICAgICAgQ29tbWFuZFtcIkN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWxcIl0gPSBcInRcIjtcclxuICAgICAgICBDb21tYW5kW1wiQXJjVG9BYnNcIl0gPSBcIkFcIjtcclxuICAgICAgICBDb21tYW5kW1wiQXJjVG9SZWxcIl0gPSBcImFcIjtcclxuICAgIH0pKENvbW1hbmQgPSBQYXRoU2VnbWVudC5Db21tYW5kIHx8IChQYXRoU2VnbWVudC5Db21tYW5kID0ge30pKTtcclxuICAgIGNsYXNzIFNpbmdsZUxlbmd0aCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBsID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5sID0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5sLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKGJhc2VfMS5fTGVuZ3RoUGFyc2UoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuU2luZ2xlTGVuZ3RoID0gU2luZ2xlTGVuZ3RoO1xyXG4gICAgY2xhc3MgU2luZ2xlUG9pbnQgZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29tbWFuZCwgcCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY29tbWFuZH0gJHt0aGlzLnAudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wLnBhcnNlKGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LlNpbmdsZVBvaW50ID0gU2luZ2xlUG9pbnQ7XHJcbiAgICBjbGFzcyBEb3VibGVQb2ludCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBwMSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwMiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAxID0gcDE7XHJcbiAgICAgICAgICAgIHRoaXMucDIgPSBwMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5wMS50b1N0cmluZygpfSAke3RoaXMucDIudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucDEucGFyc2UodG9rc1swXSksIHRoaXMucDIucGFyc2UodG9rc1sxXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkRvdWJsZVBvaW50ID0gRG91YmxlUG9pbnQ7XHJcbiAgICBjbGFzcyBUcmlwbGVQb2ludCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBwMSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwMiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwMyA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAxID0gcDE7XHJcbiAgICAgICAgICAgIHRoaXMucDIgPSBwMjtcclxuICAgICAgICAgICAgdGhpcy5wMyA9IHAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY29tbWFuZH0gJHt0aGlzLnAxLnRvU3RyaW5nKCl9ICR7dGhpcy5wMi50b1N0cmluZygpfSAke3RoaXMucDMudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucDEucGFyc2UodG9rc1swXSksIHRoaXMucDIucGFyc2UodG9rc1sxXSksIHRoaXMucDMucGFyc2UodG9rc1syXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LlRyaXBsZVBvaW50ID0gVHJpcGxlUG9pbnQ7XHJcbiAgICBjbGFzcyBNb3ZlVG9BYnMgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihDb21tYW5kLk1vdmVUb0FicywgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9BYnMocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9BYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5Nb3ZlVG9BYnMgPSBNb3ZlVG9BYnM7XHJcbiAgICBjbGFzcyBNb3ZlVG9SZWwgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihDb21tYW5kLk1vdmVUb1JlbCwgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9SZWwocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9SZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5Nb3ZlVG9SZWwgPSBNb3ZlVG9SZWw7XHJcbiAgICBjbGFzcyBDbG9zZVBhdGggZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKENvbW1hbmQuQ2xvc2VQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb21tYW5kLkNsb3NlUGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ2xvc2VQYXRoID0gQ2xvc2VQYXRoO1xyXG4gICAgY2xhc3MgTGluZVRvQWJzIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5MaW5lVG9BYnMsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvQWJzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvQWJzID0gTGluZVRvQWJzO1xyXG4gICAgY2xhc3MgTGluZVRvUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5MaW5lVG9SZWwsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvUmVsKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvUmVsID0gTGluZVRvUmVsO1xyXG4gICAgY2xhc3MgTGluZVRvSG9yaXpvbnRhbEFicyBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaCA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5MaW5lVG9Ib3Jpem9udGFsQWJzLCBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvSG9yaXpvbnRhbEFicyhoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0hvcml6b250YWxBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9Ib3Jpem9udGFsQWJzID0gTGluZVRvSG9yaXpvbnRhbEFicztcclxuICAgIGNsYXNzIExpbmVUb0hvcml6b250YWxSZWwgZXh0ZW5kcyBTaW5nbGVMZW5ndGgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGggPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKENvbW1hbmQuTGluZVRvSG9yaXpvbnRhbFJlbCwgaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0hvcml6b250YWxSZWwoaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9Ib3Jpem9udGFsUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvSG9yaXpvbnRhbFJlbCA9IExpbmVUb0hvcml6b250YWxSZWw7XHJcbiAgICBjbGFzcyBMaW5lVG9WZXJ0aWNhbEFicyBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodiA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5MaW5lVG9WZXJ0aWNhbEFicywgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2Uodikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1ZlcnRpY2FsQWJzKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvVmVydGljYWxBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9WZXJ0aWNhbEFicyA9IExpbmVUb1ZlcnRpY2FsQWJzO1xyXG4gICAgY2xhc3MgTGluZVRvVmVydGljYWxSZWwgZXh0ZW5kcyBTaW5nbGVMZW5ndGgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHYgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKENvbW1hbmQuTGluZVRvVmVydGljYWxSZWwsIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9WZXJ0aWNhbEFicyh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1ZlcnRpY2FsQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvVmVydGljYWxSZWwgPSBMaW5lVG9WZXJ0aWNhbFJlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9DdWJpY0FicyBleHRlbmRzIFRyaXBsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYyA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBkLCBlLCBmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMxID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGMgOiBuZXcgcG9pbnRfMS5Qb2ludChlLCBmKTtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5DdXJ2ZVRvQ3ViaWNBYnMsIGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzEsIGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljQWJzKGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNBYnMgPSBDdXJ2ZVRvQ3ViaWNBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNSZWwgZXh0ZW5kcyBUcmlwbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgZCwgZSwgZikge1xyXG4gICAgICAgICAgICBjb25zdCBjMSA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYyBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBjIDogbmV3IHBvaW50XzEuUG9pbnQoZSwgZik7XHJcbiAgICAgICAgICAgIHN1cGVyKENvbW1hbmQuQ3VydmVUb0N1YmljUmVsLCBjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1JlbChjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb0N1YmljUmVsID0gQ3VydmVUb0N1YmljUmVsO1xyXG4gICAgY2xhc3MgQ3VydmVUb0N1YmljU21vb3RoQWJzIGV4dGVuZHMgRG91YmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5DdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aEFicyhjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMgPSBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNTbW9vdGhSZWwgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihDb21tYW5kLkN1cnZlVG9DdWJpY1Ntb290aFJlbCwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljU21vb3RoUmVsKGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aFJlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9DdWJpY1Ntb290aFJlbCA9IEN1cnZlVG9DdWJpY1Ntb290aFJlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9RdWFkcmF0aWNBYnMgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzEgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihDb21tYW5kLkN1cnZlVG9RdWFkcmF0aWNBYnMsIGMxLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMSwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNBYnMoYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY0FicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9RdWFkcmF0aWNBYnMgPSBDdXJ2ZVRvUXVhZHJhdGljQWJzO1xyXG4gICAgY2xhc3MgQ3VydmVUb1F1YWRyYXRpY1JlbCBleHRlbmRzIERvdWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMSA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIHN1cGVyKENvbW1hbmQuQ3VydmVUb1F1YWRyYXRpY1JlbCwgYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1JlbChjMSwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY1JlbCA9IEN1cnZlVG9RdWFkcmF0aWNSZWw7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5DdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnMocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicyA9IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5DdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWwocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbCA9IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWw7XHJcbiAgICBjbGFzcyBBcmNUbyBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCByID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeEF4aXNSb3RhdGUgPSAwLCBsYXJnZUFyYyA9IGZhbHNlLCBzd2VlcENsb2Nrd2lzZSA9IHRydWUpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgICAgIHRoaXMueEF4aXNSb3RhdGUgPSB4QXhpc1JvdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5sYXJnZUFyYyA9IGxhcmdlQXJjO1xyXG4gICAgICAgICAgICB0aGlzLnN3ZWVwQ2xvY2t3aXNlID0gc3dlZXBDbG9ja3dpc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5yLnRvU3RyaW5nKCl9ICR7dGhpcy54QXhpc1JvdGF0ZX0gJHt0aGlzLmxhcmdlQXJjID8gMSA6IDB9ICR7dGhpcy5zd2VlcENsb2Nrd2lzZSA/IDEgOiAwfSAke3RoaXMucC50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5yLnBhcnNlKHRva3NbMF0pLCB0aGlzLnAucGFyc2UodG9rc1s0XSksIHBhcnNlRmxvYXQodG9rc1sxXSksIHRva3NbMl0gPT09IFwiMVwiLCB0b2tzWzNdID09PSBcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQXJjVG8gPSBBcmNUbztcclxuICAgIGNsYXNzIEFyY1RvQWJzIGV4dGVuZHMgQXJjVG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkLCBlLCBmLCBnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBsZXQgeEF4aXNSb3RhdGUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGFyZ2VBcmMgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHN3ZWVwQ2xvY2t3aXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ICYmIGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhpc1JvdGF0ZSA9IGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXJnZUFyYyA9IGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2VlcENsb2Nrd2lzZSA9IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhpc1JvdGF0ZSA9IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXJnZUFyYyA9IGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2VlcENsb2Nrd2lzZSA9IGc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIoQ29tbWFuZC5BcmNUb0FicywgciwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFyY1RvQWJzKHIsIHAsIHhBeGlzUm90YXRlLCBsYXJnZUFyYywgc3dlZXBDbG9ja3dpc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9BYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5BcmNUb0FicyA9IEFyY1RvQWJzO1xyXG4gICAgY2xhc3MgQXJjVG9SZWwgZXh0ZW5kcyBBcmNUbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQsIGUsIGYsIGcpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIGxldCB4QXhpc1JvdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBsYXJnZUFyYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgc3dlZXBDbG9ja3dpc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgJiYgYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzUm90YXRlID0gYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlQXJjID0gZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3ZWVwQ2xvY2t3aXNlID0gZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzUm90YXRlID0gZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlQXJjID0gZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3ZWVwQ2xvY2t3aXNlID0gZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlcihDb21tYW5kLkFyY1RvUmVsLCByLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShyLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9SZWwociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcmNUb1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkFyY1RvUmVsID0gQXJjVG9SZWw7XHJcbn0pKFBhdGhTZWdtZW50ID0gZXhwb3J0cy5QYXRoU2VnbWVudCB8fCAoZXhwb3J0cy5QYXRoU2VnbWVudCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBhQzF6WldkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNHRjBhQzF6WldkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNiVVJCUVRaRE8wRkJTVGRETEdsRFFVRTRRenRCUVVNNVF5eHRRMEZCWjBNN1FVRkZhRU03U1VGRFJTeFpRVUZ0UWl4UFFVRTBRanRSUVVFMVFpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRnhRanRKUVVGSExFTkJRVU03U1VGRk5VTXNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNSRE8yRkJRVTA3V1VGRFRDeFBRVUZQTEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRUUVVNdlFqdEpRVU5JTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFGQlF6RkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRnpRanRSUVVOc1JTeEpRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRNVUlzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYWtRN1lVRkJUVHRaUVVOTUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6ZERPMGxCUTBnc1EwRkJRenRKUVVkTkxGbEJRVmtzUTBGQlF5eEpRVUZwUWp0UlFVTnVReXhOUVVGTkxFbEJRVWtzUjBGQlJ5dzBRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNelJDeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRelZETEVOQlFVTTdRMEZEUmp0QlFURkNSQ3hyUTBFd1FrTTdRVUZGUkN4WFFVRnBRaXhYUVVGWE8wbEJSVEZDTEVsQlFWa3NUMEZ2UWxnN1NVRndRa1FzVjBGQldTeFBRVUZQTzFGQlEycENMREJDUVVGbExFTkJRVUU3VVVGRFppd3dRa0ZCWlN4RFFVRkJPMUZCUTJZc01FSkJRV1VzUTBGQlFUdFJRVU5tTERCQ1FVRmxMRU5CUVVFN1VVRkRaaXd3UWtGQlpTeERRVUZCTzFGQlEyWXNiME5CUVhsQ0xFTkJRVUU3VVVGRGVrSXNiME5CUVhsQ0xFTkJRVUU3VVVGRGVrSXNhME5CUVhWQ0xFTkJRVUU3VVVGRGRrSXNhME5CUVhWQ0xFTkJRVUU3VVVGRGRrSXNaME5CUVhGQ0xFTkJRVUU3VVVGRGNrSXNaME5CUVhGQ0xFTkJRVUU3VVVGRGNrSXNjME5CUVRKQ0xFTkJRVUU3VVVGRE0wSXNjME5CUVRKQ0xFTkJRVUU3VVVGRE0wSXNiME5CUVhsQ0xFTkJRVUU3VVVGRGVrSXNiME5CUVhsQ0xFTkJRVUU3VVVGRGVrSXNNRU5CUVN0Q0xFTkJRVUU3VVVGREwwSXNNRU5CUVN0Q0xFTkJRVUU3VVVGREwwSXNlVUpCUVdNc1EwRkJRVHRSUVVOa0xIbENRVUZqTEVOQlFVRTdTVUZEYUVJc1EwRkJReXhGUVhCQ1Z5eFBRVUZQTEVkQlFWQXNiVUpCUVU4c1MwRkJVQ3h0UWtGQlR5eFJRVzlDYkVJN1NVRkZSQ3hyUWtGQmJVTXNVMEZCVVN4WFFVRlhPMUZCUTNCRUxGbEJRVmtzVDBGQk1FZ3NSVUZCVXl4SlFVRlpMRU5CUVVNN1dVRkRNVW9zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUkRoSUxFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdVVUZGTlVvc1EwRkJRenRSUVVOTkxGRkJRVkU3V1VGRFlpeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRhRVFzUTBGQlF6dFJRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRlhPMWxCUXpGQ0xFOUJRVThzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4dFFrRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETDBNc1EwRkJRenRMUVVkR08wbEJXbkZDTEhkQ1FVRlpMR1ZCV1dwRExFTkJRVUU3U1VGRFJDeHBRa0ZCYTBNc1UwRkJVU3hYUVVGWE8xRkJRMjVFTEZsQlFWa3NUMEZCT0Vvc1JVRkJVeXhKUVVGWExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNMDBzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUkd0TExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFYbENPMUZCUlRkTkxFTkJRVU03VVVGRFRTeFJRVUZSTzFsQlEySXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJRMmhFTEVOQlFVTTdVVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJWenRaUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzB0QlIwWTdTVUZhY1VJc2RVSkJRVmNzWTBGWmFFTXNRMEZCUVR0SlFVTkVMR2xDUVVGclF5eFRRVUZSTEZkQlFWYzdVVUZEYmtRc1dVRkJXU3hQUVVGclNTeEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53VGl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRWMwa3NUMEZCUlN4SFFVRkdMRVZCUVVVc1EwRkJlVUk3V1VGQlV5eFBRVUZGTEVkQlFVWXNSVUZCUlN4RFFVRjVRanRSUVVWMFRpeERRVUZETzFGQlEwMHNVVUZCVVR0WlFVTmlMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJRM1pGTEVOQlFVTTdVVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJWenRaUVVNeFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRTlCUVU4c1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZGTEVOQlFVTTdTMEZIUmp0SlFXSnhRaXgxUWtGQlZ5eGpRV0ZvUXl4RFFVRkJPMGxCUTBRc2FVSkJRV3RETEZOQlFWRXNWMEZCVnp0UlFVTnVSQ3haUVVGWkxFOUJRVEJFTEVWQlFWTXNTMEZCV1N4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFWTXNTMEZCV1N4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFWTXNTMEZCV1N4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyaE1MRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVVE0UkN4UFFVRkZMRWRCUVVZc1JVRkJSU3hEUVVGNVFqdFpRVUZUTEU5QlFVVXNSMEZCUml4RlFVRkZMRU5CUVhsQ08xbEJRVk1zVDBGQlJTeEhRVUZHTEVWQlFVVXNRMEZCZVVJN1VVRkZiRXdzUTBGQlF6dFJRVU5OTEZGQlFWRTdXVUZEWWl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUXpkR0xFTkJRVU03VVVGRFRTeFRRVUZUTEVOQlFVTXNSMEZCVnp0WlFVTXhRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEU5QlFVOHNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JITEVOQlFVTTdTMEZIUmp0SlFXSnhRaXgxUWtGQlZ5eGpRV0ZvUXl4RFFVRkJPMGxCUlVRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlIzaERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUTBGQlVUdFpRVU16UWl4UFFVRlBMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkNMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEU5QlFVOHNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzB0QlEwWTdTVUZhV1N4eFFrRkJVeXhaUVZseVFpeERRVUZCTzBsQlEwUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJSM2hETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pGTEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1EwRkJVVHRaUVVNelFpeFBRVUZQTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZDTEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFOUJRVThzU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRa0ZCVXl4WlFWbHlRaXhEUVVGQk8wbEJSVVFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUTNoRE8xbEJRMFVzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVNelFpeERRVUZETzFGQlEwMHNVVUZCVVR0WlFVTmlMRTlCUVU4c1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU16UWl4RFFVRkRPMUZCUTAwc1UwRkJVeXhEUVVGRExFZEJRVmM3V1VGRE1VSXNUMEZCVHl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFOUJRVThzU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8wdEJRMFk3U1VGaVdTeHhRa0ZCVXl4WlFXRnlRaXhEUVVGQk8wbEJSVVFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUjNoRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRkxFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNRMEZCVVR0WlFVTXpRaXhQUVVGUExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTlCUVU4c1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UWtGQlV5eFpRVmx5UWl4RFFVRkJPMGxCUTBRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlIzaERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUTBGQlVUdFpRVU16UWl4UFFVRlBMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkNMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEU5QlFVOHNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzB0QlEwWTdTVUZhV1N4eFFrRkJVeXhaUVZseVFpeERRVUZCTzBsQlJVUXNlVUpCUVdsRExGTkJRVkVzV1VGQldUdFJRVU51UkN4WlFVRlpMRWxCUVZrc1EwRkJRenRaUVVOMlFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNRMEZCVXp0WlFVTTFRaXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU03VVVGRGJrTXNRMEZCUXp0TFFVTkdPMGxCVmxrc0swSkJRVzFDTEhOQ1FWVXZRaXhEUVVGQk8wbEJRMFFzZVVKQlFXbERMRk5CUVZFc1dVRkJXVHRSUVVOdVJDeFpRVUZaTEVsQlFWa3NRMEZCUXp0WlFVTjJRaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaERMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUTBGQlV6dFpRVU0xUWl4UFFVRlBMRWxCUVVrc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRU1zUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1QwRkJUeXhKUVVGSkxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1VVRkRia01zUTBGQlF6dExRVU5HTzBsQlZsa3NLMEpCUVcxQ0xITkNRVlV2UWl4RFFVRkJPMGxCUlVRc2RVSkJRU3RDTEZOQlFWRXNXVUZCV1R0UlFVTnFSQ3haUVVGWkxFbEJRVmtzUTBGQlF6dFpRVU4yUWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1JETEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1EwRkJVenRaUVVNMVFpeFBRVUZQTEVsQlFVa3NhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVNc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUMEZCVHl4SlFVRkpMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEYWtNc1EwRkJRenRMUVVOR08wbEJWbGtzTmtKQlFXbENMRzlDUVZVM1FpeERRVUZCTzBsQlEwUXNkVUpCUVN0Q0xGTkJRVkVzV1VGQldUdFJRVU5xUkN4WlFVRlpMRWxCUVZrc1EwRkJRenRaUVVOMlFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSRExFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNRMEZCVXp0WlFVTTFRaXhQUVVGUExFbEJRVWtzYVVKQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVDBGQlR5eEpRVUZKTEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRGFrTXNRMEZCUXp0TFFVTkdPMGxCVmxrc05rSkJRV2xDTEc5Q1FWVTNRaXhEUVVGQk8wbEJSVVFzY1VKQlFUWkNMRk5CUVZFc1YwRkJWenRSUVVjNVF5eFpRVUZaTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlR0WlFVTXpTaXhOUVVGTkxFVkJRVVVzUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU55UlN4TlFVRk5MRVZCUVVVc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNdlJTeE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkRMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUlVGQlV5eEZRVUZGTEVWQlFWTXNSVUZCUlN4RFFVRlJPMWxCUTJwRUxFOUJRVThzU1VGQlNTeGxRVUZsTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeFBRVUZQTEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dExRVU5HTzBsQlpsa3NNa0pCUVdVc2EwSkJaVE5DTEVOQlFVRTdTVUZEUkN4eFFrRkJOa0lzVTBGQlVTeFhRVUZYTzFGQlJ6bERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCVlN4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVk8xbEJRek5LTEUxQlFVMHNSVUZCUlN4SFFVRlZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFWY3NRMEZCUXl4RFFVRkRPMWxCUTNKRkxFMUJRVTBzUlVGQlJTeEhRVUZWTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJWeXhGUVVGRkxFTkJRVmNzUTBGQlF5eERRVUZETzFsQlF5OUZMRTFCUVUwc1EwRkJReXhIUVVGVkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCVnl4RlFVRkZMRU5CUVZjc1EwRkJReXhEUVVGRE8xbEJRemxGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVU1zUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RlFVRlRMRVZCUVVVc1JVRkJVeXhGUVVGRkxFTkJRVkU3V1VGRGFrUXNUMEZCVHl4SlFVRkpMR1ZCUVdVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTlCUVU4c1NVRkJTU3hsUVVGbExFVkJRVVVzUTBGQlF6dFJRVU12UWl4RFFVRkRPMHRCUTBZN1NVRm1XU3d5UWtGQlpTeHJRa0ZsTTBJc1EwRkJRVHRKUVVWRUxESkNRVUZ0UXl4VFFVRlJMRmRCUVZjN1VVRkhjRVFzV1VGQldTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVk8xbEJRekZITEUxQlFVMHNSVUZCUlN4SFFVRlZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlZ5eEZRVUZGTEVOQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXk5RkxFMUJRVTBzUTBGQlF5eEhRVUZWTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJWeXhGUVVGRkxFTkJRVmNzUTBGQlF5eERRVUZETzFsQlF6bEZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6bERMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUlVGQlV5eEZRVUZGTEVOQlFWRTdXVUZEZEVNc1QwRkJUeXhKUVVGSkxIRkNRVUZ4UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeFBRVUZQTEVsQlFVa3NjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dFJRVU55UXl4RFFVRkRPMHRCUTBZN1NVRmtXU3hwUTBGQmNVSXNkMEpCWTJwRExFTkJRVUU3U1VGRFJDd3lRa0ZCYlVNc1UwRkJVU3hYUVVGWE8xRkJSM0JFTEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZUdFpRVU14Unl4TlFVRk5MRVZCUVVVc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNdlJTeE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTVReXhEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVWQlFWTXNSVUZCUlN4RFFVRlJPMWxCUTNSRExFOUJRVThzU1VGQlNTeHhRa0ZCY1VJc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETVVNc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUMEZCVHl4SlFVRkpMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdVVUZEY2tNc1EwRkJRenRMUVVOR08wbEJaRmtzYVVOQlFYRkNMSGRDUVdOcVF5eERRVUZCTzBsQlJVUXNlVUpCUVdsRExGTkJRVkVzVjBGQlZ6dFJRVWRzUkN4WlFVRlpMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlZTeEZRVUZGTEVOQlFWVTdXVUZETVVjc1RVRkJUU3hGUVVGRkxFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGREwwVXNUVUZCVFN4RFFVRkRMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRPVVVzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVU1zUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RlFVRlRMRVZCUVVVc1EwRkJVVHRaUVVOMFF5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTlCUVU4c1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTI1RExFTkJRVU03UzBGRFJqdEpRV1JaTEN0Q1FVRnRRaXh6UWtGakwwSXNRMEZCUVR0SlFVTkVMSGxDUVVGcFF5eFRRVUZSTEZkQlFWYzdVVUZIYkVRc1dVRkJXU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZPMWxCUXpGSExFMUJRVTBzUlVGQlJTeEhRVUZWTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJWeXhGUVVGRkxFTkJRVmNzUTBGQlF5eERRVUZETzFsQlF5OUZMRTFCUVUwc1EwRkJReXhIUVVGVkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCVnl4RlFVRkZMRU5CUVZjc1EwRkJReXhEUVVGRE8xbEJRemxGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZETEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1JVRkJVeXhGUVVGRkxFTkJRVkU3V1VGRGRFTXNUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFF5eERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVOdVF5eERRVUZETzB0QlEwWTdTVUZrV1N3clFrRkJiVUlzYzBKQll5OUNMRU5CUVVFN1NVRkZSQ3dyUWtGQmRVTXNVMEZCVVN4WFFVRlhPMUZCUjNoRUxGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEhsQ1FVRjVRaXhGUVVGRkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNrWXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUk8xbEJRek5DTEU5QlFVOHNTVUZCU1N4NVFrRkJlVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhReXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4UFFVRlBMRWxCUVVrc2VVSkJRWGxDTEVWQlFVVXNRMEZCUXp0UlFVTjZReXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRMEZCZVVJc05FSkJXWEpETEVOQlFVRTdTVUZEUkN3clFrRkJkVU1zVTBGQlVTeFhRVUZYTzFGQlIzaEVMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRja1lzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJPMWxCUXpOQ0xFOUJRVThzU1VGQlNTeDVRa0ZCZVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeFBRVUZQTEVsQlFVa3NlVUpCUVhsQ0xFVkJRVVVzUTBGQlF6dFJRVU42UXl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UTBGQmVVSXNORUpCV1hKRExFTkJRVUU3U1VGRlJDeFhRVUUwUWl4VFFVRlJMRmRCUVZjN1VVRkROME1zV1VGQldTeFBRVUUwUXl4RlFVRlRMRWxCUVZjc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRlRMRWxCUVZjc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRlRMR05CUVhOQ0xFTkJRVU1zUlVGQlV5eFhRVUZ2UWl4TFFVRkxMRVZCUVZNc2FVSkJRVEJDTEVsQlFVazdXVUZEY2s4c1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlJHZEVMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRWGxDTzFsQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJlVUk3V1VGQlV5eG5Ra0ZCVnl4SFFVRllMRmRCUVZjc1EwRkJXVHRaUVVGVExHRkJRVkVzUjBGQlVpeFJRVUZSTEVOQlFXbENPMWxCUVZNc2JVSkJRV01zUjBGQlpDeGpRVUZqTEVOQlFXZENPMUZCUlhaUExFTkJRVU03VVVGRFRTeFJRVUZSTzFsQlEySXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEYWtrc1EwRkJRenRSUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZYTzFsQlF6RkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOcVNTeERRVUZETzB0QlIwWTdTVUZpY1VJc2FVSkJRVXNzVVVGaE1VSXNRMEZCUVR0SlFVVkVMR05CUVhOQ0xGTkJRVkVzUzBGQlN6dFJRVWRxUXl4WlFVRlpMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQmJVSXNSVUZCUlN4RFFVRnZRaXhGUVVGRkxFTkJRVzlDTEVWQlFVVXNRMEZCVnl4RlFVRkZMRU5CUVZjN1dVRkROMHNzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZEY0VVc1RVRkJUU3hEUVVGRExFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGRE9VVXNTVUZCU1N4WFFVRlhMRWRCUVZjc1EwRkJReXhEUVVGRE8xbEJRelZDTEVsQlFVa3NVVUZCVVN4SFFVRlpMRXRCUVVzc1EwRkJRenRaUVVNNVFpeEpRVUZKTEdOQlFXTXNSMEZCV1N4SlFVRkpMRU5CUVVNN1dVRkRia01zU1VGQlNTeERRVUZETEZsQlFWa3NZVUZCU3l4SlFVRkpMRU5CUVVNc1dVRkJXU3hoUVVGTExFVkJRVVU3WjBKQlF6VkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eEZRVUZGTzI5Q1FVTTFRaXhYUVVGWExFZEJRVWNzUTBGQlZ5eERRVUZETzJsQ1FVTXpRanRuUWtGRFJDeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1JVRkJSVHR2UWtGRE5VSXNVVUZCVVN4SFFVRkhMRU5CUVZrc1EwRkJRenRwUWtGRGVrSTdaMEpCUTBRc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVWQlFVVTdiMEpCUXpWQ0xHTkJRV01zUjBGQlJ5eERRVUZaTEVOQlFVTTdhVUpCUXk5Q08yRkJRMFk3YVVKQlFVMDdaMEpCUTB3c1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVWQlFVVTdiMEpCUXpWQ0xGZEJRVmNzUjBGQlJ5eERRVUZYTEVOQlFVTTdhVUpCUXpOQ08yZENRVU5FTEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU0xUWl4UlFVRlJMRWRCUVVjc1EwRkJXU3hEUVVGRE8ybENRVU42UWp0blFrRkRSQ3hKUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEZkQlFWY3NSVUZCUlR0dlFrRkROVUlzWTBGQll5eEhRVUZITEVOQlFWa3NRMEZCUXp0cFFrRkRMMEk3WVVGRFJqdFpRVU5FTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNWMEZCVnl4RlFVRkZMRkZCUVZFc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFJRVU4yUlN4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFTkJRVkVzUlVGQlJTeERRVUZSTEVWQlFVVXNWMEZCYlVJc1JVRkJSU3hSUVVGcFFpeEZRVUZGTEdOQlFXTTdXVUZETjBZc1QwRkJUeXhKUVVGSkxGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hSUVVGUkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZEYmtVc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUMEZCVHl4SlFVRkpMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEVOQlFVTTdTMEZEUmp0SlFYUkRXU3h2UWtGQlVTeFhRWE5EY0VJc1EwRkJRVHRKUVVORUxHTkJRWE5DTEZOQlFWRXNTMEZCU3p0UlFVZHFReXhaUVVGWkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCYlVJc1JVRkJSU3hEUVVGdlFpeEZRVUZGTEVOQlFXOUNMRVZCUVVVc1EwRkJWeXhGUVVGRkxFTkJRVmM3V1VGRE4wc3NUVUZCVFN4RFFVRkRMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRjRVVzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZET1VVc1NVRkJTU3hYUVVGWExFZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1VVRkJVU3hIUVVGWkxFdEJRVXNzUTBGQlF6dFpRVU01UWl4SlFVRkpMR05CUVdNc1IwRkJXU3hKUVVGSkxFTkJRVU03V1VGRGJrTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1lVRkJTeXhKUVVGSkxFTkJRVU1zV1VGQldTeGhRVUZMTEVWQlFVVTdaMEpCUXpWRExFbEJRVWtzVDBGQlR5eERRVUZETEV0QlFVc3NWMEZCVnl4RlFVRkZPMjlDUVVNMVFpeFhRVUZYTEVkQlFVY3NRMEZCVnl4RFFVRkRPMmxDUVVNelFqdG5Ra0ZEUkN4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExGZEJRVmNzUlVGQlJUdHZRa0ZETlVJc1VVRkJVU3hIUVVGSExFTkJRVmtzUTBGQlF6dHBRa0ZEZWtJN1owSkJRMFFzU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRVZCUVVVN2IwSkJRelZDTEdOQlFXTXNSMEZCUnl4RFFVRlpMRU5CUVVNN2FVSkJReTlDTzJGQlEwWTdhVUpCUVUwN1owSkJRMHdzU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRVZCUVVVN2IwSkJRelZDTEZkQlFWY3NSMEZCUnl4RFFVRlhMRU5CUVVNN2FVSkJRek5DTzJkQ1FVTkVMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eEZRVUZGTzI5Q1FVTTFRaXhSUVVGUkxFZEJRVWNzUTBGQldTeERRVUZETzJsQ1FVTjZRanRuUWtGRFJDeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1JVRkJSVHR2UWtGRE5VSXNZMEZCWXl4SFFVRkhMRU5CUVZrc1EwRkJRenRwUWtGREwwSTdZVUZEUmp0WlFVTkVMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxGRkJRVkVzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVTjJSU3hEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVOQlFWRXNSVUZCUlN4RFFVRlJMRVZCUVVVc1YwRkJiVUlzUlVGQlJTeFJRVUZwUWl4RlFVRkZMR05CUVdNN1dVRkROMFlzVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeFJRVUZSTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkRia1VzUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1QwRkJUeXhKUVVGSkxGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEzaENMRU5CUVVNN1MwRkRSanRKUVhSRFdTeHZRa0ZCVVN4WFFYTkRjRUlzUTBGQlFUdEJRVU5JTEVOQlFVTXNSVUY2V21kQ0xGZEJRVmNzUjBGQldDeHRRa0ZCVnl4TFFVRllMRzFDUVVGWExGRkJlVm96UWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQcmVzZXJ2ZUFzcGVjdFJhdGlvIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIG1lZXRPclNsaWNlKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMubWVldE9yU2xpY2UgPSBtZWV0T3JTbGljZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgc3RyID0gYHgke3RoaXMueH1ZJHt0aGlzLnl9YDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVldE9yU2xpY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgdGhpcy5tZWV0T3JTbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlByZXNlcnZlQXNwZWN0UmF0aW8gPSBQcmVzZXJ2ZUFzcGVjdFJhdGlvO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWeWRtVXRZWE53WldOMExYSmhkR2x2TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljSEpsYzJWeWRtVXRZWE53WldOMExYSmhkR2x2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3U1VGSlJTeFpRVUZ0UWl4RFFVRjVRaXhGUVVGVExFTkJRWGxDTEVWQlFWTXNWMEZCT0VJN1VVRkJiRWNzVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCZDBJN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUYzUWp0UlFVRlRMR2RDUVVGWExFZEJRVmdzVjBGQlZ5eERRVUZ0UWp0SlFVRkhMRU5CUVVNN1NVRkRiRWdzVVVGQlVUdFJRVU5pTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRhRVFzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTnFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOc1F5eEhRVUZITEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03WVVGREwwSTdXVUZEUkN4UFFVRlBMRWRCUVVjc1EwRkJRenRUUVVOYU8yRkJRVTA3V1VGRFRDeFBRVUZQTEUxQlFVMHNRMEZCUXp0VFFVTm1PMGxCUTBnc1EwRkJRenREUVVOR08wRkJhRUpFTEd0RVFXZENReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW8udHNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRyaXhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yb3RhdGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zY2FsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NrZXdcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmFuc2xhdGVcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3NFFrRkJlVUk3UVVGRGVrSXNOa0pCUVhkQ08wRkJRM2hDTERSQ1FVRjFRanRCUVVOMlFpeHBRMEZCTkVJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcclxuY2xhc3MgTWF0cml4X1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhID0gMSwgYiA9IDAsIGMgPSAwLCBkID0gMSwgZSA9IDAsIGYgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJtYXRyaXhcIik7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHRoaXMuYyA9IGM7XHJcbiAgICAgICAgdGhpcy5kID0gZDtcclxuICAgICAgICB0aGlzLmUgPSBlO1xyXG4gICAgICAgIHRoaXMuZiA9IGY7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmF9ICR7dGhpcy5ifSAke3RoaXMuY30gJHt0aGlzLmR9ICR7dGhpcy5lfSAke3RoaXMuZn1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4X1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pLCBwYXJzZUZsb2F0KHRva3NbMl0pLCBwYXJzZUZsb2F0KHRva3NbM10pLCBwYXJzZUZsb2F0KHRva3NbNF0pLCBwYXJzZUZsb2F0KHRva3NbNV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4X1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hdHJpeF9UcmFuc2Zvcm0gPSBNYXRyaXhfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNORU5CUVhsRE8wRkJSWHBETEhOQ1FVRTRRaXhUUVVGUkxIRkNRVUZUTzBsQlF6ZERMRmxCUVcxQ0xFbEJRVmtzUTBGQlF5eEZRVUZUTEVsQlFWa3NRMEZCUXl4RlFVRlRMRWxCUVZrc1EwRkJReXhGUVVGVExFbEJRVmtzUTBGQlF5eEZRVUZUTEVsQlFWa3NRMEZCUXl4RlFVRlRMRWxCUVZrc1EwRkJRenRSUVVNMVNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkVReXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRSUVVGVExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0UlFVRlRMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3U1VGRk9Va3NRMEZCUXp0SlFVTk5MRWxCUVVrN1VVRkRWQ3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOMlJTeERRVUZETzBsQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVd0Q08xRkJRMnBETEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOb1FpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRTlCUVU4c1NVRkJTU3huUWtGQlowSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5LTzJGQlFVMDdXVUZEVEN4UFFVRlBMRWxCUVVrc1owSkJRV2RDTEVWQlFVVXNRMEZCUXp0VFFVTXZRanRKUVVOSUxFTkJRVU03UTBGRFJqdEJRV1pFTERSRFFXVkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL21hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtXCIpO1xyXG5jbGFzcyBTa2V3WF9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSA9IDApIHtcclxuICAgICAgICBzdXBlcihcInNrZXdYXCIpO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2tld1hfVHJhbnNmb3JtKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrZXdYX1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNrZXdYX1RyYW5zZm9ybSA9IFNrZXdYX1RyYW5zZm9ybTtcclxuY2xhc3MgU2tld1lfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJza2V3WVwiKTtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrZXdZX1RyYW5zZm9ybShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2V3WV9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ta2V3WV9UcmFuc2Zvcm0gPSBTa2V3WV9UcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMydGxkeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluTnJaWGN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3cwUTBGQmVVTTdRVUZGZWtNc2NVSkJRVFpDTEZOQlFWRXNjVUpCUVZNN1NVRkROVU1zV1VGQmJVSXNTVUZCV1N4RFFVRkRPMUZCUXpsQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVUkZMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3U1VGRmFFTXNRMEZCUXp0SlFVTk5MRWxCUVVrN1VVRkRWQ3hQUVVGUExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRnJRanRSUVVOcVF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkRhRUlzVDBGQlR5eEpRVUZKTEdWQlFXVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU0zUXp0aFFVRk5PMWxCUTB3c1QwRkJUeXhKUVVGSkxHVkJRV1VzUlVGQlJTeERRVUZETzFOQlF6bENPMGxCUTBnc1EwRkJRenREUVVOR08wRkJaRVFzTUVOQlkwTTdRVUZGUkN4eFFrRkJOa0lzVTBGQlVTeHhRa0ZCVXp0SlFVTTFReXhaUVVGdFFpeEpRVUZaTEVOQlFVTTdVVUZET1VJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlJFVXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRKUVVWb1F5eERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRTlCUVU4c1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wbEJRMDBzVTBGQlV5eERRVUZETEVkQlFXdENPMUZCUTJwRExFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTm9RaXhQUVVGUExFbEJRVWtzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRemRETzJGQlFVMDdXVUZEVEN4UFFVRlBMRWxCUVVrc1pVRkJaU3hGUVVGRkxFTkJRVU03VTBGRE9VSTdTVUZEU0N4RFFVRkRPME5CUTBZN1FVRmtSQ3d3UTBGalF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50c1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9maWx0ZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ub24tcmVuZGVyYWJsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlcmFibGVcIikpO1xyXG5jb25zdCBGaWx0ZXJQcmltaXRpdmVzID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXNcIik7XHJcbmV4cG9ydHMuRmlsdGVyUHJpbWl0aXZlcyA9IEZpbHRlclByaW1pdGl2ZXM7XHJcbmNvbnN0IE5vblJlbmRlcmFibGVzID0gcmVxdWlyZShcIi4vbm9uLXJlbmRlcmFibGVzXCIpO1xyXG5leHBvcnRzLk5vblJlbmRlcmFibGVzID0gTm9uUmVuZGVyYWJsZXM7XHJcbmNvbnN0IFJlbmRlcmFibGVzID0gcmVxdWlyZShcIi4vcmVuZGVyYWJsZXNcIik7XHJcbmV4cG9ydHMuUmVuZGVyYWJsZXMgPSBSZW5kZXJhYmxlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEhkRFFVRnRRenRCUVVOdVF5dzRRa0ZCZVVJN1FVRkRla0lzYzBOQlFXbERPMEZCUTJwRExHdERRVUUyUWp0QlFVVTNRaXgzUkVGQmQwUTdRVUZMZEVRc05FTkJRV2RDTzBGQlNteENMRzlFUVVGdlJEdEJRVXRzUkN4M1EwRkJZenRCUVVwb1FpdzJRMEZCTmtNN1FVRkxNME1zYTBOQlFWY2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpO1xyXG5jb25zdCBibGVuZF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvYmxlbmRcIik7XHJcbmNvbnN0IGNvbG9yX21hdHJpeF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29sb3ItbWF0cml4XCIpO1xyXG5jb25zdCBjb21wb25lbnRfdHJhbnNmZXJfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvbmVudC10cmFuc2ZlclwiKTtcclxuY29uc3QgY29tcG9zaXRlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9jb21wb3NpdGVcIik7XHJcbmNvbnN0IGNvbnZvbHZlX21hdHJpeF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4XCIpO1xyXG5jb25zdCBkaXNwbGFjZW1lbnRfbWFwXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwXCIpO1xyXG5jb25zdCBmbG9vZF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvZmxvb2RcIik7XHJcbmNvbnN0IGdhdXNzaWFuX2JsdXJfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2dhdXNzaWFuLWJsdXJcIik7XHJcbmNvbnN0IGltYWdlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9pbWFnZVwiKTtcclxuY29uc3QgZGlmZnVzZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvZGlmZnVzZVwiKTtcclxuY29uc3QgZGlzdGFudF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2Rpc3RhbnRcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnRcIik7XHJcbmNvbnN0IHNwb3RfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90XCIpO1xyXG5jb25zdCBzcGVjdWxhcl8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvc3BlY3VsYXJcIik7XHJcbmNvbnN0IG1lcmdlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9tZXJnZVwiKTtcclxuY29uc3QgbW9ycGhvbG9neV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbW9ycGhvbG9neVwiKTtcclxuY29uc3Qgb2Zmc2V0XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9vZmZzZXRcIik7XHJcbmNvbnN0IHRpbGVfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL3RpbGVcIik7XHJcbmNvbnN0IHRyYW5zZmVyX2Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy90cmFuc2Zlci1mdW5jdGlvblwiKTtcclxuY29uc3QgdHVyYnVsZW5jZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvdHVyYnVsZW5jZVwiKTtcclxuY29uc3QgbWVyZ2UgPSAoYSwgYikgPT4ge1xyXG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIGZvciAoY29uc3QgYVByb3AgaW4gYSkge1xyXG4gICAgICAgIG9ialthUHJvcF0gPSBhW2FQcm9wXTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgYlByb3AgaW4gYikge1xyXG4gICAgICAgIG9ialtiUHJvcF0gPSBiW2JQcm9wXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbn07XHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImZpbHRlclwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuX3JlZkNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRVbmlxdWVQcmltaXRpdmVSZWZlcmVuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuICgrK3RoaXMuX3JlZkNvdW50ZXIpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBibGVuZChtb2RlLCBpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgYmxlbmRfMS5CbGVuZF9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQxLFxyXG4gICAgICAgICAgICBpbjI6IGlucHV0MixcclxuICAgICAgICAgICAgbW9kZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbG9yTWF0cml4KG1hdHJpeCwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbG9yX21hdHJpeF8xLkNvbG9yTWF0cml4X1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dCxcclxuICAgICAgICAgICAgdHlwZTogbWF0cml4LnR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlczogbWF0cml4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50VHJhbnNmZXIociwgZywgYiwgYSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRUcmFuc2ZlciA9IG5ldyBjb21wb25lbnRfdHJhbnNmZXJfMS5Db21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiUlwiLCByKSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiR1wiLCBnKSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiQlwiLCBiKSk7XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJBXCIsIGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFRyYW5zZmVyO1xyXG4gICAgfVxyXG4gICAgY29tcG9zaXRlKG9wZXJhdG9yLCBrMSwgazIsIGszLCBrNCwgaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbXBvc2l0ZV8xLkNvbXBvc2l0ZV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQxLFxyXG4gICAgICAgICAgICBpbjI6IGlucHV0MixcclxuICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgIGsxLFxyXG4gICAgICAgICAgICBrMixcclxuICAgICAgICAgICAgazMsXHJcbiAgICAgICAgICAgIGs0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29udm9sdmVNYXRyaXgoYXR0cnMsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb252b2x2ZV9tYXRyaXhfMS5Db252b2x2ZU1hdHJpeF9QcmltaXRpdmUodGhpcywgbWVyZ2UoYXR0cnMsIHsgaW46IGlucHV0IH0pKTtcclxuICAgIH1cclxuICAgIGRpZmZ1c2VMaWdodGluZyhhdHRycywgbGlnaHRzID0gW10sIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgZGlmZnVzZV8xLkRpZmZ1c2VMaWdodGluZyh0aGlzLCBtZXJnZShhdHRycywgeyBpbjogaW5wdXQgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKGZlLCBsaWdodHMpO1xyXG4gICAgICAgIHJldHVybiBmZTtcclxuICAgIH1cclxuICAgIGRpc3BsYWNlbWVudE1hcChhdHRycywgaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGRpc3BsYWNlbWVudF9tYXBfMS5EaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlKHRoaXMsIG1lcmdlKGF0dHJzLCB7IGluOiBpbnB1dDEsIGluMjogaW5wdXQyIH0pKTtcclxuICAgIH1cclxuICAgIGZsb29kKGNvbG9yLCBhcmVhKSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgZmxvb2RfMS5GbG9vZF9QcmltaXRpdmUodGhpcywgeyBcImZsb29kLWNvbG9yXCI6IGNvbG9yIH0pO1xyXG4gICAgICAgIGZlLnNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICB4OiBhcmVhLngsXHJcbiAgICAgICAgICAgIHk6IGFyZWEueSxcclxuICAgICAgICAgICAgd2lkdGg6IGFyZWEud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYXJlYS5oZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgZ2F1c3NpYW5CbHVyKHN0ZERldmlhdGlvbiA9IDAsIGVkZ2VNb2RlID0gXCJkdXBsaWNhdGVcIiwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGdhdXNzaWFuX2JsdXJfMS5HYXVzc2lhbkJsdXJfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBzdGREZXZpYXRpb24sXHJcbiAgICAgICAgICAgIGVkZ2VNb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW1hZ2UoaHJlZiwgcHJlc2VydmVBc3BlY3RSYXRpbykge1xyXG4gICAgICAgIHJldHVybiBuZXcgaW1hZ2VfMS5JbWFnZV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogaHJlZixcclxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1lcmdlKGlucHV0cykge1xyXG4gICAgICAgIGNvbnN0IGZlID0gbmV3IG1lcmdlXzEuTWVyZ2VfUHJpbWl0aXZlKHRoaXMpO1xyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVyZ2VOb2RlID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMuY29udGV4dCwgXCJmZU1lcmdlTm9kZVwiLCB7IGluOiBpbnB1dCB9KTtcclxuICAgICAgICAgICAgZmUuYWRkKG1lcmdlTm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgbW9ycGhvbG9neShvcGVyYXRvciwgcmFkaXVzLCBpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgbW9ycGhvbG9neV8xLk1vcnBob2xvZ3lfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb2Zmc2V0KGQsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBvZmZzZXRfMS5PZmZzZXRfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBkeDogZC54LFxyXG4gICAgICAgICAgICBkeTogZC55LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3BlY3VsYXJMaWdodGluZyhhdHRycywgbGlnaHRzID0gW10sIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgc3BlY3VsYXJfMS5TcGVjdWxhckxpZ2h0aW5nKHRoaXMsIGF0dHJzKTtcclxuICAgICAgICB0aGlzLmFkZExpZ2h0cyhmZSwgbGlnaHRzKTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICB0aWxlKGFyZWEsIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgdGlsZV8xLlRpbGVfUHJpbWl0aXZlKHRoaXMsIHsgaW46IGlucHV0IH0pO1xyXG4gICAgICAgIGZlLnNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICB4OiBhcmVhLngsXHJcbiAgICAgICAgICAgIHk6IGFyZWEueSxcclxuICAgICAgICAgICAgd2lkdGg6IGFyZWEud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYXJlYS5oZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgdHVyYnVsZW5jZShhdHRycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgdHVyYnVsZW5jZV8xLlR1cmJ1bGVuY2VfUHJpbWl0aXZlKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIGFkZExpZ2h0cyhsaWdodGluZywgbGlnaHRzKSB7XHJcbiAgICAgICAgbGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpZ2h0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgcG9pbnRfMS5Qb2ludExpZ2h0KHRoaXMsIGxpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGlzdGFudFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgZGlzdGFudF8xLkRpc3RhbnRMaWdodCh0aGlzLCBsaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNwb3RcIjpcclxuICAgICAgICAgICAgICAgICAgICBsaWdodGluZy5hZGQobmV3IHNwb3RfMS5TcG90TGlnaHQodGhpcywgbGlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmlsdGVyID0gRmlsdGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labWxzZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWm1sc2RHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRXNkME5CUVhGRE8wRkJSM0pETEhGRVFVRTBSRHRCUVVNMVJDeHRSVUZCZVVVN1FVRkRla1VzSzBWQlFYRkdPMEZCUTNKR0xEWkVRVUZ2UlR0QlFVTndSU3g1UlVGQk1FYzdRVUZETVVjc01rVkJRVFpITzBGQlF6ZEhMSEZFUVVFMFJEdEJRVU0xUkN4eFJVRkJNa1U3UVVGRE0wVXNjVVJCUVRSRU8wRkJRelZFTEd0RlFVRnRSenRCUVVWdVJ5d3JSVUZCYVVZN1FVRkRha1lzTWtWQlFUWkZPMEZCUXpkRkxIbEZRVUV5UlR0QlFVTXpSU3h2UlVGQmMwYzdRVUZEZEVjc2NVUkJRVFJFTzBGQlF6VkVMQ3RFUVVGelJUdEJRVU4wUlN4MVJFRkJPRVE3UVVGRE9VUXNiVVJCUVRCRU8wRkJRekZFTERaRlFVRm5TRHRCUVVOb1NDd3JSRUZCTmtZN1FVRnpRamRHTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVU4c1EwRkJTU3hGUVVGRkxFTkJRVWtzUlVGQlV5eEZRVUZGTzBsQlEzaERMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRhRU1zUzBGQlN5eE5RVUZOTEV0QlFVc3NTVUZCU1N4RFFVRkRMRVZCUVVVN1VVRkRja0lzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU4yUWp0SlFVTkVMRXRCUVVzc1RVRkJUU3hMUVVGTExFbEJRVWtzUTBGQlF5eEZRVUZGTzFGQlEzSkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1MwRkRka0k3U1VGRFJDeFBRVUZQTEVkQlFVY3NRMEZCUXp0QlFVTmlMRU5CUVVNc1EwRkJRenRCUVVWR0xGbEJRVzlDTEZOQlFWRXNhVUpCUVRKRU8wbEJSM0pHTEZsQlFXMUNMRTlCUVdkQ08xRkJRMnBETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRVVpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRlRPMUZCUkROQ0xHZENRVUZYTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUnpsQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZEVFN3eVFrRkJNa0k3VVVGRGFFTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRFRTeExRVUZMTEVOQlFVTXNTVUZCTmtRc1JVRkJSU3hOUVVGdFFpeEZRVUZGTEUxQlFXOUNPMUZCUTI1SUxFOUJRVThzU1VGQlNTeDFRa0ZCWlN4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVNdlFpeEZRVUZGTEVWQlFVVXNUVUZCVFR0WlFVTldMRWRCUVVjc1JVRkJSU3hOUVVGTk8xbEJRMWdzU1VGQlNUdFRRVU5NTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zVFVGQmJVSXNSVUZCUlN4TFFVRnRRanRSUVVONlJDeFBRVUZQTEVsQlFVa3NiME5CUVhGQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTzFsQlEzSkRMRVZCUVVVc1JVRkJSU3hMUVVGTE8xbEJRMVFzU1VGQlNTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpPMWxCUTJwQ0xFMUJRVTBzUlVGQlJTeE5RVUZOTzFOQlEyWXNRMEZCUXl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVOTkxHbENRVUZwUWl4RFFVRkRMRU5CUVRoQ0xFVkJRVVVzUTBGQk9FSXNSVUZCUlN4RFFVRTRRaXhGUVVGRkxFTkJRU3RDTEVWQlFVVXNTMEZCYlVJN1VVRkRNMHNzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxHZEVRVUV5UWl4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVNNVJDeEZRVUZGTEVWQlFVVXNTMEZCU3p0VFFVTldMRU5CUVVNc1EwRkJRenRSUVVOSUxHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxEaERRVUV3UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndSU3hwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3c0UTBGQk1FSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VVc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc09FTkJRVEJDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkZMRWxCUVVrc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU51UWl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N3NFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGNrVTdVVUZEUkN4UFFVRlBMR2xDUVVGcFFpeERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRkRUU3hUUVVGVExFTkJRVU1zVVVGQkswUXNSVUZCUlN4RlFVRlZMRVZCUVVVc1JVRkJWU3hGUVVGRkxFVkJRVlVzUlVGQlJTeEZRVUZWTEVWQlFVVXNUVUZCYjBJc1JVRkJSU3hOUVVGdlFqdFJRVU14U3l4UFFVRlBMRWxCUVVrc0swSkJRVzFDTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTI1RExFVkJRVVVzUlVGQlJTeE5RVUZOTzFsQlExWXNSMEZCUnl4RlFVRkZMRTFCUVUwN1dVRkRXQ3hSUVVGUk8xbEJRMUlzUlVGQlJUdFpRVU5HTEVWQlFVVTdXVUZEUml4RlFVRkZPMWxCUTBZc1JVRkJSVHRUUVVOSUxFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZEVFN4alFVRmpMRU5CUVVNc1MwRkJlVU1zUlVGQlJTeExRVUZ0UWp0UlFVTnNSaXhQUVVGUExFbEJRVWtzTUVOQlFYZENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcEZMRU5CUVVNN1NVRkRUU3hsUVVGbExFTkJRVU1zUzBGQk1FTXNSVUZCUlN4VFFVRnRReXhGUVVGRkxFVkJRVVVzUzBGQmJVSTdVVUZETTBnc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeDVRa0ZCWlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZEVFN4bFFVRmxMRU5CUVVNc1MwRkJNRU1zUlVGQlJTeE5RVUZ2UWl4RlFVRkZMRTFCUVc5Q08xRkJRek5ITEU5QlFVOHNTVUZCU1N3MFEwRkJlVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40Uml4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFdEJRVmtzUlVGQlJTeEpRVUZUTzFGQlEyeERMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzZFVKQlFXVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hoUVVGaExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXZSQ3hGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlEyWXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVFzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFRc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTzFsQlEycENMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRUdFRRVU53UWl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZEVFN4WlFVRlpMRU5CUVVNc1pVRkJkVUlzUTBGQlF5eEZRVUZGTEZkQlFYZERMRmRCUVZjc1JVRkJSU3hMUVVGdFFqdFJRVU53U0N4UFFVRlBMRWxCUVVrc2MwTkJRWE5DTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTNSRExFVkJRVVVzUlVGQlJTeExRVUZMTzFsQlExUXNXVUZCV1R0WlFVTmFMRkZCUVZFN1UwRkRWQ3hEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWxCUVZrc1JVRkJSU3h0UWtGQmVVTTdVVUZEYkVVc1QwRkJUeXhKUVVGSkxIVkNRVUZsTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUXk5Q0xGbEJRVmtzUlVGQlJTeEpRVUZKTzFsQlEyeENMRzFDUVVGdFFqdFRRVU53UWl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEUxQlFYRkNPMUZCUTJoRExFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NkVUpCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU55UXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzSkNMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzYVVKQlFVOHNRMEZCYTBjc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeGhRVUZoTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU16U3l4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzQkNMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUTAwc1ZVRkJWU3hEUVVGRExGRkJRVFJDTEVWQlFVVXNUVUZCTkVJc1JVRkJSU3hMUVVGdFFqdFJRVU12Uml4UFFVRlBMRWxCUVVrc2FVTkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTNCRExFVkJRVVVzUlVGQlJTeExRVUZMTzFsQlExUXNVVUZCVVR0WlFVTlNMRTFCUVUwN1UwRkRVQ3hEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlEwMHNUVUZCVFN4RFFVRkRMRU5CUVZFc1JVRkJSU3hMUVVGdFFqdFJRVU42UXl4UFFVRlBMRWxCUVVrc2VVSkJRV2RDTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTJoRExFVkJRVVVzUlVGQlJTeExRVUZMTzFsQlExUXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUFzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTFJc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVU5OTEdkQ1FVRm5RaXhEUVVGRExFdEJRVEpETEVWQlFVVXNVMEZCYlVNc1JVRkJSU3hGUVVGRkxFdEJRVzFDTzFGQlF6ZElMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzTWtKQlFXZENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFOUJRVThzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhKUVVGVExFVkJRVVVzUzBGQmJVSTdVVUZEZUVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFVkJRVVVzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZEWml4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZDeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWQ3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYWtJc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTzFOQlEzQkNMRU5CUVVNc1EwRkJRenRSUVVOSUxFOUJRVThzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVTk5MRlZCUVZVc1EwRkJReXhMUVVGeFF6dFJRVU55UkN4UFFVRlBMRWxCUVVrc2FVTkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlETEVOQlFVTTdTVUZEVHl4VFFVRlRMRU5CUVVNc1VVRkJPRWNzUlVGQlJTeE5RVUZuUXp0UlFVTm9TeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNKQ0xGRkJRVkVzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlR0blFrRkRiRUlzUzBGQlN5eFBRVUZQTzI5Q1FVTldMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeHJRa0ZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTXhReXhOUVVGTk8yZENRVU5TTEV0QlFVc3NVMEZCVXp0dlFrRkRXaXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NjMEpCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROVU1zVFVGQlRUdG5Ra0ZEVWl4TFFVRkxMRTFCUVUwN2IwSkJRMVFzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMR2RDUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM3BETEUxQlFVMDdZVUZEVkR0UlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF6dERRVU5HTzBGQmVFbEVMSGRDUVhkSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ibGVuZFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbG9yLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvbmVudC10cmFuc2ZlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvc2l0ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnZvbHZlLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Rpc3BsYWNlbWVudC1tYXBcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mbG9vZFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhdXNzaWFuLWJsdXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9pbWFnZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21lcmdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbW9ycGhvbG9neVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL29mZnNldFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RpbGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmFuc2Zlci1mdW5jdGlvblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3R1cmJ1bGVuY2VcIikpO1xyXG5jb25zdCBMaWdodGluZyA9IHJlcXVpcmUoXCIuL2xpZ2h0aW5nXCIpO1xyXG5leHBvcnRzLkxpZ2h0aW5nID0gTGlnaHRpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEWkNRVUYzUWp0QlFVTjRRaXh2UTBGQkswSTdRVUZETDBJc01FTkJRWEZETzBGQlEzSkRMR2xEUVVFMFFqdEJRVU0xUWl4MVEwRkJhME03UVVGRGJFTXNkME5CUVcxRE8wRkJRMjVETERaQ1FVRjNRanRCUVVONFFpeHhRMEZCWjBNN1FVRkRhRU1zTmtKQlFYZENPMEZCUTNoQ0xEWkNRVUYzUWp0QlFVTjRRaXhyUTBGQk5rSTdRVUZETjBJc09FSkJRWGxDTzBGQlEzcENMRFJDUVVGMVFqdEJRVU4yUWl4NVEwRkJiME03UVVGRGNFTXNhME5CUVRaQ08wRkJSVGRDTEhWRFFVRjFRenRCUVVkeVF5dzBRa0ZCVVNKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXR0cmlidXRlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RpZmZ1c2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGVjdWxhclwiKSk7XHJcbmNvbnN0IExpZ2h0U291cmNlID0gcmVxdWlyZShcIi4vbGlnaHQtc291cmNlXCIpO1xyXG5leHBvcnRzLkxpZ2h0U291cmNlID0gTGlnaHRTb3VyY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdERRVUUyUWp0QlFVTTNRaXdyUWtGQk1FSTdRVUZETVVJc1owTkJRVEpDTzBGQlJUTkNMRGhEUVVFNFF6dEJRVWMxUXl4clEwRkJWeUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYUjBjbWxpZFhSbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1GMGRISnBZblYwWlhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9hdHRyaWJ1dGVzLnRzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXR0cmlidXRlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Rpc3RhbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2ludFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Nwb3RcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR3REUVVFMlFqdEJRVU0zUWl3clFrRkJNRUk3UVVGRE1VSXNOa0pCUVhkQ08wRkJRM2hDTERSQ1FVRjFRaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWFIwY21saWRYUmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltRjBkSEpwWW5WMFpYTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2F0dHJpYnV0ZXMudHNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jbGlwLXBhdGhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXJrZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXNrXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGFpbnQtc2VydmVyXCIpKTtcclxuY29uc3QgUGFpbnRTZXJ2ZXJzID0gcmVxdWlyZShcIi4vcGFpbnQtc2VydmVyc1wiKTtcclxuZXhwb3J0cy5QYWludFNlcnZlcnMgPSBQYWludFNlcnZlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHbERRVUUwUWp0QlFVTTFRaXc0UWtGQmVVSTdRVUZEZWtJc05FSkJRWFZDTzBGQlEzWkNMRzlEUVVFclFqdEJRVVV2UWl4blJFRkJaMFE3UVVGSE9VTXNiME5CUVZraWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ncmFkaWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhdHRlcm5cIikpO1xyXG5jb25zdCBHcmFkaWVudHMgPSByZXF1aXJlKFwiLi9ncmFkaWVudHNcIik7XHJcbmV4cG9ydHMuR3JhZGllbnRzID0gR3JhZGllbnRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR2REUVVFeVFqdEJRVU16UWl3clFrRkJNRUk3UVVGRk1VSXNlVU5CUVhsRE8wRkJSM1pETERoQ1FVRlRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9saW5lYXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yYWRpYWxcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3NFFrRkJlVUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2V4dGVybmFsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZm9yZWlnbi1vYmplY3RcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ncm91cFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90ZXh0XCIpKTtcclxuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vc2hhcGVzXCIpO1xyXG5leHBvcnRzLlNoYXBlcyA9IFNoYXBlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEdsRFFVRTBRanRCUVVNMVFpeG5RMEZCTWtJN1FVRkRNMElzYzBOQlFXbERPMEZCUTJwRExEWkNRVUYzUWp0QlFVTjRRaXcyUWtGQmQwSTdRVUZEZUVJc05rSkJRWGRDTzBGQlEzaENMRFJDUVVGMVFqdEJRVVYyUWl4dFEwRkJiVU03UVVGSGFrTXNkMEpCUVUwaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NpcmNsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VsbGlwc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9saW5lXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGF0aFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvbHlnb25cIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2x5bGluZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlY3RcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3clFrRkJNRUk3UVVGRE1VSXNORUpCUVhWQ08wRkJRM1pDTERSQ1FVRjFRanRCUVVOMlFpd3JRa0ZCTUVJN1FVRkRNVUlzWjBOQlFUSkNPMEZCUXpOQ0xEUkNRVUYxUWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==