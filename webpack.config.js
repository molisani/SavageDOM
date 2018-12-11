'use strict';

module.exports = {
    mode: "production",
    context: __dirname, // to automatically find tsconfig.json
    // devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
        filename: 'savagedom.js',
        library: 'SavageDOM',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', 'js' ]
    },
    plugins: [],
    externals: {
        rxjs: "rxjs",
        "rxjs/operators": {
            commonjs: ["rxjs", "operators"],
            commonjs2: ["rxjs", "operators"],
            root: ["rxjs", "operators"],
        },
        "d3-color": "d3",
        "d3-interpolate": "d3",
    },
};