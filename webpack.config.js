'use strict';

module.exports = {
    mode: "development",
    devtool: 'eval-source-map',
    // mode: "production",
    context: __dirname, // to automatically find tsconfig.json
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
                options: {
                    configFile: "configs/tsconfig.lib.json",
                },
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