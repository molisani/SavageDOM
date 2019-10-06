# SavageDOM - [![npm version](https://badge.fury.io/js/savagedom.svg)](https://badge.fury.io/js/savagedom) [![Build Status](https://travis-ci.org/molisani/SavageDOM.svg?branch=master)](https://travis-ci.org/molisani/SavageDOM) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

SavageDOM is a lightweight module to create and manipulate SVG elements.

## Getting Started

### Installation

- A direct download of the minified output is available in the [dist](./dist/) directory
  - Available via the [`jsdelivr`](https://www.jsdelivr.com/package/npm/savagedom) cdn
- `npm i -P savagedom` to support bundlers

### Usage

Automatically-generated documentation is available [here](https://molisani.github.io/SavageDOM/index.html).

This module functions as a utility wrapper on top of the existing DOM element definitons. All augmentations are manually applied by this module so no prototype manipulation happens.

#### Default Export `element`

- `element(svgElement, props?)`
  - Wraps an `SVGElement` and returns the corresponding `SavageDOMElement`
  - An optional property object can also be specified, which will be applied to the new element

- `element.<tagName>(props?)`
  - Invoking any method on `element` will construct a new `SavageDOMElement` with that `tagName`
  - An optional property object can also be specified, which will be applied to the new element

#### `SavageDOMElement` wrapper

The `SavageDOMElement` type is an additive wrapper, so any method that requires an `SVGElement` will accept a `SavageDOMElement` instead.

- `SavageDOMElement.get(key)`
  - Fully-typed attribute access
  - Combines both native SVG attributes as well as available CSS style attributes
  - Returns deserialized value (depends on attribute)

- `SavageDOMElement.set(key, value)`
  - Fully-typed attribute access
  - Combines both native SVG attributes as well as available CSS style attributes
  - Default serialization assumes `value` can be coerced to `string`
  - Additional processing exists for `<funciri>` and `list-of` types

- `SavageDOMElement.once(event)`
  - Utility wrapper around one time event listener

- `SavageDOMElement.add(svgElement, prefix?)`
  - Adds any SVGElement beneath this element
  - Optional argument to prepend instead of append (default)

- `SavageDOMElement.add.<tagName>(props?)`
  - Identical to `element.<tagName>(props?)` for constructing new elements
  - All element created this way will be appended to current element

- `SavageDOMElement.rm(svgElement)`
  - Utility wrapper around `Node.removeChild`

- `SavageDOMElement.inject(document)`
  - Inserts a copy of a `Document` into the current element
  - `Document` must be an SVG document with a top-level `<svg>` tag
  - This method will modify the input `Document` by migrating all `defs` to the parent `<svg>` of this element
  - All contents will be added inside of a `<g>` element
  - The same `Document` can be injected more than once independently

- `SavageDOMElement.sub`
  - A live `ArrayLike` object that contains all sub-elements of this element
  - Accessing any sub-elements will return them as a wrapped `SavageDOMElement`

- `SavageDOMElement.subByTag.<tagName>`
  - A live `ArrayLike` object that contains all sub-elements with the corresponding `tagName` under this element
  - Accessing any sub-elements will return them as a wrapped `SavageDOMElement`
