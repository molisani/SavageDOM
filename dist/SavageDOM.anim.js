/*
 * SavageDOM 1.0.0-alpha.9 (https://github.com/molisani/SavageDOM) 
 * Copyright 2017 Michael Molisani
 * Licensed under LGPL-3.0 (https://github.com/molisani/SavageDOM/blob/master/LICENSE)
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (root['SavageDOM'] = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['SavageDOM'] = factory();
  }
}(this, function () {

"use strict";
var SavageDOM;
(function (SavageDOM) {
    SavageDOM.XMLNS = "http://www.w3.org/2000/svg";
    SavageDOM.XLINK = "http://www.w3.org/1999/xlink";
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    const _lerp = (a, b, t) => a + ((b - a) * t);
    function _defaultGet(element, attr) {
        return this.parse(element.getAttribute(attr));
    }
    SavageDOM._defaultGet = _defaultGet;
    function _defaultSet(element, attr, override) {
        element.setAttribute(attr, (override === undefined) ? this : override);
    }
    SavageDOM._defaultSet = _defaultSet;
    ;
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        Attribute.isAttribute = (obj) => {
            return typeof obj["interpolate"] === "function" && typeof obj["parse"] === "function";
        };
        Attribute._LengthParse = (css) => {
            const m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
            if (m !== null) {
                return new Attribute.Dimension(parseFloat(m[1]), m[2]);
            }
            return parseFloat(css);
        };
        Attribute._LengthInterpolate = (a, b, t) => {
            if (typeof a !== "number") {
                if (typeof b !== "number") {
                    return b.interpolate(a, t);
                }
                else {
                    return a.interpolate(new Attribute.Dimension(b, a.unit), 1 - t);
                }
            }
            else {
                if (typeof b !== "number") {
                    return b.interpolate(new Attribute.Dimension(a, b.unit), t);
                }
                else {
                    return Attribute._lerp(a, b, t);
                }
            }
        };
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
                return new Box(Attribute._LengthInterpolate(from.x, this.x, t), Attribute._LengthInterpolate(from.y, this.y, t), Attribute._LengthInterpolate(from.width, this.width, t), Attribute._LengthInterpolate(from.height, this.height, t));
            }
        }
        Attribute.Box = Box;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        Attribute._lerp = (a, b, t) => a + ((b - a) * t);
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
                        return new RGB(Attribute._lerp(from.r, this.r, t), Attribute._lerp(from.g, this.g, t), Attribute._lerp(from.b, this.b, t), Attribute._lerp(from.a, this.a, t));
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
                        return new HSL(Attribute._lerp(h1, h2, t) % 360, Attribute._lerp(from.s, this.s, t), Attribute._lerp(from.l, this.l, t), Attribute._lerp(from.a, this.a, t));
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
        Attribute.Color = Color;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
                    return new Raw([this.arr.map((val, i) => Attribute._lerp(from[i], val, t))]);
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
                    return new Saturate(Attribute._lerp(from.value, this.value, t));
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
                    return new HueRotate(Attribute._lerp(from.value, this.value, t));
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
        })(ColorMatrix = Attribute.ColorMatrix || (Attribute.ColorMatrix = {}));
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
                        return new Dimension(Attribute._lerp(from.value, this.value, t) * toPx * fromPx, this.unit);
                    }
                }
                return new Dimension(Attribute._lerp(from.value, this.value, t), this.unit);
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
        Attribute.Dimension = Dimension;
        class Percentage extends Dimension {
            constructor(value) {
                super(value, "%");
            }
        }
        Attribute.Percentage = Percentage;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
                return new Matrix([this.arr.map((val, i) => Attribute._lerp(from[i], val, t))]);
            }
        }
        Attribute.Matrix = Matrix;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
                    return new NumberOptionalNumber(Attribute._lerp(from.n, this.n, t), Attribute._lerp(from.o, this.o, t));
                }
                else if (from.o === undefined && this.o !== undefined) {
                    return new NumberOptionalNumber(Attribute._lerp(from.n, this.n, t), Attribute._lerp(0, this.o, t));
                }
                else if (from.o !== undefined && this.o === undefined) {
                    return new NumberOptionalNumber(Attribute._lerp(from.n, this.n, t), Attribute._lerp(from.o, 0, t));
                }
                else {
                    return new NumberOptionalNumber(Attribute._lerp(from.n, this.n, t));
                }
            }
        }
        Attribute.NumberOptionalNumber = NumberOptionalNumber;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
                    return new Point(Attribute._LengthParse(toks[0]), Attribute._LengthParse(toks[1]));
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
                        return new Point(Attribute._LengthParse(cssX), Attribute._LengthParse(cssY));
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
                return new Point(Attribute._LengthInterpolate(from.x, this.x, t), Attribute._LengthInterpolate(from.y, this.y, t));
            }
        }
        Attribute.Point = Point;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
        Attribute.PreserveAspectRatio = PreserveAspectRatio;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
        Attribute.Transform = Transform;
        (function (Transform) {
            class Matrix extends Transform {
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
                    return new Matrix(Attribute._lerp(from.a, this.a, t), Attribute._lerp(from.b, this.b, t), Attribute._lerp(from.c, this.c, t), Attribute._lerp(from.d, this.d, t), Attribute._lerp(from.e, this.e, t), Attribute._lerp(from.f, this.f, t));
                }
            }
            Transform.Matrix = Matrix;
            class Translate extends Transform {
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
                    return new Translate(Attribute._lerp(from.x, this.x, t), Attribute._lerp(from.y, this.y, t));
                }
            }
            Transform.Translate = Translate;
            class UniformScale extends Transform {
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
                    return new UniformScale(Attribute._lerp(from.s, this.s, t));
                }
            }
            Transform.UniformScale = UniformScale;
            class Scale extends Transform {
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
                    return new Scale(Attribute._lerp(from.x, this.x, t), Attribute._lerp(from.y, this.y, t));
                }
            }
            Transform.Scale = Scale;
            class Rotate extends Transform {
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
                    return new Rotate(Attribute._lerp(from.a, this.a, t), Attribute._lerp(from.x, this.x, t), Attribute._lerp(from.y, this.y, t));
                }
            }
            Transform.Rotate = Rotate;
            class SkewX extends Transform {
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
                    return new SkewX(Attribute._lerp(from.a, this.a, t));
                }
            }
            Transform.SkewX = SkewX;
            class SkewY extends Transform {
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
                    return new SkewY(Attribute._lerp(from.a, this.a, t));
                }
            }
            Transform.SkewY = SkewY;
        })(Transform = Attribute.Transform || (Attribute.Transform = {}));
        ;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
                return new NumberWrapper(Attribute._lerp(from.n, this.n, t));
            }
        }
        Attribute.NumberWrapper = NumberWrapper;
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
        Attribute.ArrayWrapper = ArrayWrapper;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
"use strict";
var SavageDOM;
(function (SavageDOM) {
    class Paper {
        constructor(root) {
            if (root) {
                if (typeof root === "string") {
                    const el = window.document.getElementById(root);
                    if (el instanceof SVGSVGElement) {
                        this.root = el;
                    }
                    else {
                        throw new Error("Element with specified ID is not valid");
                    }
                }
                else {
                    this.root = root;
                }
            }
            else {
                this.root = window.document.createElementNS(SavageDOM.XMLNS, "svg");
                window.document.body.appendChild(this.root);
            }
            this.root.setAttribute("xmlns", SavageDOM.XMLNS);
            this.root.setAttributeNS(SavageDOM.XMLNS, "xlink", SavageDOM.XLINK);
            this.root.setAttribute("version", "1.1");
            const defsElements = this.root.getElementsByTagName("defs");
            if (defsElements.length > 0) {
                this.defs = new SavageDOM.Element(this, defsElements.item(0));
            }
            else {
                this.defs = new SavageDOM.Element(this, "defs");
            }
        }
        addDef(def) {
            this.defs.add(def);
        }
    }
    SavageDOM.Paper = Paper;
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    const randomId = () => Math.random().toString(36).substring(2);
    class Element {
        constructor(paper, el, attrs, _id = randomId()) {
            this.paper = paper;
            this._id = _id;
            if (typeof el === "string") {
                this._node = window.document.createElementNS(SavageDOM.XMLNS, el);
                if (attrs !== undefined) {
                    this.setAttributes(attrs);
                }
                this.paper.root.appendChild(this._node);
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
        }
        get id() {
            return this._id;
        }
        toString() {
            return `url(#${this._id})`;
        }
        setAttribute(name, val) {
            if (SavageDOM.Attribute.isAttribute(val)) {
                val.set(this, name);
            }
            else if (Array.isArray(val)) {
                this._node.setAttribute(name, val.join("\t"));
            }
            else {
                this._node.setAttribute(name, String(val));
            }
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
        addEventListener(event, listener) {
            this._node.addEventListener(event, listener.bind(this));
        }
        get boundingBox() {
            const rect = this._node.getBoundingClientRect();
            return new SavageDOM.Attribute.Box(rect.left, rect.top, rect.width, rect.height);
        }
        add(el) {
            this._node.appendChild(el._node);
        }
        getChildren() {
            const children = this._node.childNodes;
            const elements = [];
            for (let i = 0; i < children.length; ++i) {
                elements.push(new Element(this.paper, children.item(i)));
            }
            return elements;
        }
        clone(deep = true, id = randomId()) {
            const copy = new Element(this.paper, this._node.cloneNode(deep));
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
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Dynamic;
    (function (Dynamic) {
        class MousePosition extends SavageDOM.Attribute.Point {
            constructor(target = document) {
                super(0, 0);
                if (target instanceof SavageDOM.Paper) {
                    target = target.root;
                }
                target.addEventListener("mousemove", (e) => {
                    this.x = e.offsetX;
                    this.y = e.offsetY;
                });
            }
        }
        Dynamic.MousePosition = MousePosition;
    })(Dynamic = SavageDOM.Dynamic || (SavageDOM.Dynamic = {}));
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
                for (let s = 0; s < INITIAL_NUM_SAMPLES; ++s) {
                    samples[s] = _evaluateBezier(s / (INITIAL_NUM_SAMPLES - 1), xConstants);
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
    function isAnimation(dynamic) {
        return dynamic["from"] !== undefined && typeof dynamic["resolve"] === "function";
    }
    class AnimationRunner {
        constructor() {
            this.running = false;
            this.queue = [];
            this.hooks = [];
        }
        static getInstance() {
            return AnimationRunner._instance;
        }
        registerDynamic(element, defs, isEnabled) {
            if (isEnabled !== undefined) {
                AnimationRunner.getInstance().add({
                    element, defs, progress: (now) => isEnabled() ? now : undefined,
                });
            }
            else {
                let enabled = true;
                AnimationRunner.getInstance().add({
                    element, defs, progress: (now) => enabled ? now : undefined,
                });
                return (enable) => {
                    enabled = enable;
                };
            }
        }
        registerAnimation(element, attrs, duration, easing) {
            return new Promise(resolve => this.registerAnimationWithCallback(element, attrs, duration, easing, resolve));
        }
        add(anim) {
            this.queue.push(anim);
            if (!this.running) {
                this.start();
            }
        }
        addAnimationFrameHook(hook) {
            this.hooks.push(hook);
            if (!this.running) {
                this.start();
            }
        }
        removeAnimationFrameHook(hook) {
            this.hooks.splice(this.hooks.indexOf(hook), 1);
        }
        registerAnimationWithCallback(element, attrs, duration, easing, resolve) {
            const start = performance.now();
            const end = start + duration;
            const from = {};
            for (const prop in attrs) {
                from[prop] = attrs[prop].get(element, prop);
            }
            const defs = {};
            const anim = {
                element, attrs, resolve, from, defs,
                progress: (now) => (now > start && now <= end) ? easing((now - start) / duration) : undefined,
            };
            AnimationRunner.getInstance().add(anim);
        }
        loop() {
            const now = performance.now();
            for (let i = this.queue.length - 1; i >= 0; --i) {
                const dyn = this.queue[i];
                const t = dyn.progress(now);
                if (isAnimation(dyn)) {
                    if (t !== undefined) {
                        for (const prop in dyn.attrs) {
                            const attr = dyn.attrs[prop];
                            const mid = attr.interpolate(dyn.from[prop], t);
                            attr.set(dyn.element, prop, mid);
                        }
                    }
                    else {
                        this.queue.splice(i, 1);
                        for (const prop in dyn.attrs) {
                            dyn.attrs[prop].set(dyn.element, prop);
                        }
                        dyn.resolve(now);
                    }
                }
                else {
                    if (t === undefined) {
                        this.queue.splice(i, 1);
                    }
                    for (const prop in dyn.defs) {
                        dyn.defs[prop].set(dyn.element, prop);
                    }
                }
            }
            this.hooks.forEach(hook => hook(now));
            if (this.queue.length === 0 && this.hooks.length === 0) {
                this.stop();
            }
            else if (this.running) {
                AnimationRunner.requestAnimationFrame(() => {
                    this.loop();
                });
            }
        }
        stop() {
            this.running = false;
        }
        start() {
            this.running = true;
            AnimationRunner.requestAnimationFrame(() => {
                this.loop();
            });
        }
    }
    AnimationRunner._instance = new AnimationRunner();
    AnimationRunner.requestAnimationFrame = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window["mozRequestAnimationFrame"] || window["oRequestAnimationFrame"] || window["msRequestAnimationFrame"] || function (callback) { this.setTimeout(callback, 16); }).bind(window);
    SavageDOM.AnimationRunner = AnimationRunner;
    SavageDOM.Element.prototype.dynamic = function (defs) {
        AnimationRunner.getInstance().registerDynamic(this, defs);
    };
    function _ensureAttribute(a) {
        if (SavageDOM.Attribute.isAttribute(a)) {
            return a;
        }
        else if (Array.isArray(a)) {
            return new SavageDOM.Attribute.ArrayWrapper(a.map(_ensureAttribute).filter(b => b !== undefined));
        }
        else if (typeof a === "number") {
            return new SavageDOM.Attribute.NumberWrapper(a);
        }
    }
    SavageDOM.Element.prototype.animate = function (attrs, duration, easing = Animation.Easing.linear) {
        const defs = {};
        for (const prop in attrs) {
            const a = attrs[prop];
            if (a !== undefined) {
                const attr = _ensureAttribute(a);
                if (attr !== undefined) {
                    defs[prop] = attr;
                }
            }
        }
        return AnimationRunner.getInstance().registerAnimation(this, defs, duration, easing);
    };
})(SavageDOM || (SavageDOM = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmFuaW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvYm94LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9jb2xvci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3ItbWF0cml4LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9kaW1lbnNpb24udHMiLCIuLi9zcmMvYXR0cmlidXRlL21hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS93cmFwcGVycy50cyIsIi4uL3NyYy9ldmVudHMudHMiLCIuLi9zcmMvcGFwZXIudHMiLCIuLi9zcmMvZWxlbWVudC50cyIsIi4uL3NyYy9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVUsU0FBUyxDQU1sQjtBQU5ELFdBQVUsU0FBUztJQUVKLGVBQUssR0FBRyw0QkFBNEIsQ0FBQztJQUVyQyxlQUFLLEdBQUcsOEJBQThCLENBQUM7QUFFdEQsQ0FBQyxFQU5TLFNBQVMsS0FBVCxTQUFTLFFBTWxCOztBQ05ELElBQVUsU0FBUyxDQXdCbEI7QUF4QkQsV0FBVSxTQUFTO0lBRWpCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEtBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFjN0UscUJBQW1ELE9BQXNDLEVBQUUsSUFBWTtRQUNuRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENB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QUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFDRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQzNCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNULENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFH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
return SavageDOM;

}));
