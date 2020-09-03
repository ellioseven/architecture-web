module.exports = {
  extends: [
    "eslint:recommended",
    "standard",
    "standard-react",
    "plugin:react-hooks/recommended"
  ],
  env: {
    browser: true,
    es6: true
  },
  parser: "@babel/eslint-parser",
  plugins: [
    "@babel"
  ],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ]
    }
  ],
  rules: {
    "no-console": ["error", { allow: ["error"] }],
    quotes: ["error", "double"],
    "space-before-function-paren": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "no-unused-expressions": "off",
    "react/jsx-curly-spacing": ["error", { when: "always" }],
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/require-default-props": "error",
    "react/default-props-match-prop-types": "error"
  }
}
