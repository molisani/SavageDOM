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
            class SinglePoint extends PathSegment {
                constructor(p = new Attribute.Point(0, 0)) {
                    super();
                    this.p = p;
                }
                toString() {
                    return `${this.type} ${this.p.toString()}`;
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
                constructor(p1 = new Attribute.Point(0, 0), p2 = new Attribute.Point(0, 0)) {
                    super();
                    this.p1 = p1;
                    this.p2 = p2;
                }
                toString() {
                    return `${this.type} ${this.p1.toString()} ${this.p2.toString()}`;
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
                constructor(p1 = new Attribute.Point(0, 0), p2 = new Attribute.Point(0, 0), p3 = new Attribute.Point(0, 0)) {
                    super();
                    this.p1 = p1;
                    this.p2 = p2;
                    this.p3 = p3;
                }
                toString() {
                    return `${this.type} ${this.p1.toString()} ${this.p2.toString()} ${this.p3.toString()}`;
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
                constructor() {
                    super(...arguments);
                    this.type = "M";
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
                constructor() {
                    super(...arguments);
                    this.type = "m";
                }
                buildInstance(p) {
                    return new MoveToRel(p);
                }
                defaultInstance() {
                    return new MoveToRel();
                }
            }
            PathSegment.MoveToRel = MoveToRel;
            class LineToAbs extends SinglePoint {
                constructor() {
                    super(...arguments);
                    this.type = "L";
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
                constructor() {
                    super(...arguments);
                    this.type = "l";
                }
                buildInstance(p) {
                    return new LineToRel(p);
                }
                defaultInstance() {
                    return new LineToRel();
                }
            }
            PathSegment.LineToRel = LineToRel;
            class CurveToQuadraticAbs extends DoublePoint {
                constructor() {
                    super(...arguments);
                    this.type = "Q";
                }
                buildInstance(p1, p2) {
                    return new CurveToQuadraticAbs(p1, p2);
                }
                defaultInstance() {
                    return new CurveToQuadraticAbs();
                }
            }
            PathSegment.CurveToQuadraticAbs = CurveToQuadraticAbs;
            class CurveToQuadraticRel extends DoublePoint {
                constructor() {
                    super(...arguments);
                    this.type = "q";
                }
                buildInstance(p1, p2) {
                    return new CurveToQuadraticRel(p1, p2);
                }
                defaultInstance() {
                    return new CurveToQuadraticRel();
                }
            }
            PathSegment.CurveToQuadraticRel = CurveToQuadraticRel;
            class CurveToQuadraticSmoothAbs extends SinglePoint {
                constructor() {
                    super(...arguments);
                    this.type = "T";
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
                constructor() {
                    super(...arguments);
                    this.type = "t";
                }
                buildInstance(p) {
                    return new CurveToQuadraticSmoothRel(p);
                }
                defaultInstance() {
                    return new CurveToQuadraticSmoothRel();
                }
            }
            PathSegment.CurveToQuadraticSmoothRel = CurveToQuadraticSmoothRel;
            class CurveToCubicAbs extends TriplePoint {
                constructor() {
                    super(...arguments);
                    this.type = "C";
                }
                buildInstance(p1, p2, p3) {
                    return new CurveToCubicAbs(p1, p2, p3);
                }
                defaultInstance() {
                    return new CurveToCubicAbs();
                }
            }
            PathSegment.CurveToCubicAbs = CurveToCubicAbs;
            class CurveToCubicRel extends TriplePoint {
                constructor() {
                    super(...arguments);
                    this.type = "c";
                }
                buildInstance(p1, p2, p3) {
                    return new CurveToCubicRel(p1, p2, p3);
                }
                defaultInstance() {
                    return new CurveToCubicRel();
                }
            }
            PathSegment.CurveToCubicRel = CurveToCubicRel;
            class CurveToCubicSmoothAbs extends DoublePoint {
                constructor() {
                    super(...arguments);
                    this.type = "S";
                }
                buildInstance(p1, p2) {
                    return new CurveToCubicSmoothAbs(p1, p2);
                }
                defaultInstance() {
                    return new CurveToCubicSmoothAbs();
                }
            }
            PathSegment.CurveToCubicSmoothAbs = CurveToCubicSmoothAbs;
            class CurveToCubicSmoothRel extends DoublePoint {
                constructor() {
                    super(...arguments);
                    this.type = "s";
                }
                buildInstance(p1, p2) {
                    return new CurveToCubicSmoothRel(p1, p2);
                }
                defaultInstance() {
                    return new CurveToCubicSmoothRel();
                }
            }
            PathSegment.CurveToCubicSmoothRel = CurveToCubicSmoothRel;
            class ArcTo extends PathSegment {
                constructor(r = new Attribute.Point(0, 0), p = new Attribute.Point(0, 0), xAxisRotate = 0, largeArc = false, sweepClockwise = true) {
                    super();
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
                constructor() {
                    super(...arguments);
                    this.type = "A";
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
                constructor() {
                    super(...arguments);
                    this.type = "a";
                }
                buildInstance(r, p, xAxisRotate, largeArc, sweepClockwise) {
                    return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
                }
                defaultInstance() {
                    return new ArcToRel();
                }
            }
            PathSegment.ArcToRel = ArcToRel;
            class ClosePath extends PathSegment {
                constructor() {
                    super(...arguments);
                    this.type = "Z";
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
                            super(paper, "stop", { offset: new SavageDOM.Attribute.Dimension(offset * 100, "%"), "stop-color": color });
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
                    in: input1,
                    in2: input2,
                    mode,
                });
            }
            colorMatrix(matrix, input) {
                return new Elements.FilterPrimitive.ColorMatrix(this, {
                    in: input,
                    type: matrix.type,
                    values: matrix,
                });
            }
            componentTransfer(r, g, b, a, input) {
                const componentTransfer = new Elements.FilterPrimitive.ComponentTransfer(this, {
                    in: input,
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
                return new Elements.FilterPrimitive.ConvolveMatrix(this, merge(attrs, { in: input }));
            }
            diffuseLighting(attrs, lights = [], input) {
                const fe = new Elements.FilterPrimitive.DiffuseLighting(this, merge(attrs, { in: input }));
                this.addLights(fe, lights);
                return fe;
            }
            displacementMap(attrs, input1, input2) {
                return new Elements.FilterPrimitive.DisplacementMap(this, merge(attrs, { in: input1, in2: input2 }));
            }
            flood(color, area) {
                const fe = new Elements.FilterPrimitive.Flood(this, { "flood-color": color });
                fe.setAttributes({
                    x: area.x,
                    y: area.y,
                    width: area.width,
                    height: area.height,
                });
                return fe;
            }
            gaussianBlur(stdDeviation = 0, edgeMode = "duplicate", input) {
                return new Elements.FilterPrimitive.GaussianBlur(this, {
                    in: input,
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
                    const mergeNode = new SavageDOM.Element(this.paper, "feMergeNode", { in: input });
                    fe.add(mergeNode);
                });
                return fe;
            }
            morphology(operator, radius, input) {
                return new Elements.FilterPrimitive.Morphology(this, {
                    in: input,
                    operator,
                    radius,
                });
            }
            offset(d, input) {
                return new Elements.FilterPrimitive.Offset(this, {
                    in: input,
                    dx: d.x,
                    dy: d.y,
                });
            }
            specularLighting(attrs, lights = [], input) {
                const fe = new Elements.FilterPrimitive.SpecularLighting(this, attrs);
                this.addLights(fe, lights);
                return fe;
            }
            tile(area, input) {
                const fe = new Elements.FilterPrimitive.Tile(this, { in: input });
                fe.setAttributes({
                    x: area.x,
                    y: area.y,
                    width: area.width,
                    height: area.height,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyIsIi4uL3NyYy9hdHRyaWJ1dGUudHMiLCIuLi9zcmMvYXR0cmlidXRlL2JveC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3IudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLW1hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvZGltZW5zaW9uLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL251bWJlci1vcHRpb25hbC1udW1iZXIudHMiLCIuLi9zcmMvYXR0cmlidXRlL3BvaW50LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW8udHMiLCIuLi9zcmMvYXR0cmlidXRlL3RyYW5zZm9ybS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvd3JhcHBlcnMudHMiLCIuLi9zcmMvZXZlbnRzLnRzIiwiLi4vc3JjL3BhcGVyLnRzIiwiLi4vc3JjL2VsZW1lbnQudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvY2lyY2xlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvZWxsaXBzZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL2xpbmUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9wYXRoLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcG9seWdvbi50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3BvbHlsaW5lLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcmVjdC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL2dyb3VwLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvaW1hZ2UudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS90ZXh0LnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL2NsaXAtcGF0aC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50LnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9ncmFkaWVudC9saW5lYXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50L3JhZGlhbC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvcGF0dGVybi50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9tYXJrZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvbWFzay50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXIudHMiLCIuLi9zcmMvYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFVLFNBQVMsQ0FNbEI7QUFORCxXQUFVLFNBQVM7SUFFSixlQUFLLEdBQUcsNEJBQTRCLENBQUM7SUFFckMsZUFBSyxHQUFHLDhCQUE4QixDQUFDO0FBRXRELENBQUMsRUFOUyxTQUFTLEtBQVQsU0FBUyxRQU1sQjs7QUNORCxJQUFVLFNBQVMsQ0F3QmxCO0FBeEJELFdBQVUsU0FBUztJQUVqQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxLQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FB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QUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxJQUFJLENB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