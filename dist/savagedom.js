/*
 * SavageDOM 1.0.0-alpha.36 (https://github.com/molisani/SavageDOM) 
 * Copyright 2018 Michael Molisani
 * Licensed under LGPL-3.0 (https://github.com/molisani/SavageDOM/blob/master/LICENSE)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Rx"));
	else if(typeof define === 'function' && define.amd)
		define("SavageDOM", ["Rx"], factory);
	else if(typeof exports === 'object')
		exports["SavageDOM"] = factory(require("Rx"));
	else
		root["SavageDOM"] = factory(root["Rx"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_12__) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbHRlci1wcmltaXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx3Q0FBcUM7QUFpQnJDLHFCQUF1RCxTQUFRLGlCQUFtRTtJQUNoSSxZQUFZLE1BQWMsRUFBRSxJQUFZLEVBQUUsUUFBaUQsRUFBRSxFQUFVLE9BQWUsTUFBTSxDQUFDLDJCQUEyQixFQUFFO1FBQ3hKLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFEMEMsU0FBSSxHQUFKLElBQUksQ0FBK0M7UUFFeEosSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ00sUUFBUTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQVRELDBDQVNDIn0=

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._lerp = (a, b, t) => a + ((b - a) * t);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJwb2xhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVycG9sYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLEtBQUssR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyJ9

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
const constants_1 = __webpack_require__(10);
const rxjs_1 = __webpack_require__(12);
const box_1 = __webpack_require__(13);
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
        for (const attr in attrs) {
            const val = attrs[attr];
            if (val !== undefined && val !== null) {
                this.setAttribute(attr, val);
            }
        }
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
        return renderer_1.Renderer.getInstance().registerAttributeInterpolation(this, name, attr.interpolate.bind(attr, from), duration, easing);
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
                const attr = attrs.item(i).name;
                if (includeExclude[attr] === true || defaultInclude) {
                    style[attr] = el._style.getPropertyValue(attr);
                }
            }
        }
        else {
            for (let i = 0; i < attrs.length; ++i) {
                const attr = attrs.item(i).name;
                style[attr] = el._style.getPropertyValue(attr);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBaUU7QUFDakUsMkNBQXFEO0FBRXJELDJDQUFvQztBQUlwQywrQkFBeUQ7QUFFekQsMENBQXVDO0FBQ3ZDLG9EQUFzRDtBQUN0RCw2QkFBMkM7QUFJM0M7SUFPRSxZQUFtQixPQUFnQixFQUFFLEVBQWdCLEVBQUUsS0FBMkIsRUFBVSxNQUFjLHdCQUFtQixFQUFFO1FBQTVHLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBeUQsUUFBRyxHQUFILEdBQUcsQ0FBZ0M7UUFKdkgsMEJBQXFCLEdBQUcsRUFBa0QsQ0FBQztRQUtqRixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBSyxFQUFFLEVBQUUsQ0FBUSxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxD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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.Transform = Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUE7SUFDRSxZQUFtQixJQUFxRTtRQUFyRSxTQUFJLEdBQUosSUFBSSxDQUFpRTtJQUFHLENBQUM7SUFFckYsUUFBUTtRQUNiLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDeEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7UUFDMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZLEVBQUUsUUFBb0I7UUFDaEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixNQUFNLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzFGLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztDQUVGO0FBaERELDhCQWdEQyJ9

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
class AbstractRenderable extends element_1.Element {
    getPointEvent(events) {
        return this.getEvent(events).map((event) => {
            const action = (event instanceof TouchEvent) ? event.touches[0] : event;
            const ref = this.context.refPoint;
            ref.x = action.clientX;
            ref.y = action.clientY;
            const local = ref.matrixTransform(this.node.getScreenCTM().inverse());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbmRlcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSx3Q0FBcUM7QUFtQnJDLHdCQUF1SCxTQUFRLGlCQUE0RDtJQUNsTCxhQUFhLENBQUMsTUFBYztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7WUFDbEUsTUFBTSxNQUFNLEdBQXVCLENBQUMsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDNUYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbEMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN2QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN0RSxNQUFNLENBQUM7Z0JBQ0wsS0FBSyxFQUFFO29CQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDVixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ1g7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSztvQkFDZixDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUs7aUJBQ2hCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU87b0JBQ2pCLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTztpQkFDbEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUF4QkQsZ0RBd0JDIn0=

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
const interpolation_1 = __webpack_require__(1);
const dimension_1 = __webpack_require__(8);
exports._LengthParse = (css) => {
    const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
    if (m !== null) {
        return new dimension_1.Dimension(parseFloat(m[1]), m[2]);
    }
    return parseFloat(css);
};
exports._LengthInterpolate = (a, b, t) => {
    if (typeof a !== "number") {
        if (typeof b !== "number") {
            return b.interpolate(a, t);
        }
        else {
            return a.interpolate(new dimension_1.Dimension(b, a.unit), 1 - t);
        }
    }
    else {
        if (typeof b !== "number") {
            return b.interpolate(new dimension_1.Dimension(a, b.unit), t);
        }
        else {
            return interpolation_1._lerp(a, b, t);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvREFBeUM7QUFFekMsMkNBQXdHO0FBYzNGLFFBQUEsWUFBWSxHQUFHLENBQUMsR0FBVyxFQUFVLEVBQUU7SUFDbEQsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLElBQUkscUJBQVMsQ0FBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUU7SUFDNUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLHFCQUFTLENBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztJQUNILENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxxQkFBUyxDQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLHFCQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyJ9

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
                const toPx = Dimension.convert[m[2]];
                const fromPx = 1 / Dimension.convert[this.unit];
                if (toPx !== undefined && fromPx !== undefined) {
                    return new Dimension(parseFloat(m[1]) * toPx * fromPx, this.unit);
                }
                else {
                    return new Dimension(parseFloat(m[1]), m[2]);
                }
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
    interpolate(from, t) {
        if (this.unit !== from.unit) {
            const toPx = Dimension.convert[this.unit];
            const fromPx = 1 / Dimension.convert[from.unit];
            if (toPx !== undefined && fromPx !== undefined) {
                return new Dimension(interpolation_1._lerp(from.value, this.value, t) * toPx * fromPx, this.unit);
            }
        }
        return new Dimension(interpolation_1._lerp(from.value, this.value, t), this.unit);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGltZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0RBQXlDO0FBTXpDO0lBYUUsWUFBbUIsS0FBYSxFQUFTLElBQVU7UUFBaEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBQ2hELFFBQVE7UUFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBYyxDQUFDLENBQUM7Z0JBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLElBQUksU0FBUyxDQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FB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

/***/ }),
/* 9 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHNFQUFtRTtBQUNuRSw4Q0FBaUc7QUFJakcsV0FBbUIsU0FBUSwrQkFBcUQ7SUFDOUUsWUFBWSxPQUFnQixFQUFFLEtBQXNDO1FBQ2xFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFJTSxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLElBQVU7UUFDdkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0Y7QUFaRCxzQkFZQyJ9

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLNS = "http://www.w3.org/2000/svg";
exports.XLINK = "http://www.w3.org/1999/xlink";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxLQUFLLEdBQUcsNEJBQTRCLENBQUM7QUFDckMsUUFBQSxLQUFLLEdBQUcsOEJBQThCLENBQUMifQ==

/***/ }),
/* 11 */
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
const rxjs_1 = __webpack_require__(12);
const box_1 = __webpack_require__(13);
const point_1 = __webpack_require__(14);
const constants_1 = __webpack_require__(10);
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
const group_1 = __webpack_require__(9);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUFpRDtBQUVqRCwwQ0FBdUM7QUFFdkMsOENBQTJDO0FBRTNDLDJDQUEyQztBQUMzQyx5Q0FBc0Q7QUFDdEQsdUNBQW9DO0FBQ3BDLG9FQUFnRTtBQUNoRSw4REFBMkQ7QUFDM0QsMERBQXVEO0FBRXZELHNGQUFzSDtBQUN0SCxzRkFBc0g7QUFDdEgsOEVBQTJFO0FBRTNFLDhEQUE4RDtBQUM5RCwwRUFBc0U7QUFDdEUsd0RBQXFEO0FBQ3JELHdEQUFxRDtBQUNyRCxpRUFBOEQ7QUFDOUQsbUVBQWdFO0FBQ2hFLDZEQUEwRDtBQUMxRCw2REFBMEQ7QUFDMUQsbUVBQWdFO0FBQ2hFLHFFQUFrRTtBQUNsRSw2REFBMEQ7QUFDMUQsc0RBQW1EO0FBTW5EO0lBWUUsWUFBWSxJQUE2QixFQUFVLFVBQWtCLE9BQU8sQ0FBQyxjQUFjO1FBQXhDLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBQ3pGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Z0JBQzVELENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJ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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(7);
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
    interpolate(from, t) {
        return new Box(base_1._LengthInterpolate(from.x, this.x, t), base_1._LengthInterpolate(from.y, this.y, t), base_1._LengthInterpolate(from.width, this.width, t), base_1._LengthInterpolate(from.height, this.height, t));
    }
}
exports.Box = Box;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsaUNBQW9EO0FBRXBEO0lBQ0UsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxLQUFhLEVBQVMsTUFBYztRQUF4RSxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUN4RixRQUFRO1FBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVELENBQUM7SUFDTSxLQUFLLENBQUMsR0FBa0I7UUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckcsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWTtRQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJ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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(7);
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
    interpolate(from, t) {
        return new Point(base_1._LengthInterpolate(from.x, this.x, t), base_1._LengthInterpolate(from.y, this.y, t));
    }
}
exports.Point = Point;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGlDQUFrRTtBQUVsRTtJQUNFLFlBQW1CLENBQVMsRUFBUyxDQUFTO1FBQTNCLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUcsQ0FBQztJQUMzQyxRQUFRO1FBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWTtRQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMs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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2N1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBR0UsWUFBWSxPQUFnQixFQUFFLEdBQXNCLEVBQUUsV0FBbUIsaUJBQWlCO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFlBQVksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JHLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQWUsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQVcsUUFBUTtRQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdFLENBQUM7O0FBaEJjLGtCQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUQxQyxrQ0FrQkM7QUFFWSxRQUFBLFdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQXFCLEVBQUU7SUFDNUQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLE1BQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQzt3QkFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07d0JBQ2xCLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtxQkFDM0IsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDakIsTUFBTSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtnQkFDbEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO2FBQzNCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(8);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZEQUFzRTtBQVF0RSw4Q0FBMkM7QUFFM0Msa0RBQXNEO0FBMEJ0RCxVQUFrQixTQUFRLGlCQUE4RDtJQUN0RixZQUFZLE9BQWdCLEVBQVMsTUFBYyxFQUFFLEtBQXVDO1FBQzFGLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLHFCQUFTLENBQU0sTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDN0MsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBSmdDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFLbkQsQ0FBQztDQUNGO0FBUEQsb0JBT0M7QUFFRCxzQkFBNkcsU0FBUSxrQ0FBMEM7SUFDN0osWUFBWSxPQUFnQixFQUFFLElBQVksRUFBRSxLQUFZLEVBQUUsS0FBOEQ7UUFDdEgsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFiRCw0Q0FhQyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdHRlcm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFXQSxrREFBc0Q7QUF5QnRELGFBQXFCLFNBQVEsa0NBQTBEO0lBR3JGLFlBQW1CLE9BQWdCLEVBQUUsQ0FBNkIsRUFBRSxJQUFZLENBQUMsQ0FBQyxZQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQyxFQUFFLElBQVU7UUFDaEssS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRGhELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNNLEtBQUssQ0FBQyxPQUFnQixJQUFJO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0Y7QUFyQkQsMEJBcUJDIn0=

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _defaultGet(element, attr) {
    return this.parse(element.getAttribute(attr));
}
exports._defaultGet = _defaultGet;
function _defaultSet(element, attr, override) {
    const value = (typeof override === "undefined") ? this : override;
    element.setAttribute(attr, String(value));
}
exports._defaultSet = _defaultSet;
exports.isAttribute = (obj) => {
    return obj && (typeof obj["interpolate"] === "function") && (typeof obj["parse"] === "function");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0EscUJBQW1ELE9BQW1CLEVBQUUsSUFBWTtJQUNsRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUZELGtDQUVDO0FBRUQscUJBQXdDLE9BQW1CLEVBQUUsSUFBWSxFQUFFLFFBQVk7SUFDckYsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDbEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUhELGtDQUdDO0FBRVksUUFBQSxXQUFXLEdBQUcsQ0FBQyxHQUF5QixFQUF5QixFQUFFO0lBQzlFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDO0FBQ25HLENBQUMsQ0FBQyJ9

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(12);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtCQUFzRDtBQUV0RCw4QkFBNEM7QUE4QjVDO0lBUUU7UUFIUSxvQkFBZSxHQUFHLGlCQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxnQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLHNCQUFpQixHQUFHLElBQUksY0FBTyxFQUFvRCxDQUFDO1FBQ3BGLDZCQUF3QixHQUE2RSxFQUFFLENBQUM7UUFFOUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEYsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO2dCQUNwQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDekQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFB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

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
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        return new NumberWrapper(interpolation_1._lerp(from.n, this.n, t));
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
    interpolate(from, t) {
        return new ArrayWrapper(this.arr.map((s, i) => s.interpolate(from.arr[i], t)));
    }
}
exports.ArrayWrapper = ArrayWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3cmFwcGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG9EQUF5QztBQUV6QztJQUNFLFlBQW1CLElBQVksQ0FBQztRQUFiLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFBRyxDQUFDO0lBQzdCLFFBQVE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZLEVBQUUsUUFBd0I7UUFDcEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNNLFdBQVcsQ0FBQyxJQUFtQixFQUFFLENBQVM7UUFDL0MsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBckJELHNDQXFCQztBQUVEO0lBQ0UsWUFBbUIsTUFBVyxFQUFFO1FBQWIsUUFBRyxHQUFILEdBQUcsQ0FBVTtJQUVoQyxDQUFDO0lBQ00sUUFBUTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWTtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUEwQjtRQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBQ00sV0FBVyxDQUFDLElBQXFCLEVBQUUsQ0FBUztRQUNqRCxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDRjtBQXhCRCxvQ0F3QkMifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcC1wYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpcC1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsc0RBQTBEO0FBa0IxRCxjQUFzQixTQUFRLHNDQUEwRDtJQUN0RixZQUFtQixPQUFnQixFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxLQUE4QyxFQUFFLFlBQXFEO1FBQ3hMLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFEVixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBdkJELDRCQXVCQyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxzREFBMEQ7QUFpQjFELFVBQWtCLFNBQVEsc0NBQXNEO0lBQzlFLFlBQW1CLE9BQWdCLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLEtBQThDLEVBQUUsWUFBcUQ7UUFDeEwsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUROLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUF2QkQsb0JBdUJDIn0=

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
const context_1 = __webpack_require__(11);
const document_1 = __webpack_require__(15);
const component_1 = __webpack_require__(29);
const group_1 = __webpack_require__(9);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleHRlcm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUN4Qyw2Q0FBMEQ7QUFFMUQsMkNBQXdDO0FBQ3hDLG1DQUFnQztBQUVoQyxpQkFBeUIsU0FBUSxhQUFLO0lBQ3BDLFlBQVksT0FBZ0IsRUFBRSxHQUFnQixFQUFFLEtBQXNDO1FBQ3BGLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFSRCxrQ0FRQztBQU9ELHFDQUE0QyxHQUFXLEVBQUUsU0FBbUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDeEcsTUFBTSxhQUFhLEdBQUcsc0JBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUMsTUFBTSxTQUFTLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzVFLE1BQU0sQ0FBQyxJQUFJLHNCQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLEtBQU0sU0FBUSxxQkFBUztRQUU1QjtZQUNFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUMvQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUM3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQW5CRCxrRUFtQkMifQ==

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = __webpack_require__(30);
const rotate_1 = __webpack_require__(31);
const scale_1 = __webpack_require__(32);
const translate_1 = __webpack_require__(33);
const context_1 = __webpack_require__(11);
const group_1 = __webpack_require__(9);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQWdFO0FBRWhFLCtEQUFzRTtBQUN0RSw2REFBb0U7QUFDcEUscUVBQTRFO0FBQzVFLDJDQUF3QztBQUN4QyxtQ0FBZ0M7QUFFaEMsZUFBdUIsU0FBUSxhQUFLO0lBd0JsQyxZQUFZLE1BQWlDLEVBQVksU0FBeUIsZUFBTTtRQUN0RixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRDhCLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBRGhGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHdEIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLCtCQUFtQixFQUFFLEVBQUUsSUFBSSx5QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLHVCQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUE5Qk0sTUFBTSxLQUFLLE9BQU87UUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLElBQUksY0FBYyxDQUFDLGtHQUFrRyxDQUFDLENBQUM7UUFDL0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFDTSxNQUFNLEtBQUssT0FBTyxDQUFDLEdBQVk7UUFDcEMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFD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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWFzaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFRNUIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFhLEVBQUU7SUFDM0QsTUFBTSxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFO1FBQ3RCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFO1FBQ2xCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtLQUNWLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckYsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFakcsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFxQixFQUFFLENBQVMsRUFBRSxDQUFZLEVBQVUsRUFBRTtJQUM3RSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FB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

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        return new Rotate_Transform(interpolation_1._lerp(from.a, this.a, t), interpolation_1._lerp(from.x, this.x, t), interpolation_1._lerp(from.y, this.y, t));
    }
}
exports.Rotate_Transform = Rotate_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm90YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQTRDO0FBQzVDLDRDQUF5QztBQUV6QyxzQkFBOEIsU0FBUSxxQkFBUztJQUM3QyxZQUFtQixDQUFTLEVBQVMsSUFBWSxDQUFDLEVBQVMsSUFBWSxDQUFDO1FBQ3RFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURDLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBWTtJQUV4RSxDQUFDO0lBQ00sSUFBSTtRQUNULE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFrQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsSUFBc0IsRUFBRSxDQUFTO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUcsQ0FBQztDQUNGO0FBbEJELDRDQWtCQyJ9

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        return new UniformScale_Transform(interpolation_1._lerp(from.s, this.s, t));
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
    interpolate(from, t) {
        return new Scale_Transform(interpolation_1._lerp(from.x, this.x, t), interpolation_1._lerp(from.y, this.y, t));
    }
}
exports.Scale_Transform = Scale_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUE0QztBQUM1Qyw0Q0FBeUM7QUFFekMsNEJBQW9DLFNBQVEscUJBQVM7SUFDbkQsWUFBbUIsSUFBWSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURFLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFFaEMsQ0FBQztJQUNNLElBQUk7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00sU0FBUyxDQUFDLEdBQWtCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsSUFBNEIsRUFBRSxDQUFTO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLHNCQUFzQixDQUFDLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGO0FBakJELHdEQWlCQztBQUVELHFCQUE2QixTQUFRLHFCQUFTO0lBQzVDLFlBQW1CLElBQVksQ0FBQyxFQUFTLElBQVksQ0FBQztRQUNwRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERSxNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBWTtJQUV0RCxDQUFDO0lBQ00sSUFBSTtRQUNULE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTSxTQUFTLENBQUMsR0FBa0I7UUFDakMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsSUFBcUIsRUFBRSxDQUFTO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FDRjtBQXRCRCwwQ0FzQkMifQ==

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        return new Translate_Transform(interpolation_1._lerp(from.x, this.x, t), interpolation_1._lerp(from.y, this.y, t));
    }
}
exports.Translate_Transform = Translate_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQTRDO0FBQzVDLDRDQUF5QztBQUV6Qyx5QkFBaUMsU0FBUSxxQkFBUztJQUNoRCxZQUFtQixJQUFZLENBQUMsRUFBUyxJQUFZLENBQUM7UUFDcEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBREYsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFFdEQsQ0FBQztJQUNNLElBQUk7UUFDVCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ00sU0FBUyxDQUFDLEdBQWtCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLElBQUksbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQXlCLEVBQUUsQ0FBUztRQUNyRCxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Q0FDRjtBQXRCRCxrREFzQkMifQ==

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
const dimension_1 = __webpack_require__(8);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwREFBdUQ7QUFFdkQsZ0VBQTREO0FBRTVELDhDQUErRjtBQThCL0YsY0FBc0IsU0FBUSwrQkFBNEQ7SUFDeEYsWUFBWSxPQUFnQixFQUFFLEtBQTREO1FBQ3hGLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFXLGNBQWM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFQRCw0QkFPQztBQVlELFVBQWtCLFNBQVEsK0JBQXVEO0lBQy9FLFlBQVksT0FBZ0IsRUFBRSxLQUF3RDtRQUNwRixLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ00sT0FBTyxDQUFDLE9BQW9CLEVBQUUsVUFBNEIsRUFBRSxTQUFrQixJQUFJO1FBQ3ZGLE1BQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsRSxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLHFCQUFTLENBQU8sVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakUs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

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
    parse(css) {
        return new TextContent(css || "");
    }
    get(element, attr) {
        return this.parse(element.textContent);
    }
    set(element, attr, override) {
        element.textContent = TextContent.escapeHtml(this._str || this._cb());
    }
    interpolate(from, t) {
        return t < 0.5 ? from : this;
    }
}
exports.TextContent = TextContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV4dC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDVSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBS0QsWUFBWSxHQUE0QjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLEdBQUcsQ0FBK0IsT0FBbUIsRUFBRSxJQUFPO1FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ00sR0FBRyxDQUErQixPQUFtQixFQUFFLElBQU8sRUFBRSxRQUFzQjtRQUMzRixPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQWlCLEVBQUUsQ0FBUztRQUM3QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBM0JELGtDQTJCQyJ9

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
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(15));
__export(__webpack_require__(3));
__export(__webpack_require__(66));
__export(__webpack_require__(1));
const Animation = __webpack_require__(67);
exports.Animation = Animation;
const Attributes = __webpack_require__(68);
exports.Attributes = Attributes;
const Elements = __webpack_require__(78);
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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(30));
__export(__webpack_require__(20));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6QixnQ0FBMkIifQ==

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(13));
__export(__webpack_require__(69));
__export(__webpack_require__(70));
__export(__webpack_require__(8));
__export(__webpack_require__(71));
__export(__webpack_require__(72));
__export(__webpack_require__(73));
__export(__webpack_require__(14));
__export(__webpack_require__(74));
__export(__webpack_require__(44));
__export(__webpack_require__(4));
__export(__webpack_require__(22));
const Transforms = __webpack_require__(75);
exports.Transforms = Transforms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUF1QjtBQUN2QiwyQkFBc0I7QUFDdEIsb0NBQStCO0FBQy9CLDZCQUF3QjtBQUN4QixpQ0FBNEI7QUFDNUIsOEJBQXlCO0FBQ3pCLDhDQUF5QztBQUN6QyxvQ0FBK0I7QUFDL0IsNkJBQXdCO0FBQ3hCLDZDQUF3QztBQUN4QyxvQ0FBK0I7QUFDL0IsaUNBQTRCO0FBQzVCLGdDQUEyQjtBQUUzQiwyQ0FBMkM7QUFDbEMsZ0NBQVUifQ==

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
var ColorMatrix;
(function (ColorMatrix) {
    class Raw {
        constructor(values = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]]) {
            this.type = "matrix";
            this.arr = [];
            this.arr = this.arr.concat(...values);
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
        interpolate(from, t) {
            return new Raw([this.arr.map((val, i) => interpolation_1._lerp(from[i], val, t))]);
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
        interpolate(from, t) {
            return new Saturate(interpolation_1._lerp(from.value, this.value, t));
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
        interpolate(from, t) {
            return new HueRotate(interpolation_1._lerp(from.value, this.value, t));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sb3ItbWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0RBQXlDO0FBUXpDLElBQWlCLFdBQVcsQ0E2RjNCO0FBN0ZELFdBQWlCLFdBQVc7SUFFMUI7UUFHRSxZQUFZLFNBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFGL0csU0FBSSxHQUFhLFFBQVEsQ0FBQztZQUMxQixRQUFHLEdBQWEsRUFBRSxDQUFDO1lBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ00sS0FBSyxDQUFDLEdBQWtCO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixDQUFDO1FBQ0gs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

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
class RGBImpl {
    constructor(x = 0, y = 0, z = 0, a = 1) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;
        if (typeof x === "string") {
            const rgbaMatch = x.match(/^rgba\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
            if (rgbaMatch !== null) {
                this.r = parseInt(rgbaMatch[1], 10);
                this.g = parseInt(rgbaMatch[2], 10);
                this.b = parseInt(rgbaMatch[3], 10);
                this.a = parseFloat(rgbaMatch[4]);
            }
            const rgbMatch = x.match(/^rgb\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?\)$/i);
            if (rgbMatch !== null) {
                this.r = parseInt(rgbMatch[1], 10);
                this.g = parseInt(rgbMatch[2], 10);
                this.b = parseInt(rgbMatch[3], 10);
            }
        }
        else {
            this.r = x;
            this.g = y;
            this.b = z;
            this.a = a;
        }
    }
    toString() {
        return `rgba(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)}, ${this.a})`;
    }
    toHSL() {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const avg = (max + min) / 2;
        const d = max - min;
        let h;
        let s;
        const l = avg;
        if (d === 0) {
            h = 0;
            s = 0;
        }
        else {
            s = d / (1 - Math.abs(2 * avg - 1));
            switch (max) {
                case r:
                    h = ((g - b) / d) % 6;
                    break;
                case g:
                    h = ((b - r) / d) + 2;
                    break;
                case b:
                    h = ((r - g) / d) + 4;
                    break;
                default:
                    h = 0;
                    break;
            }
            h *= 60;
        }
        return new HSLImpl(h, s, l);
    }
    interpolate(from, t, mode) {
        const modePrefix = mode.substr(0, 3);
        if (modePrefix === "rgb") {
            if (from instanceof HSLImpl) {
                from = from.toRGB();
            }
            if (from instanceof RGBImpl) {
                return new RGBImpl(interpolation_1._lerp(from.r, this.r, t), interpolation_1._lerp(from.g, this.g, t), interpolation_1._lerp(from.b, this.b, t), interpolation_1._lerp(from.a, this.a, t));
            }
        }
        else if (modePrefix === "hsl") {
            return this.toHSL().interpolate(from, t, mode);
        }
        return this;
    }
}
class HSLImpl {
    constructor(x = 0, y = 0, z = 0, a = 1) {
        this.h = 0;
        this.s = 0;
        this.l = 0;
        this.a = 1;
        if (typeof x === "string") {
            const hslaMatch = x.match(/^hsla\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
            if (hslaMatch !== null) {
                this.h = parseFloat(hslaMatch[1]);
                this.s = parseFloat(hslaMatch[2]) / 100;
                this.l = parseFloat(hslaMatch[3]) / 100;
                this.a = parseFloat(hslaMatch[4]);
            }
            const hslMatch = x.match(/^hsl\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?\)$/i);
            if (hslMatch !== null) {
                this.h = parseFloat(hslMatch[1]);
                this.s = parseFloat(hslMatch[2]) / 100;
                this.l = parseFloat(hslMatch[3]) / 100;
            }
        }
        else {
            this.h = x;
            this.s = y;
            this.l = z;
            this.a = a;
        }
    }
    toString() {
        return `hsla(${this.h % 360}, ${this.s * 100}%, ${this.l * 100}%, ${this.a})`;
    }
    toRGB() {
        let r = 0;
        let g = 0;
        let b = 0;
        if (this.s !== 0) {
            const c = (1 - Math.abs(2 * this.l - 1)) * this.s;
            const x = c * (1 - Math.abs((this.h / 60) % 2 - 1));
            if (this.h < 60) {
                r = c;
                g = x;
            }
            else if (this.h < 120) {
                r = x;
                g = c;
            }
            else if (this.h < 180) {
                g = c;
                b = x;
            }
            else if (this.h < 240) {
                g = x;
                b = c;
            }
            else if (this.h < 180) {
                b = c;
                r = x;
            }
            else if (this.h < 240) {
                b = x;
                r = c;
            }
            const m = this.l - 0.5 * c;
            r += m;
            g += m;
            b += m;
        }
        return new RGBImpl(r * 255, g * 255, b * 255);
    }
    interpolate(from, t, mode) {
        const modePrefix = mode.substr(0, 3);
        if (modePrefix === "hsl") {
            if (from instanceof RGBImpl) {
                from = from.toHSL();
            }
            if (from instanceof HSLImpl) {
                let h1 = from.h;
                let h2 = this.h;
                const diff = h1 - h2;
                if (Math.abs(diff) > 180) {
                    if (mode === "hsl-shortest") {
                        if (diff < 0) {
                            h1 += 360;
                        }
                        else if (diff > 0) {
                            h2 += 360;
                        }
                    }
                }
                else {
                    if (mode === "hsl-longest") {
                        if (diff < 0) {
                            h1 += 360;
                        }
                        else if (diff > 0) {
                            h2 += 360;
                        }
                    }
                }
                if (diff > 0 && mode === "hsl-clockwise") {
                    h2 += 360;
                }
                if (diff < 0 && mode === "hsl-counterclockwise") {
                    h1 += 360;
                }
                return new HSLImpl(interpolation_1._lerp(h1, h2, t) % 360, interpolation_1._lerp(from.s, this.s, t), interpolation_1._lerp(from.l, this.l, t), interpolation_1._lerp(from.a, this.a, t));
            }
        }
        else if (modePrefix === "rgb") {
            return this.toRGB().interpolate(from, t, mode);
        }
        return this;
    }
}
class Color {
    constructor(format, a1 = 0, a2 = 0, a3 = 0, a4 = 1) {
        this.mode = Color.DEFAULT_MODE;
        if (format === "rgb") {
            this.impl = new RGBImpl(a1, a2, a3, a4);
        }
        else if (format === "hsl") {
            this.impl = new HSLImpl(a1, a2, a3, a4);
        }
        else if (format !== undefined) {
            if (format.indexOf("rgb") === 0) {
                this.impl = new RGBImpl(format);
            }
            else if (format.indexOf("hsl") === 0) {
                this.impl = new HSLImpl(format);
            }
            else if (format.indexOf("#") === 0) {
                let r = 0;
                let g = 0;
                let b = 0;
                let m = format.match(/^#([0-9a-fA-F]{3})$/i);
                if (m !== null) {
                    r = parseInt(m[1].charAt(0), 16) * 0x11;
                    g = parseInt(m[1].charAt(1), 16) * 0x11;
                    b = parseInt(m[1].charAt(2), 16) * 0x11;
                }
                else {
                    m = format.match(/^#([0-9a-fA-F]{6})$/i);
                    if (m !== null) {
                        r = parseInt(m[1].substr(0, 2), 16);
                        g = parseInt(m[1].substr(2, 2), 16);
                        b = parseInt(m[1].substr(4, 2), 16);
                    }
                }
                this.impl = new RGBImpl(r, g, b);
            }
        }
    }
    asRGB() {
        if (this.impl instanceof RGBImpl) {
            return this.impl;
        }
        if (this.impl instanceof HSLImpl) {
            return this.impl.toRGB();
        }
        throw new Error("Current color implementation does not support conversion to RGB");
    }
    asHSL() {
        if (this.impl instanceof HSLImpl) {
            return this.impl;
        }
        if (this.impl instanceof RGBImpl) {
            return this.impl.toHSL();
        }
        throw new Error("Current color implementation does not support conversion to HSL");
    }
    toString() {
        return this.impl.toString();
    }
    parse(css) {
        if (css !== null) {
            return new Color(css);
        }
        else {
            return new Color();
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
    interpolate(from, t) {
        const c = new Color();
        c.impl = this.impl.interpolate(from.impl, t, this.mode);
        c.mode = this.mode;
        return c;
    }
}
Color.DEFAULT_MODE = "rgb";
exports.Color = Color;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG9EQUF5QztBQWdCekM7SUFRRSxZQUFZLElBQXFCLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUM7UUFQeEUsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUtuQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsdUxBQXVMLENBQUMsQ0FBQztZQUNuTixFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsNEpBQTRKLENBQUMsQ0FBQztZQUN2TCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMs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LENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3pDLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUM7SUFDSCxDQUFDO0lBQ00sUUFBUTtRQUNiLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNoRixDQUFDO0lBQ00sS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLEdB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

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        return new Matrix([this.arr.map((val, i) => interpolation_1._lerp(from[i], val, t))]);
    }
}
exports.Matrix = Matrix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0RBQXlDO0FBRXpDO0lBRUUsWUFBWSxNQUFrQjtRQUR2QixRQUFHLEdBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ00sUUFBUTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWSxFQUFFLFFBQWlCO1FBQzdELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQVksRUFBRSxDQUFTO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDRjtBQTVCRCx3QkE0QkMifQ==

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        if (from.o !== undefined && this.o !== undefined) {
            return new NumberOptionalNumber(interpolation_1._lerp(from.n, this.n, t), interpolation_1._lerp(from.o, this.o, t));
        }
        else if (from.o === undefined && this.o !== undefined) {
            return new NumberOptionalNumber(interpolation_1._lerp(from.n, this.n, t), interpolation_1._lerp(0, this.o, t));
        }
        else if (from.o !== undefined && this.o === undefined) {
            return new NumberOptionalNumber(interpolation_1._lerp(from.n, this.n, t), interpolation_1._lerp(from.o, 0, t));
        }
        else {
            return new NumberOptionalNumber(interpolation_1._lerp(from.n, this.n, t));
        }
    }
}
exports.NumberOptionalNumber = NumberOptionalNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW9wdGlvbmFsLW51bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm51bWJlci1vcHRpb25hbC1udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvREFBeUM7QUFFekM7SUFDRSxZQUFtQixDQUFTLEVBQVMsQ0FBVTtRQUE1QixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUztJQUFHLENBQUM7SUFDNUMsUUFBUTtRQUNiLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUUsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWSxFQUFFLFFBQStCO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQTBCLEVBQUUsQ0FBUztRQUN0RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7Q0FDRjtBQXRDRCxvREFzQ0MifQ==

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
const base_1 = __webpack_require__(7);
const point_1 = __webpack_require__(14);
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
}
exports.PathSegment = PathSegment;
(function (PathSegment) {
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
        interpolate(from, t) {
            return this.buildInstance(base_1._LengthInterpolate(from.l, this.l, t));
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
        interpolate(from, t) {
            return this.buildInstance(this.p.interpolate(from.p, t));
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
        interpolate(from, t) {
            return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t));
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
        interpolate(from, t) {
            return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t), this.p3.interpolate(from.p3, t));
        }
    }
    PathSegment.TriplePoint = TriplePoint;
    class MoveToAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super("M", p instanceof point_1.Point ? p : new point_1.Point(p, y));
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
            super("m", p instanceof point_1.Point ? p : new point_1.Point(p, y));
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
            super("Z");
        }
        toString() {
            return "Z";
        }
        parseArgs(css) {
            return new ClosePath();
        }
        defaultInstance() {
            return new ClosePath();
        }
        interpolate(from, t) {
            return new ClosePath();
        }
    }
    PathSegment.ClosePath = ClosePath;
    class LineToAbs extends SinglePoint {
        constructor(p = new point_1.Point(0, 0), y = 0) {
            super("L", p instanceof point_1.Point ? p : new point_1.Point(p, y));
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
            super("l", p instanceof point_1.Point ? p : new point_1.Point(p, y));
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
            super("H", h);
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
            super("h", h);
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
            super("V", v);
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
            super("v", v);
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
            super("C", c1, c2, p);
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
            super("c", c1, c2, p);
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
            super("S", c2, p);
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
            super("s", c2, p);
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
            super("Q", c1, p);
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
            super("q", c1, p);
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
            super("T", p instanceof point_1.Point ? p : new point_1.Point(p, y));
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
            super("t", p instanceof point_1.Point ? p : new point_1.Point(p, y));
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
        interpolate(from, t) {
            return this.buildInstance(this.r.interpolate(from.r, t), this.p.interpolate(from.p, t), interpolation_1._lerp(from.xAxisRotate, this.xAxisRotate, t), (t < 0.5) ? from.largeArc : this.largeArc, (t < 0.5) ? from.sweepClockwise : this.sweepClockwise);
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
            super("A", r, p, xAxisRotate, largeArc, sweepClockwise);
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
            super("a", r, p, xAxisRotate, largeArc, sweepClockwise);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1zZWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aC1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0RBQXlDO0FBQ3pDLGlDQUFrRTtBQUNsRSxtQ0FBZ0M7QUFFaEM7SUFDRSxZQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWTtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVksRUFBRSxRQUFzQjtRQUNsRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztDQUlGO0FBdkJELGtDQXVCQztBQUVELFdBQWlCLFdBQVc7SUFJMUIsa0JBQW1DLFNBQVEsV0FBVztR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

/***/ }),
/* 74 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VydmUtYXNwZWN0LXJhdGlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJlc2VydmUtYXNwZWN0LXJhdGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFJRSxZQUFtQixDQUF5QixFQUFTLENBQXlCLEVBQVMsV0FBOEI7UUFBbEcsTUFBQyxHQUFELENBQUMsQ0FBd0I7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUF3QjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUFHLENBQUM7SUFDbEgsUUFBUTtRQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBaEJELGtEQWdCQyJ9

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(76));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(77));
__export(__webpack_require__(33));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6Qiw4QkFBeUI7QUFDekIsNkJBQXdCO0FBQ3hCLDRCQUF1QjtBQUN2QixpQ0FBNEIifQ==

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        return new Matrix_Transform(interpolation_1._lerp(from.a, this.a, t), interpolation_1._lerp(from.b, this.b, t), interpolation_1._lerp(from.c, this.c, t), interpolation_1._lerp(from.d, this.d, t), interpolation_1._lerp(from.e, this.e, t), interpolation_1._lerp(from.f, this.f, t));
    }
}
exports.Matrix_Transform = Matrix_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQTRDO0FBQzVDLDRDQUF5QztBQUV6QyxzQkFBOEIsU0FBUSxxQkFBUztJQUM3QyxZQUFtQixJQUFZLENBQUMsRUFBUyxJQUFZLENBQUMsRUFBUyxJQUFZLENBQUMsRUFBUyxJQUFZLENBQUMsRUFBUyxJQUFZLENBQUMsRUFBUyxJQUFZLENBQUM7UUFDNUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBREMsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVk7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVk7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFZO0lBRTlJLENBQUM7SUFDTSxJQUFJO1FBQ1QsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDO0lBQ00sU0FBUyxDQUFDLEdBQWtCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1SixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQXNCLEVBQUUsQ0FBUztRQUNsRCxNQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFMLENBQUM7Q0FDRjtBQWxCRCw0Q0FrQkMifQ==

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
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
    interpolate(from, t) {
        return new SkewX_Transform(interpolation_1._lerp(from.a, this.a, t));
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
    interpolate(from, t) {
        return new SkewY_Transform(interpolation_1._lerp(from.a, this.a, t));
    }
}
exports.SkewY_Transform = SkewY_Transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNrZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBNEM7QUFDNUMsNENBQXlDO0FBRXpDLHFCQUE2QixTQUFRLHFCQUFTO0lBQzVDLFlBQW1CLElBQVksQ0FBQztRQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERSxNQUFDLEdBQUQsQ0FBQyxDQUFZO0lBRWhDLENBQUM7SUFDTSxJQUFJO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFrQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsSUFBcUIsRUFBRSxDQUFTO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQWpCRCwwQ0FpQkM7QUFFRCxxQkFBNkIsU0FBUSxxQkFBUztJQUM1QyxZQUFtQixJQUFZLENBQUM7UUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsTUFBQyxHQUFELENBQUMsQ0FBWTtJQUVoQyxDQUFDO0lBQ00sSUFBSTtRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTSxTQUFTLENBQUMsR0FBa0I7UUFDakMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQXFCLEVBQUUsQ0FBUztRQUNqRCxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7QUFqQkQsMENBaUJDIn0=

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(79));
__export(__webpack_require__(6));
__export(__webpack_require__(5));
const FilterPrimitives = __webpack_require__(80);
exports.FilterPrimitives = FilterPrimitives;
const NonRenderables = __webpack_require__(85);
exports.NonRenderables = NonRenderables;
const Renderables = __webpack_require__(88);
exports.Renderables = Renderables;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUFtQztBQUNuQyw4QkFBeUI7QUFDekIsc0NBQWlDO0FBQ2pDLGtDQUE2QjtBQUU3Qix3REFBd0Q7QUFLdEQsNENBQWdCO0FBSmxCLG9EQUFvRDtBQUtsRCx3Q0FBYztBQUpoQiw2Q0FBNkM7QUFLM0Msa0NBQVcifQ==

/***/ }),
/* 79 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsd0NBQXFDO0FBR3JDLHFEQUE0RDtBQUM1RCxtRUFBeUU7QUFDekUsK0VBQXFGO0FBQ3JGLDZEQUFvRTtBQUNwRSx5RUFBMEc7QUFDMUcsMkVBQTZHO0FBQzdHLHFEQUE0RDtBQUM1RCxxRUFBMkU7QUFDM0UscURBQTREO0FBQzVELGtFQUFtRztBQUVuRywrRUFBaUY7QUFDakYsMkVBQTZFO0FBQzdFLHlFQUEyRTtBQUMzRSxvRUFBc0c7QUFDdEcscURBQTREO0FBQzVELCtEQUFzRTtBQUN0RSx1REFBOEQ7QUFDOUQsbURBQTBEO0FBQzFELDZFQUFnSDtBQUNoSCwrREFBNkY7QUFzQjdGLE1BQU0sS0FBSyxHQUFHLENBQU8sQ0FBSSxFQUFFLENBQUksRUFBUyxFQUFFO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixZQUFvQixTQUFRLGlCQUEyRDtJQUdyRixZQUFtQixPQUFnQjtRQUNqQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQzQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUc5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

/***/ }),
/* 80 */
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
const Lighting = __webpack_require__(81);
exports.Lighting = Lighting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZCQUF3QjtBQUN4QixvQ0FBK0I7QUFDL0IsMENBQXFDO0FBQ3JDLGlDQUE0QjtBQUM1Qix1Q0FBa0M7QUFDbEMsd0NBQW1DO0FBQ25DLDZCQUF3QjtBQUN4QixxQ0FBZ0M7QUFDaEMsNkJBQXdCO0FBQ3hCLDZCQUF3QjtBQUN4QixrQ0FBNkI7QUFDN0IsOEJBQXlCO0FBQ3pCLDRCQUF1QjtBQUN2Qix5Q0FBb0M7QUFDcEMsa0NBQTZCO0FBRTdCLHVDQUF1QztBQUdyQyw0QkFBUSJ9

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(82));
__export(__webpack_require__(54));
__export(__webpack_require__(58));
const LightSource = __webpack_require__(83);
exports.LightSource = LightSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE2QjtBQUM3QiwrQkFBMEI7QUFDMUIsZ0NBQTJCO0FBRTNCLDhDQUE4QztBQUc1QyxrQ0FBVyJ9

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(84));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
__export(__webpack_require__(57));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE2QjtBQUM3QiwrQkFBMEI7QUFDMUIsNkJBQXdCO0FBQ3hCLDRCQUF1QiJ9

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9

/***/ }),
/* 85 */
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
const PaintServers = __webpack_require__(86);
exports.PaintServers = PaintServers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1Qiw4QkFBeUI7QUFDekIsNEJBQXVCO0FBQ3ZCLG9DQUErQjtBQUUvQixnREFBZ0Q7QUFHOUMsb0NBQVkifQ==

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(16));
__export(__webpack_require__(18));
const Gradients = __webpack_require__(87);
exports.Gradients = Gradients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdDQUEyQjtBQUMzQiwrQkFBMEI7QUFFMUIseUNBQXlDO0FBR3ZDLDhCQUFTIn0=

/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(29));
__export(__webpack_require__(28));
__export(__webpack_require__(34));
__export(__webpack_require__(9));
__export(__webpack_require__(35));
__export(__webpack_require__(2));
__export(__webpack_require__(43));
const Shapes = __webpack_require__(89);
exports.Shapes = Shapes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1QixnQ0FBMkI7QUFDM0Isc0NBQWlDO0FBQ2pDLDZCQUF3QjtBQUN4Qiw2QkFBd0I7QUFDeEIsNkJBQXdCO0FBQ3hCLDRCQUF1QjtBQUV2QixtQ0FBbUM7QUFHakMsd0JBQU0ifQ==

/***/ }),
/* 89 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3MGM0N2RmMTFhYzliMWQ4NzUwOSIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJwb2xhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2RpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSeFwiIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jdW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvd3JhcHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXJrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXNrLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvbGluZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9leHRlcm5hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvcm90YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ZvcmVpZ24tb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5bGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdGV4dC1jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9ibGVuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29sb3ItbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb25lbnQtdHJhbnNmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvc2l0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9mbG9vZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZ2F1c3NpYW4tYmx1ci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2RpZmZ1c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9kaXN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9zcGVjdWxhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21vcnBob2xvZ3kudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL29mZnNldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHJhbnNmZXItZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3R1cmJ1bGVuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9jb2xvci1tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL251bWJlci1vcHRpb25hbC1udW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDhDQUE4QyxVQUFVLEdBQUcsS0FBSztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK3NCOzs7Ozs7O0FDZjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNIM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtTjs7Ozs7OztBQ04zQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrbU87Ozs7Ozs7QUM3STNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixVQUFVLEdBQUcsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdDQUF3QztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtakc7Ozs7Ozs7QUN2RDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbXVDOzs7Ozs7O0FDN0IzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJPOzs7Ozs7O0FDTjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHUvQzs7Ozs7OztBQzdCM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixXQUFXLEVBQUUsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyM0c7Ozs7Ozs7QUN2RTNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbXZCOzs7Ozs7O0FDZjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDJDQUEyQywyTzs7Ozs7OztBQ0ozQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsc0JBQXNCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdURBQXVELHFCQUFxQixJQUFJO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCs3Qzs7Ozs7OztBQzVCM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTyxHQUFHLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyckU7Ozs7Ozs7QUNyRDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sR0FBRyxPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdTlDOzs7Ozs7O0FDaEMzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJqQjs7Ozs7OztBQ2YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELEtBQUssR0FBRyxLQUFLO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHV4Rzs7Ozs7OztBQ3RFM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0Esd0NBQXdDLHNCQUFzQixzQkFBc0I7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1d0M7Ozs7Ozs7QUM1QjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Vjs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJXOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVzs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVXOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVjs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVkOzs7Ozs7O0FDZjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVY7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1ZOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVY7Ozs7Ozs7QUNUM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Vzs7Ozs7OztBQ2xCM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQ0FBMkMsMkk7Ozs7Ozs7QUNGM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkNBQTJDLCtLOzs7Ozs7O0FDUDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtZOzs7Ozs7O0FDcEIzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnRUFBZ0U7QUFDakUsMkNBQTJDLHV1Sjs7Ozs7OztBQzdHM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLElBQUksMkNBQTJDLElBQUksMkNBQTJDLElBQUk7QUFDbEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELElBQUksMkNBQTJDLElBQUksMkNBQTJDLElBQUk7QUFDaEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUIsSUFBSSxtQkFBbUIsSUFBSSxtQkFBbUIsSUFBSSxPQUFPO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsSUFBSSxxREFBcUQsSUFBSSxJQUFJLElBQUkscUNBQXFDLElBQUksSUFBSSxJQUFJO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLHFEQUFxRCxJQUFJLElBQUksSUFBSSxxQ0FBcUMsSUFBSSxJQUFJLElBQUk7QUFDcEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFhLElBQUksYUFBYSxLQUFLLGFBQWEsS0FBSyxPQUFPO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1zZTs7Ozs7OztBQzlSM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbW5EOzs7Ozs7O0FDbkMzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU8sR0FBRyxPQUFPO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrakc7Ozs7Ozs7QUNwRDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhLEdBQUcsa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhLEdBQUcsa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUI7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCLEdBQUcsaUJBQWlCLEdBQUcsc0JBQXNCLEdBQUcsNEJBQTRCLEdBQUcsa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LG1QOzs7Ozs7O0FDWDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK007Ozs7Ozs7QUNUM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkNBQTJDLCtLOzs7Ozs7O0FDUDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVTOzs7Ozs7O0FDZDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVEiLCJmaWxlIjoiZGlzdC9zYXZhZ2Vkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJSeFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlNhdmFnZURPTVwiLCBbXCJSeFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTYXZhZ2VET01cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJSeFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU2F2YWdlRE9NXCJdID0gZmFjdG9yeShyb290W1wiUnhcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzBjNDdkZjExYWM5YjFkODc1MDkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcclxuY2xhc3MgRmlsdGVyUHJpbWl0aXZlIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBuYW1lLCBhdHRycyA9IHt9LCBfcmVmID0gZmlsdGVyLmdldFVuaXF1ZVByaW1pdGl2ZVJlZmVyZW5jZSgpKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLmNvbnRleHQsIG5hbWUsIGF0dHJzLCBgJHtmaWx0ZXIuaWR9LSR7X3JlZn1gKTtcclxuICAgICAgICB0aGlzLl9yZWYgPSBfcmVmO1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwicmVzdWx0XCIsIF9yZWYpO1xyXG4gICAgICAgIGZpbHRlci5hZGQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVmO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmlsdGVyUHJpbWl0aXZlID0gRmlsdGVyUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labWxzZEdWeUxYQnlhVzFwZEdsMlpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1acGJIUmxjaTF3Y21sdGFYUnBkbVV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkhRU3gzUTBGQmNVTTdRVUZwUW5KRExIRkNRVUYxUkN4VFFVRlJMR2xDUVVGdFJUdEpRVU5vU1N4WlFVRlpMRTFCUVdNc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmFVUXNSVUZCUlN4RlFVRlZMRTlCUVdVc1RVRkJUU3hEUVVGRExESkNRVUV5UWl4RlFVRkZPMUZCUTNoS0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSVUZCUlN4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRU1FTXNVMEZCU1N4SFFVRktMRWxCUVVrc1EwRkJLME03VVVGRmVFb3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYkVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJRMDBzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMjVDTEVOQlFVTTdRMEZEUmp0QlFWUkVMREJEUVZOREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuX2xlcnAgPSAoYSwgYiwgdCkgPT4gYSArICgoYiAtIGEpICogdCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNTBaWEp3YjJ4aGRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltbHVkR1Z5Y0c5c1lYUnBiMjR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJZU3hSUVVGQkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ludGVycG9sYXRpb24udHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3JlbmRlcmFibGVcIik7XHJcbmNsYXNzIEFic3RyYWN0U2hhcGUgZXh0ZW5kcyByZW5kZXJhYmxlXzEuQWJzdHJhY3RSZW5kZXJhYmxlIHtcclxufVxyXG5leHBvcnRzLkFic3RyYWN0U2hhcGUgPSBBYnN0cmFjdFNoYXBlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMmhoY0dVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp6YUdGd1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxEaERRVUYzUlR0QlFVMTRSU3h0UWtGQmNVVXNVMEZCVVN3clFrRkJLME03UTBGQlJ6dEJRVUV2U0N4elEwRkJLMGdpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcmVyXzEgPSByZXF1aXJlKFwiLi9hbmltYXRpb24vcmVuZGVyZXJcIik7XHJcbmNvbnN0IGF0dHJpYnV0ZV8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlXCIpO1xyXG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcclxuY29uc3Qgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbmNvbnN0IGJveF8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy9ib3hcIik7XHJcbmNvbnN0IHdyYXBwZXJzXzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzL3dyYXBwZXJzXCIpO1xyXG5jb25zdCBpZF8xID0gcmVxdWlyZShcIi4vaWRcIik7XHJcbmNsYXNzIEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZWwsIGF0dHJzLCBfaWQgPSBpZF8xLnJhbmRvbVNob3J0U3RyaW5nSWQoKSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5faWQgPSBfaWQ7XHJcbiAgICAgICAgdGhpcy5fZHluYW1pY1N1YnNjcmlwdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUgPSB0aGlzLmNvbnRleHQud2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhjb25zdGFudHNfMS5YTUxOUywgZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkQ2hpbGQodGhpcy5fbm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChhdHRycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZXMoYXR0cnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGhpcy5faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZSA9IGVsO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuX25vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGhpcy5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gdGhpcy5jb250ZXh0LndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX25vZGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuICAgIGdldCBub2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGB1cmwoIyR7dGhpcy5faWR9KWA7XHJcbiAgICB9XHJcbiAgICByZW5kZXJBdHRyaWJ1dGUobmFtZSwgdmFsKSB7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZV8xLmlzQXR0cmlidXRlKHZhbCkpIHtcclxuICAgICAgICAgICAgdmFsLnNldCh0aGlzLl9ub2RlLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbC5qb2luKFwiXFx0XCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKG5hbWUsIFN0cmluZyh2YWwpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsKSB7XHJcbiAgICAgICAgcmVuZGVyZXJfMS5SZW5kZXJlci5nZXRJbnN0YW5jZSgpLnF1ZXVlQXR0cmlidXRlVXBkYXRlKHRoaXMsIG5hbWUsIHZhbCk7XHJcbiAgICB9XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGF0dHJzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGF0dHJzW2F0dHJdO1xyXG4gICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5pbWF0ZUF0dHJpYnV0ZShuYW1lLCB2YWwsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgICAgICBsZXQgYXR0cjtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBhdHRyID0gbmV3IHdyYXBwZXJzXzEuTnVtYmVyV3JhcHBlcih2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhdHRyaWJ1dGVfMS5pc0F0dHJpYnV0ZSh2YWwpKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZyb20gPSBhdHRyLmdldCh0aGlzLl9ub2RlLCBuYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyZXJfMS5SZW5kZXJlci5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyQXR0cmlidXRlSW50ZXJwb2xhdGlvbih0aGlzLCBuYW1lLCBhdHRyLmludGVycG9sYXRlLmJpbmQoYXR0ciwgZnJvbSksIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gICAgfVxyXG4gICAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLl9ub2RlLmdldEF0dHJpYnV0ZShuYW1lKSB8fCB0aGlzLl9zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiAodmFsID09PSBcIlwiIHx8IHZhbCA9PT0gXCJub25lXCIpID8gbnVsbCA6IHZhbDtcclxuICAgIH1cclxuICAgIGNvcHlTdHlsZUZyb20oZWwsIGluY2x1ZGVFeGNsdWRlLCBkZWZhdWx0SW5jbHVkZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gZWwuX25vZGUuYXR0cmlidXRlcztcclxuICAgICAgICBpZiAoaW5jbHVkZUV4Y2x1ZGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRXhjbHVkZVthdHRyXSA9PT0gdHJ1ZSB8fCBkZWZhdWx0SW5jbHVkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW2F0dHJdID0gZWwuX3N0eWxlLmdldFByb3BlcnR5VmFsdWUoYXR0cik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRycy5pdGVtKGkpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVthdHRyXSA9IGVsLl9zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGF0dHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRFdmVudChldmVudCkge1xyXG4gICAgICAgIHJldHVybiByeGpzXzEuT2JzZXJ2YWJsZS5tZXJnZSguLi5ldmVudC5zcGxpdChcInxcIikubWFwKChfKSA9PiByeGpzXzEuT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5fbm9kZSwgXykpKTtcclxuICAgIH1cclxuICAgIGdldCBib3VuZGluZ0JveCgpIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5fbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gbmV3IGJveF8xLkJveChyZWN0LmxlZnQsIHJlY3QudG9wLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBhZGQoZWwpIHtcclxuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChlbC5fbm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q2hpbGRyZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9ub2RlLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2gobmV3IEVsZW1lbnQodGhpcy5jb250ZXh0LCBjaGlsZHJlbi5pdGVtKGkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgIH1cclxuICAgIGNsb25lKGRlZXAgPSB0cnVlLCBpZCA9IGlkXzEucmFuZG9tU2hvcnRTdHJpbmdJZCgpKSB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IG5ldyBFbGVtZW50KHRoaXMuY29udGV4dCwgdGhpcy5fbm9kZS5jbG9uZU5vZGUoZGVlcCkpO1xyXG4gICAgICAgIGNvcHkuX2lkID0gaWQ7XHJcbiAgICAgICAgY29weS5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjb3B5Ll9pZCk7XHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX25vZGUucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBjbG9uZU5vZGUoZGVlcCA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMuX25vZGUuY2xvbmVOb2RlKGRlZXApO1xyXG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkXzEucmFuZG9tU2hvcnRTdHJpbmdJZCgpKTtcclxuICAgICAgICByZXR1cm4gY2xvbmU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWld4bGJXVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltVnNaVzFsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4dFJFRkJhVVU3UVVGRGFrVXNNa05CUVhGRU8wRkJSWEpFTERKRFFVRnZRenRCUVVsd1F5d3JRa0ZCZVVRN1FVRkZla1FzTUVOQlFYVkRPMEZCUTNaRExHOUVRVUZ6UkR0QlFVTjBSQ3cyUWtGQk1rTTdRVUZKTTBNN1NVRlBSU3haUVVGdFFpeFBRVUZuUWl4RlFVRkZMRVZCUVdkQ0xFVkJRVVVzUzBGQk1rSXNSVUZCVlN4TlFVRmpMSGRDUVVGdFFpeEZRVUZGTzFGQlFUVkhMRmxCUVU4c1IwRkJVQ3hQUVVGUExFTkJRVk03VVVGQmVVUXNVVUZCUnl4SFFVRklMRWRCUVVjc1EwRkJaME03VVVGS2RrZ3NNRUpCUVhGQ0xFZEJRVWNzUlVGQmEwUXNRMEZCUXp0UlFVdHFSaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhwUWtGQlN5eEZRVUZGTEVWQlFVVXNRMEZCVVN4RFFVRkRPMWxCUXpWRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNMVFpeERRVUZETzFsQlEwUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNeFF5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTm9RaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU42UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRhRUlzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRhRUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETVVNc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGRFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnFSU3hEUVVGRE8wbEJRMFFzU1VGQlZ5eEZRVUZGTzFGQlExZ3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVTkVMRWxCUVZjc1NVRkJTVHRSUVVOaUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNCQ0xFTkJRVU03U1VGRFRTeFJRVUZSTzFGQlEySXNUVUZCVFN4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRkRUU3hsUVVGbExFTkJRV2RETEVsQlFWVXNSVUZCUlN4SFFVRnhRanRSUVVOeVJpeEZRVUZGTEVOQlFVTXNRMEZCUXl4MVFrRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE5VSXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNM1F5eERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRmxCUVZrc1EwRkJaME1zU1VGQlZTeEZRVUZGTEVkQlFYRkNPMUZCUTJ4R0xHMUNRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc2IwSkJRVzlDTEVOQlFUaEVMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZETlVnc1EwRkJRenRKUVVOTkxHRkJRV0VzUTBGQlF5eExRVUV3UWp0UlFVTTNReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRV2xETEVOQlFVTTdXVUZEZUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEZOQlFWTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRMMElzUTBGQlF6dFJRVU5JTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1owSkJRV2RDTEVOQlFXZERMRWxCUVZVc1JVRkJSU3hIUVVGeFFpeEZRVUZGTEZGQlFXZENMRVZCUVVVc1RVRkJjMEk3VVVGRGFFa3NTVUZCU1N4SlFVRnZRaXhEUVVGRE8xRkJRM3BDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVJc1NVRkJTU3hIUVVGSExFbEJRVWtzZDBKQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOb1F5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExIVkNRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRZaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNN1VVRkRWQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFMUJRVTBzUTBGQlF5eHRRa0ZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExEaENRVUU0UWl4RFFVRnhSQ3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGNFd3NRMEZCUXp0SlFWVk5MRmxCUVZrc1EwRkJaME1zU1VGQlZUdFJRVU16UkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEyaEdMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTEVsQlFVa3NSMEZCUnl4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOeVJDeERRVUZETzBsQlIwMHNZVUZCWVN4RFFVRkRMRVZCUVhkRExFVkJRVVVzWTBGQmNVUXNSVUZCUlN4cFFrRkJNRUlzU1VGQlNUdFJRVU5zU2l4TlFVRk5MRXRCUVVzc1IwRkJSeXhGUVVGblFpeERRVUZETzFGQlF5OUNMRTFCUVUwc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRPMUZCUTJ4RExFVkJRVVVzUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia0lzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03WjBKQlEzUkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVU5vUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQmQwSXNRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjRSU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGFrUXNRMEZCUXp0WlFVTklMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRkRU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUTJoRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMnBFTEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVTBzVVVGQlVTeERRVUUyUWl4TFFVRlpPMUZCUTNSRUxFMUJRVTBzUTBGQlF5eHBRa0ZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4cFFrRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU12Uml4RFFVRkRPMGxCUlVRc1NVRkJWeXhYUVVGWE8xRkJRM0JDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1EwRkJRenRSUVVOb1JDeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNSVUZCT0VNN1VVRkRka1FzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4WlFVRlpMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE4wSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETjBJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTI1RExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnp0UlFVTm9RaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOMlF5eE5RVUZOTEZGQlFWRXNSMEZCYjBNc1JVRkJSU3hEUVVGRE8xRkJRM0pFTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzFsQlEzcERMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNelJTeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRTlCUVdkQ0xFbEJRVWtzUlVGQlJTeExRVUZoTEhkQ1FVRnRRaXhGUVVGRk8xRkJRMjVGTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1QwRkJUeXhEUVVFd1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCVVN4RFFVRkRMRU5CUVVNN1VVRkRia2NzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzaERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVOVExGTkJRVk1zUTBGQlF5eFBRVUZuUWl4SlFVRkpPMUZCUTNSRExFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlVTeERRVUZETzFGQlEyaEVMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEhkQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5vUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRMllzUTBGQlF6dERRVU5HTzBGQk1VbEVMREJDUVRCSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnR5cGV9KCR7dGhpcy5hcmdzKCl9KWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJncyhjc3Muc3Vic3RyaW5nKGNzcy5pbmRleE9mKFwiKFwiKSArIDEsIGNzcy5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFyZ3MoY3NzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIgJiYgdG9rc1sxXSA9PT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGNzcy5pbmRleE9mKHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGNzcy5zdWJzdHJpbmcoc3RhcnQsIGNzcy5pbmRleE9mKFwiKVwiLCBzdGFydCkgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UobnVsbCk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSBTdHJpbmcoKG92ZXJyaWRlID09PSB1bmRlZmluZWQpID8gdGhpcyA6IG92ZXJyaWRlKTtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAyICYmIHRva3NbMV0gPT09IHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzBdKTtcclxuICAgICAgICAgICAgaWYgKGNzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjc3MuaW5kZXhPZih0aGlzLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYCR7Y3NzLnN1YnN0cigwLCBzdGFydCl9JHtzdHJ9JHtjc3Muc3Vic3RyKGNzcy5pbmRleE9mKFwiKVwiLCBzdGFydCkgKyAxKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgc3RyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNmb3JtID0gVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWRISmhibk5tYjNKdExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFN1NVRkRSU3haUVVGdFFpeEpRVUZ4UlR0UlFVRnlSU3hUUVVGSkxFZEJRVW9zU1VGQlNTeERRVUZwUlR0SlFVRkhMRU5CUVVNN1NVRkZja1lzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZOTEV0QlFVc3NRMEZCUXl4SFFVRnJRanRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVms3VVVGRE1VTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5TTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOeVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTm1MRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaRkxFTkJRVU03V1VGRFNDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmIwSTdVVUZEYUVVc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJReTlFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETjBJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlETEUxQlFVMHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFVpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRja01zUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEWml4TlFVRk5MRTlCUVU4c1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03YjBKQlF6RkdMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8yZENRVU42UXl4RFFVRkRPMmRDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU55UXl4RFFVRkRPMWxCUTBnc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0pETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRPMGxCUTBnc1EwRkJRenREUVVWR08wRkJhRVJFTERoQ1FXZEVReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm0udHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEFic3RyYWN0UmVuZGVyYWJsZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGdldFBvaW50RXZlbnQoZXZlbnRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnQoZXZlbnRzKS5tYXAoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IChldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50O1xyXG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLmNvbnRleHQucmVmUG9pbnQ7XHJcbiAgICAgICAgICAgIHJlZi54ID0gYWN0aW9uLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHJlZi55ID0gYWN0aW9uLmNsaWVudFk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsID0gcmVmLm1hdHJpeFRyYW5zZm9ybSh0aGlzLm5vZGUuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogbG9jYWwueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBsb2NhbC55LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBhY3Rpb24ucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogYWN0aW9uLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGFjdGlvbi5zY3JlZW5YLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGFjdGlvbi5zY3JlZW5ZLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFic3RyYWN0UmVuZGVyYWJsZSA9IEFic3RyYWN0UmVuZGVyYWJsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdVpHVnlZV0pzWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkpsYm1SbGNtRmliR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkpRU3gzUTBGQmNVTTdRVUZ0UW5KRExIZENRVUYxU0N4VFFVRlJMR2xDUVVFMFJEdEpRVU5zVEN4aFFVRmhMRU5CUVVNc1RVRkJZenRSUVVOcVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRTRRaXhGUVVGRkxFVkJRVVU3V1VGRGJFVXNUVUZCVFN4TlFVRk5MRWRCUVhWQ0xFTkJRVU1zUzBGQlN5eFpRVUZaTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU03V1VGRE5VWXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRPMWxCUTNaQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJRenRaUVVOMlFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4wUlN4TlFVRk5MRU5CUVVNN1owSkJRMHdzUzBGQlN5eEZRVUZGTzI5Q1FVTk1MRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dHZRa0ZEVml4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03YVVKQlExZzdaMEpCUTBRc1NVRkJTU3hGUVVGRk8yOUNRVU5LTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1MwRkJTenR2UWtGRFppeERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRXRCUVVzN2FVSkJRMmhDTzJkQ1FVTkVMRTFCUVUwc1JVRkJSVHR2UWtGRFRpeERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRTlCUVU4N2IwSkJRMnBDTEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1QwRkJUenRwUWtGRGJFSTdZVUZEUml4RFFVRkRPMUZCUTBvc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwWTdRVUY0UWtRc1owUkJkMEpESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEFic3RyYWN0Tm9uUmVuZGVyYWJsZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxufVxyXG5leHBvcnRzLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSA9IEFic3RyYWN0Tm9uUmVuZGVyYWJsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm05dUxYSmxibVJsY21GaWJHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKdWIyNHRjbVZ1WkdWeVlXSnNaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMSGREUVVGeFF6dEJRVTl5UXl3eVFrRkJNa1lzVTBGQlVTeHBRa0ZCYjBZN1EwRkJSenRCUVVFeFRDeHpSRUZCTUV3aWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgZGltZW5zaW9uXzEgPSByZXF1aXJlKFwiLi9kaW1lbnNpb25cIik7XHJcbmV4cG9ydHMuX0xlbmd0aFBhcnNlID0gKGNzcykgPT4ge1xyXG4gICAgY29uc3QgbSA9IGNzcy5tYXRjaCgvKFxcZCt8XFxkK1xcLlxcZCspKFxcdyt8JSkvaSk7XHJcbiAgICBpZiAobSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKHBhcnNlRmxvYXQobVsxXSksIG1bMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY3NzKTtcclxufTtcclxuZXhwb3J0cy5fTGVuZ3RoSW50ZXJwb2xhdGUgPSAoYSwgYiwgdCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBhICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmludGVycG9sYXRlKGEsIHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuaW50ZXJwb2xhdGUobmV3IGRpbWVuc2lvbl8xLkRpbWVuc2lvbihiLCBhLnVuaXQpLCAxIC0gdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmludGVycG9sYXRlKG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24oYSwgYi51bml0KSwgdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGEsIGIsIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1GelpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1KaGMyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTeHZSRUZCZVVNN1FVRkZla01zTWtOQlFYZEhPMEZCWXpOR0xGRkJRVUVzV1VGQldTeEhRVUZITEVOQlFVTXNSMEZCVnl4RlFVRlZMRVZCUVVVN1NVRkRiRVFzVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMGxCUXpsRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMllzVFVGQlRTeERRVUZETEVsQlFVa3NjVUpCUVZNc1EwRkJUU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEY0VRc1EwRkJRenRKUVVORUxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRla0lzUTBGQlF5eERRVUZETzBGQlJWY3NVVUZCUVN4clFrRkJhMElzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGVkxFVkJRVVU3U1VGRE5VVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZDTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEhGQ1FVRlRMRU5CUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wUXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5PTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4eFFrRkJVeXhEUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrUXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEhGQ1FVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dEJRVU5JTEVOQlFVTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvYmFzZS50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY2xhc3MgRGltZW5zaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCB1bml0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXQ7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy52YWx1ZX0ke3RoaXMudW5pdH1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBtID0gY3NzLm1hdGNoKC8oXFxkK3xcXGQrXFwuXFxkKykoXFx3K3wlKS9pKTtcclxuICAgICAgICAgICAgaWYgKG0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvUHggPSBEaW1lbnNpb24uY29udmVydFttWzJdXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21QeCA9IDEgLyBEaW1lbnNpb24uY29udmVydFt0aGlzLnVuaXRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvUHggIT09IHVuZGVmaW5lZCAmJiBmcm9tUHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKHBhcnNlRmxvYXQobVsxXSkgKiB0b1B4ICogZnJvbVB4LCB0aGlzLnVuaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24ocGFyc2VGbG9hdChtWzFdKSwgbVsyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbihwYXJzZUZsb2F0KGNzcyksIHRoaXMudW5pdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24oMCwgdGhpcy51bml0KTtcclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICBpZiAodGhpcy51bml0ICE9PSBmcm9tLnVuaXQpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9QeCA9IERpbWVuc2lvbi5jb252ZXJ0W3RoaXMudW5pdF07XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb21QeCA9IDEgLyBEaW1lbnNpb24uY29udmVydFtmcm9tLnVuaXRdO1xyXG4gICAgICAgICAgICBpZiAodG9QeCAhPT0gdW5kZWZpbmVkICYmIGZyb21QeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS52YWx1ZSwgdGhpcy52YWx1ZSwgdCkgKiB0b1B4ICogZnJvbVB4LCB0aGlzLnVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnZhbHVlLCB0aGlzLnZhbHVlLCB0KSwgdGhpcy51bml0KTtcclxuICAgIH1cclxufVxyXG5EaW1lbnNpb24uY29udmVydCA9IHtcclxuICAgIHB4OiAxLFxyXG4gICAgaW46IDk2LFxyXG4gICAgY206IDI1NCAvIDk2LFxyXG4gICAgbW06IDI1LjQgLyA5NixcclxuICAgIHB0OiAzIC8gNCxcclxuICAgIHBjOiA5LFxyXG4gICAgZGVnOiAxLFxyXG4gICAgZ3JhZDogOSAvIDEwLFxyXG4gICAgcmFkOiAxODAgLyBNYXRoLlBJLFxyXG4gICAgdHVybjogMzYwLFxyXG59O1xyXG5leHBvcnRzLkRpbWVuc2lvbiA9IERpbWVuc2lvbjtcclxuY2xhc3MgUGVyY2VudGFnZSBleHRlbmRzIERpbWVuc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBcIiVcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QZXJjZW50YWdlID0gUGVyY2VudGFnZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsdFpXNXphVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laR2x0Wlc1emFXOXVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNiMFJCUVhsRE8wRkJUWHBETzBsQllVVXNXVUZCYlVJc1MwRkJZU3hGUVVGVExFbEJRVlU3VVVGQmFFTXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJVVHRSUVVGVExGTkJRVWtzUjBGQlNpeEpRVUZKTEVOQlFVMDdTVUZCUnl4RFFVRkRPMGxCUTJoRUxGRkJRVkU3VVVGRFlpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTnlReXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJRenRaUVVNNVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWml4TlFVRk5MRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJZeXhEUVVGRExFTkJRVU03WjBKQlF6RkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF5OURMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlR5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeEhRVUZITEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlF6RkZMRU5CUVVNN1owSkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZOTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNFUXNRMEZCUXp0WlFVTklMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVThzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU42UkN4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCVHl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRVEJDTzFGQlEzUkZMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhGQ0xFVkJRVVVzUTBGQlV6dFJRVU5xUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFXTXNRMEZCUXl4RFFVRkRPMWxCUTNCRUxFMUJRVTBzVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZqTEVOQlFVTXNRMEZCUXp0WlFVTXhSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXZReXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVOHNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeEhRVUZITEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRE1VWXNRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVOHNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpGRkxFTkJRVU03TzBGQmNFUmpMR2xDUVVGUExFZEJRU3RDTzBsQlEyNUVMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMHdzUlVGQlJTeEZRVUZGTEVWQlFVVTdTVUZEVGl4RlFVRkZMRVZCUVVVc1IwRkJSeXhIUVVGSExFVkJRVVU3U1VGRFdpeEZRVUZGTEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVVVN1NVRkRZaXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZEVkN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOTUxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEwNHNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRk8wbEJRMW9zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHRKUVVOc1FpeEpRVUZKTEVWQlFVVXNSMEZCUnp0RFFVTldMRU5CUVVNN1FVRmFTaXc0UWtGelJFTTdRVUZGUkN4blFrRkJkMElzVTBGQlVTeFRRVUZqTzBsQlF6VkRMRmxCUVZrc1MwRkJZVHRSUVVOMlFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0JDTEVOQlFVTTdRMEZEUmp0QlFVcEVMR2REUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2RpbWVuc2lvbi50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvcGF0dGVyblwiKTtcclxuY29uc3QgcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3JlbmRlcmFibGVcIik7XHJcbmNsYXNzIEdyb3VwIGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZ1wiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICB0b1BhdHRlcm4odywgaCwgeCwgeSwgdmlldykge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgcGF0dGVybl8xLlBhdHRlcm4odGhpcy5jb250ZXh0LCB3LCBoLCB4LCB5LCB2aWV3KTtcclxuICAgICAgICB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiBwYXR0ZXJuLmFkZChjaGlsZCkpO1xyXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuR3JvdXAgPSBHcm91cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjNKdmRYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKbmNtOTFjQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVZEJMSE5GUVVGdFJUdEJRVU51UlN3NFEwRkJhVWM3UVVGSmFrY3NWMEZCYlVJc1UwRkJVU3dyUWtGQmNVUTdTVUZET1VVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFYTkRPMUZCUTJ4RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZKVFN4VFFVRlRMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRWxCUVZVN1VVRkRka1VzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOcVFpeERRVUZETzBOQlEwWTdRVUZhUkN4elFrRlpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZ3JvdXAudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5YTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuZXhwb3J0cy5YTElOSyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1YzNSaGJuUnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVjM1JoYm5SekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVdFc1VVRkJRU3hMUVVGTExFZEJRVWNzTkVKQlFUUkNMRU5CUVVNN1FVRkRja01zVVVGQlFTeExRVUZMTEVkQlFVY3NPRUpCUVRoQ0xFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnN0YW50cy50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbmNvbnN0IGJveF8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy9ib3hcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzL3BvaW50XCIpO1xyXG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcclxuY29uc3QgZG9jdW1lbnRfMSA9IHJlcXVpcmUoXCIuL2RvY3VtZW50XCIpO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50XCIpO1xyXG5jb25zdCBjbGlwX3BhdGhfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGhcIik7XHJcbmNvbnN0IG1hcmtlcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlclwiKTtcclxuY29uc3QgbWFza18xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2tcIik7XHJcbmNvbnN0IGxpbmVhcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2xpbmVhclwiKTtcclxuY29uc3QgcmFkaWFsXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsXCIpO1xyXG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuXCIpO1xyXG5jb25zdCBleHRlcm5hbF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvZXh0ZXJuYWxcIik7XHJcbmNvbnN0IGZvcmVpZ25fb2JqZWN0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9mb3JlaWduLW9iamVjdFwiKTtcclxuY29uc3QgZ3JvdXBfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwXCIpO1xyXG5jb25zdCBpbWFnZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2VcIik7XHJcbmNvbnN0IGNpcmNsZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZVwiKTtcclxuY29uc3QgZWxsaXBzZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2VcIik7XHJcbmNvbnN0IGxpbmVfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lXCIpO1xyXG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aFwiKTtcclxuY29uc3QgcG9seWdvbl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlnb25cIik7XHJcbmNvbnN0IHBvbHlsaW5lXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWxpbmVcIik7XHJcbmNvbnN0IHJlY3RfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9yZWN0XCIpO1xyXG5jb25zdCB0ZXh0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0XCIpO1xyXG5jbGFzcyBDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIF93aW5kb3cgPSBDb250ZXh0LkRFRkFVTFRfV0lORE9XKSB7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gX3dpbmRvdztcclxuICAgICAgICBpZiAocm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgSUQgaXMgbm90IHZhbGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGNvbnN0YW50c18xLlhNTE5TLCBcInN2Z1wiKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fcm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgY29uc3RhbnRzXzEuWE1MTlMpO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlTlMoY29uc3RhbnRzXzEuWE1MTlMsIFwieGxpbmtcIiwgY29uc3RhbnRzXzEuWExJTkspO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcclxuICAgICAgICB0aGlzLl90YXJnZXQgPSB0aGlzLl9yb290O1xyXG4gICAgICAgIGNvbnN0IGRlZnNFbGVtZW50cyA9IHRoaXMuX3Jvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZWZzXCIpO1xyXG4gICAgICAgIGlmIChkZWZzRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZzID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMsIGRlZnNFbGVtZW50cy5pdGVtKDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlZnMgPSBuZXcgZWxlbWVudF8xLkVsZW1lbnQodGhpcywgXCJkZWZzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb250ZXh0Ll9DT05URVhUX1NVQkpFQ1QubmV4dCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgY29udGV4dHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbnRleHQuX0NPTlRFWFRfU1VCSkVDVC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuICAgIGdldCB3aW5kb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvdztcclxuICAgIH1cclxuICAgIGdldCByZWZQb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdC5jcmVhdGVTVkdQb2ludCgpO1xyXG4gICAgfVxyXG4gICAgYWRkRGVmKGRlZikge1xyXG4gICAgICAgIHRoaXMuX2RlZnMuYWRkKGRlZik7XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChlbCkge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldC5hcHBlbmRDaGlsZCgoZWwgaW5zdGFuY2VvZiBlbGVtZW50XzEuRWxlbWVudCkgPyBlbC5ub2RlIDogZWwpO1xyXG4gICAgfVxyXG4gICAgbG9hZCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB4bWxEb2N1bWVudCA9IHlpZWxkIGRvY3VtZW50XzEubWFrZVJlcXVlc3QoXCJHRVRcIiwgdXJsKTtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxEb2N1bWVudCA9IG5ldyBkb2N1bWVudF8xLlNWR0RvY3VtZW50KHRoaXMsIHhtbERvY3VtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBleHRlcm5hbF8xLkV4dGVybmFsU1ZHKHRoaXMsIGV4dGVybmFsRG9jdW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2xpcFBhdGgodywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgY2xpcF9wYXRoXzEuQ2xpcFBhdGgodGhpcywgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cyk7XHJcbiAgICB9XHJcbiAgICBtYXJrZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXJrZXJfMS5NYXJrZXIodGhpcywge30pO1xyXG4gICAgfVxyXG4gICAgbWFzayh3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXNrXzEuTWFzayh0aGlzLCB3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKTtcclxuICAgIH1cclxuICAgIGxpbmVhckdyYWRpZW50KHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgbGluZWFyXzEuTGluZWFyR3JhZGllbnQodGhpcywgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHJhZGlhbEdyYWRpZW50KHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgcmFkaWFsXzEuUmFkaWFsR3JhZGllbnQodGhpcywgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBhdHRlcm4odywgaCwgeCwgeSwgdmlldykge1xyXG4gICAgICAgIHJldHVybiBuZXcgcGF0dGVybl8xLlBhdHRlcm4odGhpcywgdywgaCwgeCwgeSwgdmlldyk7XHJcbiAgICB9XHJcbiAgICBmb3JlaWduT2JqZWN0KGh0bWwsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBlbCA9IG5ldyBmb3JlaWduX29iamVjdF8xLkZvcmVpZ25PYmplY3QodGhpcywgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0pO1xyXG4gICAgICAgIGVsLmFkZEhUTUwoaHRtbCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChlbCk7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG4gICAgZ3JvdXAoZWxzKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBuZXcgZ3JvdXBfMS5Hcm91cCh0aGlzKTtcclxuICAgICAgICBlbHMuZm9yRWFjaChjaGlsZCA9PiBlbC5hZGQoY2hpbGQpKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGVsKTtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICBpbWFnZShocmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IGltYWdlXzEuSW1hZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBpbWcuZ2V0RXZlbnQoXCJsb2FkXCIpLnRha2UoMSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0geWllbGQgcHJvbWlzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGltZztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNpcmNsZShhMSwgYTIsIGEzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSAoYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSA/IHsgXCJjeDpjeVwiOiBhMSwgcjogYTIgfSA6IHsgY3g6IGExLCBjeTogYTIsIHI6IGEzIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjaXJjbGVfMS5DaXJjbGUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgZWxsaXBzZShhMSwgYTIsIGEzLCBhNCkge1xyXG4gICAgICAgIGxldCBhdHRycyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGExSXNQb2ludCA9IGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludDtcclxuICAgICAgICBjb25zdCBhMklzUG9pbnQgPSBhMiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgaWYgKGExSXNQb2ludCAmJiBhMklzUG9pbnQpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IFwiY3g6Y3lcIjogYTEsIFwicng6cnlcIjogYTIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIShhMUlzUG9pbnQgfHwgYTJJc1BvaW50KSkge1xyXG4gICAgICAgICAgICBhdHRycyA9IHsgY3g6IGExLCBjeTogYTIsIHJ4OiBhMywgcnk6IGE0IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgZWxsaXBzZV8xLkVsbGlwc2UodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgbGluZShhMSwgYTIsIGEzLCBhNCkge1xyXG4gICAgICAgIGxldCBhdHRycyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGExSXNQb2ludCA9IGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludDtcclxuICAgICAgICBjb25zdCBhMklzUG9pbnQgPSBhMiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgaWYgKGExSXNQb2ludCAmJiBhMklzUG9pbnQpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IFwieDE6eTFcIjogYTEsIFwieDI6eTJcIjogYTIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIShhMUlzUG9pbnQgfHwgYTJJc1BvaW50KSkge1xyXG4gICAgICAgICAgICBhdHRycyA9IHsgeDE6IGExLCB5MTogYTIsIHgyOiBhMywgeTI6IGE0IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgbGluZV8xLkxpbmUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcGF0aChkLCBwYXRoTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7IGQsIHBhdGhMZW5ndGggfTtcclxuICAgICAgICByZXR1cm4gbmV3IHBhdGhfMS5QYXRoKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBvbHlnb24ocG9pbnRzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7IHBvaW50cyB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgcG9seWdvbl8xLlBvbHlnb24odGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcG9seWxpbmUocG9pbnRzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7IHBvaW50cyB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgcG9seWxpbmVfMS5Qb2x5bGluZSh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICByZWN0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IHt9O1xyXG4gICAgICAgIGlmIChhMSBpbnN0YW5jZW9mIGJveF8xLkJveCkge1xyXG4gICAgICAgICAgICBhdHRyc1tcIng6eTp3aWR0aDpoZWlnaHRcIl0gPSBhMTtcclxuICAgICAgICAgICAgaWYgKGEyIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJyeDpyeVwiXSA9IGEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ4XCJdID0gYTI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYTMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnlcIl0gPSBhMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgYXR0cnNbXCJ4OnlcIl0gPSBhMTtcclxuICAgICAgICAgICAgaWYgKGEyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wid2lkdGhcIl0gPSBhMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJoZWlnaHRcIl0gPSBhMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTQgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcInJ4OnJ5XCJdID0gYTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYTQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnhcIl0gPSBhNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhNSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeVwiXSA9IGE1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhdHRyc1tcInhcIl0gPSBhMTtcclxuICAgICAgICAgICAgaWYgKGEyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wieVwiXSA9IGEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhMyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcIndpZHRoXCJdID0gYTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGE0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wiaGVpZ2h0XCJdID0gYTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGE1IGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJyeDpyeVwiXSA9IGE1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGE1ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ4XCJdID0gYTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYTYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnlcIl0gPSBhNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IHJlY3RfMS5SZWN0KHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHRleHQoY29udGVudCwgYTEsIGEyKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSAoYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSA/IHsgXCJ4OnlcIjogYTEgfSA6IHsgeDogYTEsIHk6IGEyIH07XHJcbiAgICAgICAgY29uc3QgdCA9IG5ldyB0ZXh0XzEuVGV4dCh0aGlzLCBhdHRycyk7XHJcbiAgICAgICAgY29udGVudC5mb3JFYWNoKGMgPT4gdC5hZGRTcGFuKGMpKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG59XHJcbkNvbnRleHQuREVGQVVMVF9XSU5ET1cgPSB3aW5kb3c7XHJcbkNvbnRleHQuX0NPTlRFWFRfU1VCSkVDVCA9IG5ldyByeGpzXzEuUmVwbGF5U3ViamVjdCgxKTtcclxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWRHVjRkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltTnZiblJsZUhRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEJRVUZCTEN0Q1FVRnBSRHRCUVVWcVJDd3dRMEZCZFVNN1FVRkZka01zT0VOQlFUSkRPMEZCUlRORExESkRRVUV5UXp0QlFVTXpReXg1UTBGQmMwUTdRVUZEZEVRc2RVTkJRVzlETzBGQlEzQkRMRzlGUVVGblJUdEJRVU5vUlN3NFJFRkJNa1E3UVVGRE0wUXNNRVJCUVhWRU8wRkJSWFpFTEhOR1FVRnpTRHRCUVVOMFNDeHpSa0ZCYzBnN1FVRkRkRWdzT0VWQlFUSkZPMEZCUlRORkxEaEVRVUU0UkR0QlFVTTVSQ3d3UlVGQmMwVTdRVUZEZEVVc2QwUkJRWEZFTzBGQlEzSkVMSGRFUVVGeFJEdEJRVU55UkN4cFJVRkJPRVE3UVVGRE9VUXNiVVZCUVdkRk8wRkJRMmhGTERaRVFVRXdSRHRCUVVNeFJDdzJSRUZCTUVRN1FVRkRNVVFzYlVWQlFXZEZPMEZCUTJoRkxIRkZRVUZyUlR0QlFVTnNSU3cyUkVGQk1FUTdRVUZETVVRc2MwUkJRVzFFTzBGQlRXNUVPMGxCV1VVc1dVRkJXU3hKUVVFMlFpeEZRVUZWTEZWQlFXdENMRTlCUVU4c1EwRkJReXhqUVVGak8xRkJRWGhETEZsQlFVOHNSMEZCVUN4UFFVRlBMRU5CUVdsRE8xRkJRM3BHTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFZDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTNRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTNSRUxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNXVUZCV1N4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5vUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEYkVJc1EwRkJRenRuUWtGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRUaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03WjBKQlF6VkVMRU5CUVVNN1dVRkRTQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEY0VJc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExHbENRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRnJRaXhEUVVGRE8xbEJRMnhHTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVOQlFVTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVUpCUVVzc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExHbENRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMR2xDUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5xUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRekZDTEUxQlFVMHNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE4wUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4cFFrRkJUeXhEUVVFeVFpeEpRVUZKTEVWQlFVVXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycEdMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hwUWtGQlR5eERRVUV5UWl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGJrVXNRMEZCUXp0UlFVTkVMRTlCUVU4c1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGRFTXNRMEZCUXp0SlFYSkRUU3hOUVVGTkxFdEJRVXNzVVVGQlVUdFJRVU40UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZ2UTBRc1NVRkJWeXhOUVVGTk8xRkJRMllzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVU5FTEVsQlFWY3NVVUZCVVR0UlFVTnFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRKUVVOeVF5eERRVUZETzBsQlEwMHNUVUZCVFN4RFFVRkRMRWRCUVN0RE8xRkJRek5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkRUU3hSUVVGUkxFTkJRVU1zUlVGQk9FTTdVVUZETlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc2FVSkJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnVSU3hEUVVGRE8wbEJRMWtzU1VGQlNTeERRVUZETEVkQlFWYzdPMWxCUXpOQ0xFMUJRVTBzVjBGQlZ5eEhRVUZITEUxQlFVMHNjMEpCUVZjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYkVRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4SlFVRkpMSE5DUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpWRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEhOQ1FVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1VVRkRha1FzUTBGQlF6dExRVUZCTzBsQlEwMHNVVUZCVVN4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlZTeEZRVUZGTEVOQlFWVXNSVUZCUlN4TFFVRTRReXhGUVVGRkxGbEJRWEZFTzFGQlEycExMRTFCUVUwc1EwRkJReXhKUVVGSkxHOUNRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRE4wUXNRMEZCUXp0SlFVTk5MRTFCUVUwN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeGxRVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZEVFN4SlFVRkpMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRXRCUVRoRExFVkJRVVVzV1VGQmNVUTdVVUZETjBvc1RVRkJUU3hEUVVGRExFbEJRVWtzVjBGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRM3BFTEVOQlFVTTdTVUZEVFN4alFVRmpMRU5CUVVNc1MwRkJXU3hGUVVGRkxFdEJRV2xETzFGQlEyNUZMRTFCUVUwc1EwRkJReXhKUVVGSkxIVkNRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRPMGxCUTAwc1kwRkJZeXhEUVVGRExFdEJRVmtzUlVGQlJTeExRVUZwUXp0UlFVTnVSU3hOUVVGTkxFTkJRVU1zU1VGQlNTeDFRa0ZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVOTkxFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVkxFVkJRVVVzU1VGQlZUdFJRVU55UlN4TlFVRk5MRU5CUVVNc1NVRkJTU3hwUWtGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVU5OTEdGQlFXRXNRMEZCUXl4SlFVRnBRaXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNTMEZCWVN4RlFVRkZMRTFCUVdNN1VVRkRla1lzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N3NFFrRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETlVRc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRVzlETzFGQlF5OURMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzWVVGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOc1FpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJRenRKUVVOWkxFdEJRVXNzUTBGQlF5eEpRVUZaT3p0WlFVTTNRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEdGQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNMVFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFpRVU42UkN4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEWWl4RFFVRkRPMHRCUVVFN1NVRkhUU3hOUVVGTkxFTkJRVU1zUlVGQmEwSXNSVUZCUlN4RlFVRlZMRVZCUVVVc1JVRkJWenRSUVVOMlJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzFGQlEzcEdMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVWROTEU5QlFVOHNRMEZCUXl4RlFVRnJRaXhGUVVGRkxFVkJRV3RDTEVWQlFVVXNSVUZCVnl4RlFVRkZMRVZCUVZjN1VVRkROMFVzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJZc1RVRkJUU3hUUVVGVExFZEJRVWNzUlVGQlJTeFpRVUZaTEdGQlFVc3NRMEZCUXp0UlFVTjBReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEZRVUZGTEZsQlFWa3NZVUZCU3l4RFFVRkRPMUZCUTNSRExFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEV0QlFVc3NSMEZCUnl4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUTNaRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja01zUzBGQlN5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzFGQlF6ZERMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeHBRa0ZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUXl4RFFVRkRPMGxCUjAwc1NVRkJTU3hEUVVGRExFVkJRV3RDTEVWQlFVVXNSVUZCYTBJc1JVRkJSU3hGUVVGWExFVkJRVVVzUlVGQlZ6dFJRVU14UlN4SlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeE5RVUZOTEZOQlFWTXNSMEZCUnl4RlFVRkZMRmxCUVZrc1lVRkJTeXhEUVVGRE8xRkJRM1JETEUxQlFVMHNVMEZCVXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hoUVVGTExFTkJRVU03VVVGRGRFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBJc1MwRkJTeXhIUVVGSExFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGRrTXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkROME1zUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRmRCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eERRVUZuUWl4RlFVRkZMRlZCUVcxQ08xRkJReTlETEUxQlFVMHNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETzFGQlEyaERMRTFCUVUwc1EwRkJReXhKUVVGSkxGZEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVU5OTEU5QlFVOHNRMEZCUXl4TlFVRmxPMUZCUXpWQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRla0lzVFVGQlRTeERRVUZETEVsQlFVa3NhVUpCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenRKUVVOTkxGRkJRVkVzUTBGQlF5eE5RVUZsTzFGQlF6ZENMRTFCUVUwc1MwRkJTeXhIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEZWtJc1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrTXNRMEZCUXp0SlFVMU5MRWxCUVVrc1EwRkJReXhGUVVGM1FpeEZRVUZGTEVWQlFXMUNMRVZCUVVVc1JVRkJWeXhGUVVGRkxFVkJRVzFDTEVWQlFVVXNSVUZCYlVJc1JVRkJSU3hGUVVGWE8xRkJRek5JTEUxQlFVMHNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOcVFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1UwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRMMElzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzaENMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEZEVJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVFpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU51UWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UWl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTnVRaXhEUVVGRE8xbEJRMGdzUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMElzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjBRaXhEUVVGRE8xbEJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEZGtJc1EwRkJRenRaUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU40UWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzUkNMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRja0lzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGJrSXNRMEZCUXp0blFrRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGNrSXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEYmtJc1EwRkJRenRaUVVOSUxFTkJRVU03VVVGRFNDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJoQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEyeENMRU5CUVVNN1dVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNrSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU4wUWl4RFFVRkRPMWxCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM0pDTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGRrSXNRMEZCUXp0WlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1JDTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY2tJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRia0lzUTBGQlF6dG5Ra0ZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRja0lzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGJrSXNRMEZCUXp0WlFVTklMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NWMEZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUjAwc1NVRkJTU3hEUVVGRExFOUJRWE5DTEVWQlFVVXNSVUZCYTBJc1JVRkJSU3hGUVVGWE8xRkJRMnBGTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSU3haUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTjJSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEZkQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGFFTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycENMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFdDeERRVUZET3p0QlFTOU5ZU3h6UWtGQll5eEhRVUZYTEUxQlFVMHNRMEZCUXp0QlFVa3ZRaXgzUWtGQlowSXNSMEZCUnl4SlFVRkpMRzlDUVVGaExFTkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZNYkVVc01FSkJhVTVESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRleHQudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUnhcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9ICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3gocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgcGFyc2VGbG9hdCh0b2tzWzJdKSwgcGFyc2VGbG9hdCh0b2tzWzNdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzWCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NZID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1dpZHRoID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1syXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0hlaWdodCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbM10pO1xyXG4gICAgICAgICAgICBpZiAoY3NzWCAhPT0gbnVsbCAmJiBjc3NZICE9PSBudWxsICYmIGNzc1dpZHRoICE9PSBudWxsICYmIGNzc0hlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3gocGFyc2VGbG9hdChjc3NYKSwgcGFyc2VGbG9hdChjc3NZKSwgcGFyc2VGbG9hdChjc3NXaWR0aCksIHBhcnNlRmxvYXQoY3NzSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJveCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIG92ZXJyaWRlLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCBvdmVycmlkZS55LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1syXSwgb3ZlcnJpZGUud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzNdLCBvdmVycmlkZS5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCB0aGlzLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCB0aGlzLnkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzJdLCB0aGlzLndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1szXSwgdGhpcy5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3goYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLngsIHRoaXMueCwgdCksIGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS55LCB0aGlzLnksIHQpLCBiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ud2lkdGgsIHRoaXMud2lkdGgsIHQpLCBiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20uaGVpZ2h0LCB0aGlzLmhlaWdodCwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQm94ID0gQm94O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbTk0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZbTk0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzYVVOQlFXOUVPMEZCUlhCRU8wbEJRMFVzV1VGQmJVSXNRMEZCVXl4RlFVRlRMRU5CUVZNc1JVRkJVeXhMUVVGaExFVkJRVk1zVFVGQll6dFJRVUY0UlN4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGUk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCVVR0UlFVRlRMRlZCUVVzc1IwRkJUQ3hMUVVGTExFTkJRVkU3VVVGQlV5eFhRVUZOTEVkQlFVNHNUVUZCVFN4RFFVRlJPMGxCUVVjc1EwRkJRenRKUVVONFJpeFJRVUZSTzFGQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGxCUXpWRUxFTkJRVU03U1VGRFRTeExRVUZMTEVOQlFVTXNSMEZCYTBJN1VVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNrY3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVcxQ0xFVkJRVVVzU1VGQldUdFJRVU14UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5ETEUxQlFVMHNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zVFVGQlRTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1NVRkJTU3hSUVVGUkxFdEJRVXNzU1VGQlNTeEpRVUZKTEZOQlFWTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU01UlN4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVjc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhFTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVdNN1VVRkRNVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRUlzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRja1FzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU55UkN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTNwRUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNMVJDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU5xUkN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTJwRUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGNrUXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzaEVMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNMElzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYkVRc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRemxETEVOQlFVTTdVVUZEU0N4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZUTEVWQlFVVXNRMEZCVXp0UlFVTnlReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNlVUpCUVd0Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhsQ1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeDVRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzZVVKQlFXdENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGREwwd3NRMEZCUXp0RFFVTkdPMEZCZEVSRUxHdENRWE5FUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvYm94LnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0sJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoYmFzZV8xLl9MZW5ndGhQYXJzZSh0b2tzWzBdKSwgYmFzZV8xLl9MZW5ndGhQYXJzZSh0b2tzWzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NYID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1swXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1kgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzFdKTtcclxuICAgICAgICAgICAgaWYgKGNzc1ggIT09IG51bGwgJiYgY3NzWSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludChiYXNlXzEuX0xlbmd0aFBhcnNlKGNzc1gpLCBiYXNlXzEuX0xlbmd0aFBhcnNlKGNzc1kpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCBvdmVycmlkZS54LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1sxXSwgb3ZlcnJpZGUueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHRoaXMueC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMV0sIHRoaXMueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS54LCB0aGlzLngsIHQpLCBiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ueSwgdGhpcy55LCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2ludCA9IFBvaW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YjJsdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxHbERRVUZyUlR0QlFVVnNSVHRKUVVORkxGbEJRVzFDTEVOQlFWTXNSVUZCVXl4RFFVRlRPMUZCUVROQ0xFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWRTdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGUk8wbEJRVWNzUTBGQlF6dEpRVU16UXl4UlFVRlJPMUZCUTJJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhIUVVGclFqdFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXh0UWtGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxHMUNRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcENMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXVHRSUVVNeFF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFMUJRVTBzU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZMTEVsQlFVa3NTVUZCU1N4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtNc1RVRkJUU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEcxQ1FVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzYlVKQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5FTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcENMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFUXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJaMEk3VVVGRE5VUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGNrUXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkVMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTJwRUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOdVJDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMnhFTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTVReXhEUVVGRE8xRkJRMGdzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFTkJRVk03VVVGRGRrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3g1UWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOcVJ5eERRVUZETzBOQlEwWTdRVUZvUkVRc2MwSkJaMFJESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvcG9pbnQudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFNWR0RvY3VtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHJhdywgbWltZVR5cGUgPSBcImFwcGxpY2F0aW9uL3htbFwiKSB7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSAocmF3IGluc3RhbmNlb2YgRG9jdW1lbnQpID8gcmF3IDogU1ZHRG9jdW1lbnQuUEFSU0VSLnBhcnNlRnJvbVN0cmluZyhyYXcsIG1pbWVUeXBlKTtcclxuICAgICAgICBjb25zdCBhbGxEZWZzID0gQXJyYXkuZnJvbSh0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRlZnNcIikpO1xyXG4gICAgICAgIGFsbERlZnMuZm9yRWFjaCgoZGVmcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGVmcy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybURlZnMgPSBkZWZzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVmcyk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocm1EZWZzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmFkZERlZihybURlZnMuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICB9XHJcbn1cclxuU1ZHRG9jdW1lbnQuUEFSU0VSID0gbmV3IERPTVBhcnNlcigpO1xyXG5leHBvcnRzLlNWR0RvY3VtZW50ID0gU1ZHRG9jdW1lbnQ7XHJcbmV4cG9ydHMubWFrZVJlcXVlc3QgPSAobWV0aG9kLCB1cmwpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XHJcbiAgICAgICAgICAgICAgICBpZiAoeG1sICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4bWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHOWpkVzFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUprYjJOMWJXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJPMGxCUjBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEVkQlFYTkNMRVZCUVVVc1YwRkJiVUlzYVVKQlFXbENPMUZCUTNoR0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NRMEZCUXl4SFFVRkhMRmxCUVZrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRaUVVOMlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VJc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEycEVMRTlCUVU4c1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN2IwSkJRMnhETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFXVXNRMEZCUXl4RFFVRkRPMmRDUVVOdVJDeERRVUZETzFsQlEwZ3NRMEZCUXp0UlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVU5FTEVsQlFWY3NVVUZCVVR0UlFVTnFRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRemRGTEVOQlFVTTdPMEZCYUVKakxHdENRVUZOTEVkQlFVY3NTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRCUVVReFF5eHJRMEZyUWtNN1FVRkZXU3hSUVVGQkxGZEJRVmNzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVhGQ0xFVkJRVVU3U1VGRE5VUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMUZCUTNKRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkRha01zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkNMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEyaENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGRE5VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJwQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRaaXhEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOT0xFMUJRVTBzUTBGQlF6dDNRa0ZEVEN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFMUJRVTA3ZDBKQlEyeENMRlZCUVZVc1JVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZUdHhRa0ZETTBJc1EwRkJReXhEUVVGRE8yZENRVU5NTEVOQlFVTTdXVUZEU0N4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRE8xRkJRMFlzUjBGQlJ5eERRVUZETEU5QlFVOHNSMEZCUnl4SFFVRkhMRVZCUVVVN1dVRkRha0lzVFVGQlRTeERRVUZETzJkQ1FVTk1MRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zVFVGQlRUdG5Ra0ZEYkVJc1ZVRkJWU3hGUVVGRkxFZEJRVWNzUTBGQlF5eFZRVUZWTzJGQlF6TkNMRU5CUVVNc1EwRkJRenRSUVVOTUxFTkJRVU1zUTBGQlF6dFJRVU5HTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwd3NRMEZCUXl4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZG9jdW1lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRpbWVuc2lvbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2F0dHJpYnV0ZXMvZGltZW5zaW9uXCIpO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZWxlbWVudFwiKTtcclxuY29uc3QgcGFpbnRfc2VydmVyXzEgPSByZXF1aXJlKFwiLi4vcGFpbnQtc2VydmVyXCIpO1xyXG5jbGFzcyBTdG9wIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgb2Zmc2V0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwic3RvcFwiLCB7XHJcbiAgICAgICAgICAgIG9mZnNldDogbmV3IGRpbWVuc2lvbl8xLkRpbWVuc2lvbihvZmZzZXQgKiAxMDAsIFwiJVwiKSxcclxuICAgICAgICAgICAgXCJzdG9wLWNvbG9yXCI6IGNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RvcCA9IFN0b3A7XHJcbmNsYXNzIEFic3RyYWN0R3JhZGllbnQgZXh0ZW5kcyBwYWludF9zZXJ2ZXJfMS5BYnN0cmFjdFBhaW50U2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5hbWUsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIG5hbWUsIGF0dHJzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkRGVmKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BBcnIgPSBbXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdG9wcykuZm9yRWFjaChvZmZzZXQgPT4ge1xyXG4gICAgICAgICAgICBzdG9wQXJyLnB1c2gobmV3IFN0b3AoY29udGV4dCwgTnVtYmVyKG9mZnNldCksIHN0b3BzW29mZnNldF0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9wQXJyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub2Zmc2V0IC0gYi5vZmZzZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcEFyci5mb3JFYWNoKHMgPT4gdGhpcy5hZGQocykpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RHcmFkaWVudCA9IEFic3RyYWN0R3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVozSmhaR2xsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpuY21Ga2FXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRFpFUVVGelJUdEJRVkYwUlN3NFEwRkJNa003UVVGRk0wTXNhMFJCUVhORU8wRkJNRUowUkN4VlFVRnJRaXhUUVVGUkxHbENRVUU0UkR0SlFVTjBSaXhaUVVGWkxFOUJRV2RDTEVWQlFWTXNUVUZCWXl4RlFVRkZMRXRCUVhWRE8xRkJRekZHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRk8xbEJRM0pDTEUxQlFVMHNSVUZCUlN4SlFVRkpMSEZDUVVGVExFTkJRVTBzVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1dVRkROME1zV1VGQldTeEZRVUZGTEV0QlFVczdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJTbWRETEZkQlFVMHNSMEZCVGl4TlFVRk5MRU5CUVZFN1NVRkxia1FzUTBGQlF6dERRVU5HTzBGQlVFUXNiMEpCVDBNN1FVRkZSQ3h6UWtGQk5rY3NVMEZCVVN4clEwRkJNRU03U1VGRE4wb3NXVUZCV1N4UFFVRm5RaXhGUVVGRkxFbEJRVmtzUlVGQlJTeExRVUZaTEVWQlFVVXNTMEZCT0VRN1VVRkRkRWdzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETVVJc1RVRkJUU3hQUVVGUExFZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRMnhETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTndReXhEUVVGRE8wTkJRMFk3UVVGaVJDdzBRMEZoUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBBYnN0cmFjdFBhaW50U2VydmVyIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RQYWludFNlcnZlciA9IEFic3RyYWN0UGFpbnRTZXJ2ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRnBiblF0YzJWeWRtVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNHRnBiblF0YzJWeWRtVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjMFJCUVRCRU8wRkJSVEZFTEhsQ1FVRjFSaXhUUVVGUkxITkRRVUVyUXp0RFFVRkhPMEZCUVdwS0xHdEVRVUZwU2lKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhaW50X3NlcnZlcl8xID0gcmVxdWlyZShcIi4uL3BhaW50LXNlcnZlclwiKTtcclxuY2xhc3MgUGF0dGVybiBleHRlbmRzIHBhaW50X3NlcnZlcl8xLkFic3RyYWN0UGFpbnRTZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCA9ICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gMCA6IHcsIHggPSAwLCB5ID0gMCwgdmlldykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gdyA6IFwicGF0dGVyblwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKCEodyBpbnN0YW5jZW9mIFNWR1BhdHRlcm5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInBhdHRlcm5Vbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvbmUoZGVlcCA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhdHRlcm4odGhpcy5jb250ZXh0LCBzdXBlci5jbG9uZU5vZGUoZGVlcCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0dGVybiA9IFBhdHRlcm47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBkR1Z5Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkJoZEhSbGNtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGWFFTeHJSRUZCYzBRN1FVRjVRblJFTEdGQlFYRkNMRk5CUVZFc2EwTkJRVEJFTzBsQlIzSkdMRmxCUVcxQ0xFOUJRV2RDTEVWQlFVVXNRMEZCTmtJc1JVRkJSU3hKUVVGWkxFTkJRVU1zUTBGQlF5eFpRVUZaTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZVN1VVRkRhRXNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUkdoRUxGbEJRVThzUjBGQlVDeFBRVUZQTEVOQlFWTTdVVUZGYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNVUlzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNKRExFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlEzUkVMRU5CUVVNN1VVRkRTQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4UFFVRm5RaXhKUVVGSk8xRkJReTlDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBZN1FVRnlRa1FzTUVKQmNVSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvcGF0dGVybi50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gX2RlZmF1bHRHZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG59XHJcbmV4cG9ydHMuX2RlZmF1bHRHZXQgPSBfZGVmYXVsdEdldDtcclxuZnVuY3Rpb24gX2RlZmF1bHRTZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gKHR5cGVvZiBvdmVycmlkZSA9PT0gXCJ1bmRlZmluZWRcIikgPyB0aGlzIDogb3ZlcnJpZGU7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBTdHJpbmcodmFsdWUpKTtcclxufVxyXG5leHBvcnRzLl9kZWZhdWx0U2V0ID0gX2RlZmF1bHRTZXQ7XHJcbmV4cG9ydHMuaXNBdHRyaWJ1dGUgPSAob2JqKSA9PiB7XHJcbiAgICByZXR1cm4gb2JqICYmICh0eXBlb2Ygb2JqW1wiaW50ZXJwb2xhdGVcIl0gPT09IFwiZnVuY3Rpb25cIikgJiYgKHR5cGVvZiBvYmpbXCJwYXJzZVwiXSA9PT0gXCJmdW5jdGlvblwiKTtcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhSMGNtbGlkWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZWFIwY21saWRYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlkwRXNjVUpCUVcxRUxFOUJRVzFDTEVWQlFVVXNTVUZCV1R0SlFVTnNSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYUVRc1EwRkJRenRCUVVaRUxHdERRVVZETzBGQlJVUXNjVUpCUVhkRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVZrN1NVRkRja1lzVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4UFFVRlBMRkZCUVZFc1MwRkJTeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGJFVXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROVU1zUTBGQlF6dEJRVWhFTEd0RFFVZERPMEZCUlZrc1VVRkJRU3hYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUY1UWl4RlFVRjVRaXhGUVVGRk8wbEJRemxGTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRMjVITEVOQlFVTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZS50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbmNvbnN0IGlkXzEgPSByZXF1aXJlKFwiLi4vaWRcIik7XHJcbmNsYXNzIFJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lID0gcnhqc18xLk9ic2VydmFibGUuaW50ZXJ2YWwoMCwgcnhqc18xLlNjaGVkdWxlci5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlVXBkYXRlcyA9IG5ldyByeGpzXzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlVXBkYXRlcy5idWZmZXJXaGVuKCgpID0+IHRoaXMuX2FuaW1hdGlvbkZyYW1lKS5zdWJzY3JpYmUoKHVwZGF0ZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZXMuZm9yRWFjaCgoeyBlbCwgYXR0cmlidXRlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnJlbmRlckF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gdGhpcy5fYXR0cmlidXRlSW50ZXJwb2xhdGlvbnNba2V5XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmFsUmVuZGVyID0gbm93ID4gKGludGVycG9sYXRpb24uc3RhcnQgKyBpbnRlcnBvbGF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSAoZmluYWxSZW5kZXIpID8gMSA6IGludGVycG9sYXRpb24uZWFzaW5nKChub3cgLSBpbnRlcnBvbGF0aW9uLnN0YXJ0KSAvIGludGVycG9sYXRpb24uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGF0dHJpYnV0ZS52YWwodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5lbC5yZW5kZXJBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5hbFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb24ucmVzb2x2ZShub3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUmVuZGVyZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcXVldWVBdHRyaWJ1dGVVcGRhdGUoYTEsIGEyLCBhMykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYTIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXR0cmlidXRlVXBkYXRlcy5uZXh0KHsgZWw6IGExLCBhdHRyaWJ1dGU6IHsgbmFtZTogYTIsIHZhbDogYTMgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGEyKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzLm5leHQoeyBlbDogYTEsIGF0dHJpYnV0ZTogeyBuYW1lLCB2YWw6IGEyW25hbWVdIH0gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQXR0cmlidXRlSW50ZXJwb2xhdGlvbihlbCwgYXR0ciwgdmFsLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGlkXzEucmFuZG9tU2hvcnRTdHJpbmdJZCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW3sgbmFtZTogYXR0ciwgdmFsIH1dO1xyXG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9uc1trZXldID0geyBlbCwgYXR0cmlidXRlcywgc3RhcnQsIGR1cmF0aW9uLCBlYXNpbmcsIHJlc29sdmUgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5SZW5kZXJlci5faW5zdGFuY2UgPSBuZXcgUmVuZGVyZXIoKTtcclxuZXhwb3J0cy5SZW5kZXJlciA9IFJlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZ1WkdWeVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKeVpXNWtaWEpsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVWRCTEN0Q1FVRnpSRHRCUVVWMFJDdzRRa0ZCTkVNN1FVRTRRalZETzBsQlVVVTdVVUZJVVN4dlFrRkJaU3hIUVVGSExHbENRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3huUWtGQlV5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUTI1RkxITkNRVUZwUWl4SFFVRkhMRWxCUVVrc1kwRkJUeXhGUVVGdlJDeERRVUZETzFGQlEzQkdMRFpDUVVGM1FpeEhRVUUyUlN4RlFVRkZMRU5CUVVNN1VVRkZPVWNzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRiRVlzVFVGQlRTeEhRVUZITEVkQlFVY3NWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRemxDTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeFRRVUZUTEVWQlFVVXNSVUZCUlN4RlFVRkZPMmRDUVVOd1F5eEZRVUZGTEVOQlFVTXNaVUZCWlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNCRUxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEwZ3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkRla1FzVFVGQlRTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVONlJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRGVrVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRM3BITEdGQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVTdiMEpCUXpkRExFMUJRVTBzUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zWlVGQlpTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzaEVMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5JTEVWQlFVVXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU14UXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTTNRaXhEUVVGRE8xbEJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VFelFrMHNUVUZCVFN4RFFVRkRMRmRCUVZjN1VVRkRka0lzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVFJDVFN4dlFrRkJiMElzUTBGQmJVVXNSVUZCU3l4RlFVRkZMRVZCUVdFc1JVRkJSU3hGUVVGaE8xRkJReTlJTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBJc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNVMEZCVXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZGTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdaMEpCUXk5Q0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6bEZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN3NFFrRkJPRUlzUTBGQmJVVXNSVUZCU3l4RlFVRkZMRWxCUVU4c1JVRkJSU3hIUVVFMFFpeEZRVUZGTEZGQlFXZENMRVZCUVVVc1RVRkJjMEk3VVVGRE5Vd3NUVUZCVFN4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3hIUVVGSExFZEJRVWNzZDBKQlFXMUNMRVZCUVVVc1EwRkJRenRaUVVOc1F5eE5RVUZOTEV0QlFVc3NSMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGFFTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONlF5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRelZHTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTB3c1EwRkJRenM3UVVFelEyTXNhMEpCUVZNc1IwRkJSeXhKUVVGSkxGRkJRVkVzUlVGQlJTeERRVUZETzBGQlNqVkRMRFJDUVdkRVF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vcmVuZGVyZXIudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmFuZG9tU2hvcnRTdHJpbmdJZCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwWkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5oTEZGQlFVRXNiVUpCUVcxQ0xFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lkLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY2xhc3MgTnVtYmVyV3JhcHBlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuID0gMCkge1xyXG4gICAgICAgIHRoaXMubiA9IG47XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyV3JhcHBlcihwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJXcmFwcGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCA/IG92ZXJyaWRlIDogdGhpcykudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJXcmFwcGVyKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm4sIHRoaXMubiwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVyV3JhcHBlciA9IE51bWJlcldyYXBwZXI7XHJcbmNsYXNzIEFycmF5V3JhcHBlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcnIgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuYXJyID0gYXJyO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmpvaW4oXCJcXHRcIik7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCJcXHRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlXcmFwcGVyKHRoaXMuYXJyLm1hcCgoYSwgaSkgPT4gYS5wYXJzZSgoaSA+PSB0b2tzLmxlbmd0aCkgPyBudWxsIDogdG9rc1tpXSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlXcmFwcGVyKHRoaXMuYXJyLm1hcChhID0+IGEucGFyc2UobnVsbCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGUgOiB0aGlzKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5V3JhcHBlcih0aGlzLmFyci5tYXAoKHMsIGkpID0+IHMuaW50ZXJwb2xhdGUoZnJvbS5hcnJbaV0sIHQpKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheVdyYXBwZXIgPSBBcnJheVdyYXBwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWQzSmhjSEJsY25NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUozY21Gd2NHVnljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRzlFUVVGNVF6dEJRVVY2UXp0SlFVTkZMRmxCUVcxQ0xFbEJRVmtzUTBGQlF6dFJRVUZpTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1NVRkJSeXhEUVVGRE8wbEJRemRDTEZGQlFWRTdVVUZEWWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hoUVVGaExFVkJRVVVzUTBGQlF6dFJRVU0zUWl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrN1VVRkRNVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmQwSTdVVUZEY0VVc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEY0VZc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZ0UWl4RlFVRkZMRU5CUVZNN1VVRkRMME1zVFVGQlRTeERRVUZETEVsQlFVa3NZVUZCWVN4RFFVRkRMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEY2tRc1EwRkJRenREUVVOR08wRkJja0pFTEhORFFYRkNRenRCUVVWRU8wbEJRMFVzV1VGQmJVSXNUVUZCVnl4RlFVRkZPMUZCUVdJc1VVRkJSeXhIUVVGSUxFZEJRVWNzUTBGQlZUdEpRVVZvUXl4RFFVRkRPMGxCUTAwc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRE4wSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1dVRkJXU3hEUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUhMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMRmxCUVZrc1EwRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlFTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1R0UlFVTXhReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hSUVVFd1FqdFJRVU4wUlN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEZGQlFWRXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU53Uml4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRWEZDTEVWQlFVVXNRMEZCVXp0UlFVTnFSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFpRVUZaTEVOQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNCR0xFTkJRVU03UTBGRFJqdEJRWGhDUkN4dlEwRjNRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvd3JhcHBlcnMudHNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5vbl9yZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vbm9uLXJlbmRlcmFibGVcIik7XHJcbmNsYXNzIENsaXBQYXRoIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiY2xpcFBhdGhcIik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkRGVmKHRoaXMpO1xyXG4gICAgICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5pdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm1hc2tVbml0c1wiLCB1bml0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50VW5pdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm1hc2tDb250ZW50VW5pdHNcIiwgY29udGVudFVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DbGlwUGF0aCA9IENsaXBQYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMnhwY0Mxd1lYUm9MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyeHBjQzF3WVhSb0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc2MwUkJRVEJFTzBGQmEwSXhSQ3hqUVVGelFpeFRRVUZSTEhORFFVRXdSRHRKUVVOMFJpeFpRVUZ0UWl4UFFVRm5RaXhGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRU5CUVZVc1JVRkJSU3hMUVVFNFF5eEZRVUZGTEZsQlFYRkVPMUZCUTNoTUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkVWaXhaUVVGUExFZEJRVkFzVDBGQlR5eERRVUZUTzFGQlJXcERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaERMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1FpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZDTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONFF5eERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU4wUkN4RFFVRkRPMGxCUTBnc1EwRkJRenREUVVOR08wRkJka0pFTERSQ1FYVkNReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL2NsaXAtcGF0aC50c1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgTWFya2VyIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcIm1hcmtlclwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYXJrZXIgPSBNYXJrZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnlhMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liV0Z5YTJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc2MwUkJRVzlHTzBGQmIwSndSaXhaUVVGdlFpeFRRVUZSTEhORFFVRXdSRHRKUVVOd1JpeFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJOa1E3VVVGRGVrWXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenREUVVOR08wRkJTa1FzZDBKQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlci50c1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgTWFzayBleHRlbmRzIG5vbl9yZW5kZXJhYmxlXzEuQWJzdHJhY3ROb25SZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcIm1hc2tcIik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkRGVmKHRoaXMpO1xyXG4gICAgICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5pdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm1hc2tVbml0c1wiLCB1bml0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50VW5pdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm1hc2tDb250ZW50VW5pdHNcIiwgY29udGVudFVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYXNrID0gTWFzaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGemF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW0xaGMyc3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSlFTeHpSRUZCTUVRN1FVRnBRakZFTEZWQlFXdENMRk5CUVZFc2MwTkJRWE5FTzBsQlF6bEZMRmxCUVcxQ0xFOUJRV2RDTEVWQlFVVXNRMEZCVlN4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZTeEZRVUZGTEV0QlFUaERMRVZCUVVVc1dVRkJjVVE3VVVGRGVFd3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVJPTEZsQlFVOHNSMEZCVUN4UFFVRlBMRU5CUVZNN1VVRkZha01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE1VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRU1zUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRExFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM2hDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEzaERMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUTNSRUxFTkJRVU03U1VGRFNDeERRVUZETzBOQlEwWTdRVUYyUWtRc2IwSkJkVUpESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXNrLnRzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBncmFkaWVudF8xID0gcmVxdWlyZShcIi4uL2dyYWRpZW50XCIpO1xyXG5jbGFzcyBMaW5lYXJHcmFkaWVudCBleHRlbmRzIGdyYWRpZW50XzEuQWJzdHJhY3RHcmFkaWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdG9wcywgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImxpbmVhckdyYWRpZW50XCIsIHN0b3BzLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5MaW5lYXJHcmFkaWVudCA9IExpbmVhckdyYWRpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liR2x1WldGeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYkdsdVpXRnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlNVRXNNRU5CUVRKRk8wRkJWek5GTEc5Q1FVRTBRaXhUUVVGUkxESkNRVUZ4UlR0SlFVTjJSeXhaUVVGWkxFOUJRV2RDTEVWQlFVVXNTMEZCV1N4RlFVRkZMRXRCUVhGRk8xRkJReTlITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdRMEZEUmp0QlFVcEVMSGREUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvbGluZWFyLnRzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBncmFkaWVudF8xID0gcmVxdWlyZShcIi4uL2dyYWRpZW50XCIpO1xyXG5jbGFzcyBSYWRpYWxHcmFkaWVudCBleHRlbmRzIGdyYWRpZW50XzEuQWJzdHJhY3RHcmFkaWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdG9wcywgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInJhZGlhbEdyYWRpZW50XCIsIHN0b3BzLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5SYWRpYWxHcmFkaWVudCA9IFJhZGlhbEdyYWRpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbUZrYVdGc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY21Ga2FXRnNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlNVRXNNRU5CUVRKRk8wRkJXVE5GTEc5Q1FVRTBRaXhUUVVGUkxESkNRVUZ4UlR0SlFVTjJSeXhaUVVGWkxFOUJRV2RDTEVWQlFVVXNTMEZCV1N4RlFVRkZMRXRCUVhGRk8xRkJReTlITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdRMEZEUmp0QlFVcEVMSGREUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsLnRzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb250ZXh0XzEgPSByZXF1aXJlKFwiLi4vLi4vY29udGV4dFwiKTtcclxuY29uc3QgZG9jdW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9kb2N1bWVudFwiKTtcclxuY29uc3QgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRcIik7XHJcbmNvbnN0IGdyb3VwXzEgPSByZXF1aXJlKFwiLi9ncm91cFwiKTtcclxuY2xhc3MgRXh0ZXJuYWxTVkcgZXh0ZW5kcyBncm91cF8xLkdyb3VwIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRvYywgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBhdHRycyk7XHJcbiAgICAgICAgZG9jLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydGVkTm9kZSA9IGNvbnRleHQud2luZG93LmRvY3VtZW50LmltcG9ydE5vZGUoY2hpbGQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZChpbXBvcnRlZE5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRXh0ZXJuYWxTVkcgPSBFeHRlcm5hbFNWRztcclxuZnVuY3Rpb24gYnVpbGRFeHRlcm5hbENvbXBvbmVudENsYXNzKHVybCwgb3JpZ2luID0geyB4OiAwLCB5OiAwIH0pIHtcclxuICAgIGNvbnN0IHhtbERvY3VtZW50X3AgPSBkb2N1bWVudF8xLm1ha2VSZXF1ZXN0KFwiR0VUXCIsIHVybCk7XHJcbiAgICBjb25zdCBjb250ZXh0X3AgPSBjb250ZXh0XzEuQ29udGV4dC5jb250ZXh0cy50YWtlKDEpLnRvUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgZG9jX3AgPSBQcm9taXNlLmFsbChbY29udGV4dF9wLCB4bWxEb2N1bWVudF9wXSkudGhlbigoW2NvbnRleHQsIHhtbF0pID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IGRvY3VtZW50XzEuU1ZHRG9jdW1lbnQoY29udGV4dCwgeG1sKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29tcG9uZW50XzEuQ29tcG9uZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIob3JpZ2luKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSBkb2NfcC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvYy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydGVkTm9kZSA9IHRoaXMuY29udGV4dC53aW5kb3cuZG9jdW1lbnQuaW1wb3J0Tm9kZShjaGlsZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW1wb3J0ZWROb2RlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNvdXJjZS11cmxcIiwgdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYnVpbGRFeHRlcm5hbENvbXBvbmVudENsYXNzID0gYnVpbGRFeHRlcm5hbENvbXBvbmVudENsYXNzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWGgwWlhKdVlXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKbGVIUmxjbTVoYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTERKRFFVRjNRenRCUVVONFF5dzJRMEZCTUVRN1FVRkZNVVFzTWtOQlFYZERPMEZCUTNoRExHMURRVUZuUXp0QlFVVm9ReXhwUWtGQmVVSXNVMEZCVVN4aFFVRkxPMGxCUTNCRExGbEJRVmtzVDBGQlowSXNSVUZCUlN4SFFVRm5RaXhGUVVGRkxFdEJRWE5ETzFGQlEzQkdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZEVJc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEZsQlFWa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRM0pGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRGVrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMFk3UVVGU1JDeHJRMEZSUXp0QlFVOUVMSEZEUVVFMFF5eEhRVUZYTEVWQlFVVXNVMEZCYlVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1NVRkRlRWNzVFVGQlRTeGhRVUZoTEVkQlFVY3NjMEpCUVZjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZET1VNc1RVRkJUU3hUUVVGVExFZEJRVWNzYVVKQlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMGxCUTNaRUxFMUJRVTBzUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZPMUZCUXpWRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEhOQ1FVRlhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVFVGQlRTeERRVUZETEV0QlFVMHNVMEZCVVN4eFFrRkJVenRSUVVVMVFqdFpRVU5GTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOa0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTzJkQ1FVTXZRaXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRk8yOUNRVU0zUWl4TlFVRk5MRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRNVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRuUWtGRGVrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVOQlFVTTdTMEZEUml4RFFVRkRPMEZCUTBvc1EwRkJRenRCUVc1Q1JDeHJSVUZ0UWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9leHRlcm5hbC50c1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWFzaW5nXzEgPSByZXF1aXJlKFwiLi4vLi4vYW5pbWF0aW9uL2Vhc2luZ1wiKTtcclxuY29uc3Qgcm90YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXR0cmlidXRlcy90cmFuc2Zvcm1zL3JvdGF0ZVwiKTtcclxuY29uc3Qgc2NhbGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2NhbGVcIik7XHJcbmNvbnN0IHRyYW5zbGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGVcIik7XHJcbmNvbnN0IGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0XCIpO1xyXG5jb25zdCBncm91cF8xID0gcmVxdWlyZShcIi4vZ3JvdXBcIik7XHJcbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIGdyb3VwXzEuR3JvdXAge1xyXG4gICAgY29uc3RydWN0b3Iob3JpZ2luLCBlYXNpbmcgPSBlYXNpbmdfMS5saW5lYXIpIHtcclxuICAgICAgICBzdXBlcihDb21wb25lbnQuY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5lYXNpbmcgPSBlYXNpbmc7XHJcbiAgICAgICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtcyA9IFtuZXcgdHJhbnNsYXRlXzEuVHJhbnNsYXRlX1RyYW5zZm9ybSgpLCBuZXcgcm90YXRlXzEuUm90YXRlX1RyYW5zZm9ybSgwKSwgbmV3IHNjYWxlXzEuU2NhbGVfVHJhbnNmb3JtKCldO1xyXG4gICAgICAgIGlmIChvcmlnaW4pIHtcclxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5wdXNoKG5ldyB0cmFuc2xhdGVfMS5UcmFuc2xhdGVfVHJhbnNmb3JtKC1vcmlnaW4ueCwgLW9yaWdpbi55KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybXMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBjb250ZXh0KCkge1xyXG4gICAgICAgIGlmICghQ29tcG9uZW50Ll9DT05URVhUKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIk5vIHN0YXRpYyBDb21wb25lbnQgY29udGV4dCBmb3VuZC4gU2V0IG9uZSBtYW51YWxseSwgb3Igc3Vic2NyaWJlIHRvIHRoZSBsYXRlc3QgY3JlYXRlZCBjb250ZXh0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5fQ09OVEVYVDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXQgY29udGV4dChjdHgpIHtcclxuICAgICAgICBpZiAoQ29tcG9uZW50Ll9DT05URVhUX1NVQlNDUklQVElPTikge1xyXG4gICAgICAgICAgICBDb21wb25lbnQuX0NPTlRFWFRfU1VCU0NSSVBUSU9OLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbXBvbmVudC5fQ09OVEVYVCA9IGN0eDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzdWJzY3JpYmVMYXRlc3RDb250ZXh0KCkge1xyXG4gICAgICAgIGlmIChDb21wb25lbnQuX0NPTlRFWFRfU1VCU0NSSVBUSU9OKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29tcG9uZW50Ll9DT05URVhUX1NVQlNDUklQVElPTiA9IGNvbnRleHRfMS5Db250ZXh0LmNvbnRleHRzLnN1YnNjcmliZSgoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICBDb21wb25lbnQuX0NPTlRFWFQgPSBjb250ZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbW92ZVRvKHgsIHksIGR1cmF0aW9uID0gMCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybS50cmFuc2xhdGVcIiwgbmV3IHRyYW5zbGF0ZV8xLlRyYW5zbGF0ZV9UcmFuc2Zvcm0oeCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlQXR0cmlidXRlKFwidHJhbnNmb3JtLnRyYW5zbGF0ZVwiLCBuZXcgdHJhbnNsYXRlXzEuVHJhbnNsYXRlX1RyYW5zZm9ybSh4LCB5KSwgZHVyYXRpb24sIHRoaXMuZWFzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByb3RhdGUoYW5nbGUsIGR1cmF0aW9uID0gMCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybS5yb3RhdGVcIiwgbmV3IHJvdGF0ZV8xLlJvdGF0ZV9UcmFuc2Zvcm0oYW5nbGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUF0dHJpYnV0ZShcInRyYW5zZm9ybS5yb3RhdGVcIiwgbmV3IHJvdGF0ZV8xLlJvdGF0ZV9UcmFuc2Zvcm0oYW5nbGUpLCBkdXJhdGlvbiwgdGhpcy5lYXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNjYWxlKHgsIHkgPSB4LCBkdXJhdGlvbiA9IDApIHtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm0uc2NhbGVcIiwgbmV3IHNjYWxlXzEuU2NhbGVfVHJhbnNmb3JtKHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUF0dHJpYnV0ZShcInRyYW5zZm9ybS5zY2FsZVwiLCBuZXcgc2NhbGVfMS5TY2FsZV9UcmFuc2Zvcm0oeCwgeSksIGR1cmF0aW9uLCB0aGlzLmVhc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2hpZGRlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hpZGRlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc2JVUkJRV2RGTzBGQlJXaEZMQ3RFUVVGelJUdEJRVU4wUlN3MlJFRkJiMFU3UVVGRGNFVXNjVVZCUVRSRk8wRkJRelZGTERKRFFVRjNRenRCUVVONFF5eHRRMEZCWjBNN1FVRkZhRU1zWlVGQmRVSXNVMEZCVVN4aFFVRkxPMGxCZDBKc1F5eFpRVUZaTEUxQlFXbERMRVZCUVZrc1UwRkJlVUlzWlVGQlRUdFJRVU4wUml4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlJEaENMRmRCUVUwc1IwRkJUaXhOUVVGTkxFTkJRWGxDTzFGQlJHaEdMRmxCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03VVVGSGRFSXNUVUZCVFN4VlFVRlZMRWRCUVVjc1EwRkJReXhKUVVGSkxDdENRVUZ0UWl4RlFVRkZMRVZCUVVVc1NVRkJTU3g1UWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxIVkNRVUZsTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXk5R0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NLMEpCUVcxQ0xFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJRenRSUVVORUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wbEJRemRETEVOQlFVTTdTVUU1UWswc1RVRkJUU3hMUVVGTExFOUJRVTg3VVVGRGRrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhOUVVGTkxFbEJRVWtzWTBGQll5eERRVUZETEd0SFFVRnJSeXhEUVVGRExFTkJRVU03VVVGREwwZ3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkRUU3hOUVVGTkxFdEJRVXNzVDBGQlR5eERRVUZETEVkQlFWazdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEhGQ1FVRnhRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4VFFVRlRMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkRhRVFzUTBGQlF6dFJRVU5FTEZOQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZEVFN4TlFVRk5MRU5CUVVNc2MwSkJRWE5DTzFGQlEyeERMRVZCUVVVc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNUVUZCVFN4RFFVRkRPMUZCUTFRc1EwRkJRenRSUVVORUxGTkJRVk1zUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhwUWtGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU4yUlN4VFFVRlRMRU5CUVVNc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF6dFJRVU12UWl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGWlRTeE5RVUZOTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hYUVVGdFFpeERRVUZETzFGQlEzUkVMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzU1VGQlNTd3JRa0ZCYlVJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSU3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzU1VGQlNTd3JRa0ZCYlVJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU55Unl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxFMUJRVTBzUTBGQlF5eExRVUZoTEVWQlFVVXNWMEZCYlVJc1EwRkJRenRSUVVNdlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRWxCUVVrc2VVSkJRV2RDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJTeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNTVUZCU1N4NVFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEyaEhMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVOQlFWTXNSVUZCUlN4SlFVRlpMRU5CUVVNc1JVRkJSU3hYUVVGdFFpeERRVUZETzFGQlEzcEVMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeDFRa0ZCWlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEZMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hKUVVGSkxIVkNRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROMFlzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4SlFVRkpPMUZCUTFRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU4yUWl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxFbEJRVWs3VVVGRFZDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjBRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dERRVU5HTzBGQmFrVkVMRGhDUVdsRlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IElOSVRJQUxfTlVNX1NBTVBMRVMgPSAxNztcclxuY29uc3QgTkVXVE9OX0lURVJBVElPTlMgPSA1O1xyXG5jb25zdCBfY2FsY0NvbnN0YW50cyA9IChwMSwgcDIpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYTogMSAtIDMgKiBwMiArIDMgKiBwMSxcclxuICAgICAgICBiOiAzICogcDIgLSA2ICogcDEsXHJcbiAgICAgICAgYzogMyAqIHAxLFxyXG4gICAgfTtcclxufTtcclxuY29uc3QgX2V2YWx1YXRlQmV6aWVyID0gKHQsIGMpID0+ICgoYy5hICogdCArIGMuYikgKiB0ICsgYy5jKSAqIHQ7XHJcbmNvbnN0IF9ldmFsdWF0ZUJlemllckRlcml2YXRpdmUgPSAodCwgYykgPT4gKDMgKiBjLmEgKiB0ICsgMiAqIGMuYikgKiB0ICsgYy5jO1xyXG5jb25zdCBfY2FsY1RGcm9tWCA9IChzYW1wbGVzLCB4LCBjKSA9PiB7XHJcbiAgICBjb25zdCBpZHggPSBNYXRoLm1pbihNYXRoLm1heChzYW1wbGVzLmZpbmRJbmRleChzYW1wbGUgPT4gc2FtcGxlID4geCkgLSAxLCAxKSwgc2FtcGxlcy5sZW5ndGggLSAxKTtcclxuICAgIGNvbnN0IGQgPSAoeCAtIHNhbXBsZXNbaWR4XSkgLyAoc2FtcGxlc1tpZHggKyAxXSAtIHNhbXBsZXNbaWR4XSk7XHJcbiAgICBsZXQgZXN0aW1hdGUgPSAoZCArIGlkeCAtIDEpIC8gKElOSVRJQUxfTlVNX1NBTVBMRVMgLSAxKTtcclxuICAgIGZvciAobGV0IGl0ZXIgPSAwOyBpdGVyIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraXRlcikge1xyXG4gICAgICAgIGNvbnN0IHNsb3BlID0gX2V2YWx1YXRlQmV6aWVyRGVyaXZhdGl2ZShlc3RpbWF0ZSwgYyk7XHJcbiAgICAgICAgaWYgKHNsb3BlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlc3RpbWF0ZSAtPSAoX2V2YWx1YXRlQmV6aWVyKGVzdGltYXRlLCBjKSAtIHgpIC8gc2xvcGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXN0aW1hdGU7XHJcbn07XHJcbmV4cG9ydHMuY3ViaWNCZXppZXIgPSAocDF4LCBwMXksIHAyeCwgcDJ5KSA9PiB7XHJcbiAgICBpZiAocDF4ID09PSBwMXkgJiYgcDJ4ID09PSBwMnkpIHtcclxuICAgICAgICByZXR1cm4gKHgpID0+IHg7XHJcbiAgICB9XHJcbiAgICBjb25zdCB4Q29uc3RhbnRzID0gX2NhbGNDb25zdGFudHMocDF4LCBwMngpO1xyXG4gICAgY29uc3QgeUNvbnN0YW50cyA9IF9jYWxjQ29uc3RhbnRzKHAxeSwgcDJ5KTtcclxuICAgIGNvbnN0IHNhbXBsZXMgPSBuZXcgRmxvYXQzMkFycmF5KElOSVRJQUxfTlVNX1NBTVBMRVMpO1xyXG4gICAgZm9yIChsZXQgc2FtcGxlID0gMDsgc2FtcGxlIDwgSU5JVElBTF9OVU1fU0FNUExFUzsgKytzYW1wbGUpIHtcclxuICAgICAgICBzYW1wbGVzW3NhbXBsZV0gPSBfZXZhbHVhdGVCZXppZXIoc2FtcGxlIC8gKElOSVRJQUxfTlVNX1NBTVBMRVMgLSAxKSwgeENvbnN0YW50cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHgpID0+IF9ldmFsdWF0ZUJlemllcihfY2FsY1RGcm9tWChzYW1wbGVzLCB4LCB4Q29uc3RhbnRzKSwgeUNvbnN0YW50cyk7XHJcbn07XHJcbmNvbnN0IGZsaXAgPSAoZWFzZSkgPT4gKHQpID0+IDEgLSBlYXNlKDEgLSB0KTtcclxuY29uc3QgaW5vdXQgPSAoZWFzZUluLCBlYXNlT3V0KSA9PiB7XHJcbiAgICByZXR1cm4gKHQpID0+IHQgPCAwLjUgPyBlYXNlSW4odCAqIDIpIC8gMiA6IGVhc2VPdXQoMiAqIHQgLSAxKSAvIDIgKyAwLjU7XHJcbn07XHJcbmNvbnN0IHMgPSAxLjcwMTU4O1xyXG5jb25zdCBwID0gMC4wNzU7XHJcbmV4cG9ydHMubGluZWFyID0gKHQpID0+IHQ7XHJcbmV4cG9ydHMuc3RlcCA9IE1hdGgucm91bmQ7XHJcbmV4cG9ydHMucXVhZHJhdGljSW4gPSAodCkgPT4gTWF0aC5wb3codCwgMik7XHJcbmV4cG9ydHMucXVhZHJhdGljT3V0ID0gZmxpcChleHBvcnRzLnF1YWRyYXRpY0luKTtcclxuZXhwb3J0cy5xdWFkcmF0aWMgPSBpbm91dChleHBvcnRzLnF1YWRyYXRpY0luLCBleHBvcnRzLnF1YWRyYXRpY091dCk7XHJcbmV4cG9ydHMuY3ViaWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCAzKTtcclxuZXhwb3J0cy5jdWJpY091dCA9IGZsaXAoZXhwb3J0cy5jdWJpY0luKTtcclxuZXhwb3J0cy5jdWJpYyA9IGlub3V0KGV4cG9ydHMuY3ViaWNJbiwgZXhwb3J0cy5jdWJpY091dCk7XHJcbmV4cG9ydHMucXVhcnRpY0luID0gKHQpID0+IE1hdGgucG93KHQsIDQpO1xyXG5leHBvcnRzLnF1YXJ0aWNPdXQgPSBmbGlwKGV4cG9ydHMucXVhcnRpY0luKTtcclxuZXhwb3J0cy5xdWFydGljID0gaW5vdXQoZXhwb3J0cy5xdWFydGljSW4sIGV4cG9ydHMucXVhcnRpY091dCk7XHJcbmV4cG9ydHMucXVpbnRpY0luID0gKHQpID0+IE1hdGgucG93KHQsIDUpO1xyXG5leHBvcnRzLnF1aW50aWNPdXQgPSBmbGlwKGV4cG9ydHMucXVpbnRpY0luKTtcclxuZXhwb3J0cy5xdWludGljID0gaW5vdXQoZXhwb3J0cy5xdWludGljSW4sIGV4cG9ydHMucXVpbnRpY091dCk7XHJcbmV4cG9ydHMuc2luZUluID0gKHQpID0+IDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpO1xyXG5leHBvcnRzLnNpbmVPdXQgPSBmbGlwKGV4cG9ydHMuc2luZUluKTtcclxuZXhwb3J0cy5zaW5lID0gaW5vdXQoZXhwb3J0cy5zaW5lSW4sIGV4cG9ydHMuc2luZU91dCk7XHJcbmV4cG9ydHMuZXhwb25lbnRpYWxJbiA9ICh0KSA9PiBNYXRoLnBvdygyLCAoMTAgKiAodCAtIDEpKSk7XHJcbmV4cG9ydHMuZXhwb25lbnRpYWxPdXQgPSBmbGlwKGV4cG9ydHMuZXhwb25lbnRpYWxJbik7XHJcbmV4cG9ydHMuZXhwb25lbnRpYWwgPSBpbm91dChleHBvcnRzLmV4cG9uZW50aWFsSW4sIGV4cG9ydHMuZXhwb25lbnRpYWxPdXQpO1xyXG5leHBvcnRzLmNpcmN1bGFySW4gPSAodCkgPT4gMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3codCwgMikpO1xyXG5leHBvcnRzLmNpcmN1bGFyT3V0ID0gZmxpcChleHBvcnRzLmNpcmN1bGFySW4pO1xyXG5leHBvcnRzLmNpcmN1bGFyID0gaW5vdXQoZXhwb3J0cy5jaXJjdWxhckluLCBleHBvcnRzLmNpcmN1bGFyT3V0KTtcclxuZXhwb3J0cy5iYWNrSW4gPSAodCkgPT4gTWF0aC5wb3codCwgMikgKiAoKHMgKyAxKSAqIHQgLSBzKTtcclxuZXhwb3J0cy5iYWNrT3V0ID0gZmxpcChleHBvcnRzLmJhY2tJbik7XHJcbmV4cG9ydHMuYmFjayA9IGlub3V0KGV4cG9ydHMuYmFja0luLCBleHBvcnRzLmJhY2tPdXQpO1xyXG5leHBvcnRzLmVsYXN0aWNJbiA9ICh0KSA9PiBNYXRoLnBvdygyLCAoLTEwICogdCkpICogTWF0aC5zaW4oKHQgLSBwKSAqICgyICogTWF0aC5QSSkgLyAwLjMpICsgMTtcclxuZXhwb3J0cy5lbGFzdGljT3V0ID0gZmxpcChleHBvcnRzLmVsYXN0aWNJbik7XHJcbmV4cG9ydHMuZWxhc3RpYyA9IGlub3V0KGV4cG9ydHMuZWxhc3RpY0luLCBleHBvcnRzLmVsYXN0aWNPdXQpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWldGemFXNW5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNUVUZCVFN4dFFrRkJiVUlzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZETDBJc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRlJOVUlzVFVGQlRTeGpRVUZqTEVkQlFVY3NRMEZCUXl4RlFVRlZMRVZCUVVVc1JVRkJWU3hGUVVGaExFVkJRVVU3U1VGRE0wUXNUVUZCVFN4RFFVRkRPMUZCUTB3c1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRk8xRkJRM1JDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTzFGQlEyeENMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJUdExRVU5XTEVOQlFVTTdRVUZEU2l4RFFVRkRMRU5CUVVNN1FVRkZSaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEY2tZc1RVRkJUU3g1UWtGQmVVSXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGWkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZha2NzVFVGQlRTeFhRVUZYTEVkQlFVY3NRMEZCUXl4UFFVRnhRaXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZaTEVWQlFWVXNSVUZCUlR0SlFVTTNSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOdVJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrVXNTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla1FzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUjBGQlJ5eHBRa0ZCYVVJc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzQkVMRTFCUVUwc1MwRkJTeXhIUVVGSExIbENRVUY1UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9RaXhMUVVGTExFTkJRVU03VVVGRFVpeERRVUZETzFGQlEwUXNVVUZCVVN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRGVrUXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRGJFSXNRMEZCUXl4RFFVRkRPMEZCUlZjc1VVRkJRU3hYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUZYTEVWQlFVVXNSMEZCVnl4RlFVRkZMRWRCUVZjc1JVRkJSU3hIUVVGWExFVkJRWGxDTEVWQlFVVTdTVUZEZGtjc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12UWl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJRMFFzVFVGQlRTeFZRVUZWTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhqUVVGakxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpWRExFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NXVUZCV1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdTVUZEZEVRc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRTFCUVUwc1IwRkJSeXh0UWtGQmJVSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRelZFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhsUVVGbExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkRjRVlzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zWlVGQlpTeERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMEZCUTNwR0xFTkJRVU1zUTBGQlF6dEJRVVZHTEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJNa0lzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemRGTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1RVRkJOa0lzUlVGQlJTeFBRVUU0UWl4RlFVRkZMRVZCUVVVN1NVRkRPVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU51Uml4RFFVRkRMRU5CUVVNN1FVRkZSaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZEYkVJc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlNVZ3NVVUZCUVN4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVVXhRaXhSUVVGQkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMEZCUld4Q0xGRkJRVUVzVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhUUVVGQkxFTkJRVU1zUlVGQlNTeERRVUZETEVOQlFVRXNRMEZCUXp0QlFVTndReXhSUVVGQkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiVUpCUVZjc1EwRkJReXhEUVVGRE8wRkJRMnBETEZGQlFVRXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXh0UWtGQlZ5eEZRVUZGTEc5Q1FVRlpMRU5CUVVNc1EwRkJRenRCUVVVM1F5eFJRVUZCTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zVTBGQlFTeERRVUZETEVWQlFVa3NRMEZCUXl4RFFVRkJMRU5CUVVNN1FVRkRhRU1zVVVGQlFTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVU4c1EwRkJReXhEUVVGRE8wRkJRM3BDTEZGQlFVRXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhsUVVGUExFVkJRVVVzWjBKQlFWRXNRMEZCUXl4RFFVRkRPMEZCUldwRExGRkJRVUVzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhUUVVGQkxFTkJRVU1zUlVGQlNTeERRVUZETEVOQlFVRXNRMEZCUXp0QlFVTnNReXhSUVVGQkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhVUpCUVZNc1EwRkJReXhEUVVGRE8wRkJRemRDTEZGQlFVRXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhwUWtGQlV5eEZRVUZGTEd0Q1FVRlZMRU5CUVVNc1EwRkJRenRCUVVWMlF5eFJRVUZCTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zVTBGQlFTeERRVUZETEVWQlFVa3NRMEZCUXl4RFFVRkJMRU5CUVVNN1FVRkRiRU1zVVVGQlFTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2xDUVVGVExFTkJRVU1zUTBGQlF6dEJRVU0zUWl4UlFVRkJMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zYVVKQlFWTXNSVUZCUlN4clFrRkJWU3hEUVVGRExFTkJRVU03UVVGRmRrTXNVVUZCUVN4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1JFTEZGQlFVRXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU4yUWl4UlFVRkJMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zWTBGQlRTeEZRVUZGTEdWQlFVOHNRMEZCUXl4RFFVRkRPMEZCUlRsQ0xGRkJRVUVzWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhUUVVGQkxFTkJRVU1zUlVGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTTdRVUZEYmtRc1VVRkJRU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEhGQ1FVRmhMRU5CUVVNc1EwRkJRenRCUVVOeVF5eFJRVUZCTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc2NVSkJRV0VzUlVGQlJTeHpRa0ZCWXl4RFFVRkRMRU5CUVVNN1FVRkZia1FzVVVGQlFTeFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhUUVVGQkxFTkJRVU1zUlVGQlNTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRPMEZCUTNSRUxGRkJRVUVzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJWU3hEUVVGRExFTkJRVU03UVVGREwwSXNVVUZCUVN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExHdENRVUZWTEVWQlFVVXNiVUpCUVZjc1EwRkJReXhEUVVGRE8wRkJSVEZETEZGQlFVRXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eFRRVUZCTEVOQlFVTXNSVUZCU1N4RFFVRkRMRU5CUVVFc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU51UkN4UlFVRkJMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQlRTeERRVUZETEVOQlFVTTdRVUZEZGtJc1VVRkJRU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEdOQlFVMHNSVUZCUlN4bFFVRlBMRU5CUVVNc1EwRkJRenRCUVVVNVFpeFJRVUZCTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zVTBGQlFTeERRVUZETEVWQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlFTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONFJpeFJRVUZCTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRVk1zUTBGQlF5eERRVUZETzBGQlF6ZENMRkZCUVVFc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eHBRa0ZCVXl4RlFVRkZMR3RDUVVGVkxFTkJRVU1zUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtXCIpO1xyXG5jbGFzcyBSb3RhdGVfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEsIHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwicm90YXRlXCIpO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hfSAke3RoaXMueH0gJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdGF0ZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgcGFyc2VGbG9hdCh0b2tzWzJdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdGF0ZV9UcmFuc2Zvcm0oMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS54LCB0aGlzLngsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS55LCB0aGlzLnksIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJvdGF0ZV9UcmFuc2Zvcm0gPSBSb3RhdGVfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbTkwWVhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY205MFlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNkVVJCUVRSRE8wRkJRelZETERSRFFVRjVRenRCUVVWNlF5eHpRa0ZCT0VJc1UwRkJVU3h4UWtGQlV6dEpRVU0zUXl4WlFVRnRRaXhEUVVGVExFVkJRVk1zU1VGQldTeERRVUZETEVWQlFWTXNTVUZCV1N4RFFVRkRPMUZCUTNSRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVUkRMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVkU3VVVGQlV5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdEpRVVY0UlN4RFFVRkRPMGxCUTAwc1NVRkJTVHRSUVVOVUxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRnJRanRSUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdkQ1FVRm5RaXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMFlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrTXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQmMwSXNSVUZCUlN4RFFVRlRPMUZCUTJ4RUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdkQ1FVRm5RaXhEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE5VY3NRMEZCUXp0RFFVTkdPMEZCYkVKRUxEUkRRV3RDUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9yb3RhdGUudHNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IocyA9IDEpIHtcclxuICAgICAgICBzdXBlcihcInNjYWxlXCIpO1xyXG4gICAgICAgIHRoaXMucyA9IHM7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnMudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5pZm9ybVNjYWxlX1RyYW5zZm9ybShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5pZm9ybVNjYWxlX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5zLCB0aGlzLnMsIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlVuaWZvcm1TY2FsZV9UcmFuc2Zvcm0gPSBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtO1xyXG5jbGFzcyBTY2FsZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDEsIHkgPSB4KSB7XHJcbiAgICAgICAgc3VwZXIoXCJzY2FsZVwiKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNjYWxlX1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNjYWxlX1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNjYWxlX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS54LCB0aGlzLngsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS55LCB0aGlzLnksIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNjYWxlX1RyYW5zZm9ybSA9IFNjYWxlX1RyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJOaGJHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKelkyRnNaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSFZFUVVFMFF6dEJRVU0xUXl3MFEwRkJlVU03UVVGRmVrTXNORUpCUVc5RExGTkJRVkVzY1VKQlFWTTdTVUZEYmtRc1dVRkJiVUlzU1VGQldTeERRVUZETzFGQlF6bENMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVVJGTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1NVRkZhRU1zUTBGQlF6dEpRVU5OTEVsQlFVazdVVUZEVkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wbEJRMDBzVTBGQlV5eERRVUZETEVkQlFXdENPMUZCUTJwRExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5DUVVGelFpeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEhOQ1FVRnpRaXhGUVVGRkxFTkJRVU03VVVGRGRFTXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQk5FSXNSVUZCUlN4RFFVRlRPMUZCUTNoRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEhOQ1FVRnpRaXhEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRPVVFzUTBGQlF6dERRVU5HTzBGQmFrSkVMSGRFUVdsQ1F6dEJRVVZFTEhGQ1FVRTJRaXhUUVVGUkxIRkNRVUZUTzBsQlF6VkRMRmxCUVcxQ0xFbEJRVmtzUTBGQlF5eEZRVUZUTEVsQlFWa3NRMEZCUXp0UlFVTndSQ3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZFUlN4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0SlFVVjBSQ3hEUVVGRE8wbEJRMDBzU1VGQlNUdFJRVU5VTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGRFRTeFRRVUZUTEVOQlFVTXNSMEZCYTBJN1VVRkRha01zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzUkNMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUkN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlJTeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJjVUlzUlVGQlJTeERRVUZUTzFGQlEycEVMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUTBGQlF5eHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwR0xFTkJRVU03UTBGRFJqdEJRWFJDUkN3d1EwRnpRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9zY2FsZS50c1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcclxuY2xhc3MgVHJhbnNsYXRlX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICBzdXBlcihcInRyYW5zbGF0ZVwiKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRlX1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0oaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ueCwgdGhpcy54LCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ueSwgdGhpcy55LCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2xhdGVfVHJhbnNmb3JtID0gVHJhbnNsYXRlX1RyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTnNZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkSEpoYm5Oc1lYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNkVVJCUVRSRE8wRkJRelZETERSRFFVRjVRenRCUVVWNlF5eDVRa0ZCYVVNc1UwRkJVU3h4UWtGQlV6dEpRVU5vUkN4WlFVRnRRaXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTTdVVUZEY0VRc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJFWXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRSUVVGVExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdTVUZGZEVRc1EwRkJRenRKUVVOTkxFbEJRVWs3VVVGRFZDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wbEJRMDBzVTBGQlV5eERRVUZETEVkQlFXdENPMUZCUTJwRExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETlVJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4wUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORkxFTkJRVU03VVVGRFNDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRMjVETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRWGxDTEVWQlFVVXNRMEZCVXp0UlFVTnlSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXh4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1EwRkRSanRCUVhSQ1JDeHJSRUZ6UWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvdHJhbnNsYXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgRm9yZWlnbk9iamVjdCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImZvcmVpZ25PYmplY3RcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkSFRNTChodG1sKSB7XHJcbiAgICAgICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgIH1cclxuICAgIHJlbW92ZShodG1sKSB7XHJcbiAgICAgICAgdGhpcy5fbm9kZS5yZW1vdmVDaGlsZChodG1sKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZvcmVpZ25PYmplY3QgPSBGb3JlaWduT2JqZWN0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labTl5WldsbmJpMXZZbXBsWTNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUptYjNKbGFXZHVMVzlpYW1WamRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEaERRVUZwUnp0QlFWTnFSeXh0UWtGQk1rSXNVMEZCVVN3clFrRkJlVVU3U1VGRE1VY3NXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRV2xGTzFGQlF6ZEdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWlVGQlpTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRFRTeFBRVUZQTEVOQlFVTXNTVUZCYVVJN1VVRkRPVUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVTk5MRTFCUVUwc1EwRkJReXhKUVVGcFFqdFJRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wTkJRMFk3UVVGV1JDeHpRMEZWUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ZvcmVpZ24tb2JqZWN0LnRzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyByZW5kZXJhYmxlXzEuQWJzdHJhY3RSZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJpbWFnZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbWFnZSA9IEltYWdlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzFoWjJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYldGblpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVUxQkxEaERRVUVyUmp0QlFYRkNMMFlzVjBGQmJVSXNVMEZCVVN3clFrRkJiVVU3U1VGRE5VWXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRWGxFTzFGQlEzSkdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03UTBGRFJqdEJRVXBFTEhOQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2UudHNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIENpcmNsZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiY2lyY2xlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJseVkyeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkybHlZMnhsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYjBOQlFUSkVPMEZCVXpORUxGbEJRVzlDTEZOQlFWRXNjVUpCUVd0RU8wbEJRelZGTEZsQlFWa3NUMEZCWjBJc1JVRkJSU3hMUVVFMlJUdFJRVU42Unl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhEUVVGRE8wTkJRMFk3UVVGS1JDeDNRa0ZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9jaXJjbGUudHNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImVsbGlwc2VcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRWxsaXBzZSA9IEVsbGlwc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXeHNhWEJ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVZzYkdsd2MyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSlFTeHZRMEZCTWtRN1FVRlhNMFFzWVVGQmNVSXNVMEZCVVN4eFFrRkJiMFE3U1VGREwwVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVGhGTzFGQlF6RkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFTkJRVU03UTBGRFJqdEJRVXBFTERCQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2UudHNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImxpbmVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTGluZSA9IExpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHbHVaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklteHBibVV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkxRU3h2UTBGQk1rUTdRVUZYTTBRc1ZVRkJhMElzVTBGQlVTeHhRa0ZCT0VNN1NVRkRkRVVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRKRk8xRkJRM1pITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaERMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUNRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lLnRzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBQYXRoIGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJwYXRoXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBhdGggPSBQYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR0YwYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkJoZEdndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGUE0wUXNWVUZCYTBJc1UwRkJVU3h4UWtGQk9FTTdTVUZEZEVVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUSkZPMUZCUTNaSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdRMEZEUmp0QlFVcEVMRzlDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aC50c1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUG9seWdvbiBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicG9seWdvblwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2x5Z29uID0gUG9seWdvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5c2VXZHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluQnZiSGxuYjI0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGTk0wUXNZVUZCY1VJc1UwRkJVU3h4UWtGQmIwUTdTVUZETDBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUaEZPMUZCUXpGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdRMEZEUmp0QlFVcEVMREJDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWdvbi50c1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInBvbHlsaW5lXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvbHlsaW5lID0gUG9seWxpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXNlV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YjJ4NWJHbHVaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVbEJMRzlEUVVFeVJEdEJRVTB6UkN4alFVRnpRaXhUUVVGUkxIRkNRVUZ6UkR0SlFVTnNSaXhaUVVGWkxFOUJRV2RDTEVWQlFVVXNTMEZCSzBVN1VVRkRNMGNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc05FSkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5bGluZS50c1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUmVjdCBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicmVjdFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5SZWN0ID0gUmVjdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WamRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5KbFkzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGTFFTeHZRMEZCTWtRN1FVRmxNMFFzVlVGQmEwSXNVMEZCVVN4eFFrRkJPRU03U1VGRGRFVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVEpGTzFGQlEzWkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5Q1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3JlY3QudHNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRpbWVuc2lvbl8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvZGltZW5zaW9uXCIpO1xyXG5jb25zdCB0ZXh0X2NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdHRyaWJ1dGVzL3RleHQtY29udGVudFwiKTtcclxuY29uc3QgcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3JlbmRlcmFibGVcIik7XHJcbmNsYXNzIFRleHRTcGFuIGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwidHNwYW5cIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbXB1dGVkTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dFNwYW4gPSBUZXh0U3BhbjtcclxuY2xhc3MgVGV4dCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInRleHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkU3Bhbihjb250ZW50LCBsaW5lSGVpZ2h0LCB1cGRhdGUgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3Qgc3BhbiA9IG5ldyBUZXh0U3Bhbih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGV4dENvbnRlbnRcIiwgY29udGVudCk7XHJcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQpIHtcclxuICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHBhcnNlRmxvYXQodGhpcy5nZXRBdHRyaWJ1dGUoXCJ4XCIpIHx8IFwiMFwiKSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGluZUhlaWdodCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKGxpbmVIZWlnaHQsIFwiZW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBsaW5lSGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZChzcGFuKTtcclxuICAgICAgICByZXR1cm4gc3BhbjtcclxuICAgIH1cclxuICAgIGdldCBjb21wdXRlZExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRleHQgPSBUZXh0O1xyXG5jbGFzcyBNdWx0aWxpbmVUZXh0IGV4dGVuZHMgVGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXh0LCB3aWR0aCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBhdHRycyk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ldyBUZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIHRlbXAuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCAwKTtcclxuICAgICAgICBjb25zdCBzcGFuID0gbmV3IFRleHRTcGFuKGNvbnRleHQpO1xyXG4gICAgICAgIHRlbXAuYWRkKHNwYW4pO1xyXG4gICAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoYXR0cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcGFjZVdpZHRoID0gdGVtcC5jb21wdXRlZExlbmd0aDtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtcIlwiXTtcclxuICAgICAgICB0ZXh0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKCh3b3JkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TGluZSA9IChsaW5lLmxlbmd0aCA9PT0gMCkgPyB3b3JkIDogYCR7bGluZX0gJHt3b3JkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gbmV3IHRleHRfY29udGVudF8xLlRleHRDb250ZW50KG5ld0xpbmUpO1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInRleHRDb250ZW50XCIsIGxpbmVDb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKHNwYW4uY29tcHV0ZWRMZW5ndGggPiB3aWR0aCAmJiBsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2god29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSA9IG5ld0xpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNwYW4obmV3IHRleHRfY29udGVudF8xLlRleHRDb250ZW50KGxpbmUpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTXVsdGlsaW5lVGV4dCA9IE11bHRpbGluZVRleHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluUmxlSFF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3d3UkVGQmRVUTdRVUZGZGtRc1owVkJRVFJFTzBGQlJUVkVMRGhEUVVFclJqdEJRVGhDTDBZc1kwRkJjMElzVTBGQlVTd3JRa0ZCTkVRN1NVRkRlRVlzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRSRU8xRkJRM2hHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkRSQ3hKUVVGWExHTkJRV003VVVGRGRrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1EwRkJRenRKUVVNMVF5eERRVUZETzBOQlEwWTdRVUZRUkN3MFFrRlBRenRCUVZsRUxGVkJRV3RDTEZOQlFWRXNLMEpCUVhWRU8wbEJReTlGTEZsQlFWa3NUMEZCWjBJc1JVRkJSU3hMUVVGM1JEdFJRVU53Uml4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJRMDBzVDBGQlR5eERRVUZETEU5QlFXOUNMRVZCUVVVc1ZVRkJORUlzUlVGQlJTeFRRVUZyUWl4SlFVRkpPMUZCUTNaR0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU40UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExHRkJRV0VzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1JTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMSEZDUVVGVExFTkJRVThzVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha1VzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xbEJRM1JETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTm1MRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlEwUXNTVUZCVnl4alFVRmpPMUZCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJja0pFTEc5Q1FYRkNRenRCUVVWRUxHMUNRVUV5UWl4VFFVRlJMRWxCUVVrN1NVRkRja01zV1VGQldTeFBRVUZuUWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hMUVVGaExFVkJRVVVzUzBGQk5rVTdVVUZEZEVrc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNdlFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJZc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkRka01zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZETDBRc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTd3dRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6bERMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia1FzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOdVFpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlEzQkRMRU5CUVVNN1VVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOd1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc01FSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlF5eERRVUZETzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMFk3UVVFM1FrUXNjME5CTmtKREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0LnRzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBUZXh0Q29udGVudCB7XHJcbiAgICBzdGF0aWMgZXNjYXBlSHRtbChodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RyID0gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2IgPSBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGVudChjc3MgfHwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFRleHRDb250ZW50LmVzY2FwZUh0bWwodGhpcy5fc3RyIHx8IHRoaXMuX2NiKCkpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiB0IDwgMC41ID8gZnJvbSA6IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UZXh0Q29udGVudCA9IFRleHRDb250ZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEMxamIyNTBaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkR1Y0ZEMxamIyNTBaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSMEU3U1VGRFZTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVZrN1VVRkRjRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETzBsQlMwUXNXVUZCV1N4SFFVRTBRanRSUVVOMFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlEyeENMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRTFCUVUwc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCSzBJc1QwRkJiVUlzUlVGQlJTeEpRVUZQTzFGQlEyNUZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRKUVVONlF5eERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRXJRaXhQUVVGdFFpeEZRVUZGTEVsQlFVOHNSVUZCUlN4UlFVRnpRanRSUVVNelJpeFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU40UlN4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRV2xDTEVWQlFVVXNRMEZCVXp0UlFVTTNReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZETDBJc1EwRkJRenREUVVOR08wRkJNMEpFTEd0RFFUSkNReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90ZXh0LWNvbnRlbnQudHNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBCbGVuZF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVCbGVuZFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CbGVuZF9QcmltaXRpdmUgPSBCbGVuZF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlteGxibVF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmliR1Z1WkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERCRVFVRnpSRHRCUVZGMFJDeHhRa0ZCTmtJc1UwRkJVU3hyUTBGQmIwUTdTVUZEZGtZc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmFVTTdVVUZETTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9ibGVuZC50c1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbG9yTWF0cml4X1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUNvbG9yTWF0cml4XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbG9yTWF0cml4X1ByaW1pdGl2ZSA9IENvbG9yTWF0cml4X1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5c2IzSXRiV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5c2IzSXRiV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc01FUkJRWE5FTzBGQlUzUkVMREpDUVVGdFF5eFRRVUZSTEd0RFFVRm5SVHRKUVVONlJ5eFpRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRjFRenRSUVVOcVJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMR1ZCUVdVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPME5CUTBZN1FVRktSQ3h6UkVGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb2xvci1tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBDb21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmUgPSBDb21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExYUnlZVzV6Wm1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dGNHOXVaVzUwTFhSeVlXNXpabVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzTUVSQlFYTkVPMEZCVFhSRUxHbERRVUY1UXl4VFFVRlJMR3REUVVFMFJUdEpRVU16U0N4WlFVRlpMRTFCUVdNc1JVRkJSU3hMUVVFMlF6dFJRVU4yUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxIRkNRVUZ4UWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemxETEVOQlFVTTdRMEZEUmp0QlFVcEVMR3RGUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb25lbnQtdHJhbnNmZXIudHNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBDb21wb3NpdGVfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlQ29tcG9zaXRlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbXBvc2l0ZV9QcmltaXRpdmUgPSBDb21wb3NpdGVfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5emFYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl6YVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc01FUkJRWE5FTzBGQldYUkVMSGxDUVVGcFF5eFRRVUZSTEd0RFFVRTBSRHRKUVVOdVJ5eFpRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRnhRenRSUVVNdlJDeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPME5CUTBZN1FVRktSQ3hyUkVGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb3NpdGUudHNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBDb252b2x2ZU1hdHJpeF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db252b2x2ZU1hdHJpeF9QcmltaXRpdmUgPSBDb252b2x2ZU1hdHJpeF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVkbTlzZG1VdGJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl1ZG05c2RtVXRiV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUzBFc01FUkJRWE5FTzBGQlowSjBSQ3c0UWtGQmMwTXNVMEZCVVN4clEwRkJjMFU3U1VGRGJFZ3NXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJNRU03VVVGRGNFVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hyUWtGQmEwSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBOQlEwWTdRVUZLUkN3MFJFRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgRGlzcGxhY2VtZW50TWFwX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlID0gRGlzcGxhY2VtZW50TWFwX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsemNHeGhZMlZ0Wlc1MExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltUnBjM0JzWVdObGJXVnVkQzF0WVhBdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZEUVN3d1JFRkJjMFE3UVVGVmRFUXNLMEpCUVhWRExGTkJRVkVzYTBOQlFYZEZPMGxCUTNKSUxGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFUSkRPMUZCUTNKRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJTa1FzT0VSQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZGlzcGxhY2VtZW50LW1hcC50c1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIEZsb29kX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUZsb29kXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZsb29kX1ByaW1pdGl2ZSA9IEZsb29kX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm14dmIyUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKbWJHOXZaQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVZEJMREJFUVVGelJEdEJRVTkwUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCYjBRN1NVRkRka1lzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCYVVNN1VVRkRNMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2Zsb29kLnRzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgR2F1c3NpYW5CbHVyX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUdhdXNzaWFuQmx1clwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HYXVzc2lhbkJsdXJfUHJpbWl0aXZlID0gR2F1c3NpYW5CbHVyX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjJGMWMzTnBZVzR0WW14MWNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1kaGRYTnphV0Z1TFdKc2RYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTd3dSRUZCYzBRN1FVRlJkRVFzTkVKQlFXOURMRk5CUVZFc2EwTkJRV3RGTzBsQlF6VkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWGRETzFGQlEyeEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVrTXNRMEZCUXp0RFFVTkdPMEZCU2tRc2QwUkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2dhdXNzaWFuLWJsdXIudHNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBJbWFnZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVJbWFnZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbWFnZV9QcmltaXRpdmUgPSBJbWFnZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXMWhaMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBiV0ZuWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERCRVFVRnpSRHRCUVU5MFJDeHhRa0ZCTmtJc1UwRkJVU3hyUTBGQmIwUTdTVUZEZGtZc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmFVTTdVVUZETTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9pbWFnZS50c1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIERpZmZ1c2VMaWdodGluZyBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZURpZmZ1c2VMaWdodGluZ1wiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EaWZmdXNlTGlnaHRpbmcgPSBEaWZmdXNlTGlnaHRpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHbG1ablZ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVJwWm1aMWMyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTdzJSRUZCZVVRN1FVRlZla1FzY1VKQlFUWkNMRk5CUVZFc2EwTkJRWGRGTzBsQlF6TkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRVEpETzFGQlEzSkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2RpZmZ1c2UudHNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBEaXN0YW50TGlnaHQgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVEaXN0YW50TGlnaHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGlzdGFudExpZ2h0ID0gRGlzdGFudExpZ2h0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x6ZEdGdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1ScGMzUmhiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3huUlVGQk5FUTdRVUZSTlVRc2EwSkJRVEJDTEZOQlFWRXNhME5CUVd0Rk8wbEJRMnhITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhkRE8xRkJRMnhGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRla01zUTBGQlF6dERRVU5HTzBGQlNrUXNiME5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvZGlzdGFudC50c1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFBvaW50TGlnaHQgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVQb2ludExpZ2h0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvaW50TGlnaHQgPSBQb2ludExpZ2h0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YjJsdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQkxHZEZRVUUwUkR0QlFWVTFSQ3huUWtGQmQwSXNVMEZCVVN4clEwRkJPRVE3U1VGRE5VWXNXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJjME03VVVGRGFFVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hqUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenREUVVOR08wRkJTa1FzWjBOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3BvaW50LnRzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgU3BvdExpZ2h0IGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlU3BvdExpZ2h0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwb3RMaWdodCA9IFNwb3RMaWdodDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCdmRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5Od2IzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSFFTeG5SVUZCTkVRN1FVRm5RalZFTEdWQlFYVkNMRk5CUVZFc2EwTkJRVFJFTzBsQlEzcEdMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWEZETzFGQlF5OUVMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWVVGQllTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03UTBGRFJqdEJRVXBFTERoQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3Nwb3QudHNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBTcGVjdWxhckxpZ2h0aW5nIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcGVjdWxhckxpZ2h0aW5nID0gU3BlY3VsYXJMaWdodGluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCbFkzVnNZWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnpjR1ZqZFd4aGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEWkVRVUY1UkR0QlFWZDZSQ3h6UWtGQk9FSXNVMEZCVVN4clEwRkJNRVU3U1VGRE9VY3NXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJORU03VVVGRGRFVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBOQlEwWTdRVUZLUkN3MFEwRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvc3BlY3VsYXIudHNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBNZXJnZU5vZGVfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlTWVyZ2VOb2RlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1lcmdlTm9kZV9QcmltaXRpdmUgPSBNZXJnZU5vZGVfUHJpbWl0aXZlO1xyXG5jbGFzcyBNZXJnZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlcikge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZU1lcmdlXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWVyZ2VfUHJpbWl0aXZlID0gTWVyZ2VfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV1Z5WjJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp0WlhKblpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxEQkVRVUZ6UkR0QlFVMTBSQ3g1UWtGQmFVTXNVMEZCVVN4clEwRkJORVE3U1VGRGJrY3NXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJjVU03VVVGREwwUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hoUVVGaExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZEVNc1EwRkJRenREUVVOR08wRkJTa1FzYTBSQlNVTTdRVUZGUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCZDBNN1NVRkRNMFVzV1VGQldTeE5RVUZqTzFGQlEzaENMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdTVUZETTBJc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbWVyZ2UudHNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBNb3JwaG9sb2d5X1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZU1vcnBob2xvZ3lcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTW9ycGhvbG9neV9QcmltaXRpdmUgPSBNb3JwaG9sb2d5X1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYlc5eWNHaHZiRzluZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTF2Y25Cb2IyeHZaM2t1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3d3UkVGQmMwUTdRVUZSZEVRc01FSkJRV3RETEZOQlFWRXNhME5CUVRoRU8wbEJRM1JITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhORE8xRkJRMmhGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUVRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21vcnBob2xvZ3kudHNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBPZmZzZXRfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlT2Zmc2V0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9mZnNldF9QcmltaXRpdmUgPSBPZmZzZXRfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMlptYzJWMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYjJabWMyVjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlIwRXNNRVJCUVhORU8wRkJVM1JFTEhOQ1FVRTRRaXhUUVVGUkxHdERRVUZ6UkR0SlFVTXhSaXhaUVVGWkxFMUJRV01zUlVGQlJTeExRVUZyUXp0UlFVTTFSQ3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBOQlEwWTdRVUZLUkN3MFEwRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvb2Zmc2V0LnRzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgVGlsZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVUaWxlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRpbGVfUHJpbWl0aXZlID0gVGlsZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHbHNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluUnBiR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3d3UkVGQmMwUTdRVUZOZEVRc2IwSkJRVFJDTEZOQlFWRXNhME5CUVd0RU8wbEJRM0JHTEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVdkRE8xRkJRekZFTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3RpbGUudHNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBUcmFuc2ZlckZ1bmN0aW9uX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBjaGFubmVsLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgYGZlRnVuYyR7Y2hhbm5lbH1gLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2ZlckZ1bmN0aW9uX1ByaW1pdGl2ZSA9IFRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5ObVpYSXRablZ1WTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKMGNtRnVjMlpsY2kxbWRXNWpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERCRVFVRnpSRHRCUVRCQ2RFUXNaME5CUVhkRExGTkJRVkVzYTBOQlFUSklPMGxCUTNwTExGbEJRVmtzVFVGQll5eEZRVUZGTEU5QlFUaENMRVZCUVVVc1MwRkJORU03VVVGRGRFY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFOUJRVThzUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03UTBGRFJqdEJRVXBFTEdkRlFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHJhbnNmZXItZnVuY3Rpb24udHNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBUdXJidWxlbmNlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVR1cmJ1bGVuY2VcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHVyYnVsZW5jZV9QcmltaXRpdmUgPSBUdXJidWxlbmNlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhWeVluVnNaVzVqWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblIxY21KMWJHVnVZMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3d3UkVGQmMwUTdRVUZWZEVRc01FSkJRV3RETEZOQlFWRXNhME5CUVRoRU8wbEJRM1JITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhORE8xRkJRMmhGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUVRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3R1cmJ1bGVuY2UudHNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdHRyaWJ1dGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb25zdGFudHNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZG9jdW1lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbGVtZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXZlbnRzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaW50ZXJwb2xhdGlvblwiKSk7XHJcbmNvbnN0IEFuaW1hdGlvbiA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvblwiKTtcclxuZXhwb3J0cy5BbmltYXRpb24gPSBBbmltYXRpb247XHJcbmNvbnN0IEF0dHJpYnV0ZXMgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzXCIpO1xyXG5leHBvcnRzLkF0dHJpYnV0ZXMgPSBBdHRyaWJ1dGVzO1xyXG5jb25zdCBFbGVtZW50cyA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpO1xyXG5leHBvcnRzLkVsZW1lbnRzID0gRWxlbWVudHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHbERRVUUwUWp0QlFVTTFRaXhwUTBGQk5FSTdRVUZETlVJc0swSkJRVEJDTzBGQlF6RkNMR2REUVVFeVFqdEJRVU16UWl3clFrRkJNRUk3UVVGRE1VSXNPRUpCUVhsQ08wRkJRM3BDTEhGRFFVRm5RenRCUVVWb1F5eDVRMEZCZVVNN1FVRkxka01zT0VKQlFWTTdRVUZLV0N3eVEwRkJNa003UVVGTGVrTXNaME5CUVZVN1FVRktXaXgxUTBGQmRVTTdRVUZMY2tNc05FSkJRVkVpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWFpsYm5SekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWlhabGJuUnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V2ZW50cy50c1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Vhc2luZ1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlcmVyXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERoQ1FVRjVRanRCUVVONlFpeG5RMEZCTWtJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9iYXNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYm94XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29sb3ItbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29sb3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kaW1lbnNpb25cIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRyaXhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9udW1iZXItb3B0aW9uYWwtbnVtYmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGF0aC1zZWdtZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcG9pbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW9cIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90ZXh0LWNvbnRlbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmFuc2Zvcm1cIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi93cmFwcGVyc1wiKSk7XHJcbmNvbnN0IFRyYW5zZm9ybXMgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1zXCIpO1xyXG5leHBvcnRzLlRyYW5zZm9ybXMgPSBUcmFuc2Zvcm1zO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRFJDUVVGMVFqdEJRVU4yUWl3eVFrRkJjMEk3UVVGRGRFSXNiME5CUVN0Q08wRkJReTlDTERaQ1FVRjNRanRCUVVONFFpeHBRMEZCTkVJN1FVRkROVUlzT0VKQlFYbENPMEZCUTNwQ0xEaERRVUY1UXp0QlFVTjZReXh2UTBGQkswSTdRVUZETDBJc05rSkJRWGRDTzBGQlEzaENMRFpEUVVGM1F6dEJRVU40UXl4dlEwRkJLMEk3UVVGREwwSXNhVU5CUVRSQ08wRkJRelZDTEdkRFFVRXlRanRCUVVVelFpd3lRMEZCTWtNN1FVRkRiRU1zWjBOQlFWVWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbnZhciBDb2xvck1hdHJpeDtcclxuKGZ1bmN0aW9uIChDb2xvck1hdHJpeCkge1xyXG4gICAgY2xhc3MgUmF3IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZXMgPSBbWzEsIDAsIDAsIDAsIDBdLCBbMCwgMSwgMCwgMCwgMF0sIFswLCAwLCAxLCAwLCAwXSwgWzAsIDAsIDAsIDEsIDBdLCBbMCwgMCwgMCwgMCwgMF1dKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwibWF0cml4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYXJyID0gdGhpcy5hcnIuY29uY2F0KC4uLnZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJhdyhbY3NzLnNwbGl0KFwiIFwiKS5tYXAocGFyc2VGbG9hdCldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmF3KFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSYXcoW3RoaXMuYXJyLm1hcCgodmFsLCBpKSA9PiBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbVtpXSwgdmFsLCB0KSldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb2xvck1hdHJpeC5SYXcgPSBSYXc7XHJcbiAgICBjbGFzcyBTYXR1cmF0ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodmFsdWUgPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJzYXR1cmF0ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2F0dXJhdGUocGFyc2VGbG9hdChjc3MpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2F0dXJhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTYXR1cmF0ZShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS52YWx1ZSwgdGhpcy52YWx1ZSwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4LlNhdHVyYXRlID0gU2F0dXJhdGU7XHJcbiAgICBjbGFzcyBIdWVSb3RhdGUge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHZhbHVlID0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiaHVlUm90YXRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIdWVSb3RhdGUocGFyc2VGbG9hdChjc3MpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSHVlUm90YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSHVlUm90YXRlKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnZhbHVlLCB0aGlzLnZhbHVlLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29sb3JNYXRyaXguSHVlUm90YXRlID0gSHVlUm90YXRlO1xyXG4gICAgY2xhc3MgTHVtaW5hbmNlVG9BbHBoYUNvbG9yTWF0cml4IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJsdW1pbmFuY2VUb0FscGhhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb2xvck1hdHJpeC5MdW1pbmFuY2VUb0FscGhhQ29sb3JNYXRyaXggPSBMdW1pbmFuY2VUb0FscGhhQ29sb3JNYXRyaXg7XHJcbn0pKENvbG9yTWF0cml4ID0gZXhwb3J0cy5Db2xvck1hdHJpeCB8fCAoZXhwb3J0cy5Db2xvck1hdHJpeCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXNiM0l0YldGMGNtbDRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXNiM0l0YldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNiMFJCUVhsRE8wRkJVWHBETEVsQlFXbENMRmRCUVZjc1EwRTJSak5DTzBGQk4wWkVMRmRCUVdsQ0xGZEJRVmM3U1VGRk1VSTdVVUZIUlN4WlFVRlpMRk5CUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkdMMGNzVTBGQlNTeEhRVUZoTEZGQlFWRXNRMEZCUXp0WlFVTXhRaXhSUVVGSExFZEJRV0VzUlVGQlJTeERRVUZETzFsQlJYaENMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU40UXl4RFFVRkRPMUZCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFsQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOcVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtRc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVms3V1VGRE1VTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhFTEVOQlFVTTdVVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCWXp0WlFVTXhSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE0wSXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRVFzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6bERMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRMDBzVjBGQlZ5eERRVUZETEVsQlFWa3NSVUZCUlN4RFFVRlRPMWxCUTNoRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pGTEVOQlFVTTdTMEZEUmp0SlFURkNXU3hsUVVGSExFMUJNRUptTEVOQlFVRTdTVUZGUkR0UlFVVkZMRmxCUVcxQ0xGRkJRV2RDTEVOQlFVTTdXVUZCYWtJc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQldUdFpRVVEzUWl4VFFVRkpMRWRCUVdVc1ZVRkJWU3hEUVVGRE8xRkJRMFVzUTBGQlF6dFJRVU5xUXl4UlFVRlJPMWxCUTJJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dFJRVU5OTEV0QlFVc3NRMEZCUXl4SFFVRnJRanRaUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtJc1RVRkJUU3hEUVVGRExFbEJRVWtzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenRaUVVONFFpeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdXVUZETVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEVMRU5CUVVNN1VVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJiVUk3V1VGREwwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyeEVMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNNVF5eERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGakxFVkJRVVVzUTBGQlV6dFpRVU14UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFJDeERRVUZETzB0QlEwWTdTVUV4UWxrc2IwSkJRVkVzVjBFd1FuQkNMRU5CUVVFN1NVRkZSRHRSUVVWRkxGbEJRVzFDTEZGQlFXZENMRU5CUVVNN1dVRkJha0lzVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCV1R0WlFVUTNRaXhUUVVGSkxFZEJRV2RDTEZkQlFWY3NRMEZCUXp0UlFVTkJMRU5CUVVNN1VVRkRha01zVVVGQlVUdFpRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF5OUNMRU5CUVVNN1VVRkRUU3hMUVVGTExFTkJRVU1zUjBGQmEwSTdXVUZETjBJc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjRReXhEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTTdXVUZEZWtJc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWk8xbEJRekZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1JDeERRVUZETzFGQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVcxQ0xFVkJRVVVzU1VGQldTeEZRVUZGTEZGQlFXOUNPMWxCUTJoRkxFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU16UWl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOc1JDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZET1VNc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGRFRTeFhRVUZYTEVOQlFVTXNTVUZCWlN4RlFVRkZMRU5CUVZNN1dVRkRNME1zVFVGQlRTeERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZWtRc1EwRkJRenRMUVVOR08wbEJNVUpaTEhGQ1FVRlRMRmxCTUVKeVFpeERRVUZCTzBsQlJVUTdVVUZCUVR0WlFVTlRMRk5CUVVrc1IwRkJkVUlzYTBKQlFXdENMRU5CUVVNN1VVRkpka1FzUTBGQlF6dFJRVWhSTEZGQlFWRTdXVUZEWWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRMW9zUTBGQlF6dExRVU5HTzBsQlRGa3NkVU5CUVRKQ0xEaENRVXQyUXl4RFFVRkJPMEZCUlVnc1EwRkJReXhGUVRkR1owSXNWMEZCVnl4SFFVRllMRzFDUVVGWExFdEJRVmdzYlVKQlFWY3NVVUUyUmpOQ0luMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2NvbG9yLW1hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNsYXNzIFJHQkltcGwge1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgYSA9IDEpIHtcclxuICAgICAgICB0aGlzLnIgPSAwO1xyXG4gICAgICAgIHRoaXMuZyA9IDA7XHJcbiAgICAgICAgdGhpcy5iID0gMDtcclxuICAgICAgICB0aGlzLmEgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZ2JhTWF0Y2ggPSB4Lm1hdGNoKC9ecmdiYVxccyo/XFwoXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqPyxcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/LFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj8sXFxzKj8oMHwwXFwuXFxkKnwxfDEuMCopXFxzKj9cXCkkL2kpO1xyXG4gICAgICAgICAgICBpZiAocmdiYU1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnIgPSBwYXJzZUludChyZ2JhTWF0Y2hbMV0sIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZyA9IHBhcnNlSW50KHJnYmFNYXRjaFsyXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iID0gcGFyc2VJbnQocmdiYU1hdGNoWzNdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmEgPSBwYXJzZUZsb2F0KHJnYmFNYXRjaFs0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmdiTWF0Y2ggPSB4Lm1hdGNoKC9ecmdiXFxzKj9cXChcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/LFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj8sXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqP1xcKSQvaSk7XHJcbiAgICAgICAgICAgIGlmIChyZ2JNYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yID0gcGFyc2VJbnQocmdiTWF0Y2hbMV0sIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZyA9IHBhcnNlSW50KHJnYk1hdGNoWzJdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmIgPSBwYXJzZUludChyZ2JNYXRjaFszXSwgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnIgPSB4O1xyXG4gICAgICAgICAgICB0aGlzLmcgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLmIgPSB6O1xyXG4gICAgICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgcmdiYSgke01hdGgucm91bmQodGhpcy5yKX0sICR7TWF0aC5yb3VuZCh0aGlzLmcpfSwgJHtNYXRoLnJvdW5kKHRoaXMuYil9LCAke3RoaXMuYX0pYDtcclxuICAgIH1cclxuICAgIHRvSFNMKCkge1xyXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIgLyAyNTU7XHJcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZyAvIDI1NTtcclxuICAgICAgICBjb25zdCBiID0gdGhpcy5iIC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG4gICAgICAgIGNvbnN0IGF2ZyA9IChtYXggKyBtaW4pIC8gMjtcclxuICAgICAgICBjb25zdCBkID0gbWF4IC0gbWluO1xyXG4gICAgICAgIGxldCBoO1xyXG4gICAgICAgIGxldCBzO1xyXG4gICAgICAgIGNvbnN0IGwgPSBhdmc7XHJcbiAgICAgICAgaWYgKGQgPT09IDApIHtcclxuICAgICAgICAgICAgaCA9IDA7XHJcbiAgICAgICAgICAgIHMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcyA9IGQgLyAoMSAtIE1hdGguYWJzKDIgKiBhdmcgLSAxKSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWF4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHI6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9ICgoZyAtIGIpIC8gZCkgJSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnOlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAoKGIgLSByKSAvIGQpICsgMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgYjpcclxuICAgICAgICAgICAgICAgICAgICBoID0gKChyIC0gZykgLyBkKSArIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGggKj0gNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSFNMSW1wbChoLCBzLCBsKTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQsIG1vZGUpIHtcclxuICAgICAgICBjb25zdCBtb2RlUHJlZml4ID0gbW9kZS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgaWYgKG1vZGVQcmVmaXggPT09IFwicmdiXCIpIHtcclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIU0xJbXBsKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gZnJvbS50b1JHQigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgUkdCSW1wbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSR0JJbXBsKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnIsIHRoaXMuciwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmcsIHRoaXMuZywgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmIsIHRoaXMuYiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1vZGVQcmVmaXggPT09IFwiaHNsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9IU0woKS5pbnRlcnBvbGF0ZShmcm9tLCB0LCBtb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSFNMSW1wbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCBhID0gMSkge1xyXG4gICAgICAgIHRoaXMuaCA9IDA7XHJcbiAgICAgICAgdGhpcy5zID0gMDtcclxuICAgICAgICB0aGlzLmwgPSAwO1xyXG4gICAgICAgIHRoaXMuYSA9IDE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhzbGFNYXRjaCA9IHgubWF0Y2goL15oc2xhXFxzKj9cXChcXHMqPygwMDB8MD9cXGR7MSwyfXxbMS0yXVxcZFxcZHwzWzAtNV1cXGR8MzYwKVxccyo/LFxccyo/KDBcXC4/MCp8MTAwXFwuPzAqfFxcZHsxLDJ9fFxcZHsxLDJ9XFwuXFxkKylcXCVcXHMqPyxcXHMqPygwXFwuPzAqfDEwMFxcLj8wKnxcXGR7MSwyfXxcXGR7MSwyfVxcLlxcZCspXFwlXFxzKj8sXFxzKj8oMHwwXFwuXFxkKnwxfDEuMCopXFxzKj9cXCkkL2kpO1xyXG4gICAgICAgICAgICBpZiAoaHNsYU1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmggPSBwYXJzZUZsb2F0KGhzbGFNYXRjaFsxXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnMgPSBwYXJzZUZsb2F0KGhzbGFNYXRjaFsyXSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmwgPSBwYXJzZUZsb2F0KGhzbGFNYXRjaFszXSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmEgPSBwYXJzZUZsb2F0KGhzbGFNYXRjaFs0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaHNsTWF0Y2ggPSB4Lm1hdGNoKC9eaHNsXFxzKj9cXChcXHMqPygwMDB8MD9cXGR7MSwyfXxbMS0yXVxcZFxcZHwzWzAtNV1cXGR8MzYwKVxccyo/LFxccyo/KDBcXC4/MCp8MTAwXFwuPzAqfFxcZHsxLDJ9fFxcZHsxLDJ9XFwuXFxkKylcXCVcXHMqPyxcXHMqPygwXFwuPzAqfDEwMFxcLj8wKnxcXGR7MSwyfXxcXGR7MSwyfVxcLlxcZCspXFwlXFxzKj9cXCkkL2kpO1xyXG4gICAgICAgICAgICBpZiAoaHNsTWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaCA9IHBhcnNlRmxvYXQoaHNsTWF0Y2hbMV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zID0gcGFyc2VGbG9hdChoc2xNYXRjaFsyXSkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmwgPSBwYXJzZUZsb2F0KGhzbE1hdGNoWzNdKSAvIDEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oID0geDtcclxuICAgICAgICAgICAgdGhpcy5zID0geTtcclxuICAgICAgICAgICAgdGhpcy5sID0gejtcclxuICAgICAgICAgICAgdGhpcy5hID0gYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYGhzbGEoJHt0aGlzLmggJSAzNjB9LCAke3RoaXMucyAqIDEwMH0lLCAke3RoaXMubCAqIDEwMH0lLCAke3RoaXMuYX0pYDtcclxuICAgIH1cclxuICAgIHRvUkdCKCkge1xyXG4gICAgICAgIGxldCByID0gMDtcclxuICAgICAgICBsZXQgZyA9IDA7XHJcbiAgICAgICAgbGV0IGIgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLnMgIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYyA9ICgxIC0gTWF0aC5hYnMoMiAqIHRoaXMubCAtIDEpKSAqIHRoaXMucztcclxuICAgICAgICAgICAgY29uc3QgeCA9IGMgKiAoMSAtIE1hdGguYWJzKCh0aGlzLmggLyA2MCkgJSAyIC0gMSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oIDwgNjApIHtcclxuICAgICAgICAgICAgICAgIHIgPSBjO1xyXG4gICAgICAgICAgICAgICAgZyA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oIDwgMTIwKSB7XHJcbiAgICAgICAgICAgICAgICByID0geDtcclxuICAgICAgICAgICAgICAgIGcgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaCA8IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgZyA9IGM7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmggPCAyNDApIHtcclxuICAgICAgICAgICAgICAgIGcgPSB4O1xyXG4gICAgICAgICAgICAgICAgYiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oIDwgMTgwKSB7XHJcbiAgICAgICAgICAgICAgICBiID0gYztcclxuICAgICAgICAgICAgICAgIHIgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaCA8IDI0MCkge1xyXG4gICAgICAgICAgICAgICAgYiA9IHg7XHJcbiAgICAgICAgICAgICAgICByID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtID0gdGhpcy5sIC0gMC41ICogYztcclxuICAgICAgICAgICAgciArPSBtO1xyXG4gICAgICAgICAgICBnICs9IG07XHJcbiAgICAgICAgICAgIGIgKz0gbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSR0JJbXBsKHIgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTUpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCwgbW9kZSkge1xyXG4gICAgICAgIGNvbnN0IG1vZGVQcmVmaXggPSBtb2RlLnN1YnN0cigwLCAzKTtcclxuICAgICAgICBpZiAobW9kZVByZWZpeCA9PT0gXCJoc2xcIikge1xyXG4gICAgICAgICAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIFJHQkltcGwpIHtcclxuICAgICAgICAgICAgICAgIGZyb20gPSBmcm9tLnRvSFNMKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIU0xJbXBsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaDEgPSBmcm9tLmg7XHJcbiAgICAgICAgICAgICAgICBsZXQgaDIgPSB0aGlzLmg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gaDEgLSBoMjtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImhzbC1zaG9ydGVzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDEgKz0gMzYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJoc2wtbG9uZ2VzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDEgKz0gMzYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA+IDAgJiYgbW9kZSA9PT0gXCJoc2wtY2xvY2t3aXNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBoMiArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IDAgJiYgbW9kZSA9PT0gXCJoc2wtY291bnRlcmNsb2Nrd2lzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDEgKz0gMzYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIU0xJbXBsKGludGVycG9sYXRpb25fMS5fbGVycChoMSwgaDIsIHQpICUgMzYwLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5zLCB0aGlzLnMsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5sLCB0aGlzLmwsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb2RlUHJlZml4ID09PSBcInJnYlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUkdCKCkuaW50ZXJwb2xhdGUoZnJvbSwgdCwgbW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIENvbG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdCwgYTEgPSAwLCBhMiA9IDAsIGEzID0gMCwgYTQgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gQ29sb3IuREVGQVVMVF9NT0RFO1xyXG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicmdiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQkltcGwoYTEsIGEyLCBhMywgYTQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtYXQgPT09IFwiaHNsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IEhTTEltcGwoYTEsIGEyLCBhMywgYTQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoXCJyZ2JcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1wbCA9IG5ldyBSR0JJbXBsKGZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybWF0LmluZGV4T2YoXCJoc2xcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1wbCA9IG5ldyBIU0xJbXBsKGZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybWF0LmluZGV4T2YoXCIjXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgYiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbSA9IGZvcm1hdC5tYXRjaCgvXiMoWzAtOWEtZkEtRl17M30pJC9pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHBhcnNlSW50KG1bMV0uY2hhckF0KDApLCAxNikgKiAweDExO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChtWzFdLmNoYXJBdCgxKSwgMTYpICogMHgxMTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQobVsxXS5jaGFyQXQoMiksIDE2KSAqIDB4MTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtID0gZm9ybWF0Lm1hdGNoKC9eIyhbMC05YS1mQS1GXXs2fSkkL2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChtWzFdLnN1YnN0cigwLCAyKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gcGFyc2VJbnQobVsxXS5zdWJzdHIoMiwgMiksIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IHBhcnNlSW50KG1bMV0uc3Vic3RyKDQsIDIpLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQkltcGwociwgZywgYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc1JHQigpIHtcclxuICAgICAgICBpZiAodGhpcy5pbXBsIGluc3RhbmNlb2YgUkdCSW1wbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbXBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbXBsIGluc3RhbmNlb2YgSFNMSW1wbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbXBsLnRvUkdCKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgY29sb3IgaW1wbGVtZW50YXRpb24gZG9lcyBub3Qgc3VwcG9ydCBjb252ZXJzaW9uIHRvIFJHQlwiKTtcclxuICAgIH1cclxuICAgIGFzSFNMKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmltcGwgaW5zdGFuY2VvZiBIU0xJbXBsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltcGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmltcGwgaW5zdGFuY2VvZiBSR0JJbXBsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltcGwudG9IU0woKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBjb2xvciBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBzdXBwb3J0IGNvbnZlcnNpb24gdG8gSFNMXCIpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGNzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBuZXcgQ29sb3IoKTtcclxuICAgICAgICBjLmltcGwgPSB0aGlzLmltcGwuaW50ZXJwb2xhdGUoZnJvbS5pbXBsLCB0LCB0aGlzLm1vZGUpO1xyXG4gICAgICAgIGMubW9kZSA9IHRoaXMubW9kZTtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxufVxyXG5Db2xvci5ERUZBVUxUX01PREUgPSBcInJnYlwiO1xyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmpiMnh2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTEc5RVFVRjVRenRCUVdkQ2VrTTdTVUZSUlN4WlFVRlpMRWxCUVhGQ0xFTkJRVU1zUlVGQlJTeEpRVUZaTEVOQlFVTXNSVUZCUlN4SlFVRlpMRU5CUVVNc1JVRkJSU3hKUVVGWkxFTkJRVU03VVVGUWVFVXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVOa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEWkN4TlFVRkRMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMlFzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVdHVRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zZFV4QlFYVk1MRU5CUVVNc1EwRkJRenRaUVVOdVRpeEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTndReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTNCRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRjRU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1EwRkJRenRaUVVORUxFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc05FcEJRVFJLTEVOQlFVTXNRMEZCUXp0WlFVTjJUQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU51UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEyNURMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFdDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxGRkJRVkU3VVVGRFlpeE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRGFFY3NRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOMlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU4yUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTjJRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6bENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNMVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NRMEZCVXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hEUVVGVExFTkJRVU03VVVGRFpDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRaQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOYUxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVGl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMUlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5hTEV0QlFVc3NRMEZCUXp0dlFrRkRTaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTNSQ0xFdEJRVXNzUTBGQlF6dG5Ra0ZEVWl4TFFVRkxMRU5CUVVNN2IwSkJRMG9zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVOMFFpeExRVUZMTEVOQlFVTTdaMEpCUTFJc1MwRkJTeXhEUVVGRE8yOUNRVU5LTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRGRFSXNTMEZCU3l4RFFVRkRPMmRDUVVOU08yOUNRVU5GTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJRMDRzUzBGQlN5eERRVUZETzFsQlExWXNRMEZCUXp0WlFVTkVMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFZpeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRPVUlzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRmxMRVZCUVVVc1EwRkJVeXhGUVVGRkxFbEJRWFZDTzFGQlEzQkZMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRlZCUVZVc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzV1VGQldTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNMVFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRM1JDTEVOQlFVTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxGbEJRVmtzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NUMEZCVHl4RFFVRkRMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETjBnc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTmtMRU5CUVVNN1EwRkRSanRCUVZORU8wbEJVVVVzV1VGQldTeEpRVUZ4UWl4RFFVRkRMRVZCUVVVc1NVRkJXU3hEUVVGRExFVkJRVVVzU1VGQldTeERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRPMUZCVUhoRkxFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEWkN4TlFVRkRMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMlFzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGTGJrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMREpNUVVFeVRDeERRVUZETEVOQlFVTTdXVUZEZGs0c1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOc1F5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRM2hETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGVFTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUTBGQlF6dFpRVU5FTEUxQlFVMHNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zWjB0QlFXZExMRU5CUVVNc1EwRkJRenRaUVVNelRDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycERMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dG5Ra0ZEZGtNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFsQlEzcERMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5ZTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmlMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU5vUml4RFFVRkRPMGxCUTAwc1MwRkJTenRSUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTldMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5XTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VRc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5PTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRVaXhEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRUaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExSXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzaENMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEwNHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOU0xFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVWl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMDRzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNN1dVRkRSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOUUxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVUN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMVFzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQlpTeEZRVUZGTEVOQlFWTXNSVUZCUlN4SlFVRjFRanRSUVVOd1JTeE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFZRVUZWTEV0QlFVc3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRmxCUVZrc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETlVJc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTjBRaXhEUVVGRE8xbEJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4WlFVRlpMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6VkNMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xFbEJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBKQlEzSkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZWtJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZMTEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJRelZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3pSQ1FVTmlMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU03ZDBKQlExb3NRMEZCUXp0M1FrRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEzQkNMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU03ZDBKQlExb3NRMEZCUXp0dlFrRkRTQ3hEUVVGRE8yZENRVU5JTEVOQlFVTTdaMEpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUXpOQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU5pTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dDNRa0ZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN05FSkJRM0JDTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dHZRa0ZEU0N4RFFVRkRPMmRDUVVOSUxFTkJRVU03WjBKQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEV0QlFVc3NaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGVrTXNSVUZCUlN4SlFVRkpMRWRCUVVjc1EwRkJRenRuUWtGRFdpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4TFFVRkxMSE5DUVVGelFpeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRhRVFzUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXp0blFrRkRXaXhEUVVGRE8yZENRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXh4UWtGQlN5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBnc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTmtMRU5CUVVNN1EwRkRSanRCUVVWRU8wbEJVVVVzV1VGQldTeE5RVUVyUWl4RlFVRkZMRXRCUVdFc1EwRkJReXhGUVVGRkxFdEJRV0VzUTBGQlF5eEZRVUZGTEV0QlFXRXNRMEZCUXl4RlFVRkZMRXRCUVdFc1EwRkJRenRSUVU1d1J5eFRRVUZKTEVkQlFYTkNMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU03VVVGUGJFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVNc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaERMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzWkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEVml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlExWXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5XTEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJZc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRGVFTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRlRU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZETVVNc1EwRkJRenRuUWtGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRUaXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eERRVUZETzI5Q1FVTjZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRFppeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzNkQ1FVTndReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8zZENRVU53UXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOMFF5eERRVUZETzJkQ1FVTklMRU5CUVVNN1owSkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU03VVVGRFNDeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4WlFVRlpMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGJrSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEZsQlFWa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU16UWl4RFFVRkRPMUZCUTBRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBSVUZCYVVVc1EwRkJReXhEUVVGRE8wbEJRM0pHTEVOQlFVTTdTVUZEVFN4TFFVRkxPMUZCUTFZc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NXVUZCV1N4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeFpRVUZaTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRE0wSXNRMEZCUXp0UlFVTkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYVVWQlFXbEZMRU5CUVVNc1EwRkJRenRKUVVOeVJpeERRVUZETzBsQlEwMHNVVUZCVVR0UlFVTmlMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRFRTeExRVUZMTEVOQlFVTXNSMEZCYTBJN1VVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzaENMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRM0pDTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1R0UlFVTXhReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hSUVVGblFqdFJRVU0xUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5zUkN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRlhMRVZCUVVVc1EwRkJVenRSUVVOMlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRM1JDTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRUxFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVOdVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFnc1EwRkJRenM3UVVGcVJtRXNhMEpCUVZrc1IwRkJjMElzUzBGQlN5eERRVUZETzBGQlJIaEVMSE5DUVcxR1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2NvbG9yLnRzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY2xhc3MgTWF0cml4IHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlcykge1xyXG4gICAgICAgIHRoaXMuYXJyID0gW107XHJcbiAgICAgICAgdGhpcy5hcnIgPSB0aGlzLmFyci5jb25jYXQoLi4udmFsdWVzKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyci5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW2Nzcy5zcGxpdChcIiBcIikubWFwKHBhcnNlRmxvYXQpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4KFt0aGlzLmFyci5tYXAoKHZhbCwgaSkgPT4gaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb21baV0sIHZhbCwgdCkpXSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYXRyaXggPSBNYXRyaXg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc2IwUkJRWGxETzBGQlJYcERPMGxCUlVVc1dVRkJXU3hOUVVGclFqdFJRVVIyUWl4UlFVRkhMRWRCUVdFc1JVRkJSU3hEUVVGRE8xRkJSWGhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlEwMHNVVUZCVVR0UlFVTmlMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRlRUlzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFGQlF6RkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVdsQ08xRkJRemRFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6bERMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFWa3NSVUZCUlN4RFFVRlRPMUZCUTNoRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hGTEVOQlFVTTdRMEZEUmp0QlFUVkNSQ3gzUWtFMFFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jbGFzcyBOdW1iZXJPcHRpb25hbE51bWJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuLCBvKSB7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgICAgICB0aGlzLm8gPSBvO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm8gIT09IHVuZGVmaW5lZCkgPyBgJHt0aGlzLm59LCR7dGhpcy5vfWAgOiB0aGlzLm4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihwYXJzZUZsb2F0KHRva3NbMF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIGlmIChmcm9tLm8gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm4sIHRoaXMubiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm8sIHRoaXMubywgdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmcm9tLm8gPT09IHVuZGVmaW5lZCAmJiB0aGlzLm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm4sIHRoaXMubiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycCgwLCB0aGlzLm8sIHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZnJvbS5vICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5uLCB0aGlzLm4sIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5vLCAwLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm4sIHRoaXMubiwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlck9wdGlvbmFsTnVtYmVyID0gTnVtYmVyT3B0aW9uYWxOdW1iZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5TFc5d2RHbHZibUZzTFc1MWJXSmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltNTFiV0psY2kxdmNIUnBiMjVoYkMxdWRXMWlaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3h2UkVGQmVVTTdRVUZGZWtNN1NVRkRSU3haUVVGdFFpeERRVUZUTEVWQlFWTXNRMEZCVlR0UlFVRTFRaXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZSTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJVenRKUVVGSExFTkJRVU03U1VGRE5VTXNVVUZCVVR0UlFVTmlMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE5VVXNRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhIUVVGclFqdFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRkRUlzVFVGQlRTeERRVUZETEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRrUXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMRzlDUVVGdlFpeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUlN4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRja01zUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFGQlF6RkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVN0Q08xRkJRek5GTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6bERMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFUQkNMRVZCUVVVc1EwRkJVenRSUVVOMFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4RFFVRkRMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeHZRa0ZCYjBJc1EwRkJReXh4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrWXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRlRVFzVFVGQlRTeERRVUZETEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycEdMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMRzlDUVVGdlFpeERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VUXNRMEZCUXp0SlFVTklMRU5CUVVNN1EwRkRSanRCUVhSRFJDeHZSRUZ6UTBNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL251bWJlci1vcHRpb25hbC1udW1iZXIudHNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBwb2ludF8xID0gcmVxdWlyZShcIi4vcG9pbnRcIik7XHJcbmNsYXNzIFBhdGhTZWdtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQpIHtcclxuICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFyZ3MoY3NzLnN1YnN0cigyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0SW5zdGFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QYXRoU2VnbWVudCA9IFBhdGhTZWdtZW50O1xyXG4oZnVuY3Rpb24gKFBhdGhTZWdtZW50KSB7XHJcbiAgICBjbGFzcyBTaW5nbGVMZW5ndGggZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29tbWFuZCwgbCA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHRoaXMubCA9IGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jb21tYW5kfSAke3RoaXMubC50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZShiYXNlXzEuX0xlbmd0aFBhcnNlKGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UoYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLmwsIHRoaXMubCwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LlNpbmdsZUxlbmd0aCA9IFNpbmdsZUxlbmd0aDtcclxuICAgIGNsYXNzIFNpbmdsZVBvaW50IGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5wLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucC5wYXJzZShjc3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucC5pbnRlcnBvbGF0ZShmcm9tLnAsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5TaW5nbGVQb2ludCA9IFNpbmdsZVBvaW50O1xyXG4gICAgY2xhc3MgRG91YmxlUG9pbnQgZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29tbWFuZCwgcDEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgcDIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5wMSA9IHAxO1xyXG4gICAgICAgICAgICB0aGlzLnAyID0gcDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jb21tYW5kfSAke3RoaXMucDEudG9TdHJpbmcoKX0gJHt0aGlzLnAyLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnAxLnBhcnNlKHRva3NbMF0pLCB0aGlzLnAyLnBhcnNlKHRva3NbMV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucDEuaW50ZXJwb2xhdGUoZnJvbS5wMSwgdCksIHRoaXMucDIuaW50ZXJwb2xhdGUoZnJvbS5wMiwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkRvdWJsZVBvaW50ID0gRG91YmxlUG9pbnQ7XHJcbiAgICBjbGFzcyBUcmlwbGVQb2ludCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBwMSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwMiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwMyA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAxID0gcDE7XHJcbiAgICAgICAgICAgIHRoaXMucDIgPSBwMjtcclxuICAgICAgICAgICAgdGhpcy5wMyA9IHAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY29tbWFuZH0gJHt0aGlzLnAxLnRvU3RyaW5nKCl9ICR7dGhpcy5wMi50b1N0cmluZygpfSAke3RoaXMucDMudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucDEucGFyc2UodG9rc1swXSksIHRoaXMucDIucGFyc2UodG9rc1sxXSksIHRoaXMucDMucGFyc2UodG9rc1syXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wMS5pbnRlcnBvbGF0ZShmcm9tLnAxLCB0KSwgdGhpcy5wMi5pbnRlcnBvbGF0ZShmcm9tLnAyLCB0KSwgdGhpcy5wMy5pbnRlcnBvbGF0ZShmcm9tLnAzLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuVHJpcGxlUG9pbnQgPSBUcmlwbGVQb2ludDtcclxuICAgIGNsYXNzIE1vdmVUb0FicyBleHRlbmRzIFNpbmdsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHkgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiTVwiLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdmVUb0FicyhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdmVUb0FicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50Lk1vdmVUb0FicyA9IE1vdmVUb0FicztcclxuICAgIGNsYXNzIE1vdmVUb1JlbCBleHRlbmRzIFNpbmdsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHkgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwibVwiLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdmVUb1JlbChwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdmVUb1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50Lk1vdmVUb1JlbCA9IE1vdmVUb1JlbDtcclxuICAgIGNsYXNzIENsb3NlUGF0aCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJaXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiWlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkNsb3NlUGF0aCA9IENsb3NlUGF0aDtcclxuICAgIGNsYXNzIExpbmVUb0FicyBleHRlbmRzIFNpbmdsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHkgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiTFwiLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0FicyhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0FicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb0FicyA9IExpbmVUb0FicztcclxuICAgIGNsYXNzIExpbmVUb1JlbCBleHRlbmRzIFNpbmdsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHkgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwibFwiLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1JlbChwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb1JlbCA9IExpbmVUb1JlbDtcclxuICAgIGNsYXNzIExpbmVUb0hvcml6b250YWxBYnMgZXh0ZW5kcyBTaW5nbGVMZW5ndGgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGggPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiSFwiLCBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvSG9yaXpvbnRhbEFicyhoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0hvcml6b250YWxBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9Ib3Jpem9udGFsQWJzID0gTGluZVRvSG9yaXpvbnRhbEFicztcclxuICAgIGNsYXNzIExpbmVUb0hvcml6b250YWxSZWwgZXh0ZW5kcyBTaW5nbGVMZW5ndGgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGggPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiaFwiLCBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvSG9yaXpvbnRhbFJlbChoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0hvcml6b250YWxSZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9Ib3Jpem9udGFsUmVsID0gTGluZVRvSG9yaXpvbnRhbFJlbDtcclxuICAgIGNsYXNzIExpbmVUb1ZlcnRpY2FsQWJzIGV4dGVuZHMgU2luZ2xlTGVuZ3RoIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIlZcIiwgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2Uodikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1ZlcnRpY2FsQWJzKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvVmVydGljYWxBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9WZXJ0aWNhbEFicyA9IExpbmVUb1ZlcnRpY2FsQWJzO1xyXG4gICAgY2xhc3MgTGluZVRvVmVydGljYWxSZWwgZXh0ZW5kcyBTaW5nbGVMZW5ndGgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHYgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwidlwiLCB2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZSh2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvVmVydGljYWxBYnModik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9WZXJ0aWNhbEFicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb1ZlcnRpY2FsUmVsID0gTGluZVRvVmVydGljYWxSZWw7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNBYnMgZXh0ZW5kcyBUcmlwbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgZCwgZSwgZikge1xyXG4gICAgICAgICAgICBjb25zdCBjMSA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYyBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBjIDogbmV3IHBvaW50XzEuUG9pbnQoZSwgZik7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiQ1wiLCBjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY0FicyhjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb0N1YmljQWJzID0gQ3VydmVUb0N1YmljQWJzO1xyXG4gICAgY2xhc3MgQ3VydmVUb0N1YmljUmVsIGV4dGVuZHMgVHJpcGxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGQsIGUsIGYpIHtcclxuICAgICAgICAgICAgY29uc3QgYzEgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGMgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYyA6IG5ldyBwb2ludF8xLlBvaW50KGUsIGYpO1xyXG4gICAgICAgICAgICBzdXBlcihcImNcIiwgYzEsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMSwgYzIsIHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNSZWwoYzEsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9DdWJpY1JlbCA9IEN1cnZlVG9DdWJpY1JlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9DdWJpY1Ntb290aEFicyBleHRlbmRzIERvdWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiU1wiLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzIsIHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMoYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljU21vb3RoQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb0N1YmljU21vb3RoQWJzID0gQ3VydmVUb0N1YmljU21vb3RoQWJzO1xyXG4gICAgY2xhc3MgQ3VydmVUb0N1YmljU21vb3RoUmVsIGV4dGVuZHMgRG91YmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJzXCIsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aFJlbChjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNTbW9vdGhSZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNTbW9vdGhSZWwgPSBDdXJ2ZVRvQ3ViaWNTbW9vdGhSZWw7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljQWJzIGV4dGVuZHMgRG91YmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMxID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJRXCIsIGMxLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMSwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNBYnMoYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY0FicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9RdWFkcmF0aWNBYnMgPSBDdXJ2ZVRvUXVhZHJhdGljQWJzO1xyXG4gICAgY2xhc3MgQ3VydmVUb1F1YWRyYXRpY1JlbCBleHRlbmRzIERvdWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMSA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIHN1cGVyKFwicVwiLCBjMSwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzEsIHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljUmVsKGMxLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNSZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvUXVhZHJhdGljUmVsID0gQ3VydmVUb1F1YWRyYXRpY1JlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnMgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIlRcIiwgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnMgPSBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzO1xyXG4gICAgY2xhc3MgQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbCBleHRlbmRzIFNpbmdsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHkgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwidFwiLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWwocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbCA9IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWw7XHJcbiAgICBjbGFzcyBBcmNUbyBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCByID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeEF4aXNSb3RhdGUgPSAwLCBsYXJnZUFyYyA9IGZhbHNlLCBzd2VlcENsb2Nrd2lzZSA9IHRydWUpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgICAgIHRoaXMueEF4aXNSb3RhdGUgPSB4QXhpc1JvdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5sYXJnZUFyYyA9IGxhcmdlQXJjO1xyXG4gICAgICAgICAgICB0aGlzLnN3ZWVwQ2xvY2t3aXNlID0gc3dlZXBDbG9ja3dpc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5yLnRvU3RyaW5nKCl9ICR7dGhpcy54QXhpc1JvdGF0ZX0gJHt0aGlzLmxhcmdlQXJjID8gMSA6IDB9ICR7dGhpcy5zd2VlcENsb2Nrd2lzZSA/IDEgOiAwfSAke3RoaXMucC50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5yLnBhcnNlKHRva3NbMF0pLCB0aGlzLnAucGFyc2UodG9rc1s0XSksIHBhcnNlRmxvYXQodG9rc1sxXSksIHRva3NbMl0gPT09IFwiMVwiLCB0b2tzWzNdID09PSBcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnIuaW50ZXJwb2xhdGUoZnJvbS5yLCB0KSwgdGhpcy5wLmludGVycG9sYXRlKGZyb20ucCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnhBeGlzUm90YXRlLCB0aGlzLnhBeGlzUm90YXRlLCB0KSwgKHQgPCAwLjUpID8gZnJvbS5sYXJnZUFyYyA6IHRoaXMubGFyZ2VBcmMsICh0IDwgMC41KSA/IGZyb20uc3dlZXBDbG9ja3dpc2UgOiB0aGlzLnN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5BcmNUbyA9IEFyY1RvO1xyXG4gICAgY2xhc3MgQXJjVG9BYnMgZXh0ZW5kcyBBcmNUbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQsIGUsIGYsIGcpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIGxldCB4QXhpc1JvdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBsYXJnZUFyYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgc3dlZXBDbG9ja3dpc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgJiYgYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzUm90YXRlID0gYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlQXJjID0gZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3ZWVwQ2xvY2t3aXNlID0gZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzUm90YXRlID0gZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlQXJjID0gZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3ZWVwQ2xvY2t3aXNlID0gZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlcihcIkFcIiwgciwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFyY1RvQWJzKHIsIHAsIHhBeGlzUm90YXRlLCBsYXJnZUFyYywgc3dlZXBDbG9ja3dpc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9BYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5BcmNUb0FicyA9IEFyY1RvQWJzO1xyXG4gICAgY2xhc3MgQXJjVG9SZWwgZXh0ZW5kcyBBcmNUbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQsIGUsIGYsIGcpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIGxldCB4QXhpc1JvdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBsYXJnZUFyYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgc3dlZXBDbG9ja3dpc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgJiYgYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzUm90YXRlID0gYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlQXJjID0gZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3ZWVwQ2xvY2t3aXNlID0gZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzUm90YXRlID0gZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlQXJjID0gZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3ZWVwQ2xvY2t3aXNlID0gZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlcihcImFcIiwgciwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFyY1RvUmVsKHIsIHAsIHhBeGlzUm90YXRlLCBsYXJnZUFyYywgc3dlZXBDbG9ja3dpc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9SZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5BcmNUb1JlbCA9IEFyY1RvUmVsO1xyXG59KShQYXRoU2VnbWVudCA9IGV4cG9ydHMuUGF0aFNlZ21lbnQgfHwgKGV4cG9ydHMuUGF0aFNlZ21lbnQgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR0YwYUMxelpXZHRaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljR0YwYUMxelpXZHRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzYjBSQlFYbERPMEZCUTNwRExHbERRVUZyUlR0QlFVTnNSU3h0UTBGQlowTTdRVUZGYUVNN1NVRkRSU3haUVVGdFFpeFBRVUUwUWp0UlFVRTFRaXhaUVVGUExFZEJRVkFzVDBGQlR5eERRVUZ4UWp0SlFVRkhMRU5CUVVNN1NVRkZOVU1zUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMlF5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMUZCUTJoRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVcxQ0xFVkJRVVVzU1VGQldUdFJRVU14UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRnpRanRSUVVOc1JTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU16UWl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOc1JDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4RFFVRkRPMGxCUTBnc1EwRkJRenREUVVsR08wRkJka0pFTEd0RFFYVkNRenRCUVVWRUxGZEJRV2xDTEZkQlFWYzdTVUZKTVVJc2EwSkJRVzFETEZOQlFWRXNWMEZCVnp0UlFVTndSQ3haUVVGWkxFOUJRVGhDTEVWQlFWTXNTVUZCV1N4RFFVRkRPMWxCUXpsRUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVUnJReXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzFGQlJXaEZMRU5CUVVNN1VVRkRUU3hSUVVGUk8xbEJRMklzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRhRVFzUTBGQlF6dFJRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRlhPMWxCUXpGQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRzFDUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZReXhEUVVGRE8xRkJRMDBzVjBGQlZ5eERRVUZETEVsQlFXdENMRVZCUVVVc1EwRkJVenRaUVVNNVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXg1UWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVJTeERRVUZETzB0QlIwWTdTVUZtY1VJc2QwSkJRVmtzWlVGbGFrTXNRMEZCUVR0SlFVTkVMR2xDUVVGclF5eFRRVUZSTEZkQlFWYzdVVUZEYmtRc1dVRkJXU3hQUVVFd1F5eEZRVUZUTEVsQlFWY3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUml4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRU9FTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJlVUk3VVVGRmVrWXNRMEZCUXp0UlFVTk5MRkZCUVZFN1dVRkRZaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTm9SQ3hEUVVGRE8xRkJRMDBzVTBGQlV5eERRVUZETEVkQlFWYzdXVUZETVVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZReXhEUVVGRE8xRkJRMDBzVjBGQlZ5eERRVUZETEVsQlFXbENMRVZCUVVVc1EwRkJVenRaUVVNM1F5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBRc1EwRkJRenRMUVVkR08wbEJabkZDTEhWQ1FVRlhMR05CWldoRExFTkJRVUU3U1VGRFJDeHBRa0ZCYTBNc1UwRkJVU3hYUVVGWE8xRkJRMjVFTEZsQlFWa3NUMEZCT0VJc1JVRkJVeXhMUVVGWkxFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJVeXhMUVVGWkxFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRhRWdzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUkd0RExFOUJRVVVzUjBGQlJpeEZRVUZGTEVOQlFYbENPMWxCUVZNc1QwRkJSU3hIUVVGR0xFVkJRVVVzUTBGQmVVSTdVVUZGYkVnc1EwRkJRenRSUVVOTkxGRkJRVkU3V1VGRFlpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUTNaRkxFTkJRVU03VVVGRFRTeFRRVUZUTEVOQlFVTXNSMEZCVnp0WlFVTXhRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVVVzUTBGQlF6dFJRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRnBRaXhGUVVGRkxFTkJRVk03V1VGRE4wTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VWXNRMEZCUXp0TFFVZEdPMGxCYUVKeFFpeDFRa0ZCVnl4alFXZENhRU1zUTBGQlFUdEpRVU5FTEdsQ1FVRnJReXhUUVVGUkxGZEJRVmM3VVVGRGJrUXNXVUZCV1N4UFFVRnJRaXhGUVVGVExFdEJRVmtzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGVExFdEJRVmtzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGVExFdEJRVmtzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONFNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkVjMElzVDBGQlJTeEhRVUZHTEVWQlFVVXNRMEZCZVVJN1dVRkJVeXhQUVVGRkxFZEJRVVlzUlVGQlJTeERRVUY1UWp0WlFVRlRMRTlCUVVVc1IwRkJSaXhGUVVGRkxFTkJRWGxDTzFGQlJURkpMRU5CUVVNN1VVRkRUU3hSUVVGUk8xbEJRMklzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETzFGQlF6ZEdMRU5CUVVNN1VVRkRUU3hUUVVGVExFTkJRVU1zUjBGQlZ6dFpRVU14UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRWNzUTBGQlF6dFJRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRnBRaXhGUVVGRkxFTkJRVk03V1VGRE4wTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZTQ3hEUVVGRE8wdEJSMFk3U1VGb1FuRkNMSFZDUVVGWExHTkJaMEpvUXl4RFFVRkJPMGxCUlVRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlIzaERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrUXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUk8xbEJRek5DTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UWl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzB0QlEwWTdTVUZhV1N4eFFrRkJVeXhaUVZseVFpeERRVUZCTzBsQlEwUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJSM2hETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJPMWxCUXpOQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFFpeERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRa0ZCVXl4WlFWbHlRaXhEUVVGQk8wbEJSVVFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUTNoRE8xbEJRMFVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJJc1EwRkJRenRSUVVOTkxGRkJRVkU3V1VGRFlpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUTJJc1EwRkJRenRSUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZYTzFsQlF6RkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzcENMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEVOQlFVTTdVVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJaU3hGUVVGRkxFTkJRVk03V1VGRE0wTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRGVrSXNRMEZCUXp0TFFVTkdPMGxCYUVKWkxIRkNRVUZUTEZsQlowSnlRaXhEUVVGQk8wbEJSVVFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUjNoRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UWtGQlV5eFpRVmx5UWl4RFFVRkJPMGxCUTBRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlIzaERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrUXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUk8xbEJRek5DTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UWl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzB0QlEwWTdTVUZhV1N4eFFrRkJVeXhaUVZseVFpeERRVUZCTzBsQlJVUXNlVUpCUVdsRExGTkJRVkVzV1VGQldUdFJRVU51UkN4WlFVRlpMRWxCUVZrc1EwRkJRenRaUVVOMlFpeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1EwRkJVenRaUVVNMVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndReXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTI1RExFTkJRVU03UzBGRFJqdEpRVlpaTEN0Q1FVRnRRaXh6UWtGVkwwSXNRMEZCUVR0SlFVTkVMSGxDUVVGcFF5eFRRVUZSTEZsQlFWazdVVUZEYmtRc1dVRkJXU3hKUVVGWkxFTkJRVU03V1VGRGRrSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUWl4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFTkJRVk03V1VGRE5VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRU1zUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVOdVF5eERRVUZETzB0QlEwWTdTVUZXV1N3clFrRkJiVUlzYzBKQlZTOUNMRU5CUVVFN1NVRkZSQ3gxUWtGQkswSXNVMEZCVVN4WlFVRlpPMUZCUTJwRUxGbEJRVmtzU1VGQldTeERRVUZETzFsQlEzWkNMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVJc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZUTzFsQlF6VkNMRTFCUVUwc1EwRkJReXhKUVVGSkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhETEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRGFrTXNRMEZCUXp0TFFVTkdPMGxCVmxrc05rSkJRV2xDTEc5Q1FWVTNRaXhEUVVGQk8wbEJRMFFzZFVKQlFTdENMRk5CUVZFc1dVRkJXVHRSUVVOcVJDeFpRVUZaTEVsQlFWa3NRMEZCUXp0WlFVTjJRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoQ0xFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNRMEZCVXp0WlFVTTFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4cFFrRkJhVUlzUlVGQlJTeERRVUZETzFGQlEycERMRU5CUVVNN1MwRkRSanRKUVZaWkxEWkNRVUZwUWl4dlFrRlZOMElzUTBGQlFUdEpRVVZFTEhGQ1FVRTJRaXhUUVVGUkxGZEJRVmM3VVVGSE9VTXNXVUZCV1N4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRU5CUVZVN1dVRkRNMG9zVFVGQlRTeEZRVUZGTEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZEY2tVc1RVRkJUU3hGUVVGRkxFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGREwwVXNUVUZCVFN4RFFVRkRMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRPVVVzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaENMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUlVGQlV5eEZRVUZGTEVWQlFWTXNSVUZCUlN4RFFVRlJPMWxCUTJwRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaERMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMR1ZCUVdVc1JVRkJSU3hEUVVGRE8xRkJReTlDTEVOQlFVTTdTMEZEUmp0SlFXWlpMREpDUVVGbExHdENRV1V6UWl4RFFVRkJPMGxCUTBRc2NVSkJRVFpDTEZOQlFWRXNWMEZCVnp0UlFVYzVReXhaUVVGWkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZUdFpRVU16U2l4TlFVRk5MRVZCUVVVc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVOeVJTeE5RVUZOTEVWQlFVVXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTXZSU3hOUVVGTkxFTkJRVU1zUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU01UlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRUlzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RlFVRlRMRVZCUVVVc1JVRkJVeXhGUVVGRkxFTkJRVkU3V1VGRGFrUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZETDBJc1EwRkJRenRMUVVOR08wbEJabGtzTWtKQlFXVXNhMEpCWlROQ0xFTkJRVUU3U1VGRlJDd3lRa0ZCYlVNc1UwRkJVU3hYUVVGWE8xRkJSM0JFTEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZUdFpRVU14Unl4TlFVRk5MRVZCUVVVc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNdlJTeE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETzFGQlEwMHNZVUZCWVN4RFFVRkRMRVZCUVZNc1JVRkJSU3hEUVVGUk8xbEJRM1JETEUxQlFVMHNRMEZCUXl4SlFVRkpMSEZDUVVGeFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFF5eERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRE8xRkJRM0pETEVOQlFVTTdTMEZEUmp0SlFXUlpMR2xEUVVGeFFpeDNRa0ZqYWtNc1EwRkJRVHRKUVVORUxESkNRVUZ0UXl4VFFVRlJMRmRCUVZjN1VVRkhjRVFzV1VGQldTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVk8xbEJRekZITEUxQlFVMHNSVUZCUlN4SFFVRlZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlZ5eEZRVUZGTEVOQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXk5RkxFMUJRVTBzUTBGQlF5eEhRVUZWTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJWeXhGUVVGRkxFTkJRVmNzUTBGQlF5eERRVUZETzFsQlF6bEZMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNCQ0xFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNSVUZCVXl4RlFVRkZMRU5CUVZFN1dVRkRkRU1zVFVGQlRTeERRVUZETEVsQlFVa3NjVUpCUVhGQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTFCUVUwc1EwRkJReXhKUVVGSkxIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNN1VVRkRja01zUTBGQlF6dExRVU5HTzBsQlpGa3NhVU5CUVhGQ0xIZENRV05xUXl4RFFVRkJPMGxCUlVRc2VVSkJRV2xETEZOQlFWRXNWMEZCVnp0UlFVZHNSQ3haUVVGWkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCVlN4RlFVRkZMRU5CUVZVN1dVRkRNVWNzVFVGQlRTeEZRVUZGTEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZETDBVc1RVRkJUU3hEUVVGRExFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGRE9VVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VJc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eEZRVUZUTEVWQlFVVXNRMEZCVVR0WlFVTjBReXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVNc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTnVReXhEUVVGRE8wdEJRMFk3U1VGa1dTd3JRa0ZCYlVJc2MwSkJZeTlDTEVOQlFVRTdTVUZEUkN4NVFrRkJhVU1zVTBGQlVTeFhRVUZYTzFGQlIyeEVMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlR0WlFVTXhSeXhOUVVGTkxFVkJRVVVzUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU12UlN4TlFVRk5MRU5CUVVNc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53UWl4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFVkJRVk1zUlVGQlJTeERRVUZSTzFsQlEzUkRMRTFCUVUwc1EwRkJReXhKUVVGSkxHMUNRVUZ0UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUlVGQlJTeERRVUZETzFGQlEyNURMRU5CUVVNN1MwRkRSanRKUVdSWkxDdENRVUZ0UWl4elFrRmpMMElzUTBGQlFUdEpRVVZFTEN0Q1FVRjFReXhUUVVGUkxGZEJRVmM3VVVGSGVFUXNXVUZCV1N4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJXU3hEUVVGRE8xbEJRelZFTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMlJDeERRVUZETzFGQlEwMHNZVUZCWVN4RFFVRkRMRU5CUVZFN1dVRkRNMElzVFVGQlRTeERRVUZETEVsQlFVa3NlVUpCUVhsQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETVVNc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2VVSkJRWGxDTEVWQlFVVXNRMEZCUXp0UlFVTjZReXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRMEZCZVVJc05FSkJXWEpETEVOQlFVRTdTVUZEUkN3clFrRkJkVU1zVTBGQlVTeFhRVUZYTzFGQlIzaEVMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrUXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUk8xbEJRek5DTEUxQlFVMHNRMEZCUXl4SlFVRkpMSGxDUVVGNVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTFCUVUwc1EwRkJReXhKUVVGSkxIbENRVUY1UWl4RlFVRkZMRU5CUVVNN1VVRkRla01zUTBGQlF6dExRVU5HTzBsQldsa3NjVU5CUVhsQ0xEUkNRVmx5UXl4RFFVRkJPMGxCUlVRc1YwRkJORUlzVTBGQlVTeFhRVUZYTzFGQlF6ZERMRmxCUVZrc1QwRkJhMElzUlVGQlV5eEpRVUZYTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlV5eEpRVUZYTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlV5eGpRVUZ6UWl4RFFVRkRMRVZCUVZNc1YwRkJiMElzUzBGQlN5eEZRVUZUTEdsQ1FVRXdRaXhKUVVGSk8xbEJRek5OTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVSelFpeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRjVRanRaUVVGVExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFYbENPMWxCUVZNc1owSkJRVmNzUjBGQldDeFhRVUZYTEVOQlFWazdXVUZCVXl4aFFVRlJMRWRCUVZJc1VVRkJVU3hEUVVGcFFqdFpRVUZUTEcxQ1FVRmpMRWRCUVdRc1kwRkJZeXhEUVVGblFqdFJRVVUzVFN4RFFVRkRPMUZCUTAwc1VVRkJVVHRaUVVOaUxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGFra3NRMEZCUXp0UlFVTk5MRk5CUVZNc1EwRkJReXhIUVVGWE8xbEJRekZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETlVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJwSkxFTkJRVU03VVVGRFRTeFhRVUZYTEVOQlFVTXNTVUZCVnl4RlFVRkZMRU5CUVZNN1dVRkRka01zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdVVUZETVU4c1EwRkJRenRMUVVkR08wbEJhRUp4UWl4cFFrRkJTeXhSUVdkQ01VSXNRMEZCUVR0SlFVVkVMR05CUVhOQ0xGTkJRVkVzUzBGQlN6dFJRVWRxUXl4WlFVRlpMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQmJVSXNSVUZCUlN4RFFVRnZRaXhGUVVGRkxFTkJRVzlDTEVWQlFVVXNRMEZCVnl4RlFVRkZMRU5CUVZjN1dVRkROMHNzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZEY0VVc1RVRkJUU3hEUVVGRExFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGRE9VVXNTVUZCU1N4WFFVRlhMRWRCUVZjc1EwRkJReXhEUVVGRE8xbEJRelZDTEVsQlFVa3NVVUZCVVN4SFFVRlpMRXRCUVVzc1EwRkJRenRaUVVNNVFpeEpRVUZKTEdOQlFXTXNSMEZCV1N4SlFVRkpMRU5CUVVNN1dVRkRia01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1NVRkJTU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROME1zUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1YwRkJWeXhIUVVGSExFTkJRVmNzUTBGQlF6dG5Ra0ZETlVJc1EwRkJRenRuUWtGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhSUVVGUkxFZEJRVWNzUTBGQldTeERRVUZETzJkQ1FVTXhRaXhEUVVGRE8yZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpkQ0xHTkJRV01zUjBGQlJ5eERRVUZaTEVOQlFVTTdaMEpCUTJoRExFTkJRVU03V1VGRFNDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1YwRkJWeXhIUVVGSExFTkJRVmNzUTBGQlF6dG5Ra0ZETlVJc1EwRkJRenRuUWtGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhSUVVGUkxFZEJRVWNzUTBGQldTeERRVUZETzJkQ1FVTXhRaXhEUVVGRE8yZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpkQ0xHTkJRV01zUjBGQlJ5eERRVUZaTEVOQlFVTTdaMEpCUTJoRExFTkJRVU03V1VGRFNDeERRVUZETzFsQlEwUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRE1VUXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUkxFVkJRVVVzUTBGQlVTeEZRVUZGTEZkQlFXMUNMRVZCUVVVc1VVRkJhVUlzUlVGQlJTeGpRVUZqTzFsQlF6ZEdMRTFCUVUwc1EwRkJReXhKUVVGSkxGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hSUVVGUkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZEYmtVc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGVFSXNRMEZCUXp0TFFVTkdPMGxCZEVOWkxHOUNRVUZSTEZkQmMwTndRaXhEUVVGQk8wbEJRMFFzWTBGQmMwSXNVMEZCVVN4TFFVRkxPMUZCUjJwRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRnRRaXhGUVVGRkxFTkJRVzlDTEVWQlFVVXNRMEZCYjBJc1JVRkJSU3hEUVVGWExFVkJRVVVzUTBGQlZ6dFpRVU0zU3l4TlFVRk5MRU5CUVVNc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVOd1JTeE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hKUVVGSkxGZEJRVmNzUjBGQlZ5eERRVUZETEVOQlFVTTdXVUZETlVJc1NVRkJTU3hSUVVGUkxFZEJRVmtzUzBGQlN5eERRVUZETzFsQlF6bENMRWxCUVVrc1kwRkJZeXhIUVVGWkxFbEJRVWtzUTBGQlF6dFpRVU51UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzWVVGQlN5eEpRVUZKTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU0zUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeFhRVUZYTEVkQlFVY3NRMEZCVnl4RFFVRkRPMmRDUVVNMVFpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRemRDTEZGQlFWRXNSMEZCUnl4RFFVRlpMRU5CUVVNN1owSkJRekZDTEVOQlFVTTdaMEpCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE4wSXNZMEZCWXl4SFFVRkhMRU5CUVZrc1EwRkJRenRuUWtGRGFFTXNRMEZCUXp0WlFVTklMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeFhRVUZYTEVkQlFVY3NRMEZCVnl4RFFVRkRPMmRDUVVNMVFpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRemRDTEZGQlFWRXNSMEZCUnl4RFFVRlpMRU5CUVVNN1owSkJRekZDTEVOQlFVTTdaMEpCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE4wSXNZMEZCWXl4SFFVRkhMRU5CUVZrc1EwRkJRenRuUWtGRGFFTXNRMEZCUXp0WlFVTklMRU5CUVVNN1dVRkRSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxGRkJRVkVzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVOQlFWRXNSVUZCUlN4RFFVRlJMRVZCUVVVc1YwRkJiVUlzUlVGQlJTeFJRVUZwUWl4RlFVRkZMR05CUVdNN1dVRkROMFlzVFVGQlRTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVjBGQlZ5eEZRVUZGTEZGQlFWRXNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVOdVJTeERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTjRRaXhEUVVGRE8wdEJRMFk3U1VGMFExa3NiMEpCUVZFc1YwRnpRM0JDTEVOQlFVRTdRVUZEU0N4RFFVRkRMRVZCZGxwblFpeFhRVUZYTEVkQlFWZ3NiVUpCUVZjc1MwRkJXQ3h0UWtGQlZ5eFJRWFZhTTBJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3BhdGgtc2VnbWVudC50c1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgUHJlc2VydmVBc3BlY3RSYXRpbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBtZWV0T3JTbGljZSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLm1lZXRPclNsaWNlID0gbWVldE9yU2xpY2U7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBpZiAodGhpcy54ICE9PSB1bmRlZmluZWQgJiYgdGhpcy55ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IHN0ciA9IGB4JHt0aGlzLnh9WSR7dGhpcy55fWA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZXRPclNsaWNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBcIiBcIiArIHRoaXMubWVldE9yU2xpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QcmVzZXJ2ZUFzcGVjdFJhdGlvID0gUHJlc2VydmVBc3BlY3RSYXRpbztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnlkbVV0WVhOd1pXTjBMWEpoZEdsdkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY0hKbGMyVnlkbVV0WVhOd1pXTjBMWEpoZEdsdkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN1NVRkpSU3haUVVGdFFpeERRVUY1UWl4RlFVRlRMRU5CUVhsQ0xFVkJRVk1zVjBGQk9FSTdVVUZCYkVjc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQmQwSTdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGM1FqdFJRVUZUTEdkQ1FVRlhMRWRCUVZnc1YwRkJWeXhEUVVGdFFqdEpRVUZITEVOQlFVTTdTVUZEYkVnc1VVRkJVVHRSUVVOaUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVJDeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUTJwRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtNc1IwRkJSeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUTJoRExFTkJRVU03V1VGRFJDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUTJJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVOb1FpeERRVUZETzBsQlEwZ3NRMEZCUXp0RFFVTkdPMEZCYUVKRUxHdEVRV2RDUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvcHJlc2VydmUtYXNwZWN0LXJhdGlvLnRzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcm90YXRlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2NhbGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9za2V3XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdHJhbnNsYXRlXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERoQ1FVRjVRanRCUVVONlFpdzRRa0ZCZVVJN1FVRkRla0lzTmtKQlFYZENPMEZCUTNoQ0xEUkNRVUYxUWp0QlFVTjJRaXhwUTBGQk5FSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtXCIpO1xyXG5jbGFzcyBNYXRyaXhfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEgPSAxLCBiID0gMCwgYyA9IDAsIGQgPSAxLCBlID0gMCwgZiA9IDApIHtcclxuICAgICAgICBzdXBlcihcIm1hdHJpeFwiKTtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgdGhpcy5jID0gYztcclxuICAgICAgICB0aGlzLmQgPSBkO1xyXG4gICAgICAgIHRoaXMuZSA9IGU7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYX0gJHt0aGlzLmJ9ICR7dGhpcy5jfSAke3RoaXMuZH0gJHt0aGlzLmV9ICR7dGhpcy5mfWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSksIHBhcnNlRmxvYXQodG9rc1syXSksIHBhcnNlRmxvYXQodG9rc1szXSksIHBhcnNlRmxvYXQodG9rc1s0XSksIHBhcnNlRmxvYXQodG9rc1s1XSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4X1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5iLCB0aGlzLmIsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5jLCB0aGlzLmMsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5kLCB0aGlzLmQsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5lLCB0aGlzLmUsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5mLCB0aGlzLmYsIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hdHJpeF9UcmFuc2Zvcm0gPSBNYXRyaXhfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNkVVJCUVRSRE8wRkJRelZETERSRFFVRjVRenRCUVVWNlF5eHpRa0ZCT0VJc1UwRkJVU3h4UWtGQlV6dEpRVU0zUXl4WlFVRnRRaXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNc1JVRkJVeXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNN1VVRkROVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUkVNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdFJRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRSUVVGVExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8wbEJSVGxKTEVOQlFVTTdTVUZEVFN4SlFVRkpPMUZCUTFRc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOMlJTeERRVUZETzBsQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVd0Q08xRkJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFTaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3huUWtGQlowSXNSVUZCUlN4RFFVRkRPMUZCUTJoRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhOQ0xFVkJRVVVzUTBGQlV6dFJRVU5zUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3huUWtGQlowSXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGTUxFTkJRVU03UTBGRFJqdEJRV3hDUkN3MFEwRnJRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFNrZXdYX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwic2tld1hcIik7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2V3WF9UcmFuc2Zvcm0ocGFyc2VGbG9hdChjc3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2tld1hfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2tld1hfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2tld1hfVHJhbnNmb3JtID0gU2tld1hfVHJhbnNmb3JtO1xyXG5jbGFzcyBTa2V3WV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSA9IDApIHtcclxuICAgICAgICBzdXBlcihcInNrZXdZXCIpO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2tld1lfVHJhbnNmb3JtKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrZXdZX1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNrZXdZX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNrZXdZX1RyYW5zZm9ybSA9IFNrZXdZX1RyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJ0bGR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5OclpYY3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeDFSRUZCTkVNN1FVRkROVU1zTkVOQlFYbERPMEZCUlhwRExIRkNRVUUyUWl4VFFVRlJMSEZDUVVGVE8wbEJRelZETEZsQlFXMUNMRWxCUVZrc1EwRkJRenRSUVVNNVFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkVSU3hOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzBsQlJXaERMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVTk5MRk5CUVZNc1EwRkJReXhIUVVGclFqdFJRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeGxRVUZsTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VTXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJjVUlzUlVGQlJTeERRVUZUTzFGQlEycEVMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUTBGQlF5eHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1pFTEVOQlFVTTdRMEZEUmp0QlFXcENSQ3d3UTBGcFFrTTdRVUZGUkN4eFFrRkJOa0lzVTBGQlVTeHhRa0ZCVXp0SlFVTTFReXhaUVVGdFFpeEpRVUZaTEVOQlFVTTdVVUZET1VJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlJFVXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRKUVVWb1F5eERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpOQ0xFTkJRVU03U1VGRFRTeFRRVUZUTEVOQlFVTXNSMEZCYTBJN1VVRkRha01zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUlVGQlJTeERRVUZETzFGQlF5OUNMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFYRkNMRVZCUVVVc1EwRkJVenRSUVVOcVJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4bFFVRmxMRU5CUVVNc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjJSQ3hEUVVGRE8wTkJRMFk3UVVGcVFrUXNNRU5CYVVKREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50c1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9maWx0ZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ub24tcmVuZGVyYWJsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlcmFibGVcIikpO1xyXG5jb25zdCBGaWx0ZXJQcmltaXRpdmVzID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXNcIik7XHJcbmV4cG9ydHMuRmlsdGVyUHJpbWl0aXZlcyA9IEZpbHRlclByaW1pdGl2ZXM7XHJcbmNvbnN0IE5vblJlbmRlcmFibGVzID0gcmVxdWlyZShcIi4vbm9uLXJlbmRlcmFibGVzXCIpO1xyXG5leHBvcnRzLk5vblJlbmRlcmFibGVzID0gTm9uUmVuZGVyYWJsZXM7XHJcbmNvbnN0IFJlbmRlcmFibGVzID0gcmVxdWlyZShcIi4vcmVuZGVyYWJsZXNcIik7XHJcbmV4cG9ydHMuUmVuZGVyYWJsZXMgPSBSZW5kZXJhYmxlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEhkRFFVRnRRenRCUVVOdVF5dzRRa0ZCZVVJN1FVRkRla0lzYzBOQlFXbERPMEZCUTJwRExHdERRVUUyUWp0QlFVVTNRaXgzUkVGQmQwUTdRVUZMZEVRc05FTkJRV2RDTzBGQlNteENMRzlFUVVGdlJEdEJRVXRzUkN4M1EwRkJZenRCUVVwb1FpdzJRMEZCTmtNN1FVRkxNME1zYTBOQlFWY2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpO1xyXG5jb25zdCBibGVuZF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvYmxlbmRcIik7XHJcbmNvbnN0IGNvbG9yX21hdHJpeF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29sb3ItbWF0cml4XCIpO1xyXG5jb25zdCBjb21wb25lbnRfdHJhbnNmZXJfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvbmVudC10cmFuc2ZlclwiKTtcclxuY29uc3QgY29tcG9zaXRlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9jb21wb3NpdGVcIik7XHJcbmNvbnN0IGNvbnZvbHZlX21hdHJpeF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4XCIpO1xyXG5jb25zdCBkaXNwbGFjZW1lbnRfbWFwXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwXCIpO1xyXG5jb25zdCBmbG9vZF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvZmxvb2RcIik7XHJcbmNvbnN0IGdhdXNzaWFuX2JsdXJfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2dhdXNzaWFuLWJsdXJcIik7XHJcbmNvbnN0IGltYWdlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9pbWFnZVwiKTtcclxuY29uc3QgZGlmZnVzZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvZGlmZnVzZVwiKTtcclxuY29uc3QgZGlzdGFudF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2Rpc3RhbnRcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnRcIik7XHJcbmNvbnN0IHNwb3RfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90XCIpO1xyXG5jb25zdCBzcGVjdWxhcl8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvc3BlY3VsYXJcIik7XHJcbmNvbnN0IG1lcmdlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9tZXJnZVwiKTtcclxuY29uc3QgbW9ycGhvbG9neV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbW9ycGhvbG9neVwiKTtcclxuY29uc3Qgb2Zmc2V0XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9vZmZzZXRcIik7XHJcbmNvbnN0IHRpbGVfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL3RpbGVcIik7XHJcbmNvbnN0IHRyYW5zZmVyX2Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy90cmFuc2Zlci1mdW5jdGlvblwiKTtcclxuY29uc3QgdHVyYnVsZW5jZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvdHVyYnVsZW5jZVwiKTtcclxuY29uc3QgbWVyZ2UgPSAoYSwgYikgPT4ge1xyXG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIGZvciAoY29uc3QgYVByb3AgaW4gYSkge1xyXG4gICAgICAgIG9ialthUHJvcF0gPSBhW2FQcm9wXTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgYlByb3AgaW4gYikge1xyXG4gICAgICAgIG9ialtiUHJvcF0gPSBiW2JQcm9wXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbn07XHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImZpbHRlclwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuX3JlZkNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRVbmlxdWVQcmltaXRpdmVSZWZlcmVuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuICgrK3RoaXMuX3JlZkNvdW50ZXIpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBibGVuZChtb2RlLCBpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgYmxlbmRfMS5CbGVuZF9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQxLFxyXG4gICAgICAgICAgICBpbjI6IGlucHV0MixcclxuICAgICAgICAgICAgbW9kZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbG9yTWF0cml4KG1hdHJpeCwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbG9yX21hdHJpeF8xLkNvbG9yTWF0cml4X1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dCxcclxuICAgICAgICAgICAgdHlwZTogbWF0cml4LnR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlczogbWF0cml4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50VHJhbnNmZXIociwgZywgYiwgYSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRUcmFuc2ZlciA9IG5ldyBjb21wb25lbnRfdHJhbnNmZXJfMS5Db21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiUlwiLCByKSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiR1wiLCBnKSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiQlwiLCBiKSk7XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJBXCIsIGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFRyYW5zZmVyO1xyXG4gICAgfVxyXG4gICAgY29tcG9zaXRlKG9wZXJhdG9yLCBrMSwgazIsIGszLCBrNCwgaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbXBvc2l0ZV8xLkNvbXBvc2l0ZV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQxLFxyXG4gICAgICAgICAgICBpbjI6IGlucHV0MixcclxuICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgIGsxLFxyXG4gICAgICAgICAgICBrMixcclxuICAgICAgICAgICAgazMsXHJcbiAgICAgICAgICAgIGs0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29udm9sdmVNYXRyaXgoYXR0cnMsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb252b2x2ZV9tYXRyaXhfMS5Db252b2x2ZU1hdHJpeF9QcmltaXRpdmUodGhpcywgbWVyZ2UoYXR0cnMsIHsgaW46IGlucHV0IH0pKTtcclxuICAgIH1cclxuICAgIGRpZmZ1c2VMaWdodGluZyhhdHRycywgbGlnaHRzID0gW10sIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgZGlmZnVzZV8xLkRpZmZ1c2VMaWdodGluZyh0aGlzLCBtZXJnZShhdHRycywgeyBpbjogaW5wdXQgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKGZlLCBsaWdodHMpO1xyXG4gICAgICAgIHJldHVybiBmZTtcclxuICAgIH1cclxuICAgIGRpc3BsYWNlbWVudE1hcChhdHRycywgaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGRpc3BsYWNlbWVudF9tYXBfMS5EaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlKHRoaXMsIG1lcmdlKGF0dHJzLCB7IGluOiBpbnB1dDEsIGluMjogaW5wdXQyIH0pKTtcclxuICAgIH1cclxuICAgIGZsb29kKGNvbG9yLCBhcmVhKSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgZmxvb2RfMS5GbG9vZF9QcmltaXRpdmUodGhpcywgeyBcImZsb29kLWNvbG9yXCI6IGNvbG9yIH0pO1xyXG4gICAgICAgIGZlLnNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICB4OiBhcmVhLngsXHJcbiAgICAgICAgICAgIHk6IGFyZWEueSxcclxuICAgICAgICAgICAgd2lkdGg6IGFyZWEud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYXJlYS5oZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgZ2F1c3NpYW5CbHVyKHN0ZERldmlhdGlvbiA9IDAsIGVkZ2VNb2RlID0gXCJkdXBsaWNhdGVcIiwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGdhdXNzaWFuX2JsdXJfMS5HYXVzc2lhbkJsdXJfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBzdGREZXZpYXRpb24sXHJcbiAgICAgICAgICAgIGVkZ2VNb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW1hZ2UoaHJlZiwgcHJlc2VydmVBc3BlY3RSYXRpbykge1xyXG4gICAgICAgIHJldHVybiBuZXcgaW1hZ2VfMS5JbWFnZV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogaHJlZixcclxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1lcmdlKGlucHV0cykge1xyXG4gICAgICAgIGNvbnN0IGZlID0gbmV3IG1lcmdlXzEuTWVyZ2VfUHJpbWl0aXZlKHRoaXMpO1xyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVyZ2VOb2RlID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMuY29udGV4dCwgXCJmZU1lcmdlTm9kZVwiLCB7IGluOiBpbnB1dCB9KTtcclxuICAgICAgICAgICAgZmUuYWRkKG1lcmdlTm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgbW9ycGhvbG9neShvcGVyYXRvciwgcmFkaXVzLCBpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgbW9ycGhvbG9neV8xLk1vcnBob2xvZ3lfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb2Zmc2V0KGQsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBvZmZzZXRfMS5PZmZzZXRfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBkeDogZC54LFxyXG4gICAgICAgICAgICBkeTogZC55LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3BlY3VsYXJMaWdodGluZyhhdHRycywgbGlnaHRzID0gW10sIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgc3BlY3VsYXJfMS5TcGVjdWxhckxpZ2h0aW5nKHRoaXMsIGF0dHJzKTtcclxuICAgICAgICB0aGlzLmFkZExpZ2h0cyhmZSwgbGlnaHRzKTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICB0aWxlKGFyZWEsIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgdGlsZV8xLlRpbGVfUHJpbWl0aXZlKHRoaXMsIHsgaW46IGlucHV0IH0pO1xyXG4gICAgICAgIGZlLnNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICB4OiBhcmVhLngsXHJcbiAgICAgICAgICAgIHk6IGFyZWEueSxcclxuICAgICAgICAgICAgd2lkdGg6IGFyZWEud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYXJlYS5oZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgdHVyYnVsZW5jZShhdHRycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgdHVyYnVsZW5jZV8xLlR1cmJ1bGVuY2VfUHJpbWl0aXZlKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIGFkZExpZ2h0cyhsaWdodGluZywgbGlnaHRzKSB7XHJcbiAgICAgICAgbGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpZ2h0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgcG9pbnRfMS5Qb2ludExpZ2h0KHRoaXMsIGxpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGlzdGFudFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgZGlzdGFudF8xLkRpc3RhbnRMaWdodCh0aGlzLCBsaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNwb3RcIjpcclxuICAgICAgICAgICAgICAgICAgICBsaWdodGluZy5hZGQobmV3IHNwb3RfMS5TcG90TGlnaHQodGhpcywgbGlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmlsdGVyID0gRmlsdGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labWxzZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWm1sc2RHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRXNkME5CUVhGRE8wRkJSM0pETEhGRVFVRTBSRHRCUVVNMVJDeHRSVUZCZVVVN1FVRkRla1VzSzBWQlFYRkdPMEZCUTNKR0xEWkVRVUZ2UlR0QlFVTndSU3g1UlVGQk1FYzdRVUZETVVjc01rVkJRVFpITzBGQlF6ZEhMSEZFUVVFMFJEdEJRVU0xUkN4eFJVRkJNa1U3UVVGRE0wVXNjVVJCUVRSRU8wRkJRelZFTEd0RlFVRnRSenRCUVVWdVJ5d3JSVUZCYVVZN1FVRkRha1lzTWtWQlFUWkZPMEZCUXpkRkxIbEZRVUV5UlR0QlFVTXpSU3h2UlVGQmMwYzdRVUZEZEVjc2NVUkJRVFJFTzBGQlF6VkVMQ3RFUVVGelJUdEJRVU4wUlN4MVJFRkJPRVE3UVVGRE9VUXNiVVJCUVRCRU8wRkJRekZFTERaRlFVRm5TRHRCUVVOb1NDd3JSRUZCTmtZN1FVRnpRamRHTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVU4c1EwRkJTU3hGUVVGRkxFTkJRVWtzUlVGQlV5eEZRVUZGTzBsQlEzaERMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRhRU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUWl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRFJDeEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1FVRkRZaXhEUVVGRExFTkJRVU03UVVGRlJpeFpRVUZ2UWl4VFFVRlJMR2xDUVVFeVJEdEpRVWR5Uml4WlFVRnRRaXhQUVVGblFqdFJRVU5xUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlJGSXNXVUZCVHl4SFFVRlFMRTlCUVU4c1EwRkJVenRSUVVRelFpeG5Ra0ZCVnl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVjNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUTAwc01rSkJRVEpDTzFGQlEyaERMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1NVRkJOa1FzUlVGQlJTeE5RVUZ0UWl4RlFVRkZMRTFCUVc5Q08xRkJRMjVJTEUxQlFVMHNRMEZCUXl4SlFVRkpMSFZDUVVGbExFTkJRVU1zU1VGQlNTeEZRVUZGTzFsQlF5OUNMRVZCUVVVc1JVRkJSU3hOUVVGTk8xbEJRMVlzUjBGQlJ5eEZRVUZGTEUxQlFVMDdXVUZEV0N4SlFVRkpPMU5CUTB3c1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4TlFVRnRRaXhGUVVGRkxFdEJRVzFDTzFGQlEzcEVMRTFCUVUwc1EwRkJReXhKUVVGSkxHOURRVUZ4UWl4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVOeVF5eEZRVUZGTEVWQlFVVXNTMEZCU3p0WlFVTlVMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNUdFpRVU5xUWl4TlFVRk5MRVZCUVVVc1RVRkJUVHRUUVVObUxFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZEVFN4cFFrRkJhVUlzUTBGQlF5eERRVUU0UWl4RlFVRkZMRU5CUVRoQ0xFVkJRVVVzUTBGQk9FSXNSVUZCUlN4RFFVRXJRaXhGUVVGRkxFdEJRVzFDTzFGQlF6TkxMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4blJFRkJNa0lzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZET1VRc1JVRkJSU3hGUVVGRkxFdEJRVXM3VTBGRFZpeERRVUZETEVOQlFVTTdVVUZEU0N4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N3NFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFVXNhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NPRU5CUVRCQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JGTEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTERoRFFVRXdRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1JTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N3NFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wbEJRMDBzVTBGQlV5eERRVUZETEZGQlFTdEVMRVZCUVVVc1JVRkJWU3hGUVVGRkxFVkJRVlVzUlVGQlJTeEZRVUZWTEVWQlFVVXNSVUZCVlN4RlFVRkZMRTFCUVc5Q0xFVkJRVVVzVFVGQmIwSTdVVUZETVVzc1RVRkJUU3hEUVVGRExFbEJRVWtzSzBKQlFXMUNMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRMjVETEVWQlFVVXNSVUZCUlN4TlFVRk5PMWxCUTFZc1IwRkJSeXhGUVVGRkxFMUJRVTA3V1VGRFdDeFJRVUZSTzFsQlExSXNSVUZCUlR0WlFVTkdMRVZCUVVVN1dVRkRSaXhGUVVGRk8xbEJRMFlzUlVGQlJUdFRRVU5JTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3hqUVVGakxFTkJRVU1zUzBGQmVVTXNSVUZCUlN4TFFVRnRRanRSUVVOc1JpeE5RVUZOTEVOQlFVTXNTVUZCU1N3d1EwRkJkMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla1VzUTBGQlF6dEpRVU5OTEdWQlFXVXNRMEZCUXl4TFFVRXdReXhGUVVGRkxGTkJRVzFETEVWQlFVVXNSVUZCUlN4TFFVRnRRanRSUVVNelNDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMSGxDUVVGbExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4RkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRek5DTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRE8wbEJRMDBzWlVGQlpTeERRVUZETEV0QlFUQkRMRVZCUVVVc1RVRkJiMElzUlVGQlJTeE5RVUZ2UWp0UlFVTXpSeXhOUVVGTkxFTkJRVU1zU1VGQlNTdzBRMEZCZVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFJpeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRXRCUVZrc1JVRkJSU3hKUVVGVE8xRkJRMnhETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc2RVSkJRV1VzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4aFFVRmhMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU12UkN4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJRMllzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFRc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExUXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTE8xbEJRMnBDTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUVHRUUVVOd1FpeERRVUZETEVOQlFVTTdVVUZEU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVU5OTEZsQlFWa3NRMEZCUXl4bFFVRjFRaXhEUVVGRExFVkJRVVVzVjBGQmQwTXNWMEZCVnl4RlFVRkZMRXRCUVcxQ08xRkJRM0JJTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5EUVVGelFpeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTjBReXhGUVVGRkxFVkJRVVVzUzBGQlN6dFpRVU5VTEZsQlFWazdXVUZEV2l4UlFVRlJPMU5CUTFRc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4SlFVRlpMRVZCUVVVc2JVSkJRWGxETzFGQlEyeEZMRTFCUVUwc1EwRkJReXhKUVVGSkxIVkNRVUZsTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUXk5Q0xGbEJRVmtzUlVGQlJTeEpRVUZKTzFsQlEyeENMRzFDUVVGdFFqdFRRVU53UWl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEUxQlFYRkNPMUZCUTJoRExFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NkVUpCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU55UXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzSkNMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzYVVKQlFVOHNRMEZCYTBjc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeGhRVUZoTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU16U3l4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzQkNMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkRUU3hWUVVGVkxFTkJRVU1zVVVGQk5FSXNSVUZCUlN4TlFVRTBRaXhGUVVGRkxFdEJRVzFDTzFGQlF5OUdMRTFCUVUwc1EwRkJReXhKUVVGSkxHbERRVUZ2UWl4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVOd1F5eEZRVUZGTEVWQlFVVXNTMEZCU3p0WlFVTlVMRkZCUVZFN1dVRkRVaXhOUVVGTk8xTkJRMUFzUTBGQlF5eERRVUZETzBsQlEwd3NRMEZCUXp0SlFVTk5MRTFCUVUwc1EwRkJReXhEUVVGUkxFVkJRVVVzUzBGQmJVSTdVVUZEZWtNc1RVRkJUU3hEUVVGRExFbEJRVWtzZVVKQlFXZENMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRMmhETEVWQlFVVXNSVUZCUlN4TFFVRkxPMWxCUTFRc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExQXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMUlzUTBGQlF5eERRVUZETzBsQlEwd3NRMEZCUXp0SlFVTk5MR2RDUVVGblFpeERRVUZETEV0QlFUSkRMRVZCUVVVc1UwRkJiVU1zUlVGQlJTeEZRVUZGTEV0QlFXMUNPMUZCUXpkSUxFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NNa0pCUVdkQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRek5DTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRE8wbEJRMDBzU1VGQlNTeERRVUZETEVsQlFWTXNSVUZCUlN4TFFVRnRRanRSUVVONFF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMSEZDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGJrUXNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVObUxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTlVMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5VTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTenRaUVVOcVFpeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwN1UwRkRjRUlzUTBGQlF5eERRVUZETzFGQlEwZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU03U1VGRFRTeFZRVUZWTEVOQlFVTXNTMEZCY1VNN1VVRkRja1FzVFVGQlRTeERRVUZETEVsQlFVa3NhVU5CUVc5Q0xFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGRFR5eFRRVUZUTEVOQlFVTXNVVUZCT0Vjc1JVRkJSU3hOUVVGblF6dFJRVU5vU3l4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzSkNMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOdVFpeExRVUZMTEU5QlFVODdiMEpCUTFZc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEd0Q1FVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpGRExFdEJRVXNzUTBGQlF6dG5Ra0ZEVWl4TFFVRkxMRk5CUVZNN2IwSkJRMW9zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMSE5DUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRelZETEV0QlFVc3NRMEZCUXp0blFrRkRVaXhMUVVGTExFMUJRVTA3YjBKQlExUXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxHZENRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzcERMRXRCUVVzc1EwRkJRenRaUVVOV0xFTkJRVU03VVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1EwRkRSanRCUVhoSlJDeDNRa0YzU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ibGVuZFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbG9yLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvbmVudC10cmFuc2ZlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvc2l0ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnZvbHZlLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Rpc3BsYWNlbWVudC1tYXBcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mbG9vZFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhdXNzaWFuLWJsdXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9pbWFnZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21lcmdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbW9ycGhvbG9neVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL29mZnNldFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RpbGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmFuc2Zlci1mdW5jdGlvblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3R1cmJ1bGVuY2VcIikpO1xyXG5jb25zdCBMaWdodGluZyA9IHJlcXVpcmUoXCIuL2xpZ2h0aW5nXCIpO1xyXG5leHBvcnRzLkxpZ2h0aW5nID0gTGlnaHRpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEWkNRVUYzUWp0QlFVTjRRaXh2UTBGQkswSTdRVUZETDBJc01FTkJRWEZETzBGQlEzSkRMR2xEUVVFMFFqdEJRVU0xUWl4MVEwRkJhME03UVVGRGJFTXNkME5CUVcxRE8wRkJRMjVETERaQ1FVRjNRanRCUVVONFFpeHhRMEZCWjBNN1FVRkRhRU1zTmtKQlFYZENPMEZCUTNoQ0xEWkNRVUYzUWp0QlFVTjRRaXhyUTBGQk5rSTdRVUZETjBJc09FSkJRWGxDTzBGQlEzcENMRFJDUVVGMVFqdEJRVU4yUWl4NVEwRkJiME03UVVGRGNFTXNhME5CUVRaQ08wRkJSVGRDTEhWRFFVRjFRenRCUVVkeVF5dzBRa0ZCVVNKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXR0cmlidXRlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RpZmZ1c2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGVjdWxhclwiKSk7XHJcbmNvbnN0IExpZ2h0U291cmNlID0gcmVxdWlyZShcIi4vbGlnaHQtc291cmNlXCIpO1xyXG5leHBvcnRzLkxpZ2h0U291cmNlID0gTGlnaHRTb3VyY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdERRVUUyUWp0QlFVTTNRaXdyUWtGQk1FSTdRVUZETVVJc1owTkJRVEpDTzBGQlJUTkNMRGhEUVVFNFF6dEJRVWMxUXl4clEwRkJWeUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYUjBjbWxpZFhSbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1GMGRISnBZblYwWlhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9hdHRyaWJ1dGVzLnRzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXR0cmlidXRlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Rpc3RhbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2ludFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Nwb3RcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR3REUVVFMlFqdEJRVU0zUWl3clFrRkJNRUk3UVVGRE1VSXNOa0pCUVhkQ08wRkJRM2hDTERSQ1FVRjFRaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWFIwY21saWRYUmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltRjBkSEpwWW5WMFpYTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2F0dHJpYnV0ZXMudHNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jbGlwLXBhdGhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXJrZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXNrXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGFpbnQtc2VydmVyXCIpKTtcclxuY29uc3QgUGFpbnRTZXJ2ZXJzID0gcmVxdWlyZShcIi4vcGFpbnQtc2VydmVyc1wiKTtcclxuZXhwb3J0cy5QYWludFNlcnZlcnMgPSBQYWludFNlcnZlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHbERRVUUwUWp0QlFVTTFRaXc0UWtGQmVVSTdRVUZEZWtJc05FSkJRWFZDTzBGQlEzWkNMRzlEUVVFclFqdEJRVVV2UWl4blJFRkJaMFE3UVVGSE9VTXNiME5CUVZraWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ncmFkaWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhdHRlcm5cIikpO1xyXG5jb25zdCBHcmFkaWVudHMgPSByZXF1aXJlKFwiLi9ncmFkaWVudHNcIik7XHJcbmV4cG9ydHMuR3JhZGllbnRzID0gR3JhZGllbnRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR2REUVVFeVFqdEJRVU16UWl3clFrRkJNRUk3UVVGRk1VSXNlVU5CUVhsRE8wRkJSM1pETERoQ1FVRlRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9saW5lYXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yYWRpYWxcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3NFFrRkJlVUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvbmVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2V4dGVybmFsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZm9yZWlnbi1vYmplY3RcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ncm91cFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90ZXh0XCIpKTtcclxuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vc2hhcGVzXCIpO1xyXG5leHBvcnRzLlNoYXBlcyA9IFNoYXBlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEdsRFFVRTBRanRCUVVNMVFpeG5RMEZCTWtJN1FVRkRNMElzYzBOQlFXbERPMEZCUTJwRExEWkNRVUYzUWp0QlFVTjRRaXcyUWtGQmQwSTdRVUZEZUVJc05rSkJRWGRDTzBGQlEzaENMRFJDUVVGMVFqdEJRVVYyUWl4dFEwRkJiVU03UVVGSGFrTXNkMEpCUVUwaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NpcmNsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VsbGlwc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9saW5lXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGF0aFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvbHlnb25cIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2x5bGluZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlY3RcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3clFrRkJNRUk3UVVGRE1VSXNORUpCUVhWQ08wRkJRM1pDTERSQ1FVRjFRanRCUVVOMlFpd3JRa0ZCTUVJN1FVRkRNVUlzWjBOQlFUSkNPMEZCUXpOQ0xEUkNRVUYxUWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==