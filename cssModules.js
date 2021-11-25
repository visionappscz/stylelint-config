module.exports = {
  rules: {

    // Provide essential compatibility with CSS Modules:
    'selector-class-pattern': [ // Require camelCase pattern for class names as they are picked up by dot notation in JS.
      '^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$',
      {
        message: 'Expected class selector to be camelCase',
      },
    ],
    'selector-pseudo-class-no-unknown': [ // Allow :global() pseudo class necessary to produce global classes.
      true,
      {
        ignorePseudoClasses: [
          'global',
        ],
      },
    ],
  },
};
