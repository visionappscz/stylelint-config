# stylelint-config-visionapps

[![npm version](http://img.shields.io/npm/v/@visionappscz/stylelint-config-visionapps.svg)](https://www.npmjs.org/package/@visionappscz/stylelint-config-visionapps)
[![Build Status](https://github.com/visionappscz/stylelint-config-visionapps/workflows/Build%20and%20run%20tests/badge.svg)](https://github.com/visionappscz/stylelint-config-visionapps/actions)
[![Downloads per month](https://img.shields.io/npm/dm/@visionappscz/stylelint-config-visionapps.svg?style=flat)](https://npmcharts.com/compare/@visionappscz/stylelint-config-visionapps)

> VisionApps' shareable config for [Stylelint].

Extends [stylelint-config-standard] with more strict rules and giving
preference to indentation with 4 spaces.

To see the rules that this config uses, please read the
[config itself](./index.js).

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

### Checking Properties Order

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

To see the properties order that this config prescribes, please read the
[`order` config itself](./order.js).

## Usage with SCSS

To lint SCSS files (i.e. `*.scss`, not `*.sass`), add one more config that
extends [stylelint-config-standard-scss] and fixes its incompatibilities with
our main config:

```json
{
  "extends": [
    "@visionappscz/stylelint-config-visionapps",
    "@visionappscz/stylelint-config-visionapps/order",
    "@visionappscz/stylelint-config-visionapps/scss"
  ]
}
```

⚠️ Please mind the order of extended configurations, `scss` must come last.

To see the rules that this config uses, please read the
[`scss` config itself](./scss.js).

[Stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss
