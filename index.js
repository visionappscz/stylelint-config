module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // Override stylelint-config-standard:
    indentation: 4,
    'number-leading-zero': 'never',

    // Extend with more strict rules:
    'at-rule-no-vendor-prefix': true,
    'declaration-no-important': true,
    'declaration-property-value-blacklist': [
      {
        '/^transition/': [
          '/all/',
        ],
        '/^background/': [
          'http:',
          'https:',
        ],
        '/^border/': [
          'none',
        ],
      },
      {
        message: 'Transitioning all properties, absolute background URLs and `border: none` are '
          + 'black-listed (declaration-property-value-blacklist)',
      },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'never',
    'max-line-length': 120,
    'max-nesting-depth': [
      2, {
        ignore: ['blockless-at-rules'],
      },
    ],
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-attribute-quotes': 'always',
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,3,0',
    'selector-nested-pattern': [
      '^&:',
      {
        message: 'Only pseudo-classes and pseudo-elements can be nested (selector-nested-pattern)',
      },
    ],
    'selector-no-id': true,
    'selector-no-universal': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
};
