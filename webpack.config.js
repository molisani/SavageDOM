'use strict';

module.exports = {
    context: __dirname, // to automatically find tsconfig.json
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
        filename: 'dist/savagedom.js',
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
                    transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', 'js' ]
    },
    plugins: [],
    externals: {
        rxjs: "Rx",
    },
};