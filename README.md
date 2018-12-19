# SavageDOM - [![npm version](https://badge.fury.io/js/savagedom.svg)](https://badge.fury.io/js/savagedom) [![Build Status](https://travis-ci.org/molisani/SavageDOM.svg?branch=master)](https://travis-ci.org/molisani/SavageDOM) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Getting Started

### Installation

- A direct download of the minified output is available in the [dist](./dist/) directory
- `npm install SavageDOM --save`
- `bower install SavageDOM --save`

### Usage

The library is distributed as a single ES6 JavaScript file. This library has a runtime dependency on `rxjs` and `d3` (but only `d3-color` and `d3-interpolation`). The documentation can be found [here](https://molisani.github.io/SavageDOM/index.html), but due to TypeDoc's poor support for some advanced TypeScript features it is always good to revert to the definition file.

- **Core**

  - `Element<SVGElement, Attributes>` - The base class for all elements created by this library
  - `Context` - Stores the `<svg>` context for element creation
  - Attributes, including the base `Attribute<T>` class
    - Core attributes: `Number`, `Dimension`, `Point`, `Color`
    - Complex attributes: `Transform`, `Color Matrix`
    - Derived attributes: `Inherit`, `Length`, `Angle`, `Paint`
    - [Element attribute caterogies](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute): `Presentation`, `Textual`

- **Elements** - Includes everything in core and also features additional, common svg elements.

  - Renderable: `<circle>`, `<ellipse>`, `<line>`, `<polygon>`, `<polyline>`, `<path>`, `<rect>`, `<image>`, `<text>`, `<g>`
  - NonRenderable: `<linearGradient>`, `<radialGradient>`, `<pattern>`, `<marker>`, `<mask>`
  - Filter (`<filter>`) with primitives: `<feBlend>`, `<feColorMatrix>`, `<feComponentTransfer>`, `<feComposite>`, `<feConvolveMatrix>`, `<feDiffuseLighting>`, `<feDisplacementMap>`, `<feFlood>`, `<feGaussianBlur>`, `<feImage>`, `<feMerge>`, `<feMergeNode>`, `<feMorphology>`, `<feOffset>`, `<feSpecularLighting>`, `<feTile>`, `<feTurbulence>`, `<feFuncR>`, `<feFuncG>`, `<feFuncB>`, `<feFuncA>`, `<feDistantLight>`, `<fePointLight>`, `<feSpotLight>`

- **Animation** - Provides the functionality to animate attributes or set dynamic attributes.

  - Dynamic: Constantly updating attribute value (ex: `MousePosition`)
  - Animation
    - Define animation endpoint as another set of attributes
    - Control easing with functions (linear, quadratic, exponent, etc.)
    - Makes use of ES6 Promises for animation completion (therefore, all versions with animation target ES6 instead of ES5)
