const path = require('path');

const SOURCE_DIRECTORY = path.resolve(__dirname, 'src');
let saveTo = '';
if(process.env.NODE_ENV=='dev'){
    saveTo = 'dist';
} else{
    saveTo = 'extension';
}
const DISTRIBUTION_DIRECTORY = path.resolve(__dirname, saveTo);
const PUBLIC_PATH = '/';

module.exports = {
    devtool: "#inline-source-map",
    context: SOURCE_DIRECTORY,
    entry: './bootstrap.js',
    output: {
        filename: 'bundle.js',
        path: DISTRIBUTION_DIRECTORY,
        publicPath: PUBLIC_PATH
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: SOURCE_DIRECTORY,
                loader: "babel-loader",
                query: {
                    presets: [
                        "react",
                        "es2015",
                        'stage-2'
                    ]
                }
            }
        ]
    }
};