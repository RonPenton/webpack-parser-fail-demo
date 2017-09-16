var path = require('path');
var ParsePlugin = require('./parse');

module.exports = {
    entry: "./good.js",
    output: {
        filename: "good.js",
        path: path.join(__dirname, "./bin")
    },
    plugins: [
        new ParsePlugin.default()
    ],
};
