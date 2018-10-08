module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "graphql/template-strings": ['error', {
      env: 'apollo',
      schemaJson: require('./schema.json'),
  },
  plugins: [
    'graphql'
  ],
  globals: [
    "console": false
  ]
};