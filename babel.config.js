module.exports = {
    presets: [
        '@babel/preset-env',
    ],
    plugins: [
        "@babel/plugin-transform-optional-catch-binding",
        "@babel/plugin-transform-nullish-coalescing-operator",
        "@babel/plugin-transform-private-property-in-object"
    ]
}
