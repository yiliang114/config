## @yiliang114/tsconfig

Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @yiliang114/tsconfig
yarn add --dev @yiliang114/tsconfig
```

Add to your `tsconfig.json`:

```json
"extends": "@yiliang114/tsconfig",
```

---

The `tsconfig.json`:

```json
{
  "extends": "@yiliang114/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```
