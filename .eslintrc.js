module.exports = {
    "env": {
        "browser": true
        , "commonjs": true
        , "es2021": true
    }
    , "extends": [
        "eslint:recommended"
        , "plugin:jsonc/recommended-with-jsonc"
    ]
    , "parserOptions": {
        "ecmaVersion": 12
    } 
    , "rules": {
        "jsonc/comma-style": [ "error"
            , "first" ]
        , "accessor-pairs": "error"
        , "array-bracket-newline": [ "error", "consistent" ]
        , "array-bracket-spacing": [ "error", "always" ]
        , "array-callback-return": "off"
        , "array-element-newline": [ "error", "consistent" ]
        , "arrow-body-style": "off"
        , "arrow-parens": "off"
        , "arrow-spacing": [
            "error"
            , {
                "after": true
                , "before": true
            }
        ]
        , "block-scoped-var": "error"
        , "block-spacing": "error"
        , "brace-style": [
            "error"
            , "1tbs"
        ]
        , "camelcase": "off"
        , "capitalized-comments": "off"
        , "class-methods-use-this": "error"
        , "comma-dangle": "error"
        , "comma-spacing": [
            "error"
            , {
                "after": true
                , "before": false
            }
        ]
        , "comma-style": [
            "error"
            , "first"
        ]
        , "complexity": "error"
        , "computed-property-spacing": [
            "error"
            , "always"
        ]
        , "consistent-return": "off"
        , "consistent-this": "error"
        , "curly": "off"
        , "default-case": "error"
        , "default-case-last": "error"
        , "default-param-last": "error"
        , "dot-location": "error"
        , "dot-notation": "error"
        , "eol-last": [
            "error"
            , "never"
        ]
        , "eqeqeq": "off"
        , "func-call-spacing": "error"
        , "func-name-matching": "error"
        , "func-names": "off"
        , "func-style": [
            "error"
            , "expression"
        ]
        , "function-paren-newline": "error"
        , "generator-star-spacing": "error"
        , "grouped-accessor-pairs": "error"
        , "guard-for-in": "error"
        , "id-denylist": "error"
        , "id-length": "off"
        , "id-match": "error"
        , "implicit-arrow-linebreak": "error"
        , "indent": "error"
        , "init-declarations": "off"
        , "jsx-quotes": "error"
        , "key-spacing": "off"
        , "keyword-spacing": "off"
        , "line-comment-position": "error"
        , "linebreak-style": [
            "error"
            , "unix"
        ]
        , "lines-around-comment": "error"
        , "lines-between-class-members": "error"
        , "max-classes-per-file": "error"
        , "max-depth": "off"
        , "max-len": "off"
        , "max-lines": "off"
        , "max-lines-per-function": "off"
        , "max-nested-callbacks": "error"
        , "max-params": "off"
        , "max-statements": "off"
        , "max-statements-per-line": "error"
        , "multiline-comment-style": [
            "error"
            , "separate-lines"
        ]
        , "new-cap": "error"
        , "new-parens": "error"
        , "newline-per-chained-call": "off"
        , "no-alert": "error"
        , "no-array-constructor": "error"
        , "no-await-in-loop": "off"
        , "no-bitwise": "error"
        , "no-caller": "error"
        , "no-confusing-arrow": "error"
        , "no-console": "off"
        , "no-constructor-return": "error"
        , "no-constant-condition": "off"
        , "no-continue": "error"
        , "no-div-regex": "error"
        , "no-duplicate-imports": "error"
        , "no-else-return": "error"
        , "no-empty-function": "off"
        , "no-eq-null": "error"
        , "no-eval": "error"
        , "no-extend-native": "error"
        , "no-extra-bind": "error"
        , "no-extra-label": "error"
        , "no-extra-parens": "error"
        , "no-floating-decimal": "error"
        , "no-implicit-coercion": "error"
        , "no-implicit-globals": "off"
        , "no-implied-eval": "error"
        , "no-inline-comments": "error"
        , "no-invalid-this": "error"
        , "no-iterator": "error"
        , "no-label-var": "error"
        , "no-labels": "error"
        , "no-lone-blocks": "error"
        , "no-lonely-if": "error"
        , "no-loop-func": "error"
        , "no-loss-of-precision": "error"
        , "no-magic-numbers": "off"
        , "no-mixed-operators": "off"
        , "no-multi-assign": "error"
        , "no-multi-spaces": "error"
        , "no-multi-str": "error"
        , "no-multiple-empty-lines": "error"
        , "no-negated-condition": "off"
        , "no-nested-ternary": "off"
        , "no-new": "error"
        , "no-new-func": "error"
        , "no-new-object": "error"
        , "no-new-wrappers": "off"
        , "no-nonoctal-decimal-escape": "error"
        , "no-octal-escape": "error"
        , "no-param-reassign": "error"
        , "no-plusplus": "off"
        , "no-promise-executor-return": "error"
        , "no-proto": "error"
        , "no-restricted-exports": "error"
        , "no-restricted-globals": "error"
        , "no-restricted-imports": "error"
        , "no-restricted-properties": "error"
        , "no-restricted-syntax": "error"
        , "no-return-assign": "off"
        , "no-return-await": "off"
        , "no-script-url": "error"
        , "no-self-compare": "error"
        , "no-sequences": "error"
        , "no-shadow": "error"
        , "no-tabs": "error"
        , "no-template-curly-in-string": "off"
        , "no-ternary": "off"
        , "no-throw-literal": "error"
        , "no-undef": "off"
        , "no-undef-init": "error"
        , "no-undefined": "off"
        , "no-underscore-dangle": "error"
        , "no-unmodified-loop-condition": "error"
        , "no-unneeded-ternary": "error"
        , "no-unreachable-loop": "error"
        , "no-unsafe-optional-chaining": "error"
        , "no-use-before-define": "off"
        , "no-useless-backreference": "error"
        , "no-useless-call": "error"
        , "no-useless-computed-key": "error"
        , "no-useless-concat": "error"
        , "no-useless-constructor": "error"
        , "no-useless-rename": "error"
        , "no-useless-return": "error"
        , "no-var": "error"
        , "no-void": "error"
        , "no-warning-comments": "error"
        , "no-whitespace-before-property": "error"
        , "nonblock-statement-body-position": "error"
        , "no-unused-vars": "off"
        , "object-curly-newline": "error"
        , "object-curly-spacing": [
            "error"
            , "always"
        ]
        , "object-shorthand": "error"
        , "one-var": "off"
        , "one-var-declaration-per-line": "error"
        , "operator-assignment": "error"
        , "operator-linebreak": "error"
        , "padded-blocks": "off"
        , "padding-line-between-statements": "error"
        , "prefer-arrow-callback": "error"
        , "prefer-const": "off"
        , "prefer-destructuring": "off"
        , "prefer-exponentiation-operator": "error"
        , "prefer-named-capture-group": "off"
        , "prefer-numeric-literals": "error"
        , "prefer-object-spread": "error"
        , "prefer-promise-reject-errors": "error"
        , "prefer-regex-literals": "error"
        , "prefer-rest-params": "error"
        , "prefer-spread": "error"
        , "prefer-template": "error"
        , "quote-props": "error"
        , "quotes": [
            "error"
            , "double"
        ]
        , "radix": "error"
        , "require-atomic-updates": "off"
        , "require-await": "off"
        , "require-unicode-regexp": "off"
        , "rest-spread-spacing": "error"
        , "semi": "off"
        , "semi-spacing": [ "error", { "before": true, "after": true } ]
        , "semi-style": [
            "error"
            , "last"
        ]
        , "sort-imports": "off"
        , "sort-keys": "off"
        , "sort-vars": "error"
        , "space-before-blocks": "error"
        , "space-before-function-paren": "error"
        , "space-in-parens": [
            "error"
            , "always"
        ]
        , "space-infix-ops": "error"
        , "spaced-comment": "off"
        , "strict": "off"
        , "switch-colon-spacing": [ "error", { "after": true, "before": true } ]
        , "symbol-description": "error"
        , "template-curly-spacing": [ "error", "always" ]
        , "template-tag-spacing": "error"
        , "unicode-bom": [
            "error"
            , "never"
        ]
        , "vars-on-top": "error"
        , "wrap-iife": "error"
        , "wrap-regex": "error"
        , "yield-star-spacing": "error"
        , "yoda": [
            "error"
            , "never"
        ]
        , "no-case-declarations" : "off"
        , "no-fallthrough" : "off"
    }
} ;