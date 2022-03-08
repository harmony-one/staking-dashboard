module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/recommended", "@vue/prettier"],

  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prefer-const": "off",
    "no-var": "off",
    "vue/no-unused-components": "off",
    "vue/no-use-v-if-with-v-for": "warn",
    "vue/require-v-for-key": "warn"
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier',
    '@vue/typescript',
    'prettier'
  ]
};
