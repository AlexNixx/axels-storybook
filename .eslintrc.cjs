module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-console": "warn",
    "no-alert": "warn",
    "no-debugger": "warn",
    "max-lines": ["error", 1000],
    "max-lines-per-function": ["error", 100],
    "max-params": ["error", 7],
    "max-len": [
      "error",
      {
        "code": 120
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "camelcase": [
      "error",
      {
        "properties": "always"
      }
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "object-curly-spacing": ["warn", "always"],
    "space-before-blocks": "warn",
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "space-infix-ops": "error",
    "comma-dangle": ["error", "never"],
    "semi": ["warn", "always"],
    "dot-notation": "error",
    "quotes": ["error", "single"],
    "no-extra-parens": [
      "warn",
      "all",
      {
        "ignoreJSX": "all"
      }
    ]
  },

}
