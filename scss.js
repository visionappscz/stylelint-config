module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {

    // Disable ESlint as we intentionally break alphabetical order rule here.
    /* eslint-disable sort-keys */

    // Turn `comment-no-empty` back on for empty CSS comments since `scss/comment-no-empty` is turned off later on:
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md
    'comment-no-empty': true,

    // Restrict nesting:
    'selector-nested-pattern': [
      '^&:',
      {
        message: 'Only pseudo-classes and pseudo-elements can be nested (selector-nested-pattern)',
      },
    ],

    // Override `stylelint-config-standard-scss`:
    'scss/at-function-pattern': [ // Prefer _ over - for private functions.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected function name to be kebab-case (private functions must start with _)',
      },
    ],
    'scss/at-mixin-argumentless-call-parentheses': 'always', // So it's always written the same way.
    'scss/at-mixin-pattern': [ // Prefer _ over - for private mixins.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected mixin name to be kebab-case (private mixins must start with _)',
      },
    ],
    'scss/comment-no-empty': null, // Allow empty lines in structured block comments.
    'scss/dollar-variable-colon-space-after': 'always-single-line', // Support multi-line variable definitions.
    'scss/dollar-variable-empty-line-before': null, // Turn off to support grouping variables using empty lines.
    'scss/dollar-variable-pattern': [ // Prefer _ over - for private variables.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected variable to be kebab-case (private variables must start with _)',
      },
    ],
    'scss/operator-no-newline-before': null, // Allow operator on new line because multiline expressions are better comprehensible that way.
    'scss/percent-placeholder-pattern': [ // Prefer _ over - for private placeholders.
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected placeholder to be kebab-case (private placeholders must start with _)',
      },
    ],

    /* eslint-enable sort-keys */
  },
};
