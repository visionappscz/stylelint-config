// Based on https://github.com/stylelint/stylelint-config-standard/blob/36.0.0/__tests__/index.test.mjs

import {
  beforeEach, describe, it,
} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import stylelint from 'stylelint';

// eslint-disable-next-line import/extensions -- Specify the extension because Node is unable to detect module format.
import config from '../cssModules.js';

describe('CSS Modules', () => {
  describe('flags no warnings with valid CSS', () => {
    const validCss = fs.readFileSync('./__tests__/css-modules-valid.css', 'utf-8');
    let result;

    beforeEach(async () => {
      result = await stylelint.lint({
        code: validCss,
        config,
      });
    });

    it('did not error', () => {
      assert.equal(result.errored, false);
    });

    it('flags no warnings', () => {
      assert.equal(result.results[0].warnings.length, 0);
    });
  });

  describe('deprecated rules are excluded', () => {
    const ruleNames = Object.keys(config.rules);

    it('is not empty', () => {
      assert.ok(ruleNames.length > 0);
    });

    // eslint-disable-next-line no-restricted-syntax -- Keep the test copied from `stylelint-config-standard` as is.
    for (const ruleName of ruleNames) {
      it(`${ruleName}`, async () => {
        const rule = await stylelint.rules[ruleName];

        assert.ok(!rule.meta.deprecated);
      });
    }
  });
});
