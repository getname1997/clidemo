module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  rules: {
    // 自己写一些想配置的规则

  },
  overrides: [{
    files: ['*.vue', '*.tsx', '*.js','*.ts'],
    rules: {
      // 这里写覆盖规则
      // 不校验起的文件名
      '@typescript-eslint/rule-name': 0,
      "vue/multi-word-component-names":0
    },
  }],
};
