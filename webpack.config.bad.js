var path = require('path');
var ParsePlugin = require('./parse');

module.exports = {
    entry: "./bad.js",
    output: {
        filename: "bad.js",
        path: path.join(__dirname, "./bin")
    },
    plugins: [
        new ParsePlugin.default()
    ],
};
