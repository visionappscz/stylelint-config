# @visionappscz/stylelint-config

[![npm version](https://img.shields.io/npm/v/@visionappscz/stylelint-config?label=npm%20package&logo=npm)](https://www.npmjs.org/package/@visionappscz/stylelint-config)
[![Node version](https://img.shields.io/node/v/@visionappscz/stylelint-config.svg?style=flat&logo=nodedotjs)](http://nodejs.org/download/)
[![Stylelint version](https://img.shields.io/npm/dependency-version/@visionappscz/stylelint-config/peer/stylelint?logo=stylelint)][Stylelint]
[![Build status](https://github.com/visionappscz/stylelint-config/workflows/Build%20and%20test/badge.svg)](https://github.com/visionappscz/stylelint-config/actions)
[![Downloads per month](https://img.shields.io/npm/dm/@visionappscz/stylelint-config.svg?style=flat)](https://npmcharts.com/compare/@visionappscz/stylelint-config)

VisionApps' collection of shareable configs for [Stylelint]:

- extends [stylelint-config-standard] with rules to **encourage low specificity** and **avoid nesting**,
- includes additional configs for checking **order**, **SCSS** and **CSS Modules**.

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

👉 To see the rules that this config uses, please read the
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

The `order` config enforces a consistent order of content in your declaration blocks:

1. Sass variables,
2. CSS custom properties,
3. Sass `@extend`,
4. single-line Sass `@include`,
5. declarations,
6. nested rules.

For better flexibility, block at-rules (like `@media`, `@supports`, and also Sass `@if`, `@each`, etc.) can be placed
anywhere in the declaration block.

Furthermore, properties in the declarations must be ordered by following categories:

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

👉 To see the order of individual properties this config prescribes, please read
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

👉 To see the rules that this config uses, please read the
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

👉 To see the rules that this config uses, please read the
[`cssModules` config itself](./cssModules.js).

ℹ️ There is a popular [stylelint-config-css-modules] config that recognizes all
features of CSS Modules.

## Stylistic Rules

Stylistic rules (like indentation etc.) [were dropped][stylelint-v16-stylistic-rules]
in Stylelint v16. If you need to enforce them, you can use
[`@stylistic/stylelint-config`][stylistic-config]:

```json
{
  "extends": [
    "@visionappscz/stylelint-config",
    "@stylistic/stylelint-config"
  ]
}
```

Or, if you feel brave enough and don't need granular configuration of the stylistic rules,
you can use [Prettier].

## Full Example

Example of all configs combined:

```json
{
  "extends": [
    "@visionappscz/stylelint-config",
    "@visionappscz/stylelint-config/order",
    "@visionappscz/stylelint-config/scss",
    "@visionappscz/stylelint-config/cssModules",
    "@stylistic/stylelint-config"
  ]
}
```

## FAQ

<details>
  <summary>
    How do I change the indentation?
  </summary>

### With Stylistic

If using the `@stylistic` plugin, just override the `@stylistic/indentation` rule in your Stylelint config:

```json
{
  "extends": [
    "@visionappscz/stylelint-config",
    "@stylistic/stylelint-config"
  ],
  "rules": {
    "@stylistic/indentation": 2
  }
}
```

👉 See the [`@stylistic/stylelint-config`][stylistic-config] documentation for more options.

### With Prettier

If using Prettier, you can configure the indentation in your Prettier config:

```json
{
  "tabWidth": 2
}
```

Or in your [`.editorconfig`][editorconfig]:

```ini
[*]
indent_size = 2
```

👉 See [Prettier] documentation for more options.
</details>

[Stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss
[CSS Modules]: https://github.com/css-modules/css-modules
[stylelint-config-css-modules]: https://github.com/pascalduez/stylelint-config-css-modules
[stylelint-v16-stylistic-rules]: https://stylelint.io/migration-guide/to-16/#removed-deprecated-stylistic-rules
[stylistic-config]: https://github.com/stylelint-stylistic/stylelint-config
[Prettier]: https://prettier.io
[editorconfig]: https://editorconfig.org
