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
"use strict";
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
"use strict";
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
        els.forEach(function (child) { return el.node.appendChild(child.node); });
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
                    function AbstractGradient() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return AbstractGradient;
                }(NonRenderable.AbstractPaintServer));
                PaintServer.AbstractGradient = AbstractGradient;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmVsZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3IudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLW1hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvZGltZW5zaW9uLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9saXN0LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL251bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS92aWV3LWJveC50cyIsIi4uL3NyYy9wYXBlci50cyIsIi4uL3NyYy9lbGVtZW50LnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL2NpcmNsZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL2VsbGlwc2UudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9saW5lLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcGF0aC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3BvbHlnb24udHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9wb2x5bGluZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3JlY3QudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9ncm91cC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL2ltYWdlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvdGV4dC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50LnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9ncmFkaWVudC9saW5lYXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL2dyYWRpZW50L3JhZGlhbC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvcGF0dGVybi50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9tYXJrZXIudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvbWFzay50cyIsIi4uL3NyYy9lbGVtZW50cy9maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBVSxTQUFTLENBTWxCO0FBTkQsV0FBVSxTQUFTO0lBRUosZUFBSyxHQUFHLDRCQUE0QixDQUFDO0lBRXJDLGVBQUssR0FBRyw4QkFBOEIsQ0FBQztBQUV0RCxDQUFDLEVBTlMsU0FBUyxLQUFULFNBQVMsUUFNbEI7O0FDTkQsSUFBVSxTQUFTLENBZWxCO0FBZkQsV0FBVSxTQUFTO0lBRWpCLElBQU0sS0FBSyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLElBQWEsT0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztBQWEvRSxDQUFDLEVBZlMsU0FBUyxLQUFU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SSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDO29CQUNELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQztnQkFDRCxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0QseUJBQVcsR0FBWCxVQUFZLElBQWUsRUFBRSxDQUFTLEVBQUUsSUFBdUI7Z0JBQzdELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3RCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dDQUM1QixFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQ0FDWixFQUFFLElBQUksR0FBRyxDQUFDO2dDQUNaLENBQUM7Z0NBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ04sRUFBRSxJQUFJLEdBQUcsQ0FBQztnQ0FDWixDQUFDOzRCQUNILENBQUM7d0JBQ0gsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQztnQ0FDM0IsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ1osRUFBRSxJQUFJLEdBQUcsQ0FBQztnQ0FDWixDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNOLEVBQUUsSUFBSSxHQUFHLENBQUM7Z0NBQ1osQ0FBQzs0QkFDSCxDQUFDO3dCQUNILENBQUM7d0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUM7NEJBQzdCLEVBQUUsSUFBSSxHQUFHLENBQUM7d0JBQ1osQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssc0JBQXNCLENBQUMsQ0FBQyxDQUFDOzRCQUNwQyxFQUFFLElBQUksR0FBRyxDQUFDO3dCQUNaLENBQUM7d0JBQ0QsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQUEsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZILENBQUM7Z0JBQ0gsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0MsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNqRCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFDSCxVQUFDO1FBQUQsQ0FBQyxBQTlHRCxDQUFrQixTQUFTLEdBOEcxQjtRQUVEO1lBUUUsZUFBWSxNQUErQixFQUFFLENBQWEsRUFBRSxDQUFhLEVBQUUsQ0FBYSxFQUFFLENBQWE7Z0JBQTFELGtCQUFBLEVBQUEsS0FBYTtnQkFBRSxrQkFBQSxFQUFBLEtBQWE7Z0JBQUUsa0JBQUEsRUFBQSxLQUFhO2dCQUFFLGtCQUFBLEVBQUEsS0FBYTtnQkFOaEcsU0FBSSxHQUFzQixLQUFLLENBQUMsWUFBWSxDQUFDO2dCQU9sRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDVixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNmLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQ3hDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQ3hDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQzFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs0QkFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQ0FDcEMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQ0FDcEMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDdEMsQ0FBQzt3QkFDSCxDQUFDO3dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztZQUNELHdCQUFRLEdBQVI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsQ0FBQztZQUNELHFCQUFLLEdBQUwsVUFBTSxHQUFrQjtnQkFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztZQUNILENBQUM7WUFDRCxtQkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZO2dCQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELG1CQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVksRUFBRSxRQUFnQjtnQkFDbkUsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0gsQ0FBQztZQUNELDJCQUFXLEdBQVgsVUFBWSxJQUFXLEVBQUUsQ0FBUztnQkFDaEMsSUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkIsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7WUFDSCxZQUFDO1FBQUQsQ0FBQyxBQWpFRDtRQUNTLGtCQUFZLEdBQXNCLEtBQUssQ0FBQztRQURwQyxlQUFLLFFBaUVqQixDQUFBO0lBRUgsQ0FBQyxFQXRSbUIsU0FBUyxHQUFULG1CQUFTLEtBQVQsbUJBQVMsUUFzUjVCO0FBQUQsQ0FBQyxFQXRSUyxTQUFTLEtBQVQsU0FBUyxRQXNSbEI7O0FDdFJELElBQVUsU0FBUyxDQXNHbEI7QUF0R0QsV0FBVSxTQUFTO0lBQUMsSUFBQSxTQUFTLENBc0c1QjtJQXRHbUIsV0FBQSxTQUFTO1FBTzNCLElBQWlCLFdBQVcsQ0E2RjNCO1FBN0ZELFdBQWlCLFdBQVc7WUFFMUI7Z0JBR0UsYUFBWSxNQUEwRztvQkFBMUcsdUJBQUEsRUFBQSxVQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFGdEgsU0FBSSxHQUFhLFFBQVEsQ0FBQztvQkFDMUIsUUFBRyxHQUFhLEVBQUUsQ0FBQztvQkFFakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBLEtBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQSxDQUFDLE1BQU0sV0FBSSxNQUFNLENBQUMsQ0FBQzs7Z0JBQ3hDLENBQUM7Z0JBQ0QsbUJBQUssR0FBTCxVQUFNLEdBQWtCO29CQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDckIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELGlCQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVk7b0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxpQkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZLEVBQUUsUUFBYztvQkFDakUsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNsRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5QyxDQUFDO2dCQUNILENBQUM7Z0JBQ0QseUJBQVcsR0FBWCxVQUFZLElBQVksRUFBRSxDQUFTO29CQUNqQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDLElBQUssT0FBQSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxDQUFDO2dCQUNILFVBQUM7WUFBRCxDQUFDLEFBMUJELElBMEJDO1lBMUJZLGVBQUcsTUEwQmYsQ0FBQTtZQUVEO2dCQUVFLGtCQUFtQixLQUFpQjtvQkFBakIsc0JBQUEsRUFBQSxTQUFpQjtvQkFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtvQkFEcEMsU0FBSSxHQUFlLFVBQVUsQ0FBQztnQkFDUyxDQUFDO2dCQUN4QywyQkFBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELHdCQUFLLEdBQUwsVUFBTSxHQUFrQjtvQkFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELHNCQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVk7b0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxzQkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZLEVBQUUsUUFBbUI7b0JBQ3RFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDbEQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELDhCQUFXLEdBQVgsVUFBWSxJQUFjLEVBQUUsQ0FBUztvQkFDbkMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUNILGVBQUM7WUFBRCxDQUFDLEFBMUJELElBMEJDO1lBMUJZLG9CQUFRLFdBMEJwQixDQUFBO1lBRUQ7Z0JBRUUsbUJBQW1CLEtBQWlCO29CQUFqQixzQkFBQSxFQUFBLFNBQWlCO29CQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO29CQURwQyxTQUFJLEdBQWdCLFdBQVcsQ0FBQztnQkFDTyxDQUFDO2dCQUN4Qyw0QkFBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELHlCQUFLLEdBQUwsVUFBTSxHQUFrQjtvQkFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELHVCQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVk7b0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCx1QkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZLEVBQUUsUUFBb0I7b0JBQ3ZFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDbEQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELCtCQUFXLEdBQVgsVUFBWSxJQUFlLEVBQUUsQ0FBUztvQkFDcEMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0FBQyxBQTFCRCxJQTBCQztZQTFCWSxxQkFBUyxZQTBCckIsQ0FBQTtZQUVEO2dCQUFBO29CQUNFLFNBQUksR0FBdUIsa0JBQWtCLENBQUM7Z0JBSWhELENBQUM7Z0JBSEMsOENBQVEsR0FBUjtvQkFDRSxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBQ0gsa0NBQUM7WUFBRCxDQUFDLEFBTEQsSUFLQztZQUxZLHVDQUEyQiw4QkFLdkMsQ0FBQTtRQUVILENBQUMsRUE3RmdCLFdBQVcsR0FBWCxxQkFBVyxLQUFYLHFCQUFXLFFBNkYzQjtJQUVILENBQUMsRUF0R21CLFNBQVMsR0FBVCxtQkFBUyxLQUFULG1CQUFTLFFBc0c1QjtBQUFELENBQUMsRUF0R1MsU0FBUyxLQUFULFNBQVMsUUFzR2xCOztBQ3RHRCxJQUFVLFNBQVMsQ0E2RGxCO0FBN0RELFdBQVUsU0FBUztJQUFDLElBQUEsU0FBUyxDQTZENUI7SUE3RG1CLFdBQUEsU0FBUztRQUszQjtZQWFFLG1CQUFtQixLQUFhLEVBQVMsSUFBVTtnQkFBaEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtnQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO1lBQUcsQ0FBQztZQUN2RCw0QkFBUSxHQUFSO2dCQUNFLE1BQU0sQ0FBQyxLQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQU0sQ0FBQztZQUNyQyxDQUFDO1lBQ0QseUJBQUssR0FBTCxVQUFNLEdBQWtCO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO29CQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDZixJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxJQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBYyxDQUFDLENBQUM7d0JBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQy9DLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFFLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sTUFBTSxDQUFDLElBQUksU0FBUyxDQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsQ0FBQztvQkFDSCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6RCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNELHVCQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVk7Z0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQ0QsdUJBQUcsR0FBSCxVQUFJLE9BQWlDLEVBQUUsSUFBWSxFQUFFLFFBQTBCO2dCQUM3RSxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7WUFDSCxDQUFDO1lBQ0QsK0JBQVcsR0FBWCxVQUFZLElBQXFCLEVBQUUsQ0FBUztnQkFDMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBYyxDQUFDLENBQUM7b0JBQ3BELElBQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFjLENBQUMsQ0FBQztvQkFDMUQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFPLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUYsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBTyxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFFLENBQUM7WUFDSCxnQkFBQztRQUFELENBQUMsQUF0REQ7UUFDaUIsaUJBQU8sR0FBK0I7WUFDbkQsRUFBRSxFQUFFLENBQUM7WUFDTCxFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUNaLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUNiLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNULEVBQUUsRUFBRSxDQUFDO1lBQ0wsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDWixHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQztRQVpTLG1CQUFTLFlBc0RyQixDQUFBO0lBRUgsQ0FBQyxFQTdEbUIsU0FBUyxHQUFULG1CQUFTLEtBQVQsbUJBQVMsUUE2RDVCO0FBQUQsQ0FBQyxFQTdEUyxTQUFTLEtBQVQsU0FBUyxRQTZEbEI7O0FDN0RELElBQVUsU0FBUyxDQW9DbEI7QUFwQ0QsV0FBVSxTQUFTO0lBQUMsSUFBQSxTQUFTLENBb0M1QjtJQXBDbUIsV0FBQSxTQUFTO1FBRTNCO1lBQWtELHdCQUFRO1lBQTFEOztZQWdDQSxDQUFDO1lBL0JDLHVCQUFRLEdBQVI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNELG9CQUFLLEdBQUwsVUFBTSxHQUFrQjtnQkFBeEIsaUJBVUM7Z0JBVEMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQU0sTUFBSSxHQUFHLElBQUksSUFBSSxFQUFLLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQzNCLE1BQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsTUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLElBQUksSUFBSSxFQUFLLENBQUM7Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDO1lBQ0Qsa0JBQUcsR0FBSCxVQUFJLE9BQWlDLEVBQUUsSUFBWTtnQkFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxrQkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZLEVBQUUsUUFBa0I7Z0JBQ3JFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztZQUNILENBQUM7WUFDRCwwQkFBVyxHQUFYLFVBQVksSUFBYSxFQUFFLENBQVM7Z0JBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFLLENBQUM7Z0JBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFDSCxXQUFDO1FBQUQsQ0FBQyxBQWhDRCxDQUFrRCxLQUFLLEdBZ0N0RDtRQWhDWSxjQUFJLE9BZ0NoQixDQUFBO0lBRUgsQ0FBQyxFQXBDbUIsU0FBUyxHQUFULG1CQUFTLEtBQVQsbUJBQVMsUUFvQzVCO0FBQUQsQ0FBQyxFQXBDUyxTQUFTLEtBQVQsU0FBUyxRQW9DbEI7O0FDcENELElBQVUsU0FBUyxDQWdDbEI7QUFoQ0QsV0FBVSxTQUFTO0lBQUMsSUFBQSxTQUFTLENBZ0M1QjtJQWhDbUIsV0FBQSxTQUFTO1FBRTNCO1lBRUUsZ0JBQVksTUFBa0I7Z0JBRDlCLFFBQUcsR0FBYSxFQUFFLENBQUM7Z0JBRWpCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQSxLQUFBLElBQUksQ0FBQyxHQUFHLENBQUEsQ0FBQyxNQUFNLFdBQUksTUFBTSxDQUFDLENBQUM7O1lBQ3hDLENBQUM7WUFDRCx5QkFBUSxHQUFSO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQ0Qsc0JBQUssR0FBTCxVQUFNLEdBQWtCO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUM7WUFDRCxvQkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZO2dCQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELG9CQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVksRUFBRSxRQUFpQjtnQkFDcEUsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0gsQ0FBQztZQUNELDRCQUFXLEdBQVgsVUFBWSxJQUFZLEVBQUUsQ0FBUztnQkFDakMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLE9BQUEsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQ0gsYUFBQztRQUFELENBQUMsQUE1QkQsSUE0QkM7UUE1QlksZ0JBQU0sU0E0QmxCLENBQUE7SUFFSCxDQUFDLEVBaENtQixTQUFTLEdBQVQsbUJBQVMsS0FBVCxtQkFBUyxRQWdDNUI7QUFBRCxDQUFDLEVBaENTLFNBQVMsS0FBVCxTQUFTLFFBZ0NsQjs7QUNoQ0QsSUFBVSxTQUFTLENBNkJsQjtBQTdCRCxXQUFVLFNBQVM7SUFBQyxJQUFBLFNBQVMsQ0E2QjVCO0lBN0JtQixXQUFBLFNBQVM7UUFFM0I7WUFDRSxnQkFBbUIsQ0FBYTtnQkFBYixrQkFBQSxFQUFBLEtBQWE7Z0JBQWIsTUFBQyxHQUFELENBQUMsQ0FBWTtZQUFHLENBQUM7WUFDcEMseUJBQVEsR0FBUjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzQixDQUFDO1lBQ0Qsc0JBQUssR0FBTCxVQUFNLEdBQWtCO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBQ0Qsb0JBQUcsR0FBSCxVQUFJLE9BQWlDLEVBQUUsSUFBWTtnQkFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxvQkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZLEVBQUUsUUFBaUI7Z0JBQ3BFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztZQUNILENBQUM7WUFDRCw0QkFBVyxHQUFYLFVBQVksSUFBWSxFQUFFLENBQVM7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUNILGFBQUM7UUFBRCxDQUFDLEFBekJELElBeUJDO1FBekJZLGdCQUFNLFNBeUJsQixDQUFBO0lBRUgsQ0FBQyxFQTdCbUIsU0FBUyxHQUFULG1CQUFTLEtBQVQsbUJBQVMsUUE2QjVCO0FBQUQsQ0FBQyxFQTdCUyxTQUFTLEtBQVQsU0FBUyxRQTZCbEI7O0FDN0JELElBQVUsU0FBUyxDQTBDbEI7QUExQ0QsV0FBVSxTQUFTO0lBQUMsSUFBQSxTQUFTLENBMEM1QjtJQTFDbUIsV0FBQSxTQUFTO1FBRTNCO1lBQ0UsOEJBQW1CLENBQVMsRUFBUyxDQUFVO2dCQUE1QixNQUFDLEdBQUQsQ0FBQyxDQUFRO2dCQUFTLE1BQUMsR0FBRCxDQUFDLENBQVM7WUFBRyxDQUFDO1lBQ25ELHVDQUFRLEdBQVI7Z0JBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsR0FBTSxJQUFJLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxDQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1RSxDQUFDO1lBQ0Qsb0NBQUssR0FBTCxVQUFNLEdBQWtCO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLENBQUM7Z0JBQ0gsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQztZQUNILENBQUM7WUFDRCxrQ0FBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZO2dCQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELGtDQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVksRUFBRSxRQUErQjtnQkFDbEYsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0gsQ0FBQztZQUNELDBDQUFXLEdBQVgsVUFBWSxJQUEwQixFQUFFLENBQVM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDakQsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQztZQUNILDJCQUFDO1FBQUQsQ0FBQyxBQXRDRCxJQXNDQztRQXRDWSw4QkFBb0IsdUJBc0NoQyxDQUFBO0lBRUgsQ0FBQyxFQTFDbUIsU0FBUyxHQUFULG1CQUFTLEtBQVQsbUJBQVMsUUEwQzVCO0FBQUQsQ0FBQyxFQTFDUyxTQUFTLEtBQVQsU0FBUyxRQTBDbEI7O0FDMUNELElBQVUsU0FBUyxDQW9EbEI7QUFwREQsV0FBVSxTQUFTO0lBQUMsSUFBQSxTQUFTLENBb0Q1QjtJQXBEbUIsV0FBQSxTQUFTO1FBRTNCO1lBQ0UsZUFBbUIsQ0FBUyxFQUFTLENBQVM7Z0JBQTNCLE1BQUMsR0FBRCxDQUFDLENBQVE7Z0JBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUFHLENBQUM7WUFDbEQsd0JBQVEsR0FBUjtnQkFDRSxNQUFNLENBQUksSUFBSSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsQ0FBRyxDQUFDO1lBQy9CLENBQUM7WUFDRCxxQkFBSyxHQUFMLFVBQU0sR0FBa0I7Z0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBQSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQztZQUNELG1CQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVk7Z0JBQ2pELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQUEsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQUEsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztZQUNILENBQUM7WUFDRCxtQkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZLEVBQUUsUUFBZ0I7Z0JBQ25FLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt3QkFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt3QkFDakQsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNsRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5QyxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0QsMkJBQVcsR0FBWCxVQUFZLElBQVcsRUFBRSxDQUFTO2dCQUNoQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRyxDQUFDO1lBQ0gsWUFBQztRQUFELENBQUMsQUFoREQsSUFnREM7UUFoRFksZUFBSyxRQWdEakIsQ0FBQTtJQUVILENBQUMsRUFwRG1CLFNBQVMsR0FBVCxtQkFBUyxLQUFULG1CQUFTLFFBb0Q1QjtBQUFELENBQUMsRUFwRFMsU0FBUyxLQUFULFNBQVMsUUFvRGxCOztBQ3BERCxJQUFVLFNBQVMsQ0FvQmxCO0FBcEJELFdBQVUsU0FBUztJQUFDLElBQUEsU0FBUyxDQW9CNUI7SUFwQm1CLFdBQUEsU0FBUztRQUUzQjtZQUlFLDZCQUFtQixDQUF5QixFQUFTLENBQXlCLEVBQVMsV0FBOEI7Z0JBQWxHLE1BQUMsR0FBRCxDQUFDLENBQXdCO2dCQUFTLE1BQUMsR0FBRCxDQUFDLENBQXdCO2dCQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtZQUFHLENBQUM7WUFDekgsc0NBQVEsR0FBUjtnQkFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELElBQUksR0FBRyxHQUFHLE1BQUksSUFBSSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsQ0FBRyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDaEIsQ0FBQztZQUNILENBQUM7WUFDSCwwQkFBQztRQUFELENBQUMsQUFoQkQsSUFnQkM7UUFoQlksNkJBQW1CLHNCQWdCL0IsQ0FBQTtJQUVILENBQUMsRUFwQm1CLFNBQVMsR0FBVCxtQkFBUyxLQUFULG1CQUFTLFFBb0I1QjtBQUFELENBQUMsRUFwQlMsU0FBUyxLQUFULFNBQVMsUUFvQmxCOztBQ3BCRCxJQUFVLFNBQVMsQ0EwS2xCO0FBMUtELFdBQVUsU0FBUztJQUFDLElBQUEsU0FBUyxDQTBLNUI7SUExS21CLFdBQUEsU0FBUztRQUUzQjtZQUNFLG1CQUFtQixJQUFxRTtnQkFBckUsU0FBSSxHQUFKLElBQUksQ0FBaUU7WUFBRyxDQUFDO1lBRTVGLDRCQUFRLEdBQVI7Z0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLElBQUksRUFBRSxNQUFHLENBQUM7WUFDeEMsQ0FBQztZQUVELHlCQUFLLEdBQUwsVUFBTSxHQUFrQjtnQkFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQztZQUNELHVCQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVk7Z0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQ0QsdUJBQUcsR0FBSCxVQUFJLE9BQWlDLEVBQUUsSUFBWSxFQUFFLFFBQW9CO2dCQUN2RSxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7WUFDSCxDQUFDO1lBRUgsZ0JBQUM7UUFBRCxDQUFDLEFBekJELElBeUJDO1FBekJxQixtQkFBUyxZQXlCOUIsQ0FBQTtRQUVELFdBQWlCLFNBQVM7WUFDeEI7Z0JBQTRCLDBCQUFTO2dCQUNuQyxnQkFBbUIsQ0FBYSxFQUFTLENBQWEsRUFBUyxDQUFhLEVBQVMsQ0FBYSxFQUFTLENBQWEsRUFBUyxDQUFhO29CQUEzSCxrQkFBQSxFQUFBLEtBQWE7b0JBQVMsa0JBQUEsRUFBQSxLQUFhO29CQUFTLGtCQUFBLEVBQUEsS0FBYTtvQkFBUyxrQkFBQSxFQUFBLEtBQWE7b0JBQVMsa0JBQUEsRUFBQSxLQUFhO29CQUFTLGtCQUFBLEVBQUEsS0FBYTtvQkFBOUksWUFDRSxrQkFBTSxRQUFRLENBQUMsU0FDaEI7b0JBRmtCLE9BQUMsR0FBRCxDQUFDLENBQVk7b0JBQVMsT0FBQyxHQUFELENBQUMsQ0FBWTtvQkFBUyxPQUFDLEdBQUQsQ0FBQyxDQUFZO29CQUFTLE9BQUMsR0FBRCxDQUFDLENBQVk7b0JBQVMsT0FBQyxHQUFELENBQUMsQ0FBWTtvQkFBUyxPQUFDLEdBQUQsQ0FBQyxDQUFZOztnQkFFOUksQ0FBQztnQkFDRCxxQkFBSSxHQUFKO29CQUNFLE1BQU0sQ0FBSSxJQUFJLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLENBQUcsQ0FBQztnQkFDdkUsQ0FBQztnQkFDRCwwQkFBUyxHQUFULFVBQVUsR0FBa0I7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QixNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEosQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELDRCQUFXLEdBQVgsVUFBWSxJQUFZLEVBQUUsQ0FBUztvQkFDakMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hMLENBQUM7Z0JBQ0gsYUFBQztZQUFELENBQUMsQUFsQkQsQ0FBNEIsU0FBUyxHQWtCcEM7WUFsQlksZ0JBQU0sU0FrQmxCLENBQUE7WUFDRDtnQkFBK0IsNkJBQVM7Z0JBQ3RDLG1CQUFtQixDQUFhLEVBQVMsQ0FBYTtvQkFBbkMsa0JBQUEsRUFBQSxLQUFhO29CQUFTLGtCQUFBLEVBQUEsS0FBYTtvQkFBdEQsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7b0JBRmtCLE9BQUMsR0FBRCxDQUFDLENBQVk7b0JBQVMsT0FBQyxHQUFELENBQUMsQ0FBWTs7Z0JBRXRELENBQUM7Z0JBQ0Qsd0JBQUksR0FBSjtvQkFDRSxNQUFNLENBQUksSUFBSSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsQ0FBRyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELDZCQUFTLEdBQVQsVUFBVSxHQUFrQjtvQkFDMUIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdEIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pFLENBQUM7b0JBQ0gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELCtCQUFXLEdBQVgsVUFBWSxJQUFlLEVBQUUsQ0FBUztvQkFDcEMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztnQkFDSCxnQkFBQztZQUFELENBQUMsQUF0QkQsQ0FBK0IsU0FBUyxHQXNCdkM7WUF0QlksbUJBQVMsWUFzQnJCLENBQUE7WUFDRDtnQkFBa0MsZ0NBQVM7Z0JBQ3pDLHNCQUFtQixDQUFhO29CQUFiLGtCQUFBLEVBQUEsS0FBYTtvQkFBaEMsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtvQkFGa0IsT0FBQyxHQUFELENBQUMsQ0FBWTs7Z0JBRWhDLENBQUM7Z0JBQ0QsMkJBQUksR0FBSjtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxnQ0FBUyxHQUFULFVBQVUsR0FBa0I7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxrQ0FBVyxHQUFYLFVBQVksSUFBa0IsRUFBRSxDQUFTO29CQUN2QyxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0gsbUJBQUM7WUFBRCxDQUFDLEFBakJELENBQWtDLFNBQVMsR0FpQjFDO1lBakJZLHNCQUFZLGVBaUJ4QixDQUFBO1lBQ0Q7Z0JBQTJCLHlCQUFTO2dCQUNsQyxlQUFtQixDQUFhLEVBQVMsQ0FBYTtvQkFBbkMsa0JBQUEsRUFBQSxLQUFhO29CQUFTLGtCQUFBLEVBQUEsS0FBYTtvQkFBdEQsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtvQkFGa0IsT0FBQyxHQUFELENBQUMsQ0FBWTtvQkFBUyxPQUFDLEdBQUQsQ0FBQyxDQUFZOztnQkFFdEQsQ0FBQztnQkFDRCxvQkFBSSxHQUFKO29CQUNFLE1BQU0sQ0FBSSxJQUFJLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxDQUFHLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QseUJBQVMsR0FBVCxVQUFVLEdBQWtCO29CQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsQ0FBQztvQkFDSCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNyQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsMkJBQVcsR0FBWCxVQUFZLElBQVcsRUFBRSxDQUFTO29CQUNoQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQUNILFlBQUM7WUFBRCxDQUFDLEFBdEJELENBQTJCLFNBQVMsR0FzQm5DO1lBdEJZLGVBQUssUUFzQmpCLENBQUE7WUFDRDtnQkFBNEIsMEJBQVM7Z0JBQ25DLGdCQUFtQixDQUFTLEVBQVMsQ0FBYSxFQUFTLENBQWE7b0JBQW5DLGtCQUFBLEVBQUEsS0FBYTtvQkFBUyxrQkFBQSxFQUFBLEtBQWE7b0JBQXhFLFlBQ0Usa0JBQU0sUUFBUSxDQUFDLFNBQ2hCO29CQUZrQixPQUFDLEdBQUQsQ0FBQyxDQUFRO29CQUFTLE9BQUMsR0FBRCxDQUFDLENBQVk7b0JBQVMsT0FBQyxHQUFELENBQUMsQ0FBWTs7Z0JBRXhFLENBQUM7Z0JBQ0QscUJBQUksR0FBSjtvQkFDRSxNQUFNLENBQUksSUFBSSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxDQUFHLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsMEJBQVMsR0FBVCxVQUFVLEdBQWtCO29CQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsNEJBQVcsR0FBWCxVQUFZLElBQVksRUFBRSxDQUFTO29CQUNqQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEcsQ0FBQztnQkFDSCxhQUFDO1lBQUQsQ0FBQyxBQWxCRCxDQUE0QixTQUFTLEdBa0JwQztZQWxCWSxnQkFBTSxTQWtCbEIsQ0FBQTtZQUNEO2dCQUEyQix5QkFBUztnQkFDbEMsZUFBbUIsQ0FBYTtvQkFBYixrQkFBQSxFQUFBLEtBQWE7b0JBQWhDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBQ2Y7b0JBRmtCLE9BQUMsR0FBRCxDQUFDLENBQVk7O2dCQUVoQyxDQUFDO2dCQUNELG9CQUFJLEdBQUo7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QseUJBQVMsR0FBVCxVQUFVLEdBQWtCO29CQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNyQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsMkJBQVcsR0FBWCxVQUFZLElBQVcsRUFBRSxDQUFTO29CQUNoQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0gsWUFBQztZQUFELENBQUMsQUFqQkQsQ0FBMkIsU0FBUyxHQWlCbkM7WUFqQlksZUFBSyxRQWlCakIsQ0FBQTtZQUNEO2dCQUEyQix5QkFBUztnQkFDbEMsZUFBbUIsQ0FBYTtvQkFBYixrQkFBQSxFQUFBLEtBQWE7b0JBQWhDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBQ2Y7b0JBRmtCLE9BQUMsR0FBRCxDQUFDLENBQVk7O2dCQUVoQyxDQUFDO2dCQUNELG9CQUFJLEdBQUo7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QseUJBQVMsR0FBVCxVQUFVLEdBQWtCO29CQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNyQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsMkJBQVcsR0FBWCxVQUFZLElBQVcsRUFBRSxDQUFTO29CQUNoQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0gsWUFBQztZQUFELENBQUMsQUFqQkQsQ0FBMkIsU0FBUyxHQWlCbkM7WUFqQlksZUFBSyxRQWlCakIsQ0FBQTtRQUNILENBQUMsRUEzSWdCLFNBQVMsR0FBVCxtQkFBUyxLQUFULG1CQUFTLFFBMkl6QjtJQUVILENBQUMsRUExS21CLFNBQVMsR0FBVCxtQkFBUyxLQUFULG1CQUFTLFFBMEs1QjtBQUFELENBQUMsRUExS1MsU0FBUyxLQUFULFNBQVMsUUEwS2xCOztBQzFLRCxJQUFVLFNBQVMsQ0EwRGxCO0FBMURELFdBQVUsU0FBUztJQUFDLElBQUEsU0FBUyxDQTBENUI7SUExRG1CLFdBQUEsU0FBUztRQUUzQjtZQUNFLGlCQUFtQixDQUFTLEVBQVMsQ0FBUyxFQUFTLEtBQWEsRUFBUyxNQUFjO2dCQUF4RSxNQUFDLEdBQUQsQ0FBQyxDQUFRO2dCQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7Z0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtnQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQUcsQ0FBQztZQUMvRiwwQkFBUSxHQUFSO2dCQUNFLE1BQU0sQ0FBSSxJQUFJLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsTUFBUSxDQUFDO1lBQzVELENBQUM7WUFDRCx1QkFBSyxHQUFMLFVBQU0sR0FBa0I7Z0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0gsQ0FBQztZQUNELHFCQUFHLEdBQUgsVUFBSSxPQUFpQyxFQUFFLElBQVk7Z0JBQ2pELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzlFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdEcsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0gsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7WUFDSCxDQUFDO1lBQ0QscUJBQUcsR0FBSCxVQUFJLE9BQWlDLEVBQUUsSUFBWSxFQUFFLFFBQWtCO2dCQUNyRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7d0JBQ3JELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt3QkFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzVELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUNqRCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7d0JBQ2pELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt3QkFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNsRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5QyxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0QsNkJBQVcsR0FBWCxVQUFZLElBQWEsRUFBRSxDQUFTO2dCQUNsQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuTSxDQUFDO1lBQ0gsY0FBQztRQUFELENBQUMsQUF0REQsSUFzREM7UUF0RFksaUJBQU8sVUFzRG5CLENBQUE7SUFFSCxDQUFDLEVBMURtQixTQUFTLEdBQVQsbUJBQVMsS0FBVCxtQkFBUyxRQTBENUI7QUFBRCxDQUFDLEVBMURTLFNBQVMsS0FBVCxTQUFTLFFBMERsQjs7QUMxREQsSUFBVSxTQUFTLENBeUNsQjtBQXpDRCxXQUFVLFNBQVM7SUFFakI7UUFNRSxlQUFZLElBQTZCO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hELEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7b0JBQzVELENBQUM7Z0JBQ0gsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbkIsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQUEsS0FBSyxFQUFFLEtBQUssQ0FBa0IsQ0FBQztnQkFDM0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQUEsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBQSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQUEsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBQSxLQUFLLEVBQUUsTUFBTSxDQUFtQixDQUFDO2dCQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNILENBQUM7UUFDTSxzQkFBTSxHQUFiLFVBQWMsR0FBNkI7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFSCxZQUFDO0lBQUQsQ0FBQyxBQXJDRCxJQXFDQztJQXJDWSxlQUFLLFFBcUNqQixDQUFBO0FBRUgsQ0FBQyxFQXpDUyxTQUFTLEtBQVQsU0FBUyxRQXlDbEI7O0FDekNELElBQVUsU0FBUyxDQW1FbEI7QUFuRUQsV0FBVSxTQUFTO0lBRWpCO1FBTUUsaUJBQW1CLEtBQVksRUFBRSxFQUFnQixFQUFFLEtBQXNCO1lBQXRELFVBQUssR0FBTCxLQUFLLENBQU87WUFKeEIsT0FBRSxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBSzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBQSxLQUFLLEVBQUUsRUFBRSxDQUFRLENBQUM7Z0JBQzlELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ00sMEJBQVEsR0FBZjtZQUNFLE1BQU0sQ0FBQyxVQUFRLElBQUksQ0FBQyxFQUFFLE1BQUcsQ0FBQztRQUM1QixDQUFDO1FBQ00sOEJBQVksR0FBbkIsVUFBOEMsSUFBVSxFQUFFLEdBQWdCO1lBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ00sK0JBQWEsR0FBcEIsVUFBcUIsS0FBcUI7WUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBTSxNQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQUksQ0FBQyxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ00sOEJBQVksR0FBbkIsVUFBOEMsSUFBVTtZQUN0RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUM7UUFDTSxxQkFBRyxHQUFWLFVBQVcsRUFBNEI7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDTSw2QkFBVyxHQUFsQjtZQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BDLElBQU0sUUFBUSxHQUErQixFQUFFLENBQUM7WUFDaEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBZSxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBR00sa0NBQWdCLEdBQXZCLFVBQXdCLEtBQWEsRUFBRSxRQUEyQztZQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNILGNBQUM7SUFBRCxDQUFDLEFBL0RELElBK0RDO0lBL0RZLGlCQUFPLFVBK0RuQixDQUFBO0FBRUgsQ0FBQyxFQW5FUyxTQUFTLEtBQVQsU0FBUyxRQW1FbEI7O0FDN0RELElBQVUsU0FBUyxDQUlsQjtBQUpELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQUkzQjtJQUptQixXQUFBLFFBQVE7UUFFMUI7WUFBMEUsc0NBQW9DO1lBQTlHOztZQUFnSCxDQUFDO1lBQUQseUJBQUM7UUFBRCxDQUFDLEFBQWpILENBQTBFLFVBQUEsT0FBTyxHQUFnQztRQUEzRiwyQkFBa0IscUJBQXlFLENBQUE7SUFFbkgsQ0FBQyxFQUptQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQUkzQjtBQUFELENBQUMsRUFKUyxTQUFTLEtBQVQsU0FBUyxRQUlsQjs7QUNWRCxJQUFVLFNBQVMsQ0FJbEI7QUFKRCxXQUFVLFNBQVM7SUFBQyxJQUFBLFFBQVEsQ0FJM0I7SUFKbUIsV0FBQSxRQUFRO1FBQUMsSUFBQSxVQUFVLENBSXRDO1FBSjRCLFdBQUEsVUFBVTtZQUVyQztnQkFBcUUsaUNBQXdCO2dCQUE3Rjs7Z0JBQStGLENBQUM7Z0JBQUQsb0JBQUM7WUFBRCxDQUFDLEFBQWhHLENBQXFFLFNBQUEsa0JBQWtCLEdBQVM7WUFBMUUsd0JBQWEsZ0JBQTZELENBQUE7UUFFbEcsQ0FBQyxFQUo0QixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQUl0QztJQUFELENBQUMsRUFKbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUFJM0I7QUFBRCxDQUFDLEVBSlMsU0FBUyxLQUFULFNBQVMsUUFJbEI7O0FDT0QsSUFBVSxTQUFTLENBUWxCO0FBUkQsV0FBVSxTQUFTO0lBQUMsSUFBQSxRQUFRLENBUTNCO0lBUm1CLFdBQUEsUUFBUTtRQUFDLElBQUEsVUFBVSxDQVF0QztRQVI0QixXQUFBLFVBQVU7WUFBQyxJQUFBLEtBQUssQ0FRNUM7WUFSdUMsV0FBQSxLQUFLO2dCQUUzQztvQkFBNEIsMEJBQWtFO29CQUM1RixnQkFBWSxLQUFZLEVBQUUsS0FBeUU7K0JBQ2pHLGtCQUFNLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDO29CQUMvQixDQUFDO29CQUNILGFBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQTRCLFdBQUEsYUFBYSxHQUl4QztnQkFKWSxZQUFNLFNBSWxCLENBQUE7WUFFSCxDQUFDLEVBUnVDLEtBQUssR0FBTCxnQkFBSyxLQUFMLGdCQUFLLFFBUTVDO1FBQUQsQ0FBQyxFQVI0QixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVF0QztJQUFELENBQUMsRUFSbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUFRM0I7QUFBRCxDQUFDLEVBUlMsU0FBUyxLQUFULFNBQVMsUUFRbEI7QUFFRCxXQUFVLFNBQVM7SUFNakIsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFnQyxFQUFvQixFQUFFLEVBQW9CLEVBQUUsQ0FBbUI7UUFDdEgsTUFBTSxDQUFDLElBQUksVUFBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztBQUVKLENBQUMsRUFWUyxTQUFTLEtBQVQsU0FBUyxRQVVsQjs7QUNsQkQsSUFBVSxTQUFTLENBUWxCO0FBUkQsV0FBVSxTQUFTO0lBQUMsSUFBQSxRQUFRLENBUTNCO0lBUm1CLFdBQUEsUUFBUTtRQUFDLElBQUEsVUFBVSxDQVF0QztRQVI0QixXQUFBLFVBQVU7WUFBQyxJQUFBLEtBQUssQ0FRNUM7WUFSdUMsV0FBQSxLQUFLO2dCQUUzQztvQkFBNkIsMkJBQW9FO29CQUMvRixpQkFBWSxLQUFZLEVBQUUsS0FBMEU7K0JBQ2xHLGtCQUFNLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO29CQUNoQyxDQUFDO29CQUNILGNBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQTZCLFdBQUEsYUFBYSxHQUl6QztnQkFKWSxhQUFPLFVBSW5CLENBQUE7WUFFSCxDQUFDLEVBUnVDLEtBQUssR0FBTCxnQkFBSyxLQUFMLGdCQUFLLFFBUTVDO1FBQUQsQ0FBQyxFQVI0QixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVF0QztJQUFELENBQUMsRUFSbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUFRM0I7QUFBRCxDQUFDLEVBUlMsU0FBUyxLQUFULFNBQVMsUUFRbEI7QUFFRCxXQUFVLFNBQVM7SUFNakIsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFnQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3RHLE1BQU0sQ0FBQyxJQUFJLFVBQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDLENBQUM7QUFFSixDQUFDLEVBVlMsU0FBUyxLQUFULFNBQVMsUUFVbEI7O0FDcEJELElBQVUsU0FBUyxDQVFsQjtBQVJELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQVEzQjtJQVJtQixXQUFBLFFBQVE7UUFBQyxJQUFBLFVBQVUsQ0FRdEM7UUFSNEIsV0FBQSxVQUFVO1lBQUMsSUFBQSxLQUFLLENBUTVDO1lBUnVDLFdBQUEsS0FBSztnQkFFM0M7b0JBQTBCLHdCQUE4RDtvQkFDdEYsY0FBWSxLQUFZLEVBQUUsS0FBdUU7K0JBQy9GLGtCQUFNLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO29CQUM3QixDQUFDO29CQUNILFdBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQTBCLFdBQUEsYUFBYSxHQUl0QztnQkFKWSxVQUFJLE9BSWhCLENBQUE7WUFFSCxDQUFDLEVBUnVDLEtBQUssR0FBTCxnQkFBSyxLQUFMLGdCQUFLLFFBUTVDO1FBQUQsQ0FBQyxFQVI0QixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVF0QztJQUFELENBQUMsRUFSbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUFRM0I7QUFBRCxDQUFDLEVBUlMsU0FBUyxLQUFULFNBQVMsUUFRbEI7QUFFRCxXQUFVLFNBQVM7SUFNakIsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFnQyxFQUFvQixFQUFFLEVBQW9CLEVBQUUsRUFBb0IsRUFBRSxFQUFvQjtRQUMzSSxNQUFNLENBQUMsSUFBSSxVQUFBLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDO0FBRUosQ0FBQyxFQVZTLFNBQVMsS0FBVCxTQUFTLFFBVWxCOztBQ2pDRCxJQUFVLFNBQVMsQ0FpUGxCO0FBalBELFdBQVUsU0FBUztJQUFDLElBQUEsU0FBUyxDQWlQNUI7SUFqUG1CLFdBQUEsU0FBUztRQUUzQjtZQUFBO1lBdUJBLENBQUM7WUFwQkMsMkJBQUssR0FBTCxVQUFNLEdBQWtCO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBQ0QseUJBQUcsR0FBSCxVQUFJLE9BQWlDLEVBQUUsSUFBWTtnQkFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDRCx5QkFBRyxHQUFILFVBQUksT0FBaUMsRUFBRSxJQUFZLEVBQUUsUUFBc0I7Z0JBQ3pFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztZQUNILENBQUM7WUFJSCxrQkFBQztRQUFELENBQUMsQUF2QkQsSUF1QkM7UUF2QnFCLHFCQUFXLGNBdUJoQyxDQUFBO1FBQ0QsV0FBaUIsV0FBVztZQUMxQjtnQkFBMEMsK0JBQVc7Z0JBRW5ELHFCQUFtQixDQUEwQjtvQkFBMUIsa0JBQUEsRUFBQSxRQUFlLFVBQUEsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQTdDLFlBQ0UsaUJBQU8sU0FDUjtvQkFGa0IsT0FBQyxHQUFELENBQUMsQ0FBeUI7O2dCQUU3QyxDQUFDO2dCQUNELDhCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUksQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCwrQkFBUyxHQUFULFVBQVUsR0FBVztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFDRCxpQ0FBVyxHQUFYLFVBQVksSUFBaUIsRUFBRSxDQUFTO29CQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBR0gsa0JBQUM7WUFBRCxDQUFDLEFBaEJELENBQTBDLFdBQVcsR0FnQnBEO1lBaEJxQix1QkFBVyxjQWdCaEMsQ0FBQTtZQUNEO2dCQUEwQywrQkFBVztnQkFFbkQscUJBQW1CLEVBQTJCLEVBQVMsRUFBMkI7b0JBQS9ELG1CQUFBLEVBQUEsU0FBZ0IsVUFBQSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFBUyxtQkFBQSxFQUFBLFNBQWdCLFVBQUEsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQWxGLFlBQ0UsaUJBQU8sU0FDUjtvQkFGa0IsUUFBRSxHQUFGLEVBQUUsQ0FBeUI7b0JBQVMsUUFBRSxHQUFGLEVBQUUsQ0FBeUI7O2dCQUVsRixDQUFDO2dCQUNELDhCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBSSxDQUFDO2dCQUNwRSxDQUFDO2dCQUNELCtCQUFTLEdBQVQsVUFBVSxHQUFXO29CQUNuQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUNELGlDQUFXLEdBQVgsVUFBWSxJQUFpQixFQUFFLENBQVM7b0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixDQUFDO2dCQUdILGtCQUFDO1lBQUQsQ0FBQyxBQWpCRCxDQUEwQyxXQUFXLEdBaUJwRDtZQWpCcUIsdUJBQVcsY0FpQmhDLENBQUE7WUFDRDtnQkFBMEMsK0JBQVc7Z0JBRW5ELHFCQUFtQixFQUEyQixFQUFTLEVBQTJCLEVBQVMsRUFBMkI7b0JBQW5HLG1CQUFBLEVBQUEsU0FBZ0IsVUFBQSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFBUyxtQkFBQSxFQUFBLFNBQWdCLFVBQUEsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQVMsbUJBQUEsRUFBQSxTQUFnQixVQUFBLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUF0SCxZQUNFLGlCQUFPLFNBQ1I7b0JBRmtCLFFBQUUsR0FBRixFQUFFLENBQXlCO29CQUFTLFFBQUUsR0FBRixFQUFFLENBQXlCO29CQUFTLFFBQUUsR0FBRixFQUFFLENBQXlCOztnQkFFdEgsQ0FBQztnQkFDRCw4QkFBUSxHQUFSO29CQUNFLE1BQU0sQ0FBSSxJQUFJLENBQUMsSUFBSSxTQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBSSxDQUFDO2dCQUMxRixDQUFDO2dCQUNELCtCQUFTLEdBQVQsVUFBVSxHQUFXO29CQUNuQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxDQUFDO2dCQUNELGlDQUFXLEdBQVgsVUFBWSxJQUFpQixFQUFFLENBQVM7b0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ILENBQUM7Z0JBR0gsa0JBQUM7WUFBRCxDQUFDLEFBakJELENBQTBDLFdBQVcsR0FpQnBEO1lBakJxQix1QkFBVyxjQWlCaEMsQ0FBQTtZQUNEO2dCQUErQiw2QkFBVztnQkFBMUM7b0JBQUEscUVBUUM7b0JBUEMsVUFBSSxHQUFRLEdBQUcsQ0FBQzs7Z0JBT2xCLENBQUM7Z0JBTkMsaUNBQWEsR0FBYixVQUFjLENBQVE7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxtQ0FBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0FBQyxBQVJELENBQStCLFdBQVcsR0FRekM7WUFSWSxxQkFBUyxZQVFyQixDQUFBO1lBQ0Q7Z0JBQStCLDZCQUFXO2dCQUExQztvQkFBQSxxRUFRQztvQkFQQyxVQUFJLEdBQVEsR0FBRyxDQUFDOztnQkFPbEIsQ0FBQztnQkFOQyxpQ0FBYSxHQUFiLFVBQWMsQ0FBUTtvQkFDcEIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNELG1DQUFlLEdBQWY7b0JBQ0UsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0gsZ0JBQUM7WUFBRCxDQUFDLEFBUkQsQ0FBK0IsV0FBVyxHQVF6QztZQVJZLHFCQUFTLFlBUXJCLENBQUE7WUFDRDtnQkFBK0IsNkJBQVc7Z0JBQTFDO29CQUFBLHFFQVFDO29CQVBDLFVBQUksR0FBUSxHQUFHLENBQUM7O2dCQU9sQixDQUFDO2dCQU5DLGlDQUFhLEdBQWIsVUFBYyxDQUFRO29CQUNwQixNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsbUNBQWUsR0FBZjtvQkFDRSxNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFDSCxnQkFBQztZQUFELENBQUMsQUFSRCxDQUErQixXQUFXLEdBUXpDO1lBUlkscUJBQVMsWUFRckIsQ0FBQTtZQUNEO2dCQUErQiw2QkFBVztnQkFBMUM7b0JBQUEscUVBUUM7b0JBUEMsVUFBSSxHQUFRLEdBQUcsQ0FBQzs7Z0JBT2xCLENBQUM7Z0JBTkMsaUNBQWEsR0FBYixVQUFjLENBQVE7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxtQ0FBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0FBQyxBQVJELENBQStCLFdBQVcsR0FRekM7WUFSWSxxQkFBUyxZQVFyQixDQUFBO1lBQ0Q7Z0JBQXlDLHVDQUFXO2dCQUFwRDtvQkFBQSxxRUFRQztvQkFQQyxVQUFJLEdBQVEsR0FBRyxDQUFDOztnQkFPbEIsQ0FBQztnQkFOQywyQ0FBYSxHQUFiLFVBQWMsRUFBUyxFQUFFLEVBQVM7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCw2Q0FBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQUFDLEFBUkQsQ0FBeUMsV0FBVyxHQVFuRDtZQVJZLCtCQUFtQixzQkFRL0IsQ0FBQTtZQUNEO2dCQUF5Qyx1Q0FBVztnQkFBcEQ7b0JBQUEscUVBUUM7b0JBUEMsVUFBSSxHQUFRLEdBQUcsQ0FBQzs7Z0JBT2xCLENBQUM7Z0JBTkMsMkNBQWEsR0FBYixVQUFjLEVBQVMsRUFBRSxFQUFTO29CQUNoQyxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsNkNBQWUsR0FBZjtvQkFDRSxNQUFNLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2dCQUNILDBCQUFDO1lBQUQsQ0FBQyxBQVJELENBQXlDLFdBQVcsR0FRbkQ7WUFSWSwrQkFBbUIsc0JBUS9CLENBQUE7WUFDRDtnQkFBK0MsNkNBQVc7Z0JBQTFEO29CQUFBLHFFQVFDO29CQVBDLFVBQUksR0FBUSxHQUFHLENBQUM7O2dCQU9sQixDQUFDO2dCQU5DLGlEQUFhLEdBQWIsVUFBYyxDQUFRO29CQUNwQixNQUFNLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFDRCxtREFBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLHlCQUF5QixFQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0gsZ0NBQUM7WUFBRCxDQUFDLEFBUkQsQ0FBK0MsV0FBVyxHQVF6RDtZQVJZLHFDQUF5Qiw0QkFRckMsQ0FBQTtZQUNEO2dCQUErQyw2Q0FBVztnQkFBMUQ7b0JBQUEscUVBUUM7b0JBUEMsVUFBSSxHQUFRLEdBQUcsQ0FBQzs7Z0JBT2xCLENBQUM7Z0JBTkMsaURBQWEsR0FBYixVQUFjLENBQVE7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELG1EQUFlLEdBQWY7b0JBQ0UsTUFBTSxDQUFDLElBQUkseUJBQXlCLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztnQkFDSCxnQ0FBQztZQUFELENBQUMsQUFSRCxDQUErQyxXQUFXLEdBUXpEO1lBUlkscUNBQXlCLDRCQVFyQyxDQUFBO1lBQ0Q7Z0JBQXFDLG1DQUFXO2dCQUFoRDtvQkFBQSxxRUFRQztvQkFQQyxVQUFJLEdBQVEsR0FBRyxDQUFDOztnQkFPbEIsQ0FBQztnQkFOQyx1Q0FBYSxHQUFiLFVBQWMsRUFBUyxFQUFFLEVBQVMsRUFBRSxFQUFTO29CQUMzQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCx5Q0FBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNILHNCQUFDO1lBQUQsQ0FBQyxBQVJELENBQXFDLFdBQVcsR0FRL0M7WUFSWSwyQkFBZSxrQkFRM0IsQ0FBQTtZQUNEO2dCQUFxQyxtQ0FBVztnQkFBaEQ7b0JBQUEscUVBUUM7b0JBUEMsVUFBSSxHQUFRLEdBQUcsQ0FBQzs7Z0JBT2xCLENBQUM7Z0JBTkMsdUNBQWEsR0FBYixVQUFjLEVBQVMsRUFBRSxFQUFTLEVBQUUsRUFBUztvQkFDM0MsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QseUNBQWUsR0FBZjtvQkFDRSxNQUFNLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBQUMsQUFSRCxDQUFxQyxXQUFXLEdBUS9DO1lBUlksMkJBQWUsa0JBUTNCLENBQUE7WUFDRDtnQkFBMkMseUNBQVc7Z0JBQXREO29CQUFBLHFFQVFDO29CQVBDLFVBQUksR0FBUSxHQUFHLENBQUM7O2dCQU9sQixDQUFDO2dCQU5DLDZDQUFhLEdBQWIsVUFBYyxFQUFTLEVBQUUsRUFBUztvQkFDaEMsTUFBTSxDQUFDLElBQUkscUJBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELCtDQUFlLEdBQWY7b0JBQ0UsTUFBTSxDQUFDLElBQUkscUJBQXFCLEVBQUUsQ0FBQztnQkFDckMsQ0FBQztnQkFDSCw0QkFBQztZQUFELENBQUMsQUFSRCxDQUEyQyxXQUFXLEdBUXJEO1lBUlksaUNBQXFCLHdCQVFqQyxDQUFBO1lBQ0Q7Z0JBQTJDLHlDQUFXO2dCQUF0RDtvQkFBQSxxRUFRQztvQkFQQyxVQUFJLEdBQVEsR0FBRyxDQUFDOztnQkFPbEIsQ0FBQztnQkFOQyw2Q0FBYSxHQUFiLFVBQWMsRUFBUyxFQUFFLEVBQVM7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFDRCwrQ0FBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0gsNEJBQUM7WUFBRCxDQUFDLEFBUkQsQ0FBMkMsV0FBVyxHQVFyRDtZQVJZLGlDQUFxQix3QkFRakMsQ0FBQTtZQUNEO2dCQUFvQyx5QkFBVztnQkFFN0MsZUFBbUIsQ0FBMEIsRUFBUyxDQUEwQixFQUFTLFdBQXVCLEVBQVMsUUFBeUIsRUFBUyxjQUE4QjtvQkFBdEssa0JBQUEsRUFBQSxRQUFlLFVBQUEsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQVMsa0JBQUEsRUFBQSxRQUFlLFVBQUEsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQVMsNEJBQUEsRUFBQSxlQUF1QjtvQkFBUyx5QkFBQSxFQUFBLGdCQUF5QjtvQkFBUywrQkFBQSxFQUFBLHFCQUE4QjtvQkFBekwsWUFDRSxpQkFBTyxTQUNSO29CQUZrQixPQUFDLEdBQUQsQ0FBQyxDQUF5QjtvQkFBUyxPQUFDLEdBQUQsQ0FBQyxDQUF5QjtvQkFBUyxpQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFBUyxjQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFBUyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7O2dCQUV6TCxDQUFDO2dCQUNELHdCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQUksSUFBSSxDQUFDLFdBQVcsVUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFJLENBQUM7Z0JBQ2pJLENBQUM7Z0JBQ0QseUJBQVMsR0FBVCxVQUFVLEdBQVc7b0JBQ25CLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDakksQ0FBQztnQkFDRCwyQkFBVyxHQUFYLFVBQVksSUFBVyxFQUFFLENBQVM7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMxTyxDQUFDO2dCQUdILFlBQUM7WUFBRCxDQUFDLEFBakJELENBQW9DLFdBQVcsR0FpQjlDO1lBakJxQixpQkFBSyxRQWlCMUIsQ0FBQTtZQUNEO2dCQUE4Qiw0QkFBSztnQkFBbkM7b0JBQUEscUVBUUM7b0JBUEMsVUFBSSxHQUFRLEdBQUcsQ0FBQzs7Z0JBT2xCLENBQUM7Z0JBTkMsZ0NBQWEsR0FBYixVQUFjLENBQVEsRUFBRSxDQUFRLEVBQUUsV0FBbUIsRUFBRSxRQUFpQixFQUFFLGNBQWM7b0JBQ3RGLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7Z0JBQ0Qsa0NBQWUsR0FBZjtvQkFDRSxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFDSCxlQUFDO1lBQUQsQ0FBQyxBQVJELENBQThCLEtBQUssR0FRbEM7WUFSWSxvQkFBUSxXQVFwQixDQUFBO1lBQ0Q7Z0JBQThCLDRCQUFLO2dCQUFuQztvQkFBQSxxRUFRQztvQkFQQyxVQUFJLEdBQVEsR0FBRyxDQUFDOztnQkFPbEIsQ0FBQztnQkFOQyxnQ0FBYSxHQUFiLFVBQWMsQ0FBUSxFQUFFLENBQVEsRUFBRSxXQUFtQixFQUFFLFFBQWlCLEVBQUUsY0FBYztvQkFDdEYsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFDRCxrQ0FBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUNILGVBQUM7WUFBRCxDQUFDLEFBUkQsQ0FBOEIsS0FBSyxHQVFsQztZQVJZLG9CQUFRLFdBUXBCLENBQUE7WUFDRDtnQkFBK0IsNkJBQVc7Z0JBQTFDO29CQUFBLHFFQWNDO29CQWJDLFVBQUksR0FBUSxHQUFHLENBQUM7O2dCQWFsQixDQUFDO2dCQVpDLDRCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUNELDZCQUFTLEdBQVQsVUFBVSxHQUFXO29CQUNuQixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxtQ0FBZSxHQUFmO29CQUNFLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNELCtCQUFXLEdBQVgsVUFBWSxJQUFlLEVBQUUsQ0FBUztvQkFDcEMsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0gsZ0JBQUM7WUFBRCxDQUFDLEFBZEQsQ0FBK0IsV0FBVyxHQWN6QztZQWRZLHFCQUFTLFlBY3JCLENBQUE7UUFDSCxDQUFDLEVBck5nQixXQUFXLEdBQVgscUJBQVcsS0FBWCxxQkFBVyxRQXFOM0I7SUFFSCxDQUFDLEVBalBtQixTQUFTLEdBQVQsbUJBQVMsS0FBVCxtQkFBUyxRQWlQNUI7QUFBRCxDQUFDLEVBalBTLFNBQVMsS0FBVCxTQUFTLFFBaVBsQjtBQVdELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQVEzQjtJQVJtQixXQUFBLFFBQVE7UUFBQyxJQUFBLFVBQVUsQ0FRdEM7UUFSNEIsV0FBQSxVQUFVO1lBQUMsSUFBQSxLQUFLLENBUTVDO1lBUnVDLFdBQUEsS0FBSztnQkFFM0M7b0JBQTBCLHdCQUE4RDtvQkFDdEYsY0FBWSxLQUFZLEVBQUUsS0FBdUU7K0JBQy9GLGtCQUFNLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO29CQUM3QixDQUFDO29CQUNILFdBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQTBCLFdBQUEsYUFBYSxHQUl0QztnQkFKWSxVQUFJLE9BSWhCLENBQUE7WUFFSCxDQUFDLEVBUnVDLEtBQUssR0FBTCxnQkFBSyxLQUFMLGdCQUFLLFFBUTVDO1FBQUQsQ0FBQyxFQVI0QixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVF0QztJQUFELENBQUMsRUFSbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUFRM0I7QUFBRCxDQUFDLEVBUlMsU0FBUyxLQUFULFNBQVMsUUFRbEI7QUFFRCxXQUFVLFNBQVM7SUFNakIsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFnQyxDQUF3QyxFQUFFLFVBQW1CO1FBQ2xILE1BQU0sQ0FBQyxJQUFJLFVBQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUM7QUFFSixDQUFDLEVBVlMsU0FBUyxLQUFULFNBQVMsUUFVbEI7O0FDeFFELElBQVUsU0FBUyxDQVFsQjtBQVJELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQVEzQjtJQVJtQixXQUFBLFFBQVE7UUFBQyxJQUFBLFVBQVUsQ0FRdEM7UUFSNEIsV0FBQSxVQUFVO1lBQUMsSUFBQSxLQUFLLENBUTVDO1lBUnVDLFdBQUEsS0FBSztnQkFFM0M7b0JBQTZCLDJCQUFvRTtvQkFDL0YsaUJBQVksS0FBWSxFQUFFLEtBQTBFOytCQUNsRyxrQkFBTSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFDSCxjQUFDO2dCQUFELENBQUMsQUFKRCxDQUE2QixXQUFBLGFBQWEsR0FJekM7Z0JBSlksYUFBTyxVQUluQixDQUFBO1lBRUgsQ0FBQyxFQVJ1QyxLQUFLLEdBQUwsZ0JBQUssS0FBTCxnQkFBSyxRQVE1QztRQUFELENBQUMsRUFSNEIsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFRdEM7SUFBRCxDQUFDLEVBUm1CLFFBQVEsR0FBUixrQkFBUSxLQUFSLGtCQUFRLFFBUTNCO0FBQUQsQ0FBQyxFQVJTLFNBQVMsS0FBVCxTQUFTLFFBUWxCO0FBRUQsV0FBVSxTQUFTO0lBTWpCLFVBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBZ0MsTUFBdUM7UUFDL0YsTUFBTSxDQUFDLElBQUksVUFBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztBQUVKLENBQUMsRUFWUyxTQUFTLEtBQVQsU0FBUyxRQVVsQjs7QUNwQkQsSUFBVSxTQUFTLENBUWxCO0FBUkQsV0FBVSxTQUFTO0lBQUMsSUFBQSxRQUFRLENBUTNCO0lBUm1CLFdBQUEsUUFBUTtRQUFDLElBQUEsVUFBVSxDQVF0QztRQVI0QixXQUFBLFVBQVU7WUFBQyxJQUFBLEtBQUssQ0FRNUM7WUFSdUMsV0FBQSxLQUFLO2dCQUUzQztvQkFBOEIsNEJBQXNFO29CQUNsRyxrQkFBWSxLQUFZLEVBQUUsS0FBMkU7K0JBQ25HLGtCQUFNLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDO29CQUNqQyxDQUFDO29CQUNILGVBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQThCLFdBQUEsYUFBYSxHQUkxQztnQkFKWSxjQUFRLFdBSXBCLENBQUE7WUFFSCxDQUFDLEVBUnVDLEtBQUssR0FBTCxnQkFBSyxLQUFMLGdCQUFLLFFBUTVDO1FBQUQsQ0FBQyxFQVI0QixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVF0QztJQUFELENBQUMsRUFSbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUFRM0I7QUFBRCxDQUFDLEVBUlMsU0FBUyxLQUFULFNBQVMsUUFRbEI7QUFFRCxXQUFVLFNBQVM7SUFNakIsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFnQyxNQUF1QztRQUNoRyxNQUFNLENBQUMsSUFBSSxVQUFBLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDO0FBRUosQ0FBQyxFQVZTLFNBQVMsS0FBVCxTQUFTLFFBVWxCOztBQ1hELElBQVUsU0FBUyxDQVFsQjtBQVJELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQVEzQjtJQVJtQixXQUFBLFFBQVE7UUFBQyxJQUFBLFVBQVUsQ0FRdEM7UUFSNEIsV0FBQSxVQUFVO1lBQUMsSUFBQSxLQUFLLENBUTVDO1lBUnVDLFdBQUEsS0FBSztnQkFFM0M7b0JBQTBCLHdCQUE4RDtvQkFDdEYsY0FBWSxLQUFZLEVBQUUsS0FBdUU7K0JBQy9GLGtCQUFNLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO29CQUM3QixDQUFDO29CQUNILFdBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQTBCLFdBQUEsYUFBYSxHQUl0QztnQkFKWSxVQUFJLE9BSWhCLENBQUE7WUFFSCxDQUFDLEVBUnVDLEtBQUssR0FBTCxnQkFBSyxLQUFMLGdCQUFLLFFBUTVDO1FBQUQsQ0FBQyxFQVI0QixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVF0QztJQUFELENBQUMsRUFSbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUFRM0I7QUFBRCxDQUFDLEVBUlMsU0FBUyxLQUFULFNBQVMsUUFRbEI7QUFFRCxXQUFVLFNBQVM7SUFNakIsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFnQyxDQUFtQixFQUFFLENBQW1CLEVBQUUsS0FBdUIsRUFBRSxNQUF3QixFQUFFLEVBQXFCLEVBQUUsRUFBcUI7UUFDOUwsTUFBTSxDQUFDLElBQUksVUFBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxHQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsRUFBRSxJQUFBLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQztBQUVKLENBQUMsRUFWUyxTQUFTLEtBQVQsU0FBUyxRQVVsQjs7QUNyQ0QsSUFBVSxTQUFTLENBWWxCO0FBWkQsV0FBVSxTQUFTO0lBQUMsSUFBQSxRQUFRLENBWTNCO0lBWm1CLFdBQUEsUUFBUTtRQUUxQixJQUFpQixVQUFVLENBUTFCO1FBUkQsV0FBaUIsVUFBVTtZQUV6QjtnQkFBMkIseUJBQXFDO2dCQUNoRSxlQUFZLEtBQVksRUFBRSxLQUFxQzsyQkFDM0Qsa0JBQU0sS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0gsWUFBQztZQUFELENBQUMsQUFKRCxDQUEyQixTQUFBLGtCQUFrQixHQUk1QztZQUpZLGdCQUFLLFFBSWpCLENBQUE7UUFFSCxDQUFDLEVBUmdCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBUTFCO0lBRUgsQ0FBQyxFQVptQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQVkzQjtBQUFELENBQUMsRUFaUyxTQUFTLEtBQVQsU0FBUyxRQVlsQjtBQUVELFdBQVUsU0FBUztJQU1qQixVQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQWdDLEdBQStCO1FBQ3JGLElBQU0sRUFBRSxHQUFHLElBQUksVUFBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUMsQ0FBQztBQUVKLENBQUMsRUFaUyxTQUFTLEtBQVQsU0FBUyxRQVlsQjs7QUNURCxJQUFVLFNBQVMsQ0FRbEI7QUFSRCxXQUFVLFNBQVM7SUFBQyxJQUFBLFFBQVEsQ0FRM0I7SUFSbUIsV0FBQSxRQUFRO1FBQUMsSUFBQSxVQUFVLENBUXRDO1FBUjRCLFdBQUEsVUFBVTtZQUVyQztnQkFBMkIseUJBQStEO2dCQUN4RixlQUFZLEtBQVksRUFBRSxLQUFrRTsyQkFDMUYsa0JBQU0sS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0gsWUFBQztZQUFELENBQUMsQUFKRCxDQUEyQixTQUFBLGtCQUFrQixHQUk1QztZQUpZLGdCQUFLLFFBSWpCLENBQUE7UUFFSCxDQUFDLEVBUjRCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBUXRDO0lBQUQsQ0FBQyxFQVJtQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQVEzQjtBQUFELENBQUMsRUFSUyxTQUFTLEtBQVQsU0FBUyxRQVFsQjtBQUVELFdBQVUsU0FBUztJQU1qQixVQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQWdDLEtBQWlDO1FBQ3ZGLE1BQU0sQ0FBQyxJQUFJLFVBQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQztBQUVKLENBQUMsRUFWUyxTQUFTLEtBQVQsU0FBUyxRQVVsQjs7QUN0QkQsSUFBVSxTQUFTLENBUWxCO0FBUkQsV0FBVSxTQUFTO0lBQUMsSUFBQSxRQUFRLENBUTNCO0lBUm1CLFdBQUEsUUFBUTtRQUFDLElBQUEsVUFBVSxDQVF0QztRQVI0QixXQUFBLFVBQVU7WUFFckM7Z0JBQTBCLHdCQUFpRjtnQkFDekcsY0FBWSxLQUFZLEVBQUUsS0FBcUY7MkJBQzdHLGtCQUFNLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO2dCQUM3QixDQUFDO2dCQUNILFdBQUM7WUFBRCxDQUFDLEFBSkQsQ0FBMEIsU0FBQSxrQkFBa0IsR0FJM0M7WUFKWSxlQUFJLE9BSWhCLENBQUE7UUFFSCxDQUFDLEVBUjRCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBUXRDO0lBQUQsQ0FBQyxFQVJtQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQVEzQjtBQUFELENBQUMsRUFSUyxTQUFTLEtBQVQsU0FBUyxRQVFsQjtBQUVELFdBQVUsU0FBUztJQU1qQixVQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQWdDLENBQW1CLEVBQUUsQ0FBbUI7UUFDN0YsTUFBTSxDQUFDLElBQUksVUFBQSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0FBRUosQ0FBQyxFQVZTLFNBQVMsS0FBVCxTQUFTLFFBVWxCOztBQ25DRCxJQUFVLFNBQVMsQ0FJbEI7QUFKRCxXQUFVLFNBQVM7SUFBQyxJQUFBLFNBQVMsQ0FJNUI7SUFKbUIsV0FBQSxTQUFTO1FBRStDLENBQUM7SUFFN0UsQ0FBQyxFQUptQixTQUFTLEdBQVQsbUJBQVMsS0FBVCxtQkFBUyxRQUk1QjtBQUFELENBQUMsRUFKUyxTQUFTLEtBQVQsU0FBUyxRQUlsQjtBQUVELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQUkzQjtJQUptQixXQUFBLFFBQVE7UUFFMUI7WUFBbUcseUNBQTZEO1lBQWhLOztZQUFrSyxDQUFDO1lBQUQsNEJBQUM7UUFBRCxDQUFDLEFBQW5LLENBQW1HLFVBQUEsT0FBTyxHQUF5RDtRQUE3SSw4QkFBcUIsd0JBQXdILENBQUE7SUFFckssQ0FBQyxFQUptQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQUkzQjtBQUFELENBQUMsRUFKUyxTQUFTLEtBQVQsU0FBUyxRQUlsQjs7QUNWRCxJQUFVLFNBQVMsQ0FJbEI7QUFKRCxXQUFVLFNBQVM7SUFBQyxJQUFBLFFBQVEsQ0FJM0I7SUFKbUIsV0FBQSxRQUFRO1FBQUMsSUFBQSxhQUFhLENBSXpDO1FBSjRCLFdBQUEsYUFBYTtZQUV0QztnQkFBK0YsdUNBQStDO2dCQUE5STs7Z0JBQWlMLENBQUM7Z0JBQUQsMEJBQUM7WUFBRCxDQUFDLEFBQWxMLENBQStGLFNBQUEscUJBQXFCLEdBQThEO1lBQTVKLGlDQUFtQixzQkFBeUksQ0FBQTtRQUV0TCxDQUFDLEVBSjRCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBSXpDO0lBQUQsQ0FBQyxFQUptQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQUkzQjtBQUFELENBQUMsRUFKUyxTQUFTLEtBQVQsU0FBUyxRQUlsQjs7QUNrQ0QsSUFBVSxTQUFTLENBSWxCO0FBSkQsV0FBVSxTQUFTO0lBQUMsSUFBQSxRQUFRLENBSTNCO0lBSm1CLFdBQUEsUUFBUTtRQUFDLElBQUEsYUFBYSxDQUl6QztRQUo0QixXQUFBLGFBQWE7WUFBQyxJQUFBLFdBQVcsQ0FJckQ7WUFKMEMsV0FBQSxXQUFXO2dCQUVwRDtvQkFBOEksb0NBQTBDO29CQUF4TDs7b0JBQTBMLENBQUM7b0JBQUQsdUJBQUM7Z0JBQUQsQ0FBQyxBQUEzTCxDQUE4SSxjQUFBLG1CQUFtQixHQUEwQjtnQkFBckssNEJBQWdCLG1CQUFxSixDQUFBO1lBRTdMLENBQUMsRUFKMEMsV0FBVyxHQUFYLHlCQUFXLEtBQVgseUJBQVcsUUFJckQ7UUFBRCxDQUFDLEVBSjRCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBSXpDO0lBQUQsQ0FBQyxFQUptQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQUkzQjtBQUFELENBQUMsRUFKUyxTQUFTLEtBQVQsU0FBUyxRQUlsQjs7QUM3QkQsSUFBVSxTQUFTLENBY2xCO0FBZEQsV0FBVSxTQUFTO0lBQUMsSUFBQSxRQUFRLENBYzNCO0lBZG1CLFdBQUEsUUFBUTtRQUFDLElBQUEsYUFBYSxDQWN6QztRQWQ0QixXQUFBLGFBQWE7WUFBQyxJQUFBLFdBQVcsQ0FjckQ7WUFkMEMsV0FBQSxXQUFXO2dCQUFDLElBQUEsUUFBUSxDQWM5RDtnQkFkc0QsV0FBQSxRQUFRO29CQUU3RDt3QkFBNEIsMEJBQStGO3dCQUN6SCxnQkFBWSxLQUFZLEVBQUUsS0FBeUQsRUFBRSxLQUE4Rjs0QkFBbkwsWUFDRSxrQkFBTSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFNBT3RDOzRCQU5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtnQ0FDL0IsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBQSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0NBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dDQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQ0FDL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxDQUFDOzt3QkFDTCxDQUFDO3dCQUNILGFBQUM7b0JBQUQsQ0FBQyxBQVZELENBQTRCLFlBQUEsZ0JBQWdCLEdBVTNDO29CQVZZLGVBQU0sU0FVbEIsQ0FBQTtnQkFFSCxDQUFDLEVBZHNELFFBQVEsR0FBUixvQkFBUSxLQUFSLG9CQUFRLFFBYzlEO1lBQUQsQ0FBQyxFQWQwQyxXQUFXLEdBQVgseUJBQVcsS0FBWCx5QkFBVyxRQWNyRDtRQUFELENBQUMsRUFkNEIsYUFBYSxHQUFiLHNCQUFhLEtBQWIsc0JBQWEsUUFjekM7SUFBRCxDQUFDLEVBZG1CLFFBQVEsR0FBUixrQkFBUSxLQUFSLGtCQUFRLFFBYzNCO0FBQUQsQ0FBQyxFQWRTLFNBQVMsS0FBVCxTQUFTLFFBY2xCO0FBRUQsV0FBVSxTQUFTO0lBTWpCLFVBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBZ0MsS0FBeUQsRUFBRSxLQUEwRDtRQUNwTCxNQUFNLENBQUMsSUFBSSxVQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRixDQUFDLENBQUM7QUFFSixDQUFDLEVBVlMsU0FBUyxLQUFULFNBQVMsUUFVbEI7O0FDekJELElBQVUsU0FBUyxDQWNsQjtBQWRELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQWMzQjtJQWRtQixXQUFBLFFBQVE7UUFBQyxJQUFBLGFBQWEsQ0FjekM7UUFkNEIsV0FBQSxhQUFhO1lBQUMsSUFBQSxXQUFXLENBY3JEO1lBZDBDLFdBQUEsV0FBVztnQkFBQyxJQUFBLFFBQVEsQ0FjOUQ7Z0JBZHNELFdBQUEsUUFBUTtvQkFFN0Q7d0JBQTRCLDBCQUErRjt3QkFDekgsZ0JBQVksS0FBWSxFQUFFLEtBQXlELEVBQUUsS0FBOEY7NEJBQW5MLFlBQ0Usa0JBQU0sS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxTQU90Qzs0QkFOQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07Z0NBQy9CLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQUEsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dDQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQ0FDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0NBQy9DLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM5QixDQUFDLENBQUMsQ0FBQzs7d0JBQ0wsQ0FBQzt3QkFDSCxhQUFDO29CQUFELENBQUMsQUFWRCxDQUE0QixZQUFBLGdCQUFnQixHQVUzQztvQkFWWSxlQUFNLFNBVWxCLENBQUE7Z0JBRUgsQ0FBQyxFQWRzRCxRQUFRLEdBQVIsb0JBQVEsS0FBUixvQkFBUSxRQWM5RDtZQUFELENBQUMsRUFkMEMsV0FBVyxHQUFYLHlCQUFXLEtBQVgseUJBQVcsUUFjckQ7UUFBRCxDQUFDLEVBZDRCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBY3pDO0lBQUQsQ0FBQyxFQWRtQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQWMzQjtBQUFELENBQUMsRUFkUyxTQUFTLEtBQVQsU0FBUyxRQWNsQjtBQUVELFdBQVUsU0FBUztJQU1qQixVQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQWdDLEtBQXlELEVBQUUsS0FBMEQ7UUFDcEwsTUFBTSxDQUFDLElBQUksVUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEYsQ0FBQyxDQUFDO0FBRUosQ0FBQyxFQVZTLFNBQVMsS0FBVCxTQUFTLFFBVWxCOztBQ3BCRCxJQUFVLFNBQVMsQ0F5QmxCO0FBekJELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQXlCM0I7SUF6Qm1CLFdBQUEsUUFBUTtRQUFDLElBQUEsYUFBYSxDQXlCekM7UUF6QjRCLFdBQUEsYUFBYTtZQUFDLElBQUEsV0FBVyxDQXlCckQ7WUF6QjBDLFdBQUEsV0FBVztnQkFFcEQ7b0JBQTZCLDJCQUFtRjtvQkFDOUcsaUJBQW1CLEtBQVksRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsSUFBd0I7d0JBQXZHLFlBQ0Usa0JBQU0sS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQWtCeEI7d0JBbkJrQixXQUFLLEdBQUwsS0FBSyxDQUFPO3dCQUU3QixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsQ0FBQzt3QkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDL0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs0QkFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUM1QixDQUFDOzRCQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUNwQixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsQ0FBQzs0QkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dDQUNULEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUNyQyxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksVUFBQSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xFLENBQUM7d0JBQ0gsQ0FBQzs7b0JBQ0gsQ0FBQztvQkFDSCxjQUFDO2dCQUFELENBQUMsQUFyQkQsQ0FBNkIsY0FBQSxtQkFBbUIsR0FxQi9DO2dCQXJCWSxtQkFBTyxVQXFCbkIsQ0FBQTtZQUVILENBQUMsRUF6QjBDLFdBQVcsR0FBWCx5QkFBVyxLQUFYLHlCQUFXLFFBeUJyRDtRQUFELENBQUMsRUF6QjRCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBeUJ6QztJQUFELENBQUMsRUF6Qm1CLFFBQVEsR0FBUixrQkFBUSxLQUFSLGtCQUFRLFFBeUIzQjtBQUFELENBQUMsRUF6QlMsU0FBUyxLQUFULFNBQVMsUUF5QmxCO0FBRUQsV0FBVSxTQUFTO0lBTWpCLFVBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBZ0MsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLElBQXdCO1FBQzlILE1BQU0sQ0FBQyxJQUFJLFVBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQyxDQUFDO0lBU0YsVUFBQSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFtRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsSUFBd0I7UUFDckssSUFBTSxPQUFPLEdBQUcsSUFBSSxVQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBRUosQ0FBQyxFQTFCUyxTQUFTLEtBQVQsU0FBUyxRQTBCbEI7O0FDekRELElBQVUsU0FBUyxDQVFsQjtBQVJELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQVEzQjtJQVJtQixXQUFBLFFBQVE7UUFBQyxJQUFBLGFBQWEsQ0FRekM7UUFSNEIsV0FBQSxhQUFhO1lBRXhDO2dCQUE0QiwwQkFBdUU7Z0JBQ2pHLGdCQUFZLEtBQVksRUFBRSxLQUF5RTsyQkFDakcsa0JBQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0gsYUFBQztZQUFELENBQUMsQUFKRCxDQUE0QixTQUFBLHFCQUFxQixHQUloRDtZQUpZLG9CQUFNLFNBSWxCLENBQUE7UUFFSCxDQUFDLEVBUjRCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBUXpDO0lBQUQsQ0FBQyxFQVJtQixRQUFRLEdBQVIsa0JBQVEsS0FBUixrQkFBUSxRQVEzQjtBQUFELENBQUMsRUFSUyxTQUFTLEtBQVQsU0FBUyxRQVFsQjtBQUVELFdBQVUsU0FBUztJQU1qQixVQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLFVBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQztBQUVKLENBQUMsRUFWUyxTQUFTLEtBQVQsU0FBUyxRQVVsQjs7QUNyQkQsSUFBVSxTQUFTLENBdUJsQjtBQXZCRCxXQUFVLFNBQVM7SUFBQyxJQUFBLFFBQVEsQ0F1QjNCO0lBdkJtQixXQUFBLFFBQVE7UUFBQyxJQUFBLGFBQWEsQ0F1QnpDO1FBdkI0QixXQUFBLGFBQWE7WUFFeEM7Z0JBQTBCLHdCQUFtRTtnQkFDM0YsY0FBbUIsS0FBWSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxLQUE4QyxFQUFFLFlBQXFEO29CQUFwTCxZQUNFLGtCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsU0FnQnJCO29CQWpCa0IsV0FBSyxHQUFMLEtBQUssQ0FBTztvQkFFN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ3RELENBQUM7O2dCQUNILENBQUM7Z0JBQ0gsV0FBQztZQUFELENBQUMsQUFuQkQsQ0FBMEIsU0FBQSxxQkFBcUIsR0FtQjlDO1lBbkJZLGtCQUFJLE9BbUJoQixDQUFBO1FBRUgsQ0FBQyxFQXZCNEIsYUFBYSxHQUFiLHNCQUFhLEtBQWIsc0JBQWEsUUF1QnpDO0lBQUQsQ0FBQyxFQXZCbUIsUUFBUSxHQUFSLGtCQUFRLEtBQVIsa0JBQVEsUUF1QjNCO0FBQUQsQ0FBQyxFQXZCUyxTQUFTLEtBQVQsU0FBUyxRQXVCbEI7QUFFRCxXQUFVLFNBQVM7SUFNakIsVUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFnQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsS0FBOEMsRUFBRSxZQUFxRDtRQUN4TSxNQUFNLENBQUMsSUFBSSxVQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQztBQUVKLENBQUMsRUFWUyxTQUFTLEtBQVQsU0FBUyxRQVVsQjs7QUNsREQsSUFBVSxTQUFTLENBME1sQjtBQTFNRCxXQUFVLFNBQVM7SUFBQyxJQUFBLFNBQVMsQ0EwTTVCO0lBMU1tQixXQUFBLFNBQVM7UUFZM0IsSUFBaUIsZUFBZSxDQWdML0I7UUFoTEQsV0FBaUIsZUFBZTtZQU03QixDQUFDO1lBT0QsQ0FBQztZQUlELENBQUM7WUFVRCxDQUFDO1lBY0QsQ0FBQztZQU9ELENBQUM7WUFRRCxDQUFDO1lBUUQsQ0FBQztZQUlELENBQUM7WUFNRCxDQUFDO1lBS0QsQ0FBQztZQUlELENBQUM7WUFNRCxDQUFDO1lBT0QsQ0FBQztZQVFELENBQUM7WUFJRCxDQUFDO1lBUUQsQ0FBQztZQUlELENBQUM7WUFLRCxDQUFDO1lBTUQsQ0FBQztZQU9ELENBQUM7WUFJRixJQUFpQixXQUFXLENBOEIzQjtZQTlCRCxXQUFpQixXQUFXO2dCQU16QixDQUFDO2dCQVFELENBQUM7Z0JBY0QsQ0FBQztZQUVKLENBQUMsRUE5QmdCLFdBQVcsR0FBWCwyQkFBVyxLQUFYLDJCQUFXLFFBOEIzQjtRQUlILENBQUMsRUFoTGdCLGVBQWUsR0FBZix5QkFBZSxLQUFmLHlCQUFlLFFBZ0wvQjtRQVlBLENBQUM7SUFFSixDQUFDLEVBMU1tQixTQUFTLEdBQVQsbUJBQVMsS0FBVCxtQkFBUyxRQTBNNUI7QUFBRCxDQUFDLEVBMU1TLFNBQVMsS0FBVCxTQUFTLFFBME1sQjtBQUVELFdBQVUsU0FBUztJQUFDLElBQUEsUUFBUSxDQXVTM0I7SUF2U21CLFdBQUEsUUFBUTtRQUUxQjtZQUErRCxtQ0FBMEM7WUFDdkcseUJBQVksTUFBYyxFQUFFLElBQVksRUFBRSxLQUE4Qzt1QkFDdEYsa0JBQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBR2xDLENBQUM7WUFDSCxzQkFBQztRQUFELENBQUMsQUFORCxDQUErRCxVQUFBLE9BQU8sR0FNckU7UUFOWSx3QkFBZSxrQkFNM0IsQ0FBQTtRQUNELFdBQWlCLGVBQWU7WUFDOUI7Z0JBQTJCLHlCQUFtRTtnQkFDNUYsZUFBWSxNQUFjLEVBQUUsS0FBZ0Q7MkJBQzFFLGtCQUFNLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO2dCQUNqQyxDQUFDO2dCQUNILFlBQUM7WUFBRCxDQUFDLEFBSkQsQ0FBMkIsZUFBZSxHQUl6QztZQUpZLHFCQUFLLFFBSWpCLENBQUE7WUFBQSxDQUFDO1lBQ0Y7Z0JBQWlDLCtCQUErRTtnQkFDOUcscUJBQVksTUFBYyxFQUFFLEtBQXNEOzJCQUNoRixrQkFBTSxNQUFNLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQztnQkFDdkMsQ0FBQztnQkFDSCxrQkFBQztZQUFELENBQUMsQUFKRCxDQUFpQyxlQUFlLEdBSS9DO1lBSlksMkJBQVcsY0FJdkIsQ0FBQTtZQUFBLENBQUM7WUFDRjtnQkFBdUMscUNBQTJGO2dCQUNoSSwyQkFBWSxNQUFjLEVBQUUsS0FBNEQ7MkJBQ3RGLGtCQUFNLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxLQUFLLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0gsd0JBQUM7WUFBRCxDQUFDLEFBSkQsQ0FBdUMsZUFBZSxHQUlyRDtZQUpZLGlDQUFpQixvQkFJN0IsQ0FBQTtZQUFBLENBQUM7WUFDRjtnQkFBK0IsNkJBQTJFO2dCQUN4RyxtQkFBWSxNQUFjLEVBQUUsS0FBb0Q7MkJBQzlFLGtCQUFNLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0FBQyxBQUpELENBQStCLGVBQWUsR0FJN0M7WUFKWSx5QkFBUyxZQUlyQixDQUFBO1lBQUEsQ0FBQztZQUNGO2dCQUFvQyxrQ0FBcUY7Z0JBQ3ZILHdCQUFZLE1BQWMsRUFBRSxLQUF5RDsyQkFDbkYsa0JBQU0sTUFBTSxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQztnQkFDMUMsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBQUMsQUFKRCxDQUFvQyxlQUFlLEdBSWxEO1lBSlksOEJBQWMsaUJBSTFCLENBQUE7WUFBQSxDQUFDO1lBQ0Y7Z0JBQXFDLG1DQUF1RjtnQkFDMUgseUJBQVksTUFBYyxFQUFFLEtBQTBEOzJCQUNwRixrQkFBTSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNILHNCQUFDO1lBQUQsQ0FBQyxBQUpELENBQXFDLGVBQWUsR0FJbkQ7WUFKWSwrQkFBZSxrQkFJM0IsQ0FBQTtZQUFBLENBQUM7WUFDRjtnQkFBcUMsbUNBQXVGO2dCQUMxSCx5QkFBWSxNQUFjLEVBQUUsS0FBMEQ7MkJBQ3BGLGtCQUFNLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxLQUFLLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQUFDLEFBSkQsQ0FBcUMsZUFBZSxHQUluRDtZQUpZLCtCQUFlLGtCQUkzQixDQUFBO1lBQUEsQ0FBQztZQUNGO2dCQUEyQix5QkFBbUU7Z0JBQzVGLGVBQVksTUFBYyxFQUFFLEtBQWdEOzJCQUMxRSxrQkFBTSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztnQkFDakMsQ0FBQztnQkFDSCxZQUFDO1lBQUQsQ0FBQyxBQUpELENBQTJCLGVBQWUsR0FJekM7WUFKWSxxQkFBSyxRQUlqQixDQUFBO1lBQUEsQ0FBQztZQUNGO2dCQUFrQyxnQ0FBaUY7Z0JBQ2pILHNCQUFZLE1BQWMsRUFBRSxLQUF1RDsyQkFDakYsa0JBQU0sTUFBTSxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQztnQkFDeEMsQ0FBQztnQkFDSCxtQkFBQztZQUFELENBQUMsQUFKRCxDQUFrQyxlQUFlLEdBSWhEO1lBSlksNEJBQVksZUFJeEIsQ0FBQTtZQUFBLENBQUM7WUFDRjtnQkFBMkIseUJBQW1FO2dCQUM1RixlQUFZLE1BQWMsRUFBRSxLQUFnRDsyQkFDMUUsa0JBQU0sTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0gsWUFBQztZQUFELENBQUMsQUFKRCxDQUEyQixlQUFlLEdBSXpDO1lBSlkscUJBQUssUUFJakIsQ0FBQTtZQUFBLENBQUM7WUFDRjtnQkFBMkIseUJBQXdDO2dCQUNqRSxlQUFZLE1BQWM7MkJBQ3hCLGtCQUFNLE1BQU0sRUFBRSxTQUFTLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0gsWUFBQztZQUFELENBQUMsQUFKRCxDQUEyQixlQUFlLEdBSXpDO1lBSlkscUJBQUssUUFJakIsQ0FBQTtZQUFBLENBQUM7WUFDRjtnQkFBK0IsNkJBQTJFO2dCQUN4RyxtQkFBWSxNQUFjLEVBQUUsS0FBb0Q7MkJBQzlFLGtCQUFNLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0FBQyxBQUpELENBQStCLGVBQWUsR0FJN0M7WUFKWSx5QkFBUyxZQUlyQixDQUFBO1lBQUEsQ0FBQztZQUNGO2dCQUFnQyw4QkFBNkU7Z0JBQzNHLG9CQUFZLE1BQWMsRUFBRSxLQUFxRDsyQkFDL0Usa0JBQU0sTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0gsaUJBQUM7WUFBRCxDQUFDLEFBSkQsQ0FBZ0MsZUFBZSxHQUk5QztZQUpZLDBCQUFVLGFBSXRCLENBQUE7WUFBQSxDQUFDO1lBQ0Y7Z0JBQTRCLDBCQUFxRTtnQkFDL0YsZ0JBQVksTUFBYyxFQUFFLEtBQWlEOzJCQUMzRSxrQkFBTSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQztnQkFDbEMsQ0FBQztnQkFDSCxhQUFDO1lBQUQsQ0FBQyxBQUpELENBQTRCLGVBQWUsR0FJMUM7WUFKWSxzQkFBTSxTQUlsQixDQUFBO1lBQUEsQ0FBQztZQUNGO2dCQUFzQyxvQ0FBeUY7Z0JBQzdILDBCQUFZLE1BQWMsRUFBRSxLQUEyRDsyQkFDckYsa0JBQU0sTUFBTSxFQUFFLG9CQUFvQixFQUFFLEtBQUssQ0FBQztnQkFDNUMsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBQUMsQUFKRCxDQUFzQyxlQUFlLEdBSXBEO1lBSlksZ0NBQWdCLG1CQUk1QixDQUFBO1lBQUEsQ0FBQztZQUNGO2dCQUEwQix3QkFBaUU7Z0JBQ3pGLGNBQVksTUFBYyxFQUFFLEtBQStDOzJCQUN6RSxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztnQkFDaEMsQ0FBQztnQkFDSCxXQUFDO1lBQUQsQ0FBQyxBQUpELENBQTBCLGVBQWUsR0FJeEM7WUFKWSxvQkFBSSxPQUloQixDQUFBO1lBQUEsQ0FBQztZQUNGO2dCQUFnQyw4QkFBNkU7Z0JBQzNHLG9CQUFZLE1BQWMsRUFBRSxLQUFxRDsyQkFDL0Usa0JBQU0sTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0gsaUJBQUM7WUFBRCxDQUFDLEFBSkQsQ0FBZ0MsZUFBZSxHQUk5QztZQUpZLDBCQUFVLGFBSXRCLENBQUE7WUFBQSxDQUFDO1lBQ0Y7Z0JBQXNDLG9DQUEwSTtnQkFDOUssMEJBQVksTUFBYyxFQUFFLE9BQThCLEVBQUUsS0FBMkQ7MkJBQ3JILGtCQUFNLE1BQU0sRUFBRSxXQUFTLE9BQVMsRUFBRSxLQUFLLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQUFDLEFBSkQsQ0FBc0MsZUFBZSxHQUlwRDtZQUpZLGdDQUFnQixtQkFJNUIsQ0FBQTtZQUFBLENBQUM7WUFDRixJQUFpQixXQUFXLENBZ0IzQjtZQWhCRCxXQUFpQixXQUFXO2dCQUMxQjtvQkFBa0MsZ0NBQTZGO29CQUM3SCxzQkFBWSxNQUFjLEVBQUUsS0FBbUU7K0JBQzdGLGtCQUFNLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7b0JBQ3hDLENBQUM7b0JBQ0gsbUJBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQWtDLGVBQWUsR0FJaEQ7Z0JBSlksd0JBQVksZUFJeEIsQ0FBQTtnQkFBQSxDQUFDO2dCQUNGO29CQUFnQyw4QkFBeUY7b0JBQ3ZILG9CQUFZLE1BQWMsRUFBRSxLQUFpRTsrQkFDM0Ysa0JBQU0sTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUM7b0JBQ3RDLENBQUM7b0JBQ0gsaUJBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQWdDLGVBQWUsR0FJOUM7Z0JBSlksc0JBQVUsYUFJdEIsQ0FBQTtnQkFBQSxDQUFDO2dCQUNGO29CQUErQiw2QkFBdUY7b0JBQ3BILG1CQUFZLE1BQWMsRUFBRSxLQUFnRTsrQkFDMUYsa0JBQU0sTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUM7b0JBQ3JDLENBQUM7b0JBQ0gsZ0JBQUM7Z0JBQUQsQ0FBQyxBQUpELENBQStCLGVBQWUsR0FJN0M7Z0JBSlkscUJBQVMsWUFJckIsQ0FBQTtnQkFBQSxDQUFDO1lBQ0osQ0FBQyxFQWhCZ0IsV0FBVyxHQUFYLDJCQUFXLEtBQVgsMkJBQVcsUUFnQjNCO1FBQ0gsQ0FBQyxFQTVHZ0IsZUFBZSxHQUFmLHdCQUFlLEtBQWYsd0JBQWUsUUE0Ry9CO1FBRUQsSUFBTSxLQUFLLEdBQUcsVUFBTyxDQUFJLEVBQUUsQ0FBSTtZQUM3QixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUM7UUFFRjtZQUVFLGdCQUFtQixLQUFZO2dCQUFaLFVBQUssR0FBTCxLQUFLLENBQU87Z0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBQSxLQUFLLEVBQUUsUUFBUSxDQUFxQixDQUFDO2dCQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFDTSxzQkFBSyxHQUFaLFVBQWEsSUFBNkQsRUFBRSxNQUFzRCxFQUFFLE1BQTJDO2dCQUM3SyxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDbEQsRUFBRSxFQUFFLE1BQU07b0JBQ1YsR0FBRyxFQUFFLE1BQU07b0JBQ1gsSUFBSSxNQUFBO2lCQUNMLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ1osQ0FBQztZQUNNLDRCQUFXLEdBQWxCLFVBQW1CLE1BQTZCLEVBQUUsS0FBMEM7Z0JBQzFGLElBQU0sRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO29CQUN4RCxFQUFFLEVBQUUsS0FBSztvQkFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ1osQ0FBQztZQUNNLGtDQUFpQixHQUF4QixVQUF5QixDQUE2QyxFQUFFLENBQTZDLEVBQUUsQ0FBNkMsRUFBRSxDQUE4QyxFQUFFLEtBQTBDO2dCQUM5UCxJQUFNLGlCQUFpQixHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7b0JBQzdFLEVBQUUsRUFBRSxLQUFLO2lCQUNWLENBQUMsQ0FBQztnQkFDSCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkcsQ0FBQztnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixDQUFDO1lBQ00sMEJBQVMsR0FBaEIsVUFBaUIsUUFBK0QsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsTUFBdUQsRUFBRSxNQUEyQztnQkFDcE8sSUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7b0JBQ3RELEVBQUUsRUFBRSxNQUFNO29CQUNWLEdBQUcsRUFBRSxNQUFNO29CQUNYLFFBQVEsVUFBQTtvQkFDUixFQUFFLElBQUE7b0JBQ0YsRUFBRSxJQUFBO29CQUNGLEVBQUUsSUFBQTtvQkFDRixFQUFFLElBQUE7aUJBQ0gsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDWixDQUFDO1lBQ00sK0JBQWMsR0FBckIsVUFBc0IsS0FBd0QsRUFBRSxLQUEwQztnQkFDeEgsSUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDWixDQUFDO1lBQ00sZ0NBQWUsR0FBdEIsVUFBdUIsS0FBeUQsRUFBRSxNQUFvRCxFQUFFLEtBQTBDO2dCQUFoRyx1QkFBQSxFQUFBLFdBQW9EO2dCQUNwSSxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDWixDQUFDO1lBQ00sZ0NBQWUsR0FBdEIsVUFBdUIsS0FBeUQsRUFBRSxNQUEyQyxFQUFFLE1BQTJDO2dCQUN4SyxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ1osQ0FBQztZQUNNLHNCQUFLLEdBQVosVUFBYSxLQUFzQixFQUFFLElBQXVCO2dCQUMxRCxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNmLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDVCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ3BCLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ1osQ0FBQztZQUNNLDZCQUFZLEdBQW5CLFVBQW9CLFlBQXdCLEVBQUUsUUFBcUQsRUFBRSxLQUEwQztnQkFBM0gsNkJBQUEsRUFBQSxnQkFBd0I7Z0JBQUUseUJBQUEsRUFBQSxzQkFBcUQ7Z0JBQ2pHLElBQU0sRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO29CQUN6RCxFQUFFLEVBQUUsS0FBSztvQkFDVCxZQUFZLGNBQUE7b0JBQ1osUUFBUSxVQUFBO2lCQUNULENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ1osQ0FBQztZQUNNLHNCQUFLLEdBQVosVUFBYSxJQUFZLEVBQUUsbUJBQW1EO2dCQUM1RSxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDbEQsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLG1CQUFtQixxQkFBQTtpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDWixDQUFDO1lBQ00sc0JBQUssR0FBWixVQUFhLE1BQTRDO2dCQUN2RCxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztvQkFDbEIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBQSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFDTSwyQkFBVSxHQUFqQixVQUFrQixRQUE0QixFQUFFLE1BQXNDLEVBQUUsS0FBMEM7Z0JBQ2hJLElBQU0sRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO29CQUN2RCxFQUFFLEVBQUUsS0FBSztvQkFDVCxRQUFRLFVBQUE7b0JBQ1IsTUFBTSxRQUFBO2lCQUNQLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ1osQ0FBQztZQUNNLHVCQUFNLEdBQWIsVUFBYyxDQUFrQixFQUFFLEtBQTBDO2dCQUMxRSxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDbkQsRUFBRSxFQUFFLEtBQUs7b0JBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNQLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDUixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFDTSxpQ0FBZ0IsR0FBdkIsVUFBd0IsS0FBMEQsRUFBRSxNQUFvRCxFQUFFLEtBQTBDO2dCQUFoRyx1QkFBQSxFQUFBLFdBQW9EO2dCQUN0SSxJQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFDTSxxQkFBSSxHQUFYLFVBQVksSUFBdUIsRUFBRSxLQUEwQztnQkFDN0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDbEUsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDZixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFDTSwyQkFBVSxHQUFqQixVQUFrQixLQUFvRDtnQkFDcEUsSUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDWixDQUFDO1lBQ08sMEJBQVMsR0FBakIsVUFBa0IsRUFBNkM7Z0JBQzdELEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDTywwQkFBUyxHQUFqQixVQUFrQixRQUF3RyxFQUFFLE1BQStDO2dCQUEzSyxpQkFjQztnQkFiQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztvQkFDbEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ25CLEtBQUssT0FBTzs0QkFDVixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUMvRSxLQUFLLENBQUM7d0JBQ1IsS0FBSyxTQUFTOzRCQUNaLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ2pGLEtBQUssQ0FBQzt3QkFDUixLQUFLLE1BQU07NEJBQ1QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDOUUsS0FBSyxDQUFDO29CQUNWLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0gsYUFBQztRQUFELENBQUMsQUFuS0QsSUFtS0M7UUFuS1ksZUFBTSxTQW1LbEIsQ0FBQTtJQUVILENBQUMsRUF2U21CLFFBQVEsR0FBUixrQkFBUSxLQUFSLGtCQUFRLFFBdVMzQjtBQUFELENBQUMsRUF2U1MsU0FBUyxLQUFULFNBQVMsUUF1U2xCO0FBRUQsV0FBVSxTQUFTO0lBTWpCLFVBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUc7UUFDdkIsTUFBTSxDQUFDLElBQUksVUFBQSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQztBQUVKLENBQUMsRUFWUyxTQUFTLEtBQVQsU0FBUyxRQVVsQiJ9
return SavageDOM;

}));
