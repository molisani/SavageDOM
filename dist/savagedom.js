/*
 * SavageDOM 1.0.0-alpha.32 (https://github.com/molisani/SavageDOM) 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByaW1pdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbHRlci1wcmltaXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx3Q0FBcUM7QUFpQnJDLHFCQUF1RCxTQUFRLGlCQUFtRTtJQUVoSSxZQUFZLE1BQWMsRUFBRSxJQUFZLEVBQUUsS0FBK0M7UUFDdkYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRjdCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNNLFFBQVE7UUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBYkQsMENBYUMifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhDQUF3RTtBQU14RSxtQkFBNkQsU0FBUSwrQkFBK0M7Q0FBRztBQUF2SCxzQ0FBdUgifQ==

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
}
exports.AbstractRenderable = AbstractRenderable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbmRlcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx3Q0FBcUM7QUFxQnJDLHdCQUErRyxTQUFRLGlCQUE0RDtDQUFHO0FBQXRMLGdEQUFzTCJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtCQUFzRDtBQUV0RCw4QkFBNEM7QUE4QjVDO0lBUUU7UUFIUSxvQkFBZSxHQUFHLGlCQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxnQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLHNCQUFpQixHQUFHLElBQUksY0FBTyxFQUFvRCxDQUFDO1FBQ3BGLDZCQUF3QixHQUE2RSxFQUFFLENBQUM7UUFFOUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEYsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO2dCQUNwQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDekQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pHLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQzdDLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUEzQk0sTUFBTSxDQUFDLFdBQVc7UUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQTRCTSxvQkFBb0IsQ0FBbUUsRUFBSyxFQUFFLEVBQWEsRUFBRSxFQUFhO1FBQy9ILEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFDTSw4QkFBOEIsQ0FBbUUsRUFBSyxFQUFFLElBQU8sRUFBRSxHQUE0QixFQUFFLFFBQWdCLEVBQUUsTUFBc0I7UUFDNUwsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxHQUFHLEdBQUcsd0JBQW1CLEVBQUUsQ0FBQztZQUNsQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzVGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUEzQ2Msa0JBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBSjVDLDRCQWdEQyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sb3ItbWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0RBQXlDO0FBUXpDLElBQWlCLFdBQVcsQ0E2RjNCO0FBN0ZELFdBQWlCLFdBQVc7SUFFMUI7UUFHRSxZQUFZLFNBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFGL0csU0FBSSxHQUFhLFFBQVEsQ0FBQztZQUMxQixRQUFHLEdBQWEsRUFBRSxDQUFDO1lBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ00sS0FBSyxDQUFDLEdBQWtCO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixDQUFDO1FBQ0gsQ0FBQztRQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZLEVBQUUsUUFBYztZQUMxRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUM7UUFDSCxDQUFDO1FBQ00sV0FBVyxDQUFDLElBQVksRUFBRSxDQUFTO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7S0FDRjtJQTFCWSxlQUFHLE1BMEJmLENBQUE7SUFFRDtRQUVFLFlBQW1CLFFBQWdCLENBQUM7WUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtZQUQ3QixTQUFJLEdBQWUsVUFBVSxDQUFDO1FBQ0UsQ0FBQztRQUNqQyxRQUFRO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUNNLEtBQUssQ0FBQyxHQUFrQjtZQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUNNLEdBQUcsQ0FBQyxPQUFtQixFQUFFLElBQVk7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZLEVBQUUsUUFBbUI7WUFDL0QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0gsQ0FBQztRQUNNLFdBQVcsQ0FBQyxJQUFjLEVBQUUsQ0FBUztZQUMxQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMscUJBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQ0Y7SUExQlksb0JBQVEsV0EwQnBCLENBQUE7SUFFRDtRQUVFLFlBQW1CLFFBQWdCLENBQUM7WUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtZQUQ3QixTQUFJLEdBQWdCLFdBQVcsQ0FBQztRQUNBLENBQUM7UUFDakMsUUFBUTtZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFDTSxLQUFLLENBQUMsR0FBa0I7WUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUM7UUFDTSxHQUFHLENBQUMsT0FBbUIsRUFBRSxJQUFZO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ00sR0FBRyxDQUFDLE9BQW1CLEVBQUUsSUFBWSxFQUFFLFFBQW9CO1lBQ2hFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNILENBQUM7UUFDTSxXQUFXLENBQUMsSUFBZSxFQUFFLENBQVM7WUFDM0MsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLHFCQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUNGO0lBMUJZLHFCQUFTLFlBMEJyQixDQUFBO0lBRUQ7UUFBQTtZQUNTLFNBQUksR0FBdUIsa0JBQWtCLENBQUM7UUFJdkQsQ0FBQztRQUhRLFFBQVE7WUFDYixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUNGO0lBTFksdUNBQTJCLDhCQUt2QyxDQUFBO0FBRUgsQ0FBQyxFQTdGZ0IsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUE2RjNCIn0=

/***/ }),
/* 70 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZDA0OThlNTZiZGYyN2U0YWJiOSIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJwb2xhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2RpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSeFwiIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jdW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvd3JhcHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXJrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXNrLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvbGluZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9leHRlcm5hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvcm90YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ZvcmVpZ24tb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5bGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdGV4dC1jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9ibGVuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29sb3ItbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb25lbnQtdHJhbnNmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvc2l0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9mbG9vZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZ2F1c3NpYW4tYmx1ci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2RpZmZ1c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9kaXN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9zcGVjdWxhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21vcnBob2xvZ3kudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL29mZnNldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHJhbnNmZXItZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3R1cmJ1bGVuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9jb2xvci1tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL251bWJlci1vcHRpb25hbC1udW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrdkI7Ozs7Ozs7QUNsQjNDO0FBQ0EsOENB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHNCQUFzQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUIsSUFBSTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFlBQVksSUFBSTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sR0FBRyxPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnJFOzs7Ozs7O0FDckQzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPLEdBQUcsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHU5Qzs7Ozs7OztBQ2hDM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyakI7Ozs7Ozs7QUNmM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMlU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMlU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxLQUFLLEdBQUcsS0FBSztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1eEc7Ozs7Ozs7QUN0RTNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLHdDQUF3QyxzQkFBc0Isc0JBQXNCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdXdDOzs7Ozs7O0FDNUIzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVY7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyVzs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVc7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Vzs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1Y7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1ZDs7Ozs7OztBQ2YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1WOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtWTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1WOzs7Ozs7O0FDVDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVc7Ozs7Ozs7QUNsQjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsMkNBQTJDLDJJOzs7Ozs7O0FDRjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDJDQUEyQywrSzs7Ozs7OztBQ1AzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrWTs7Ozs7OztBQ3BCM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0VBQWdFO0FBQ2pFLDJDQUEyQyx1dUo7Ozs7Ozs7QUM3RzNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxJQUFJLDJDQUEyQyxJQUFJLDJDQUEyQyxJQUFJO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLDJDQUEyQyxJQUFJLDJDQUEyQyxJQUFJO0FBQ2hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CLElBQUksbUJBQW1CLElBQUksbUJBQW1CLElBQUksT0FBTztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsSUFBSSxxREFBcUQsSUFBSSxJQUFJLElBQUkscUNBQXFDLElBQUksSUFBSSxJQUFJO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLHFEQUFxRCxJQUFJLElBQUksSUFBSSxxQ0FBcUMsSUFBSSxJQUFJLElBQUk7QUFDcEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFhLElBQUksYUFBYSxLQUFLLGFBQWEsS0FBSyxPQUFPO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVpZDs7Ozs7OztBQ2hSM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbW5EOzs7Ozs7O0FDbkMzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU8sR0FBRyxPQUFPO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrakc7Ozs7Ozs7QUNwRDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhLEdBQUcsa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhLEdBQUcsa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUI7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCLEdBQUcsaUJBQWlCLEdBQUcsc0JBQXNCLEdBQUcsNEJBQTRCLEdBQUcsa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVpTjs7Ozs7OztBQ3ZLM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCthOzs7Ozs7O0FDdEIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK047Ozs7Ozs7QUNWM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQ0FBMkMsbUo7Ozs7Ozs7QUNGM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrTTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJDQUEyQyxtSjs7Ozs7OztBQ0YzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtUDs7Ozs7OztBQ1gzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtNOzs7Ozs7O0FDVDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDJDQUEyQywrSzs7Ozs7OztBQ1AzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Uzs7Ozs7OztBQ2QzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1RIiwiZmlsZSI6ImRpc3Qvc2F2YWdlZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUnhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTYXZhZ2VET01cIiwgW1wiUnhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2F2YWdlRE9NXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUnhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNhdmFnZURPTVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJ4XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkMDQ5OGU1NmJkZjI3ZTRhYmI5IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEZpbHRlclByaW1pdGl2ZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgbmFtZSwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIuY29udGV4dCwgbmFtZSwgYXR0cnMpO1xyXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZWQgPSBmYWxzZTtcclxuICAgICAgICBmaWx0ZXIuYWRkKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9yZWZlcmVuY2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInJlc3VsdFwiLCB0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GaWx0ZXJQcmltaXRpdmUgPSBGaWx0ZXJQcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHNkR1Z5TFhCeWFXMXBkR2wyWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVpwYkhSbGNpMXdjbWx0YVhScGRtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSFFTeDNRMEZCY1VNN1FVRnBRbkpETEhGQ1FVRjFSQ3hUUVVGUkxHbENRVUZ0UlR0SlFVVm9TU3haUVVGWkxFMUJRV01zUlVGQlJTeEpRVUZaTEVWQlFVVXNTMEZCSzBNN1VVRkRka1lzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJqZENMR2RDUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJ6RkNMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVOTkxGRkJRVkU3VVVGRFlpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkNMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMlF5eERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGFrSXNRMEZCUXp0RFFVTkdPMEZCWWtRc01FTkJZVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5fbGVycCA9IChhLCBiLCB0KSA9PiBhICsgKChiIC0gYSkgKiB0KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1MFpYSndiMnhoZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1sdWRHVnljRzlzWVhScGIyNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQllTeFJRVUZCTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW50ZXJwb2xhdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgQWJzdHJhY3RTaGFwZSBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RTaGFwZSA9IEFic3RyYWN0U2hhcGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyaGhjR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnphR0Z3WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERoRFFVRjNSVHRCUVUxNFJTeHRRa0ZCTmtRc1UwRkJVU3dyUWtGQkswTTdRMEZCUnp0QlFVRjJTQ3h6UTBGQmRVZ2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGUudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvbi9yZW5kZXJlclwiKTtcclxuY29uc3QgYXR0cmlidXRlXzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVcIik7XHJcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xyXG5jb25zdCByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcclxuY29uc3QgYm94XzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzL2JveFwiKTtcclxuY29uc3Qgd3JhcHBlcnNfMSA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZXMvd3JhcHBlcnNcIik7XHJcbmNvbnN0IGlkXzEgPSByZXF1aXJlKFwiLi9pZFwiKTtcclxuY2xhc3MgRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBlbCwgYXR0cnMsIF9pZCA9IGlkXzEucmFuZG9tU2hvcnRTdHJpbmdJZCgpKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLl9pZCA9IF9pZDtcclxuICAgICAgICB0aGlzLl9keW5hbWljU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZSA9IHRoaXMuY29udGV4dC53aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGNvbnN0YW50c18xLlhNTE5TLCBlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRDaGlsZCh0aGlzLl9ub2RlKTtcclxuICAgICAgICAgICAgaWYgKGF0dHJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhhdHRycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLl9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlID0gZWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5fbm9kZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICAgICAgaWYgKGlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgPSB0aGlzLmNvbnRleHQud2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbm9kZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHVybCgjJHt0aGlzLl9pZH0pYDtcclxuICAgIH1cclxuICAgIHJlbmRlckF0dHJpYnV0ZShuYW1lLCB2YWwpIHtcclxuICAgICAgICBpZiAoYXR0cmlidXRlXzEuaXNBdHRyaWJ1dGUodmFsKSkge1xyXG4gICAgICAgICAgICB2YWwuc2V0KHRoaXMuX25vZGUsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsLmpvaW4oXCJcXHRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgU3RyaW5nKHZhbCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEF0dHJpYnV0ZShuYW1lLCB2YWwpIHtcclxuICAgICAgICByZW5kZXJlcl8xLlJlbmRlcmVyLmdldEluc3RhbmNlKCkucXVldWVBdHRyaWJ1dGVVcGRhdGUodGhpcywgbmFtZSwgdmFsKTtcclxuICAgIH1cclxuICAgIHNldEF0dHJpYnV0ZXMoYXR0cnMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbmltYXRlQXR0cmlidXRlKG5hbWUsIHZhbCwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgICAgIGxldCBhdHRyO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSBuZXcgd3JhcHBlcnNfMS5OdW1iZXJXcmFwcGVyKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGF0dHJpYnV0ZV8xLmlzQXR0cmlidXRlKHZhbCkpIHtcclxuICAgICAgICAgICAgYXR0ciA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IGF0dHIuZ2V0KHRoaXMuX25vZGUsIG5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJlcl8xLlJlbmRlcmVyLmdldEluc3RhbmNlKCkucmVnaXN0ZXJBdHRyaWJ1dGVJbnRlcnBvbGF0aW9uKHRoaXMsIG5hbWUsIGF0dHIuaW50ZXJwb2xhdGUuYmluZChhdHRyLCBmcm9tKSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgICB9XHJcbiAgICBnZXRBdHRyaWJ1dGUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX25vZGUuZ2V0QXR0cmlidXRlKG5hbWUpIHx8IHRoaXMuX3N0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuICh2YWwgPT09IFwiXCIgfHwgdmFsID09PSBcIm5vbmVcIikgPyBudWxsIDogdmFsO1xyXG4gICAgfVxyXG4gICAgY29weVN0eWxlRnJvbShlbCwgaW5jbHVkZUV4Y2x1ZGUsIGRlZmF1bHRJbmNsdWRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge307XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBlbC5fbm9kZS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGlmIChpbmNsdWRlRXhjbHVkZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cnMuaXRlbShpKS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVFeGNsdWRlW2F0dHJdID09PSB0cnVlIHx8IGRlZmF1bHRJbmNsdWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbYXR0cl0gPSBlbC5fc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShhdHRyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICAgICAgICAgIHN0eWxlW2F0dHJdID0gZWwuX3N0eWxlLmdldFByb3BlcnR5VmFsdWUoYXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKHN0eWxlKTtcclxuICAgIH1cclxuICAgIGdldEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHJ4anNfMS5PYnNlcnZhYmxlLm1lcmdlKC4uLmV2ZW50LnNwbGl0KFwifFwiKS5tYXAoKF8pID0+IHJ4anNfMS5PYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLl9ub2RlLCBfKSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJvdW5kaW5nQm94KCkge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgYm94XzEuQm94KHJlY3QubGVmdCwgcmVjdC50b3AsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGFkZChlbCkge1xyXG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLmFwcGVuZENoaWxkKGVsLl9ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZHJlbigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX25vZGUuY2hpbGROb2RlcztcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaChuZXcgRWxlbWVudCh0aGlzLmNvbnRleHQsIGNoaWxkcmVuLml0ZW0oaSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgfVxyXG4gICAgY2xvbmUoZGVlcCA9IHRydWUsIGlkID0gaWRfMS5yYW5kb21TaG9ydFN0cmluZ0lkKCkpIHtcclxuICAgICAgICBjb25zdCBjb3B5ID0gbmV3IEVsZW1lbnQodGhpcy5jb250ZXh0LCB0aGlzLl9ub2RlLmNsb25lTm9kZShkZWVwKSk7XHJcbiAgICAgICAgY29weS5faWQgPSBpZDtcclxuICAgICAgICBjb3B5Ll9ub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIGNvcHkuX2lkKTtcclxuICAgICAgICByZXR1cm4gY29weTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fbm9kZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGNsb25lTm9kZShkZWVwID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy5fbm9kZS5jbG9uZU5vZGUoZGVlcCk7XHJcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWRfMS5yYW5kb21TaG9ydFN0cmluZ0lkKCkpO1xyXG4gICAgICAgIHJldHVybiBjbG9uZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1Wc1pXMWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3h0UkVGQmFVVTdRVUZEYWtVc01rTkJRWEZFTzBGQlJYSkVMREpEUVVGdlF6dEJRVWx3UXl3clFrRkJlVVE3UVVGRmVrUXNNRU5CUVhWRE8wRkJRM1pETEc5RVFVRnpSRHRCUVVOMFJDdzJRa0ZCTWtNN1FVRkpNME03U1VGUFJTeFpRVUZ0UWl4UFFVRm5RaXhGUVVGRkxFVkJRV2RDTEVWQlFVVXNTMEZCTWtJc1JVRkJWU3hOUVVGakxIZENRVUZ0UWl4RlFVRkZPMUZCUVRWSExGbEJRVThzUjBGQlVDeFBRVUZQTEVOQlFWTTdVVUZCZVVRc1VVRkJSeXhIUVVGSUxFZEJRVWNzUTBGQlowTTdVVUZLZGtnc01FSkJRWEZDTEVkQlFVY3NSVUZCYTBRc1EwRkJRenRSUVV0cVJpeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eHBRa0ZCU3l4RlFVRkZMRVZCUVVVc1EwRkJVU3hEUVVGRE8xbEJRelZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU0xUWl4RFFVRkRPMWxCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU14UXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOb1FpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTjZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGFFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGFFSXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOcVJTeERRVUZETzBsQlEwUXNTVUZCVnl4RlFVRkZPMUZCUTFnc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVORUxFbEJRVmNzU1VGQlNUdFJRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM0JDTEVOQlFVTTdTVUZEVFN4UlFVRlJPMUZCUTJJc1RVRkJUU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGRFRTeGxRVUZsTEVOQlFXZERMRWxCUVZVc1JVRkJSU3hIUVVGeFFqdFJRVU55Uml4RlFVRkZMRU5CUVVNc1EwRkJReXgxUWtGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVFpeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxGbEJRVmtzUTBGQlowTXNTVUZCVlN4RlFVRkZMRWRCUVhGQ08xRkJRMnhHTEcxQ1FVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zYjBKQlFXOUNMRU5CUVRoRUxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkROVWdzUTBGQlF6dEpRVU5OTEdGQlFXRXNRMEZCUXl4TFFVRXdRanRSUVVNM1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcENMRTFCUVUwc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFXbERMRU5CUVVNN1dVRkRlRVFzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRk5CUVZNc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRkRU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGREwwSXNRMEZCUXp0UlFVTklMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzWjBKQlFXZENMRU5CUVdkRExFbEJRVlVzUlVGQlJTeEhRVUZ4UWl4RlFVRkZMRkZCUVdkQ0xFVkJRVVVzVFVGQmMwSTdVVUZEYUVrc1NVRkJTU3hKUVVGdlFpeERRVUZETzFGQlEzcENMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVUlzU1VGQlNTeEhRVUZITEVsQlFVa3NkMEpCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEhWQ1FVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRFlpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU03VVVGRFZDeERRVUZETzFGQlEwUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM2hETEUxQlFVMHNRMEZCUXl4dFFrRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETERoQ1FVRTRRaXhEUVVGeFJDeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEY0V3c1EwRkJRenRKUVZWTkxGbEJRVmtzUTBGQlowTXNTVUZCVlR0UlFVTXpSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJoR0xFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRWxCUVVrc1IwRkJSeXhMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU55UkN4RFFVRkRPMGxCUjAwc1lVRkJZU3hEUVVGRExFVkJRWGRETEVWQlFVVXNZMEZCY1VRc1JVRkJSU3hwUWtGQk1FSXNTVUZCU1R0UlFVTnNTaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEZRVUZuUWl4RFFVRkRPMUZCUXk5Q0xFMUJRVTBzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRMnhETEVWQlFVVXNRMEZCUXl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTNSRExFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTm9ReXhGUVVGRkxFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCZDBJc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONFJTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtRc1EwRkJRenRaUVVOSUxFTkJRVU03VVVGRFNDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGRGRFTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRMmhETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEycEVMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlJVMHNVVUZCVVN4RFFVRTJRaXhMUVVGWk8xRkJRM1JFTEUxQlFVMHNRMEZCUXl4cFFrRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhwUWtGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXZSaXhEUVVGRE8wbEJSVVFzU1VGQlZ5eFhRVUZYTzFGQlEzQkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dFJRVU5vUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1JVRkJPRU03VVVGRGRrUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3haUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETjBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROMElzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMjVETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWenRSUVVOb1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF6dFJRVU4yUXl4TlFVRk5MRkZCUVZFc1IwRkJiME1zUlVGQlJTeERRVUZETzFGQlEzSkVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUTNwRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU16UlN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFOUJRV2RDTEVsQlFVa3NSVUZCUlN4TFFVRmhMSGRDUVVGdFFpeEZRVUZGTzFGQlEyNUZMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzVDBGQlR5eERRVUV3UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJVU3hEUVVGRExFTkJRVU03VVVGRGJrY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFpDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUTAwc1QwRkJUenRSUVVOYUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVU5UTEZOQlFWTXNRMEZCUXl4UFFVRm5RaXhKUVVGSk8xRkJRM1JETEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCVVN4RFFVRkRPMUZCUTJoRUxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMSGRDUVVGdFFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTm9SQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEyWXNRMEZCUXp0RFFVTkdPMEZCTVVsRUxEQkNRVEJKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudHlwZX0oJHt0aGlzLmFyZ3MoKX0pYDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBcmdzKGNzcy5zdWJzdHJpbmcoY3NzLmluZGV4T2YoXCIoXCIpICsgMSwgY3NzLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJncyhjc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMiAmJiB0b2tzWzFdID09PSB0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1swXSk7XHJcbiAgICAgICAgICAgIGlmIChjc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY3NzLmluZGV4T2YodGhpcy50eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoY3NzLnN1YnN0cmluZyhzdGFydCwgY3NzLmluZGV4T2YoXCIpXCIsIHN0YXJ0KSArIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShudWxsKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IFN0cmluZygob3ZlcnJpZGUgPT09IHVuZGVmaW5lZCkgPyB0aGlzIDogb3ZlcnJpZGUpO1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIgJiYgdG9rc1sxXSA9PT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGNzcy5pbmRleE9mKHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBgJHtjc3Muc3Vic3RyKDAsIHN0YXJ0KX0ke3N0cn0ke2Nzcy5zdWJzdHIoY3NzLmluZGV4T2YoXCIpXCIsIHN0YXJ0KSArIDEpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgdXBkYXRlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCBzdHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgc3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgc3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2Zvcm0gPSBUcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5tYjNKdExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpZEhKaGJuTm1iM0p0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJVVUU3U1VGRFJTeFpRVUZ0UWl4SlFVRnhSVHRSUVVGeVJTeFRRVUZKTEVkQlFVb3NTVUZCU1N4RFFVRnBSVHRKUVVGSExFTkJRVU03U1VGRmNrWXNVVUZCVVR0UlFVTmlMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGVFTXNRMEZCUXp0SlFVVk5MRXRCUVVzc1EwRkJReXhIUVVGclFqdFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNM1JTeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNM1FpeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdVVUZETVVNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBNc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlNMRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU55UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVObUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pGTEVOQlFVTTdXVUZEU0N4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCYjBJN1VVRkRhRVVzVFVGQlRTeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF5OUVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OURMRTFCUVUwc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEVWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGNrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRaaXhOUVVGTkxFOUJRVThzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdiMEpCUXpGR0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzJkQ1FVTjZReXhEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOT0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTnlReXhEUVVGRE8xbEJRMGdzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzSkRMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnNReXhEUVVGRE8wbEJRMGdzUTBGQlF6dERRVVZHTzBGQmFFUkVMRGhDUVdkRVF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybS50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcclxuY2xhc3MgQWJzdHJhY3RSZW5kZXJhYmxlIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RSZW5kZXJhYmxlID0gQWJzdHJhY3RSZW5kZXJhYmxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZ1WkdWeVlXSnNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluSmxibVJsY21GaWJHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTeDNRMEZCY1VNN1FVRnhRbkpETEhkQ1FVRXJSeXhUUVVGUkxHbENRVUUwUkR0RFFVRkhPMEZCUVhSTUxHZEVRVUZ6VENKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEFic3RyYWN0Tm9uUmVuZGVyYWJsZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxufVxyXG5leHBvcnRzLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSA9IEFic3RyYWN0Tm9uUmVuZGVyYWJsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm05dUxYSmxibVJsY21GaWJHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKdWIyNHRjbVZ1WkdWeVlXSnNaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMSGREUVVGeFF6dEJRVTl5UXl3eVFrRkJNa1lzVTBGQlVTeHBRa0ZCYjBZN1EwRkJSenRCUVVFeFRDeHpSRUZCTUV3aWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgZGltZW5zaW9uXzEgPSByZXF1aXJlKFwiLi9kaW1lbnNpb25cIik7XHJcbmV4cG9ydHMuX0xlbmd0aFBhcnNlID0gKGNzcykgPT4ge1xyXG4gICAgY29uc3QgbSA9IGNzcy5tYXRjaCgvKFxcZCt8XFxkK1xcLlxcZCspKFxcdyt8JSkvaSk7XHJcbiAgICBpZiAobSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKHBhcnNlRmxvYXQobVsxXSksIG1bMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY3NzKTtcclxufTtcclxuZXhwb3J0cy5fTGVuZ3RoSW50ZXJwb2xhdGUgPSAoYSwgYiwgdCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBhICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmludGVycG9sYXRlKGEsIHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuaW50ZXJwb2xhdGUobmV3IGRpbWVuc2lvbl8xLkRpbWVuc2lvbihiLCBhLnVuaXQpLCAxIC0gdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmludGVycG9sYXRlKG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24oYSwgYi51bml0KSwgdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGEsIGIsIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1GelpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1KaGMyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTeHZSRUZCZVVNN1FVRkZla01zTWtOQlFYZEhPMEZCWXpOR0xGRkJRVUVzV1VGQldTeEhRVUZITEVOQlFVTXNSMEZCVnl4RlFVRlZMRVZCUVVVN1NVRkRiRVFzVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMGxCUXpsRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMllzVFVGQlRTeERRVUZETEVsQlFVa3NjVUpCUVZNc1EwRkJUU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEY0VRc1EwRkJRenRKUVVORUxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRla0lzUTBGQlF5eERRVUZETzBGQlJWY3NVVUZCUVN4clFrRkJhMElzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGVkxFVkJRVVU3U1VGRE5VVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZDTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEhGQ1FVRlRMRU5CUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wUXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5PTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4eFFrRkJVeXhEUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrUXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEhGQ1FVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dEJRVU5JTEVOQlFVTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvYmFzZS50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY2xhc3MgRGltZW5zaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCB1bml0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXQ7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy52YWx1ZX0ke3RoaXMudW5pdH1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBtID0gY3NzLm1hdGNoKC8oXFxkK3xcXGQrXFwuXFxkKykoXFx3K3wlKS9pKTtcclxuICAgICAgICAgICAgaWYgKG0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvUHggPSBEaW1lbnNpb24uY29udmVydFttWzJdXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21QeCA9IDEgLyBEaW1lbnNpb24uY29udmVydFt0aGlzLnVuaXRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvUHggIT09IHVuZGVmaW5lZCAmJiBmcm9tUHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKHBhcnNlRmxvYXQobVsxXSkgKiB0b1B4ICogZnJvbVB4LCB0aGlzLnVuaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24ocGFyc2VGbG9hdChtWzFdKSwgbVsyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbihwYXJzZUZsb2F0KGNzcyksIHRoaXMudW5pdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24oMCwgdGhpcy51bml0KTtcclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICBpZiAodGhpcy51bml0ICE9PSBmcm9tLnVuaXQpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9QeCA9IERpbWVuc2lvbi5jb252ZXJ0W3RoaXMudW5pdF07XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb21QeCA9IDEgLyBEaW1lbnNpb24uY29udmVydFtmcm9tLnVuaXRdO1xyXG4gICAgICAgICAgICBpZiAodG9QeCAhPT0gdW5kZWZpbmVkICYmIGZyb21QeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS52YWx1ZSwgdGhpcy52YWx1ZSwgdCkgKiB0b1B4ICogZnJvbVB4LCB0aGlzLnVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnZhbHVlLCB0aGlzLnZhbHVlLCB0KSwgdGhpcy51bml0KTtcclxuICAgIH1cclxufVxyXG5EaW1lbnNpb24uY29udmVydCA9IHtcclxuICAgIHB4OiAxLFxyXG4gICAgaW46IDk2LFxyXG4gICAgY206IDI1NCAvIDk2LFxyXG4gICAgbW06IDI1LjQgLyA5NixcclxuICAgIHB0OiAzIC8gNCxcclxuICAgIHBjOiA5LFxyXG4gICAgZGVnOiAxLFxyXG4gICAgZ3JhZDogOSAvIDEwLFxyXG4gICAgcmFkOiAxODAgLyBNYXRoLlBJLFxyXG4gICAgdHVybjogMzYwLFxyXG59O1xyXG5leHBvcnRzLkRpbWVuc2lvbiA9IERpbWVuc2lvbjtcclxuY2xhc3MgUGVyY2VudGFnZSBleHRlbmRzIERpbWVuc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBcIiVcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QZXJjZW50YWdlID0gUGVyY2VudGFnZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsdFpXNXphVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laR2x0Wlc1emFXOXVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNiMFJCUVhsRE8wRkJUWHBETzBsQllVVXNXVUZCYlVJc1MwRkJZU3hGUVVGVExFbEJRVlU3VVVGQmFFTXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJVVHRSUVVGVExGTkJRVWtzUjBGQlNpeEpRVUZKTEVOQlFVMDdTVUZCUnl4RFFVRkRPMGxCUTJoRUxGRkJRVkU3VVVGRFlpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTnlReXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJRenRaUVVNNVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWml4TlFVRk5MRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJZeXhEUVVGRExFTkJRVU03WjBKQlF6RkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF5OURMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlR5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeEhRVUZITEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlF6RkZMRU5CUVVNN1owSkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZOTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNFUXNRMEZCUXp0WlFVTklMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVThzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU42UkN4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCVHl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRVEJDTzFGQlEzUkZMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhGQ0xFVkJRVVVzUTBGQlV6dFJRVU5xUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFXTXNRMEZCUXl4RFFVRkRPMWxCUTNCRUxFMUJRVTBzVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZqTEVOQlFVTXNRMEZCUXp0WlFVTXhSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXZReXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVOHNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeEhRVUZITEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRE1VWXNRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVOHNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpGRkxFTkJRVU03TzBGQmNFUmpMR2xDUVVGUExFZEJRU3RDTzBsQlEyNUVMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMHdzUlVGQlJTeEZRVUZGTEVWQlFVVTdTVUZEVGl4RlFVRkZMRVZCUVVVc1IwRkJSeXhIUVVGSExFVkJRVVU3U1VGRFdpeEZRVUZGTEVWQlFVVXNTVUZCU1N4SFFVRkhMRVZCUVVVN1NVRkRZaXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZEVkN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOTUxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEwNHNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRk8wbEJRMW9zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHRKUVVOc1FpeEpRVUZKTEVWQlFVVXNSMEZCUnp0RFFVTldMRU5CUVVNN1FVRmFTaXc0UWtGelJFTTdRVUZGUkN4blFrRkJkMElzVTBGQlVTeFRRVUZqTzBsQlF6VkRMRmxCUVZrc1MwRkJZVHRSUVVOMlFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0JDTEVOQlFVTTdRMEZEUmp0QlFVcEVMR2REUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2RpbWVuc2lvbi50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvcGF0dGVyblwiKTtcclxuY29uc3QgcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3JlbmRlcmFibGVcIik7XHJcbmNsYXNzIEdyb3VwIGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZ1wiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICB0b1BhdHRlcm4odywgaCwgeCwgeSwgdmlldykge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgcGF0dGVybl8xLlBhdHRlcm4odGhpcy5jb250ZXh0LCB3LCBoLCB4LCB5LCB2aWV3KTtcclxuICAgICAgICB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiBwYXR0ZXJuLmFkZChjaGlsZCkpO1xyXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuR3JvdXAgPSBHcm91cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjNKdmRYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKbmNtOTFjQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVZEJMSE5GUVVGdFJUdEJRVU51UlN3NFEwRkJhVWM3UVVGSmFrY3NWMEZCYlVJc1UwRkJVU3dyUWtGQmNVUTdTVUZET1VVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFYTkRPMUZCUTJ4RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZKVFN4VFFVRlRMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRWxCUVZVN1VVRkRka1VzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOcVFpeERRVUZETzBOQlEwWTdRVUZhUkN4elFrRlpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZ3JvdXAudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5YTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuZXhwb3J0cy5YTElOSyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1YzNSaGJuUnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVjM1JoYm5SekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVdFc1VVRkJRU3hMUVVGTExFZEJRVWNzTkVKQlFUUkNMRU5CUVVNN1FVRkRja01zVVVGQlFTeExRVUZMTEVkQlFVY3NPRUpCUVRoQ0xFTkJRVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnN0YW50cy50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbmNvbnN0IGJveF8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy9ib3hcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzL3BvaW50XCIpO1xyXG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcclxuY29uc3QgZG9jdW1lbnRfMSA9IHJlcXVpcmUoXCIuL2RvY3VtZW50XCIpO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50XCIpO1xyXG5jb25zdCBjbGlwX3BhdGhfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGhcIik7XHJcbmNvbnN0IG1hcmtlcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hcmtlclwiKTtcclxuY29uc3QgbWFza18xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2tcIik7XHJcbmNvbnN0IGxpbmVhcl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2xpbmVhclwiKTtcclxuY29uc3QgcmFkaWFsXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsXCIpO1xyXG5jb25zdCBwYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuXCIpO1xyXG5jb25zdCBleHRlcm5hbF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvZXh0ZXJuYWxcIik7XHJcbmNvbnN0IGZvcmVpZ25fb2JqZWN0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9mb3JlaWduLW9iamVjdFwiKTtcclxuY29uc3QgZ3JvdXBfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwXCIpO1xyXG5jb25zdCBpbWFnZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2VcIik7XHJcbmNvbnN0IGNpcmNsZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZVwiKTtcclxuY29uc3QgZWxsaXBzZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2VcIik7XHJcbmNvbnN0IGxpbmVfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lXCIpO1xyXG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aFwiKTtcclxuY29uc3QgcG9seWdvbl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlnb25cIik7XHJcbmNvbnN0IHBvbHlsaW5lXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWxpbmVcIik7XHJcbmNvbnN0IHJlY3RfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9yZWN0XCIpO1xyXG5jb25zdCB0ZXh0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0XCIpO1xyXG5jbGFzcyBDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIF93aW5kb3cgPSBDb250ZXh0LkRFRkFVTFRfV0lORE9XKSB7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gX3dpbmRvdztcclxuICAgICAgICBpZiAocm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgSUQgaXMgbm90IHZhbGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGNvbnN0YW50c18xLlhNTE5TLCBcInN2Z1wiKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fcm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgY29uc3RhbnRzXzEuWE1MTlMpO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlTlMoY29uc3RhbnRzXzEuWE1MTlMsIFwieGxpbmtcIiwgY29uc3RhbnRzXzEuWExJTkspO1xyXG4gICAgICAgIHRoaXMuX3Jvb3Quc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcclxuICAgICAgICB0aGlzLl90YXJnZXQgPSB0aGlzLl9yb290O1xyXG4gICAgICAgIGNvbnN0IGRlZnNFbGVtZW50cyA9IHRoaXMuX3Jvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZWZzXCIpO1xyXG4gICAgICAgIGlmIChkZWZzRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZzID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMsIGRlZnNFbGVtZW50cy5pdGVtKDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlZnMgPSBuZXcgZWxlbWVudF8xLkVsZW1lbnQodGhpcywgXCJkZWZzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb250ZXh0Ll9DT05URVhUX1NVQkpFQ1QubmV4dCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgY29udGV4dHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbnRleHQuX0NPTlRFWFRfU1VCSkVDVC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuICAgIGdldCB3aW5kb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvdztcclxuICAgIH1cclxuICAgIGFkZERlZihkZWYpIHtcclxuICAgICAgICB0aGlzLl9kZWZzLmFkZChkZWYpO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpbGQoZWwpIHtcclxuICAgICAgICB0aGlzLl90YXJnZXQuYXBwZW5kQ2hpbGQoKGVsIGluc3RhbmNlb2YgZWxlbWVudF8xLkVsZW1lbnQpID8gZWwubm9kZSA6IGVsKTtcclxuICAgIH1cclxuICAgIGxvYWQodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeG1sRG9jdW1lbnQgPSB5aWVsZCBkb2N1bWVudF8xLm1ha2VSZXF1ZXN0KFwiR0VUXCIsIHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsRG9jdW1lbnQgPSBuZXcgZG9jdW1lbnRfMS5TVkdEb2N1bWVudCh0aGlzLCB4bWxEb2N1bWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgZXh0ZXJuYWxfMS5FeHRlcm5hbFNWRyh0aGlzLCBleHRlcm5hbERvY3VtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsaXBQYXRoKHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNsaXBfcGF0aF8xLkNsaXBQYXRoKHRoaXMsIHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpO1xyXG4gICAgfVxyXG4gICAgbWFya2VyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgbWFya2VyXzEuTWFya2VyKHRoaXMsIHt9KTtcclxuICAgIH1cclxuICAgIG1hc2sodywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgbWFza18xLk1hc2sodGhpcywgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cyk7XHJcbiAgICB9XHJcbiAgICBsaW5lYXJHcmFkaWVudChzdG9wcywgYXR0cnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGxpbmVhcl8xLkxpbmVhckdyYWRpZW50KHRoaXMsIHN0b3BzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICByYWRpYWxHcmFkaWVudChzdG9wcywgYXR0cnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHJhZGlhbF8xLlJhZGlhbEdyYWRpZW50KHRoaXMsIHN0b3BzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBwYXR0ZXJuKHcsIGgsIHgsIHksIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHBhdHRlcm5fMS5QYXR0ZXJuKHRoaXMsIHcsIGgsIHgsIHksIHZpZXcpO1xyXG4gICAgfVxyXG4gICAgZm9yZWlnbk9iamVjdChodG1sLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBuZXcgZm9yZWlnbl9vYmplY3RfMS5Gb3JlaWduT2JqZWN0KHRoaXMsIHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9KTtcclxuICAgICAgICBlbC5hZGRIVE1MKGh0bWwpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZWwpO1xyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuICAgIGdyb3VwKGVscykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbmV3IGdyb3VwXzEuR3JvdXAodGhpcyk7XHJcbiAgICAgICAgZWxzLmZvckVhY2goY2hpbGQgPT4gZWwuYWRkKGNoaWxkKSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChlbCk7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG4gICAgaW1hZ2UoaHJlZikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBpbWFnZV8xLkltYWdlKHRoaXMpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gaW1nLmdldEV2ZW50KFwibG9hZFwiKS50YWtlKDEpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHlpZWxkIHByb21pc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjaXJjbGUoYTEsIGEyLCBhMykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gKGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkgPyB7IFwiY3g6Y3lcIjogYTEsIHI6IGEyIH0gOiB7IGN4OiBhMSwgY3k6IGEyLCByOiBhMyB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgY2lyY2xlXzEuQ2lyY2xlKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIGVsbGlwc2UoYTEsIGEyLCBhMywgYTQpIHtcclxuICAgICAgICBsZXQgYXR0cnMgPSB7fTtcclxuICAgICAgICBjb25zdCBhMUlzUG9pbnQgPSBhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgY29uc3QgYTJJc1BvaW50ID0gYTIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50O1xyXG4gICAgICAgIGlmIChhMUlzUG9pbnQgJiYgYTJJc1BvaW50KSB7XHJcbiAgICAgICAgICAgIGF0dHJzID0geyBcImN4OmN5XCI6IGExLCBcInJ4OnJ5XCI6IGEyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCEoYTFJc1BvaW50IHx8IGEySXNQb2ludCkpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IGN4OiBhMSwgY3k6IGEyLCByeDogYTMsIHJ5OiBhNCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGVsbGlwc2VfMS5FbGxpcHNlKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIGxpbmUoYTEsIGEyLCBhMywgYTQpIHtcclxuICAgICAgICBsZXQgYXR0cnMgPSB7fTtcclxuICAgICAgICBjb25zdCBhMUlzUG9pbnQgPSBhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQ7XHJcbiAgICAgICAgY29uc3QgYTJJc1BvaW50ID0gYTIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50O1xyXG4gICAgICAgIGlmIChhMUlzUG9pbnQgJiYgYTJJc1BvaW50KSB7XHJcbiAgICAgICAgICAgIGF0dHJzID0geyBcIngxOnkxXCI6IGExLCBcIngyOnkyXCI6IGEyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCEoYTFJc1BvaW50IHx8IGEySXNQb2ludCkpIHtcclxuICAgICAgICAgICAgYXR0cnMgPSB7IHgxOiBhMSwgeTE6IGEyLCB4MjogYTMsIHkyOiBhNCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGxpbmVfMS5MaW5lKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBhdGgoZCwgcGF0aExlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0geyBkLCBwYXRoTGVuZ3RoIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBwYXRoXzEuUGF0aCh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBwb2x5Z29uKHBvaW50cykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0geyBwb2ludHMgfTtcclxuICAgICAgICByZXR1cm4gbmV3IHBvbHlnb25fMS5Qb2x5Z29uKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHBvbHlsaW5lKHBvaW50cykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0geyBwb2ludHMgfTtcclxuICAgICAgICByZXR1cm4gbmV3IHBvbHlsaW5lXzEuUG9seWxpbmUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcmVjdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7fTtcclxuICAgICAgICBpZiAoYTEgaW5zdGFuY2VvZiBib3hfMS5Cb3gpIHtcclxuICAgICAgICAgICAgYXR0cnNbXCJ4Onk6d2lkdGg6aGVpZ2h0XCJdID0gYTE7XHJcbiAgICAgICAgICAgIGlmIChhMiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wicng6cnlcIl0gPSBhMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeFwiXSA9IGEyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGEzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ5XCJdID0gYTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgIGF0dHJzW1wieDp5XCJdID0gYTE7XHJcbiAgICAgICAgICAgIGlmIChhMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcIndpZHRoXCJdID0gYTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wiaGVpZ2h0XCJdID0gYTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGE0IGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJyeDpyeVwiXSA9IGE0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGE0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ4XCJdID0gYTQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYTUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnlcIl0gPSBhNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXR0cnNbXCJ4XCJdID0gYTE7XHJcbiAgICAgICAgICAgIGlmIChhMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcInlcIl0gPSBhMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJ3aWR0aFwiXSA9IGEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhNCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcImhlaWdodFwiXSA9IGE0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhNSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wicng6cnlcIl0gPSBhNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhNSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeFwiXSA9IGE1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGE2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ5XCJdID0gYTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyByZWN0XzEuUmVjdCh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICB0ZXh0KGNvbnRlbnQsIGExLCBhMikge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gKGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkgPyB7IFwieDp5XCI6IGExIH0gOiB7IHg6IGExLCB5OiBhMiB9O1xyXG4gICAgICAgIGNvbnN0IHQgPSBuZXcgdGV4dF8xLlRleHQodGhpcywgYXR0cnMpO1xyXG4gICAgICAgIGNvbnRlbnQuZm9yRWFjaChjID0+IHQuYWRkU3BhbihjKSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxufVxyXG5Db250ZXh0LkRFRkFVTFRfV0lORE9XID0gd2luZG93O1xyXG5Db250ZXh0Ll9DT05URVhUX1NVQkpFQ1QgPSBuZXcgcnhqc18xLlJlcGxheVN1YmplY3QoMSk7XHJcbmV4cG9ydHMuQ29udGV4dCA9IENvbnRleHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVkR1Y0ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbU52Ym5SbGVIUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRCUVVGQkxDdENRVUZwUkR0QlFVVnFSQ3d3UTBGQmRVTTdRVUZGZGtNc09FTkJRVEpETzBGQlJUTkRMREpEUVVFeVF6dEJRVU16UXl4NVEwRkJjMFE3UVVGRGRFUXNkVU5CUVc5RE8wRkJRM0JETEc5RlFVRm5SVHRCUVVOb1JTdzRSRUZCTWtRN1FVRkRNMFFzTUVSQlFYVkVPMEZCUlhaRUxITkdRVUZ6U0R0QlFVTjBTQ3h6UmtGQmMwZzdRVUZEZEVnc09FVkJRVEpGTzBGQlJUTkZMRGhFUVVFNFJEdEJRVU01UkN3d1JVRkJjMFU3UVVGRGRFVXNkMFJCUVhGRU8wRkJRM0pFTEhkRVFVRnhSRHRCUVVOeVJDeHBSVUZCT0VRN1FVRkRPVVFzYlVWQlFXZEZPMEZCUTJoRkxEWkVRVUV3UkR0QlFVTXhSQ3cyUkVGQk1FUTdRVUZETVVRc2JVVkJRV2RGTzBGQlEyaEZMSEZGUVVGclJUdEJRVU5zUlN3MlJFRkJNRVE3UVVGRE1VUXNjMFJCUVcxRU8wRkJUVzVFTzBsQldVVXNXVUZCV1N4SlFVRTJRaXhGUVVGVkxGVkJRV3RDTEU5QlFVOHNRMEZCUXl4alFVRmpPMUZCUVhoRExGbEJRVThzUjBGQlVDeFBRVUZQTEVOQlFXbERPMUZCUTNwR0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRWQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU0zUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEzUkVMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzV1VGQldTeGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOb1F5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGJFSXNRMEZCUXp0blFrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEVGl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1owSkJRelZFTEVOQlFVTTdXVUZEU0N4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGNFSXNRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMR2xDUVVGTExFVkJRVVVzUzBGQlN5eERRVUZyUWl4RFFVRkRPMWxCUTJ4R0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNKRUxFTkJRVU03VVVGRFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzYVVKQlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMR2xDUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEdsQ1FVRkxMRU5CUVVNc1EwRkJRenRSUVVOcVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpGQ0xFMUJRVTBzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROMFFzUlVGQlJTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RFFVRXlRaXhKUVVGSkxFVkJRVVVzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBHTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4cFFrRkJUeXhEUVVFeVFpeEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRia1VzUTBGQlF6dFJRVU5FTEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRWEpEVFN4TlFVRk5MRXRCUVVzc1VVRkJVVHRSUVVONFFpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGdlEwUXNTVUZCVnl4TlFVRk5PMUZCUTJZc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVOTkxFMUJRVTBzUTBGQlF5eEhRVUVyUXp0UlFVTXpSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlEwMHNVVUZCVVN4RFFVRkRMRVZCUVRoRE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUlVGQlJTeFpRVUZaTEdsQ1FVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGJrVXNRMEZCUXp0SlFVTlpMRWxCUVVrc1EwRkJReXhIUVVGWE96dFpRVU16UWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhOUVVGTkxITkNRVUZYTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnhFTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeHpRa0ZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3h6UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETzFGQlEycEVMRU5CUVVNN1MwRkJRVHRKUVVOTkxGRkJRVkVzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZVc1JVRkJSU3hEUVVGVkxFVkJRVVVzUzBGQk9FTXNSVUZCUlN4WlFVRnhSRHRSUVVOcVN5eE5RVUZOTEVOQlFVTXNTVUZCU1N4dlFrRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpkRUxFTkJRVU03U1VGRFRTeE5RVUZOTzFGQlExZ3NUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJRMDBzU1VGQlNTeERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeExRVUU0UXl4RlFVRkZMRmxCUVhGRU8xRkJRemRLTEUxQlFVMHNRMEZCUXl4SlFVRkpMRmRCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTjZSQ3hEUVVGRE8wbEJRMDBzWTBGQll5eERRVUZETEV0QlFWa3NSVUZCUlN4TFFVRnBRenRSUVVOdVJTeE5RVUZOTEVOQlFVTXNTVUZCU1N4MVFrRkJZeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVU5OTEdOQlFXTXNRMEZCUXl4TFFVRlpMRVZCUVVVc1MwRkJhVU03VVVGRGJrVXNUVUZCVFN4RFFVRkRMRWxCUVVrc2RVSkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZEVFN4UFFVRlBMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRWxCUVZVN1VVRkRja1VzVFVGQlRTeERRVUZETEVsQlFVa3NhVUpCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6ZERMRU5CUVVNN1NVRkRUU3hoUVVGaExFTkJRVU1zU1VGQmFVSXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFdEJRV0VzUlVGQlJTeE5RVUZqTzFGQlEzcEdMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzT0VKQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZFTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGFrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5zUWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4SFFVRnZRenRSUVVNdlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMR0ZCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU16UWl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYkVJc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZEV1N4TFFVRkxMRU5CUVVNc1NVRkJXVHM3V1VGRE4wSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hoUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETlVJc1RVRkJUU3hQUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkRla1FzUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGREwwSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU51UWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFOUJRVThzUTBGQlF6dFpRVU0xUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMklzUTBGQlF6dExRVUZCTzBsQlIwMHNUVUZCVFN4RFFVRkRMRVZCUVd0Q0xFVkJRVVVzUlVGQlZTeEZRVUZGTEVWQlFWYzdVVUZEZGtRc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVONlJpeE5RVUZOTEVOQlFVTXNTVUZCU1N4bFFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkhUU3hQUVVGUExFTkJRVU1zUlVGQmEwSXNSVUZCUlN4RlFVRnJRaXhGUVVGRkxFVkJRVmNzUlVGQlJTeEZRVUZYTzFGQlF6ZEZMRWxCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEUxQlFVMHNVMEZCVXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hoUVVGTExFTkJRVU03VVVGRGRFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1JVRkJSU3haUVVGWkxHRkJRVXNzUTBGQlF6dFJRVU4wUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhUUVVGVExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhMUVVGTExFZEJRVWNzUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVU4yUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVNM1F5eERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRWxCUVVrc2FVSkJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVWROTEVsQlFVa3NRMEZCUXl4RlFVRnJRaXhGUVVGRkxFVkJRV3RDTEVWQlFVVXNSVUZCVnl4RlFVRkZMRVZCUVZjN1VVRkRNVVVzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJZc1RVRkJUU3hUUVVGVExFZEJRVWNzUlVGQlJTeFpRVUZaTEdGQlFVc3NRMEZCUXp0UlFVTjBReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEZRVUZGTEZsQlFWa3NZVUZCU3l4RFFVRkRPMUZCUTNSRExFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEV0QlFVc3NSMEZCUnl4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUTNaRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja01zUzBGQlN5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzFGQlF6ZERMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZEVFN4SlFVRkpMRU5CUVVNc1EwRkJaMElzUlVGQlJTeFZRVUZ0UWp0UlFVTXZReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOb1F5eE5RVUZOTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OUNMRU5CUVVNN1NVRkRUU3hQUVVGUExFTkJRVU1zVFVGQlpUdFJRVU0xUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzcENMRTFCUVUwc1EwRkJReXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnhETEVOQlFVTTdTVUZEVFN4UlFVRlJMRU5CUVVNc1RVRkJaVHRSUVVNM1FpeE5RVUZOTEV0QlFVc3NSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRzFDUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFTkJRVU03U1VGTlRTeEpRVUZKTEVOQlFVTXNSVUZCZDBJc1JVRkJSU3hGUVVGdFFpeEZRVUZGTEVWQlFWY3NSVUZCUlN4RlFVRnRRaXhGUVVGRkxFVkJRVzFDTEVWQlFVVXNSVUZCVnp0UlFVTXpTQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeFpRVUZaTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRUlzUzBGQlN5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlF5OUNMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1JDTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY2tJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRia0lzUTBGQlF6dG5Ra0ZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRja0lzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGJrSXNRMEZCUXp0WlFVTklMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OUNMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEYkVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM0pDTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGRFSXNRMEZCUXp0WlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOeVFpeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1pDTEVOQlFVTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOMFFpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzSkNMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUTI1Q0xFTkJRVU03WjBKQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNKQ0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMjVDTEVOQlFVTTdXVUZEU0N4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU5vUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRja0lzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOc1FpeERRVUZETzFsQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNKQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRkRUlzUTBGQlF6dFpRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnlRaXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNaQ0xFTkJRVU03V1VGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjBRaXhEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM0pDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBKQlEyNUNMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzSkNMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUTI1Q0xFTkJRVU03V1VGRFNDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxGZEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVWROTEVsQlFVa3NRMEZCUXl4UFFVRnpRaXhGUVVGRkxFVkJRV3RDTEVWQlFVVXNSVUZCVnp0UlFVTnFSU3hOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEVWQlFVVXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGRrVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hYUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTJoRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRia01zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFnc1EwRkJRenM3UVVFMVRXRXNjMEpCUVdNc1IwRkJWeXhOUVVGTkxFTkJRVU03UVVGSkwwSXNkMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeHZRa0ZCWVN4RFFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJUR3hGTERCQ1FUaE5ReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGV4dC50c1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSeFwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy54fSAke3RoaXMueX0gJHt0aGlzLndpZHRofSAke3RoaXMuaGVpZ2h0fWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveChwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pLCBwYXJzZUZsb2F0KHRva3NbMl0pLCBwYXJzZUZsb2F0KHRva3NbM10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm94KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NYID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1swXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1kgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzFdKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzV2lkdGggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzJdKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzSGVpZ2h0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1szXSk7XHJcbiAgICAgICAgICAgIGlmIChjc3NYICE9PSBudWxsICYmIGNzc1kgIT09IG51bGwgJiYgY3NzV2lkdGggIT09IG51bGwgJiYgY3NzSGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJveChwYXJzZUZsb2F0KGNzc1gpLCBwYXJzZUZsb2F0KGNzc1kpLCBwYXJzZUZsb2F0KGNzc1dpZHRoKSwgcGFyc2VGbG9hdChjc3NIZWlnaHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQm94KDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgb3ZlcnJpZGUueC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMV0sIG92ZXJyaWRlLnkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzJdLCBvdmVycmlkZS53aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbM10sIG92ZXJyaWRlLmhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHRoaXMueC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMV0sIHRoaXMueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMl0sIHRoaXMud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzNdLCB0aGlzLmhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJveChiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ueCwgdGhpcy54LCB0KSwgYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLnksIHRoaXMueSwgdCksIGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS53aWR0aCwgdGhpcy53aWR0aCwgdCksIGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS5oZWlnaHQsIHRoaXMuaGVpZ2h0LCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Cb3ggPSBCb3g7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltOTRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVltOTRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNhVU5CUVc5RU8wRkJSWEJFTzBsQlEwVXNXVUZCYlVJc1EwRkJVeXhGUVVGVExFTkJRVk1zUlVGQlV5eExRVUZoTEVWQlFWTXNUVUZCWXp0UlFVRjRSU3hOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZSTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJVVHRSUVVGVExGVkJRVXNzUjBGQlRDeExRVUZMTEVOQlFWRTdVVUZCVXl4WFFVRk5MRWRCUVU0c1RVRkJUU3hEUVVGUk8wbEJRVWNzUTBGQlF6dEpRVU40Uml4UlFVRlJPMUZCUTJJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wbEJRelZFTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1IwRkJhMEk3VVVGRE4wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNMVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY2tjc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRDTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1R0UlFVTXhReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzU1VGQlNTeFJRVUZSTEV0QlFVc3NTVUZCU1N4SlFVRkpMRk5CUVZNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTVSU3hOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRWNzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEVMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRV003VVVGRE1VUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGNrUXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTnlSQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRM3BFTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0xUkN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTnFSQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMnBFTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tRc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNoRUxFTkJRVU03VVVGRFNDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE0wSXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRVFzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6bERMRU5CUVVNN1VVRkRTQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRlRMRVZCUVVVc1EwRkJVenRSUVVOeVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc2VVSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSGxDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4NVFrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNlVUpCUVd0Q0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETDB3c1EwRkJRenREUVVOR08wRkJkRVJFTEd0Q1FYTkVReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9ib3gudHNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy54fSwke3RoaXMueX1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludChiYXNlXzEuX0xlbmd0aFBhcnNlKHRva3NbMF0pLCBiYXNlXzEuX0xlbmd0aFBhcnNlKHRva3NbMV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1ggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzWSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMV0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzWCAhPT0gbnVsbCAmJiBjc3NZICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KGJhc2VfMS5fTGVuZ3RoUGFyc2UoY3NzWCksIGJhc2VfMS5fTGVuZ3RoUGFyc2UoY3NzWSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIG92ZXJyaWRlLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCBvdmVycmlkZS55LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgdGhpcy54LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1sxXSwgdGhpcy55LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLngsIHRoaXMueCwgdCksIGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS55LCB0aGlzLnksIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvaW50ID0gUG9pbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiMmx1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTEdsRFFVRnJSVHRCUVVWc1JUdEpRVU5GTEZsQlFXMUNMRU5CUVZNc1JVRkJVeXhEUVVGVE8xRkJRVE5DTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZFN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZSTzBsQlFVY3NRMEZCUXp0SlFVTXpReXhSUVVGUk8xRkJRMklzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eHRRa0ZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEcxQ1FVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNwQ0xFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVcxQ0xFVkJRVVVzU1VGQldUdFJRVU14UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5ETEUxQlFVMHNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1NVRkJTU3hKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRzFDUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNiVUpCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkVMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFTkJRVU03VVVGRFNDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVRc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQlowSTdVVUZETlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVJc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tRc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMnBFTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU51UkN4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyeEVMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNNVF5eERRVUZETzFGQlEwZ3NRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQlZ5eEZRVUZGTEVOQlFWTTdVVUZEZGtNc1RVRkJUU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEhsQ1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeDVRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5xUnl4RFFVRkRPME5CUTBZN1FVRm9SRVFzYzBKQlowUkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9wb2ludC50c1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgU1ZHRG9jdW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcmF3LCBtaW1lVHlwZSA9IFwiYXBwbGljYXRpb24veG1sXCIpIHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IChyYXcgaW5zdGFuY2VvZiBEb2N1bWVudCkgPyByYXcgOiBTVkdEb2N1bWVudC5QQVJTRVIucGFyc2VGcm9tU3RyaW5nKHJhdywgbWltZVR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGFsbERlZnMgPSBBcnJheS5mcm9tKHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGVmc1wiKSk7XHJcbiAgICAgICAgYWxsRGVmcy5mb3JFYWNoKChkZWZzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWZzLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJtRGVmcyA9IGRlZnMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkZWZzKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChybURlZnMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYWRkRGVmKHJtRGVmcy5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldCBjaGlsZHJlbigpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNoaWxkcmVuKTtcclxuICAgIH1cclxufVxyXG5TVkdEb2N1bWVudC5QQVJTRVIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbmV4cG9ydHMuU1ZHRG9jdW1lbnQgPSBTVkdEb2N1bWVudDtcclxuZXhwb3J0cy5tYWtlUmVxdWVzdCA9IChtZXRob2QsIHVybCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhtbCA9IHhoci5yZXNwb25zZVhNTDtcclxuICAgICAgICAgICAgICAgIGlmICh4bWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhtbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9KTtcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkc5amRXMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmtiMk4xYldWdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQk8wbEJSMFVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRWRCUVhOQ0xFVkJRVVVzVjBGQmJVSXNhVUpCUVdsQ08xRkJRM2hHTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1EwRkJReXhIUVVGSExGbEJRVmtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzSkhMRTFCUVUwc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM2hGTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJUdFpRVU4yUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRjRUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTJwRUxFOUJRVThzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU03YjBKQlEyeERMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVdVc1EwRkJReXhEUVVGRE8yZENRVU51UkN4RFFVRkRPMWxCUTBnc1EwRkJRenRSUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwd3NRMEZCUXp0SlFVTkVMRWxCUVZjc1VVRkJVVHRSUVVOcVFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlF6ZEZMRU5CUVVNN08wRkJhRUpqTEd0Q1FVRk5MRWRCUVVjc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dEJRVVF4UXl4clEwRnJRa003UVVGRldTeFJRVUZCTEZkQlFWY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRWEZDTEVWQlFVVTdTVUZETlVRc1RVRkJUU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8xRkJRM0pETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1kwRkJZeXhGUVVGRkxFTkJRVU03VVVGRGFrTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RlFVRkZPMWxCUTJoQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE1VTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF6dG5Ra0ZETlVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMnBDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFppeERRVUZETzJkQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU5PTEUxQlFVMHNRMEZCUXp0M1FrRkRUQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEUxQlFVMDdkMEpCUTJ4Q0xGVkJRVlVzUlVGQlJTeEhRVUZITEVOQlFVTXNWVUZCVlR0eFFrRkRNMElzUTBGQlF5eERRVUZETzJkQ1FVTk1MRU5CUVVNN1dVRkRTQ3hEUVVGRE8xRkJRMGdzUTBGQlF5eERRVUZETzFGQlEwWXNSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhIUVVGSExFVkJRVVU3V1VGRGFrSXNUVUZCVFN4RFFVRkRPMmRDUVVOTUxFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNUVUZCVFR0blFrRkRiRUlzVlVGQlZTeEZRVUZGTEVkQlFVY3NRMEZCUXl4VlFVRlZPMkZCUXpOQ0xFTkJRVU1zUTBGQlF6dFJRVU5NTEVOQlFVTXNRMEZCUXp0UlFVTkdMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5pTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTB3c1EwRkJReXhEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kb2N1bWVudC50c1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZGltZW5zaW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vYXR0cmlidXRlcy9kaW1lbnNpb25cIik7XHJcbmNvbnN0IGVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9lbGVtZW50XCIpO1xyXG5jb25zdCBwYWludF9zZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuLi9wYWludC1zZXJ2ZXJcIik7XHJcbmNsYXNzIFN0b3AgZXh0ZW5kcyBlbGVtZW50XzEuRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBvZmZzZXQsIGNvbG9yKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJzdG9wXCIsIHtcclxuICAgICAgICAgICAgb2Zmc2V0OiBuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKG9mZnNldCAqIDEwMCwgXCIlXCIpLFxyXG4gICAgICAgICAgICBcInN0b3AtY29sb3JcIjogY29sb3IsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdG9wID0gU3RvcDtcclxuY2xhc3MgQWJzdHJhY3RHcmFkaWVudCBleHRlbmRzIHBhaW50X3NlcnZlcl8xLkFic3RyYWN0UGFpbnRTZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgbmFtZSwgc3RvcHMsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgbmFtZSwgYXR0cnMpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgY29uc3Qgc3RvcEFyciA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3BzKS5mb3JFYWNoKG9mZnNldCA9PiB7XHJcbiAgICAgICAgICAgIHN0b3BBcnIucHVzaChuZXcgU3RvcChjb250ZXh0LCBOdW1iZXIob2Zmc2V0KSwgc3RvcHNbb2Zmc2V0XSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3BBcnIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vZmZzZXQgLSBiLm9mZnNldDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9wQXJyLmZvckVhY2gocyA9PiB0aGlzLmFkZChzKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdEdyYWRpZW50ID0gQWJzdHJhY3RHcmFkaWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjNKaFpHbGxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sm5jbUZrYVdWdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEWkVRVUZ6UlR0QlFWRjBSU3c0UTBGQk1rTTdRVUZGTTBNc2EwUkJRWE5FTzBGQk1FSjBSQ3hWUVVGclFpeFRRVUZSTEdsQ1FVRTRSRHRKUVVOMFJpeFpRVUZaTEU5QlFXZENMRVZCUVZNc1RVRkJZeXhGUVVGRkxFdEJRWFZETzFGQlF6RkdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTzFsQlEzSkNMRTFCUVUwc1JVRkJSU3hKUVVGSkxIRkNRVUZUTEVOQlFVMHNUVUZCVFN4SFFVRkhMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03V1VGRE4wTXNXVUZCV1N4RlFVRkZMRXRCUVVzN1UwRkRjRUlzUTBGQlF5eERRVUZETzFGQlNtZERMRmRCUVUwc1IwRkJUaXhOUVVGTkxFTkJRVkU3U1VGTGJrUXNRMEZCUXp0RFFVTkdPMEZCVUVRc2IwSkJUME03UVVGRlJDeHpRa0ZCTmtjc1UwRkJVU3hyUTBGQk1FTTdTVUZETjBvc1dVRkJXU3hQUVVGblFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4TFFVRlpMRVZCUVVVc1MwRkJPRVE3VVVGRGRFZ3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNVUlzVFVGQlRTeFBRVUZQTEVkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlEyeERMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOd1F5eERRVUZETzBOQlEwWTdRVUZpUkN3MFEwRmhReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnQudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5vbl9yZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vbm9uLXJlbmRlcmFibGVcIik7XHJcbmNsYXNzIEFic3RyYWN0UGFpbnRTZXJ2ZXIgZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdFBhaW50U2VydmVyID0gQWJzdHJhY3RQYWludFNlcnZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dGcGJuUXRjMlZ5ZG1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY0dGcGJuUXRjMlZ5ZG1WeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2MwUkJRVEJFTzBGQlJURkVMSGxDUVVGMVJpeFRRVUZSTEhORFFVRXJRenREUVVGSE8wRkJRV3BLTEd0RVFVRnBTaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlci50c1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGFpbnRfc2VydmVyXzEgPSByZXF1aXJlKFwiLi4vcGFpbnQtc2VydmVyXCIpO1xyXG5jbGFzcyBQYXR0ZXJuIGV4dGVuZHMgcGFpbnRfc2VydmVyXzEuQWJzdHJhY3RQYWludFNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3LCBoID0gKHcgaW5zdGFuY2VvZiBTVkdQYXR0ZXJuRWxlbWVudCkgPyAwIDogdywgeCA9IDAsIHkgPSAwLCB2aWV3KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgKHcgaW5zdGFuY2VvZiBTVkdQYXR0ZXJuRWxlbWVudCkgPyB3IDogXCJwYXR0ZXJuXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZERlZih0aGlzKTtcclxuICAgICAgICBpZiAoISh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgdyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieVwiLCB5KTtcclxuICAgICAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwicGF0dGVyblVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbG9uZShkZWVwID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGF0dGVybih0aGlzLmNvbnRleHQsIHN1cGVyLmNsb25lTm9kZShkZWVwKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QYXR0ZXJuID0gUGF0dGVybjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dGMGRHVnliaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluQmhkSFJsY200dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZYUVN4clJFRkJjMFE3UVVGNVFuUkVMR0ZCUVhGQ0xGTkJRVkVzYTBOQlFUQkVPMGxCUjNKR0xGbEJRVzFDTEU5QlFXZENMRVZCUVVVc1EwRkJOa0lzUlVGQlJTeEpRVUZaTEVOQlFVTXNRMEZCUXl4WlFVRlpMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVlU3VVVGRGFFc3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJSR2hFTEZsQlFVOHNSMEZCVUN4UFFVRlBMRU5CUVZNN1VVRkZha01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE1VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOVUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRM0pETEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMR05CUVdNc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RFFVRkRPMWxCUTNSRUxFTkJRVU03VVVGRFNDeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhQUVVGblFpeEpRVUZKTzFGQlF5OUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhSQ3hEUVVGRE8wTkJRMFk3UVVGeVFrUXNNRUpCY1VKREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9wYXR0ZXJuLnRzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBfZGVmYXVsdEdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbn1cclxuZXhwb3J0cy5fZGVmYXVsdEdldCA9IF9kZWZhdWx0R2V0O1xyXG5mdW5jdGlvbiBfZGVmYXVsdFNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSAodHlwZW9mIG92ZXJyaWRlID09PSBcInVuZGVmaW5lZFwiKSA/IHRoaXMgOiBvdmVycmlkZTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIFN0cmluZyh2YWx1ZSkpO1xyXG59XHJcbmV4cG9ydHMuX2RlZmF1bHRTZXQgPSBfZGVmYXVsdFNldDtcclxuZXhwb3J0cy5pc0F0dHJpYnV0ZSA9IChvYmopID0+IHtcclxuICAgIHJldHVybiBvYmogJiYgKHR5cGVvZiBvYmpbXCJpbnRlcnBvbGF0ZVwiXSA9PT0gXCJmdW5jdGlvblwiKSAmJiAodHlwZW9mIG9ialtcInBhcnNlXCJdID09PSBcImZ1bmN0aW9uXCIpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWFIwY21saWRYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVlYUjBjbWxpZFhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCWTBFc2NVSkJRVzFFTEU5QlFXMUNMRVZCUVVVc1NVRkJXVHRKUVVOc1JpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRhRVFzUTBGQlF6dEJRVVpFTEd0RFFVVkRPMEZCUlVRc2NVSkJRWGRETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRVms3U1VGRGNrWXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhQUVVGUExGRkJRVkVzUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEYkVVc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE5VTXNRMEZCUXp0QlFVaEVMR3REUVVkRE8wRkJSVmtzVVVGQlFTeFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRjVRaXhGUVVGNVFpeEZRVUZGTzBsQlF6bEZMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETzBGQlEyNUhMRU5CUVVNc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcclxuY29uc3QgaWRfMSA9IHJlcXVpcmUoXCIuLi9pZFwiKTtcclxuY2xhc3MgUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWUgPSByeGpzXzEuT2JzZXJ2YWJsZS5pbnRlcnZhbCgwLCByeGpzXzEuU2NoZWR1bGVyLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzID0gbmV3IHJ4anNfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlSW50ZXJwb2xhdGlvbnMgPSB7fTtcclxuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzLmJ1ZmZlcldoZW4oKCkgPT4gdGhpcy5fYW5pbWF0aW9uRnJhbWUpLnN1YnNjcmliZSgodXBkYXRlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgdXBkYXRlcy5mb3JFYWNoKCh7IGVsLCBhdHRyaWJ1dGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwucmVuZGVyQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRpb24gPSB0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmluYWxSZW5kZXIgPSBub3cgPiAoaW50ZXJwb2xhdGlvbi5zdGFydCArIGludGVycG9sYXRpb24uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IChmaW5hbFJlbmRlcikgPyAxIDogaW50ZXJwb2xhdGlvbi5lYXNpbmcoKG5vdyAtIGludGVycG9sYXRpb24uc3RhcnQpIC8gaW50ZXJwb2xhdGlvbi5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gYXR0cmlidXRlLnZhbCh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uLmVsLnJlbmRlckF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgdmFsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsUmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5yZXNvbHZlKG5vdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBSZW5kZXJlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBxdWV1ZUF0dHJpYnV0ZVVwZGF0ZShhMSwgYTIsIGEzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhMiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzLm5leHQoeyBlbDogYTEsIGF0dHJpYnV0ZTogeyBuYW1lOiBhMiwgdmFsOiBhMyB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYTIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZVVwZGF0ZXMubmV4dCh7IGVsOiBhMSwgYXR0cmlidXRlOiB7IG5hbWUsIHZhbDogYTJbbmFtZV0gfSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJBdHRyaWJ1dGVJbnRlcnBvbGF0aW9uKGVsLCBhdHRyLCB2YWwsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gaWRfMS5yYW5kb21TaG9ydFN0cmluZ0lkKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbeyBuYW1lOiBhdHRyLCB2YWwgfV07XHJcbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zW2tleV0gPSB7IGVsLCBhdHRyaWJ1dGVzLCBzdGFydCwgZHVyYXRpb24sIGVhc2luZywgcmVzb2x2ZSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblJlbmRlcmVyLl9pbnN0YW5jZSA9IG5ldyBSZW5kZXJlcigpO1xyXG5leHBvcnRzLlJlbmRlcmVyID0gUmVuZGVyZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVnVaR1Z5WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp5Wlc1a1pYSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVZEJMQ3RDUVVGelJEdEJRVVYwUkN3NFFrRkJORU03UVVFNFFqVkRPMGxCVVVVN1VVRklVU3h2UWtGQlpTeEhRVUZITEdsQ1FVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeG5Ra0ZCVXl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8xRkJRMjVGTEhOQ1FVRnBRaXhIUVVGSExFbEJRVWtzWTBGQlR5eEZRVUZ2UkN4RFFVRkRPMUZCUTNCR0xEWkNRVUYzUWl4SFFVRTJSU3hGUVVGRkxFTkJRVU03VVVGRk9VY3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRGJFWXNUVUZCVFN4SFFVRkhMRWRCUVVjc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlF6bENMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1JVRkJSU3hGUVVGRk8yZENRVU53UXl4RlFVRkZMRU5CUVVNc1pVRkJaU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0JFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRGVrUXNUVUZCVFN4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU42UkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4SFFVRkhMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtVc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEzcEhMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVN2IwSkJRemRETEUxQlFVMHNSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpkQ0xHRkJRV0VzUTBGQlF5eEZRVUZGTEVOQlFVTXNaVUZCWlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNoRUxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTklMRVZCUVVVc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJoQ0xFOUJRVThzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTXhReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNM1FpeERRVUZETzFsQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUV6UWswc1RVRkJUU3hEUVVGRExGZEJRVmM3VVVGRGRrSXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFUUkNUU3h2UWtGQmIwSXNRMEZCYlVVc1JVRkJTeXhGUVVGRkxFVkJRV0VzUlVGQlJTeEZRVUZoTzFGQlF5OUlMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNMElzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkZMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVN1owSkJReTlDTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxGTkJRVk1zUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpsRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwd3NRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3c0UWtGQk9FSXNRMEZCYlVVc1JVRkJTeXhGUVVGRkxFbEJRVThzUlVGQlJTeEhRVUUwUWl4RlFVRkZMRkZCUVdkQ0xFVkJRVVVzVFVGQmMwSTdVVUZETlV3c1RVRkJUU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkROMElzVFVGQlRTeEhRVUZITEVkQlFVY3NkMEpCUVcxQ0xFVkJRVVVzUTBGQlF6dFpRVU5zUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEYUVNc1RVRkJUU3hWUVVGVkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU42UXl4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzFGQlF6VkdMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF6czdRVUV6UTJNc2EwSkJRVk1zUjBGQlJ5eEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMEZCU2pWRExEUkNRV2RFUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FuaW1hdGlvbi9yZW5kZXJlci50c1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yYW5kb21TaG9ydFN0cmluZ0lkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBaQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTmhMRkZCUVVFc2JVSkJRVzFDTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWQudHNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jbGFzcyBOdW1iZXJXcmFwcGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG4gPSAwKSB7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJXcmFwcGVyKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlcldyYXBwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGUgOiB0aGlzKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE51bWJlcldyYXBwZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJXcmFwcGVyID0gTnVtYmVyV3JhcHBlcjtcclxuY2xhc3MgQXJyYXlXcmFwcGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyciA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5hcnIgPSBhcnI7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnIuam9pbihcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIlxcdFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheVdyYXBwZXIodGhpcy5hcnIubWFwKChhLCBpKSA9PiBhLnBhcnNlKChpID49IHRva3MubGVuZ3RoKSA/IG51bGwgOiB0b2tzW2ldKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheVdyYXBwZXIodGhpcy5hcnIubWFwKGEgPT4gYS5wYXJzZShudWxsKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQgPyBvdmVycmlkZSA6IHRoaXMpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlXcmFwcGVyKHRoaXMuYXJyLm1hcCgocywgaSkgPT4gcy5pbnRlcnBvbGF0ZShmcm9tLmFycltpXSwgdCkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFycmF5V3JhcHBlciA9IEFycmF5V3JhcHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZDNKaGNIQmxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SjNjbUZ3Y0dWeWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxHOUVRVUY1UXp0QlFVVjZRenRKUVVORkxGbEJRVzFDTEVsQlFWa3NRMEZCUXp0UlFVRmlMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3U1VGQlJ5eERRVUZETzBsQlF6ZENMRkZCUVZFN1VVRkRZaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNelFpeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVF5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTTNRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVms3VVVGRE1VTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCZDBJN1VVRkRjRVVzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRjRVlzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRnRRaXhGUVVGRkxFTkJRVk03VVVGREwwTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1lVRkJZU3hEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRja1FzUTBGQlF6dERRVU5HTzBGQmNrSkVMSE5EUVhGQ1F6dEJRVVZFTzBsQlEwVXNXVUZCYlVJc1RVRkJWeXhGUVVGRk8xRkJRV0lzVVVGQlJ5eEhRVUZJTEVkQlFVY3NRMEZCVlR0SlFVVm9ReXhEUVVGRE8wbEJRMDBzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETjBJc1RVRkJUU3hEUVVGRExFbEJRVWtzV1VGQldTeERRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1SExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxGbEJRVmtzUTBGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXVHRSUVVNeFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVmtzUlVGQlJTeFJRVUV3UWp0UlFVTjBSU3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTndSaXhEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFYRkNMRVZCUVVVc1EwRkJVenRSUVVOcVJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4WlFVRlpMRU5CUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0JHTEVOQlFVTTdRMEZEUmp0QlFYaENSQ3h2UTBGM1FrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy93cmFwcGVycy50c1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgQ2xpcFBhdGggZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJjbGlwUGF0aFwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnRVbml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza0NvbnRlbnRVbml0c1wiLCBjb250ZW50VW5pdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNsaXBQYXRoID0gQ2xpcFBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyeHBjQzF3WVhSb0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTJ4cGNDMXdZWFJvTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYzBSQlFUQkVPMEZCYTBJeFJDeGpRVUZ6UWl4VFFVRlJMSE5EUVVFd1JEdEpRVU4wUml4WlFVRnRRaXhQUVVGblFpeEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeExRVUU0UXl4RlFVRkZMRmxCUVhGRU8xRkJRM2hNTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRVZpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRlRPMUZCUldwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRExFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UXl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dERRVU5HTzBGQmRrSkVMRFJDUVhWQ1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvY2xpcC1wYXRoLnRzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibWFya2VyXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hcmtlciA9IE1hcmtlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGeWEyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJXRnlhMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYzBSQlFXOUdPMEZCYjBKd1JpeFpRVUZ2UWl4VFFVRlJMSE5EUVVFd1JEdEpRVU53Uml4WlFVRlpMRTlCUVdkQ0xFVkJRVVVzUzBGQk5rUTdVVUZEZWtZc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNkMEpCU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvbWFya2VyLnRzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBNYXNrIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibWFza1wiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnRVbml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza0NvbnRlbnRVbml0c1wiLCBjb250ZW50VW5pdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hc2sgPSBNYXNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0Z6YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYzJzdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4elJFRkJNRVE3UVVGcFFqRkVMRlZCUVd0Q0xGTkJRVkVzYzBOQlFYTkVPMGxCUXpsRkxGbEJRVzFDTEU5QlFXZENMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRXRCUVRoRExFVkJRVVVzV1VGQmNVUTdVVUZEZUV3c1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVUk9MRmxCUVU4c1IwRkJVQ3hQUVVGUExFTkJRVk03VVVGRmFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETVVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFTXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBETEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVOQlFVTTdTVUZEU0N4RFFVRkRPME5CUTBZN1FVRjJRa1FzYjBKQmRVSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2sudHNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdyYWRpZW50XzEgPSByZXF1aXJlKFwiLi4vZ3JhZGllbnRcIik7XHJcbmNsYXNzIExpbmVhckdyYWRpZW50IGV4dGVuZHMgZ3JhZGllbnRfMS5BYnN0cmFjdEdyYWRpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibGluZWFyR3JhZGllbnRcIiwgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxpbmVhckdyYWRpZW50ID0gTGluZWFyR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHbHVaV0Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liR2x1WldGeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc01FTkJRVEpGTzBGQlZ6TkZMRzlDUVVFMFFpeFRRVUZSTERKQ1FVRnhSVHRKUVVOMlJ5eFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJXU3hGUVVGRkxFdEJRWEZGTzFGQlF5OUhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9saW5lYXIudHNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdyYWRpZW50XzEgPSByZXF1aXJlKFwiLi4vZ3JhZGllbnRcIik7XHJcbmNsYXNzIFJhZGlhbEdyYWRpZW50IGV4dGVuZHMgZ3JhZGllbnRfMS5BYnN0cmFjdEdyYWRpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicmFkaWFsR3JhZGllbnRcIiwgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gUmFkaWFsR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtRmthV0ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljbUZrYVdGc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc01FTkJRVEpGTzBGQldUTkZMRzlDUVVFMFFpeFRRVUZSTERKQ1FVRnhSVHRKUVVOMlJ5eFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJXU3hGUVVGRkxFdEJRWEZGTzFGQlF5OUhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9yYWRpYWwudHNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0XCIpO1xyXG5jb25zdCBkb2N1bWVudF8xID0gcmVxdWlyZShcIi4uLy4uL2RvY3VtZW50XCIpO1xyXG5jb25zdCBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudFwiKTtcclxuY29uc3QgZ3JvdXBfMSA9IHJlcXVpcmUoXCIuL2dyb3VwXCIpO1xyXG5jbGFzcyBFeHRlcm5hbFNWRyBleHRlbmRzIGdyb3VwXzEuR3JvdXAge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZG9jLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGF0dHJzKTtcclxuICAgICAgICBkb2MuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1wb3J0ZWROb2RlID0gY29udGV4dC53aW5kb3cuZG9jdW1lbnQuaW1wb3J0Tm9kZShjaGlsZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGltcG9ydGVkTm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5FeHRlcm5hbFNWRyA9IEV4dGVybmFsU1ZHO1xyXG5mdW5jdGlvbiBidWlsZEV4dGVybmFsQ29tcG9uZW50Q2xhc3ModXJsLCBvcmlnaW4gPSB7IHg6IDAsIHk6IDAgfSkge1xyXG4gICAgY29uc3QgeG1sRG9jdW1lbnRfcCA9IGRvY3VtZW50XzEubWFrZVJlcXVlc3QoXCJHRVRcIiwgdXJsKTtcclxuICAgIGNvbnN0IGNvbnRleHRfcCA9IGNvbnRleHRfMS5Db250ZXh0LmNvbnRleHRzLnRha2UoMSkudG9Qcm9taXNlKCk7XHJcbiAgICBjb25zdCBkb2NfcCA9IFByb21pc2UuYWxsKFtjb250ZXh0X3AsIHhtbERvY3VtZW50X3BdKS50aGVuKChbY29udGV4dCwgeG1sXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgZG9jdW1lbnRfMS5TVkdEb2N1bWVudChjb250ZXh0LCB4bWwpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb21wb25lbnRfMS5Db21wb25lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihvcmlnaW4pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IGRvY19wLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0ZWROb2RlID0gdGhpcy5jb250ZXh0LndpbmRvdy5kb2N1bWVudC5pbXBvcnROb2RlKGNoaWxkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbXBvcnRlZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtc291cmNlLXVybFwiLCB1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5idWlsZEV4dGVybmFsQ29tcG9uZW50Q2xhc3MgPSBidWlsZEV4dGVybmFsQ29tcG9uZW50Q2xhc3M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYaDBaWEp1WVd3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpsZUhSbGNtNWhiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMREpEUVVGM1F6dEJRVU40UXl3MlEwRkJNRVE3UVVGRk1VUXNNa05CUVhkRE8wRkJRM2hETEcxRFFVRm5RenRCUVVWb1F5eHBRa0ZCZVVJc1UwRkJVU3hoUVVGTE8wbEJRM0JETEZsQlFWa3NUMEZCWjBJc1JVRkJSU3hIUVVGblFpeEZRVUZGTEV0QlFYTkRPMUZCUTNCR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRkRUlzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJUdFpRVU0zUWl4TlFVRk5MRmxCUVZrc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEzSkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVVUZEZWtJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwWTdRVUZTUkN4clEwRlJRenRCUVU5RUxIRkRRVUUwUXl4SFFVRlhMRVZCUVVVc1UwRkJiVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3U1VGRGVFY3NUVUZCVFN4aFFVRmhMRWRCUVVjc2MwSkJRVmNzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRPVU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NhVUpCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8wbEJRM1pFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRelZGTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5DUVVGWExFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUVUZCVFN4RFFVRkRMRXRCUVUwc1UwRkJVU3h4UWtGQlV6dFJRVVUxUWp0WlFVTkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU5rTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVNdlFpeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTzI5Q1FVTTNRaXhOUVVGTkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRE1VVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1MwRkRSaXhEUVVGRE8wRkJRMG9zUTBGQlF6dEJRVzVDUkN4clJVRnRRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2V4dGVybmFsLnRzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlYXNpbmdfMSA9IHJlcXVpcmUoXCIuLi8uLi9hbmltYXRpb24vZWFzaW5nXCIpO1xyXG5jb25zdCByb3RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvcm90YXRlXCIpO1xyXG5jb25zdCBzY2FsZV8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9zY2FsZVwiKTtcclxuY29uc3QgdHJhbnNsYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXR0cmlidXRlcy90cmFuc2Zvcm1zL3RyYW5zbGF0ZVwiKTtcclxuY29uc3QgY29udGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRleHRcIik7XHJcbmNvbnN0IGdyb3VwXzEgPSByZXF1aXJlKFwiLi9ncm91cFwiKTtcclxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgZ3JvdXBfMS5Hcm91cCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW4sIGVhc2luZyA9IGVhc2luZ18xLmxpbmVhcikge1xyXG4gICAgICAgIHN1cGVyKENvbXBvbmVudC5jb250ZXh0KTtcclxuICAgICAgICB0aGlzLmVhc2luZyA9IGVhc2luZztcclxuICAgICAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1zID0gW25ldyB0cmFuc2xhdGVfMS5UcmFuc2xhdGVfVHJhbnNmb3JtKCksIG5ldyByb3RhdGVfMS5Sb3RhdGVfVHJhbnNmb3JtKDApLCBuZXcgc2NhbGVfMS5TY2FsZV9UcmFuc2Zvcm0oKV07XHJcbiAgICAgICAgaWYgKG9yaWdpbikge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1zLnB1c2gobmV3IHRyYW5zbGF0ZV8xLlRyYW5zbGF0ZV9UcmFuc2Zvcm0oLW9yaWdpbi54LCAtb3JpZ2luLnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3Jtcyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IGNvbnRleHQoKSB7XHJcbiAgICAgICAgaWYgKCFDb21wb25lbnQuX0NPTlRFWFQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiTm8gc3RhdGljIENvbXBvbmVudCBjb250ZXh0IGZvdW5kLiBTZXQgb25lIG1hbnVhbGx5LCBvciBzdWJzY3JpYmUgdG8gdGhlIGxhdGVzdCBjcmVhdGVkIGNvbnRleHQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Ll9DT05URVhUO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldCBjb250ZXh0KGN0eCkge1xyXG4gICAgICAgIGlmIChDb21wb25lbnQuX0NPTlRFWFRfU1VCU0NSSVBUSU9OKSB7XHJcbiAgICAgICAgICAgIENvbXBvbmVudC5fQ09OVEVYVF9TVUJTQ1JJUFRJT04udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29tcG9uZW50Ll9DT05URVhUID0gY3R4O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHN1YnNjcmliZUxhdGVzdENvbnRleHQoKSB7XHJcbiAgICAgICAgaWYgKENvbXBvbmVudC5fQ09OVEVYVF9TVUJTQ1JJUFRJT04pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb21wb25lbnQuX0NPTlRFWFRfU1VCU0NSSVBUSU9OID0gY29udGV4dF8xLkNvbnRleHQuY29udGV4dHMuc3Vic2NyaWJlKChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIENvbXBvbmVudC5fQ09OVEVYVCA9IGNvbnRleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlVG8oeCwgeSwgZHVyYXRpb24gPSAwKSB7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtLnRyYW5zbGF0ZVwiLCBuZXcgdHJhbnNsYXRlXzEuVHJhbnNsYXRlX1RyYW5zZm9ybSh4LCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm0udHJhbnNsYXRlXCIsIG5ldyB0cmFuc2xhdGVfMS5UcmFuc2xhdGVfVHJhbnNmb3JtKHgsIHkpLCBkdXJhdGlvbiwgdGhpcy5lYXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJvdGF0ZShhbmdsZSwgZHVyYXRpb24gPSAwKSB7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtLnJvdGF0ZVwiLCBuZXcgcm90YXRlXzEuUm90YXRlX1RyYW5zZm9ybShhbmdsZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlQXR0cmlidXRlKFwidHJhbnNmb3JtLnJvdGF0ZVwiLCBuZXcgcm90YXRlXzEuUm90YXRlX1RyYW5zZm9ybShhbmdsZSksIGR1cmF0aW9uLCB0aGlzLmVhc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2NhbGUoeCwgeSA9IHgsIGR1cmF0aW9uID0gMCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybS5zY2FsZVwiLCBuZXcgc2NhbGVfMS5TY2FsZV9UcmFuc2Zvcm0oeCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlQXR0cmlidXRlKFwidHJhbnNmb3JtLnNjYWxlXCIsIG5ldyBzY2FsZV8xLlNjYWxlX1RyYW5zZm9ybSh4LCB5KSwgZHVyYXRpb24sIHRoaXMuZWFzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faGlkZGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faGlkZGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5faGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dGNHOXVaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzYlVSQlFXZEZPMEZCUldoRkxDdEVRVUZ6UlR0QlFVTjBSU3cyUkVGQmIwVTdRVUZEY0VVc2NVVkJRVFJGTzBGQlF6VkZMREpEUVVGM1F6dEJRVU40UXl4dFEwRkJaME03UVVGRmFFTXNaVUZCZFVJc1UwRkJVU3hoUVVGTE8wbEJkMEpzUXl4WlFVRlpMRTFCUVdsRExFVkJRVmtzVTBGQmVVSXNaVUZCVFR0UlFVTjBSaXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUkRoQ0xGZEJRVTBzUjBGQlRpeE5RVUZOTEVOQlFYbENPMUZCUkdoR0xGbEJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZIZEVJc1RVRkJUU3hWUVVGVkxFZEJRVWNzUTBGQlF5eEpRVUZKTEN0Q1FVRnRRaXhGUVVGRkxFVkJRVVVzU1VGQlNTeDVRa0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEhWQ1FVRmxMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJReTlHTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFdDeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc0swSkJRVzFDTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzUTBGQlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBsQlF6ZERMRU5CUVVNN1NVRTVRazBzVFVGQlRTeExRVUZMTEU5QlFVODdVVUZEZGtJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFFpeE5RVUZOTEVsQlFVa3NZMEZCWXl4RFFVRkRMR3RIUVVGclJ5eERRVUZETEVOQlFVTTdVVUZETDBnc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRFRTeE5RVUZOTEV0QlFVc3NUMEZCVHl4RFFVRkRMRWRCUVZrN1VVRkRjRU1zUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhUUVVGVExFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGFFUXNRMEZCUXp0UlFVTkVMRk5CUVZNc1EwRkJReXhSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRkRUU3hOUVVGTkxFTkJRVU1zYzBKQlFYTkNPMUZCUTJ4RExFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1RVRkJUU3hEUVVGRE8xRkJRMVFzUTBGQlF6dFJRVU5FTEZOQlFWTXNRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eHBRa0ZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlR0WlFVTjJSU3hUUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTXZRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZaVFN4TlFVRk5MRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeFhRVUZ0UWl4RFFVRkRPMUZCUTNSRUxFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNTVUZCU1N3clFrRkJiVUlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFJTeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNTVUZCU1N3clFrRkJiVUlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnlSeXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEUxQlFVMHNRMEZCUXl4TFFVRmhMRVZCUVVVc1YwRkJiVUlzUTBGQlF6dFJRVU12UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFbEJRVWtzZVVKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UlN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1NVRkJTU3g1UWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTJoSExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRU5CUVZNc1JVRkJSU3hKUVVGWkxFTkJRVU1zUlVGQlJTeFhRVUZ0UWl4RFFVRkRPMUZCUTNwRUxFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNTVUZCU1N4MVFrRkJaU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4RkxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTEhWQ1FVRmxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE4wWXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjJRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEVsQlFVazdVVUZEVkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOMFFpeERRVUZETzBsQlEwZ3NRMEZCUXp0RFFVTkdPMEZCYWtWRUxEaENRV2xGUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2NvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgSU5JVElBTF9OVU1fU0FNUExFUyA9IDE3O1xyXG5jb25zdCBORVdUT05fSVRFUkFUSU9OUyA9IDU7XHJcbmNvbnN0IF9jYWxjQ29uc3RhbnRzID0gKHAxLCBwMikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhOiAxIC0gMyAqIHAyICsgMyAqIHAxLFxyXG4gICAgICAgIGI6IDMgKiBwMiAtIDYgKiBwMSxcclxuICAgICAgICBjOiAzICogcDEsXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCBfZXZhbHVhdGVCZXppZXIgPSAodCwgYykgPT4gKChjLmEgKiB0ICsgYy5iKSAqIHQgKyBjLmMpICogdDtcclxuY29uc3QgX2V2YWx1YXRlQmV6aWVyRGVyaXZhdGl2ZSA9ICh0LCBjKSA9PiAoMyAqIGMuYSAqIHQgKyAyICogYy5iKSAqIHQgKyBjLmM7XHJcbmNvbnN0IF9jYWxjVEZyb21YID0gKHNhbXBsZXMsIHgsIGMpID0+IHtcclxuICAgIGNvbnN0IGlkeCA9IE1hdGgubWluKE1hdGgubWF4KHNhbXBsZXMuZmluZEluZGV4KHNhbXBsZSA9PiBzYW1wbGUgPiB4KSAtIDEsIDEpLCBzYW1wbGVzLmxlbmd0aCAtIDEpO1xyXG4gICAgY29uc3QgZCA9ICh4IC0gc2FtcGxlc1tpZHhdKSAvIChzYW1wbGVzW2lkeCArIDFdIC0gc2FtcGxlc1tpZHhdKTtcclxuICAgIGxldCBlc3RpbWF0ZSA9IChkICsgaWR4IC0gMSkgLyAoSU5JVElBTF9OVU1fU0FNUExFUyAtIDEpO1xyXG4gICAgZm9yIChsZXQgaXRlciA9IDA7IGl0ZXIgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpdGVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2xvcGUgPSBfZXZhbHVhdGVCZXppZXJEZXJpdmF0aXZlKGVzdGltYXRlLCBjKTtcclxuICAgICAgICBpZiAoc2xvcGUgPT09IDApIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVzdGltYXRlIC09IChfZXZhbHVhdGVCZXppZXIoZXN0aW1hdGUsIGMpIC0geCkgLyBzbG9wZTtcclxuICAgIH1cclxuICAgIHJldHVybiBlc3RpbWF0ZTtcclxufTtcclxuZXhwb3J0cy5jdWJpY0JlemllciA9IChwMXgsIHAxeSwgcDJ4LCBwMnkpID0+IHtcclxuICAgIGlmIChwMXggPT09IHAxeSAmJiBwMnggPT09IHAyeSkge1xyXG4gICAgICAgIHJldHVybiAoeCkgPT4geDtcclxuICAgIH1cclxuICAgIGNvbnN0IHhDb25zdGFudHMgPSBfY2FsY0NvbnN0YW50cyhwMXgsIHAyeCk7XHJcbiAgICBjb25zdCB5Q29uc3RhbnRzID0gX2NhbGNDb25zdGFudHMocDF5LCBwMnkpO1xyXG4gICAgY29uc3Qgc2FtcGxlcyA9IG5ldyBGbG9hdDMyQXJyYXkoSU5JVElBTF9OVU1fU0FNUExFUyk7XHJcbiAgICBmb3IgKGxldCBzYW1wbGUgPSAwOyBzYW1wbGUgPCBJTklUSUFMX05VTV9TQU1QTEVTOyArK3NhbXBsZSkge1xyXG4gICAgICAgIHNhbXBsZXNbc2FtcGxlXSA9IF9ldmFsdWF0ZUJlemllcihzYW1wbGUgLyAoSU5JVElBTF9OVU1fU0FNUExFUyAtIDEpLCB4Q29uc3RhbnRzKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoeCkgPT4gX2V2YWx1YXRlQmV6aWVyKF9jYWxjVEZyb21YKHNhbXBsZXMsIHgsIHhDb25zdGFudHMpLCB5Q29uc3RhbnRzKTtcclxufTtcclxuY29uc3QgZmxpcCA9IChlYXNlKSA9PiAodCkgPT4gMSAtIGVhc2UoMSAtIHQpO1xyXG5jb25zdCBpbm91dCA9IChlYXNlSW4sIGVhc2VPdXQpID0+IHtcclxuICAgIHJldHVybiAodCkgPT4gdCA8IDAuNSA/IGVhc2VJbih0ICogMikgLyAyIDogZWFzZU91dCgyICogdCAtIDEpIC8gMiArIDAuNTtcclxufTtcclxuY29uc3QgcyA9IDEuNzAxNTg7XHJcbmNvbnN0IHAgPSAwLjA3NTtcclxuZXhwb3J0cy5saW5lYXIgPSAodCkgPT4gdDtcclxuZXhwb3J0cy5zdGVwID0gTWF0aC5yb3VuZDtcclxuZXhwb3J0cy5xdWFkcmF0aWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCAyKTtcclxuZXhwb3J0cy5xdWFkcmF0aWNPdXQgPSBmbGlwKGV4cG9ydHMucXVhZHJhdGljSW4pO1xyXG5leHBvcnRzLnF1YWRyYXRpYyA9IGlub3V0KGV4cG9ydHMucXVhZHJhdGljSW4sIGV4cG9ydHMucXVhZHJhdGljT3V0KTtcclxuZXhwb3J0cy5jdWJpY0luID0gKHQpID0+IE1hdGgucG93KHQsIDMpO1xyXG5leHBvcnRzLmN1YmljT3V0ID0gZmxpcChleHBvcnRzLmN1YmljSW4pO1xyXG5leHBvcnRzLmN1YmljID0gaW5vdXQoZXhwb3J0cy5jdWJpY0luLCBleHBvcnRzLmN1YmljT3V0KTtcclxuZXhwb3J0cy5xdWFydGljSW4gPSAodCkgPT4gTWF0aC5wb3codCwgNCk7XHJcbmV4cG9ydHMucXVhcnRpY091dCA9IGZsaXAoZXhwb3J0cy5xdWFydGljSW4pO1xyXG5leHBvcnRzLnF1YXJ0aWMgPSBpbm91dChleHBvcnRzLnF1YXJ0aWNJbiwgZXhwb3J0cy5xdWFydGljT3V0KTtcclxuZXhwb3J0cy5xdWludGljSW4gPSAodCkgPT4gTWF0aC5wb3codCwgNSk7XHJcbmV4cG9ydHMucXVpbnRpY091dCA9IGZsaXAoZXhwb3J0cy5xdWludGljSW4pO1xyXG5leHBvcnRzLnF1aW50aWMgPSBpbm91dChleHBvcnRzLnF1aW50aWNJbiwgZXhwb3J0cy5xdWludGljT3V0KTtcclxuZXhwb3J0cy5zaW5lSW4gPSAodCkgPT4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7XHJcbmV4cG9ydHMuc2luZU91dCA9IGZsaXAoZXhwb3J0cy5zaW5lSW4pO1xyXG5leHBvcnRzLnNpbmUgPSBpbm91dChleHBvcnRzLnNpbmVJbiwgZXhwb3J0cy5zaW5lT3V0KTtcclxuZXhwb3J0cy5leHBvbmVudGlhbEluID0gKHQpID0+IE1hdGgucG93KDIsICgxMCAqICh0IC0gMSkpKTtcclxuZXhwb3J0cy5leHBvbmVudGlhbE91dCA9IGZsaXAoZXhwb3J0cy5leHBvbmVudGlhbEluKTtcclxuZXhwb3J0cy5leHBvbmVudGlhbCA9IGlub3V0KGV4cG9ydHMuZXhwb25lbnRpYWxJbiwgZXhwb3J0cy5leHBvbmVudGlhbE91dCk7XHJcbmV4cG9ydHMuY2lyY3VsYXJJbiA9ICh0KSA9PiAxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh0LCAyKSk7XHJcbmV4cG9ydHMuY2lyY3VsYXJPdXQgPSBmbGlwKGV4cG9ydHMuY2lyY3VsYXJJbik7XHJcbmV4cG9ydHMuY2lyY3VsYXIgPSBpbm91dChleHBvcnRzLmNpcmN1bGFySW4sIGV4cG9ydHMuY2lyY3VsYXJPdXQpO1xyXG5leHBvcnRzLmJhY2tJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCAyKSAqICgocyArIDEpICogdCAtIHMpO1xyXG5leHBvcnRzLmJhY2tPdXQgPSBmbGlwKGV4cG9ydHMuYmFja0luKTtcclxuZXhwb3J0cy5iYWNrID0gaW5vdXQoZXhwb3J0cy5iYWNrSW4sIGV4cG9ydHMuYmFja091dCk7XHJcbmV4cG9ydHMuZWxhc3RpY0luID0gKHQpID0+IE1hdGgucG93KDIsICgtMTAgKiB0KSkgKiBNYXRoLnNpbigodCAtIHApICogKDIgKiBNYXRoLlBJKSAvIDAuMykgKyAxO1xyXG5leHBvcnRzLmVsYXN0aWNPdXQgPSBmbGlwKGV4cG9ydHMuZWxhc3RpY0luKTtcclxuZXhwb3J0cy5lbGFzdGljID0gaW5vdXQoZXhwb3J0cy5lbGFzdGljSW4sIGV4cG9ydHMuZWxhc3RpY091dCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXRnphVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laV0Z6YVc1bkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1RVRkJUU3h0UWtGQmJVSXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRMMElzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGUk5VSXNUVUZCVFN4alFVRmpMRWRCUVVjc1EwRkJReXhGUVVGVkxFVkJRVVVzUlVGQlZTeEZRVUZoTEVWQlFVVTdTVUZETTBRc1RVRkJUU3hEUVVGRE8xRkJRMHdzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTzFGQlEzUkNMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZPMUZCUTJ4Q0xFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlR0TFFVTldMRU5CUVVNN1FVRkRTaXhEUVVGRExFTkJRVU03UVVGRlJpeE5RVUZOTEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGWkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRja1lzVFVGQlRTeDVRa0ZCZVVJc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZaTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRmFrY3NUVUZCVFN4WFFVRlhMRWRCUVVjc1EwRkJReXhQUVVGeFFpeEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlpMRVZCUVZVc1JVRkJSVHRKUVVNM1JTeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU51Unl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYWtVc1NVRkJTU3hSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSMEZCUnl4cFFrRkJhVUlzUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNCRUxFMUJRVTBzUzBGQlN5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1FpeExRVUZMTEVOQlFVTTdVVUZEVWl4RFFVRkRPMUZCUTBRc1VVRkJVU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZEZWtRc1EwRkJRenRKUVVORUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTTdRVUZEYkVJc1EwRkJReXhEUVVGRE8wRkJSVmNzVVVGQlFTeFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRlhMRVZCUVVVc1IwRkJWeXhGUVVGRkxFZEJRVmNzUlVGQlJTeEhRVUZYTEVWQlFYbENMRVZCUVVVN1NVRkRka2NzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlEwUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTTFReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRelZETEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1dVRkJXU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1NVRkRkRVFzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUjBGQlJ5eHRRa0ZCYlVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETzFGQlF6VkVMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eGxRVUZsTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRGNFWXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNaVUZCWlN4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRM3BHTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQk1rSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6ZEZMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zVFVGQk5rSXNSVUZCUlN4UFFVRTRRaXhGUVVGRkxFVkJRVVU3U1VGRE9VVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTnVSaXhEUVVGRExFTkJRVU03UVVGRlJpeE5RVUZOTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRiRUlzVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCU1Vnc1VVRkJRU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVVeFFpeFJRVUZCTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wRkJSV3hDTEZGQlFVRXNWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eFRRVUZCTEVOQlFVTXNSVUZCU1N4RFFVRkRMRU5CUVVFc1EwRkJRenRCUVVOd1F5eFJRVUZCTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc2JVSkJRVmNzUTBGQlF5eERRVUZETzBGQlEycERMRkZCUVVFc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF5eHRRa0ZCVnl4RlFVRkZMRzlDUVVGWkxFTkJRVU1zUTBGQlF6dEJRVVUzUXl4UlFVRkJMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU03UVVGRGFFTXNVVUZCUVN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRVThzUTBGQlF5eERRVUZETzBGQlEzcENMRkZCUVVFc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eGxRVUZQTEVWQlFVVXNaMEpCUVZFc1EwRkJReXhEUVVGRE8wRkJSV3BETEZGQlFVRXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eFRRVUZCTEVOQlFVTXNSVUZCU1N4RFFVRkRMRU5CUVVFc1EwRkJRenRCUVVOc1F5eFJRVUZCTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRVk1zUTBGQlF5eERRVUZETzBGQlF6ZENMRkZCUVVFc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eHBRa0ZCVXl4RlFVRkZMR3RDUVVGVkxFTkJRVU1zUTBGQlF6dEJRVVYyUXl4UlFVRkJMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU03UVVGRGJFTXNVVUZCUVN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExHbENRVUZUTEVOQlFVTXNRMEZCUXp0QlFVTTNRaXhSUVVGQkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNhVUpCUVZNc1JVRkJSU3hyUWtGQlZTeERRVUZETEVOQlFVTTdRVUZGZGtNc1VVRkJRU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzUkVMRkZCUVVFc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZOTEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhSUVVGQkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNZMEZCVFN4RlFVRkZMR1ZCUVU4c1EwRkJReXhEUVVGRE8wRkJSVGxDTEZGQlFVRXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eFRRVUZCTEVOQlFVTXNSVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNN1FVRkRia1FzVVVGQlFTeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMSEZDUVVGaExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRkJMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zY1VKQlFXRXNSVUZCUlN4elFrRkJZeXhEUVVGRExFTkJRVU03UVVGRmJrUXNVVUZCUVN4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZCTEVOQlFVTXNSVUZCU1N4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRE8wRkJRM1JFTEZGQlFVRXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhyUWtGQlZTeERRVUZETEVOQlFVTTdRVUZETDBJc1VVRkJRU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEd0Q1FVRlZMRVZCUVVVc2JVSkJRVmNzUTBGQlF5eERRVUZETzBGQlJURkRMRkZCUVVFc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4VFFVRkJMRU5CUVVNc1JVRkJTU3hEUVVGRExFTkJRVUVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnVSQ3hSUVVGQkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCVFN4RFFVRkRMRU5CUVVNN1FVRkRka0lzVVVGQlFTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMR05CUVUwc1JVRkJSU3hsUVVGUExFTkJRVU1zUTBGQlF6dEJRVVU1UWl4UlFVRkJMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU40Uml4UlFVRkJMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zYVVKQlFWTXNRMEZCUXl4RFFVRkRPMEZCUXpkQ0xGRkJRVUVzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4cFFrRkJVeXhGUVVGRkxHdENRVUZWTEVOQlFVTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FuaW1hdGlvbi9lYXNpbmcudHNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFJvdGF0ZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSwgeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmF9ICR7dGhpcy54fSAke3RoaXMueX1gO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pLCBwYXJzZUZsb2F0KHRva3NbMl0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybSgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3RhdGVfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLngsIHRoaXMueCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnksIHRoaXMueSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUm90YXRlX1RyYW5zZm9ybSA9IFJvdGF0ZV9UcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtOTBZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljbTkwWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2RVUkJRVFJETzBGQlF6VkRMRFJEUVVGNVF6dEJRVVY2UXl4elFrRkJPRUlzVTBGQlVTeHhRa0ZCVXp0SlFVTTNReXhaUVVGdFFpeERRVUZUTEVWQlFWTXNTVUZCV1N4RFFVRkRMRVZCUVZNc1NVRkJXU3hEUVVGRE8xRkJRM1JGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVSRExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWRTdVVUZCVXl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0SlFVVjRSU3hEUVVGRE8wbEJRMDBzU1VGQlNUdFJRVU5VTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGVrTXNRMEZCUXp0SlFVTk5MRk5CUVZNc1EwRkJReXhIUVVGclFqdFJRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2RDUVVGblFpeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wWXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtNc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCYzBJc1JVRkJSU3hEUVVGVE8xRkJRMnhFTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2RDUVVGblFpeERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVjc1EwRkJRenREUVVOR08wRkJiRUpFTERSRFFXdENReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3JvdGF0ZS50c1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcclxuY2xhc3MgVW5pZm9ybVNjYWxlX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzID0gMSkge1xyXG4gICAgICAgIHN1cGVyKFwic2NhbGVcIik7XHJcbiAgICAgICAgdGhpcy5zID0gcztcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucy50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnMsIHRoaXMucywgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVW5pZm9ybVNjYWxlX1RyYW5zZm9ybSA9IFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm07XHJcbmNsYXNzIFNjYWxlX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMSwgeSA9IHgpIHtcclxuICAgICAgICBzdXBlcihcInNjYWxlXCIpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY2FsZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLngsIHRoaXMueCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnksIHRoaXMueSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2NhbGVfVHJhbnNmb3JtID0gU2NhbGVfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMk5oYkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp6WTJGc1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxIVkVRVUUwUXp0QlFVTTFReXcwUTBGQmVVTTdRVUZGZWtNc05FSkJRVzlETEZOQlFWRXNjVUpCUVZNN1NVRkRia1FzV1VGQmJVSXNTVUZCV1N4RFFVRkRPMUZCUXpsQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVUkZMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3U1VGRmFFTXNRMEZCUXp0SlFVTk5MRWxCUVVrN1VVRkRWQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNelFpeERRVUZETzBsQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVd0Q08xRkJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxITkNRVUZ6UWl4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5DUVVGelFpeEZRVUZGTEVOQlFVTTdVVUZEZEVNc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCTkVJc1JVRkJSU3hEUVVGVE8xRkJRM2hFTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5DUVVGelFpeERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE9VUXNRMEZCUXp0RFFVTkdPMEZCYWtKRUxIZEVRV2xDUXp0QlFVVkVMSEZDUVVFMlFpeFRRVUZSTEhGQ1FVRlRPMGxCUXpWRExGbEJRVzFDTEVsQlFWa3NRMEZCUXl4RlFVRlRMRWxCUVZrc1EwRkJRenRSUVVOd1JDeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkVSU3hOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzFGQlFWTXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRKUVVWMFJDeERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJhMEk3VVVGRGFrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNMVFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNSQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNSQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUlN4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQmNVSXNSVUZCUlN4RFFVRlRPMUZCUTJwRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnBHTEVOQlFVTTdRMEZEUmp0QlFYUkNSQ3d3UTBGelFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL3NjYWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtXCIpO1xyXG5jbGFzcyBUcmFuc2xhdGVfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwidHJhbnNsYXRlXCIpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRlX1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRlX1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRlX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS54LCB0aGlzLngsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS55LCB0aGlzLnksIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyYW5zbGF0ZV9UcmFuc2Zvcm0gPSBUcmFuc2xhdGVfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5Oc1lYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWRISmhibk5zWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2RVUkJRVFJETzBGQlF6VkRMRFJEUVVGNVF6dEJRVVY2UXl4NVFrRkJhVU1zVTBGQlVTeHhRa0ZCVXp0SlFVTm9SQ3haUVVGdFFpeEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNN1VVRkRjRVFzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUkVZc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdFJRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1NVRkZkRVFzUTBGQlF6dEpRVU5OTEVsQlFVazdVVUZEVkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNdlFpeERRVUZETzBsQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVd0Q08xRkJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjBRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5GTEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUlVGQlJTeERRVUZETzFGQlEyNURMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFYbENMRVZCUVVVc1EwRkJVenRSUVVOeVJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNKR0xFTkJRVU03UTBGRFJqdEJRWFJDUkN4clJFRnpRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGUudHNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBGb3JlaWduT2JqZWN0IGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZm9yZWlnbk9iamVjdFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBhZGRIVE1MKGh0bWwpIHtcclxuICAgICAgICB0aGlzLl9ub2RlLmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKGh0bWwpIHtcclxuICAgICAgICB0aGlzLl9ub2RlLnJlbW92ZUNoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRm9yZWlnbk9iamVjdCA9IEZvcmVpZ25PYmplY3Q7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptOXlaV2xuYmkxdlltcGxZM1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sm1iM0psYVdkdUxXOWlhbVZqZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERoRFFVRnBSenRCUVZOcVJ5eHRRa0ZCTWtJc1UwRkJVU3dyUWtGQmVVVTdTVUZETVVjc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFXbEZPMUZCUXpkR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCWlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZEVFN4UFFVRlBMRU5CUVVNc1NVRkJhVUk3VVVGRE9VSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVOTkxFMUJRVTBzUTBGQlF5eEpRVUZwUWp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNdlFpeERRVUZETzBOQlEwWTdRVUZXUkN4elEwRlZReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZm9yZWlnbi1vYmplY3QudHNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBJbWFnZSBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImltYWdlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkltYWdlID0gSW1hZ2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXMWhaMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBiV0ZuWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVTFCTERoRFFVRXJSanRCUVhGQ0wwWXNWMEZCYlVJc1UwRkJVU3dyUWtGQmJVVTdTVUZETlVZc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFYbEVPMUZCUTNKR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMnBETEVOQlFVTTdRMEZEUmp0QlFVcEVMSE5DUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbWFnZS50c1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJjaXJjbGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ2lyY2xlID0gQ2lyY2xlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmx5WTJ4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTJseVkyeGxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlNVRXNiME5CUVRKRU8wRkJVek5FTEZsQlFXOUNMRk5CUVZFc2NVSkJRV3RFTzBsQlF6VkZMRmxCUVZrc1QwRkJaMElzUlVGQlJTeExRVUUyUlR0UlFVTjZSeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1F5eERRVUZETzBOQlEwWTdRVUZLUkN4M1FrRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZS50c1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgRWxsaXBzZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZWxsaXBzZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5FbGxpcHNlID0gRWxsaXBzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWld4c2FYQnpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltVnNiR2x3YzJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGWE0wUXNZVUZCY1VJc1UwRkJVU3h4UWtGQmIwUTdTVUZETDBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUaEZPMUZCUXpGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdRMEZEUmp0QlFVcEVMREJDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvZWxsaXBzZS50c1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgTGluZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibGluZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5MaW5lID0gTGluZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkdsdVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW14cGJtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGTFFTeHZRMEZCTWtRN1FVRlhNMFFzVlVGQmEwSXNVMEZCVVN4eFFrRkJPRU03U1VGRGRFVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVEpGTzFGQlEzWkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5Q1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2xpbmUudHNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIFBhdGggZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInBhdGhcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0aCA9IFBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBhQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluQmhkR2d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkpRU3h2UTBGQk1rUTdRVUZQTTBRc1ZVRkJhMElzVTBGQlVTeHhRa0ZCT0VNN1NVRkRkRVVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRKRk8xRkJRM1pITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaERMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUNRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wYXRoLnRzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBQb2x5Z29uIGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJwb2x5Z29uXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvbHlnb24gPSBQb2x5Z29uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlzZVdkdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5CdmJIbG5iMjR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkpRU3h2UTBGQk1rUTdRVUZOTTBRc1lVRkJjVUlzVTBGQlVTeHhRa0ZCYjBRN1NVRkRMMFVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRoRk8xRkJRekZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1EwRkRSanRCUVVwRUxEQkNRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5Z29uLnRzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBQb2x5bGluZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicG9seWxpbmVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9seWxpbmUgPSBQb2x5bGluZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5c2VXeHBibVV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiMng1YkdsdVpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVsQkxHOURRVUV5UkR0QlFVMHpSQ3hqUVVGelFpeFRRVUZSTEhGQ1FVRnpSRHRKUVVOc1JpeFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJLMFU3VVVGRE0wY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEY0VNc1EwRkJRenREUVVOR08wRkJTa1FzTkVKQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlsaW5lLnRzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBSZWN0IGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJyZWN0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJlY3QgPSBSZWN0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZqZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkpsWTNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZMUVN4dlEwRkJNa1E3UVVGbE0wUXNWVUZCYTBJc1UwRkJVU3h4UWtGQk9FTTdTVUZEZEVVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUSkZPMUZCUTNaSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdRMEZEUmp0QlFVcEVMRzlDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcmVjdC50c1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZGltZW5zaW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vYXR0cmlidXRlcy9kaW1lbnNpb25cIik7XHJcbmNvbnN0IHRleHRfY29udGVudF8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvdGV4dC1jb250ZW50XCIpO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgVGV4dFNwYW4gZXh0ZW5kcyByZW5kZXJhYmxlXzEuQWJzdHJhY3RSZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJ0c3BhblwiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBnZXQgY29tcHV0ZWRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGUuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UZXh0U3BhbiA9IFRleHRTcGFuO1xyXG5jbGFzcyBUZXh0IGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwidGV4dFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBhZGRTcGFuKGNvbnRlbnQsIGxpbmVIZWlnaHQsIHVwZGF0ZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gbmV3IFRleHRTcGFuKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ0ZXh0Q29udGVudFwiLCBjb250ZW50KTtcclxuICAgICAgICBpZiAobGluZUhlaWdodCkge1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInhcIiwgcGFyc2VGbG9hdCh0aGlzLmdldEF0dHJpYnV0ZShcInhcIikgfHwgXCIwXCIpKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaW5lSGVpZ2h0ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImR5XCIsIG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24obGluZUhlaWdodCwgXCJlbVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImR5XCIsIGxpbmVIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkKHNwYW4pO1xyXG4gICAgICAgIHJldHVybiBzcGFuO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbXB1dGVkTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dCA9IFRleHQ7XHJcbmNsYXNzIE11bHRpbGluZVRleHQgZXh0ZW5kcyBUZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRleHQsIHdpZHRoLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGF0dHJzKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gbmV3IFRleHQoY29udGV4dCk7XHJcbiAgICAgICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIDApO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBuZXcgVGV4dFNwYW4oY29udGV4dCk7XHJcbiAgICAgICAgdGVtcC5hZGQoc3Bhbik7XHJcbiAgICAgICAgaWYgKGF0dHJzKSB7XHJcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlcyhhdHRycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwYWNlV2lkdGggPSB0ZW1wLmNvbXB1dGVkTGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW1wiXCJdO1xyXG4gICAgICAgIHRleHQuc3BsaXQoXCIgXCIpLmZvckVhY2goKHdvcmQsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMaW5lID0gKGxpbmUubGVuZ3RoID09PSAwKSA/IHdvcmQgOiBgJHtsaW5lfSAke3dvcmR9YDtcclxuICAgICAgICAgICAgY29uc3QgbGluZUNvbnRlbnQgPSBuZXcgdGV4dF9jb250ZW50XzEuVGV4dENvbnRlbnQobmV3TGluZSk7XHJcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGV4dENvbnRlbnRcIiwgbGluZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICBpZiAoc3Bhbi5jb21wdXRlZExlbmd0aCA+IHdpZHRoICYmIGxpbmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGluZXMucHVzaCh3b3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdID0gbmV3TGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3BhbihuZXcgdGV4dF9jb250ZW50XzEuVGV4dENvbnRlbnQobGluZSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NdWx0aWxpbmVUZXh0ID0gTXVsdGlsaW5lVGV4dDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5SbGVIUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTd3dSRUZCZFVRN1FVRkZka1FzWjBWQlFUUkVPMEZCUlRWRUxEaERRVUVyUmp0QlFUaENMMFlzWTBGQmMwSXNVMEZCVVN3clFrRkJORVE3U1VGRGVFWXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVFJFTzFGQlEzaEdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRFJDeEpRVUZYTEdOQlFXTTdVVUZEZGtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dEpRVU0xUXl4RFFVRkRPME5CUTBZN1FVRlFSQ3cwUWtGUFF6dEJRVmxFTEZWQlFXdENMRk5CUVZFc0swSkJRWFZFTzBsQlF5OUZMRmxCUVZrc1QwRkJaMElzUlVGQlJTeExRVUYzUkR0UlFVTndSaXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlEwMHNUMEZCVHl4RFFVRkRMRTlCUVc5Q0xFVkJRVVVzVlVGQk5FSXNSVUZCUlN4VFFVRnJRaXhKUVVGSk8xRkJRM1pHTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTjRReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEdGQlFXRXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMllzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExGVkJRVlVzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxIRkNRVUZUTEVOQlFVOHNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrVXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFsQlEzUkRMRU5CUVVNN1VVRkRTQ3hEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVObUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUTBRc1NVRkJWeXhqUVVGak8xRkJRM1pDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNN1NVRkROVU1zUTBGQlF6dERRVU5HTzBGQmNrSkVMRzlDUVhGQ1F6dEJRVVZFTEcxQ1FVRXlRaXhUUVVGUkxFbEJRVWs3U1VGRGNrTXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFbEJRVmtzUlVGQlJTeExRVUZoTEVWQlFVVXNTMEZCTmtVN1VVRkRkRWtzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOMFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU12UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9ReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOdVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMllzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOV0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROVUlzUTBGQlF6dFJRVU5FTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRGRrTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5zUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRMMFFzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N3d1FrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6ZERMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zWVVGQllTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpsRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1MwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJrUXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU51UWl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTNCRExFTkJRVU03VVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYmtJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU53UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzTUVKQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UXl4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwWTdRVUUzUWtRc2MwTkJOa0pESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3RleHQudHNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFRleHRDb250ZW50IHtcclxuICAgIHN0YXRpYyBlc2NhcGVIdG1sKGh0bWwpIHtcclxuICAgICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcihzdHIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHIgPSBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jYiA9IHN0cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRleHRDb250ZW50KGNzcyB8fCBcIlwiKTtcclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gVGV4dENvbnRlbnQuZXNjYXBlSHRtbCh0aGlzLl9zdHIgfHwgdGhpcy5fY2IoKSk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyBmcm9tIDogdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRleHRDb250ZW50ID0gVGV4dENvbnRlbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkQzFqYjI1MFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWRHVjRkQzFqYjI1MFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlIwRTdTVUZEVlN4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVms3VVVGRGNFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU5xUml4RFFVRkRPMGxCUzBRc1dVRkJXU3hIUVVFMFFqdFJRVU4wUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTJ4Q0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlEycENMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJLMElzVDBGQmJVSXNSVUZCUlN4SlFVRlBPMUZCUTI1RkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dEpRVU42UXl4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVFclFpeFBRVUZ0UWl4RlFVRkZMRWxCUVU4c1JVRkJSU3hSUVVGelFqdFJRVU16Uml4UFFVRlBMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTjRSU3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFXbENMRVZCUVVVc1EwRkJVenRSUVVNM1F5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRMMElzUTBGQlF6dERRVU5HTzBGQk0wSkVMR3REUVRKQ1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RleHQtY29udGVudC50c1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIEJsZW5kX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUJsZW5kXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJsZW5kX1ByaW1pdGl2ZSA9IEJsZW5kX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW14bGJtUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKaWJHVnVaQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMREJFUVVGelJEdEJRVkYwUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCYjBRN1NVRkRka1lzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCYVVNN1VVRkRNMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2JsZW5kLnRzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgQ29sb3JNYXRyaXhfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlQ29sb3JNYXRyaXhcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29sb3JNYXRyaXhfUHJpbWl0aXZlID0gQ29sb3JNYXRyaXhfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdGJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjlzYjNJdGJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzTUVSQlFYTkVPMEZCVTNSRUxESkNRVUZ0UXl4VFFVRlJMR3REUVVGblJUdEpRVU42Unl4WlFVRlpMRTFCUVdNc1JVRkJSU3hMUVVGMVF6dFJRVU5xUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRV1VzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wTkJRMFk3UVVGS1JDeHpSRUZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbG9yLW1hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZSA9IENvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTFhSeVlXNXpabVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl0Y0c5dVpXNTBMWFJ5WVc1elptVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNNRVJCUVhORU8wRkJUWFJFTEdsRFFVRjVReXhUUVVGUkxHdERRVUUwUlR0SlFVTXpTQ3haUVVGWkxFMUJRV01zUlVGQlJTeExRVUUyUXp0UlFVTjJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEhGQ1FVRnhRaXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6bERMRU5CUVVNN1EwRkRSanRCUVVwRUxHdEZRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvbmVudC10cmFuc2Zlci50c1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbXBvc2l0ZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVDb21wb3NpdGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcG9zaXRlX1ByaW1pdGl2ZSA9IENvbXBvc2l0ZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl6YVhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dGNHOXphWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzTUVSQlFYTkVPMEZCV1hSRUxIbENRVUZwUXl4VFFVRlJMR3REUVVFMFJEdEpRVU51Unl4WlFVRlpMRTFCUVdNc1JVRkJSU3hMUVVGeFF6dFJRVU12UkN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxHRkJRV0VzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjBReXhEUVVGRE8wTkJRMFk3UVVGS1JDeHJSRUZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvc2l0ZS50c1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZSA9IENvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWRtOXNkbVV0YldGMGNtbDRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVkbTlzZG1VdGJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTMEVzTUVSQlFYTkVPMEZCWjBKMFJDdzRRa0ZCYzBNc1UwRkJVU3hyUTBGQmMwVTdTVUZEYkVnc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQk1FTTdVVUZEY0VVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPME5CUTBZN1FVRktSQ3cwUkVGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb252b2x2ZS1tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBEaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlRGlzcGxhY2VtZW50TWFwXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRpc3BsYWNlbWVudE1hcF9QcmltaXRpdmUgPSBEaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x6Y0d4aFkyVnRaVzUwTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1ScGMzQnNZV05sYldWdWRDMXRZWEF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3d3UkVGQmMwUTdRVUZWZEVRc0swSkJRWFZETEZOQlFWRXNhME5CUVhkRk8wbEJRM0pJTEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVRKRE8xRkJRM0pGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dERRVU5HTzBGQlNrUXNPRVJCU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwLnRzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgRmxvb2RfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlRmxvb2RcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmxvb2RfUHJpbWl0aXZlID0gRmxvb2RfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labXh2YjJRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUptYkc5dlpDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQkxEQkVRVUZ6UkR0QlFVOTBSQ3h4UWtGQk5rSXNVMEZCVVN4clEwRkJiMFE3U1VGRGRrWXNXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJhVU03VVVGRE0wUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYkVNc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZmxvb2QudHNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBHYXVzc2lhbkJsdXJfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlR2F1c3NpYW5CbHVyXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdhdXNzaWFuQmx1cl9QcmltaXRpdmUgPSBHYXVzc2lhbkJsdXJfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laMkYxYzNOcFlXNHRZbXgxY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbWRoZFhOemFXRnVMV0pzZFhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN3d1JFRkJjMFE3UVVGUmRFUXNORUpCUVc5RExGTkJRVkVzYTBOQlFXdEZPMGxCUXpWSExGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFYZERPMUZCUTJ4RkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZWtNc1EwRkJRenREUVVOR08wRkJTa1FzZDBSQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZ2F1c3NpYW4tYmx1ci50c1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIEltYWdlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUltYWdlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkltYWdlX1ByaW1pdGl2ZSA9IEltYWdlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVcxaFoyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJXRm5aUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMREJFUVVGelJEdEJRVTkwUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCYjBRN1NVRkRka1lzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCYVVNN1VVRkRNMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2ltYWdlLnRzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgRGlmZnVzZUxpZ2h0aW5nIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRpZmZ1c2VMaWdodGluZyA9IERpZmZ1c2VMaWdodGluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsbVpuVnpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltUnBabVoxYzJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVN3MlJFRkJlVVE3UVVGVmVrUXNjVUpCUVRaQ0xGTkJRVkVzYTBOQlFYZEZPMGxCUXpOSExGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFUSkRPMUZCUTNKRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvZGlmZnVzZS50c1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIERpc3RhbnRMaWdodCBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZURpc3RhbnRMaWdodFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EaXN0YW50TGlnaHQgPSBEaXN0YW50TGlnaHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHbHpkR0Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVJwYzNSaGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTeG5SVUZCTkVRN1FVRlJOVVFzYTBKQlFUQkNMRk5CUVZFc2EwTkJRV3RGTzBsQlEyeEhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWGRETzFGQlEyeEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVrTXNRMEZCUXp0RFFVTkdPMEZCU2tRc2IwTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9kaXN0YW50LnRzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgUG9pbnRMaWdodCBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVBvaW50TGlnaHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9pbnRMaWdodCA9IFBvaW50TGlnaHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXBiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiMmx1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVWRCTEdkRlFVRTBSRHRCUVZVMVJDeG5Ra0ZCZDBJc1UwRkJVU3hyUTBGQk9FUTdTVUZETlVZc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmMwTTdVVUZEYUVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dERRVU5HTzBGQlNrUXNaME5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnQudHNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBTcG90TGlnaHQgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVTcG90TGlnaHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3BvdExpZ2h0ID0gU3BvdExpZ2h0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0J2ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbk53YjNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZIUVN4blJVRkJORVE3UVVGblFqVkVMR1ZCUVhWQ0xGTkJRVkVzYTBOQlFUUkVPMGxCUTNwR0xGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFYRkRPMUZCUXk5RUxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNZVUZCWVN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1JETEVOQlFVTTdRMEZEUmp0QlFVcEVMRGhDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2Uvc3BvdC50c1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFNwZWN1bGFyTGlnaHRpbmcgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwZWN1bGFyTGlnaHRpbmcgPSBTcGVjdWxhckxpZ2h0aW5nO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0JsWTNWc1lYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKemNHVmpkV3hoY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERaRVFVRjVSRHRCUVZkNlJDeHpRa0ZCT0VJc1UwRkJVU3hyUTBGQk1FVTdTVUZET1Vjc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQk5FTTdVVUZEZEVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeHZRa0ZCYjBJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0zUXl4RFFVRkRPME5CUTBZN1FVRktSQ3cwUTBGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9zcGVjdWxhci50c1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIE1lcmdlTm9kZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVNZXJnZU5vZGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWVyZ2VOb2RlX1ByaW1pdGl2ZSA9IE1lcmdlTm9kZV9QcmltaXRpdmU7XHJcbmNsYXNzIE1lcmdlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlTWVyZ2VcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NZXJnZV9QcmltaXRpdmUgPSBNZXJnZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVnlaMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnRaWEpuWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERCRVFVRnpSRHRCUVUxMFJDeDVRa0ZCYVVNc1UwRkJVU3hyUTBGQk5FUTdTVUZEYmtjc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmNVTTdVVUZETDBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeGhRVUZoTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNhMFJCU1VNN1FVRkZSQ3h4UWtGQk5rSXNVMEZCVVN4clEwRkJkME03U1VGRE0wVXNXVUZCV1N4TlFVRmpPMUZCUTNoQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRNMElzUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9tZXJnZS50c1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIE1vcnBob2xvZ3lfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlTW9ycGhvbG9neVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Nb3JwaG9sb2d5X1ByaW1pdGl2ZSA9IE1vcnBob2xvZ3lfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liVzl5Y0dodmJHOW5lUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltMXZjbkJvYjJ4dloza3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTd3dSRUZCYzBRN1FVRlJkRVFzTUVKQlFXdERMRk5CUVZFc2EwTkJRVGhFTzBsQlEzUkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWE5ETzFGQlEyaEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5RVFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbW9ycGhvbG9neS50c1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIE9mZnNldF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVPZmZzZXRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2Zmc2V0X1ByaW1pdGl2ZSA9IE9mZnNldF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIyWm1jMlYwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liMlptYzJWMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUjBFc01FUkJRWE5FTzBGQlUzUkVMSE5DUVVFNFFpeFRRVUZSTEd0RFFVRnpSRHRKUVVNeFJpeFpRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRnJRenRSUVVNMVJDeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPME5CUTBZN1FVRktSQ3cwUTBGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9vZmZzZXQudHNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBUaWxlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVRpbGVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGlsZV9QcmltaXRpdmUgPSBUaWxlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdsc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5ScGJHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTd3dSRUZCYzBRN1FVRk5kRVFzYjBKQlFUUkNMRk5CUVZFc2EwTkJRV3RFTzBsQlEzQkdMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRV2RETzFGQlF6RkVMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03UTBGRFJqdEJRVXBFTEhkRFFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdGlsZS50c1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGNoYW5uZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBgZmVGdW5jJHtjaGFubmVsfWAsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlID0gVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5tWlhJdFpuVnVZM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUowY21GdWMyWmxjaTFtZFc1amRHbHZiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMREJFUVVGelJEdEJRVEJDZEVRc1owTkJRWGRETEZOQlFWRXNhME5CUVRKSU8wbEJRM3BMTEZsQlFWa3NUVUZCWXl4RlFVRkZMRTlCUVRoQ0xFVkJRVVVzUzBGQk5FTTdVVUZEZEVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEU5QlFVOHNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRek5ETEVOQlFVTTdRMEZEUmp0QlFVcEVMR2RGUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy90cmFuc2Zlci1mdW5jdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFR1cmJ1bGVuY2VfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlVHVyYnVsZW5jZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UdXJidWxlbmNlX1ByaW1pdGl2ZSA9IFR1cmJ1bGVuY2VfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSFZ5WW5Wc1pXNWpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluUjFjbUoxYkdWdVkyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTd3dSRUZCYzBRN1FVRlZkRVFzTUVKQlFXdERMRk5CUVZFc2EwTkJRVGhFTzBsQlEzUkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWE5ETzFGQlEyaEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWTBGQll5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5RVFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHVyYnVsZW5jZS50c1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2F0dHJpYnV0ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnRleHRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kb2N1bWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2VsZW1lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ldmVudHNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9pbnRlcnBvbGF0aW9uXCIpKTtcclxuY29uc3QgQW5pbWF0aW9uID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uXCIpO1xyXG5leHBvcnRzLkFuaW1hdGlvbiA9IEFuaW1hdGlvbjtcclxuY29uc3QgQXR0cmlidXRlcyA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZXNcIik7XHJcbmV4cG9ydHMuQXR0cmlidXRlcyA9IEF0dHJpYnV0ZXM7XHJcbmNvbnN0IEVsZW1lbnRzID0gcmVxdWlyZShcIi4vZWxlbWVudHNcIik7XHJcbmV4cG9ydHMuRWxlbWVudHMgPSBFbGVtZW50cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEdsRFFVRTBRanRCUVVNMVFpeHBRMEZCTkVJN1FVRkROVUlzSzBKQlFUQkNPMEZCUXpGQ0xHZERRVUV5UWp0QlFVTXpRaXdyUWtGQk1FSTdRVUZETVVJc09FSkJRWGxDTzBGQlEzcENMSEZEUVVGblF6dEJRVVZvUXl4NVEwRkJlVU03UVVGTGRrTXNPRUpCUVZNN1FVRktXQ3d5UTBGQk1rTTdRVUZMZWtNc1owTkJRVlU3UVVGS1dpeDFRMEZCZFVNN1FVRkxja01zTkVKQlFWRWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYWmxiblJ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laWFpsYm5SekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZXZlbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZWFzaW5nXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyZXJcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl4blEwRkJNa0lpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FuaW1hdGlvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ib3hcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb2xvci1tYXRyaXhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb2xvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RpbWVuc2lvblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL251bWJlci1vcHRpb25hbC1udW1iZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wYXRoLXNlZ21lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2ludFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3ByZXNlcnZlLWFzcGVjdC1yYXRpb1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RleHQtY29udGVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RyYW5zZm9ybVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dyYXBwZXJzXCIpKTtcclxuY29uc3QgVHJhbnNmb3JtcyA9IHJlcXVpcmUoXCIuL3RyYW5zZm9ybXNcIik7XHJcbmV4cG9ydHMuVHJhbnNmb3JtcyA9IFRyYW5zZm9ybXM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEUkNRVUYxUWp0QlFVTjJRaXd5UWtGQmMwSTdRVUZEZEVJc2IwTkJRU3RDTzBGQlF5OUNMRFpDUVVGM1FqdEJRVU40UWl4cFEwRkJORUk3UVVGRE5VSXNPRUpCUVhsQ08wRkJRM3BDTERoRFFVRjVRenRCUVVONlF5eHZRMEZCSzBJN1FVRkRMMElzTmtKQlFYZENPMEZCUTNoQ0xEWkRRVUYzUXp0QlFVTjRReXh2UTBGQkswSTdRVUZETDBJc2FVTkJRVFJDTzBGQlF6VkNMR2REUVVFeVFqdEJRVVV6UWl3eVEwRkJNa003UVVGRGJFTXNaME5CUVZVaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxudmFyIENvbG9yTWF0cml4O1xyXG4oZnVuY3Rpb24gKENvbG9yTWF0cml4KSB7XHJcbiAgICBjbGFzcyBSYXcge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtbMSwgMCwgMCwgMCwgMF0sIFswLCAxLCAwLCAwLCAwXSwgWzAsIDAsIDEsIDAsIDBdLCBbMCwgMCwgMCwgMSwgMF0sIFswLCAwLCAwLCAwLCAwXV0pIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJtYXRyaXhcIjtcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSB0aGlzLmFyci5jb25jYXQoLi4udmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmF3KFtjc3Muc3BsaXQoXCIgXCIpLm1hcChwYXJzZUZsb2F0KV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSYXcoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJhdyhbdGhpcy5hcnIubWFwKCh2YWwsIGkpID0+IGludGVycG9sYXRpb25fMS5fbGVycChmcm9tW2ldLCB2YWwsIHQpKV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4LlJhdyA9IFJhdztcclxuICAgIGNsYXNzIFNhdHVyYXRlIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcInNhdHVyYXRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTYXR1cmF0ZShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTYXR1cmF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNhdHVyYXRlKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnZhbHVlLCB0aGlzLnZhbHVlLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29sb3JNYXRyaXguU2F0dXJhdGUgPSBTYXR1cmF0ZTtcclxuICAgIGNsYXNzIEh1ZVJvdGF0ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodmFsdWUgPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJodWVSb3RhdGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEh1ZVJvdGF0ZShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIdWVSb3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBIdWVSb3RhdGUoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20udmFsdWUsIHRoaXMudmFsdWUsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb2xvck1hdHJpeC5IdWVSb3RhdGUgPSBIdWVSb3RhdGU7XHJcbiAgICBjbGFzcyBMdW1pbmFuY2VUb0FscGhhQ29sb3JNYXRyaXgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcImx1bWluYW5jZVRvQWxwaGFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4Lkx1bWluYW5jZVRvQWxwaGFDb2xvck1hdHJpeCA9IEx1bWluYW5jZVRvQWxwaGFDb2xvck1hdHJpeDtcclxufSkoQ29sb3JNYXRyaXggPSBleHBvcnRzLkNvbG9yTWF0cml4IHx8IChleHBvcnRzLkNvbG9yTWF0cml4ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5c2IzSXRiV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5c2IzSXRiV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc2IwUkJRWGxETzBGQlVYcERMRWxCUVdsQ0xGZEJRVmNzUTBFMlJqTkNPMEZCTjBaRUxGZEJRV2xDTEZkQlFWYzdTVUZGTVVJN1VVRkhSU3haUVVGWkxGTkJRWEZDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGR0wwY3NVMEZCU1N4SFFVRmhMRkZCUVZFc1EwRkJRenRaUVVNeFFpeFJRVUZITEVkQlFXRXNSVUZCUlN4RFFVRkRPMWxCUlhoQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjRReXhEUVVGRE8xRkJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMWxCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia1FzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVFpeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdXVUZETVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEVMRU5CUVVNN1VVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJZenRaUVVNeFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETTBJc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGJFUXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFTkJRVU03VVVGRFNDeERRVUZETzFGQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVZrc1JVRkJSU3hEUVVGVE8xbEJRM2hETEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1MwRkRSanRKUVRGQ1dTeGxRVUZITEUxQk1FSm1MRU5CUVVFN1NVRkZSRHRSUVVWRkxGbEJRVzFDTEZGQlFXZENMRU5CUVVNN1dVRkJha0lzVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCV1R0WlFVUTNRaXhUUVVGSkxFZEJRV1VzVlVGQlZTeERRVUZETzFGQlEwVXNRMEZCUXp0UlFVTnFReXhSUVVGUk8xbEJRMklzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0UlFVTk5MRXRCUVVzc1EwRkJReXhIUVVGclFqdFpRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVU40UWl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrN1dVRkRNVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFTkJRVU03VVVGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmJVSTdXVUZETDBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU01UXl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZqTEVWQlFVVXNRMEZCVXp0WlFVTXhReXhOUVVGTkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UkN4RFFVRkRPMHRCUTBZN1NVRXhRbGtzYjBKQlFWRXNWMEV3UW5CQ0xFTkJRVUU3U1VGRlJEdFJRVVZGTEZsQlFXMUNMRkZCUVdkQ0xFTkJRVU03V1VGQmFrSXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJXVHRaUVVRM1FpeFRRVUZKTEVkQlFXZENMRmRCUVZjc1EwRkJRenRSUVVOQkxFTkJRVU03VVVGRGFrTXNVVUZCVVR0WlFVTmlMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXk5Q0xFTkJRVU03VVVGRFRTeExRVUZMTEVOQlFVTXNSMEZCYTBJN1dVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkRla0lzUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFsQlF6RkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUkN4RFFVRkRPMUZCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVc5Q08xbEJRMmhGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXpRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUkN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRPVU1zUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJaU3hGUVVGRkxFTkJRVk03V1VGRE0wTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla1FzUTBGQlF6dExRVU5HTzBsQk1VSlpMSEZDUVVGVExGbEJNRUp5UWl4RFFVRkJPMGxCUlVRN1VVRkJRVHRaUVVOVExGTkJRVWtzUjBGQmRVSXNhMEpCUVd0Q0xFTkJRVU03VVVGSmRrUXNRMEZCUXp0UlFVaFJMRkZCUVZFN1dVRkRZaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlExb3NRMEZCUXp0TFFVTkdPMGxCVEZrc2RVTkJRVEpDTERoQ1FVdDJReXhEUVVGQk8wRkJSVWdzUTBGQlF5eEZRVGRHWjBJc1YwRkJWeXhIUVVGWUxHMUNRVUZYTEV0QlFWZ3NiVUpCUVZjc1VVRTJSak5DSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvY29sb3ItbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY2xhc3MgQ29sb3JJbXBsIHtcclxufVxyXG5jbGFzcyBSR0IgZXh0ZW5kcyBDb2xvckltcGwge1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgYSA9IDEpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuciA9IDA7XHJcbiAgICAgICAgdGhpcy5nID0gMDtcclxuICAgICAgICB0aGlzLmIgPSAwO1xyXG4gICAgICAgIHRoaXMuYSA9IDE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJnYmFNYXRjaCA9IHgubWF0Y2goL15yZ2JhXFxzKj9cXChcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/LFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj8sXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqPyxcXHMqPygwfDBcXC5cXGQqfDF8MS4wKilcXHMqP1xcKSQvaSk7XHJcbiAgICAgICAgICAgIGlmIChyZ2JhTWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuciA9IHBhcnNlSW50KHJnYmFNYXRjaFsxXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nID0gcGFyc2VJbnQocmdiYU1hdGNoWzJdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmIgPSBwYXJzZUludChyZ2JhTWF0Y2hbM10sIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYSA9IHBhcnNlRmxvYXQocmdiYU1hdGNoWzRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZ2JNYXRjaCA9IHgubWF0Y2goL15yZ2JcXHMqP1xcKFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj8sXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqPyxcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/XFwpJC9pKTtcclxuICAgICAgICAgICAgaWYgKHJnYk1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnIgPSBwYXJzZUludChyZ2JNYXRjaFsxXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nID0gcGFyc2VJbnQocmdiTWF0Y2hbMl0sIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYiA9IHBhcnNlSW50KHJnYk1hdGNoWzNdLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuciA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMuZyA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMuYiA9IHo7XHJcbiAgICAgICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7TWF0aC5yb3VuZCh0aGlzLnIpfSwgJHtNYXRoLnJvdW5kKHRoaXMuZyl9LCAke01hdGgucm91bmQodGhpcy5iKX0sICR7dGhpcy5hfSlgO1xyXG4gICAgfVxyXG4gICAgdG9IU0woKSB7XHJcbiAgICAgICAgY29uc3QgciA9IHRoaXMuciAvIDI1NTtcclxuICAgICAgICBjb25zdCBnID0gdGhpcy5nIC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmIgLyAyNTU7XHJcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XHJcbiAgICAgICAgY29uc3QgYXZnID0gKG1heCArIG1pbikgLyAyO1xyXG4gICAgICAgIGNvbnN0IGQgPSBtYXggLSBtaW47XHJcbiAgICAgICAgbGV0IGg7XHJcbiAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgY29uc3QgbCA9IGF2ZztcclxuICAgICAgICBpZiAoZCA9PT0gMCkge1xyXG4gICAgICAgICAgICBoID0gMDtcclxuICAgICAgICAgICAgcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzID0gZCAvICgxIC0gTWF0aC5hYnMoMiAqIGF2ZyAtIDEpKTtcclxuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcjpcclxuICAgICAgICAgICAgICAgICAgICBoID0gKChnIC0gYikgLyBkKSAlIDY7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGc6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9ICgoYiAtIHIpIC8gZCkgKyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBiOlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAoKHIgLSBnKSAvIGQpICsgNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaCAqPSA2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIU0woaCwgcywgbCk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0LCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgbW9kZVByZWZpeCA9IG1vZGUuc3Vic3RyKDAsIDMpO1xyXG4gICAgICAgIGlmIChtb2RlUHJlZml4ID09PSBcInJnYlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgSFNMKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gZnJvbS50b1JHQigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgUkdCKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJHQihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5yLCB0aGlzLnIsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5nLCB0aGlzLmcsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5iLCB0aGlzLmIsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb2RlUHJlZml4ID09PSBcImhzbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSFNMKCkuaW50ZXJwb2xhdGUoZnJvbSwgdCwgbW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEhTTCBleHRlbmRzIENvbG9ySW1wbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCBhID0gMSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5oID0gMDtcclxuICAgICAgICB0aGlzLnMgPSAwO1xyXG4gICAgICAgIHRoaXMubCA9IDA7XHJcbiAgICAgICAgdGhpcy5hID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgaHNsYU1hdGNoID0geC5tYXRjaCgvXmhzbGFcXHMqP1xcKFxccyo/KDAwMHwwP1xcZHsxLDJ9fFsxLTJdXFxkXFxkfDNbMC01XVxcZHwzNjApXFxzKj8sXFxzKj8oMFxcLj8wKnwxMDBcXC4/MCp8XFxkezEsMn18XFxkezEsMn1cXC5cXGQrKVxcJVxccyo/LFxccyo/KDBcXC4/MCp8MTAwXFwuPzAqfFxcZHsxLDJ9fFxcZHsxLDJ9XFwuXFxkKylcXCVcXHMqPyxcXHMqPygwfDBcXC5cXGQqfDF8MS4wKilcXHMqP1xcKSQvaSk7XHJcbiAgICAgICAgICAgIGlmIChoc2xhTWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaCA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucyA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzJdKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubCA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzNdKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYSA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBoc2xNYXRjaCA9IHgubWF0Y2goL15oc2xcXHMqP1xcKFxccyo/KDAwMHwwP1xcZHsxLDJ9fFsxLTJdXFxkXFxkfDNbMC01XVxcZHwzNjApXFxzKj8sXFxzKj8oMFxcLj8wKnwxMDBcXC4/MCp8XFxkezEsMn18XFxkezEsMn1cXC5cXGQrKVxcJVxccyo/LFxccyo/KDBcXC4/MCp8MTAwXFwuPzAqfFxcZHsxLDJ9fFxcZHsxLDJ9XFwuXFxkKylcXCVcXHMqP1xcKSQvaSk7XHJcbiAgICAgICAgICAgIGlmIChoc2xNYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oID0gcGFyc2VGbG9hdChoc2xNYXRjaFsxXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnMgPSBwYXJzZUZsb2F0KGhzbE1hdGNoWzJdKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubCA9IHBhcnNlRmxvYXQoaHNsTWF0Y2hbM10pIC8gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnMgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLmwgPSB6O1xyXG4gICAgICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaCAlIDM2MH0sICR7dGhpcy5zICogMTAwfSUsICR7dGhpcy5sICogMTAwfSUsICR7dGhpcy5hfSlgO1xyXG4gICAgfVxyXG4gICAgdG9SR0IoKSB7XHJcbiAgICAgICAgbGV0IHIgPSAwO1xyXG4gICAgICAgIGxldCBnID0gMDtcclxuICAgICAgICBsZXQgYiA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMucyAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gKDEgLSBNYXRoLmFicygyICogdGhpcy5sIC0gMSkpICogdGhpcy5zO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKHRoaXMuaCAvIDYwKSAlIDIgLSAxKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmggPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgciA9IGM7XHJcbiAgICAgICAgICAgICAgICBnID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmggPCAxMjApIHtcclxuICAgICAgICAgICAgICAgIHIgPSB4O1xyXG4gICAgICAgICAgICAgICAgZyA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oIDwgMTgwKSB7XHJcbiAgICAgICAgICAgICAgICBnID0gYztcclxuICAgICAgICAgICAgICAgIGIgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaCA8IDI0MCkge1xyXG4gICAgICAgICAgICAgICAgZyA9IHg7XHJcbiAgICAgICAgICAgICAgICBiID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmggPCAxODApIHtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICAgICAgciA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oIDwgMjQwKSB7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgICAgIHIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSB0aGlzLmwgLSAwLjUgKiBjO1xyXG4gICAgICAgICAgICByICs9IG07XHJcbiAgICAgICAgICAgIGcgKz0gbTtcclxuICAgICAgICAgICAgYiArPSBtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJHQihyICogMjU1LCBnICogMjU1LCBiICogMjU1KTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQsIG1vZGUpIHtcclxuICAgICAgICBjb25zdCBtb2RlUHJlZml4ID0gbW9kZS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgaWYgKG1vZGVQcmVmaXggPT09IFwiaHNsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBSR0IpIHtcclxuICAgICAgICAgICAgICAgIGZyb20gPSBmcm9tLnRvSFNMKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIU0wpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoMSA9IGZyb20uaDtcclxuICAgICAgICAgICAgICAgIGxldCBoMiA9IHRoaXMuaDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBoMSAtIGgyO1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gMTgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiaHNsLXNob3J0ZXN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImhzbC1sb25nZXN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gMCAmJiBtb2RlID09PSBcImhzbC1jbG9ja3dpc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGgyICs9IDM2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCAmJiBtb2RlID09PSBcImhzbC1jb3VudGVyY2xvY2t3aXNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBoMSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEhTTChpbnRlcnBvbGF0aW9uXzEuX2xlcnAoaDEsIGgyLCB0KSAlIDM2MCwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ucywgdGhpcy5zLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubCwgdGhpcy5sLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20uYSwgdGhpcy5hLCB0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobW9kZVByZWZpeCA9PT0gXCJyZ2JcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JHQigpLmludGVycG9sYXRlKGZyb20sIHQsIG1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5jbGFzcyBDb2xvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQsIHggPSAwLCB5ID0gMCwgeiA9IDAsIGEgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gQ29sb3IuREVGQVVMVF9NT0RFO1xyXG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicmdiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQih4LCB5LCB6LCBhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybWF0ID09PSBcImhzbFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1wbCA9IG5ldyBIU0woeCwgeSwgeiwgYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZihcInJnYlwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQihmb3JtYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm1hdC5pbmRleE9mKFwiaHNsXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltcGwgPSBuZXcgSFNMKGZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybWF0LmluZGV4T2YoXCIjXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgYiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbSA9IGZvcm1hdC5tYXRjaCgvXiMoWzAtOWEtZkEtRl17M30pJC9pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHBhcnNlSW50KG1bMV0uY2hhckF0KDApLCAxNikgKiAweDExO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChtWzFdLmNoYXJBdCgxKSwgMTYpICogMHgxMTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQobVsxXS5jaGFyQXQoMiksIDE2KSAqIDB4MTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtID0gZm9ybWF0Lm1hdGNoKC9eIyhbMC05YS1mQS1GXXs2fSkkL2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChtWzFdLnN1YnN0cigwLCAyKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gcGFyc2VJbnQobVsxXS5zdWJzdHIoMiwgMiksIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IHBhcnNlSW50KG1bMV0uc3Vic3RyKDQsIDIpLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQihyLCBnLCBiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltcGwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihjc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICBjb25zdCBjID0gbmV3IENvbG9yKCk7XHJcbiAgICAgICAgYy5pbXBsID0gdGhpcy5pbXBsLmludGVycG9sYXRlKGZyb20uaW1wbCwgdCwgdGhpcy5tb2RlKTtcclxuICAgICAgICBjLm1vZGUgPSB0aGlzLm1vZGU7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbn1cclxuQ29sb3IuREVGQVVMVF9NT0RFID0gXCJyZ2JcIjtcclxuZXhwb3J0cy5Db2xvciA9IENvbG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjJ4dmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxHOUVRVUY1UXp0QlFVbDZRenREUVVkRE8wRkJSVVFzVTBGQlZTeFRRVUZSTEZOQlFWTTdTVUZSZWtJc1dVRkJXU3hKUVVGeFFpeERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRMRVZCUVVVc1NVRkJXU3hEUVVGRExFVkJRVVVzU1VGQldTeERRVUZETzFGQlF6ZEZMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJVa1lzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRFpDeE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVTF3UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc2RVeEJRWFZNTEVOQlFVTXNRMEZCUXp0WlFVTnVUaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRrSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU53UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEzQkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNRMEZCUXp0WlFVTkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNORXBCUVRSS0xFTkJRVU1zUTBGQlF6dFpRVU4yVEN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRkRUlzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMjVETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTllMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExZ3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFlpeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRkZCUVZFN1VVRkRZaXhOUVVGTkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRhRWNzUTBGQlF6dEpRVU5OTEV0QlFVczdVVUZEVml4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTjJRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOMlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU4yUWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlV5eERRVUZETzFGQlEyUXNTVUZCU1N4RFFVRlRMRU5CUVVNN1VVRkRaQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmFMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFRpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOYUxFdEJRVXNzUTBGQlF6dHZRa0ZEU2l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YjBKQlEzUkNMRXRCUVVzc1EwRkJRenRuUWtGRFVpeExRVUZMTEVOQlFVTTdiMEpCUTBvc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTjBRaXhMUVVGTExFTkJRVU03WjBKQlExSXNTMEZCU3l4RFFVRkRPMjlDUVVOS0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzUzBGQlN5eERRVUZETzJkQ1FVTlNPMjlDUVVORkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTA0c1MwRkJTeXhEUVVGRE8xbEJRMVlzUTBGQlF6dFpRVU5FTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRWaXhEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZsTEVWQlFVVXNRMEZCVXl4RlFVRkZMRWxCUVhWQ08xRkJRM0JGTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFVkJRVVVzUTBGQlF5eERRVUZETEZWQlFWVXNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTNSQ0xFTkJRVU03V1VGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVrZ3NRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNWVUZCVlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5xUkN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdRMEZEUmp0QlFVVkVMRk5CUVZVc1UwRkJVU3hUUVVGVE8wbEJVWHBDTEZsQlFWa3NTVUZCY1VJc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRSUVVNM1JTeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFWSkdMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRFpDeE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVU5rTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRk5jRUlzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETERKTVFVRXlUQ3hEUVVGRExFTkJRVU03V1VGRGRrNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnNReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdaMEpCUTNoRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0blFrRkRlRU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1EwRkJRenRaUVVORUxFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1owdEJRV2RMTEVOQlFVTXNRMEZCUXp0WlFVTXpUQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGRrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8xbEJRM3BETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEV0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5pTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOb1JpeERRVUZETzBsQlEwMHNTMEZCU3p0UlFVTldMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5XTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTldMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1JDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOb1FpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVWl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMDRzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTk9MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFVpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFRpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNoQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTA0c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5TTEVOQlFVTTdXVUZEUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTlFMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFVDeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTFRc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRelZETEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJaU3hGUVVGRkxFTkJRVk1zUlVGQlJTeEpRVUYxUWp0UlFVTndSU3hOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhWUVVGVkxFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFSXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU4wUWl4RFFVRkRPMWxCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hDTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaENMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRM0pDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGVrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUXpWQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU5pTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dDNRa0ZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN05FSkJRM0JDTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dHZRa0ZEU0N4RFFVRkRPMmRDUVVOSUxFTkJRVU03WjBKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlF6TkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPelJDUVVOaUxFVkJRVVVzU1VGQlNTeEhRVUZITEVOQlFVTTdkMEpCUTFvc1EwRkJRenQzUWtGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdORUpCUTNCQ0xFVkJRVVVzU1VGQlNTeEhRVUZITEVOQlFVTTdkMEpCUTFvc1EwRkJRenR2UWtGRFNDeERRVUZETzJkQ1FVTklMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRla01zUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXp0blFrRkRXaXhEUVVGRE8yZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEhOQ1FVRnpRaXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEYUVRc1JVRkJSU3hKUVVGSkxFZEJRVWNzUTBGQlF6dG5Ra0ZEV2l4RFFVRkRPMmRDUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4eFFrRkJTeXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRrZ3NRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNWVUZCVlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5xUkN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdRMEZEUmp0QlFVVkVPMGxCVVVVc1dVRkJXU3hOUVVFclFpeEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0UlFVNW9SeXhUUVVGSkxFZEJRWE5DTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNN1VVRlBiRVFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFTXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZET1VJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZET1VJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM0pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFZpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMVlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNRMEZCUXp0blFrRkROME1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyWXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRlRU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZEZUVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRuUWtGRE1VTXNRMEZCUXp0blFrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEVGl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhEUVVGRE8yOUNRVU42UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRaaXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8zZENRVU53UXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPM2RDUVVOd1F5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTjBReXhEUVVGRE8yZENRVU5JTEVOQlFVTTdaMEpCUTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OUNMRU5CUVVNN1VVRkRTQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZGQlFWRTdVVUZEWWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU40UWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOeVFpeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdVVUZETVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJaMEk3VVVGRE5VUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBJc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGJFUXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZET1VNc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCVnl4RlFVRkZMRU5CUVZNN1VVRkRka01zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOMFFpeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRia0lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTllMRU5CUVVNN08wRkJMMFJoTEd0Q1FVRlpMRWRCUVhOQ0xFdEJRVXNzUTBGQlF6dEJRVVI0UkN4elFrRnBSVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvY29sb3IudHNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jbGFzcyBNYXRyaXgge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWVzKSB7XHJcbiAgICAgICAgdGhpcy5hcnIgPSBbXTtcclxuICAgICAgICB0aGlzLmFyciA9IHRoaXMuYXJyLmNvbmNhdCguLi52YWx1ZXMpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeChbY3NzLnNwbGl0KFwiIFwiKS5tYXAocGFyc2VGbG9hdCldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4KFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW3RoaXMuYXJyLm1hcCgodmFsLCBpKSA9PiBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbVtpXSwgdmFsLCB0KSldKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hdHJpeCA9IE1hdHJpeDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGMGNtbDRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzYjBSQlFYbERPMEZCUlhwRE8wbEJSVVVzV1VGQldTeE5RVUZyUWp0UlFVUjJRaXhSUVVGSExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlJYaENMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCUTAwc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUkN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFSXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRV2xDTzFGQlF6ZEVMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVZrc1JVRkJSU3hEUVVGVE8xRkJRM2hETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaEZMRU5CUVVNN1EwRkRSanRCUVRWQ1JDeDNRa0UwUWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL21hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNsYXNzIE51bWJlck9wdGlvbmFsTnVtYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG4sIG8pIHtcclxuICAgICAgICB0aGlzLm4gPSBuO1xyXG4gICAgICAgIHRoaXMubyA9IG87XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMubyAhPT0gdW5kZWZpbmVkKSA/IGAke3RoaXMubn0sJHt0aGlzLm99YCA6IHRoaXMubi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKHBhcnNlRmxvYXQodG9rc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcigwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgaWYgKGZyb20ubyAhPT0gdW5kZWZpbmVkICYmIHRoaXMubyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubywgdGhpcy5vLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZyb20ubyA9PT0gdW5kZWZpbmVkICYmIHRoaXMubyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKDAsIHRoaXMubywgdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmcm9tLm8gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm4sIHRoaXMubiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm8sIDAsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVyT3B0aW9uYWxOdW1iZXIgPSBOdW1iZXJPcHRpb25hbE51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlMVzl3ZEdsdmJtRnNMVzUxYldKbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW01MWJXSmxjaTF2Y0hScGIyNWhiQzF1ZFcxaVpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTeHZSRUZCZVVNN1FVRkZla003U1VGRFJTeFpRVUZ0UWl4RFFVRlRMRVZCUVZNc1EwRkJWVHRSUVVFMVFpeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlJPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQlV6dEpRVUZITEVOQlFVTTdTVUZETlVNc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETlVVc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtRc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxHOUNRVUZ2UWl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSU3hEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNrTXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRU3RDTzFGQlF6TkZMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVRCQ0xFVkJRVVVzUTBGQlV6dFJRVU4wUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtRc1RVRkJUU3hEUVVGRExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUml4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4dlFrRkJiMElzUTBGQlF5eHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtZc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVFUXNUVUZCVFN4RFFVRkRMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwR0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxHOUNRVUZ2UWl4RFFVRkRMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVRc1EwRkJRenRKUVVOSUxFTkJRVU03UTBGRFJqdEJRWFJEUkN4dlJFRnpRME1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50c1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9wb2ludFwiKTtcclxuY2xhc3MgUGF0aFNlZ21lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29tbWFuZCkge1xyXG4gICAgICAgIHRoaXMuY29tbWFuZCA9IGNvbW1hbmQ7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJncyhjc3Muc3Vic3RyKDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRJbnN0YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBhdGhTZWdtZW50ID0gUGF0aFNlZ21lbnQ7XHJcbihmdW5jdGlvbiAoUGF0aFNlZ21lbnQpIHtcclxuICAgIGNsYXNzIFNpbmdsZUxlbmd0aCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBsID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5sID0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5sLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKGJhc2VfMS5fTGVuZ3RoUGFyc2UoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZShiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ubCwgdGhpcy5sLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuU2luZ2xlTGVuZ3RoID0gU2luZ2xlTGVuZ3RoO1xyXG4gICAgY2xhc3MgU2luZ2xlUG9pbnQgZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29tbWFuZCwgcCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY29tbWFuZH0gJHt0aGlzLnAudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wLnBhcnNlKGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wLmludGVycG9sYXRlKGZyb20ucCwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LlNpbmdsZVBvaW50ID0gU2luZ2xlUG9pbnQ7XHJcbiAgICBjbGFzcyBEb3VibGVQb2ludCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBwMSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwMiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAxID0gcDE7XHJcbiAgICAgICAgICAgIHRoaXMucDIgPSBwMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5wMS50b1N0cmluZygpfSAke3RoaXMucDIudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucDEucGFyc2UodG9rc1swXSksIHRoaXMucDIucGFyc2UodG9rc1sxXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wMS5pbnRlcnBvbGF0ZShmcm9tLnAxLCB0KSwgdGhpcy5wMi5pbnRlcnBvbGF0ZShmcm9tLnAyLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuRG91YmxlUG9pbnQgPSBEb3VibGVQb2ludDtcclxuICAgIGNsYXNzIFRyaXBsZVBvaW50IGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIHAxID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHAyID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHAzID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHRoaXMucDEgPSBwMTtcclxuICAgICAgICAgICAgdGhpcy5wMiA9IHAyO1xyXG4gICAgICAgICAgICB0aGlzLnAzID0gcDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jb21tYW5kfSAke3RoaXMucDEudG9TdHJpbmcoKX0gJHt0aGlzLnAyLnRvU3RyaW5nKCl9ICR7dGhpcy5wMy50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wMS5wYXJzZSh0b2tzWzBdKSwgdGhpcy5wMi5wYXJzZSh0b2tzWzFdKSwgdGhpcy5wMy5wYXJzZSh0b2tzWzJdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnAxLmludGVycG9sYXRlKGZyb20ucDEsIHQpLCB0aGlzLnAyLmludGVycG9sYXRlKGZyb20ucDIsIHQpLCB0aGlzLnAzLmludGVycG9sYXRlKGZyb20ucDMsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5UcmlwbGVQb2ludCA9IFRyaXBsZVBvaW50O1xyXG4gICAgY2xhc3MgTW92ZVRvQWJzIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJNXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvQWJzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTW92ZVRvQWJzID0gTW92ZVRvQWJzO1xyXG4gICAgY2xhc3MgTW92ZVRvUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJtXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvUmVsKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTW92ZVRvUmVsID0gTW92ZVRvUmVsO1xyXG4gICAgY2xhc3MgQ2xvc2VQYXRoIGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIlpcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJaXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ2xvc2VQYXRoID0gQ2xvc2VQYXRoO1xyXG4gICAgY2xhc3MgTGluZVRvQWJzIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJMXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvQWJzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvQWJzID0gTGluZVRvQWJzO1xyXG4gICAgY2xhc3MgTGluZVRvUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJsXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvUmVsKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvUmVsID0gTGluZVRvUmVsO1xyXG4gICAgY2xhc3MgTGluZVRvSG9yaXpvbnRhbEFicyBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaCA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJIXCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9Ib3Jpem9udGFsQWJzKGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvSG9yaXpvbnRhbEFicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb0hvcml6b250YWxBYnMgPSBMaW5lVG9Ib3Jpem9udGFsQWJzO1xyXG4gICAgY2xhc3MgTGluZVRvSG9yaXpvbnRhbFJlbCBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaCA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJoXCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9Ib3Jpem9udGFsUmVsKGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvSG9yaXpvbnRhbFJlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb0hvcml6b250YWxSZWwgPSBMaW5lVG9Ib3Jpem9udGFsUmVsO1xyXG4gICAgY2xhc3MgTGluZVRvVmVydGljYWxBYnMgZXh0ZW5kcyBTaW5nbGVMZW5ndGgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHYgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiVlwiLCB2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZSh2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvVmVydGljYWxBYnModik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9WZXJ0aWNhbEFicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb1ZlcnRpY2FsQWJzID0gTGluZVRvVmVydGljYWxBYnM7XHJcbiAgICBjbGFzcyBMaW5lVG9WZXJ0aWNhbFJlbCBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodiA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJ2XCIsIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9WZXJ0aWNhbEFicyh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1ZlcnRpY2FsQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvVmVydGljYWxSZWwgPSBMaW5lVG9WZXJ0aWNhbFJlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9DdWJpY0FicyBleHRlbmRzIFRyaXBsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYyA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBkLCBlLCBmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMxID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGMgOiBuZXcgcG9pbnRfMS5Qb2ludChlLCBmKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJDXCIsIGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzEsIGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljQWJzKGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNBYnMgPSBDdXJ2ZVRvQ3ViaWNBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNSZWwgZXh0ZW5kcyBUcmlwbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgZCwgZSwgZikge1xyXG4gICAgICAgICAgICBjb25zdCBjMSA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYyBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBjIDogbmV3IHBvaW50XzEuUG9pbnQoZSwgZik7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiY1wiLCBjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1JlbChjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb0N1YmljUmVsID0gQ3VydmVUb0N1YmljUmVsO1xyXG4gICAgY2xhc3MgQ3VydmVUb0N1YmljU21vb3RoQWJzIGV4dGVuZHMgRG91YmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJTXCIsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aEFicyhjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMgPSBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNTbW9vdGhSZWwgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihcInNcIiwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljU21vb3RoUmVsKGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aFJlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9DdWJpY1Ntb290aFJlbCA9IEN1cnZlVG9DdWJpY1Ntb290aFJlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9RdWFkcmF0aWNBYnMgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzEgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihcIlFcIiwgYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY0FicyhjMSwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY0FicyA9IEN1cnZlVG9RdWFkcmF0aWNBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljUmVsIGV4dGVuZHMgRG91YmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMxID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJxXCIsIGMxLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMSwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNSZWwoYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9RdWFkcmF0aWNSZWwgPSBDdXJ2ZVRvUXVhZHJhdGljUmVsO1xyXG4gICAgY2xhc3MgQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicyBleHRlbmRzIFNpbmdsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHkgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiVFwiLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnMocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicyA9IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJ0XCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbChwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsID0gQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbDtcclxuICAgIGNsYXNzIEFyY1RvIGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIHIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgcCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB4QXhpc1JvdGF0ZSA9IDAsIGxhcmdlQXJjID0gZmFsc2UsIHN3ZWVwQ2xvY2t3aXNlID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5yID0gcjtcclxuICAgICAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICAgICAgdGhpcy54QXhpc1JvdGF0ZSA9IHhBeGlzUm90YXRlO1xyXG4gICAgICAgICAgICB0aGlzLmxhcmdlQXJjID0gbGFyZ2VBcmM7XHJcbiAgICAgICAgICAgIHRoaXMuc3dlZXBDbG9ja3dpc2UgPSBzd2VlcENsb2Nrd2lzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnIudG9TdHJpbmcoKX0gJHt0aGlzLnhBeGlzUm90YXRlfSAke3RoaXMubGFyZ2VBcmMgPyAxIDogMH0gJHt0aGlzLnN3ZWVwQ2xvY2t3aXNlID8gMSA6IDB9ICR7dGhpcy5wLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnIucGFyc2UodG9rc1swXSksIHRoaXMucC5wYXJzZSh0b2tzWzRdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgdG9rc1syXSA9PT0gXCIxXCIsIHRva3NbM10gPT09IFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMuci5pbnRlcnBvbGF0ZShmcm9tLnIsIHQpLCB0aGlzLnAuaW50ZXJwb2xhdGUoZnJvbS5wLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ueEF4aXNSb3RhdGUsIHRoaXMueEF4aXNSb3RhdGUsIHQpLCAodCA8IDAuNSkgPyBmcm9tLmxhcmdlQXJjIDogdGhpcy5sYXJnZUFyYywgKHQgPCAwLjUpID8gZnJvbS5zd2VlcENsb2Nrd2lzZSA6IHRoaXMuc3dlZXBDbG9ja3dpc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkFyY1RvID0gQXJjVG87XHJcbiAgICBjbGFzcyBBcmNUb0FicyBleHRlbmRzIEFyY1RvIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCwgZSwgZiwgZykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgbGV0IHhBeGlzUm90YXRlID0gMDtcclxuICAgICAgICAgICAgbGV0IGxhcmdlQXJjID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBzd2VlcENsb2Nrd2lzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCAmJiBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBnICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKFwiQVwiLCByLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShyLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9BYnMociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcmNUb0FicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkFyY1RvQWJzID0gQXJjVG9BYnM7XHJcbiAgICBjbGFzcyBBcmNUb1JlbCBleHRlbmRzIEFyY1RvIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCwgZSwgZiwgZykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgbGV0IHhBeGlzUm90YXRlID0gMDtcclxuICAgICAgICAgICAgbGV0IGxhcmdlQXJjID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBzd2VlcENsb2Nrd2lzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCAmJiBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBnICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKFwiYVwiLCByLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShyLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9SZWwociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcmNUb1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkFyY1RvUmVsID0gQXJjVG9SZWw7XHJcbn0pKFBhdGhTZWdtZW50ID0gZXhwb3J0cy5QYXRoU2VnbWVudCB8fCAoZXhwb3J0cy5QYXRoU2VnbWVudCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBhQzF6WldkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNHRjBhQzF6WldkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNiMFJCUVhsRE8wRkJRM3BETEdsRFFVRnJSVHRCUVVOc1JTeHRRMEZCWjBNN1FVRkZhRU03U1VGRFJTeFpRVUZ0UWl4UFFVRTBRanRSUVVFMVFpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRnhRanRKUVVGSExFTkJRVU03U1VGRk5VTXNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRE8xRkJRMmhETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1R0UlFVTXhReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hSUVVGelFqdFJRVU5zUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5zUkN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhEUVVGRE8wbEJRMGdzUTBGQlF6dERRVWxHTzBGQmRrSkVMR3REUVhWQ1F6dEJRVVZFTEZkQlFXbENMRmRCUVZjN1NVRkpNVUlzYTBKQlFXMURMRk5CUVZFc1YwRkJWenRSUVVOd1JDeFpRVUZaTEU5QlFUaENMRVZCUVZNc1NVRkJXU3hEUVVGRE8xbEJRemxFTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVSclF5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMUZCUldoRkxFTkJRVU03VVVGRFRTeFJRVUZSTzFsQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGFFUXNRMEZCUXp0UlFVTk5MRk5CUVZNc1EwRkJReXhIUVVGWE8xbEJRekZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExHMUNRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVd0Q0xFVkJRVVVzUTBGQlV6dFpRVU01UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eDVRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UlN4RFFVRkRPMHRCUjBZN1NVRm1jVUlzZDBKQlFWa3NaVUZsYWtNc1EwRkJRVHRKUVVORUxHbENRVUZyUXl4VFFVRlJMRmRCUVZjN1VVRkRia1FzV1VGQldTeFBRVUV3UXl4RlFVRlRMRWxCUVZjc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJSaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdXVUZFT0VNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQmVVSTdVVUZGZWtZc1EwRkJRenRSUVVOTkxGRkJRVkU3V1VGRFlpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVOb1JDeERRVUZETzFGQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVZjN1dVRkRNVUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVdsQ0xFVkJRVVVzUTBGQlV6dFpRVU0zUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzUTBGQlF6dExRVWRHTzBsQlpuRkNMSFZDUVVGWExHTkJaV2hETEVOQlFVRTdTVUZEUkN4cFFrRkJhME1zVTBGQlVTeFhRVUZYTzFGQlEyNUVMRmxCUVZrc1QwRkJPRUlzUlVGQlV5eExRVUZaTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlV5eExRVUZaTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFFZ3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJSR3RETEU5QlFVVXNSMEZCUml4RlFVRkZMRU5CUVhsQ08xbEJRVk1zVDBGQlJTeEhRVUZHTEVWQlFVVXNRMEZCZVVJN1VVRkZiRWdzUTBGQlF6dFJRVU5OTEZGQlFWRTdXVUZEWWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJRM1pGTEVOQlFVTTdVVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJWenRaUVVNeFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VVXNRMEZCUXp0UlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGcFFpeEZRVUZGTEVOQlFWTTdXVUZETjBNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VZc1EwRkJRenRMUVVkR08wbEJhRUp4UWl4MVFrRkJWeXhqUVdkQ2FFTXNRMEZCUVR0SlFVTkVMR2xDUVVGclF5eFRRVUZSTEZkQlFWYzdVVUZEYmtRc1dVRkJXU3hQUVVGclFpeEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU40U1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRWMwSXNUMEZCUlN4SFFVRkdMRVZCUVVVc1EwRkJlVUk3V1VGQlV5eFBRVUZGTEVkQlFVWXNSVUZCUlN4RFFVRjVRanRaUVVGVExFOUJRVVVzUjBGQlJpeEZRVUZGTEVOQlFYbENPMUZCUlRGSkxFTkJRVU03VVVGRFRTeFJRVUZSTzFsQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUXpkR0xFTkJRVU03VVVGRFRTeFRRVUZUTEVOQlFVTXNSMEZCVnp0WlFVTXhRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFY3NRMEZCUXp0UlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGcFFpeEZRVUZGTEVOQlFWTTdXVUZETjBNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlNDeERRVUZETzB0QlIwWTdTVUZvUW5GQ0xIVkNRVUZYTEdOQlowSm9ReXhEUVVGQk8wbEJSVVFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUjNoRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UWtGQlV5eFpRVmx5UWl4RFFVRkJPMGxCUTBRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlIzaERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrUXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUk8xbEJRek5DTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UWl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzB0QlEwWTdTVUZhV1N4eFFrRkJVeXhaUVZseVFpeERRVUZCTzBsQlJVUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJRM2hETzFsQlEwVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVU5OTEZGQlFWRTdXVUZEWWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRlhPMWxCUXpGQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzcENMRU5CUVVNN1VVRkRUU3hYUVVGWExFTkJRVU1zU1VGQlpTeEZRVUZGTEVOQlFWTTdXVUZETTBNc1RVRkJUU3hEUVVGRExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEZWtJc1EwRkJRenRMUVVOR08wbEJhRUpaTEhGQ1FVRlRMRmxCWjBKeVFpeERRVUZCTzBsQlJVUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJSM2hETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJPMWxCUXpOQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFFpeERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRa0ZCVXl4WlFWbHlRaXhEUVVGQk8wbEJRMFFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUjNoRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UWtGQlV5eFpRVmx5UWl4RFFVRkJPMGxCUlVRc2VVSkJRV2xETEZOQlFWRXNXVUZCV1R0UlFVTnVSQ3haUVVGWkxFbEJRVmtzUTBGQlF6dFpRVU4yUWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaENMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUTBGQlV6dFpRVU0xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1F5eERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRMjVETEVOQlFVTTdTMEZEUmp0SlFWWlpMQ3RDUVVGdFFpeHpRa0ZWTDBJc1EwRkJRVHRKUVVORUxIbENRVUZwUXl4VFFVRlJMRmxCUVZrN1VVRkRia1FzV1VGQldTeEpRVUZaTEVOQlFVTTdXVUZEZGtJc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVOQlFWTTdXVUZETlVJc1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dFJRVU51UXl4RFFVRkRPMHRCUTBZN1NVRldXU3dyUWtGQmJVSXNjMEpCVlM5Q0xFTkJRVUU3U1VGRlJDeDFRa0ZCSzBJc1UwRkJVU3haUVVGWk8xRkJRMnBFTEZsQlFWa3NTVUZCV1N4RFFVRkRPMWxCUTNaQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRUlzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeERMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEYWtNc1EwRkJRenRMUVVOR08wbEJWbGtzTmtKQlFXbENMRzlDUVZVM1FpeERRVUZCTzBsQlEwUXNkVUpCUVN0Q0xGTkJRVkVzV1VGQldUdFJRVU5xUkN4WlFVRlpMRWxCUVZrc1EwRkJRenRaUVVOMlFpeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1EwRkJVenRaUVVNMVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNReXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTJwRExFTkJRVU03UzBGRFJqdEpRVlpaTERaQ1FVRnBRaXh2UWtGVk4wSXNRMEZCUVR0SlFVVkVMSEZDUVVFMlFpeFRRVUZSTEZkQlFWYzdVVUZIT1VNc1dVRkJXU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlU3V1VGRE0wb3NUVUZCVFN4RlFVRkZMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRja1VzVFVGQlRTeEZRVUZGTEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZETDBVc1RVRkJUU3hEUVVGRExFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGRE9VVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoQ0xFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNSVUZCVXl4RlFVRkZMRVZCUVZNc1JVRkJSU3hEUVVGUk8xbEJRMnBFTEUxQlFVMHNRMEZCUXl4SlFVRkpMR1ZCUVdVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUlVGQlJTeERRVUZETzFGQlF5OUNMRU5CUVVNN1MwRkRSanRKUVdaWkxESkNRVUZsTEd0Q1FXVXpRaXhEUVVGQk8wbEJRMFFzY1VKQlFUWkNMRk5CUVZFc1YwRkJWenRSUVVjNVF5eFpRVUZaTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlR0WlFVTXpTaXhOUVVGTkxFVkJRVVVzUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU55UlN4TlFVRk5MRVZCUVVVc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNdlJTeE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFSXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhGUVVGVExFVkJRVVVzUlVGQlV5eEZRVUZGTEVOQlFWRTdXVUZEYWtRc1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dExRVU5HTzBsQlpsa3NNa0pCUVdVc2EwSkJaVE5DTEVOQlFVRTdTVUZGUkN3eVFrRkJiVU1zVTBGQlVTeFhRVUZYTzFGQlIzQkVMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlR0WlFVTXhSeXhOUVVGTkxFVkJRVVVzUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU12UlN4TlFVRk5MRU5CUVVNc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53UWl4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFVkJRVk1zUlVGQlJTeERRVUZSTzFsQlEzUkRMRTFCUVUwc1EwRkJReXhKUVVGSkxIRkNRVUZ4UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4eFFrRkJjVUlzUlVGQlJTeERRVUZETzFGQlEzSkRMRU5CUVVNN1MwRkRSanRKUVdSWkxHbERRVUZ4UWl4M1FrRmpha01zUTBGQlFUdEpRVU5FTERKQ1FVRnRReXhUUVVGUkxGZEJRVmM3VVVGSGNFUXNXVUZCV1N4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTzFsQlF6RkhMRTFCUVUwc1JVRkJSU3hIUVVGVkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCVnl4RlFVRkZMRU5CUVZjc1EwRkJReXhEUVVGRE8xbEJReTlGTEUxQlFVMHNRMEZCUXl4SFFVRlZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlZ5eEZRVUZGTEVOQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpsRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JDTEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1JVRkJVeXhGUVVGRkxFTkJRVkU3V1VGRGRFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZETEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03VVVGRGNrTXNRMEZCUXp0TFFVTkdPMGxCWkZrc2FVTkJRWEZDTEhkQ1FXTnFReXhEUVVGQk8wbEJSVVFzZVVKQlFXbERMRk5CUVZFc1YwRkJWenRSUVVkc1JDeFpRVUZaTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlU3V1VGRE1VY3NUVUZCVFN4RlFVRkZMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRMMFVzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZET1VVc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RlFVRlRMRVZCUVVVc1EwRkJVVHRaUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVOdVF5eERRVUZETzB0QlEwWTdTVUZrV1N3clFrRkJiVUlzYzBKQll5OUNMRU5CUVVFN1NVRkRSQ3g1UWtGQmFVTXNVMEZCVVN4WFFVRlhPMUZCUjJ4RUxGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWVHRaUVVNeFJ5eE5RVUZOTEVWQlFVVXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTXZSU3hOUVVGTkxFTkJRVU1zUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU01UlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndRaXhEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVWQlFWTXNSVUZCUlN4RFFVRlJPMWxCUTNSRExFMUJRVTBzUTBGQlF5eEpRVUZKTEcxQ1FVRnRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRReXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTI1RExFTkJRVU03UzBGRFJqdEpRV1JaTEN0Q1FVRnRRaXh6UWtGakwwSXNRMEZCUVR0SlFVVkVMQ3RDUVVGMVF5eFRRVUZSTEZkQlFWYzdVVUZIZUVRc1dVRkJXU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQldTeERRVUZETzFsQlF6VkVMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFTkJRVkU3V1VGRE0wSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVU1zUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzZVVKQlFYbENMRVZCUVVVc1EwRkJRenRSUVVONlF5eERRVUZETzB0QlEwWTdTVUZhV1N4eFEwRkJlVUlzTkVKQldYSkRMRU5CUVVFN1NVRkRSQ3dyUWtGQmRVTXNVMEZCVVN4WFFVRlhPMUZCUjNoRUxGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxIbENRVUY1UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZETEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEhsQ1FVRjVRaXhGUVVGRkxFTkJRVU03VVVGRGVrTXNRMEZCUXp0TFFVTkdPMGxCV2xrc2NVTkJRWGxDTERSQ1FWbHlReXhEUVVGQk8wbEJSVVFzVjBGQk5FSXNVMEZCVVN4WFFVRlhPMUZCUXpkRExGbEJRVmtzVDBGQmEwSXNSVUZCVXl4SlFVRlhMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCVXl4SlFVRlhMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCVXl4alFVRnpRaXhEUVVGRExFVkJRVk1zVjBGQmIwSXNTMEZCU3l4RlFVRlRMR2xDUVVFd1FpeEpRVUZKTzFsQlF6Tk5MRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVVJ6UWl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGNVFqdFpRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVhsQ08xbEJRVk1zWjBKQlFWY3NSMEZCV0N4WFFVRlhMRU5CUVZrN1dVRkJVeXhoUVVGUkxFZEJRVklzVVVGQlVTeERRVUZwUWp0WlFVRlRMRzFDUVVGakxFZEJRV1FzWTBGQll5eERRVUZuUWp0UlFVVTNUU3hEUVVGRE8xRkJRMDBzVVVGQlVUdFpRVU5pTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEYWtrc1EwRkJRenRSUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZYTzFsQlF6RkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnBKTEVOQlFVTTdVVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFTkJRVk03V1VGRGRrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkRNVThzUTBGQlF6dExRVWRHTzBsQmFFSnhRaXhwUWtGQlN5eFJRV2RDTVVJc1EwRkJRVHRKUVVWRUxHTkJRWE5DTEZOQlFWRXNTMEZCU3p0UlFVZHFReXhaUVVGWkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCYlVJc1JVRkJSU3hEUVVGdlFpeEZRVUZGTEVOQlFXOUNMRVZCUVVVc1EwRkJWeXhGUVVGRkxFTkJRVmM3V1VGRE4wc3NUVUZCVFN4RFFVRkRMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRjRVVzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZET1VVc1NVRkJTU3hYUVVGWExFZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1VVRkJVU3hIUVVGWkxFdEJRVXNzUTBGQlF6dFpRVU01UWl4SlFVRkpMR05CUVdNc1IwRkJXU3hKUVVGSkxFTkJRVU03V1VGRGJrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxHRkJRVXNzU1VGQlNTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROMElzVjBGQlZ5eEhRVUZITEVOQlFWY3NRMEZCUXp0blFrRkROVUlzUTBGQlF6dG5Ra0ZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeFJRVUZSTEVkQlFVY3NRMEZCV1N4RFFVRkRPMmRDUVVNeFFpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRemRDTEdOQlFXTXNSMEZCUnl4RFFVRlpMRU5CUVVNN1owSkJRMmhETEVOQlFVTTdXVUZEU0N4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROMElzVjBGQlZ5eEhRVUZITEVOQlFWY3NRMEZCUXp0blFrRkROVUlzUTBGQlF6dG5Ra0ZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeFJRVUZSTEVkQlFVY3NRMEZCV1N4RFFVRkRPMmRDUVVNeFFpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRemRDTEdOQlFXTXNSMEZCUnl4RFFVRlpMRU5CUVVNN1owSkJRMmhETEVOQlFVTTdXVUZEU0N4RFFVRkRPMWxCUTBRc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hSUVVGUkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZETVVRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTEVWQlFVVXNRMEZCVVN4RlFVRkZMRmRCUVcxQ0xFVkJRVVVzVVVGQmFVSXNSVUZCUlN4alFVRmpPMWxCUXpkR0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeFJRVUZSTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkRia1VzUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEZUVJc1EwRkJRenRMUVVOR08wbEJkRU5aTEc5Q1FVRlJMRmRCYzBOd1FpeERRVUZCTzBsQlEwUXNZMEZCYzBJc1UwRkJVU3hMUVVGTE8xRkJSMnBETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGdFFpeEZRVUZGTEVOQlFXOUNMRVZCUVVVc1EwRkJiMElzUlVGQlJTeERRVUZYTEVWQlFVVXNRMEZCVnp0WlFVTTNTeXhOUVVGTkxFTkJRVU1zUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU53UlN4TlFVRk5MRU5CUVVNc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJTeEpRVUZKTEZkQlFWY3NSMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzU1VGQlNTeFJRVUZSTEVkQlFWa3NTMEZCU3l4RFFVRkRPMWxCUXpsQ0xFbEJRVWtzWTBGQll5eEhRVUZaTEVsQlFVa3NRMEZCUXp0WlFVTnVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NZVUZCU3l4SlFVRkpMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4WFFVRlhMRWRCUVVjc1EwRkJWeXhEUVVGRE8yZENRVU0xUWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMRkZCUVZFc1IwRkJSeXhEUVVGWkxFTkJRVU03WjBKQlF6RkNMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1kwRkJZeXhIUVVGSExFTkJRVmtzUTBGQlF6dG5Ra0ZEYUVNc1EwRkJRenRaUVVOSUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4WFFVRlhMRWRCUVVjc1EwRkJWeXhEUVVGRE8yZENRVU0xUWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMRkZCUVZFc1IwRkJSeXhEUVVGWkxFTkJRVU03WjBKQlF6RkNMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1kwRkJZeXhIUVVGSExFTkJRVmtzUTBGQlF6dG5Ra0ZEYUVNc1EwRkJRenRaUVVOSUxFTkJRVU03V1VGRFJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVjBGQlZ5eEZRVUZGTEZGQlFWRXNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVNeFJDeERRVUZETzFGQlEwMHNZVUZCWVN4RFFVRkRMRU5CUVZFc1JVRkJSU3hEUVVGUkxFVkJRVVVzVjBGQmJVSXNSVUZCUlN4UlFVRnBRaXhGUVVGRkxHTkJRV003V1VGRE4wWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNWMEZCVnl4RlFVRkZMRkZCUVZFc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFJRVU51UlN4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVONFFpeERRVUZETzB0QlEwWTdTVUYwUTFrc2IwSkJRVkVzVjBGelEzQkNMRU5CUVVFN1FVRkRTQ3hEUVVGRExFVkJkbHBuUWl4WFFVRlhMRWRCUVZnc2JVSkJRVmNzUzBGQldDeHRRa0ZCVnl4UlFYVmFNMElpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQcmVzZXJ2ZUFzcGVjdFJhdGlvIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIG1lZXRPclNsaWNlKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMubWVldE9yU2xpY2UgPSBtZWV0T3JTbGljZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgc3RyID0gYHgke3RoaXMueH1ZJHt0aGlzLnl9YDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVldE9yU2xpY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgdGhpcy5tZWV0T3JTbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlByZXNlcnZlQXNwZWN0UmF0aW8gPSBQcmVzZXJ2ZUFzcGVjdFJhdGlvO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWeWRtVXRZWE53WldOMExYSmhkR2x2TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljSEpsYzJWeWRtVXRZWE53WldOMExYSmhkR2x2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3U1VGSlJTeFpRVUZ0UWl4RFFVRjVRaXhGUVVGVExFTkJRWGxDTEVWQlFWTXNWMEZCT0VJN1VVRkJiRWNzVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCZDBJN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUYzUWp0UlFVRlRMR2RDUVVGWExFZEJRVmdzVjBGQlZ5eERRVUZ0UWp0SlFVRkhMRU5CUVVNN1NVRkRiRWdzVVVGQlVUdFJRVU5pTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUkN4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia01zUjBGQlJ5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRMmhETEVOQlFVTTdXVUZEUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU5vUWl4RFFVRkRPMGxCUTBnc1EwRkJRenREUVVOR08wRkJhRUpFTEd0RVFXZENReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW8udHNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRyaXhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yb3RhdGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zY2FsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NrZXdcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmFuc2xhdGVcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3NFFrRkJlVUk3UVVGRGVrSXNOa0pCUVhkQ08wRkJRM2hDTERSQ1FVRjFRanRCUVVOMlFpeHBRMEZCTkVJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIE1hdHJpeF9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSA9IDEsIGIgPSAwLCBjID0gMCwgZCA9IDEsIGUgPSAwLCBmID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwibWF0cml4XCIpO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgICAgICB0aGlzLmMgPSBjO1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICAgICAgdGhpcy5lID0gZTtcclxuICAgICAgICB0aGlzLmYgPSBmO1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hfSAke3RoaXMuYn0gJHt0aGlzLmN9ICR7dGhpcy5kfSAke3RoaXMuZX0gJHt0aGlzLmZ9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeF9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgcGFyc2VGbG9hdCh0b2tzWzJdKSwgcGFyc2VGbG9hdCh0b2tzWzNdKSwgcGFyc2VGbG9hdCh0b2tzWzRdKSwgcGFyc2VGbG9hdCh0b2tzWzVdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeF9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmIsIHRoaXMuYiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmMsIHRoaXMuYywgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmQsIHRoaXMuZCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmUsIHRoaXMuZSwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmYsIHRoaXMuZiwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWF0cml4X1RyYW5zZm9ybSA9IE1hdHJpeF9UcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2RVUkJRVFJETzBGQlF6VkRMRFJEUVVGNVF6dEJRVVY2UXl4elFrRkJPRUlzVTBGQlVTeHhRa0ZCVXp0SlFVTTNReXhaUVVGdFFpeEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNc1JVRkJVeXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNc1JVRkJVeXhKUVVGWkxFTkJRVU03VVVGRE5Va3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJSRU1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0UlFVRlRMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3VVVGQlV5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdFJRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzBsQlJUbEpMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU4yUlN4RFFVRkRPMGxCUTAwc1UwRkJVeXhEUVVGRExFZEJRV3RDTzFGQlEycERMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE5VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1owSkJRV2RDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVNpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8xRkJRMmhETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRWE5DTEVWQlFVVXNRMEZCVXp0UlFVTnNSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeG5Ra0ZCWjBJc1EwRkJReXh4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZNTEVOQlFVTTdRMEZEUmp0QlFXeENSQ3cwUTBGclFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL21hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcclxuY2xhc3MgU2tld1hfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJza2V3WFwiKTtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrZXdYX1RyYW5zZm9ybShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2V3WF9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTa2V3WF9UcmFuc2Zvcm0oaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20uYSwgdGhpcy5hLCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ta2V3WF9UcmFuc2Zvcm0gPSBTa2V3WF9UcmFuc2Zvcm07XHJcbmNsYXNzIFNrZXdZX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwic2tld1lcIik7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2V3WV9UcmFuc2Zvcm0ocGFyc2VGbG9hdChjc3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2tld1lfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2tld1lfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2tld1lfVHJhbnNmb3JtID0gU2tld1lfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMnRsZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbk5yWlhjdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4MVJFRkJORU03UVVGRE5VTXNORU5CUVhsRE8wRkJSWHBETEhGQ1FVRTJRaXhUUVVGUkxIRkNRVUZUTzBsQlF6VkRMRmxCUVcxQ0xFbEJRVmtzUTBGQlF6dFJRVU01UWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRVJTeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMGxCUldoRExFTkJRVU03U1VGRFRTeEpRVUZKTzFGQlExUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZyUWp0UlFVTnFReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4bFFVRmxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VNc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQmNVSXNSVUZCUlN4RFFVRlRPMUZCUTJwRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzWkVMRU5CUVVNN1EwRkRSanRCUVdwQ1JDd3dRMEZwUWtNN1FVRkZSQ3h4UWtGQk5rSXNVMEZCVVN4eFFrRkJVenRKUVVNMVF5eFpRVUZ0UWl4SlFVRlpMRU5CUVVNN1VVRkRPVUlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUkVVc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdEpRVVZvUXl4RFFVRkRPMGxCUTAwc1NVRkJTVHRSUVVOVUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJhMEk3VVVGRGFrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxETEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNSVUZCUlN4RFFVRkRPMUZCUXk5Q0xFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhGQ0xFVkJRVVVzUTBGQlV6dFJRVU5xUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hsUVVGbExFTkJRVU1zY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMlJDeERRVUZETzBOQlEwWTdRVUZxUWtRc01FTkJhVUpESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9za2V3LnRzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZpbHRlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25vbi1yZW5kZXJhYmxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyYWJsZVwiKSk7XHJcbmNvbnN0IEZpbHRlclByaW1pdGl2ZXMgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlc1wiKTtcclxuZXhwb3J0cy5GaWx0ZXJQcmltaXRpdmVzID0gRmlsdGVyUHJpbWl0aXZlcztcclxuY29uc3QgTm9uUmVuZGVyYWJsZXMgPSByZXF1aXJlKFwiLi9ub24tcmVuZGVyYWJsZXNcIik7XHJcbmV4cG9ydHMuTm9uUmVuZGVyYWJsZXMgPSBOb25SZW5kZXJhYmxlcztcclxuY29uc3QgUmVuZGVyYWJsZXMgPSByZXF1aXJlKFwiLi9yZW5kZXJhYmxlc1wiKTtcclxuZXhwb3J0cy5SZW5kZXJhYmxlcyA9IFJlbmRlcmFibGVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMSGREUVVGdFF6dEJRVU51UXl3NFFrRkJlVUk3UVVGRGVrSXNjME5CUVdsRE8wRkJRMnBETEd0RFFVRTJRanRCUVVVM1FpeDNSRUZCZDBRN1FVRkxkRVFzTkVOQlFXZENPMEZCU214Q0xHOUVRVUZ2UkR0QlFVdHNSQ3gzUTBGQll6dEJRVXBvUWl3MlEwRkJOa003UVVGTE0wTXNhME5CUVZjaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNvbnN0IGJsZW5kXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9ibGVuZFwiKTtcclxuY29uc3QgY29sb3JfbWF0cml4XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9jb2xvci1tYXRyaXhcIik7XHJcbmNvbnN0IGNvbXBvbmVudF90cmFuc2Zlcl8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29tcG9uZW50LXRyYW5zZmVyXCIpO1xyXG5jb25zdCBjb21wb3NpdGVfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvc2l0ZVwiKTtcclxuY29uc3QgY29udm9sdmVfbWF0cml4XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9jb252b2x2ZS1tYXRyaXhcIik7XHJcbmNvbnN0IGRpc3BsYWNlbWVudF9tYXBfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2Rpc3BsYWNlbWVudC1tYXBcIik7XHJcbmNvbnN0IGZsb29kXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9mbG9vZFwiKTtcclxuY29uc3QgZ2F1c3NpYW5fYmx1cl8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvZ2F1c3NpYW4tYmx1clwiKTtcclxuY29uc3QgaW1hZ2VfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2ltYWdlXCIpO1xyXG5jb25zdCBkaWZmdXNlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9kaWZmdXNlXCIpO1xyXG5jb25zdCBkaXN0YW50XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvZGlzdGFudFwiKTtcclxuY29uc3QgcG9pbnRfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9wb2ludFwiKTtcclxuY29uc3Qgc3BvdF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3Nwb3RcIik7XHJcbmNvbnN0IHNwZWN1bGFyXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9zcGVjdWxhclwiKTtcclxuY29uc3QgbWVyZ2VfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL21lcmdlXCIpO1xyXG5jb25zdCBtb3JwaG9sb2d5XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9tb3JwaG9sb2d5XCIpO1xyXG5jb25zdCBvZmZzZXRfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL29mZnNldFwiKTtcclxuY29uc3QgdGlsZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvdGlsZVwiKTtcclxuY29uc3QgdHJhbnNmZXJfZnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL3RyYW5zZmVyLWZ1bmN0aW9uXCIpO1xyXG5jb25zdCB0dXJidWxlbmNlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy90dXJidWxlbmNlXCIpO1xyXG5jb25zdCBtZXJnZSA9IChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgZm9yIChjb25zdCBhUHJvcCBpbiBhKSB7XHJcbiAgICAgICAgb2JqW2FQcm9wXSA9IGFbYVByb3BdO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBiUHJvcCBpbiBiKSB7XHJcbiAgICAgICAgb2JqW2JQcm9wXSA9IGJbYlByb3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufTtcclxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZmlsdGVyXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZERlZih0aGlzKTtcclxuICAgIH1cclxuICAgIGJsZW5kKG1vZGUsIGlucHV0MSwgaW5wdXQyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBibGVuZF8xLkJsZW5kX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dDEsXHJcbiAgICAgICAgICAgIGluMjogaW5wdXQyLFxyXG4gICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29sb3JNYXRyaXgobWF0cml4LCBpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sb3JfbWF0cml4XzEuQ29sb3JNYXRyaXhfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICB0eXBlOiBtYXRyaXgudHlwZSxcclxuICAgICAgICAgICAgdmFsdWVzOiBtYXRyaXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRUcmFuc2ZlcihyLCBnLCBiLCBhLCBpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFRyYW5zZmVyID0gbmV3IGNvbXBvbmVudF90cmFuc2Zlcl8xLkNvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJSXCIsIHIpKTtcclxuICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJHXCIsIGcpKTtcclxuICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJCXCIsIGIpKTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudFRyYW5zZmVyLmFkZChuZXcgdHJhbnNmZXJfZnVuY3Rpb25fMS5UcmFuc2ZlckZ1bmN0aW9uX1ByaW1pdGl2ZSh0aGlzLCBcIkFcIiwgYSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50VHJhbnNmZXI7XHJcbiAgICB9XHJcbiAgICBjb21wb3NpdGUob3BlcmF0b3IsIGsxLCBrMiwgazMsIGs0LCBpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgY29tcG9zaXRlXzEuQ29tcG9zaXRlX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dDEsXHJcbiAgICAgICAgICAgIGluMjogaW5wdXQyLFxyXG4gICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgazEsXHJcbiAgICAgICAgICAgIGsyLFxyXG4gICAgICAgICAgICBrMyxcclxuICAgICAgICAgICAgazQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb252b2x2ZU1hdHJpeChhdHRycywgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbnZvbHZlX21hdHJpeF8xLkNvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZSh0aGlzLCBtZXJnZShhdHRycywgeyBpbjogaW5wdXQgfSkpO1xyXG4gICAgfVxyXG4gICAgZGlmZnVzZUxpZ2h0aW5nKGF0dHJzLCBsaWdodHMgPSBbXSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyBkaWZmdXNlXzEuRGlmZnVzZUxpZ2h0aW5nKHRoaXMsIG1lcmdlKGF0dHJzLCB7IGluOiBpbnB1dCB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRMaWdodHMoZmUsIGxpZ2h0cyk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgZGlzcGxhY2VtZW50TWFwKGF0dHJzLCBpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgZGlzcGxhY2VtZW50X21hcF8xLkRpc3BsYWNlbWVudE1hcF9QcmltaXRpdmUodGhpcywgbWVyZ2UoYXR0cnMsIHsgaW46IGlucHV0MSwgaW4yOiBpbnB1dDIgfSkpO1xyXG4gICAgfVxyXG4gICAgZmxvb2QoY29sb3IsIGFyZWEpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyBmbG9vZF8xLkZsb29kX1ByaW1pdGl2ZSh0aGlzLCB7IFwiZmxvb2QtY29sb3JcIjogY29sb3IgfSk7XHJcbiAgICAgICAgZmUuc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIHg6IGFyZWEueCxcclxuICAgICAgICAgICAgeTogYXJlYS55LFxyXG4gICAgICAgICAgICB3aWR0aDogYXJlYS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBhcmVhLmhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICBnYXVzc2lhbkJsdXIoc3RkRGV2aWF0aW9uID0gMCwgZWRnZU1vZGUgPSBcImR1cGxpY2F0ZVwiLCBpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgZ2F1c3NpYW5fYmx1cl8xLkdhdXNzaWFuQmx1cl9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgICAgIHN0ZERldmlhdGlvbixcclxuICAgICAgICAgICAgZWRnZU1vZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbWFnZShocmVmLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBpbWFnZV8xLkltYWdlX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBocmVmLFxyXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbWVyZ2UoaW5wdXRzKSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgbWVyZ2VfMS5NZXJnZV9QcmltaXRpdmUodGhpcyk7XHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXJnZU5vZGUgPSBuZXcgZWxlbWVudF8xLkVsZW1lbnQodGhpcy5jb250ZXh0LCBcImZlTWVyZ2VOb2RlXCIsIHsgaW46IGlucHV0IH0pO1xyXG4gICAgICAgICAgICBmZS5hZGQobWVyZ2VOb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICBtb3JwaG9sb2d5KG9wZXJhdG9yLCByYWRpdXMsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtb3JwaG9sb2d5XzEuTW9ycGhvbG9neV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvZmZzZXQoZCwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IG9mZnNldF8xLk9mZnNldF9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgICAgIGR4OiBkLngsXHJcbiAgICAgICAgICAgIGR5OiBkLnksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzcGVjdWxhckxpZ2h0aW5nKGF0dHJzLCBsaWdodHMgPSBbXSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyBzcGVjdWxhcl8xLlNwZWN1bGFyTGlnaHRpbmcodGhpcywgYXR0cnMpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKGZlLCBsaWdodHMpO1xyXG4gICAgICAgIHJldHVybiBmZTtcclxuICAgIH1cclxuICAgIHRpbGUoYXJlYSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyB0aWxlXzEuVGlsZV9QcmltaXRpdmUodGhpcywgeyBpbjogaW5wdXQgfSk7XHJcbiAgICAgICAgZmUuc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIHg6IGFyZWEueCxcclxuICAgICAgICAgICAgeTogYXJlYS55LFxyXG4gICAgICAgICAgICB3aWR0aDogYXJlYS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBhcmVhLmhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICB0dXJidWxlbmNlKGF0dHJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0dXJidWxlbmNlXzEuVHVyYnVsZW5jZV9QcmltaXRpdmUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkTGlnaHRzKGxpZ2h0aW5nLCBsaWdodHMpIHtcclxuICAgICAgICBsaWdodHMuZm9yRWFjaChsaWdodCA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGlnaHQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHRpbmcuYWRkKG5ldyBwb2ludF8xLlBvaW50TGlnaHQodGhpcywgbGlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkaXN0YW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHRpbmcuYWRkKG5ldyBkaXN0YW50XzEuRGlzdGFudExpZ2h0KHRoaXMsIGxpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3BvdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgc3BvdF8xLlNwb3RMaWdodCh0aGlzLCBsaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GaWx0ZXIgPSBGaWx0ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHNkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2labWxzZEdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc2QwTkJRWEZETzBGQlIzSkRMSEZFUVVFMFJEdEJRVU0xUkN4dFJVRkJlVVU3UVVGRGVrVXNLMFZCUVhGR08wRkJRM0pHTERaRVFVRnZSVHRCUVVOd1JTeDVSVUZCTUVjN1FVRkRNVWNzTWtWQlFUWkhPMEZCUXpkSExIRkVRVUUwUkR0QlFVTTFSQ3h4UlVGQk1rVTdRVUZETTBVc2NVUkJRVFJFTzBGQlF6VkVMR3RGUVVGdFJ6dEJRVVZ1Unl3clJVRkJhVVk3UVVGRGFrWXNNa1ZCUVRaRk8wRkJRemRGTEhsRlFVRXlSVHRCUVVNelJTeHZSVUZCYzBjN1FVRkRkRWNzY1VSQlFUUkVPMEZCUXpWRUxDdEVRVUZ6UlR0QlFVTjBSU3gxUkVGQk9FUTdRVUZET1VRc2JVUkJRVEJFTzBGQlF6RkVMRFpGUVVGblNEdEJRVU5vU0N3clJFRkJOa1k3UVVGelFqZEdMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVThzUTBGQlNTeEZRVUZGTEVOQlFVa3NSVUZCVXl4RlFVRkZPMGxCUTNoRExFMUJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZEUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03UVVGRFlpeERRVUZETEVOQlFVTTdRVUZGUml4WlFVRnZRaXhUUVVGUkxHbENRVUV5UkR0SlFVVnlSaXhaUVVGdFFpeFBRVUZuUWp0UlFVTnFReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUkZJc1dVRkJUeXhIUVVGUUxFOUJRVThzUTBGQlV6dFJRVVZxUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVsQlFUWkVMRVZCUVVVc1RVRkJiVUlzUlVGQlJTeE5RVUZ2UWp0UlFVTnVTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeDFRa0ZCWlN4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVNdlFpeEZRVUZGTEVWQlFVVXNUVUZCVFR0WlFVTldMRWRCUVVjc1JVRkJSU3hOUVVGTk8xbEJRMWdzU1VGQlNUdFRRVU5NTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zVFVGQmJVSXNSVUZCUlN4TFFVRnRRanRSUVVONlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4dlEwRkJjVUlzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEY2tNc1JVRkJSU3hGUVVGRkxFdEJRVXM3V1VGRFZDeEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1dVRkRha0lzVFVGQlRTeEZRVUZGTEUxQlFVMDdVMEZEWml4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMDBzYVVKQlFXbENMRU5CUVVNc1EwRkJPRUlzUlVGQlJTeERRVUU0UWl4RlFVRkZMRU5CUVRoQ0xFVkJRVVVzUTBGQkswSXNSVUZCUlN4TFFVRnRRanRSUVVNelN5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzWjBSQlFUSkNMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRemxFTEVWQlFVVXNSVUZCUlN4TFFVRkxPMU5CUTFZc1EwRkJReXhEUVVGRE8xRkJRMGdzYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzT0VOQlFUQkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNCRkxHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxEaERRVUV3UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndSU3hwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3c0UTBGQk1FSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzT0VOQlFUQkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSRkxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVTk5MRk5CUVZNc1EwRkJReXhSUVVFclJDeEZRVUZGTEVWQlFWVXNSVUZCUlN4RlFVRlZMRVZCUVVVc1JVRkJWU3hGUVVGRkxFVkJRVlVzUlVGQlJTeE5RVUZ2UWl4RlFVRkZMRTFCUVc5Q08xRkJRekZMTEUxQlFVMHNRMEZCUXl4SlFVRkpMQ3RDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTnVReXhGUVVGRkxFVkJRVVVzVFVGQlRUdFpRVU5XTEVkQlFVY3NSVUZCUlN4TlFVRk5PMWxCUTFnc1VVRkJVVHRaUVVOU0xFVkJRVVU3V1VGRFJpeEZRVUZGTzFsQlEwWXNSVUZCUlR0WlFVTkdMRVZCUVVVN1UwRkRTQ3hEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlEwMHNZMEZCWXl4RFFVRkRMRXRCUVhsRExFVkJRVVVzUzBGQmJVSTdVVUZEYkVZc1RVRkJUU3hEUVVGRExFbEJRVWtzTUVOQlFYZENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcEZMRU5CUVVNN1NVRkRUU3hsUVVGbExFTkJRVU1zUzBGQk1FTXNSVUZCUlN4VFFVRnRReXhGUVVGRkxFVkJRVVVzUzBGQmJVSTdVVUZETTBnc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeDVRa0ZCWlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVTk5MR1ZCUVdVc1EwRkJReXhMUVVFd1F5eEZRVUZGTEUxQlFXOUNMRVZCUVVVc1RVRkJiMEk3VVVGRE0wY3NUVUZCVFN4RFFVRkRMRWxCUVVrc05FTkJRWGxDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVZc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eExRVUZaTEVWQlFVVXNTVUZCVXp0UlFVTnNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEhWQ1FVRmxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzWVVGQllTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRMMFFzUlVGQlJTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTm1MRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5VTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOVUxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3p0WlFVTnFRaXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMDdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkRUU3haUVVGWkxFTkJRVU1zWlVGQmRVSXNRMEZCUXl4RlFVRkZMRmRCUVhkRExGZEJRVmNzUlVGQlJTeExRVUZ0UWp0UlFVTndTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeHpRMEZCYzBJc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGRFTXNSVUZCUlN4RlFVRkZMRXRCUVVzN1dVRkRWQ3haUVVGWk8xbEJRMW9zVVVGQlVUdFRRVU5VTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3hMUVVGTExFTkJRVU1zU1VGQldTeEZRVUZGTEcxQ1FVRjVRenRSUVVOc1JTeE5RVUZOTEVOQlFVTXNTVUZCU1N4MVFrRkJaU3hEUVVGRExFbEJRVWtzUlVGQlJUdFpRVU12UWl4WlFVRlpMRVZCUVVVc1NVRkJTVHRaUVVOc1FpeHRRa0ZCYlVJN1UwRkRjRUlzUTBGQlF5eERRVUZETzBsQlEwd3NRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhOUVVGeFFqdFJRVU5vUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxIVkNRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRja01zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOeVFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMR2xDUVVGUExFTkJRV3RITEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1lVRkJZU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNMHNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlEwMHNWVUZCVlN4RFFVRkRMRkZCUVRSQ0xFVkJRVVVzVFVGQk5FSXNSVUZCUlN4TFFVRnRRanRSUVVNdlJpeE5RVUZOTEVOQlFVTXNTVUZCU1N4cFEwRkJiMElzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEY0VNc1JVRkJSU3hGUVVGRkxFdEJRVXM3V1VGRFZDeFJRVUZSTzFsQlExSXNUVUZCVFR0VFFVTlFMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRFRTeE5RVUZOTEVOQlFVTXNRMEZCVVN4RlFVRkZMRXRCUVcxQ08xRkJRM3BETEUxQlFVMHNRMEZCUXl4SlFVRkpMSGxDUVVGblFpeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTm9ReXhGUVVGRkxFVkJRVVVzUzBGQlN6dFpRVU5VTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOUUxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTlNMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRFRTeG5Ra0ZCWjBJc1EwRkJReXhMUVVFeVF5eEZRVUZGTEZOQlFXMURMRVZCUVVVc1JVRkJSU3hMUVVGdFFqdFJRVU0zU0N4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxESkNRVUZuUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhKUVVGVExFVkJRVVVzUzBGQmJVSTdVVUZEZUVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFVkJRVVVzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZEWml4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZDeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWQ3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYWtJc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTzFOQlEzQkNMRU5CUVVNc1EwRkJRenRSUVVOSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUTAwc1ZVRkJWU3hEUVVGRExFdEJRWEZETzFGQlEzSkVMRTFCUVUwc1EwRkJReXhKUVVGSkxHbERRVUZ2UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUTA4c1UwRkJVeXhEUVVGRExGRkJRVGhITEVWQlFVVXNUVUZCWjBNN1VVRkRhRXNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOeVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtJc1MwRkJTeXhQUVVGUE8yOUNRVU5XTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hyUWtGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU14UXl4TFFVRkxMRU5CUVVNN1owSkJRMUlzUzBGQlN5eFRRVUZUTzI5Q1FVTmFMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeHpRa0ZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTFReXhMUVVGTExFTkJRVU03WjBKQlExSXNTMEZCU3l4TlFVRk5PMjlDUVVOVUxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4blFrRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONlF5eExRVUZMTEVOQlFVTTdXVUZEVml4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwWTdRVUZ3U1VRc2QwSkJiMGxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci50c1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2JsZW5kXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29sb3ItbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29tcG9uZW50LXRyYW5zZmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29tcG9zaXRlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29udm9sdmUtbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlzcGxhY2VtZW50LW1hcFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Zsb29kXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2F1c3NpYW4tYmx1clwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWVyZ2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tb3JwaG9sb2d5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vb2Zmc2V0XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdGlsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RyYW5zZmVyLWZ1bmN0aW9uXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdHVyYnVsZW5jZVwiKSk7XHJcbmNvbnN0IExpZ2h0aW5nID0gcmVxdWlyZShcIi4vbGlnaHRpbmdcIik7XHJcbmV4cG9ydHMuTGlnaHRpbmcgPSBMaWdodGluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERaQ1FVRjNRanRCUVVONFFpeHZRMEZCSzBJN1FVRkRMMElzTUVOQlFYRkRPMEZCUTNKRExHbERRVUUwUWp0QlFVTTFRaXgxUTBGQmEwTTdRVUZEYkVNc2QwTkJRVzFETzBGQlEyNURMRFpDUVVGM1FqdEJRVU40UWl4eFEwRkJaME03UVVGRGFFTXNOa0pCUVhkQ08wRkJRM2hDTERaQ1FVRjNRanRCUVVONFFpeHJRMEZCTmtJN1FVRkROMElzT0VKQlFYbENPMEZCUTNwQ0xEUkNRVUYxUWp0QlFVTjJRaXg1UTBGQmIwTTdRVUZEY0VNc2EwTkJRVFpDTzBGQlJUZENMSFZEUVVGMVF6dEJRVWR5UXl3MFFrRkJVU0o5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdHRyaWJ1dGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlmZnVzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NwZWN1bGFyXCIpKTtcclxuY29uc3QgTGlnaHRTb3VyY2UgPSByZXF1aXJlKFwiLi9saWdodC1zb3VyY2VcIik7XHJcbmV4cG9ydHMuTGlnaHRTb3VyY2UgPSBMaWdodFNvdXJjZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEd0RFFVRTJRanRCUVVNM1Fpd3JRa0ZCTUVJN1FVRkRNVUlzWjBOQlFUSkNPMEZCUlROQ0xEaERRVUU0UXp0QlFVYzFReXhyUTBGQlZ5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhSMGNtbGlkWFJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbUYwZEhKcFluVjBaWE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2F0dHJpYnV0ZXMudHNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdHRyaWJ1dGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlzdGFudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvaW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc3BvdFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdERRVUUyUWp0QlFVTTNRaXdyUWtGQk1FSTdRVUZETVVJc05rSkJRWGRDTzBGQlEzaENMRFJDUVVGMVFpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYUjBjbWxpZFhSbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1GMGRISnBZblYwWlhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvYXR0cmlidXRlcy50c1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NsaXAtcGF0aFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hcmtlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hc2tcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wYWludC1zZXJ2ZXJcIikpO1xyXG5jb25zdCBQYWludFNlcnZlcnMgPSByZXF1aXJlKFwiLi9wYWludC1zZXJ2ZXJzXCIpO1xyXG5leHBvcnRzLlBhaW50U2VydmVycyA9IFBhaW50U2VydmVycztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEdsRFFVRTBRanRCUVVNMVFpdzRRa0ZCZVVJN1FVRkRla0lzTkVKQlFYVkNPMEZCUTNaQ0xHOURRVUVyUWp0QlFVVXZRaXhuUkVGQlowUTdRVUZIT1VNc2IwTkJRVmtpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dyYWRpZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGF0dGVyblwiKSk7XHJcbmNvbnN0IEdyYWRpZW50cyA9IHJlcXVpcmUoXCIuL2dyYWRpZW50c1wiKTtcclxuZXhwb3J0cy5HcmFkaWVudHMgPSBHcmFkaWVudHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHZERRVUV5UWp0QlFVTXpRaXdyUWtGQk1FSTdRVUZGTVVJc2VVTkJRWGxETzBGQlIzWkRMRGhDUVVGVEluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xpbmVhclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JhZGlhbFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEaENRVUY1UWp0QlFVTjZRaXc0UWtGQmVVSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXh0ZXJuYWxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mb3JlaWduLW9iamVjdFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dyb3VwXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaW1hZ2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RleHRcIikpO1xyXG5jb25zdCBTaGFwZXMgPSByZXF1aXJlKFwiLi9zaGFwZXNcIik7XHJcbmV4cG9ydHMuU2hhcGVzID0gU2hhcGVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR2xEUVVFMFFqdEJRVU0xUWl4blEwRkJNa0k3UVVGRE0wSXNjME5CUVdsRE8wRkJRMnBETERaQ1FVRjNRanRCUVVONFFpdzJRa0ZCZDBJN1FVRkRlRUlzTmtKQlFYZENPMEZCUTNoQ0xEUkNRVUYxUWp0QlFVVjJRaXh0UTBGQmJVTTdRVUZIYWtNc2QwSkJRVTBpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY2lyY2xlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZWxsaXBzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xpbmVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wYXRoXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcG9seWdvblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvbHlsaW5lXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVjdFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEaENRVUY1UWp0QlFVTjZRaXdyUWtGQk1FSTdRVUZETVVJc05FSkJRWFZDTzBGQlEzWkNMRFJDUVVGMVFqdEJRVU4yUWl3clFrRkJNRUk3UVVGRE1VSXNaME5CUVRKQ08wRkJRek5DTERSQ1FVRjFRaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9