const config = require('../');
const stylelint = require('stylelint');

const validCss = (
`@import url(x.css);
@import url(y.css);

/**
 * Multi-line comment
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
    background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
    box-sizing: border-box;
    display: block;
    color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
    padding: 10px;
    top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
    .selector {
        /* Flush to parent comment */
        transform: translate(1, 1) scale(3);
    }
}

@media (orientation: portrait), projection and (color) {
    .selector-i + .selector-ii {
        background: color(rgb(0, 0, 0) lightness(50%));
        font-family: helvetica, "arial black", sans-serif;
    }
}

/* Flush single line comment */
@media
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    .selector {
        background-image:
            repeating-linear-gradient(
                -45deg,
                transparent,
                #fff 25px,
                rgba(255, 255, 255, 1) 50px
            );
        margin: 10px;
        margin-bottom: 5px;
        box-shadow:
            0 1px 1px #000,
            0 1px 0 #fff,
            2px 2px 1px 1px #ccc inset;
        height: 10rem;
    }

    /* Flush nested single line comment */
    .selector::after {
        content: '→';
        background-image: url(x.svg);
    }
}

`);

const invalidCss = (
`.element {
    color: #000 !important;
}

`);

describe('flags no warnings with valid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    });
  });

  it('did not error', () => (
    result.then(data => (
      expect(data.errored).toBeFalsy()
    ))
  ));

  it('flags no warnings', () => (
    result.then(data => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  ));
});

describe('flags warnings with invalid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it('did error', () => (
    result.then(data => (
      expect(data.errored).toBeTruthy()
    ))
  ));

  it('flags one warning', () => (
    result.then(data => (
      expect(data.results[0].warnings.length).toBe(1)
    ))
  ));

  it('correct warning text', () => (
    result.then(data => (
      expect(data.results[0].warnings[0].text).toBe('Unexpected !important (declaration-no-important)')
    ))
  ));

  it('correct rule flagged', () => (
    result.then(data => (
      expect(data.results[0].warnings[0].rule).toBe('declaration-no-important')
    ))
  ));

  it('correct severity flagged', () => (
    result.then(data => (
      expect(data.results[0].warnings[0].severity).toBe('error')
    ))
  ));

  it('correct line number', () => (
    result.then(data => (
      expect(data.results[0].warnings[0].line).toBe(2)
    ))
  ));

  it('correct column number', () => (
    result.then(data => (
      expect(data.results[0].warnings[0].column).toBe(18)
    ))
  ));
});
