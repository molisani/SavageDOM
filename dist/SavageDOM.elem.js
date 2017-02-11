/*
 * SavageDOM 1.0.0-alpha.5 (https://github.com/molisani/SavageDOM) 
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
        Element.prototype.clone = function (deep) {
            if (deep === void 0) { deep = true; }
            var copy = new Element(this.paper, this._node.cloneNode(deep));
            copy._id = randomId();
            copy._node.setAttribute("id", copy._id);
            return copy;
        };
        Element.prototype.addEventListener = function (event, listener) {
            this._node.addEventListener(event, listener.bind(this));
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
    SavageDOM.Paper.prototype.image = function (attrs) {
        return new SavageDOM.Elements.Renderable.Image(this, attrs);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmVsZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3IudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLW1hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvZGltZW5zaW9uLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9saXN0LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL251bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9ib3gudHMiLCIuLi9zcmMvcGFwZXIudHMiLCIuLi9zcmMvZWxlbWVudC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9jaXJjbGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9lbGxpcHNlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvbGluZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3BhdGgudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9wb2x5Z29uLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcG9seWxpbmUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9yZWN0LnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvZ3JvdXAudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9pbWFnZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3RleHQudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9ncmFkaWVudC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvZ3JhZGllbnQvbGluZWFyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9ncmFkaWVudC9yYWRpYWwudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL3BhdHRlcm4udHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvbWFya2VyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL21hc2sudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQVUsU0FBUyxDQU1sQjtBQU5ELFdBQVUsU0FBUztJQUVKLGVBQUssR0FBRyw0QkFBNEIsQ0FBQztJQUVyQyxlQUFLLEdBQUcsOEJBQThCLENBQUM7QUFFdEQsQ0FBQyxFQU5TLFNBQVMsS0FBVCxTQUFTLFFBTWxCOztBQ05ELElBQVUsU0FBUyxDQXVCbEI7QUF2QkQsV0FBVSxTQUFTO0lBRWpCLElBQU0sS0FBSyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLElBQWEsT0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztJQWE3RSxxQkFBbUQsT0FBaUMsRUFBRSxJQUFZ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QztnQkFDVixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxJQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxD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
return SavageDOM;

}));
