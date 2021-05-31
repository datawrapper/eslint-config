module.exports = {
    rules: {
        'no-console': [
            'error',
            {
                allow: ['warn', 'error']
            }
        ],
        camelcase: [
            'warn',
            {
                ignoreDestructuring: true,
                properties: 'never'
            }
        ],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false
            }
        ],
        'prefer-const': ['error'],
        'no-prototype-builtins': ['error']
    }
};
