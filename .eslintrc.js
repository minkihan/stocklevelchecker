module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "array-bracket-spacing": ["error", "always"],
        "block-spacing": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "space-in-parens": ["error", "always"],
        "comma-style": ["error", "last"],
        "comma-spacing": ["error", { before: false, after: true }],
        "key-spacing": [
            "error",
            {
                beforeColon: true,
                afterColon: true,
                mode: "minimum",
                align: "colon"
            }
        ],
        "semi-spacing": ["error", { before: true, after: false }],
        "no-console": "off",
        "no-undef": "off",
        "no-unused-vars" : "off"
    }
};
