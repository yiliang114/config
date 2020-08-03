module.exports = {
  root: true,
  // TODO:
  env: {
    // TODO:
    browser: true,
    commonjs: true,
    jquery: true,
    es6: false,
    node: false,
  },
  // TODO: 编译器配置 ？
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2018,
  },
  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    "eslint-config-airbnb-base",
  ].map(require.resolve),
  // 自定义规则覆盖 extends 部分规范
  rules: {
    // sort-keys 要求对象属性按序排列 (sort-keys)
    "sort-keys": ["error", "asc", { caseSensitive: true, natural: false, minKeys: 2 }],
    quotes: ["error", "double"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 生成环境禁止 console & debugger
    strict: "off", // 不检查有无 "use strict"
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["ConditionalExpression"],
      },
    ], // 2 个空格缩进
    "max-len": [
      "error",
      100,
      4,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ], // 代码最大长度为 100，且不限制注释最大长度
    "comma-dangle": ["error", "only-multiline"], // 允许多行时多余行末逗号可有可无
    "arrow-parens": "off", // 不检查箭头函数参数括号
    "no-multi-assign": "off", // 允许链式赋值
    "no-param-reassign": "off", // 允许参数可修改赋值
    // 允许引用无关的依赖
    "import/no-extraneous-dependencies": "off",
    // 允许隐藏设定好的文件名后缀
    "import/extensions": "off",
    // 允许异步require
    "import/no-dynamic-require": "off",
    // 允许单个导出不为 default
    "import/prefer-default-export": "off",
    // 允许不在顶部require
    "global-require": "off",
    // 变量必须被使用，允许参数不被使用
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    // 允许一次声明多个变量
    "one-var": "off",
    // 允许变量在同一行中声明
    "one-var-declaration-per-line": "off",
    // 允许语句内容为空
    "no-empty": "off",
    // 允许箭头函数返回值换行
    "implicit-arrow-linebreak": "off",
    // 允许在循环中使用await
    "no-await-in-loop": "off",
    // 禁止无效的表达式，允许部分逻辑短路表达式
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],
    // 禁止使用特定的语法
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in语法将循环遍历整个原型链，这或许并不是想要的结果；请使用Object.{keys,values,entries}以遍历生成想要的数组。",
      },
      {
        selector: "LabeledStatement",
        message: "label语法是GOTO的一种形式，使用它们会使代码混乱，难以维护和理解。",
      },
      {
        selector: "WithStatement",
        message: "在严格模式下不允许使用with，因为它使代码无法预测和优化。",
      },
    ],
    // 禁止使用++/--，仅允许在循环中使用
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // 解构规则
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    // 允许 Class 普通方法没有使用 this
    "class-methods-use-this": "off",
    // 对象字面量简写语法，字符串键值也可简写
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: false,
        ignoreConstructors: false,
      },
    ],
    // 允许标识符中有悬空下划线
    "no-underscore-dangle": "off",
    // 允许if作为唯一语句被包裹在else块中
    "no-lonely-if": "off",
    // 允许在else中有return存在
    "no-else-return": "off",
    "accessor-pairs": [
      "error",
      {
        getWithoutSet: false,
        setWithoutGet: true,
      },
    ],
    "array-bracket-newline": "off",
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": "off",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    "block-scoped-var": "error",
    "block-spacing": ["error", "always"],
    "brace-style": "off",
    "callback-return": "off",
    camelcase: "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "comma-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "comma-style": ["error", "last"],
    "comment-ratio": "off",
    complexity: [
      "error",
      {
        max: 20,
      },
    ],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "off",
    "consistent-this": "off",
    "constructor-super": "error",
    curly: ["error", "multi-line", "consistent"],
    "default-case": "off",
    "dot-location": ["error", "property"],
    "dot-notation": "off",
    "eol-last": "off",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "for-direction": "error",
    "func-call-spacing": ["error", "never"],
    "func-id-match": "off",
    "func-name-matching": [
      "error",
      "always",
      {
        includeCommonJSModuleExports: false,
      },
    ],
    "func-names": "off",
    "func-style": "off",
    "generator-star-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "getter-return": [
      "error",
      {
        allowImplicit: false,
      },
    ],
    "global-require": "off",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "init-declarations": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": [
      "error",
      {
        afterColon: true,
        beforeColon: false,
        mode: "strict",
      },
    ],
    "keyword-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    license: "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "max-depth": ["error", 5],
    "max-len": "off",
    "max-lines": "off",
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 7],
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-cap": [
      "error",
      {
        capIsNew: false,
        newIsCap: true,
        properties: true,
      },
    ],
    "new-parens": "error",
    "newline-per-chained-call": "off",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-catch-shadow": "off",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "except-parens"],
    "no-confusing-arrow": "error",
    "no-console": "off",
    "no-const-assign": "error",
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "no-continue": "off",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "off",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-empty-character-class": "error",
    "no-empty-function": [
      "error",
      {
        allow: ["functions", "arrowFunctions"],
      },
    ],
    "no-empty-pattern": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-invalid-this": "off",
    "no-irregular-whitespace": [
      "error",
      {
        skipComments: false,
        skipRegExps: true,
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "off",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "off",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "off",
    "no-multi-spaces": [
      "error",
      {
        exceptions: {
          BinaryExpression: false,
          ImportDeclaration: true,
          Property: true,
          VariableDeclarator: true,
        },
        ignoreEOLComments: true,
      },
    ],
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 3,
        maxBOF: 1,
        maxEOF: 1,
      },
    ],
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-modules": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "off",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": [
      "error",
      {
        allow: ["resolve", "reject", "done", "cb", "callback", "error", "err", "e"],
        builtinGlobals: false,
        hoist: "functions",
      },
    ],
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-sync": "off",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "off",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "off",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    "no-unused-labels": "error",
    "no-unused-vars": [
      "error",
      {
        args: "none",
        caughtErrors: "none",
        vars: "all",
      },
    ],
    "no-use-before-define": [
      "error",
      {
        classes: false,
        functions: false,
        variables: false,
      },
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "off",
    "no-useless-rename": "error",
    "no-useless-return": "off",
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": [
      "error",
      "beside",
      {
        overrides: {
          while: "below",
        },
      },
    ],
    "object-curly-newline": [
      "error",
      {
        consistent: true,
        multiline: true,
      },
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: false,
      },
    ],
    "object-property-newline": "off",
    "object-shorthand": "off",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "off",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-template": "off",
    "quote-props": "off",
    quotes: [
      "error",
      "single",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    radix: "error",
    "require-await": "off",
    "require-jsdoc": "off",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true,
      },
    ],
    "semi-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "semi-style": ["error", "last"],
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "ignore",
        asyncArrow: "always",
        named: "never",
      },
    ],
    "space-in-parens": ["error", "never"],
    "space-indent": "off",
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        nonwords: false,
        words: true,
      },
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        block: {
          balanced: true,
          exceptions: ["*"],
        },
      },
    ],
    strict: ["error", "never"],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "use-isnan": "error",
    "valid-jsdoc": "off",
    "valid-typeof": "error",
    "vars-on-top": "off",
    "wrap-iife": [
      "error",
      "inside",
      {
        functionPrototypeMethods: true,
      },
    ],
    "wrap-regex": "off",
    "yield-star-spacing": ["error", "after"],
    yoda: [
      "error",
      "never",
      {
        onlyEquality: true,
      },
    ],
  },
};
