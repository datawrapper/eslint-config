## A shared set of eslint rules to be used across Datawrapper projects.

To use this config, install it via NPM:

`npm install -D @datawrapper/eslint-config`

Then you can include it in your project's eslint configuration, which most probably lives in its `package.json`:

```json
"eslintConfig": {
    "extends": "@datawrapper/eslint-config"
}
```

For chart embeds, there is a particular restrictive set of rules that limits the use of certain `window` and `document` attributes:

```json
"eslintConfig": {
    "extends": "@datawrapper/eslint-config/chart-plugin"
}
```

This config does not include the necessary parser and plugins for use with Svelte. Here's how the `eslint-config` for a chart plugin would look in practice: 

```json
"eslintConfig": {
    "parser": "babel-eslint",
    "extends": [
        "@datawrapper/eslint-config/chart-plugin",
        "plugin:@tivac/svelte/svelte"
    ],
    "plugins": [
        "html",
        "@tivac/svelte"
    ]
},
```
