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
                "message": "You can use element.clientLeft, element.clientRight, element.clientHeight, and element.clientWidth to get an element's dimensions."
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
        "no-implicit-globals": [
            "error", 
            {
                "lexicalBindings": true
            }
        ]
    },
    extends: [
        "./index.js"
    ]
}