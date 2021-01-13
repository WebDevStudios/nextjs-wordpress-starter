module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:jsdoc/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    jsdoc: {
      unnamedRootBase: ['props'],
      tagNamePreference: {
        returns: 'return'
      }
    }
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'jsdoc'],
  rules: {
    'func-style': ['error', 'declaration'],
    'jsdoc/check-indentation': 1,
    'jsdoc/check-line-alignment': [1, 'always'],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ]
  }
}
