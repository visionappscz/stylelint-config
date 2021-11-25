const fs = require('fs');
const stylelint = require('stylelint');
const configCssModules = require('../cssModules');
const configMain = require('..');
const configOrder = require('../order');
const configScss = require('../scss');

const validCss = fs.readFileSync('./__tests__/css-valid.css', 'utf-8');
const validCssModules = fs.readFileSync('./__tests__/css-modules-valid.css', 'utf-8');
const validScss = fs.readFileSync('./__tests__/scss-valid.scss', 'utf-8');
const invalidCss = fs.readFileSync('./__tests__/css-invalid.css', 'utf-8');

describe('flags no warnings with valid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config: configMain,
    });
  });

  it('did not error', () => (
    result.then((data) => (
      expect(data.errored).toBeFalsy()
    ))
  ));

  it('flags no warnings', () => (
    result.then((data) => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  ));
});

describe('flags no warnings with valid CSS order', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config: configOrder,
    });
  });

  it('did not error', () => (
    result.then((data) => (
      expect(data.errored).toBeFalsy()
    ))
  ));

  it('flags no warnings', () => (
    result.then((data) => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  ));
});

describe('flags no warnings with valid SCSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validScss,
      config: configScss,
    });
  });

  it('did not error', () => (
    result.then((data) => (
      expect(data.errored).toBeFalsy()
    ))
  ));

  it('flags no warnings', () => (
    result.then((data) => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  ));
});

describe('flags no warnings with valid CSS Modules', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCssModules,
      config: configCssModules,
    });
  });

  it('did not error', () => (
    result.then((data) => (
      expect(data.errored).toBeFalsy()
    ))
  ));

  it('flags no warnings', () => (
    result.then((data) => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  ));
});

describe('flags warnings with invalid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config: configMain,
    });
  });

  it('did error', () => (
    result.then((data) => (
      expect(data.errored).toBeTruthy()
    ))
  ));

  it('flags one warning', () => (
    result.then((data) => (
      expect(data.results[0].warnings.length).toBe(1)
    ))
  ));

  it('correct warning text', () => (
    result.then((data) => (
      expect(data.results[0].warnings[0].text).toBe('Unexpected !important (declaration-no-important)')
    ))
  ));

  it('correct rule flagged', () => (
    result.then((data) => (
      expect(data.results[0].warnings[0].rule).toBe('declaration-no-important')
    ))
  ));

  it('correct severity flagged', () => (
    result.then((data) => (
      expect(data.results[0].warnings[0].severity).toBe('error')
    ))
  ));

  it('correct line number', () => (
    result.then((data) => (
      expect(data.results[0].warnings[0].line).toBe(2)
    ))
  ));

  it('correct column number', () => (
    result.then((data) => (
      expect(data.results[0].warnings[0].column).toBe(18)
    ))
  ));
});
