const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js"
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000
    }
}