# SavageDOM - [![npm version](https://badge.fury.io/js/savagedom.svg)](https://badge.fury.io/js/savagedom) [![Builds](https://api.travis-ci.org/repositories/molisani/SavageDOM?branch=master)](https://travis-ci.org/molisani/SavageDOM)
Object-oriented, DOM-wrapping SVG manipulation library written in TypeScript.

## Getting Started

### Installation

- Direct downloads are available in the [dist](./dist/) directory, and come in several versions:
  - Core [.js](./dist/SavageDOM.core.js), [.d.ts](./dist/SavageDOM.core.d.ts)
  - Elements [.js](./dist/SavageDOM.elem.js), [.d.ts](./dist/SavageDOM.elem.d.ts)
  - Animation [.js](./dist/SavageDOM.anim.js), [.d.ts](./dist/SavageDOM.anim.d.ts)
  - Everything [.js](./dist/SavageDOM.js), [.d.ts](./dist/SavageDOM.d.ts)
- `npm install SavageDOM --save`
- `bower install SavageDOM --save`

### Usage

The library is distributed as an ES6 JavaScript. The documentation can be found [here](https://molisani.github.io/SavageDOM/index.html), but due to TypeDoc's poor support for TypeScript 2.1 features it is always good to revert to the definition file.

### Version Differences

- **Core**

  - `Element<SVGElement, Attributes>` - The base class for all elements created by this library
  - `Paper` - Stores the `<svg>` context for element creation
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