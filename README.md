# @yiliang114/config

![schedule run](https://github.com/yiliang114/config/workflows/main%20action/badge.svg)

## workflow

1. 修改的代码。
2. 运行生成 `changeset` 文件。

```bash
# 提交变更集
pnpm exec changeset
#
# # 提升版本
# pnpm version-packages # changeset version
# # 发包
# pnpm release
```

## Note

### 工作流

https://blog.csdn.net/qq_21567385/article/details/122361591

### eslint

基于 `eslint-config-airbnb-base` 修改的 JavaScript 代码规范

## config

1. eslint
   1. js/jsx/ts/tsx
   2. vue
2. prettier

## add

```
pnpm add eslint-plugin-import --filter @yiliang114/eslint-config
```

## publish

```
npm publish --access public
```

## TODO

https://github.com/wiremore/eslint-config-wiremore#readme

eslint-plugin-import@latest 的作用 ？

## 参考

1. https://liruifengv.com/posts/github-action-release/
