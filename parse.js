'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

class ParsePlugin {
    apply(compiler) {
        compiler.plugin('compilation', function (compilation, data) {

            data.normalModuleFactory.plugin('parser', function (parser, options) {
                
                parser.plugin(`call $findme`, function (expr) {
                    console.log("found $findme!");
                });
            });
        });
    }
}

exports.default = ParsePlugin;