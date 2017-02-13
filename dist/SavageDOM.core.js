/*
 * SavageDOM 1.0.0-alpha.6 (https://github.com/molisani/SavageDOM) 
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
"use strict";
var SavageDOM;
(function (SavageDOM) {
    SavageDOM.XMLNS = "http://www.w3.org/2000/svg";
    SavageDOM.XLINK = "http://www.w3.org/1999/xlink";
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var _lerp = function (a, b, t) { return a + ((b - a) * t); };
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
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
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
                    return this.toHSL().interpolate(from, t, mode);
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
                        var diff = h1 - h2;
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
"use strict";
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
"use strict";
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
        var Percentage = (function (_super) {
            __extends(Percentage, _super);
            function Percentage(value) {
                return _super.call(this, value, "%") || this;
            }
            return Percentage;
        }(Dimension));
        Attribute.Percentage = Percentage;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var List = (function (_super) {
            __extends(List, _super);
            function List() {
                return _super !== null && _super.apply(this, arguments) || this;
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
                var toks = attr.split(".");
                if (toks.length === 2 && toks[1] === this.type) {
                    var css = element.getAttribute(toks[0]);
                    if (css) {
                        var idx = css.indexOf(this.type);
                        if (idx > -1) {
                            return this.parse(css.substring(idx, css.indexOf(")") + 1));
                        }
                    }
                }
                return this.parse(null);
            };
            Transform.prototype.set = function (element, attr, override) {
                var str = String((override === undefined) ? this : override);
                var toks = attr.split(".");
                if (toks.length === 2 && toks[1] === this.type) {
                    var css = element.getAttribute(toks[0]);
                    if (css) {
                        var start = css.indexOf(this.type);
                        var empty = (css === "none") || (css.length === 0);
                        if (start > -1 && !empty) {
                            element.setAttribute(toks[0], "" + css.substr(0, start) + str + css.substr(css.indexOf(")") + 2));
                        }
                        else {
                            element.setAttribute(toks[0], empty ? str : css + "\t" + str);
                        }
                    }
                    else {
                        element.setAttribute(toks[0], str);
                    }
                }
                else {
                    element.setAttribute(attr, str);
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
        ;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Attribute;
    (function (Attribute) {
        var Box = (function () {
            function Box(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            Box.prototype.toString = function () {
                return this.x + " " + this.y + " " + this.width + " " + this.height;
            };
            Box.prototype.parse = function (css) {
                if (css !== null) {
                    var toks = css.split(" ");
                    return new Box(parseFloat(toks[0]), parseFloat(toks[1]), parseFloat(toks[2]), parseFloat(toks[3]));
                }
                else {
                    return new Box(0, 0, 0, 0);
                }
            };
            Box.prototype.get = function (element, attr) {
                var toks = attr.split(":");
                if (toks.length === 4) {
                    var cssX = element.getAttribute(toks[0]);
                    var cssY = element.getAttribute(toks[1]);
                    var cssWidth = element.getAttribute(toks[2]);
                    var cssHeight = element.getAttribute(toks[3]);
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
            };
            Box.prototype.set = function (element, attr, override) {
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
            Box.prototype.interpolate = function (from, t) {
                return new Box(Attribute._LengthInterpolate(from.x, this.x, t), Attribute._LengthInterpolate(from.y, this.y, t), Attribute._LengthInterpolate(from.width, this.width, t), Attribute._LengthInterpolate(from.height, this.height, t));
            };
            return Box;
        }());
        Attribute.Box = Box;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
"use strict";
"use strict";
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
                this.defs = new SavageDOM.Element(this, defsElements.item(0));
            }
            else {
                this.defs = new SavageDOM.Element(this, "defs");
            }
        }
        Paper.prototype.addDef = function (def) {
            this.defs.add(def);
        };
        return Paper;
    }());
    SavageDOM.Paper = Paper;
})(SavageDOM || (SavageDOM = {}));
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var randomId = function () { return Math.random().toString(36).substring(2); };
    var Element = (function () {
        function Element(paper, el, attrs, _id) {
            if (_id === void 0) { _id = randomId(); }
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
                var id = this._node.getAttribute("id");
                if (id !== null) {
                    this._id = id;
                }
                else {
                    this._node.setAttribute("id", this._id);
                }
            }
            this._style = window.getComputedStyle(this._node);
        }
        Object.defineProperty(Element.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Element.prototype.toString = function () {
            return "url(#" + this._id + ")";
        };
        Element.prototype.setAttribute = function (name, val) {
            if (SavageDOM.Attribute.isAttribute(val)) {
                val.set(this, name);
            }
            else {
                this._node.setAttribute(name, String(val));
            }
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
            return this._node.getAttribute(name) || this._style.getPropertyValue(name);
        };
        Element.prototype.copyStyleFrom = function (el, includeExclude, defaultInclude) {
            if (defaultInclude === void 0) { defaultInclude = true; }
            var style = {};
            var attrs = el._node.attributes;
            if (includeExclude) {
                for (var i = 0; i < attrs.length; ++i) {
                    var attr = attrs.item(i).name;
                    if (includeExclude[attr] === true || defaultInclude) {
                        style[attr] = el._style.getPropertyValue(attr);
                    }
                }
            }
            else {
                for (var i = 0; i < attrs.length; ++i) {
                    var attr = attrs.item(i).name;
                    style[attr] = el._style.getPropertyValue(attr);
                }
            }
            this.setAttributes(style);
        };
        Element.prototype.addEventListener = function (event, listener) {
            this._node.addEventListener(event, listener.bind(this));
        };
        Object.defineProperty(Element.prototype, "boundingBox", {
            get: function () {
                var rect = this._node.getBoundingClientRect();
                return new SavageDOM.Attribute.Box(rect.left, rect.top, rect.width, rect.height);
            },
            enumerable: true,
            configurable: true
        });
        Element.prototype.add = function (el) {
            this._node.appendChild(el._node);
        };
        Element.prototype.getChildren = function () {
            var children = this._node.childNodes;
            var elements = [];
            for (var i = 0; i < children.length; ++i) {
                elements.push(new Element(this.paper, children.item(i)));
            }
            return elements;
        };
        Element.prototype.clone = function (deep, id) {
            if (deep === void 0) { deep = true; }
            if (id === void 0) { id = randomId(); }
            var copy = new Element(this.paper, this._node.cloneNode(deep));
            copy._id = id;
            copy._node.setAttribute("id", copy._id);
            return copy;
        };
        Element.prototype.cloneNode = function (deep) {
            if (deep === void 0) { deep = true; }
            var clone = this._node.cloneNode(deep);
            clone.setAttribute("id", randomId());
            return clone;
        };
        return Element;
    }());
    SavageDOM.Element = Element;
})(SavageDOM || (SavageDOM = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmNvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3IudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLW1hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvZGltZW5zaW9uLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9saXN0LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL251bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9ib3gudHMiLCIuLi9zcmMvZXZlbnRzLnRzIiwiLi4vc3JjL3BhcGVyLnRzIiwiLi4vc3JjL2VsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBVSxTQUFTLENBTWxCO0FBTkQsV0FBVSxTQUFTO0lBRUosZUFBSyxHQUFHLDRCQUE0QixDQUFDO0lBRXJDLGVBQUssR0FBRyw4QkFBOEIsQ0FBQztBQUV0RCxDQUFDLEVBTlMsU0FBUyxLQUFULFNBQVMsUUFNbEI7O0FDTkQsSUFBVSxTQUFTLENBdUJsQjtBQXZCRCxXQUFVLFNBQVM7SUFFakIsSUFBTSxLQUFLLEdBQUcsVUFBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsSUFBYSxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDO0lBYTdFLHFCQUFtRCxPQUFzQyxFQUFFLElBQVk7UUFDbkcsTUFBTSxDQUFDLElB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QUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2xELElBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMs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
return SavageDOM;

}));
