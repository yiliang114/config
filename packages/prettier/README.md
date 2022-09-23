# @yiliang114/prettier-config

> Personal prettier configuration.

## Usage

JSON:

```json
// .prettierrc.json
"@yiliang114/prettier-config"
```

.prettierrc:

```json
"@yiliang114/prettier-config"
```

JS:

```js
// prettier.config.js or .prettierrc.js
module.exports = require('@yiliang114/prettier-config');
```

Reference it in your `package.json`:

```json
{
  "name": "@yiliang114/prettier-config",
  "version": "0.0.2",
  "prettier": "@yiliang114/prettier-config"
}
```

## Tips

After modifying the prettier configuration, if it does not take effect, restart editors such as vscode.
