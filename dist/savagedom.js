/*
 * SavageDOM 1.0.0-alpha.22 (https://github.com/molisani/SavageDOM) 
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
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_19__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
class FilterPrimitive extends element_1.Element {
    constructor(filter, name, attrs) {
        super(filter.context, name, attrs);
        this._referenced = false;
        filter.add(this);
    }
    toString() {
        if (!this._referenced) {
            this._referenced = true;
            this.setAttribute("result", this.id);
        }
        return this.id;
    }
}
exports.FilterPrimitive = FilterPrimitive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbHRlci1wcmltaXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx3Q0FBcUM7QUFpQnJDLHFCQUF1RCxTQUFRLGlCQUFtRTtJQUVoSSxZQUFZLE1BQWMsRUFBRSxJQUFZLEVBQUUsS0FBK0M7UUFDdkYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRjdCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNNLFFBQVE7UUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZSxFQUFFLElBQUksQ0FBQyxFQUFTLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBYkQsMENBYUMifQ==

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
const renderable_1 = __webpack_require__(4);
class AbstractShape extends renderable_1.AbstractRenderable {
}
exports.AbstractShape = AbstractShape;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhDQUF3RTtBQU14RSxtQkFBNkQsU0FBUSwrQkFBK0M7Q0FBRztBQUF2SCxzQ0FBdUgifQ==

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = __webpack_require__(18);
const attribute_1 = __webpack_require__(16);
const constants_1 = __webpack_require__(9);
const rxjs_1 = __webpack_require__(19);
const box_1 = __webpack_require__(10);
const randomId = () => Math.random().toString(36).substring(2);
class Element {
    constructor(context, el, attrs, _id = randomId()) {
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
            val.set(this, name);
        }
        else if (Array.isArray(val)) {
            this._node.setAttribute(name, val.join("\t"));
        }
        else {
            this._node.setAttribute(name, String(val));
        }
    }
    setAttribute(name, val) {
        renderer_1.Renderer.getInstance().queueUpdate(this, name, val);
    }
    setAttributes(attrs) {
        for (const name in attrs) {
            const attr = attrs[name];
            if (attr !== undefined && attr !== null) {
                this.setAttribute(name, attr);
            }
        }
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
        return rxjs_1.Observable.fromEvent(this._node, event);
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
    clone(deep = true, id = randomId()) {
        const copy = new Element(this.context, this._node.cloneNode(deep));
        copy._id = id;
        copy._node.setAttribute("id", copy._id);
        return copy;
    }
    cloneNode(deep = true) {
        const clone = this._node.cloneNode(deep);
        clone.setAttribute("id", randomId());
        return clone;
    }
}
exports.Element = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBaUU7QUFDakUsMkNBQTBDO0FBRTFDLDJDQUFvQztBQUlwQywrQkFBeUQ7QUFDekQsMENBQXVDO0FBRXZDLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBSS9EO0lBT0UsWUFBbUIsT0FBZ0IsRUFBRSxFQUFnQixFQUFFLEtBQTJCLEVBQVUsTUFBYyxRQUFRLEVBQUU7UUFBakcsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUF5RCxRQUFHLEdBQUgsR0FBRyxDQUFxQjtRQUo1RywwQkFBcUIsR0FBRyxFQUFrRCxDQUFDO1FBS2pGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGlCQUFLLEVBQUUsRUFBRSxDQUFRLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxHQUFH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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
class AbstractRenderable extends element_1.Element {
}
exports.AbstractRenderable = AbstractRenderable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbmRlcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx3Q0FBcUM7QUFtQnJDLHdCQUErRyxTQUFRLGlCQUE0RDtDQUFHO0FBQXRMLGdEQUFzTCJ9

/***/ }),
/* 5 */
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
                const idx = css.indexOf(this.type);
                if (idx > -1) {
                    return this.parse(css.substring(idx, css.indexOf(")") + 1));
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
                    element.setAttribute(toks[0], `${css.substr(0, start)}${str}${css.substr(css.indexOf(")") + 1)}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUE7SUFDRSxZQUFtQixJQUFxRTtRQUFyRSxTQUFJLEdBQUosSUFBSSxDQUFpRTtJQUFHLENBQUM7SUFFckYsUUFBUTtRQUNiLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDeEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFzQyxFQUFFLElBQVk7UUFDN0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFzQyxFQUFFLElBQVksRUFBRSxRQUFvQjtRQUNuRixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BHLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0NBRUY7QUEvQ0QsOEJBK0NDIn0=

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
exports.XMLNS = "http://www.w3.org/2000/svg";
exports.XLINK = "http://www.w3.org/1999/xlink";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxLQUFLLEdBQUcsNEJBQTRCLENBQUM7QUFDckMsUUFBQSxLQUFLLEdBQUcsOEJBQThCLENBQUMifQ==

/***/ }),
/* 10 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsaUNBQW9EO0FBRXBEO0lBQ0UsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxLQUFhLEVBQVMsTUFBYztRQUF4RSxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUN4RixRQUFRO1FBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVELENBQUM7SUFDTSxLQUFLLENBQUMsR0FBa0I7UUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckcsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQXNDLEVBQUUsSUFBWTtRQUM3RCxNQUFNLElBQUksR0FBRyxJQUFJ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

/***/ }),
/* 11 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGlDQUFrRTtBQUVsRTtJQUNFLFlBQW1CLENBQVMsRUFBUyxDQUFTO1FBQTNCLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUcsQ0FBQztJQUMzQyxRQUFRO1FBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQXNDLEVBQUUsSUFBWTtRQUM3RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLG1CQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBc0MsRUFBRSxJQUFZLEVBQUUsUUFBZ0I7UUFDL0UsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNuRCxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsSUFBVyxFQUFFLENBQVM7UUFDdkMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHlCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBQ0Y7QUFoREQsc0JBZ0RDIn0=

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(8);
const element_1 = __webpack_require__(3);
const paint_server_1 = __webpack_require__(13);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = __webpack_require__(6);
class AbstractPaintServer extends non_renderable_1.AbstractNonRenderable {
}
exports.AbstractPaintServer = AbstractPaintServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpbnQtc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFpbnQtc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQTBEO0FBRTFELHlCQUF1RixTQUFRLHNDQUErQztDQUFHO0FBQWpKLGtEQUFpSiJ9

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const paint_server_1 = __webpack_require__(13);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = __webpack_require__(14);
const renderable_1 = __webpack_require__(4);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _defaultGet(element, attr) {
    return this.parse(element.getAttribute(attr));
}
exports._defaultGet = _defaultGet;
function _defaultSet(element, attr, override) {
    element.setAttribute(attr, (override === undefined) ? this : override);
}
exports._defaultSet = _defaultSet;
exports.isAttribute = (obj) => {
    return typeof obj["interpolate"] === "function" && typeof obj["parse"] === "function";
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0EscUJBQW1ELE9BQXNDLEVBQUUsSUFBWTtJQUNyRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUZELGtDQUVDO0FBRUQscUJBQXdDLE9BQXNDLEVBQUUsSUFBWSxFQUFFLFFBQVk7SUFDeEcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUZELGtDQUVDO0FBRVksUUFBQSxXQUFXLEdBQUcsQ0FBQyxHQUF5QixFQUF5QixFQUFFO0lBQzlFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3hGLENBQUMsQ0FBQyJ9

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SVGDocument {
    constructor(context, raw, mimeType = "application/xml") {
        this._document = (raw instanceof Document) ? raw : SVGDocument.PARSER.parseFromString(raw, mimeType);
        const allDefs = Array.from(this._document.getElementsByTagName("defs"));
        allDefs.forEach((defs) => {
            const rmDefs = this._document.removeChild(defs);
            while (rmDefs.children.length > 0) {
                context.addDef(rmDefs.children[0]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2N1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBR0UsWUFBWSxPQUFnQixFQUFFLEdBQXNCLEVBQUUsV0FBbUIsaUJBQWlCO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFlBQVksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JHLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFlLENBQUMsQ0FBQztZQUNuRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7QUFkYyxrQkFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFEMUMsa0NBZ0JDO0FBRVksUUFBQSxXQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFxQixFQUFFO0lBQzVELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxNQUFNLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNoQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUM7d0JBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO3dCQUNsQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7cUJBQzNCLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQztnQkFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07Z0JBQ2xCLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTthQUMzQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(19);
class Renderer {
    constructor() {
        this._animationFrame = rxjs_1.Observable.interval(0, rxjs_1.Scheduler.animationFrame);
        this._updates = new rxjs_1.Subject();
        this._updates.bufferWhen(() => this._animationFrame).subscribe((events) => {
            const now = performance.now();
            events.forEach(({ el, attribute }) => {
                el.renderAttribute(attribute.name, attribute.val);
            });
        });
    }
    static getInstance() {
        return Renderer._instance;
    }
    queueUpdate(a1, a2, a3) {
        if (typeof a2 === "string") {
            this._updates.next({ el: a1, attribute: { name: a2, val: a3 } });
        }
        else {
            Object.keys(a2).forEach((name) => {
                this._updates.next({ el: a1, attribute: { name, val: a2[name] } });
            });
        }
    }
}
Renderer._instance = new Renderer();
exports.Renderer = Renderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtCQUFzRDtBQXFCdEQ7SUFRRTtRQUhRLG9CQUFlLEdBQUcsaUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLGdCQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkUsYUFBUSxHQUFHLElBQUksY0FBTyxFQUFvRCxDQUFDO1FBR2pGLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN4RSxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7Z0JBQ25DLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQWVMLENBQUM7SUE1Qk0sTUFBTSxDQUFDLFdBQVc7UUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQTZCTSxXQUFXLENBQW1FLEVBQUssRUFBRSxFQUFhLEVBQUUsRUFBYTtRQUN0SCxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7O0FBcENjLGtCQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUo1Qyw0QkF1REMifQ==

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gradient_1 = __webpack_require__(12);
class LinearGradient extends gradient_1.AbstractGradient {
    constructor(context, stops, attrs) {
        super(context, "linearGradient", stops, attrs);
    }
}
exports.LinearGradient = LinearGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGluZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQTJFO0FBVzNFLG9CQUE0QixTQUFRLDJCQUFxRTtJQUN2RyxZQUFZLE9BQWdCLEVBQUUsS0FBWSxFQUFFLEtBQXFFO1FBQy9HLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gradient_1 = __webpack_require__(12);
class RadialGradient extends gradient_1.AbstractGradient {
    constructor(context, stops, attrs) {
        super(context, "radialGradient", stops, attrs);
    }
}
exports.RadialGradient = RadialGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQTJFO0FBWTNFLG9CQUE0QixTQUFRLDJCQUFxRTtJQUN2RyxZQUFZLE9BQWdCLEVBQUUsS0FBWSxFQUFFLEtBQXFFO1FBQy9HLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = __webpack_require__(15);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleHRlcm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLG1DQUFnQztBQUVoQyxpQkFBeUIsU0FBUSxhQUFLO0lBQ3BDLFlBQVksT0FBZ0IsRUFBRSxHQUFnQixFQUFFLEtBQXNDO1FBQ3BGLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFSRCxrQ0FRQyJ9

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const renderable_1 = __webpack_require__(4);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const renderable_1 = __webpack_require__(4);
class Image extends renderable_1.AbstractRenderable {
    constructor(context, attrs) {
        super(context, "image", attrs);
    }
}
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLDhDQUErRjtBQXFCL0YsV0FBbUIsU0FBUSwrQkFBbUU7SUFDNUYsWUFBWSxPQUFnQixFQUFFLEtBQXlEO1FBQ3JGLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQUpELHNCQUlDIn0=

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(8);
const text_content_1 = __webpack_require__(36);
const renderable_1 = __webpack_require__(4);
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
/* 36 */
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
        return this.parse(element._node.textContent);
    }
    set(element, attr, override) {
        element._node.textContent = TextContent.escapeHtml(this._str || this._cb());
    }
    interpolate(from, t) {
        return t < 0.5 ? from : this;
    }
}
exports.TextContent = TextContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV4dC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDVSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBS0QsWUFBWSxHQUE0QjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNNLEdBQUcsQ0FBK0IsT0FBd0MsRUFBRSxJQUFPO1FBQ3hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFHLE9BQWUsQ0FBQyxLQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDTSxHQUFHLENBQStCLE9BQXdDLEVBQUUsSUFBTyxFQUFFLFFBQXNCO1FBQzlHLE9BQWUsQ0FBQyxLQUF3QixDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUNNLFdBQVcsQ0FBQyxJQUFpQixFQUFFLENBQVM7UUFDN0MsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQTNCRCxrQ0EyQkMifQ==

/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(16));
__export(__webpack_require__(9));
__export(__webpack_require__(58));
__export(__webpack_require__(17));
__export(__webpack_require__(3));
__export(__webpack_require__(59));
__export(__webpack_require__(1));
const Animation = __webpack_require__(60);
exports.Animation = Animation;
const Attributes = __webpack_require__(62);
exports.Attributes = Attributes;
const Elements = __webpack_require__(76);
exports.Elements = Elements;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1QixpQ0FBNEI7QUFDNUIsK0JBQTBCO0FBQzFCLGdDQUEyQjtBQUMzQiwrQkFBMEI7QUFDMUIsOEJBQXlCO0FBQ3pCLHFDQUFnQztBQUVoQyx5Q0FBeUM7QUFLdkMsOEJBQVM7QUFKWCwyQ0FBMkM7QUFLekMsZ0NBQVU7QUFKWix1Q0FBdUM7QUFLckMsNEJBQVEifQ==

/***/ }),
/* 58 */
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
const box_1 = __webpack_require__(10);
const point_1 = __webpack_require__(11);
const constants_1 = __webpack_require__(9);
const document_1 = __webpack_require__(17);
const element_1 = __webpack_require__(3);
const clip_path_1 = __webpack_require__(20);
const marker_1 = __webpack_require__(21);
const mask_1 = __webpack_require__(22);
const linear_1 = __webpack_require__(23);
const radial_1 = __webpack_require__(24);
const pattern_1 = __webpack_require__(14);
const external_1 = __webpack_require__(25);
const foreign_object_1 = __webpack_require__(26);
const group_1 = __webpack_require__(15);
const image_1 = __webpack_require__(27);
const circle_1 = __webpack_require__(28);
const ellipse_1 = __webpack_require__(29);
const line_1 = __webpack_require__(30);
const path_1 = __webpack_require__(31);
const polygon_1 = __webpack_require__(32);
const polyline_1 = __webpack_require__(33);
const rect_1 = __webpack_require__(34);
const text_1 = __webpack_require__(35);
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
    }
    get window() {
        return this._window;
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
exports.Context = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDBDQUF1QztBQUV2Qyw4Q0FBMkM7QUFFM0MsMkNBQTJDO0FBQzNDLHlDQUFzRDtBQUN0RCx1Q0FBb0M7QUFDcEMsb0VBQWdFO0FBQ2hFLDhEQUEyRDtBQUMzRCwwREFBdUQ7QUFFdkQsc0ZBQXNIO0FBQ3RILHNGQUFzSDtBQUN0SCw4RUFBMkU7QUFDM0UsOERBQThEO0FBQzlELDBFQUFzRTtBQUN0RSx3REFBcUQ7QUFDckQsd0RBQXFEO0FBQ3JELGlFQUE4RDtBQUM5RCxtRUFBZ0U7QUFDaEUsNkRBQTBEO0FBQzFELDZEQUEwRDtBQUMxRCxtRUFBZ0U7QUFDaEUscUVBQWtFO0FBQ2xFLDZEQUEwRDtBQUMxRCxzREFBbUQ7QUFNbkQ7SUFRRSxZQUFZLElBQTZCLEVBQVUsVUFBa0IsT0FBTyxDQUFDLGNBQWM7UUFBeEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7UUFDekYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNw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

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(61));
__export(__webpack_require__(18));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6QixnQ0FBMkIifQ==

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(10));
__export(__webpack_require__(63));
__export(__webpack_require__(64));
__export(__webpack_require__(8));
__export(__webpack_require__(65));
__export(__webpack_require__(66));
__export(__webpack_require__(67));
__export(__webpack_require__(11));
__export(__webpack_require__(68));
__export(__webpack_require__(36));
__export(__webpack_require__(5));
__export(__webpack_require__(69));
const Transforms = __webpack_require__(70);
exports.Transforms = Transforms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUF1QjtBQUN2QiwyQkFBc0I7QUFDdEIsb0NBQStCO0FBQy9CLDZCQUF3QjtBQUN4QixpQ0FBNEI7QUFDNUIsOEJBQXlCO0FBQ3pCLDhDQUF5QztBQUN6QyxvQ0FBK0I7QUFDL0IsNkJBQXdCO0FBQ3hCLDZDQUF3QztBQUN4QyxvQ0FBK0I7QUFDL0IsaUNBQTRCO0FBQzVCLGdDQUEyQjtBQUUzQiwyQ0FBMkM7QUFDbEMsZ0NBQVUifQ==

/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
class ColorImpl {
}
class RGB extends ColorImpl {
    constructor(x = 0, y = 0, z = 0, a = 1) {
        super();
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
        return new HSL(h, s, l);
    }
    interpolate(from, t, mode) {
        const modePrefix = mode.substr(0, 3);
        if (modePrefix === "rgb") {
            if (from instanceof HSL) {
                from = from.toRGB();
            }
            if (from instanceof RGB) {
                return new RGB(interpolation_1._lerp(from.r, this.r, t), interpolation_1._lerp(from.g, this.g, t), interpolation_1._lerp(from.b, this.b, t), interpolation_1._lerp(from.a, this.a, t));
            }
        }
        else if (modePrefix === "hsl") {
            return this.toHSL().interpolate(from, t, mode);
        }
        return this;
    }
}
class HSL extends ColorImpl {
    constructor(x = 0, y = 0, z = 0, a = 1) {
        super();
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
        return new RGB(r * 255, g * 255, b * 255);
    }
    interpolate(from, t, mode) {
        const modePrefix = mode.substr(0, 3);
        if (modePrefix === "hsl") {
            if (from instanceof RGB) {
                from = from.toHSL();
            }
            if (from instanceof HSL) {
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
                return new HSL(interpolation_1._lerp(h1, h2, t) % 360, interpolation_1._lerp(from.s, this.s, t), interpolation_1._lerp(from.l, this.l, t), interpolation_1._lerp(from.a, this.a, t));
            }
        }
        else if (modePrefix === "rgb") {
            return this.toRGB().interpolate(from, t, mode);
        }
        return this;
    }
}
class Color {
    constructor(format, x = 0, y = 0, z = 0, a = 1) {
        this.mode = Color.DEFAULT_MODE;
        if (format === "rgb") {
            this.impl = new RGB(x, y, z, a);
        }
        else if (format === "hsl") {
            this.impl = new HSL(x, y, z, a);
        }
        else if (format !== undefined) {
            if (format.indexOf("rgb") === 0) {
                this.impl = new RGB(format);
            }
            else if (format.indexOf("hsl") === 0) {
                this.impl = new HSL(format);
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
                this.impl = new RGB(r, g, b);
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG9EQUF5QztBQUl6QztDQUdDO0FBRUQsU0FBVSxTQUFRLFNBQVM7SUFRekIsWUFBWSxJQUFxQixDQUFDLEVBQUUsSUFBWSxDQUFDLEVBQUUsSUFBWSxDQUFDLEVBQUUsSUFBWSxDQUFDO1FBQzdFLEtBQUssRUFBRSxDQUFDO1FBUkYsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQU1wQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsdUxBQXVMLENBQUMsQ0FBQztZQUNuTixFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsNEpBQTRKLENBQUMsQ0FBQztZQUN2TCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENB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VUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3pDLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUM7SUFDSCxDQUFDO0lBQ00sUUFBUTtRQUNiLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNoRixDQUFDO0lBQ00sS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFD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

/***/ }),
/* 65 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0RBQXlDO0FBRXpDO0lBRUUsWUFBWSxNQUFrQjtRQUR2QixRQUFHLEdBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ00sUUFBUTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBc0MsRUFBRSxJQUFZO1FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQXNDLEVBQUUsSUFBWSxFQUFFLFFBQWlCO1FBQ2hGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQVksRUFBRSxDQUFTO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDRjtBQTVCRCx3QkE0QkMifQ==

/***/ }),
/* 66 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW9wdGlvbmFsLW51bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm51bWJlci1vcHRpb25hbC1udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvREFBeUM7QUFFekM7SUFDRSxZQUFtQixDQUFTLEVBQVMsQ0FBVTtRQUE1QixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUztJQUFHLENBQUM7SUFDNUMsUUFBUTtRQUNiLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUUsQ0FBQztJQUNNLEtBQUssQ0FBQyxHQUFrQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFDTSxHQUFHLENBQUMsT0FBc0MsRUFBRSxJQUFZO1FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQXNDLEVBQUUsSUFBWSxFQUFFLFFBQStCO1FBQzlGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBQ00sV0FBVyxDQUFDLElBQTBCLEVBQUUsQ0FBUztRQUN0RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxxQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxxQkFBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7Q0FDRjtBQXRDRCxvREFzQ0MifQ==

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
const base_1 = __webpack_require__(7);
const point_1 = __webpack_require__(11);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1zZWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aC1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0RBQXlDO0FBQ3pDLGlDQUFrRTtBQUNsRSxtQ0FBZ0M7QUFFaEM7SUFDRSxZQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQW9CLEVBQUUsSUFBWTtRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFvQixFQUFFLElBQVksRUFBRSxRQUFzQjtRQUNuRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztDQUlGO0FBdkJELGtDQXVCQztBQUVELFdBQWlCLFdBQVc7SUFJMUIsa0JBQW1DLFNBQVEsV0FBVztRQUNwRCxZQUFZLE9BQThCLEVBQVMsSUFBWSxDQUFDO1lBQzlELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQURrQyxNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBRWhFLENBQUM7UUFDTSxRQUFRO1lBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDaEQsQ0FBQztRQUNNLFNBQVMsQ0FBQyxHQUFXO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ00sV0FBVyxDQUFDLElBQWtCLEVBQUUsQ0FBUztZQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDO0tBR0Y7SUFmcUIsd0JBQVksZUFlakMsQ0FBQTtJQUNELGlCQUFrQyxTQUFRLFdBQVc7UUFDbkQsWUFBWSxPQUEwQyxFQUFTLElBQVcsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFEOEMsTUFBQyxHQUFELENBQUMsQ0FBeUI7UUFFekYsQ0FBQztRQUNNLFFBQVE7WUFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztRQUNoRCxDQUFDO1FBQ00sU0FBUyxDQUFDLEdBQVc7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ00sV0FBVyxDQUFDLElBQWlCLEVBQUUsQ0FBUztZQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUdGO0lBZnFCLHVCQUFXLGNBZWhDLENBQUE7SUFDRCxpQkFBa0MsU0FBUSxXQUFXO1FBQ25ELFlBQVksT0FBOEIsRUFBUyxLQUFZLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBUyxLQUFZLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEgsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRGtDLE9BQUUsR0FBRixFQUFFLENBQXlCO1lBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFFbEgsQ0FBQztRQUNNLFFBQVE7WUFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1FBQ3ZFLENBQUM7UUFDTSxTQUFTLENBQUMsR0FBVztZQUMxQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNNLFdBQVcsQ0FBQyxJQUFpQixFQUFFLENBQVM7WUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUYsQ0FBQztLQUdGO0lBaEJxQix1QkFBVyxjQWdCaEMsQ0FBQTtJQUNELGlCQUFrQyxTQUFRLFdBQVc7UUFDbkQsWUFBWSxPQUFrQixFQUFTLEtBQVksSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFTLEtBQVksSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFTLEtBQVksSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4SSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFEc0IsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7WUFBUyxPQUFFLEdBQUYsRUFBRSxDQUF5QjtZQUFTLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBRTFJLENBQUM7UUFDTSxRQUFRO1lBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1FBQzdGLENBQUM7UUFDTSxTQUFTLENBQUMsR0FBVztZQUMxQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEcsQ0FBQztRQUNNLFdBQVcsQ0FBQyxJQUFpQixFQUFFLENBQVM7WUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvSCxDQUFDO0tBR0Y7SUFoQnFCLHVCQUFXLGNBZ0JoQyxDQUFBO0lBRUQsZUFBdUIsU0FBUSxXQUFXO1FBR3hDLFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQztZQUM1RCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNNLGFBQWEsQ0FBQyxDQUFRO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQ0Y7SUFaWSxxQkFBUyxZQVlyQixDQUFBO0lBQ0QsZUFBdUIsU0FBUSxXQUFXO1FBR3hDLFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQztZQUM1RCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNNLGFBQWEsQ0FBQyxDQUFRO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQ0Y7SUFaWSxxQkFBUyxZQVlyQixDQUFBO0lBRUQsZUFBdUIsU0FBUSxXQUFXO1FBQ3hDO1lBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUNNLFFBQVE7WUFDYixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUNNLFNBQVMsQ0FBQyxHQUFXO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDTSxlQUFlO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDTSxXQUFXLENBQUMsSUFBZSxFQUFFLENBQVM7WUFDM0MsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7UUFDekIsQ0FBQztLQUNGO0lBaEJZLHFCQUFTLFlBZ0JyQixDQUFBO0lBRUQsZUFBdUIsU0FBUSxXQUFXO1FBR3hDLFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQztZQUM1RCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNNLGFBQWEsQ0FBQyxDQUFRO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQ0Y7SUFaWSxxQkFBUyxZQVlyQixDQUFBO0lBQ0QsZUFBdUIsU0FBUSxXQUFXO1FBR3hDLFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQztZQUM1RCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNNLGFBQWEsQ0FBQyxDQUFRO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQ0Y7SUFaWSxxQkFBUyxZQVlyQixDQUFBO0lBRUQseUJBQWlDLFNBQVEsWUFBWTtRQUNuRCxZQUFZLElBQVksQ0FBQztZQUN2QixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDTSxhQUFhLENBQUMsQ0FBUztZQUM1QixNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ25DLENBQUM7S0FDRjtJQVZZLCtCQUFtQixzQkFVL0IsQ0FBQTtJQUNELHlCQUFpQyxTQUFRLFlBQVk7UUFDbkQsWUFBWSxJQUFZLENBQUM7WUFDdkIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBQ00sYUFBYSxDQUFDLENBQVM7WUFDNUIsTUFBTSxDQUFDLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNNLGVBQWU7WUFDcEIsTUFBTSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0tBQ0Y7SUFWWSwrQkFBbUIsc0JBVS9CLENBQUE7SUFFRCx1QkFBK0IsU0FBUSxZQUFZO1FBQ2pELFlBQVksSUFBWSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNNLGFBQWEsQ0FBQyxDQUFTO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDTSxlQUFlO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDakMsQ0FBQztLQUNGO0lBVlksNkJBQWlCLG9CQVU3QixDQUFBO0lBQ0QsdUJBQStCLFNBQVEsWUFBWTtRQUNqRCxZQUFZLElBQVksQ0FBQztZQUN2QixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDTSxhQUFhLENBQUMsQ0FBUztZQUM1QixNQUFNLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7S0FDRjtJQVZZLDZCQUFpQixvQkFVN0IsQ0FBQTtJQUVELHFCQUE2QixTQUFRLFdBQVc7UUFHOUMsWUFBWSxJQUFvQixJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQW9CLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLENBQVU7WUFDM0osTUFBTSxFQUFFLEdBQVUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBVyxDQUFDLENBQUM7WUFDckUsTUFBTSxFQUFFLEdBQVUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFXLEVBQUUsQ0FBVyxDQUFDLENBQUM7WUFDL0UsTUFBTSxDQUFDLEdBQVUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFXLEVBQUUsQ0FBVyxDQUFDLENBQUM7WUFDOUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFDTSxhQUFhLENBQUMsRUFBUyxFQUFFLEVBQVMsRUFBRSxDQUFRO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDTSxlQUFlO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FDRjtJQWZZLDJCQUFlLGtCQWUzQixDQUFBO0lBQ0QscUJBQTZCLFNBQVEsV0FBVztRQUc5QyxZQUFZLElBQW9CLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFvQixJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVTtZQUMzSixNQUFNLEVBQUUsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUNyRSxNQUFNLEVBQUUsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQVcsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUMvRSxNQUFNLENBQUMsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQVcsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUM5RSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNNLGFBQWEsQ0FBQyxFQUFTLEVBQUUsRUFBUyxFQUFFLENBQVE7WUFDakQsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNNLGVBQWU7WUFDcEIsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUNGO0lBZlksMkJBQWUsa0JBZTNCLENBQUE7SUFFRCwyQkFBbUMsU0FBUSxXQUFXO1FBR3BELFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQW9CLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFVLEVBQUUsQ0FBVTtZQUMxRyxNQUFNLEVBQUUsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQVcsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUMvRSxNQUFNLENBQUMsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQVcsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUM5RSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ00sYUFBYSxDQUFDLEVBQVMsRUFBRSxDQUFRO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FDRjtJQWRZLGlDQUFxQix3QkFjakMsQ0FBQTtJQUNELDJCQUFtQyxTQUFRLFdBQVc7UUFHcEQsWUFBWSxJQUFvQixJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQVUsRUFBRSxDQUFVO1lBQzFHLE1BQU0sRUFBRSxHQUFVLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBVyxFQUFFLENBQVcsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sQ0FBQyxHQUFVLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBVyxFQUFFLENBQVcsQ0FBQyxDQUFDO1lBQzlFLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDTSxhQUFhLENBQUMsRUFBUyxFQUFFLENBQVE7WUFDdEMsTUFBTSxDQUFDLElBQUkscUJBQXFCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDTSxlQUFlO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDckMsQ0FBQztLQUNGO0lBZFksaUNBQXFCLHdCQWNqQyxDQUFBO0lBRUQseUJBQWlDLFNBQVEsV0FBVztRQUdsRCxZQUFZLElBQW9CLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFvQixJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBVSxFQUFFLENBQVU7WUFDMUcsTUFBTSxFQUFFLEdBQVUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFXLEVBQUUsQ0FBVyxDQUFDLENBQUM7WUFDL0UsTUFBTSxDQUFDLEdBQVUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFXLEVBQUUsQ0FBVyxDQUFDLENBQUM7WUFDOUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNNLGFBQWEsQ0FBQyxFQUFTLEVBQUUsQ0FBUTtZQUN0QyxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNNLGVBQWU7WUFDcEIsTUFBTSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0tBQ0Y7SUFkWSwrQkFBbUIsc0JBYy9CLENBQUE7SUFDRCx5QkFBaUMsU0FBUSxXQUFXO1FBR2xELFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQW9CLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFVLEVBQUUsQ0FBVTtZQUMxRyxNQUFNLEVBQUUsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQVcsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUMvRSxNQUFNLENBQUMsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQVcsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUM5RSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ00sYUFBYSxDQUFDLEVBQVMsRUFBRSxDQUFRO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ25DLENBQUM7S0FDRjtJQWRZLCtCQUFtQixzQkFjL0IsQ0FBQTtJQUVELCtCQUF1QyxTQUFRLFdBQVc7UUFHeEQsWUFBWSxJQUFvQixJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBWSxDQUFDO1lBQzVELEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ00sYUFBYSxDQUFDLENBQVE7WUFDM0IsTUFBTSxDQUFDLElBQUkseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNNLGVBQWU7WUFDcEIsTUFBTSxDQUFDLElBQUkseUJBQXlCLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0tBQ0Y7SUFaWSxxQ0FBeUIsNEJBWXJDLENBQUE7SUFDRCwrQkFBdUMsU0FBUSxXQUFXO1FBR3hELFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQVksQ0FBQztZQUM1RCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNNLGFBQWEsQ0FBQyxDQUFRO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDTSxlQUFlO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLHlCQUF5QixFQUFFLENBQUM7UUFDekMsQ0FBQztLQUNGO0lBWlkscUNBQXlCLDRCQVlyQyxDQUFBO0lBRUQsV0FBNEIsU0FBUSxXQUFXO1FBQzdDLFlBQVksT0FBa0IsRUFBUyxJQUFXLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBUyxJQUFXLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBUyxjQUFzQixDQUFDLEVBQVMsV0FBb0IsS0FBSyxFQUFTLGlCQUEwQixJQUFJO1lBQzNNLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQURzQixNQUFDLEdBQUQsQ0FBQyxDQUF5QjtZQUFTLE1BQUMsR0FBRCxDQUFDLENBQXlCO1lBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7WUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtZQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUU3TSxDQUFDO1FBQ00sUUFBUTtZQUNiLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDakksQ0FBQztRQUNNLFNBQVMsQ0FBQyxHQUFXO1lBQzFCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pJLENBQUM7UUFDTSxXQUFXLENBQUMsSUFBVyxFQUFFLENBQVM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLHFCQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMU8sQ0FBQztLQUdGO0lBaEJxQixpQkFBSyxRQWdCMUIsQ0FBQTtJQUVELGNBQXNCLFNBQVEsS0FBSztRQUdqQyxZQUFZLElBQW9CLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFvQixJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBbUIsRUFBRSxDQUFvQixFQUFFLENBQW9CLEVBQUUsQ0FBVyxFQUFFLENBQVc7WUFDN0ssTUFBTSxDQUFDLEdBQVUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBVyxDQUFDLENBQUM7WUFDcEUsTUFBTSxDQUFDLEdBQVUsQ0FBQyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFXLEVBQUUsQ0FBVyxDQUFDLENBQUM7WUFDOUUsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1lBQzVCLElBQUksUUFBUSxHQUFZLEtBQUssQ0FBQztZQUM5QixJQUFJLGNBQWMsR0FBWSxJQUFJLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLGFBQUssSUFBSSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsV0FBVyxHQUFHLENBQVcsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUM3QixRQUFRLEdBQUcsQ0FBWSxDQUFDO2dCQUMxQixDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLGNBQWMsR0FBRyxDQUFZLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsV0FBVyxHQUFHLENBQVcsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUM3QixRQUFRLEdBQUcsQ0FBWSxDQUFDO2dCQUMxQixDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLGNBQWMsR0FBRyxDQUFZLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNNLGFBQWEsQ0FBQyxDQUFRLEVBQUUsQ0FBUSxFQUFFLFdBQW1CLEVBQUUsUUFBaUIsRUFBRSxjQUFjO1lBQzdGLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNNLGVBQWU7WUFDcEIsTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQztLQUNGO0lBdENZLG9CQUFRLFdBc0NwQixDQUFBO0lBQ0QsY0FBc0IsU0FBUSxLQUFLO1FBR2pDLFlBQVksSUFBb0IsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQW9CLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFtQixFQUFFLENBQW9CLEVBQUUsQ0FBb0IsRUFBRSxDQUFXLEVBQUUsQ0FBVztZQUM3SyxNQUFNLENBQUMsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUNwRSxNQUFNLENBQUMsR0FBVSxDQUFDLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLENBQVcsRUFBRSxDQUFXLENBQUMsQ0FBQztZQUM5RSxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7WUFDNUIsSUFBSSxRQUFRLEdBQVksS0FBSyxDQUFDO1lBQzlCLElBQUksY0FBYyxHQUFZLElBQUksQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksYUFBSyxJQUFJLENBQUMsWUFBWSxhQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUM3QixXQUFXLEdBQUcsQ0FBVyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLFFBQVEsR0FBRyxDQUFZLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsY0FBYyxHQUFHLENBQVksQ0FBQztnQkFDaEMsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUM3QixXQUFXLEdBQUcsQ0FBVyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLFFBQVEsR0FBRyxDQUFZLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsY0FBYyxHQUFHLENBQVksQ0FBQztnQkFDaEMsQ0FBQztZQUNILENBQUM7WUFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQ00sYUFBYSxDQUFDLENBQVEsRUFBRSxDQUFRLEVBQUUsV0FBbUIsRUFBRSxRQUFpQixFQUFFLGNBQWM7WUFDN0YsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ00sZUFBZTtZQUNwQixNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQ0Y7SUF0Q1ksb0JBQVEsV0FzQ3BCLENBQUE7QUFDSCxDQUFDLEVBdlpnQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQXVaM0IifQ==

/***/ }),
/* 68 */
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
/* 69 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3cmFwcGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG9EQUF5QztBQUV6QztJQUNFLFlBQW1CLElBQVksQ0FBQztRQUFiLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFBRyxDQUFDO0lBQzdCLFFBQVE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFzQyxFQUFFLElBQVk7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTSxHQUFHLENBQUMsT0FBc0MsRUFBRSxJQUFZLEVBQUUsUUFBd0I7UUFDdkYsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNNLFdBQVcsQ0FBQyxJQUFtQixFQUFFLENBQVM7UUFDL0MsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLHFCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBckJELHNDQXFCQztBQUVEO0lBQ0UsWUFBbUIsTUFBVyxFQUFFO1FBQWIsUUFBRyxHQUFILEdBQUcsQ0FBVTtJQUVoQyxDQUFDO0lBQ00sUUFBUTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ00sS0FBSyxDQUFDLEdBQWtCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7SUFDSCxDQUFDO0lBQ00sR0FBRyxDQUFDLE9BQXNDLEVBQUUsSUFBWTtRQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFzQyxFQUFFLElBQVksRUFBRSxRQUEwQjtRQUN6RixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBQ00sV0FBVyxDQUFDLElBQXFCLEVBQUUsQ0FBUztRQUNqRCxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDRjtBQXhCRCxvQ0F3QkMifQ==

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(71));
__export(__webpack_require__(72));
__export(__webpack_require__(73));
__export(__webpack_require__(74));
__export(__webpack_require__(75));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6Qiw4QkFBeUI7QUFDekIsNkJBQXdCO0FBQ3hCLDRCQUF1QjtBQUN2QixpQ0FBNEIifQ==

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
const transform_1 = __webpack_require__(5);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
const transform_1 = __webpack_require__(5);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
const transform_1 = __webpack_require__(5);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
const transform_1 = __webpack_require__(5);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpolation_1 = __webpack_require__(1);
const transform_1 = __webpack_require__(5);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(77));
__export(__webpack_require__(6));
__export(__webpack_require__(4));
const FilterPrimitives = __webpack_require__(78);
exports.FilterPrimitives = FilterPrimitives;
const NonRenderables = __webpack_require__(83);
exports.NonRenderables = NonRenderables;
const Renderables = __webpack_require__(86);
exports.Renderables = Renderables;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUFtQztBQUNuQyw4QkFBeUI7QUFDekIsc0NBQWlDO0FBQ2pDLGtDQUE2QjtBQUU3Qix3REFBd0Q7QUFLdEQsNENBQWdCO0FBSmxCLG9EQUFvRDtBQUtsRCx3Q0FBYztBQUpoQiw2Q0FBNkM7QUFLM0Msa0NBQVcifQ==

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __webpack_require__(3);
const blend_1 = __webpack_require__(37);
const color_matrix_1 = __webpack_require__(38);
const component_transfer_1 = __webpack_require__(39);
const composite_1 = __webpack_require__(40);
const convolve_matrix_1 = __webpack_require__(41);
const displacement_map_1 = __webpack_require__(42);
const flood_1 = __webpack_require__(43);
const gaussian_blur_1 = __webpack_require__(44);
const image_1 = __webpack_require__(45);
const diffuse_1 = __webpack_require__(46);
const distant_1 = __webpack_require__(47);
const point_1 = __webpack_require__(48);
const spot_1 = __webpack_require__(49);
const specular_1 = __webpack_require__(50);
const merge_1 = __webpack_require__(51);
const morphology_1 = __webpack_require__(52);
const offset_1 = __webpack_require__(53);
const tile_1 = __webpack_require__(54);
const transfer_function_1 = __webpack_require__(55);
const turbulence_1 = __webpack_require__(56);
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
        this.context.addDef(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsd0NBQXFDO0FBR3JDLHFEQUE0RDtBQUM1RCxtRUFBeUU7QUFDekUsK0VBQXFGO0FBQ3JGLDZEQUFvRTtBQUNwRSx5RUFBMEc7QUFDMUcsMkVBQTZHO0FBQzdHLHFEQUE0RDtBQUM1RCxxRUFBMkU7QUFDM0UscURBQTREO0FBQzVELGtFQUFtRztBQUVuRywrRUFBaUY7QUFDakYsMkVBQTZFO0FBQzdFLHlFQUEyRTtBQUMzRSxvRUFBc0c7QUFDdEcscURBQTREO0FBQzVELCtEQUFzRTtBQUN0RSx1REFBOEQ7QUFDOUQsbURBQTBEO0FBQzFELDZFQUFnSDtBQUNoSCwrREFBNkY7QUFzQjdGLE1BQU0sS0FBSyxHQUFHLENBQU8sQ0FBSSxFQUFFLENBQUksRUFBUyxFQUFFO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixZQUFvQixTQUFRLGlCQUEyRDtJQUVyRixZQUFtQixPQUFnQjtRQUNqQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0s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

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(37));
__export(__webpack_require__(38));
__export(__webpack_require__(39));
__export(__webpack_require__(40));
__export(__webpack_require__(41));
__export(__webpack_require__(42));
__export(__webpack_require__(43));
__export(__webpack_require__(44));
__export(__webpack_require__(45));
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(53));
__export(__webpack_require__(54));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
const Lighting = __webpack_require__(79);
exports.Lighting = Lighting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZCQUF3QjtBQUN4QixvQ0FBK0I7QUFDL0IsMENBQXFDO0FBQ3JDLGlDQUE0QjtBQUM1Qix1Q0FBa0M7QUFDbEMsd0NBQW1DO0FBQ25DLDZCQUF3QjtBQUN4QixxQ0FBZ0M7QUFDaEMsNkJBQXdCO0FBQ3hCLDZCQUF3QjtBQUN4QixrQ0FBNkI7QUFDN0IsOEJBQXlCO0FBQ3pCLDRCQUF1QjtBQUN2Qix5Q0FBb0M7QUFDcEMsa0NBQTZCO0FBRTdCLHVDQUF1QztBQUdyQyw0QkFBUSJ9

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(80));
__export(__webpack_require__(46));
__export(__webpack_require__(50));
const LightSource = __webpack_require__(81);
exports.LightSource = LightSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE2QjtBQUM3QiwrQkFBMEI7QUFDMUIsZ0NBQTJCO0FBRTNCLDhDQUE4QztBQUc1QyxrQ0FBVyJ9

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(82));
__export(__webpack_require__(47));
__export(__webpack_require__(48));
__export(__webpack_require__(49));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE2QjtBQUM3QiwrQkFBMEI7QUFDMUIsNkJBQXdCO0FBQ3hCLDRCQUF1QiJ9

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
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));
__export(__webpack_require__(13));
const PaintServers = __webpack_require__(84);
exports.PaintServers = PaintServers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1Qiw4QkFBeUI7QUFDekIsNEJBQXVCO0FBQ3ZCLG9DQUErQjtBQUUvQixnREFBZ0Q7QUFHOUMsb0NBQVkifQ==

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(12));
__export(__webpack_require__(14));
const Gradients = __webpack_require__(85);
exports.Gradients = Gradients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdDQUEyQjtBQUMzQiwrQkFBMEI7QUFFMUIseUNBQXlDO0FBR3ZDLDhCQUFTIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6Qiw4QkFBeUIifQ==

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(15));
__export(__webpack_require__(27));
__export(__webpack_require__(2));
__export(__webpack_require__(35));
const Shapes = __webpack_require__(87);
exports.Shapes = Shapes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdDQUEyQjtBQUMzQixzQ0FBaUM7QUFDakMsNkJBQXdCO0FBQ3hCLDZCQUF3QjtBQUN4Qiw2QkFBd0I7QUFDeEIsNEJBQXVCO0FBRXZCLG1DQUFtQztBQUdqQyx3QkFBTSJ9

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(33));
__export(__webpack_require__(34));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6QiwrQkFBMEI7QUFDMUIsNEJBQXVCO0FBQ3ZCLDRCQUF1QjtBQUN2QiwrQkFBMEI7QUFDMUIsZ0NBQTJCO0FBQzNCLDRCQUF1QiJ9

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZDZiYzUzMTk2YTFhZDVlNmE0ZCIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJwb2xhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2RpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL3BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3VtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUnhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL2NsaXAtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9saW5lYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9yYWRpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2V4dGVybmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9mb3JlaWduLW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9lbGxpcHNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5Z29uLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9yZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RleHQtY29udGVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvYmxlbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbG9yLW1hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29tcG9uZW50LXRyYW5zZmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbnZvbHZlLW1hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZGlzcGxhY2VtZW50LW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZmxvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2dhdXNzaWFuLWJsdXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2ltYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9kaWZmdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvZGlzdGFudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2Uvc3BvdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvc3BlY3VsYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21lcmdlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9tb3JwaG9sb2d5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9vZmZzZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3RyYW5zZmVyLWZ1bmN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy90dXJidWxlbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9lYXNpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvY29sb3ItbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL21hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9udW1iZXItb3B0aW9uYWwtbnVtYmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3BhdGgtc2VnbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvd3JhcHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL21hdHJpeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3JvdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3NjYWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3RyYW5zbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrdkI7Ozs7Ozs7QUNsQjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNIM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMmxCOzs7Ozs7O0FDYjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMmpCOzs7Ozs7O0FDZjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSyxHQUFHLEtBQUs7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdXhHOzs7Ozs7O0FDdEUzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSx3Q0FBd0Msc0JBQXNCLHNCQUFzQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHV5Qzs7Ozs7OztBQzVCM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVWOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMlc7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1XOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVc7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtWOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdWQ7Ozs7Ozs7QUNmM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVjs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVk7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVjs7Ozs7OztBQ1QzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVXOzs7Ozs7O0FDbEIzQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxzQkFBc0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1REFBdUQscUJBQXFCLElBQUk7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sR0FBRyxPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnJFOzs7Ozs7O0FDckQzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMm9EOzs7Ozs7O0FDOUMzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPLEdBQUcsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHU5Qzs7Ozs7OztBQ2hDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VDs7Ozs7OztBQ2YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0ZBQWtGLFlBQVk7QUFDOUY7QUFDQTtBQUNBLHFFQUFxRSxZQUFZO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLDBCQUEwQjtBQUM5RztBQUNBO0FBQ0Esc0RBQXNELHVCQUF1QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsWUFBWTtBQUM5RjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsWUFBWTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdWlOOzs7Ozs7O0FDdkszQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK2E7Ozs7Ozs7QUN0QjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrTjs7Ozs7OztBQ1YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJDQUEyQyxtSjs7Ozs7OztBQ0YzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtNOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsMkNBQTJDLG1KOzs7Ozs7O0FDRjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1QOzs7Ozs7O0FDWDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK007Ozs7Ozs7QUNUM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkNBQTJDLCtLOzs7Ozs7O0FDUDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtUjs7Ozs7OztBQ2IzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1RIiwiZmlsZSI6ImRpc3Qvc2F2YWdlZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUnhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTYXZhZ2VET01cIiwgW1wiUnhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2F2YWdlRE9NXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUnhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNhdmFnZURPTVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJ4XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZkNmJjNTMxOTZhMWFkNWU2YTRkIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEZpbHRlclByaW1pdGl2ZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgbmFtZSwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIuY29udGV4dCwgbmFtZSwgYXR0cnMpO1xyXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZWQgPSBmYWxzZTtcclxuICAgICAgICBmaWx0ZXIuYWRkKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9yZWZlcmVuY2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInJlc3VsdFwiLCB0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GaWx0ZXJQcmltaXRpdmUgPSBGaWx0ZXJQcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHNkR1Z5TFhCeWFXMXBkR2wyWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVpwYkhSbGNpMXdjbWx0YVhScGRtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSFFTeDNRMEZCY1VNN1FVRnBRbkpETEhGQ1FVRjFSQ3hUUVVGUkxHbENRVUZ0UlR0SlFVVm9TU3haUVVGWkxFMUJRV01zUlVGQlJTeEpRVUZaTEVWQlFVVXNTMEZCSzBNN1VVRkRka1lzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJqZENMR2RDUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJ6RkNMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVOTkxGRkJRVkU3VVVGRFlpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkNMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlpTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRlRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGFrSXNRMEZCUXp0RFFVTkdPMEZCWWtRc01FTkJZVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5fbGVycCA9IChhLCBiLCB0KSA9PiBhICsgKChiIC0gYSkgKiB0KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1MFpYSndiMnhoZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1sdWRHVnljRzlzWVhScGIyNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQllTeFJRVUZCTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW50ZXJwb2xhdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgQWJzdHJhY3RTaGFwZSBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RTaGFwZSA9IEFic3RyYWN0U2hhcGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyaGhjR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnphR0Z3WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERoRFFVRjNSVHRCUVUxNFJTeHRRa0ZCTmtRc1UwRkJVU3dyUWtGQkswTTdRMEZCUnp0QlFVRjJTQ3h6UTBGQmRVZ2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGUudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvbi9yZW5kZXJlclwiKTtcclxuY29uc3QgYXR0cmlidXRlXzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVcIik7XHJcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xyXG5jb25zdCByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcclxuY29uc3QgYm94XzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzL2JveFwiKTtcclxuY29uc3QgcmFuZG9tSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XHJcbmNsYXNzIEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZWwsIGF0dHJzLCBfaWQgPSByYW5kb21JZCgpKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLl9pZCA9IF9pZDtcclxuICAgICAgICB0aGlzLl9keW5hbWljU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZSA9IHRoaXMuY29udGV4dC53aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGNvbnN0YW50c18xLlhNTE5TLCBlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRDaGlsZCh0aGlzLl9ub2RlKTtcclxuICAgICAgICAgICAgaWYgKGF0dHJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhhdHRycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLl9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlID0gZWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5fbm9kZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICAgICAgaWYgKGlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgPSB0aGlzLmNvbnRleHQud2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbm9kZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHVybCgjJHt0aGlzLl9pZH0pYDtcclxuICAgIH1cclxuICAgIHJlbmRlckF0dHJpYnV0ZShuYW1lLCB2YWwpIHtcclxuICAgICAgICBpZiAoYXR0cmlidXRlXzEuaXNBdHRyaWJ1dGUodmFsKSkge1xyXG4gICAgICAgICAgICB2YWwuc2V0KHRoaXMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsLmpvaW4oXCJcXHRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgU3RyaW5nKHZhbCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEF0dHJpYnV0ZShuYW1lLCB2YWwpIHtcclxuICAgICAgICByZW5kZXJlcl8xLlJlbmRlcmVyLmdldEluc3RhbmNlKCkucXVldWVVcGRhdGUodGhpcywgbmFtZSwgdmFsKTtcclxuICAgIH1cclxuICAgIHNldEF0dHJpYnV0ZXMoYXR0cnMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gYXR0cnMpIHtcclxuICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJzW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkICYmIGF0dHIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLl9ub2RlLmdldEF0dHJpYnV0ZShuYW1lKSB8fCB0aGlzLl9zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiAodmFsID09PSBcIlwiIHx8IHZhbCA9PT0gXCJub25lXCIpID8gbnVsbCA6IHZhbDtcclxuICAgIH1cclxuICAgIGNvcHlTdHlsZUZyb20oZWwsIGluY2x1ZGVFeGNsdWRlLCBkZWZhdWx0SW5jbHVkZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gZWwuX25vZGUuYXR0cmlidXRlcztcclxuICAgICAgICBpZiAoaW5jbHVkZUV4Y2x1ZGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRXhjbHVkZVthdHRyXSA9PT0gdHJ1ZSB8fCBkZWZhdWx0SW5jbHVkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW2F0dHJdID0gZWwuX3N0eWxlLmdldFByb3BlcnR5VmFsdWUoYXR0cik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRycy5pdGVtKGkpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVthdHRyXSA9IGVsLl9zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGF0dHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhzdHlsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRFdmVudChldmVudCkge1xyXG4gICAgICAgIHJldHVybiByeGpzXzEuT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5fbm9kZSwgZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJvdW5kaW5nQm94KCkge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgYm94XzEuQm94KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGFkZChlbCkge1xyXG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLmFwcGVuZENoaWxkKGVsLl9ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX25vZGUuY2hpbGROb2RlcztcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaChuZXcgRWxlbWVudCh0aGlzLmNvbnRleHQsIGNoaWxkcmVuLml0ZW0oaSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgfVxyXG4gICAgY2xvbmUoZGVlcCA9IHRydWUsIGlkID0gcmFuZG9tSWQoKSkge1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgRWxlbWVudCh0aGlzLmNvbnRleHQsIHRoaXMuX25vZGUuY2xvbmVOb2RlKGRlZXApKTtcclxuICAgICAgICBjb3B5Ll9pZCA9IGlkO1xyXG4gICAgICAgIGNvcHkuX25vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgY29weS5faWQpO1xyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgY2xvbmVOb2RlKGRlZXAgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0aGlzLl9ub2RlLmNsb25lTm9kZShkZWVwKTtcclxuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByYW5kb21JZCgpKTtcclxuICAgICAgICByZXR1cm4gY2xvbmU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWld4bGJXVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltVnNaVzFsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4dFJFRkJhVVU3UVVGRGFrVXNNa05CUVRCRE8wRkJSVEZETERKRFFVRnZRenRCUVVsd1F5d3JRa0ZCZVVRN1FVRkRla1FzTUVOQlFYVkRPMEZCUlhaRExFMUJRVTBzVVVGQlVTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlNTOUVPMGxCVDBVc1dVRkJiVUlzVDBGQlowSXNSVUZCUlN4RlFVRm5RaXhGUVVGRkxFdEJRVEpDTEVWQlFWVXNUVUZCWXl4UlFVRlJMRVZCUVVVN1VVRkJha2NzV1VGQlR5eEhRVUZRTEU5QlFVOHNRMEZCVXp0UlFVRjVSQ3hSUVVGSExFZEJRVWdzUjBGQlJ5eERRVUZ4UWp0UlFVbzFSeXd3UWtGQmNVSXNSMEZCUnl4RlFVRnJSQ3hEUVVGRE8xRkJTMnBHTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEdsQ1FVRkxMRVZCUVVVc1JVRkJSU3hEUVVGUkxFTkJRVU03V1VGRE5VVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTJ4RExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU40UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlF6VkNMRU5CUVVNN1dVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkRMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMmhDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNwRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU5vUWl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNeFF5eERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBGTEVOQlFVTTdTVUZEUkN4SlFVRlhMRVZCUVVVN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJRMFFzU1VGQlZ5eEpRVUZKTzFGQlEySXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGNFSXNRMEZCUXp0SlFVTk5MRkZCUVZFN1VVRkRZaXhOUVVGTkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVU5OTEdWQlFXVXNRMEZCWjBNc1NVRkJWU3hGUVVGRkxFZEJRWEZDTzFGQlEzSkdMRVZCUVVVc1EwRkJReXhEUVVGRExIVkNRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pDTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzUkNMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZET1VJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9SQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wTXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3haUVVGWkxFTkJRV2RETEVsQlFWVXNSVUZCUlN4SFFVRnhRanRSUVVOc1JpeHRRa0ZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQk9FUXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU51U0N4RFFVRkRPMGxCUTAwc1lVRkJZU3hEUVVGRExFdEJRVEJDTzFGQlF6ZERMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRla0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJhVU1zUTBGQlF6dFpRVU42UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFdEJRVXNzVTBGQlV5eEpRVUZKTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU40UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhEUVVGRE8xRkJRMGdzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WlFVRlpMRU5CUVdkRExFbEJRVlU3VVVGRE0wUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5vUml4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeEpRVUZKTEVkQlFVY3NTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRja1FzUTBGQlF6dEpRVWROTEdGQlFXRXNRMEZCUXl4RlFVRjNReXhGUVVGRkxHTkJRWEZFTEVWQlFVVXNhVUpCUVRCQ0xFbEJRVWs3VVVGRGJFb3NUVUZCVFN4TFFVRkxMRWRCUVVjc1JVRkJaMElzUTBGQlF6dFJRVU12UWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTnNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU4wUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRGFFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRWGRDTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZUVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMnBFTEVOQlFVTTdXVUZEU0N4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTNSRExFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTm9ReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOcVJDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTkVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWTkxGRkJRVkVzUTBGQk5rSXNTMEZCV1R0UlFVTjBSQ3hOUVVGTkxFTkJRVU1zYVVKQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJSVVFzU1VGQlZ5eFhRVUZYTzFGQlEzQkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dFJRVU5vUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1JVRkJPRU03VVVGRGRrUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3haUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETjBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROMElzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMjVETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWenRSUVVOb1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF6dFJRVU4yUXl4TlFVRk5MRkZCUVZFc1IwRkJiME1zUlVGQlJTeERRVUZETzFGQlEzSkVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUTNwRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU16UlN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFOUJRV2RDTEVsQlFVa3NSVUZCUlN4TFFVRmhMRkZCUVZFc1JVRkJSVHRSUVVONFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJNRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTI1SExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU40UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZUTEZOQlFWTXNRMEZCUXl4UFFVRm5RaXhKUVVGSk8xRkJRM1JETEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCVVN4RFFVRkRPMUZCUTJoRUxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGNrTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVObUxFTkJRVU03UTBGRFJqdEJRVzVJUkN3d1FrRnRTRU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEFic3RyYWN0UmVuZGVyYWJsZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxufVxyXG5leHBvcnRzLkFic3RyYWN0UmVuZGVyYWJsZSA9IEFic3RyYWN0UmVuZGVyYWJsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdVpHVnlZV0pzWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkpsYm1SbGNtRmliR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3gzUTBGQmNVTTdRVUZ0UW5KRExIZENRVUVyUnl4VFFVRlJMR2xDUVVFMFJEdERRVUZITzBGQlFYUk1MR2RFUVVGelRDSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnR5cGV9KCR7dGhpcy5hcmdzKCl9KWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJncyhjc3Muc3Vic3RyaW5nKGNzcy5pbmRleE9mKFwiKFwiKSArIDEsIGNzcy5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFyZ3MoY3NzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIgJiYgdG9rc1sxXSA9PT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBjc3MuaW5kZXhPZih0aGlzLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoY3NzLnN1YnN0cmluZyhpZHgsIGNzcy5pbmRleE9mKFwiKVwiKSArIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShudWxsKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IFN0cmluZygob3ZlcnJpZGUgPT09IHVuZGVmaW5lZCkgPyB0aGlzIDogb3ZlcnJpZGUpO1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIgJiYgdG9rc1sxXSA9PT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGNzcy5pbmRleE9mKHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIGAke2Nzcy5zdWJzdHIoMCwgc3RhcnQpfSR7c3RyfSR7Y3NzLnN1YnN0cihjc3MuaW5kZXhPZihcIilcIikgKyAxKX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHN0cik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCBzdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyYW5zZm9ybSA9IFRyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTm1iM0p0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkSEpoYm5ObWIzSnRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRTdTVUZEUlN4WlFVRnRRaXhKUVVGeFJUdFJRVUZ5UlN4VFFVRkpMRWRCUVVvc1NVRkJTU3hEUVVGcFJUdEpRVUZITEVOQlFVTTdTVUZGY2tZc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0zUlN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ6UXl4RlFVRkZMRWxCUVZrN1VVRkROMFFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMME1zVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOU0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTnVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE9VUXNRMEZCUXp0WlFVTklMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGelF5eEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRnZRanRSUVVOdVJpeE5RVUZOTEVkQlFVY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZETDBRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBNc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlNMRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU55UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVObUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEzQkhMRU5CUVVNN1owSkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTA0c1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzSkRMRU5CUVVNN1dVRkRTQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGNrTXNRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyeERMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wTkJSVVk3UVVFdlEwUXNPRUpCSzBOREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybS50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcclxuY2xhc3MgQWJzdHJhY3ROb25SZW5kZXJhYmxlIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3ROb25SZW5kZXJhYmxlID0gQWJzdHJhY3ROb25SZW5kZXJhYmxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libTl1TFhKbGJtUmxjbUZpYkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp1YjI0dGNtVnVaR1Z5WVdKc1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxIZERRVUZ4UXp0QlFVOXlReXd5UWtGQk1rWXNVMEZCVVN4cFFrRkJiMFk3UTBGQlJ6dEJRVUV4VEN4elJFRkJNRXdpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCBkaW1lbnNpb25fMSA9IHJlcXVpcmUoXCIuL2RpbWVuc2lvblwiKTtcclxuZXhwb3J0cy5fTGVuZ3RoUGFyc2UgPSAoY3NzKSA9PiB7XHJcbiAgICBjb25zdCBtID0gY3NzLm1hdGNoKC8oXFxkK3xcXGQrXFwuXFxkKykoXFx3K3wlKS9pKTtcclxuICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24ocGFyc2VGbG9hdChtWzFdKSwgbVsyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChjc3MpO1xyXG59O1xyXG5leHBvcnRzLl9MZW5ndGhJbnRlcnBvbGF0ZSA9IChhLCBiLCB0KSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGEgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuaW50ZXJwb2xhdGUoYSwgdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pbnRlcnBvbGF0ZShuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKGIsIGEudW5pdCksIDEgLSB0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuaW50ZXJwb2xhdGUobmV3IGRpbWVuc2lvbl8xLkRpbWVuc2lvbihhLCBiLnVuaXQpLCB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoYSwgYiwgdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbUZ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbUpoYzJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN4dlJFRkJlVU03UVVGRmVrTXNNa05CUVhkSE8wRkJZek5HTEZGQlFVRXNXVUZCV1N4SFFVRkhMRU5CUVVNc1IwRkJWeXhGUVVGVkxFVkJRVVU3U1VGRGJFUXNUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhEUVVGRE8wbEJRemxETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyWXNUVUZCVFN4RFFVRkRMRWxCUVVrc2NVSkJRVk1zUTBGQlRTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRjRVFzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVrSXNRMEZCUXl4RFFVRkRPMEZCUlZjc1VVRkJRU3hyUWtGQmEwSXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZWTEVWQlFVVTdTVUZETlVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkNMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNM1FpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMSEZDUVVGVExFTkJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETjBRc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTk9MRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVUlzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3h4UWtGQlV5eERRVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZWtRc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMSEZDUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFFpeERRVUZETzBsQlEwZ3NRMEZCUXp0QlFVTklMRU5CUVVNc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9iYXNlLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jbGFzcyBEaW1lbnNpb24ge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUsIHVuaXQpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnZhbHVlfSR7dGhpcy51bml0fWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBjc3MubWF0Y2goLyhcXGQrfFxcZCtcXC5cXGQrKShcXHcrfCUpL2kpO1xyXG4gICAgICAgICAgICBpZiAobSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9QeCA9IERpbWVuc2lvbi5jb252ZXJ0W21bMl1dO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbVB4ID0gMSAvIERpbWVuc2lvbi5jb252ZXJ0W3RoaXMudW5pdF07XHJcbiAgICAgICAgICAgICAgICBpZiAodG9QeCAhPT0gdW5kZWZpbmVkICYmIGZyb21QeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24ocGFyc2VGbG9hdChtWzFdKSAqIHRvUHggKiBmcm9tUHgsIHRoaXMudW5pdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbihwYXJzZUZsb2F0KG1bMV0pLCBtWzJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKHBhcnNlRmxvYXQoY3NzKSwgdGhpcy51bml0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbigwLCB0aGlzLnVuaXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVuaXQgIT09IGZyb20udW5pdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b1B4ID0gRGltZW5zaW9uLmNvbnZlcnRbdGhpcy51bml0XTtcclxuICAgICAgICAgICAgY29uc3QgZnJvbVB4ID0gMSAvIERpbWVuc2lvbi5jb252ZXJ0W2Zyb20udW5pdF07XHJcbiAgICAgICAgICAgIGlmICh0b1B4ICE9PSB1bmRlZmluZWQgJiYgZnJvbVB4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnZhbHVlLCB0aGlzLnZhbHVlLCB0KSAqIHRvUHggKiBmcm9tUHgsIHRoaXMudW5pdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24oaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20udmFsdWUsIHRoaXMudmFsdWUsIHQpLCB0aGlzLnVuaXQpO1xyXG4gICAgfVxyXG59XHJcbkRpbWVuc2lvbi5jb252ZXJ0ID0ge1xyXG4gICAgcHg6IDEsXHJcbiAgICBpbjogOTYsXHJcbiAgICBjbTogMjU0IC8gOTYsXHJcbiAgICBtbTogMjUuNCAvIDk2LFxyXG4gICAgcHQ6IDMgLyA0LFxyXG4gICAgcGM6IDksXHJcbiAgICBkZWc6IDEsXHJcbiAgICBncmFkOiA5IC8gMTAsXHJcbiAgICByYWQ6IDE4MCAvIE1hdGguUEksXHJcbiAgICB0dXJuOiAzNjAsXHJcbn07XHJcbmV4cG9ydHMuRGltZW5zaW9uID0gRGltZW5zaW9uO1xyXG5jbGFzcyBQZXJjZW50YWdlIGV4dGVuZHMgRGltZW5zaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIFwiJVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBlcmNlbnRhZ2UgPSBQZXJjZW50YWdlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x0Wlc1emFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpHbHRaVzV6YVc5dUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc2IwUkJRWGxETzBGQlRYcERPMGxCWVVVc1dVRkJiVUlzUzBGQllTeEZRVUZUTEVsQlFWVTdVVUZCYUVNc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQlVUdFJRVUZUTEZOQlFVa3NSMEZCU2l4SlFVRkpMRU5CUVUwN1NVRkJSeXhEUVVGRE8wbEJRMmhFTEZGQlFWRTdVVUZEWWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOeVF5eERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dFpRVU01UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRaaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnlReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQll5eERRVUZETEVOQlFVTTdaMEpCUXpGRUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4VFFVRlRMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXk5RExFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCVHl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUXpGRkxFTkJRVU03WjBKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRk5MRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VRc1EwRkJRenRaUVVOSUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVOHNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTjZSQ3hEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJUeXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYzBNc1JVRkJSU3hKUVVGWk8xRkJRemRFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVhORExFVkJRVVVzU1VGQldTeEZRVUZGTEZGQlFUQkNPMUZCUTNwR0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemxETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRWEZDTEVWQlFVVXNRMEZCVXp0UlFVTnFSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRTFCUVUwc1NVRkJTU3hIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVdNc1EwRkJReXhEUVVGRE8xbEJRM0JFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRmpMRU5CUVVNc1EwRkJRenRaUVVNeFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1UwRkJVeXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNdlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVU4c2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETVVZc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVU4c2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRekZGTEVOQlFVTTdPMEZCY0VSakxHbENRVUZQTEVkQlFTdENPMGxCUTI1RUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEwd3NSVUZCUlN4RlFVRkZMRVZCUVVVN1NVRkRUaXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVWQlFVVTdTVUZEV2l4RlFVRkZMRVZCUVVVc1NVRkJTU3hIUVVGSExFVkJRVVU3U1VGRFlpeEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRWQ3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5NTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTA0c1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzBsQlExb3NSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJUdEpRVU5zUWl4SlFVRkpMRVZCUVVVc1IwRkJSenREUVVOV0xFTkJRVU03UVVGYVNpdzRRa0Z6UkVNN1FVRkZSQ3huUWtGQmQwSXNVMEZCVVN4VFFVRmpPMGxCUXpWRExGbEJRVmtzUzBGQllUdFJRVU4yUWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzQkNMRU5CUVVNN1EwRkRSanRCUVVwRUxHZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvZGltZW5zaW9uLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuWE1MTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbmV4cG9ydHMuWExJTksgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWMzUmhiblJ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl1YzNSaGJuUnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFXRXNVVUZCUVN4TFFVRkxMRWRCUVVjc05FSkJRVFJDTEVOQlFVTTdRVUZEY2tNc1VVRkJRU3hMUVVGTExFZEJRVWNzT0VKQlFUaENMRU5CUVVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25zdGFudHMudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9ICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3gocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgcGFyc2VGbG9hdCh0b2tzWzJdKSwgcGFyc2VGbG9hdCh0b2tzWzNdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzWCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NZID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1dpZHRoID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1syXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0hlaWdodCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbM10pO1xyXG4gICAgICAgICAgICBpZiAoY3NzWCAhPT0gbnVsbCAmJiBjc3NZICE9PSBudWxsICYmIGNzc1dpZHRoICE9PSBudWxsICYmIGNzc0hlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3gocGFyc2VGbG9hdChjc3NYKSwgcGFyc2VGbG9hdChjc3NZKSwgcGFyc2VGbG9hdChjc3NXaWR0aCksIHBhcnNlRmxvYXQoY3NzSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJveCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIG92ZXJyaWRlLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCBvdmVycmlkZS55LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1syXSwgb3ZlcnJpZGUud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzNdLCBvdmVycmlkZS5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCB0aGlzLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCB0aGlzLnkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzJdLCB0aGlzLndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1szXSwgdGhpcy5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3goYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLngsIHRoaXMueCwgdCksIGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS55LCB0aGlzLnksIHQpLCBiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ud2lkdGgsIHRoaXMud2lkdGgsIHQpLCBiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20uaGVpZ2h0LCB0aGlzLmhlaWdodCwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQm94ID0gQm94O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbTk0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZbTk0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzYVVOQlFXOUVPMEZCUlhCRU8wbEJRMFVzV1VGQmJVSXNRMEZCVXl4RlFVRlRMRU5CUVZNc1JVRkJVeXhMUVVGaExFVkJRVk1zVFVGQll6dFJRVUY0UlN4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGUk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCVVR0UlFVRlRMRlZCUVVzc1IwRkJUQ3hMUVVGTExFTkJRVkU3VVVGQlV5eFhRVUZOTEVkQlFVNHNUVUZCVFN4RFFVRlJPMGxCUVVjc1EwRkJRenRKUVVONFJpeFJRVUZSTzFGQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGxCUXpWRUxFTkJRVU03U1VGRFRTeExRVUZMTEVOQlFVTXNSMEZCYTBJN1VVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNrY3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVhORExFVkJRVVVzU1VGQldUdFJRVU0zUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5ETEUxQlFVMHNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zVFVGQlRTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1NVRkJTU3hSUVVGUkxFdEJRVXNzU1VGQlNTeEpRVUZKTEZOQlFWTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU01UlN4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVjc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhFTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRWE5ETEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVdNN1VVRkROMFVzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRUlzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRja1FzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU55UkN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTNwRUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNMVJDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU5xUkN4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTJwRUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGNrUXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzaEVMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNMElzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYkVRc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRemxETEVOQlFVTTdVVUZEU0N4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZUTEVWQlFVVXNRMEZCVXp0UlFVTnlReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNlVUpCUVd0Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhsQ1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeDVRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzZVVKQlFXdENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGREwwd3NRMEZCUXp0RFFVTkdPMEZCZEVSRUxHdENRWE5FUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvYm94LnRzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0sJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoYmFzZV8xLl9MZW5ndGhQYXJzZSh0b2tzWzBdKSwgYmFzZV8xLl9MZW5ndGhQYXJzZSh0b2tzWzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NYID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1swXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1kgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzFdKTtcclxuICAgICAgICAgICAgaWYgKGNzc1ggIT09IG51bGwgJiYgY3NzWSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludChiYXNlXzEuX0xlbmd0aFBhcnNlKGNzc1gpLCBiYXNlXzEuX0xlbmd0aFBhcnNlKGNzc1kpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCBvdmVycmlkZS54LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1sxXSwgb3ZlcnJpZGUueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHRoaXMueC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMV0sIHRoaXMueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS54LCB0aGlzLngsIHQpLCBiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ueSwgdGhpcy55LCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2ludCA9IFBvaW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YjJsdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxHbERRVUZyUlR0QlFVVnNSVHRKUVVORkxGbEJRVzFDTEVOQlFWTXNSVUZCVXl4RFFVRlRPMUZCUVROQ0xFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWRTdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGUk8wbEJRVWNzUTBGQlF6dEpRVU16UXl4UlFVRlJPMUZCUTJJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhIUVVGclFqdFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXh0UWtGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxHMUNRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcENMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFYTkRMRVZCUVVVc1NVRkJXVHRSUVVNM1JDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFMUJRVTBzU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZMTEVsQlFVa3NTVUZCU1N4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtNc1RVRkJUU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEcxQ1FVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzYlVKQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5FTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcENMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFUXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmMwTXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJaMEk3VVVGREwwVXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGNrUXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkVMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTJwRUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOdVJDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMnhFTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTVReXhEUVVGRE8xRkJRMGdzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFTkJRVk03VVVGRGRrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExIbENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3g1UWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOcVJ5eERRVUZETzBOQlEwWTdRVUZvUkVRc2MwSkJaMFJESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvcG9pbnQudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRpbWVuc2lvbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2F0dHJpYnV0ZXMvZGltZW5zaW9uXCIpO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZWxlbWVudFwiKTtcclxuY29uc3QgcGFpbnRfc2VydmVyXzEgPSByZXF1aXJlKFwiLi4vcGFpbnQtc2VydmVyXCIpO1xyXG5jbGFzcyBTdG9wIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgb2Zmc2V0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwic3RvcFwiLCB7XHJcbiAgICAgICAgICAgIG9mZnNldDogbmV3IGRpbWVuc2lvbl8xLkRpbWVuc2lvbihvZmZzZXQgKiAxMDAsIFwiJVwiKSxcclxuICAgICAgICAgICAgXCJzdG9wLWNvbG9yXCI6IGNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RvcCA9IFN0b3A7XHJcbmNsYXNzIEFic3RyYWN0R3JhZGllbnQgZXh0ZW5kcyBwYWludF9zZXJ2ZXJfMS5BYnN0cmFjdFBhaW50U2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5hbWUsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIG5hbWUsIGF0dHJzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkRGVmKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BBcnIgPSBbXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdG9wcykuZm9yRWFjaChvZmZzZXQgPT4ge1xyXG4gICAgICAgICAgICBzdG9wQXJyLnB1c2gobmV3IFN0b3AoY29udGV4dCwgTnVtYmVyKG9mZnNldCksIHN0b3BzW29mZnNldF0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9wQXJyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub2Zmc2V0IC0gYi5vZmZzZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcEFyci5mb3JFYWNoKHMgPT4gdGhpcy5hZGQocykpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RHcmFkaWVudCA9IEFic3RyYWN0R3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVozSmhaR2xsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpuY21Ga2FXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRFpFUVVGelJUdEJRVkYwUlN3NFEwRkJNa003UVVGRk0wTXNhMFJCUVhORU8wRkJNRUowUkN4VlFVRnJRaXhUUVVGUkxHbENRVUU0UkR0SlFVTjBSaXhaUVVGWkxFOUJRV2RDTEVWQlFWTXNUVUZCWXl4RlFVRkZMRXRCUVhWRE8xRkJRekZHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRk8xbEJRM0pDTEUxQlFVMHNSVUZCUlN4SlFVRkpMSEZDUVVGVExFTkJRVTBzVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1dVRkROME1zV1VGQldTeEZRVUZGTEV0QlFVczdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJTbWRETEZkQlFVMHNSMEZCVGl4TlFVRk5MRU5CUVZFN1NVRkxia1FzUTBGQlF6dERRVU5HTzBGQlVFUXNiMEpCVDBNN1FVRkZSQ3h6UWtGQk5rY3NVMEZCVVN4clEwRkJNRU03U1VGRE4wb3NXVUZCV1N4UFFVRm5RaXhGUVVGRkxFbEJRVmtzUlVGQlJTeExRVUZaTEVWQlFVVXNTMEZCT0VRN1VVRkRkRWdzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETVVJc1RVRkJUU3hQUVVGUExFZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRMnhETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTndReXhEUVVGRE8wTkJRMFk3UVVGaVJDdzBRMEZoUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBBYnN0cmFjdFBhaW50U2VydmVyIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RQYWludFNlcnZlciA9IEFic3RyYWN0UGFpbnRTZXJ2ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRnBiblF0YzJWeWRtVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNHRnBiblF0YzJWeWRtVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjMFJCUVRCRU8wRkJSVEZFTEhsQ1FVRjFSaXhUUVVGUkxITkRRVUVyUXp0RFFVRkhPMEZCUVdwS0xHdEVRVUZwU2lKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhaW50X3NlcnZlcl8xID0gcmVxdWlyZShcIi4uL3BhaW50LXNlcnZlclwiKTtcclxuY2xhc3MgUGF0dGVybiBleHRlbmRzIHBhaW50X3NlcnZlcl8xLkFic3RyYWN0UGFpbnRTZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCA9ICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gMCA6IHcsIHggPSAwLCB5ID0gMCwgdmlldykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gdyA6IFwicGF0dGVyblwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKCEodyBpbnN0YW5jZW9mIFNWR1BhdHRlcm5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInBhdHRlcm5Vbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvbmUoZGVlcCA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhdHRlcm4odGhpcy5jb250ZXh0LCBzdXBlci5jbG9uZU5vZGUoZGVlcCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0dGVybiA9IFBhdHRlcm47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBkR1Z5Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkJoZEhSbGNtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGWFFTeHJSRUZCYzBRN1FVRjVRblJFTEdGQlFYRkNMRk5CUVZFc2EwTkJRVEJFTzBsQlIzSkdMRmxCUVcxQ0xFOUJRV2RDTEVWQlFVVXNRMEZCTmtJc1JVRkJSU3hKUVVGWkxFTkJRVU1zUTBGQlF5eFpRVUZaTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZVN1VVRkRhRXNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUkdoRUxGbEJRVThzUjBGQlVDeFBRVUZQTEVOQlFWTTdVVUZGYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNVUlzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNKRExFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlEzUkVMRU5CUVVNN1VVRkRTQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4UFFVRm5RaXhKUVVGSk8xRkJReTlDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBZN1FVRnlRa1FzTUVKQmNVSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvcGF0dGVybi50c1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL3BhdHRlcm5cIik7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBHcm91cCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImdcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgdG9QYXR0ZXJuKHcsIGgsIHgsIHksIHZpZXcpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gbmV3IHBhdHRlcm5fMS5QYXR0ZXJuKHRoaXMuY29udGV4dCwgdywgaCwgeCwgeSwgdmlldyk7XHJcbiAgICAgICAgdGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gcGF0dGVybi5hZGQoY2hpbGQpKTtcclxuICAgICAgICByZXR1cm4gcGF0dGVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdyb3VwID0gR3JvdXA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVozSnZkWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sm5jbTkxY0M1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVWRCTEhORlFVRnRSVHRCUVVOdVJTdzRRMEZCYVVjN1FVRkpha2NzVjBGQmJVSXNVMEZCVVN3clFrRkJjVVE3U1VGRE9VVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRWE5ETzFGQlEyeEZMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGSlRTeFRRVUZUTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZTeEZRVUZGTEVsQlFWVTdVVUZEZGtVc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkVMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRVFzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTnFRaXhEUVVGRE8wTkJRMFk3UVVGYVJDeHpRa0ZaUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwLnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBfZGVmYXVsdEdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbn1cclxuZXhwb3J0cy5fZGVmYXVsdEdldCA9IF9kZWZhdWx0R2V0O1xyXG5mdW5jdGlvbiBfZGVmYXVsdFNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgKG92ZXJyaWRlID09PSB1bmRlZmluZWQpID8gdGhpcyA6IG92ZXJyaWRlKTtcclxufVxyXG5leHBvcnRzLl9kZWZhdWx0U2V0ID0gX2RlZmF1bHRTZXQ7XHJcbmV4cG9ydHMuaXNBdHRyaWJ1dGUgPSAob2JqKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9ialtcImludGVycG9sYXRlXCJdID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIG9ialtcInBhcnNlXCJdID09PSBcImZ1bmN0aW9uXCI7XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYUjBjbWxpZFhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWVhSMGNtbGlkWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJZMEVzY1VKQlFXMUVMRTlCUVhORExFVkJRVVVzU1VGQldUdEpRVU55Unl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGFFUXNRMEZCUXp0QlFVWkVMR3REUVVWRE8wRkJSVVFzY1VKQlFYZERMRTlCUVhORExFVkJRVVVzU1VGQldTeEZRVUZGTEZGQlFWazdTVUZEZUVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGVrVXNRMEZCUXp0QlFVWkVMR3REUVVWRE8wRkJSVmtzVVVGQlFTeFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRjVRaXhGUVVGNVFpeEZRVUZGTzBsQlF6bEZMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4VlFVRlZMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NWVUZCVlN4RFFVRkRPMEZCUTNoR0xFTkJRVU1zUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGUudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFNWR0RvY3VtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHJhdywgbWltZVR5cGUgPSBcImFwcGxpY2F0aW9uL3htbFwiKSB7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSAocmF3IGluc3RhbmNlb2YgRG9jdW1lbnQpID8gcmF3IDogU1ZHRG9jdW1lbnQuUEFSU0VSLnBhcnNlRnJvbVN0cmluZyhyYXcsIG1pbWVUeXBlKTtcclxuICAgICAgICBjb25zdCBhbGxEZWZzID0gQXJyYXkuZnJvbSh0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRlZnNcIikpO1xyXG4gICAgICAgIGFsbERlZnMuZm9yRWFjaCgoZGVmcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBybURlZnMgPSB0aGlzLl9kb2N1bWVudC5yZW1vdmVDaGlsZChkZWZzKTtcclxuICAgICAgICAgICAgd2hpbGUgKHJtRGVmcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFkZERlZihybURlZnMuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICB9XHJcbn1cclxuU1ZHRG9jdW1lbnQuUEFSU0VSID0gbmV3IERPTVBhcnNlcigpO1xyXG5leHBvcnRzLlNWR0RvY3VtZW50ID0gU1ZHRG9jdW1lbnQ7XHJcbmV4cG9ydHMubWFrZVJlcXVlc3QgPSAobWV0aG9kLCB1cmwpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XHJcbiAgICAgICAgICAgICAgICBpZiAoeG1sICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4bWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHOWpkVzFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUprYjJOMWJXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJPMGxCUjBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEVkQlFYTkNMRVZCUVVVc1YwRkJiVUlzYVVKQlFXbENPMUZCUTNoR0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NRMEZCUXl4SFFVRkhMRmxCUVZrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRaUVVOMlFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTm9SQ3hQUVVGUExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU5zUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRmxMRU5CUVVNc1EwRkJRenRaUVVOdVJDeERRVUZETzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMFFzU1VGQlZ5eFJRVUZSTzFGQlEycENMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eGxRVUZsTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkROMFVzUTBGQlF6czdRVUZrWXl4clFrRkJUU3hIUVVGSExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTTdRVUZFTVVNc2EwTkJaMEpETzBGQlJWa3NVVUZCUVN4WFFVRlhMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZ4UWl4RlFVRkZPMGxCUXpWRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFJRVU55UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxHTkJRV01zUlVGQlJTeERRVUZETzFGQlEycERMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNMVFpeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1JVRkJSVHRaUVVOb1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6RkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTTdaMEpCUXpWQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5xUWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEyWXNRMEZCUXp0blFrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEVGl4TlFVRk5MRU5CUVVNN2QwSkJRMHdzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4TlFVRk5PM2RDUVVOc1FpeFZRVUZWTEVWQlFVVXNSMEZCUnl4RFFVRkRMRlZCUVZVN2NVSkJRek5DTEVOQlFVTXNRMEZCUXp0blFrRkRUQ3hEUVVGRE8xbEJRMGdzUTBGQlF6dFJRVU5JTEVOQlFVTXNRMEZCUXp0UlFVTkdMRWRCUVVjc1EwRkJReXhQUVVGUExFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEycENMRTFCUVUwc1EwRkJRenRuUWtGRFRDeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTFCUVUwN1owSkJRMnhDTEZWQlFWVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1ZVRkJWVHRoUVVNelFpeERRVUZETEVOQlFVTTdVVUZEVEN4RFFVRkRMRU5CUVVNN1VVRkRSaXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEWWl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOTUxFTkJRVU1zUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kb2N1bWVudC50c1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbmNsYXNzIFJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lID0gcnhqc18xLk9ic2VydmFibGUuaW50ZXJ2YWwoMCwgcnhqc18xLlNjaGVkdWxlci5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlcyA9IG5ldyByeGpzXzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZXMuYnVmZmVyV2hlbigoKSA9PiB0aGlzLl9hbmltYXRpb25GcmFtZSkuc3Vic2NyaWJlKChldmVudHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKCh7IGVsLCBhdHRyaWJ1dGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwucmVuZGVyQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlbmRlcmVyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHF1ZXVlVXBkYXRlKGExLCBhMiwgYTMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEyID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZXMubmV4dCh7IGVsOiBhMSwgYXR0cmlidXRlOiB7IG5hbWU6IGEyLCB2YWw6IGEzIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhMikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlcy5uZXh0KHsgZWw6IGExLCBhdHRyaWJ1dGU6IHsgbmFtZSwgdmFsOiBhMltuYW1lXSB9IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuUmVuZGVyZXIuX2luc3RhbmNlID0gbmV3IFJlbmRlcmVyKCk7XHJcbmV4cG9ydHMuUmVuZGVyZXIgPSBSZW5kZXJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnlaVzVrWlhKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQkxDdENRVUZ6UkR0QlFYRkNkRVE3U1VGUlJUdFJRVWhSTEc5Q1FVRmxMRWRCUVVjc2FVSkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMR2RDUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdVVUZEYmtVc1lVRkJVU3hIUVVGSExFbEJRVWtzWTBGQlR5eEZRVUZ2UkN4RFFVRkRPMUZCUjJwR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU40UlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZET1VJc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hGUVVGRkxFVkJRVVU3WjBKQlEyNURMRVZCUVVVc1EwRkJReXhsUVVGbExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGNFUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRV1ZNTEVOQlFVTTdTVUUxUWswc1RVRkJUU3hEUVVGRExGZEJRVmM3VVVGRGRrSXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFUWkNUU3hYUVVGWExFTkJRVzFGTEVWQlFVc3NSVUZCUlN4RlFVRmhMRVZCUVVVc1JVRkJZVHRSUVVOMFNDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVVzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYmtVc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRuUWtGREwwSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5JTEVOQlFVTTdPMEZCY0VOakxHdENRVUZUTEVkQlFVY3NTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenRCUVVvMVF5dzBRa0YxUkVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vcmVuZGVyZXIudHNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUnhcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgQ2xpcFBhdGggZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJjbGlwUGF0aFwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnRVbml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza0NvbnRlbnRVbml0c1wiLCBjb250ZW50VW5pdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNsaXBQYXRoID0gQ2xpcFBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyeHBjQzF3WVhSb0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTJ4cGNDMXdZWFJvTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYzBSQlFUQkVPMEZCYTBJeFJDeGpRVUZ6UWl4VFFVRlJMSE5EUVVFd1JEdEpRVU4wUml4WlFVRnRRaXhQUVVGblFpeEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeExRVUU0UXl4RlFVRkZMRmxCUVhGRU8xRkJRM2hNTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRVZpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRlRPMUZCUldwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRExFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UXl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dERRVU5HTzBGQmRrSkVMRFJDUVhWQ1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvY2xpcC1wYXRoLnRzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibWFya2VyXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hcmtlciA9IE1hcmtlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGeWEyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJXRnlhMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYzBSQlFXOUdPMEZCYjBKd1JpeFpRVUZ2UWl4VFFVRlJMSE5EUVVFd1JEdEpRVU53Uml4WlFVRlpMRTlCUVdkQ0xFVkJRVVVzUzBGQk5rUTdVVUZEZWtZc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNkMEpCU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvbWFya2VyLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBNYXNrIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibWFza1wiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnRVbml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza0NvbnRlbnRVbml0c1wiLCBjb250ZW50VW5pdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hc2sgPSBNYXNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0Z6YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYzJzdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4elJFRkJNRVE3UVVGcFFqRkVMRlZCUVd0Q0xGTkJRVkVzYzBOQlFYTkVPMGxCUXpsRkxGbEJRVzFDTEU5QlFXZENMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRXRCUVRoRExFVkJRVVVzV1VGQmNVUTdVVUZEZUV3c1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVUk9MRmxCUVU4c1IwRkJVQ3hQUVVGUExFTkJRVk03VVVGRmFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETVVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFTXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBETEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVOQlFVTTdTVUZEU0N4RFFVRkRPME5CUTBZN1FVRjJRa1FzYjBKQmRVSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2sudHNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdyYWRpZW50XzEgPSByZXF1aXJlKFwiLi4vZ3JhZGllbnRcIik7XHJcbmNsYXNzIExpbmVhckdyYWRpZW50IGV4dGVuZHMgZ3JhZGllbnRfMS5BYnN0cmFjdEdyYWRpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibGluZWFyR3JhZGllbnRcIiwgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxpbmVhckdyYWRpZW50ID0gTGluZWFyR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHbHVaV0Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liR2x1WldGeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc01FTkJRVEpGTzBGQlZ6TkZMRzlDUVVFMFFpeFRRVUZSTERKQ1FVRnhSVHRKUVVOMlJ5eFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJXU3hGUVVGRkxFdEJRWEZGTzFGQlF5OUhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9saW5lYXIudHNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdyYWRpZW50XzEgPSByZXF1aXJlKFwiLi4vZ3JhZGllbnRcIik7XHJcbmNsYXNzIFJhZGlhbEdyYWRpZW50IGV4dGVuZHMgZ3JhZGllbnRfMS5BYnN0cmFjdEdyYWRpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicmFkaWFsR3JhZGllbnRcIiwgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gUmFkaWFsR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtRmthV0ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljbUZrYVdGc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc01FTkJRVEpGTzBGQldUTkZMRzlDUVVFMFFpeFRRVUZSTERKQ1FVRnhSVHRKUVVOMlJ5eFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJXU3hGUVVGRkxFdEJRWEZGTzFGQlF5OUhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9yYWRpYWwudHNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdyb3VwXzEgPSByZXF1aXJlKFwiLi9ncm91cFwiKTtcclxuY2xhc3MgRXh0ZXJuYWxTVkcgZXh0ZW5kcyBncm91cF8xLkdyb3VwIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRvYywgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBhdHRycyk7XHJcbiAgICAgICAgZG9jLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydGVkTm9kZSA9IGNvbnRleHQud2luZG93LmRvY3VtZW50LmltcG9ydE5vZGUoY2hpbGQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZChpbXBvcnRlZE5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRXh0ZXJuYWxTVkcgPSBFeHRlcm5hbFNWRztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhoMFpYSnVZV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmxlSFJsY201aGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQkxHMURRVUZuUXp0QlFVVm9ReXhwUWtGQmVVSXNVMEZCVVN4aFFVRkxPMGxCUTNCRExGbEJRVmtzVDBGQlowSXNSVUZCUlN4SFFVRm5RaXhGUVVGRkxFdEJRWE5ETzFGQlEzQkdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZEVJc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEZsQlFWa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRM0pGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRGVrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMFk3UVVGU1JDeHJRMEZSUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2V4dGVybmFsLnRzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgRm9yZWlnbk9iamVjdCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImZvcmVpZ25PYmplY3RcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkSFRNTChodG1sKSB7XHJcbiAgICAgICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgIH1cclxuICAgIHJlbW92ZShodG1sKSB7XHJcbiAgICAgICAgdGhpcy5fbm9kZS5yZW1vdmVDaGlsZChodG1sKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZvcmVpZ25PYmplY3QgPSBGb3JlaWduT2JqZWN0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labTl5WldsbmJpMXZZbXBsWTNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUptYjNKbGFXZHVMVzlpYW1WamRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEaERRVUZwUnp0QlFWTnFSeXh0UWtGQk1rSXNVMEZCVVN3clFrRkJlVVU3U1VGRE1VY3NXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRV2xGTzFGQlF6ZEdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWlVGQlpTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRFRTeFBRVUZQTEVOQlFVTXNTVUZCYVVJN1VVRkRPVUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVTk5MRTFCUVUwc1EwRkJReXhKUVVGcFFqdFJRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wTkJRMFk3UVVGV1JDeHpRMEZWUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ZvcmVpZ24tb2JqZWN0LnRzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyByZW5kZXJhYmxlXzEuQWJzdHJhY3RSZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJpbWFnZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbWFnZSA9IEltYWdlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzFoWjJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYldGblpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVUxQkxEaERRVUVyUmp0QlFYRkNMMFlzVjBGQmJVSXNVMEZCVVN3clFrRkJiVVU3U1VGRE5VWXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRWGxFTzFGQlEzSkdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03UTBGRFJqdEJRVXBFTEhOQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2UudHNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIENpcmNsZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiY2lyY2xlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJseVkyeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkybHlZMnhsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYjBOQlFUSkVPMEZCVXpORUxGbEJRVzlDTEZOQlFWRXNjVUpCUVd0RU8wbEJRelZGTEZsQlFWa3NUMEZCWjBJc1JVRkJSU3hMUVVFMlJUdFJRVU42Unl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhEUVVGRE8wTkJRMFk3UVVGS1JDeDNRa0ZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9jaXJjbGUudHNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImVsbGlwc2VcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRWxsaXBzZSA9IEVsbGlwc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXeHNhWEJ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVZzYkdsd2MyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSlFTeHZRMEZCTWtRN1FVRlhNMFFzWVVGQmNVSXNVMEZCVVN4eFFrRkJiMFE3U1VGREwwVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVGhGTzFGQlF6RkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFTkJRVU03UTBGRFJqdEJRVXBFTERCQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2UudHNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImxpbmVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTGluZSA9IExpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHbHVaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklteHBibVV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkxRU3h2UTBGQk1rUTdRVUZYTTBRc1ZVRkJhMElzVTBGQlVTeHhRa0ZCT0VNN1NVRkRkRVVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRKRk8xRkJRM1pITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaERMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUNRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lLnRzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBQYXRoIGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJwYXRoXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBhdGggPSBQYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR0YwYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkJoZEdndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGUE0wUXNWVUZCYTBJc1UwRkJVU3h4UWtGQk9FTTdTVUZEZEVVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUSkZPMUZCUTNaSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdRMEZEUmp0QlFVcEVMRzlDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aC50c1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUG9seWdvbiBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicG9seWdvblwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2x5Z29uID0gUG9seWdvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5c2VXZHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluQnZiSGxuYjI0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGTk0wUXNZVUZCY1VJc1UwRkJVU3h4UWtGQmIwUTdTVUZETDBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUaEZPMUZCUXpGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdRMEZEUmp0QlFVcEVMREJDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWdvbi50c1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInBvbHlsaW5lXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvbHlsaW5lID0gUG9seWxpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXNlV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YjJ4NWJHbHVaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVbEJMRzlEUVVFeVJEdEJRVTB6UkN4alFVRnpRaXhUUVVGUkxIRkNRVUZ6UkR0SlFVTnNSaXhaUVVGWkxFOUJRV2RDTEVWQlFVVXNTMEZCSzBVN1VVRkRNMGNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc05FSkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5bGluZS50c1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUmVjdCBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicmVjdFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5SZWN0ID0gUmVjdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WamRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5KbFkzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGTFFTeHZRMEZCTWtRN1FVRmxNMFFzVlVGQmEwSXNVMEZCVVN4eFFrRkJPRU03U1VGRGRFVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVEpGTzFGQlEzWkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5Q1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3JlY3QudHNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRpbWVuc2lvbl8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvZGltZW5zaW9uXCIpO1xyXG5jb25zdCB0ZXh0X2NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdHRyaWJ1dGVzL3RleHQtY29udGVudFwiKTtcclxuY29uc3QgcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3JlbmRlcmFibGVcIik7XHJcbmNsYXNzIFRleHRTcGFuIGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwidHNwYW5cIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbXB1dGVkTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dFNwYW4gPSBUZXh0U3BhbjtcclxuY2xhc3MgVGV4dCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInRleHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkU3Bhbihjb250ZW50LCBsaW5lSGVpZ2h0LCB1cGRhdGUgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3Qgc3BhbiA9IG5ldyBUZXh0U3Bhbih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGV4dENvbnRlbnRcIiwgY29udGVudCk7XHJcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQpIHtcclxuICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHBhcnNlRmxvYXQodGhpcy5nZXRBdHRyaWJ1dGUoXCJ4XCIpIHx8IFwiMFwiKSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGluZUhlaWdodCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKGxpbmVIZWlnaHQsIFwiZW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBsaW5lSGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZChzcGFuKTtcclxuICAgICAgICByZXR1cm4gc3BhbjtcclxuICAgIH1cclxuICAgIGdldCBjb21wdXRlZExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRleHQgPSBUZXh0O1xyXG5jbGFzcyBNdWx0aWxpbmVUZXh0IGV4dGVuZHMgVGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXh0LCB3aWR0aCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBhdHRycyk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ldyBUZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIHRlbXAuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCAwKTtcclxuICAgICAgICBjb25zdCBzcGFuID0gbmV3IFRleHRTcGFuKGNvbnRleHQpO1xyXG4gICAgICAgIHRlbXAuYWRkKHNwYW4pO1xyXG4gICAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoYXR0cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcGFjZVdpZHRoID0gdGVtcC5jb21wdXRlZExlbmd0aDtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtcIlwiXTtcclxuICAgICAgICB0ZXh0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKCh3b3JkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TGluZSA9IChsaW5lLmxlbmd0aCA9PT0gMCkgPyB3b3JkIDogYCR7bGluZX0gJHt3b3JkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gbmV3IHRleHRfY29udGVudF8xLlRleHRDb250ZW50KG5ld0xpbmUpO1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInRleHRDb250ZW50XCIsIGxpbmVDb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKHNwYW4uY29tcHV0ZWRMZW5ndGggPiB3aWR0aCAmJiBsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2god29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSA9IG5ld0xpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNwYW4obmV3IHRleHRfY29udGVudF8xLlRleHRDb250ZW50KGxpbmUpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTXVsdGlsaW5lVGV4dCA9IE11bHRpbGluZVRleHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluUmxlSFF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3d3UkVGQmRVUTdRVUZGZGtRc1owVkJRVFJFTzBGQlJUVkVMRGhEUVVFclJqdEJRVGhDTDBZc1kwRkJjMElzVTBGQlVTd3JRa0ZCTkVRN1NVRkRlRVlzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRSRU8xRkJRM2hHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkRSQ3hKUVVGWExHTkJRV003VVVGRGRrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1EwRkJRenRKUVVNMVF5eERRVUZETzBOQlEwWTdRVUZRUkN3MFFrRlBRenRCUVZsRUxGVkJRV3RDTEZOQlFWRXNLMEpCUVhWRU8wbEJReTlGTEZsQlFWa3NUMEZCWjBJc1JVRkJSU3hMUVVGM1JEdFJRVU53Uml4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJRMDBzVDBGQlR5eERRVUZETEU5QlFXOUNMRVZCUVVVc1ZVRkJORUlzUlVGQlJTeFRRVUZyUWl4SlFVRkpPMUZCUTNaR0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU40UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExHRkJRV0VzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1JTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMSEZDUVVGVExFTkJRVThzVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha1VzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xbEJRM1JETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTm1MRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlEwUXNTVUZCVnl4alFVRmpPMUZCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJja0pFTEc5Q1FYRkNRenRCUVVWRUxHMUNRVUV5UWl4VFFVRlJMRWxCUVVrN1NVRkRja01zV1VGQldTeFBRVUZuUWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hMUVVGaExFVkJRVVVzUzBGQk5rVTdVVUZEZEVrc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNdlFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJZc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkRka01zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZETDBRc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTd3dRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6bERMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia1FzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOdVFpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlEzQkRMRU5CUVVNN1VVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOd1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc01FSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlF5eERRVUZETzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMFk3UVVFM1FrUXNjME5CTmtKREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0LnRzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBUZXh0Q29udGVudCB7XHJcbiAgICBzdGF0aWMgZXNjYXBlSHRtbChodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RyID0gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2IgPSBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGVudChjc3MgfHwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuX25vZGUudGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgZWxlbWVudC5fbm9kZS50ZXh0Q29udGVudCA9IFRleHRDb250ZW50LmVzY2FwZUh0bWwodGhpcy5fc3RyIHx8IHRoaXMuX2NiKCkpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiB0IDwgMC41ID8gZnJvbSA6IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UZXh0Q29udGVudCA9IFRleHRDb250ZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEMxamIyNTBaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkR1Y0ZEMxamIyNTBaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSMEU3U1VGRFZTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVZrN1VVRkRjRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETzBsQlMwUXNXVUZCV1N4SFFVRTBRanRSUVVOMFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlEyeENMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRTFCUVUwc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCSzBJc1QwRkJkME1zUlVGQlJTeEpRVUZQTzFGQlEzaEdMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZITEU5QlFXVXNRMEZCUXl4TFFVRjNRaXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzBsQlF6VkZMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRU3RDTEU5QlFYZERMRVZCUVVVc1NVRkJUeXhGUVVGRkxGRkJRWE5DTzFGQlF6bEhMRTlCUVdVc1EwRkJReXhMUVVGM1FpeERRVUZETEZkQlFWY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRE0wY3NRMEZCUXp0SlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGcFFpeEZRVUZGTEVOQlFWTTdVVUZETjBNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzBsQlF5OUNMRU5CUVVNN1EwRkRSanRCUVROQ1JDeHJRMEV5UWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RleHQtY29udGVudC50c1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIEJsZW5kX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUJsZW5kXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJsZW5kX1ByaW1pdGl2ZSA9IEJsZW5kX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW14bGJtUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKaWJHVnVaQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMREJFUVVGelJEdEJRVkYwUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCYjBRN1NVRkRka1lzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCYVVNN1VVRkRNMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2JsZW5kLnRzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgQ29sb3JNYXRyaXhfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlQ29sb3JNYXRyaXhcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29sb3JNYXRyaXhfUHJpbWl0aXZlID0gQ29sb3JNYXRyaXhfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdGJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjlzYjNJdGJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzTUVSQlFYTkVPMEZCVTNSRUxESkNRVUZ0UXl4VFFVRlJMR3REUVVGblJUdEpRVU42Unl4WlFVRlpMRTFCUVdNc1JVRkJSU3hMUVVGMVF6dFJRVU5xUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRV1VzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wTkJRMFk3UVVGS1JDeHpSRUZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbG9yLW1hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZSA9IENvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTFhSeVlXNXpabVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl0Y0c5dVpXNTBMWFJ5WVc1elptVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNNRVJCUVhORU8wRkJUWFJFTEdsRFFVRjVReXhUUVVGUkxHdERRVUUwUlR0SlFVTXpTQ3haUVVGWkxFMUJRV01zUlVGQlJTeExRVUUyUXp0UlFVTjJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEhGQ1FVRnhRaXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6bERMRU5CUVVNN1EwRkRSanRCUVVwRUxHdEZRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvbmVudC10cmFuc2Zlci50c1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbXBvc2l0ZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVDb21wb3NpdGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcG9zaXRlX1ByaW1pdGl2ZSA9IENvbXBvc2l0ZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl6YVhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dGNHOXphWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzTUVSQlFYTkVPMEZCV1hSRUxIbENRVUZwUXl4VFFVRlJMR3REUVVFMFJEdEpRVU51Unl4WlFVRlpMRTFCUVdNc1JVRkJSU3hMUVVGeFF6dFJRVU12UkN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxHRkJRV0VzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjBReXhEUVVGRE8wTkJRMFk3UVVGS1JDeHJSRUZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvc2l0ZS50c1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZSA9IENvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWRtOXNkbVV0YldGMGNtbDRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVkbTlzZG1VdGJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTMEVzTUVSQlFYTkVPMEZCWjBKMFJDdzRRa0ZCYzBNc1UwRkJVU3hyUTBGQmMwVTdTVUZEYkVnc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQk1FTTdVVUZEY0VVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPME5CUTBZN1FVRktSQ3cwUkVGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb252b2x2ZS1tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBEaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlRGlzcGxhY2VtZW50TWFwXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRpc3BsYWNlbWVudE1hcF9QcmltaXRpdmUgPSBEaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x6Y0d4aFkyVnRaVzUwTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1ScGMzQnNZV05sYldWdWRDMXRZWEF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3d3UkVGQmMwUTdRVUZWZEVRc0swSkJRWFZETEZOQlFWRXNhME5CUVhkRk8wbEJRM0pJTEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVRKRE8xRkJRM0pGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dERRVU5HTzBGQlNrUXNPRVJCU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwLnRzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgRmxvb2RfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlRmxvb2RcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmxvb2RfUHJpbWl0aXZlID0gRmxvb2RfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labXh2YjJRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUptYkc5dlpDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQkxEQkVRVUZ6UkR0QlFVOTBSQ3h4UWtGQk5rSXNVMEZCVVN4clEwRkJiMFE3U1VGRGRrWXNXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJhVU03VVVGRE0wUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZmxvb2QudHNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBHYXVzc2lhbkJsdXJfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlR2F1c3NpYW5CbHVyXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdhdXNzaWFuQmx1cl9QcmltaXRpdmUgPSBHYXVzc2lhbkJsdXJfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laMkYxYzNOcFlXNHRZbXgxY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbWRoZFhOemFXRnVMV0pzZFhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN3d1JFRkJjMFE3UVVGUmRFUXNORUpCUVc5RExGTkJRVkVzYTBOQlFXdEZPMGxCUXpWSExGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFYZERPMUZCUTJ4RkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZWtNc1EwRkJRenREUVVOR08wRkJTa1FzZDBSQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZ2F1c3NpYW4tYmx1ci50c1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIEltYWdlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUltYWdlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkltYWdlX1ByaW1pdGl2ZSA9IEltYWdlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVcxaFoyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJXRm5aUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMREJFUVVGelJEdEJRVTkwUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCYjBRN1NVRkRka1lzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCYVVNN1VVRkRNMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2ltYWdlLnRzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgRGlmZnVzZUxpZ2h0aW5nIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRpZmZ1c2VMaWdodGluZyA9IERpZmZ1c2VMaWdodGluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsbVpuVnpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltUnBabVoxYzJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN3MlJFRkJlVVE3UVVGVmVrUXNjVUpCUVRaQ0xGTkJRVkVzYTBOQlFYZEZPMGxCUXpOSExGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFUSkRPMUZCUTNKRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvZGlmZnVzZS50c1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIERpc3RhbnRMaWdodCBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZURpc3RhbnRMaWdodFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EaXN0YW50TGlnaHQgPSBEaXN0YW50TGlnaHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHbHpkR0Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVJwYzNSaGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTeG5SVUZCTkVRN1FVRlJOVVFzYTBKQlFUQkNMRk5CUVZFc2EwTkJRV3RGTzBsQlEyeEhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWGRETzFGQlEyeEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVrTXNRMEZCUXp0RFFVTkdPMEZCU2tRc2IwTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9kaXN0YW50LnRzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgUG9pbnRMaWdodCBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVBvaW50TGlnaHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9pbnRMaWdodCA9IFBvaW50TGlnaHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiMmx1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVWRCTEdkRlFVRTBSRHRCUVZVMVJDeG5Ra0ZCZDBJc1UwRkJVU3hyUTBGQk9FUTdTVUZETlVZc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmMwTTdVVUZEYUVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dERRVU5HTzBGQlNrUXNaME5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnQudHNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBTcG90TGlnaHQgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVTcG90TGlnaHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3BvdExpZ2h0ID0gU3BvdExpZ2h0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0J2ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbk53YjNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZIUVN4blJVRkJORVE3UVVGblFqVkVMR1ZCUVhWQ0xGTkJRVkVzYTBOQlFUUkVPMGxCUTNwR0xGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFYRkRPMUZCUXk5RUxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNZVUZCWVN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1JETEVOQlFVTTdRMEZEUmp0QlFVcEVMRGhDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2Uvc3BvdC50c1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFNwZWN1bGFyTGlnaHRpbmcgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwZWN1bGFyTGlnaHRpbmcgPSBTcGVjdWxhckxpZ2h0aW5nO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0JsWTNWc1lYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKemNHVmpkV3hoY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERaRVFVRjVSRHRCUVZkNlJDeHpRa0ZCT0VJc1UwRkJVU3hyUTBGQk1FVTdTVUZET1Vjc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQk5FTTdVVUZEZEVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeHZRa0ZCYjBJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0zUXl4RFFVRkRPME5CUTBZN1FVRktSQ3cwUTBGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9zcGVjdWxhci50c1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIE1lcmdlTm9kZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVNZXJnZU5vZGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWVyZ2VOb2RlX1ByaW1pdGl2ZSA9IE1lcmdlTm9kZV9QcmltaXRpdmU7XHJcbmNsYXNzIE1lcmdlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlTWVyZ2VcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NZXJnZV9QcmltaXRpdmUgPSBNZXJnZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVnlaMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnRaWEpuWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERCRVFVRnpSRHRCUVUxMFJDeDVRa0ZCYVVNc1UwRkJVU3hyUTBGQk5FUTdTVUZEYmtjc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmNVTTdVVUZETDBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeGhRVUZoTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNhMFJCU1VNN1FVRkZSQ3h4UWtGQk5rSXNVMEZCVVN4clEwRkJkME03U1VGRE0wVXNXVUZCV1N4TlFVRmpPMUZCUTNoQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRNMElzUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9tZXJnZS50c1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIE1vcnBob2xvZ3lfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlTW9ycGhvbG9neVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Nb3JwaG9sb2d5X1ByaW1pdGl2ZSA9IE1vcnBob2xvZ3lfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liVzl5Y0dodmJHOW5lUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltMXZjbkJvYjJ4dloza3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTd3dSRUZCYzBRN1FVRlJkRVFzTUVKQlFXdERMRk5CUVZFc2EwTkJRVGhFTzBsQlEzUkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWE5ETzFGQlEyaEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5RVFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbW9ycGhvbG9neS50c1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIE9mZnNldF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVPZmZzZXRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2Zmc2V0X1ByaW1pdGl2ZSA9IE9mZnNldF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIyWm1jMlYwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liMlptYzJWMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUjBFc01FUkJRWE5FTzBGQlUzUkVMSE5DUVVFNFFpeFRRVUZSTEd0RFFVRnpSRHRKUVVNeFJpeFpRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRnJRenRSUVVNMVJDeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPME5CUTBZN1FVRktSQ3cwUTBGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9vZmZzZXQudHNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBUaWxlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVRpbGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGlsZV9QcmltaXRpdmUgPSBUaWxlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdsc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5ScGJHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTd3dSRUZCYzBRN1FVRk5kRVFzYjBKQlFUUkNMRk5CUVZFc2EwTkJRV3RFTzBsQlEzQkdMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRV2RETzFGQlF6RkVMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03UTBGRFJqdEJRVXBFTEhkRFFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdGlsZS50c1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGNoYW5uZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBgZmVGdW5jJHtjaGFubmVsfWAsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlID0gVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5tWlhJdFpuVnVZM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUowY21GdWMyWmxjaTFtZFc1amRHbHZiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMREJFUVVGelJEdEJRVEJDZEVRc1owTkJRWGRETEZOQlFWRXNhME5CUVRKSU8wbEJRM3BMTEZsQlFWa3NUVUZCWXl4RlFVRkZMRTlCUVRoQ0xFVkJRVVVzUzBGQk5FTTdVVUZEZEVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEU5QlFVOHNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRek5ETEVOQlFVTTdRMEZEUmp0QlFVcEVMR2RGUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy90cmFuc2Zlci1mdW5jdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFR1cmJ1bGVuY2VfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlVHVyYnVsZW5jZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UdXJidWxlbmNlX1ByaW1pdGl2ZSA9IFR1cmJ1bGVuY2VfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSFZ5WW5Wc1pXNWpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluUjFjbUoxYkdWdVkyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTd3dSRUZCYzBRN1FVRlZkRVFzTUVKQlFXdERMRk5CUVZFc2EwTkJRVGhFTzBsQlEzUkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWE5ETzFGQlEyaEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5RVFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHVyYnVsZW5jZS50c1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2F0dHJpYnV0ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnRleHRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kb2N1bWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VsZW1lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ldmVudHNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9pbnRlcnBvbGF0aW9uXCIpKTtcclxuY29uc3QgQW5pbWF0aW9uID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uXCIpO1xyXG5leHBvcnRzLkFuaW1hdGlvbiA9IEFuaW1hdGlvbjtcclxuY29uc3QgQXR0cmlidXRlcyA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZXNcIik7XHJcbmV4cG9ydHMuQXR0cmlidXRlcyA9IEF0dHJpYnV0ZXM7XHJcbmNvbnN0IEVsZW1lbnRzID0gcmVxdWlyZShcIi4vZWxlbWVudHNcIik7XHJcbmV4cG9ydHMuRWxlbWVudHMgPSBFbGVtZW50cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEdsRFFVRTBRanRCUVVNMVFpeHBRMEZCTkVJN1FVRkROVUlzSzBKQlFUQkNPMEZCUXpGQ0xHZERRVUV5UWp0QlFVTXpRaXdyUWtGQk1FSTdRVUZETVVJc09FSkJRWGxDTzBGQlEzcENMSEZEUVVGblF6dEJRVVZvUXl4NVEwRkJlVU03UVVGTGRrTXNPRUpCUVZNN1FVRktXQ3d5UTBGQk1rTTdRVUZMZWtNc1owTkJRVlU3UVVGS1dpeDFRMEZCZFVNN1FVRkxja01zTkVKQlFWRWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJveF8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy9ib3hcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzL3BvaW50XCIpO1xyXG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcclxuY29uc3QgZG9jdW1lbnRfMSA9IHJlcXVpcmUoXCIuL2RvY3VtZW50XCIpO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50XCIpO1xyXG5jb25zdCBjbGlwX3BhdGhfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGhcIik7XHJcbmNvbnN0IG1hcmtlcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlclwiKTtcclxuY29uc3QgbWFza18xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2tcIik7XHJcbmNvbnN0IGxpbmVhcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2xpbmVhclwiKTtcclxuY29uc3QgcmFkaWFsXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsXCIpO1xyXG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuXCIpO1xyXG5jb25zdCBleHRlcm5hbF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvZXh0ZXJuYWxcIik7XHJcbmNvbnN0IGZvcmVpZ25fb2JqZWN0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9mb3JlaWduLW9iamVjdFwiKTtcclxuY29uc3QgZ3JvdXBfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwXCIpO1xyXG5jb25zdCBpbWFnZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2VcIik7XHJcbmNvbnN0IGNpcmNsZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZVwiKTtcclxuY29uc3QgZWxsaXBzZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2VcIik7XHJcbmNvbnN0IGxpbmVfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lXCIpO1xyXG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aFwiKTtcclxuY29uc3QgcG9seWdvbl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlnb25cIik7XHJcbmNvbnN0IHBvbHlsaW5lXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWxpbmVcIik7XHJcbmNvbnN0IHJlY3RfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9yZWN0XCIpO1xyXG5jb25zdCB0ZXh0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0XCIpO1xyXG5jbGFzcyBDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIF93aW5kb3cgPSBDb250ZXh0LkRFRkFVTFRfV0lORE9XKSB7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gX3dpbmRvdztcclxuICAgICAgICBpZiAocm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgSUQgaXMgbm90IHZhbGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGNvbnN0YW50c18xLlhNTE5TLCBcInN2Z1wiKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fcm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgY29uc3RhbnRzXzEuWE1MTlMpO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlTlMoY29uc3RhbnRzXzEuWE1MTlMsIFwieGxpbmtcIiwgY29uc3RhbnRzXzEuWExJTkspO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcclxuICAgICAgICB0aGlzLl90YXJnZXQgPSB0aGlzLl9yb290O1xyXG4gICAgICAgIGNvbnN0IGRlZnNFbGVtZW50cyA9IHRoaXMuX3Jvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZWZzXCIpO1xyXG4gICAgICAgIGlmIChkZWZzRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZzID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMsIGRlZnNFbGVtZW50cy5pdGVtKDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlZnMgPSBuZXcgZWxlbWVudF8xLkVsZW1lbnQodGhpcywgXCJkZWZzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB3aW5kb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvdztcclxuICAgIH1cclxuICAgIGFkZERlZihkZWYpIHtcclxuICAgICAgICB0aGlzLl9kZWZzLmFkZChkZWYpO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpbGQoZWwpIHtcclxuICAgICAgICB0aGlzLl90YXJnZXQuYXBwZW5kQ2hpbGQoKGVsIGluc3RhbmNlb2YgZWxlbWVudF8xLkVsZW1lbnQpID8gZWwubm9kZSA6IGVsKTtcclxuICAgIH1cclxuICAgIGxvYWQodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeG1sRG9jdW1lbnQgPSB5aWVsZCBkb2N1bWVudF8xLm1ha2VSZXF1ZXN0KFwiR0VUXCIsIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsRG9jdW1lbnQgPSBuZXcgZG9jdW1lbnRfMS5TVkdEb2N1bWVudCh0aGlzLCB4bWxEb2N1bWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgZXh0ZXJuYWxfMS5FeHRlcm5hbFNWRyh0aGlzLCBleHRlcm5hbERvY3VtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsaXBQYXRoKHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNsaXBfcGF0aF8xLkNsaXBQYXRoKHRoaXMsIHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpO1xyXG4gICAgfVxyXG4gICAgbWFya2VyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgbWFya2VyXzEuTWFya2VyKHRoaXMsIHt9KTtcclxuICAgIH1cclxuICAgIG1hc2sodywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgbWFza18xLk1hc2sodGhpcywgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cyk7XHJcbiAgICB9XHJcbiAgICBsaW5lYXJHcmFkaWVudChzdG9wcywgYXR0cnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGxpbmVhcl8xLkxpbmVhckdyYWRpZW50KHRoaXMsIHN0b3BzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICByYWRpYWxHcmFkaWVudChzdG9wcywgYXR0cnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHJhZGlhbF8xLlJhZGlhbEdyYWRpZW50KHRoaXMsIHN0b3BzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBwYXR0ZXJuKHcsIGgsIHgsIHksIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHBhdHRlcm5fMS5QYXR0ZXJuKHRoaXMsIHcsIGgsIHgsIHksIHZpZXcpO1xyXG4gICAgfVxyXG4gICAgZm9yZWlnbk9iamVjdChodG1sLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBuZXcgZm9yZWlnbl9vYmplY3RfMS5Gb3JlaWduT2JqZWN0KHRoaXMsIHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9KTtcclxuICAgICAgICBlbC5hZGRIVE1MKGh0bWwpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZWwpO1xyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuICAgIGdyb3VwKGVscykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbmV3IGdyb3VwXzEuR3JvdXAodGhpcyk7XHJcbiAgICAgICAgZWxzLmZvckVhY2goY2hpbGQgPT4gZWwuYWRkKGNoaWxkKSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChlbCk7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG4gICAgaW1hZ2UoaHJlZikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBpbWFnZV8xLkltYWdlKHRoaXMpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gaW1nLmdldEV2ZW50KFwibG9hZFwiKS50YWtlKDEpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHlpZWxkIHByb21pc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjaXJjbGUoYTEsIGEyLCBhMykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gKGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkgPyB7IFwiY3g6Y3lcIjogYTEsIHI6IGEyIH0gOiB7IGN4OiBhMSwgY3k6IGEyLCByOiBhMyB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgY2lyY2xlXzEuQ2lyY2xlKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIGVsbGlwc2UoYTEsIGEyLCBhMywgYTQpIHtcclxuICAgICAgICBsZXQgYXR0cnMgPSB7fTtcclxuICAgICAgICBjb25zdCBhMUlzUG9pbnQgPSBhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgY29uc3QgYTJJc1BvaW50ID0gYTIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50O1xyXG4gICAgICAgIGlmIChhMUlzUG9pbnQgJiYgYTJJc1BvaW50KSB7XHJcbiAgICAgICAgICAgIGF0dHJzID0geyBcImN4OmN5XCI6IGExLCBcInJ4OnJ5XCI6IGEyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCEoYTFJc1BvaW50IHx8IGEySXNQb2ludCkpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IGN4OiBhMSwgY3k6IGEyLCByeDogYTMsIHJ5OiBhNCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGVsbGlwc2VfMS5FbGxpcHNlKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIGxpbmUoYTEsIGEyLCBhMywgYTQpIHtcclxuICAgICAgICBsZXQgYXR0cnMgPSB7fTtcclxuICAgICAgICBjb25zdCBhMUlzUG9pbnQgPSBhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgY29uc3QgYTJJc1BvaW50ID0gYTIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50O1xyXG4gICAgICAgIGlmIChhMUlzUG9pbnQgJiYgYTJJc1BvaW50KSB7XHJcbiAgICAgICAgICAgIGF0dHJzID0geyBcIngxOnkxXCI6IGExLCBcIngyOnkyXCI6IGEyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCEoYTFJc1BvaW50IHx8IGEySXNQb2ludCkpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IHgxOiBhMSwgeTE6IGEyLCB4MjogYTMsIHkyOiBhNCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGxpbmVfMS5MaW5lKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBhdGgoZCwgcGF0aExlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0geyBkLCBwYXRoTGVuZ3RoIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBwYXRoXzEuUGF0aCh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBwb2x5Z29uKHBvaW50cykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0geyBwb2ludHMgfTtcclxuICAgICAgICByZXR1cm4gbmV3IHBvbHlnb25fMS5Qb2x5Z29uKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBvbHlsaW5lKHBvaW50cykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0geyBwb2ludHMgfTtcclxuICAgICAgICByZXR1cm4gbmV3IHBvbHlsaW5lXzEuUG9seWxpbmUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcmVjdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7fTtcclxuICAgICAgICBpZiAoYTEgaW5zdGFuY2VvZiBib3hfMS5Cb3gpIHtcclxuICAgICAgICAgICAgYXR0cnNbXCJ4Onk6d2lkdGg6aGVpZ2h0XCJdID0gYTE7XHJcbiAgICAgICAgICAgIGlmIChhMiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wicng6cnlcIl0gPSBhMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeFwiXSA9IGEyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGEzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ5XCJdID0gYTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgIGF0dHJzW1wieDp5XCJdID0gYTE7XHJcbiAgICAgICAgICAgIGlmIChhMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcIndpZHRoXCJdID0gYTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wiaGVpZ2h0XCJdID0gYTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGE0IGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJyeDpyeVwiXSA9IGE0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGE0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ4XCJdID0gYTQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYTUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnlcIl0gPSBhNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXR0cnNbXCJ4XCJdID0gYTE7XHJcbiAgICAgICAgICAgIGlmIChhMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcInlcIl0gPSBhMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJ3aWR0aFwiXSA9IGEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhNCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcImhlaWdodFwiXSA9IGE0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhNSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wicng6cnlcIl0gPSBhNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhNSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeFwiXSA9IGE1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGE2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ5XCJdID0gYTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyByZWN0XzEuUmVjdCh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICB0ZXh0KGNvbnRlbnQsIGExLCBhMikge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gKGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkgPyB7IFwieDp5XCI6IGExIH0gOiB7IHg6IGExLCB5OiBhMiB9O1xyXG4gICAgICAgIGNvbnN0IHQgPSBuZXcgdGV4dF8xLlRleHQodGhpcywgYXR0cnMpO1xyXG4gICAgICAgIGNvbnRlbnQuZm9yRWFjaChjID0+IHQuYWRkU3BhbihjKSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxufVxyXG5Db250ZXh0LkRFRkFVTFRfV0lORE9XID0gd2luZG93O1xyXG5leHBvcnRzLkNvbnRleHQgPSBDb250ZXh0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1ZEdWNGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1OdmJuUmxlSFF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0QlFVTkJMREJEUVVGMVF6dEJRVVYyUXl3NFEwRkJNa003UVVGRk0wTXNNa05CUVRKRE8wRkJRek5ETEhsRFFVRnpSRHRCUVVOMFJDeDFRMEZCYjBNN1FVRkRjRU1zYjBWQlFXZEZPMEZCUTJoRkxEaEVRVUV5UkR0QlFVTXpSQ3d3UkVGQmRVUTdRVUZGZGtRc2MwWkJRWE5JTzBGQlEzUklMSE5HUVVGelNEdEJRVU4wU0N3NFJVRkJNa1U3UVVGRE0wVXNPRVJCUVRoRU8wRkJRemxFTERCRlFVRnpSVHRCUVVOMFJTeDNSRUZCY1VRN1FVRkRja1FzZDBSQlFYRkVPMEZCUTNKRUxHbEZRVUU0UkR0QlFVTTVSQ3h0UlVGQlowVTdRVUZEYUVVc05rUkJRVEJFTzBGQlF6RkVMRFpFUVVFd1JEdEJRVU14UkN4dFJVRkJaMFU3UVVGRGFFVXNjVVZCUVd0Rk8wRkJRMnhGTERaRVFVRXdSRHRCUVVNeFJDeHpSRUZCYlVRN1FVRk5ia1E3U1VGUlJTeFpRVUZaTEVsQlFUWkNMRVZCUVZVc1ZVRkJhMElzVDBGQlR5eERRVUZETEdOQlFXTTdVVUZCZUVNc1dVRkJUeXhIUVVGUUxFOUJRVThzUTBGQmFVTTdVVUZEZWtZc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRemRDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGRFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3haUVVGWkxHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOc1FpeERRVUZETzJkQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU5PTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2QwTkJRWGRETEVOQlFVTXNRMEZCUXp0blFrRkROVVFzUTBGQlF6dFpRVU5JTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOd1FpeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNhVUpCUVVzc1JVRkJSU3hMUVVGTExFTkJRV3RDTEVOQlFVTTdXVUZEYkVZc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEY2tRc1EwRkJRenRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hwUWtGQlN5eERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNhVUpCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzYVVKQlFVc3NRMEZCUXl4RFFVRkRPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETVVJc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxHbENRVUZQTEVOQlFUSkNMRWxCUVVrc1JVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha1lzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEdsQ1FVRlBMRU5CUVRKQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnVSU3hEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5FTEVsQlFWY3NUVUZCVFR0UlFVTm1MRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkRUU3hOUVVGTkxFTkJRVU1zUjBGQkswTTdVVUZETTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVU5OTEZGQlFWRXNRMEZCUXl4RlFVRTRRenRSUVVNMVJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFVkJRVVVzV1VGQldTeHBRa0ZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRMjVGTEVOQlFVTTdTVUZEV1N4SlFVRkpMRU5CUVVNc1IwRkJWenM3V1VGRE0wSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1RVRkJUU3h6UWtGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOc1JDeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFbEJRVWtzYzBKQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRE5VUXNUVUZCVFN4RFFVRkRMRWxCUVVrc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dFJRVU5xUkN4RFFVRkRPMHRCUVVFN1NVRkRUU3hSUVVGUkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFdEJRVGhETEVWQlFVVXNXVUZCY1VRN1VVRkRha3NzVFVGQlRTeERRVUZETEVsQlFVa3NiMEpCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTTNSQ3hEUVVGRE8wbEJRMDBzVFVGQlRUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMR1ZCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZET1VJc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVkxFVkJRVVVzUzBGQk9FTXNSVUZCUlN4WlFVRnhSRHRSUVVNM1NpeE5RVUZOTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdTVUZEZWtRc1EwRkJRenRKUVVOTkxHTkJRV01zUTBGQlF5eExRVUZaTEVWQlFVVXNTMEZCYVVNN1VVRkRia1VzVFVGQlRTeERRVUZETEVsQlFVa3NkVUpCUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGRFRTeGpRVUZqTEVOQlFVTXNTMEZCV1N4RlFVRkZMRXRCUVdsRE8xRkJRMjVGTEUxQlFVMHNRMEZCUXl4SlFVRkpMSFZDUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlEwMHNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlZTeEZRVUZGTEVOQlFWVXNSVUZCUlN4SlFVRlZPMUZCUTNKRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0zUXl4RFFVRkRPMGxCUTAwc1lVRkJZU3hEUVVGRExFbEJRV2xDTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hMUVVGaExFVkJRVVVzVFVGQll6dFJRVU42Uml4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxEaENRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNMVJDeEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGJFSXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU03U1VGRFRTeExRVUZMTEVOQlFVTXNSMEZCYjBNN1VVRkRMME1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4aFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE0wSXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeENMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlExa3NTMEZCU3l4RFFVRkRMRWxCUVZrN08xbEJRemRDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1lVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6VkNMRTFCUVUwc1QwRkJUeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMWxCUTNwRUxFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJReTlDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGJrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1RVRkJUU3hQUVVGUExFTkJRVU03V1VGRE5VSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVOaUxFTkJRVU03UzBGQlFUdEpRVWROTEUxQlFVMHNRMEZCUXl4RlFVRnJRaXhGUVVGRkxFVkJRVlVzUlVGQlJTeEZRVUZYTzFGQlEzWkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUlVGQlJTeFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRla1lzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUjAwc1QwRkJUeXhEUVVGRExFVkJRV3RDTEVWQlFVVXNSVUZCYTBJc1JVRkJSU3hGUVVGWExFVkJRVVVzUlVGQlZ6dFJRVU0zUlN4SlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeE5RVUZOTEZOQlFWTXNSMEZCUnl4RlFVRkZMRmxCUVZrc1lVRkJTeXhEUVVGRE8xRkJRM1JETEUxQlFVMHNVMEZCVXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hoUVVGTExFTkJRVU03VVVGRGRFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBJc1MwRkJTeXhIUVVGSExFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGRrTXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkROME1zUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2xDUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGSFRTeEpRVUZKTEVOQlFVTXNSVUZCYTBJc1JVRkJSU3hGUVVGclFpeEZRVUZGTEVWQlFWY3NSVUZCUlN4RlFVRlhPMUZCUXpGRkxFbEJRVWtzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm1MRTFCUVUwc1UwRkJVeXhIUVVGSExFVkJRVVVzV1VGQldTeGhRVUZMTEVOQlFVTTdVVUZEZEVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUlVGQlJTeFpRVUZaTEdGQlFVc3NRMEZCUXp0UlFVTjBReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelFpeExRVUZMTEVkQlFVY3NSVUZCUlN4UFFVRlBMRVZCUVVVc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTjJReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFdEJRVXNzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVU0zUXl4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzVjBGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlFpeERRVUZETzBsQlEwMHNTVUZCU1N4RFFVRkRMRU5CUVdkQ0xFVkJRVVVzVlVGQmJVSTdVVUZETDBNc1RVRkJUU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRhRU1zVFVGQlRTeERRVUZETEVsQlFVa3NWMEZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUTAwc1QwRkJUeXhEUVVGRExFMUJRV1U3VVVGRE5VSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU42UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hwUWtGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1F5eERRVUZETzBsQlEwMHNVVUZCVVN4RFFVRkRMRTFCUVdVN1VVRkROMElzVFVGQlRTeExRVUZMTEVkQlFVY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVONlFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJUVTBzU1VGQlNTeERRVUZETEVWQlFYZENMRVZCUVVVc1JVRkJiVUlzUlVGQlJTeEZRVUZYTEVWQlFVVXNSVUZCYlVJc1JVRkJSU3hGUVVGdFFpeEZRVUZGTEVWQlFWYzdVVUZETTBnc1RVRkJUU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEycENMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzV1VGQldTeFRRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSQ0xFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU12UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOMFFpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzSkNMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUTI1Q0xFTkJRVU03WjBKQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNKQ0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMjVDTEVOQlFVTTdXVUZEU0N4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEyeENMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOeVFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1JDTEVOQlFVTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRja0lzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOMlFpeERRVUZETzFsQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3haUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNoQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRkRUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UWl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTnVRaXhEUVVGRE8yZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOdVFpeERRVUZETzFsQlEwZ3NRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGFFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNKQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRiRUlzUTBGQlF6dFpRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnlRaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNSQ0xFTkJRVU03V1VGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tJc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjJRaXhEUVVGRE8xbEJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzaENMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEZEVJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVFpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU51UWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UWl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTnVRaXhEUVVGRE8xbEJRMGdzUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hYUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGSFRTeEpRVUZKTEVOQlFVTXNUMEZCYzBJc1JVRkJSU3hGUVVGclFpeEZRVUZGTEVWQlFWYzdVVUZEYWtVc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJRM1pGTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1YwRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTm9ReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1RExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha0lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTllMRU5CUVVNN08wRkJkazFoTEhOQ1FVRmpMRWRCUVZjc1RVRkJUU3hEUVVGRE8wRkJSR2hFTERCQ1FYbE5ReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGV4dC50c1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhabGJuUnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpYWmxiblJ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ldmVudHMudHNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lYXNpbmdcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJlclwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEaENRVUY1UWp0QlFVTjZRaXhuUTBGQk1rSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYW5pbWF0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBJTklUSUFMX05VTV9TQU1QTEVTID0gMTc7XHJcbmNvbnN0IE5FV1RPTl9JVEVSQVRJT05TID0gNTtcclxuY29uc3QgX2NhbGNDb25zdGFudHMgPSAocDEsIHAyKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGE6IDEgLSAzICogcDIgKyAzICogcDEsXHJcbiAgICAgICAgYjogMyAqIHAyIC0gNiAqIHAxLFxyXG4gICAgICAgIGM6IDMgKiBwMSxcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IF9ldmFsdWF0ZUJlemllciA9ICh0LCBjKSA9PiAoKGMuYSAqIHQgKyBjLmIpICogdCArIGMuYykgKiB0O1xyXG5jb25zdCBfZXZhbHVhdGVCZXppZXJEZXJpdmF0aXZlID0gKHQsIGMpID0+ICgzICogYy5hICogdCArIDIgKiBjLmIpICogdCArIGMuYztcclxuY29uc3QgX2NhbGNURnJvbVggPSAoc2FtcGxlcywgeCwgYykgPT4ge1xyXG4gICAgY29uc3QgaWR4ID0gTWF0aC5taW4oTWF0aC5tYXgoc2FtcGxlcy5maW5kSW5kZXgoc2FtcGxlID0+IHNhbXBsZSA+IHgpIC0gMSwgMSksIHNhbXBsZXMubGVuZ3RoIC0gMSk7XHJcbiAgICBjb25zdCBkID0gKHggLSBzYW1wbGVzW2lkeF0pIC8gKHNhbXBsZXNbaWR4ICsgMV0gLSBzYW1wbGVzW2lkeF0pO1xyXG4gICAgbGV0IGVzdGltYXRlID0gKGQgKyBpZHggLSAxKSAvIChJTklUSUFMX05VTV9TQU1QTEVTIC0gMSk7XHJcbiAgICBmb3IgKGxldCBpdGVyID0gMDsgaXRlciA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2l0ZXIpIHtcclxuICAgICAgICBjb25zdCBzbG9wZSA9IF9ldmFsdWF0ZUJlemllckRlcml2YXRpdmUoZXN0aW1hdGUsIGMpO1xyXG4gICAgICAgIGlmIChzbG9wZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZXN0aW1hdGUgLT0gKF9ldmFsdWF0ZUJlemllcihlc3RpbWF0ZSwgYykgLSB4KSAvIHNsb3BlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVzdGltYXRlO1xyXG59O1xyXG5leHBvcnRzLmN1YmljQmV6aWVyID0gKHAxeCwgcDF5LCBwMngsIHAyeSkgPT4ge1xyXG4gICAgaWYgKHAxeCA9PT0gcDF5ICYmIHAyeCA9PT0gcDJ5KSB7XHJcbiAgICAgICAgcmV0dXJuICh4KSA9PiB4O1xyXG4gICAgfVxyXG4gICAgY29uc3QgeENvbnN0YW50cyA9IF9jYWxjQ29uc3RhbnRzKHAxeCwgcDJ4KTtcclxuICAgIGNvbnN0IHlDb25zdGFudHMgPSBfY2FsY0NvbnN0YW50cyhwMXksIHAyeSk7XHJcbiAgICBjb25zdCBzYW1wbGVzID0gbmV3IEZsb2F0MzJBcnJheShJTklUSUFMX05VTV9TQU1QTEVTKTtcclxuICAgIGZvciAobGV0IHNhbXBsZSA9IDA7IHNhbXBsZSA8IElOSVRJQUxfTlVNX1NBTVBMRVM7ICsrc2FtcGxlKSB7XHJcbiAgICAgICAgc2FtcGxlc1tzYW1wbGVdID0gX2V2YWx1YXRlQmV6aWVyKHNhbXBsZSAvIChJTklUSUFMX05VTV9TQU1QTEVTIC0gMSksIHhDb25zdGFudHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh4KSA9PiBfZXZhbHVhdGVCZXppZXIoX2NhbGNURnJvbVgoc2FtcGxlcywgeCwgeENvbnN0YW50cyksIHlDb25zdGFudHMpO1xyXG59O1xyXG5jb25zdCBmbGlwID0gKGVhc2UpID0+ICh0KSA9PiAxIC0gZWFzZSgxIC0gdCk7XHJcbmNvbnN0IGlub3V0ID0gKGVhc2VJbiwgZWFzZU91dCkgPT4ge1xyXG4gICAgcmV0dXJuICh0KSA9PiB0IDwgMC41ID8gZWFzZUluKHQgKiAyKSAvIDIgOiBlYXNlT3V0KDIgKiB0IC0gMSkgLyAyICsgMC41O1xyXG59O1xyXG5jb25zdCBzID0gMS43MDE1ODtcclxuY29uc3QgcCA9IDAuMDc1O1xyXG5leHBvcnRzLmxpbmVhciA9ICh0KSA9PiB0O1xyXG5leHBvcnRzLnF1YWRyYXRpY0luID0gKHQpID0+IE1hdGgucG93KHQsIDIpO1xyXG5leHBvcnRzLnF1YWRyYXRpY091dCA9IGZsaXAoZXhwb3J0cy5xdWFkcmF0aWNJbik7XHJcbmV4cG9ydHMucXVhZHJhdGljID0gaW5vdXQoZXhwb3J0cy5xdWFkcmF0aWNJbiwgZXhwb3J0cy5xdWFkcmF0aWNPdXQpO1xyXG5leHBvcnRzLmN1YmljSW4gPSAodCkgPT4gTWF0aC5wb3codCwgMyk7XHJcbmV4cG9ydHMuY3ViaWNPdXQgPSBmbGlwKGV4cG9ydHMuY3ViaWNJbik7XHJcbmV4cG9ydHMuY3ViaWMgPSBpbm91dChleHBvcnRzLmN1YmljSW4sIGV4cG9ydHMuY3ViaWNPdXQpO1xyXG5leHBvcnRzLnF1YXJ0aWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCA0KTtcclxuZXhwb3J0cy5xdWFydGljT3V0ID0gZmxpcChleHBvcnRzLnF1YXJ0aWNJbik7XHJcbmV4cG9ydHMucXVhcnRpYyA9IGlub3V0KGV4cG9ydHMucXVhcnRpY0luLCBleHBvcnRzLnF1YXJ0aWNPdXQpO1xyXG5leHBvcnRzLnF1aW50aWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCA1KTtcclxuZXhwb3J0cy5xdWludGljT3V0ID0gZmxpcChleHBvcnRzLnF1aW50aWNJbik7XHJcbmV4cG9ydHMucXVpbnRpYyA9IGlub3V0KGV4cG9ydHMucXVpbnRpY0luLCBleHBvcnRzLnF1aW50aWNPdXQpO1xyXG5leHBvcnRzLnNpbmVJbiA9ICh0KSA9PiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTtcclxuZXhwb3J0cy5zaW5lT3V0ID0gZmxpcChleHBvcnRzLnNpbmVJbik7XHJcbmV4cG9ydHMuc2luZSA9IGlub3V0KGV4cG9ydHMuc2luZUluLCBleHBvcnRzLnNpbmVPdXQpO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsSW4gPSAodCkgPT4gTWF0aC5wb3coMiwgKDEwICogKHQgLSAxKSkpO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsT3V0ID0gZmxpcChleHBvcnRzLmV4cG9uZW50aWFsSW4pO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsID0gaW5vdXQoZXhwb3J0cy5leHBvbmVudGlhbEluLCBleHBvcnRzLmV4cG9uZW50aWFsT3V0KTtcclxuZXhwb3J0cy5jaXJjdWxhckluID0gKHQpID0+IDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHQsIDIpKTtcclxuZXhwb3J0cy5jaXJjdWxhck91dCA9IGZsaXAoZXhwb3J0cy5jaXJjdWxhckluKTtcclxuZXhwb3J0cy5jaXJjdWxhciA9IGlub3V0KGV4cG9ydHMuY2lyY3VsYXJJbiwgZXhwb3J0cy5jaXJjdWxhck91dCk7XHJcbmV4cG9ydHMuYmFja0luID0gKHQpID0+IE1hdGgucG93KHQsIDIpICogKChzICsgMSkgKiB0IC0gcyk7XHJcbmV4cG9ydHMuYmFja091dCA9IGZsaXAoZXhwb3J0cy5iYWNrSW4pO1xyXG5leHBvcnRzLmJhY2sgPSBpbm91dChleHBvcnRzLmJhY2tJbiwgZXhwb3J0cy5iYWNrT3V0KTtcclxuZXhwb3J0cy5lbGFzdGljSW4gPSAodCkgPT4gTWF0aC5wb3coMiwgKC0xMCAqIHQpKSAqIE1hdGguc2luKCh0IC0gcCkgKiAoMiAqIE1hdGguUEkpIC8gMC4zKSArIDE7XHJcbmV4cG9ydHMuZWxhc3RpY091dCA9IGZsaXAoZXhwb3J0cy5lbGFzdGljSW4pO1xyXG5leHBvcnRzLmVsYXN0aWMgPSBpbm91dChleHBvcnRzLmVsYXN0aWNJbiwgZXhwb3J0cy5lbGFzdGljT3V0KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpXRnphVzVuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzVFVGQlRTeHRRa0ZCYlVJc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGREwwSXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZSTlVJc1RVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZWTEVWQlFVVXNSVUZCVlN4RlFVRmhMRVZCUVVVN1NVRkRNMFFzVFVGQlRTeERRVUZETzFGQlEwd3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZPMUZCUTNSQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRk8xRkJRMnhDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSVHRMUVVOV0xFTkJRVU03UVVGRFNpeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZaTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGNrWXNUVUZCVFN4NVFrRkJlVUlzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZGYWtjc1RVRkJUU3hYUVVGWExFZEJRVWNzUTBGQlF5eFBRVUZ4UWl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGWkxFVkJRVlVzUlVGQlJUdEpRVU0zUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnVSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1VzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtRc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1IwRkJSeXhwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM0JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMSGxDUVVGNVFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUWl4TFFVRkxMRU5CUVVNN1VVRkRVaXhEUVVGRE8xRkJRMFFzVVVGQlVTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRiRUlzUTBGQlF5eERRVUZETzBGQlJWY3NVVUZCUVN4WFFVRlhMRWRCUVVjc1EwRkJReXhIUVVGWExFVkJRVVVzUjBGQlZ5eEZRVUZGTEVkQlFWY3NSVUZCUlN4SFFVRlhMRVZCUVhsQ0xFVkJRVVU3U1VGRGRrY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUTBRc1RVRkJUU3hWUVVGVkxFZEJRVWNzWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNMVF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6VkRMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzV1VGQldTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03U1VGRGRFUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEUxQlFVMHNSMEZCUnl4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpWRUxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4bFFVRmxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTVUZEY0VZc1EwRkJRenRKUVVORUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1pVRkJaU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBGQlEzcEdMRU5CUVVNc1EwRkJRenRCUVVWR0xFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNTVUZCTWtJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpkRkxFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUVUZCTmtJc1JVRkJSU3hQUVVFNFFpeEZRVUZGTEVWQlFVVTdTVUZET1VVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOdVJpeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03UVVGRGJFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJSVWdzVVVGQlFTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVV4UWl4UlFVRkJMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU03UVVGRGNFTXNVVUZCUVN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTnFReXhSUVVGQkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNiVUpCUVZjc1JVRkJSU3h2UWtGQldTeERRVUZETEVOQlFVTTdRVUZGTjBNc1VVRkJRU3hQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlFTeERRVUZETzBGQlEyaERMRkZCUVVFc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTjZRaXhSUVVGQkxFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNaVUZCVHl4RlFVRkZMR2RDUVVGUkxFTkJRVU1zUTBGQlF6dEJRVVZxUXl4UlFVRkJMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU03UVVGRGJFTXNVVUZCUVN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExHbENRVUZUTEVOQlFVTXNRMEZCUXp0QlFVTTNRaXhSUVVGQkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNhVUpCUVZNc1JVRkJSU3hyUWtGQlZTeERRVUZETEVOQlFVTTdRVUZGZGtNc1VVRkJRU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlFTeERRVUZETzBGQlEyeERMRkZCUVVFc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eHBRa0ZCVXl4RFFVRkRMRU5CUVVNN1FVRkROMElzVVVGQlFTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMR2xDUVVGVExFVkJRVVVzYTBKQlFWVXNRMEZCUXl4RFFVRkRPMEZCUlhaRExGRkJRVUVzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjBSQ3hSUVVGQkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCVFN4RFFVRkRMRU5CUVVNN1FVRkRka0lzVVVGQlFTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMR05CUVUwc1JVRkJSU3hsUVVGUExFTkJRVU1zUTBGQlF6dEJRVVU1UWl4UlFVRkJMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRE8wRkJRMjVFTEZGQlFVRXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXh4UWtGQllTeERRVUZETEVOQlFVTTdRVUZEY2tNc1VVRkJRU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEhGQ1FVRmhMRVZCUVVVc2MwSkJRV01zUTBGQlF5eERRVUZETzBGQlJXNUVMRkZCUVVFc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF6dEJRVU4wUkN4UlFVRkJMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zYTBKQlFWVXNRMEZCUXl4RFFVRkRPMEZCUXk5Q0xGRkJRVUVzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4clFrRkJWU3hGUVVGRkxHMUNRVUZYTEVOQlFVTXNRMEZCUXp0QlFVVXhReXhSUVVGQkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1UwRkJRU3hEUVVGRExFVkJRVWtzUTBGQlF5eERRVUZCTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRia1FzVVVGQlFTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVUwc1EwRkJReXhEUVVGRE8wRkJRM1pDTEZGQlFVRXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhqUVVGTkxFVkJRVVVzWlVGQlR5eERRVUZETEVOQlFVTTdRVUZGT1VJc1VVRkJRU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZUVZc1VVRkJRU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEdsQ1FVRlRMRU5CUVVNc1EwRkJRenRCUVVNM1FpeFJRVUZCTEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc2FVSkJRVk1zUlVGQlJTeHJRa0ZCVlN4RFFVRkRMRU5CUVVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYmFzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2JveFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbG9yLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGltZW5zaW9uXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbnVtYmVyLW9wdGlvbmFsLW51bWJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhdGgtc2VnbWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvaW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcHJlc2VydmUtYXNwZWN0LXJhdGlvXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdGV4dC1jb250ZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdHJhbnNmb3JtXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vd3JhcHBlcnNcIikpO1xyXG5jb25zdCBUcmFuc2Zvcm1zID0gcmVxdWlyZShcIi4vdHJhbnNmb3Jtc1wiKTtcclxuZXhwb3J0cy5UcmFuc2Zvcm1zID0gVHJhbnNmb3JtcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERSQ1FVRjFRanRCUVVOMlFpd3lRa0ZCYzBJN1FVRkRkRUlzYjBOQlFTdENPMEZCUXk5Q0xEWkNRVUYzUWp0QlFVTjRRaXhwUTBGQk5FSTdRVUZETlVJc09FSkJRWGxDTzBGQlEzcENMRGhEUVVGNVF6dEJRVU42UXl4dlEwRkJLMEk3UVVGREwwSXNOa0pCUVhkQ08wRkJRM2hDTERaRFFVRjNRenRCUVVONFF5eHZRMEZCSzBJN1FVRkRMMElzYVVOQlFUUkNPMEZCUXpWQ0xHZERRVUV5UWp0QlFVVXpRaXd5UTBGQk1rTTdRVUZEYkVNc1owTkJRVlVpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG52YXIgQ29sb3JNYXRyaXg7XHJcbihmdW5jdGlvbiAoQ29sb3JNYXRyaXgpIHtcclxuICAgIGNsYXNzIFJhdyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodmFsdWVzID0gW1sxLCAwLCAwLCAwLCAwXSwgWzAsIDEsIDAsIDAsIDBdLCBbMCwgMCwgMSwgMCwgMF0sIFswLCAwLCAwLCAxLCAwXSwgWzAsIDAsIDAsIDAsIDBdXSkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIm1hdHJpeFwiO1xyXG4gICAgICAgICAgICB0aGlzLmFyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmFyciA9IHRoaXMuYXJyLmNvbmNhdCguLi52YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSYXcoW2Nzcy5zcGxpdChcIiBcIikubWFwKHBhcnNlRmxvYXQpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJhdyhbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmF3KFt0aGlzLmFyci5tYXAoKHZhbCwgaSkgPT4gaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb21baV0sIHZhbCwgdCkpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29sb3JNYXRyaXguUmF3ID0gUmF3O1xyXG4gICAgY2xhc3MgU2F0dXJhdGUge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHZhbHVlID0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwic2F0dXJhdGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNhdHVyYXRlKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNhdHVyYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2F0dXJhdGUoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20udmFsdWUsIHRoaXMudmFsdWUsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb2xvck1hdHJpeC5TYXR1cmF0ZSA9IFNhdHVyYXRlO1xyXG4gICAgY2xhc3MgSHVlUm90YXRlIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IDApIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcImh1ZVJvdGF0ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSHVlUm90YXRlKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEh1ZVJvdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEh1ZVJvdGF0ZShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS52YWx1ZSwgdGhpcy52YWx1ZSwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4Lkh1ZVJvdGF0ZSA9IEh1ZVJvdGF0ZTtcclxuICAgIGNsYXNzIEx1bWluYW5jZVRvQWxwaGFDb2xvck1hdHJpeCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwibHVtaW5hbmNlVG9BbHBoYVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29sb3JNYXRyaXguTHVtaW5hbmNlVG9BbHBoYUNvbG9yTWF0cml4ID0gTHVtaW5hbmNlVG9BbHBoYUNvbG9yTWF0cml4O1xyXG59KShDb2xvck1hdHJpeCA9IGV4cG9ydHMuQ29sb3JNYXRyaXggfHwgKGV4cG9ydHMuQ29sb3JNYXRyaXggPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdGJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjlzYjNJdGJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzYjBSQlFYbERPMEZCVVhwRExFbEJRV2xDTEZkQlFWY3NRMEUyUmpOQ08wRkJOMFpFTEZkQlFXbENMRmRCUVZjN1NVRkZNVUk3VVVGSFJTeFpRVUZaTEZOQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZHTDBjc1UwRkJTU3hIUVVGaExGRkJRVkVzUTBGQlF6dFpRVU14UWl4UlFVRkhMRWRCUVdFc1JVRkJSU3hEUVVGRE8xbEJSWGhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVONFF5eERRVUZETzFGQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xbEJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrUXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UWl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ6UXl4RlFVRkZMRWxCUVZrN1dVRkROMFFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFTkJRVU03VVVGRFRTeEhRVUZITEVOQlFVTXNUMEZCYzBNc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQll6dFpRVU0zUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNMElzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYkVRc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRemxETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUTAwc1YwRkJWeXhEUVVGRExFbEJRVmtzUlVGQlJTeERRVUZUTzFsQlEzaERMRTFCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRkxFTkJRVU03UzBGRFJqdEpRVEZDV1N4bFFVRkhMRTFCTUVKbUxFTkJRVUU3U1VGRlJEdFJRVVZGTEZsQlFXMUNMRkZCUVdkQ0xFTkJRVU03V1VGQmFrSXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJXVHRaUVVRM1FpeFRRVUZKTEVkQlFXVXNWVUZCVlN4RFFVRkRPMUZCUTBVc1EwRkJRenRSUVVOcVF5eFJRVUZSTzFsQlEySXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETDBJc1EwRkJRenRSUVVOTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0WlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRExFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVWQlFVVXNRMEZCUXp0WlFVTjRRaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnpReXhGUVVGRkxFbEJRVms3V1VGRE4wUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhFTEVOQlFVTTdVVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJjME1zUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCYlVJN1dVRkRiRVlzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMnhFTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTVReXhEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRmpMRVZCUVVVc1EwRkJVenRaUVVNeFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4UlFVRlJMRU5CUVVNc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hEUVVGRE8wdEJRMFk3U1VFeFFsa3NiMEpCUVZFc1YwRXdRbkJDTEVOQlFVRTdTVUZGUkR0UlFVVkZMRmxCUVcxQ0xGRkJRV2RDTEVOQlFVTTdXVUZCYWtJc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQldUdFpRVVEzUWl4VFFVRkpMRWRCUVdkQ0xGZEJRVmNzUTBGQlF6dFJRVU5CTEVOQlFVTTdVVUZEYWtNc1VVRkJVVHRaUVVOaUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJReTlDTEVOQlFVTTdVVUZEVFN4TFFVRkxMRU5CUVVNc1IwRkJhMEk3V1VGRE4wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UXl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRGVrSXNRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmMwTXNSVUZCUlN4SlFVRlpPMWxCUXpkRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9SQ3hEUVVGRE8xRkJRMDBzUjBGQlJ5eERRVUZETEU5QlFYTkRMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRVzlDTzFsQlEyNUdMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNelFpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnNSQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE9VTXNRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkRUU3hYUVVGWExFTkJRVU1zU1VGQlpTeEZRVUZGTEVOQlFWTTdXVUZETTBNc1RVRkJUU3hEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrUXNRMEZCUXp0TFFVTkdPMGxCTVVKWkxIRkNRVUZUTEZsQk1FSnlRaXhEUVVGQk8wbEJSVVE3VVVGQlFUdFpRVU5UTEZOQlFVa3NSMEZCZFVJc2EwSkJRV3RDTEVOQlFVTTdVVUZKZGtRc1EwRkJRenRSUVVoUkxGRkJRVkU3V1VGRFlpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTFvc1EwRkJRenRMUVVOR08wbEJURmtzZFVOQlFUSkNMRGhDUVV0MlF5eERRVUZCTzBGQlJVZ3NRMEZCUXl4RlFUZEdaMElzVjBGQlZ5eEhRVUZZTEcxQ1FVRlhMRXRCUVZnc2JVSkJRVmNzVVVFMlJqTkNJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9jb2xvci1tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jbGFzcyBDb2xvckltcGwge1xyXG59XHJcbmNsYXNzIFJHQiBleHRlbmRzIENvbG9ySW1wbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCBhID0gMSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yID0gMDtcclxuICAgICAgICB0aGlzLmcgPSAwO1xyXG4gICAgICAgIHRoaXMuYiA9IDA7XHJcbiAgICAgICAgdGhpcy5hID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmdiYU1hdGNoID0geC5tYXRjaCgvXnJnYmFcXHMqP1xcKFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj8sXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqPyxcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/LFxccyo/KDB8MFxcLlxcZCp8MXwxLjAqKVxccyo/XFwpJC9pKTtcclxuICAgICAgICAgICAgaWYgKHJnYmFNYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yID0gcGFyc2VJbnQocmdiYU1hdGNoWzFdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmcgPSBwYXJzZUludChyZ2JhTWF0Y2hbMl0sIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYiA9IHBhcnNlSW50KHJnYmFNYXRjaFszXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hID0gcGFyc2VGbG9hdChyZ2JhTWF0Y2hbNF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJnYk1hdGNoID0geC5tYXRjaCgvXnJnYlxccyo/XFwoXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqPyxcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/LFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj9cXCkkL2kpO1xyXG4gICAgICAgICAgICBpZiAocmdiTWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuciA9IHBhcnNlSW50KHJnYk1hdGNoWzFdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmcgPSBwYXJzZUludChyZ2JNYXRjaFsyXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iID0gcGFyc2VJbnQocmdiTWF0Y2hbM10sIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yID0geDtcclxuICAgICAgICAgICAgdGhpcy5nID0geTtcclxuICAgICAgICAgICAgdGhpcy5iID0gejtcclxuICAgICAgICAgICAgdGhpcy5hID0gYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHJnYmEoJHtNYXRoLnJvdW5kKHRoaXMucil9LCAke01hdGgucm91bmQodGhpcy5nKX0sICR7TWF0aC5yb3VuZCh0aGlzLmIpfSwgJHt0aGlzLmF9KWA7XHJcbiAgICB9XHJcbiAgICB0b0hTTCgpIHtcclxuICAgICAgICBjb25zdCByID0gdGhpcy5yIC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmcgLyAyNTU7XHJcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYiAvIDI1NTtcclxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgICBjb25zdCBhdmcgPSAobWF4ICsgbWluKSAvIDI7XHJcbiAgICAgICAgY29uc3QgZCA9IG1heCAtIG1pbjtcclxuICAgICAgICBsZXQgaDtcclxuICAgICAgICBsZXQgcztcclxuICAgICAgICBjb25zdCBsID0gYXZnO1xyXG4gICAgICAgIGlmIChkID09PSAwKSB7XHJcbiAgICAgICAgICAgIGggPSAwO1xyXG4gICAgICAgICAgICBzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHMgPSBkIC8gKDEgLSBNYXRoLmFicygyICogYXZnIC0gMSkpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1heCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSByOlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAoKGcgLSBiKSAvIGQpICUgNjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZzpcclxuICAgICAgICAgICAgICAgICAgICBoID0gKChiIC0gcikgLyBkKSArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGI6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9ICgociAtIGcpIC8gZCkgKyA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoICo9IDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEhTTChoLCBzLCBsKTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQsIG1vZGUpIHtcclxuICAgICAgICBjb25zdCBtb2RlUHJlZml4ID0gbW9kZS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgaWYgKG1vZGVQcmVmaXggPT09IFwicmdiXCIpIHtcclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIU0wpIHtcclxuICAgICAgICAgICAgICAgIGZyb20gPSBmcm9tLnRvUkdCKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBSR0IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUkdCKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnIsIHRoaXMuciwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmcsIHRoaXMuZywgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmIsIHRoaXMuYiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1vZGVQcmVmaXggPT09IFwiaHNsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9IU0woKS5pbnRlcnBvbGF0ZShmcm9tLCB0LCBtb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSFNMIGV4dGVuZHMgQ29sb3JJbXBsIHtcclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIGEgPSAxKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmggPSAwO1xyXG4gICAgICAgIHRoaXMucyA9IDA7XHJcbiAgICAgICAgdGhpcy5sID0gMDtcclxuICAgICAgICB0aGlzLmEgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCBoc2xhTWF0Y2ggPSB4Lm1hdGNoKC9eaHNsYVxccyo/XFwoXFxzKj8oMDAwfDA/XFxkezEsMn18WzEtMl1cXGRcXGR8M1swLTVdXFxkfDM2MClcXHMqPyxcXHMqPygwXFwuPzAqfDEwMFxcLj8wKnxcXGR7MSwyfXxcXGR7MSwyfVxcLlxcZCspXFwlXFxzKj8sXFxzKj8oMFxcLj8wKnwxMDBcXC4/MCp8XFxkezEsMn18XFxkezEsMn1cXC5cXGQrKVxcJVxccyo/LFxccyo/KDB8MFxcLlxcZCp8MXwxLjAqKVxccyo/XFwpJC9pKTtcclxuICAgICAgICAgICAgaWYgKGhzbGFNYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oID0gcGFyc2VGbG9hdChoc2xhTWF0Y2hbMV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zID0gcGFyc2VGbG9hdChoc2xhTWF0Y2hbMl0pIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sID0gcGFyc2VGbG9hdChoc2xhTWF0Y2hbM10pIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hID0gcGFyc2VGbG9hdChoc2xhTWF0Y2hbNF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGhzbE1hdGNoID0geC5tYXRjaCgvXmhzbFxccyo/XFwoXFxzKj8oMDAwfDA/XFxkezEsMn18WzEtMl1cXGRcXGR8M1swLTVdXFxkfDM2MClcXHMqPyxcXHMqPygwXFwuPzAqfDEwMFxcLj8wKnxcXGR7MSwyfXxcXGR7MSwyfVxcLlxcZCspXFwlXFxzKj8sXFxzKj8oMFxcLj8wKnwxMDBcXC4/MCp8XFxkezEsMn18XFxkezEsMn1cXC5cXGQrKVxcJVxccyo/XFwpJC9pKTtcclxuICAgICAgICAgICAgaWYgKGhzbE1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmggPSBwYXJzZUZsb2F0KGhzbE1hdGNoWzFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucyA9IHBhcnNlRmxvYXQoaHNsTWF0Y2hbMl0pIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sID0gcGFyc2VGbG9hdChoc2xNYXRjaFszXSkgLyAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMucyA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMubCA9IHo7XHJcbiAgICAgICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBoc2xhKCR7dGhpcy5oICUgMzYwfSwgJHt0aGlzLnMgKiAxMDB9JSwgJHt0aGlzLmwgKiAxMDB9JSwgJHt0aGlzLmF9KWA7XHJcbiAgICB9XHJcbiAgICB0b1JHQigpIHtcclxuICAgICAgICBsZXQgciA9IDA7XHJcbiAgICAgICAgbGV0IGcgPSAwO1xyXG4gICAgICAgIGxldCBiID0gMDtcclxuICAgICAgICBpZiAodGhpcy5zICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSAoMSAtIE1hdGguYWJzKDIgKiB0aGlzLmwgLSAxKSkgKiB0aGlzLnM7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBjICogKDEgLSBNYXRoLmFicygodGhpcy5oIC8gNjApICUgMiAtIDEpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaCA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICByID0gYztcclxuICAgICAgICAgICAgICAgIGcgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaCA8IDEyMCkge1xyXG4gICAgICAgICAgICAgICAgciA9IHg7XHJcbiAgICAgICAgICAgICAgICBnID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmggPCAxODApIHtcclxuICAgICAgICAgICAgICAgIGcgPSBjO1xyXG4gICAgICAgICAgICAgICAgYiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oIDwgMjQwKSB7XHJcbiAgICAgICAgICAgICAgICBnID0geDtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaCA8IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgYiA9IGM7XHJcbiAgICAgICAgICAgICAgICByID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmggPCAyNDApIHtcclxuICAgICAgICAgICAgICAgIGIgPSB4O1xyXG4gICAgICAgICAgICAgICAgciA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbSA9IHRoaXMubCAtIDAuNSAqIGM7XHJcbiAgICAgICAgICAgIHIgKz0gbTtcclxuICAgICAgICAgICAgZyArPSBtO1xyXG4gICAgICAgICAgICBiICs9IG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUkdCKHIgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTUpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCwgbW9kZSkge1xyXG4gICAgICAgIGNvbnN0IG1vZGVQcmVmaXggPSBtb2RlLnN1YnN0cigwLCAzKTtcclxuICAgICAgICBpZiAobW9kZVByZWZpeCA9PT0gXCJoc2xcIikge1xyXG4gICAgICAgICAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIFJHQikge1xyXG4gICAgICAgICAgICAgICAgZnJvbSA9IGZyb20udG9IU0woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIEhTTCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGgxID0gZnJvbS5oO1xyXG4gICAgICAgICAgICAgICAgbGV0IGgyID0gdGhpcy5oO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IGgxIC0gaDI7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAxODApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJoc2wtc2hvcnRlc3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgxICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDIgKz0gMzYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiaHNsLWxvbmdlc3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgxICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDIgKz0gMzYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPiAwICYmIG1vZGUgPT09IFwiaHNsLWNsb2Nrd2lzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDIgKz0gMzYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwICYmIG1vZGUgPT09IFwiaHNsLWNvdW50ZXJjbG9ja3dpc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGgxICs9IDM2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSFNMKGludGVycG9sYXRpb25fMS5fbGVycChoMSwgaDIsIHQpICUgMzYwLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5zLCB0aGlzLnMsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5sLCB0aGlzLmwsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb2RlUHJlZml4ID09PSBcInJnYlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUkdCKCkuaW50ZXJwb2xhdGUoZnJvbSwgdCwgbW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIENvbG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdCwgeCA9IDAsIHkgPSAwLCB6ID0gMCwgYSA9IDEpIHtcclxuICAgICAgICB0aGlzLm1vZGUgPSBDb2xvci5ERUZBVUxUX01PREU7XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJyZ2JcIikge1xyXG4gICAgICAgICAgICB0aGlzLmltcGwgPSBuZXcgUkdCKHgsIHksIHosIGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtYXQgPT09IFwiaHNsXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IEhTTCh4LCB5LCB6LCBhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKFwicmdiXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltcGwgPSBuZXcgUkdCKGZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybWF0LmluZGV4T2YoXCJoc2xcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1wbCA9IG5ldyBIU0woZm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtYXQuaW5kZXhPZihcIiNcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBnID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBiID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBtID0gZm9ybWF0Lm1hdGNoKC9eIyhbMC05YS1mQS1GXXszfSkkL2kpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByID0gcGFyc2VJbnQobVsxXS5jaGFyQXQoMCksIDE2KSAqIDB4MTE7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KG1bMV0uY2hhckF0KDEpLCAxNikgKiAweDExO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludChtWzFdLmNoYXJBdCgyKSwgMTYpICogMHgxMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG0gPSBmb3JtYXQubWF0Y2goL14jKFswLTlhLWZBLUZdezZ9KSQvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9IHBhcnNlSW50KG1bMV0uc3Vic3RyKDAsIDIpLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChtWzFdLnN1YnN0cigyLCAyKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQobVsxXS5zdWJzdHIoNCwgMiksIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltcGwgPSBuZXcgUkdCKHIsIGcsIGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGNzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBuZXcgQ29sb3IoKTtcclxuICAgICAgICBjLmltcGwgPSB0aGlzLmltcGwuaW50ZXJwb2xhdGUoZnJvbS5pbXBsLCB0LCB0aGlzLm1vZGUpO1xyXG4gICAgICAgIGMubW9kZSA9IHRoaXMubW9kZTtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxufVxyXG5Db2xvci5ERUZBVUxUX01PREUgPSBcInJnYlwiO1xyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmpiMnh2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTEc5RVFVRjVRenRCUVVsNlF6dERRVWRETzBGQlJVUXNVMEZCVlN4VFFVRlJMRk5CUVZNN1NVRlJla0lzV1VGQldTeEpRVUZ4UWl4RFFVRkRMRVZCUVVVc1NVRkJXU3hEUVVGRExFVkJRVVVzU1VGQldTeERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRPMUZCUXpkRkxFdEJRVXNzUlVGQlJTeERRVUZETzFGQlVrWXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVOa0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEWkN4TlFVRkRMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMlFzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVMXdRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zZFV4QlFYVk1MRU5CUVVNc1EwRkJRenRaUVVOdVRpeEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTndReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTNCRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRjRU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1EwRkJRenRaUVVORUxFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc05FcEJRVFJLTEVOQlFVTXNRMEZCUXp0WlFVTjJUQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU51UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEyNURMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFdDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxGRkJRVkU3VVVGRFlpeE5RVUZOTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRGFFY3NRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOMlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU4yUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTjJRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6bENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNMVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NRMEZCVXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hEUVVGVExFTkJRVU03VVVGRFpDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRaQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOYUxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVGl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMUlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5hTEV0QlFVc3NRMEZCUXp0dlFrRkRTaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTNSQ0xFdEJRVXNzUTBGQlF6dG5Ra0ZEVWl4TFFVRkxMRU5CUVVNN2IwSkJRMG9zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVOMFFpeExRVUZMTEVOQlFVTTdaMEpCUTFJc1MwRkJTeXhEUVVGRE8yOUNRVU5LTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRGRFSXNTMEZCU3l4RFFVRkRPMmRDUVVOU08yOUNRVU5GTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJRMDRzUzBGQlN5eERRVUZETzFsQlExWXNRMEZCUXp0WlFVTkVMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFZpeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRmxMRVZCUVVVc1EwRkJVeXhGUVVGRkxFbEJRWFZDTzFGQlEzQkZMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRlZCUVZVc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzV1VGQldTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRM1JDTEVOQlFVTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtnc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTmtMRU5CUVVNN1EwRkRSanRCUVVWRUxGTkJRVlVzVTBGQlVTeFRRVUZUTzBsQlVYcENMRmxCUVZrc1NVRkJjVUlzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFJRVU0zUlN4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVZKR0xFMUJRVU1zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEWkN4TlFVRkRMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMlFzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGTmNFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMREpNUVVFeVRDeERRVUZETEVOQlFVTTdXVUZEZGs0c1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOc1F5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRM2hETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGVFTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUTBGQlF6dFpRVU5FTEUxQlFVMHNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zWjB0QlFXZExMRU5CUVVNc1EwRkJRenRaUVVNelRDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycERMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dG5Ra0ZEZGtNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFsQlEzcERMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5ZTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmlMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU5vUml4RFFVRkRPMGxCUTAwc1MwRkJTenRSUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTldMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5XTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VRc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5PTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRVaXhEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRUaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExSXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzaENMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEwNHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOU0xFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVWl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMDRzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNN1dVRkRSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOUUxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVUN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMVFzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6VkRMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQlpTeEZRVUZGTEVOQlFWTXNSVUZCUlN4SlFVRjFRanRSUVVOd1JTeE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFZRVUZWTEV0QlFVc3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTjBRaXhEUVVGRE8xbEJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4WlFVRlpMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzaENMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xFbEJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBKQlEzSkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZWtJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZMTEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJRelZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3pSQ1FVTmlMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU03ZDBKQlExb3NRMEZCUXp0M1FrRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEzQkNMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU03ZDBKQlExb3NRMEZCUXp0dlFrRkRTQ3hEUVVGRE8yZENRVU5JTEVOQlFVTTdaMEpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUXpOQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU5pTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dDNRa0ZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN05FSkJRM0JDTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dHZRa0ZEU0N4RFFVRkRPMmRDUVVOSUxFTkJRVU03WjBKQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEV0QlFVc3NaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGVrTXNSVUZCUlN4SlFVRkpMRWRCUVVjc1EwRkJRenRuUWtGRFdpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4TFFVRkxMSE5DUVVGelFpeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRhRVFzUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXp0blFrRkRXaXhEUVVGRE8yZENRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXh4UWtGQlN5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtnc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTmtMRU5CUVVNN1EwRkRSanRCUVVWRU8wbEJVVVVzV1VGQldTeE5RVUVyUWl4RlFVRkZMRWxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRSUVU1b1J5eFRRVUZKTEVkQlFYTkNMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU03VVVGUGJFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVNc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaERMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRPVUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzWkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRPVUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEVml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlExWXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5XTEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJZc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRGVFTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRlRU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZETVVNc1EwRkJRenRuUWtGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRUaXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eERRVUZETzI5Q1FVTjZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRFppeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzNkQ1FVTndReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8zZENRVU53UXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOMFF5eERRVUZETzJkQ1FVTklMRU5CUVVNN1owSkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFTkJRVU03VVVGRFNDeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRkZCUVZFN1VVRkRZaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU55UWl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ6UXl4RlFVRkZMRWxCUVZrN1VVRkROMFFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYzBNc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQlowSTdVVUZETDBVc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNMElzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYkVRc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRPVU1zUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFTkJRVk03VVVGRGRrTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU4wUWl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONFJDeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGJrSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOWUxFTkJRVU03TzBGQkwwUmhMR3RDUVVGWkxFZEJRWE5DTEV0QlFVc3NRMEZCUXp0QlFVUjRSQ3h6UWtGcFJVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9jb2xvci50c1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNsYXNzIE1hdHJpeCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcclxuICAgICAgICB0aGlzLmFyciA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXJyID0gdGhpcy5hcnIuY29uY2F0KC4uLnZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnIuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4KFtjc3Muc3BsaXQoXCIgXCIpLm1hcChwYXJzZUZsb2F0KV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeChbdGhpcy5hcnIubWFwKCh2YWwsIGkpID0+IGludGVycG9sYXRpb25fMS5fbGVycChmcm9tW2ldLCB2YWwsIHQpKV0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWF0cml4ID0gTWF0cml4O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNiMFJCUVhsRE8wRkJSWHBETzBsQlJVVXNXVUZCV1N4TlFVRnJRanRSUVVSMlFpeFJRVUZITEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUlhoQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wbEJRMDBzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZUVJc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYzBNc1JVRkJSU3hKUVVGWk8xRkJRemRFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVhORExFVkJRVVVzU1VGQldTeEZRVUZGTEZGQlFXbENPMUZCUTJoR0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemxETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRVmtzUlVGQlJTeERRVUZUTzFGQlEzaERMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoRkxFTkJRVU03UTBGRFJqdEJRVFZDUkN4M1FrRTBRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY2xhc3MgTnVtYmVyT3B0aW9uYWxOdW1iZXIge1xyXG4gICAgY29uc3RydWN0b3Iobiwgbykge1xyXG4gICAgICAgIHRoaXMubiA9IG47XHJcbiAgICAgICAgdGhpcy5vID0gbztcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5vICE9PSB1bmRlZmluZWQpID8gYCR7dGhpcy5ufSwke3RoaXMub31gIDogdGhpcy5uLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIocGFyc2VGbG9hdCh0b2tzWzBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICBpZiAoZnJvbS5vICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5uLCB0aGlzLm4sIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5vLCB0aGlzLm8sIHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZnJvbS5vID09PSB1bmRlZmluZWQgJiYgdGhpcy5vICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5uLCB0aGlzLm4sIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoMCwgdGhpcy5vLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZyb20ubyAhPT0gdW5kZWZpbmVkICYmIHRoaXMubyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubywgMCwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5uLCB0aGlzLm4sIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJPcHRpb25hbE51bWJlciA9IE51bWJlck9wdGlvbmFsTnVtYmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZ0WW1WeUxXOXdkR2x2Ym1Gc0xXNTFiV0psY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTUxYldKbGNpMXZjSFJwYjI1aGJDMXVkVzFpWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN4dlJFRkJlVU03UVVGRmVrTTdTVUZEUlN4WlFVRnRRaXhEUVVGVExFVkJRVk1zUTBGQlZUdFJRVUUxUWl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGUk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCVXp0SlFVRkhMRU5CUVVNN1NVRkROVU1zVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkROVVVzUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4SFFVRnJRanRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVJc1RVRkJUU3hEUVVGRExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka1FzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEc5Q1FVRnZRaXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJTeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY2tNc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYzBNc1JVRkJSU3hKUVVGWk8xRkJRemRFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVhORExFVkJRVVVzU1VGQldTeEZRVUZGTEZGQlFTdENPMUZCUXpsR0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemxETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRVEJDTEVWQlFVVXNRMEZCVXp0UlFVTjBSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha1FzVFVGQlRTeERRVUZETEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UkN4TlFVRk5MRU5CUVVNc1NVRkJTU3h2UWtGQmIwSXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha1lzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZUVRc1RVRkJUU3hEUVVGRExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBHTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEc5Q1FVRnZRaXhEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVVFzUTBGQlF6dEpRVU5JTEVOQlFVTTdRMEZEUmp0QlFYUkRSQ3h2UkVGelEwTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9udW1iZXItb3B0aW9uYWwtbnVtYmVyLnRzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY29uc3QgcG9pbnRfMSA9IHJlcXVpcmUoXCIuL3BvaW50XCIpO1xyXG5jbGFzcyBQYXRoU2VnbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kKSB7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBcmdzKGNzcy5zdWJzdHIoMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEluc3RhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0aFNlZ21lbnQgPSBQYXRoU2VnbWVudDtcclxuKGZ1bmN0aW9uIChQYXRoU2VnbWVudCkge1xyXG4gICAgY2xhc3MgU2luZ2xlTGVuZ3RoIGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIGwgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLmwgPSBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY29tbWFuZH0gJHt0aGlzLmwudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UoYmFzZV8xLl9MZW5ndGhQYXJzZShjc3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS5sLCB0aGlzLmwsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5TaW5nbGVMZW5ndGggPSBTaW5nbGVMZW5ndGg7XHJcbiAgICBjbGFzcyBTaW5nbGVQb2ludCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jb21tYW5kfSAke3RoaXMucC50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnAucGFyc2UoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnAuaW50ZXJwb2xhdGUoZnJvbS5wLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuU2luZ2xlUG9pbnQgPSBTaW5nbGVQb2ludDtcclxuICAgIGNsYXNzIERvdWJsZVBvaW50IGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIHAxID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHAyID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHRoaXMucDEgPSBwMTtcclxuICAgICAgICAgICAgdGhpcy5wMiA9IHAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY29tbWFuZH0gJHt0aGlzLnAxLnRvU3RyaW5nKCl9ICR7dGhpcy5wMi50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wMS5wYXJzZSh0b2tzWzBdKSwgdGhpcy5wMi5wYXJzZSh0b2tzWzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnAxLmludGVycG9sYXRlKGZyb20ucDEsIHQpLCB0aGlzLnAyLmludGVycG9sYXRlKGZyb20ucDIsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5Eb3VibGVQb2ludCA9IERvdWJsZVBvaW50O1xyXG4gICAgY2xhc3MgVHJpcGxlUG9pbnQgZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29tbWFuZCwgcDEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgcDIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgcDMgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5wMSA9IHAxO1xyXG4gICAgICAgICAgICB0aGlzLnAyID0gcDI7XHJcbiAgICAgICAgICAgIHRoaXMucDMgPSBwMztcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5wMS50b1N0cmluZygpfSAke3RoaXMucDIudG9TdHJpbmcoKX0gJHt0aGlzLnAzLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnAxLnBhcnNlKHRva3NbMF0pLCB0aGlzLnAyLnBhcnNlKHRva3NbMV0pLCB0aGlzLnAzLnBhcnNlKHRva3NbMl0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucDEuaW50ZXJwb2xhdGUoZnJvbS5wMSwgdCksIHRoaXMucDIuaW50ZXJwb2xhdGUoZnJvbS5wMiwgdCksIHRoaXMucDMuaW50ZXJwb2xhdGUoZnJvbS5wMywgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LlRyaXBsZVBvaW50ID0gVHJpcGxlUG9pbnQ7XHJcbiAgICBjbGFzcyBNb3ZlVG9BYnMgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIk1cIiwgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9BYnMocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9BYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5Nb3ZlVG9BYnMgPSBNb3ZlVG9BYnM7XHJcbiAgICBjbGFzcyBNb3ZlVG9SZWwgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIm1cIiwgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9SZWwocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlVG9SZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5Nb3ZlVG9SZWwgPSBNb3ZlVG9SZWw7XHJcbiAgICBjbGFzcyBDbG9zZVBhdGggZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiWlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DbG9zZVBhdGggPSBDbG9zZVBhdGg7XHJcbiAgICBjbGFzcyBMaW5lVG9BYnMgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIkxcIiwgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9BYnMocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9BYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9BYnMgPSBMaW5lVG9BYnM7XHJcbiAgICBjbGFzcyBMaW5lVG9SZWwgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcImxcIiwgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9SZWwocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9SZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9SZWwgPSBMaW5lVG9SZWw7XHJcbiAgICBjbGFzcyBMaW5lVG9Ib3Jpem9udGFsQWJzIGV4dGVuZHMgU2luZ2xlTGVuZ3RoIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihoID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIkhcIiwgaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0hvcml6b250YWxBYnMoaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9Ib3Jpem9udGFsQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvSG9yaXpvbnRhbEFicyA9IExpbmVUb0hvcml6b250YWxBYnM7XHJcbiAgICBjbGFzcyBMaW5lVG9Ib3Jpem9udGFsUmVsIGV4dGVuZHMgU2luZ2xlTGVuZ3RoIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihoID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcImhcIiwgaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb0hvcml6b250YWxSZWwoaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9Ib3Jpem9udGFsUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvSG9yaXpvbnRhbFJlbCA9IExpbmVUb0hvcml6b250YWxSZWw7XHJcbiAgICBjbGFzcyBMaW5lVG9WZXJ0aWNhbEFicyBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodiA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJWXCIsIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9WZXJ0aWNhbEFicyh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1ZlcnRpY2FsQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvVmVydGljYWxBYnMgPSBMaW5lVG9WZXJ0aWNhbEFicztcclxuICAgIGNsYXNzIExpbmVUb1ZlcnRpY2FsUmVsIGV4dGVuZHMgU2luZ2xlTGVuZ3RoIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcInZcIiwgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2Uodikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1ZlcnRpY2FsQWJzKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvVmVydGljYWxBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5MaW5lVG9WZXJ0aWNhbFJlbCA9IExpbmVUb1ZlcnRpY2FsUmVsO1xyXG4gICAgY2xhc3MgQ3VydmVUb0N1YmljQWJzIGV4dGVuZHMgVHJpcGxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGQsIGUsIGYpIHtcclxuICAgICAgICAgICAgY29uc3QgYzEgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGMgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYyA6IG5ldyBwb2ludF8xLlBvaW50KGUsIGYpO1xyXG4gICAgICAgICAgICBzdXBlcihcIkNcIiwgYzEsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMSwgYzIsIHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNBYnMoYzEsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY0FicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9DdWJpY0FicyA9IEN1cnZlVG9DdWJpY0FicztcclxuICAgIGNsYXNzIEN1cnZlVG9DdWJpY1JlbCBleHRlbmRzIFRyaXBsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYyA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBkLCBlLCBmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMxID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGMgOiBuZXcgcG9pbnRfMS5Qb2ludChlLCBmKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJjXCIsIGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzEsIGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljUmVsKGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNSZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNSZWwgPSBDdXJ2ZVRvQ3ViaWNSZWw7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihcIlNcIiwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljU21vb3RoQWJzKGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aEFicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9DdWJpY1Ntb290aEFicyA9IEN1cnZlVG9DdWJpY1Ntb290aEFicztcclxuICAgIGNsYXNzIEN1cnZlVG9DdWJpY1Ntb290aFJlbCBleHRlbmRzIERvdWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIHN1cGVyKFwic1wiLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzIsIHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNTbW9vdGhSZWwoYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljU21vb3RoUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb0N1YmljU21vb3RoUmVsID0gQ3VydmVUb0N1YmljU21vb3RoUmVsO1xyXG4gICAgY2xhc3MgQ3VydmVUb1F1YWRyYXRpY0FicyBleHRlbmRzIERvdWJsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMSA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiUVwiLCBjMSwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzEsIHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljQWJzKGMxLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvUXVhZHJhdGljQWJzID0gQ3VydmVUb1F1YWRyYXRpY0FicztcclxuICAgIGNsYXNzIEN1cnZlVG9RdWFkcmF0aWNSZWwgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzEgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihcInFcIiwgYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1JlbChjMSwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY1JlbCA9IEN1cnZlVG9RdWFkcmF0aWNSZWw7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJUXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicyhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzID0gQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicztcclxuICAgIGNsYXNzIEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWwgZXh0ZW5kcyBTaW5nbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB5ID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihcInRcIiwgcCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBwIDogbmV3IHBvaW50XzEuUG9pbnQocCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWwgPSBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsO1xyXG4gICAgY2xhc3MgQXJjVG8gZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29tbWFuZCwgciA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHhBeGlzUm90YXRlID0gMCwgbGFyZ2VBcmMgPSBmYWxzZSwgc3dlZXBDbG9ja3dpc2UgPSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnIgPSByO1xyXG4gICAgICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgICAgICB0aGlzLnhBeGlzUm90YXRlID0geEF4aXNSb3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMubGFyZ2VBcmMgPSBsYXJnZUFyYztcclxuICAgICAgICAgICAgdGhpcy5zd2VlcENsb2Nrd2lzZSA9IHN3ZWVwQ2xvY2t3aXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuci50b1N0cmluZygpfSAke3RoaXMueEF4aXNSb3RhdGV9ICR7dGhpcy5sYXJnZUFyYyA/IDEgOiAwfSAke3RoaXMuc3dlZXBDbG9ja3dpc2UgPyAxIDogMH0gJHt0aGlzLnAudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMuci5wYXJzZSh0b2tzWzBdKSwgdGhpcy5wLnBhcnNlKHRva3NbNF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pLCB0b2tzWzJdID09PSBcIjFcIiwgdG9rc1szXSA9PT0gXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5yLmludGVycG9sYXRlKGZyb20uciwgdCksIHRoaXMucC5pbnRlcnBvbGF0ZShmcm9tLnAsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS54QXhpc1JvdGF0ZSwgdGhpcy54QXhpc1JvdGF0ZSwgdCksICh0IDwgMC41KSA/IGZyb20ubGFyZ2VBcmMgOiB0aGlzLmxhcmdlQXJjLCAodCA8IDAuNSkgPyBmcm9tLnN3ZWVwQ2xvY2t3aXNlIDogdGhpcy5zd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQXJjVG8gPSBBcmNUbztcclxuICAgIGNsYXNzIEFyY1RvQWJzIGV4dGVuZHMgQXJjVG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkLCBlLCBmLCBnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBsZXQgeEF4aXNSb3RhdGUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGFyZ2VBcmMgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHN3ZWVwQ2xvY2t3aXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ICYmIGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhpc1JvdGF0ZSA9IGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXJnZUFyYyA9IGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2VlcENsb2Nrd2lzZSA9IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhpc1JvdGF0ZSA9IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXJnZUFyYyA9IGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2VlcENsb2Nrd2lzZSA9IGc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIoXCJBXCIsIHIsIHAsIHhBeGlzUm90YXRlLCBsYXJnZUFyYywgc3dlZXBDbG9ja3dpc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHIsIHAsIHhBeGlzUm90YXRlLCBsYXJnZUFyYywgc3dlZXBDbG9ja3dpc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcmNUb0FicyhyLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFyY1RvQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQXJjVG9BYnMgPSBBcmNUb0FicztcclxuICAgIGNsYXNzIEFyY1RvUmVsIGV4dGVuZHMgQXJjVG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkLCBlLCBmLCBnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBsZXQgeEF4aXNSb3RhdGUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGFyZ2VBcmMgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHN3ZWVwQ2xvY2t3aXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ICYmIGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhpc1JvdGF0ZSA9IGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXJnZUFyYyA9IGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2VlcENsb2Nrd2lzZSA9IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhpc1JvdGF0ZSA9IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXJnZUFyYyA9IGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2VlcENsb2Nrd2lzZSA9IGc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIoXCJhXCIsIHIsIHAsIHhBeGlzUm90YXRlLCBsYXJnZUFyYywgc3dlZXBDbG9ja3dpc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHIsIHAsIHhBeGlzUm90YXRlLCBsYXJnZUFyYywgc3dlZXBDbG9ja3dpc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcmNUb1JlbChyLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFyY1RvUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQXJjVG9SZWwgPSBBcmNUb1JlbDtcclxufSkoUGF0aFNlZ21lbnQgPSBleHBvcnRzLlBhdGhTZWdtZW50IHx8IChleHBvcnRzLlBhdGhTZWdtZW50ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dGMGFDMXpaV2R0Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY0dGMGFDMXpaV2R0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc2IwUkJRWGxETzBGQlEzcERMR2xEUVVGclJUdEJRVU5zUlN4dFEwRkJaME03UVVGRmFFTTdTVUZEUlN4WlFVRnRRaXhQUVVFMFFqdFJRVUUxUWl4WlFVRlBMRWRCUVZBc1QwRkJUeXhEUVVGeFFqdEpRVUZITEVOQlFVTTdTVUZGTlVNc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjJReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETzFGQlEyaERMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXOUNMRVZCUVVVc1NVRkJXVHRSUVVNelF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnZRaXhGUVVGRkxFbEJRVmtzUlVGQlJTeFJRVUZ6UWp0UlFVTnVSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelFpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnNSQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNNVF5eERRVUZETzBsQlEwZ3NRMEZCUXp0RFFVbEdPMEZCZGtKRUxHdERRWFZDUXp0QlFVVkVMRmRCUVdsQ0xGZEJRVmM3U1VGSk1VSXNhMEpCUVcxRExGTkJRVkVzVjBGQlZ6dFJRVU53UkN4WlFVRlpMRTlCUVRoQ0xFVkJRVk1zU1VGQldTeERRVUZETzFsQlF6bEVMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVVJyUXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8xRkJSV2hGTEVOQlFVTTdVVUZEVFN4UlFVRlJPMWxCUTJJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEYUVRc1EwRkJRenRSUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZYTzFsQlF6RkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEcxQ1FVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12UXl4RFFVRkRPMUZCUTAwc1YwRkJWeXhEUVVGRExFbEJRV3RDTEVWQlFVVXNRMEZCVXp0WlFVTTVReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4NVFrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVSU3hEUVVGRE8wdEJSMFk3U1VGbWNVSXNkMEpCUVZrc1pVRmxha01zUTBGQlFUdEpRVU5FTEdsQ1FVRnJReXhUUVVGUkxGZEJRVmM3VVVGRGJrUXNXVUZCV1N4UFFVRXdReXhGUVVGVExFbEJRVmNzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlJpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkVPRU1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCZVVJN1VVRkZla1lzUTBGQlF6dFJRVU5OTEZGQlFWRTdXVUZEWWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVU5vUkN4RFFVRkRPMUZCUTAwc1UwRkJVeXhEUVVGRExFZEJRVmM3V1VGRE1VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12UXl4RFFVRkRPMUZCUTAwc1YwRkJWeXhEUVVGRExFbEJRV2xDTEVWQlFVVXNRMEZCVXp0WlFVTTNReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE0wUXNRMEZCUXp0TFFVZEdPMGxCWm5GQ0xIVkNRVUZYTEdOQlpXaERMRU5CUVVFN1NVRkRSQ3hwUWtGQmEwTXNVMEZCVVN4WFFVRlhPMUZCUTI1RUxGbEJRVmtzVDBGQk9FSXNSVUZCVXl4TFFVRlpMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCVXl4TFFVRlpMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYUVnc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlJHdERMRTlCUVVVc1IwRkJSaXhGUVVGRkxFTkJRWGxDTzFsQlFWTXNUMEZCUlN4SFFVRkdMRVZCUVVVc1EwRkJlVUk3VVVGRmJFZ3NRMEZCUXp0UlFVTk5MRkZCUVZFN1dVRkRZaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETzFGQlEzWkZMRU5CUVVNN1VVRkRUU3hUUVVGVExFTkJRVU1zUjBGQlZ6dFpRVU14UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVVc1EwRkJRenRSUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZwUWl4RlFVRkZMRU5CUVZNN1dVRkROME1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVlzUTBGQlF6dExRVWRHTzBsQmFFSnhRaXgxUWtGQlZ5eGpRV2RDYUVNc1EwRkJRVHRKUVVORUxHbENRVUZyUXl4VFFVRlJMRmRCUVZjN1VVRkRia1FzV1VGQldTeFBRVUZyUWl4RlFVRlRMRXRCUVZrc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRlRMRXRCUVZrc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRlRMRXRCUVZrc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjRTU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdXVUZFYzBJc1QwRkJSU3hIUVVGR0xFVkJRVVVzUTBGQmVVSTdXVUZCVXl4UFFVRkZMRWRCUVVZc1JVRkJSU3hEUVVGNVFqdFpRVUZUTEU5QlFVVXNSMEZCUml4RlFVRkZMRU5CUVhsQ08xRkJSVEZKTEVOQlFVTTdVVUZEVFN4UlFVRlJPMWxCUTJJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJRemRHTEVOQlFVTTdVVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJWenRaUVVNeFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0Vjc1EwRkJRenRSUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZwUWl4RlFVRkZMRU5CUVZNN1dVRkROME1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12U0N4RFFVRkRPMHRCUjBZN1NVRm9RbkZDTEhWQ1FVRlhMR05CWjBKb1F5eERRVUZCTzBsQlJVUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJSM2hETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJPMWxCUXpOQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFFpeERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRa0ZCVXl4WlFWbHlRaXhEUVVGQk8wbEJRMFFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUjNoRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UWtGQlV5eFpRVmx5UWl4RFFVRkJPMGxCUlVRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlEzaERPMWxCUTBVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEySXNRMEZCUXp0UlFVTk5MRkZCUVZFN1dVRkRZaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEySXNRMEZCUXp0UlFVTk5MRk5CUVZNc1EwRkJReXhIUVVGWE8xbEJRekZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFTkJRVU03VVVGRFRTeFhRVUZYTEVOQlFVTXNTVUZCWlN4RlFVRkZMRU5CUVZNN1dVRkRNME1zVFVGQlRTeERRVUZETEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRla0lzUTBGQlF6dExRVU5HTzBsQmFFSlpMSEZDUVVGVExGbEJaMEp5UWl4RFFVRkJPMGxCUlVRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlIzaERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrUXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUk8xbEJRek5DTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UWl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzB0QlEwWTdTVUZhV1N4eFFrRkJVeXhaUVZseVFpeERRVUZCTzBsQlEwUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJSM2hETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJPMWxCUXpOQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFFpeERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRa0ZCVXl4WlFWbHlRaXhEUVVGQk8wbEJSVVFzZVVKQlFXbERMRk5CUVZFc1dVRkJXVHRSUVVOdVJDeFpRVUZaTEVsQlFWa3NRMEZCUXp0WlFVTjJRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoQ0xFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNRMEZCVXp0WlFVTTFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53UXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUlVGQlJTeERRVUZETzFGQlEyNURMRU5CUVVNN1MwRkRSanRKUVZaWkxDdENRVUZ0UWl4elFrRlZMMElzUTBGQlFUdEpRVU5FTEhsQ1FVRnBReXhUUVVGUkxGbEJRVms3VVVGRGJrUXNXVUZCV1N4SlFVRlpMRU5CUVVNN1dVRkRka0lzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1FpeERRVUZETzFGQlEwMHNZVUZCWVN4RFFVRkRMRU5CUVZNN1dVRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VNc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0UlFVTnVReXhEUVVGRE8wdEJRMFk3U1VGV1dTd3JRa0ZCYlVJc2MwSkJWUzlDTEVOQlFVRTdTVUZGUkN4MVFrRkJLMElzVTBGQlVTeFpRVUZaTzFGQlEycEVMRmxCUVZrc1NVRkJXU3hEUVVGRE8xbEJRM1pDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFSXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGVE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4RExFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTFCUVUwc1EwRkJReXhKUVVGSkxHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1VVRkRha01zUTBGQlF6dExRVU5HTzBsQlZsa3NOa0pCUVdsQ0xHOUNRVlUzUWl4RFFVRkJPMGxCUTBRc2RVSkJRU3RDTEZOQlFWRXNXVUZCV1R0UlFVTnFSQ3haUVVGWkxFbEJRVmtzUTBGQlF6dFpRVU4yUWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaENMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUTBGQlV6dFpRVU0xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOc1F5eERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRMnBETEVOQlFVTTdTMEZEUmp0SlFWWlpMRFpDUVVGcFFpeHZRa0ZWTjBJc1EwRkJRVHRKUVVWRUxIRkNRVUUyUWl4VFFVRlJMRmRCUVZjN1VVRkhPVU1zV1VGQldTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZTeEZRVUZGTEVOQlFWVTdXVUZETTBvc1RVRkJUU3hGUVVGRkxFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGRGNrVXNUVUZCVFN4RlFVRkZMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRMMFVzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZET1VVc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM2hDTEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1JVRkJVeXhGUVVGRkxFVkJRVk1zUlVGQlJTeERRVUZSTzFsQlEycEVMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM2hETEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNSVUZCUlN4RFFVRkRPMUZCUXk5Q0xFTkJRVU03UzBGRFJqdEpRV1paTERKQ1FVRmxMR3RDUVdVelFpeERRVUZCTzBsQlEwUXNjVUpCUVRaQ0xGTkJRVkVzVjBGQlZ6dFJRVWM1UXl4WlFVRlpMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWVHRaUVVNelNpeE5RVUZOTEVWQlFVVXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTnlSU3hOUVVGTkxFVkJRVVVzUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU12UlN4TlFVRk5MRU5CUVVNc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVJc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eEZRVUZUTEVWQlFVVXNSVUZCVXl4RlFVRkZMRU5CUVZFN1dVRkRha1FzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCWlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVNc1EwRkJRenRSUVVOTkxHVkJRV1U3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0TFFVTkdPMGxCWmxrc01rSkJRV1VzYTBKQlpUTkNMRU5CUVVFN1NVRkZSQ3d5UWtGQmJVTXNVMEZCVVN4WFFVRlhPMUZCUjNCRUxGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWVHRaUVVNeFJ5eE5RVUZOTEVWQlFVVXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTXZSU3hOUVVGTkxFTkJRVU1zUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU01UlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndRaXhEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVWQlFWTXNSVUZCUlN4RFFVRlJPMWxCUTNSRExFMUJRVTBzUTBGQlF5eEpRVUZKTEhGQ1FVRnhRaXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhReXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h4UWtGQmNVSXNSVUZCUlN4RFFVRkRPMUZCUTNKRExFTkJRVU03UzBGRFJqdEpRV1JaTEdsRFFVRnhRaXgzUWtGamFrTXNRMEZCUVR0SlFVTkVMREpDUVVGdFF5eFRRVUZSTEZkQlFWYzdVVUZIY0VRc1dVRkJXU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZPMWxCUXpGSExFMUJRVTBzUlVGQlJTeEhRVUZWTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJWeXhGUVVGRkxFTkJRVmNzUTBGQlF5eERRVUZETzFsQlF5OUZMRTFCUVUwc1EwRkJReXhIUVVGVkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCVnl4RlFVRkZMRU5CUVZjc1EwRkJReXhEUVVGRE8xbEJRemxGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkNMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUlVGQlV5eEZRVUZGTEVOQlFWRTdXVUZEZEVNc1RVRkJUU3hEUVVGRExFbEJRVWtzY1VKQlFYRkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkRMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdVVUZEY2tNc1EwRkJRenRMUVVOR08wbEJaRmtzYVVOQlFYRkNMSGRDUVdOcVF5eERRVUZCTzBsQlJVUXNlVUpCUVdsRExGTkJRVkVzVjBGQlZ6dFJRVWRzUkN4WlFVRlpMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlZTeEZRVUZGTEVOQlFWVTdXVUZETVVjc1RVRkJUU3hGUVVGRkxFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGREwwVXNUVUZCVFN4RFFVRkRMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRPVVVzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFSXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhGUVVGVExFVkJRVVVzUTBGQlVUdFpRVU4wUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dFJRVU51UXl4RFFVRkRPMHRCUTBZN1NVRmtXU3dyUWtGQmJVSXNjMEpCWXk5Q0xFTkJRVUU3U1VGRFJDeDVRa0ZCYVVNc1UwRkJVU3hYUVVGWE8xRkJSMnhFTEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZUdFpRVU14Unl4TlFVRk5MRVZCUVVVc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNdlJTeE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETzFGQlEwMHNZVUZCWVN4RFFVRkRMRVZCUVZNc1JVRkJSU3hEUVVGUk8xbEJRM1JETEUxQlFVMHNRMEZCUXl4SlFVRkpMRzFDUVVGdFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFF5eERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRMjVETEVOQlFVTTdTMEZEUmp0SlFXUlpMQ3RDUVVGdFFpeHpRa0ZqTDBJc1EwRkJRVHRKUVVWRUxDdENRVUYxUXl4VFFVRlJMRmRCUVZjN1VVRkhlRVFzV1VGQldTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRPMWxCUXpWRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVOQlFWRTdXVUZETTBJc1RVRkJUU3hEUVVGRExFbEJRVWtzZVVKQlFYbENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE1VTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NlVUpCUVhsQ0xFVkJRVVVzUTBGQlF6dFJRVU42UXl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UTBGQmVVSXNORUpCV1hKRExFTkJRVUU3U1VGRFJDd3JRa0ZCZFVNc1UwRkJVU3hYUVVGWE8xRkJSM2hFTEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJPMWxCUXpOQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEhsQ1FVRjVRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkRMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMSGxDUVVGNVFpeEZRVUZGTEVOQlFVTTdVVUZEZWtNc1EwRkJRenRMUVVOR08wbEJXbGtzY1VOQlFYbENMRFJDUVZseVF5eERRVUZCTzBsQlJVUXNWMEZCTkVJc1UwRkJVU3hYUVVGWE8xRkJRemRETEZsQlFWa3NUMEZCYTBJc1JVRkJVeXhKUVVGWExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJVeXhKUVVGWExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJVeXhqUVVGelFpeERRVUZETEVWQlFWTXNWMEZCYjBJc1MwRkJTeXhGUVVGVExHbENRVUV3UWl4SlFVRkpPMWxCUXpOTkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVUnpRaXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUY1UWp0WlFVRlRMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRWGxDTzFsQlFWTXNaMEpCUVZjc1IwRkJXQ3hYUVVGWExFTkJRVms3V1VGQlV5eGhRVUZSTEVkQlFWSXNVVUZCVVN4RFFVRnBRanRaUVVGVExHMUNRVUZqTEVkQlFXUXNZMEZCWXl4RFFVRm5RanRSUVVVM1RTeERRVUZETzFGQlEwMHNVVUZCVVR0WlFVTmlMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRha2tzUTBGQlF6dFJRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRlhPMWxCUXpGQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE5VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEycEpMRU5CUVVNN1VVRkRUU3hYUVVGWExFTkJRVU1zU1VGQlZ5eEZRVUZGTEVOQlFWTTdXVUZEZGtNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRE1VOHNRMEZCUXp0TFFVZEdPMGxCYUVKeFFpeHBRa0ZCU3l4UlFXZENNVUlzUTBGQlFUdEpRVVZFTEdOQlFYTkNMRk5CUVZFc1MwRkJTenRSUVVkcVF5eFpRVUZaTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJiVUlzUlVGQlJTeERRVUZ2UWl4RlFVRkZMRU5CUVc5Q0xFVkJRVVVzUTBGQlZ5eEZRVUZGTEVOQlFWYzdXVUZETjBzc1RVRkJUU3hEUVVGRExFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGRGNFVXNUVUZCVFN4RFFVRkRMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRPVVVzU1VGQlNTeFhRVUZYTEVkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFbEJRVWtzVVVGQlVTeEhRVUZaTEV0QlFVc3NRMEZCUXp0WlFVTTVRaXhKUVVGSkxHTkJRV01zUjBGQldTeEpRVUZKTEVOQlFVTTdXVUZEYmtNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEdGQlFVc3NTVUZCU1N4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBNc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE4wSXNWMEZCVnl4SFFVRkhMRU5CUVZjc1EwRkJRenRuUWtGRE5VSXNRMEZCUXp0blFrRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4UlFVRlJMRWRCUVVjc1EwRkJXU3hEUVVGRE8yZENRVU14UWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMR05CUVdNc1IwRkJSeXhEUVVGWkxFTkJRVU03WjBKQlEyaERMRU5CUVVNN1dVRkRTQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE4wSXNWMEZCVnl4SFFVRkhMRU5CUVZjc1EwRkJRenRuUWtGRE5VSXNRMEZCUXp0blFrRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4UlFVRlJMRWRCUVVjc1EwRkJXU3hEUVVGRE8yZENRVU14UWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMR05CUVdNc1IwRkJSeXhEUVVGWkxFTkJRVU03WjBKQlEyaERMRU5CUVVNN1dVRkRTQ3hEUVVGRE8xbEJRMFFzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeFJRVUZSTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJMRVZCUVVVc1EwRkJVU3hGUVVGRkxGZEJRVzFDTEVWQlFVVXNVVUZCYVVJc1JVRkJSU3hqUVVGak8xbEJRemRHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRGJrVXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRlRUlzUTBGQlF6dExRVU5HTzBsQmRFTlpMRzlDUVVGUkxGZEJjME53UWl4RFFVRkJPMGxCUTBRc1kwRkJjMElzVTBGQlVTeExRVUZMTzFGQlIycERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZ0UWl4RlFVRkZMRU5CUVc5Q0xFVkJRVVVzUTBGQmIwSXNSVUZCUlN4RFFVRlhMRVZCUVVVc1EwRkJWenRaUVVNM1N5eE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTndSU3hOUVVGTkxFTkJRVU1zUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU01UlN4SlFVRkpMRmRCUVZjc1IwRkJWeXhEUVVGRExFTkJRVU03V1VGRE5VSXNTVUZCU1N4UlFVRlJMRWRCUVZrc1MwRkJTeXhEUVVGRE8xbEJRemxDTEVsQlFVa3NZMEZCWXl4SFFVRlpMRWxCUVVrc1EwRkJRenRaUVVOdVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1lVRkJTeXhKUVVGSkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNM1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhYUVVGWExFZEJRVWNzUTBGQlZ5eERRVUZETzJkQ1FVTTFRaXhEUVVGRE8yZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpkQ0xGRkJRVkVzUjBGQlJ5eERRVUZaTEVOQlFVTTdaMEpCUXpGQ0xFTkJRVU03WjBKQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROMElzWTBGQll5eEhRVUZITEVOQlFWa3NRMEZCUXp0blFrRkRhRU1zUTBGQlF6dFpRVU5JTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhYUVVGWExFZEJRVWNzUTBGQlZ5eERRVUZETzJkQ1FVTTFRaXhEUVVGRE8yZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpkQ0xGRkJRVkVzUjBGQlJ5eERRVUZaTEVOQlFVTTdaMEpCUXpGQ0xFTkJRVU03WjBKQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROMElzWTBGQll5eEhRVUZITEVOQlFWa3NRMEZCUXp0blFrRkRhRU1zUTBGQlF6dFpRVU5JTEVOQlFVTTdXVUZEUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNWMEZCVnl4RlFVRkZMRkZCUVZFc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFJRVU14UkN4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFTkJRVkVzUlVGQlJTeERRVUZSTEVWQlFVVXNWMEZCYlVJc1JVRkJSU3hSUVVGcFFpeEZRVUZGTEdOQlFXTTdXVUZETjBZc1RVRkJUU3hEUVVGRExFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxGRkJRVkVzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVTnVSU3hEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU40UWl4RFFVRkRPMHRCUTBZN1NVRjBRMWtzYjBKQlFWRXNWMEZ6UTNCQ0xFTkJRVUU3UVVGRFNDeERRVUZETEVWQmRscG5RaXhYUVVGWExFZEJRVmdzYlVKQlFWY3NTMEZCV0N4dFFrRkJWeXhSUVhWYU0wSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9wYXRoLXNlZ21lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFByZXNlcnZlQXNwZWN0UmF0aW8ge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbWVldE9yU2xpY2UpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5tZWV0T3JTbGljZSA9IG1lZXRPclNsaWNlO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCAhPT0gdW5kZWZpbmVkICYmIHRoaXMueSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSBgeCR7dGhpcy54fVkke3RoaXMueX1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZWV0T3JTbGljZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gXCIgXCIgKyB0aGlzLm1lZXRPclNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJlc2VydmVBc3BlY3RSYXRpbyA9IFByZXNlcnZlQXNwZWN0UmF0aW87XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ5ZG1VdFlYTndaV04wTFhKaGRHbHZMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNISmxjMlZ5ZG1VdFlYTndaV04wTFhKaGRHbHZMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdTVUZKUlN4WlFVRnRRaXhEUVVGNVFpeEZRVUZUTEVOQlFYbENMRVZCUVZNc1YwRkJPRUk3VVVGQmJFY3NUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJkMEk3VVVGQlV5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRjNRanRSUVVGVExHZENRVUZYTEVkQlFWZ3NWMEZCVnl4RFFVRnRRanRKUVVGSExFTkJRVU03U1VGRGJFZ3NVVUZCVVR0UlFVTmlMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFsQlEycERMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJrTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEyaERMRU5CUVVNN1dVRkRSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEySXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTm9RaXhEUVVGRE8wbEJRMGdzUTBGQlF6dERRVU5HTzBGQmFFSkVMR3RFUVdkQ1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50c1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNsYXNzIE51bWJlcldyYXBwZXIge1xyXG4gICAgY29uc3RydWN0b3IobiA9IDApIHtcclxuICAgICAgICB0aGlzLm4gPSBuO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlcldyYXBwZXIocGFyc2VGbG9hdChjc3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyV3JhcHBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQgPyBvdmVycmlkZSA6IHRoaXMpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyV3JhcHBlcihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5uLCB0aGlzLm4sIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlcldyYXBwZXIgPSBOdW1iZXJXcmFwcGVyO1xyXG5jbGFzcyBBcnJheVdyYXBwZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXJyID0gW10pIHtcclxuICAgICAgICB0aGlzLmFyciA9IGFycjtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyci5qb2luKFwiXFx0XCIpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiXFx0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5V3JhcHBlcih0aGlzLmFyci5tYXAoKGEsIGkpID0+IGEucGFyc2UoKGkgPj0gdG9rcy5sZW5ndGgpID8gbnVsbCA6IHRva3NbaV0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5V3JhcHBlcih0aGlzLmFyci5tYXAoYSA9PiBhLnBhcnNlKG51bGwpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCA/IG92ZXJyaWRlIDogdGhpcykudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheVdyYXBwZXIodGhpcy5hcnIubWFwKChzLCBpKSA9PiBzLmludGVycG9sYXRlKGZyb20uYXJyW2ldLCB0KSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlXcmFwcGVyID0gQXJyYXlXcmFwcGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkM0poY0hCbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKM2NtRndjR1Z5Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTEc5RVFVRjVRenRCUVVWNlF6dEpRVU5GTEZsQlFXMUNMRWxCUVZrc1EwRkJRenRSUVVGaUxFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdTVUZCUnl4RFFVRkRPMGxCUXpkQ0xGRkJRVkU3VVVGRFlpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU16UWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdGQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4aFFVRmhMRVZCUVVVc1EwRkJRenRSUVVNM1FpeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGelF5eEZRVUZGTEVsQlFWazdVVUZETjBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmMwTXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJkMEk3VVVGRGRrWXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGNFWXNRMEZCUXp0SlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGdFFpeEZRVUZGTEVOQlFWTTdVVUZETDBNc1RVRkJUU3hEUVVGRExFbEJRVWtzWVVGQllTeERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNrUXNRMEZCUXp0RFFVTkdPMEZCY2tKRUxITkRRWEZDUXp0QlFVVkVPMGxCUTBVc1dVRkJiVUlzVFVGQlZ5eEZRVUZGTzFGQlFXSXNVVUZCUnl4SFFVRklMRWRCUVVjc1EwRkJWVHRKUVVWb1F5eERRVUZETzBsQlEwMHNVVUZCVVR0UlFVTmlMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkROMElzVFVGQlRTeERRVUZETEVsQlFVa3NXVUZCV1N4RFFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMjVITEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZsQlFWa3NRMEZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXk5RUxFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVhORExFVkJRVVVzU1VGQldUdFJRVU0zUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGelF5eEZRVUZGTEVsQlFWa3NSVUZCUlN4UlFVRXdRanRSUVVONlJpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOd1JpeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhGQ0xFVkJRVVVzUTBGQlV6dFJRVU5xUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3haUVVGWkxFTkJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzQkdMRU5CUVVNN1EwRkRSanRCUVhoQ1JDeHZRMEYzUWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3dyYXBwZXJzLnRzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcm90YXRlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2NhbGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9za2V3XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdHJhbnNsYXRlXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERoQ1FVRjVRanRCUVVONlFpdzRRa0ZCZVVJN1FVRkRla0lzTmtKQlFYZENPMEZCUTNoQ0xEUkNRVUYxUWp0QlFVTjJRaXhwUTBGQk5FSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtXCIpO1xyXG5jbGFzcyBNYXRyaXhfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEgPSAxLCBiID0gMCwgYyA9IDAsIGQgPSAxLCBlID0gMCwgZiA9IDApIHtcclxuICAgICAgICBzdXBlcihcIm1hdHJpeFwiKTtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgdGhpcy5jID0gYztcclxuICAgICAgICB0aGlzLmQgPSBkO1xyXG4gICAgICAgIHRoaXMuZSA9IGU7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYX0gJHt0aGlzLmJ9ICR7dGhpcy5jfSAke3RoaXMuZH0gJHt0aGlzLmV9ICR7dGhpcy5mfWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSksIHBhcnNlRmxvYXQodG9rc1syXSksIHBhcnNlRmxvYXQodG9rc1szXSksIHBhcnNlRmxvYXQodG9rc1s0XSksIHBhcnNlRmxvYXQodG9rc1s1XSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4X1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5iLCB0aGlzLmIsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5jLCB0aGlzLmMsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5kLCB0aGlzLmQsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5lLCB0aGlzLmUsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5mLCB0aGlzLmYsIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hdHJpeF9UcmFuc2Zvcm0gPSBNYXRyaXhfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYldGMGNtbDRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNkVVJCUVRSRE8wRkJRelZETERSRFFVRjVRenRCUVVWNlF5eHpRa0ZCT0VJc1UwRkJVU3h4UWtGQlV6dEpRVU0zUXl4WlFVRnRRaXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNc1JVRkJVeXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNN1VVRkROVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUkVNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdFJRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRSUVVGVExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8wbEJSVGxKTEVOQlFVTTdTVUZEVFN4SlFVRkpPMUZCUTFRc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOMlJTeERRVUZETzBsQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVd0Q08xRkJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFTaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3huUWtGQlowSXNSVUZCUlN4RFFVRkRPMUZCUTJoRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhOQ0xFVkJRVVVzUTBGQlV6dFJRVU5zUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3huUWtGQlowSXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGTUxFTkJRVU03UTBGRFJqdEJRV3hDUkN3MFEwRnJRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFJvdGF0ZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSwgeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmF9ICR7dGhpcy54fSAke3RoaXMueX1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pLCBwYXJzZUZsb2F0KHRva3NbMl0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybSgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3RhdGVfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLngsIHRoaXMueCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnksIHRoaXMueSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUm90YXRlX1RyYW5zZm9ybSA9IFJvdGF0ZV9UcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtOTBZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljbTkwWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2RVUkJRVFJETzBGQlF6VkRMRFJEUVVGNVF6dEJRVVY2UXl4elFrRkJPRUlzVTBGQlVTeHhRa0ZCVXp0SlFVTTNReXhaUVVGdFFpeERRVUZUTEVWQlFWTXNTVUZCV1N4RFFVRkRMRVZCUVZNc1NVRkJXU3hEUVVGRE8xRkJRM1JGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVSRExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWRTdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0SlFVVjRSU3hEUVVGRE8wbEJRMDBzU1VGQlNUdFJRVU5VTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGVrTXNRMEZCUXp0SlFVTk5MRk5CUVZNc1EwRkJReXhIUVVGclFqdFJRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2RDUVVGblFpeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wWXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtNc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCYzBJc1JVRkJSU3hEUVVGVE8xRkJRMnhFTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2RDUVVGblFpeERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVjc1EwRkJRenREUVVOR08wRkJiRUpFTERSRFFXdENReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3JvdGF0ZS50c1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcclxuY2xhc3MgVW5pZm9ybVNjYWxlX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzID0gMSkge1xyXG4gICAgICAgIHN1cGVyKFwic2NhbGVcIik7XHJcbiAgICAgICAgdGhpcy5zID0gcztcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucy50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnMsIHRoaXMucywgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVW5pZm9ybVNjYWxlX1RyYW5zZm9ybSA9IFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm07XHJcbmNsYXNzIFNjYWxlX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMSwgeSA9IHgpIHtcclxuICAgICAgICBzdXBlcihcInNjYWxlXCIpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY2FsZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLngsIHRoaXMueCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnksIHRoaXMueSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2NhbGVfVHJhbnNmb3JtID0gU2NhbGVfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMk5oYkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp6WTJGc1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIVkVRVUUwUXp0QlFVTTFReXcwUTBGQmVVTTdRVUZGZWtNc05FSkJRVzlETEZOQlFWRXNjVUpCUVZNN1NVRkRia1FzV1VGQmJVSXNTVUZCV1N4RFFVRkRPMUZCUXpsQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVUkZMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3U1VGRmFFTXNRMEZCUXp0SlFVTk5MRWxCUVVrN1VVRkRWQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNelFpeERRVUZETzBsQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVd0Q08xRkJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxITkNRVUZ6UWl4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5DUVVGelFpeEZRVUZGTEVOQlFVTTdVVUZEZEVNc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCTkVJc1JVRkJSU3hEUVVGVE8xRkJRM2hFTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5DUVVGelFpeERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE9VUXNRMEZCUXp0RFFVTkdPMEZCYWtKRUxIZEVRV2xDUXp0QlFVVkVMSEZDUVVFMlFpeFRRVUZSTEhGQ1FVRlRPMGxCUXpWRExGbEJRVzFDTEVsQlFWa3NRMEZCUXl4RlFVRlRMRWxCUVZrc1EwRkJRenRSUVVOd1JDeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkVSU3hOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRKUVVWMFJDeERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJhMEk3VVVGRGFrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNMVFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNSQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNSQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUlN4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQmNVSXNSVUZCUlN4RFFVRlRPMUZCUTJwRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnBHTEVOQlFVTTdRMEZEUmp0QlFYUkNSQ3d3UTBGelFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3NjYWxlLnRzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtXCIpO1xyXG5jbGFzcyBTa2V3WF9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSA9IDApIHtcclxuICAgICAgICBzdXBlcihcInNrZXdYXCIpO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2tld1hfVHJhbnNmb3JtKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrZXdYX1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNrZXdYX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNrZXdYX1RyYW5zZm9ybSA9IFNrZXdYX1RyYW5zZm9ybTtcclxuY2xhc3MgU2tld1lfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJza2V3WVwiKTtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrZXdZX1RyYW5zZm9ybShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2V3WV9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTa2V3WV9UcmFuc2Zvcm0oaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20uYSwgdGhpcy5hLCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ta2V3WV9UcmFuc2Zvcm0gPSBTa2V3WV9UcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMydGxkeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluTnJaWGN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3gxUkVGQk5FTTdRVUZETlVNc05FTkJRWGxETzBGQlJYcERMSEZDUVVFMlFpeFRRVUZSTEhGQ1FVRlRPMGxCUXpWRExGbEJRVzFDTEVsQlFWa3NRMEZCUXp0UlFVTTVRaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZFUlN4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8wbEJSV2hETEVOQlFVTTdTVUZEVFN4SlFVRkpPMUZCUTFRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRnJRanRSUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hsUVVGbExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVU1zUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZETDBJc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCY1VJc1JVRkJSU3hEUVVGVE8xRkJRMnBFTEUxQlFVMHNRMEZCUXl4SlFVRkpMR1ZCUVdVc1EwRkJReXh4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNaRUxFTkJRVU03UTBGRFJqdEJRV3BDUkN3d1EwRnBRa003UVVGRlJDeHhRa0ZCTmtJc1UwRkJVU3h4UWtGQlV6dEpRVU0xUXl4WlFVRnRRaXhKUVVGWkxFTkJRVU03VVVGRE9VSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJSRVVzVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0SlFVVm9ReXhEUVVGRE8wbEJRMDBzU1VGQlNUdFJRVU5VTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRkRUU3hUUVVGVExFTkJRVU1zUjBGQmEwSTdVVUZEYWtNc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCWlN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6bERMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMR1ZCUVdVc1JVRkJSU3hEUVVGRE8xRkJReTlDTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRWEZDTEVWQlFVVXNRMEZCVXp0UlFVTnFSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeGxRVUZsTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4yUkN4RFFVRkRPME5CUTBZN1FVRnFRa1FzTUVOQmFVSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3NrZXcudHNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFRyYW5zbGF0ZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0cmFuc2xhdGVcIik7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy54fSAke3RoaXMueX1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLngsIHRoaXMueCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnksIHRoaXMueSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNsYXRlX1RyYW5zZm9ybSA9IFRyYW5zbGF0ZV9UcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5zWVhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpZEhKaGJuTnNZWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzZFVSQlFUUkRPMEZCUXpWRExEUkRRVUY1UXp0QlFVVjZReXg1UWtGQmFVTXNVMEZCVVN4eFFrRkJVenRKUVVOb1JDeFpRVUZ0UWl4SlFVRlpMRU5CUVVNc1JVRkJVeXhKUVVGWkxFTkJRVU03VVVGRGNFUXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSRVlzVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0UlFVRlRMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3U1VGRmRFUXNRMEZCUXp0SlFVTk5MRWxCUVVrN1VVRkRWQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUTAwc1UwRkJVeXhEUVVGRExFZEJRV3RDTzFGQlEycERMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE5VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUkN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc2JVSkJRVzFDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkZMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTI1RExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhsQ0xFVkJRVVVzUTBGQlV6dFJRVU55UkN4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0pHTEVOQlFVTTdRMEZEUmp0QlFYUkNSQ3hyUkVGelFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3RyYW5zbGF0ZS50c1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9maWx0ZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ub24tcmVuZGVyYWJsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlcmFibGVcIikpO1xyXG5jb25zdCBGaWx0ZXJQcmltaXRpdmVzID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXNcIik7XHJcbmV4cG9ydHMuRmlsdGVyUHJpbWl0aXZlcyA9IEZpbHRlclByaW1pdGl2ZXM7XHJcbmNvbnN0IE5vblJlbmRlcmFibGVzID0gcmVxdWlyZShcIi4vbm9uLXJlbmRlcmFibGVzXCIpO1xyXG5leHBvcnRzLk5vblJlbmRlcmFibGVzID0gTm9uUmVuZGVyYWJsZXM7XHJcbmNvbnN0IFJlbmRlcmFibGVzID0gcmVxdWlyZShcIi4vcmVuZGVyYWJsZXNcIik7XHJcbmV4cG9ydHMuUmVuZGVyYWJsZXMgPSBSZW5kZXJhYmxlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEhkRFFVRnRRenRCUVVOdVF5dzRRa0ZCZVVJN1FVRkRla0lzYzBOQlFXbERPMEZCUTJwRExHdERRVUUyUWp0QlFVVTNRaXgzUkVGQmQwUTdRVUZMZEVRc05FTkJRV2RDTzBGQlNteENMRzlFUVVGdlJEdEJRVXRzUkN4M1EwRkJZenRCUVVwb1FpdzJRMEZCTmtNN1FVRkxNME1zYTBOQlFWY2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpO1xyXG5jb25zdCBibGVuZF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvYmxlbmRcIik7XHJcbmNvbnN0IGNvbG9yX21hdHJpeF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29sb3ItbWF0cml4XCIpO1xyXG5jb25zdCBjb21wb25lbnRfdHJhbnNmZXJfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvbmVudC10cmFuc2ZlclwiKTtcclxuY29uc3QgY29tcG9zaXRlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9jb21wb3NpdGVcIik7XHJcbmNvbnN0IGNvbnZvbHZlX21hdHJpeF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4XCIpO1xyXG5jb25zdCBkaXNwbGFjZW1lbnRfbWFwXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwXCIpO1xyXG5jb25zdCBmbG9vZF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvZmxvb2RcIik7XHJcbmNvbnN0IGdhdXNzaWFuX2JsdXJfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2dhdXNzaWFuLWJsdXJcIik7XHJcbmNvbnN0IGltYWdlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9pbWFnZVwiKTtcclxuY29uc3QgZGlmZnVzZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvZGlmZnVzZVwiKTtcclxuY29uc3QgZGlzdGFudF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2Rpc3RhbnRcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnRcIik7XHJcbmNvbnN0IHNwb3RfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90XCIpO1xyXG5jb25zdCBzcGVjdWxhcl8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvc3BlY3VsYXJcIik7XHJcbmNvbnN0IG1lcmdlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9tZXJnZVwiKTtcclxuY29uc3QgbW9ycGhvbG9neV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbW9ycGhvbG9neVwiKTtcclxuY29uc3Qgb2Zmc2V0XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9vZmZzZXRcIik7XHJcbmNvbnN0IHRpbGVfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL3RpbGVcIik7XHJcbmNvbnN0IHRyYW5zZmVyX2Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy90cmFuc2Zlci1mdW5jdGlvblwiKTtcclxuY29uc3QgdHVyYnVsZW5jZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvdHVyYnVsZW5jZVwiKTtcclxuY29uc3QgbWVyZ2UgPSAoYSwgYikgPT4ge1xyXG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIGZvciAoY29uc3QgYVByb3AgaW4gYSkge1xyXG4gICAgICAgIG9ialthUHJvcF0gPSBhW2FQcm9wXTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgYlByb3AgaW4gYikge1xyXG4gICAgICAgIG9ialtiUHJvcF0gPSBiW2JQcm9wXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbn07XHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImZpbHRlclwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICB9XHJcbiAgICBibGVuZChtb2RlLCBpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgYmxlbmRfMS5CbGVuZF9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQxLFxyXG4gICAgICAgICAgICBpbjI6IGlucHV0MixcclxuICAgICAgICAgICAgbW9kZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbG9yTWF0cml4KG1hdHJpeCwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbG9yX21hdHJpeF8xLkNvbG9yTWF0cml4X1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dCxcclxuICAgICAgICAgICAgdHlwZTogbWF0cml4LnR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlczogbWF0cml4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50VHJhbnNmZXIociwgZywgYiwgYSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRUcmFuc2ZlciA9IG5ldyBjb21wb25lbnRfdHJhbnNmZXJfMS5Db21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiUlwiLCByKSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiR1wiLCBnKSk7XHJcbiAgICAgICAgY29tcG9uZW50VHJhbnNmZXIuYWRkKG5ldyB0cmFuc2Zlcl9mdW5jdGlvbl8xLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlKHRoaXMsIFwiQlwiLCBiKSk7XHJcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJBXCIsIGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFRyYW5zZmVyO1xyXG4gICAgfVxyXG4gICAgY29tcG9zaXRlKG9wZXJhdG9yLCBrMSwgazIsIGszLCBrNCwgaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbXBvc2l0ZV8xLkNvbXBvc2l0ZV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQxLFxyXG4gICAgICAgICAgICBpbjI6IGlucHV0MixcclxuICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgIGsxLFxyXG4gICAgICAgICAgICBrMixcclxuICAgICAgICAgICAgazMsXHJcbiAgICAgICAgICAgIGs0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29udm9sdmVNYXRyaXgoYXR0cnMsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb252b2x2ZV9tYXRyaXhfMS5Db252b2x2ZU1hdHJpeF9QcmltaXRpdmUodGhpcywgbWVyZ2UoYXR0cnMsIHsgaW46IGlucHV0IH0pKTtcclxuICAgIH1cclxuICAgIGRpZmZ1c2VMaWdodGluZyhhdHRycywgbGlnaHRzID0gW10sIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgZGlmZnVzZV8xLkRpZmZ1c2VMaWdodGluZyh0aGlzLCBtZXJnZShhdHRycywgeyBpbjogaW5wdXQgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKGZlLCBsaWdodHMpO1xyXG4gICAgICAgIHJldHVybiBmZTtcclxuICAgIH1cclxuICAgIGRpc3BsYWNlbWVudE1hcChhdHRycywgaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGRpc3BsYWNlbWVudF9tYXBfMS5EaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlKHRoaXMsIG1lcmdlKGF0dHJzLCB7IGluOiBpbnB1dDEsIGluMjogaW5wdXQyIH0pKTtcclxuICAgIH1cclxuICAgIGZsb29kKGNvbG9yLCBhcmVhKSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgZmxvb2RfMS5GbG9vZF9QcmltaXRpdmUodGhpcywgeyBcImZsb29kLWNvbG9yXCI6IGNvbG9yIH0pO1xyXG4gICAgICAgIGZlLnNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICB4OiBhcmVhLngsXHJcbiAgICAgICAgICAgIHk6IGFyZWEueSxcclxuICAgICAgICAgICAgd2lkdGg6IGFyZWEud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYXJlYS5oZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgZ2F1c3NpYW5CbHVyKHN0ZERldmlhdGlvbiA9IDAsIGVkZ2VNb2RlID0gXCJkdXBsaWNhdGVcIiwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGdhdXNzaWFuX2JsdXJfMS5HYXVzc2lhbkJsdXJfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBzdGREZXZpYXRpb24sXHJcbiAgICAgICAgICAgIGVkZ2VNb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW1hZ2UoaHJlZiwgcHJlc2VydmVBc3BlY3RSYXRpbykge1xyXG4gICAgICAgIHJldHVybiBuZXcgaW1hZ2VfMS5JbWFnZV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogaHJlZixcclxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1lcmdlKGlucHV0cykge1xyXG4gICAgICAgIGNvbnN0IGZlID0gbmV3IG1lcmdlXzEuTWVyZ2VfUHJpbWl0aXZlKHRoaXMpO1xyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVyZ2VOb2RlID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMuY29udGV4dCwgXCJmZU1lcmdlTm9kZVwiLCB7IGluOiBpbnB1dCB9KTtcclxuICAgICAgICAgICAgZmUuYWRkKG1lcmdlTm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgbW9ycGhvbG9neShvcGVyYXRvciwgcmFkaXVzLCBpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgbW9ycGhvbG9neV8xLk1vcnBob2xvZ3lfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb2Zmc2V0KGQsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBvZmZzZXRfMS5PZmZzZXRfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICBkeDogZC54LFxyXG4gICAgICAgICAgICBkeTogZC55LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3BlY3VsYXJMaWdodGluZyhhdHRycywgbGlnaHRzID0gW10sIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgc3BlY3VsYXJfMS5TcGVjdWxhckxpZ2h0aW5nKHRoaXMsIGF0dHJzKTtcclxuICAgICAgICB0aGlzLmFkZExpZ2h0cyhmZSwgbGlnaHRzKTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICB0aWxlKGFyZWEsIGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgdGlsZV8xLlRpbGVfUHJpbWl0aXZlKHRoaXMsIHsgaW46IGlucHV0IH0pO1xyXG4gICAgICAgIGZlLnNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICB4OiBhcmVhLngsXHJcbiAgICAgICAgICAgIHk6IGFyZWEueSxcclxuICAgICAgICAgICAgd2lkdGg6IGFyZWEud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYXJlYS5oZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgdHVyYnVsZW5jZShhdHRycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgdHVyYnVsZW5jZV8xLlR1cmJ1bGVuY2VfUHJpbWl0aXZlKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIGFkZExpZ2h0cyhsaWdodGluZywgbGlnaHRzKSB7XHJcbiAgICAgICAgbGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpZ2h0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgcG9pbnRfMS5Qb2ludExpZ2h0KHRoaXMsIGxpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGlzdGFudFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgZGlzdGFudF8xLkRpc3RhbnRMaWdodCh0aGlzLCBsaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNwb3RcIjpcclxuICAgICAgICAgICAgICAgICAgICBsaWdodGluZy5hZGQobmV3IHNwb3RfMS5TcG90TGlnaHQodGhpcywgbGlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmlsdGVyID0gRmlsdGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labWxzZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWm1sc2RHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlVVRXNkME5CUVhGRE8wRkJSM0pETEhGRVFVRTBSRHRCUVVNMVJDeHRSVUZCZVVVN1FVRkRla1VzSzBWQlFYRkdPMEZCUTNKR0xEWkVRVUZ2UlR0QlFVTndSU3g1UlVGQk1FYzdRVUZETVVjc01rVkJRVFpITzBGQlF6ZEhMSEZFUVVFMFJEdEJRVU0xUkN4eFJVRkJNa1U3UVVGRE0wVXNjVVJCUVRSRU8wRkJRelZFTEd0RlFVRnRSenRCUVVWdVJ5d3JSVUZCYVVZN1FVRkRha1lzTWtWQlFUWkZPMEZCUXpkRkxIbEZRVUV5UlR0QlFVTXpSU3h2UlVGQmMwYzdRVUZEZEVjc2NVUkJRVFJFTzBGQlF6VkVMQ3RFUVVGelJUdEJRVU4wUlN4MVJFRkJPRVE3UVVGRE9VUXNiVVJCUVRCRU8wRkJRekZFTERaRlFVRm5TRHRCUVVOb1NDd3JSRUZCTmtZN1FVRnpRamRHTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVU4c1EwRkJTU3hGUVVGRkxFTkJRVWtzUlVGQlV5eEZRVUZGTzBsQlEzaERMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRhRU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUWl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRFJDeEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1FVRkRZaXhEUVVGRExFTkJRVU03UVVGRlJpeFpRVUZ2UWl4VFFVRlJMR2xDUVVFeVJEdEpRVVZ5Uml4WlFVRnRRaXhQUVVGblFqdFJRVU5xUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlJGSXNXVUZCVHl4SFFVRlFMRTlCUVU4c1EwRkJVenRSUVVWcVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFbEJRVFpFTEVWQlFVVXNUVUZCYlVJc1JVRkJSU3hOUVVGdlFqdFJRVU51U0N4TlFVRk5MRU5CUVVNc1NVRkJTU3gxUWtGQlpTeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTXZRaXhGUVVGRkxFVkJRVVVzVFVGQlRUdFpRVU5XTEVkQlFVY3NSVUZCUlN4TlFVRk5PMWxCUTFnc1NVRkJTVHRUUVVOTUxFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1RVRkJiVUlzUlVGQlJTeExRVUZ0UWp0UlFVTjZSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeHZRMEZCY1VJc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGNrTXNSVUZCUlN4RlFVRkZMRXRCUVVzN1dVRkRWQ3hKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdXVUZEYWtJc1RVRkJUU3hGUVVGRkxFMUJRVTA3VTBGRFppeERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUTAwc2FVSkJRV2xDTEVOQlFVTXNRMEZCT0VJc1JVRkJSU3hEUVVFNFFpeEZRVUZGTEVOQlFUaENMRVZCUVVVc1EwRkJLMElzUlVGQlJTeExRVUZ0UWp0UlFVTXpTeXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1owUkJRVEpDTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUXpsRUxFVkJRVVVzUlVGQlJTeExRVUZMTzFOQlExWXNRMEZCUXl4RFFVRkRPMUZCUTBnc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc09FTkJRVEJDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkZMR2xDUVVGcFFpeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRGhEUVVFd1FpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53UlN4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N3NFEwRkJNRUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc09FTkJRVEJDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkZMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVU5OTEZOQlFWTXNRMEZCUXl4UlFVRXJSQ3hGUVVGRkxFVkJRVlVzUlVGQlJTeEZRVUZWTEVWQlFVVXNSVUZCVlN4RlFVRkZMRVZCUVZVc1JVRkJSU3hOUVVGdlFpeEZRVUZGTEUxQlFXOUNPMUZCUXpGTExFMUJRVTBzUTBGQlF5eEpRVUZKTEN0Q1FVRnRRaXhEUVVGRExFbEJRVWtzUlVGQlJUdFpRVU51UXl4RlFVRkZMRVZCUVVVc1RVRkJUVHRaUVVOV0xFZEJRVWNzUlVGQlJTeE5RVUZOTzFsQlExZ3NVVUZCVVR0WlFVTlNMRVZCUVVVN1dVRkRSaXhGUVVGRk8xbEJRMFlzUlVGQlJUdFpRVU5HTEVWQlFVVTdVMEZEU0N4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMDBzWTBGQll5eERRVUZETEV0QlFYbERMRVZCUVVVc1MwRkJiVUk3VVVGRGJFWXNUVUZCVFN4RFFVRkRMRWxCUVVrc01FTkJRWGRDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BGTEVOQlFVTTdTVUZEVFN4bFFVRmxMRU5CUVVNc1MwRkJNRU1zUlVGQlJTeFRRVUZ0UXl4RlFVRkZMRVZCUVVVc1MwRkJiVUk3VVVGRE0wZ3NUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3g1UWtGQlpTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOc1JTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU16UWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVU5OTEdWQlFXVXNRMEZCUXl4TFFVRXdReXhGUVVGRkxFMUJRVzlDTEVWQlFVVXNUVUZCYjBJN1VVRkRNMGNzVFVGQlRTeERRVUZETEVsQlFVa3NORU5CUVhsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFWXNRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhMUVVGWkxFVkJRVVVzU1VGQlV6dFJRVU5zUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxIVkNRVUZsTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1lVRkJZU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETDBRc1JVRkJSU3hEUVVGRExHRkJRV0VzUTBGQlF6dFpRVU5tTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOVUxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTlVMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN6dFpRVU5xUWl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTA3VTBGRGNFSXNRMEZCUXl4RFFVRkRPMUZCUTBnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZEVFN4WlFVRlpMRU5CUVVNc1pVRkJkVUlzUTBGQlF5eEZRVUZGTEZkQlFYZERMRmRCUVZjc1JVRkJSU3hMUVVGdFFqdFJRVU53U0N4TlFVRk5MRU5CUVVNc1NVRkJTU3h6UTBGQmMwSXNRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRkRU1zUlVGQlJTeEZRVUZGTEV0QlFVczdXVUZEVkN4WlFVRlpPMWxCUTFvc1VVRkJVVHRUUVVOVUxFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1NVRkJXU3hGUVVGRkxHMUNRVUY1UXp0UlFVTnNSU3hOUVVGTkxFTkJRVU1zU1VGQlNTeDFRa0ZCWlN4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVNdlFpeFpRVUZaTEVWQlFVVXNTVUZCU1R0WlFVTnNRaXh0UWtGQmJVSTdVMEZEY0VJc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4TlFVRnhRanRSUVVOb1F5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMSFZDUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEY2tNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTnlRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEdsQ1FVRlBMRU5CUVd0SExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNZVUZCWVN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETTBzc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRE8wbEJRMDBzVlVGQlZTeERRVUZETEZGQlFUUkNMRVZCUVVVc1RVRkJORUlzUlVGQlJTeExRVUZ0UWp0UlFVTXZSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHBRMEZCYjBJc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGNFTXNSVUZCUlN4RlFVRkZMRXRCUVVzN1dVRkRWQ3hSUVVGUk8xbEJRMUlzVFVGQlRUdFRRVU5RTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3hOUVVGTkxFTkJRVU1zUTBGQlVTeEZRVUZGTEV0QlFXMUNPMUZCUTNwRExFMUJRVTBzUTBGQlF5eEpRVUZKTEhsQ1FVRm5RaXhEUVVGRExFbEJRVWtzUlVGQlJUdFpRVU5vUXl4RlFVRkZMRVZCUVVVc1MwRkJTenRaUVVOVUxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlFMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5TTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3huUWtGQlowSXNRMEZCUXl4TFFVRXlReXhGUVVGRkxGTkJRVzFETEVWQlFVVXNSVUZCUlN4TFFVRnRRanRSUVVNM1NDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMREpDUVVGblFpeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU16UWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVU5OTEVsQlFVa3NRMEZCUXl4SlFVRlRMRVZCUVVVc1MwRkJiVUk3VVVGRGVFTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3h4UWtGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyNUVMRVZCUVVVc1EwRkJReXhoUVVGaExFTkJRVU03V1VGRFppeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWQ3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVkN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXM3V1VGRGFrSXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTk8xTkJRM0JDTEVOQlFVTXNRMEZCUXp0UlFVTklMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlEwMHNWVUZCVlN4RFFVRkRMRXRCUVhGRE8xRkJRM0pFTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2xEUVVGdlFpeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlF5eERRVUZETzBsQlEwOHNVMEZCVXl4RFFVRkRMRkZCUVRoSExFVkJRVVVzVFVGQlowTTdVVUZEYUVzc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTnlRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJrSXNTMEZCU3l4UFFVRlBPMjlDUVVOV0xGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4clFrRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNeFF5eExRVUZMTEVOQlFVTTdaMEpCUTFJc1MwRkJTeXhUUVVGVE8yOUNRVU5hTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3h6UWtGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0xUXl4TFFVRkxMRU5CUVVNN1owSkJRMUlzUzBGQlN5eE5RVUZOTzI5Q1FVTlVMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeG5Ra0ZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjZReXhMUVVGTExFTkJRVU03V1VGRFZpeERRVUZETzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMFk3UVVGd1NVUXNkMEpCYjBsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ibGVuZFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbG9yLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvbmVudC10cmFuc2ZlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbXBvc2l0ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnZvbHZlLW1hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Rpc3BsYWNlbWVudC1tYXBcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mbG9vZFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dhdXNzaWFuLWJsdXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9pbWFnZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21lcmdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbW9ycGhvbG9neVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL29mZnNldFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RpbGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmFuc2Zlci1mdW5jdGlvblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3R1cmJ1bGVuY2VcIikpO1xyXG5jb25zdCBMaWdodGluZyA9IHJlcXVpcmUoXCIuL2xpZ2h0aW5nXCIpO1xyXG5leHBvcnRzLkxpZ2h0aW5nID0gTGlnaHRpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEWkNRVUYzUWp0QlFVTjRRaXh2UTBGQkswSTdRVUZETDBJc01FTkJRWEZETzBGQlEzSkRMR2xEUVVFMFFqdEJRVU0xUWl4MVEwRkJhME03UVVGRGJFTXNkME5CUVcxRE8wRkJRMjVETERaQ1FVRjNRanRCUVVONFFpeHhRMEZCWjBNN1FVRkRhRU1zTmtKQlFYZENPMEZCUTNoQ0xEWkNRVUYzUWp0QlFVTjRRaXhyUTBGQk5rSTdRVUZETjBJc09FSkJRWGxDTzBGQlEzcENMRFJDUVVGMVFqdEJRVU4yUWl4NVEwRkJiME03UVVGRGNFTXNhME5CUVRaQ08wRkJSVGRDTEhWRFFVRjFRenRCUVVkeVF5dzBRa0ZCVVNKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXR0cmlidXRlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RpZmZ1c2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGVjdWxhclwiKSk7XHJcbmNvbnN0IExpZ2h0U291cmNlID0gcmVxdWlyZShcIi4vbGlnaHQtc291cmNlXCIpO1xyXG5leHBvcnRzLkxpZ2h0U291cmNlID0gTGlnaHRTb3VyY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdERRVUUyUWp0QlFVTTNRaXdyUWtGQk1FSTdRVUZETVVJc1owTkJRVEpDTzBGQlJUTkNMRGhEUVVFNFF6dEJRVWMxUXl4clEwRkJWeUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYUjBjbWxpZFhSbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1GMGRISnBZblYwWlhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9hdHRyaWJ1dGVzLnRzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vYXR0cmlidXRlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Rpc3RhbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2ludFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Nwb3RcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR3REUVVFMlFqdEJRVU0zUWl3clFrRkJNRUk3UVVGRE1VSXNOa0pCUVhkQ08wRkJRM2hDTERSQ1FVRjFRaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWFIwY21saWRYUmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltRjBkSEpwWW5WMFpYTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2F0dHJpYnV0ZXMudHNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jbGlwLXBhdGhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXJrZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXNrXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGFpbnQtc2VydmVyXCIpKTtcclxuY29uc3QgUGFpbnRTZXJ2ZXJzID0gcmVxdWlyZShcIi4vcGFpbnQtc2VydmVyc1wiKTtcclxuZXhwb3J0cy5QYWludFNlcnZlcnMgPSBQYWludFNlcnZlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHbERRVUUwUWp0QlFVTTFRaXc0UWtGQmVVSTdRVUZEZWtJc05FSkJRWFZDTzBGQlEzWkNMRzlEUVVFclFqdEJRVVV2UWl4blJFRkJaMFE3UVVGSE9VTXNiME5CUVZraWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ncmFkaWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhdHRlcm5cIikpO1xyXG5jb25zdCBHcmFkaWVudHMgPSByZXF1aXJlKFwiLi9ncmFkaWVudHNcIik7XHJcbmV4cG9ydHMuR3JhZGllbnRzID0gR3JhZGllbnRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR2REUVVFeVFqdEJRVU16UWl3clFrRkJNRUk3UVVGRk1VSXNlVU5CUVhsRE8wRkJSM1pETERoQ1FVRlRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9saW5lYXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yYWRpYWxcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3NFFrRkJlVUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2V4dGVybmFsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZm9yZWlnbi1vYmplY3RcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ncm91cFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90ZXh0XCIpKTtcclxuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vc2hhcGVzXCIpO1xyXG5leHBvcnRzLlNoYXBlcyA9IFNoYXBlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEdkRFFVRXlRanRCUVVNelFpeHpRMEZCYVVNN1FVRkRha01zTmtKQlFYZENPMEZCUTNoQ0xEWkNRVUYzUWp0QlFVTjRRaXcyUWtGQmQwSTdRVUZEZUVJc05FSkJRWFZDTzBGQlJYWkNMRzFEUVVGdFF6dEJRVWRxUXl4M1FrRkJUU0o5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jaXJjbGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbGxpcHNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbGluZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhdGhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2x5Z29uXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcG9seWxpbmVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWN0XCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERoQ1FVRjVRanRCUVVONlFpd3JRa0ZCTUVJN1FVRkRNVUlzTkVKQlFYVkNPMEZCUTNaQ0xEUkNRVUYxUWp0QlFVTjJRaXdyUWtGQk1FSTdRVUZETVVJc1owTkJRVEpDTzBGQlF6TkNMRFJDUVVGMVFpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=