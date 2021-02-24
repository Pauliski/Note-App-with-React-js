module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
    },
    plugins: ['react'],
    extends: ['airbnb-base', 'eslint:all', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        version: 'detect',
        flowVersion: '0.53'
      }
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      'comma-dangle': ['error', 'never'],
      'no-param-reassign': ['error', { props: false }],
      'class-methods-use-this': 0
    }
  };