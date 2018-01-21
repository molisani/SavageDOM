/*
 * SavageDOM 1.0.0-alpha.24 (https://github.com/molisani/SavageDOM) 
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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
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
const renderer_1 = __webpack_require__(18);
const attribute_1 = __webpack_require__(17);
const constants_1 = __webpack_require__(10);
const rxjs_1 = __webpack_require__(19);
const box_1 = __webpack_require__(11);
const wrappers_1 = __webpack_require__(21);
const id_1 = __webpack_require__(20);
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
        for (const name in attrs) {
            const attr = attrs[name];
            if (attr !== undefined && attr !== null) {
                this.setAttribute(name, attr);
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
    clone(deep = true, id = id_1.randomShortStringId()) {
        const copy = new Element(this.context, this._node.cloneNode(deep));
        copy._id = id;
        copy._node.setAttribute("id", copy._id);
        return copy;
    }
    cloneNode(deep = true) {
        const clone = this._node.cloneNode(deep);
        clone.setAttribute("id", id_1.randomShortStringId());
        return clone;
    }
}
exports.Element = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBaUU7QUFDakUsMkNBQXFEO0FBRXJELDJDQUFvQztBQUlwQywrQkFBeUQ7QUFFekQsMENBQXVDO0FBQ3ZDLG9EQUFzRDtBQUN0RCw2QkFBMkM7QUFJM0M7SUFPRSxZQUFtQixPQUFnQixFQUFFLEVBQWdCLEVBQUUsS0FBMkIsRUFBVSxNQUFjLHdCQUFtQixFQUFFO1FBQTVHLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBeUQsUUFBRyxHQUFILEdBQUcsQ0FBZ0M7UUFKdkgsMEJBQXFCLEdBQUcsRUFBa0QsQ0FBQztRQUtqRixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBSyxFQUFFLEVBQUUsQ0FBUSxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDaEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBVyxFQUFFO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQVcsSUFBSTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxRQUFRO1FBQ2IsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFDTSxlQUFlLENBQWdDLElBQVUsRUFBRSxHQUFxQjtRQUNyRixFQUFFLENBQUMsQ0FBQyx1QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUNNLFlBQVksQ0FBZ0MsSUFBVSxFQUFFLEdBQXFCO1FBQ2xGLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQThELElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUgsQ0FBQztJQUNNLGFBQWEsQ0FBQyxLQUEwQjtRQUM3QyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQWlDLENBQUM7WUFDekQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ00sZ0JBQWdCLENBQWdDLElBQVUsRUFBRSxHQUFxQixFQUFFLFFBQWdCLEVBQUUsTUFBc0I7UUFDaEksSUFBSSxJQUFvQixDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxHQUFHLElBQUksd0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLHVCQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksR0FBRyxHQUFHLENBQUM7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLDhCQUE4QixDQUFxRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEwsQ0FBQztJQUNNLFlBQVksQ0FBZ0MsSUFBVTtRQUMzRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBR00sYUFBYSxDQUFDLEVBQXdDLEVBQUUsY0FBcUQsRUFBRSxpQkFBMEIsSUFBSTtRQUNsSixNQUFNLEtBQUssR0FBRyxFQUFnQixDQUFDO1FBQy9CLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBd0IsQ0FBQyxLQUFLLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDdEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sUUFBUSxDQUE2QixLQUFZO1FBQ3RELE1BQU0sQ0FBQyxpQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLFNBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNNLEdBQUcsQ0FBQyxFQUE4QztRQUN2RCxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFDTSxXQUFXO1FBQ2hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFvQyxFQUFFLENBQUM7UUFDckQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUM7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDTSxLQUFLLENBQUMsT0FBZ0IsSUFBSSxFQUFFLEtBQWEsd0JBQW1CLEVBQUU7UUFDbkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQTBCLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFRLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFUyxTQUFTLENBQUMsT0FBZ0IsSUFBSTtRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQVEsQ0FBQztRQUNoRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSx3QkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQS9IRCwwQkErSEMifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbmRlcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx3Q0FBcUM7QUFtQnJDLHdCQUErRyxTQUFRLGlCQUE0RDtDQUFHO0FBQXRMLGdEQUFzTCJ9

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
const pattern_1 = __webpack_require__(16);
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(8);
const element_1 = __webpack_require__(3);
const paint_server_1 = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const non_renderable_1 = __webpack_require__(6);
class AbstractPaintServer extends non_renderable_1.AbstractNonRenderable {
}
exports.AbstractPaintServer = AbstractPaintServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpbnQtc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFpbnQtc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQTBEO0FBRTFELHlCQUF1RixTQUFRLHNDQUErQztDQUFHO0FBQWpKLGtEQUFpSiJ9

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const paint_server_1 = __webpack_require__(15);
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(19);
const id_1 = __webpack_require__(20);
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
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.randomShortStringId = () => Math.random().toString(36).substring(2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNhLFFBQUEsbUJBQW1CLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==

/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gradient_1 = __webpack_require__(14);
class LinearGradient extends gradient_1.AbstractGradient {
    constructor(context, stops, attrs) {
        super(context, "linearGradient", stops, attrs);
    }
}
exports.LinearGradient = LinearGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGluZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQTJFO0FBVzNFLG9CQUE0QixTQUFRLDJCQUFxRTtJQUN2RyxZQUFZLE9BQWdCLEVBQUUsS0FBWSxFQUFFLEtBQXFFO1FBQy9HLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gradient_1 = __webpack_require__(14);
class RadialGradient extends gradient_1.AbstractGradient {
    constructor(context, stops, attrs) {
        super(context, "radialGradient", stops, attrs);
    }
}
exports.RadialGradient = RadialGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBQTJFO0FBWTNFLG9CQUE0QixTQUFRLDJCQUFxRTtJQUN2RyxZQUFZLE9BQWdCLEVBQUUsS0FBWSxFQUFFLEtBQXFFO1FBQy9HLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = __webpack_require__(13);
const component_1 = __webpack_require__(28);
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
function ExternalComponent(url, origin) {
    const xmlDocument_p = document_1.makeRequest("GET", url);
    const doc_p = xmlDocument_p.then((xml) => new document_1.SVGDocument(component_1.Component.getContext(), xml));
    return class extends component_1.Component {
        constructor() {
            super(origin);
            doc_p.then((doc) => {
                doc.children.forEach((child) => {
                    const importedNode = component_1.Component.getContext().window.document.importNode(child, true);
                    this.add(importedNode);
                });
            });
            this._node.setAttribute("data-source-url", url);
        }
    };
}
exports.ExternalComponent = ExternalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleHRlcm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZDQUEwRDtBQUUxRCwyQ0FBd0M7QUFDeEMsbUNBQWdDO0FBRWhDLGlCQUF5QixTQUFRLGFBQUs7SUFDcEMsWUFBWSxPQUFnQixFQUFFLEdBQWdCLEVBQUUsS0FBc0M7UUFDcEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQVJELGtDQVFDO0FBRUQsMkJBQWtDLEdBQVcsRUFBRSxNQUFnQztJQUM3RSxNQUFNLGFBQWEsR0FBRyxzQkFBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLHNCQUFXLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sQ0FBQyxLQUFNLFNBQVEscUJBQVM7UUFDNUI7WUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQzdCLE1BQU0sWUFBWSxHQUFHLHFCQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBZkQsOENBZUMifQ==

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = __webpack_require__(29);
const rotate_1 = __webpack_require__(30);
const scale_1 = __webpack_require__(31);
const translate_1 = __webpack_require__(32);
const group_1 = __webpack_require__(9);
class Component extends group_1.Group {
    constructor(origin, easing = easing_1.linear) {
        super(Component.CONTEXT);
        this.easing = easing;
        this._hidden = false;
        const transforms = [new translate_1.Translate_Transform(), new rotate_1.Rotate_Transform(0), new scale_1.Scale_Transform()];
        if (origin) {
            transforms.push(new translate_1.Translate_Transform(-origin.x, -origin.y));
        }
        this.setAttribute("transform", transforms);
    }
    static getContext() {
        return Component.CONTEXT;
    }
    static setContext(context) {
        Component.CONTEXT = context;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWdFO0FBRWhFLCtEQUFzRTtBQUN0RSw2REFBb0U7QUFDcEUscUVBQTRFO0FBRTVFLG1DQUFnQztBQUVoQyxlQUF1QixTQUFRLGFBQUs7SUFTbEMsWUFBWSxNQUFpQyxFQUFZLFNBQXlCLGVBQU07UUFDdEYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUQ4QixXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQURoRixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR3RCLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSwrQkFBbUIsRUFBRSxFQUFFLElBQUkseUJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSx1QkFBZSxFQUFFLENBQUMsQ0FBQztRQUMvRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBZk0sTUFBTSxDQUFDLFVBQVU7UUFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUNNLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZ0I7UUFDdkMsU0FBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQVdNLE1BQU0sQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLFdBQW1CLENBQUM7UUFDdEQsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLCtCQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLCtCQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JHLENBQUM7SUFDSCxDQUFDO0lBQ00sTUFBTSxDQUFDLEtBQWEsRUFBRSxXQUFtQixDQUFDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsSUFBSSx5QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHlCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEcsQ0FBQztJQUNILENBQUM7SUFDTSxLQUFLLENBQUMsQ0FBUyxFQUFFLElBQVksQ0FBQyxFQUFFLFdBQW1CLENBQUM7UUFDekQsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLHVCQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLElBQUksdUJBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0gsQ0FBQztJQUNNLElBQUk7UUFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBQ00sSUFBSTtRQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUFsREQsOEJBa0RDIn0=

/***/ }),
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dimension_1 = __webpack_require__(8);
const text_content_1 = __webpack_require__(43);
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(17));
__export(__webpack_require__(10));
__export(__webpack_require__(65));
__export(__webpack_require__(13));
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
/* 65 */
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
const box_1 = __webpack_require__(11);
const point_1 = __webpack_require__(12);
const constants_1 = __webpack_require__(10);
const document_1 = __webpack_require__(13);
const element_1 = __webpack_require__(3);
const clip_path_1 = __webpack_require__(22);
const marker_1 = __webpack_require__(23);
const mask_1 = __webpack_require__(24);
const linear_1 = __webpack_require__(25);
const radial_1 = __webpack_require__(26);
const pattern_1 = __webpack_require__(16);
const external_1 = __webpack_require__(27);
const foreign_object_1 = __webpack_require__(33);
const group_1 = __webpack_require__(9);
const image_1 = __webpack_require__(34);
const circle_1 = __webpack_require__(35);
const ellipse_1 = __webpack_require__(36);
const line_1 = __webpack_require__(37);
const path_1 = __webpack_require__(38);
const polygon_1 = __webpack_require__(39);
const polyline_1 = __webpack_require__(40);
const rect_1 = __webpack_require__(41);
const text_1 = __webpack_require__(42);
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
__export(__webpack_require__(29));
__export(__webpack_require__(18));
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
__export(__webpack_require__(11));
__export(__webpack_require__(69));
__export(__webpack_require__(70));
__export(__webpack_require__(8));
__export(__webpack_require__(71));
__export(__webpack_require__(72));
__export(__webpack_require__(73));
__export(__webpack_require__(12));
__export(__webpack_require__(74));
__export(__webpack_require__(43));
__export(__webpack_require__(4));
__export(__webpack_require__(21));
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
const point_1 = __webpack_require__(12);
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
__export(__webpack_require__(30));
__export(__webpack_require__(31));
__export(__webpack_require__(77));
__export(__webpack_require__(32));
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
const blend_1 = __webpack_require__(44);
const color_matrix_1 = __webpack_require__(45);
const component_transfer_1 = __webpack_require__(46);
const composite_1 = __webpack_require__(47);
const convolve_matrix_1 = __webpack_require__(48);
const displacement_map_1 = __webpack_require__(49);
const flood_1 = __webpack_require__(50);
const gaussian_blur_1 = __webpack_require__(51);
const image_1 = __webpack_require__(52);
const diffuse_1 = __webpack_require__(53);
const distant_1 = __webpack_require__(54);
const point_1 = __webpack_require__(55);
const spot_1 = __webpack_require__(56);
const specular_1 = __webpack_require__(57);
const merge_1 = __webpack_require__(58);
const morphology_1 = __webpack_require__(59);
const offset_1 = __webpack_require__(60);
const tile_1 = __webpack_require__(61);
const transfer_function_1 = __webpack_require__(62);
const turbulence_1 = __webpack_require__(63);
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
__export(__webpack_require__(44));
__export(__webpack_require__(45));
__export(__webpack_require__(46));
__export(__webpack_require__(47));
__export(__webpack_require__(48));
__export(__webpack_require__(49));
__export(__webpack_require__(50));
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(58));
__export(__webpack_require__(59));
__export(__webpack_require__(60));
__export(__webpack_require__(61));
__export(__webpack_require__(62));
__export(__webpack_require__(63));
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
__export(__webpack_require__(53));
__export(__webpack_require__(57));
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
__export(__webpack_require__(54));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
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
__export(__webpack_require__(22));
__export(__webpack_require__(23));
__export(__webpack_require__(24));
__export(__webpack_require__(15));
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
__export(__webpack_require__(14));
__export(__webpack_require__(16));
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
__export(__webpack_require__(25));
__export(__webpack_require__(26));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6Qiw4QkFBeUIifQ==

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(28));
__export(__webpack_require__(27));
__export(__webpack_require__(33));
__export(__webpack_require__(9));
__export(__webpack_require__(34));
__export(__webpack_require__(2));
__export(__webpack_require__(42));
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
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(37));
__export(__webpack_require__(38));
__export(__webpack_require__(39));
__export(__webpack_require__(40));
__export(__webpack_require__(41));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhCQUF5QjtBQUN6QiwrQkFBMEI7QUFDMUIsNEJBQXVCO0FBQ3ZCLDRCQUF1QjtBQUN2QiwrQkFBMEI7QUFDMUIsZ0NBQTJCO0FBQzNCLDRCQUF1QiJ9

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNmMzMWEyYjkyNjMyOTM0Y2JkMiIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJwb2xhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL2RpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3VtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvcGF0dGVybi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUnhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvd3JhcHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9jbGlwLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXJrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXNrLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvbGluZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9leHRlcm5hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvcm90YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ZvcmVpZ24tb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5bGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvdGV4dC1jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9ibGVuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29sb3ItbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb25lbnQtdHJhbnNmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvc2l0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9mbG9vZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZ2F1c3NpYW4tYmx1ci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2RpZmZ1c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9kaXN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9zcGVjdWxhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21vcnBob2xvZ3kudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL29mZnNldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHJhbnNmZXItZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3R1cmJ1bGVuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy9jb2xvci1tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL251bWJlci1vcHRpb25hbC1udW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrdkI7Ozs7Ozs7QUNsQjNDO0FBQ0EsOENB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnJHOzs7Ozs7O0FDOUQzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJDQUEyQyx1c0U7Ozs7Ozs7QUM5QzNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKzJDOzs7Ozs7O0FDOUIzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1POzs7Ozs7O0FDTjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrN0M7Ozs7Ozs7QUM1QjNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sR0FBRyxPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnJFOzs7Ozs7O0FDckQzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPLEdBQUcsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHU5Qzs7Ozs7OztBQ2hDM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyakI7Ozs7Ozs7QUNmM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMlU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMlU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxLQUFLLEdBQUcsS0FBSztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1eEc7Ozs7Ozs7QUN0RTNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLHdDQUF3QyxzQkFBc0Isc0JBQXNCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdXdDOzs7Ozs7O0FDNUIzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVY7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyVzs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVc7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1Vzs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1Y7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtVOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1U7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1ZDs7Ozs7OztBQ2YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1WOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVU7Ozs7Ozs7QUNUM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtVTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtWTs7Ozs7OztBQ1QzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxzQkFBc0IsR0FBRyw0QkFBNEIsR0FBRyxrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdFQUFnRTtBQUNqRSwyQ0FBMkMsbS9wQjs7Ozs7OztBQ3hhM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sR0FBRyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdTRCOzs7Ozs7O0FDdEIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbU87Ozs7Ozs7QUNWM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU87QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1sRTs7Ozs7OztBQy9CM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJvRDs7Ozs7OztBQzlDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VDs7Ozs7OztBQ2YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0ZBQWtGLFlBQVk7QUFDOUY7QUFDQTtBQUNBLHFFQUFxRSxZQUFZO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLDBCQUEwQjtBQUM5RztBQUNBO0FBQ0Esc0RBQXNELHVCQUF1QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsWUFBWTtBQUM5RjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsWUFBWTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdWlOOzs7Ozs7O0FDdkszQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK2E7Ozs7Ozs7QUN0QjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrTjs7Ozs7OztBQ1YzQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJDQUEyQyxtSjs7Ozs7OztBQ0YzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtNOzs7Ozs7O0FDVDNDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsMkNBQTJDLG1KOzs7Ozs7O0FDRjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1QOzs7Ozs7O0FDWDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK007Ozs7Ozs7QUNUM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkNBQTJDLCtLOzs7Ozs7O0FDUDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVTOzs7Ozs7O0FDZDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbVEiLCJmaWxlIjoiZGlzdC9zYXZhZ2Vkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJSeFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlNhdmFnZURPTVwiLCBbXCJSeFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTYXZhZ2VET01cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJSeFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU2F2YWdlRE9NXCJdID0gZmFjdG9yeShyb290W1wiUnhcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTZjMzFhMmI5MjYzMjkzNGNiZDIiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcclxuY2xhc3MgRmlsdGVyUHJpbWl0aXZlIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBuYW1lLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlci5jb250ZXh0LCBuYW1lLCBhdHRycyk7XHJcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZpbHRlci5hZGQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3JlZmVyZW5jZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwicmVzdWx0XCIsIHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZpbHRlclByaW1pdGl2ZSA9IEZpbHRlclByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1sc2RHVnlMWEJ5YVcxcGRHbDJaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltWnBiSFJsY2kxd2NtbHRhWFJwZG1VdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZIUVN4M1EwRkJjVU03UVVGcFFuSkRMSEZDUVVGMVJDeFRRVUZSTEdsQ1FVRnRSVHRKUVVWb1NTeFpRVUZaTEUxQlFXTXNSVUZCUlN4SlFVRlpMRVZCUVVVc1MwRkJLME03VVVGRGRrWXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUmpkQ0xHZENRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUnpGQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRia0lzUTBGQlF6dEpRVU5OTEZGQlFWRTdVVUZEWWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNoQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU4yUXl4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEYWtJc1EwRkJRenREUVVOR08wRkJZa1FzTUVOQllVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZS50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLl9sZXJwID0gKGEsIGIsIHQpID0+IGEgKyAoKGIgLSBhKSAqIHQpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzUwWlhKd2IyeGhkR2x2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbWx1ZEdWeWNHOXNZWFJwYjI0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCWVN4UlFVRkJMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnRlcnBvbGF0aW9uLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBBYnN0cmFjdFNoYXBlIGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdFNoYXBlID0gQWJzdHJhY3RTaGFwZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJoaGNHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKemFHRndaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMRGhEUVVGM1JUdEJRVTE0UlN4dFFrRkJOa1FzVTBGQlVTd3JRa0ZCSzBNN1EwRkJSenRCUVVGMlNDeHpRMEZCZFVnaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uL3JlbmRlcmVyXCIpO1xyXG5jb25zdCBhdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZVwiKTtcclxuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XHJcbmNvbnN0IHJ4anNfMSA9IHJlcXVpcmUoXCJyeGpzXCIpO1xyXG5jb25zdCBib3hfMSA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZXMvYm94XCIpO1xyXG5jb25zdCB3cmFwcGVyc18xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy93cmFwcGVyc1wiKTtcclxuY29uc3QgaWRfMSA9IHJlcXVpcmUoXCIuL2lkXCIpO1xyXG5jbGFzcyBFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGVsLCBhdHRycywgX2lkID0gaWRfMS5yYW5kb21TaG9ydFN0cmluZ0lkKCkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuX2lkID0gX2lkO1xyXG4gICAgICAgIHRoaXMuX2R5bmFtaWNTdWJzY3JpcHRpb25zID0ge307XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlID0gdGhpcy5jb250ZXh0LndpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoY29uc3RhbnRzXzEuWE1MTlMsIGVsKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFkZENoaWxkKHRoaXMuX25vZGUpO1xyXG4gICAgICAgICAgICBpZiAoYXR0cnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGF0dHJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUgPSBlbDtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLl9ub2RlLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgICAgICBpZiAoaWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdHlsZSA9IHRoaXMuY29udGV4dC53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9ub2RlKTtcclxuICAgIH1cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgbm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgdXJsKCMke3RoaXMuX2lkfSlgO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXR0cmlidXRlKG5hbWUsIHZhbCkge1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVfMS5pc0F0dHJpYnV0ZSh2YWwpKSB7XHJcbiAgICAgICAgICAgIHZhbC5zZXQodGhpcy5fbm9kZSwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWwuam9pbihcIlxcdFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBTdHJpbmcodmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbCkge1xyXG4gICAgICAgIHJlbmRlcmVyXzEuUmVuZGVyZXIuZ2V0SW5zdGFuY2UoKS5xdWV1ZUF0dHJpYnV0ZVVwZGF0ZSh0aGlzLCBuYW1lLCB2YWwpO1xyXG4gICAgfVxyXG4gICAgc2V0QXR0cmlidXRlcyhhdHRycykge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cnNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgYXR0ciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbmltYXRlQXR0cmlidXRlKG5hbWUsIHZhbCwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgICAgIGxldCBhdHRyO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGF0dHIgPSBuZXcgd3JhcHBlcnNfMS5OdW1iZXJXcmFwcGVyKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGF0dHJpYnV0ZV8xLmlzQXR0cmlidXRlKHZhbCkpIHtcclxuICAgICAgICAgICAgYXR0ciA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IGF0dHIuZ2V0KHRoaXMuX25vZGUsIG5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJlcl8xLlJlbmRlcmVyLmdldEluc3RhbmNlKCkucmVnaXN0ZXJBdHRyaWJ1dGVJbnRlcnBvbGF0aW9uKHRoaXMsIG5hbWUsIGF0dHIuaW50ZXJwb2xhdGUuYmluZChhdHRyLCBmcm9tKSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgICB9XHJcbiAgICBnZXRBdHRyaWJ1dGUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX25vZGUuZ2V0QXR0cmlidXRlKG5hbWUpIHx8IHRoaXMuX3N0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuICh2YWwgPT09IFwiXCIgfHwgdmFsID09PSBcIm5vbmVcIikgPyBudWxsIDogdmFsO1xyXG4gICAgfVxyXG4gICAgY29weVN0eWxlRnJvbShlbCwgaW5jbHVkZUV4Y2x1ZGUsIGRlZmF1bHRJbmNsdWRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge307XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBlbC5fbm9kZS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGlmIChpbmNsdWRlRXhjbHVkZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cnMuaXRlbShpKS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVFeGNsdWRlW2F0dHJdID09PSB0cnVlIHx8IGRlZmF1bHRJbmNsdWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbYXR0cl0gPSBlbC5fc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShhdHRyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICAgICAgICAgIHN0eWxlW2F0dHJdID0gZWwuX3N0eWxlLmdldFByb3BlcnR5VmFsdWUoYXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKHN0eWxlKTtcclxuICAgIH1cclxuICAgIGdldEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHJ4anNfMS5PYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLl9ub2RlLCBldmVudCk7XHJcbiAgICB9XHJcbiAgICBnZXQgYm91bmRpbmdCb3goKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX25vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBib3hfMS5Cb3gocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgYWRkKGVsKSB7XHJcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuYXBwZW5kQ2hpbGQoZWwuX25vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldENoaWxkcmVuKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fbm9kZS5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKG5ldyBFbGVtZW50KHRoaXMuY29udGV4dCwgY2hpbGRyZW4uaXRlbShpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICB9XHJcbiAgICBjbG9uZShkZWVwID0gdHJ1ZSwgaWQgPSBpZF8xLnJhbmRvbVNob3J0U3RyaW5nSWQoKSkge1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgRWxlbWVudCh0aGlzLmNvbnRleHQsIHRoaXMuX25vZGUuY2xvbmVOb2RlKGRlZXApKTtcclxuICAgICAgICBjb3B5Ll9pZCA9IGlkO1xyXG4gICAgICAgIGNvcHkuX25vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgY29weS5faWQpO1xyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgY2xvbmVOb2RlKGRlZXAgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSB0aGlzLl9ub2RlLmNsb25lTm9kZShkZWVwKTtcclxuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZF8xLnJhbmRvbVNob3J0U3RyaW5nSWQoKSk7XHJcbiAgICAgICAgcmV0dXJuIGNsb25lO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXeGxiV1Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVZzWlcxbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHRSRUZCYVVVN1FVRkRha1VzTWtOQlFYRkVPMEZCUlhKRUxESkRRVUZ2UXp0QlFVbHdReXdyUWtGQmVVUTdRVUZGZWtRc01FTkJRWFZETzBGQlEzWkRMRzlFUVVGelJEdEJRVU4wUkN3MlFrRkJNa003UVVGSk0wTTdTVUZQUlN4WlFVRnRRaXhQUVVGblFpeEZRVUZGTEVWQlFXZENMRVZCUVVVc1MwRkJNa0lzUlVGQlZTeE5RVUZqTEhkQ1FVRnRRaXhGUVVGRk8xRkJRVFZITEZsQlFVOHNSMEZCVUN4UFFVRlBMRU5CUVZNN1VVRkJlVVFzVVVGQlJ5eEhRVUZJTEVkQlFVY3NRMEZCWjBNN1VVRktka2dzTUVKQlFYRkNMRWRCUVVjc1JVRkJhMFFzUTBGQlF6dFJRVXRxUml4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4cFFrRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlVTeERRVUZETzFsQlF6VkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhEUVVGRE8xbEJRMFFzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTXhReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU5vUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEYUVJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE1VTXNRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5xUlN4RFFVRkRPMGxCUTBRc1NVRkJWeXhGUVVGRk8xRkJRMWdzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVU5FTEVsQlFWY3NTVUZCU1R0UlFVTmlMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkRUU3hSUVVGUk8xRkJRMklzVFVGQlRTeERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZEVFN4bFFVRmxMRU5CUVdkRExFbEJRVlVzUlVGQlJTeEhRVUZ4UWp0UlFVTnlSaXhGUVVGRkxFTkJRVU1zUTBGQlF5eDFRa0ZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UWl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROVUlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhFTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNReXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZsQlFWa3NRMEZCWjBNc1NVRkJWU3hGUVVGRkxFZEJRWEZDTzFGQlEyeEdMRzFDUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVGhFTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE5VZ3NRMEZCUXp0SlFVTk5MR0ZCUVdFc1EwRkJReXhMUVVFd1FqdFJRVU0zUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVdsRExFTkJRVU03V1VGRGVrUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExGTkJRVk1zU1VGQlNTeEpRVUZKTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEYUVNc1EwRkJRenRSUVVOSUxFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNaMEpCUVdkQ0xFTkJRV2RETEVsQlFWVXNSVUZCUlN4SFFVRnhRaXhGUVVGRkxGRkJRV2RDTEVWQlFVVXNUVUZCYzBJN1VVRkRhRWtzU1VGQlNTeEpRVUZ2UWl4RFFVRkRPMUZCUTNwQ0xFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VSXNTVUZCU1N4SFFVRkhMRWxCUVVrc2QwSkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTm9ReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMSFZDUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTTdVVUZEVkN4RFFVRkRPMUZCUTBRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaERMRTFCUVUwc1EwRkJReXh0UWtGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRGhDUVVFNFFpeERRVUZ4UkN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRjRXdzUTBGQlF6dEpRVU5OTEZsQlFWa3NRMEZCWjBNc1NVRkJWVHRSUVVNelJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMmhHTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFbEJRVWtzUjBGQlJ5eExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTnlSQ3hEUVVGRE8wbEJSMDBzWVVGQllTeERRVUZETEVWQlFYZERMRVZCUVVVc1kwRkJjVVFzUlVGQlJTeHBRa0ZCTUVJc1NVRkJTVHRSUVVOc1NpeE5RVUZOTEV0QlFVc3NSMEZCUnl4RlFVRm5RaXhEUVVGRE8xRkJReTlDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETzFGQlEyeERMRVZCUVVVc1EwRkJReXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtJc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRM1JETEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOb1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJkMElzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU40UlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRha1FzUTBGQlF6dFpRVU5JTEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZEZEVNc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEyaERMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTJwRUxFTkJRVU03VVVGRFNDeERRVUZETzFGQlEwUXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlUwc1VVRkJVU3hEUVVFMlFpeExRVUZaTzFGQlEzUkVMRTFCUVUwc1EwRkJReXhwUWtGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZSQ3hKUVVGWExGZEJRVmM3VVVGRGNFSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hEUVVGRE8xRkJRMmhFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRMMFFzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4RlFVRTRRenRSUVVOMlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRia01zUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhPMUZCUTJoQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRM1pETEUxQlFVMHNVVUZCVVN4SFFVRnZReXhGUVVGRkxFTkJRVU03VVVGRGNrUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEZWtNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRek5GTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1QwRkJaMElzU1VGQlNTeEZRVUZGTEV0QlFXRXNkMEpCUVcxQ0xFVkJRVVU3VVVGRGJrVXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hQUVVGUExFTkJRVEJDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRlJMRU5CUVVNc1EwRkJRenRSUVVOdVJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZGVXl4VFFVRlRMRU5CUVVNc1QwRkJaMElzU1VGQlNUdFJRVU4wUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVZFc1EwRkJRenRSUVVOb1JDeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3gzUWtGQmJVSXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRhRVFzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTm1MRU5CUVVNN1EwRkRSanRCUVM5SVJDd3dRa0VyU0VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnR5cGV9KCR7dGhpcy5hcmdzKCl9KWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJncyhjc3Muc3Vic3RyaW5nKGNzcy5pbmRleE9mKFwiKFwiKSArIDEsIGNzcy5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFyZ3MoY3NzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIgJiYgdG9rc1sxXSA9PT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGNzcy5pbmRleE9mKHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGNzcy5zdWJzdHJpbmcoc3RhcnQsIGNzcy5pbmRleE9mKFwiKVwiLCBzdGFydCkgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UobnVsbCk7XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSBTdHJpbmcoKG92ZXJyaWRlID09PSB1bmRlZmluZWQpID8gdGhpcyA6IG92ZXJyaWRlKTtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAyICYmIHRva3NbMV0gPT09IHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzBdKTtcclxuICAgICAgICAgICAgaWYgKGNzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjc3MuaW5kZXhPZih0aGlzLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYCR7Y3NzLnN1YnN0cigwLCBzdGFydCl9JHtzdHJ9JHtjc3Muc3Vic3RyKGNzcy5pbmRleE9mKFwiKVwiLCBzdGFydCkgKyAxKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgc3RyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMF0sIHN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNmb3JtID0gVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWRISmhibk5tYjNKdExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFN1NVRkRSU3haUVVGdFFpeEpRVUZ4UlR0UlFVRnlSU3hUUVVGSkxFZEJRVW9zU1VGQlNTeERRVUZwUlR0SlFVRkhMRU5CUVVNN1NVRkZja1lzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZOTEV0QlFVc3NRMEZCUXl4SFFVRnJRanRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVms3VVVGRE1VTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5TTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOeVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTm1MRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaRkxFTkJRVU03V1VGRFNDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmIwSTdVVUZEYUVVc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJReTlFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETjBJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlETEUxQlFVMHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFVpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRja01zUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEWml4TlFVRk5MRTlCUVU4c1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03YjBKQlF6RkdMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8yZENRVU42UXl4RFFVRkRPMmRDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU55UXl4RFFVRkRPMWxCUTBnc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0pETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRPMGxCUTBnc1EwRkJRenREUVVWR08wRkJhRVJFTERoQ1FXZEVReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm0udHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNsYXNzIEFic3RyYWN0UmVuZGVyYWJsZSBleHRlbmRzIGVsZW1lbnRfMS5FbGVtZW50IHtcclxufVxyXG5leHBvcnRzLkFic3RyYWN0UmVuZGVyYWJsZSA9IEFic3RyYWN0UmVuZGVyYWJsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdVpHVnlZV0pzWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkpsYm1SbGNtRmliR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3gzUTBGQmNVTTdRVUZ0UW5KRExIZENRVUVyUnl4VFFVRlJMR2xDUVVFMFJEdERRVUZITzBGQlFYUk1MR2RFUVVGelRDSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpO1xyXG5jbGFzcyBBYnN0cmFjdE5vblJlbmRlcmFibGUgZXh0ZW5kcyBlbGVtZW50XzEuRWxlbWVudCB7XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdE5vblJlbmRlcmFibGUgPSBBYnN0cmFjdE5vblJlbmRlcmFibGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJtOXVMWEpsYm1SbGNtRmliR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnViMjR0Y21WdVpHVnlZV0pzWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTEhkRFFVRnhRenRCUVU5eVF5d3lRa0ZCTWtZc1UwRkJVU3hwUWtGQmIwWTdRMEZCUnp0QlFVRXhUQ3h6UkVGQk1Fd2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IGRpbWVuc2lvbl8xID0gcmVxdWlyZShcIi4vZGltZW5zaW9uXCIpO1xyXG5leHBvcnRzLl9MZW5ndGhQYXJzZSA9IChjc3MpID0+IHtcclxuICAgIGNvbnN0IG0gPSBjc3MubWF0Y2goLyhcXGQrfFxcZCtcXC5cXGQrKShcXHcrfCUpL2kpO1xyXG4gICAgaWYgKG0gIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGRpbWVuc2lvbl8xLkRpbWVuc2lvbihwYXJzZUZsb2F0KG1bMV0pLCBtWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KGNzcyk7XHJcbn07XHJcbmV4cG9ydHMuX0xlbmd0aEludGVycG9sYXRlID0gKGEsIGIsIHQpID0+IHtcclxuICAgIGlmICh0eXBlb2YgYSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYi5pbnRlcnBvbGF0ZShhLCB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmludGVycG9sYXRlKG5ldyBkaW1lbnNpb25fMS5EaW1lbnNpb24oYiwgYS51bml0KSwgMSAtIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYi5pbnRlcnBvbGF0ZShuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKGEsIGIudW5pdCksIHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb25fMS5fbGVycChhLCBiLCB0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltRnpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltSmhjMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3h2UkVGQmVVTTdRVUZGZWtNc01rTkJRWGRITzBGQll6TkdMRkZCUVVFc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlZ5eEZRVUZWTEVWQlFVVTdTVUZEYkVRc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4M1FrRkJkMElzUTBGQlF5eERRVUZETzBsQlF6bERMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJZc1RVRkJUU3hEUVVGRExFbEJRVWtzY1VKQlFWTXNRMEZCVFN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNFUXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZWtJc1EwRkJReXhEUVVGRE8wRkJSVmNzVVVGQlFTeHJRa0ZCYTBJc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRlZMRVZCUVVVN1NVRkROVVVzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxIRkNRVUZUTEVOQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMFFzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOT0xFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeHhRa0ZCVXl4RFFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla1FzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExIRkNRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UWl4RFFVRkRPMGxCUTBnc1EwRkJRenRCUVVOSUxFTkJRVU1zUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2Jhc2UudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNsYXNzIERpbWVuc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgdW5pdCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVuaXQgPSB1bml0O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudmFsdWV9JHt0aGlzLnVuaXR9YDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGNzcy5tYXRjaCgvKFxcZCt8XFxkK1xcLlxcZCspKFxcdyt8JSkvaSk7XHJcbiAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b1B4ID0gRGltZW5zaW9uLmNvbnZlcnRbbVsyXV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tUHggPSAxIC8gRGltZW5zaW9uLmNvbnZlcnRbdGhpcy51bml0XTtcclxuICAgICAgICAgICAgICAgIGlmICh0b1B4ICE9PSB1bmRlZmluZWQgJiYgZnJvbVB4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbihwYXJzZUZsb2F0KG1bMV0pICogdG9QeCAqIGZyb21QeCwgdGhpcy51bml0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKHBhcnNlRmxvYXQobVsxXSksIG1bMl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24ocGFyc2VGbG9hdChjc3MpLCB0aGlzLnVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKDAsIHRoaXMudW5pdCk7XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudW5pdCAhPT0gZnJvbS51bml0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUHggPSBEaW1lbnNpb24uY29udmVydFt0aGlzLnVuaXRdO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tUHggPSAxIC8gRGltZW5zaW9uLmNvbnZlcnRbZnJvbS51bml0XTtcclxuICAgICAgICAgICAgaWYgKHRvUHggIT09IHVuZGVmaW5lZCAmJiBmcm9tUHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb24oaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20udmFsdWUsIHRoaXMudmFsdWUsIHQpICogdG9QeCAqIGZyb21QeCwgdGhpcy51bml0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IERpbWVuc2lvbihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS52YWx1ZSwgdGhpcy52YWx1ZSwgdCksIHRoaXMudW5pdCk7XHJcbiAgICB9XHJcbn1cclxuRGltZW5zaW9uLmNvbnZlcnQgPSB7XHJcbiAgICBweDogMSxcclxuICAgIGluOiA5NixcclxuICAgIGNtOiAyNTQgLyA5NixcclxuICAgIG1tOiAyNS40IC8gOTYsXHJcbiAgICBwdDogMyAvIDQsXHJcbiAgICBwYzogOSxcclxuICAgIGRlZzogMSxcclxuICAgIGdyYWQ6IDkgLyAxMCxcclxuICAgIHJhZDogMTgwIC8gTWF0aC5QSSxcclxuICAgIHR1cm46IDM2MCxcclxufTtcclxuZXhwb3J0cy5EaW1lbnNpb24gPSBEaW1lbnNpb247XHJcbmNsYXNzIFBlcmNlbnRhZ2UgZXh0ZW5kcyBEaW1lbnNpb24ge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgXCIlXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGVyY2VudGFnZSA9IFBlcmNlbnRhZ2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHbHRaVzV6YVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWkdsdFpXNXphVzl1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzYjBSQlFYbERPMEZCVFhwRE8wbEJZVVVzV1VGQmJVSXNTMEZCWVN4RlFVRlRMRWxCUVZVN1VVRkJhRU1zVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCVVR0UlFVRlRMRk5CUVVrc1IwRkJTaXhKUVVGSkxFTkJRVTA3U1VGQlJ5eERRVUZETzBsQlEyaEVMRkZCUVZFN1VVRkRZaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU55UXl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0WlFVTTVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFppeE5RVUZOTEVsQlFVa3NSMEZCUnl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOeVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCWXl4RFFVRkRMRU5CUVVNN1owSkJRekZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhUUVVGVExFbEJRVWtzVFVGQlRTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJReTlETEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJUeXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRekZGTEVOQlFVTTdaMEpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGTkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRjRVFzUTBGQlF6dFpRVU5JTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVU4c1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONlJDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlR5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFGQlF6RkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVRCQ08xRkJRM1JGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6bERMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFYRkNMRVZCUVVVc1EwRkJVenRSUVVOcVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRV01zUTBGQlF5eERRVUZETzFsQlEzQkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGakxFTkJRVU1zUTBGQlF6dFpRVU14UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFdEJRVXNzVTBGQlV5eEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU12UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVThzY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRNVVlzUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVThzY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6RkZMRU5CUVVNN08wRkJjRVJqTEdsQ1FVRlBMRWRCUVN0Q08wbEJRMjVFTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTB3c1JVRkJSU3hGUVVGRkxFVkJRVVU3U1VGRFRpeEZRVUZGTEVWQlFVVXNSMEZCUnl4SFFVRkhMRVZCUVVVN1NVRkRXaXhGUVVGRkxFVkJRVVVzU1VGQlNTeEhRVUZITEVWQlFVVTdTVUZEWWl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRFZDeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTk1MRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMDRzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZPMGxCUTFvc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlR0SlFVTnNRaXhKUVVGSkxFVkJRVVVzUjBGQlJ6dERRVU5XTEVOQlFVTTdRVUZhU2l3NFFrRnpSRU03UVVGRlJDeG5Ra0ZCZDBJc1UwRkJVU3hUUVVGak8wbEJRelZETEZsQlFWa3NTMEZCWVR0UlFVTjJRaXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNCQ0xFTkJRVU03UTBGRFJqdEJRVXBFTEdkRFFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9kaW1lbnNpb24udHNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL3BhdHRlcm5cIik7XHJcbmNvbnN0IHJlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBHcm91cCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImdcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgdG9QYXR0ZXJuKHcsIGgsIHgsIHksIHZpZXcpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gbmV3IHBhdHRlcm5fMS5QYXR0ZXJuKHRoaXMuY29udGV4dCwgdywgaCwgeCwgeSwgdmlldyk7XHJcbiAgICAgICAgdGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gcGF0dGVybi5hZGQoY2hpbGQpKTtcclxuICAgICAgICByZXR1cm4gcGF0dGVybjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdyb3VwID0gR3JvdXA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVozSnZkWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sm5jbTkxY0M1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVWRCTEhORlFVRnRSVHRCUVVOdVJTdzRRMEZCYVVjN1FVRkpha2NzVjBGQmJVSXNVMEZCVVN3clFrRkJjVVE3U1VGRE9VVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRWE5ETzFGQlEyeEZMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGSlRTeFRRVUZUTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVkxFVkJRVVVzUTBGQlZTeEZRVUZGTEVsQlFWVTdVVUZEZGtVc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6VkVMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRVFzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTnFRaXhEUVVGRE8wTkJRMFk3UVVGYVJDeHpRa0ZaUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2dyb3VwLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuWE1MTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbmV4cG9ydHMuWExJTksgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWMzUmhiblJ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl1YzNSaGJuUnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFXRXNVVUZCUVN4TFFVRkxMRWRCUVVjc05FSkJRVFJDTEVOQlFVTTdRVUZEY2tNc1VVRkJRU3hMUVVGTExFZEJRVWNzT0VKQlFUaENMRU5CUVVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25zdGFudHMudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNsYXNzIEJveCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fSAke3RoaXMud2lkdGh9ICR7dGhpcy5oZWlnaHR9YDtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm94KHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSksIHBhcnNlRmxvYXQodG9rc1syXSksIHBhcnNlRmxvYXQodG9rc1szXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3goMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1ggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzWSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NXaWR0aCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMl0pO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NIZWlnaHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0b2tzWzNdKTtcclxuICAgICAgICAgICAgaWYgKGNzc1ggIT09IG51bGwgJiYgY3NzWSAhPT0gbnVsbCAmJiBjc3NXaWR0aCAhPT0gbnVsbCAmJiBjc3NIZWlnaHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQm94KHBhcnNlRmxvYXQoY3NzWCksIHBhcnNlRmxvYXQoY3NzWSksIHBhcnNlRmxvYXQoY3NzV2lkdGgpLCBwYXJzZUZsb2F0KGNzc0hlaWdodCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3goMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgICAgICBjb25zdCB0b2tzID0gYXR0ci5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCBvdmVycmlkZS54LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1sxXSwgb3ZlcnJpZGUueS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMl0sIG92ZXJyaWRlLndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1szXSwgb3ZlcnJpZGUuaGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgdGhpcy54LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1sxXSwgdGhpcy55LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1syXSwgdGhpcy53aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbM10sIHRoaXMuaGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm94KGJhc2VfMS5fTGVuZ3RoSW50ZXJwb2xhdGUoZnJvbS54LCB0aGlzLngsIHQpLCBiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ueSwgdGhpcy55LCB0KSwgYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLndpZHRoLCB0aGlzLndpZHRoLCB0KSwgYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLmhlaWdodCwgdGhpcy5oZWlnaHQsIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJveCA9IEJveDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW05NExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWW05NExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc2FVTkJRVzlFTzBGQlJYQkVPMGxCUTBVc1dVRkJiVUlzUTBGQlV5eEZRVUZUTEVOQlFWTXNSVUZCVXl4TFFVRmhMRVZCUVZNc1RVRkJZenRSUVVGNFJTeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlJPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQlVUdFJRVUZUTEZWQlFVc3NSMEZCVEN4TFFVRkxMRU5CUVZFN1VVRkJVeXhYUVVGTkxFZEJRVTRzVFVGQlRTeERRVUZSTzBsQlFVY3NRMEZCUXp0SlFVTjRSaXhSUVVGUk8xRkJRMklzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBsQlF6VkVMRU5CUVVNN1NVRkRUU3hMUVVGTExFTkJRVU1zUjBGQmEwSTdVVUZETjBJc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU0xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRja2NzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZENMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXVHRSUVVNeFF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFMUJRVTBzU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NTVUZCU1N4UlFVRlJMRXRCUVVzc1NVRkJTU3hKUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNNVJTeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFY3NRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNM1FpeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRkRMRTlCUVcxQ0xFVkJRVVVzU1VGQldTeEZRVUZGTEZGQlFXTTdVVUZETVVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVJc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tRc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOeVJDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEzcEVMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOcVJDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEycEVMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRja1FzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM2hFTEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETTBJc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGJFUXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFTkJRVU03VVVGRFNDeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGVExFVkJRVVVzUTBGQlV6dFJRVU55UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zZVVKQlFXdENMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIbENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3g1UWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc2VVSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRMMHdzUTBGQlF6dERRVU5HTzBGQmRFUkVMR3RDUVhORVF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2JveC50c1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY2xhc3MgUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9LCR7dGhpcy55fWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KGJhc2VfMS5fTGVuZ3RoUGFyc2UodG9rc1swXSksIGJhc2VfMS5fTGVuZ3RoUGFyc2UodG9rc1sxXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIGNvbnN0IHRva3MgPSBhdHRyLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICBpZiAodG9rcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzWCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRva3NbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NZID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodG9rc1sxXSk7XHJcbiAgICAgICAgICAgIGlmIChjc3NYICE9PSBudWxsICYmIGNzc1kgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoYmFzZV8xLl9MZW5ndGhQYXJzZShjc3NYKSwgYmFzZV8xLl9MZW5ndGhQYXJzZShjc3NZKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgY29uc3QgdG9rcyA9IGF0dHIuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgIGlmICh0b2tzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodG9rc1swXSwgb3ZlcnJpZGUueC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRva3NbMV0sIG92ZXJyaWRlLnkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzBdLCB0aGlzLngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0b2tzWzFdLCB0aGlzLnkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ueCwgdGhpcy54LCB0KSwgYmFzZV8xLl9MZW5ndGhJbnRlcnBvbGF0ZShmcm9tLnksIHRoaXMueSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9pbnQgPSBQb2ludDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5cGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2IybHVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMR2xEUVVGclJUdEJRVVZzUlR0SlFVTkZMRmxCUVcxQ0xFTkJRVk1zUlVGQlV5eERRVUZUTzFGQlFUTkNMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVkU3VVVGQlV5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlJPMGxCUVVjc1EwRkJRenRKUVVNelF5eFJRVUZSTzFGQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4SFFVRnJRanRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4dFFrRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRzFDUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVJTeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BDTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1R0UlFVTXhReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExHMUNRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc2JVSkJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRVFzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCWjBJN1VVRkROVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRUlzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRja1FzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pFTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEycEVMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnVSQ3hEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU01UXl4RFFVRkRPMUZCUTBnc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCVnl4RlFVRkZMRU5CUVZNN1VVRkRka01zVFVGQlRTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4NVFrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnFSeXhEUVVGRE8wTkJRMFk3UVVGb1JFUXNjMEpCWjBSREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3BvaW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTVkdEb2N1bWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCByYXcsIG1pbWVUeXBlID0gXCJhcHBsaWNhdGlvbi94bWxcIikge1xyXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gKHJhdyBpbnN0YW5jZW9mIERvY3VtZW50KSA/IHJhdyA6IFNWR0RvY3VtZW50LlBBUlNFUi5wYXJzZUZyb21TdHJpbmcocmF3LCBtaW1lVHlwZSk7XHJcbiAgICAgICAgY29uc3QgYWxsRGVmcyA9IEFycmF5LmZyb20odGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZWZzXCIpKTtcclxuICAgICAgICBhbGxEZWZzLmZvckVhY2goKGRlZnMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm1EZWZzID0gdGhpcy5fZG9jdW1lbnQucmVtb3ZlQ2hpbGQoZGVmcyk7XHJcbiAgICAgICAgICAgIHdoaWxlIChybURlZnMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5hZGREZWYocm1EZWZzLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNoaWxkcmVuKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgfVxyXG59XHJcblNWR0RvY3VtZW50LlBBUlNFUiA9IG5ldyBET01QYXJzZXIoKTtcclxuZXhwb3J0cy5TVkdEb2N1bWVudCA9IFNWR0RvY3VtZW50O1xyXG5leHBvcnRzLm1ha2VSZXF1ZXN0ID0gKG1ldGhvZCwgdXJsKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhtbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeG1sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laRzlqZFcxbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKa2IyTjFiV1Z1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTzBsQlIwVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFZEJRWE5DTEVWQlFVVXNWMEZCYlVJc2FVSkJRV2xDTzFGQlEzaEdMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eEhRVUZITEZsQlFWa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNKSExFMUJRVTBzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaEZMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlR0WlFVTjJRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5vUkN4UFFVRlBMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOc1F5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZsTEVOQlFVTXNRMEZCUXp0WlFVTnVSQ3hEUVVGRE8xRkJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUTBRc1NVRkJWeXhSUVVGUk8xRkJRMnBDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZETjBVc1EwRkJRenM3UVVGa1l5eHJRa0ZCVFN4SFFVRkhMRWxCUVVrc1UwRkJVeXhGUVVGRkxFTkJRVU03UVVGRU1VTXNhME5CWjBKRE8wRkJSVmtzVVVGQlFTeFhRVUZYTEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGeFFpeEZRVUZGTzBsQlF6VkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRSUVVOeVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJRMnBETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlR0WlFVTm9RaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRekZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU03WjBKQlF6VkNMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOcVFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMllzUTBGQlF6dG5Ra0ZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRFRpeE5RVUZOTEVOQlFVTTdkMEpCUTB3c1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTzNkQ1FVTnNRaXhWUVVGVkxFVkJRVVVzUjBGQlJ5eERRVUZETEZWQlFWVTdjVUpCUXpOQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZEVEN4RFFVRkRPMWxCUTBnc1EwRkJRenRSUVVOSUxFTkJRVU1zUTBGQlF6dFJRVU5HTEVkQlFVY3NRMEZCUXl4UFFVRlBMRWRCUVVjc1IwRkJSeXhGUVVGRk8xbEJRMnBDTEUxQlFVMHNRMEZCUXp0blFrRkRUQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEUxQlFVMDdaMEpCUTJ4Q0xGVkJRVlVzUlVGQlJTeEhRVUZITEVOQlFVTXNWVUZCVlR0aFFVTXpRaXhEUVVGRExFTkJRVU03VVVGRFRDeERRVUZETEVOQlFVTTdVVUZEUml4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03U1VGRFlpeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTk1MRU5CUVVNc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZG9jdW1lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRpbWVuc2lvbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2F0dHJpYnV0ZXMvZGltZW5zaW9uXCIpO1xyXG5jb25zdCBlbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZWxlbWVudFwiKTtcclxuY29uc3QgcGFpbnRfc2VydmVyXzEgPSByZXF1aXJlKFwiLi4vcGFpbnQtc2VydmVyXCIpO1xyXG5jbGFzcyBTdG9wIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgb2Zmc2V0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwic3RvcFwiLCB7XHJcbiAgICAgICAgICAgIG9mZnNldDogbmV3IGRpbWVuc2lvbl8xLkRpbWVuc2lvbihvZmZzZXQgKiAxMDAsIFwiJVwiKSxcclxuICAgICAgICAgICAgXCJzdG9wLWNvbG9yXCI6IGNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RvcCA9IFN0b3A7XHJcbmNsYXNzIEFic3RyYWN0R3JhZGllbnQgZXh0ZW5kcyBwYWludF9zZXJ2ZXJfMS5BYnN0cmFjdFBhaW50U2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5hbWUsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIG5hbWUsIGF0dHJzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkRGVmKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BBcnIgPSBbXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdG9wcykuZm9yRWFjaChvZmZzZXQgPT4ge1xyXG4gICAgICAgICAgICBzdG9wQXJyLnB1c2gobmV3IFN0b3AoY29udGV4dCwgTnVtYmVyKG9mZnNldCksIHN0b3BzW29mZnNldF0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9wQXJyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub2Zmc2V0IC0gYi5vZmZzZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcEFyci5mb3JFYWNoKHMgPT4gdGhpcy5hZGQocykpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RHcmFkaWVudCA9IEFic3RyYWN0R3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVozSmhaR2xsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpuY21Ga2FXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVVkJMRFpFUVVGelJUdEJRVkYwUlN3NFEwRkJNa003UVVGRk0wTXNhMFJCUVhORU8wRkJNRUowUkN4VlFVRnJRaXhUUVVGUkxHbENRVUU0UkR0SlFVTjBSaXhaUVVGWkxFOUJRV2RDTEVWQlFWTXNUVUZCWXl4RlFVRkZMRXRCUVhWRE8xRkJRekZHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRk8xbEJRM0pDTEUxQlFVMHNSVUZCUlN4SlFVRkpMSEZDUVVGVExFTkJRVTBzVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1dVRkROME1zV1VGQldTeEZRVUZGTEV0QlFVczdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJTbWRETEZkQlFVMHNSMEZCVGl4TlFVRk5MRU5CUVZFN1NVRkxia1FzUTBGQlF6dERRVU5HTzBGQlVFUXNiMEpCVDBNN1FVRkZSQ3h6UWtGQk5rY3NVMEZCVVN4clEwRkJNRU03U1VGRE4wb3NXVUZCV1N4UFFVRm5RaXhGUVVGRkxFbEJRVmtzUlVGQlJTeExRVUZaTEVWQlFVVXNTMEZCT0VRN1VVRkRkRWdzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETVVJc1RVRkJUU3hQUVVGUExFZEJRVmNzUlVGQlJTeERRVUZETzFGQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRMnhETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTndReXhEUVVGRE8wTkJRMFk3UVVGaVJDdzBRMEZoUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBBYnN0cmFjdFBhaW50U2VydmVyIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RQYWludFNlcnZlciA9IEFic3RyYWN0UGFpbnRTZXJ2ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRnBiblF0YzJWeWRtVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNHRnBiblF0YzJWeWRtVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjMFJCUVRCRU8wRkJSVEZFTEhsQ1FVRjFSaXhUUVVGUkxITkRRVUVyUXp0RFFVRkhPMEZCUVdwS0xHdEVRVUZwU2lKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhaW50X3NlcnZlcl8xID0gcmVxdWlyZShcIi4uL3BhaW50LXNlcnZlclwiKTtcclxuY2xhc3MgUGF0dGVybiBleHRlbmRzIHBhaW50X3NlcnZlcl8xLkFic3RyYWN0UGFpbnRTZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCA9ICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gMCA6IHcsIHggPSAwLCB5ID0gMCwgdmlldykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsICh3IGluc3RhbmNlb2YgU1ZHUGF0dGVybkVsZW1lbnQpID8gdyA6IFwicGF0dGVyblwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKCEodyBpbnN0YW5jZW9mIFNWR1BhdHRlcm5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInBhdHRlcm5Vbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvbmUoZGVlcCA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhdHRlcm4odGhpcy5jb250ZXh0LCBzdXBlci5jbG9uZU5vZGUoZGVlcCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGF0dGVybiA9IFBhdHRlcm47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBkR1Z5Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkJoZEhSbGNtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGWFFTeHJSRUZCYzBRN1FVRjVRblJFTEdGQlFYRkNMRk5CUVZFc2EwTkJRVEJFTzBsQlIzSkdMRmxCUVcxQ0xFOUJRV2RDTEVWQlFVVXNRMEZCTmtJc1JVRkJSU3hKUVVGWkxFTkJRVU1zUTBGQlF5eFpRVUZaTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZVN1VVRkRhRXNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUkdoRUxGbEJRVThzUjBGQlVDeFBRVUZQTEVOQlFWTTdVVUZGYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNVUlzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNKRExFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlEzUkVMRU5CUVVNN1VVRkRTQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEV0QlFVc3NRMEZCUXl4UFFVRm5RaXhKUVVGSk8xRkJReTlDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBZN1FVRnlRa1FzTUVKQmNVSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvcGF0dGVybi50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gX2RlZmF1bHRHZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG59XHJcbmV4cG9ydHMuX2RlZmF1bHRHZXQgPSBfZGVmYXVsdEdldDtcclxuZnVuY3Rpb24gX2RlZmF1bHRTZXQoZWxlbWVudCwgYXR0ciwgb3ZlcnJpZGUpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gKHR5cGVvZiBvdmVycmlkZSA9PT0gXCJ1bmRlZmluZWRcIikgPyB0aGlzIDogb3ZlcnJpZGU7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBTdHJpbmcodmFsdWUpKTtcclxufVxyXG5leHBvcnRzLl9kZWZhdWx0U2V0ID0gX2RlZmF1bHRTZXQ7XHJcbmV4cG9ydHMuaXNBdHRyaWJ1dGUgPSAob2JqKSA9PiB7XHJcbiAgICByZXR1cm4gb2JqICYmICh0eXBlb2Ygb2JqW1wiaW50ZXJwb2xhdGVcIl0gPT09IFwiZnVuY3Rpb25cIikgJiYgKHR5cGVvZiBvYmpbXCJwYXJzZVwiXSA9PT0gXCJmdW5jdGlvblwiKTtcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhSMGNtbGlkWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZWFIwY21saWRYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlkwRXNjVUpCUVcxRUxFOUJRVzFDTEVWQlFVVXNTVUZCV1R0SlFVTnNSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYUVRc1EwRkJRenRCUVVaRUxHdERRVVZETzBGQlJVUXNjVUpCUVhkRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVZrN1NVRkRja1lzVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4UFFVRlBMRkZCUVZFc1MwRkJTeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGJFVXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROVU1zUTBGQlF6dEJRVWhFTEd0RFFVZERPMEZCUlZrc1VVRkJRU3hYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUY1UWl4RlFVRjVRaXhGUVVGRk8wbEJRemxGTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRMjVITEVOQlFVTXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZS50c1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XHJcbmNvbnN0IGlkXzEgPSByZXF1aXJlKFwiLi4vaWRcIik7XHJcbmNsYXNzIFJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lID0gcnhqc18xLk9ic2VydmFibGUuaW50ZXJ2YWwoMCwgcnhqc18xLlNjaGVkdWxlci5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlVXBkYXRlcyA9IG5ldyByeGpzXzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX2F0dHJpYnV0ZUludGVycG9sYXRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlVXBkYXRlcy5idWZmZXJXaGVuKCgpID0+IHRoaXMuX2FuaW1hdGlvbkZyYW1lKS5zdWJzY3JpYmUoKHVwZGF0ZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZXMuZm9yRWFjaCgoeyBlbCwgYXR0cmlidXRlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnJlbmRlckF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gdGhpcy5fYXR0cmlidXRlSW50ZXJwb2xhdGlvbnNba2V5XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmFsUmVuZGVyID0gbm93ID4gKGludGVycG9sYXRpb24uc3RhcnQgKyBpbnRlcnBvbGF0aW9uLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSAoZmluYWxSZW5kZXIpID8gMSA6IGludGVycG9sYXRpb24uZWFzaW5nKChub3cgLSBpbnRlcnBvbGF0aW9uLnN0YXJ0KSAvIGludGVycG9sYXRpb24uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGF0dHJpYnV0ZS52YWwodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5lbC5yZW5kZXJBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5hbFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb24ucmVzb2x2ZShub3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUmVuZGVyZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcXVldWVBdHRyaWJ1dGVVcGRhdGUoYTEsIGEyLCBhMykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYTIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXR0cmlidXRlVXBkYXRlcy5uZXh0KHsgZWw6IGExLCBhdHRyaWJ1dGU6IHsgbmFtZTogYTIsIHZhbDogYTMgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGEyKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVVcGRhdGVzLm5leHQoeyBlbDogYTEsIGF0dHJpYnV0ZTogeyBuYW1lLCB2YWw6IGEyW25hbWVdIH0gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQXR0cmlidXRlSW50ZXJwb2xhdGlvbihlbCwgYXR0ciwgdmFsLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGlkXzEucmFuZG9tU2hvcnRTdHJpbmdJZCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW3sgbmFtZTogYXR0ciwgdmFsIH1dO1xyXG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVJbnRlcnBvbGF0aW9uc1trZXldID0geyBlbCwgYXR0cmlidXRlcywgc3RhcnQsIGR1cmF0aW9uLCBlYXNpbmcsIHJlc29sdmUgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5SZW5kZXJlci5faW5zdGFuY2UgPSBuZXcgUmVuZGVyZXIoKTtcclxuZXhwb3J0cy5SZW5kZXJlciA9IFJlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZ1WkdWeVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKeVpXNWtaWEpsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVWRCTEN0Q1FVRnpSRHRCUVVWMFJDdzRRa0ZCTkVNN1FVRTRRalZETzBsQlVVVTdVVUZJVVN4dlFrRkJaU3hIUVVGSExHbENRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3huUWtGQlV5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUTI1RkxITkNRVUZwUWl4SFFVRkhMRWxCUVVrc1kwRkJUeXhGUVVGdlJDeERRVUZETzFGQlEzQkdMRFpDUVVGM1FpeEhRVUUyUlN4RlFVRkZMRU5CUVVNN1VVRkZPVWNzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRiRVlzVFVGQlRTeEhRVUZITEVkQlFVY3NWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRemxDTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeFRRVUZUTEVWQlFVVXNSVUZCUlN4RlFVRkZPMmRDUVVOd1F5eEZRVUZGTEVOQlFVTXNaVUZCWlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNCRUxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEwZ3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkRla1FzVFVGQlRTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVONlJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRGVrVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRM3BITEdGQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVTdiMEpCUXpkRExFMUJRVTBzUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zWlVGQlpTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzaEVMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5JTEVWQlFVVXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU14UXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTTNRaXhEUVVGRE8xbEJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VFelFrMHNUVUZCVFN4RFFVRkRMRmRCUVZjN1VVRkRka0lzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVFJDVFN4dlFrRkJiMElzUTBGQmJVVXNSVUZCU3l4RlFVRkZMRVZCUVdFc1JVRkJSU3hGUVVGaE8xRkJReTlJTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBJc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNVMEZCVXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZGTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdaMEpCUXk5Q0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6bEZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN3NFFrRkJPRUlzUTBGQmJVVXNSVUZCU3l4RlFVRkZMRWxCUVU4c1JVRkJSU3hIUVVFMFFpeEZRVUZGTEZGQlFXZENMRVZCUVVVc1RVRkJjMEk3VVVGRE5Vd3NUVUZCVFN4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3hIUVVGSExFZEJRVWNzZDBKQlFXMUNMRVZCUVVVc1EwRkJRenRaUVVOc1F5eE5RVUZOTEV0QlFVc3NSMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGFFTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONlF5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRelZHTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTB3c1EwRkJRenM3UVVFelEyTXNhMEpCUVZNc1IwRkJSeXhKUVVGSkxGRkJRVkVzUlVGQlJTeERRVUZETzBGQlNqVkRMRFJDUVdkRVF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vcmVuZGVyZXIudHNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUnhcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yYW5kb21TaG9ydFN0cmluZ0lkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBaQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTmhMRkZCUVVFc2JVSkJRVzFDTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWQudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jbGFzcyBOdW1iZXJXcmFwcGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG4gPSAwKSB7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJXcmFwcGVyKHBhcnNlRmxvYXQoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlcldyYXBwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkID8gb3ZlcnJpZGUgOiB0aGlzKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE51bWJlcldyYXBwZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJXcmFwcGVyID0gTnVtYmVyV3JhcHBlcjtcclxuY2xhc3MgQXJyYXlXcmFwcGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyciA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5hcnIgPSBhcnI7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnIuam9pbihcIlxcdFwiKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIlxcdFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheVdyYXBwZXIodGhpcy5hcnIubWFwKChhLCBpKSA9PiBhLnBhcnNlKChpID49IHRva3MubGVuZ3RoKSA/IG51bGwgOiB0b2tzW2ldKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheVdyYXBwZXIodGhpcy5hcnIubWFwKGEgPT4gYS5wYXJzZShudWxsKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQgPyBvdmVycmlkZSA6IHRoaXMpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlXcmFwcGVyKHRoaXMuYXJyLm1hcCgocywgaSkgPT4gcy5pbnRlcnBvbGF0ZShmcm9tLmFycltpXSwgdCkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFycmF5V3JhcHBlciA9IEFycmF5V3JhcHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZDNKaGNIQmxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SjNjbUZ3Y0dWeWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxHOUVRVUY1UXp0QlFVVjZRenRKUVVORkxGbEJRVzFDTEVsQlFWa3NRMEZCUXp0UlFVRmlMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3U1VGQlJ5eERRVUZETzBsQlF6ZENMRkZCUVZFN1VVRkRZaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNelFpeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVF5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTTNRaXhEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVms3VVVGRE1VTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMmhFTEVOQlFVTTdTVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCZDBJN1VVRkRjRVVzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRjRVlzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4SlFVRnRRaXhGUVVGRkxFTkJRVk03VVVGREwwTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1lVRkJZU3hEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRja1FzUTBGQlF6dERRVU5HTzBGQmNrSkVMSE5EUVhGQ1F6dEJRVVZFTzBsQlEwVXNXVUZCYlVJc1RVRkJWeXhGUVVGRk8xRkJRV0lzVVVGQlJ5eEhRVUZJTEVkQlFVY3NRMEZCVlR0SlFVVm9ReXhEUVVGRE8wbEJRMDBzVVVGQlVUdFJRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETjBJc1RVRkJUU3hEUVVGRExFbEJRVWtzV1VGQldTeERRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1SExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxGbEJRVmtzUTBGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRU5CUVVNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXVHRSUVVNeFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCUXl4UFFVRnRRaXhGUVVGRkxFbEJRVmtzUlVGQlJTeFJRVUV3UWp0UlFVTjBSU3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTndSaXhEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEVsQlFYRkNMRVZCUVVVc1EwRkJVenRSUVVOcVJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4WlFVRlpMRU5CUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0JHTEVOQlFVTTdRMEZEUmp0QlFYaENSQ3h2UTBGM1FrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy93cmFwcGVycy50c1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbm9uX3JlbmRlcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9ub24tcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgQ2xpcFBhdGggZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJjbGlwUGF0aFwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnRVbml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza0NvbnRlbnRVbml0c1wiLCBjb250ZW50VW5pdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNsaXBQYXRoID0gQ2xpcFBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyeHBjQzF3WVhSb0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTJ4cGNDMXdZWFJvTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYzBSQlFUQkVPMEZCYTBJeFJDeGpRVUZ6UWl4VFFVRlJMSE5EUVVFd1JEdEpRVU4wUml4WlFVRnRRaXhQUVVGblFpeEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeExRVUU0UXl4RlFVRkZMRmxCUVhGRU8xRkJRM2hNTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRVZpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRlRPMUZCUldwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRExFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UXl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMElzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dERRVU5HTzBGQmRrSkVMRFJDUVhWQ1F5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvY2xpcC1wYXRoLnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBub25fcmVuZGVyYWJsZV8xLkFic3RyYWN0Tm9uUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibWFya2VyXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hcmtlciA9IE1hcmtlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGeWEyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJXRnlhMlZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYzBSQlFXOUdPMEZCYjBKd1JpeFpRVUZ2UWl4VFFVRlJMSE5EUVVFd1JEdEpRVU53Uml4WlFVRlpMRTlCUVdkQ0xFVkJRVVVzUzBGQk5rUTdVVUZEZWtZc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNkMEpCU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvbWFya2VyLnRzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBub25fcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL25vbi1yZW5kZXJhYmxlXCIpO1xyXG5jbGFzcyBNYXNrIGV4dGVuZHMgbm9uX3JlbmRlcmFibGVfMS5BYnN0cmFjdE5vblJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdywgaCwgeCwgeSwgdW5pdHMsIGNvbnRlbnRVbml0cykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibWFza1wiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGREZWYodGhpcyk7XHJcbiAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnRVbml0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwibWFza0NvbnRlbnRVbml0c1wiLCBjb250ZW50VW5pdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hc2sgPSBNYXNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0Z6YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYzJzdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4elJFRkJNRVE3UVVGcFFqRkVMRlZCUVd0Q0xGTkJRVkVzYzBOQlFYTkVPMGxCUXpsRkxGbEJRVzFDTEU5QlFXZENMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRXRCUVRoRExFVkJRVVVzV1VGQmNVUTdVVUZEZUV3c1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVUk9MRmxCUVU4c1IwRkJVQ3hQUVVGUExFTkJRVk03VVVGRmFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETVVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFTXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBETEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVOQlFVTTdTVUZEU0N4RFFVRkRPME5CUTBZN1FVRjJRa1FzYjBKQmRVSkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL21hc2sudHNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdyYWRpZW50XzEgPSByZXF1aXJlKFwiLi4vZ3JhZGllbnRcIik7XHJcbmNsYXNzIExpbmVhckdyYWRpZW50IGV4dGVuZHMgZ3JhZGllbnRfMS5BYnN0cmFjdEdyYWRpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwibGluZWFyR3JhZGllbnRcIiwgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxpbmVhckdyYWRpZW50ID0gTGluZWFyR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHbHVaV0Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liR2x1WldGeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc01FTkJRVEpGTzBGQlZ6TkZMRzlDUVVFMFFpeFRRVUZSTERKQ1FVRnhSVHRKUVVOMlJ5eFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJXU3hGUVVGRkxFdEJRWEZGTzFGQlF5OUhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9saW5lYXIudHNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdyYWRpZW50XzEgPSByZXF1aXJlKFwiLi4vZ3JhZGllbnRcIik7XHJcbmNsYXNzIFJhZGlhbEdyYWRpZW50IGV4dGVuZHMgZ3JhZGllbnRfMS5BYnN0cmFjdEdyYWRpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0b3BzLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicmFkaWFsR3JhZGllbnRcIiwgc3RvcHMsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gUmFkaWFsR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtRmthV0ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljbUZrYVdGc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc01FTkJRVEpGTzBGQldUTkZMRzlDUVVFMFFpeFRRVUZSTERKQ1FVRnhSVHRKUVVOMlJ5eFpRVUZaTEU5QlFXZENMRVZCUVVVc1MwRkJXU3hGUVVGRkxFdEJRWEZGTzFGQlF5OUhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9yYWRpYWwudHNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRvY3VtZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vZG9jdW1lbnRcIik7XHJcbmNvbnN0IGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50XCIpO1xyXG5jb25zdCBncm91cF8xID0gcmVxdWlyZShcIi4vZ3JvdXBcIik7XHJcbmNsYXNzIEV4dGVybmFsU1ZHIGV4dGVuZHMgZ3JvdXBfMS5Hcm91cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkb2MsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgYXR0cnMpO1xyXG4gICAgICAgIGRvYy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbXBvcnRlZE5vZGUgPSBjb250ZXh0LndpbmRvdy5kb2N1bWVudC5pbXBvcnROb2RlKGNoaWxkLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQoaW1wb3J0ZWROb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkV4dGVybmFsU1ZHID0gRXh0ZXJuYWxTVkc7XHJcbmZ1bmN0aW9uIEV4dGVybmFsQ29tcG9uZW50KHVybCwgb3JpZ2luKSB7XHJcbiAgICBjb25zdCB4bWxEb2N1bWVudF9wID0gZG9jdW1lbnRfMS5tYWtlUmVxdWVzdChcIkdFVFwiLCB1cmwpO1xyXG4gICAgY29uc3QgZG9jX3AgPSB4bWxEb2N1bWVudF9wLnRoZW4oKHhtbCkgPT4gbmV3IGRvY3VtZW50XzEuU1ZHRG9jdW1lbnQoY29tcG9uZW50XzEuQ29tcG9uZW50LmdldENvbnRleHQoKSwgeG1sKSk7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb21wb25lbnRfMS5Db21wb25lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihvcmlnaW4pO1xyXG4gICAgICAgICAgICBkb2NfcC50aGVuKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvYy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydGVkTm9kZSA9IGNvbXBvbmVudF8xLkNvbXBvbmVudC5nZXRDb250ZXh0KCkud2luZG93LmRvY3VtZW50LmltcG9ydE5vZGUoY2hpbGQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGltcG9ydGVkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zb3VyY2UtdXJsXCIsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLkV4dGVybmFsQ29tcG9uZW50ID0gRXh0ZXJuYWxDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYaDBaWEp1WVd3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpsZUhSbGNtNWhiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVTkJMRFpEUVVFd1JEdEJRVVV4UkN3eVEwRkJkME03UVVGRGVFTXNiVU5CUVdkRE8wRkJSV2hETEdsQ1FVRjVRaXhUUVVGUkxHRkJRVXM3U1VGRGNFTXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFZEJRV2RDTEVWQlFVVXNTMEZCYzBNN1VVRkRjRVlzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOMFFpeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTzFsQlF6ZENMRTFCUVUwc1dVRkJXU3hIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEY2tVc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTjZRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdRMEZEUmp0QlFWSkVMR3REUVZGRE8wRkJSVVFzTWtKQlFXdERMRWRCUVZjc1JVRkJSU3hOUVVGblF6dEpRVU0zUlN4TlFVRk5MR0ZCUVdFc1IwRkJSeXh6UWtGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNNVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMSE5DUVVGWExFTkJRVU1zY1VKQlFWTXNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaEdMRTFCUVUwc1EwRkJReXhMUVVGTkxGTkJRVkVzY1VKQlFWTTdVVUZETlVJN1dVRkRSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEWkN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVTdaMEpCUTJwQ0xFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVU3YjBKQlF6ZENMRTFCUVUwc1dVRkJXU3hIUVVGSExIRkNRVUZUTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU53Uml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTjZRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYkVRc1EwRkJRenRMUVVOR0xFTkJRVU03UVVGRFNpeERRVUZETzBGQlprUXNPRU5CWlVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9leHRlcm5hbC50c1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWFzaW5nXzEgPSByZXF1aXJlKFwiLi4vLi4vYW5pbWF0aW9uL2Vhc2luZ1wiKTtcclxuY29uc3Qgcm90YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vYXR0cmlidXRlcy90cmFuc2Zvcm1zL3JvdGF0ZVwiKTtcclxuY29uc3Qgc2NhbGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2NhbGVcIik7XHJcbmNvbnN0IHRyYW5zbGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy90cmFuc2xhdGVcIik7XHJcbmNvbnN0IGdyb3VwXzEgPSByZXF1aXJlKFwiLi9ncm91cFwiKTtcclxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgZ3JvdXBfMS5Hcm91cCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW4sIGVhc2luZyA9IGVhc2luZ18xLmxpbmVhcikge1xyXG4gICAgICAgIHN1cGVyKENvbXBvbmVudC5DT05URVhUKTtcclxuICAgICAgICB0aGlzLmVhc2luZyA9IGVhc2luZztcclxuICAgICAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1zID0gW25ldyB0cmFuc2xhdGVfMS5UcmFuc2xhdGVfVHJhbnNmb3JtKCksIG5ldyByb3RhdGVfMS5Sb3RhdGVfVHJhbnNmb3JtKDApLCBuZXcgc2NhbGVfMS5TY2FsZV9UcmFuc2Zvcm0oKV07XHJcbiAgICAgICAgaWYgKG9yaWdpbikge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1zLnB1c2gobmV3IHRyYW5zbGF0ZV8xLlRyYW5zbGF0ZV9UcmFuc2Zvcm0oLW9yaWdpbi54LCAtb3JpZ2luLnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3Jtcyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Q29udGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50LkNPTlRFWFQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0Q29udGV4dChjb250ZXh0KSB7XHJcbiAgICAgICAgQ29tcG9uZW50LkNPTlRFWFQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG4gICAgbW92ZVRvKHgsIHksIGR1cmF0aW9uID0gMCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybS50cmFuc2xhdGVcIiwgbmV3IHRyYW5zbGF0ZV8xLlRyYW5zbGF0ZV9UcmFuc2Zvcm0oeCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlQXR0cmlidXRlKFwidHJhbnNmb3JtLnRyYW5zbGF0ZVwiLCBuZXcgdHJhbnNsYXRlXzEuVHJhbnNsYXRlX1RyYW5zZm9ybSh4LCB5KSwgZHVyYXRpb24sIHRoaXMuZWFzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByb3RhdGUoYW5nbGUsIGR1cmF0aW9uID0gMCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybS5yb3RhdGVcIiwgbmV3IHJvdGF0ZV8xLlJvdGF0ZV9UcmFuc2Zvcm0oYW5nbGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUF0dHJpYnV0ZShcInRyYW5zZm9ybS5yb3RhdGVcIiwgbmV3IHJvdGF0ZV8xLlJvdGF0ZV9UcmFuc2Zvcm0oYW5nbGUpLCBkdXJhdGlvbiwgdGhpcy5lYXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNjYWxlKHgsIHkgPSB4LCBkdXJhdGlvbiA9IDApIHtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm0uc2NhbGVcIiwgbmV3IHNjYWxlXzEuU2NhbGVfVHJhbnNmb3JtKHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUF0dHJpYnV0ZShcInRyYW5zZm9ybS5zY2FsZVwiLCBuZXcgc2NhbGVfMS5TY2FsZV9UcmFuc2Zvcm0oeCwgeSksIGR1cmF0aW9uLCB0aGlzLmVhc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2hpZGRlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hpZGRlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2JVUkJRV2RGTzBGQlJXaEZMQ3RFUVVGelJUdEJRVU4wUlN3MlJFRkJiMFU3UVVGRGNFVXNjVVZCUVRSRk8wRkJSVFZGTEcxRFFVRm5RenRCUVVWb1F5eGxRVUYxUWl4VFFVRlJMR0ZCUVVzN1NVRlRiRU1zV1VGQldTeE5RVUZwUXl4RlFVRlpMRk5CUVhsQ0xHVkJRVTA3VVVGRGRFWXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVVE0UWl4WFFVRk5MRWRCUVU0c1RVRkJUU3hEUVVGNVFqdFJRVVJvUml4WlFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSM1JDTEUxQlFVMHNWVUZCVlN4SFFVRkhMRU5CUVVNc1NVRkJTU3dyUWtGQmJVSXNSVUZCUlN4RlFVRkZMRWxCUVVrc2VVSkJRV2RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3gxUWtGQlpTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXZSaXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFnc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEN0Q1FVRnRRaXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycEZMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZkQlFWY3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBsQlprMHNUVUZCVFN4RFFVRkRMRlZCUVZVN1VVRkRkRUlzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVU5OTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJaMEk3VVVGRGRrTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRE9VSXNRMEZCUXp0SlFWZE5MRTFCUVUwc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEZkQlFXMUNMRU5CUVVNN1VVRkRkRVFzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4SlFVRkpMQ3RDUVVGdFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZGTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4SlFVRkpMQ3RDUVVGdFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNKSExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNUVUZCVFN4RFFVRkRMRXRCUVdFc1JVRkJSU3hYUVVGdFFpeERRVUZETzFGQlF5OURMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzU1VGQlNTeDVRa0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hKUVVGSkxIbENRVUZuUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRhRWNzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1EwRkJVeXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEZkQlFXMUNMRU5CUVVNN1VVRkRla1FzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpMSFZDUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVVzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVsQlFVa3NkVUpCUVdVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0zUml4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVOTkxFbEJRVWs3VVVGRFZDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNaQ0xFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM1JDTEVOQlFVTTdTVUZEU0N4RFFVRkRPME5CUTBZN1FVRnNSRVFzT0VKQmEwUkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBJTklUSUFMX05VTV9TQU1QTEVTID0gMTc7XHJcbmNvbnN0IE5FV1RPTl9JVEVSQVRJT05TID0gNTtcclxuY29uc3QgX2NhbGNDb25zdGFudHMgPSAocDEsIHAyKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGE6IDEgLSAzICogcDIgKyAzICogcDEsXHJcbiAgICAgICAgYjogMyAqIHAyIC0gNiAqIHAxLFxyXG4gICAgICAgIGM6IDMgKiBwMSxcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IF9ldmFsdWF0ZUJlemllciA9ICh0LCBjKSA9PiAoKGMuYSAqIHQgKyBjLmIpICogdCArIGMuYykgKiB0O1xyXG5jb25zdCBfZXZhbHVhdGVCZXppZXJEZXJpdmF0aXZlID0gKHQsIGMpID0+ICgzICogYy5hICogdCArIDIgKiBjLmIpICogdCArIGMuYztcclxuY29uc3QgX2NhbGNURnJvbVggPSAoc2FtcGxlcywgeCwgYykgPT4ge1xyXG4gICAgY29uc3QgaWR4ID0gTWF0aC5taW4oTWF0aC5tYXgoc2FtcGxlcy5maW5kSW5kZXgoc2FtcGxlID0+IHNhbXBsZSA+IHgpIC0gMSwgMSksIHNhbXBsZXMubGVuZ3RoIC0gMSk7XHJcbiAgICBjb25zdCBkID0gKHggLSBzYW1wbGVzW2lkeF0pIC8gKHNhbXBsZXNbaWR4ICsgMV0gLSBzYW1wbGVzW2lkeF0pO1xyXG4gICAgbGV0IGVzdGltYXRlID0gKGQgKyBpZHggLSAxKSAvIChJTklUSUFMX05VTV9TQU1QTEVTIC0gMSk7XHJcbiAgICBmb3IgKGxldCBpdGVyID0gMDsgaXRlciA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2l0ZXIpIHtcclxuICAgICAgICBjb25zdCBzbG9wZSA9IF9ldmFsdWF0ZUJlemllckRlcml2YXRpdmUoZXN0aW1hdGUsIGMpO1xyXG4gICAgICAgIGlmIChzbG9wZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZXN0aW1hdGUgLT0gKF9ldmFsdWF0ZUJlemllcihlc3RpbWF0ZSwgYykgLSB4KSAvIHNsb3BlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVzdGltYXRlO1xyXG59O1xyXG5leHBvcnRzLmN1YmljQmV6aWVyID0gKHAxeCwgcDF5LCBwMngsIHAyeSkgPT4ge1xyXG4gICAgaWYgKHAxeCA9PT0gcDF5ICYmIHAyeCA9PT0gcDJ5KSB7XHJcbiAgICAgICAgcmV0dXJuICh4KSA9PiB4O1xyXG4gICAgfVxyXG4gICAgY29uc3QgeENvbnN0YW50cyA9IF9jYWxjQ29uc3RhbnRzKHAxeCwgcDJ4KTtcclxuICAgIGNvbnN0IHlDb25zdGFudHMgPSBfY2FsY0NvbnN0YW50cyhwMXksIHAyeSk7XHJcbiAgICBjb25zdCBzYW1wbGVzID0gbmV3IEZsb2F0MzJBcnJheShJTklUSUFMX05VTV9TQU1QTEVTKTtcclxuICAgIGZvciAobGV0IHNhbXBsZSA9IDA7IHNhbXBsZSA8IElOSVRJQUxfTlVNX1NBTVBMRVM7ICsrc2FtcGxlKSB7XHJcbiAgICAgICAgc2FtcGxlc1tzYW1wbGVdID0gX2V2YWx1YXRlQmV6aWVyKHNhbXBsZSAvIChJTklUSUFMX05VTV9TQU1QTEVTIC0gMSksIHhDb25zdGFudHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh4KSA9PiBfZXZhbHVhdGVCZXppZXIoX2NhbGNURnJvbVgoc2FtcGxlcywgeCwgeENvbnN0YW50cyksIHlDb25zdGFudHMpO1xyXG59O1xyXG5jb25zdCBmbGlwID0gKGVhc2UpID0+ICh0KSA9PiAxIC0gZWFzZSgxIC0gdCk7XHJcbmNvbnN0IGlub3V0ID0gKGVhc2VJbiwgZWFzZU91dCkgPT4ge1xyXG4gICAgcmV0dXJuICh0KSA9PiB0IDwgMC41ID8gZWFzZUluKHQgKiAyKSAvIDIgOiBlYXNlT3V0KDIgKiB0IC0gMSkgLyAyICsgMC41O1xyXG59O1xyXG5jb25zdCBzID0gMS43MDE1ODtcclxuY29uc3QgcCA9IDAuMDc1O1xyXG5leHBvcnRzLmxpbmVhciA9ICh0KSA9PiB0O1xyXG5leHBvcnRzLnF1YWRyYXRpY0luID0gKHQpID0+IE1hdGgucG93KHQsIDIpO1xyXG5leHBvcnRzLnF1YWRyYXRpY091dCA9IGZsaXAoZXhwb3J0cy5xdWFkcmF0aWNJbik7XHJcbmV4cG9ydHMucXVhZHJhdGljID0gaW5vdXQoZXhwb3J0cy5xdWFkcmF0aWNJbiwgZXhwb3J0cy5xdWFkcmF0aWNPdXQpO1xyXG5leHBvcnRzLmN1YmljSW4gPSAodCkgPT4gTWF0aC5wb3codCwgMyk7XHJcbmV4cG9ydHMuY3ViaWNPdXQgPSBmbGlwKGV4cG9ydHMuY3ViaWNJbik7XHJcbmV4cG9ydHMuY3ViaWMgPSBpbm91dChleHBvcnRzLmN1YmljSW4sIGV4cG9ydHMuY3ViaWNPdXQpO1xyXG5leHBvcnRzLnF1YXJ0aWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCA0KTtcclxuZXhwb3J0cy5xdWFydGljT3V0ID0gZmxpcChleHBvcnRzLnF1YXJ0aWNJbik7XHJcbmV4cG9ydHMucXVhcnRpYyA9IGlub3V0KGV4cG9ydHMucXVhcnRpY0luLCBleHBvcnRzLnF1YXJ0aWNPdXQpO1xyXG5leHBvcnRzLnF1aW50aWNJbiA9ICh0KSA9PiBNYXRoLnBvdyh0LCA1KTtcclxuZXhwb3J0cy5xdWludGljT3V0ID0gZmxpcChleHBvcnRzLnF1aW50aWNJbik7XHJcbmV4cG9ydHMucXVpbnRpYyA9IGlub3V0KGV4cG9ydHMucXVpbnRpY0luLCBleHBvcnRzLnF1aW50aWNPdXQpO1xyXG5leHBvcnRzLnNpbmVJbiA9ICh0KSA9PiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTtcclxuZXhwb3J0cy5zaW5lT3V0ID0gZmxpcChleHBvcnRzLnNpbmVJbik7XHJcbmV4cG9ydHMuc2luZSA9IGlub3V0KGV4cG9ydHMuc2luZUluLCBleHBvcnRzLnNpbmVPdXQpO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsSW4gPSAodCkgPT4gTWF0aC5wb3coMiwgKDEwICogKHQgLSAxKSkpO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsT3V0ID0gZmxpcChleHBvcnRzLmV4cG9uZW50aWFsSW4pO1xyXG5leHBvcnRzLmV4cG9uZW50aWFsID0gaW5vdXQoZXhwb3J0cy5leHBvbmVudGlhbEluLCBleHBvcnRzLmV4cG9uZW50aWFsT3V0KTtcclxuZXhwb3J0cy5jaXJjdWxhckluID0gKHQpID0+IDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHQsIDIpKTtcclxuZXhwb3J0cy5jaXJjdWxhck91dCA9IGZsaXAoZXhwb3J0cy5jaXJjdWxhckluKTtcclxuZXhwb3J0cy5jaXJjdWxhciA9IGlub3V0KGV4cG9ydHMuY2lyY3VsYXJJbiwgZXhwb3J0cy5jaXJjdWxhck91dCk7XHJcbmV4cG9ydHMuYmFja0luID0gKHQpID0+IE1hdGgucG93KHQsIDIpICogKChzICsgMSkgKiB0IC0gcyk7XHJcbmV4cG9ydHMuYmFja091dCA9IGZsaXAoZXhwb3J0cy5iYWNrSW4pO1xyXG5leHBvcnRzLmJhY2sgPSBpbm91dChleHBvcnRzLmJhY2tJbiwgZXhwb3J0cy5iYWNrT3V0KTtcclxuZXhwb3J0cy5lbGFzdGljSW4gPSAodCkgPT4gTWF0aC5wb3coMiwgKC0xMCAqIHQpKSAqIE1hdGguc2luKCh0IC0gcCkgKiAoMiAqIE1hdGguUEkpIC8gMC4zKSArIDE7XHJcbmV4cG9ydHMuZWxhc3RpY091dCA9IGZsaXAoZXhwb3J0cy5lbGFzdGljSW4pO1xyXG5leHBvcnRzLmVsYXN0aWMgPSBpbm91dChleHBvcnRzLmVsYXN0aWNJbiwgZXhwb3J0cy5lbGFzdGljT3V0KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVpXRnphVzVuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzVFVGQlRTeHRRa0ZCYlVJc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGREwwSXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZSTlVJc1RVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZWTEVWQlFVVXNSVUZCVlN4RlFVRmhMRVZCUVVVN1NVRkRNMFFzVFVGQlRTeERRVUZETzFGQlEwd3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZPMUZCUTNSQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRk8xRkJRMnhDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSVHRMUVVOV0xFTkJRVU03UVVGRFNpeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZaTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGNrWXNUVUZCVFN4NVFrRkJlVUlzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZGYWtjc1RVRkJUU3hYUVVGWExFZEJRVWNzUTBGQlF5eFBRVUZ4UWl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGWkxFVkJRVlVzUlVGQlJUdEpRVU0zUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnVSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1VzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtRc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1IwRkJSeXhwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM0JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMSGxDUVVGNVFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUWl4TFFVRkxMRU5CUVVNN1VVRkRVaXhEUVVGRE8xRkJRMFFzVVVGQlVTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRiRUlzUTBGQlF5eERRVUZETzBGQlJWY3NVVUZCUVN4WFFVRlhMRWRCUVVjc1EwRkJReXhIUVVGWExFVkJRVVVzUjBGQlZ5eEZRVUZGTEVkQlFWY3NSVUZCUlN4SFFVRlhMRVZCUVhsQ0xFVkJRVVU3U1VGRGRrY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUTBRc1RVRkJUU3hWUVVGVkxFZEJRVWNzWTBGQll5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNMVF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6VkRMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzV1VGQldTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03U1VGRGRFUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEUxQlFVMHNSMEZCUnl4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpWRUxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4bFFVRmxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTVUZEY0VZc1EwRkJRenRKUVVORUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1pVRkJaU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBGQlEzcEdMRU5CUVVNc1EwRkJRenRCUVVWR0xFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNTVUZCTWtJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpkRkxFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNUVUZCTmtJc1JVRkJSU3hQUVVFNFFpeEZRVUZGTEVWQlFVVTdTVUZET1VVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOdVJpeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03UVVGRGJFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJTVWdzVVVGQlFTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVV4UWl4UlFVRkJMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU03UVVGRGNFTXNVVUZCUVN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTnFReXhSUVVGQkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNiVUpCUVZjc1JVRkJSU3h2UWtGQldTeERRVUZETEVOQlFVTTdRVUZGTjBNc1VVRkJRU3hQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlFTeERRVUZETzBGQlEyaERMRkZCUVVFc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTjZRaXhSUVVGQkxFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNaVUZCVHl4RlFVRkZMR2RDUVVGUkxFTkJRVU1zUTBGQlF6dEJRVVZxUXl4UlFVRkJMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU03UVVGRGJFTXNVVUZCUVN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExHbENRVUZUTEVOQlFVTXNRMEZCUXp0QlFVTTNRaXhSUVVGQkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNhVUpCUVZNc1JVRkJSU3hyUWtGQlZTeERRVUZETEVOQlFVTTdRVUZGZGtNc1VVRkJRU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlFTeERRVUZETzBGQlEyeERMRkZCUVVFc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eHBRa0ZCVXl4RFFVRkRMRU5CUVVNN1FVRkROMElzVVVGQlFTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMR2xDUVVGVExFVkJRVVVzYTBKQlFWVXNRMEZCUXl4RFFVRkRPMEZCUlhaRExGRkJRVUVzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjBSQ3hSUVVGQkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCVFN4RFFVRkRMRU5CUVVNN1FVRkRka0lzVVVGQlFTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMR05CUVUwc1JVRkJSU3hsUVVGUExFTkJRVU1zUTBGQlF6dEJRVVU1UWl4UlFVRkJMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRE8wRkJRMjVFTEZGQlFVRXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXh4UWtGQllTeERRVUZETEVOQlFVTTdRVUZEY2tNc1VVRkJRU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEhGQ1FVRmhMRVZCUVVVc2MwSkJRV01zUTBGQlF5eERRVUZETzBGQlJXNUVMRkZCUVVFc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCUVN4RFFVRkRMRVZCUVVrc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF6dEJRVU4wUkN4UlFVRkJMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zYTBKQlFWVXNRMEZCUXl4RFFVRkRPMEZCUXk5Q0xGRkJRVUVzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4clFrRkJWU3hGUVVGRkxHMUNRVUZYTEVOQlFVTXNRMEZCUXp0QlFVVXhReXhSUVVGQkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1UwRkJRU3hEUVVGRExFVkJRVWtzUTBGQlF5eERRVUZCTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRia1FzVVVGQlFTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVUwc1EwRkJReXhEUVVGRE8wRkJRM1pDTEZGQlFVRXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhqUVVGTkxFVkJRVVVzWlVGQlR5eERRVUZETEVOQlFVTTdRVUZGT1VJc1VVRkJRU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRk5CUVVFc1EwRkJReXhGUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZUVZc1VVRkJRU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEdsQ1FVRlRMRU5CUVVNc1EwRkJRenRCUVVNM1FpeFJRVUZCTEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc2FVSkJRVk1zUlVGQlJTeHJRa0ZCVlN4RFFVRkRMRU5CUVVNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi4vdHJhbnNmb3JtXCIpO1xyXG5jbGFzcyBSb3RhdGVfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEsIHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwicm90YXRlXCIpO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hfSAke3RoaXMueH0gJHt0aGlzLnl9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdGF0ZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgcGFyc2VGbG9hdCh0b2tzWzJdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvdGF0ZV9UcmFuc2Zvcm0oMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm90YXRlX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS54LCB0aGlzLngsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS55LCB0aGlzLnksIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJvdGF0ZV9UcmFuc2Zvcm0gPSBSb3RhdGVfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbTkwWVhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY205MFlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNkVVJCUVRSRE8wRkJRelZETERSRFFVRjVRenRCUVVWNlF5eHpRa0ZCT0VJc1UwRkJVU3h4UWtGQlV6dEpRVU0zUXl4WlFVRnRRaXhEUVVGVExFVkJRVk1zU1VGQldTeERRVUZETEVWQlFWTXNTVUZCV1N4RFFVRkRPMUZCUTNSRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVUkRMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVkU3VVVGQlV5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdEpRVVY0UlN4RFFVRkRPMGxCUTAwc1NVRkJTVHRSUVVOVUxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRnJRanRSUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdkQ1FVRm5RaXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMFlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrTXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQmMwSXNSVUZCUlN4RFFVRlRPMUZCUTJ4RUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdkQ1FVRm5RaXhEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE5VY3NRMEZCUXp0RFFVTkdPMEZCYkVKRUxEUkRRV3RDUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9yb3RhdGUudHNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIFVuaWZvcm1TY2FsZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IocyA9IDEpIHtcclxuICAgICAgICBzdXBlcihcInNjYWxlXCIpO1xyXG4gICAgICAgIHRoaXMucyA9IHM7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnMudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5pZm9ybVNjYWxlX1RyYW5zZm9ybShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5pZm9ybVNjYWxlX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5zLCB0aGlzLnMsIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlVuaWZvcm1TY2FsZV9UcmFuc2Zvcm0gPSBVbmlmb3JtU2NhbGVfVHJhbnNmb3JtO1xyXG5jbGFzcyBTY2FsZV9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDEsIHkgPSB4KSB7XHJcbiAgICAgICAgc3VwZXIoXCJzY2FsZVwiKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNjYWxlX1RyYW5zZm9ybShwYXJzZUZsb2F0KHRva3NbMF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGVfVHJhbnNmb3JtKHBhcnNlRmxvYXQodG9rc1swXSksIHBhcnNlRmxvYXQodG9rc1sxXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNjYWxlX1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNjYWxlX1RyYW5zZm9ybShpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS54LCB0aGlzLngsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS55LCB0aGlzLnksIHQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNjYWxlX1RyYW5zZm9ybSA9IFNjYWxlX1RyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJOaGJHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKelkyRnNaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSFZFUVVFMFF6dEJRVU0xUXl3MFEwRkJlVU03UVVGRmVrTXNORUpCUVc5RExGTkJRVkVzY1VKQlFWTTdTVUZEYmtRc1dVRkJiVUlzU1VGQldTeERRVUZETzFGQlF6bENMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVVJGTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1NVRkZhRU1zUTBGQlF6dEpRVU5OTEVsQlFVazdVVUZEVkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wbEJRMDBzVTBGQlV5eERRVUZETEVkQlFXdENPMUZCUTJwRExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMSE5DUVVGelFpeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEhOQ1FVRnpRaXhGUVVGRkxFTkJRVU03VVVGRGRFTXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQk5FSXNSVUZCUlN4RFFVRlRPMUZCUTNoRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEhOQ1FVRnpRaXhEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRPVVFzUTBGQlF6dERRVU5HTzBGQmFrSkVMSGRFUVdsQ1F6dEJRVVZFTEhGQ1FVRTJRaXhUUVVGUkxIRkNRVUZUTzBsQlF6VkRMRmxCUVcxQ0xFbEJRVmtzUTBGQlF5eEZRVUZUTEVsQlFWa3NRMEZCUXp0UlFVTndSQ3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZFUlN4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGWk8xRkJRVk1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0SlFVVjBSQ3hEUVVGRE8wbEJRMDBzU1VGQlNUdFJRVU5VTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGRFRTeFRRVUZUTEVOQlFVTXNSMEZCYTBJN1VVRkRha01zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzUkNMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUkN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlJTeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJjVUlzUlVGQlJTeERRVUZUTzFGQlEycEVMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUTBGQlF5eHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwR0xFTkJRVU03UTBGRFJqdEJRWFJDUkN3d1EwRnpRa01pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9zY2FsZS50c1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcclxuY2xhc3MgVHJhbnNsYXRlX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICBzdXBlcihcInRyYW5zbGF0ZVwiKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBhcmdzKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fWA7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRlX1RyYW5zZm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZV9UcmFuc2Zvcm0oaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ueCwgdGhpcy54LCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ueSwgdGhpcy55LCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2xhdGVfVHJhbnNmb3JtID0gVHJhbnNsYXRlX1RyYW5zZm9ybTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTnNZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkSEpoYm5Oc1lYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNkVVJCUVRSRE8wRkJRelZETERSRFFVRjVRenRCUVVWNlF5eDVRa0ZCYVVNc1UwRkJVU3h4UWtGQlV6dEpRVU5vUkN4WlFVRnRRaXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTTdVVUZEY0VRc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJFWXNUVUZCUXl4SFFVRkVMRU5CUVVNc1EwRkJXVHRSUVVGVExFMUJRVU1zUjBGQlJDeERRVUZETEVOQlFWazdTVUZGZEVRc1EwRkJRenRKUVVOTkxFbEJRVWs3VVVGRFZDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wbEJRMDBzVTBGQlV5eERRVUZETEVkQlFXdENPMUZCUTJwRExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETlVJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4wUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORkxFTkJRVU03VVVGRFNDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRMjVETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRWGxDTEVWQlFVVXNRMEZCVXp0UlFVTnlSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXh4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNN1EwRkRSanRCUVhSQ1JDeHJSRUZ6UWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvdHJhbnNsYXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgRm9yZWlnbk9iamVjdCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImZvcmVpZ25PYmplY3RcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkSFRNTChodG1sKSB7XHJcbiAgICAgICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgIH1cclxuICAgIHJlbW92ZShodG1sKSB7XHJcbiAgICAgICAgdGhpcy5fbm9kZS5yZW1vdmVDaGlsZChodG1sKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZvcmVpZ25PYmplY3QgPSBGb3JlaWduT2JqZWN0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labTl5WldsbmJpMXZZbXBsWTNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUptYjNKbGFXZHVMVzlpYW1WamRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEaERRVUZwUnp0QlFWTnFSeXh0UWtGQk1rSXNVMEZCVVN3clFrRkJlVVU3U1VGRE1VY3NXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRV2xGTzFGQlF6ZEdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzWlVGQlpTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRFRTeFBRVUZQTEVOQlFVTXNTVUZCYVVJN1VVRkRPVUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVTk5MRTFCUVUwc1EwRkJReXhKUVVGcFFqdFJRVU0zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wTkJRMFk3UVVGV1JDeHpRMEZWUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ZvcmVpZ24tb2JqZWN0LnRzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vcmVuZGVyYWJsZVwiKTtcclxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyByZW5kZXJhYmxlXzEuQWJzdHJhY3RSZW5kZXJhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJpbWFnZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbWFnZSA9IEltYWdlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzFoWjJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYldGblpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVUxQkxEaERRVUVyUmp0QlFYRkNMMFlzVjBGQmJVSXNVMEZCVVN3clFrRkJiVVU3U1VGRE5VWXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRWGxFTzFGQlEzSkdMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03UTBGRFJqdEJRVXBFTEhOQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvaW1hZ2UudHNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIENpcmNsZSBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiY2lyY2xlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJseVkyeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkybHlZMnhsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzYjBOQlFUSkVPMEZCVXpORUxGbEJRVzlDTEZOQlFWRXNjVUpCUVd0RU8wbEJRelZGTEZsQlFWa3NUMEZCWjBJc1JVRkJSU3hMUVVFMlJUdFJRVU42Unl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhEUVVGRE8wTkJRMFk3UVVGS1JDeDNRa0ZKUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9jaXJjbGUudHNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImVsbGlwc2VcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRWxsaXBzZSA9IEVsbGlwc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpXeHNhWEJ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVZzYkdsd2MyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSlFTeHZRMEZCTWtRN1FVRlhNMFFzWVVGQmNVSXNVMEZCVVN4eFFrRkJiMFE3U1VGREwwVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVGhGTzFGQlF6RkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFTkJRVU03UTBGRFJqdEJRVXBFTERCQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2VsbGlwc2UudHNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYXBlXzEgPSByZXF1aXJlKFwiLi4vc2hhcGVcIik7XHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcImxpbmVcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTGluZSA9IExpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHbHVaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklteHBibVV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkxRU3h2UTBGQk1rUTdRVUZYTTBRc1ZVRkJhMElzVTBGQlVTeHhRa0ZCT0VNN1NVRkRkRVVzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRKRk8xRkJRM1pITEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaERMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUNRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lLnRzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzaGFwZV8xID0gcmVxdWlyZShcIi4uL3NoYXBlXCIpO1xyXG5jbGFzcyBQYXRoIGV4dGVuZHMgc2hhcGVfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgXCJwYXRoXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBhdGggPSBQYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR0YwYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbkJoZEdndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGUE0wUXNWVUZCYTBJc1UwRkJVU3h4UWtGQk9FTTdTVUZEZEVVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUSkZPMUZCUTNaSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdRMEZEUmp0QlFVcEVMRzlDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcGF0aC50c1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUG9seWdvbiBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicG9seWdvblwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2x5Z29uID0gUG9seWdvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5c2VXZHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluQnZiSGxuYjI0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZKUVN4dlEwRkJNa1E3UVVGTk0wUXNZVUZCY1VJc1UwRkJVU3h4UWtGQmIwUTdTVUZETDBVc1dVRkJXU3hQUVVGblFpeEZRVUZGTEV0QlFUaEZPMUZCUXpGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdRMEZEUmp0QlFVcEVMREJDUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcG9seWdvbi50c1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBzaGFwZV8xLkFic3RyYWN0U2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInBvbHlsaW5lXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvbHlsaW5lID0gUG9seWxpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXNlV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YjJ4NWJHbHVaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVbEJMRzlEUVVFeVJEdEJRVTB6UkN4alFVRnpRaXhUUVVGUkxIRkNRVUZ6UkR0SlFVTnNSaXhaUVVGWkxFOUJRV2RDTEVWQlFVVXNTMEZCSzBVN1VVRkRNMGNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc05FSkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5bGluZS50c1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgUmVjdCBleHRlbmRzIHNoYXBlXzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwicmVjdFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5SZWN0ID0gUmVjdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WamRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5KbFkzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGTFFTeHZRMEZCTWtRN1FVRmxNMFFzVlVGQmEwSXNVMEZCVVN4eFFrRkJPRU03U1VGRGRFVXNXVUZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRVEpGTzFGQlEzWkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU03UTBGRFJqdEJRVXBFTEc5Q1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3JlY3QudHNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRpbWVuc2lvbl8xID0gcmVxdWlyZShcIi4uLy4uL2F0dHJpYnV0ZXMvZGltZW5zaW9uXCIpO1xyXG5jb25zdCB0ZXh0X2NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdHRyaWJ1dGVzL3RleHQtY29udGVudFwiKTtcclxuY29uc3QgcmVuZGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3JlbmRlcmFibGVcIik7XHJcbmNsYXNzIFRleHRTcGFuIGV4dGVuZHMgcmVuZGVyYWJsZV8xLkFic3RyYWN0UmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwidHNwYW5cIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbXB1dGVkTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dFNwYW4gPSBUZXh0U3BhbjtcclxuY2xhc3MgVGV4dCBleHRlbmRzIHJlbmRlcmFibGVfMS5BYnN0cmFjdFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBcInRleHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkU3Bhbihjb250ZW50LCBsaW5lSGVpZ2h0LCB1cGRhdGUgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3Qgc3BhbiA9IG5ldyBUZXh0U3Bhbih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidGV4dENvbnRlbnRcIiwgY29udGVudCk7XHJcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQpIHtcclxuICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHBhcnNlRmxvYXQodGhpcy5nZXRBdHRyaWJ1dGUoXCJ4XCIpIHx8IFwiMFwiKSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGluZUhlaWdodCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBuZXcgZGltZW5zaW9uXzEuRGltZW5zaW9uKGxpbmVIZWlnaHQsIFwiZW1cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJkeVwiLCBsaW5lSGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZChzcGFuKTtcclxuICAgICAgICByZXR1cm4gc3BhbjtcclxuICAgIH1cclxuICAgIGdldCBjb21wdXRlZExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRleHQgPSBUZXh0O1xyXG5jbGFzcyBNdWx0aWxpbmVUZXh0IGV4dGVuZHMgVGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXh0LCB3aWR0aCwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBhdHRycyk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ldyBUZXh0KGNvbnRleHQpO1xyXG4gICAgICAgIHRlbXAuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCAwKTtcclxuICAgICAgICBjb25zdCBzcGFuID0gbmV3IFRleHRTcGFuKGNvbnRleHQpO1xyXG4gICAgICAgIHRlbXAuYWRkKHNwYW4pO1xyXG4gICAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoYXR0cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcGFjZVdpZHRoID0gdGVtcC5jb21wdXRlZExlbmd0aDtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtcIlwiXTtcclxuICAgICAgICB0ZXh0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKCh3b3JkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TGluZSA9IChsaW5lLmxlbmd0aCA9PT0gMCkgPyB3b3JkIDogYCR7bGluZX0gJHt3b3JkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gbmV3IHRleHRfY29udGVudF8xLlRleHRDb250ZW50KG5ld0xpbmUpO1xyXG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInRleHRDb250ZW50XCIsIGxpbmVDb250ZW50KTtcclxuICAgICAgICAgICAgaWYgKHNwYW4uY29tcHV0ZWRMZW5ndGggPiB3aWR0aCAmJiBsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2god29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSA9IG5ld0xpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNwYW4obmV3IHRleHRfY29udGVudF8xLlRleHRDb250ZW50KGxpbmUpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTXVsdGlsaW5lVGV4dCA9IE11bHRpbGluZVRleHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluUmxlSFF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3d3UkVGQmRVUTdRVUZGZGtRc1owVkJRVFJFTzBGQlJUVkVMRGhEUVVFclJqdEJRVGhDTDBZc1kwRkJjMElzVTBGQlVTd3JRa0ZCTkVRN1NVRkRlRVlzV1VGQldTeFBRVUZuUWl4RlFVRkZMRXRCUVRSRU8xRkJRM2hHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkRSQ3hKUVVGWExHTkJRV003VVVGRGRrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1EwRkJRenRKUVVNMVF5eERRVUZETzBOQlEwWTdRVUZRUkN3MFFrRlBRenRCUVZsRUxGVkJRV3RDTEZOQlFWRXNLMEpCUVhWRU8wbEJReTlGTEZsQlFWa3NUMEZCWjBJc1JVRkJSU3hMUVVGM1JEdFJRVU53Uml4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJRMDBzVDBGQlR5eERRVUZETEU5QlFXOUNMRVZCUVVVc1ZVRkJORUlzUlVGQlJTeFRRVUZyUWl4SlFVRkpPMUZCUTNaR0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU40UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExHRkJRV0VzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1JTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMSEZDUVVGVExFTkJRVThzVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha1VzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xbEJRM1JETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTm1MRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlEwUXNTVUZCVnl4alFVRmpPMUZCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJja0pFTEc5Q1FYRkNRenRCUVVWRUxHMUNRVUV5UWl4VFFVRlJMRWxCUVVrN1NVRkRja01zV1VGQldTeFBRVUZuUWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hMUVVGaExFVkJRVVVzUzBGQk5rVTdVVUZEZEVrc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNdlFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJZc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVJc1EwRkJRenRSUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkRka01zVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZETDBRc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTd3dRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6bERMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia1FzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOdVFpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlEzQkRMRU5CUVVNN1VVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOd1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc01FSkJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlF5eERRVUZETzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMFk3UVVFM1FrUXNjME5CTmtKREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0LnRzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBUZXh0Q29udGVudCB7XHJcbiAgICBzdGF0aWMgZXNjYXBlSHRtbChodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RyID0gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2IgPSBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGVudChjc3MgfHwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFRleHRDb250ZW50LmVzY2FwZUh0bWwodGhpcy5fc3RyIHx8IHRoaXMuX2NiKCkpO1xyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiB0IDwgMC41ID8gZnJvbSA6IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UZXh0Q29udGVudCA9IFRleHRDb250ZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEMxamIyNTBaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lkR1Y0ZEMxamIyNTBaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSMEU3U1VGRFZTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVZrN1VVRkRjRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETzBsQlMwUXNXVUZCV1N4SFFVRTBRanRSUVVOMFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlEyeENMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRTFCUVUwc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF6dEpRVU5OTEVkQlFVY3NRMEZCSzBJc1QwRkJiVUlzUlVGQlJTeEpRVUZQTzFGQlEyNUZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRKUVVONlF5eERRVUZETzBsQlEwMHNSMEZCUnl4RFFVRXJRaXhQUVVGdFFpeEZRVUZGTEVsQlFVOHNSVUZCUlN4UlFVRnpRanRSUVVNelJpeFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU40UlN4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRV2xDTEVWQlFVVXNRMEZCVXp0UlFVTTNReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZETDBJc1EwRkJRenREUVVOR08wRkJNMEpFTEd0RFFUSkNReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90ZXh0LWNvbnRlbnQudHNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBCbGVuZF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVCbGVuZFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CbGVuZF9QcmltaXRpdmUgPSBCbGVuZF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlteGxibVF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmliR1Z1WkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERCRVFVRnpSRHRCUVZGMFJDeHhRa0ZCTmtJc1UwRkJVU3hyUTBGQmIwUTdTVUZEZGtZc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmFVTTdVVUZETTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9ibGVuZC50c1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIENvbG9yTWF0cml4X1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUNvbG9yTWF0cml4XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbG9yTWF0cml4X1ByaW1pdGl2ZSA9IENvbG9yTWF0cml4X1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5c2IzSXRiV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5c2IzSXRiV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc01FUkJRWE5FTzBGQlUzUkVMREpDUVVGdFF5eFRRVUZSTEd0RFFVRm5SVHRKUVVONlJ5eFpRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRjFRenRSUVVOcVJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMR1ZCUVdVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPME5CUTBZN1FVRktSQ3h6UkVGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb2xvci1tYXRyaXgudHNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBDb21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmUgPSBDb21wb25lbnRUcmFuc2Zlcl9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExYUnlZVzV6Wm1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dGNHOXVaVzUwTFhSeVlXNXpabVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEVzTUVSQlFYTkVPMEZCVFhSRUxHbERRVUY1UXl4VFFVRlJMR3REUVVFMFJUdEpRVU16U0N4WlFVRlpMRTFCUVdNc1JVRkJSU3hMUVVFMlF6dFJRVU4yUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxIRkNRVUZ4UWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemxETEVOQlFVTTdRMEZEUmp0QlFVcEVMR3RGUVVsREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb25lbnQtdHJhbnNmZXIudHNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBDb21wb3NpdGVfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlQ29tcG9zaXRlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbXBvc2l0ZV9QcmltaXRpdmUgPSBDb21wb3NpdGVfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5emFYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl6YVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc01FUkJRWE5FTzBGQldYUkVMSGxDUVVGcFF5eFRRVUZSTEd0RFFVRTBSRHRKUVVOdVJ5eFpRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRnhRenRSUVVNdlJDeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPME5CUTBZN1FVRktSQ3hyUkVGSlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb3NpdGUudHNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBDb252b2x2ZU1hdHJpeF9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db252b2x2ZU1hdHJpeF9QcmltaXRpdmUgPSBDb252b2x2ZU1hdHJpeF9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVkbTlzZG1VdGJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl1ZG05c2RtVXRiV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUzBFc01FUkJRWE5FTzBGQlowSjBSQ3c0UWtGQmMwTXNVMEZCVVN4clEwRkJjMFU3U1VGRGJFZ3NXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJNRU03VVVGRGNFVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hyUWtGQmEwSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBOQlEwWTdRVUZLUkN3MFJFRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29udm9sdmUtbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgRGlzcGxhY2VtZW50TWFwX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EaXNwbGFjZW1lbnRNYXBfUHJpbWl0aXZlID0gRGlzcGxhY2VtZW50TWFwX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsemNHeGhZMlZ0Wlc1MExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltUnBjM0JzWVdObGJXVnVkQzF0WVhBdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZEUVN3d1JFRkJjMFE3UVVGVmRFUXNLMEpCUVhWRExGTkJRVkVzYTBOQlFYZEZPMGxCUTNKSUxGbEJRVmtzVFVGQll5eEZRVUZGTEV0QlFUSkRPMUZCUTNKRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenREUVVOR08wRkJTa1FzT0VSQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvZGlzcGxhY2VtZW50LW1hcC50c1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIEZsb29kX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUZsb29kXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZsb29kX1ByaW1pdGl2ZSA9IEZsb29kX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm14dmIyUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKbWJHOXZaQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVZEJMREJFUVVGelJEdEJRVTkwUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCYjBRN1NVRkRka1lzV1VGQldTeE5RVUZqTEVWQlFVVXNTMEZCYVVNN1VVRkRNMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2Zsb29kLnRzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgR2F1c3NpYW5CbHVyX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZUdhdXNzaWFuQmx1clwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HYXVzc2lhbkJsdXJfUHJpbWl0aXZlID0gR2F1c3NpYW5CbHVyX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjJGMWMzTnBZVzR0WW14MWNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1kaGRYTnphV0Z1TFdKc2RYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTd3dSRUZCYzBRN1FVRlJkRVFzTkVKQlFXOURMRk5CUVZFc2EwTkJRV3RGTzBsQlF6VkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWGRETzFGQlEyeEZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVrTXNRMEZCUXp0RFFVTkdPMEZCU2tRc2QwUkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2dhdXNzaWFuLWJsdXIudHNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBJbWFnZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVJbWFnZVwiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbWFnZV9QcmltaXRpdmUgPSBJbWFnZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXMWhaMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBiV0ZuWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTERCRVFVRnpSRHRCUVU5MFJDeHhRa0ZCTmtJc1UwRkJVU3hyUTBGQmIwUTdTVUZEZGtZc1dVRkJXU3hOUVVGakxFVkJRVVVzUzBGQmFVTTdVVUZETTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dERRVU5HTzBGQlNrUXNNRU5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9pbWFnZS50c1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIERpZmZ1c2VMaWdodGluZyBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZURpZmZ1c2VMaWdodGluZ1wiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EaWZmdXNlTGlnaHRpbmcgPSBEaWZmdXNlTGlnaHRpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHbG1ablZ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbVJwWm1aMWMyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTdzJSRUZCZVVRN1FVRlZla1FzY1VKQlFUWkNMRk5CUVZFc2EwTkJRWGRGTzBsQlF6TkhMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRVEpETzFGQlEzSkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTkdPMEZCU2tRc01FTkJTVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2RpZmZ1c2UudHNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBEaXN0YW50TGlnaHQgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVEaXN0YW50TGlnaHRcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGlzdGFudExpZ2h0ID0gRGlzdGFudExpZ2h0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x6ZEdGdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1ScGMzUmhiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3huUlVGQk5FUTdRVUZSTlVRc2EwSkJRVEJDTEZOQlFWRXNhME5CUVd0Rk8wbEJRMnhITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhkRE8xRkJRMnhGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRla01zUTBGQlF6dERRVU5HTzBGQlNrUXNiME5CU1VNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvZGlzdGFudC50c1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmlsdGVyX3ByaW1pdGl2ZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2ZpbHRlci1wcmltaXRpdmVcIik7XHJcbmNsYXNzIFBvaW50TGlnaHQgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVQb2ludExpZ2h0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvaW50TGlnaHQgPSBQb2ludExpZ2h0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YjJsdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQkxHZEZRVUUwUkR0QlFWVTFSQ3huUWtGQmQwSXNVMEZCVVN4clEwRkJPRVE3U1VGRE5VWXNXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJjME03VVVGRGFFVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hqUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenREUVVOR08wRkJTa1FzWjBOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3BvaW50LnRzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgU3BvdExpZ2h0IGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlU3BvdExpZ2h0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwb3RMaWdodCA9IFNwb3RMaWdodDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCdmRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5Od2IzUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGSFFTeG5SVUZCTkVRN1FVRm5RalZFTEdWQlFYVkNMRk5CUVZFc2EwTkJRVFJFTzBsQlEzcEdMRmxCUVZrc1RVRkJZeXhGUVVGRkxFdEJRWEZETzFGQlF5OUVMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzWVVGQllTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03UTBGRFJqdEJRVXBFTERoQ1FVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3Nwb3QudHNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBTcGVjdWxhckxpZ2h0aW5nIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcGVjdWxhckxpZ2h0aW5nID0gU3BlY3VsYXJMaWdodGluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCbFkzVnNZWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnpjR1ZqZFd4aGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxEWkVRVUY1UkR0QlFWZDZSQ3h6UWtGQk9FSXNVMEZCVVN4clEwRkJNRVU3U1VGRE9VY3NXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJORU03VVVGRGRFVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBOQlEwWTdRVUZLUkN3MFEwRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvc3BlY3VsYXIudHNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBNZXJnZU5vZGVfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlTWVyZ2VOb2RlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1lcmdlTm9kZV9QcmltaXRpdmUgPSBNZXJnZU5vZGVfUHJpbWl0aXZlO1xyXG5jbGFzcyBNZXJnZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlcikge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZU1lcmdlXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWVyZ2VfUHJpbWl0aXZlID0gTWVyZ2VfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV1Z5WjJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp0WlhKblpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVOQkxEQkVRVUZ6UkR0QlFVMTBSQ3g1UWtGQmFVTXNVMEZCVVN4clEwRkJORVE3U1VGRGJrY3NXVUZCV1N4TlFVRmpMRVZCUVVVc1MwRkJjVU03VVVGREwwUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hoUVVGaExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZEVNc1EwRkJRenREUVVOR08wRkJTa1FzYTBSQlNVTTdRVUZGUkN4eFFrRkJOa0lzVTBGQlVTeHJRMEZCZDBNN1NVRkRNMFVzV1VGQldTeE5RVUZqTzFGQlEzaENMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdTVUZETTBJc1EwRkJRenREUVVOR08wRkJTa1FzTUVOQlNVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbWVyZ2UudHNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBNb3JwaG9sb2d5X1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZU1vcnBob2xvZ3lcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTW9ycGhvbG9neV9QcmltaXRpdmUgPSBNb3JwaG9sb2d5X1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYlc5eWNHaHZiRzluZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTF2Y25Cb2IyeHZaM2t1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3d3UkVGQmMwUTdRVUZSZEVRc01FSkJRV3RETEZOQlFWRXNhME5CUVRoRU8wbEJRM1JITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhORE8xRkJRMmhGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUVRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21vcnBob2xvZ3kudHNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBPZmZzZXRfUHJpbWl0aXZlIGV4dGVuZHMgZmlsdGVyX3ByaW1pdGl2ZV8xLkZpbHRlclByaW1pdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXIsIGF0dHJzKSB7XHJcbiAgICAgICAgc3VwZXIoZmlsdGVyLCBcImZlT2Zmc2V0XCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9mZnNldF9QcmltaXRpdmUgPSBPZmZzZXRfUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMlptYzJWMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYjJabWMyVjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlIwRXNNRVJCUVhORU8wRkJVM1JFTEhOQ1FVRTRRaXhUUVVGUkxHdERRVUZ6UkR0SlFVTXhSaXhaUVVGWkxFMUJRV01zUlVGQlJTeExRVUZyUXp0UlFVTTFSQ3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBOQlEwWTdRVUZLUkN3MFEwRkpReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvb2Zmc2V0LnRzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmaWx0ZXJfcHJpbWl0aXZlXzEgPSByZXF1aXJlKFwiLi4vZmlsdGVyLXByaW1pdGl2ZVwiKTtcclxuY2xhc3MgVGlsZV9QcmltaXRpdmUgZXh0ZW5kcyBmaWx0ZXJfcHJpbWl0aXZlXzEuRmlsdGVyUHJpbWl0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlciwgYXR0cnMpIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXIsIFwiZmVUaWxlXCIsIGF0dHJzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRpbGVfUHJpbWl0aXZlID0gVGlsZV9QcmltaXRpdmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHbHNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluUnBiR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRU3d3UkVGQmMwUTdRVUZOZEVRc2IwSkJRVFJDTEZOQlFWRXNhME5CUVd0RU8wbEJRM0JHTEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVdkRE8xRkJRekZFTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1EwRkRSanRCUVVwRUxIZERRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3RpbGUudHNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBUcmFuc2ZlckZ1bmN0aW9uX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBjaGFubmVsLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgYGZlRnVuYyR7Y2hhbm5lbH1gLCBhdHRycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2ZlckZ1bmN0aW9uX1ByaW1pdGl2ZSA9IFRyYW5zZmVyRnVuY3Rpb25fUHJpbWl0aXZlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5ObVpYSXRablZ1WTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKMGNtRnVjMlpsY2kxbWRXNWpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVU5CTERCRVFVRnpSRHRCUVRCQ2RFUXNaME5CUVhkRExGTkJRVkVzYTBOQlFUSklPMGxCUTNwTExGbEJRVmtzVFVGQll5eEZRVUZGTEU5QlFUaENMRVZCUVVVc1MwRkJORU03VVVGRGRFY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFOUJRVThzUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03UTBGRFJqdEJRVXBFTEdkRlFVbERJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHJhbnNmZXItZnVuY3Rpb24udHNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpbHRlcl9wcmltaXRpdmVfMSA9IHJlcXVpcmUoXCIuLi9maWx0ZXItcHJpbWl0aXZlXCIpO1xyXG5jbGFzcyBUdXJidWxlbmNlX1ByaW1pdGl2ZSBleHRlbmRzIGZpbHRlcl9wcmltaXRpdmVfMS5GaWx0ZXJQcmltaXRpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVyLCBhdHRycykge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlciwgXCJmZVR1cmJ1bGVuY2VcIiwgYXR0cnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHVyYnVsZW5jZV9QcmltaXRpdmUgPSBUdXJidWxlbmNlX1ByaW1pdGl2ZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhWeVluVnNaVzVqWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblIxY21KMWJHVnVZMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkZRU3d3UkVGQmMwUTdRVUZWZEVRc01FSkJRV3RETEZOQlFWRXNhME5CUVRoRU8wbEJRM1JITEZsQlFWa3NUVUZCWXl4RlFVRkZMRXRCUVhORE8xRkJRMmhGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1kwRkJZeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1EwRkRSanRCUVVwRUxHOUVRVWxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3R1cmJ1bGVuY2UudHNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdHRyaWJ1dGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb25zdGFudHNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZG9jdW1lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lbGVtZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXZlbnRzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaW50ZXJwb2xhdGlvblwiKSk7XHJcbmNvbnN0IEFuaW1hdGlvbiA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvblwiKTtcclxuZXhwb3J0cy5BbmltYXRpb24gPSBBbmltYXRpb247XHJcbmNvbnN0IEF0dHJpYnV0ZXMgPSByZXF1aXJlKFwiLi9hdHRyaWJ1dGVzXCIpO1xyXG5leHBvcnRzLkF0dHJpYnV0ZXMgPSBBdHRyaWJ1dGVzO1xyXG5jb25zdCBFbGVtZW50cyA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpO1xyXG5leHBvcnRzLkVsZW1lbnRzID0gRWxlbWVudHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHbERRVUUwUWp0QlFVTTFRaXhwUTBGQk5FSTdRVUZETlVJc0swSkJRVEJDTzBGQlF6RkNMR2REUVVFeVFqdEJRVU16UWl3clFrRkJNRUk3UVVGRE1VSXNPRUpCUVhsQ08wRkJRM3BDTEhGRFFVRm5RenRCUVVWb1F5eDVRMEZCZVVNN1FVRkxka01zT0VKQlFWTTdRVUZLV0N3eVEwRkJNa003UVVGTGVrTXNaME5CUVZVN1FVRktXaXgxUTBGQmRVTTdRVUZMY2tNc05FSkJRVkVpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBib3hfMSA9IHJlcXVpcmUoXCIuL2F0dHJpYnV0ZXMvYm94XCIpO1xyXG5jb25zdCBwb2ludF8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlcy9wb2ludFwiKTtcclxuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XHJcbmNvbnN0IGRvY3VtZW50XzEgPSByZXF1aXJlKFwiLi9kb2N1bWVudFwiKTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4vZWxlbWVudFwiKTtcclxuY29uc3QgY2xpcF9wYXRoXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvY2xpcC1wYXRoXCIpO1xyXG5jb25zdCBtYXJrZXJfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXJrZXJcIik7XHJcbmNvbnN0IG1hc2tfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXNrXCIpO1xyXG5jb25zdCBsaW5lYXJfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL2dyYWRpZW50cy9saW5lYXJcIik7XHJcbmNvbnN0IHJhZGlhbF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL3JhZGlhbFwiKTtcclxuY29uc3QgcGF0dGVybl8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvcGF0dGVyblwiKTtcclxuY29uc3QgZXh0ZXJuYWxfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL2V4dGVybmFsXCIpO1xyXG5jb25zdCBmb3JlaWduX29iamVjdF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvZm9yZWlnbi1vYmplY3RcIik7XHJcbmNvbnN0IGdyb3VwXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9ncm91cFwiKTtcclxuY29uc3QgaW1hZ2VfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL2ltYWdlXCIpO1xyXG5jb25zdCBjaXJjbGVfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9jaXJjbGVcIik7XHJcbmNvbnN0IGVsbGlwc2VfMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9lbGxpcHNlXCIpO1xyXG5jb25zdCBsaW5lXzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvbGluZVwiKTtcclxuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BhdGhcIik7XHJcbmNvbnN0IHBvbHlnb25fMSA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5Z29uXCIpO1xyXG5jb25zdCBwb2x5bGluZV8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL3BvbHlsaW5lXCIpO1xyXG5jb25zdCByZWN0XzEgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcmVjdFwiKTtcclxuY29uc3QgdGV4dF8xID0gcmVxdWlyZShcIi4vZWxlbWVudHMvcmVuZGVyYWJsZXMvdGV4dFwiKTtcclxuY2xhc3MgQ29udGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBfd2luZG93ID0gQ29udGV4dC5ERUZBVUxUX1dJTkRPVykge1xyXG4gICAgICAgIHRoaXMuX3dpbmRvdyA9IF93aW5kb3c7XHJcbiAgICAgICAgaWYgKHJvb3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290KTtcclxuICAgICAgICAgICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IHdpdGggc3BlY2lmaWVkIElEIGlzIG5vdCB2YWxpZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSByb290O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhjb25zdGFudHNfMS5YTUxOUywgXCJzdmdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX3Jvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yb290LnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIGNvbnN0YW50c18xLlhNTE5TKTtcclxuICAgICAgICB0aGlzLl9yb290LnNldEF0dHJpYnV0ZU5TKGNvbnN0YW50c18xLlhNTE5TLCBcInhsaW5rXCIsIGNvbnN0YW50c18xLlhMSU5LKTtcclxuICAgICAgICB0aGlzLl9yb290LnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGhpcy5fcm9vdDtcclxuICAgICAgICBjb25zdCBkZWZzRWxlbWVudHMgPSB0aGlzLl9yb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGVmc1wiKTtcclxuICAgICAgICBpZiAoZGVmc0VsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVmcyA9IG5ldyBlbGVtZW50XzEuRWxlbWVudCh0aGlzLCBkZWZzRWxlbWVudHMuaXRlbSgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZzID0gbmV3IGVsZW1lbnRfMS5FbGVtZW50KHRoaXMsIFwiZGVmc1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgd2luZG93KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3c7XHJcbiAgICB9XHJcbiAgICBhZGREZWYoZGVmKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmcy5hZGQoZGVmKTtcclxuICAgIH1cclxuICAgIGFkZENoaWxkKGVsKSB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0LmFwcGVuZENoaWxkKChlbCBpbnN0YW5jZW9mIGVsZW1lbnRfMS5FbGVtZW50KSA/IGVsLm5vZGUgOiBlbCk7XHJcbiAgICB9XHJcbiAgICBsb2FkKHVybCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhtbERvY3VtZW50ID0geWllbGQgZG9jdW1lbnRfMS5tYWtlUmVxdWVzdChcIkdFVFwiLCB1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBleHRlcm5hbERvY3VtZW50ID0gbmV3IGRvY3VtZW50XzEuU1ZHRG9jdW1lbnQodGhpcywgeG1sRG9jdW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGV4dGVybmFsXzEuRXh0ZXJuYWxTVkcodGhpcywgZXh0ZXJuYWxEb2N1bWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbGlwUGF0aCh3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjbGlwX3BhdGhfMS5DbGlwUGF0aCh0aGlzLCB3LCBoLCB4LCB5LCB1bml0cywgY29udGVudFVuaXRzKTtcclxuICAgIH1cclxuICAgIG1hcmtlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IG1hcmtlcl8xLk1hcmtlcih0aGlzLCB7fSk7XHJcbiAgICB9XHJcbiAgICBtYXNrKHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IG1hc2tfMS5NYXNrKHRoaXMsIHcsIGgsIHgsIHksIHVuaXRzLCBjb250ZW50VW5pdHMpO1xyXG4gICAgfVxyXG4gICAgbGluZWFyR3JhZGllbnQoc3RvcHMsIGF0dHJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBsaW5lYXJfMS5MaW5lYXJHcmFkaWVudCh0aGlzLCBzdG9wcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcmFkaWFsR3JhZGllbnQoc3RvcHMsIGF0dHJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyByYWRpYWxfMS5SYWRpYWxHcmFkaWVudCh0aGlzLCBzdG9wcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcGF0dGVybih3LCBoLCB4LCB5LCB2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBwYXR0ZXJuXzEuUGF0dGVybih0aGlzLCB3LCBoLCB4LCB5LCB2aWV3KTtcclxuICAgIH1cclxuICAgIGZvcmVpZ25PYmplY3QoaHRtbCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbmV3IGZvcmVpZ25fb2JqZWN0XzEuRm9yZWlnbk9iamVjdCh0aGlzLCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSk7XHJcbiAgICAgICAgZWwuYWRkSFRNTChodG1sKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGVsKTtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICBncm91cChlbHMpIHtcclxuICAgICAgICBjb25zdCBlbCA9IG5ldyBncm91cF8xLkdyb3VwKHRoaXMpO1xyXG4gICAgICAgIGVscy5mb3JFYWNoKGNoaWxkID0+IGVsLmFkZChjaGlsZCkpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZWwpO1xyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuICAgIGltYWdlKGhyZWYpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgaW1hZ2VfMS5JbWFnZSh0aGlzKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGltZy5nZXRFdmVudChcImxvYWRcIikudGFrZSgxKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB5aWVsZCBwcm9taXNlO1xyXG4gICAgICAgICAgICByZXR1cm4gaW1nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2lyY2xlKGExLCBhMiwgYTMpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IChhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpID8geyBcImN4OmN5XCI6IGExLCByOiBhMiB9IDogeyBjeDogYTEsIGN5OiBhMiwgcjogYTMgfTtcclxuICAgICAgICByZXR1cm4gbmV3IGNpcmNsZV8xLkNpcmNsZSh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBlbGxpcHNlKGExLCBhMiwgYTMsIGE0KSB7XHJcbiAgICAgICAgbGV0IGF0dHJzID0ge307XHJcbiAgICAgICAgY29uc3QgYTFJc1BvaW50ID0gYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50O1xyXG4gICAgICAgIGNvbnN0IGEySXNQb2ludCA9IGEyIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludDtcclxuICAgICAgICBpZiAoYTFJc1BvaW50ICYmIGEySXNQb2ludCkge1xyXG4gICAgICAgICAgICBhdHRycyA9IHsgXCJjeDpjeVwiOiBhMSwgXCJyeDpyeVwiOiBhMiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghKGExSXNQb2ludCB8fCBhMklzUG9pbnQpKSB7XHJcbiAgICAgICAgICAgIGF0dHJzID0geyBjeDogYTEsIGN5OiBhMiwgcng6IGEzLCByeTogYTQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBlbGxpcHNlXzEuRWxsaXBzZSh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBsaW5lKGExLCBhMiwgYTMsIGE0KSB7XHJcbiAgICAgICAgbGV0IGF0dHJzID0ge307XHJcbiAgICAgICAgY29uc3QgYTFJc1BvaW50ID0gYTEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50O1xyXG4gICAgICAgIGNvbnN0IGEySXNQb2ludCA9IGEyIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludDtcclxuICAgICAgICBpZiAoYTFJc1BvaW50ICYmIGEySXNQb2ludCkge1xyXG4gICAgICAgICAgICBhdHRycyA9IHsgXCJ4MTp5MVwiOiBhMSwgXCJ4Mjp5MlwiOiBhMiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghKGExSXNQb2ludCB8fCBhMklzUG9pbnQpKSB7XHJcbiAgICAgICAgICAgIGF0dHJzID0geyB4MTogYTEsIHkxOiBhMiwgeDI6IGEzLCB5MjogYTQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBsaW5lXzEuTGluZSh0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBwYXRoKGQsIHBhdGhMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IHsgZCwgcGF0aExlbmd0aCB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgcGF0aF8xLlBhdGgodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgcG9seWdvbihwb2ludHMpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IHsgcG9pbnRzIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBwb2x5Z29uXzEuUG9seWdvbih0aGlzLCBhdHRycyk7XHJcbiAgICB9XHJcbiAgICBwb2x5bGluZShwb2ludHMpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IHsgcG9pbnRzIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBwb2x5bGluZV8xLlBvbHlsaW5lKHRoaXMsIGF0dHJzKTtcclxuICAgIH1cclxuICAgIHJlY3QoYTEsIGEyLCBhMywgYTQsIGE1LCBhNikge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0ge307XHJcbiAgICAgICAgaWYgKGExIGluc3RhbmNlb2YgYm94XzEuQm94KSB7XHJcbiAgICAgICAgICAgIGF0dHJzW1wieDp5OndpZHRoOmhlaWdodFwiXSA9IGExO1xyXG4gICAgICAgICAgICBpZiAoYTIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcInJ4OnJ5XCJdID0gYTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYTIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnhcIl0gPSBhMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhMyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeVwiXSA9IGEzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGExIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICBhdHRyc1tcIng6eVwiXSA9IGExO1xyXG4gICAgICAgICAgICBpZiAoYTIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJ3aWR0aFwiXSA9IGEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhMyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcImhlaWdodFwiXSA9IGEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhNCBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wicng6cnlcIl0gPSBhNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhNCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeFwiXSA9IGE0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGE1ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyc1tcInJ5XCJdID0gYTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGF0dHJzW1wieFwiXSA9IGExO1xyXG4gICAgICAgICAgICBpZiAoYTIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJ5XCJdID0gYTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJzW1wid2lkdGhcIl0gPSBhMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cnNbXCJoZWlnaHRcIl0gPSBhNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYTUgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1tcInJ4OnJ5XCJdID0gYTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYTUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzW1wicnhcIl0gPSBhNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhNiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbXCJyeVwiXSA9IGE2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgcmVjdF8xLlJlY3QodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgdGV4dChjb250ZW50LCBhMSwgYTIpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IChhMSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQpID8geyBcIng6eVwiOiBhMSB9IDogeyB4OiBhMSwgeTogYTIgfTtcclxuICAgICAgICBjb25zdCB0ID0gbmV3IHRleHRfMS5UZXh0KHRoaXMsIGF0dHJzKTtcclxuICAgICAgICBjb250ZW50LmZvckVhY2goYyA9PiB0LmFkZFNwYW4oYykpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodCk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbn1cclxuQ29udGV4dC5ERUZBVUxUX1dJTkRPVyA9IHdpbmRvdztcclxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWRHVjRkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltTnZiblJsZUhRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEJRVU5CTERCRFFVRjFRenRCUVVWMlF5dzRRMEZCTWtNN1FVRkZNME1zTWtOQlFUSkRPMEZCUXpORExIbERRVUZ6UkR0QlFVTjBSQ3gxUTBGQmIwTTdRVUZEY0VNc2IwVkJRV2RGTzBGQlEyaEZMRGhFUVVFeVJEdEJRVU16UkN3d1JFRkJkVVE3UVVGRmRrUXNjMFpCUVhOSU8wRkJRM1JJTEhOR1FVRnpTRHRCUVVOMFNDdzRSVUZCTWtVN1FVRkRNMFVzT0VSQlFUaEVPMEZCUXpsRUxEQkZRVUZ6UlR0QlFVTjBSU3gzUkVGQmNVUTdRVUZEY2tRc2QwUkJRWEZFTzBGQlEzSkVMR2xGUVVFNFJEdEJRVU01UkN4dFJVRkJaMFU3UVVGRGFFVXNOa1JCUVRCRU8wRkJRekZFTERaRVFVRXdSRHRCUVVNeFJDeHRSVUZCWjBVN1FVRkRhRVVzY1VWQlFXdEZPMEZCUTJ4RkxEWkVRVUV3UkR0QlFVTXhSQ3h6UkVGQmJVUTdRVUZOYmtRN1NVRlJSU3haUVVGWkxFbEJRVFpDTEVWQlFWVXNWVUZCYTBJc1QwRkJUeXhEUVVGRExHTkJRV003VVVGQmVFTXNXVUZCVHl4SFFVRlFMRTlCUVU4c1EwRkJhVU03VVVGRGVrWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5VTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpkQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRkRVFzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4WlFVRlpMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyaERMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTnNRaXhEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOT0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNkME5CUVhkRExFTkJRVU1zUTBGQlF6dG5Ra0ZETlVRc1EwRkJRenRaUVVOSUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTndRaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zYVVKQlFVc3NSVUZCUlN4TFFVRkxMRU5CUVd0Q0xFTkJRVU03V1VGRGJFWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGNrUXNRMEZCUXp0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlN4cFFrRkJTeXhEUVVGRExFTkJRVU03VVVGRGVFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zYVVKQlFVc3NSVUZCUlN4UFFVRlBMRVZCUVVVc2FVSkJRVXNzUTBGQlF5eERRVUZETzFGQlEycEVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE1VSXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0zUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMR2xDUVVGUExFTkJRVEpDTEVsQlFVa3NSVUZCUlN4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtZc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxHbENRVUZQTEVOQlFUSkNMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU51UlN4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVORUxFbEJRVmNzVFVGQlRUdFJRVU5tTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZEVFN4TlFVRk5MRU5CUVVNc1IwRkJLME03VVVGRE0wUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVOTkxGRkJRVkVzUTBGQlF5eEZRVUU0UXp0UlFVTTFSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1dVRkJXU3hwUWtGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTI1RkxFTkJRVU03U1VGRFdTeEpRVUZKTEVOQlFVTXNSMEZCVnpzN1dVRkRNMElzVFVGQlRTeFhRVUZYTEVkQlFVY3NUVUZCVFN4elFrRkJWeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnNSQ3hOUVVGTkxHZENRVUZuUWl4SFFVRkhMRWxCUVVrc2MwSkJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkROVVFzVFVGQlRTeERRVUZETEVsQlFVa3NjMEpCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRSUVVOcVJDeERRVUZETzB0QlFVRTdTVUZEVFN4UlFVRlJMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlN4RlFVRkZMRXRCUVRoRExFVkJRVVVzV1VGQmNVUTdVVUZEYWtzc1RVRkJUU3hEUVVGRExFbEJRVWtzYjBKQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dEpRVU0zUkN4RFFVRkRPMGxCUTAwc1RVRkJUVHRSUVVOWUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRE9VSXNRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWVXNSVUZCUlN4RFFVRlZMRVZCUVVVc1MwRkJPRU1zUlVGQlJTeFpRVUZ4UkR0UlFVTTNTaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRGVrUXNRMEZCUXp0SlFVTk5MR05CUVdNc1EwRkJReXhMUVVGWkxFVkJRVVVzUzBGQmFVTTdVVUZEYmtVc1RVRkJUU3hEUVVGRExFbEJRVWtzZFVKQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkRUU3hqUVVGakxFTkJRVU1zUzBGQldTeEZRVUZGTEV0QlFXbERPMUZCUTI1RkxFMUJRVTBzUTBGQlF5eEpRVUZKTEhWQ1FVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzVDBGQlR5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlVzUlVGQlJTeEpRVUZWTzFGQlEzSkZMRTFCUVUwc1EwRkJReXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBsQlEwMHNZVUZCWVN4RFFVRkRMRWxCUVdsQ0xFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4TFFVRmhMRVZCUVVVc1RVRkJZenRSUVVONlJpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRGhDUVVGaExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRiRUlzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkRUU3hMUVVGTExFTkJRVU1zUjBGQmIwTTdVVUZETDBNc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeGhRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNMElzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1F5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnhDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRE8wbEJRMWtzUzBGQlN5eERRVUZETEVsQlFWazdPMWxCUXpkQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NZVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFsQlEzcEVMRWRCUVVjc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRia0lzVFVGQlRTeExRVUZMTEVkQlFVY3NUVUZCVFN4UFFVRlBMRU5CUVVNN1dVRkROVUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTmlMRU5CUVVNN1MwRkJRVHRKUVVkTkxFMUJRVTBzUTBGQlF5eEZRVUZyUWl4RlFVRkZMRVZCUVZVc1JVRkJSU3hGUVVGWE8xRkJRM1pFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSU3haUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEZWtZc1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlIwMHNUMEZCVHl4RFFVRkRMRVZCUVd0Q0xFVkJRVVVzUlVGQmEwSXNSVUZCUlN4RlFVRlhMRVZCUVVVc1JVRkJWenRSUVVNM1JTeEpRVUZKTEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEZRVUZGTEZsQlFWa3NZVUZCU3l4RFFVRkRPMUZCUTNSRExFMUJRVTBzVTBGQlV5eEhRVUZITEVWQlFVVXNXVUZCV1N4aFFVRkxMRU5CUVVNN1VVRkRkRU1zUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wSXNTMEZCU3l4SFFVRkhMRVZCUVVVc1QwRkJUeXhGUVVGRkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRka01zUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVF5eExRVUZMTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZETjBNc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyeERMRU5CUVVNN1NVRkhUU3hKUVVGSkxFTkJRVU1zUlVGQmEwSXNSVUZCUlN4RlFVRnJRaXhGUVVGRkxFVkJRVmNzUlVGQlJTeEZRVUZYTzFGQlF6RkZMRWxCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEUxQlFVMHNVMEZCVXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hoUVVGTExFTkJRVU03VVVGRGRFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1JVRkJSU3haUVVGWkxHRkJRVXNzUTBGQlF6dFJRVU4wUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhUUVVGVExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhMUVVGTExFZEJRVWNzUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVU4yUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVNM1F5eERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1YwRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wbEJRMDBzU1VGQlNTeERRVUZETEVOQlFXZENMRVZCUVVVc1ZVRkJiVUk3VVVGREwwTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVjBGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlFpeERRVUZETzBsQlEwMHNUMEZCVHl4RFFVRkRMRTFCUVdVN1VVRkROVUlzVFVGQlRTeExRVUZMTEVkQlFVY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVONlFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4cFFrRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhEUVVGRE8wbEJRMDBzVVVGQlVTeERRVUZETEUxQlFXVTdVVUZETjBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCVFUwc1NVRkJTU3hEUVVGRExFVkJRWGRDTEVWQlFVVXNSVUZCYlVJc1JVRkJSU3hGUVVGWExFVkJRVVVzUlVGQmJVSXNSVUZCUlN4RlFVRnRRaXhGUVVGRkxFVkJRVmM3VVVGRE0wZ3NUVUZCVFN4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMnBDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1dVRkJXU3hUUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkNMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVNdlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjBRaXhEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTA0c1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM0pDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBKQlEyNUNMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzSkNMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUTI1Q0xFTkJRVU03V1VGRFNDeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMnhDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnlRaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNSQ0xFTkJRVU03V1VGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tJc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjJRaXhEUVVGRE8xbEJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzaENMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEZEVJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVFpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU51UWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UWl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTnVRaXhEUVVGRE8xbEJRMGdzUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRhRUlzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEYkVJc1EwRkJRenRaUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzUkNMRU5CUVVNN1dVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNrSXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU4yUWl4RFFVRkRPMWxCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hDTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGRFSXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOdVFpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVFpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU51UWl4RFFVRkRPMWxCUTBnc1EwRkJRenRSUVVOSUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OUNMRU5CUVVNN1NVRkhUU3hKUVVGSkxFTkJRVU1zVDBGQmMwSXNSVUZCUlN4RlFVRnJRaXhGUVVGRkxFVkJRVmM3VVVGRGFrVXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUTNaRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NWMEZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNURMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5ZTEVOQlFVTTdPMEZCZGsxaExITkNRVUZqTEVkQlFWY3NUVUZCVFN4RFFVRkRPMEZCUkdoRUxEQkNRWGxOUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRleHQudHNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYWmxiblJ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laWFpsYm5SekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZXZlbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZWFzaW5nXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyZXJcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl4blEwRkJNa0lpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FuaW1hdGlvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Jhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ib3hcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb2xvci1tYXRyaXhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb2xvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RpbWVuc2lvblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hdHJpeFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL251bWJlci1vcHRpb25hbC1udW1iZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wYXRoLXNlZ21lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wb2ludFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3ByZXNlcnZlLWFzcGVjdC1yYXRpb1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RleHQtY29udGVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RyYW5zZm9ybVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dyYXBwZXJzXCIpKTtcclxuY29uc3QgVHJhbnNmb3JtcyA9IHJlcXVpcmUoXCIuL3RyYW5zZm9ybXNcIik7XHJcbmV4cG9ydHMuVHJhbnNmb3JtcyA9IFRyYW5zZm9ybXM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEUkNRVUYxUWp0QlFVTjJRaXd5UWtGQmMwSTdRVUZEZEVJc2IwTkJRU3RDTzBGQlF5OUNMRFpDUVVGM1FqdEJRVU40UWl4cFEwRkJORUk3UVVGRE5VSXNPRUpCUVhsQ08wRkJRM3BDTERoRFFVRjVRenRCUVVONlF5eHZRMEZCSzBJN1FVRkRMMElzTmtKQlFYZENPMEZCUTNoQ0xEWkRRVUYzUXp0QlFVTjRReXh2UTBGQkswSTdRVUZETDBJc2FVTkJRVFJDTzBGQlF6VkNMR2REUVVFeVFqdEJRVVV6UWl3eVEwRkJNa003UVVGRGJFTXNaME5CUVZVaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxudmFyIENvbG9yTWF0cml4O1xyXG4oZnVuY3Rpb24gKENvbG9yTWF0cml4KSB7XHJcbiAgICBjbGFzcyBSYXcge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtbMSwgMCwgMCwgMCwgMF0sIFswLCAxLCAwLCAwLCAwXSwgWzAsIDAsIDEsIDAsIDBdLCBbMCwgMCwgMCwgMSwgMF0sIFswLCAwLCAwLCAwLCAwXV0pIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJtYXRyaXhcIjtcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSB0aGlzLmFyci5jb25jYXQoLi4udmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmF3KFtjc3Muc3BsaXQoXCIgXCIpLm1hcChwYXJzZUZsb2F0KV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSYXcoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJhdyhbdGhpcy5hcnIubWFwKCh2YWwsIGkpID0+IGludGVycG9sYXRpb25fMS5fbGVycChmcm9tW2ldLCB2YWwsIHQpKV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4LlJhdyA9IFJhdztcclxuICAgIGNsYXNzIFNhdHVyYXRlIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcInNhdHVyYXRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTYXR1cmF0ZShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTYXR1cmF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvdmVycmlkZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNhdHVyYXRlKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLnZhbHVlLCB0aGlzLnZhbHVlLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ29sb3JNYXRyaXguU2F0dXJhdGUgPSBTYXR1cmF0ZTtcclxuICAgIGNsYXNzIEh1ZVJvdGF0ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodmFsdWUgPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJodWVSb3RhdGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEh1ZVJvdGF0ZShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIdWVSb3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBIdWVSb3RhdGUoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20udmFsdWUsIHRoaXMudmFsdWUsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb2xvck1hdHJpeC5IdWVSb3RhdGUgPSBIdWVSb3RhdGU7XHJcbiAgICBjbGFzcyBMdW1pbmFuY2VUb0FscGhhQ29sb3JNYXRyaXgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcImx1bWluYW5jZVRvQWxwaGFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENvbG9yTWF0cml4Lkx1bWluYW5jZVRvQWxwaGFDb2xvck1hdHJpeCA9IEx1bWluYW5jZVRvQWxwaGFDb2xvck1hdHJpeDtcclxufSkoQ29sb3JNYXRyaXggPSBleHBvcnRzLkNvbG9yTWF0cml4IHx8IChleHBvcnRzLkNvbG9yTWF0cml4ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5c2IzSXRiV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5c2IzSXRiV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUlVFc2IwUkJRWGxETzBGQlVYcERMRWxCUVdsQ0xGZEJRVmNzUTBFMlJqTkNPMEZCTjBaRUxGZEJRV2xDTEZkQlFWYzdTVUZGTVVJN1VVRkhSU3haUVVGWkxGTkJRWEZDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGR0wwY3NVMEZCU1N4SFFVRmhMRkZCUVZFc1EwRkJRenRaUVVNeFFpeFJRVUZITEVkQlFXRXNSVUZCUlN4RFFVRkRPMWxCUlhoQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjRReXhEUVVGRE8xRkJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMWxCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia1FzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVFpeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdXVUZETVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEVMRU5CUVVNN1VVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJZenRaUVVNeFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETTBJc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGJFUXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFTkJRVU03VVVGRFNDeERRVUZETzFGQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVZrc1JVRkJSU3hEUVVGVE8xbEJRM2hETEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1MwRkRSanRKUVRGQ1dTeGxRVUZITEUxQk1FSm1MRU5CUVVFN1NVRkZSRHRSUVVWRkxGbEJRVzFDTEZGQlFXZENMRU5CUVVNN1dVRkJha0lzVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCV1R0WlFVUTNRaXhUUVVGSkxFZEJRV1VzVlVGQlZTeERRVUZETzFGQlEwVXNRMEZCUXp0UlFVTnFReXhSUVVGUk8xbEJRMklzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0UlFVTk5MRXRCUVVzc1EwRkJReXhIUVVGclFqdFpRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVU40UWl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrN1dVRkRNVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFTkJRVU03VVVGRFRTeEhRVUZITEVOQlFVTXNUMEZCYlVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVVVGQmJVSTdXVUZETDBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5DTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU01UXl4RFFVRkRPMUZCUTBnc1EwRkJRenRSUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZqTEVWQlFVVXNRMEZCVXp0WlFVTXhReXhOUVVGTkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UkN4RFFVRkRPMHRCUTBZN1NVRXhRbGtzYjBKQlFWRXNWMEV3UW5CQ0xFTkJRVUU3U1VGRlJEdFJRVVZGTEZsQlFXMUNMRkZCUVdkQ0xFTkJRVU03V1VGQmFrSXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJXVHRaUVVRM1FpeFRRVUZKTEVkQlFXZENMRmRCUVZjc1EwRkJRenRSUVVOQkxFTkJRVU03VVVGRGFrTXNVVUZCVVR0WlFVTmlMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXk5Q0xFTkJRVU03VVVGRFRTeExRVUZMTEVOQlFVTXNSMEZCYTBJN1dVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzVFVGQlRTeERRVUZETEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkRla0lzUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZEVFN4SFFVRkhMRU5CUVVNc1QwRkJiVUlzUlVGQlJTeEpRVUZaTzFsQlF6RkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUkN4RFFVRkRPMUZCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRkZCUVc5Q08xbEJRMmhGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXpRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUkN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRPVU1zUTBGQlF6dFJRVU5JTEVOQlFVTTdVVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJaU3hGUVVGRkxFTkJRVk03V1VGRE0wTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla1FzUTBGQlF6dExRVU5HTzBsQk1VSlpMSEZDUVVGVExGbEJNRUp5UWl4RFFVRkJPMGxCUlVRN1VVRkJRVHRaUVVOVExGTkJRVWtzUjBGQmRVSXNhMEpCUVd0Q0xFTkJRVU03VVVGSmRrUXNRMEZCUXp0UlFVaFJMRkZCUVZFN1dVRkRZaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlExb3NRMEZCUXp0TFFVTkdPMGxCVEZrc2RVTkJRVEpDTERoQ1FVdDJReXhEUVVGQk8wRkJSVWdzUTBGQlF5eEZRVGRHWjBJc1YwRkJWeXhIUVVGWUxHMUNRVUZYTEV0QlFWZ3NiVUpCUVZjc1VVRTJSak5DSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvY29sb3ItbWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcnBvbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJwb2xhdGlvblwiKTtcclxuY2xhc3MgQ29sb3JJbXBsIHtcclxufVxyXG5jbGFzcyBSR0IgZXh0ZW5kcyBDb2xvckltcGwge1xyXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB6ID0gMCwgYSA9IDEpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuciA9IDA7XHJcbiAgICAgICAgdGhpcy5nID0gMDtcclxuICAgICAgICB0aGlzLmIgPSAwO1xyXG4gICAgICAgIHRoaXMuYSA9IDE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJnYmFNYXRjaCA9IHgubWF0Y2goL15yZ2JhXFxzKj9cXChcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/LFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj8sXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqPyxcXHMqPygwfDBcXC5cXGQqfDF8MS4wKilcXHMqP1xcKSQvaSk7XHJcbiAgICAgICAgICAgIGlmIChyZ2JhTWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuciA9IHBhcnNlSW50KHJnYmFNYXRjaFsxXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nID0gcGFyc2VJbnQocmdiYU1hdGNoWzJdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmIgPSBwYXJzZUludChyZ2JhTWF0Y2hbM10sIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYSA9IHBhcnNlRmxvYXQocmdiYU1hdGNoWzRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZ2JNYXRjaCA9IHgubWF0Y2goL15yZ2JcXHMqP1xcKFxccyo/KDAwMHwwP1xcZHsxLDJ9fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFxzKj8sXFxzKj8oMDAwfDA/XFxkezEsMn18MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXHMqPyxcXHMqPygwMDB8MD9cXGR7MSwyfXwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxccyo/XFwpJC9pKTtcclxuICAgICAgICAgICAgaWYgKHJnYk1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnIgPSBwYXJzZUludChyZ2JNYXRjaFsxXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nID0gcGFyc2VJbnQocmdiTWF0Y2hbMl0sIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYiA9IHBhcnNlSW50KHJnYk1hdGNoWzNdLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuciA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMuZyA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMuYiA9IHo7XHJcbiAgICAgICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7TWF0aC5yb3VuZCh0aGlzLnIpfSwgJHtNYXRoLnJvdW5kKHRoaXMuZyl9LCAke01hdGgucm91bmQodGhpcy5iKX0sICR7dGhpcy5hfSlgO1xyXG4gICAgfVxyXG4gICAgdG9IU0woKSB7XHJcbiAgICAgICAgY29uc3QgciA9IHRoaXMuciAvIDI1NTtcclxuICAgICAgICBjb25zdCBnID0gdGhpcy5nIC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmIgLyAyNTU7XHJcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XHJcbiAgICAgICAgY29uc3QgYXZnID0gKG1heCArIG1pbikgLyAyO1xyXG4gICAgICAgIGNvbnN0IGQgPSBtYXggLSBtaW47XHJcbiAgICAgICAgbGV0IGg7XHJcbiAgICAgICAgbGV0IHM7XHJcbiAgICAgICAgY29uc3QgbCA9IGF2ZztcclxuICAgICAgICBpZiAoZCA9PT0gMCkge1xyXG4gICAgICAgICAgICBoID0gMDtcclxuICAgICAgICAgICAgcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzID0gZCAvICgxIC0gTWF0aC5hYnMoMiAqIGF2ZyAtIDEpKTtcclxuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcjpcclxuICAgICAgICAgICAgICAgICAgICBoID0gKChnIC0gYikgLyBkKSAlIDY7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGc6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9ICgoYiAtIHIpIC8gZCkgKyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBiOlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAoKHIgLSBnKSAvIGQpICsgNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaCAqPSA2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIU0woaCwgcywgbCk7XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0LCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgbW9kZVByZWZpeCA9IG1vZGUuc3Vic3RyKDAsIDMpO1xyXG4gICAgICAgIGlmIChtb2RlUHJlZml4ID09PSBcInJnYlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgSFNMKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gZnJvbS50b1JHQigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgUkdCKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJHQihpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5yLCB0aGlzLnIsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5nLCB0aGlzLmcsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5iLCB0aGlzLmIsIHQpLCBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbS5hLCB0aGlzLmEsIHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb2RlUHJlZml4ID09PSBcImhzbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSFNMKCkuaW50ZXJwb2xhdGUoZnJvbSwgdCwgbW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEhTTCBleHRlbmRzIENvbG9ySW1wbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCBhID0gMSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5oID0gMDtcclxuICAgICAgICB0aGlzLnMgPSAwO1xyXG4gICAgICAgIHRoaXMubCA9IDA7XHJcbiAgICAgICAgdGhpcy5hID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgaHNsYU1hdGNoID0geC5tYXRjaCgvXmhzbGFcXHMqP1xcKFxccyo/KDAwMHwwP1xcZHsxLDJ9fFsxLTJdXFxkXFxkfDNbMC01XVxcZHwzNjApXFxzKj8sXFxzKj8oMFxcLj8wKnwxMDBcXC4/MCp8XFxkezEsMn18XFxkezEsMn1cXC5cXGQrKVxcJVxccyo/LFxccyo/KDBcXC4/MCp8MTAwXFwuPzAqfFxcZHsxLDJ9fFxcZHsxLDJ9XFwuXFxkKylcXCVcXHMqPyxcXHMqPygwfDBcXC5cXGQqfDF8MS4wKilcXHMqP1xcKSQvaSk7XHJcbiAgICAgICAgICAgIGlmIChoc2xhTWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaCA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucyA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzJdKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubCA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzNdKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYSA9IHBhcnNlRmxvYXQoaHNsYU1hdGNoWzRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBoc2xNYXRjaCA9IHgubWF0Y2goL15oc2xcXHMqP1xcKFxccyo/KDAwMHwwP1xcZHsxLDJ9fFsxLTJdXFxkXFxkfDNbMC01XVxcZHwzNjApXFxzKj8sXFxzKj8oMFxcLj8wKnwxMDBcXC4/MCp8XFxkezEsMn18XFxkezEsMn1cXC5cXGQrKVxcJVxccyo/LFxccyo/KDBcXC4/MCp8MTAwXFwuPzAqfFxcZHsxLDJ9fFxcZHsxLDJ9XFwuXFxkKylcXCVcXHMqP1xcKSQvaSk7XHJcbiAgICAgICAgICAgIGlmIChoc2xNYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oID0gcGFyc2VGbG9hdChoc2xNYXRjaFsxXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnMgPSBwYXJzZUZsb2F0KGhzbE1hdGNoWzJdKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubCA9IHBhcnNlRmxvYXQoaHNsTWF0Y2hbM10pIC8gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnMgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLmwgPSB6O1xyXG4gICAgICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaCAlIDM2MH0sICR7dGhpcy5zICogMTAwfSUsICR7dGhpcy5sICogMTAwfSUsICR7dGhpcy5hfSlgO1xyXG4gICAgfVxyXG4gICAgdG9SR0IoKSB7XHJcbiAgICAgICAgbGV0IHIgPSAwO1xyXG4gICAgICAgIGxldCBnID0gMDtcclxuICAgICAgICBsZXQgYiA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMucyAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gKDEgLSBNYXRoLmFicygyICogdGhpcy5sIC0gMSkpICogdGhpcy5zO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKHRoaXMuaCAvIDYwKSAlIDIgLSAxKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmggPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgciA9IGM7XHJcbiAgICAgICAgICAgICAgICBnID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmggPCAxMjApIHtcclxuICAgICAgICAgICAgICAgIHIgPSB4O1xyXG4gICAgICAgICAgICAgICAgZyA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oIDwgMTgwKSB7XHJcbiAgICAgICAgICAgICAgICBnID0gYztcclxuICAgICAgICAgICAgICAgIGIgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaCA8IDI0MCkge1xyXG4gICAgICAgICAgICAgICAgZyA9IHg7XHJcbiAgICAgICAgICAgICAgICBiID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmggPCAxODApIHtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICAgICAgciA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oIDwgMjQwKSB7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgICAgIHIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSB0aGlzLmwgLSAwLjUgKiBjO1xyXG4gICAgICAgICAgICByICs9IG07XHJcbiAgICAgICAgICAgIGcgKz0gbTtcclxuICAgICAgICAgICAgYiArPSBtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJHQihyICogMjU1LCBnICogMjU1LCBiICogMjU1KTtcclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQsIG1vZGUpIHtcclxuICAgICAgICBjb25zdCBtb2RlUHJlZml4ID0gbW9kZS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgaWYgKG1vZGVQcmVmaXggPT09IFwiaHNsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBSR0IpIHtcclxuICAgICAgICAgICAgICAgIGZyb20gPSBmcm9tLnRvSFNMKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBIU0wpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoMSA9IGZyb20uaDtcclxuICAgICAgICAgICAgICAgIGxldCBoMiA9IHRoaXMuaDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBoMSAtIGgyO1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gMTgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiaHNsLXNob3J0ZXN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSBcImhzbC1sb25nZXN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gMCAmJiBtb2RlID09PSBcImhzbC1jbG9ja3dpc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGgyICs9IDM2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCAmJiBtb2RlID09PSBcImhzbC1jb3VudGVyY2xvY2t3aXNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBoMSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEhTTChpbnRlcnBvbGF0aW9uXzEuX2xlcnAoaDEsIGgyLCB0KSAlIDM2MCwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ucywgdGhpcy5zLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubCwgdGhpcy5sLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20uYSwgdGhpcy5hLCB0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobW9kZVByZWZpeCA9PT0gXCJyZ2JcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JHQigpLmludGVycG9sYXRlKGZyb20sIHQsIG1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5jbGFzcyBDb2xvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQsIHggPSAwLCB5ID0gMCwgeiA9IDAsIGEgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gQ29sb3IuREVGQVVMVF9NT0RFO1xyXG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicmdiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQih4LCB5LCB6LCBhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybWF0ID09PSBcImhzbFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1wbCA9IG5ldyBIU0woeCwgeSwgeiwgYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZihcInJnYlwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQihmb3JtYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm1hdC5pbmRleE9mKFwiaHNsXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltcGwgPSBuZXcgSFNMKGZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybWF0LmluZGV4T2YoXCIjXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgYiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbSA9IGZvcm1hdC5tYXRjaCgvXiMoWzAtOWEtZkEtRl17M30pJC9pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHBhcnNlSW50KG1bMV0uY2hhckF0KDApLCAxNikgKiAweDExO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChtWzFdLmNoYXJBdCgxKSwgMTYpICogMHgxMTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQobVsxXS5jaGFyQXQoMiksIDE2KSAqIDB4MTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtID0gZm9ybWF0Lm1hdGNoKC9eIyhbMC05YS1mQS1GXXs2fSkkL2kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChtWzFdLnN1YnN0cigwLCAyKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gcGFyc2VJbnQobVsxXS5zdWJzdHIoMiwgMiksIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IHBhcnNlSW50KG1bMV0uc3Vic3RyKDQsIDIpLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsID0gbmV3IFJHQihyLCBnLCBiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltcGwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHBhcnNlKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihjc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICBjb25zdCBjID0gbmV3IENvbG9yKCk7XHJcbiAgICAgICAgYy5pbXBsID0gdGhpcy5pbXBsLmludGVycG9sYXRlKGZyb20uaW1wbCwgdCwgdGhpcy5tb2RlKTtcclxuICAgICAgICBjLm1vZGUgPSB0aGlzLm1vZGU7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbn1cclxuQ29sb3IuREVGQVVMVF9NT0RFID0gXCJyZ2JcIjtcclxuZXhwb3J0cy5Db2xvciA9IENvbG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjJ4dmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVWQkxHOUVRVUY1UXp0QlFVbDZRenREUVVkRE8wRkJSVVFzVTBGQlZTeFRRVUZSTEZOQlFWTTdTVUZSZWtJc1dVRkJXU3hKUVVGeFFpeERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRMRVZCUVVVc1NVRkJXU3hEUVVGRExFVkJRVVVzU1VGQldTeERRVUZETzFGQlF6ZEZMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJVa1lzVFVGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTmtMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRFpDeE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVTF3UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc2RVeEJRWFZNTEVOQlFVTXNRMEZCUXp0WlFVTnVUaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRrSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU53UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEzQkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNRMEZCUXp0WlFVTkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNORXBCUVRSS0xFTkJRVU1zUTBGQlF6dFpRVU4yVEN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRkRUlzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMjVETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTllMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExZ3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFlpeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRkZCUVZFN1VVRkRZaXhOUVVGTkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRhRWNzUTBGQlF6dEpRVU5OTEV0QlFVczdVVUZEVml4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTjJRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOMlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU4yUWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlV5eERRVUZETzFGQlEyUXNTVUZCU1N4RFFVRlRMRU5CUVVNN1VVRkRaQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmFMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFRpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOYUxFdEJRVXNzUTBGQlF6dHZRa0ZEU2l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YjBKQlEzUkNMRXRCUVVzc1EwRkJRenRuUWtGRFVpeExRVUZMTEVOQlFVTTdiMEpCUTBvc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTjBRaXhMUVVGTExFTkJRVU03WjBKQlExSXNTMEZCU3l4RFFVRkRPMjlDUVVOS0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzUzBGQlN5eERRVUZETzJkQ1FVTlNPMjlDUVVORkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTA0c1MwRkJTeXhEUVVGRE8xbEJRMVlzUTBGQlF6dFpRVU5FTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRWaXhEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eEpRVUZsTEVWQlFVVXNRMEZCVXl4RlFVRkZMRWxCUVhWQ08xRkJRM0JGTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFVkJRVVVzUTBGQlF5eERRVUZETEZWQlFWVXNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTNSQ0xFTkJRVU03V1VGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVrZ3NRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNWVUZCVlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5xUkN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdRMEZEUmp0QlFVVkVMRk5CUVZVc1UwRkJVU3hUUVVGVE8wbEJVWHBDTEZsQlFWa3NTVUZCY1VJc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRSUVVNM1JTeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFWSkdMRTFCUVVNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRFpDeE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVU5rTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRk5jRUlzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETERKTVFVRXlUQ3hEUVVGRExFTkJRVU03V1VGRGRrNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnNReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdaMEpCUTNoRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0blFrRkRlRU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1EwRkJRenRaUVVORUxFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1owdEJRV2RMTEVOQlFVTXNRMEZCUXp0WlFVTXpUQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGRrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8xbEJRM3BETEVOQlFVTTdVVUZEU0N4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEV0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5pTEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOb1JpeERRVUZETzBsQlEwMHNTMEZCU3p0UlFVTldMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5XTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTldMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1JDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOb1FpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOT0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVWl4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEVGl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMDRzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTk9MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFVpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFRpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNoQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTA0c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5TTEVOQlFVTTdXVUZEUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTlFMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFVDeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTFRc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRelZETEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJaU3hGUVVGRkxFTkJRVk1zUlVGQlJTeEpRVUYxUWp0UlFVTndSU3hOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhWUVVGVkxFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFSXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU4wUWl4RFFVRkRPMWxCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hDTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaENMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRM0pDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGVrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUXpWQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU5pTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dDNRa0ZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN05FSkJRM0JDTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNN2QwSkJRMW9zUTBGQlF6dHZRa0ZEU0N4RFFVRkRPMmRDUVVOSUxFTkJRVU03WjBKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlF6TkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPelJDUVVOaUxFVkJRVVVzU1VGQlNTeEhRVUZITEVOQlFVTTdkMEpCUTFvc1EwRkJRenQzUWtGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdORUpCUTNCQ0xFVkJRVVVzU1VGQlNTeEhRVUZITEVOQlFVTTdkMEpCUTFvc1EwRkJRenR2UWtGRFNDeERRVUZETzJkQ1FVTklMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRla01zUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXp0blFrRkRXaXhEUVVGRE8yZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEhOQ1FVRnpRaXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEYUVRc1JVRkJSU3hKUVVGSkxFZEJRVWNzUTBGQlF6dG5Ra0ZEV2l4RFFVRkRPMmRDUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4eFFrRkJTeXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRrZ3NRMEZCUXp0UlFVTklMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNWVUZCVlN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5xUkN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdRMEZEUmp0QlFVVkVPMGxCVVVVc1dVRkJXU3hOUVVFclFpeEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0UlFVNW9SeXhUUVVGSkxFZEJRWE5DTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNN1VVRlBiRVFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFTXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZET1VJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZET1VJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM0pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFZpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMVlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOV0xFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNRMEZCUXp0blFrRkROME1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyWXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRlRU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZEZUVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRuUWtGRE1VTXNRMEZCUXp0blFrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEVGl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhEUVVGRE8yOUNRVU42UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRaaXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8zZENRVU53UXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPM2RDUVVOd1F5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTjBReXhEUVVGRE8yZENRVU5JTEVOQlFVTTdaMEpCUTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OUNMRU5CUVVNN1VVRkRTQ3hEUVVGRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZGQlFWRTdVVUZEWWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVkQlFXdENPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU40UWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOeVFpeERRVUZETzBsQlEwZ3NRMEZCUXp0SlFVTk5MRWRCUVVjc1EwRkJReXhQUVVGdFFpeEZRVUZGTEVsQlFWazdVVUZETVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1VVRkJaMEk3VVVGRE5VUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBJc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGJFUXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZET1VNc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTVUZCVnl4RlFVRkZMRU5CUVZNN1VVRkRka01zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOMFFpeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRia0lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTllMRU5CUVVNN08wRkJMMFJoTEd0Q1FVRlpMRWRCUVhOQ0xFdEJRVXNzUTBGQlF6dEJRVVI0UkN4elFrRnBSVU1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvY29sb3IudHNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jbGFzcyBNYXRyaXgge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWVzKSB7XHJcbiAgICAgICAgdGhpcy5hcnIgPSBbXTtcclxuICAgICAgICB0aGlzLmFyciA9IHRoaXMuYXJyLmNvbmNhdCguLi52YWx1ZXMpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeChbY3NzLnNwbGl0KFwiIFwiKS5tYXAocGFyc2VGbG9hdCldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4KFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW3RoaXMuYXJyLm1hcCgodmFsLCBpKSA9PiBpbnRlcnBvbGF0aW9uXzEuX2xlcnAoZnJvbVtpXSwgdmFsLCB0KSldKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hdHJpeCA9IE1hdHJpeDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGMGNtbDRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJXRjBjbWw0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSVUVzYjBSQlFYbERPMEZCUlhwRE8wbEJSVVVzV1VGQldTeE5RVUZyUWp0UlFVUjJRaXhSUVVGSExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlJYaENMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCUTAwc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFZEJRV3RDTzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUkN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVFSXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRV2xDTzFGQlF6ZEVMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVZrc1JVRkJSU3hEUVVGVE8xRkJRM2hETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaEZMRU5CUVVNN1EwRkRSanRCUVRWQ1JDeDNRa0UwUWtNaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL21hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNsYXNzIE51bWJlck9wdGlvbmFsTnVtYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG4sIG8pIHtcclxuICAgICAgICB0aGlzLm4gPSBuO1xyXG4gICAgICAgIHRoaXMubyA9IG87XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMubyAhPT0gdW5kZWZpbmVkKSA/IGAke3RoaXMubn0sJHt0aGlzLm99YCA6IHRoaXMubi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2UoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgaWYgKHRva3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKHBhcnNlRmxvYXQodG9rc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcihwYXJzZUZsb2F0KHRva3NbMF0pLCBwYXJzZUZsb2F0KHRva3NbMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJPcHRpb25hbE51bWJlcigwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoZWxlbWVudCwgYXR0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpKTtcclxuICAgIH1cclxuICAgIHNldChlbGVtZW50LCBhdHRyLCBvdmVycmlkZSkge1xyXG4gICAgICAgIGlmIChvdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIG92ZXJyaWRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgaWYgKGZyb20ubyAhPT0gdW5kZWZpbmVkICYmIHRoaXMubyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubywgdGhpcy5vLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZyb20ubyA9PT0gdW5kZWZpbmVkICYmIHRoaXMubyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKDAsIHRoaXMubywgdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmcm9tLm8gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wdGlvbmFsTnVtYmVyKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm4sIHRoaXMubiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLm8sIDAsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyT3B0aW9uYWxOdW1iZXIoaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ubiwgdGhpcy5uLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVyT3B0aW9uYWxOdW1iZXIgPSBOdW1iZXJPcHRpb25hbE51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlMVzl3ZEdsdmJtRnNMVzUxYldKbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW01MWJXSmxjaTF2Y0hScGIyNWhiQzF1ZFcxaVpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTeHZSRUZCZVVNN1FVRkZla003U1VGRFJTeFpRVUZ0UWl4RFFVRlRMRVZCUVZNc1EwRkJWVHRSUVVFMVFpeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlJPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQlV6dEpRVUZITEVOQlFVTTdTVUZETlVNc1VVRkJVVHRSUVVOaUxFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETlVVc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEhRVUZyUWp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtRc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxHOUNRVUZ2UWl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSU3hEUVVGRE8xRkJRMGdzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNrTXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hIUVVGSExFTkJRVU1zVDBGQmJVSXNSVUZCUlN4SlFVRlpPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJRMDBzUjBGQlJ5eERRVUZETEU5QlFXMUNMRVZCUVVVc1NVRkJXU3hGUVVGRkxGRkJRU3RDTzFGQlF6TkZMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVRCQ0xFVkJRVVVzUTBGQlV6dFJRVU4wUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtRc1RVRkJUU3hEUVVGRExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUml4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4dlFrRkJiMElzUTBGQlF5eHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtZc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVFUXNUVUZCVFN4RFFVRkRMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNjVUpCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwR0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRTFCUVUwc1EwRkJReXhKUVVGSkxHOUNRVUZ2UWl4RFFVRkRMSEZDUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVRc1EwRkJRenRKUVVOSUxFTkJRVU03UTBGRFJqdEJRWFJEUkN4dlJFRnpRME1pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50c1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9wb2ludFwiKTtcclxuY2xhc3MgUGF0aFNlZ21lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29tbWFuZCkge1xyXG4gICAgICAgIHRoaXMuY29tbWFuZCA9IGNvbW1hbmQ7XHJcbiAgICB9XHJcbiAgICBwYXJzZShjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJncyhjc3Muc3Vic3RyKDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRJbnN0YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChlbGVtZW50LCBhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikpO1xyXG4gICAgfVxyXG4gICAgc2V0KGVsZW1lbnQsIGF0dHIsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgaWYgKG92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgb3ZlcnJpZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBhdGhTZWdtZW50ID0gUGF0aFNlZ21lbnQ7XHJcbihmdW5jdGlvbiAoUGF0aFNlZ21lbnQpIHtcclxuICAgIGNsYXNzIFNpbmdsZUxlbmd0aCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBsID0gMCkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5sID0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5sLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKGJhc2VfMS5fTGVuZ3RoUGFyc2UoY3NzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZShiYXNlXzEuX0xlbmd0aEludGVycG9sYXRlKGZyb20ubCwgdGhpcy5sLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuU2luZ2xlTGVuZ3RoID0gU2luZ2xlTGVuZ3RoO1xyXG4gICAgY2xhc3MgU2luZ2xlUG9pbnQgZXh0ZW5kcyBQYXRoU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29tbWFuZCwgcCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuY29tbWFuZH0gJHt0aGlzLnAudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wLnBhcnNlKGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wLmludGVycG9sYXRlKGZyb20ucCwgdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LlNpbmdsZVBvaW50ID0gU2luZ2xlUG9pbnQ7XHJcbiAgICBjbGFzcyBEb3VibGVQb2ludCBleHRlbmRzIFBhdGhTZWdtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBwMSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBwMiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnAxID0gcDE7XHJcbiAgICAgICAgICAgIHRoaXMucDIgPSBwMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbW1hbmR9ICR7dGhpcy5wMS50b1N0cmluZygpfSAke3RoaXMucDIudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMucDEucGFyc2UodG9rc1swXSksIHRoaXMucDIucGFyc2UodG9rc1sxXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wMS5pbnRlcnBvbGF0ZShmcm9tLnAxLCB0KSwgdGhpcy5wMi5pbnRlcnBvbGF0ZShmcm9tLnAyLCB0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuRG91YmxlUG9pbnQgPSBEb3VibGVQb2ludDtcclxuICAgIGNsYXNzIFRyaXBsZVBvaW50IGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIHAxID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHAyID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHAzID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIHRoaXMucDEgPSBwMTtcclxuICAgICAgICAgICAgdGhpcy5wMiA9IHAyO1xyXG4gICAgICAgICAgICB0aGlzLnAzID0gcDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jb21tYW5kfSAke3RoaXMucDEudG9TdHJpbmcoKX0gJHt0aGlzLnAyLnRvU3RyaW5nKCl9ICR7dGhpcy5wMy50b1N0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rcyA9IGNzcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkSW5zdGFuY2UodGhpcy5wMS5wYXJzZSh0b2tzWzBdKSwgdGhpcy5wMi5wYXJzZSh0b2tzWzFdKSwgdGhpcy5wMy5wYXJzZSh0b2tzWzJdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludGVycG9sYXRlKGZyb20sIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnAxLmludGVycG9sYXRlKGZyb20ucDEsIHQpLCB0aGlzLnAyLmludGVycG9sYXRlKGZyb20ucDIsIHQpLCB0aGlzLnAzLmludGVycG9sYXRlKGZyb20ucDMsIHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5UcmlwbGVQb2ludCA9IFRyaXBsZVBvaW50O1xyXG4gICAgY2xhc3MgTW92ZVRvQWJzIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJNXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvQWJzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTW92ZVRvQWJzID0gTW92ZVRvQWJzO1xyXG4gICAgY2xhc3MgTW92ZVRvUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJtXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvUmVsKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZVRvUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTW92ZVRvUmVsID0gTW92ZVRvUmVsO1xyXG4gICAgY2xhc3MgQ2xvc2VQYXRoIGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihcIlpcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJaXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ2xvc2VQYXRoID0gQ2xvc2VQYXRoO1xyXG4gICAgY2xhc3MgTGluZVRvQWJzIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJMXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvQWJzKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvQWJzID0gTGluZVRvQWJzO1xyXG4gICAgY2xhc3MgTGluZVRvUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJsXCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvUmVsKHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvUmVsID0gTGluZVRvUmVsO1xyXG4gICAgY2xhc3MgTGluZVRvSG9yaXpvbnRhbEFicyBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaCA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJIXCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9Ib3Jpem9udGFsQWJzKGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvSG9yaXpvbnRhbEFicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb0hvcml6b250YWxBYnMgPSBMaW5lVG9Ib3Jpem9udGFsQWJzO1xyXG4gICAgY2xhc3MgTGluZVRvSG9yaXpvbnRhbFJlbCBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaCA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJoXCIsIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9Ib3Jpem9udGFsUmVsKGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvSG9yaXpvbnRhbFJlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb0hvcml6b250YWxSZWwgPSBMaW5lVG9Ib3Jpem9udGFsUmVsO1xyXG4gICAgY2xhc3MgTGluZVRvVmVydGljYWxBYnMgZXh0ZW5kcyBTaW5nbGVMZW5ndGgge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHYgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiVlwiLCB2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZSh2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGluZVRvVmVydGljYWxBYnModik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9WZXJ0aWNhbEFicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkxpbmVUb1ZlcnRpY2FsQWJzID0gTGluZVRvVmVydGljYWxBYnM7XHJcbiAgICBjbGFzcyBMaW5lVG9WZXJ0aWNhbFJlbCBleHRlbmRzIFNpbmdsZUxlbmd0aCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodiA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJ2XCIsIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lVG9WZXJ0aWNhbEFicyh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmVUb1ZlcnRpY2FsQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuTGluZVRvVmVydGljYWxSZWwgPSBMaW5lVG9WZXJ0aWNhbFJlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9DdWJpY0FicyBleHRlbmRzIFRyaXBsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYyA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBkLCBlLCBmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMxID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYiBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBiIDogbmV3IHBvaW50XzEuUG9pbnQoYywgZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGMgOiBuZXcgcG9pbnRfMS5Qb2ludChlLCBmKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJDXCIsIGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UoYzEsIGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljQWJzKGMxLCBjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNBYnMgPSBDdXJ2ZVRvQ3ViaWNBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNSZWwgZXh0ZW5kcyBUcmlwbGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgZCwgZSwgZikge1xyXG4gICAgICAgICAgICBjb25zdCBjMSA9IGEgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYSA6IG5ldyBwb2ludF8xLlBvaW50KGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gYyBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBjIDogbmV3IHBvaW50XzEuUG9pbnQoZSwgZik7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiY1wiLCBjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1JlbChjMSwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljUmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb0N1YmljUmVsID0gQ3VydmVUb0N1YmljUmVsO1xyXG4gICAgY2xhc3MgQ3VydmVUb0N1YmljU21vb3RoQWJzIGV4dGVuZHMgRG91YmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJTXCIsIGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMiwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aEFicyhjMiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvQ3ViaWNTbW9vdGhBYnMgPSBDdXJ2ZVRvQ3ViaWNTbW9vdGhBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvQ3ViaWNTbW9vdGhSZWwgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihcInNcIiwgYzIsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMyLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb0N1YmljU21vb3RoUmVsKGMyLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9DdWJpY1Ntb290aFJlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9DdWJpY1Ntb290aFJlbCA9IEN1cnZlVG9DdWJpY1Ntb290aFJlbDtcclxuICAgIGNsYXNzIEN1cnZlVG9RdWFkcmF0aWNBYnMgZXh0ZW5kcyBEb3VibGVQb2ludCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYSA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBiID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGMsIGQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzEgPSBhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGEgOiBuZXcgcG9pbnRfMS5Qb2ludChhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGIgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gYiA6IG5ldyBwb2ludF8xLlBvaW50KGMsIGQpO1xyXG4gICAgICAgICAgICBzdXBlcihcIlFcIiwgYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZEluc3RhbmNlKGMxLCBwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY0FicyhjMSwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY0FicyA9IEN1cnZlVG9RdWFkcmF0aWNBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljUmVsIGV4dGVuZHMgRG91YmxlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGEgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYiA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMxID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgc3VwZXIoXCJxXCIsIGMxLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShjMSwgcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNSZWwoYzEsIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkN1cnZlVG9RdWFkcmF0aWNSZWwgPSBDdXJ2ZVRvUXVhZHJhdGljUmVsO1xyXG4gICAgY2xhc3MgQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicyBleHRlbmRzIFNpbmdsZVBvaW50IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIHkgPSAwKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFwiVFwiLCBwIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IHAgOiBuZXcgcG9pbnRfMS5Qb2ludChwLCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkSW5zdGFuY2UocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnMocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoQWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGF0aFNlZ21lbnQuQ3VydmVUb1F1YWRyYXRpY1Ntb290aEFicyA9IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhBYnM7XHJcbiAgICBjbGFzcyBDdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsIGV4dGVuZHMgU2luZ2xlUG9pbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHAgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgeSA9IDApIHtcclxuICAgICAgICAgICAgc3VwZXIoXCJ0XCIsIHAgaW5zdGFuY2VvZiBwb2ludF8xLlBvaW50ID8gcCA6IG5ldyBwb2ludF8xLlBvaW50KHAsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbChwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdEluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1cnZlVG9RdWFkcmF0aWNTbW9vdGhSZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQYXRoU2VnbWVudC5DdXJ2ZVRvUXVhZHJhdGljU21vb3RoUmVsID0gQ3VydmVUb1F1YWRyYXRpY1Ntb290aFJlbDtcclxuICAgIGNsYXNzIEFyY1RvIGV4dGVuZHMgUGF0aFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIHIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgcCA9IG5ldyBwb2ludF8xLlBvaW50KDAsIDApLCB4QXhpc1JvdGF0ZSA9IDAsIGxhcmdlQXJjID0gZmFsc2UsIHN3ZWVwQ2xvY2t3aXNlID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb21tYW5kKTtcclxuICAgICAgICAgICAgdGhpcy5yID0gcjtcclxuICAgICAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICAgICAgdGhpcy54QXhpc1JvdGF0ZSA9IHhBeGlzUm90YXRlO1xyXG4gICAgICAgICAgICB0aGlzLmxhcmdlQXJjID0gbGFyZ2VBcmM7XHJcbiAgICAgICAgICAgIHRoaXMuc3dlZXBDbG9ja3dpc2UgPSBzd2VlcENsb2Nrd2lzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnIudG9TdHJpbmcoKX0gJHt0aGlzLnhBeGlzUm90YXRlfSAke3RoaXMubGFyZ2VBcmMgPyAxIDogMH0gJHt0aGlzLnN3ZWVwQ2xvY2t3aXNlID8gMSA6IDB9ICR7dGhpcy5wLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tzID0gY3NzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJbnN0YW5jZSh0aGlzLnIucGFyc2UodG9rc1swXSksIHRoaXMucC5wYXJzZSh0b2tzWzRdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgdG9rc1syXSA9PT0gXCIxXCIsIHRva3NbM10gPT09IFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEluc3RhbmNlKHRoaXMuci5pbnRlcnBvbGF0ZShmcm9tLnIsIHQpLCB0aGlzLnAuaW50ZXJwb2xhdGUoZnJvbS5wLCB0KSwgaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20ueEF4aXNSb3RhdGUsIHRoaXMueEF4aXNSb3RhdGUsIHQpLCAodCA8IDAuNSkgPyBmcm9tLmxhcmdlQXJjIDogdGhpcy5sYXJnZUFyYywgKHQgPCAwLjUpID8gZnJvbS5zd2VlcENsb2Nrd2lzZSA6IHRoaXMuc3dlZXBDbG9ja3dpc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkFyY1RvID0gQXJjVG87XHJcbiAgICBjbGFzcyBBcmNUb0FicyBleHRlbmRzIEFyY1RvIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCwgZSwgZiwgZykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgbGV0IHhBeGlzUm90YXRlID0gMDtcclxuICAgICAgICAgICAgbGV0IGxhcmdlQXJjID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBzd2VlcENsb2Nrd2lzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCAmJiBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBnICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKFwiQVwiLCByLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShyLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9BYnMociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcmNUb0FicygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkFyY1RvQWJzID0gQXJjVG9BYnM7XHJcbiAgICBjbGFzcyBBcmNUb1JlbCBleHRlbmRzIEFyY1RvIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhID0gbmV3IHBvaW50XzEuUG9pbnQoMCwgMCksIGIgPSBuZXcgcG9pbnRfMS5Qb2ludCgwLCAwKSwgYywgZCwgZSwgZiwgZykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gYSBpbnN0YW5jZW9mIHBvaW50XzEuUG9pbnQgPyBhIDogbmV3IHBvaW50XzEuUG9pbnQoYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCA/IGIgOiBuZXcgcG9pbnRfMS5Qb2ludChjLCBkKTtcclxuICAgICAgICAgICAgbGV0IHhBeGlzUm90YXRlID0gMDtcclxuICAgICAgICAgICAgbGV0IGxhcmdlQXJjID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBzd2VlcENsb2Nrd2lzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCAmJiBiIGluc3RhbmNlb2YgcG9pbnRfMS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXNSb3RhdGUgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VBcmMgPSBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBnICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBDbG9ja3dpc2UgPSBnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKFwiYVwiLCByLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRJbnN0YW5jZShyLCBwLCB4QXhpc1JvdGF0ZSwgbGFyZ2VBcmMsIHN3ZWVwQ2xvY2t3aXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJjVG9SZWwociwgcCwgeEF4aXNSb3RhdGUsIGxhcmdlQXJjLCBzd2VlcENsb2Nrd2lzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcmNUb1JlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBhdGhTZWdtZW50LkFyY1RvUmVsID0gQXJjVG9SZWw7XHJcbn0pKFBhdGhTZWdtZW50ID0gZXhwb3J0cy5QYXRoU2VnbWVudCB8fCAoZXhwb3J0cy5QYXRoU2VnbWVudCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBhQzF6WldkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNHRjBhQzF6WldkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlJVRXNiMFJCUVhsRE8wRkJRM3BETEdsRFFVRnJSVHRCUVVOc1JTeHRRMEZCWjBNN1FVRkZhRU03U1VGRFJTeFpRVUZ0UWl4UFFVRTBRanRSUVVFMVFpeFpRVUZQTEVkQlFWQXNUMEZCVHl4RFFVRnhRanRKUVVGSExFTkJRVU03U1VGRk5VTXNTMEZCU3l4RFFVRkRMRWRCUVd0Q08xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRE8xRkJRMmhETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1IwRkJSeXhEUVVGRExFOUJRVzFDTEVWQlFVVXNTVUZCV1R0UlFVTXhReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVOTkxFZEJRVWNzUTBGQlF5eFBRVUZ0UWl4RlFVRkZMRWxCUVZrc1JVRkJSU3hSUVVGelFqdFJRVU5zUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5zUkN4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFRpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhEUVVGRE8wbEJRMGdzUTBGQlF6dERRVWxHTzBGQmRrSkVMR3REUVhWQ1F6dEJRVVZFTEZkQlFXbENMRmRCUVZjN1NVRkpNVUlzYTBKQlFXMURMRk5CUVZFc1YwRkJWenRSUVVOd1JDeFpRVUZaTEU5QlFUaENMRVZCUVZNc1NVRkJXU3hEUVVGRE8xbEJRemxFTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVSclF5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMUZCUldoRkxFTkJRVU03VVVGRFRTeFJRVUZSTzFsQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGFFUXNRMEZCUXp0UlFVTk5MRk5CUVZNc1EwRkJReXhIUVVGWE8xbEJRekZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExHMUNRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVd0Q0xFVkJRVVVzUTBGQlV6dFpRVU01UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eDVRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UlN4RFFVRkRPMHRCUjBZN1NVRm1jVUlzZDBKQlFWa3NaVUZsYWtNc1EwRkJRVHRKUVVORUxHbENRVUZyUXl4VFFVRlJMRmRCUVZjN1VVRkRia1FzV1VGQldTeFBRVUV3UXl4RlFVRlRMRWxCUVZjc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJSaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdXVUZFT0VNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQmVVSTdVVUZGZWtZc1EwRkJRenRSUVVOTkxGRkJRVkU3V1VGRFlpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVOb1JDeERRVUZETzFGQlEwMHNVMEZCVXl4RFFVRkRMRWRCUVZjN1dVRkRNVUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eERRVUZETzFGQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVdsQ0xFVkJRVVVzUTBGQlV6dFpRVU0zUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzUTBGQlF6dExRVWRHTzBsQlpuRkNMSFZDUVVGWExHTkJaV2hETEVOQlFVRTdTVUZEUkN4cFFrRkJhME1zVTBGQlVTeFhRVUZYTzFGQlEyNUVMRmxCUVZrc1QwRkJPRUlzUlVGQlV5eExRVUZaTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlV5eExRVUZaTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFFZ3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJSR3RETEU5QlFVVXNSMEZCUml4RlFVRkZMRU5CUVhsQ08xbEJRVk1zVDBGQlJTeEhRVUZHTEVWQlFVVXNRMEZCZVVJN1VVRkZiRWdzUTBGQlF6dFJRVU5OTEZGQlFWRTdXVUZEWWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJRM1pGTEVOQlFVTTdVVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJWenRaUVVNeFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6VkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VVXNRMEZCUXp0UlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGcFFpeEZRVUZGTEVOQlFWTTdXVUZETjBNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VZc1EwRkJRenRMUVVkR08wbEJhRUp4UWl4MVFrRkJWeXhqUVdkQ2FFTXNRMEZCUVR0SlFVTkVMR2xDUVVGclF5eFRRVUZSTEZkQlFWYzdVVUZEYmtRc1dVRkJXU3hQUVVGclFpeEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZUTEV0QlFWa3NTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU40U1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRWMwSXNUMEZCUlN4SFFVRkdMRVZCUVVVc1EwRkJlVUk3V1VGQlV5eFBRVUZGTEVkQlFVWXNSVUZCUlN4RFFVRjVRanRaUVVGVExFOUJRVVVzUjBGQlJpeEZRVUZGTEVOQlFYbENPMUZCUlRGSkxFTkJRVU03VVVGRFRTeFJRVUZSTzFsQlEySXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRPMUZCUXpkR0xFTkJRVU03VVVGRFRTeFRRVUZUTEVOQlFVTXNSMEZCVnp0WlFVTXhRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFY3NRMEZCUXp0UlFVTk5MRmRCUVZjc1EwRkJReXhKUVVGcFFpeEZRVUZGTEVOQlFWTTdXVUZETjBNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlNDeERRVUZETzB0QlIwWTdTVUZvUW5GQ0xIVkNRVUZYTEdOQlowSm9ReXhEUVVGQk8wbEJSVVFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUjNoRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UWtGQlV5eFpRVmx5UWl4RFFVRkJPMGxCUTBRc1pVRkJkVUlzVTBGQlVTeFhRVUZYTzFGQlIzaERMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVmtzUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrUXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhEUVVGUk8xbEJRek5DTEUxQlFVMHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UWl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzB0QlEwWTdTVUZhV1N4eFFrRkJVeXhaUVZseVFpeERRVUZCTzBsQlJVUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJRM2hETzFsQlEwVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVU5OTEZGQlFWRTdXVUZEWWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVU5OTEZOQlFWTXNRMEZCUXl4SFFVRlhPMWxCUXpGQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzcENMRU5CUVVNN1VVRkRUU3hYUVVGWExFTkJRVU1zU1VGQlpTeEZRVUZGTEVOQlFWTTdXVUZETTBNc1RVRkJUU3hEUVVGRExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEZWtJc1EwRkJRenRMUVVOR08wbEJhRUpaTEhGQ1FVRlRMRmxCWjBKeVFpeERRVUZCTzBsQlJVUXNaVUZCZFVJc1UwRkJVU3hYUVVGWE8xRkJSM2hETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRaUVVNMVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka1FzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlJPMWxCUXpOQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFFpeERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8wdEJRMFk3U1VGYVdTeHhRa0ZCVXl4WlFWbHlRaXhEUVVGQk8wbEJRMFFzWlVGQmRVSXNVMEZCVVN4WFFVRlhPMUZCUjNoRExGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMHRCUTBZN1NVRmFXU3h4UWtGQlV5eFpRVmx5UWl4RFFVRkJPMGxCUlVRc2VVSkJRV2xETEZOQlFWRXNXVUZCV1R0UlFVTnVSQ3haUVVGWkxFbEJRVmtzUTBGQlF6dFpRVU4yUWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaENMRU5CUVVNN1VVRkRUU3hoUVVGaExFTkJRVU1zUTBGQlV6dFpRVU0xUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1F5eERRVUZETzFGQlEwMHNaVUZCWlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRMjVETEVOQlFVTTdTMEZEUmp0SlFWWlpMQ3RDUVVGdFFpeHpRa0ZWTDBJc1EwRkJRVHRKUVVORUxIbENRVUZwUXl4VFFVRlJMRmxCUVZrN1VVRkRia1FzV1VGQldTeEpRVUZaTEVOQlFVTTdXVUZEZGtJc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVOQlFWTTdXVUZETlVJc1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dFJRVU51UXl4RFFVRkRPMHRCUTBZN1NVRldXU3dyUWtGQmJVSXNjMEpCVlM5Q0xFTkJRVUU3U1VGRlJDeDFRa0ZCSzBJc1UwRkJVU3haUVVGWk8xRkJRMnBFTEZsQlFWa3NTVUZCV1N4RFFVRkRPMWxCUTNaQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRUlzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RFFVRlRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeERMRU5CUVVNN1VVRkRUU3hsUVVGbE8xbEJRM0JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEYWtNc1EwRkJRenRMUVVOR08wbEJWbGtzTmtKQlFXbENMRzlDUVZVM1FpeERRVUZCTzBsQlEwUXNkVUpCUVN0Q0xGTkJRVkVzV1VGQldUdFJRVU5xUkN4WlFVRlpMRWxCUVZrc1EwRkJRenRaUVVOMlFpeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1EwRkJVenRaUVVNMVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNReXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTJwRExFTkJRVU03UzBGRFJqdEpRVlpaTERaQ1FVRnBRaXh2UWtGVk4wSXNRMEZCUVR0SlFVVkVMSEZDUVVFMlFpeFRRVUZSTEZkQlFWYzdVVUZIT1VNc1dVRkJXU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlU3V1VGRE0wb3NUVUZCVFN4RlFVRkZMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRja1VzVFVGQlRTeEZRVUZGTEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZETDBVc1RVRkJUU3hEUVVGRExFZEJRVlVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWeXhEUVVGRExFTkJRVU03V1VGRE9VVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoQ0xFTkJRVU03VVVGRFRTeGhRVUZoTEVOQlFVTXNSVUZCVXl4RlFVRkZMRVZCUVZNc1JVRkJSU3hEUVVGUk8xbEJRMnBFTEUxQlFVMHNRMEZCUXl4SlFVRkpMR1ZCUVdVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU03VVVGRFRTeGxRVUZsTzFsQlEzQkNMRTFCUVUwc1EwRkJReXhKUVVGSkxHVkJRV1VzUlVGQlJTeERRVUZETzFGQlF5OUNMRU5CUVVNN1MwRkRSanRKUVdaWkxESkNRVUZsTEd0Q1FXVXpRaXhEUVVGQk8wbEJRMFFzY1VKQlFUWkNMRk5CUVZFc1YwRkJWenRSUVVjNVF5eFpRVUZaTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlR0WlFVTXpTaXhOUVVGTkxFVkJRVVVzUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU55UlN4TlFVRk5MRVZCUVVVc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNdlJTeE5RVUZOTEVOQlFVTXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFSXNRMEZCUXp0UlFVTk5MR0ZCUVdFc1EwRkJReXhGUVVGVExFVkJRVVVzUlVGQlV5eEZRVUZGTEVOQlFWRTdXVUZEYWtRc1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFTXNRMEZCUXp0UlFVTk5MR1ZCUVdVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dExRVU5HTzBsQlpsa3NNa0pCUVdVc2EwSkJaVE5DTEVOQlFVRTdTVUZGUkN3eVFrRkJiVU1zVTBGQlVTeFhRVUZYTzFGQlIzQkVMRmxCUVZrc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZWTEVWQlFVVXNRMEZCVlR0WlFVTXhSeXhOUVVGTkxFVkJRVVVzUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU12UlN4TlFVRk5MRU5CUVVNc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53UWl4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFVkJRVk1zUlVGQlJTeERRVUZSTzFsQlEzUkRMRTFCUVUwc1EwRkJReXhKUVVGSkxIRkNRVUZ4UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UXl4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4eFFrRkJjVUlzUlVGQlJTeERRVUZETzFGQlEzSkRMRU5CUVVNN1MwRkRSanRKUVdSWkxHbERRVUZ4UWl4M1FrRmpha01zUTBGQlFUdEpRVU5FTERKQ1FVRnRReXhUUVVGUkxGZEJRVmM3VVVGSGNFUXNXVUZCV1N4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJiMElzU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVlVzUlVGQlJTeERRVUZWTzFsQlF6RkhMRTFCUVUwc1JVRkJSU3hIUVVGVkxFTkJRVU1zV1VGQldTeGhRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGhRVUZMTEVOQlFVTXNRMEZCVnl4RlFVRkZMRU5CUVZjc1EwRkJReXhEUVVGRE8xbEJReTlGTEUxQlFVMHNRMEZCUXl4SFFVRlZMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlZ5eEZRVUZGTEVOQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpsRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JDTEVOQlFVTTdVVUZEVFN4aFFVRmhMRU5CUVVNc1JVRkJVeXhGUVVGRkxFTkJRVkU3V1VGRGRFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZETEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03VVVGRGNrTXNRMEZCUXp0TFFVTkdPMGxCWkZrc2FVTkJRWEZDTEhkQ1FXTnFReXhEUVVGQk8wbEJSVVFzZVVKQlFXbERMRk5CUVZFc1YwRkJWenRSUVVkc1JDeFpRVUZaTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRnZRaXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJWU3hGUVVGRkxFTkJRVlU3V1VGRE1VY3NUVUZCVFN4RlFVRkZMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRMMFVzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZET1VVc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzUTBGQlF6dFJRVU5OTEdGQlFXRXNRMEZCUXl4RlFVRlRMRVZCUVVVc1EwRkJVVHRaUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVOdVF5eERRVUZETzB0QlEwWTdTVUZrV1N3clFrRkJiVUlzYzBKQll5OUNMRU5CUVVFN1NVRkRSQ3g1UWtGQmFVTXNVMEZCVVN4WFFVRlhPMUZCUjJ4RUxGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFXOUNMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRlZMRVZCUVVVc1EwRkJWVHRaUVVNeFJ5eE5RVUZOTEVWQlFVVXNSMEZCVlN4RFFVRkRMRmxCUVZrc1lVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTXZSU3hOUVVGTkxFTkJRVU1zUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU01UlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndRaXhEUVVGRE8xRkJRMDBzWVVGQllTeERRVUZETEVWQlFWTXNSVUZCUlN4RFFVRlJPMWxCUTNSRExFMUJRVTBzUTBGQlF5eEpRVUZKTEcxQ1FVRnRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRReXhEUVVGRE8xRkJRMDBzWlVGQlpUdFpRVU53UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUTI1RExFTkJRVU03UzBGRFJqdEpRV1JaTEN0Q1FVRnRRaXh6UWtGakwwSXNRMEZCUVR0SlFVVkVMQ3RDUVVGMVF5eFRRVUZSTEZkQlFWYzdVVUZIZUVRc1dVRkJXU3hKUVVGdlFpeEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQldTeERRVUZETzFsQlF6VkVMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eFpRVUZaTEdGQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEdGQlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RFFVRkRPMUZCUTAwc1lVRkJZU3hEUVVGRExFTkJRVkU3V1VGRE0wSXNUVUZCVFN4RFFVRkRMRWxCUVVrc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVU1zUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzZVVKQlFYbENMRVZCUVVVc1EwRkJRenRSUVVONlF5eERRVUZETzB0QlEwWTdTVUZhV1N4eFEwRkJlVUlzTkVKQldYSkRMRU5CUVVFN1NVRkRSQ3dyUWtGQmRVTXNVMEZCVVN4WFFVRlhPMUZCUjNoRUxGbEJRVmtzU1VGQmIwSXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4aFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4aFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTzFsQlF6TkNMRTFCUVUwc1EwRkJReXhKUVVGSkxIbENRVUY1UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZETEVOQlFVTTdVVUZEVFN4bFFVRmxPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEhsQ1FVRjVRaXhGUVVGRkxFTkJRVU03VVVGRGVrTXNRMEZCUXp0TFFVTkdPMGxCV2xrc2NVTkJRWGxDTERSQ1FWbHlReXhEUVVGQk8wbEJSVVFzVjBGQk5FSXNVMEZCVVN4WFFVRlhPMUZCUXpkRExGbEJRVmtzVDBGQmEwSXNSVUZCVXl4SlFVRlhMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCVXl4SlFVRlhMRWxCUVVrc1lVRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCVXl4alFVRnpRaXhEUVVGRExFVkJRVk1zVjBGQmIwSXNTMEZCU3l4RlFVRlRMR2xDUVVFd1FpeEpRVUZKTzFsQlF6Tk5MRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVVJ6UWl4TlFVRkRMRWRCUVVRc1EwRkJReXhEUVVGNVFqdFpRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVhsQ08xbEJRVk1zWjBKQlFWY3NSMEZCV0N4WFFVRlhMRU5CUVZrN1dVRkJVeXhoUVVGUkxFZEJRVklzVVVGQlVTeERRVUZwUWp0WlFVRlRMRzFDUVVGakxFZEJRV1FzWTBGQll5eERRVUZuUWp0UlFVVTNUU3hEUVVGRE8xRkJRMDBzVVVGQlVUdFpRVU5pTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEYWtrc1EwRkJRenRSUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZYTzFsQlF6RkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnBKTEVOQlFVTTdVVUZEVFN4WFFVRlhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFTkJRVk03V1VGRGRrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxIRkNRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkRNVThzUTBGQlF6dExRVWRHTzBsQmFFSnhRaXhwUWtGQlN5eFJRV2RDTVVJc1EwRkJRVHRKUVVWRUxHTkJRWE5DTEZOQlFWRXNTMEZCU3p0UlFVZHFReXhaUVVGWkxFbEJRVzlDTEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZ2UWl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCYlVJc1JVRkJSU3hEUVVGdlFpeEZRVUZGTEVOQlFXOUNMRVZCUVVVc1EwRkJWeXhGUVVGRkxFTkJRVmM3V1VGRE4wc3NUVUZCVFN4RFFVRkRMRWRCUVZVc1EwRkJReXhaUVVGWkxHRkJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxHRkJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRjRVVzVFVGQlRTeERRVUZETEVkQlFWVXNRMEZCUXl4WlFVRlpMR0ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR0ZCUVVzc1EwRkJReXhEUVVGWExFVkJRVVVzUTBGQlZ5eERRVUZETEVOQlFVTTdXVUZET1VVc1NVRkJTU3hYUVVGWExFZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6VkNMRWxCUVVrc1VVRkJVU3hIUVVGWkxFdEJRVXNzUTBGQlF6dFpRVU01UWl4SlFVRkpMR05CUVdNc1IwRkJXU3hKUVVGSkxFTkJRVU03V1VGRGJrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxHRkJRVXNzU1VGQlNTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROMElzVjBGQlZ5eEhRVUZITEVOQlFWY3NRMEZCUXp0blFrRkROVUlzUTBGQlF6dG5Ra0ZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeFJRVUZSTEVkQlFVY3NRMEZCV1N4RFFVRkRPMmRDUVVNeFFpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRemRDTEdOQlFXTXNSMEZCUnl4RFFVRlpMRU5CUVVNN1owSkJRMmhETEVOQlFVTTdXVUZEU0N4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROMElzVjBGQlZ5eEhRVUZITEVOQlFWY3NRMEZCUXp0blFrRkROVUlzUTBGQlF6dG5Ra0ZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeFJRVUZSTEVkQlFVY3NRMEZCV1N4RFFVRkRPMmRDUVVNeFFpeERRVUZETzJkQ1FVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRemRDTEdOQlFXTXNSMEZCUnl4RFFVRlpMRU5CUVVNN1owSkJRMmhETEVOQlFVTTdXVUZEU0N4RFFVRkRPMWxCUTBRc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hSUVVGUkxFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZETVVRc1EwRkJRenRSUVVOTkxHRkJRV0VzUTBGQlF5eERRVUZSTEVWQlFVVXNRMEZCVVN4RlFVRkZMRmRCUVcxQ0xFVkJRVVVzVVVGQmFVSXNSVUZCUlN4alFVRmpPMWxCUXpkR0xFMUJRVTBzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeFJRVUZSTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkRia1VzUTBGQlF6dFJRVU5OTEdWQlFXVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEZUVJc1EwRkJRenRMUVVOR08wbEJkRU5aTEc5Q1FVRlJMRmRCYzBOd1FpeERRVUZCTzBsQlEwUXNZMEZCYzBJc1UwRkJVU3hMUVVGTE8xRkJSMnBETEZsQlFWa3NTVUZCYjBJc1NVRkJTU3hoUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVc5Q0xFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGdFFpeEZRVUZGTEVOQlFXOUNMRVZCUVVVc1EwRkJiMElzUlVGQlJTeERRVUZYTEVWQlFVVXNRMEZCVnp0WlFVTTNTeXhOUVVGTkxFTkJRVU1zUjBGQlZTeERRVUZETEZsQlFWa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NZVUZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGWExFTkJRVU1zUTBGQlF6dFpRVU53UlN4TlFVRk5MRU5CUVVNc1IwRkJWU3hEUVVGRExGbEJRVmtzWVVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWVVGQlN5eERRVUZETEVOQlFWY3NSVUZCUlN4RFFVRlhMRU5CUVVNc1EwRkJRenRaUVVNNVJTeEpRVUZKTEZkQlFWY3NSMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkROVUlzU1VGQlNTeFJRVUZSTEVkQlFWa3NTMEZCU3l4RFFVRkRPMWxCUXpsQ0xFbEJRVWtzWTBGQll5eEhRVUZaTEVsQlFVa3NRMEZCUXp0WlFVTnVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NZVUZCU3l4SlFVRkpMRU5CUVVNc1dVRkJXU3hoUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4WFFVRlhMRWRCUVVjc1EwRkJWeXhEUVVGRE8yZENRVU0xUWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMRkZCUVZFc1IwRkJSeXhEUVVGWkxFTkJRVU03WjBKQlF6RkNMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1kwRkJZeXhIUVVGSExFTkJRVmtzUTBGQlF6dG5Ra0ZEYUVNc1EwRkJRenRaUVVOSUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4WFFVRlhMRWRCUVVjc1EwRkJWeXhEUVVGRE8yZENRVU0xUWl4RFFVRkRPMmRDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMRkZCUVZFc1IwRkJSeXhEUVVGWkxFTkJRVU03WjBKQlF6RkNMRU5CUVVNN1owSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1kwRkJZeXhIUVVGSExFTkJRVmtzUTBGQlF6dG5Ra0ZEYUVNc1EwRkJRenRaUVVOSUxFTkJRVU03V1VGRFJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVjBGQlZ5eEZRVUZGTEZGQlFWRXNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVNeFJDeERRVUZETzFGQlEwMHNZVUZCWVN4RFFVRkRMRU5CUVZFc1JVRkJSU3hEUVVGUkxFVkJRVVVzVjBGQmJVSXNSVUZCUlN4UlFVRnBRaXhGUVVGRkxHTkJRV003V1VGRE4wWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNWMEZCVnl4RlFVRkZMRkZCUVZFc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFJRVU51UlN4RFFVRkRPMUZCUTAwc1pVRkJaVHRaUVVOd1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVONFFpeERRVUZETzB0QlEwWTdTVUYwUTFrc2IwSkJRVkVzVjBGelEzQkNMRU5CUVVFN1FVRkRTQ3hEUVVGRExFVkJkbHBuUWl4WFFVRlhMRWRCUVZnc2JVSkJRVmNzUzBGQldDeHRRa0ZCVnl4UlFYVmFNMElpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQcmVzZXJ2ZUFzcGVjdFJhdGlvIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIG1lZXRPclNsaWNlKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMubWVldE9yU2xpY2UgPSBtZWV0T3JTbGljZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgc3RyID0gYHgke3RoaXMueH1ZJHt0aGlzLnl9YDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVldE9yU2xpY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgdGhpcy5tZWV0T3JTbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlByZXNlcnZlQXNwZWN0UmF0aW8gPSBQcmVzZXJ2ZUFzcGVjdFJhdGlvO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWeWRtVXRZWE53WldOMExYSmhkR2x2TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljSEpsYzJWeWRtVXRZWE53WldOMExYSmhkR2x2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3U1VGSlJTeFpRVUZ0UWl4RFFVRjVRaXhGUVVGVExFTkJRWGxDTEVWQlFWTXNWMEZCT0VJN1VVRkJiRWNzVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCZDBJN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUYzUWp0UlFVRlRMR2RDUVVGWExFZEJRVmdzVjBGQlZ5eERRVUZ0UWp0SlFVRkhMRU5CUVVNN1NVRkRiRWdzVVVGQlVUdFJRVU5pTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUkN4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia01zUjBGQlJ5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRMmhETEVOQlFVTTdXVUZEUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTA0c1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU5vUWl4RFFVRkRPMGxCUTBnc1EwRkJRenREUVVOR08wRkJhRUpFTEd0RVFXZENReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW8udHNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYXRyaXhcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yb3RhdGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zY2FsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NrZXdcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmFuc2xhdGVcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMRGhDUVVGNVFqdEJRVU42UWl3NFFrRkJlVUk3UVVGRGVrSXNOa0pCUVhkQ08wRkJRM2hDTERSQ1FVRjFRanRCUVVOMlFpeHBRMEZCTkVJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVycG9sYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9pbnRlcnBvbGF0aW9uXCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XHJcbmNsYXNzIE1hdHJpeF9UcmFuc2Zvcm0gZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoYSA9IDEsIGIgPSAwLCBjID0gMCwgZCA9IDEsIGUgPSAwLCBmID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwibWF0cml4XCIpO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgICAgICB0aGlzLmMgPSBjO1xyXG4gICAgICAgIHRoaXMuZCA9IGQ7XHJcbiAgICAgICAgdGhpcy5lID0gZTtcclxuICAgICAgICB0aGlzLmYgPSBmO1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hfSAke3RoaXMuYn0gJHt0aGlzLmN9ICR7dGhpcy5kfSAke3RoaXMuZX0gJHt0aGlzLmZ9YDtcclxuICAgIH1cclxuICAgIHBhcnNlQXJncyhjc3MpIHtcclxuICAgICAgICBpZiAoY3NzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva3MgPSBjc3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeF9UcmFuc2Zvcm0ocGFyc2VGbG9hdCh0b2tzWzBdKSwgcGFyc2VGbG9hdCh0b2tzWzFdKSwgcGFyc2VGbG9hdCh0b2tzWzJdKSwgcGFyc2VGbG9hdCh0b2tzWzNdKSwgcGFyc2VGbG9hdCh0b2tzWzRdKSwgcGFyc2VGbG9hdCh0b2tzWzVdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeF9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmIsIHRoaXMuYiwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmMsIHRoaXMuYywgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmQsIHRoaXMuZCwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmUsIHRoaXMuZSwgdCksIGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmYsIHRoaXMuZiwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWF0cml4X1RyYW5zZm9ybSA9IE1hdHJpeF9UcmFuc2Zvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRjBjbWw0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2liV0YwY21sNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc2RVUkJRVFJETzBGQlF6VkRMRFJEUVVGNVF6dEJRVVY2UXl4elFrRkJPRUlzVTBGQlVTeHhRa0ZCVXp0SlFVTTNReXhaUVVGdFFpeEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNc1JVRkJVeXhKUVVGWkxFTkJRVU1zUlVGQlV5eEpRVUZaTEVOQlFVTXNSVUZCVXl4SlFVRlpMRU5CUVVNc1JVRkJVeXhKUVVGWkxFTkJRVU03VVVGRE5Va3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJSRU1zVFVGQlF5eEhRVUZFTEVOQlFVTXNRMEZCV1R0UlFVRlRMRTFCUVVNc1IwRkJSQ3hEUVVGRExFTkJRVms3VVVGQlV5eE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMUZCUVZNc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdFJRVUZUTEUxQlFVTXNSMEZCUkN4RFFVRkRMRU5CUVZrN1VVRkJVeXhOUVVGRExFZEJRVVFzUTBGQlF5eERRVUZaTzBsQlJUbEpMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU4yUlN4RFFVRkRPMGxCUTAwc1UwRkJVeXhEUVVGRExFZEJRV3RDTzFGQlEycERMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE5VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1owSkJRV2RDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVNpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8xRkJRMmhETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFbEJRWE5DTEVWQlFVVXNRMEZCVXp0UlFVTnNSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeG5Ra0ZCWjBJc1EwRkJReXh4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3h4UWtGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZNTEVOQlFVTTdRMEZEUmp0QlFXeENSQ3cwUTBGclFrTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL21hdHJpeC50c1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJwb2xhdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVycG9sYXRpb25cIik7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcclxuY2xhc3MgU2tld1hfVHJhbnNmb3JtIGV4dGVuZHMgdHJhbnNmb3JtXzEuVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoXCJza2V3WFwiKTtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgfVxyXG4gICAgYXJncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZUFyZ3MoY3NzKSB7XHJcbiAgICAgICAgaWYgKGNzcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrZXdYX1RyYW5zZm9ybShwYXJzZUZsb2F0KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2V3WF9UcmFuc2Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnRlcnBvbGF0ZShmcm9tLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTa2V3WF9UcmFuc2Zvcm0oaW50ZXJwb2xhdGlvbl8xLl9sZXJwKGZyb20uYSwgdGhpcy5hLCB0KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ta2V3WF9UcmFuc2Zvcm0gPSBTa2V3WF9UcmFuc2Zvcm07XHJcbmNsYXNzIFNrZXdZX1RyYW5zZm9ybSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhID0gMCkge1xyXG4gICAgICAgIHN1cGVyKFwic2tld1lcIik7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgIH1cclxuICAgIGFyZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VBcmdzKGNzcykge1xyXG4gICAgICAgIGlmIChjc3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2V3WV9UcmFuc2Zvcm0ocGFyc2VGbG9hdChjc3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2tld1lfVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW50ZXJwb2xhdGUoZnJvbSwgdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2tld1lfVHJhbnNmb3JtKGludGVycG9sYXRpb25fMS5fbGVycChmcm9tLmEsIHRoaXMuYSwgdCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2tld1lfVHJhbnNmb3JtID0gU2tld1lfVHJhbnNmb3JtO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMnRsZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbk5yWlhjdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4MVJFRkJORU03UVVGRE5VTXNORU5CUVhsRE8wRkJSWHBETEhGQ1FVRTJRaXhUUVVGUkxIRkNRVUZUTzBsQlF6VkRMRmxCUVcxQ0xFbEJRVmtzUTBGQlF6dFJRVU01UWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRVJTeE5RVUZETEVkQlFVUXNRMEZCUXl4RFFVRlpPMGxCUldoRExFTkJRVU03U1VGRFRTeEpRVUZKTzFGQlExUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVOTkxGTkJRVk1zUTBGQlF5eEhRVUZyUWp0UlFVTnFReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4bFFVRmxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VNc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwNHNUVUZCVFN4RFFVRkRMRWxCUVVrc1pVRkJaU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zU1VGQmNVSXNSVUZCUlN4RFFVRlRPMUZCUTJwRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4eFFrRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzWkVMRU5CUVVNN1EwRkRSanRCUVdwQ1JDd3dRMEZwUWtNN1FVRkZSQ3h4UWtGQk5rSXNVMEZCVVN4eFFrRkJVenRKUVVNMVF5eFpRVUZ0UWl4SlFVRlpMRU5CUVVNN1VVRkRPVUlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUkVVc1RVRkJReXhIUVVGRUxFTkJRVU1zUTBGQldUdEpRVVZvUXl4RFFVRkRPMGxCUTAwc1NVRkJTVHRSUVVOVUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZEVFN4VFFVRlRMRU5CUVVNc1IwRkJhMEk3VVVGRGFrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtJc1RVRkJUU3hEUVVGRExFbEJRVWtzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxETEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOT0xFMUJRVTBzUTBGQlF5eEpRVUZKTEdWQlFXVXNSVUZCUlN4RFFVRkRPMUZCUXk5Q0xFTkJRVU03U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRWxCUVhGQ0xFVkJRVVVzUTBGQlV6dFJRVU5xUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hsUVVGbExFTkJRVU1zY1VKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMlJDeERRVUZETzBOQlEwWTdRVUZxUWtRc01FTkJhVUpESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9za2V3LnRzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZpbHRlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25vbi1yZW5kZXJhYmxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyYWJsZVwiKSk7XHJcbmNvbnN0IEZpbHRlclByaW1pdGl2ZXMgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlc1wiKTtcclxuZXhwb3J0cy5GaWx0ZXJQcmltaXRpdmVzID0gRmlsdGVyUHJpbWl0aXZlcztcclxuY29uc3QgTm9uUmVuZGVyYWJsZXMgPSByZXF1aXJlKFwiLi9ub24tcmVuZGVyYWJsZXNcIik7XHJcbmV4cG9ydHMuTm9uUmVuZGVyYWJsZXMgPSBOb25SZW5kZXJhYmxlcztcclxuY29uc3QgUmVuZGVyYWJsZXMgPSByZXF1aXJlKFwiLi9yZW5kZXJhYmxlc1wiKTtcclxuZXhwb3J0cy5SZW5kZXJhYmxlcyA9IFJlbmRlcmFibGVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMSGREUVVGdFF6dEJRVU51UXl3NFFrRkJlVUk3UVVGRGVrSXNjME5CUVdsRE8wRkJRMnBETEd0RFFVRTJRanRCUVVVM1FpeDNSRUZCZDBRN1FVRkxkRVFzTkVOQlFXZENPMEZCU214Q0xHOUVRVUZ2UkR0QlFVdHNSQ3gzUTBGQll6dEJRVXBvUWl3MlEwRkJOa003UVVGTE0wTXNhME5CUVZjaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudF8xID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XHJcbmNvbnN0IGJsZW5kXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9ibGVuZFwiKTtcclxuY29uc3QgY29sb3JfbWF0cml4XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9jb2xvci1tYXRyaXhcIik7XHJcbmNvbnN0IGNvbXBvbmVudF90cmFuc2Zlcl8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvY29tcG9uZW50LXRyYW5zZmVyXCIpO1xyXG5jb25zdCBjb21wb3NpdGVfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2NvbXBvc2l0ZVwiKTtcclxuY29uc3QgY29udm9sdmVfbWF0cml4XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9jb252b2x2ZS1tYXRyaXhcIik7XHJcbmNvbnN0IGRpc3BsYWNlbWVudF9tYXBfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2Rpc3BsYWNlbWVudC1tYXBcIik7XHJcbmNvbnN0IGZsb29kXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9mbG9vZFwiKTtcclxuY29uc3QgZ2F1c3NpYW5fYmx1cl8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvZ2F1c3NpYW4tYmx1clwiKTtcclxuY29uc3QgaW1hZ2VfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2ltYWdlXCIpO1xyXG5jb25zdCBkaWZmdXNlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9kaWZmdXNlXCIpO1xyXG5jb25zdCBkaXN0YW50XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvZGlzdGFudFwiKTtcclxuY29uc3QgcG9pbnRfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9wb2ludFwiKTtcclxuY29uc3Qgc3BvdF8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3Nwb3RcIik7XHJcbmNvbnN0IHNwZWN1bGFyXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9zcGVjdWxhclwiKTtcclxuY29uc3QgbWVyZ2VfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL21lcmdlXCIpO1xyXG5jb25zdCBtb3JwaG9sb2d5XzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy9tb3JwaG9sb2d5XCIpO1xyXG5jb25zdCBvZmZzZXRfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL29mZnNldFwiKTtcclxuY29uc3QgdGlsZV8xID0gcmVxdWlyZShcIi4vZmlsdGVyLXByaW1pdGl2ZXMvdGlsZVwiKTtcclxuY29uc3QgdHJhbnNmZXJfZnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1wcmltaXRpdmVzL3RyYW5zZmVyLWZ1bmN0aW9uXCIpO1xyXG5jb25zdCB0dXJidWxlbmNlXzEgPSByZXF1aXJlKFwiLi9maWx0ZXItcHJpbWl0aXZlcy90dXJidWxlbmNlXCIpO1xyXG5jb25zdCBtZXJnZSA9IChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgZm9yIChjb25zdCBhUHJvcCBpbiBhKSB7XHJcbiAgICAgICAgb2JqW2FQcm9wXSA9IGFbYVByb3BdO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBiUHJvcCBpbiBiKSB7XHJcbiAgICAgICAgb2JqW2JQcm9wXSA9IGJbYlByb3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufTtcclxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgZWxlbWVudF8xLkVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIFwiZmlsdGVyXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZERlZih0aGlzKTtcclxuICAgIH1cclxuICAgIGJsZW5kKG1vZGUsIGlucHV0MSwgaW5wdXQyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBibGVuZF8xLkJsZW5kX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dDEsXHJcbiAgICAgICAgICAgIGluMjogaW5wdXQyLFxyXG4gICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29sb3JNYXRyaXgobWF0cml4LCBpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sb3JfbWF0cml4XzEuQ29sb3JNYXRyaXhfUHJpbWl0aXZlKHRoaXMsIHtcclxuICAgICAgICAgICAgaW46IGlucHV0LFxyXG4gICAgICAgICAgICB0eXBlOiBtYXRyaXgudHlwZSxcclxuICAgICAgICAgICAgdmFsdWVzOiBtYXRyaXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRUcmFuc2ZlcihyLCBnLCBiLCBhLCBpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFRyYW5zZmVyID0gbmV3IGNvbXBvbmVudF90cmFuc2Zlcl8xLkNvbXBvbmVudFRyYW5zZmVyX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJSXCIsIHIpKTtcclxuICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJHXCIsIGcpKTtcclxuICAgICAgICBjb21wb25lbnRUcmFuc2Zlci5hZGQobmV3IHRyYW5zZmVyX2Z1bmN0aW9uXzEuVHJhbnNmZXJGdW5jdGlvbl9QcmltaXRpdmUodGhpcywgXCJCXCIsIGIpKTtcclxuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudFRyYW5zZmVyLmFkZChuZXcgdHJhbnNmZXJfZnVuY3Rpb25fMS5UcmFuc2ZlckZ1bmN0aW9uX1ByaW1pdGl2ZSh0aGlzLCBcIkFcIiwgYSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50VHJhbnNmZXI7XHJcbiAgICB9XHJcbiAgICBjb21wb3NpdGUob3BlcmF0b3IsIGsxLCBrMiwgazMsIGs0LCBpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgY29tcG9zaXRlXzEuQ29tcG9zaXRlX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIGluOiBpbnB1dDEsXHJcbiAgICAgICAgICAgIGluMjogaW5wdXQyLFxyXG4gICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgazEsXHJcbiAgICAgICAgICAgIGsyLFxyXG4gICAgICAgICAgICBrMyxcclxuICAgICAgICAgICAgazQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb252b2x2ZU1hdHJpeChhdHRycywgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbnZvbHZlX21hdHJpeF8xLkNvbnZvbHZlTWF0cml4X1ByaW1pdGl2ZSh0aGlzLCBtZXJnZShhdHRycywgeyBpbjogaW5wdXQgfSkpO1xyXG4gICAgfVxyXG4gICAgZGlmZnVzZUxpZ2h0aW5nKGF0dHJzLCBsaWdodHMgPSBbXSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyBkaWZmdXNlXzEuRGlmZnVzZUxpZ2h0aW5nKHRoaXMsIG1lcmdlKGF0dHJzLCB7IGluOiBpbnB1dCB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRMaWdodHMoZmUsIGxpZ2h0cyk7XHJcbiAgICAgICAgcmV0dXJuIGZlO1xyXG4gICAgfVxyXG4gICAgZGlzcGxhY2VtZW50TWFwKGF0dHJzLCBpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgZGlzcGxhY2VtZW50X21hcF8xLkRpc3BsYWNlbWVudE1hcF9QcmltaXRpdmUodGhpcywgbWVyZ2UoYXR0cnMsIHsgaW46IGlucHV0MSwgaW4yOiBpbnB1dDIgfSkpO1xyXG4gICAgfVxyXG4gICAgZmxvb2QoY29sb3IsIGFyZWEpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyBmbG9vZF8xLkZsb29kX1ByaW1pdGl2ZSh0aGlzLCB7IFwiZmxvb2QtY29sb3JcIjogY29sb3IgfSk7XHJcbiAgICAgICAgZmUuc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIHg6IGFyZWEueCxcclxuICAgICAgICAgICAgeTogYXJlYS55LFxyXG4gICAgICAgICAgICB3aWR0aDogYXJlYS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBhcmVhLmhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICBnYXVzc2lhbkJsdXIoc3RkRGV2aWF0aW9uID0gMCwgZWRnZU1vZGUgPSBcImR1cGxpY2F0ZVwiLCBpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgZ2F1c3NpYW5fYmx1cl8xLkdhdXNzaWFuQmx1cl9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgICAgIHN0ZERldmlhdGlvbixcclxuICAgICAgICAgICAgZWRnZU1vZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbWFnZShocmVmLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBpbWFnZV8xLkltYWdlX1ByaW1pdGl2ZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBocmVmLFxyXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbWVyZ2UoaW5wdXRzKSB7XHJcbiAgICAgICAgY29uc3QgZmUgPSBuZXcgbWVyZ2VfMS5NZXJnZV9QcmltaXRpdmUodGhpcyk7XHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXJnZU5vZGUgPSBuZXcgZWxlbWVudF8xLkVsZW1lbnQodGhpcy5jb250ZXh0LCBcImZlTWVyZ2VOb2RlXCIsIHsgaW46IGlucHV0IH0pO1xyXG4gICAgICAgICAgICBmZS5hZGQobWVyZ2VOb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICBtb3JwaG9sb2d5KG9wZXJhdG9yLCByYWRpdXMsIGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtb3JwaG9sb2d5XzEuTW9ycGhvbG9neV9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvZmZzZXQoZCwgaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IG9mZnNldF8xLk9mZnNldF9QcmltaXRpdmUodGhpcywge1xyXG4gICAgICAgICAgICBpbjogaW5wdXQsXHJcbiAgICAgICAgICAgIGR4OiBkLngsXHJcbiAgICAgICAgICAgIGR5OiBkLnksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzcGVjdWxhckxpZ2h0aW5nKGF0dHJzLCBsaWdodHMgPSBbXSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyBzcGVjdWxhcl8xLlNwZWN1bGFyTGlnaHRpbmcodGhpcywgYXR0cnMpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKGZlLCBsaWdodHMpO1xyXG4gICAgICAgIHJldHVybiBmZTtcclxuICAgIH1cclxuICAgIHRpbGUoYXJlYSwgaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBmZSA9IG5ldyB0aWxlXzEuVGlsZV9QcmltaXRpdmUodGhpcywgeyBpbjogaW5wdXQgfSk7XHJcbiAgICAgICAgZmUuc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIHg6IGFyZWEueCxcclxuICAgICAgICAgICAgeTogYXJlYS55LFxyXG4gICAgICAgICAgICB3aWR0aDogYXJlYS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBhcmVhLmhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmU7XHJcbiAgICB9XHJcbiAgICB0dXJidWxlbmNlKGF0dHJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0dXJidWxlbmNlXzEuVHVyYnVsZW5jZV9QcmltaXRpdmUodGhpcywgYXR0cnMpO1xyXG4gICAgfVxyXG4gICAgYWRkTGlnaHRzKGxpZ2h0aW5nLCBsaWdodHMpIHtcclxuICAgICAgICBsaWdodHMuZm9yRWFjaChsaWdodCA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGlnaHQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHRpbmcuYWRkKG5ldyBwb2ludF8xLlBvaW50TGlnaHQodGhpcywgbGlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkaXN0YW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHRpbmcuYWRkKG5ldyBkaXN0YW50XzEuRGlzdGFudExpZ2h0KHRoaXMsIGxpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3BvdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0aW5nLmFkZChuZXcgc3BvdF8xLlNwb3RMaWdodCh0aGlzLCBsaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GaWx0ZXIgPSBGaWx0ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHNkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2labWxzZEdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc2QwTkJRWEZETzBGQlIzSkRMSEZFUVVFMFJEdEJRVU0xUkN4dFJVRkJlVVU3UVVGRGVrVXNLMFZCUVhGR08wRkJRM0pHTERaRVFVRnZSVHRCUVVOd1JTeDVSVUZCTUVjN1FVRkRNVWNzTWtWQlFUWkhPMEZCUXpkSExIRkVRVUUwUkR0QlFVTTFSQ3h4UlVGQk1rVTdRVUZETTBVc2NVUkJRVFJFTzBGQlF6VkVMR3RGUVVGdFJ6dEJRVVZ1Unl3clJVRkJhVVk3UVVGRGFrWXNNa1ZCUVRaRk8wRkJRemRGTEhsRlFVRXlSVHRCUVVNelJTeHZSVUZCYzBjN1FVRkRkRWNzY1VSQlFUUkVPMEZCUXpWRUxDdEVRVUZ6UlR0QlFVTjBSU3gxUkVGQk9FUTdRVUZET1VRc2JVUkJRVEJFTzBGQlF6RkVMRFpGUVVGblNEdEJRVU5vU0N3clJFRkJOa1k3UVVGelFqZEdMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVThzUTBGQlNTeEZRVUZGTEVOQlFVa3NSVUZCVXl4RlFVRkZPMGxCUTNoRExFMUJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZEUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03UVVGRFlpeERRVUZETEVOQlFVTTdRVUZGUml4WlFVRnZRaXhUUVVGUkxHbENRVUV5UkR0SlFVVnlSaXhaUVVGdFFpeFBRVUZuUWp0UlFVTnFReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUkZJc1dVRkJUeXhIUVVGUUxFOUJRVThzUTBGQlV6dFJRVVZxUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVsQlFUWkVMRVZCUVVVc1RVRkJiVUlzUlVGQlJTeE5RVUZ2UWp0UlFVTnVTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeDFRa0ZCWlN4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVNdlFpeEZRVUZGTEVWQlFVVXNUVUZCVFR0WlFVTldMRWRCUVVjc1JVRkJSU3hOUVVGTk8xbEJRMWdzU1VGQlNUdFRRVU5NTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zVFVGQmJVSXNSVUZCUlN4TFFVRnRRanRSUVVONlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4dlEwRkJjVUlzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEY2tNc1JVRkJSU3hGUVVGRkxFdEJRVXM3V1VGRFZDeEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1dVRkRha0lzVFVGQlRTeEZRVUZGTEUxQlFVMDdVMEZEWml4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMDBzYVVKQlFXbENMRU5CUVVNc1EwRkJPRUlzUlVGQlJTeERRVUU0UWl4RlFVRkZMRU5CUVRoQ0xFVkJRVVVzUTBGQkswSXNSVUZCUlN4TFFVRnRRanRSUVVNelN5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzWjBSQlFUSkNMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRemxFTEVWQlFVVXNSVUZCUlN4TFFVRkxPMU5CUTFZc1EwRkJReXhEUVVGRE8xRkJRMGdzYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzT0VOQlFUQkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNCRkxHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxEaERRVUV3UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndSU3hwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3c0UTBGQk1FSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzT0VOQlFUQkNMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSRkxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVTk5MRk5CUVZNc1EwRkJReXhSUVVFclJDeEZRVUZGTEVWQlFWVXNSVUZCUlN4RlFVRlZMRVZCUVVVc1JVRkJWU3hGUVVGRkxFVkJRVlVzUlVGQlJTeE5RVUZ2UWl4RlFVRkZMRTFCUVc5Q08xRkJRekZMTEUxQlFVMHNRMEZCUXl4SlFVRkpMQ3RDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTnVReXhGUVVGRkxFVkJRVVVzVFVGQlRUdFpRVU5XTEVkQlFVY3NSVUZCUlN4TlFVRk5PMWxCUTFnc1VVRkJVVHRaUVVOU0xFVkJRVVU3V1VGRFJpeEZRVUZGTzFsQlEwWXNSVUZCUlR0WlFVTkdMRVZCUVVVN1UwRkRTQ3hEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlEwMHNZMEZCWXl4RFFVRkRMRXRCUVhsRExFVkJRVVVzUzBGQmJVSTdVVUZEYkVZc1RVRkJUU3hEUVVGRExFbEJRVWtzTUVOQlFYZENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcEZMRU5CUVVNN1NVRkRUU3hsUVVGbExFTkJRVU1zUzBGQk1FTXNSVUZCUlN4VFFVRnRReXhGUVVGRkxFVkJRVVVzUzBGQmJVSTdVVUZETTBnc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeDVRa0ZCWlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVTk5MR1ZCUVdVc1EwRkJReXhMUVVFd1F5eEZRVUZGTEUxQlFXOUNMRVZCUVVVc1RVRkJiMEk3VVVGRE0wY3NUVUZCVFN4RFFVRkRMRWxCUVVrc05FTkJRWGxDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVZc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eExRVUZaTEVWQlFVVXNTVUZCVXp0UlFVTnNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEhWQ1FVRmxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzWVVGQllTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRMMFFzUlVGQlJTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTm1MRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5VTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOVUxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3p0WlFVTnFRaXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMDdVMEZEY0VJc1EwRkJReXhEUVVGRE8xRkJRMGdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkRUU3haUVVGWkxFTkJRVU1zWlVGQmRVSXNRMEZCUXl4RlFVRkZMRmRCUVhkRExGZEJRVmNzUlVGQlJTeExRVUZ0UWp0UlFVTndTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeHpRMEZCYzBJc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGRFTXNSVUZCUlN4RlFVRkZMRXRCUVVzN1dVRkRWQ3haUVVGWk8xbEJRMW9zVVVGQlVUdFRRVU5VTEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkRUU3hMUVVGTExFTkJRVU1zU1VGQldTeEZRVUZGTEcxQ1FVRjVRenRSUVVOc1JTeE5RVUZOTEVOQlFVTXNTVUZCU1N4MVFrRkJaU3hEUVVGRExFbEJRVWtzUlVGQlJUdFpRVU12UWl4WlFVRlpMRVZCUVVVc1NVRkJTVHRaUVVOc1FpeHRRa0ZCYlVJN1UwRkRjRUlzUTBGQlF5eERRVUZETzBsQlEwd3NRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhOUVVGeFFqdFJRVU5vUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxIVkNRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRja01zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOeVFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMR2xDUVVGUExFTkJRV3RITEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1lVRkJZU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNMHNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETzBsQlEwMHNWVUZCVlN4RFFVRkRMRkZCUVRSQ0xFVkJRVVVzVFVGQk5FSXNSVUZCUlN4TFFVRnRRanRSUVVNdlJpeE5RVUZOTEVOQlFVTXNTVUZCU1N4cFEwRkJiMElzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEY0VNc1JVRkJSU3hGUVVGRkxFdEJRVXM3V1VGRFZDeFJRVUZSTzFsQlExSXNUVUZCVFR0VFFVTlFMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRFRTeE5RVUZOTEVOQlFVTXNRMEZCVVN4RlFVRkZMRXRCUVcxQ08xRkJRM3BETEUxQlFVMHNRMEZCUXl4SlFVRkpMSGxDUVVGblFpeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTm9ReXhGUVVGRkxFVkJRVVVzUzBGQlN6dFpRVU5VTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOUUxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTlNMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRFRTeG5Ra0ZCWjBJc1EwRkJReXhMUVVFeVF5eEZRVUZGTEZOQlFXMURMRVZCUVVVc1JVRkJSU3hMUVVGdFFqdFJRVU0zU0N4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxESkNRVUZuUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhKUVVGVExFVkJRVVVzUzBGQmJVSTdVVUZEZUVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeHhRa0ZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFVkJRVVVzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZEWml4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZDeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWQ3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYWtJc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTzFOQlEzQkNMRU5CUVVNc1EwRkJRenRSUVVOSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUTAwc1ZVRkJWU3hEUVVGRExFdEJRWEZETzFGQlEzSkVMRTFCUVUwc1EwRkJReXhKUVVGSkxHbERRVUZ2UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUTA4c1UwRkJVeXhEUVVGRExGRkJRVGhITEVWQlFVVXNUVUZCWjBNN1VVRkRhRXNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOeVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtJc1MwRkJTeXhQUVVGUE8yOUNRVU5XTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hyUWtGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU14UXl4TFFVRkxMRU5CUVVNN1owSkJRMUlzUzBGQlN5eFRRVUZUTzI5Q1FVTmFMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeHpRa0ZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTFReXhMUVVGTExFTkJRVU03WjBKQlExSXNTMEZCU3l4TlFVRk5PMjlDUVVOVUxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4blFrRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONlF5eExRVUZMTEVOQlFVTTdXVUZEVml4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwWTdRVUZ3U1VRc2QwSkJiMGxESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci50c1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2JsZW5kXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29sb3ItbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29tcG9uZW50LXRyYW5zZmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29tcG9zaXRlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29udm9sdmUtbWF0cml4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlzcGxhY2VtZW50LW1hcFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Zsb29kXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZ2F1c3NpYW4tYmx1clwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbWVyZ2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tb3JwaG9sb2d5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vb2Zmc2V0XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdGlsZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RyYW5zZmVyLWZ1bmN0aW9uXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdHVyYnVsZW5jZVwiKSk7XHJcbmNvbnN0IExpZ2h0aW5nID0gcmVxdWlyZShcIi4vbGlnaHRpbmdcIik7XHJcbmV4cG9ydHMuTGlnaHRpbmcgPSBMaWdodGluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTERaQ1FVRjNRanRCUVVONFFpeHZRMEZCSzBJN1FVRkRMMElzTUVOQlFYRkRPMEZCUTNKRExHbERRVUUwUWp0QlFVTTFRaXgxUTBGQmEwTTdRVUZEYkVNc2QwTkJRVzFETzBGQlEyNURMRFpDUVVGM1FqdEJRVU40UWl4eFEwRkJaME03UVVGRGFFTXNOa0pCUVhkQ08wRkJRM2hDTERaQ1FVRjNRanRCUVVONFFpeHJRMEZCTmtJN1FVRkROMElzT0VKQlFYbENPMEZCUTNwQ0xEUkNRVUYxUWp0QlFVTjJRaXg1UTBGQmIwTTdRVUZEY0VNc2EwTkJRVFpDTzBGQlJUZENMSFZEUVVGMVF6dEJRVWR5UXl3MFFrRkJVU0o5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdHRyaWJ1dGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlmZnVzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NwZWN1bGFyXCIpKTtcclxuY29uc3QgTGlnaHRTb3VyY2UgPSByZXF1aXJlKFwiLi9saWdodC1zb3VyY2VcIik7XHJcbmV4cG9ydHMuTGlnaHRTb3VyY2UgPSBMaWdodFNvdXJjZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEd0RFFVRTJRanRCUVVNM1Fpd3JRa0ZCTUVJN1FVRkRNVUlzWjBOQlFUSkNPMEZCUlROQ0xEaERRVUU0UXp0QlFVYzFReXhyUTBGQlZ5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhSMGNtbGlkWFJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbUYwZEhKcFluVjBaWE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2F0dHJpYnV0ZXMudHNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hdHRyaWJ1dGVzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGlzdGFudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvaW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc3BvdFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHdERRVUUyUWp0QlFVTTNRaXdyUWtGQk1FSTdRVUZETVVJc05rSkJRWGRDTzBGQlEzaENMRFJDUVVGMVFpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYUjBjbWxpZFhSbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1GMGRISnBZblYwWlhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UvYXR0cmlidXRlcy50c1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NsaXAtcGF0aFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hcmtlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hc2tcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wYWludC1zZXJ2ZXJcIikpO1xyXG5jb25zdCBQYWludFNlcnZlcnMgPSByZXF1aXJlKFwiLi9wYWludC1zZXJ2ZXJzXCIpO1xyXG5leHBvcnRzLlBhaW50U2VydmVycyA9IFBhaW50U2VydmVycztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCTEdsRFFVRTBRanRCUVVNMVFpdzRRa0ZCZVVJN1FVRkRla0lzTkVKQlFYVkNPMEZCUTNaQ0xHOURRVUVyUWp0QlFVVXZRaXhuUkVGQlowUTdRVUZIT1VNc2IwTkJRVmtpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dyYWRpZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcGF0dGVyblwiKSk7XHJcbmNvbnN0IEdyYWRpZW50cyA9IHJlcXVpcmUoXCIuL2dyYWRpZW50c1wiKTtcclxuZXhwb3J0cy5HcmFkaWVudHMgPSBHcmFkaWVudHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxHZERRVUV5UWp0QlFVTXpRaXdyUWtGQk1FSTdRVUZGTVVJc2VVTkJRWGxETzBGQlIzWkRMRGhDUVVGVEluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xpbmVhclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JhZGlhbFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEaENRVUY1UWp0QlFVTjZRaXc0UWtGQmVVSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29tcG9uZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZXh0ZXJuYWxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mb3JlaWduLW9iamVjdFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dyb3VwXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaW1hZ2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RleHRcIikpO1xyXG5jb25zdCBTaGFwZXMgPSByZXF1aXJlKFwiLi9zaGFwZXNcIik7XHJcbmV4cG9ydHMuU2hhcGVzID0gU2hhcGVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJMR2xEUVVFMFFqdEJRVU0xUWl4blEwRkJNa0k3UVVGRE0wSXNjME5CUVdsRE8wRkJRMnBETERaQ1FVRjNRanRCUVVONFFpdzJRa0ZCZDBJN1FVRkRlRUlzTmtKQlFYZENPMEZCUTNoQ0xEUkNRVUYxUWp0QlFVVjJRaXh0UTBGQmJVTTdRVUZIYWtNc2QwSkJRVTBpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY2lyY2xlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZWxsaXBzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xpbmVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wYXRoXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcG9seWdvblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BvbHlsaW5lXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVjdFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQkxEaENRVUY1UWp0QlFVTjZRaXdyUWtGQk1FSTdRVUZETVVJc05FSkJRWFZDTzBGQlEzWkNMRFJDUVVGMVFqdEJRVU4yUWl3clFrRkJNRUk3UVVGRE1VSXNaME5CUVRKQ08wRkJRek5DTERSQ1FVRjFRaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZXMvc2hhcGVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9