# stylelint-config-visionapps

[![NPM version](http://img.shields.io/npm/v/@visionappscz/stylelint-config-visionapps.svg)](https://www.npmjs.org/package/@visionappscz/stylelint-config-visionapps)
[![Build Status](https://travis-ci.org/visionappscz/stylelint-config-visionapps.svg?branch=master)](https://travis-ci.org/visionappscz/stylelint-config-visionapps)
[![dependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps/status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps)
[![peerDependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps/peer-status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps?type=peer)
[![devDependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps/dev-status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps?type=dev)
[![Downloads per month](https://img.shields.io/npm/dm/@visionappscz/stylelint-config-visionapps.svg?style=flat)](https://npmcharts.com/compare/@visionappscz/stylelint-config-visionapps)

> VisionApps' shareable config for [Stylelint](https://github.com/stylelint/stylelint).

Extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with
more strict rules and giving preference to indentation with 4 spaces.

To see the rules that this config uses, please read the [config itself](./index.js).

## Installation

Install [Stylelint](https://github.com/stylelint/stylelint) and this config:

```bash
$ npm install --save-dev stylelint @visionappscz/stylelint-config-visionapps
```

## Usage

Apply the config in your `.stylelintrc` file:

```json
{
  "extends": "@visionappscz/stylelint-config-visionapps"
}
```

### Suggested Extension

To further extend control over coding style of your stylesheets, you can also check for rules order
using [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin along with our config
[@visionappscz/stylelint-config-visionapps-order](https://github.com/visionappscz/stylelint-config-visionapps-order).

## Using with SCSS Syntax

The config is broadly compatible with SCSS syntax. You will only need to adjust the rule that
checks at rules:

```json
{
  "extends": "@visionappscz/stylelint-config-visionapps",
  "rules": {
    "at-rule-no-unknown": [
      true, {
        "ignoreAtRules": [
          "content",
          "each",
          "else",
          "else if",
          "error",
          "function",
          "if",
          "include",
          "mixin",
          "return"
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
which [disables check of at rules entirely](https://github.com/kristerkari/stylelint-config-recommended-scss/blob/master/index.js).  
