module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
  }
};
