module.exports = {
    rules: {
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
    },
}