module.exports = {
    presets: [
        "@babel/preset-env", "@babel/preset-typescript", "@babel/react"
    ],
    plugins: [
        ["@babel/transform-runtime"],
        [
            "module-resolver",
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                root: ["./src"],
                alias: {
                    app: "./src/app",
                    actions: "./src/actions",
                    components: "./src/components",
                    helpers: "./src/helpers",
                    services: "./src/services",
                    views: "./src/views"
                }
            }
        ]
    ]
}