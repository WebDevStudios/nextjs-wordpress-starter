// https://stylelint.io/user-guide/configure
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'max-line-length': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'string-quotes': 'single'
  }
}
