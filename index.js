module.exports = {
  extends: 'stylelint-config-standard',
  rules: {

    // Disable ESlint as we intentionally break alphabetical order rule here.
    /* eslint-disable sort-keys */

    // Override `stylelint-config-standard`:
    indentation: 4, // Long lines are rare in CSS so we can afford bigger indentation.

    // Extend with more strict rules:
    'declaration-no-important': true, // Except for utility classes and third-party overrides, !important can be avoided.
    'declaration-property-value-disallowed-list': [
      {
        '/^background/': [ // Background images should be stored locally.
          'http:',
          'https:',
        ],
        '/^transition/': [ // Only hardware-accelerable properties should be transitioned.
          '/all/',
        ],
      },
      {
        message: 'Transitioning all properties and absolute background URLs are '
          + 'not allowed (declaration-property-value-disallowed-list)',
      },
    ],
    'max-nesting-depth': [ // Because too complex nesting is hard to read.
      2, {
        ignore: ['blockless-at-rules'],
      },
    ],
    'selector-max-compound-selectors': 3, // Keep selector specificity as low as possible by default.
    'selector-max-id': 0, // In most cases, IDs are for JavaScript, not CSS.
    'selector-max-specificity': '0,4,0', // Keep selector specificity as low as possible by default.
    'selector-max-universal': 0, // Most of the time, we should know what elements or classes we are targeting.
    'selector-no-qualifying-type': true, // In most cases, it only needlessly increases selector specificity.

    /* eslint-enable sort-keys */
  },
};
