module.exports = {
    entry: "./harmony/src/iso-date-formatter.js",
    output: {
        path: "./harmony/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel?stage=0" }
        ]
    }
};
