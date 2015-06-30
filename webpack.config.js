var glob = require("glob");
entry: glob.sync("./test/**/*Spec.js")

module.exports = {
    entry: glob.sync("./harmony/src/*.js"),
    output: {
        filename: "./harmony/build/build.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel?stage=0" }
        ]
    }
}