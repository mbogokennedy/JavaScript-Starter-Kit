module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    mocha: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "comma-dangle": 0,
    "import/no-extraneous-dependencies": 0,
    "no-console": 0
  },
};
