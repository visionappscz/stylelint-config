module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // Override stylelint-config-standard
    indentation: 4,

    // Extend with more strict rules
    // (Disable ESlint as we intentionally break alphabetical order rule here.)
    'at-rule-no-vendor-prefix': true, // eslint-disable-line sort-keys
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': [
      {
        '/^background/': [
          'http:',
          'https:',
        ],
        '/^transition/': [
          '/all/',
        ],
      },
      {
        message: 'Transitioning all properties and absolute background URLs are '
          + 'not allowed (declaration-property-value-disallowed-list)',
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
    'selector-max-id': 0,
    'selector-max-specificity': '0,4,0',
    'selector-max-universal': 0,
    'selector-nested-pattern': [
      '^&:',
      {
        message: 'Only pseudo-classes and pseudo-elements can be nested (selector-nested-pattern)',
      },
    ],
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
  },
};
