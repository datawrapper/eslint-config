module.exports = {
    eslintConfig: {
        parser: "babel-eslint",
        parserOptions: {
            ecmaVersion: 6,
        },
        rules: {
            "no-restricted-properties": [
                "error",
                {
                    "object": "window",
                    "property": "innerHeight",
                    "message": "Please use vis.size() to get the chart embed dimensions."
                },
                {
                    "object": "window",
                    "property": "innerWidth",
                    "message": "Please use vis.size() to get the chart embed dimensions."
                },
                {
                    "object": "window",
                    "property": "documentElement",
                    "message": "Please use vis.size() to get the chart embed dimensions."
                },
                {
                    "object": "document",
                    "property": "querySelector",
                    "message": "Please use [yourRootElement].querySelector instead."
                },
                {
                    "object": "document",
                    "property": "querySelectorAll",
                    "message": "Please use [yourRootElement].querySelectorAll instead."
                }
            ],
            "no-restricted-globals": [
                "warn",
                "window",
                "document",
                "documentElement"
            ],
            "no-console": [
                "error",
                {
                    "allow": [
                        "warn",
                        "error"
                    ]
                }
            ],
            "camelcase": [
                "warn",
                {
                    "ignoreDestructuring": true,
                    "properties": "never"
                }
            ],
            "@tivac/svelte/property-ordering": "off",
            "@tivac/svelte/onupdate": "off"
        },
        extends: [
            "plugin:@tivac/svelte/svelte"
        ],
        plugins: [
            "html",
            "@tivac/svelte"
        ]
    }
}