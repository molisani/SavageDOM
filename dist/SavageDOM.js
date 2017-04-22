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
                    "a": 1 - 3 * p2 + 3 * p1,
                    "b": 3 * p2 - 6 * p1,
                    "c": 3 * p1,
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
                    element, defs, "progress": (now) => isEnabled() ? now : undefined,
                });
            }
            else {
                let enabled = true;
                AnimationRunner.getInstance().add({
                    element, defs, "progress": (now) => enabled ? now : undefined,
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
                "progress": (now) => (now > start && now <= end) ? easing((now - start) / duration) : undefined,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyIsIi4uL3NyYy9hdHRyaWJ1dGUudHMiLCIuLi9zcmMvYXR0cmlidXRlL2JveC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3ItbWF0cml4LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9jb2xvci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvZGltZW5zaW9uLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL251bWJlci1vcHRpb25hbC1udW1iZXIudHMiLCIuLi9zcmMvYXR0cmlidXRlL3BvaW50LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9wcmVzZXJ2ZS1hc3BlY3QtcmF0aW8udHMiLCIuLi9zcmMvYXR0cmlidXRlL3RyYW5zZm9ybS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvd3JhcHBlcnMudHMiLCIuLi9zcmMvZXZlbnRzLnRzIiwiLi4vc3JjL3BhcGVyLnRzIiwiLi4vc3JjL2VsZW1lbnQudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL2NsaXAtcGF0aC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9tYXJrZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvbWFzay50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50LnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9ncmFkaWVudC9saW5lYXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50L3JhZGlhbC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvcGF0dGVybi50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvZm9yZWlnbi1vYmplY3QudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9ncm91cC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL2ltYWdlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9jaXJjbGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9lbGxpcHNlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvbGluZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3BhdGgudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9wb2x5Z29uLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcG9seWxpbmUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9yZWN0LnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvdGV4dC50cyIsIi4uL3NyYy9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVUsU0FBUyxDQU1sQjtBQU5ELFdBQVUsU0FBUztJQUVKLGVBQUssR0FBRyw0QkFBNEIsQ0FBQztJQUVyQyxlQUFLLEdBQUcsOEJBQThCLENBQUM7QUFFdEQsQ0FBQyxFQU5TLFNBQVMsS0FBVCxTQUFTLFFBTWxCOztBQ05ELElBQVUsU0FBUyxDQXdCbEI7QUF4QkQsV0FBVSxTQUFTO0lBRWpCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEtBQWEsQ0FBQyxH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QyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFD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