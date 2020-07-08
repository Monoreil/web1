const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        second: "./src/second.js",
        third:"./src/third.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]_bundle.js"
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
      }
};