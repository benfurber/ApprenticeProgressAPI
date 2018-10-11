module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "off",
  },
  plugins: [
    "graphql",
    "jest",
  ],
};
