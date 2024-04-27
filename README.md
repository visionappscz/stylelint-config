# @visionappscz/stylelint-config

[![npm version](https://img.shields.io/npm/v/@visionappscz/stylelint-config?label=npm%20package&logo=npm)](https://www.npmjs.org/package/@visionappscz/stylelint-config)
[![Node version](https://img.shields.io/node/v/@visionappscz/stylelint-config.svg?style=flat&logo=nodedotjs)](http://nodejs.org/download/)
[![Stylelint version](https://img.shields.io/npm/dependency-version/@visionappscz/stylelint-config/peer/stylelint?logo=stylelint)][Stylelint]
[![Build status](https://github.com/visionappscz/stylelint-config/workflows/Build%20and%20test/badge.svg)](https://github.com/visionappscz/stylelint-config/actions)
[![Downloads per month](https://img.shields.io/npm/dm/@visionappscz/stylelint-config.svg?style=flat)](https://npmcharts.com/compare/@visionappscz/stylelint-config)
[![HitCount](http://hits.dwyl.com/@visionappscz/stylelint-config.svg?style=flat)](http://hits.dwyl.com/@visionappscz/stylelint-config)

VisionApps' shareable collection of configs for [Stylelint]:

- extends [stylelint-config-standard],
- adds rules to **encourage low specificity** and **avoid nesting**,
- gives preference to indentation of **4 spaces** instead of 2,
- includes additional configs for **SCSS** and **CSS Modules**.

## Installation

Install [Stylelint] and this config:

```bash
$ npm install --save-dev stylelint @visionappscz/stylelint-config
```

## Basic Usage

Apply the config in your Stylelint config:

```json
{
  "extends": "@visionappscz/stylelint-config"
}
```

To see the rules that this config uses, please read the
[main config itself](./index.js).

### Optional: Checking Properties Order

To further extend control over coding style of your stylesheets, you can also
check for properties order:

```json
{
  "extends": [
    "@visionappscz/stylelint-config",
    "@visionappscz/stylelint-config/order"
  ]
}
```

The `order` config enforces properties order given by following categories:

1. `all` properties,
2. `content`,
3. position,
4. `appearance`,
5. box model,
6. typography,
7. decorations,
8. effects and transforms,
9. interactions,
10. transitions and animations.

To see the order of individual properties this config prescribes, please read
the [`order` config itself](./order.js).

👉 `order` config is entirely independent on the main config and thus can be
listed anywhere in the `extends` section of your config. However, that's not the
case with our other extending configs.

## Usage with SCSS

To lint SCSS files (i.e. `*.scss`, not `*.sass`), add the `scss` config that
extends [stylelint-config-standard-scss], fixes its incompatibilities with our
main config, and overrides some rules to better work with complex stylesheets:

```json
{
  "extends": [
    "@visionappscz/stylelint-config",
    "@visionappscz/stylelint-config/scss"
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
    "@visionappscz/stylelint-config",
    "@visionappscz/stylelint-config/cssModules"
  ]
}
```

Or along with SCSS:

```json
{
  "extends": [
    "@visionappscz/stylelint-config",
    "@visionappscz/stylelint-config/scss",
    "@visionappscz/stylelint-config/cssModules"
  ]
}
```

⚠️ Please mind the order of extended configurations, `cssModules` must come
**after the main config,** or **after the `scss` config,** if present.

⚠️ **Only essential features of CSS Modules are recognized by this config.**
Namely, just camelCase notation for class names and `:global` pseudo selectors
are covered. **All other features** of CSS Modules (like `composes`, `:local`,
`@value`, etc.) are considered non-essential as they can be implemented with
Sass (which we encourage) and thus **are not recognized** by this config.

To see the rules that this config uses, please read the
[`cssModules` config itself](./cssModules.js).

ℹ️ There is a popular [stylelint-config-css-modules] config that recognizes all
features of CSS Modules.

## Full Example

Example of all configs combined:

```json
{
  "extends": [
    "@visionappscz/stylelint-config",
    "@visionappscz/stylelint-config/order",
    "@visionappscz/stylelint-config/scss",
    "@visionappscz/stylelint-config/cssModules"
  ]
}
```

## FAQ

<details>
  <summary>
      I want indentation of 2 spaces. How do I change it?
  </summary>

Just override the `indentation` rule in your Stylelint config:

```json
{
  "extends": "@visionappscz/stylelint-config",
  "rules": {
    "indentation": 2
  }
}
```
</details>

[Stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss
[CSS Modules]: https://github.com/css-modules/css-modules
[stylelint-config-css-modules]: https://github.com/pascalduez/stylelint-config-css-modules
