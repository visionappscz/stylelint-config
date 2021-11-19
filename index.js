module.exports = {
  extends: 'stylelint-config-standard',
  rules: {

    // Disable ESlint as we intentionally break alphabetical order rule here.
    /* eslint-disable sort-keys */

    // Override stylelint-config-standard:
    indentation: 4,

    // Extend with more strict rules:
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
    'max-nesting-depth': [
      2, {
        ignore: ['blockless-at-rules'],
      },
    ],
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,4,0',
    'selector-max-universal': 0,
    'selector-no-qualifying-type': true,

    /* eslint-enable sort-keys */
  },
};
