module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'eslint-config-prettify-base',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      'babel-eslint': ['.js', '.jsx', '.json'],
    },
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '_' }],

    'import/no-named-default': 'off', // 关闭 import/no-named-default
    'no-await-in-loop': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-await-in-loop': 'off', // 禁止在循环中出现 await
    'no-var': 'error', // 不能使用 var 声明变量
    'no-extra-semi': 'error',
    'import/extensions': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    indent: ['error', 2, { SwitchCase: 1 }], // error类型，缩进 2 个空格
    'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
    'eol-last': 0, // 不检测新文件末尾是否有空行
    semi: ['error', 'always'], // 在语句后面加分号
    quotes: ['error', 'single', { avoidEscape: true }], // 字符串使用单双引号,double,single
    'arrow-parens': 0,
    'no-new': 0, //允许使用 new 关键字
    // 'comma-dangle': [2, 'never'], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，always-multiline多行模式必须带逗号，单行模式不能带逗号
    'no-undef': 0,
  },
};
