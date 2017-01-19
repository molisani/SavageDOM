/*
 * SavageDOM 1.0.0-alpha.0 (https://github.com/molisani/SavageDOM) 
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

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SavageDOM;
(function (SavageDOM) {
    SavageDOM.XMLNS = "http://www.w3.org/2000/svg";
    SavageDOM.XLINK = "http://www.w3.org/1999/xlink";
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var _lerp = function (a, b, t) { return a + ((b - a) * t); };
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        Attribute.isAttribute = function (obj) {
            return typeof obj["interpolate"] === "function" && typeof obj["parse"] === "function";
        };
        ;
        Attribute._LengthParse = function (css) {
            var m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
            if (m !== null) {
                return new Attribute.Dimension(parseFloat(m[1]), m[2]);
            }
            return parseFloat(css);
        };
        Attribute._LengthInterpolate = function (a, b, t) {
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
        ;
        ;
        ;
        ;
        ;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        Attribute._lerp = function (a, b, t) { return a + ((b - a) * t); };
        var ColorImpl = (function () {
            function ColorImpl() {
            }
            return ColorImpl;
        }());
        var RGB = (function (_super) {
            __extends(RGB, _super);
            function RGB(x, y, z, a) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (z === void 0) { z = 0; }
                if (a === void 0) { a = 1; }
                var _this = _super.call(this) || this;
                _this.r = 0;
                _this.g = 0;
                _this.b = 0;
                _this.a = 1;
                if (typeof x === "string") {
                    var rgbaMatch = x.match(/^rgba\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
                    if (rgbaMatch !== null) {
                        _this.r = parseInt(rgbaMatch[1], 10);
                        _this.g = parseInt(rgbaMatch[2], 10);
                        _this.b = parseInt(rgbaMatch[3], 10);
                        _this.a = parseFloat(rgbaMatch[4]);
                    }
                    var rgbMatch = x.match(/^rgb\s*?\(\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?,\s*?(000|0?\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*?\)$/i);
                    if (rgbMatch !== null) {
                        _this.r = parseInt(rgbMatch[1], 10);
                        _this.g = parseInt(rgbMatch[2], 10);
                        _this.b = parseInt(rgbMatch[3], 10);
                    }
                }
                else {
                    _this.r = x;
                    _this.g = y;
                    _this.b = z;
                    _this.a = a;
                }
                return _this;
            }
            RGB.prototype.toString = function () {
                return "rgba(" + Math.round(this.r) + ", " + Math.round(this.g) + ", " + Math.round(this.b) + ", " + this.a + ")";
            };
            RGB.prototype.toHSL = function () {
                var r = this.r / 255;
                var g = this.g / 255;
                var b = this.b / 255;
                var max = Math.max(r, g, b);
                var min = Math.min(r, g, b);
                var avg = (max + min) / 2;
                var d = max - min;
                var h;
                var s;
                var l = avg;
                if (d === 0) {
                    h = 0;
                    s = 0;
                }
                else {
                    s = (avg > 0.5) ? (d / (2 - d)) : (d / (max + min));
                    switch (max) {
                        case r:
                            h = ((g - b) / d) + ((g < b) ? 6 : 0);
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
            };
            RGB.prototype.interpolate = function (from, t, mode) {
                var modePrefix = mode.substr(0, 3);
                if (modePrefix === "rgb") {
                    if (from instanceof HSL) {
                        from = from.toRGB();
                    }
                    if (from instanceof RGB) {
                        return new RGB(Attribute._lerp(from.r, this.r, t), Attribute._lerp(from.g, this.g, t), Attribute._lerp(from.b, this.b, t), Attribute._lerp(from.a, this.a, t));
                    }
                }
                else if (modePrefix === "hsl") {
                    if (from instanceof HSL) {
                        return from.interpolate(this, 1 - t, mode);
                    }
                    else {
                        return this.toHSL().interpolate(from, t, mode);
                    }
                }
                return this;
            };
            return RGB;
        }(ColorImpl));
        var HSL = (function (_super) {
            __extends(HSL, _super);
            function HSL(x, y, z, a) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (z === void 0) { z = 0; }
                if (a === void 0) { a = 1; }
                var _this = _super.call(this) || this;
                _this.h = 0;
                _this.s = 0;
                _this.l = 0;
                _this.a = 1;
                if (typeof x === "string") {
                    var hslaMatch = x.match(/^hsla\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0|0\.\d*|1|1.0*)\s*?\)$/i);
                    if (hslaMatch !== null) {
                        _this.h = parseFloat(hslaMatch[1]);
                        _this.s = parseFloat(hslaMatch[2]) / 100;
                        _this.l = parseFloat(hslaMatch[3]) / 100;
                        _this.a = parseFloat(hslaMatch[4]);
                    }
                    var hslMatch = x.match(/^hsl\s*?\(\s*?(000|0?\d{1,2}|[1-2]\d\d|3[0-5]\d|360)\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?,\s*?(0\.?0*|100\.?0*|\d{1,2}|\d{1,2}\.\d+)\%\s*?\)$/i);
                    if (hslMatch !== null) {
                        _this.h = parseFloat(hslMatch[1]);
                        _this.s = parseFloat(hslMatch[2]) / 100;
                        _this.l = parseFloat(hslMatch[3]) / 100;
                    }
                }
                else {
                    _this.h = x;
                    _this.s = y;
                    _this.l = z;
                    _this.a = a;
                }
                return _this;
            }
            HSL.prototype.toString = function () {
                return "hsla(" + this.h % 360 + ", " + this.s * 100 + "%, " + this.l * 100 + "%, " + this.a + ")";
            };
            HSL.prototype.toRGB = function () {
                var r = 0;
                var g = 0;
                var b = 0;
                if (this.s !== 0) {
                    var c = (1 - Math.abs(2 * this.l - 1)) * this.s;
                    var x = c * (1 - Math.abs((this.h / 60) % 2 - 1));
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
                    var m = this.l - 0.5 * c;
                    r += m;
                    g += m;
                    b += m;
                }
                return new RGB(r * 255, g * 255, b * 255);
            };
            HSL.prototype.interpolate = function (from, t, mode) {
                var modePrefix = mode.substr(0, 3);
                if (modePrefix === "hsl") {
                    if (from instanceof RGB) {
                        from = from.toHSL();
                    }
                    if (from instanceof HSL) {
                        var h1 = from.h;
                        var h2 = this.h;
                        if (Math.abs(h1 - h2) > 180) {
                            if (mode === "hsl-shortest") {
                                if (h1 < h2) {
                                    h1 += 360;
                                }
                                else {
                                    h2 += 360;
                                }
                            }
                        }
                        else {
                            if (mode === "hsl-longest") {
                                if (h1 < h2) {
                                    h1 += 360;
                                }
                                else {
                                    h2 += 360;
                                }
                            }
                        }
                        if (mode === "hsl-clockwise") {
                            h2 += 360;
                        }
                        if (mode === "hsl-counterclockwise") {
                            h1 += 360;
                        }
                        return new HSL(Attribute._lerp(h1, h2, t) % 360, Attribute._lerp(from.s, this.s, t), Attribute._lerp(from.l, this.l, t), Attribute._lerp(from.a, this.a, t));
                    }
                }
                else if (modePrefix === "rgb") {
                    if (from instanceof RGB) {
                        return from.interpolate(this, 1 - t, mode);
                    }
                    else {
                        return this.toRGB().interpolate(from, t, mode);
                    }
                }
                return this;
            };
            return HSL;
        }(ColorImpl));
        var Color = (function () {
            function Color(format, x, y, z, a) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (z === void 0) { z = 0; }
                if (a === void 0) { a = 1; }
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
                        var r = 0;
                        var g = 0;
                        var b = 0;
                        var m = format.match(/^#([0-9a-fA-F]{3})$/i);
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
            Color.prototype.toString = function () {
                return this.impl.toString();
            };
            Color.prototype.parse = function (css) {
                if (css !== null) {
                    return new Color(css);
                }
                else {
                    return new Color();
                }
            };
            Color.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            Color.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            Color.prototype.interpolate = function (from, t) {
                var c = new Color();
                c.impl = this.impl.interpolate(from.impl, t, this.mode);
                c.mode = this.mode;
                return c;
            };
            return Color;
        }());
        Color.DEFAULT_MODE = "rgb";
        Attribute.Color = Color;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var ColorMatrix;
        (function (ColorMatrix) {
            var Raw = (function () {
                function Raw(values) {
                    if (values === void 0) { values = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]]; }
                    this.type = "matrix";
                    this.arr = [];
                    this.arr = (_a = this.arr).concat.apply(_a, values);
                    var _a;
                }
                Raw.prototype.parse = function (css) {
                    if (css !== null) {
                        return new Raw([css.split(" ").map(parseFloat)]);
                    }
                    else {
                        return new Raw([]);
                    }
                };
                Raw.prototype.get = function (element, attr) {
                    return this.parse(element.getAttribute(attr));
                };
                Raw.prototype.set = function (element, attr, override) {
                    if (override !== undefined) {
                        element.setAttribute(attr, override.toString());
                    }
                    else {
                        element.setAttribute(attr, this.toString());
                    }
                };
                Raw.prototype.interpolate = function (from, t) {
                    return new Raw([this.arr.map(function (val, i) { return Attribute._lerp(from[i], val, t); })]);
                };
                return Raw;
            }());
            ColorMatrix.Raw = Raw;
            var Saturate = (function () {
                function Saturate(value) {
                    if (value === void 0) { value = 1; }
                    this.value = value;
                    this.type = "saturate";
                }
                Saturate.prototype.toString = function () {
                    return this.value.toString();
                };
                Saturate.prototype.parse = function (css) {
                    if (css !== null) {
                        return new Saturate(parseFloat(css));
                    }
                    else {
                        return new Saturate();
                    }
                };
                Saturate.prototype.get = function (element, attr) {
                    return this.parse(element.getAttribute(attr));
                };
                Saturate.prototype.set = function (element, attr, override) {
                    if (override !== undefined) {
                        element.setAttribute(attr, override.toString());
                    }
                    else {
                        element.setAttribute(attr, this.toString());
                    }
                };
                Saturate.prototype.interpolate = function (from, t) {
                    return new Saturate(Attribute._lerp(from.value, this.value, t));
                };
                return Saturate;
            }());
            ColorMatrix.Saturate = Saturate;
            var HueRotate = (function () {
                function HueRotate(value) {
                    if (value === void 0) { value = 0; }
                    this.value = value;
                    this.type = "hueRotate";
                }
                HueRotate.prototype.toString = function () {
                    return this.value.toString();
                };
                HueRotate.prototype.parse = function (css) {
                    if (css !== null) {
                        return new HueRotate(parseFloat(css));
                    }
                    else {
                        return new HueRotate();
                    }
                };
                HueRotate.prototype.get = function (element, attr) {
                    return this.parse(element.getAttribute(attr));
                };
                HueRotate.prototype.set = function (element, attr, override) {
                    if (override !== undefined) {
                        element.setAttribute(attr, override.toString());
                    }
                    else {
                        element.setAttribute(attr, this.toString());
                    }
                };
                HueRotate.prototype.interpolate = function (from, t) {
                    return new HueRotate(Attribute._lerp(from.value, this.value, t));
                };
                return HueRotate;
            }());
            ColorMatrix.HueRotate = HueRotate;
            var LuminanceToAlphaColorMatrix = (function () {
                function LuminanceToAlphaColorMatrix() {
                    this.type = "luminanceToAlpha";
                }
                LuminanceToAlphaColorMatrix.prototype.toString = function () {
                    return "";
                };
                return LuminanceToAlphaColorMatrix;
            }());
            ColorMatrix.LuminanceToAlphaColorMatrix = LuminanceToAlphaColorMatrix;
        })(ColorMatrix = Attribute.ColorMatrix || (Attribute.ColorMatrix = {}));
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var Dimension = (function () {
            function Dimension(value, unit) {
                this.value = value;
                this.unit = unit;
            }
            Dimension.prototype.toString = function () {
                return "" + this.value + this.unit;
            };
            Dimension.prototype.parse = function (css) {
                if (css !== null) {
                    var m = css.match(/(\d+|\d+\.\d+)(\w+|%)/i);
                    if (m !== null) {
                        var toPx = Dimension.convert[m[2]];
                        var fromPx = 1 / Dimension.convert[this.unit];
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
            };
            Dimension.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            Dimension.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            Dimension.prototype.interpolate = function (from, t) {
                if (this.unit !== from.unit) {
                    var toPx = Dimension.convert[this.unit];
                    var fromPx = 1 / Dimension.convert[from.unit];
                    if (toPx !== undefined && fromPx !== undefined) {
                        return new Dimension(Attribute._lerp(from.value, this.value, t) * toPx * fromPx, this.unit);
                    }
                }
                return new Dimension(Attribute._lerp(from.value, this.value, t), this.unit);
            };
            return Dimension;
        }());
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
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var List = (function (_super) {
            __extends(List, _super);
            function List() {
                return _super.apply(this, arguments) || this;
            }
            List.prototype.toString = function () {
                return this.join("\t");
            };
            List.prototype.parse = function (css) {
                var _this = this;
                if (css !== null) {
                    var list_1 = new List();
                    css.split("\t").forEach(function (s, i) {
                        list_1.push(_this[i].parse(s));
                    });
                    return list_1;
                }
                else {
                    return new List();
                }
            };
            List.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            List.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            List.prototype.interpolate = function (from, t) {
                var list = new List();
                for (var i = 0; i !== this.length; ++i) {
                    list.push(this[i].interpolate(from[i], t));
                }
                return list;
            };
            return List;
        }(Array));
        Attribute.List = List;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var Matrix = (function () {
            function Matrix(values) {
                this.arr = [];
                this.arr = (_a = this.arr).concat.apply(_a, values);
                var _a;
            }
            Matrix.prototype.toString = function () {
                return this.arr.join(" ");
            };
            Matrix.prototype.parse = function (css) {
                if (css !== null) {
                    return new Matrix([css.split(" ").map(parseFloat)]);
                }
                else {
                    return new Matrix([]);
                }
            };
            Matrix.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            Matrix.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            Matrix.prototype.interpolate = function (from, t) {
                return new Matrix([this.arr.map(function (val, i) { return Attribute._lerp(from[i], val, t); })]);
            };
            return Matrix;
        }());
        Attribute.Matrix = Matrix;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var Number = (function () {
            function Number(n) {
                if (n === void 0) { n = 0; }
                this.n = n;
            }
            Number.prototype.toString = function () {
                return this.n.toString();
            };
            Number.prototype.parse = function (css) {
                if (css !== null) {
                    return new Attribute.Number(parseFloat(css));
                }
                else {
                    return new Attribute.Number();
                }
            };
            Number.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            Number.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            Number.prototype.interpolate = function (from, t) {
                return new Attribute.Number(Attribute._lerp(from.n, this.n, t));
            };
            return Number;
        }());
        Attribute.Number = Number;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var NumberOptionalNumber = (function () {
            function NumberOptionalNumber(n, o) {
                this.n = n;
                this.o = o;
            }
            NumberOptionalNumber.prototype.toString = function () {
                return (this.o !== undefined) ? this.n + "," + this.o : this.n.toString();
            };
            NumberOptionalNumber.prototype.parse = function (css) {
                if (css !== null) {
                    var toks = css.split(",");
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
            };
            NumberOptionalNumber.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            NumberOptionalNumber.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            NumberOptionalNumber.prototype.interpolate = function (from, t) {
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
            };
            return NumberOptionalNumber;
        }());
        Attribute.NumberOptionalNumber = NumberOptionalNumber;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var Point = (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype.toString = function () {
                return this.x + "," + this.y;
            };
            Point.prototype.parse = function (css) {
                if (css !== null) {
                    var toks = css.split(",");
                    return new Point(Attribute._LengthParse(toks[0]), Attribute._LengthParse(toks[1]));
                }
                else {
                    return new Point(0, 0);
                }
            };
            Point.prototype.get = function (element, attr) {
                var toks = attr.split(":");
                if (toks.length === 2) {
                    var cssX = element.getAttribute(toks[0]);
                    var cssY = element.getAttribute(toks[1]);
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
            };
            Point.prototype.set = function (element, attr, override) {
                var toks = attr.split(":");
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
            };
            Point.prototype.interpolate = function (from, t) {
                return new Point(Attribute._LengthInterpolate(from.x, this.x, t), Attribute._LengthInterpolate(from.y, this.y, t));
            };
            return Point;
        }());
        Attribute.Point = Point;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var PreserveAspectRatio = (function () {
            function PreserveAspectRatio(x, y, meetOrSlice) {
                this.x = x;
                this.y = y;
                this.meetOrSlice = meetOrSlice;
            }
            PreserveAspectRatio.prototype.toString = function () {
                if (this.x !== undefined && this.y !== undefined) {
                    var str = "x" + this.x + "Y" + this.y;
                    if (this.meetOrSlice !== undefined) {
                        str += " " + this.meetOrSlice;
                    }
                    return str;
                }
                else {
                    return "none";
                }
            };
            return PreserveAspectRatio;
        }());
        Attribute.PreserveAspectRatio = PreserveAspectRatio;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var Transform = (function () {
            function Transform(type) {
                this.type = type;
            }
            Transform.prototype.toString = function () {
                return this.type + "(" + this.args() + ")";
            };
            Transform.prototype.parse = function (css) {
                if (css !== null) {
                    return this.parseArgs(css.substring(css.indexOf("(") + 1, css.length - 1));
                }
                else {
                    return this.parseArgs(css);
                }
            };
            Transform.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            Transform.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            return Transform;
        }());
        Attribute.Transform = Transform;
        (function (Transform) {
            var Matrix = (function (_super) {
                __extends(Matrix, _super);
                function Matrix(a, b, c, d, e, f) {
                    if (a === void 0) { a = 1; }
                    if (b === void 0) { b = 0; }
                    if (c === void 0) { c = 0; }
                    if (d === void 0) { d = 1; }
                    if (e === void 0) { e = 0; }
                    if (f === void 0) { f = 0; }
                    var _this = _super.call(this, "matrix") || this;
                    _this.a = a;
                    _this.b = b;
                    _this.c = c;
                    _this.d = d;
                    _this.e = e;
                    _this.f = f;
                    return _this;
                }
                Matrix.prototype.args = function () {
                    return this.a + " " + this.b + " " + this.c + " " + this.d + " " + this.e + " " + this.f;
                };
                Matrix.prototype.parseArgs = function (css) {
                    if (css !== null) {
                        var toks = css.split(" ");
                        return new Matrix(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]), parseFloat(toks[4]), parseFloat(toks[5]));
                    }
                    else {
                        return new Matrix();
                    }
                };
                Matrix.prototype.interpolate = function (from, t) {
                    return new Matrix(Attribute._lerp(from.a, this.a, t), Attribute._lerp(from.b, this.b, t), Attribute._lerp(from.c, this.c, t), Attribute._lerp(from.d, this.d, t), Attribute._lerp(from.e, this.e, t), Attribute._lerp(from.f, this.f, t));
                };
                return Matrix;
            }(Transform));
            Transform.Matrix = Matrix;
            var Translate = (function (_super) {
                __extends(Translate, _super);
                function Translate(x, y) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    var _this = _super.call(this, "translate") || this;
                    _this.x = x;
                    _this.y = y;
                    return _this;
                }
                Translate.prototype.args = function () {
                    return this.x + " " + this.y;
                };
                Translate.prototype.parseArgs = function (css) {
                    if (css !== null) {
                        var toks = css.split(" ");
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
                };
                Translate.prototype.interpolate = function (from, t) {
                    return new Translate(Attribute._lerp(from.x, this.x, t), Attribute._lerp(from.y, this.y, t));
                };
                return Translate;
            }(Transform));
            Transform.Translate = Translate;
            var UniformScale = (function (_super) {
                __extends(UniformScale, _super);
                function UniformScale(s) {
                    if (s === void 0) { s = 1; }
                    var _this = _super.call(this, "scale") || this;
                    _this.s = s;
                    return _this;
                }
                UniformScale.prototype.args = function () {
                    return this.s.toString();
                };
                UniformScale.prototype.parseArgs = function (css) {
                    if (css !== null) {
                        return new UniformScale(parseFloat(css));
                    }
                    else {
                        return new UniformScale();
                    }
                };
                UniformScale.prototype.interpolate = function (from, t) {
                    return new UniformScale(Attribute._lerp(from.s, this.s, t));
                };
                return UniformScale;
            }(Transform));
            Transform.UniformScale = UniformScale;
            var Scale = (function (_super) {
                __extends(Scale, _super);
                function Scale(x, y) {
                    if (x === void 0) { x = 1; }
                    if (y === void 0) { y = x; }
                    var _this = _super.call(this, "scale") || this;
                    _this.x = x;
                    _this.y = y;
                    return _this;
                }
                Scale.prototype.args = function () {
                    return this.x + " " + this.y;
                };
                Scale.prototype.parseArgs = function (css) {
                    if (css !== null) {
                        var toks = css.split(" ");
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
                };
                Scale.prototype.interpolate = function (from, t) {
                    return new Scale(Attribute._lerp(from.x, this.x, t), Attribute._lerp(from.y, this.y, t));
                };
                return Scale;
            }(Transform));
            Transform.Scale = Scale;
            var Rotate = (function (_super) {
                __extends(Rotate, _super);
                function Rotate(a, x, y) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    var _this = _super.call(this, "rotate") || this;
                    _this.a = a;
                    _this.x = x;
                    _this.y = y;
                    return _this;
                }
                Rotate.prototype.args = function () {
                    return this.a + " " + this.x + " " + this.y;
                };
                Rotate.prototype.parseArgs = function (css) {
                    if (css !== null) {
                        var toks = css.split(" ");
                        return new Rotate(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]));
                    }
                    else {
                        return new Rotate(0);
                    }
                };
                Rotate.prototype.interpolate = function (from, t) {
                    return new Rotate(Attribute._lerp(from.a, this.a, t), Attribute._lerp(from.x, this.x, t), Attribute._lerp(from.y, this.y, t));
                };
                return Rotate;
            }(Transform));
            Transform.Rotate = Rotate;
            var SkewX = (function (_super) {
                __extends(SkewX, _super);
                function SkewX(a) {
                    if (a === void 0) { a = 0; }
                    var _this = _super.call(this, "skewX") || this;
                    _this.a = a;
                    return _this;
                }
                SkewX.prototype.args = function () {
                    return this.a.toString();
                };
                SkewX.prototype.parseArgs = function (css) {
                    if (css !== null) {
                        return new SkewX(parseFloat(css));
                    }
                    else {
                        return new SkewX();
                    }
                };
                SkewX.prototype.interpolate = function (from, t) {
                    return new SkewX(Attribute._lerp(from.a, this.a, t));
                };
                return SkewX;
            }(Transform));
            Transform.SkewX = SkewX;
            var SkewY = (function (_super) {
                __extends(SkewY, _super);
                function SkewY(a) {
                    if (a === void 0) { a = 0; }
                    var _this = _super.call(this, "skewY") || this;
                    _this.a = a;
                    return _this;
                }
                SkewY.prototype.args = function () {
                    return this.a.toString();
                };
                SkewY.prototype.parseArgs = function (css) {
                    if (css !== null) {
                        return new SkewY(parseFloat(css));
                    }
                    else {
                        return new SkewY();
                    }
                };
                SkewY.prototype.interpolate = function (from, t) {
                    return new SkewY(Attribute._lerp(from.a, this.a, t));
                };
                return SkewY;
            }(Transform));
            Transform.SkewY = SkewY;
        })(Transform = Attribute.Transform || (Attribute.Transform = {}));
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var ViewBox = (function () {
            function ViewBox(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            ViewBox.prototype.toString = function () {
                return this.x + " " + this.y + " " + this.width + " " + this.height;
            };
            ViewBox.prototype.parse = function (css) {
                if (css !== null) {
                    var toks = css.split(" ");
                    return new ViewBox(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]));
                }
                else {
                    return new ViewBox(0, 0, 0, 0);
                }
            };
            ViewBox.prototype.get = function (element, attr) {
                var toks = attr.split(":");
                if (toks.length === 4) {
                    var cssX = element.getAttribute(toks[0]);
                    var cssY = element.getAttribute(toks[1]);
                    var cssWidth = element.getAttribute(toks[2]);
                    var cssHeight = element.getAttribute(toks[3]);
                    if (cssX !== null && cssY !== null && cssWidth !== null && cssHeight !== null) {
                        return new ViewBox(parseFloat(cssX), parseFloat(cssY), parseFloat(cssWidth), parseFloat(cssHeight));
                    }
                    else {
                        return new ViewBox(0, 0, 0, 0);
                    }
                }
                else {
                    return this.parse(element.getAttribute(attr));
                }
            };
            ViewBox.prototype.set = function (element, attr, override) {
                var toks = attr.split(":");
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
            };
            ViewBox.prototype.interpolate = function (from, t) {
                return new ViewBox(Attribute._LengthInterpolate(from.x, this.x, t), Attribute._LengthInterpolate(from.y, this.y, t), Attribute._LengthInterpolate(from.width, this.width, t), Attribute._LengthInterpolate(from.height, this.height, t));
            };
            return ViewBox;
        }());
        Attribute.ViewBox = ViewBox;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Paper = (function () {
        function Paper(root) {
            if (root) {
                if (typeof root === "string") {
                    var el = window.document.getElementById(root);
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
            var defsElements = this.root.getElementsByTagName("defs");
            if (defsElements.length > 0) {
                this.defs = defsElements.item(0);
            }
            else {
                this.defs = window.document.createElementNS(SavageDOM.XMLNS, "defs");
                this.root.appendChild(this.defs);
            }
        }
        Paper.prototype.addDef = function (def) {
            this.defs.appendChild(def.node);
        };
        return Paper;
    }());
    SavageDOM.Paper = Paper;
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Element = (function () {
        function Element(paper, el, attrs) {
            this.paper = paper;
            this.id = Math.random().toString(36).substring(2);
            if (typeof el === "string") {
                this.node = window.document.createElementNS(SavageDOM.XMLNS, el);
                if (attrs !== undefined) {
                    this.setAttributes(attrs);
                }
                this.paper.root.appendChild(this.node);
                this.node.setAttribute("id", this.id);
            }
            else {
                this.node = el;
                var id = this.node.getAttribute("id");
                if (id !== null) {
                    this.id = id;
                }
                else {
                    this.node.setAttribute("id", this.id);
                }
            }
            this.style = window.getComputedStyle(this.node);
        }
        Element.prototype.toString = function () {
            return "url(#" + this.id + ")";
        };
        Element.prototype.setAttribute = function (name, val) {
            this.node.setAttribute(name, String(val));
        };
        Element.prototype.setAttributes = function (attrs) {
            for (var name_1 in attrs) {
                var attr = attrs[name_1];
                if (attr !== undefined && attr !== null) {
                    this.setAttribute(name_1, attr);
                }
            }
        };
        Element.prototype.getAttribute = function (name) {
            var computed = this.style.getPropertyValue(name);
            if (computed === "") {
                return this.node.getAttribute(name);
            }
            else {
                return computed;
            }
        };
        Element.prototype.add = function (el) {
            this.node.appendChild(el.node);
        };
        Element.prototype.getChildren = function () {
            var children = this.node.children;
            var elements = [];
            for (var i = 0; i < children.length; ++i) {
                elements.push(new Element(this.paper, children.item(i)));
            }
            return elements;
        };
        Element.prototype.addEventListener = function (event, listener) {
            this.node.addEventListener(event, listener.bind(this));
        };
        return Element;
    }());
    SavageDOM.Element = Element;
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var AbstractRenderable = (function (_super) {
            __extends(AbstractRenderable, _super);
            function AbstractRenderable() {
                return _super.apply(this, arguments) || this;
            }
            return AbstractRenderable;
        }(SavageDOM.Element));
        Elements.AbstractRenderable = AbstractRenderable;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var AbstractShape = (function (_super) {
                __extends(AbstractShape, _super);
                function AbstractShape() {
                    return _super.apply(this, arguments) || this;
                }
                return AbstractShape;
            }(Elements.AbstractRenderable));
            Renderable.AbstractShape = AbstractShape;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                var Circle = (function (_super) {
                    __extends(Circle, _super);
                    function Circle(paper, attrs) {
                        return _super.call(this, paper, "circle", attrs) || this;
                    }
                    return Circle;
                }(Renderable.AbstractShape));
                Shape.Circle = Circle;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.circle = function (cx, cy, r) {
        return new SavageDOM.Elements.Renderable.Shape.Circle(this, { cx: cx, cy: cy, r: r });
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                var Ellipse = (function (_super) {
                    __extends(Ellipse, _super);
                    function Ellipse(paper, attrs) {
                        return _super.call(this, paper, "ellipse", attrs) || this;
                    }
                    return Ellipse;
                }(Renderable.AbstractShape));
                Shape.Ellipse = Ellipse;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.ellipse = function (cx, cy, rx, ry) {
        return new SavageDOM.Elements.Renderable.Shape.Ellipse(this, { cx: cx, cy: cy, rx: rx, ry: ry });
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                var Line = (function (_super) {
                    __extends(Line, _super);
                    function Line(paper, attrs) {
                        return _super.call(this, paper, "line", attrs) || this;
                    }
                    return Line;
                }(Renderable.AbstractShape));
                Shape.Line = Line;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.line = function (x1, y1, x2, y2) {
        return new SavageDOM.Elements.Renderable.Shape.Line(this, { x1: x1, x2: x2, y1: y1, y2: y2 });
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var PathSegment = (function () {
            function PathSegment() {
            }
            PathSegment.prototype.parse = function (css) {
                if (css !== null) {
                    return this.parseArgs(css.substr(2));
                }
                else {
                    return this.defaultInstance();
                }
            };
            PathSegment.prototype.get = function (element, attr) {
                return this.parse(element.getAttribute(attr));
            };
            PathSegment.prototype.set = function (element, attr, override) {
                if (override !== undefined) {
                    element.setAttribute(attr, override.toString());
                }
                else {
                    element.setAttribute(attr, this.toString());
                }
            };
            return PathSegment;
        }());
        Attribute.PathSegment = PathSegment;
        (function (PathSegment) {
            var SinglePoint = (function (_super) {
                __extends(SinglePoint, _super);
                function SinglePoint(p) {
                    if (p === void 0) { p = new Attribute.Point(0, 0); }
                    var _this = _super.call(this) || this;
                    _this.p = p;
                    return _this;
                }
                SinglePoint.prototype.toString = function () {
                    return this.type + " " + this.p.toString();
                };
                SinglePoint.prototype.parseArgs = function (css) {
                    return this.buildInstance(this.p.parse(css));
                };
                SinglePoint.prototype.interpolate = function (from, t) {
                    return this.buildInstance(this.p.interpolate(from.p, t));
                };
                return SinglePoint;
            }(PathSegment));
            PathSegment.SinglePoint = SinglePoint;
            var DoublePoint = (function (_super) {
                __extends(DoublePoint, _super);
                function DoublePoint(p1, p2) {
                    if (p1 === void 0) { p1 = new Attribute.Point(0, 0); }
                    if (p2 === void 0) { p2 = new Attribute.Point(0, 0); }
                    var _this = _super.call(this) || this;
                    _this.p1 = p1;
                    _this.p2 = p2;
                    return _this;
                }
                DoublePoint.prototype.toString = function () {
                    return this.type + " " + this.p1.toString() + " " + this.p2.toString();
                };
                DoublePoint.prototype.parseArgs = function (css) {
                    var toks = css.split(" ");
                    return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]));
                };
                DoublePoint.prototype.interpolate = function (from, t) {
                    return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t));
                };
                return DoublePoint;
            }(PathSegment));
            PathSegment.DoublePoint = DoublePoint;
            var TriplePoint = (function (_super) {
                __extends(TriplePoint, _super);
                function TriplePoint(p1, p2, p3) {
                    if (p1 === void 0) { p1 = new Attribute.Point(0, 0); }
                    if (p2 === void 0) { p2 = new Attribute.Point(0, 0); }
                    if (p3 === void 0) { p3 = new Attribute.Point(0, 0); }
                    var _this = _super.call(this) || this;
                    _this.p1 = p1;
                    _this.p2 = p2;
                    _this.p3 = p3;
                    return _this;
                }
                TriplePoint.prototype.toString = function () {
                    return this.type + " " + this.p1.toString() + " " + this.p2.toString() + " " + this.p3.toString();
                };
                TriplePoint.prototype.parseArgs = function (css) {
                    var toks = css.split(" ");
                    return this.buildInstance(this.p1.parse(toks[0]), this.p2.parse(toks[1]), this.p3.parse(toks[2]));
                };
                TriplePoint.prototype.interpolate = function (from, t) {
                    return this.buildInstance(this.p1.interpolate(from.p1, t), this.p2.interpolate(from.p2, t), this.p3.interpolate(from.p3, t));
                };
                return TriplePoint;
            }(PathSegment));
            PathSegment.TriplePoint = TriplePoint;
            var MoveToAbs = (function (_super) {
                __extends(MoveToAbs, _super);
                function MoveToAbs() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "M";
                    return _this;
                }
                MoveToAbs.prototype.buildInstance = function (p) {
                    return new MoveToAbs(p);
                };
                MoveToAbs.prototype.defaultInstance = function () {
                    return new MoveToAbs();
                };
                return MoveToAbs;
            }(SinglePoint));
            PathSegment.MoveToAbs = MoveToAbs;
            var MoveToRel = (function (_super) {
                __extends(MoveToRel, _super);
                function MoveToRel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "m";
                    return _this;
                }
                MoveToRel.prototype.buildInstance = function (p) {
                    return new MoveToRel(p);
                };
                MoveToRel.prototype.defaultInstance = function () {
                    return new MoveToRel();
                };
                return MoveToRel;
            }(SinglePoint));
            PathSegment.MoveToRel = MoveToRel;
            var LineToAbs = (function (_super) {
                __extends(LineToAbs, _super);
                function LineToAbs() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "L";
                    return _this;
                }
                LineToAbs.prototype.buildInstance = function (p) {
                    return new LineToAbs(p);
                };
                LineToAbs.prototype.defaultInstance = function () {
                    return new LineToAbs();
                };
                return LineToAbs;
            }(SinglePoint));
            PathSegment.LineToAbs = LineToAbs;
            var LineToRel = (function (_super) {
                __extends(LineToRel, _super);
                function LineToRel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "l";
                    return _this;
                }
                LineToRel.prototype.buildInstance = function (p) {
                    return new LineToRel(p);
                };
                LineToRel.prototype.defaultInstance = function () {
                    return new LineToRel();
                };
                return LineToRel;
            }(SinglePoint));
            PathSegment.LineToRel = LineToRel;
            var CurveToQuadraticAbs = (function (_super) {
                __extends(CurveToQuadraticAbs, _super);
                function CurveToQuadraticAbs() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "Q";
                    return _this;
                }
                CurveToQuadraticAbs.prototype.buildInstance = function (p1, p2) {
                    return new CurveToQuadraticAbs(p1, p2);
                };
                CurveToQuadraticAbs.prototype.defaultInstance = function () {
                    return new CurveToQuadraticAbs();
                };
                return CurveToQuadraticAbs;
            }(DoublePoint));
            PathSegment.CurveToQuadraticAbs = CurveToQuadraticAbs;
            var CurveToQuadraticRel = (function (_super) {
                __extends(CurveToQuadraticRel, _super);
                function CurveToQuadraticRel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "q";
                    return _this;
                }
                CurveToQuadraticRel.prototype.buildInstance = function (p1, p2) {
                    return new CurveToQuadraticRel(p1, p2);
                };
                CurveToQuadraticRel.prototype.defaultInstance = function () {
                    return new CurveToQuadraticRel();
                };
                return CurveToQuadraticRel;
            }(DoublePoint));
            PathSegment.CurveToQuadraticRel = CurveToQuadraticRel;
            var CurveToQuadraticSmoothAbs = (function (_super) {
                __extends(CurveToQuadraticSmoothAbs, _super);
                function CurveToQuadraticSmoothAbs() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "T";
                    return _this;
                }
                CurveToQuadraticSmoothAbs.prototype.buildInstance = function (p) {
                    return new CurveToQuadraticSmoothAbs(p);
                };
                CurveToQuadraticSmoothAbs.prototype.defaultInstance = function () {
                    return new CurveToQuadraticSmoothAbs();
                };
                return CurveToQuadraticSmoothAbs;
            }(SinglePoint));
            PathSegment.CurveToQuadraticSmoothAbs = CurveToQuadraticSmoothAbs;
            var CurveToQuadraticSmoothRel = (function (_super) {
                __extends(CurveToQuadraticSmoothRel, _super);
                function CurveToQuadraticSmoothRel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "t";
                    return _this;
                }
                CurveToQuadraticSmoothRel.prototype.buildInstance = function (p) {
                    return new CurveToQuadraticSmoothRel(p);
                };
                CurveToQuadraticSmoothRel.prototype.defaultInstance = function () {
                    return new CurveToQuadraticSmoothRel();
                };
                return CurveToQuadraticSmoothRel;
            }(SinglePoint));
            PathSegment.CurveToQuadraticSmoothRel = CurveToQuadraticSmoothRel;
            var CurveToCubicAbs = (function (_super) {
                __extends(CurveToCubicAbs, _super);
                function CurveToCubicAbs() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "C";
                    return _this;
                }
                CurveToCubicAbs.prototype.buildInstance = function (p1, p2, p3) {
                    return new CurveToCubicAbs(p1, p2, p3);
                };
                CurveToCubicAbs.prototype.defaultInstance = function () {
                    return new CurveToCubicAbs();
                };
                return CurveToCubicAbs;
            }(TriplePoint));
            PathSegment.CurveToCubicAbs = CurveToCubicAbs;
            var CurveToCubicRel = (function (_super) {
                __extends(CurveToCubicRel, _super);
                function CurveToCubicRel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "c";
                    return _this;
                }
                CurveToCubicRel.prototype.buildInstance = function (p1, p2, p3) {
                    return new CurveToCubicRel(p1, p2, p3);
                };
                CurveToCubicRel.prototype.defaultInstance = function () {
                    return new CurveToCubicRel();
                };
                return CurveToCubicRel;
            }(TriplePoint));
            PathSegment.CurveToCubicRel = CurveToCubicRel;
            var CurveToCubicSmoothAbs = (function (_super) {
                __extends(CurveToCubicSmoothAbs, _super);
                function CurveToCubicSmoothAbs() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "S";
                    return _this;
                }
                CurveToCubicSmoothAbs.prototype.buildInstance = function (p1, p2) {
                    return new CurveToCubicSmoothAbs(p1, p2);
                };
                CurveToCubicSmoothAbs.prototype.defaultInstance = function () {
                    return new CurveToCubicSmoothAbs();
                };
                return CurveToCubicSmoothAbs;
            }(DoublePoint));
            PathSegment.CurveToCubicSmoothAbs = CurveToCubicSmoothAbs;
            var CurveToCubicSmoothRel = (function (_super) {
                __extends(CurveToCubicSmoothRel, _super);
                function CurveToCubicSmoothRel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "s";
                    return _this;
                }
                CurveToCubicSmoothRel.prototype.buildInstance = function (p1, p2) {
                    return new CurveToCubicSmoothRel(p1, p2);
                };
                CurveToCubicSmoothRel.prototype.defaultInstance = function () {
                    return new CurveToCubicSmoothRel();
                };
                return CurveToCubicSmoothRel;
            }(DoublePoint));
            PathSegment.CurveToCubicSmoothRel = CurveToCubicSmoothRel;
            var ArcTo = (function (_super) {
                __extends(ArcTo, _super);
                function ArcTo(r, p, xAxisRotate, largeArc, sweepClockwise) {
                    if (r === void 0) { r = new Attribute.Point(0, 0); }
                    if (p === void 0) { p = new Attribute.Point(0, 0); }
                    if (xAxisRotate === void 0) { xAxisRotate = 0; }
                    if (largeArc === void 0) { largeArc = false; }
                    if (sweepClockwise === void 0) { sweepClockwise = true; }
                    var _this = _super.call(this) || this;
                    _this.r = r;
                    _this.p = p;
                    _this.xAxisRotate = xAxisRotate;
                    _this.largeArc = largeArc;
                    _this.sweepClockwise = sweepClockwise;
                    return _this;
                }
                ArcTo.prototype.toString = function () {
                    return this.r.toString() + " " + this.xAxisRotate + " " + (this.largeArc ? 1 : 0) + " " + (this.sweepClockwise ? 1 : 0) + " " + this.p.toString();
                };
                ArcTo.prototype.parseArgs = function (css) {
                    var toks = css.split(" ");
                    return this.buildInstance(this.r.parse(toks[0]), this.p.parse(toks[4]), parseFloat(toks[1]), toks[2] === "1", toks[3] === "1");
                };
                ArcTo.prototype.interpolate = function (from, t) {
                    return this.buildInstance(this.r.interpolate(from.r, t), this.p.interpolate(from.p, t), Attribute._lerp(from.xAxisRotate, this.xAxisRotate, t), (t < 0.5) ? from.largeArc : this.largeArc, (t < 0.5) ? from.sweepClockwise : this.sweepClockwise);
                };
                return ArcTo;
            }(PathSegment));
            PathSegment.ArcTo = ArcTo;
            var ArcToAbs = (function (_super) {
                __extends(ArcToAbs, _super);
                function ArcToAbs() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "A";
                    return _this;
                }
                ArcToAbs.prototype.buildInstance = function (r, p, xAxisRotate, largeArc, sweepClockwise) {
                    return new ArcToAbs(r, p, xAxisRotate, largeArc, sweepClockwise);
                };
                ArcToAbs.prototype.defaultInstance = function () {
                    return new ArcToAbs();
                };
                return ArcToAbs;
            }(ArcTo));
            PathSegment.ArcToAbs = ArcToAbs;
            var ArcToRel = (function (_super) {
                __extends(ArcToRel, _super);
                function ArcToRel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "a";
                    return _this;
                }
                ArcToRel.prototype.buildInstance = function (r, p, xAxisRotate, largeArc, sweepClockwise) {
                    return new ArcToRel(r, p, xAxisRotate, largeArc, sweepClockwise);
                };
                ArcToRel.prototype.defaultInstance = function () {
                    return new ArcToRel();
                };
                return ArcToRel;
            }(ArcTo));
            PathSegment.ArcToRel = ArcToRel;
            var ClosePath = (function (_super) {
                __extends(ClosePath, _super);
                function ClosePath() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.type = "Z";
                    return _this;
                }
                ClosePath.prototype.toString = function () {
                    return "Z";
                };
                ClosePath.prototype.parseArgs = function (css) {
                    return new ClosePath();
                };
                ClosePath.prototype.defaultInstance = function () {
                    return new ClosePath();
                };
                ClosePath.prototype.interpolate = function (from, t) {
                    return new ClosePath();
                };
                return ClosePath;
            }(PathSegment));
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
                var Path = (function (_super) {
                    __extends(Path, _super);
                    function Path(paper, attrs) {
                        return _super.call(this, paper, "path", attrs) || this;
                    }
                    return Path;
                }(Renderable.AbstractShape));
                Shape.Path = Path;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.path = function (d, pathLength) {
        return new SavageDOM.Elements.Renderable.Shape.Path(this, { d: d, pathLength: pathLength });
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                var Polygon = (function (_super) {
                    __extends(Polygon, _super);
                    function Polygon(paper, attrs) {
                        return _super.call(this, paper, "polygon", attrs) || this;
                    }
                    return Polygon;
                }(Renderable.AbstractShape));
                Shape.Polygon = Polygon;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.polygon = function (points) {
        return new SavageDOM.Elements.Renderable.Shape.Polygon(this, { points: points });
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                var Polyline = (function (_super) {
                    __extends(Polyline, _super);
                    function Polyline(paper, attrs) {
                        return _super.call(this, paper, "polyline", attrs) || this;
                    }
                    return Polyline;
                }(Renderable.AbstractShape));
                Shape.Polyline = Polyline;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.polyline = function (points) {
        return new SavageDOM.Elements.Renderable.Shape.Polyline(this, { points: points });
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Shape;
            (function (Shape) {
                var Rect = (function (_super) {
                    __extends(Rect, _super);
                    function Rect(paper, attrs) {
                        return _super.call(this, paper, "rect", attrs) || this;
                    }
                    return Rect;
                }(Renderable.AbstractShape));
                Shape.Rect = Rect;
            })(Shape = Renderable.Shape || (Renderable.Shape = {}));
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.rect = function (x, y, width, height, rx, ry) {
        return new SavageDOM.Elements.Renderable.Shape.Rect(this, { x: x, y: y, width: width, height: height, rx: rx, ry: ry });
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Group = (function (_super) {
                __extends(Group, _super);
                function Group(paper, attrs) {
                    return _super.call(this, paper, "g", attrs) || this;
                }
                return Group;
            }(Elements.AbstractRenderable));
            Renderable.Group = Group;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.group = function (els) {
        var el = new SavageDOM.Elements.Renderable.Group(this);
        els.forEach(function (child) { return el.node.appendChild(child.node); });
        return el;
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Image = (function (_super) {
                __extends(Image, _super);
                function Image(paper, attrs) {
                    return _super.call(this, paper, "image", attrs) || this;
                }
                return Image;
            }(Elements.AbstractRenderable));
            Renderable.Image = Image;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.image = function (attrs) {
        return new SavageDOM.Elements.Renderable.Image(this, attrs);
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var Text = (function (_super) {
                __extends(Text, _super);
                function Text(paper, attrs) {
                    return _super.call(this, paper, "text", attrs) || this;
                }
                return Text;
            }(Elements.AbstractRenderable));
            Renderable.Text = Text;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.text = function (x, y) {
        return new SavageDOM.Elements.Renderable.Text(this, { x: x, y: y });
    };
})(SavageDOM || (SavageDOM = {}));
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
        var AbstractNonRenderable = (function (_super) {
            __extends(AbstractNonRenderable, _super);
            function AbstractNonRenderable() {
                return _super.apply(this, arguments) || this;
            }
            return AbstractNonRenderable;
        }(SavageDOM.Element));
        Elements.AbstractNonRenderable = AbstractNonRenderable;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var AbstractPaintServer = (function (_super) {
                __extends(AbstractPaintServer, _super);
                function AbstractPaintServer() {
                    return _super.apply(this, arguments) || this;
                }
                return AbstractPaintServer;
            }(Elements.AbstractNonRenderable));
            NonRenderable.AbstractPaintServer = AbstractPaintServer;
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var PaintServer;
            (function (PaintServer) {
                var AbstractGradient = (function (_super) {
                    __extends(AbstractGradient, _super);
                    function AbstractGradient() {
                        return _super.apply(this, arguments) || this;
                    }
                    return AbstractGradient;
                }(NonRenderable.AbstractPaintServer));
                PaintServer.AbstractGradient = AbstractGradient;
            })(PaintServer = NonRenderable.PaintServer || (NonRenderable.PaintServer = {}));
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
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
                    var Linear = (function (_super) {
                        __extends(Linear, _super);
                        function Linear(paper, stops, attrs) {
                            var _this = _super.call(this, paper, "linearGradient", attrs) || this;
                            Object.keys(stops).forEach(function (offset) {
                                var stop = window.document.createElementNS(SavageDOM.XMLNS, "stop");
                                stop.setAttribute("offset", offset);
                                stop.setAttribute("stop-color", stops[offset]);
                                _this.node.appendChild(stop);
                            });
                            return _this;
                        }
                        return Linear;
                    }(PaintServer.AbstractGradient));
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
                    var Radial = (function (_super) {
                        __extends(Radial, _super);
                        function Radial(paper, stops, attrs) {
                            var _this = _super.call(this, paper, "radialGradient", attrs) || this;
                            Object.keys(stops).forEach(function (offset) {
                                var stop = window.document.createElementNS(SavageDOM.XMLNS, "stop");
                                stop.setAttribute("offset", offset);
                                stop.setAttribute("stop-color", stops[offset]);
                                _this.node.appendChild(stop);
                            });
                            return _this;
                        }
                        return Radial;
                    }(PaintServer.AbstractGradient));
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
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var PaintServer;
            (function (PaintServer) {
                var Pattern = (function (_super) {
                    __extends(Pattern, _super);
                    function Pattern(paper, w, h, x, y, view) {
                        var _this = _super.call(this, paper, "pattern") || this;
                        _this.paper = paper;
                        _this.paper.addDef(_this);
                        _this.setAttribute("width", w);
                        _this.setAttribute("height", h);
                        if (x !== undefined || y !== undefined || view) {
                            _this.setAttribute("patternUnits", "userSpaceOnUse");
                            if (x !== undefined) {
                                _this.setAttribute("x", x);
                            }
                            if (y !== undefined) {
                                _this.setAttribute("y", y);
                            }
                            if (view) {
                                _this.setAttribute("viewBox", view);
                            }
                            else {
                                _this.setAttribute("viewBox", new SavageDOM.Attribute.ViewBox(0, 0, w, h));
                            }
                        }
                        return _this;
                    }
                    return Pattern;
                }(NonRenderable.AbstractPaintServer));
                PaintServer.Pattern = Pattern;
            })(PaintServer = NonRenderable.PaintServer || (NonRenderable.PaintServer = {}));
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.pattern = function (w, h, x, y, view) {
        return new SavageDOM.Elements.NonRenderable.PaintServer.Pattern(this, w, h, x, y, view);
    };
    SavageDOM.Element.prototype.toPattern = function (w, h, x, y, view) {
        var pattern = new SavageDOM.Elements.NonRenderable.PaintServer.Pattern(this.paper, w, h, x, y, view);
        var children = this.node.children;
        for (var i = 0; i < children.length; ++i) {
            pattern.node.appendChild(children.item(i));
        }
        return pattern;
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var Marker = (function (_super) {
                __extends(Marker, _super);
                function Marker(paper, attrs) {
                    return _super.call(this, paper, "marker", attrs) || this;
                }
                return Marker;
            }(Elements.AbstractNonRenderable));
            NonRenderable.Marker = Marker;
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.marker = function () {
        return new SavageDOM.Elements.NonRenderable.Marker(this, {});
    };
})(SavageDOM || (SavageDOM = {}));
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var NonRenderable;
        (function (NonRenderable) {
            var Mask = (function (_super) {
                __extends(Mask, _super);
                function Mask(paper, w, h, x, y, units, contentUnits) {
                    var _this = _super.call(this, paper, "mask") || this;
                    _this.paper = paper;
                    _this.paper.addDef(_this);
                    _this.setAttribute("width", w);
                    _this.setAttribute("height", h);
                    if (x !== undefined) {
                        _this.setAttribute("x", x);
                    }
                    if (y !== undefined) {
                        _this.setAttribute("y", y);
                    }
                    if (units !== undefined) {
                        _this.setAttribute("maskUnits", units);
                    }
                    if (contentUnits !== undefined) {
                        _this.setAttribute("maskContentUnits", contentUnits);
                    }
                    return _this;
                }
                return Mask;
            }(Elements.AbstractNonRenderable));
            NonRenderable.Mask = Mask;
        })(NonRenderable = Elements.NonRenderable || (Elements.NonRenderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.mask = function (w, h, x, y, units, contentUnits) {
        return new SavageDOM.Elements.NonRenderable.Mask(this, w, h, x, y, units, contentUnits);
    };
})(SavageDOM || (SavageDOM = {}));
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
        var FilterPrimitive = (function (_super) {
            __extends(FilterPrimitive, _super);
            function FilterPrimitive(filter, name, attrs) {
                return _super.call(this, filter.paper, name, attrs) || this;
            }
            return FilterPrimitive;
        }(SavageDOM.Element));
        Elements.FilterPrimitive = FilterPrimitive;
        (function (FilterPrimitive) {
            var Blend = (function (_super) {
                __extends(Blend, _super);
                function Blend(filter, attrs) {
                    return _super.call(this, filter, "feBlend", attrs) || this;
                }
                return Blend;
            }(FilterPrimitive));
            FilterPrimitive.Blend = Blend;
            ;
            var ColorMatrix = (function (_super) {
                __extends(ColorMatrix, _super);
                function ColorMatrix(filter, attrs) {
                    return _super.call(this, filter, "feColorMatrix", attrs) || this;
                }
                return ColorMatrix;
            }(FilterPrimitive));
            FilterPrimitive.ColorMatrix = ColorMatrix;
            ;
            var ComponentTransfer = (function (_super) {
                __extends(ComponentTransfer, _super);
                function ComponentTransfer(filter, attrs) {
                    return _super.call(this, filter, "feComponentTransfer", attrs) || this;
                }
                return ComponentTransfer;
            }(FilterPrimitive));
            FilterPrimitive.ComponentTransfer = ComponentTransfer;
            ;
            var Composite = (function (_super) {
                __extends(Composite, _super);
                function Composite(filter, attrs) {
                    return _super.call(this, filter, "feComposite", attrs) || this;
                }
                return Composite;
            }(FilterPrimitive));
            FilterPrimitive.Composite = Composite;
            ;
            var ConvolveMatrix = (function (_super) {
                __extends(ConvolveMatrix, _super);
                function ConvolveMatrix(filter, attrs) {
                    return _super.call(this, filter, "feConvolveMatrix", attrs) || this;
                }
                return ConvolveMatrix;
            }(FilterPrimitive));
            FilterPrimitive.ConvolveMatrix = ConvolveMatrix;
            ;
            var DiffuseLighting = (function (_super) {
                __extends(DiffuseLighting, _super);
                function DiffuseLighting(filter, attrs) {
                    return _super.call(this, filter, "feDiffuseLighting", attrs) || this;
                }
                return DiffuseLighting;
            }(FilterPrimitive));
            FilterPrimitive.DiffuseLighting = DiffuseLighting;
            ;
            var DisplacementMap = (function (_super) {
                __extends(DisplacementMap, _super);
                function DisplacementMap(filter, attrs) {
                    return _super.call(this, filter, "feDisplacementMap", attrs) || this;
                }
                return DisplacementMap;
            }(FilterPrimitive));
            FilterPrimitive.DisplacementMap = DisplacementMap;
            ;
            var Flood = (function (_super) {
                __extends(Flood, _super);
                function Flood(filter, attrs) {
                    return _super.call(this, filter, "feFlood", attrs) || this;
                }
                return Flood;
            }(FilterPrimitive));
            FilterPrimitive.Flood = Flood;
            ;
            var GaussianBlur = (function (_super) {
                __extends(GaussianBlur, _super);
                function GaussianBlur(filter, attrs) {
                    return _super.call(this, filter, "feGaussianBlur", attrs) || this;
                }
                return GaussianBlur;
            }(FilterPrimitive));
            FilterPrimitive.GaussianBlur = GaussianBlur;
            ;
            var Image = (function (_super) {
                __extends(Image, _super);
                function Image(filter, attrs) {
                    return _super.call(this, filter, "feImage", attrs) || this;
                }
                return Image;
            }(FilterPrimitive));
            FilterPrimitive.Image = Image;
            ;
            var Merge = (function (_super) {
                __extends(Merge, _super);
                function Merge(filter) {
                    return _super.call(this, filter, "feMerge") || this;
                }
                return Merge;
            }(FilterPrimitive));
            FilterPrimitive.Merge = Merge;
            ;
            var MergeNode = (function (_super) {
                __extends(MergeNode, _super);
                function MergeNode(filter, attrs) {
                    return _super.call(this, filter, "feMergeNode", attrs) || this;
                }
                return MergeNode;
            }(FilterPrimitive));
            FilterPrimitive.MergeNode = MergeNode;
            ;
            var Morphology = (function (_super) {
                __extends(Morphology, _super);
                function Morphology(filter, attrs) {
                    return _super.call(this, filter, "feMorphology", attrs) || this;
                }
                return Morphology;
            }(FilterPrimitive));
            FilterPrimitive.Morphology = Morphology;
            ;
            var Offset = (function (_super) {
                __extends(Offset, _super);
                function Offset(filter, attrs) {
                    return _super.call(this, filter, "feOffset", attrs) || this;
                }
                return Offset;
            }(FilterPrimitive));
            FilterPrimitive.Offset = Offset;
            ;
            var SpecularLighting = (function (_super) {
                __extends(SpecularLighting, _super);
                function SpecularLighting(filter, attrs) {
                    return _super.call(this, filter, "feSpecularLighting", attrs) || this;
                }
                return SpecularLighting;
            }(FilterPrimitive));
            FilterPrimitive.SpecularLighting = SpecularLighting;
            ;
            var Tile = (function (_super) {
                __extends(Tile, _super);
                function Tile(filter, attrs) {
                    return _super.call(this, filter, "feTile", attrs) || this;
                }
                return Tile;
            }(FilterPrimitive));
            FilterPrimitive.Tile = Tile;
            ;
            var Turbulence = (function (_super) {
                __extends(Turbulence, _super);
                function Turbulence(filter, attrs) {
                    return _super.call(this, filter, "feTurbulence", attrs) || this;
                }
                return Turbulence;
            }(FilterPrimitive));
            FilterPrimitive.Turbulence = Turbulence;
            ;
            var TransferFunction = (function (_super) {
                __extends(TransferFunction, _super);
                function TransferFunction(filter, channel, attrs) {
                    return _super.call(this, filter, "feFunc" + channel, attrs) || this;
                }
                return TransferFunction;
            }(FilterPrimitive));
            FilterPrimitive.TransferFunction = TransferFunction;
            ;
            var LightSource;
            (function (LightSource) {
                var DistantLight = (function (_super) {
                    __extends(DistantLight, _super);
                    function DistantLight(filter, attrs) {
                        return _super.call(this, filter, "feDistantLight", attrs) || this;
                    }
                    return DistantLight;
                }(FilterPrimitive));
                LightSource.DistantLight = DistantLight;
                ;
                var PointLight = (function (_super) {
                    __extends(PointLight, _super);
                    function PointLight(filter, attrs) {
                        return _super.call(this, filter, "fePointLight", attrs) || this;
                    }
                    return PointLight;
                }(FilterPrimitive));
                LightSource.PointLight = PointLight;
                ;
                var SpotLight = (function (_super) {
                    __extends(SpotLight, _super);
                    function SpotLight(filter, attrs) {
                        return _super.call(this, filter, "feSpotLight", attrs) || this;
                    }
                    return SpotLight;
                }(FilterPrimitive));
                LightSource.SpotLight = SpotLight;
                ;
            })(LightSource = FilterPrimitive.LightSource || (FilterPrimitive.LightSource = {}));
        })(FilterPrimitive = Elements.FilterPrimitive || (Elements.FilterPrimitive = {}));
        var merge = function (a, b) {
            var obj = Object.create(null);
            for (var aProp in a) {
                obj[aProp] = a[aProp];
            }
            for (var bProp in b) {
                obj[bProp] = b[bProp];
            }
            return obj;
        };
        var Filter = (function () {
            function Filter(paper) {
                this.paper = paper;
                this.node = window.document.createElementNS(SavageDOM.XMLNS, "filter");
                this.paper.defs.appendChild(this.node);
            }
            Filter.prototype.blend = function (mode, input1, input2) {
                var fe = new Elements.FilterPrimitive.Blend(this, {
                    in: input1,
                    in2: input2,
                    mode: mode,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.colorMatrix = function (matrix, input) {
                var fe = new Elements.FilterPrimitive.ColorMatrix(this, {
                    in: input,
                    type: matrix.type,
                    values: matrix,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.componentTransfer = function (r, g, b, a, input) {
                var componentTransfer = new Elements.FilterPrimitive.ComponentTransfer(this, {
                    in: input,
                });
                componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "R", r).node);
                componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "G", g).node);
                componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "B", b).node);
                if (a !== undefined) {
                    componentTransfer.node.appendChild(new Elements.FilterPrimitive.TransferFunction(this, "A", a).node);
                }
                this.addEffect(componentTransfer);
                return componentTransfer;
            };
            Filter.prototype.composite = function (operator, k1, k2, k3, k4, input1, input2) {
                var fe = new Elements.FilterPrimitive.Composite(this, {
                    in: input1,
                    in2: input2,
                    operator: operator,
                    k1: k1,
                    k2: k2,
                    k3: k3,
                    k4: k4,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.convolveMatrix = function (attrs, input) {
                var fe = new Elements.FilterPrimitive.ConvolveMatrix(this, merge(attrs, { in: input }));
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.diffuseLighting = function (attrs, lights, input) {
                if (lights === void 0) { lights = []; }
                var fe = new Elements.FilterPrimitive.DiffuseLighting(this, merge(attrs, { in: input }));
                this.addLights(fe, lights);
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.displacementMap = function (attrs, input1, input2) {
                var fe = new Elements.FilterPrimitive.DisplacementMap(this, merge(attrs, { in: input1, in2: input2 }));
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.flood = function (color, area) {
                var fe = new Elements.FilterPrimitive.Flood(this, { "flood-color": color });
                fe.setAttributes({
                    x: area.x,
                    y: area.y,
                    width: area.width,
                    height: area.height,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.gaussianBlur = function (stdDeviation, edgeMode, input) {
                if (stdDeviation === void 0) { stdDeviation = 0; }
                if (edgeMode === void 0) { edgeMode = "duplicate"; }
                var fe = new Elements.FilterPrimitive.GaussianBlur(this, {
                    in: input,
                    stdDeviation: stdDeviation,
                    edgeMode: edgeMode,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.image = function (href, preserveAspectRatio) {
                var fe = new Elements.FilterPrimitive.Image(this, {
                    "xlink:href": href,
                    preserveAspectRatio: preserveAspectRatio,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.merge = function (inputs) {
                var fe = new Elements.FilterPrimitive.Merge(this);
                inputs.forEach(function (input) {
                    var node = window.document.createElementNS(SavageDOM.XMLNS, "feMergeNode");
                    node.setAttribute("in", input.toString());
                    fe.node.appendChild(node);
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.morphology = function (operator, radius, input) {
                var fe = new Elements.FilterPrimitive.Morphology(this, {
                    in: input,
                    operator: operator,
                    radius: radius,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.offset = function (d, input) {
                var fe = new Elements.FilterPrimitive.Offset(this, {
                    in: input,
                    dx: d.x,
                    dy: d.y,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.specularLighting = function (attrs, lights, input) {
                if (lights === void 0) { lights = []; }
                var fe = new Elements.FilterPrimitive.SpecularLighting(this, attrs);
                this.addLights(fe, lights);
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.tile = function (area, input) {
                var fe = new Elements.FilterPrimitive.Tile(this, { in: input });
                fe.setAttributes({
                    x: area.x,
                    y: area.y,
                    width: area.width,
                    height: area.height,
                });
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.turbulence = function (attrs) {
                var fe = new Elements.FilterPrimitive.Turbulence(this, attrs);
                this.addEffect(fe);
                return fe;
            };
            Filter.prototype.addEffect = function (fe) {
                fe.setAttribute("result", fe.id);
                this.node.appendChild(fe.node);
            };
            Filter.prototype.addLights = function (lighting, lights) {
                var _this = this;
                lights.forEach(function (light) {
                    switch (light.type) {
                        case "point":
                            lighting.add(new Elements.FilterPrimitive.LightSource.PointLight(_this, light));
                            break;
                        case "distant":
                            lighting.add(new Elements.FilterPrimitive.LightSource.DistantLight(_this, light));
                            break;
                        case "spot":
                            lighting.add(new Elements.FilterPrimitive.LightSource.SpotLight(_this, light));
                            break;
                    }
                });
            };
            return Filter;
        }());
        Elements.Filter = Filter;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.filter = function () {
        return new SavageDOM.Elements.Filter(this);
    };
})(SavageDOM || (SavageDOM = {}));
//# sourceMappingURL=SavageDOM.elem.js.map
return SavageDOM;

}));
