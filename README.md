# stylelint-config-visionapps

[![npm version](http://img.shields.io/npm/v/@visionappscz/stylelint-config-visionapps.svg)](https://www.npmjs.org/package/@visionappscz/stylelint-config-visionapps)
[![Build Status](https://github.com/visionappscz/stylelint-config-visionapps/workflows/Build%20and%20run%20tests/badge.svg)](https://github.com/visionappscz/stylelint-config-visionapps/actions)
[![Downloads per month](https://img.shields.io/npm/dm/@visionappscz/stylelint-config-visionapps.svg?style=flat)](https://npmcharts.com/compare/@visionappscz/stylelint-config-visionapps)

> VisionApps' shareable config for [Stylelint].

- It extends [stylelint-config-standard],
- adds **more strict rules**,
- gives preference to indentation with **4 spaces** instead of 2,
- contains additional configs for **SCSS** and **CSS Modules**.

To see the rules that this config uses, please read the
[main config itself](./index.js).

## Installation

Install [Stylelint] and this config:

```bash
$ npm install --save-dev stylelint @visionappscz/stylelint-config-visionapps
```

## Usage

Apply the config in your Stylelint config:

```json
{
  "extends": "@visionappscz/stylelint-config-visionapps"
}
```

### Optional: Checking Properties Order

To further extend control over coding style of your stylesheets, you can also
check for properties order:

```json
{
  "extends": [
    "@visionappscz/stylelint-config-visionapps",
    "@visionappscz/stylelint-config-visionapps/order"
  ]
}
```

👉 `order` config is entirely independent on the main config and thus can be
listed anywhere in the `extends` section of your config. However, that's not the
case with our other extending configs.

To see the properties order that this config prescribes, please read the
[`order` config itself](./order.js).

## Usage with SCSS

To lint SCSS files (i.e. `*.scss`, not `*.sass`), add the `scss` config that
extends [stylelint-config-standard-scss] and fixes its incompatibilities with
our main config:

```json
{
  "extends": [
    "@visionappscz/stylelint-config-visionapps",
    "@visionappscz/stylelint-config-visionapps/scss"
  ]
}
```

⚠️ Please mind the order of extended configurations, `scss` config must come
**after the main config.**

To see the rules that this config uses, please read the
[`scss` config itself](./scss.js).

## Usage with CSS Modules

To lint CSS files in project that leverages [CSS Modules], drop in the
`cssModules` config that fixes key incompatibilities of CSS Modules syntax with
the main config:

```json
{
  "extends": [
    "@visionappscz/stylelint-config-visionapps",
    "@visionappscz/stylelint-config-visionapps/cssModules"
  ]
}
```

Or along with SCSS:

```json
{
  "extends": [
    "@visionappscz/stylelint-config-visionapps",
    "@visionappscz/stylelint-config-visionapps/scss",
    "@visionappscz/stylelint-config-visionapps/cssModules"
  ]
}
```

⚠️ Please mind the order of extended configurations, `cssModules` must come
**after the main config,** or **after the `scss` config,** if present.

⚠️ **Only essential features of CSS Modules are recognized by this config.**
Namely, just camelCase notation for class names and `:global` pseudo selectors
are covered. All other features of CSS Modules (like `composes`, `:local`, or
`@value`) are considered non-essential as they can be implemented with Sass
(which we encourage) and thus are not recognized by this config.

To see the rules that this config uses, please read the
[`cssModules` config itself](./cssModules.js).

ℹ️ There is a popular [stylelint-config-css-modules] config that recognizes all
features of CSS Modules.

## Full Example

Example of all configs combined:

```json
{
  "extends": [
    "@visionappscz/stylelint-config-visionapps",
    "@visionappscz/stylelint-config-visionapps/order",
    "@visionappscz/stylelint-config-visionapps/scss",
    "@visionappscz/stylelint-config-visionapps/cssModules"
  ]
}
```

[Stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss
[CSS Modules]: https://github.com/css-modules/css-modules
[stylelint-config-css-modules]: https://github.com/pascalduez/stylelint-config-css-modules
