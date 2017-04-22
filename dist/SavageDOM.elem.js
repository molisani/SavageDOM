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
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var FilterPrimitive;
        (function (FilterPrimitive) {
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            var LightSource;
            (function (LightSource) {
                ;
                ;
                ;
            })(LightSource = FilterPrimitive.LightSource || (FilterPrimitive.LightSource = {}));
        })(FilterPrimitive = Attribute.FilterPrimitive || (Attribute.FilterPrimitive = {}));
        ;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        class FilterPrimitive extends SavageDOM.Element {
            constructor(filter, name, attrs) {
                super(filter.paper, name, attrs);
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
        (function (FilterPrimitive) {
            class Blend extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feBlend", attrs);
                }
            }
            FilterPrimitive.Blend = Blend;
            ;
            class ColorMatrix extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feColorMatrix", attrs);
                }
            }
            FilterPrimitive.ColorMatrix = ColorMatrix;
            ;
            class ComponentTransfer extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feComponentTransfer", attrs);
                }
            }
            FilterPrimitive.ComponentTransfer = ComponentTransfer;
            ;
            class Composite extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feComposite", attrs);
                }
            }
            FilterPrimitive.Composite = Composite;
            ;
            class ConvolveMatrix extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feConvolveMatrix", attrs);
                }
            }
            FilterPrimitive.ConvolveMatrix = ConvolveMatrix;
            ;
            class DiffuseLighting extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feDiffuseLighting", attrs);
                }
            }
            FilterPrimitive.DiffuseLighting = DiffuseLighting;
            ;
            class DisplacementMap extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feDisplacementMap", attrs);
                }
            }
            FilterPrimitive.DisplacementMap = DisplacementMap;
            ;
            class Flood extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feFlood", attrs);
                }
            }
            FilterPrimitive.Flood = Flood;
            ;
            class GaussianBlur extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feGaussianBlur", attrs);
                }
            }
            FilterPrimitive.GaussianBlur = GaussianBlur;
            ;
            class Image extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feImage", attrs);
                }
            }
            FilterPrimitive.Image = Image;
            ;
            class Merge extends FilterPrimitive {
                constructor(filter) {
                    super(filter, "feMerge");
                }
            }
            FilterPrimitive.Merge = Merge;
            ;
            class MergeNode extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feMergeNode", attrs);
                }
            }
            FilterPrimitive.MergeNode = MergeNode;
            ;
            class Morphology extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feMorphology", attrs);
                }
            }
            FilterPrimitive.Morphology = Morphology;
            ;
            class Offset extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feOffset", attrs);
                }
            }
            FilterPrimitive.Offset = Offset;
            ;
            class SpecularLighting extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feSpecularLighting", attrs);
                }
            }
            FilterPrimitive.SpecularLighting = SpecularLighting;
            ;
            class Tile extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feTile", attrs);
                }
            }
            FilterPrimitive.Tile = Tile;
            ;
            class Turbulence extends FilterPrimitive {
                constructor(filter, attrs) {
                    super(filter, "feTurbulence", attrs);
                }
            }
            FilterPrimitive.Turbulence = Turbulence;
            ;
            class TransferFunction extends FilterPrimitive {
                constructor(filter, channel, attrs) {
                    super(filter, `feFunc${channel}`, attrs);
                }
            }
            FilterPrimitive.TransferFunction = TransferFunction;
            ;
            var LightSource;
            (function (LightSource) {
                class DistantLight extends FilterPrimitive {
                    constructor(filter, attrs) {
                        super(filter, "feDistantLight", attrs);
                    }
                }
                LightSource.DistantLight = DistantLight;
                ;
                class PointLight extends FilterPrimitive {
                    constructor(filter, attrs) {
                        super(filter, "fePointLight", attrs);
                    }
                }
                LightSource.PointLight = PointLight;
                ;
                class SpotLight extends FilterPrimitive {
                    constructor(filter, attrs) {
                        super(filter, "feSpotLight", attrs);
                    }
                }
                LightSource.SpotLight = SpotLight;
                ;
            })(LightSource = FilterPrimitive.LightSource || (FilterPrimitive.LightSource = {}));
        })(FilterPrimitive = Elements.FilterPrimitive || (Elements.FilterPrimitive = {}));
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
            constructor(paper) {
                super(paper, "filter");
                this.paper = paper;
                this.paper.defs.add(this);
            }
            blend(mode, input1, input2) {
                return new Elements.FilterPrimitive.Blend(this, {
                    "in": input1,
                    "in2": input2,
                    mode,
                });
            }
            colorMatrix(matrix, input) {
                return new Elements.FilterPrimitive.ColorMatrix(this, {
                    "in": input,
                    "type": matrix.type,
                    "values": matrix,
                });
            }
            componentTransfer(r, g, b, a, input) {
                const componentTransfer = new Elements.FilterPrimitive.ComponentTransfer(this, {
                    "in": input,
                });
                componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "R", r));
                componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "G", g));
                componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "B", b));
                if (a !== undefined) {
                    componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "A", a));
                }
                return componentTransfer;
            }
            composite(operator, k1, k2, k3, k4, input1, input2) {
                return new Elements.FilterPrimitive.Composite(this, {
                    "in": input1,
                    "in2": input2,
                    operator,
                    k1,
                    k2,
                    k3,
                    k4,
                });
            }
            convolveMatrix(attrs, input) {
                return new Elements.FilterPrimitive.ConvolveMatrix(this, merge(attrs, { "in": input }));
            }
            diffuseLighting(attrs, lights = [], input) {
                const fe = new Elements.FilterPrimitive.DiffuseLighting(this, merge(attrs, { "in": input }));
                this.addLights(fe, lights);
                return fe;
            }
            displacementMap(attrs, input1, input2) {
                return new Elements.FilterPrimitive.DisplacementMap(this, merge(attrs, { "in": input1, "in2": input2 }));
            }
            flood(color, area) {
                const fe = new Elements.FilterPrimitive.Flood(this, { "flood-color": color });
                fe.setAttributes({
                    "x": area.x,
                    "y": area.y,
                    "width": area.width,
                    "height": area.height,
                });
                return fe;
            }
            gaussianBlur(stdDeviation = 0, edgeMode = "duplicate", input) {
                return new Elements.FilterPrimitive.GaussianBlur(this, {
                    "in": input,
                    stdDeviation,
                    edgeMode,
                });
            }
            image(href, preserveAspectRatio) {
                return new Elements.FilterPrimitive.Image(this, {
                    "xlink:href": href,
                    preserveAspectRatio,
                });
            }
            merge(inputs) {
                const fe = new Elements.FilterPrimitive.Merge(this);
                inputs.forEach(input => {
                    const mergeNode = new SavageDOM.Element(this.paper, "feMergeNode", { "in": input });
                    fe.add(mergeNode);
                });
                return fe;
            }
            morphology(operator, radius, input) {
                return new Elements.FilterPrimitive.Morphology(this, {
                    "in": input,
                    operator,
                    radius,
                });
            }
            offset(d, input) {
                return new Elements.FilterPrimitive.Offset(this, {
                    "in": input,
                    "dx": d.x,
                    "dy": d.y,
                });
            }
            specularLighting(attrs, lights = [], input) {
                const fe = new Elements.FilterPrimitive.SpecularLighting(this, attrs);
                this.addLights(fe, lights);
                return fe;
            }
            tile(area, input) {
                const fe = new Elements.FilterPrimitive.Tile(this, { "in": input });
                fe.setAttributes({
                    "x": area.x,
                    "y": area.y,
                    "width": area.width,
                    "height": area.height,
                });
                return fe;
            }
            turbulence(attrs) {
                return new Elements.FilterPrimitive.Turbulence(this, attrs);
            }
            addLights(lighting, lights) {
                lights.forEach(light => {
                    switch (light.type) {
                        case "point":
                            lighting.add(new Elements.FilterPrimitive.LightSource.PointLight(this, light));
                            break;
                        case "distant":
                            lighting.add(new Elements.FilterPrimitive.LightSource.DistantLight(this, light));
                            break;
                        case "spot":
                            lighting.add(new Elements.FilterPrimitive.LightSource.SpotLight(this, light));
                            break;
                    }
                });
            }
        }
        Elements.Filter = Filter;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.filter = function () {
        return new SavageDOM.Elements.Filter(this);
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        ;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        class AbstractNonRenderable extends SavageDOM.Element {
        }
        Elements.AbstractNonRenderable = AbstractNonRenderable;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            class ClipPath extends Elements.AbstractNonRenderable {
                constructor(paper, w, h, x, y, units, contentUnits) {
                    super(paper, "clipPath");
                    this.paper = paper;
                    this.paper.addDef(this);
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
            NonRenderable.ClipPath = ClipPath;
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.clipPath = function (w, h, x, y, units, contentUnits) {
        return new SavageDOM.Elements.NonRenderable.ClipPath(this, w, h, x, y, units, contentUnits);
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            class Marker extends Elements.AbstractNonRenderable {
                constructor(paper, attrs) {
                    super(paper, "marker", attrs);
                }
            }
            NonRenderable.Marker = Marker;
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.marker = function () {
        return new SavageDOM.Elements.NonRenderable.Marker(this, {});
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            class Mask extends Elements.AbstractNonRenderable {
                constructor(paper, w, h, x, y, units, contentUnits) {
                    super(paper, "mask");
                    this.paper = paper;
                    this.paper.addDef(this);
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
            NonRenderable.Mask = Mask;
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.mask = function (w, h, x, y, units, contentUnits) {
        return new SavageDOM.Elements.NonRenderable.Mask(this, w, h, x, y, units, contentUnits);
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            class AbstractPaintServer extends Elements.AbstractNonRenderable {
            }
            NonRenderable.AbstractPaintServer = AbstractPaintServer;
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var PaintServer;
            (function (PaintServer) {
                class AbstractGradient extends NonRenderable.AbstractPaintServer {
                    constructor(paper, name, stops, attrs) {
                        super(paper, name, attrs);
                        this.paper.addDef(this);
                        const stopArr = [];
                        Object.keys(stops).forEach(offset => {
                            stopArr.push(new SavageDOM.Elements.NonRenderable.PaintServer.Gradient.Stop(paper, Number(offset), stops[offset]));
                        });
                        stopArr.sort((a, b) => {
                            return a.offset - b.offset;
                        });
                        stopArr.forEach(s => this.add(s));
                    }
                }
                PaintServer.AbstractGradient = AbstractGradient;
                var Gradient;
                (function (Gradient) {
                    class Stop extends SavageDOM.Element {
                        constructor(paper, offset, color) {
                            super(paper, "stop", { "offset": new SavageDOM.Attribute.Dimension(offset * 100, "%"), "stop-color": color });
                            this.offset = offset;
                        }
                    }
                    Gradient.Stop = Stop;
                })(Gradient = PaintServer.Gradient || (PaintServer.Gradient = {}));
            })(PaintServer = NonRenderable.PaintServer || (NonRenderable.PaintServer = {}));
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var PaintServer;
            (function (PaintServer) {
                var Gradient;
                (function (Gradient) {
                    class Linear extends PaintServer.AbstractGradient {
                        constructor(paper, stops, attrs) {
                            super(paper, "linearGradient", stops, attrs);
                        }
                    }
                    Gradient.Linear = Linear;
                })(Gradient = PaintServer.Gradient || (PaintServer.Gradient = {}));
            })(PaintServer = NonRenderable.PaintServer || (NonRenderable.PaintServer = {}));
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.linearGradient = function (stops, attrs) {
        return new SavageDOM.Elements.NonRenderable.PaintServer.Gradient.Linear(this, stops, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var PaintServer;
            (function (PaintServer) {
                var Gradient;
                (function (Gradient) {
                    class Radial extends PaintServer.AbstractGradient {
                        constructor(paper, stops, attrs) {
                            super(paper, "radialGradient", stops, attrs);
                        }
                    }
                    Gradient.Radial = Radial;
                })(Gradient = PaintServer.Gradient || (PaintServer.Gradient = {}));
            })(PaintServer = NonRenderable.PaintServer || (NonRenderable.PaintServer = {}));
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.radialGradient = function (stops, attrs) {
        return new SavageDOM.Elements.NonRenderable.PaintServer.Gradient.Radial(this, stops, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var PaintServer;
            (function (PaintServer) {
                class Pattern extends NonRenderable.AbstractPaintServer {
                    constructor(paper, w, h = (w instanceof SVGPatternElement) ? 0 : w, x = 0, y = 0, view) {
                        super(paper, (w instanceof SVGPatternElement) ? w : "pattern");
                        this.paper = paper;
                        this.paper.addDef(this);
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
                        return new Pattern(this.paper, super.cloneNode(deep));
                    }
                }
                PaintServer.Pattern = Pattern;
            })(PaintServer = NonRenderable.PaintServer || (NonRenderable.PaintServer = {}));
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.pattern = function (w, h, x, y, view) {
        return new SavageDOM.Elements.NonRenderable.PaintServer.Pattern(this, w, h, x, y, view);
    };
    SavageDOM.Elements.Renderable.Group.prototype.toPattern = function (w, h, x, y, view) {
        const pattern = new SavageDOM.Elements.NonRenderable.PaintServer.Pattern(this.paper, w, h, x, y, view);
        this.getChildren().forEach(child => pattern.add(child));
        return pattern;
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        class AbstractRenderable extends SavageDOM.Element {
        }
        Elements.AbstractRenderable = AbstractRenderable;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            class ForeignObject extends Elements.AbstractRenderable {
                constructor(paper, attrs) {
                    super(paper, "foreignObject", attrs);
                }
                addHTML(html) {
                    this._node.appendChild(html);
                }
                remove(html) {
                    this._node.removeChild(html);
                }
            }
            Renderable.ForeignObject = ForeignObject;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.foreignObject = function (html, x = 0, y, width = new SavageDOM.Attribute.Percentage(100), height = new SavageDOM.Attribute.Percentage(100)) {
        const el = new SavageDOM.Elements.Renderable.ForeignObject(this, { x, y, width, height });
        el.addHTML(html);
        return el;
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            class Group extends Elements.AbstractRenderable {
                constructor(paper, attrs) {
                    super(paper, "g", attrs);
                }
            }
            Renderable.Group = Group;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.group = function (els) {
        const el = new SavageDOM.Elements.Renderable.Group(this);
        els.forEach(child => el.add(child));
        return el;
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            class Image extends Elements.AbstractRenderable {
                constructor(paper, attrs) {
                    super(paper, "image", attrs);
                }
            }
            Renderable.Image = Image;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.image = function (href, onload, attrs) {
        const img = new SavageDOM.Elements.Renderable.Image(this, attrs);
        if (onload !== undefined) {
            img.addEventListener("load", () => {
                onload(img);
            });
        }
        img.setAttribute("href", href);
        return img;
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            class AbstractShape extends Elements.AbstractRenderable {
            }
            Renderable.AbstractShape = AbstractShape;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                class Circle extends Renderable.AbstractShape {
                    constructor(paper, attrs) {
                        super(paper, "circle", attrs);
                    }
                }
                Shape.Circle = Circle;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.circle = function (cx, cy, r) {
        return new SavageDOM.Elements.Renderable.Shape.Circle(this, { cx, cy, r });
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                class Ellipse extends Renderable.AbstractShape {
                    constructor(paper, attrs) {
                        super(paper, "ellipse", attrs);
                    }
                }
                Shape.Ellipse = Ellipse;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.ellipse = function (cx, cy, rx, ry) {
        return new SavageDOM.Elements.Renderable.Shape.Ellipse(this, { cx, cy, rx, ry });
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                class Line extends Renderable.AbstractShape {
                    constructor(paper, attrs) {
                        super(paper, "line", attrs);
                    }
                }
                Shape.Line = Line;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.line = function (x1, y1, x2, y2) {
        return new SavageDOM.Elements.Renderable.Shape.Line(this, { x1, x2, y1, y2 });
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
        Attribute.PathSegment = PathSegment;
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
                    return this.buildInstance(Attribute._LengthParse(css));
                }
                interpolate(from, t) {
                    return this.buildInstance(Attribute._LengthInterpolate(from.l, this.l, t));
                }
            }
            PathSegment.SingleLength = SingleLength;
            class SinglePoint extends PathSegment {
                constructor(command, p = new Attribute.Point(0, 0)) {
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
                constructor(command, p1 = new Attribute.Point(0, 0), p2 = new Attribute.Point(0, 0)) {
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
                constructor(command, p1 = new Attribute.Point(0, 0), p2 = new Attribute.Point(0, 0), p3 = new Attribute.Point(0, 0)) {
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
                constructor(p = new Attribute.Point(0, 0), y = 0) {
                    super("M", p instanceof Attribute.Point ? p : new Attribute.Point(p, y));
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
                constructor(p = new Attribute.Point(0, 0), y = 0) {
                    super("m", p instanceof Attribute.Point ? p : new Attribute.Point(p, y));
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
                constructor(p = new Attribute.Point(0, 0), y = 0) {
                    super("L", p instanceof Attribute.Point ? p : new Attribute.Point(p, y));
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
                constructor(p = new Attribute.Point(0, 0), y = 0) {
                    super("l", p instanceof Attribute.Point ? p : new Attribute.Point(p, y));
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
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c = new Attribute.Point(0, 0), d, e, f) {
                    const c1 = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const c2 = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
                    const p = c instanceof Attribute.Point ? c : new Attribute.Point(e, f);
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
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c = new Attribute.Point(0, 0), d, e, f) {
                    const c1 = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const c2 = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
                    const p = c instanceof Attribute.Point ? c : new Attribute.Point(e, f);
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
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c, d) {
                    const c2 = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const p = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
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
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c, d) {
                    const c2 = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const p = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
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
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c, d) {
                    const c1 = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const p = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
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
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c, d) {
                    const c1 = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const p = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
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
                constructor(p = new Attribute.Point(0, 0), y = 0) {
                    super("T", p instanceof Attribute.Point ? p : new Attribute.Point(p, y));
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
                constructor(p = new Attribute.Point(0, 0), y = 0) {
                    super("t", p instanceof Attribute.Point ? p : new Attribute.Point(p, y));
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
                constructor(command, r = new Attribute.Point(0, 0), p = new Attribute.Point(0, 0), xAxisRotate = 0, largeArc = false, sweepClockwise = true) {
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
                    return this.buildInstance(this.r.interpolate(from.r, t), this.p.interpolate(from.p, t), Attribute._lerp(from.xAxisRotate, this.xAxisRotate, t), (t < 0.5) ? from.largeArc : this.largeArc, (t < 0.5) ? from.sweepClockwise : this.sweepClockwise);
                }
            }
            PathSegment.ArcTo = ArcTo;
            class ArcToAbs extends ArcTo {
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c, d, e, f, g) {
                    const r = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const p = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
                    let xAxisRotate = 0;
                    let largeArc = false;
                    let sweepClockwise = true;
                    if (a instanceof Attribute.Point && b instanceof Attribute.Point) {
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
                constructor(a = new Attribute.Point(0, 0), b = new Attribute.Point(0, 0), c, d, e, f, g) {
                    const r = a instanceof Attribute.Point ? a : new Attribute.Point(a, b);
                    const p = b instanceof Attribute.Point ? b : new Attribute.Point(c, d);
                    let xAxisRotate = 0;
                    let largeArc = false;
                    let sweepClockwise = true;
                    if (a instanceof Attribute.Point && b instanceof Attribute.Point) {
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
        })(PathSegment = Attribute.PathSegment || (Attribute.PathSegment = {}));
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                class Path extends Renderable.AbstractShape {
                    constructor(paper, attrs) {
                        super(paper, "path", attrs);
                    }
                }
                Shape.Path = Path;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.path = function (d, pathLength) {
        return new SavageDOM.Elements.Renderable.Shape.Path(this, { d, pathLength });
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                class Polygon extends Renderable.AbstractShape {
                    constructor(paper, attrs) {
                        super(paper, "polygon", attrs);
                    }
                }
                Shape.Polygon = Polygon;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.polygon = function (points) {
        return new SavageDOM.Elements.Renderable.Shape.Polygon(this, { points });
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                class Polyline extends Renderable.AbstractShape {
                    constructor(paper, attrs) {
                        super(paper, "polyline", attrs);
                    }
                }
                Shape.Polyline = Polyline;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.polyline = function (points) {
        return new SavageDOM.Elements.Renderable.Shape.Polyline(this, { points });
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                class Rect extends Renderable.AbstractShape {
                    constructor(paper, attrs) {
                        super(paper, "rect", attrs);
                    }
                }
                Shape.Rect = Rect;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.rect = function (x, y, width, height, rx, ry) {
        return new SavageDOM.Elements.Renderable.Shape.Rect(this, { x, y, width, height, rx, ry });
    };
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
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
        Attribute.TextContent = TextContent;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            class TextSpan extends Elements.AbstractRenderable {
                constructor(paper, attrs) {
                    super(paper, "tspan", attrs);
                }
                get computedLength() {
                    return this._node.getComputedTextLength();
                }
            }
            Renderable.TextSpan = TextSpan;
            class Text extends Elements.AbstractRenderable {
                constructor(paper, attrs) {
                    super(paper, "text", attrs);
                }
                addSpan(content, lineHeight, update = true) {
                    const span = new TextSpan(this.paper);
                    span.setAttribute("textContent", content);
                    if (lineHeight) {
                        span.setAttribute("x", parseFloat(this.getAttribute("x") || "0"));
                        if (typeof lineHeight === "number") {
                            span.setAttribute("dy", new SavageDOM.Attribute.Dimension(lineHeight, "em"));
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
            Renderable.Text = Text;
            class MultilineText extends Text {
                constructor(paper, text, width, attrs) {
                    super(paper, attrs);
                    const temp = new SavageDOM.Elements.Renderable.Text(paper);
                    temp.setAttribute("opacity", 0);
                    const span = new SavageDOM.Elements.Renderable.TextSpan(paper);
                    temp.add(span);
                    if (attrs) {
                        span.setAttributes(attrs);
                    }
                    const spaceWidth = temp.computedLength;
                    const lines = [""];
                    text.split(" ").forEach((word, i) => {
                        const line = lines[lines.length - 1];
                        const newLine = (line.length === 0) ? word : `${line} ${word}`;
                        const lineContent = new SavageDOM.Attribute.TextContent(newLine);
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
                            this.addSpan(new SavageDOM.Attribute.TextContent(line), 1);
                        }
                    });
                }
            }
            Renderable.MultilineText = MultilineText;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.text = function (content, x = 0, y = 0) {
        const t = new SavageDOM.Elements.Renderable.Text(this, { x, y });
        content.forEach(c => t.addSpan(c));
        return t;
    };
})(SavageDOM || (SavageDOM = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmVsZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvYm94LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9jb2xvci1tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9kaW1lbnNpb24udHMiLCIuLi9zcmMvYXR0cmlidXRlL21hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS93cmFwcGVycy50cyIsIi4uL3NyYy9ldmVudHMudHMiLCIuLi9zcmMvcGFwZXIudHMiLCIuLi9zcmMvZWxlbWVudC50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvY2xpcC1wYXRoLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL21hcmtlci50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9tYXNrLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvZ3JhZGllbnQudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50L2xpbmVhci50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvZ3JhZGllbnQvcmFkaWFsLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9wYXR0ZXJuLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9mb3JlaWduLW9iamVjdC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL2dyb3VwLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvaW1hZ2UudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL2NpcmNsZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL2VsbGlwc2UudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9saW5lLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcGF0aC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3BvbHlnb24udHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9wb2x5bGluZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3JlY3QudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFVLFNBQVMsQ0FNbEI7QUFORCxXQUFVLFNBQVM7SUFFSixlQUFLLEdBQUcsNEJBQTRCLENBQUM7SUFFckMsZUFBSyxHQUFHLDhCQUE4QixDQUFDO0FBRXRELENBQUMsRUFOUyxTQUFTLEtBQVQsU0FBUyxRQU1sQjs7QUNORCxJQUFVLFNBQVMsQ0F3QmxCO0FBeEJELFdBQVUsU0FBUztJQUVqQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxLQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FB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Q0FBQyxDQUFDO29CQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFH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
return SavageDOM;

}));
