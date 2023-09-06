module.exports = {
    presets: [
        '@babel/preset-env',
    ],
    plugins: [
        "@babel/plugin-transform-class-properties",
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        "@babel/plugin-transform-optional-catch-binding",
        "@babel/plugin-transform-nullish-coalescing-operator"
    ]
}
