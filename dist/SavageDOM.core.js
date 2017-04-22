/*
 * SavageDOM 1.0.0-alpha.14 (https://github.com/molisani/SavageDOM) 
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
            "px": 1,
            "in": 96,
            "cm": 254 / 96,
            "mm": 25.4 / 96,
            "pt": 3 / 4,
            "pc": 9,
            "deg": 1,
            "grad": 9 / 10,
            "rad": 180 / Math.PI,
            "turn": 360,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmNvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvYm94LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9jb2xvci1tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9kaW1lbnNpb24udHMiLCIuLi9zcmMvYXR0cmlidXRlL21hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS93cmFwcGVycy50cyIsIi4uL3NyYy9ldmVudHMudHMiLCIuLi9zcmMvcGFwZXIudHMiLCIuLi9zcmMvZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBVSxTQUFTLENBTWxCO0FBTkQsV0FBVSxTQUFTO0lBRUosZUFBSyxHQUFHLDRCQUE0QixDQUFDO0lBRXJDLGVBQUssR0FBRyw4QkFBOEIsQ0FBQztBQUV0RCxDQUFDLEVBTlMsU0FBUyxLQUFULFNBQVMsUUFNbEI7O0FDTkQsSUFBVSxTQUFTLENBd0JsQjtBQXhCRCxXQUFVLFNBQVM7SUFFakIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsS0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQWM3RSxxQkFBbUQsT0FBc0MsRUFBRSxJQUFZO1FBQ25HLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFD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LENBQUMsQ0FBQyxDQUFDO29CQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxJQUFJLENBQUMs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
return SavageDOM;

}));
