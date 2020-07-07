const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
        second: "./src/second.js",
        third:"./src/third.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
}