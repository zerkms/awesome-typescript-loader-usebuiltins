module.exports = {
    mode: 'development',

    devtool: 'source-map',

    devServer: {
        inline: true,
    },

    entry: [
        './src/index.ts',
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'awesome-typescript-loader',
                ]
            }
        ]
    }
};
