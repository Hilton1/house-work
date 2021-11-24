module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
  },
};
