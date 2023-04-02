module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['prettier', '@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  plugins: ['prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-expressions': 'off',
  },
};
