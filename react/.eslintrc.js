/* eslint-disable max-len */
module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es2021": true,
  },
  "extends": [
    "google",
  ],
  "parserOptions": {
    "ecmaVersion": 12,
  },
  "rules": {
    "max-len": ["error", { "code": 100 }],
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
    "no-undef": "error",
  },
};
