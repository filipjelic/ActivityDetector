var path = require('path');

module.exports = {
    mode: 'production',
    entry:  './src/ActivityDetector.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ActivityDetector.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
        // don't export React and other dependencies, use parent-project modules instead
        'react': 'commonjs react',
    },
}