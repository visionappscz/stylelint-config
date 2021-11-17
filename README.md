# stylelint-config-visionapps

[![npm version](http://img.shields.io/npm/v/@visionappscz/stylelint-config-visionapps.svg)](https://www.npmjs.org/package/@visionappscz/stylelint-config-visionapps)
[![Build Status](https://github.com/visionappscz/stylelint-config-visionapps/workflows/Build%20and%20run%20tests/badge.svg)](https://github.com/visionappscz/stylelint-config-visionapps/actions)
![dependencies Status](https://img.shields.io/david/visionappscz/stylelint-config-visionapps)
![devDependencies Status](https://img.shields.io/david/dev/visionappscz/stylelint-config-visionapps)
[![Downloads per month](https://img.shields.io/npm/dm/@visionappscz/stylelint-config-visionapps.svg?style=flat)](https://npmcharts.com/compare/@visionappscz/stylelint-config-visionapps)

> VisionApps' shareable config for [Stylelint](https://github.com/stylelint/stylelint).

Extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
with more strict rules and giving preference to indentation with 4 spaces.

To see the rules that this config uses, please read the
[config itself](./index.js).

## Installation

Install [Stylelint](https://github.com/stylelint/stylelint) and this config:

```bash
$ npm install --save-dev @visionappscz/stylelint-config-visionapps
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

## Known Gotchas

- **A unit must be present inside `calc()` expressions even with zero-length
  values.** This config disallows using a unit for zero-length values which
  is useful most of the time so we recommend throwing a
  `stylelint-disable length-zero-no-unit` comment to suppress this rule when
  necessary.

- **Max line length is exceeded with inline data URIs.** You may need to turn
  this rule off with `stylelint-disable max-line-length`.

Head to
[Styleint docs](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/ignore-code.md)
to see how to ignore code fragments during lint.

## Usage with SCSS Syntax

The config is broadly compatible with SCSS syntax. You will only need to adjust
the rule that checks at rules:

```json
{
  "extends": "@visionappscz/stylelint-config-visionapps",
  "rules": {
    "at-rule-no-unknown": [
      true, {
        "ignoreAtRules": [
          "at-root",
          "content",
          "debug",
          "each",
          "else",
          "else if",
          "error",
          "extend",
          "for",
          "forward",
          "function",
          "if",
          "include",
          "mixin",
          "return",
          "use",
          "warn",
          "while"
        ]
      }
    ]
  }
}
```

To go even further, you can check SCSS specific rules with
[stylelint-scss](https://github.com/kristerkari/stylelint-scss) plugin.

There is also
[stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)
which
[disables check of at rules entirely](https://github.com/kristerkari/stylelint-config-recommended-scss/blob/master/index.js).
