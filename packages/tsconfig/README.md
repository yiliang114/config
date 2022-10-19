## @yiliang114/tsconfig

Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @yiliang114/tsconfig
yarn add --dev @yiliang114/tsconfig
```

Add to your `tsconfig.json`:

```json
"extends": "@yiliang114/tsconfig/tsconfig.json"
```

---

The `tsconfig.json`:

```jsonc
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "@yiliang114/tsconfig",

  "compilerOptions": {
    "lib": ["es2021"],
    "module": "commonjs",
    "target": "es2021",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  }
}
```
