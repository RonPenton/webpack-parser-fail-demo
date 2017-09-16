var path = require('path');
var ParsePlugin = require('./parse');

module.exports = {
    entry: "./bad2.js",
    output: {
        filename: "bad2.js",
        path: path.join(__dirname, "./bin")
    },
    plugins: [
        new ParsePlugin.default()
    ],
};
