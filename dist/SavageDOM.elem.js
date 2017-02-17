/*
 * SavageDOM 1.0.0-alpha.7 (https://github.com/molisani/SavageDOM) 
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
"use strict";
var SavageDOM;
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var AbstractRenderable = (function (_super) {
            __extends(AbstractRenderable, _super);
            function AbstractRenderable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AbstractRenderable;
        }(SavageDOM.Element));
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
            var AbstractShape = (function (_super) {
                __extends(AbstractShape, _super);
                function AbstractShape() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return AbstractShape;
            }(Elements.AbstractRenderable));
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
"use strict";
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
"use strict";
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
"use strict";
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
        els.forEach(function (child) { return el.add(child); });
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
    SavageDOM.Paper.prototype.image = function (href, onload, attrs) {
        var img = new SavageDOM.Elements.Renderable.Image(this, attrs);
        if (onload !== undefined) {
            img.addEventListener("load", function () {
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
        var TextContent = (function () {
            function TextContent(str) {
                if (typeof str === "string") {
                    this._str = str;
                }
                else {
                    this._cb = str;
                }
            }
            TextContent.escapeHtml = function (html) {
                return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            };
            TextContent.prototype.parse = function (css) {
                return new TextContent(css || "");
            };
            TextContent.prototype.get = function (element, attr) {
                return this.parse(element._node.textContent);
            };
            TextContent.prototype.set = function (element, attr, override) {
                var str = this._str;
                if (!str) {
                    str = this._cb();
                }
                element._node.textContent = TextContent.escapeHtml(str);
            };
            TextContent.prototype.interpolate = function (from, t) {
                return t < 0.5 ? from : this;
            };
            return TextContent;
        }());
        Attribute.TextContent = TextContent;
    })(Attribute = SavageDOM.Attribute || (SavageDOM.Attribute = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    var Elements;
    (function (Elements) {
        var Renderable;
        (function (Renderable) {
            var TextSpan = (function (_super) {
                __extends(TextSpan, _super);
                function TextSpan(paper, attrs) {
                    return _super.call(this, paper, "tspan", attrs) || this;
                }
                Object.defineProperty(TextSpan.prototype, "computedLength", {
                    get: function () {
                        return this._node.getComputedTextLength();
                    },
                    enumerable: true,
                    configurable: true
                });
                return TextSpan;
            }(Elements.AbstractRenderable));
            Renderable.TextSpan = TextSpan;
            var Text = (function (_super) {
                __extends(Text, _super);
                function Text(paper, attrs) {
                    return _super.call(this, paper, "text", attrs) || this;
                }
                Text.prototype.addSpan = function (content, lineHeight, update) {
                    if (update === void 0) { update = true; }
                    var span = new TextSpan(this.paper);
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
                };
                Object.defineProperty(Text.prototype, "computedLength", {
                    get: function () {
                        return this._node.getComputedTextLength();
                    },
                    enumerable: true,
                    configurable: true
                });
                return Text;
            }(Elements.AbstractRenderable));
            Renderable.Text = Text;
            var MultilineText = (function (_super) {
                __extends(MultilineText, _super);
                function MultilineText(paper, text, width, attrs) {
                    var _this = _super.call(this, paper, attrs) || this;
                    var temp = new SavageDOM.Elements.Renderable.Text(paper);
                    temp.setAttribute("opacity", 0);
                    var span = new SavageDOM.Elements.Renderable.TextSpan(paper);
                    temp.add(span);
                    if (attrs) {
                        span.setAttributes(attrs);
                    }
                    var spaceWidth = temp.computedLength;
                    var lines = [""];
                    text.split(" ").forEach(function (word, i) {
                        var line = lines[lines.length - 1];
                        var newLine = (line.length === 0) ? word : line + " " + word;
                        var lineContent = new SavageDOM.Attribute.TextContent(newLine);
                        span.setAttribute("textContent", lineContent);
                        if (span.computedLength > width && line.length > 0) {
                            lines.push(word);
                        }
                        else {
                            lines[lines.length - 1] = newLine;
                        }
                    });
                    lines.forEach(function (line) {
                        if (line.length > 0) {
                            _this.addSpan(new SavageDOM.Attribute.TextContent(line), 1);
                        }
                    });
                    return _this;
                }
                return MultilineText;
            }(Text));
            Renderable.MultilineText = MultilineText;
        })(Renderable = Elements.Renderable || (Elements.Renderable = {}));
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.text = function (content, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var t = new SavageDOM.Elements.Renderable.Text(this, { x: x, y: y });
        content.forEach(function (c) { return t.addSpan(c); });
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
        var AbstractNonRenderable = (function (_super) {
            __extends(AbstractNonRenderable, _super);
            function AbstractNonRenderable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AbstractNonRenderable;
        }(SavageDOM.Element));
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
            var AbstractPaintServer = (function (_super) {
                __extends(AbstractPaintServer, _super);
                function AbstractPaintServer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return AbstractPaintServer;
            }(Elements.AbstractNonRenderable));
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
                var AbstractGradient = (function (_super) {
                    __extends(AbstractGradient, _super);
                    function AbstractGradient(paper, name, stops, attrs) {
                        var _this = _super.call(this, paper, name, attrs) || this;
                        _this.paper.addDef(_this);
                        var stopArr = [];
                        Object.keys(stops).forEach(function (offset) {
                            stopArr.push(new SavageDOM.Elements.NonRenderable.PaintServer.Gradient.Stop(paper, Number(offset), stops[offset]));
                        });
                        stopArr.sort(function (a, b) {
                            return a.offset - b.offset;
                        });
                        stopArr.forEach(function (s) { return _this.add(s); });
                        return _this;
                    }
                    return AbstractGradient;
                }(NonRenderable.AbstractPaintServer));
                PaintServer.AbstractGradient = AbstractGradient;
                var Gradient;
                (function (Gradient) {
                    var Stop = (function (_super) {
                        __extends(Stop, _super);
                        function Stop(paper, offset, color) {
                            var _this = _super.call(this, paper, "stop", { offset: new SavageDOM.Attribute.Dimension(offset * 100, "%"), "stop-color": color }) || this;
                            _this.offset = offset;
                            return _this;
                        }
                        return Stop;
                    }(SavageDOM.Element));
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
                    var Linear = (function (_super) {
                        __extends(Linear, _super);
                        function Linear(paper, stops, attrs) {
                            return _super.call(this, paper, "linearGradient", stops, attrs) || this;
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
                    var Radial = (function (_super) {
                        __extends(Radial, _super);
                        function Radial(paper, stops, attrs) {
                            return _super.call(this, paper, "radialGradient", stops, attrs) || this;
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
"use strict";
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
                        if (h === void 0) { h = (w instanceof SVGPatternElement) ? 0 : w; }
                        if (x === void 0) { x = 0; }
                        if (y === void 0) { y = 0; }
                        var _this = _super.call(this, paper, (w instanceof SVGPatternElement) ? w : "pattern") || this;
                        _this.paper = paper;
                        _this.paper.addDef(_this);
                        if (!(w instanceof SVGPatternElement)) {
                            _this.setAttribute("width", w);
                            _this.setAttribute("height", h);
                            _this.setAttribute("x", x);
                            _this.setAttribute("y", y);
                            if (view) {
                                _this.setAttribute("viewBox", view);
                            }
                            else {
                                _this.setAttribute("patternUnits", "userSpaceOnUse");
                            }
                        }
                        return _this;
                    }
                    Pattern.prototype.clone = function (deep) {
                        if (deep === void 0) { deep = true; }
                        return new Pattern(this.paper, _super.prototype.cloneNode.call(this, deep));
                    };
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
    SavageDOM.Elements.Renderable.Group.prototype.toPattern = function (w, h, x, y, view) {
        var pattern = new SavageDOM.Elements.NonRenderable.PaintServer.Pattern(this.paper, w, h, x, y, view);
        this.getChildren().forEach(function (child) { return pattern.add(child); });
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
"use strict";
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
        var Filter = (function (_super) {
            __extends(Filter, _super);
            function Filter(paper) {
                var _this = _super.call(this, paper, "filter") || this;
                _this.paper = paper;
                _this.paper.defs.add(_this);
                return _this;
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
                componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "R", r));
                componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "G", g));
                componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "B", b));
                if (a !== undefined) {
                    componentTransfer.add(new Elements.FilterPrimitive.TransferFunction(this, "A", a));
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
                var _this = this;
                var fe = new Elements.FilterPrimitive.Merge(this);
                inputs.forEach(function (input) {
                    var mergeNode = new SavageDOM.Element(_this.paper, "feMergeNode", { in: input });
                    fe.add(mergeNode);
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
                this.add(fe);
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
        }(SavageDOM.Element));
        Elements.Filter = Filter;
    })(Elements = SavageDOM.Elements || (SavageDOM.Elements = {}));
})(SavageDOM || (SavageDOM = {}));
(function (SavageDOM) {
    SavageDOM.Paper.prototype.filter = function () {
        return new SavageDOM.Elements.Filter(this);
    };
})(SavageDOM || (SavageDOM = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmVsZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3IudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLW1hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvZGltZW5zaW9uLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9saXN0LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL251bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9ib3gudHMiLCIuLi9zcmMvZXZlbnRzLnRzIiwiLi4vc3JjL3BhcGVyLnRzIiwiLi4vc3JjL2VsZW1lbnQudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvY2lyY2xlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvZWxsaXBzZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL2xpbmUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9wYXRoLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcG9seWdvbi50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3BvbHlsaW5lLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcmVjdC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL2dyb3VwLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvaW1hZ2UudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS90ZXh0LnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvZ3JhZGllbnQudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50L2xpbmVhci50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvZ3JhZGllbnQvcmFkaWFsLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9wYXR0ZXJuLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL21hcmtlci50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9tYXNrLnRzIiwiLi4vc3JjL2VsZW1lbnRzL2ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFVLFNBQVMsQ0FNbEI7QUFORCxXQUFVLFNBQVM7SUFFSixlQUFLLEdBQUcsNEJBQTRCLENBQUM7SUFFckMsZUFBSyxHQUFHLDhCQUE4QixDQUFDO0FBRXRELENBQUMsRUFOUyxTQUFTLEtBQVQsU0FBUyxRQU1sQjs7QUNORCxJQUFVLFNBQVMsQ0F1QmxCO0FBdkJELFdBQVUsU0FBUztJQUVqQixJQUFNLEtBQUssR0FBRyxVQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxJQUFhLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUM7SUFhN0UscUJB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
return SavageDOM;

}));
