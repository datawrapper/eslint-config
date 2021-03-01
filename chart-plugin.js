module.exports = {
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
                "property": "getBoundingClientRect",
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
        ]
    },
    extends: [
        "./index.js"
    ]
}