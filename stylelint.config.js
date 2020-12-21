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
    'no-descending-specificity': null
  }
}
