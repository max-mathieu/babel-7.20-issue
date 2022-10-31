module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'keyword-spacing': 'error',
  },
};
