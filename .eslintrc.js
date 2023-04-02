module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['prettier'],
  overrides: [],
  plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
