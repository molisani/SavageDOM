/*
 * SavageDOM 1.0.0-alpha.2 (https://github.com/molisani/SavageDOM) 
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
        function Element(paper, el, attrs) {
            this.paper = paper;
            this._id = randomId();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2YWdlRE9NLmVsZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnRzLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvY29sb3IudHMiLCIuLi9zcmMvYXR0cmlidXRlL2NvbG9yLW1hdHJpeC50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvZGltZW5zaW9uLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9saXN0LnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9tYXRyaXgudHMiLCIuLi9zcmMvYXR0cmlidXRlL251bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvbnVtYmVyLW9wdGlvbmFsLW51bWJlci50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvcG9pbnQudHMiLCIuLi9zcmMvYXR0cmlidXRlL3ByZXNlcnZlLWFzcGVjdC1yYXRpby50cyIsIi4uL3NyYy9hdHRyaWJ1dGUvdHJhbnNmb3JtLnRzIiwiLi4vc3JjL2F0dHJpYnV0ZS9ib3gudHMiLCIuLi9zcmMvcGFwZXIudHMiLCIuLi9zcmMvZWxlbWVudC50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9jaXJjbGUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9lbGxpcHNlLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvbGluZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3NoYXBlL3BhdGgudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9wb2x5Z29uLnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvc2hhcGUvcG9seWxpbmUudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9zaGFwZS9yZWN0LnRzIiwiLi4vc3JjL2VsZW1lbnRzL3JlbmRlcmFibGUvZ3JvdXAudHMiLCIuLi9zcmMvZWxlbWVudHMvcmVuZGVyYWJsZS9pbWFnZS50cyIsIi4uL3NyYy9lbGVtZW50cy9yZW5kZXJhYmxlL3RleHQudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9ncmFkaWVudC50cyIsIi4uL3NyYy9lbGVtZW50cy9ub24tcmVuZGVyYWJsZS9wYWludC1zZXJ2ZXIvZ3JhZGllbnQvbGluZWFyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL3BhaW50LXNlcnZlci9ncmFkaWVudC9yYWRpYWwudHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvcGFpbnQtc2VydmVyL3BhdHRlcm4udHMiLCIuLi9zcmMvZWxlbWVudHMvbm9uLXJlbmRlcmFibGUvbWFya2VyLnRzIiwiLi4vc3JjL2VsZW1lbnRzL25vbi1yZW5kZXJhYmxlL21hc2sudHMiLCIuLi9zcmMvZWxlbWVudHMvZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQVUsU0FBUyxDQU1sQjtBQU5ELFdBQVUsU0FBUztJQUVKLGVBQUssR0FBRyw0QkFBNEIsQ0FBQztJQUVyQyxlQUFLLEdBQUcsOEJBQThCLENBQUM7QUFFdEQsQ0FBQyxFQU5TLFNBQVMsS0FBVCxTQUFTLFFBTWxCOztBQ05ELElBQVUsU0FBUyxDQWVsQjtBQWZELFdBQVUsU0FBUztJQUVqQixJQUFNLEtBQUssR0FBRyxVQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxJQUFhLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUM7QUFhL0UsQ0FBQyxFQWZTLFNBQVMsS0FBVCxTQUFT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QUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNSLENBQUM7b0JBQ0QsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixDQUFDLElB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
return SavageDOM;

}));
