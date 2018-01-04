/*
 * SavageDOM 1.0.0-alpha.17 (https://github.com/molisani/SavageDOM) 
 * Copyright 2018 Michael Molisani
 * Licensed under LGPL-3.0 (https://github.com/molisani/SavageDOM/blob/master/LICENSE)
 */
(function(root, factory) {
    if (root === undefined && window !== undefined) root = window;
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require, exports, module);
    }
    else if(typeof define === 'function' && define.amd) {
        define(['require', 'exports', 'module'], factory);
    }
    else {
        var req = function(id) {return root[id];},
            exp = root,
            mod = {exports: exp};
        root['SavageDOM'] = factory(req, exp, mod);
    }
}(this, function(require, exports, module) {
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Animation;
    (function (Animation) {
        var Easing;
        (function (Easing) {
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
            Easing.cubicBezier = (p1x, p1y, p2x, p2y) => {
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
            Easing.linear = (t) => t;
            Easing.quadraticIn = (t) => Math.pow(t, 2);
            Easing.quadraticOut = flip(Easing.quadraticIn);
            Easing.quadratic = inout(Easing.quadraticIn, Easing.quadraticOut);
            Easing.cubicIn = (t) => Math.pow(t, 3);
            Easing.cubicOut = flip(Easing.cubicIn);
            Easing.cubic = inout(Easing.cubicIn, Easing.cubicOut);
            Easing.quarticIn = (t) => Math.pow(t, 4);
            Easing.quarticOut = flip(Easing.quarticIn);
            Easing.quartic = inout(Easing.quarticIn, Easing.quarticOut);
            Easing.quinticIn = (t) => Math.pow(t, 5);
            Easing.quinticOut = flip(Easing.quinticIn);
            Easing.quintic = inout(Easing.quinticIn, Easing.quinticOut);
            Easing.sineIn = (t) => 1 - Math.cos(t * Math.PI / 2);
            Easing.sineOut = flip(Easing.sineIn);
            Easing.sine = inout(Easing.sineIn, Easing.sineOut);
            Easing.exponentialIn = (t) => Math.pow(2, (10 * (t - 1)));
            Easing.exponentialOut = flip(Easing.exponentialIn);
            Easing.exponential = inout(Easing.exponentialIn, Easing.exponentialOut);
            Easing.circularIn = (t) => 1 - Math.sqrt(1 - Math.pow(t, 2));
            Easing.circularOut = flip(Easing.circularIn);
            Easing.circular = inout(Easing.circularIn, Easing.circularOut);
            Easing.backIn = (t) => Math.pow(t, 2) * ((s + 1) * t - s);
            Easing.backOut = flip(Easing.backIn);
            Easing.back = inout(Easing.backIn, Easing.backOut);
            Easing.elasticIn = (t) => Math.pow(2, (-10 * t)) * Math.sin((t - p) * (2 * Math.PI) / 0.3) + 1;
            Easing.elasticOut = flip(Easing.elasticIn);
            Easing.elastic = inout(Easing.elasticIn, Easing.elasticOut);
        })(Easing = Animation.Easing || (Animation.Easing = {}));
    })(Animation = SavageDOM.Animation || (SavageDOM.Animation = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Animation;
    (function (Animation) {
        var Renderer;
        (function (Renderer_1) {
            class Renderer {
                constructor() {
                    this._animationFrame = Rx.Observable.interval(0, Rx.Scheduler.animationFrame);
                    this._updates = new Rx.Subject();
                    this._dynamics = new Rx.Subject();
                    this._updates.bufferWhen(() => this._animationFrame).subscribe((events) => {
                        const now = performance.now();
                        events.forEach(({ resolve, el, attribute }) => {
                            el.renderAttribute(attribute.name, attribute.val);
                            resolve(now);
                        });
                    });
                    this._dynamics.bufferWhen(() => this._animationFrame).subscribe((dynamics) => {
                        const now = performance.now();
                        dynamics.forEach((dynamic) => {
                            const attributes = dynamic.calculate(now);
                            if (attributes === null) {
                                dynamic.resolve(now);
                            }
                            else {
                                attributes.forEach(({ name, val }) => {
                                    dynamic.el.renderAttribute(name, val);
                                });
                                this._dynamics.next(dynamic);
                            }
                        });
                    });
                }
                static getInstance() {
                    return Renderer._instance;
                }
                queueUpdate(el, a, val) {
                    return new Promise((resolve) => {
                        const attributes = [];
                    });
                }
                registerCalculated(el, calculate) {
                    return new Promise((resolve) => {
                        this._dynamics.next({
                            resolve, el,
                            calculate: (t) => {
                                const attrs = calculate(t);
                                if (attrs === null) {
                                    return null;
                                }
                                return Object.keys(attrs).map((name) => ({ name, val: attrs[name] }));
                            },
                        });
                    });
                }
            }
            Renderer._instance = new Renderer();
            Renderer_1.Renderer = Renderer;
        })(Renderer = Animation.Renderer || (Animation.Renderer = {}));
    })(Animation = SavageDOM.Animation || (SavageDOM.Animation = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    function _defaultGet(element, attr) {
        return this.parse(element.getAttribute(attr));
    }
    SavageDOM._defaultGet = _defaultGet;
    function _defaultSet(element, attr, override) {
        element.setAttribute(attr, (override === undefined) ? this : override);
    }
    SavageDOM._defaultSet = _defaultSet;
    SavageDOM.isAttribute = (obj) => {
        return typeof obj["interpolate"] === "function" && typeof obj["parse"] === "function";
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        Attributes._LengthParse = (css) => {
            const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
            if (m !== null) {
                return new Attributes.Dimension(parseFloat(m[1]), m[2]);
            }
            return parseFloat(css);
        };
        Attributes._LengthInterpolate = (a, b, t) => {
            if (typeof a !== "number") {
                if (typeof b !== "number") {
                    return b.interpolate(a, t);
                }
                else {
                    return a.interpolate(new Attributes.Dimension(b, a.unit), 1 - t);
                }
            }
            else {
                if (typeof b !== "number") {
                    return b.interpolate(new Attributes.Dimension(a, b.unit), t);
                }
                else {
                    return SavageDOM._lerp(a, b, t);
                }
            }
        };
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
                return new Box(Attributes._LengthInterpolate(from.x, this.x, t), Attributes._LengthInterpolate(from.y, this.y, t), Attributes._LengthInterpolate(from.width, this.width, t), Attributes._LengthInterpolate(from.height, this.height, t));
            }
        }
        Attributes.Box = Box;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        let ColorMatrix;
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
                    return new Raw([this.arr.map((val, i) => SavageDOM._lerp(from[i], val, t))]);
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
                    return new Saturate(SavageDOM._lerp(from.value, this.value, t));
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
                    return new HueRotate(SavageDOM._lerp(from.value, this.value, t));
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
        })(ColorMatrix = Attributes.ColorMatrix || (Attributes.ColorMatrix = {}));
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
                        return new RGB(SavageDOM._lerp(from.r, this.r, t), SavageDOM._lerp(from.g, this.g, t), SavageDOM._lerp(from.b, this.b, t), SavageDOM._lerp(from.a, this.a, t));
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
                        return new HSL(SavageDOM._lerp(h1, h2, t) % 360, SavageDOM._lerp(from.s, this.s, t), SavageDOM._lerp(from.l, this.l, t), SavageDOM._lerp(from.a, this.a, t));
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
        Attributes.Color = Color;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
                        return new Dimension(SavageDOM._lerp(from.value, this.value, t) * toPx * fromPx, this.unit);
                    }
                }
                return new Dimension(SavageDOM._lerp(from.value, this.value, t), this.unit);
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
        Attributes.Dimension = Dimension;
        class Percentage extends Dimension {
            constructor(value) {
                super(value, "%");
            }
        }
        Attributes.Percentage = Percentage;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
                return new Matrix([this.arr.map((val, i) => SavageDOM._lerp(from[i], val, t))]);
            }
        }
        Attributes.Matrix = Matrix;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
                    return new NumberOptionalNumber(SavageDOM._lerp(from.n, this.n, t), SavageDOM._lerp(from.o, this.o, t));
                }
                else if (from.o === undefined && this.o !== undefined) {
                    return new NumberOptionalNumber(SavageDOM._lerp(from.n, this.n, t), SavageDOM._lerp(0, this.o, t));
                }
                else if (from.o !== undefined && this.o === undefined) {
                    return new NumberOptionalNumber(SavageDOM._lerp(from.n, this.n, t), SavageDOM._lerp(from.o, 0, t));
                }
                else {
                    return new NumberOptionalNumber(SavageDOM._lerp(from.n, this.n, t));
                }
            }
        }
        Attributes.NumberOptionalNumber = NumberOptionalNumber;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
        Attributes.PathSegment = PathSegment;
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
                    return this.buildInstance(Attributes._LengthParse(css));
                }
                interpolate(from, t) {
                    return this.buildInstance(Attributes._LengthInterpolate(from.l, this.l, t));
                }
            }
            PathSegment.SingleLength = SingleLength;
            class SinglePoint extends PathSegment {
                constructor(command, p = new Attributes.Point(0, 0)) {
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
                constructor(command, p1 = new Attributes.Point(0, 0), p2 = new Attributes.Point(0, 0)) {
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
                constructor(command, p1 = new Attributes.Point(0, 0), p2 = new Attributes.Point(0, 0), p3 = new Attributes.Point(0, 0)) {
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
                constructor(p = new Attributes.Point(0, 0), y = 0) {
                    super("M", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
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
                constructor(p = new Attributes.Point(0, 0), y = 0) {
                    super("m", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
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
                constructor(p = new Attributes.Point(0, 0), y = 0) {
                    super("L", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
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
                constructor(p = new Attributes.Point(0, 0), y = 0) {
                    super("l", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
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
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c = new Attributes.Point(0, 0), d, e, f) {
                    const c1 = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const c2 = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
                    const p = c instanceof Attributes.Point ? c : new Attributes.Point(e, f);
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
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c = new Attributes.Point(0, 0), d, e, f) {
                    const c1 = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const c2 = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
                    const p = c instanceof Attributes.Point ? c : new Attributes.Point(e, f);
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
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c, d) {
                    const c2 = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const p = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
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
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c, d) {
                    const c2 = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const p = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
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
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c, d) {
                    const c1 = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const p = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
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
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c, d) {
                    const c1 = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const p = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
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
                constructor(p = new Attributes.Point(0, 0), y = 0) {
                    super("T", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
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
                constructor(p = new Attributes.Point(0, 0), y = 0) {
                    super("t", p instanceof Attributes.Point ? p : new Attributes.Point(p, y));
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
                constructor(command, r = new Attributes.Point(0, 0), p = new Attributes.Point(0, 0), xAxisRotate = 0, largeArc = false, sweepClockwise = true) {
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
                    return this.buildInstance(this.r.interpolate(from.r, t), this.p.interpolate(from.p, t), SavageDOM._lerp(from.xAxisRotate, this.xAxisRotate, t), (t < 0.5) ? from.largeArc : this.largeArc, (t < 0.5) ? from.sweepClockwise : this.sweepClockwise);
                }
            }
            PathSegment.ArcTo = ArcTo;
            class ArcToAbs extends ArcTo {
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c, d, e, f, g) {
                    const r = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const p = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
                    let xAxisRotate = 0;
                    let largeArc = false;
                    let sweepClockwise = true;
                    if (a instanceof Attributes.Point && b instanceof Attributes.Point) {
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
                constructor(a = new Attributes.Point(0, 0), b = new Attributes.Point(0, 0), c, d, e, f, g) {
                    const r = a instanceof Attributes.Point ? a : new Attributes.Point(a, b);
                    const p = b instanceof Attributes.Point ? b : new Attributes.Point(c, d);
                    let xAxisRotate = 0;
                    let largeArc = false;
                    let sweepClockwise = true;
                    if (a instanceof Attributes.Point && b instanceof Attributes.Point) {
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
        })(PathSegment = Attributes.PathSegment || (Attributes.PathSegment = {}));
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
                    return new Attributes.Point(Attributes._LengthParse(toks[0]), Attributes._LengthParse(toks[1]));
                }
                else {
                    return new Attributes.Point(0, 0);
                }
            }
            get(element, attr) {
                const toks = attr.split(":");
                if (toks.length === 2) {
                    const cssX = element.getAttribute(toks[0]);
                    const cssY = element.getAttribute(toks[1]);
                    if (cssX !== null && cssY !== null) {
                        return new Attributes.Point(Attributes._LengthParse(cssX), Attributes._LengthParse(cssY));
                    }
                    else {
                        return new Attributes.Point(0, 0);
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
                return new Attributes.Point(Attributes._LengthInterpolate(from.x, this.x, t), Attributes._LengthInterpolate(from.y, this.y, t));
            }
        }
        Attributes.Point = Point;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
        Attributes.PreserveAspectRatio = PreserveAspectRatio;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        class TextContent {
            constructor(str) {
                if (typeof str === "string") {
                    this._str = str;
                }
                else {
                    this._cb = str;
                }
            }
            static escapeHtml(html) {
                return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
        Attributes.TextContent = TextContent;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
        Attributes.Transform = Transform;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        var Transforms;
        (function (Transforms) {
            class Matrix extends Attributes.Transform {
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
                        return new Matrix(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]), parseFloat(toks[4]), parseFloat(toks[5]));
                    }
                    else {
                        return new Matrix();
                    }
                }
                interpolate(from, t) {
                    return new Matrix(SavageDOM._lerp(from.a, this.a, t), SavageDOM._lerp(from.b, this.b, t), SavageDOM._lerp(from.c, this.c, t), SavageDOM._lerp(from.d, this.d, t), SavageDOM._lerp(from.e, this.e, t), SavageDOM._lerp(from.f, this.f, t));
                }
            }
            Transforms.Matrix = Matrix;
        })(Transforms = Attributes.Transforms || (Attributes.Transforms = {}));
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        var Transforms;
        (function (Transforms) {
            class Rotate extends Attributes.Transform {
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
                        return new Rotate(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
                    }
                    else {
                        return new Rotate(0);
                    }
                }
                interpolate(from, t) {
                    return new Rotate(SavageDOM._lerp(from.a, this.a, t), SavageDOM._lerp(from.x, this.x, t), SavageDOM._lerp(from.y, this.y, t));
                }
            }
            Transforms.Rotate = Rotate;
        })(Transforms = Attributes.Transforms || (Attributes.Transforms = {}));
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        var Transforms;
        (function (Transforms) {
            class UniformScale extends Attributes.Transform {
                constructor(s = 1) {
                    super("scale");
                    this.s = s;
                }
                args() {
                    return this.s.toString();
                }
                parseArgs(css) {
                    if (css !== null) {
                        return new UniformScale(parseFloat(css));
                    }
                    else {
                        return new UniformScale();
                    }
                }
                interpolate(from, t) {
                    return new UniformScale(SavageDOM._lerp(from.s, this.s, t));
                }
            }
            Transforms.UniformScale = UniformScale;
            class Scale extends Attributes.Transform {
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
                            return new Scale(parseFloat(toks[0]));
                        }
                        else {
                            return new Scale(parseFloat(toks[0]), parseFloat(toks[1]));
                        }
                    }
                    else {
                        return new Scale();
                    }
                }
                interpolate(from, t) {
                    return new Scale(SavageDOM._lerp(from.x, this.x, t), SavageDOM._lerp(from.y, this.y, t));
                }
            }
            Transforms.Scale = Scale;
        })(Transforms = Attributes.Transforms || (Attributes.Transforms = {}));
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        var Transforms;
        (function (Transforms) {
            class SkewX extends Attributes.Transform {
                constructor(a = 0) {
                    super("skewX");
                    this.a = a;
                }
                args() {
                    return this.a.toString();
                }
                parseArgs(css) {
                    if (css !== null) {
                        return new SkewX(parseFloat(css));
                    }
                    else {
                        return new SkewX();
                    }
                }
                interpolate(from, t) {
                    return new SkewX(SavageDOM._lerp(from.a, this.a, t));
                }
            }
            Transforms.SkewX = SkewX;
            class SkewY extends Attributes.Transform {
                constructor(a = 0) {
                    super("skewY");
                    this.a = a;
                }
                args() {
                    return this.a.toString();
                }
                parseArgs(css) {
                    if (css !== null) {
                        return new SkewY(parseFloat(css));
                    }
                    else {
                        return new SkewY();
                    }
                }
                interpolate(from, t) {
                    return new SkewY(SavageDOM._lerp(from.a, this.a, t));
                }
            }
            Transforms.SkewY = SkewY;
        })(Transforms = Attributes.Transforms || (Attributes.Transforms = {}));
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
        var Transforms;
        (function (Transforms) {
            class Translate extends Attributes.Transform {
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
                            return new Translate(parseFloat(toks[0]));
                        }
                        else {
                            return new Translate(parseFloat(toks[0]), parseFloat(toks[1]));
                        }
                    }
                    else {
                        return new Translate();
                    }
                }
                interpolate(from, t) {
                    return new Translate(SavageDOM._lerp(from.x, this.x, t), SavageDOM._lerp(from.y, this.y, t));
                }
            }
            Transforms.Translate = Translate;
        })(Transforms = Attributes.Transforms || (Attributes.Transforms = {}));
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attributes;
    (function (Attributes) {
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
                return new NumberWrapper(SavageDOM._lerp(from.n, this.n, t));
            }
        }
        Attributes.NumberWrapper = NumberWrapper;
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
        Attributes.ArrayWrapper = ArrayWrapper;
    })(Attributes = SavageDOM.Attributes || (SavageDOM.Attributes = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    SavageDOM.XMLNS = "http://www.w3.org/2000/svg";
    SavageDOM.XLINK = "http://www.w3.org/1999/xlink";
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    function initializeRoot(root) {
        root.setAttribute("xmlns", SavageDOM.XMLNS);
        root.setAttributeNS(SavageDOM.XMLNS, "xlink", SavageDOM.XLINK);
        root.setAttribute("version", "1.1");
        const defs = root.querySelector("defs");
        if (defs !== null) {
            return defs;
        }
        return root.appendChild(window.document.createElementNS(SavageDOM.XMLNS, "defs"));
    }
    class Context {
        constructor(root) {
            if (root) {
                if (typeof root === "string") {
                    const el = window.document.getElementById(root);
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
                this._root = window.document.createElementNS(SavageDOM.XMLNS, "svg");
                window.document.body.appendChild(this._root);
            }
            this._root.setAttribute("xmlns", SavageDOM.XMLNS);
            this._root.setAttributeNS(SavageDOM.XMLNS, "xlink", SavageDOM.XLINK);
            this._root.setAttribute("version", "1.1");
            const defsElements = this._root.getElementsByTagName("defs");
            if (defsElements.length > 0) {
                this._defs = new SavageDOM.Element(this, defsElements.item(0));
            }
            else {
                this._defs = new SavageDOM.Element(this, "defs");
            }
            this._target = this._root;
        }
        addDef(def) {
            this._defs.add(def);
        }
        addChild(el) {
            this._target.appendChild((el instanceof SavageDOM.Element) ? el.node : el);
        }
    }
    SavageDOM.Context = Context;
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    const randomId = () => Math.random().toString(36).substring(2);
    class Element {
        constructor(context, el, attrs, _id = randomId()) {
            this.context = context;
            this._id = _id;
            this._subject = new Rx.Subject();
            this._dynamicSubscriptions = {};
            if (typeof el === "string") {
                this._node = window.document.createElementNS(SavageDOM.XMLNS, el);
                if (attrs !== undefined) {
                    this.setAttributes(attrs);
                }
                this.context.addChild(this._node);
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
            this._style = window.getComputedStyle(this._node);
            this._subject.subscribe((update) => {
                SavageDOM.Animation.Renderer.Renderer.getInstance().queueUpdate(this, update.name, update.val);
            });
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
            if (SavageDOM.isAttribute(val)) {
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
            this._subject.next({ name, val });
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
        get attributes() {
            return this._subject.asObservable();
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
            return Rx.Observable.fromEvent(this._node, event);
        }
        get boundingBox() {
            const rect = this._node.getBoundingClientRect();
            return new SavageDOM.Attributes.Box(rect.left, rect.top, rect.width, rect.height);
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
    SavageDOM.Element = Element;
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        class FilterPrimitive extends SavageDOM.Element {
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
        Elements.FilterPrimitive = FilterPrimitive;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Blend extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feBlend", attrs);
                }
            }
            FilterPrimitives.Blend = Blend;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class ColorMatrix extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feColorMatrix", attrs);
                }
            }
            FilterPrimitives.ColorMatrix = ColorMatrix;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class ComponentTransfer extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feComponentTransfer", attrs);
                }
            }
            FilterPrimitives.ComponentTransfer = ComponentTransfer;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Composite extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feComposite", attrs);
                }
            }
            FilterPrimitives.Composite = Composite;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class ConvolveMatrix extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feConvolveMatrix", attrs);
                }
            }
            FilterPrimitives.ConvolveMatrix = ConvolveMatrix;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class DisplacementMap extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feDisplacementMap", attrs);
                }
            }
            FilterPrimitives.DisplacementMap = DisplacementMap;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Flood extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feFlood", attrs);
                }
            }
            FilterPrimitives.Flood = Flood;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class GaussianBlur extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feGaussianBlur", attrs);
                }
            }
            FilterPrimitives.GaussianBlur = GaussianBlur;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Image extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feImage", attrs);
                }
            }
            FilterPrimitives.Image = Image;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            var Lighting;
            (function (Lighting) {
                class DiffuseLighting extends Elements.FilterPrimitive {
                    constructor(filter, attrs) {
                        super(filter, "feDiffuseLighting", attrs);
                    }
                }
                Lighting.DiffuseLighting = DiffuseLighting;
            })(Lighting = FilterPrimitives.Lighting || (FilterPrimitives.Lighting = {}));
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            var Lighting;
            (function (Lighting) {
                var LightSource;
                (function (LightSource) {
                    class DistantLight extends Elements.FilterPrimitive {
                        constructor(filter, attrs) {
                            super(filter, "feDistantLight", attrs);
                        }
                    }
                    LightSource.DistantLight = DistantLight;
                })(LightSource = Lighting.LightSource || (Lighting.LightSource = {}));
            })(Lighting = FilterPrimitives.Lighting || (FilterPrimitives.Lighting = {}));
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            var Lighting;
            (function (Lighting) {
                var LightSource;
                (function (LightSource) {
                    class PointLight extends Elements.FilterPrimitive {
                        constructor(filter, attrs) {
                            super(filter, "fePointLight", attrs);
                        }
                    }
                    LightSource.PointLight = PointLight;
                })(LightSource = Lighting.LightSource || (Lighting.LightSource = {}));
            })(Lighting = FilterPrimitives.Lighting || (FilterPrimitives.Lighting = {}));
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            var Lighting;
            (function (Lighting) {
                var LightSource;
                (function (LightSource) {
                    class SpotLight extends Elements.FilterPrimitive {
                        constructor(filter, attrs) {
                            super(filter, "feSpotLight", attrs);
                        }
                    }
                    LightSource.SpotLight = SpotLight;
                })(LightSource = Lighting.LightSource || (Lighting.LightSource = {}));
            })(Lighting = FilterPrimitives.Lighting || (FilterPrimitives.Lighting = {}));
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            var Lighting;
            (function (Lighting) {
                class SpecularLighting extends Elements.FilterPrimitive {
                    constructor(filter, attrs) {
                        super(filter, "feSpecularLighting", attrs);
                    }
                }
                Lighting.SpecularLighting = SpecularLighting;
            })(Lighting = FilterPrimitives.Lighting || (FilterPrimitives.Lighting = {}));
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class MergeNode extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feMergeNode", attrs);
                }
            }
            FilterPrimitives.MergeNode = MergeNode;
            class Merge extends Elements.FilterPrimitive {
                constructor(filter) {
                    super(filter, "feMerge");
                }
            }
            FilterPrimitives.Merge = Merge;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Morphology extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feMorphology", attrs);
                }
            }
            FilterPrimitives.Morphology = Morphology;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Offset extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feOffset", attrs);
                }
            }
            FilterPrimitives.Offset = Offset;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Tile extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feTile", attrs);
                }
            }
            FilterPrimitives.Tile = Tile;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class TransferFunction extends Elements.FilterPrimitive {
                constructor(filter, channel, attrs) {
                    super(filter, `feFunc${channel}`, attrs);
                }
            }
            FilterPrimitives.TransferFunction = TransferFunction;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var FilterPrimitives;
        (function (FilterPrimitives) {
            class Turbulence extends Elements.FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feTurbulence", attrs);
                }
            }
            FilterPrimitives.Turbulence = Turbulence;
        })(FilterPrimitives = Elements.FilterPrimitives || (Elements.FilterPrimitives = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
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
        class Filter extends SavageDOM.Element {
            constructor(context) {
                super(context, "filter");
                this.context = context;
                this.context.addDef(this);
            }
            blend(mode, input1, input2) {
                return new Elements.FilterPrimitives.Blend(this, {
                    in: input1,
                    in2: input2,
                    mode,
                });
            }
            colorMatrix(matrix, input) {
                return new Elements.FilterPrimitives.ColorMatrix(this, {
                    in: input,
                    type: matrix.type,
                    values: matrix,
                });
            }
            componentTransfer(r, g, b, a, input) {
                const componentTransfer = new Elements.FilterPrimitives.ComponentTransfer(this, {
                    in: input,
                });
                componentTransfer.add(new Elements.FilterPrimitives.TransferFunction(this, "R", r));
                componentTransfer.add(new Elements.FilterPrimitives.TransferFunction(this, "G", g));
                componentTransfer.add(new Elements.FilterPrimitives.TransferFunction(this, "B", b));
                if (a !== undefined) {
                    componentTransfer.add(new Elements.FilterPrimitives.TransferFunction(this, "A", a));
                }
                return componentTransfer;
            }
            composite(operator, k1, k2, k3, k4, input1, input2) {
                return new Elements.FilterPrimitives.Composite(this, {
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
                return new Elements.FilterPrimitives.ConvolveMatrix(this, merge(attrs, { in: input }));
            }
            diffuseLighting(attrs, lights = [], input) {
                const fe = new Elements.FilterPrimitives.Lighting.DiffuseLighting(this, merge(attrs, { in: input }));
                this.addLights(fe, lights);
                return fe;
            }
            displacementMap(attrs, input1, input2) {
                return new Elements.FilterPrimitives.DisplacementMap(this, merge(attrs, { in: input1, in2: input2 }));
            }
            flood(color, area) {
                const fe = new Elements.FilterPrimitives.Flood(this, { "flood-color": color });
                fe.setAttributes({
                    x: area.x,
                    y: area.y,
                    width: area.width,
                    height: area.height,
                });
                return fe;
            }
            gaussianBlur(stdDeviation = 0, edgeMode = "duplicate", input) {
                return new Elements.FilterPrimitives.GaussianBlur(this, {
                    in: input,
                    stdDeviation,
                    edgeMode,
                });
            }
            image(href, preserveAspectRatio) {
                return new Elements.FilterPrimitives.Image(this, {
                    "xlink:href": href,
                    preserveAspectRatio,
                });
            }
            merge(inputs) {
                const fe = new Elements.FilterPrimitives.Merge(this);
                inputs.forEach(input => {
                    const mergeNode = new SavageDOM.Element(this.context, "feMergeNode", { in: input });
                    fe.add(mergeNode);
                });
                return fe;
            }
            morphology(operator, radius, input) {
                return new Elements.FilterPrimitives.Morphology(this, {
                    in: input,
                    operator,
                    radius,
                });
            }
            offset(d, input) {
                return new Elements.FilterPrimitives.Offset(this, {
                    in: input,
                    dx: d.x,
                    dy: d.y,
                });
            }
            specularLighting(attrs, lights = [], input) {
                const fe = new Elements.FilterPrimitives.Lighting.SpecularLighting(this, attrs);
                this.addLights(fe, lights);
                return fe;
            }
            tile(area, input) {
                const fe = new Elements.FilterPrimitives.Tile(this, { in: input });
                fe.setAttributes({
                    x: area.x,
                    y: area.y,
                    width: area.width,
                    height: area.height,
                });
                return fe;
            }
            turbulence(attrs) {
                return new Elements.FilterPrimitives.Turbulence(this, attrs);
            }
            addLights(lighting, lights) {
                lights.forEach(light => {
                    switch (light.type) {
                        case "point":
                            lighting.add(new Elements.FilterPrimitives.Lighting.LightSource.PointLight(this, light));
                            break;
                        case "distant":
                            lighting.add(new Elements.FilterPrimitives.Lighting.LightSource.DistantLight(this, light));
                            break;
                        case "spot":
                            lighting.add(new Elements.FilterPrimitives.Lighting.LightSource.SpotLight(this, light));
                            break;
                    }
                });
            }
        }
        Elements.Filter = Filter;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        class AbstractNonRenderable extends SavageDOM.Element {
        }
        Elements.AbstractNonRenderable = AbstractNonRenderable;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            class ClipPath extends Elements.AbstractNonRenderable {
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
            NonRenderables.ClipPath = ClipPath;
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            class Marker extends Elements.AbstractNonRenderable {
                constructor(context, attrs) {
                    super(context, "marker", attrs);
                }
            }
            NonRenderables.Marker = Marker;
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            class Mask extends Elements.AbstractNonRenderable {
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
            NonRenderables.Mask = Mask;
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            class AbstractPaintServer extends Elements.AbstractNonRenderable {
            }
            NonRenderables.AbstractPaintServer = AbstractPaintServer;
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            var PaintServers;
            (function (PaintServers) {
                class Stop extends SavageDOM.Element {
                    constructor(context, offset, color) {
                        super(context, "stop", {
                            offset: new SavageDOM.Attributes.Dimension(offset * 100, "%"),
                            "stop-color": color,
                        });
                        this.offset = offset;
                    }
                }
                PaintServers.Stop = Stop;
                class AbstractGradient extends NonRenderables.AbstractPaintServer {
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
                PaintServers.AbstractGradient = AbstractGradient;
            })(PaintServers = NonRenderables.PaintServers || (NonRenderables.PaintServers = {}));
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            var PaintServers;
            (function (PaintServers) {
                var Gradients;
                (function (Gradients) {
                    class Linear extends PaintServers.AbstractGradient {
                        constructor(context, stops, attrs) {
                            super(context, "linearGradient", stops, attrs);
                        }
                    }
                    Gradients.Linear = Linear;
                })(Gradients = PaintServers.Gradients || (PaintServers.Gradients = {}));
            })(PaintServers = NonRenderables.PaintServers || (NonRenderables.PaintServers = {}));
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            var PaintServers;
            (function (PaintServers) {
                var Gradients;
                (function (Gradients) {
                    class Radial extends PaintServers.AbstractGradient {
                        constructor(context, stops, attrs) {
                            super(context, "radialGradient", stops, attrs);
                        }
                    }
                    Gradients.Radial = Radial;
                })(Gradients = PaintServers.Gradients || (PaintServers.Gradients = {}));
            })(PaintServers = NonRenderables.PaintServers || (NonRenderables.PaintServers = {}));
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderables;
        (function (NonRenderables) {
            var PaintServers;
            (function (PaintServers) {
                class Pattern extends NonRenderables.AbstractPaintServer {
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
                PaintServers.Pattern = Pattern;
            })(PaintServers = NonRenderables.PaintServers || (NonRenderables.PaintServers = {}));
        })(NonRenderables = Elements.NonRenderables || (Elements.NonRenderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        class AbstractRenderable extends SavageDOM.Element {
        }
        Elements.AbstractRenderable = AbstractRenderable;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            class ForeignObject extends Elements.AbstractRenderable {
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
            Renderables.ForeignObject = ForeignObject;
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.foreignObject = function (html, x, y, width, height) {
        const el = new SavageDOM.Elements.Renderables.ForeignObject(this, { x, y, width, height });
        el.addHTML(html);
        this.addChild(el);
        return el;
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            class Group extends Elements.AbstractRenderable {
                constructor(context, attrs) {
                    super(context, "g", attrs);
                }
            }
            Renderables.Group = Group;
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.group = function (els = []) {
        const el = new SavageDOM.Elements.Renderables.Group(this);
        els.forEach(child => el.add(child));
        this.addChild(el);
        return el;
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            class Image extends Elements.AbstractRenderable {
                constructor(context, attrs) {
                    super(context, "image", attrs);
                }
            }
            Renderables.Image = Image;
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.image = function (href) {
        const img = new SavageDOM.Elements.Renderables.Image(this);
        const promise = img.getEvent("load").take(1).toPromise();
        img.setAttribute("href", href);
        this.addChild(img);
        return promise.then(() => img);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            class AbstractShape extends Elements.AbstractRenderable {
            }
            Renderables.AbstractShape = AbstractShape;
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            var Shapes;
            (function (Shapes) {
                class Circle extends Renderables.AbstractShape {
                    constructor(context, attrs) {
                        super(context, "circle", attrs);
                    }
                }
                Shapes.Circle = Circle;
            })(Shapes = Renderables.Shapes || (Renderables.Shapes = {}));
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.circle = function (a1, a2, a3) {
        const attrs = (a1 instanceof SavageDOM.Attributes.Point) ? { "cx:cy": a1, r: a2 } : { cx: a1, cy: a2, r: a3 };
        return new SavageDOM.Elements.Renderables.Shapes.Circle(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            var Shapes;
            (function (Shapes) {
                class Ellipse extends Renderables.AbstractShape {
                    constructor(context, attrs) {
                        super(context, "ellipse", attrs);
                    }
                }
                Shapes.Ellipse = Ellipse;
            })(Shapes = Renderables.Shapes || (Renderables.Shapes = {}));
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.ellipse = function (a1, a2, a3, a4) {
        let attrs = {};
        const a1IsPoint = a1 instanceof SavageDOM.Attributes.Point;
        const a2IsPoint = a2 instanceof SavageDOM.Attributes.Point;
        if (a1IsPoint && a2IsPoint) {
            attrs = { "cx:cy": a1, "rx:ry": a2 };
        }
        else if (!(a1IsPoint || a2IsPoint)) {
            attrs = { cx: a1, cy: a2, rx: a3, ry: a4 };
        }
        return new SavageDOM.Elements.Renderables.Shapes.Ellipse(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            var Shapes;
            (function (Shapes) {
                class Line extends Renderables.AbstractShape {
                    constructor(context, attrs) {
                        super(context, "line", attrs);
                    }
                }
                Shapes.Line = Line;
            })(Shapes = Renderables.Shapes || (Renderables.Shapes = {}));
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.line = function (a1, a2, a3, a4) {
        let attrs = {};
        const a1IsPoint = a1 instanceof SavageDOM.Attributes.Point;
        const a2IsPoint = a2 instanceof SavageDOM.Attributes.Point;
        if (a1IsPoint && a2IsPoint) {
            attrs = { "x1:y1": a1, "x2:y2": a2 };
        }
        else if (!(a1IsPoint || a2IsPoint)) {
            attrs = { x1: a1, y1: a2, x2: a3, y2: a4 };
        }
        return new SavageDOM.Elements.Renderables.Shapes.Line(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            var Shapes;
            (function (Shapes) {
                class Path extends Renderables.AbstractShape {
                    constructor(context, attrs) {
                        super(context, "path", attrs);
                    }
                }
                Shapes.Path = Path;
            })(Shapes = Renderables.Shapes || (Renderables.Shapes = {}));
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.path = function (d, pathLength) {
        const attrs = { d, pathLength };
        return new SavageDOM.Elements.Renderables.Shapes.Path(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            var Shapes;
            (function (Shapes) {
                class Polygon extends Renderables.AbstractShape {
                    constructor(context, attrs) {
                        super(context, "polygon", attrs);
                    }
                }
                Shapes.Polygon = Polygon;
            })(Shapes = Renderables.Shapes || (Renderables.Shapes = {}));
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.polygon = function (points) {
        const attrs = { points };
        return new SavageDOM.Elements.Renderables.Shapes.Polygon(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            var Shapes;
            (function (Shapes) {
                class Polyline extends Renderables.AbstractShape {
                    constructor(context, attrs) {
                        super(context, "polyline", attrs);
                    }
                }
                Shapes.Polyline = Polyline;
            })(Shapes = Renderables.Shapes || (Renderables.Shapes = {}));
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.polyline = function (points) {
        const attrs = { points };
        return new SavageDOM.Elements.Renderables.Shapes.Polyline(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            var Shapes;
            (function (Shapes) {
                class Rect extends Renderables.AbstractShape {
                    constructor(context, attrs) {
                        super(context, "rect", attrs);
                    }
                }
                Shapes.Rect = Rect;
            })(Shapes = Renderables.Shapes || (Renderables.Shapes = {}));
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.rect = function (a1, a2, a3, a4, a5, a6) {
        const attrs = {};
        if (a1 instanceof SavageDOM.Attributes.Box) {
            attrs["x:y:width:height"] = a1;
            if (a2 instanceof SavageDOM.Attributes.Point) {
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
        else if (a1 instanceof SavageDOM.Attributes.Point) {
            attrs["x:y"] = a1;
            if (a2 !== undefined) {
                attrs["width"] = a2;
            }
            if (a3 !== undefined) {
                attrs["height"] = a3;
            }
            if (a4 instanceof SavageDOM.Attributes.Point) {
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
            if (a5 instanceof SavageDOM.Attributes.Point) {
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
        return new SavageDOM.Elements.Renderables.Shapes.Rect(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderables;
        (function (Renderables) {
            class TextSpan extends Elements.AbstractRenderable {
                constructor(context, attrs) {
                    super(context, "tspan", attrs);
                }
                get computedLength() {
                    return this._node.getComputedTextLength();
                }
            }
            Renderables.TextSpan = TextSpan;
            class Text extends Elements.AbstractRenderable {
                constructor(context, attrs) {
                    super(context, "text", attrs);
                }
                addSpan(content, lineHeight, update = true) {
                    const span = new TextSpan(this.context);
                    span.setAttribute("textContent", content);
                    if (lineHeight) {
                        span.setAttribute("x", parseFloat(this.getAttribute("x") || "0"));
                        if (typeof lineHeight === "number") {
                            span.setAttribute("dy", new SavageDOM.Attributes.Dimension(lineHeight, "em"));
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
            Renderables.Text = Text;
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
                        const lineContent = new SavageDOM.Attributes.TextContent(newLine);
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
                            this.addSpan(new SavageDOM.Attributes.TextContent(line), 1);
                        }
                    });
                }
            }
            Renderables.MultilineText = MultilineText;
        })(Renderables = Elements.Renderables || (Elements.Renderables = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Context.prototype.text = function (content, a1, a2) {
        const attrs = (a1 instanceof SavageDOM.Attributes.Point) ? { "x:y": a1 } : { x: a1, y: a2 };
        const t = new SavageDOM.Elements.Renderables.Text(this, attrs);
        content.forEach(c => t.addSpan(c));
        this.addChild(t);
        return t;
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    SavageDOM._lerp = (a, b, t) => a + ((b - a) * t);
})(SavageDOM || (SavageDOM = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2YWdlZG9tLmFtZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmltYXRpb24vZWFzaW5nLnRzIiwiLi4vc3JjL2FuaW1hdGlvbi9yZW5kZXJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUudHMiLCIuLi9zcmMvYXR0cmlidXRlcy9iYXNlLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZXMvYm94LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZXMvY29sb3ItbWF0cml4LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZXMvY29sb3IudHMiLCIuLi9zcmMvYXR0cmlidXRlcy9kaW1lbnNpb24udHMiLCIuLi9zcmMvYXR0cmlidXRlcy9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlcy9udW1iZXItb3B0aW9uYWwtbnVtYmVyLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZXMvcGF0aC1zZWdtZW50LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZXMvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlcy9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW8udHMiLCIuLi9zcmMvYXR0cmlidXRlcy90ZXh0LWNvbnRlbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm0udHMiLCIuLi9zcmMvYXR0cmlidXRlcy90cmFuc2Zvcm1zL21hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvcm90YXRlLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZXMvdHJhbnNmb3Jtcy9zY2FsZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvc2tldy50cyIsIi4uL3NyYy9hdHRyaWJ1dGVzL3RyYW5zZm9ybXMvdHJhbnNsYXRlLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZXMvd3JhcHBlcnMudHMiLCIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2NvbnRleHQudHMiLCIuLi9zcmMvZWxlbWVudC50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2JsZW5kLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbG9yLW1hdHJpeC50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9jb21wb25lbnQtdHJhbnNmZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvY29tcG9zaXRlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2NvbnZvbHZlLW1hdHJpeC50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9kaXNwbGFjZW1lbnQtbWFwLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2Zsb29kLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2dhdXNzaWFuLWJsdXIudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvaW1hZ2UudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvZGlmZnVzZS50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXItcHJpbWl0aXZlcy9saWdodGluZy9saWdodC1zb3VyY2UudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL2Rpc3RhbnQudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvbGlnaHRpbmcvbGlnaHQtc291cmNlL3BvaW50LnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL2xpZ2h0LXNvdXJjZS9zcG90LnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL2xpZ2h0aW5nL3NwZWN1bGFyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21lcmdlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL21vcnBob2xvZ3kudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvb2Zmc2V0LnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci1wcmltaXRpdmVzL3RpbGUudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHJhbnNmZXItZnVuY3Rpb24udHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLXByaW1pdGl2ZXMvdHVyYnVsZW5jZS50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL2NsaXAtcGF0aC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvbWFya2VyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9tYXNrLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnQudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGVzL3BhaW50LXNlcnZlcnMvZ3JhZGllbnRzL2xpbmVhci50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZXMvcGFpbnQtc2VydmVycy9ncmFkaWVudHMvcmFkaWFsLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlcy9wYWludC1zZXJ2ZXJzL3BhdHRlcm4udHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9mb3JlaWduLW9iamVjdC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9ncm91cC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9pbWFnZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvY2lyY2xlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9lbGxpcHNlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9saW5lLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wYXRoLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5Z29uLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGVzL3NoYXBlcy9wb2x5bGluZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy9zaGFwZXMvcmVjdC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlcy90ZXh0LnRzIiwiLi4vc3JjL2V2ZW50cy50cyIsIi4uL3NyYy9pbnRlcnBvbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFVLFNBQVMsQ0ErRmxCO0FBL0ZELFdBQVUsU0FBUztJQUFDLElBQUEsU0FBUyxDQStGNUI7SUEvRm1CLFdBQUEsU0FBUztRQUFDLElBQUEsTUFBTSxDQStGbkM7UUEvRjZCLFdBQUEsTUFBTTtZQUVsQyxNQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztZQUMvQixNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztZQVE1QixNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQWEsRUFBRTtnQkFDM0QsTUFBTSxDQUFDO29CQUNMLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDdEIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ2xCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtpQkFD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QUFDLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNmLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQ3hDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQ3hDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQzFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs0QkFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQ0FDcEMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQ0FDcEMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDdEMsQ0FBQzt3QkFDSCxDQUFDO3dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztZQUNNLFFBQVE7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsQ0FBQztZQUNNLEtBQUssQ0FBQyxHQUFrQjtnQkFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztZQUNILENBQUM7WUFDTSxHQUFHLENBQUMsT0FBc0MsRUFBRSxJQUFZO2dCQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNNLEdBQUcsQ0FBQyxPQUFzQyxFQUFFLElBQVksRUFBRSxRQUFnQjtnQkFDL0UsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0gsQ0FBQztZQUNNLFdBQVcsQ0FBQyxJQUFXLEVBQUUsQ0FBUztnQkFDdkMsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkIsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7O1FBL0RhLGtCQUFZLEdBQXNCLEtBQUssQ0FBQztRQUQzQyxnQkFBSyxRQWlFakIsQ0FBQTtJQUVILENBQUMsRUE3UW1CLFVBQVUsR0FBVixvQkFBVSxLQUFWLG9CQUFVLFFBNlE3QjtBQUFELENBQUMsRUE3UVMsU0FBUyxLQUFULFNBQVMsUUE2UWxCO0FDN1FELElBQVUsU0FBUyxDQW9FbEI7QUFwRUQsV0FBVSxTQUFTO0lBQUMsSUFBQSxVQUFVLENBb0U3QjtJQXBFbUIsV0FBQSxVQUFVO1FBTTVCO1lBYUUsWUFBbUIsS0FBYSxFQUFTLElBQVU7Z0JBQWhDLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtZQUFHLENBQUM7WUFDaEQsUUFBUTtnQkFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQyxDQUFDO1lBQ00sS0FBSyxDQUFDLEdBQWtCO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO29CQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDZixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBYyxDQUFDLENBQUM7d0JBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQy9DLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFFLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sTUFBTSxDQUFDLElBQUksU0FBUyxDQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsQ0FBQztvQkFDSCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6RCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNNLEdBQUcsQ0FBQyxPQUFzQyxFQUFFLElBQVk7Z0JBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQ00sR0FBRyxDQUFDLE9BQXNDLEVBQUUsSUFBWSxFQUFFLFFBQTBCO2dCQUN6RixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7WUFDSCxDQUFDO1lBQ00sV0FBVyxDQUFDLElBQXFCLEVBQUUsQ0FBUztnQkFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBYyxDQUFDLENBQUM7b0JBQ3BELE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFjLENBQUMsQ0FBQztvQkFDMUQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFPLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUYsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBTyxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFFLENBQUM7O1FBcERjLGlCQUFPLEdBQStCO1lBQ25ELEVBQUUsRUFBRSxDQUFDO1lBQ0wsRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUU7WUFDWixFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUU7WUFDYixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDVCxFQUFFLEVBQUUsQ0FBQztZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ1osR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUUsR0FBRztTQUNWLENBQUM7UUFaUyxvQkFBUyxZQXNEckIsQ0FBQTtRQUVELGdCQUF3QixTQUFRLFNBQWM7WUFDNUMsWUFBWSxLQUFhO2dCQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLENBQUM7U0FDRjtRQUpZLHFCQUFVLGFBSXRCLENBQUE7SUFFSCxDQUFDLEVBcEVtQixVQUFVLEdBQVYsb0JBQVUsS0FBVixvQkFBVSxRQW9FN0I7QUFBRCxDQUFDLEVBcEVTLFNBQVMsS0FBVCxTQUFTLFFBb0VsQjtBQ3BFRCxJQUFVLFNBQVMsQ0FnQ2xCO0FBaENELFdBQVUsU0FBUztJQUFDLElBQUEsVUFBVSxDQWdDN0I7SUFoQ21CLFdBQUEsVUFBVTtRQUU1QjtZQUVFLFlBQVksTUFBa0I7Z0JBRHZCLFFBQUcsR0FBYSxFQUFFLENBQUM7Z0JBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBQ00sUUFBUTtnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNNLEtBQUssQ0FBQyxHQUFrQjtnQkFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7WUFDSCxDQUFDO1lBQ00sR0FBRyxDQUFDLE9BQXNDLEVBQUUsSUFBWTtnQkFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDTSxHQUFHLENBQUMsT0FBc0MsRUFBRSxJQUFZLEVBQUUsUUFBaUI7Z0JBQ2hGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztZQUNILENBQUM7WUFDTSxXQUFXLENBQUMsSUFBWSxFQUFFLENBQVM7Z0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1NBQ0Y7UUE1QlksaUJBQU0sU0E0QmxCLENBQUE7SUFFSCxDQUFDLEVBaENtQixVQUFVLEdBQVYsb0JBQVUsS0FBVixvQkFBVSxRQWdDN0I7QUFBRCxDQUFDLEVBaENTLFNBQVMsS0FBVCxTQUFTLFFBZ0NsQjtBQ2hDRCxJQUFVLFNBQVMsQ0EwQ2xCO0FBMUNELFdBQVUsU0FBUztJQUFDLElBQUEsVUFBVSxDQTBDN0I7SUExQ21CLFdBQUEsVUFBVTtRQUU1QjtZQUNFLFlBQW1CLENBQVMsRUFBUyxDQUFVO2dCQUE1QixNQUFDLEdBQUQsQ0FBQyxDQUFRO2dCQUFTLE1BQUMsR0FBRCxDQUFDLENBQVM7WUFBRyxDQUFDO1lBQzVDLFFBQVE7Z0JBQ2IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1RSxDQUFDO1lBQ00sS0FBSyxDQUFDLEdBQWtCO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLENBQUM7Z0JBQ0gsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQztZQUNILENBQUM7WUFDTSxHQUFHLENBQUMsT0FBc0MsRUFBRSxJQUFZO2dCQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNNLEdBQUcsQ0FBQyxPQUFzQyxFQUFFLElBQVksRUFBRSxRQUErQjtnQkFDOUYsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0gsQ0FBQztZQUNNLFdBQVcsQ0FBQyxJQUEwQixFQUFFLENBQVM7Z0JBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDakQsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQztTQUNGO1FBdENZLCtCQUFvQix1QkFzQ2hDLENBQUE7SUFFSCxDQUFDLEVBMUNtQixVQUFVLEdBQVYsb0JBQVUsS0FBVixvQkFBVSxRQTBDN0I7QUFBRCxDQUFDLEVBMUNTLFNBQVMsS0FBVCxTQUFTLFFBMENsQjtBQzFDRCxJQUFVLFNBQVMsQ0FvYmxCO0FBcGJELFdBQVUsU0FBUztJQUFDLElBQUEsVUFBVSxDQW9iN0I7SUFwYm1CLFdBQUEsVUFBVTtRQUU1QjtZQUNFLFlBQW1CLE9BQTRCO2dCQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtZQUFHLENBQUM7WUFFNUMsS0FBSyxDQUFDLEdBQWtCO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBQ00sR0FBRyxDQUFDLE9BQW9CLEVBQUUsSUFBWTtnQkFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDTSxHQUFHLENBQUMsT0FBb0IsRUFBRSxJQUFZLEVBQUUsUUFBc0I7Z0JBQ25FLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztZQUNILENBQUM7U0FJRjtRQXZCcUIsc0JBQVcsY0F1QmhDLENBQUE7UUFFRCxXQUFpQixXQUFXO1lBSTFCLGtCQUFtQyxTQUFRLFdBQVc7Z0JBQ3BELFlBQVksT0FBOEIsRUFBUyxJQUF1QixDQUFDO29CQUN6RSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRGtDLE1BQUMsR0FBRCxDQUFDLENBQXVCO2dCQUUzRSxDQUFDO2dCQUNNLFFBQVE7b0JBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7Z0JBQ2hELENBQUM7Z0JBQ00sU0FBUyxDQUFDLEdBQVc7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQUEsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBQ00sV0FBVyxDQUFDLElBQWtCLEVBQUUsQ0FBUztvQkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQzthQUdGO1lBZnFCLHdCQUFZLGVBZWpDLENBQUE7WUFDRCxpQkFBa0MsU0FBUSxXQUFXO2dCQUNuRCxZQUFZLE9BQTBDLEVBQVMsSUFBc0IsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzdHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFEOEMsTUFBQyxHQUFELENBQUMsQ0FBK0M7Z0JBRS9HLENBQUM7Z0JBQ00sUUFBUTtvQkFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkFDTSxTQUFTLENBQUMsR0FBVztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFDTSxXQUFXLENBQUMsSUFBaUIsRUFBRSxDQUFTO29CQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELENBQUM7YUFHRjtZQWZxQix1QkFBVyxjQWVoQyxDQUFBO1lBQ0QsaUJBQWtDLFNBQVEsV0FBVztnQkFDbkQsWUFBWSxPQUE4QixFQUFTLEtBQXVCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQVMsS0FBdUIsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVKLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFEa0MsT0FBRSxHQUFGLEVBQUUsQ0FBK0M7b0JBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBK0M7Z0JBRTlKLENBQUM7Z0JBQ00sUUFBUTtvQkFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2dCQUN2RSxDQUFDO2dCQUNNLFNBQVMsQ0FBQyxHQUFXO29CQUMxQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUNNLFdBQVcsQ0FBQyxJQUFpQixFQUFFLENBQVM7b0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixDQUFDO2FBR0Y7WUFoQnFCLHVCQUFXLGNBZ0JoQyxDQUFBO1lBQ0QsaUJBQWtDLFNBQVEsV0FBVztnQkFDbkQsWUFBWSxPQUFrQixFQUFTLEtBQXVCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQVMsS0FBdUIsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBUyxLQUF1QixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQURzQixPQUFFLEdBQUYsRUFBRSxDQUErQztvQkFBUyxPQUFFLEdBQUYsRUFBRSxDQUErQztvQkFBUyxPQUFFLEdBQUYsRUFBRSxDQUErQztnQkFFNU0sQ0FBQztnQkFDTSxRQUFRO29CQUNiLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDN0YsQ0FBQztnQkFDTSxTQUFTLENBQUMsR0FBVztvQkFDMUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEcsQ0FBQztnQkFDTSxXQUFXLENBQUMsSUFBaUIsRUFBRSxDQUFTO29CQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvSCxDQUFDO2FBR0Y7WUFoQnFCLHVCQUFXLGNBZ0JoQyxDQUFBO1lBRUQsZUFBdUIsU0FBUSxXQUFXO2dCQUd4QyxZQUFZLElBQTBDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBdUIsQ0FBQztvQkFDeEcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBQ00sYUFBYSxDQUFDLENBQW1CO29CQUN0QyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ00sZUFBZTtvQkFDcEIsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7YUFDRjtZQVpZLHFCQUFTLFlBWXJCLENBQUE7WUFDRCxlQUF1QixTQUFRLFdBQVc7Z0JBR3hDLFlBQVksSUFBMEMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUF1QixDQUFDO29CQUN4RyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFDTSxhQUFhLENBQUMsQ0FBbUI7b0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDTSxlQUFlO29CQUNwQixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDekIsQ0FBQzthQUNGO1lBWlkscUJBQVMsWUFZckIsQ0FBQTtZQUVELGVBQXVCLFNBQVEsV0FBVztnQkFDeEM7b0JBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBQ00sUUFBUTtvQkFDYixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBQ00sU0FBUyxDQUFDLEdBQVc7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNNLGVBQWU7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNNLFdBQVcsQ0FBQyxJQUFlLEVBQUUsQ0FBUztvQkFDM0MsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7YUFDRjtZQWhCWSxxQkFBUyxZQWdCckIsQ0FBQTtZQUVELGVBQXVCLFNBQVEsV0FBVztnQkFHeEMsWUFBWSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQXVCLENBQUM7b0JBQ3hHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUNNLGFBQWEsQ0FBQyxDQUFtQjtvQkFDdEMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNNLGVBQWU7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2FBQ0Y7WUFaWSxxQkFBUyxZQVlyQixDQUFBO1lBQ0QsZUFBdUIsU0FBUSxXQUFXO2dCQUd4QyxZQUFZLElBQTBDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBdUIsQ0FBQztvQkFDeEcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBQ00sYUFBYSxDQUFDLENBQW1CO29CQUN0QyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ00sZUFBZTtvQkFDcEIsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7YUFDRjtZQVpZLHFCQUFTLFlBWXJCLENBQUE7WUFFRCx5QkFBaUMsU0FBUSxZQUFZO2dCQUNuRCxZQUFZLElBQXVCLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ00sYUFBYSxDQUFDLENBQW9CO29CQUN2QyxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDTSxlQUFlO29CQUNwQixNQUFNLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2FBQ0Y7WUFWWSwrQkFBbUIsc0JBVS9CLENBQUE7WUFDRCx5QkFBaUMsU0FBUSxZQUFZO2dCQUNuRCxZQUFZLElBQXVCLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ00sYUFBYSxDQUFDLENBQW9CO29CQUN2QyxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDTSxlQUFlO29CQUNwQixNQUFNLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2FBQ0Y7WUFWWSwrQkFBbUIsc0JBVS9CLENBQUE7WUFFRCx1QkFBK0IsU0FBUSxZQUFZO2dCQUNqRCxZQUFZLElBQXVCLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ00sYUFBYSxDQUFDLENBQW9CO29CQUN2QyxNQUFNLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDTSxlQUFlO29CQUNwQixNQUFNLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dCQUNqQyxDQUFDO2FBQ0Y7WUFWWSw2QkFBaUIsb0JBVTdCLENBQUE7WUFDRCx1QkFBK0IsU0FBUSxZQUFZO2dCQUNqRCxZQUFZLElBQXVCLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ00sYUFBYSxDQUFDLENBQW9CO29CQUN2QyxNQUFNLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDTSxlQUFlO29CQUNwQixNQUFNLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dCQUNqQyxDQUFDO2FBQ0Y7WUFWWSw2QkFBaUIsb0JBVTdCLENBQUE7WUFFRCxxQkFBNkIsU0FBUSxXQUFXO2dCQUc5QyxZQUFZLElBQTBDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBMEMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQXFCLEVBQUUsQ0FBcUIsRUFBRSxDQUFxQjtvQkFDL1IsTUFBTSxFQUFFLEdBQXFCLENBQUMsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBc0IsQ0FBQyxDQUFDO29CQUNqSCxNQUFNLEVBQUUsR0FBcUIsQ0FBQyxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQXNCLEVBQUUsQ0FBc0IsQ0FBQyxDQUFDO29CQUN0SSxNQUFNLENBQUMsR0FBcUIsQ0FBQyxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQXNCLEVBQUUsQ0FBc0IsQ0FBQyxDQUFDO29CQUNySSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ00sYUFBYSxDQUFDLEVBQW9CLEVBQUUsRUFBb0IsRUFBRSxDQUFtQjtvQkFDbEYsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQ00sZUFBZTtvQkFDcEIsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQy9CLENBQUM7YUFDRjtZQWZZLDJCQUFlLGtCQWUzQixDQUFBO1lBQ0QscUJBQTZCLFNBQVEsV0FBVztnQkFHOUMsWUFBWSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQTBDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBMEMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFxQixFQUFFLENBQXFCLEVBQUUsQ0FBcUI7b0JBQy9SLE1BQU0sRUFBRSxHQUFxQixDQUFDLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQXNCLENBQUMsQ0FBQztvQkFDakgsTUFBTSxFQUFFLEdBQXFCLENBQUMsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFzQixFQUFFLENBQXNCLENBQUMsQ0FBQztvQkFDdEksTUFBTSxDQUFDLEdBQXFCLENBQUMsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFzQixFQUFFLENBQXNCLENBQUMsQ0FBQztvQkFDckksS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUNNLGFBQWEsQ0FBQyxFQUFvQixFQUFFLEVBQW9CLEVBQUUsQ0FBbUI7b0JBQ2xGLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUNNLGVBQWU7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2FBQ0Y7WUFmWSwyQkFBZSxrQkFlM0IsQ0FBQTtZQUVELDJCQUFtQyxTQUFRLFdBQVc7Z0JBR3BELFlBQVksSUFBMEMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQXFCLEVBQUUsQ0FBcUI7b0JBQ2xNLE1BQU0sRUFBRSxHQUFxQixDQUFDLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBc0IsRUFBRSxDQUFzQixDQUFDLENBQUM7b0JBQ3RJLE1BQU0sQ0FBQyxHQUFxQixDQUFDLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBc0IsRUFBRSxDQUFzQixDQUFDLENBQUM7b0JBQ3JJLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNNLGFBQWEsQ0FBQyxFQUFvQixFQUFFLENBQW1CO29CQUM1RCxNQUFNLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ00sZUFBZTtvQkFDcEIsTUFBTSxDQUFDLElBQUkscUJBQXFCLEVBQUUsQ0FBQztnQkFDckMsQ0FBQzthQUNGO1lBZFksaUNBQXFCLHdCQWNqQyxDQUFBO1lBQ0QsMkJBQW1DLFNBQVEsV0FBVztnQkFHcEQsWUFBWSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQTBDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBcUIsRUFBRSxDQUFxQjtvQkFDbE0sTUFBTSxFQUFFLEdBQXFCLENBQUMsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFzQixFQUFFLENBQXNCLENBQUMsQ0FBQztvQkFDdEksTUFBTSxDQUFDLEdBQXFCLENBQUMsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFzQixFQUFFLENBQXNCLENBQUMsQ0FBQztvQkFDckksS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ00sYUFBYSxDQUFDLEVBQW9CLEVBQUUsQ0FBbUI7b0JBQzVELE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFDTSxlQUFlO29CQUNwQixNQUFNLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO2dCQUNyQyxDQUFDO2FBQ0Y7WUFkWSxpQ0FBcUIsd0JBY2pDLENBQUE7WUFFRCx5QkFBaUMsU0FBUSxXQUFXO2dCQUdsRCxZQUFZLElBQTBDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBMEMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFxQixFQUFFLENBQXFCO29CQUNsTSxNQUFNLEVBQUUsR0FBcUIsQ0FBQyxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQXNCLEVBQUUsQ0FBc0IsQ0FBQyxDQUFDO29CQUN0SSxNQUFNLENBQUMsR0FBcUIsQ0FBQyxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQXNCLEVBQUUsQ0FBc0IsQ0FBQyxDQUFDO29CQUNySSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkFDTSxhQUFhLENBQUMsRUFBb0IsRUFBRSxDQUFtQjtvQkFDNUQsTUFBTSxDQUFDLElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUNNLGVBQWU7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUM7Z0JBQ25DLENBQUM7YUFDRjtZQWRZLCtCQUFtQixzQkFjL0IsQ0FBQTtZQUNELHlCQUFpQyxTQUFRLFdBQVc7Z0JBR2xELFlBQVksSUFBMEMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQXFCLEVBQUUsQ0FBcUI7b0JBQ2xNLE1BQU0sRUFBRSxHQUFxQixDQUFDLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBc0IsRUFBRSxDQUFzQixDQUFDLENBQUM7b0JBQ3RJLE1BQU0sQ0FBQyxHQUFxQixDQUFDLFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBc0IsRUFBRSxDQUFzQixDQUFDLENBQUM7b0JBQ3JJLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNNLGFBQWEsQ0FBQyxFQUFvQixFQUFFLENBQW1CO29CQUM1RCxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQ00sZUFBZTtvQkFDcEIsTUFBTSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQzthQUNGO1lBZFksK0JBQW1CLHNCQWMvQixDQUFBO1lBRUQsK0JBQXVDLFNBQVEsV0FBVztnQkFHeEQsWUFBWSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQXVCLENBQUM7b0JBQ3hHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUNNLGFBQWEsQ0FBQyxDQUFtQjtvQkFDdEMsTUFBTSxDQUFDLElBQUkseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ00sZUFBZTtvQkFDcEIsTUFBTSxDQUFDLElBQUkseUJBQXlCLEVBQUUsQ0FBQztnQkFDekMsQ0FBQzthQUNGO1lBWlkscUNBQXlCLDRCQVlyQyxDQUFBO1lBQ0QsK0JBQXVDLFNBQVEsV0FBVztnQkFHeEQsWUFBWSxJQUEwQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQXVCLENBQUM7b0JBQ3hHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUNNLGFBQWEsQ0FBQyxDQUFtQjtvQkFDdEMsTUFBTSxDQUFDLElBQUkseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ00sZUFBZTtvQkFDcEIsTUFBTSxDQUFDLElBQUkseUJBQXlCLEVBQUUsQ0FBQztnQkFDekMsQ0FBQzthQUNGO1lBWlkscUNBQXlCLDRCQVlyQyxDQUFBO1lBRUQsV0FBNEIsU0FBUSxXQUFXO2dCQUM3QyxZQUFZLE9BQWtCLEVBQVMsSUFBc0IsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBUyxJQUFzQixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFTLGNBQXNCLENBQUMsRUFBUyxXQUFvQixLQUFLLEVBQVMsaUJBQTBCLElBQUk7b0JBQ3ZQLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFEc0IsTUFBQyxHQUFELENBQUMsQ0FBK0M7b0JBQVMsTUFBQyxHQUFELENBQUMsQ0FBK0M7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO2dCQUV6UCxDQUFDO2dCQUNNLFFBQVE7b0JBQ2IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDakksQ0FBQztnQkFDTSxTQUFTLENBQUMsR0FBVztvQkFDMUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNqSSxDQUFDO2dCQUNNLFdBQVcsQ0FBQyxJQUFXLEVBQUUsQ0FBUztvQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMxTyxDQUFD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
return SavageDOM;
}));
