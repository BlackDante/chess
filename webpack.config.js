module.exports = {
    resolve: {
        extensions: ['.es6.js', '.js', '']
    },

    entry: './app/media/javascript/main.es6.js',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                loader: 'babel?optional[]=runtime&stage=0'
            }
        ]
    }
};
